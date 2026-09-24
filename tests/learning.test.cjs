const {test}=require('node:test');
const assert=require('node:assert/strict');
const vm=require('node:vm');
const fs=require('node:fs');
function app(storage=new Map()){
 const listeners={};
 const nodes=new Map(); const get=s=>{if(!nodes.has(s))nodes.set(s,{innerHTML:'',textContent:'',style:{},dataset:{},disabled:true,open:true,classList:{toggle(){},add(){}},addEventListener(){},showModal(){this.open=true},close(){this.open=false}});return nodes.get(s)};
 const utterances=[];const timers=[];
 class Recognition{start(){this.onstart?.()}stop(){this.onend?.()}abort(){}}
 const context=vm.createContext({console,URL,Blob,window:{SpeechRecognition:Recognition,speechSynthesis:{cancel(){},getVoices(){return [{lang:'fr-FR'},{lang:'de-DE'}]},speak(u){utterances.push(u)}}},document:{querySelector:get,querySelectorAll:()=>[],addEventListener(event,fn){(listeners[event]??=[]).push(fn)},documentElement:{classList:{toggle(){}}}},navigator:{},localStorage:{getItem(k){return storage.get(k)??null},setItem(k,v){storage.set(k,v)}},setTimeout(fn){timers.push(fn);return timers.length},clearTimeout(){},SpeechSynthesisUtterance:class{constructor(t){this.text=t}}});
 context.speechSynthesis=context.window.speechSynthesis;
 for(const name of ['lessons','hints','month-one','month-two','month-three','month-four','month-five','lesson-activities','speech','app'])vm.runInContext(fs.readFileSync('dist/'+name+'.js','utf8'),context);
 return {run:s=>vm.runInContext(s,context),get,utterances,timers,click(dataset){const button={dataset,classList:{add(){}}};listeners.click.forEach(fn=>fn({target:{closest:()=>button}}))}};
}
test('every course phrase has specific usage and sound hints',()=>{const a=app();assert.equal(a.run("Object.values(COURSE).every(c=>c.lessons.every(d=>d.phrases.every(p=>p.length===4&&p[2]&&p[3])))"),true);a.run("openLesson('fr',1)");let first=a.get('#lesson-body').innerHTML;a.run('phraseIndex=1;lessonRender()');let second=a.get('#lesson-body').innerHTML;assert.match(first,/Introduce yourself with/);assert.match(second,/Ask a friend or another child/);assert.doesNotMatch(second,/Enchanté and enchantée/);});
test('speech checks tolerate punctuation, accents and numeric transcription but reject missing/wrong words',()=>{const a=app();for(const [x,y,l]of [['Ça va ?','ca va','fr'],['Ich heiße Alex.','ich heisse Alex','de'],['trois','3','fr'],['fünf','5','de']])assert.equal(a.run(`matchesSpeech(${JSON.stringify(x)},${JSON.stringify(y)},'${l}')`),true);assert.equal(a.run("matchesSpeech('Comment tu t’appelles ?','Comment vous appelez vous','fr')"),false);assert.equal(a.run("matchesSpeech('Bonjour','Bonsoir','fr')"),false);assert.equal(a.run("matchesSpeech('Bonjour','','fr')"),false);});
test('wrong speech and service errors cannot complete a lesson; all phrases must pass',()=>{const a=app();a.run("openLesson('fr',0);step=3;lessonRender();finish()");assert.equal(a.run('state.done.fr.length'),0);a.run("checkSpeech();speechCheck.onresult({resultIndex:0,results:[[{transcript:'Bonsoir'}]]});speechCheck.onend()");assert.equal(a.run('speechPassed.size'),0);a.run("checkSpeech();speechCheck.onerror({error:'network'});speechCheck.onend()");assert.match(a.get('#speech-feedback').textContent,/could not connect/);assert.equal(a.run('speechPassed.size'),0);for(let i=0;i<4;i++)a.run(`speakingIndex=${i};lessonRender();checkSpeech();speechCheck.onresult({resultIndex:0,results:[[{transcript:active.d.phrases[${i}][0]}]]});speechCheck.onend()`);a.run('finish()');assert.equal(a.run('state.done.fr.length'),1);});
test('cancelled recognition result cannot pass another lesson',()=>{const a=app();a.run("openLesson('fr',0);step=3;lessonRender();checkSpeech();var oldResult=speechCheck.onresult;openLesson('de',0);oldResult({resultIndex:0,results:[[{transcript:'Bonjour'}]]})");assert.equal(a.run('speechPassed.size'),0);});
test('slow playback uses lower rate and word pauses; cancelling prevents queued words',()=>{const a=app();a.run("say('Bonjour Alex','fr',false)");assert.equal(a.utterances[0].rate,1);a.run("say('Bonjour Alex','fr',true)");assert.equal(a.utterances[1].rate,.45);assert.equal(a.utterances[1].text,'Bonjour');a.utterances[1].onend();assert.equal(a.utterances.length,2);a.timers.at(-1)();assert.equal(a.utterances[2].text,'Alex');a.run("say('Guten Tag','de',true)");a.utterances[3].onend();a.run('cancelPlayback()');a.timers.at(-1)();assert.equal(a.utterances.length,4);});
test('both courses contain 150 complete lessons with valid answers and thirty checkpoints',()=>{
 const a=app();
 for(const l of ['fr','de']){
  assert.equal(a.run(`COURSE.${l}.lessons.length`),150);
  assert.equal(a.run(`COURSE.${l}.lessons.filter(d=>d.checkpoint).length`),30);
  assert.equal(a.run(`COURSE.${l}.lessons.every(d=>d.options.includes(d.answer)&&d.phrases.length>=4&&d.dialogue.length>=2&&d.speak)`),true);
  assert.equal(a.run(`COURSE.${l}.lessons.slice(7).every(d=>d.grammar&&d.listening.options.includes(d.listening.answer)&&new Set(d.listening.options).size===d.listening.options.length)`),true);
  for(let i=0;i<150;i++)for(let step=0;step<4;step++)a.run(`openLesson('${l}',${i});step=${step};lessonRender()`);
 }
});
test('listening question gates advancement and resets for a different lesson',()=>{
 const a=app();a.run("openLesson('fr',7);step=1;lessonRender()");a.click({action:'next-stage'});assert.equal(a.run('step'),1);
 a.click({listeningAnswer:'Berlin'});assert.equal(a.run('listeningPassed'),false);
 a.click({listeningAnswer:'Lagos'});assert.equal(a.run('listeningPassed'),true);
 a.click({action:'next-stage'});assert.equal(a.run('step'),2);
 a.run("openLesson('de',7)");assert.equal(a.run('listeningPassed'),false);
});
test('writing feedback distinguishes a match, near spelling, and a wrong answer',()=>{
 const a=app();a.run("openLesson('fr',14);step=2;lessonRender()");
 a.get('#write-phrase').value='Je voudrais du pain.';a.click({action:'check-writing'});assert.match(a.get('#writing-feedback').textContent,/matches/);
 a.get('#write-phrase').value='Bonjour';a.click({action:'check-writing'});assert.match(a.get('#writing-feedback').textContent,/Not quite/);
});
test('extended number, clock, and currency transcriptions match spoken models',()=>{
 const a=app();for(const [x,y,l]of [['dix','10','fr'],['zehn','10','de'],['Il est huit heures.','Il est 8h','fr'],['Es ist acht Uhr.','Es ist 8:00 Uhr','de'],['Ça coûte cinq euros.','Ça coûte 5 €','fr']])assert.equal(a.run(`matchesSpeech(${JSON.stringify(x)},${JSON.stringify(y)},'${l}')`),true);
});
test('old seven-day backups and new day-sixty backups restore without dropping progress',async()=>{
 const a=app();for(const done of [[0,6],[0,6,14,29],[0,29,30,59]]){
  const backup=JSON.stringify({minutes:90,done:{fr:done,de:done},reviews:{},large:false});
  a.run(`var backupText=${JSON.stringify(backup)}`);
  await a.run("document.querySelector('#import').onchange({target:{files:[{text:async()=>backupText}]}})");
  assert.equal(a.run('state.done.fr.length'),done.length);assert.equal(a.run('state.done.fr.at(-1)'),done.at(-1));
 }
 a.run("state.done.fr=Array.from({length:150},(_,i)=>i);render()");assert.match(a.get('#main').innerHTML,/AVAILABLE LESSONS COMPLETE/);
});
test('new clock and number lessons accept numeric speech without accepting wrong times',()=>{
 const a=app();
 for(const [expected,heard,l] of [
  ['quinze','15','fr'],['vingt','20','fr'],['siebzehn','17','de'],['zwölf','12','de'],
  ['Il est huit heures et quart.','Il est 8h15.','fr'],
  ['Il est huit heures et demie.','Il est 8 heures 30.','fr'],
  ['Il est neuf heures moins le quart.','Il est 8:45.','fr'],
  ['Um halb neun.','Um 8:30 Uhr.','de'],
  ['Es ist Viertel nach acht.','Es ist 8:15 Uhr.','de'],
  ['Es ist Viertel vor neun.','Es ist 8:45 Uhr.','de']
 ])assert.equal(a.run(`matchesSpeech(${JSON.stringify(expected)},${JSON.stringify(heard)},'${l}')`),true,expected);
 for(const [expected,heard,l] of [['Um halb neun.','Um 9:30 Uhr.','de'],['Il est huit heures et quart.','Il est 8h45.','fr'],['quinze','16','fr']])assert.equal(a.run(`matchesSpeech(${JSON.stringify(expected)},${JSON.stringify(heard)},'${l}')`),false,expected);
});
test('finishing the first month opens day 31 and day 151 is unavailable',()=>{
 const a=app();a.run("state.done.fr=Array.from({length:30},(_,i)=>i);render()");assert.match(a.get('#main').innerHTML,/DAY 31/);assert.equal(a.run("next('fr')"),30);
 a.run("openLesson('de',59)");assert.equal(a.run('active.i'),59);
 a.run("openLesson('de',150)");assert.equal(a.run('active.i'),59);assert.match(a.get('#notice').textContent,/not available/);
});
test('day 60 requires the correct listening answer and all speaking checks',()=>{
 const a=app();a.run("openLesson('de',59);step=1;lessonRender()");
 a.click({listeningAnswer:'Friday at ten'});a.click({action:'next-stage'});assert.equal(a.run('step'),1);
 a.click({listeningAnswer:'Saturday at ten'});a.click({action:'next-stage'});assert.equal(a.run('step'),2);
 a.run('step=3;lessonRender();finish()');assert.equal(a.run('state.done.de.includes(59)'),false);
 for(let i=0;i<4;i++)a.run(`speakingIndex=${i};lessonRender();checkSpeech();speechCheck.onresult({resultIndex:0,results:[[{transcript:active.d.phrases[${i}][0]}]]});speechCheck.onend()`);
 a.run('finish()');assert.equal(a.run('state.done.de.includes(59)'),true);
});

test('reload resumes separate French and German lessons at their saved phrase',()=>{
 const storage=new Map();let a=app(storage);
 a.run("openLesson('fr',8)");a.click({action:'next-phrase'});a.click({action:'next-phrase'});
 a.run("openLesson('de',12)");a.click({action:'next-phrase'});
 a=app(storage);assert.match(a.get('#main').innerHTML,/Resume French lesson/);assert.match(a.get('#main').innerHTML,/Resume German lesson/);
 a.run("openLesson('fr',8)");assert.equal(a.run('phraseIndex'),2);
 a.run("openLesson('de',12)");assert.equal(a.run('phraseIndex'),1);
});
test('reload preserves successful listening, recall and speech checks without marking completion',()=>{
 const storage=new Map();let a=app(storage);a.run("openLesson('fr',7);step=1;lessonRender()");
 a.click({listeningAnswer:'Lagos'});a.click({action:'next-stage'});a.click({answer:a.run('active.d.answer')});a.click({action:'next-stage'});
 a.run("checkSpeech();speechCheck.onresult({resultIndex:0,results:[[{transcript:active.d.phrases[0][0]}]]});speechCheck.onend()");a.click({action:'next-speaking'});
 a=app(storage);a.run("openLesson('fr',7)");assert.equal(a.run('step'),3);assert.equal(a.run('speakingIndex'),1);assert.equal(a.run('speechPassed.has(0)'),true);assert.equal(a.run('passed&&listeningPassed'),true);
 a.run('finish()');assert.equal(a.run('state.done.fr.length'),0);
 a.click({action:'restart-lesson'});assert.equal(a.run('step'),0);assert.equal(a.run('speechPassed.size'),0);
});
test('completing a lesson clears its resume point and retains the other language',()=>{
 const a=app();a.run("openLesson('de',0);openLesson('fr',0);step=3;speechPassed=new Set(active.d.phrases.map((_,i)=>i));finish()");
 assert.equal(a.run("resumePoint('fr')"),null);assert.equal(a.run("resumePoint('de').lesson"),0);assert.equal(a.run('state.done.fr.includes(0)'),true);
});
test('invalid saved resume data is ignored and legacy backups remain usable',async()=>{
 const storage=new Map([['bh-progress',JSON.stringify({done:{fr:[],de:[]},resume:{fr:{lesson:900,step:8}}})]]);const a=app(storage);
 a.run("openLesson('fr',0)");assert.equal(a.run('step'),0);
 const backup={minutes:90,done:{fr:[0],de:[]},reviews:{},resume:{fr:{lesson:0,step:3,phraseIndex:0,speakingIndex:0,speechPassed:[900]}}};
 a.run(`var resumeBackup=${JSON.stringify(JSON.stringify(backup))}`);await a.run("document.querySelector('#import').onchange({target:{files:[{text:async()=>resumeBackup}]}})");assert.equal(a.run("resumePoint('fr')"),null);assert.equal(a.run('state.done.fr.length'),1);
});

test('third-month lessons have unique choices and preserve previous lesson IDs',()=>{
 const a=app();for(const l of ['fr','de']){
  assert.equal(a.run(`COURSE.${l}.lessons[60].title`),'Places in town');
  assert.equal(a.run(`COURSE.${l}.lessons[89].title`),'Checkpoint: a day around town');
  assert.equal(a.run(`COURSE.${l}.lessons.slice(60).every(d=>new Set(d.options).size===d.options.length&&d.phrases.every(p=>p.length===4&&p.every(Boolean)))`),true);
 }
 a.run("state.done.fr=Array.from({length:60},(_,i)=>i);render()");assert.match(a.get('#main').innerHTML,/DAY 61/);
});
test('day 90 preserves listening and speaking gates across reload',()=>{
 const storage=new Map();let a=app(storage);a.run("openLesson('de',89);step=1;lessonRender()");
 a.click({listeningAnswer:'A taxi'});a.click({action:'next-stage'});assert.equal(a.run('step'),1);
 a.click({listeningAnswer:'The bus'});a.click({action:'next-stage'});a.click({answer:a.run('active.d.answer')});a.click({action:'next-stage'});
 a=app(storage);a.run("openLesson('de',89);finish()");assert.equal(a.run('state.done.de.includes(89)'),false);
 for(let i=0;i<5;i++)a.run(`speakingIndex=${i};lessonRender();checkSpeech();speechCheck.onresult({resultIndex:0,results:[[{transcript:active.d.phrases[${i}][0]}]]});speechCheck.onend()`);
 a.run('finish()');assert.equal(a.run('state.done.de.includes(89)'),true);assert.equal(a.run("resumePoint('de')"),null);
});

test('fourth-month lessons are paired, fully populated and reachable after day 90',()=>{
 const a=app();
 for(const l of ['fr','de']){
  assert.equal(a.run(`COURSE.${l}.lessons[90].title`),'Tell me about your weekend');
  assert.equal(a.run(`COURSE.${l}.lessons[119].title`),'Checkpoint: stories become plans');
  assert.equal(a.run(`COURSE.${l}.lessons.slice(90).every(d=>new Set(d.options).size===d.options.length&&d.dialogue.length>=4&&d.phrases.every(p=>p.length===4&&p.every(v=>typeof v==='string'&&v.trim().length>0)))`),true);
 }
 assert.equal(a.run('COURSE.fr.lessons.slice(90).every((d,i)=>d.title===COURSE.de.lessons[i+90].title&&d.phrases.length===COURSE.de.lessons[i+90].phrases.length)'),true);
 assert.equal(a.run('COURSE.fr.lessons.slice(90,120).filter(d=>d.checkpoint).map(d=>COURSE.fr.lessons.indexOf(d)+1).join()'),'97,104,111,118,120');
 a.run("state.done.fr=Array.from({length:90},(_,i)=>i);render()");assert.match(a.get('#main').innerHTML,/DAY 91/);assert.match(a.get('#main').innerHTML,/All 150 days are available/);
});
test('day 120 requires listening, recall and every speaking phrase, including after reload',()=>{
 for(const l of ['fr','de']){
  const storage=new Map();let a=app(storage);a.run(`openLesson('${l}',119);step=1;lessonRender()`);
  a.click({listeningAnswer:'Go for a walk'});a.click({action:'next-stage'});assert.equal(a.run('step'),1);
  a.click({listeningAnswer:'Visit the museum'});a.click({action:'next-stage'});assert.equal(a.run('step'),2);
  a.click({answer:a.run('active.d.options.find(o=>o!==active.d.answer)')});a.click({action:'next-stage'});assert.equal(a.run('step'),2);
  a.click({answer:a.run('active.d.answer')});a.click({action:'next-stage'});
  a.run('checkSpeech();speechCheck.onresult({resultIndex:0,results:[[{transcript:active.d.phrases[0][0]}]]});speechCheck.onend()');a.click({action:'next-speaking'});
  a=app(storage);a.run(`openLesson('${l}',119);finish()`);assert.equal(a.run('speakingIndex'),1);assert.equal(a.run(`state.done.${l}.includes(119)`),false);
  for(let i=1;i<5;i++)a.run(`speakingIndex=${i};lessonRender();checkSpeech();speechCheck.onresult({resultIndex:0,results:[[{transcript:active.d.phrases[${i}][0]}]]});speechCheck.onend()`);
  a.run('finish()');assert.equal(a.run(`state.done.${l}.includes(119)`),true);assert.equal(a.run(`resumePoint('${l}')`),null);
 }
});
test('backups restore old progress alongside a new day-120 resume point',async()=>{
 const a=app();a.run("state.done.fr=[0,29,59,89];openLesson('de',119);phraseIndex=3;lessonRender();var expandedBackup=JSON.stringify(state)");
 const backup=a.run('expandedBackup');const restored=app();restored.run(`var expandedBackup=${JSON.stringify(backup)}`);
 await restored.run("document.querySelector('#import').onchange({target:{files:[{text:async()=>expandedBackup}]}})");
 assert.equal(restored.run('state.done.fr.join()'),'0,29,59,89');restored.run("openLesson('de',119)");assert.equal(restored.run('phraseIndex'),3);
});

test('the full 150-day course has no unavailable-day messages or inverted day ranges',()=>{
 const a=app();
 for(const l of ['fr','de']){
  assert.equal(a.run(`COURSE.${l}.lessons.length`),150);
  assert.equal(a.run(`COURSE.${l}.lessons[149].title`),'Day 150: keep the conversation going');
  assert.equal(a.run(`COURSE.${l}.lessons.slice(120).every(d=>new Set(d.options).size===d.options.length&&d.dialogue.length>=4&&d.phrases.every(p=>p.length===4&&p.every(Boolean)))`),true);
 }
 a.run("state.done.fr=Array.from({length:120},(_,i)=>i);render()");assert.match(a.get('#main').innerHTML,/DAY 121/);assert.doesNotMatch(a.get('#main').innerHTML,/151–150|still to come/);
 a.run("nav('journey')");assert.match(a.get('#main').innerHTML,/All 150 lessons are available/);assert.doesNotMatch(a.get('#main').innerHTML,/not available yet/);
});
test('day 150 preserves gates and resume, then celebrates only a fully completed course',()=>{
 for(const l of ['fr','de']){
  const storage=new Map();let a=app(storage);a.run(`state.done.${l}=Array.from({length:149},(_,i)=>i);openLesson('${l}',149);step=1;lessonRender()`);
  a.click({listeningAnswer:'Starting a new job'});a.click({action:'next-stage'});assert.equal(a.run('step'),1);
  a.click({listeningAnswer:'Visiting the museum'});a.click({action:'next-stage'});a.click({answer:a.run('active.d.answer')});a.click({action:'next-stage'});
  a.run('checkSpeech();speechCheck.onresult({resultIndex:0,results:[[{transcript:active.d.phrases[0][0]}]]});speechCheck.onend()');a.click({action:'next-speaking'});
  a=app(storage);a.run(`openLesson('${l}',149);finish()`);assert.equal(a.run('speakingIndex'),1);assert.equal(a.run(`state.done.${l}.length`),149);
  for(let i=1;i<6;i++)a.run(`speakingIndex=${i};lessonRender();checkSpeech();speechCheck.onresult({resultIndex:0,results:[[{transcript:active.d.phrases[${i}][0]}]]});speechCheck.onend()`);
  a.run('finish()');assert.equal(a.run(`state.done.${l}.length`),150);assert.equal(a.run(`resumePoint('${l}')`),null);assert.match(a.get('#lesson-body').innerHTML,/completed all 150/);assert.match(a.get('#lesson-body').innerHTML,/not certified fluency/);
  a=app(storage);assert.equal(a.run(`next('${l}')`),-1);assert.match(a.get('#main').innerHTML,/AVAILABLE LESSONS COMPLETE/);
 }
 const a=app();a.run("openLesson('fr',149);step=3;speechPassed=new Set([0,1,2,3,4,5]);finish()");assert.doesNotMatch(a.get('#lesson-body').innerHTML,/completed all 150/);assert.match(a.get('#lesson-body').innerHTML,/Day 150 complete/);
});
test('day-150 backups retain earlier completed lessons and the exact saved phrase',async()=>{
 const a=app();a.run("state.done.fr=[0,29,59,89,119];openLesson('de',149);phraseIndex=4;lessonRender()");
 const backup=a.run('JSON.stringify(state)');const restored=app();restored.run(`var finalBackup=${JSON.stringify(backup)}`);
 await restored.run("document.querySelector('#import').onchange({target:{files:[{text:async()=>finalBackup}]}})");
 assert.equal(restored.run('state.done.fr.join()'),'0,29,59,89,119');restored.run("openLesson('de',149)");assert.equal(restored.run('phraseIndex'),4);
});

test('adding the last two course blocks preserves all original 90 lesson records',()=>{
 const context=vm.createContext({});
 for(const name of ['lessons','hints','month-one','month-two','month-three'])vm.runInContext(fs.readFileSync('dist/'+name+'.js','utf8'),context);
 const before=JSON.parse(vm.runInContext('JSON.stringify(COURSE)',context));
 for(const name of ['month-four','month-five'])vm.runInContext(fs.readFileSync('dist/'+name+'.js','utf8'),context);
 const after=JSON.parse(vm.runInContext('JSON.stringify(COURSE)',context));
 for(const l of ['fr','de'])assert.deepEqual(after[l].lessons.slice(0,90),before[l].lessons);
});
