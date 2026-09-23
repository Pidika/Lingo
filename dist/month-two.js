// Days 31–60: original, paired everyday-language lessons.
// Phrases keep their own meaning, usage hint, and pronunciation guidance.
function addEverydayPair(title, goal, grammar, rows, dialogue, listening, task, answerIndex, speak, imageKey='') {
  for (const [i,lang] of ['fr','de'].entries()) {
    addMonthLesson(lang,title,goal,grammar[i],rows[i],dialogue[i],listening,task,answerIndex,speak,imageKey);
    const lesson=COURSE[lang].lessons.at(-1);
    lesson.checkpoint=false;
    const shift=(COURSE[lang].lessons.length-1)%lesson.listening.options.length;
    lesson.listening.options=lesson.listening.options.slice(shift).concat(lesson.listening.options.slice(0,shift));
  }
}
function addEverydayCheckpoint(title, selections, dialogue, listening, task, answerIndex, speak, imageKey='') {
  const rows=['fr','de'].map(lang=>selections.map(([day,phrase])=>COURSE[lang].lessons[day-1].phrases[phrase].join('|')).join('\n'));
  addEverydayPair(title,'Combine familiar phrases in an everyday conversation.',[
    'Review the phrases, then use them without reading. Change one detail on your second attempt.',
    'Review the phrases, then use them without reading. Change one detail on your second attempt.'
  ],rows,dialogue,listening,task,answerIndex,speak,imageKey);
  for(const lang of ['fr','de'])COURSE[lang].lessons.at(-1).checkpoint=true;
}
// 31
addEverydayPair('How much would you like?','Ask for a quantity at a food stall.',[
  'After a quantity, use de: un kilo de pommes. De becomes d’ before a vowel sound.',
  'After a quantity, name the product: ein Kilo Äpfel. Kilo usually stays unchanged after a number.'
],[`
Un kilo de pommes, s’il vous plaît.|A kilo of apples, please.|Name the quantity before the food.|The final s in pommes is silent.
Un demi-kilo, s’il vous plaît.|Half a kilo, please.|Use demi-kilo when a full kilo is too much.|Demi has two short syllables.
Deux kilos de riz, s’il vous plaît.|Two kilos of rice, please.|Use deux for a quantity of two.|The final z in riz is silent.
C’est assez, merci.|That is enough, thank you.|Tell the seller to stop adding more.|The t in c’est links to assez.`, `
Ein Kilo Äpfel, bitte.|A kilo of apples, please.|Name the quantity before the food.|The ä in Äpfel is an open vowel.
Ein halbes Kilo, bitte.|Half a kilo, please.|Use halbes with the neuter noun Kilo.|The b in halbes is a b sound before the vowel.
Zwei Kilo Reis, bitte.|Two kilos of rice, please.|Use zwei for a quantity of two.|The z in zwei sounds like ts.
Das reicht, danke.|That is enough, thank you.|Tell the seller to stop adding more.|The ei in reicht sounds like eye.`
],['Un kilo de pommes ?|Un demi-kilo, s’il vous plaît.|Comme ça ?|Oui, c’est assez, merci.', 'Ein Kilo Äpfel?|Ein halbes Kilo, bitte.|So?|Ja, das reicht, danke.'],
['How much does the customer choose?','Half a kilo','One kilo','Two kilos'],'Tell the seller that the quantity is enough.',3,'Order a quantity, change it to half a kilo, and tell the seller when it is enough.','food');
// 32
addEverydayPair('Fruit and vegetables','Ask for produce and check availability.',[
  'Vous avez…? is a polite everyday way to ask whether a shop has something. Des introduces plural items.',
  'Haben Sie…? asks whether a shop has something. After ich nehme, use die with these plural nouns.'
],[`
Vous avez des tomates ?|Do you have tomatoes?|Ask whether tomatoes are available.|The final s in tomates is silent.
Je prends des carottes.|I’ll take some carrots.|Use je prends when making your choice.|The final t sound in carottes is pronounced.
Je voudrais des bananes.|I would like some bananas.|Use des for an unspecified number of bananas.|The final e and s in bananes are silent.
Ces pommes sont bonnes.|These apples are good.|Use ces to refer to these apples.|The final s in bonnes is silent; pronounce the n.`, `
Haben Sie Tomaten?|Do you have tomatoes?|Ask whether tomatoes are available.|Stress the second syllable of Tomaten.
Ich nehme die Karotten.|I’ll take the carrots.|Use nehme when making your choice.|The o in Karotten is short.
Ich möchte Bananen.|I would like bananas.|Ask politely for bananas.|Stress the middle syllable of Bananen.
Diese Äpfel sind gut.|These apples are good.|Use diese to refer to these apples.|Äpfel starts with an open ä vowel.`
],['Vous avez des tomates ?|Non, mais nous avons des carottes.|Je prends des carottes.|Très bien.', 'Haben Sie Tomaten?|Nein, aber wir haben Karotten.|Ich nehme die Karotten.|Sehr gut.'],
['What does the customer decide to buy?','Carrots','Tomatoes','Bananas'],'Ask whether tomatoes are available.',0,'Ask for one vegetable, choose another if it is unavailable, and comment on some apples.','food');
// 33
addEverydayPair('When is the shop open?','Ask about opening and closing times.',[
  'À quelle heure asks at what time. Ouvert means open; fermé means closed.',
  'Wann asks when. Öffnen means to open; schließen means to close.'
],[`
À quelle heure vous ouvrez ?|What time do you open? (polite)|Ask about the opening time.|The s in vous links to ouvrez with a z sound.
À quelle heure vous fermez ?|What time do you close? (polite)|Ask about the closing time.|The ending -ez in fermez sounds like é.
Le magasin ouvre à neuf heures.|The shop opens at nine o’clock.|Give the opening time of a shop.|The f in neuf sounds like v before heures.
C’est fermé aujourd’hui.|It is closed today.|Use this when the shop is not open today.|Fermé ends with a clear é sound.`, `
Wann öffnen Sie?|When do you open? (polite)|Ask about the opening time.|Round your lips for ö in öffnen.
Wann schließen Sie?|When do you close? (polite)|Ask about the closing time.|Sch sounds like sh; ie is a long vowel.
Das Geschäft öffnet um neun Uhr.|The shop opens at nine o’clock.|Use um before a clock time.|The ä in Geschäft is short.
Heute ist geschlossen.|It is closed today.|Use this when a shop is closed today.|The o in geschlossen is short.`
],['À quelle heure vous ouvrez ?|Le magasin ouvre à neuf heures.|Et aujourd’hui ?|C’est fermé aujourd’hui.', 'Wann öffnen Sie?|Das Geschäft öffnet um neun Uhr.|Und heute?|Heute ist geschlossen.'],
['Can the customer shop there today?','No, it is closed','Yes, it is open now','Only at eight'],'Ask what time the shop closes.',1,'Ask for opening and closing times, then explain that the shop is closed today.');
// 34
addEverydayPair('Eleven to twenty','Recognise the next ten numbers.',[
  'French has special words for eleven to sixteen. Seventeen to nineteen begin with dix.',
  'German has special forms elf and zwölf. Thirteen to nineteen usually end with -zehn.'
],[`
onze|eleven|Use this for a count of eleven.|Pronounce the z sound in onze.
douze|twelve|Use this for a count of twelve.|Ou sounds like oo.
treize|thirteen|Use this for a count of thirteen.|The final sound is z.
quatorze|fourteen|Use this for a count of fourteen.|Qu starts with a k sound.
quinze|fifteen|Use this for a count of fifteen.|The vowel is nasal; pronounce the z sound.
seize|sixteen|Use this for a count of sixteen.|The final sound is z.
dix-sept|seventeen|Combine dix and sept for seventeen.|The x is pronounced like s here.
dix-huit|eighteen|Combine dix and huit for eighteen.|The x links to huit with a z sound.
dix-neuf|nineteen|Combine dix and neuf for nineteen.|The x in this number sounds like z.
vingt|twenty|Use this for a count of twenty.|On its own, the final gt is silent.`, `
elf|eleven|Use this for a count of eleven.|Pronounce the final f.
zwölf|twelve|Use this for a count of twelve.|Round your lips for ö.
dreizehn|thirteen|Combine drei and zehn for thirteen.|The z sounds like ts.
vierzehn|fourteen|Combine vier and zehn for fourteen.|The v sounds like f.
fünfzehn|fifteen|Combine fünf and zehn for fifteen.|Keep the ü rounded.
sechzehn|sixteen|The form is sechzehn, not sechszehn.|Listen to the ch before zehn.
siebzehn|seventeen|The form is siebzehn, not siebenzehn.|The b before z sounds like p.
achtzehn|eighteen|Combine acht and zehn for eighteen.|Keep acht and zehn close together.
neunzehn|nineteen|Combine neun and zehn for nineteen.|Eu sounds like oy.
zwanzig|twenty|Use this for a count of twenty.|The opening z sounds like ts.`
],['Douze ou quinze ?|Quinze.|Pas seize ?|Non, quinze.', 'Zwölf oder fünfzehn?|Fünfzehn.|Nicht sechzehn?|Nein, fünfzehn.'],
['Which number is confirmed?','Fifteen','Twelve','Sixteen'],'Choose the word for twenty.',9,'Count eleven to twenty, then say twenty, fifteen, and twelve without reading. Split the practice into two groups of five if needed.');
// 35
addEverydayCheckpoint('Checkpoint: a shopping trip',[[32,0],[31,1],[18,0],[18,2]],
['Bonjour ! Vous avez des tomates ?|Oui. Un kilo ?|Un demi-kilo, s’il vous plaît. Ça coûte combien ?|Deux euros.|Je paie par carte. Merci !', 'Guten Tag! Haben Sie Tomaten?|Ja. Ein Kilo?|Ein halbes Kilo, bitte. Wie viel kostet das?|Zwei Euro.|Ich zahle mit Karte. Danke!'],
['How will the customer pay?','By card','In cash','They will not buy anything'],'Ask for half a kilo.',1,'Act out a market visit: check availability, choose a quantity, ask the price, and pay. Repeat with another food and payment method.','food');
// 36
addEverydayPair('Shopping for clothes','Ask for clothing and try it on.',[
  'Je cherche means I am looking for. Un and une depend on the clothing noun: un pantalon, une chemise.',
  'Ich suche means I am looking for. Ein Hemd is neuter; eine Hose is feminine.'
],[`
Je cherche une chemise.|I am looking for a shirt.|Tell a shop assistant what you need.|Ch in chemise sounds like sh.
Je cherche un pantalon.|I am looking for trousers.|Pantalon is singular in French.|The final on is nasal.
Je peux l’essayer ?|Can I try it on?|Ask before trying on an item.|Essayer contains a y-like sound.
Où sont les cabines ?|Where are the changing rooms?|Ask where to try on clothes.|The final s in cabines is silent.`, `
Ich suche ein Hemd.|I am looking for a shirt.|Tell an assistant what you need.|The final d in Hemd sounds like t.
Ich suche eine Hose.|I am looking for trousers.|Hose is singular in German.|The s in Hose sounds like z.
Kann ich das anprobieren?|Can I try it on?|Ask before trying on an item.|Stress bier in anprobieren.
Wo sind die Umkleidekabinen?|Where are the changing rooms?|Ask where to try on clothes.|Practise the long word in parts: Umkleide and Kabinen.`
],['Je cherche une chemise.|Voici une chemise.|Je peux l’essayer ?|Oui, les cabines sont à droite.', 'Ich suche ein Hemd.|Hier ist ein Hemd.|Kann ich das anprobieren?|Ja, die Umkleidekabinen sind rechts.'],
['Where are the changing rooms?','On the right','On the left','Upstairs'],'Ask to try an item on.',2,'Ask for a shirt or trousers, ask to try it on, then ask where the changing rooms are.');
// 37
addEverydayPair('Choosing a colour','Describe and choose a colour.',[
  'After c’est, use the simple adjective form. With a noun, French colour adjectives may change to agree with it.',
  'After das ist, the colour adjective has no ending: rot, blau, grün, schwarz.'
],[`
C’est rouge.|It is red.|Identify the colour red.|The g in rouge sounds like the s in measure.
C’est bleu.|It is blue.|Identify the colour blue.|Bleu ends in a rounded vowel.
C’est vert.|It is green.|Identify the colour green.|The final t is silent.
Je préfère le noir.|I prefer black.|Say which colour you prefer.|Oi in noir sounds like wa.`, `
Das ist rot.|It is red.|Identify the colour red.|Rot has a long o.
Das ist blau.|It is blue.|Identify the colour blue.|Au sounds like ow in now.
Das ist grün.|It is green.|Identify the colour green.|Round your lips for ü.
Ich mag Schwarz lieber.|I prefer black.|Use lieber to show a preference.|Schw begins with sh followed by v.`
],['C’est bleu ?|Non, c’est vert.|Vous aimez le vert ?|Je préfère le noir.', 'Ist das blau?|Nein, das ist grün.|Mögen Sie Grün?|Ich mag Schwarz lieber.'],
['Which colour does the final speaker prefer?','Black','Green','Blue'],'Say that an object is blue.',1,'Name the colours of three objects near you. Then say which colour you prefer.');
// 38
addEverydayPair('Does it fit?','Explain a size problem and ask for another size.',[
  'Trop means too. Plus grand means bigger; plus petit means smaller. These model phrases refer to an item in general.',
  'Zu means too before an adjective. Größer means bigger; kleiner means smaller.'
],[`
C’est trop grand.|It is too big.|Explain why an item does not fit.|The final d in grand is silent.
C’est trop petit.|It is too small.|Explain a size problem.|The final t in petit is silent.
Vous avez plus grand ?|Do you have a larger size?|Ask for a larger version.|The s in plus is silent before grand here.
Ça me va.|It fits me.|Say that the fit is right.|Say the three short words smoothly.`, `
Das ist zu groß.|It is too big.|Explain why an item does not fit.|The ß sounds like ss.
Das ist zu klein.|It is too small.|Explain a size problem.|Ei in klein sounds like eye.
Haben Sie das größer?|Do you have this in a larger size?|Ask for a larger version.|Round your lips for ö in größer.
Das passt mir.|It fits me.|Say that the fit is right.|The a in passt is short.`
],['Ça vous va ?|C’est trop petit. Vous avez plus grand ?|Oui, voici.|Merci. Ça me va.', 'Passt das?|Das ist zu klein. Haben Sie das größer?|Ja, hier.|Danke. Das passt mir.'],
['What is wrong with the first item?','It is too small','It is too big','It is the wrong colour'],'Say that an item fits you.',3,'Try an imaginary item on, explain a size problem, ask for another size, and say whether it fits.');
// 39
addEverydayPair('Comparing two choices','Compare prices and make a choice.',[
  'Plus means more and moins means less. Cher describes something expensive; moins cher means cheaper.',
  'Teurer means more expensive and billiger means cheaper. Diesen is used here for a masculine item such as a coat.'
],[`
C’est plus cher.|It is more expensive.|Compare one item with another.|Cher has one syllable and begins with sh.
C’est moins cher.|It is cheaper.|Use this when an item costs less.|Moins has a nasal vowel and a silent final s.
Je préfère celui-ci.|I prefer this one.|Use celui-ci for a masculine item.|Listen to the three vowel sounds in celui-ci.
Je vais réfléchir.|I will think about it.|Use this if you are not ready to decide.|The final r in réfléchir is pronounced.`, `
Das ist teurer.|It is more expensive.|Compare one item with another.|Eu in teurer sounds like oy.
Das ist billiger.|It is cheaper.|Use this when an item costs less.|The i in billig is short.
Ich nehme diesen.|I’ll take this one.|Use diesen for a masculine item, such as a coat.|Ie makes a long ee sound.
Ich überlege noch.|I’m still thinking about it.|Use this when you have not decided.|Round your lips for ü in überlege.`
],['Celui-ci coûte dix euros. Celui-là coûte quinze euros.|Celui-ci est moins cher.|Oui.|Je préfère celui-ci.', 'Dieser kostet zehn Euro. Der andere kostet fünfzehn Euro.|Dieser ist billiger.|Ja.|Ich nehme diesen.'],
['Which item does the customer choose?','The ten-euro item','The fifteen-euro item','Neither item'],'Say that an item is cheaper.',1,'Compare two imaginary items with different prices. Choose one or say you need time to think.');
// 40
addEverydayPair('Days of the week','Name weekdays and arrange a day.',[
  'French weekdays use lower-case letters. Lundi can mean on Monday; le lundi can describe something every Monday.',
  'German weekdays are capitalised. Use am before a weekday: am Montag.'
],[`
lundi|Monday|Use this to name Monday.|The final di sounds like dee.
mardi|Tuesday|Use this to name Tuesday.|Pronounce the r gently.
mercredi|Wednesday|Use this to name Wednesday.|Practise mer-cre-di in three parts.
jeudi|Thursday|Use this to name Thursday.|Jeu has a rounded vowel.
vendredi|Friday|Use this to name Friday.|The first vowel is nasal.
samedi|Saturday|Use this to name Saturday.|The middle e may be light in everyday speech.
dimanche|Sunday|Use this to name Sunday.|Ch sounds like sh.`, `
Montag|Monday|Use this to name Monday.|The final g sounds like k.
Dienstag|Tuesday|Use this to name Tuesday.|Ie makes a long ee sound.
Mittwoch|Wednesday|Use this to name Wednesday.|The ch is the deeper German ch sound.
Donnerstag|Thursday|Use this to name Thursday.|The o is short.
Freitag|Friday|Use this to name Friday.|Ei sounds like eye.
Samstag|Saturday|Use this to name Saturday.|The first a is short.
Sonntag|Sunday|Use this to name Sunday.|The double n follows a short vowel.`
],['Lundi ou mardi ?|Mardi.|À neuf heures ?|Oui, à mardi !', 'Montag oder Dienstag?|Dienstag.|Um neun Uhr?|Ja, bis Dienstag!'],
['Which day do they choose?','Tuesday','Monday','Friday'],'Choose the word for Friday.',4,'Say the days in order. Then suggest two possible days for a meeting and choose one.');
// 41
addEverydayPair('Making an appointment','Ask for an appointment and confirm a time.',[
  'Un rendez-vous is an appointment. Use pour with the day when asking for a booking.',
  'Einen Termin is used after ich möchte. Am introduces a weekday and um introduces a time.'
],[`
Je voudrais un rendez-vous.|I would like an appointment.|Begin a booking request politely.|The final s in rendez-vous is silent.
Vous avez une place mardi ?|Do you have an opening on Tuesday?|Ask whether a time is available.|The s in vous links to avez.
Mardi à dix heures, c’est possible ?|Is Tuesday at ten o’clock possible?|Suggest a specific day and time.|The x in dix links to heures with a z sound.
Je confirme le rendez-vous.|I confirm the appointment.|Confirm the arrangement after checking it.|The final e in confirme is not a separate syllable.`, `
Ich möchte einen Termin.|I would like an appointment.|Begin a booking request politely.|Stress the last syllable of Termin.
Haben Sie am Dienstag etwas frei?|Do you have anything available on Tuesday?|Ask whether a time is available.|Ei in frei sounds like eye.
Geht Dienstag um zehn Uhr?|Does Tuesday at ten o’clock work?|Suggest a day and time.|The h in zehn lengthens the vowel.
Ich bestätige den Termin.|I confirm the appointment.|Confirm the arrangement after checking it.|The ä in bestätige is a clear vowel.`,
],['Je voudrais un rendez-vous. Vous avez une place mardi ?|Oui, à dix heures.|Mardi à dix heures, c’est possible ?|Oui.|Merci, je confirme le rendez-vous.', 'Ich möchte einen Termin. Haben Sie am Dienstag etwas frei?|Ja, um zehn Uhr.|Geht Dienstag um zehn Uhr?|Ja.|Danke, ich bestätige den Termin.'],
['When is the appointment?','Tuesday at ten','Monday at ten','Tuesday at nine'],'Confirm the appointment.',3,'Ask for an appointment, suggest a day and time, repeat the details, and confirm.');
// 42
addEverydayCheckpoint('Checkpoint: plan a shopping day',[[33,0],[36,0],[38,1],[41,2]],
['À quelle heure vous ouvrez ?|À neuf heures.|Je cherche une chemise. Je peux venir mardi à dix heures ?|Oui.|Merci, à mardi !', 'Wann öffnen Sie?|Um neun Uhr.|Ich suche ein Hemd. Kann ich am Dienstag um zehn Uhr kommen?|Ja.|Danke, bis Dienstag!'],
['What time will the customer visit?','Ten o’clock','Nine o’clock','Eight o’clock'],'Suggest Tuesday at ten o’clock.',3,'Call a shop, ask its opening time, explain what clothing you need, and arrange when to visit. Then act out trying on something too small.');
// 43
addEverydayPair('Half past and quarter past','Understand more precise times.',[
  'Et quart means quarter past and et demie means half past. Moins le quart means a quarter before the next hour.',
  'Viertel nach is quarter past. Halb neun means half an hour before nine: 8:30, not 9:30.'
],[`
Il est huit heures et quart.|It is quarter past eight.|Use et quart for fifteen minutes after the hour.|The final t in quart is silent.
Il est huit heures et demie.|It is half past eight.|Use et demie for thirty minutes after the hour.|Demie sounds the same as demi.
Il est neuf heures moins le quart.|It is quarter to nine.|Use the upcoming hour with moins le quart.|The final s in moins is silent.
À huit heures et demie.|At half past eight.|Use à to give the time of an activity.|Link huit and heures with the t sound.`, `
Es ist Viertel nach acht.|It is quarter past eight.|Nach means after in this time expression.|The v in Viertel sounds like f.
Es ist halb neun.|It is half past eight.|Halb neun is thirty minutes before nine.|The final b in halb sounds like p.
Es ist Viertel vor neun.|It is quarter to nine.|Vor means before in this time expression.|The v in vor sounds like f.
Um halb neun.|At half past eight.|Use um to give the time of an activity.|Keep halb and neun as two clear words.`
],['On se retrouve à huit heures et quart ?|Non, à huit heures et demie.|D’accord, à huit heures et demie.|À bientôt !', 'Treffen wir uns um Viertel nach acht?|Nein, um halb neun.|Gut, um halb neun.|Bis bald!'],
['What time do they agree on?','8:30','8:15','9:30'],'Say that it is quarter to nine.',2,'Read three imaginary clock faces, then arrange to meet at half past eight. In German, explain to yourself why halb neun means 8:30.');
// 44
addEverydayPair('From morning to night','Describe getting up and going to bed.',[
  'Je me lève and je me couche use me because the action refers back to the speaker. Je prends means I take.',
  'Aufstehen is separable: ich stehe … auf. The small part auf moves to the end of this statement.'
],[`
Je me lève à sept heures.|I get up at seven o’clock.|Use me lève for getting out of bed.|The è in lève is an open vowel.
Je prends le petit déjeuner.|I have breakfast.|Use prendre for having breakfast.|The eu in déjeuner is rounded.
Je commence à huit heures.|I start at eight o’clock.|Say when work or another activity begins.|The first vowel in commence is nasal.
Je me couche à dix heures.|I go to bed at ten o’clock.|Use me couche for going to bed.|The ch in couche sounds like sh.`, `
Ich stehe um sieben Uhr auf.|I get up at seven o’clock.|Keep auf at the end of the sentence.|St at the start of stehe sounds like sht.
Ich frühstücke.|I have breakfast.|Frühstücken means to eat breakfast.|Round your lips for both ü sounds.
Ich fange um acht Uhr an.|I start at eight o’clock.|Anfangen separates: fange … an.|The ng in fange is one sound.
Ich gehe um zehn Uhr ins Bett.|I go to bed at ten o’clock.|Ins Bett means into bed in this phrase.|The e in Bett is short.`
],['Je me lève à sept heures.|Et vous commencez à quelle heure ?|Je commence à huit heures.|D’accord.', 'Ich stehe um sieben Uhr auf.|Und wann fangen Sie an?|Ich fange um acht Uhr an.|Gut.'],
['When does the speaker start?','At eight','At seven','At ten'],'Say that you go to bed at ten.',3,'Describe waking up, breakfast, starting an activity, and going to bed. Repeat with your own times after the model checks.');
// 45
addEverydayPair('How often?','Describe how regularly you do something.',[
  'Souvent means often. Ne … jamais means never. Tous les jours means every day.',
  'Oft means often and nie means never. Jeden Tag means every day in these sentences.'
],[`
Je marche tous les jours.|I walk every day.|Use tous les jours for a daily habit.|The final s in tous is silent here.
Je lis souvent.|I often read.|Put souvent after the verb in this sentence.|The final t in souvent is silent.
Je cuisine parfois.|I sometimes cook.|Use parfois for something you do occasionally.|The final s in parfois is silent.
Je ne bois jamais de café.|I never drink coffee.|Use de after this negative expression.|The final s in bois is silent.`, `
Ich gehe jeden Tag spazieren.|I go for a walk every day.|Use jeden Tag for a daily habit.|J in jeden sounds like English y.
Ich lese oft.|I often read.|Use oft for a frequent activity.|Pronounce the final ft in oft.
Ich koche manchmal.|I sometimes cook.|Use manchmal for an occasional activity.|Ch in koche is the deeper ch sound.
Ich trinke nie Kaffee.|I never drink coffee.|Use nie for something you never do.|Ie in nie is a long ee sound.`
],['Vous lisez souvent ?|Oui, je lis souvent. Et vous ?|Je cuisine parfois.|Moi aussi.', 'Lesen Sie oft?|Ja, ich lese oft. Und Sie?|Ich koche manchmal.|Ich auch.'],
['How often does the final speaker cook?','Sometimes','Every day','Never'],'Say that you never drink coffee.',3,'Describe one daily habit, one frequent activity, one occasional activity, and something you never do.');
// 46
addEverydayPair('Helping at home','Describe simple household tasks.',[
  'Je fais can introduce a task such as la vaisselle. Nous means we; nous faisons means we do.',
  'Wir means we. Aufräumen is separable: ich räume … auf. Keep the final part at the end.'
],[`
Je fais la vaisselle.|I wash the dishes.|Use faire la vaisselle for washing dishes.|The double s in vaisselle sounds like s.
Je range ma chambre.|I tidy my room.|Use ranger for putting things in order.|The g in range has the sound in measure.
Je prépare le dîner.|I prepare dinner.|Use préparer for getting a meal ready.|The î in dîner has an ee sound.
Nous faisons les courses.|We do the shopping.|Use this for household or grocery shopping.|Faisons begins with a light vowel sound: fe-zon.`, `
Ich spüle das Geschirr.|I wash the dishes.|Geschirr means dishes collectively.|Round your lips for ü in spüle.
Ich räume mein Zimmer auf.|I tidy my room.|Keep auf at the end.|Äu in räume sounds like oy.
Ich mache das Abendessen.|I prepare dinner.|Abendessen is the evening meal.|Break Abendessen into Abend and Essen.
Wir kaufen ein.|We do the shopping.|Einkaufen separates into kaufen … ein.|Au in kaufen sounds like ow in now.`
],['Je prépare le dîner.|Et moi, je fais la vaisselle.|Nous faisons les courses demain ?|Oui.', 'Ich mache das Abendessen.|Und ich spüle das Geschirr.|Kaufen wir morgen ein?|Ja.'],
['When will they do the shopping?','Tomorrow','Today','Next week'],'Say that you tidy your room.',1,'Divide household tasks between two imaginary people, then arrange to do the shopping together.','food');
// 47
addEverydayPair('Can I? Can you?','Ask permission and describe an ability.',[
  'Je peux means I can. Est-ce que je peux…? asks permission. The next verb stays in its dictionary form.',
  'Können expresses ability. Dürfen asks permission. The other verb goes at the end.'
],[`
Je peux vous aider.|I can help you.|Offer help politely.|The ending -er in aider sounds like é.
Je ne peux pas venir.|I cannot come.|Explain that you are unable to attend.|The final x in peux is silent.
Est-ce que je peux entrer ?|May I come in?|Ask before entering.|The final r in entrer is silent.
Vous pouvez attendre ?|Can you wait? (polite)|Ask someone to wait.|The ending of attendre includes a soft dr sound.`, `
Ich kann Ihnen helfen.|I can help you.|Use Ihnen to address someone politely with helfen.|The h in helfen is pronounced.
Ich kann nicht kommen.|I cannot come.|Explain that you are unable to attend.|The o in kommen is short.
Darf ich hereinkommen?|May I come in?|Use darf when asking permission.|Ei in herein sounds like eye.
Können Sie warten?|Can you wait? (polite)|Ask someone to wait.|The w in warten sounds like v.`
],['Est-ce que je peux entrer ?|Oui, mais vous pouvez attendre ?|Oui, bien sûr.|Merci.', 'Darf ich hereinkommen?|Ja, aber können Sie warten?|Ja, natürlich.|Danke.'],
['What is the visitor asked to do?','Wait','Leave','Pay'],'Offer to help someone.',0,'Ask permission to enter, ask someone to wait, and offer to help. Then practise saying you cannot come.');
// 48
addEverydayPair('Inviting a friend','Invite, accept, decline, and suggest another time.',[
  'Tu is appropriate with a friend. On peut… means we can and can introduce another suggestion.',
  'Du is appropriate with a friend. Wir können… introduces another possible plan.'
],[`
Tu veux venir ?|Do you want to come? (informal)|Invite a friend to join you.|The final x in veux is silent.
Avec plaisir !|With pleasure!|Accept an invitation warmly.|The s in plaisir sounds like z.
Je ne suis pas disponible.|I am not available.|Decline without needing a long explanation.|The final e in disponible is light.
On peut se voir samedi.|We can meet on Saturday.|Suggest another day.|The final t in peut is silent before se.`, `
Möchtest du kommen?|Would you like to come? (informal)|Invite a friend to join you.|Round your lips for ö in möchtest.
Sehr gern!|With pleasure!|Accept an invitation warmly.|The h in sehr lengthens the vowel.
Ich habe keine Zeit.|I do not have time.|Decline when you are unavailable.|Z in Zeit sounds like ts.
Wir können uns am Samstag treffen.|We can meet on Saturday.|Suggest another day.|The e in treffen is short.`
],['Tu veux venir vendredi ?|Je ne suis pas disponible.|On peut se voir samedi.|Avec plaisir !', 'Möchtest du am Freitag kommen?|Ich habe keine Zeit.|Wir können uns am Samstag treffen.|Sehr gern!'],
['When do they agree to meet?','Saturday','Friday','Sunday'],'Accept an invitation warmly.',1,'Invite a friend, decline the first day, suggest Saturday, and accept the new plan.');
// 49
addEverydayCheckpoint('Checkpoint: a busy week',[[44,0],[45,1],[47,1],[48,3]],
['Tu veux venir vendredi ?|Je ne peux pas venir. Je travaille.|On peut se voir samedi.|Oui, à huit heures et demie.', 'Möchtest du am Freitag kommen?|Ich kann nicht kommen. Ich arbeite.|Wir können uns am Samstag treffen.|Ja, um halb neun.'],
['Why can the person not come on Friday?','They are working','They are shopping','They are travelling'],'Explain that you cannot come.',2,'Describe your routine and a hobby. Decline one invitation because you are busy, then arrange a different day and time.');
// 50
addEverydayPair('Choosing from a menu','Ask about a dish and state a food preference.',[
  'Avec means with and sans means without. Dans ce plat means in this dish.',
  'Mit means with and ohne means without. In diesem Gericht means in this dish.'
],[`
Qu’est-ce qu’il y a dans ce plat ?|What is in this dish?|Ask about ingredients before ordering.|Plat ends with a silent t.
Je ne mange pas de viande.|I do not eat meat.|State a food preference.|Viande starts with a v followed by a y-like sound.
Sans fromage, s’il vous plaît.|Without cheese, please.|Ask to leave out cheese.|The g in fromage has the sound in measure.
Je prends la soupe.|I’ll have the soup.|Choose a dish from a menu.|Ou in soupe sounds like oo.`, `
Was ist in diesem Gericht?|What is in this dish?|Ask about ingredients before ordering.|The ch in Gericht is the softer ch sound.
Ich esse kein Fleisch.|I do not eat meat.|State a food preference.|Ei in Fleisch sounds like eye.
Ohne Käse, bitte.|Without cheese, please.|Ask to leave out cheese.|The ä in Käse is long.
Ich nehme die Suppe.|I’ll have the soup.|Choose a dish from a menu.|The u in Suppe is short.`
],['Qu’est-ce qu’il y a dans ce plat ?|De la viande et du fromage.|Je ne mange pas de viande. Je prends la soupe.|Très bien.', 'Was ist in diesem Gericht?|Fleisch und Käse.|Ich esse kein Fleisch. Ich nehme die Suppe.|Sehr gut.'],
['Which dish does the customer choose?','Soup','The meat dish','Bread only'],'Ask what is in a dish.',0,'Ask about a dish, state a food preference, request an ingredient change, and order something suitable.','food');
// 51
addEverydayPair('A short shopping list','Ask for packages and count what you need.',[
  'After a container or quantity, use de: une bouteille de lait. Il nous faut means we need.',
  'Use the product after its container: eine Flasche Milch. Wir brauchen means we need.'
],[`
Il nous faut du lait.|We need some milk.|Use il nous faut when making a shared shopping list.|The final t in lait is silent.
Une bouteille de lait, s’il vous plaît.|A bottle of milk, please.|Name the container before the drink.|The end of bouteille has a y-like sound.
Deux paquets de riz.|Two packets of rice.|Use paquets for packets or packages.|The final ts in paquets is silent.
Nous avons déjà du pain.|We already have some bread.|Déjà tells what does not need buying again.|Both vowels in déjà are clearly pronounced.`, `
Wir brauchen Milch.|We need milk.|Use brauchen to say what is needed.|Au in brauchen sounds like ow in now.
Eine Flasche Milch, bitte.|A bottle of milk, please.|Name the container before the drink.|Sch in Flasche sounds like sh.
Zwei Packungen Reis.|Two packets of rice.|Use Packungen for packets or packages.|The ck in Packungen sounds like k.
Wir haben schon Brot.|We already have bread.|Schon tells what does not need buying again.|The o in schon is long.`
],['Il nous faut du lait et du riz.|Deux paquets de riz ?|Oui, et une bouteille de lait.|Et du pain ?|Nous avons déjà du pain.', 'Wir brauchen Milch und Reis.|Zwei Packungen Reis?|Ja, und eine Flasche Milch.|Und Brot?|Wir haben schon Brot.'],
['What do they already have?','Bread','Milk','Rice'],'Say that you need two packets of rice.',2,'Make a three-item shopping list, specify two quantities, and explain what you already have.','food');
// 52
addEverydayPair('Checking into a hotel','Say you have a booking and ask basic questions.',[
  'Une réservation is a booking. Pour deux nuits means for two nights. Inclus means included.',
  'Eine Reservierung is a booking. Für zwei Nächte means for two nights. Inbegriffen means included.'
],[`
J’ai une réservation.|I have a reservation.|Start your check-in by mentioning your booking.|The -tion in réservation sounds like syon.
Une chambre pour deux nuits.|A room for two nights.|Say how long you need the room.|The final s in nuits is silent.
Le petit déjeuner est inclus ?|Is breakfast included?|Ask what is included in the room price.|The final s in inclus is silent.
À quelle heure faut-il partir ?|What time do we need to leave?|Ask about the departure time at the hotel.|Pronounce the t that links faut and il.`, `
Ich habe eine Reservierung.|I have a reservation.|Start your check-in by mentioning your booking.|Stress the syllable vie in Reservierung.
Ein Zimmer für zwei Nächte.|A room for two nights.|Say how long you need the room.|Round your lips for ü in für.
Ist das Frühstück inbegriffen?|Is breakfast included?|Ask what is included in the room price.|Frühstück has two rounded ü sounds.
Wann müssen wir auschecken?|When do we have to check out?|Ask for the hotel’s checkout time.|The ü in müssen is short and rounded.`
],['Bonjour, j’ai une réservation.|Pour deux nuits ?|Oui. Le petit déjeuner est inclus ?|Oui, à partir de sept heures.|Merci.', 'Guten Tag, ich habe eine Reservierung.|Für zwei Nächte?|Ja. Ist das Frühstück inbegriffen?|Ja, ab sieben Uhr.|Danke.'],
['Is breakfast included?','Yes, from seven','No, it costs extra','Only on the second day'],'Say that you have a reservation.',0,'Check into an imaginary hotel, confirm two nights, ask about breakfast, and ask when you must leave.');
// 53
addEverydayPair('A problem with the room','Explain a simple problem and ask for help.',[
  'Ne … pas makes a statement negative. Il n’y a pas de means there is no or there are no.',
  'Nicht makes a statement negative. Kein goes before a noun here: kein warmes Wasser.'
],[`
La clé ne fonctionne pas.|The key does not work.|Explain a problem with the key.|The final e in clé is accented and pronounced.
Il n’y a pas d’eau chaude.|There is no hot water.|Describe a problem with the water.|Pronounce the d in chaude.
La chambre est trop bruyante.|The room is too noisy.|Say why the room is uncomfortable.|Listen to the linked vowel sounds in bruyante.
Pouvez-vous vérifier ?|Can you check? (polite)|Ask a staff member to look into the problem.|The final -er in vérifier sounds like é.`, `
Der Schlüssel funktioniert nicht.|The key does not work.|Explain a problem with the key.|Round your lips for ü in Schlüssel.
Es gibt kein warmes Wasser.|There is no hot water.|Describe a problem with the water.|The w in warmes and Wasser sounds like v.
Das Zimmer ist zu laut.|The room is too noisy.|Say why the room is uncomfortable.|Au in laut sounds like ow in now.
Können Sie das prüfen?|Can you check that? (polite)|Ask a staff member to look into the problem.|The ü in prüfen is long and rounded.`
],['Excusez-moi, la clé ne fonctionne pas.|Je vais vérifier.|Merci. Et il n’y a pas d’eau chaude.|D’accord, je vais vérifier aussi.', 'Entschuldigung, der Schlüssel funktioniert nicht.|Ich prüfe das.|Danke. Und es gibt kein warmes Wasser.|Gut, ich prüfe das auch.'],
['Which two problems are mentioned?','The key and hot water','Noise and breakfast','The key and noise'],'Ask a staff member to check the problem.',3,'Politely report two room problems, then ask a staff member to check them.');
// 54
addEverydayPair('Buying a ticket','Ask for a ticket and identify the platform.',[
  'Un aller simple is a one-way trip and un aller-retour is a return trip. Quelle voie asks which platform or track.',
  'Eine einfache Fahrt is one way. Hin und zurück means there and back. Gleis is a station track.'
],[`
Un billet pour Paris, s’il vous plaît.|A ticket to Paris, please.|Name your destination when buying a ticket.|The final t in billet is silent.
Un aller simple.|A one-way ticket.|Choose this if you do not need the return journey.|The final e in simple is not a separate syllable.
Un aller-retour.|A return ticket.|Choose a ticket for both directions.|The r at the end of retour is pronounced.
Le train part de quelle voie ?|Which platform does the train leave from?|Ask where you should board.|Oi in voie sounds like wa.`, `
Eine Fahrkarte nach Berlin, bitte.|A ticket to Berlin, please.|Name your destination when buying a ticket.|The h in Fahrkarte lengthens the a.
Eine einfache Fahrt.|A one-way ticket.|Choose this if you do not need the return journey.|Ei in einfache sounds like eye.
Hin und zurück.|A return ticket.|Use this to request both directions.|The ü in zurück is short and rounded.
Von welchem Gleis fährt der Zug?|Which platform does the train leave from?|Ask where you should board.|Ei in Gleis sounds like eye.`
],['Un billet pour Paris, s’il vous plaît.|Un aller simple ?|Non, un aller-retour.|Très bien. Le train part de la voie deux.', 'Eine Fahrkarte nach Berlin, bitte.|Eine einfache Fahrt?|Nein, hin und zurück.|Sehr gut. Der Zug fährt von Gleis zwei.'],
['Which ticket does the customer choose?','A return ticket','A one-way ticket','No ticket'],'Ask which platform the train leaves from.',3,'Buy a ticket, choose one way or return, and ask where to board. Repeat using the other ticket type.','travel');
// 55
addEverydayPair('When the train is late','Understand a delay and check the departure.',[
  'En retard means late. Dans dix minutes means in ten minutes. Toujours can mean still in this question.',
  'Verspätung is a delay. In zehn Minuten means in ten minutes. Noch can mean still.'
],[`
Le train est en retard.|The train is late.|Explain why the journey is delayed.|The final d in retard is silent.
Il part dans dix minutes.|It leaves in ten minutes.|Tell someone how long until departure.|The x in dix is silent before minutes in connected speech.
C’est toujours la voie deux ?|Is it still platform two?|Check whether the platform has changed.|The final s in toujours is silent.
Merci pour l’information.|Thank you for the information.|Thank someone for the update.|The final -tion sounds like syon.`, `
Der Zug hat Verspätung.|The train is late.|German says the train has a delay.|Sp in Verspätung sounds like shp.
Er fährt in zehn Minuten ab.|It leaves in ten minutes.|Abfahren separates into fährt … ab.|The final b in ab sounds like p.
Ist es noch Gleis zwei?|Is it still platform two?|Check whether the platform has changed.|The ch in noch is the deeper ch sound.
Danke für die Information.|Thank you for the information.|Thank someone for the update.|The ending -tion sounds like tsyon.`
],['Le train est en retard.|Il part dans dix minutes.|C’est toujours la voie deux ?|Non, voie trois.|Merci pour l’information.', 'Der Zug hat Verspätung.|Er fährt in zehn Minuten ab.|Ist es noch Gleis zwei?|Nein, Gleis drei.|Danke für die Information.'],
['Which platform should the passenger use now?','Platform three','Platform two','Platform ten'],'Say that the train leaves in ten minutes.',1,'Explain a delay, ask if the platform is unchanged, then repeat the new platform to check understanding.','travel');
// 56
addEverydayCheckpoint('Checkpoint: a short stay',[[52,0],[53,0],[54,3],[55,3]],
['Bonjour, j’ai une réservation pour deux nuits.|Bienvenue ! Voici votre clé.|Merci. Le train pour Paris part de quelle voie ?|De la voie trois.|Merci pour l’information.', 'Guten Tag, ich habe eine Reservierung für zwei Nächte.|Willkommen! Hier ist Ihr Schlüssel.|Danke. Von welchem Gleis fährt der Zug nach Berlin?|Von Gleis drei.|Danke für die Information.'],
['How long is the guest staying?','Two nights','Three nights','One night'],'Explain that the key does not work.',1,'Act out a hotel check-in and a train journey. Confirm your booking, report a key problem, ask for the platform, and thank the person helping you.','travel');
// 57
addEverydayPair('A little about yesterday','Describe a few completed activities.',[
  'These past-tense phrases use j’ai plus a past participle: mangé, travaillé, regardé. Practise the whole chunks first.',
  'These past-tense phrases use ich habe plus a past participle at the end: gegessen, gearbeitet, gesehen.'
],[`
Hier, j’ai travaillé.|Yesterday, I worked.|Use hier to place an event yesterday.|The final -é in travaillé is pronounced.
J’ai mangé du riz.|I ate rice.|Use j’ai mangé for a completed meal.|The g in mangé has the sound in measure.
J’ai regardé un film.|I watched a film.|Say what you watched.|The final -é in regardé is pronounced.
Et vous, qu’est-ce que vous avez fait ?|And you, what did you do? (polite)|Invite the other person to talk about their day.|The t in fait is silent here.`, `
Gestern habe ich gearbeitet.|Yesterday, I worked.|Gestern comes first, so habe comes before ich.|Ge- at the start of gearbeitet is unstressed.
Ich habe Reis gegessen.|I ate rice.|Put gegessen at the end.|The e in gegessen is short.
Ich habe einen Film gesehen.|I watched a film.|Put gesehen at the end.|The h in gesehen lengthens the vowel.
Und Sie, was haben Sie gemacht?|And you, what did you do? (polite)|Invite the other person to talk about their day.|The ch in gemacht is the deeper ch sound.`
],['Hier, j’ai travaillé. Et vous, qu’est-ce que vous avez fait ?|J’ai regardé un film.|Et le dîner ?|J’ai mangé du riz.', 'Gestern habe ich gearbeitet. Und Sie, was haben Sie gemacht?|Ich habe einen Film gesehen.|Und das Abendessen?|Ich habe Reis gegessen.'],
['What did the second speaker do?','Watched a film and ate rice','Worked and ate bread','Cooked soup and worked'],'Say that you watched a film.',2,'Describe two things you did yesterday, then ask another person about their day. Use the model phrases first, then change a detail.');
// 58
addEverydayPair('A little about tomorrow','Describe a near-future plan.',[
  'Je vais plus another verb expresses a near-future plan. The second verb stays in its dictionary form.',
  'German often uses the present tense plus morgen for a future plan. When morgen comes first, the verb still comes second.'
],[`
Demain, je vais travailler.|Tomorrow, I am going to work.|Use demain for tomorrow and vais for the plan.|The final r in travailler is silent.
Je vais faire les courses.|I am going to do the shopping.|Use vais faire to describe a planned task.|The final s in courses is silent.
Je vais préparer le dîner.|I am going to prepare dinner.|Describe a plan for the evening meal.|Each é in préparer is pronounced.
Qu’est-ce que vous allez faire ?|What are you going to do? (polite)|Ask about the other person’s plans.|The s in vous links to allez with a z sound.`, `
Morgen arbeite ich.|Tomorrow, I am going to work.|Use morgen with the present tense for this future plan.|Stress the first syllable of morgen.
Ich kaufe morgen ein.|I am going to do the shopping tomorrow.|Keep ein at the end.|Au in kaufe sounds like ow in now.
Ich mache morgen das Abendessen.|I am going to prepare dinner tomorrow.|Use morgen to make the future time clear.|The ch in mache is the deeper ch sound.
Was machen Sie morgen?|What are you going to do tomorrow? (polite)|Ask about the other person’s plans.|The w in was sounds like v.`
],['Qu’est-ce que vous allez faire demain ?|Je vais faire les courses.|Et le soir ?|Je vais préparer le dîner.', 'Was machen Sie morgen?|Ich kaufe morgen ein.|Und am Abend?|Ich mache morgen das Abendessen.'],
['What does the person plan to do in the evening?','Prepare dinner','Go shopping','Watch a film'],'Ask about the other person’s plans.',3,'Describe two plans for tomorrow. Ask another person about their plans and reply as that person.');
// 59
addEverydayPair('Give a simple reason','Use because to explain a choice or change of plan.',[
  'Parce que means because. It joins your statement to a reason; French keeps the normal subject–verb order.',
  'Weil means because. In the reason clause, the conjugated verb moves to the end: weil es regnet.'
],[`
Je reste à la maison parce qu’il pleut.|I am staying home because it is raining.|Explain a weather-related choice.|Que becomes qu’ before il.
Je prends le bus parce que c’est loin.|I am taking the bus because it is far.|Explain your transport choice.|Loin ends with a nasal vowel.
Je ne viens pas parce que je travaille.|I am not coming because I am working.|Give a reason for declining.|The ending of travaille has a y-like sound.
Pourquoi ?|Why?|Ask for the reason behind a statement.|Oi sounds like wa.`, `
Ich bleibe zu Hause, weil es regnet.|I am staying home because it is raining.|Put regnet at the end of the reason clause.|Ei in bleibe sounds like eye.
Ich nehme den Bus, weil es weit ist.|I am taking the bus because it is far.|Put ist at the end after weil.|The w in weit sounds like v.
Ich komme nicht, weil ich arbeite.|I am not coming because I am working.|Put arbeite at the end of the reason clause.|The ei in arbeite sounds like eye.
Warum?|Why?|Ask for the reason behind a statement.|Stress the second syllable of warum.`
],['Tu viens au café ?|Je ne viens pas parce que je travaille.|Et demain ?|Demain, avec plaisir !', 'Kommst du ins Café?|Ich komme nicht, weil ich arbeite.|Und morgen?|Morgen sehr gern!'],
['Why is the invitation declined?','The person is working','It is raining','The café is far away'],'Ask why.',3,'Explain one transport choice and one declined invitation using because. Then ask why and answer with a different reason.');
// 60
addEverydayCheckpoint('Two months: handle an everyday change',[[41,0],[47,1],[48,3],[59,2]],
['Je voudrais un rendez-vous vendredi.|À dix heures ?|Je ne viens pas vendredi parce que je travaille. Samedi, c’est possible ?|Oui, samedi à dix heures.|Merci, je confirme le rendez-vous.', 'Ich möchte einen Termin am Freitag.|Um zehn Uhr?|Ich komme am Freitag nicht, weil ich arbeite. Geht Samstag?|Ja, am Samstag um zehn Uhr.|Danke, ich bestätige den Termin.'],
['When is the final appointment?','Saturday at ten','Friday at ten','Saturday at nine'],'Say “I cannot come” without adding a reason.',1,'Try a two-minute exchange: request an appointment, explain why the first day does not work, suggest another day, and confirm. Then describe one thing you did yesterday and one plan for tomorrow. This is a practice checkpoint, not a language certificate.');
