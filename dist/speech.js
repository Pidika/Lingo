// Speech matching is a word check, not an acoustic pronunciation grade.
function normalizeSpeech(text, lang) {
  let value = text.toLocaleLowerCase(lang).normalize('NFD').replace(/\p{M}/gu, '').replace(/ß/g, 'ss');
  const numbers = lang === 'fr' ? ['zero','un','deux','trois','quatre','cinq'] : ['null','eins','zwei','drei','vier','funf'];
  value = value.replace(/\b[0-5]\b/g, n => numbers[Number(n)]);
  return value.replace(/[^\p{L}\p{N}]/gu, '');
}
function matchesSpeech(expected, heard, lang) {
  const target = normalizeSpeech(expected, lang);
  const actual = normalizeSpeech(heard, lang);
  return !!target && target === actual;
}
let speechCheck = null, speechTimer = null, speakingIndex = 0, speechPassed = new Set();
let speechGeneration = 0, playbackGeneration = 0, playbackTimer = null;
function cancelPlayback() {
  playbackGeneration++;
  clearTimeout(playbackTimer);
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
}
function playModel(text, lang, slow) {
  if (speechCheck) { notice('Finish your speaking check before playing the model.'); return; }
  if (!('speechSynthesis' in window)) { notice('Speech playback is unavailable in this browser.'); return; }
  cancelPlayback();
  const generation = playbackGeneration;
  const voices = speechSynthesis.getVoices();
  const voice = voices.find(v => v.lang.toLowerCase() === COURSE[lang].locale.toLowerCase()) || voices.find(v => v.lang.toLowerCase().startsWith(lang));
  if (voices.length && !voice) { notice('Install a '+COURSE[lang].name+' voice in your device settings to hear this phrase.'); return; }
  // Word pauses keep slow mode distinct even on voices that ignore rate changes.
  const parts = slow ? text.trim().split(/\s+/) : [text];
  let index = 0;
  const speakNext = () => {
    if (generation !== playbackGeneration || index >= parts.length) return;
    const utterance = new SpeechSynthesisUtterance(parts[index++]);
    utterance.lang = COURSE[lang].locale;
    if (voice) utterance.voice = voice;
    utterance.rate = slow ? 0.45 : 1;
    utterance.onend = () => { if (slow) playbackTimer = setTimeout(speakNext, 450); };
    utterance.onerror = e => { if (generation === playbackGeneration && !['interrupted','canceled'].includes(e.error)) notice('Audio could not play. Check your device voice settings.'); };
    window.currentModelUtterance = utterance;
    speechSynthesis.speak(utterance);
  };
  speakNext();
}
function resetSpeaking() { cancelSpeechCheck(); speakingIndex = 0; speechPassed = new Set(); }
function cancelSpeechCheck() {
  speechGeneration++;
  clearTimeout(speechTimer);
  const old = speechCheck;
  speechCheck = null;
  if (old) { old.onresult = old.onerror = old.onend = null; try { old.abort(); } catch {} }
}
function speakingMarkup(d, l) {
  const supported = !!(window.SpeechRecognition || window.webkitSpeechRecognition);
  const phrase = d.phrases[speakingIndex];
  return `<h3>Say the phrase, then check it</h3><p>Listen to the model. Tap “Check my speech” and say the exact phrase shown below.</p>
    <div class="phrase"><p class="eyebrow">SPEAKING ${speakingIndex+1} OF ${d.phrases.length} · ${speechPassed.size} CHECKED</p>
    <p class="target" lang="${l}">${esc(phrase[0])}</p><p>${esc(phrase[1])}</p>
    <div class="audio-row"><button class="secondary" data-say="${esc(phrase[0])}" data-lang="${l}">♬ Model voice</button><button class="secondary" data-say="${esc(phrase[0])}" data-lang="${l}" data-slow="true">Slow + pauses</button></div></div>
    <p class="muted">This compares recognised words with the model phrase, not your accent. Your browser may send audio to its speech service. Nothing is uploaded to Bonjour Hallo.</p>
    <button class="primary" data-action="check-speech" id="check-speech" ${supported?'':'disabled'}>Check my speech</button>
    <p id="speech-feedback" role="status" aria-live="polite">${supported?(speechPassed.has(speakingIndex)?'Phrase checked. You can move on or try again.':'Your result will appear here.'): 'Automatic checking is unavailable in this browser. Try a browser with speech recognition enabled, such as Safari on iPhone or Chrome on Android. You can practise here, but unchecked speech will not unlock completion.'}</p>
    <button class="secondary" data-action="next-speaking" ${speechPassed.has(speakingIndex)&&speakingIndex<d.phrases.length-1?'':'disabled'}>Next speaking phrase →</button>
    <details class="recording-panel"><summary>Record and compare by ear (optional)</summary><p>Listen to your recording, then play the model above. This separate recording stays on your device and does not count as an automatic check.</p><button class="secondary" data-action="record" id="record-button">● Record my voice</button><p id="record-status" role="status"></p><audio id="playback" controls hidden></audio></details>
    <p>After checking the phrases, try this without hints: ${esc(d.speak)}</p>
    ${stageActions('Complete lesson ✓',speechPassed.size !== d.phrases.length)}`;
}
function checkSpeech() {
  if (speechCheck) { speechCheck.stop(); return; }
  const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!Recognition || step !== 3) return;
  stopRecording();
  const generation = ++speechGeneration;
  const index = speakingIndex, languageAtStart = active.l, target = active.d.phrases[index][0];
  const recognition = new Recognition();
  speechCheck = recognition;
  recognition.lang = COURSE[languageAtStart].locale;
  recognition.interimResults = false;
  recognition.continuous = false;
  recognition.maxAlternatives = 3;
  let responded = false;
  const current = () => generation === speechGeneration && step === 3 && $('#lesson-dialog').open;
  const message = text => { if (current()) $('#speech-feedback').textContent = text; };
  recognition.onstart = () => { if (current()) { $('#check-speech').textContent = 'Stop and check'; message('Listening… say the phrase now.'); } };
  recognition.onresult = event => {
    if (!current()) return;
    responded = true;
    const result = event.results[event.resultIndex];
    const matchingResult = Array.from(result).find(r => matchesSpeech(target, r.transcript, languageAtStart));
    const heard = (matchingResult || result[0]).transcript;
    const matched = !!matchingResult;
    if (matched) speechPassed.add(index);
    message(matched ? `Words matched: “${heard}”. You can continue. This is not an accent score.` : `Heard: “${heard}”. Expected: “${target}”. Listen to the model and try again. Recognition can make mistakes.`);
    document.querySelector('[data-action="next-speaking"]').disabled = !speechPassed.has(index) || index === active.d.phrases.length-1;
    document.querySelector('[data-action="next-stage"]').disabled = speechPassed.size !== active.d.phrases.length;
  };
  recognition.onerror = event => {
    responded = true;
    const errors = {'not-allowed':'Microphone or speech access was denied. Allow it in browser settings, then retry.','service-not-allowed':'The browser speech service is unavailable. Try another supported browser.','no-speech':'No speech was detected. Move closer to the microphone and try again.','audio-capture':'No microphone was available. Check your microphone and retry.','network':'The speech service could not connect. Check your internet and retry.','language-not-supported':'This browser does not support recognition for this language.'};
    message(errors[event.error] || 'Speech checking stopped. Please try again.');
  };
  recognition.onend = () => {
    if (!current()) return;
    clearTimeout(speechTimer); speechCheck = null;
    $('#check-speech').textContent = 'Check my speech again';
    if (!responded) message('No result returned. Please try again. Your lesson has not been marked complete.');
  };
  try { recognition.start(); speechTimer = setTimeout(() => { if (current() && speechCheck) speechCheck.stop(); },15000); }
  catch { speechCheck = null; message('Speech checking could not start. Close other microphone apps and retry.'); }
}
document.addEventListener('click',event => {
  const action = event.target.closest('button')?.dataset.action;
  if (action === 'check-speech') checkSpeech();
  if (action === 'next-speaking' && speechPassed.has(speakingIndex) && speakingIndex < active.d.phrases.length-1) {
    stopRecording(); speakingIndex++; lessonRender();
  }
});
