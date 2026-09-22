const LESSON_PICTURES = {
  food:{url:'https://upload.wikimedia.org/wikipedia/commons/2/2c/Loaf_Of_Bread.jpg',alt:'A loaf of bread.',caption:'Picture prompt: ask for some bread.',source:'https://commons.wikimedia.org/wiki/File:Loaf_Of_Bread.jpg',credit:'congerdesign · CC0'},
  cafe:{url:'https://upload.wikimedia.org/wikipedia/commons/3/3a/Coffee_cup_seen_from_above.jpg',alt:'A cup of coffee viewed from above.',caption:'Picture prompt: order a drink politely.',source:'https://commons.wikimedia.org/wiki/File:Coffee_cup_seen_from_above.jpg',credit:'Pixel.la · CC0'},
  travel:{url:'https://upload.wikimedia.org/wikipedia/commons/0/02/Riomaggiore_train_station.jpg',alt:'Riomaggiore railway station in Italy.',caption:'Picture prompt: ask where the station is. Photo taken in Italy.',source:'https://commons.wikimedia.org/wiki/File:Riomaggiore_train_station.jpg',credit:'Tangopaso · public domain'}
};
function chapterName(index) {
  return index < 7 ? 'FIRST CONNECTIONS' : index < 14 ? 'PEOPLE & HOME' : index < 21 ? 'EVERYDAY LIFE' : 'OUT IN THE WORLD';
}
function listeningMarkup(d, l) {
  const dialogue = d.dialogue.map((line,i)=>`<p lang="${l}" style="text-align:${i%2?'right':'left'}">${esc(line)}</p>`).join('');
  return `<p>${d.listening?'Listen for the detail in the question. Try once without reading, then reveal the transcript if you need help.':'Listen once. Then play it again and repeat each line.'}</p>
    <button class="secondary" data-say="${esc(d.dialogue.join(' '))}" data-lang="${l}">♬ Play conversation</button>
    <details class="transcript" ${d.listening?'':'open'}><summary>Read the conversation</summary><div class="phrase">${dialogue}</div></details>
    ${d.listening?`<h3>${esc(d.listening.question)}</h3><div class="choices">${d.listening.options.map(answer=>`<button class="choice" data-listening-answer="${esc(answer)}">${esc(answer)}</button>`).join('')}</div><p id="listening-feedback" role="status">${listeningPassed?'You found the detail. Continue when ready.':'Choose the answer you heard.'}</p>`:''}
    <p class="muted">The dialogue uses your device’s ${COURSE[l].name} voice. Replay as often as you need.</p>
    ${d.checkpoint?`<details class="video-extension"><summary>Optional: practise with a free video</summary><p>${l==='fr'?'Choose an A1 video on TV5MONDE.':'Open the free DW beginner course and choose an A1 scene.'} Listen for one familiar phrase, replay with captions, then say a short reply aloud. The external lesson is optional and does not affect completion.</p><a href="${l==='fr'?'https://apprendre.tv5monde.com/en':'https://learngerman.dw.com/en/nicos-weg/c-36519789'}" target="_blank" rel="noopener">Open ${l==='fr'?'TV5MONDE':'DW Nicos Weg'} ↗</a></details>`:''}
    ${stageActions('Try remembering →',!!d.listening&&!listeningPassed)}`;
}
function writingMarkup(d,l) {
  if (!d.grammar) return '';
  // A separate phrase from the scenario question encourages a second recall attempt.
  const p = d.phrases.find(p=>p[0]!==d.answer) || d.phrases[0];
  return `<details class="writing-task"><summary>Extra practice: write a phrase</summary>
    <label for="write-phrase">Write in ${COURSE[l].name}: “${esc(p[1])}”</label>
    <input id="write-phrase" type="text" lang="${l}" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Try without looking at the model">
    <button class="secondary" data-action="check-writing">Check my writing</button>
    <p id="writing-feedback" role="status"></p><details><summary>Show the model</summary><p lang="${l}">${esc(p[0])}</p></details></details>`;
}
function lessonPicture(d) {
  const picture = typeof LESSON_PICTURES!=='undefined' && LESSON_PICTURES[d.imageKey];
  if (!picture || phraseIndex!==0) return '';
  return `<figure class="lesson-picture"><img src="${picture.url}" alt="${picture.alt}" loading="lazy" width="600" height="220"><figcaption>${picture.caption} <a href="${picture.source}" target="_blank" rel="noopener">${picture.credit}</a></figcaption></figure>`;
}
document.addEventListener('click', event=>{
  const button=event.target.closest('button');
  if (!button) return;
  if (button.dataset.listeningAnswer && step===1 && active.d.listening) {
    const correct = button.dataset.listeningAnswer === active.d.listening.answer;
    button.classList.add(correct?'correct':'wrong');
    $('#listening-feedback').textContent=correct?'That’s right. You picked out the important detail.':'Listen again, or open the transcript, then try another answer.';
    if (correct) {listeningPassed=true;document.querySelector('[data-action="next-stage"]').disabled=false;}
  }
  if (button.dataset.action==='check-writing' && step===2) {
    const phrase=active.d.phrases.find(p=>p[0]!==active.d.answer)||active.d.phrases[0];
    const typed=$('#write-phrase').value.trim();
    const feedback=$('#writing-feedback');
    if (!typed) {feedback.textContent='Write your answer first.';return;}
    const basic=t=>t.toLowerCase().replace(/[’']/g,"'").replace(/[.,!?]/g,'').replace(/\s+/g,' ').trim();
    if (basic(typed)===basic(phrase[0])) feedback.textContent='Your writing matches the model.';
    else if (matchesSpeech(phrase[0],typed,active.l)) feedback.textContent='The words are close. Check accents, word spacing, and spelling against the model: '+phrase[0];
    else feedback.textContent='Not quite. Compare your answer with the model, then try again: '+phrase[0];
  }
});
