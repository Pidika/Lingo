// Days 61–90. Each bilingual row contains two targets, a meaning, usage,
// and separate pronunciation notes. Dialogues and listening tasks are authored.
function addTownLesson(title, goal, grammar, rows, dialogue, listening, answerIndex, imageKey='') {
  const parsed=rows.trim().split('\n').map(row=>row.split('|').map(s=>s.trim()));
  addEverydayPair(title,goal,grammar,['fr','de'].map((_,i)=>parsed.map(p=>[p[i],p[2],p[3],p[4+i]].join('|')).join('\n')),dialogue,listening,
    'Choose the phrase that means: “'+parsed[answerIndex][2]+'”',answerIndex,
    goal+' First use the model, then cover it and exchange roles.',imageKey);
}
// 61
addTownLesson('Places in town','Ask where everyday places are.',[
  'Où est means where is. Keep le, la or l’ with the place name.',
  'Wo ist means where is. Keep der, die or das with the place name.'
],`
Où est la bibliothèque ?|Wo ist die Bibliothek?|Where is the library?|Ask where you can borrow books.|The th in bibliothèque is a t sound.|Stress the last syllable of Bibliothek.
La pharmacie est ici.|Die Apotheke ist hier.|The pharmacy is here.|Point out a nearby pharmacy.|Ph in pharmacie sounds like f.|The th in Apotheke is a t sound.
Le musée est là-bas.|Das Museum ist dort.|The museum is over there.|Point to a place farther away.|The final e in musée is silent.|Stress the second syllable of Museum.
La banque est près de la gare.|Die Bank ist in der Nähe des Bahnhofs.|The bank is near the station.|Locate one place using another.|The an in banque is nasal.|The h in Nähe lengthens the vowel.
`,['Excusez-moi, où est la banque ?|La banque est près de la gare.|Merci beaucoup.','Entschuldigung, wo ist die Bank?|Die Bank ist in der Nähe des Bahnhofs.|Vielen Dank.'],['Where is the bank?','Near the station','Inside the museum','Next to the library'],0,'travel');
// 62
addTownLesson('Follow the route','Understand a short set of directions.',[
  'Allez and tournez are polite commands for vous. À gauche is left; à droite is right.',
  'Gehen Sie and biegen Sie are polite commands. Links is left; rechts is right.'
],`
Allez tout droit.|Gehen Sie geradeaus.|Go straight ahead.|Start with the direction of travel.|The final t in tout is silent before droit.|Stress aus in geradeaus.
Tournez à gauche.|Biegen Sie links ab.|Turn left.|Give a left turn instruction.|The ch in gauche sounds like sh.|The final s in links is pronounced.
Tournez à droite.|Biegen Sie rechts ab.|Turn right.|Give a right turn instruction.|The oi in droite sounds like wa.|The ch in rechts is a soft breathy sound.
Traversez la rue.|Überqueren Sie die Straße.|Cross the street.|Describe the next part of a route.|The u in rue is a rounded front vowel.|The ß in Straße sounds like s.
`,['Pour aller au musée ?|Allez tout droit, puis tournez à gauche.|À gauche ?|Oui.','Wie komme ich zum Museum?|Gehen Sie geradeaus, dann biegen Sie links ab.|Links?|Ja.'],['Which turn follows the straight section?','Left','Right','No turn'],2,'travel');
// 63
addEverydayCheckpoint('Checkpoint: find the museum',[[61,0],[61,2],[62,0],[62,1]],[
  'Où est le musée ?|Allez tout droit, puis tournez à gauche.|Merci !',
  'Wo ist das Museum?|Gehen Sie geradeaus, dann biegen Sie links ab.|Danke!'
],['Where does the visitor want to go?','The museum','The library','The bank'],'Tell someone to go straight ahead.',2,'Ask for a place, explain a route with two steps, and repeat the turning direction.','travel');
// 64
addTownLesson('How far is it?','Choose between walking and taking transport.',[
  'À pied means on foot. Il faut introduces the time needed.',
  'Zu Fuß means on foot. Man braucht introduces the time needed.'
],`
C’est loin ?|Ist es weit?|Is it far?|Ask about distance before setting off.|Link c’est into loin without a final t sound.|The ei in weit sounds like eye.
C’est à dix minutes à pied.|Es ist zehn Minuten zu Fuß entfernt.|It is ten minutes away on foot.|Give an approximate walking time.|Link minutes into à with a z sound.|The ß in Fuß is an s sound.
Je préfère prendre le bus.|Ich fahre lieber mit dem Bus.|I prefer to take the bus.|Choose transport instead of walking.|The final s in bus is pronounced.|The ie in lieber is a long ee sound.
Il faut cinq minutes.|Man braucht fünf Minuten.|It takes five minutes.|Explain the time needed.|The final t in faut is silent.|The ch in braucht is a back-of-mouth sound.
`,['C’est loin ?|C’est à dix minutes à pied.|Je préfère prendre le bus.','Ist es weit?|Es ist zehn Minuten zu Fuß entfernt.|Ich fahre lieber mit dem Bus.'],['How long is the walk?','Ten minutes','Five minutes','Twenty minutes'],0,'travel');
// 65
addTownLesson('The right bus stop','Check a bus route and where to get off.',[
  'Ce bus means this bus. Descendre means to get off a vehicle in this context.',
  'Dieser Bus means this bus. Aussteigen separates: ich steige … aus.'
],`
Ce bus va au centre-ville ?|Fährt dieser Bus ins Stadtzentrum?|Does this bus go to the town centre?|Check before boarding.|The final s in bus is sounded.|The ä in fährt is a long open vowel.
Où est l’arrêt de bus ?|Wo ist die Bushaltestelle?|Where is the bus stop?|Ask where to wait.|The final t in arrêt is silent.|Break Bushaltestelle into Bus-halte-stelle.
Je descends au prochain arrêt.|Ich steige an der nächsten Haltestelle aus.|I get off at the next stop.|Tell someone when you leave the bus.|Link prochain to arrêt with an n sound.|The ei in steige sounds like eye.
Il faut changer de bus.|Sie müssen umsteigen.|You need to change buses.|Explain that one bus is not enough.|The er in changer sounds like é.|The ü in müssen is a rounded front vowel.
`,['Ce bus va au centre-ville ?|Non, il faut changer de bus.|Merci.','Fährt dieser Bus ins Stadtzentrum?|Nein, Sie müssen umsteigen.|Danke.'],['Can the traveller stay on one bus?','No, a change is needed','Yes, it goes directly','There are no buses'],2,'travel');
// 66
addTownLesson('Ask someone to repeat','Keep a conversation going when listening is difficult.',[
  'Pouvez-vous is a polite way to ask can you. Plus lentement means more slowly.',
  'Können Sie is a polite way to ask can you. Langsamer means more slowly.'
],`
Pouvez-vous répéter, s’il vous plaît ?|Können Sie das bitte wiederholen?|Can you repeat that, please?|Ask for the same words again.|Stress is gentle at the end of répéter.|Stress holen in wiederholen here.
Pouvez-vous parler plus lentement ?|Können Sie bitte langsamer sprechen?|Can you speak more slowly, please?|Ask for a slower explanation.|The final t in lentement is silent.|The sp in sprechen begins with shp.
Pouvez-vous l’écrire ?|Können Sie das aufschreiben?|Can you write it down?|Use this for an address or unfamiliar word.|The cr in écrire stays together.|The sch in aufschreiben sounds like sh.
Qu’est-ce que ça veut dire ?|Was bedeutet das?|What does that mean?|Ask about a word you do not understand.|The ç in ça sounds like s.|Stress deu in bedeutet.
`,['Tournez à droite après la banque.|Pouvez-vous l’écrire ?|Oui, bien sûr.','Biegen Sie nach der Bank rechts ab.|Können Sie das aufschreiben?|Ja, natürlich.'],['What help does the listener request?','A written instruction','A bus ticket','A faster explanation'],3);
// 67
addTownLesson('A day out','Plan a visit to a public attraction.',[
  'On peut means we can in a casual plan. Fermé means closed.',
  'Wir können means we can. Geschlossen means closed.'
],`
On peut visiter le musée.|Wir können das Museum besuchen.|We can visit the museum.|Suggest an indoor activity.|The final t in peut is silent.|Stress su in besuchen.
Le parc est ouvert.|Der Park ist geöffnet.|The park is open.|Check whether you can enter.|The final t in ouvert is silent.|The ö in geöffnet is rounded.
L’entrée est gratuite.|Der Eintritt ist kostenlos.|Admission is free.|Describe an entrance without a charge.|The final e in gratuite is silent but t is heard.|Stress Ein in Eintritt.
Le musée est fermé aujourd’hui.|Das Museum ist heute geschlossen.|The museum is closed today.|Explain why a plan must change.|The ui in aujourd’hui is one flowing sound.|The eu in heute sounds like oy.
`,['On peut visiter le musée ?|Le musée est fermé aujourd’hui.|Et le parc ?|Le parc est ouvert.','Können wir das Museum besuchen?|Das Museum ist heute geschlossen.|Und der Park?|Der Park ist geöffnet.'],['Which place is open?','The park','The museum','Both places'],2);
// 68
addTownLesson('Arrange a meeting place','Agree where to meet a friend.',[
  'Devant means in front of; derrière means behind. On se retrouve is useful for meeting plans.',
  'Vor means in front of; hinter means behind. Wir treffen uns means we meet.'
],`
On se retrouve devant la gare.|Wir treffen uns vor dem Bahnhof.|We will meet in front of the station.|Choose a clear meeting point.|The an in devant is nasal.|The v in vor sounds like f.
Je suis à côté du café.|Ich bin neben dem Café.|I am next to the café.|Describe your current position.|The final é in café is a clear vowel.|Stress the last syllable of Café.
Je t’attends ici.|Ich warte hier auf dich.|I am waiting for you here.|Speak informally to one person.|Link t’attends smoothly as one word.|The w in warte sounds like v.
Je suis derrière le bâtiment.|Ich bin hinter dem Gebäude.|I am behind the building.|Explain why someone cannot see you.|The final t in bâtiment is silent.|The äu in Gebäude sounds like oy.
`,['Tu es où ?|Je suis à côté du café.|D’accord, je viens.','Wo bist du?|Ich bin neben dem Café.|Gut, ich komme.'],['Where is the speaker waiting?','Next to the café','Behind the station','Inside the museum'],0,'cafe');
// 69
addTownLesson('When plans change','Explain a small delay and suggest another time.',[
  'En retard means late. Est-ce qu’on peut introduces a suggestion as a question.',
  'Zu spät means late. Können wir introduces a suggestion as a question.'
],`
Je vais être en retard.|Ich komme zu spät.|I am going to be late.|Warn someone about a delay.|The final d in retard is silent.|The sp in spät begins with shp.
J’arrive dans cinq minutes.|Ich bin in fünf Minuten da.|I will be there in five minutes.|Give a short estimated wait.|The in in cinq is nasal.|The ü in fünf is a rounded front vowel.
On peut se retrouver demain ?|Können wir uns morgen treffen?|Can we meet tomorrow?|Suggest moving a meeting to the next day.|The final n in demain is not sounded separately.|Stress mor in morgen.
Merci de m’avoir prévenu.|Danke, dass du Bescheid gesagt hast.|Thank you for letting me know.|Acknowledge the change politely.|The u in prévenu is rounded.|The ei in Bescheid sounds like eye.
`,['Je vais être en retard.|Tu arrives quand ?|J’arrive dans cinq minutes.','Ich komme zu spät.|Wann kommst du?|Ich bin in fünf Minuten da.'],['How long is the expected wait?','Five minutes','Ten minutes','Until tomorrow'],2);
// 70
addEverydayCheckpoint('Checkpoint: a change of plan',[[68,0],[68,1],[69,0],[69,2]],[
 'On se retrouve devant la gare ?|Je vais être en retard. On peut se retrouver demain ?|Oui, demain.',
 'Wir treffen uns vor dem Bahnhof?|Ich komme zu spät. Können wir uns morgen treffen?|Ja, morgen.'
],['When will they meet?','Tomorrow','Today without a delay','Next week'],'Suggest meeting tomorrow.',3,'Choose a meeting point, explain a delay, and agree on another day.','travel');
// 71
addTownLesson('At school or in a course','Talk about what and where you study.',[
 'Étudier means to study; apprendre means to learn. Use le before a language after apprendre.',
 'Lernen means to learn. Studieren usually refers to university study, so use lernen for general learning.'
],`
J’apprends le français.|Ich lerne Deutsch.|I am learning this language.|Name the language of this course.|The final s in apprends is silent.|The eu in Deutsch sounds like oy.
Je suis un cours en ligne.|Ich mache einen Onlinekurs.|I am taking an online course.|Explain how you study.|The gn in ligne sounds like ny.|Stress On in Onlinekurs.
Le cours commence à neuf heures.|Der Kurs beginnt um neun Uhr.|The class starts at nine.|Give the start time.|Link neuf to heures with a v sound.|The eu in neun sounds like oy.
J’étudie à la maison.|Ich lerne zu Hause.|I study at home.|Say where you do your learning.|The ai in maison sounds like an open e.|The au in Hause sounds like ow.
`,['Tu suis un cours en ligne ?|Oui. Le cours commence à neuf heures.|D’accord.','Machst du einen Onlinekurs?|Ja. Der Kurs beginnt um neun Uhr.|Gut.'],['When does the class start?','At nine','At eight','At ten'],1);
// 72
addTownLesson('Understand classroom instructions','Follow a short learning activity.',[
 'Ouvrez, écoutez and écrivez are polite or plural instructions. They address vous.',
 'Öffnen Sie, hören Sie and schreiben Sie are polite instructions. They address Sie.'
],`
Ouvrez le livre.|Öffnen Sie das Buch.|Open the book.|Begin a reading activity.|The final z in ouvrez is silent.|The ch in Buch is a back-of-mouth sound.
Écoutez et répétez.|Hören Sie zu und wiederholen Sie.|Listen and repeat.|Copy the model after listening.|Both final ez endings sound like é.|The h in hören is gently sounded.
Écrivez une phrase.|Schreiben Sie einen Satz.|Write a sentence.|Practise one short written response.|The ph in phrase sounds like f.|The z in Satz sounds like ts.
Travaillez à deux.|Arbeiten Sie zu zweit.|Work in pairs.|Practise with another learner.|The ill in travaillez has a y sound.|The zw in zweit starts with tsv.
`,['Ouvrez le livre. Écrivez une phrase.|Une phrase ?|Oui, une phrase.','Öffnen Sie das Buch. Schreiben Sie einen Satz.|Einen Satz?|Ja, einen Satz.'],['What should the learner write?','One sentence','A whole page','A name only'],2);
// 73
addTownLesson('Learning together','Ask a classmate for practical help.',[
 'Tu peux is informal can you. Use it with a classmate when informal address is appropriate.',
 'Kannst du is informal can you. Use Sie forms with someone who expects formal address.'
],`
Tu peux m’aider ?|Kannst du mir helfen?|Can you help me?|Ask one classmate informally.|Link peux to m’aider without a final x sound.|The f in helfen is pronounced.
Je ne comprends pas la question.|Ich verstehe die Frage nicht.|I do not understand the question.|Name the difficulty clearly.|The final s in comprends is silent.|The v in verstehe sounds like f.
On peut pratiquer ensemble.|Wir können zusammen üben.|We can practise together.|Suggest shared practice.|The em in ensemble is nasal.|The ü in üben is rounded.
À toi maintenant.|Jetzt bist du dran.|Your turn now.|Hand over a speaking turn.|The oi in toi sounds like wa.|The z in jetzt sounds like ts.
`,['Je ne comprends pas la question. Tu peux m’aider ?|Oui. On peut pratiquer ensemble.','Ich verstehe die Frage nicht. Kannst du mir helfen?|Ja. Wir können zusammen üben.'],['What does the learner not understand?','The question','The meeting time','The address'],3);
// 74
addTownLesson('Talk about your work','Describe your workplace without needing a job title.',[
 'Je travaille means I work. Dans describes a workplace; chez moi means at my home.',
 'Ich arbeite means I work. Im is a contraction of in dem; von zu Hause means from home.'
],`
Je travaille dans un magasin.|Ich arbeite in einem Geschäft.|I work in a shop.|Describe your place of work.|The in in magasin is nasal.|The ä in Geschäft is an open vowel.
Je travaille chez moi.|Ich arbeite von zu Hause.|I work from home.|Describe home-based work.|The final z in chez is silent here.|The ei in arbeite sounds like eye.
Je cherche un emploi.|Ich suche eine Arbeit.|I am looking for a job.|Explain a job search.|The oi in emploi sounds like wa.|The ch in suche is a back-of-mouth sound.
Je ne travaille pas aujourd’hui.|Ich arbeite heute nicht.|I am not working today.|Describe a day off.|The ill in travaille has a y sound.|The ch in nicht is a soft breathy sound.
`,['Tu travailles dans un magasin ?|Non, je travaille chez moi.','Arbeitest du in einem Geschäft?|Nein, ich arbeite von zu Hause.'],['Where does the speaker work?','At home','In a shop','At the station'],2);
// 75
addTownLesson('Your working day','Describe breaks and working hours.',[
 'À introduces a clock time. De … à … describes a time range.',
 'Um introduces one clock time. Von … bis … describes a time range.'
],`
Je commence à huit heures.|Ich fange um acht Uhr an.|I start at eight.|Give the beginning of your day.|The final s in heures is silent.|The ch in acht is a back-of-mouth sound.
Je finis à cinq heures.|Ich höre um fünf Uhr auf.|I finish at five.|Give the end of your day.|Link cinq to heures with a k sound.|The ö in höre is rounded.
Je fais une pause à midi.|Ich mache mittags eine Pause.|I take a break at midday.|Describe a break in the middle of the day.|The au in pause sounds like o.|The au in Pause sounds like ow.
Je travaille du lundi au vendredi.|Ich arbeite von Montag bis Freitag.|I work from Monday to Friday.|Describe your regular working week.|The final i in vendredi is a clear ee sound.|The ei in Freitag sounds like eye.
`,['Tu fais une pause quand ?|Je fais une pause à midi.|Et tu finis quand ?|Je finis à cinq heures.','Wann machst du eine Pause?|Ich mache mittags eine Pause.|Und wann hörst du auf?|Ich höre um fünf Uhr auf.'],['When is the break?','At midday','At eight','At five'],3);
// 76
addTownLesson('A simple message','Leave or understand a short everyday message.',[
 'Un message can be written or spoken. Me becomes m’ before a vowel.',
 'Eine Nachricht is a message. Anrufen separates in a main clause: ich rufe … an.'
],`
Je peux laisser un message ?|Kann ich eine Nachricht hinterlassen?|Can I leave a message?|Ask to pass information to an absent person.|The g in message sounds like zh.|The ch in Nachricht is a back-of-mouth sound.
Je vous rappelle demain.|Ich rufe Sie morgen zurück.|I will call you back tomorrow.|Use polite address for the person called.|The final e in rappelle is silent.|The ü in zurück is rounded.
Envoyez-moi un message.|Schicken Sie mir eine Nachricht.|Send me a message.|Ask for a written follow-up politely.|The oi in moi sounds like wa.|The sch in schicken sounds like sh.
J’ai reçu votre message.|Ich habe Ihre Nachricht bekommen.|I received your message.|Confirm that information reached you.|The ç in reçu sounds like s.|Stress kom in bekommen.
`,['Je peux laisser un message ?|Oui.|Je vous rappelle demain.','Kann ich eine Nachricht hinterlassen?|Ja.|Ich rufe Sie morgen zurück.'],['When will the person call back?','Tomorrow','This evening','Next month'],3);
// 77
addEverydayCheckpoint('Checkpoint: learn and work',[[73,0],[74,1],[75,2],[76,1]],[
 'Vous travaillez où ?|Je travaille chez moi.|Vous êtes libre à midi ?|Je fais une pause à midi.',
 'Wo arbeiten Sie?|Ich arbeite von zu Hause.|Sind Sie mittags frei?|Ich mache mittags eine Pause.'
],['Where does the person work?','At home','In a school','In a shop'],'Say that you take a break at midday.',2,'Describe where you work or study, give a break time, and arrange a callback.');
// 78
addTownLesson('How you feel today','Describe simple feelings and needs.',[
 'French uses avoir for hunger, thirst and feeling cold: j’ai faim, soif, froid.',
 'German uses haben for hunger and thirst: ich habe Hunger, Durst. Feeling cold is mir ist kalt.'
],`
J’ai faim.|Ich habe Hunger.|I am hungry.|Say that you would like food.|The aim in faim is nasal.|The ng in Hunger is one nasal sound.
J’ai soif.|Ich habe Durst.|I am thirsty.|Say that you need a drink.|The oi in soif sounds like wa.|Pronounce the final st in Durst.
J’ai froid.|Mir ist kalt.|I feel cold.|Describe how the temperature feels.|The final d in froid is silent.|The final t in kalt is heard.
J’ai besoin de repos.|Ich brauche Ruhe.|I need rest.|Explain that you need a quiet break.|The final s in repos is silent.|The h in Ruhe separates the two vowel sounds.
`,['Comment ça va ?|J’ai soif.|Tu veux de l’eau ?|Oui, merci.','Wie geht es dir?|Ich habe Durst.|Möchtest du Wasser?|Ja, danke.'],['What does the person need?','A drink','A coat','A meal'],3,'cafe');
// 79
addTownLesson('Describe a problem','Use simple language to ask for care.',[
 'J’ai mal à means I have pain in. Au combines à and le; à la stays separate.',
 'Mir tut … weh describes pain in one body part. A noun such as Kopfschmerzen is also common.'
],`
J’ai mal à la tête.|Ich habe Kopfschmerzen.|I have a headache.|Explain the location of discomfort.|The ê in tête is an open vowel.|The sch in Schmerzen sounds like sh.
J’ai mal au ventre.|Ich habe Bauchschmerzen.|I have a stomach ache.|Describe discomfort without diagnosing it.|The en in ventre is nasal.|The ch in Bauch is a back-of-mouth sound.
Je ne me sens pas bien.|Ich fühle mich nicht gut.|I do not feel well.|Use a general description when you lack a specific word.|The final s in sens is silent.|The ü in fühle is rounded and long.
J’ai besoin d’un médecin.|Ich brauche einen Arzt.|I need a doctor.|Ask for professional help.|The final in in médecin is nasal.|The z in Arzt sounds like ts.
`,['Vous avez mal où ?|J’ai mal à la tête.|Vous voulez voir un médecin ?|Oui.','Wo haben Sie Schmerzen?|Ich habe Kopfschmerzen.|Möchten Sie einen Arzt sehen?|Ja.'],['What problem does the person describe?','A headache','A stomach ache','Feeling cold'],2);
// 80
addTownLesson('Ask for assistance','Tell someone you need practical help.',[
 'Pouvez-vous and pourriez-vous both ask politely; pourriez-vous is a softer request.',
 'Können Sie and könnten Sie both ask politely; könnten Sie is a softer request.'
],`
J’ai besoin d’aide.|Ich brauche Hilfe.|I need help.|State your need clearly.|The d in aide is pronounced.|The final e in Hilfe is a short unstressed vowel.
Pouvez-vous appeler quelqu’un ?|Können Sie jemanden anrufen?|Can you call someone?|Ask another person to contact help.|The un in quelqu’un is nasal.|Stress an in anrufen.
Je suis perdu.|Ich habe mich verlaufen.|I am lost.|Say that you cannot find your way; a woman writes perdue in French.|Perdu and perdue sound the same.|The v in verlaufen sounds like f.
Pouvez-vous rester avec moi ?|Können Sie bei mir bleiben?|Can you stay with me?|Ask someone to remain nearby.|The oi in moi sounds like wa.|The ei in bleiben sounds like eye.
`,['J’ai besoin d’aide. Je suis perdu.|Où voulez-vous aller ?|À la gare.','Ich brauche Hilfe. Ich habe mich verlaufen.|Wohin möchten Sie gehen?|Zum Bahnhof.'],['Why does the speaker need help?','They are lost','They want to buy bread','They are booking a room'],3,'travel');
// 81
addTownLesson('Find a lost item','Describe something you cannot find.',[
 'J’ai perdu uses avoir plus the past participle perdu. Mes means my before plural nouns.',
 'Ich habe … verloren uses haben plus the past participle verloren. Meine can introduce plural belongings.'
],`
J’ai perdu mon téléphone.|Ich habe mein Handy verloren.|I have lost my phone.|Identify the missing object.|The ph in téléphone sounds like f.|Handy has two syllables and means mobile phone.
Vous avez vu mon sac ?|Haben Sie meine Tasche gesehen?|Have you seen my bag?|Ask someone politely about an item.|Link vous to avez with a z sound.|The sch in Tasche sounds like sh.
Mes clés sont ici.|Meine Schlüssel sind hier.|My keys are here.|Say that you have found the keys.|The final s in clés is silent.|The ü in Schlüssel is rounded.
Il est noir et petit.|Es ist schwarz und klein.|It is black and small.|Describe the phone; il refers to téléphone, es to Handy.|The oi in noir sounds like wa.|The schw in schwarz begins with shv.
`,['J’ai perdu mon téléphone.|Il est comment ?|Il est noir et petit.','Ich habe mein Handy verloren.|Wie sieht es aus?|Es ist schwarz und klein.'],['What is missing?','A phone','A bag','Some keys'],1);
// 82
addTownLesson('Describe a person','Give a simple description when meeting someone.',[
 'Il porte and elle porte mean he wears and she wears. Des introduces unspecified plural items.',
 'Er trägt and sie trägt mean he wears and she wears. Tragen changes its vowel in these forms.'
],`
Elle porte des lunettes.|Sie trägt eine Brille.|She wears glasses.|Identify someone by an accessory.|The final s in lunettes is silent.|The ll in Brille follows a short i vowel.
Il porte une veste bleue.|Er trägt eine blaue Jacke.|He wears a blue jacket.|Describe a visible item of clothing.|Bleu and bleue sound the same.|The j in Jacke sounds like y.
Elle a les cheveux courts.|Sie hat kurze Haare.|She has short hair.|Use a simple hairstyle description.|The final ts in courts are silent.|The aa in Haare is a long a vowel.
Il attend près de la porte.|Er wartet neben der Tür.|He is waiting beside the door.|Give the person’s position.|The final d in attend is silent.|The ü in Tür is rounded and long.
`,['Comment est votre amie ?|Elle porte des lunettes. Elle a les cheveux courts.','Wie sieht Ihre Freundin aus?|Sie trägt eine Brille. Sie hat kurze Haare.'],['Which description fits the friend?','Short hair and glasses','A blue jacket and long hair','No glasses and long hair'],1);
// 83
addTownLesson('Explain what happened','Connect a past event to a present problem.',[
 'J’ai oublié and j’ai raté use avoir plus a past participle. Je suis arrivé uses être.',
 'Ich habe vergessen and ich habe verpasst use haben. Ich bin angekommen uses sein.'
],`
J’ai oublié mon sac.|Ich habe meine Tasche vergessen.|I forgot my bag.|Explain a missing belonging.|The ou in oublié sounds like oo.|The v in vergessen sounds like f.
J’ai raté le bus.|Ich habe den Bus verpasst.|I missed the bus.|Explain a transport delay.|The final é in raté is pronounced.|Stress passt in verpasst.
Je suis arrivé en retard.|Ich bin zu spät angekommen.|I arrived late.|Describe a completed arrival; a woman writes arrivée in French.|Arrivé and arrivée sound the same.|Stress an in angekommen.
Tout va bien maintenant.|Jetzt ist alles in Ordnung.|Everything is all right now.|Explain that the problem is resolved.|The final t in maintenant is silent.|The ng in Ordnung is one nasal sound.
`,['Pourquoi êtes-vous arrivé en retard ?|J’ai raté le bus. Mais tout va bien maintenant.','Warum sind Sie zu spät angekommen?|Ich habe den Bus verpasst. Aber jetzt ist alles in Ordnung.'],['Why was the person late?','They missed the bus','They lost their phone','They forgot a bag'],0,'travel');
// 84
addEverydayCheckpoint('Checkpoint: explain and get help',[[80,0],[81,0],[81,3],[83,3]],[
 'J’ai besoin d’aide. J’ai perdu mon téléphone.|Il est comment ?|Il est noir et petit.|Il est ici !',
 'Ich brauche Hilfe. Ich habe mein Handy verloren.|Wie sieht es aus?|Es ist schwarz und klein.|Es ist hier!'
],['How is the phone described?','Black and small','Blue and large','White and small'],'Say that you have lost your phone.',1,'Ask for help, identify a missing object, describe it, and thank the person who finds it.');
// 85
addTownLesson('Make a polite request','Ask for everyday things without sounding abrupt.',[
 'Je voudrais means I would like. Pourriez-vous is a polite could you request.',
 'Ich hätte gern means I would like. Könnten Sie is a polite could you request.'
],`
Je voudrais un verre d’eau.|Ich hätte gern ein Glas Wasser.|I would like a glass of water.|Request a drink politely.|The eau in eau sounds like o.|The w in Wasser sounds like v.
Pourriez-vous ouvrir la fenêtre ?|Könnten Sie das Fenster öffnen?|Could you open the window?|Make a polite practical request.|The ê in fenêtre is an open vowel.|The ö in öffnen is rounded.
Je peux m’asseoir ici ?|Darf ich mich hier hinsetzen?|May I sit here?|Check before using a seat.|The oi in asseoir sounds like wa.|The z in hinsetzen sounds like ts.
Bien sûr, allez-y.|Natürlich, bitte.|Of course, go ahead.|Give someone permission politely.|Link allez to y with a z sound.|The ü in natürlich is rounded.
`,['Je peux m’asseoir ici ?|Bien sûr, allez-y.|Merci.','Darf ich mich hier hinsetzen?|Natürlich, bitte.|Danke.'],['What permission is requested?','To sit down','To open a window','To leave early'],1,'cafe');
// 86
addTownLesson('Give a reason','Explain a choice with because.',[
 'Parce que introduces a reason with normal subject–verb order. It becomes parce qu’ before a vowel.',
 'Weil introduces a reason and sends the conjugated verb to the end of its clause.'
],`
Je reste ici parce qu’il pleut.|Ich bleibe hier, weil es regnet.|I am staying here because it is raining.|Explain why you are not going outside.|The eu in pleut is rounded.|The ei in bleibe sounds like eye.
Je marche parce que c’est près.|Ich gehe zu Fuß, weil es nah ist.|I am walking because it is nearby.|Explain your transport choice.|The final s in près is silent.|The h in nah lengthens the vowel.
Je pars parce que je suis fatigué.|Ich gehe, weil ich müde bin.|I am leaving because I am tired.|Explain your departure; a woman writes fatiguée in French.|Fatigué and fatiguée sound the same.|The ü in müde is rounded and long.
Je viens parce que je suis libre.|Ich komme, weil ich Zeit habe.|I am coming because I am free.|Explain that you have time available.|The final s in viens is silent.|The z in Zeit sounds like ts.
`,['Tu prends le bus ?|Non, je marche parce que c’est près.','Nimmst du den Bus?|Nein, ich gehe zu Fuß, weil es nah ist.'],['Why is the person walking?','The place is nearby','It is raining','They missed the bus'],0);
// 87
addTownLesson('Tell a short story','Put three simple events in order.',[
 'D’abord, ensuite and enfin organise a story. With movement, je suis allé uses être.',
 'Zuerst, dann and zum Schluss organise a story. When they come first, the verb comes before ich.'
],`
D’abord, je suis allé au marché.|Zuerst bin ich zum Markt gegangen.|First, I went to the market.|Start your story; a woman writes allée in French.|Allé and allée sound the same.|The ch in ich is a soft breathy sound.
Ensuite, j’ai acheté du pain.|Dann habe ich Brot gekauft.|Then, I bought bread.|Add the next event.|The ai in pain is nasal.|The au in gekauft sounds like ow.
Enfin, je suis rentré chez moi.|Zum Schluss bin ich nach Hause gegangen.|Finally, I went home.|Finish the sequence; a woman writes rentrée in French.|The en in rentré is nasal.|The sch in Schluss sounds like sh.
C’était une bonne journée.|Es war ein schöner Tag.|It was a good day.|Add a short opinion about the day.|The j in journée sounds like zh.|The ö in schöner is rounded.
`,['Qu’est-ce que tu as fait ?|D’abord, je suis allé au marché. Ensuite, j’ai acheté du pain. Enfin, je suis rentré chez moi.','Was hast du gemacht?|Zuerst bin ich zum Markt gegangen. Dann habe ich Brot gekauft. Zum Schluss bin ich nach Hause gegangen.'],['What happened after the visit to the market?','Buying bread','Going to class','Missing a bus'],3,'food');
// 88
addTownLesson('Compare two plans','Choose an activity and explain your preference.',[
 'Plus … que compares two things. Moins … que means less … than.',
 'A comparative such as ruhiger is followed by als. Lieber expresses a preference for an action.'
],`
Le parc est plus calme que le centre-ville.|Der Park ist ruhiger als das Stadtzentrum.|The park is quieter than the town centre.|Compare two places.|The final e in calme is silent.|Stress the first syllable of ruhiger.
Le bus est moins cher que le taxi.|Der Bus ist günstiger als das Taxi.|The bus is cheaper than the taxi.|Compare the cost of transport.|The final s in moins is silent here.|The ü in günstiger is rounded.
Je préfère rester dehors.|Ich bleibe lieber draußen.|I prefer to stay outside.|Choose an outdoor activity.|The final s in dehors is silent.|The ß in draußen sounds like s.
Les deux idées me plaisent.|Beide Ideen gefallen mir.|I like both ideas.|Keep both options open.|The ent ending in plaisent is silent.|The ei in beide sounds like eye.
`,['On prend un taxi ?|Le bus est moins cher que le taxi.|D’accord, prenons le bus.','Nehmen wir ein Taxi?|Der Bus ist günstiger als das Taxi.|Gut, nehmen wir den Bus.'],['Why do they choose the bus?','It is cheaper','It is quieter','It is closer'],2,'travel');
// 89
addTownLesson('Keep the exchange going','Ask a follow-up question and close a conversation.',[
 'Et toi is informal and you. Qu’est-ce que introduces a what question.',
 'Und du is informal and you. In a question with was, the verb follows the question word.'
],`
Et toi, qu’est-ce que tu en penses ?|Und du, was denkst du darüber?|And you, what do you think about it?|Invite the other person’s opinion.|The en in penses is nasal.|The ü in darüber is rounded.
Pourquoi pas ?|Warum nicht?|Why not?|Accept a suggestion casually.|The oi in pourquoi sounds like wa.|Stress rum in warum.
Ça me plaît beaucoup.|Das gefällt mir sehr.|I like that a lot.|Respond positively to an idea.|The final p in beaucoup is silent.|The ä in gefällt is an open vowel.
Merci pour cette conversation.|Danke für das Gespräch.|Thank you for this conversation.|Close an exchange warmly.|The tion in conversation sounds like syon.|The ä in Gespräch is a long open vowel.
`,['On va au parc ?|Pourquoi pas ? Ça me plaît beaucoup.','Gehen wir in den Park?|Warum nicht? Das gefällt mir sehr.'],['How does the listener respond?','They like the suggestion','They refuse it','They ask for directions'],0);
// 90
addEverydayCheckpoint('Checkpoint: a day around town',[[68,0],[69,0],[86,0],[88,1],[89,3]],[
 'On se retrouve devant la gare ?|Il pleut. Je reste ici parce qu’il pleut.|On prend un taxi ?|Le bus est moins cher que le taxi.|D’accord, prenons le bus.',
 'Wir treffen uns vor dem Bahnhof?|Es regnet. Ich bleibe hier, weil es regnet.|Nehmen wir ein Taxi?|Der Bus ist günstiger als das Taxi.|Gut, nehmen wir den Bus.'
],['Which transport do they agree to take?','The bus','A taxi','A train'],'Explain that you are staying here because it is raining.',2,'Arrange a meeting, explain a weather problem, compare two ways to travel, and agree on a plan. Repeat with a different place and reason.','travel');
