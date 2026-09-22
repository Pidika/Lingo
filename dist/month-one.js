// Original beginner material. Days are learning units, not proficiency guarantees.
// phrase rows: target | meaning | usage tip | pronunciation tip.
function addMonthLesson(lang, title, goal, grammar, rows, dialogue, listen, task, answerIndex, speak, imageKey='') {
  const phrases=rows.trim().split('\n').map(row=>row.split('|').map(s=>s.trim()));
  COURSE[lang].lessons.push({title,goal,grammar,phrases,dialogue:dialogue.split('|'),
    listening:{question:listen[0],answer:listen[1],options:listen.slice(1)},
    question:task,answer:phrases[answerIndex][0],options:phrases.map(p=>p[0]),
    speak,imageKey,checkpoint:[14,21,28,30].includes(COURSE[lang].lessons.length+1)});
}
// Days 8–14: people and places.
addMonthLesson('fr','Where are you from?','Ask where someone is from and where they live.',
  'Je means I. Je viens de tells your origin; j’habite à tells where you live. Use à before a city.',`
Je viens du Nigeria.|I come from Nigeria.|Say your country of origin. Du is used with le Nigeria.|The final s in viens is silent.
J’habite à Lagos.|I live in Lagos.|Use j’habite à before the name of a city.|The h in habite is silent; link j directly to habite.
Vous venez d’où ?|Where are you from? (polite)|Ask an unfamiliar adult about their origin.|Où sounds like oo. The accent distinguishes where from or in writing.
Vous habitez où ?|Where do you live? (polite)|Ask about someone’s home city, not their street address.|The s in vous links to habitez with a z sound.`,
  'Bonjour ! Vous venez d’où ?|Je viens du Nigeria.|Vous habitez où ?|J’habite à Lagos.',
  ['Which city does the speaker live in?','Lagos','Paris','Berlin'],
  'Tell someone which city you live in.',1,'Greet someone, name your country and city, then ask where they live. Use the model names for speech checks; personalise them afterwards.');
addMonthLesson('de','Where are you from?','Ask where someone is from and where they live.',
  'Ich means I. Aus introduces your country of origin; in introduces your home city.',`
Ich komme aus Nigeria.|I come from Nigeria.|Use aus to say your country of origin.|The double m in komme follows a short vowel.
Ich wohne in Lagos.|I live in Lagos.|Use wohnen for living in a place.|The w in wohne sounds like English v.
Woher kommen Sie?|Where are you from? (polite)|Woher asks about origin. Sie is polite.|Stress her in woher.
Wo wohnen Sie?|Where do you live? (polite)|Wo asks where someone lives.|Both w sounds are like English v.`,
  'Guten Tag! Woher kommen Sie?|Ich komme aus Nigeria.|Wo wohnen Sie?|Ich wohne in Lagos.',
  ['Which city does the speaker live in?','Lagos','Paris','Berlin'],
  'Tell someone which city you live in.',1,'Introduce your country and city, then ask the other person where they live. Use model names for checks and your own details afterwards.');
addMonthLesson('fr','The languages you speak','Say which languages you speak and are learning.',
  'After je, parler becomes parle. Un peu means a little. Language names normally use lower-case letters.',`
Je parle anglais.|I speak English.|Tell someone a language you already speak.|The final s in anglais is silent.
Je parle un peu français.|I speak a little French.|Un peu keeps your claim realistic as a beginner.|Peu ends in a rounded vowel, with no final consonant.
J’apprends le français.|I am learning French.|Use apprends to describe learning in progress.|The final ds in apprends is silent.
Vous parlez anglais ?|Do you speak English? (polite)|Ask whether you share a language.|The z at the end of parlez is not pronounced as z.`,
  'Bonjour ! Vous parlez anglais ?|Oui, je parle anglais.|Vous parlez français ?|Je parle un peu français.',
  ['How much French does the second speaker say they speak?','A little','None','Fluently'],
  'Explain that you are learning French.',2,'Say which language you speak, that you are learning French, and ask whether the other person speaks English.');
addMonthLesson('de','The languages you speak','Say which languages you speak and are learning.',
  'Ich spreche means I speak; Sie sprechen means you speak politely. Ein bisschen means a little.',`
Ich spreche Englisch.|I speak English.|Name a language you already speak.|Sp at the start of spreche sounds like shp.
Ich spreche ein bisschen Deutsch.|I speak a little German.|Use ein bisschen when you know just a little.|Deutsch ends with the sound ch as in English church.
Ich lerne Deutsch.|I am learning German.|Lerne describes what you are learning now.|The final e in lerne is unstressed.
Sprechen Sie Englisch?|Do you speak English? (polite)|A yes-or-no question starts with the verb sprechen.|English and Englisch are spelled and pronounced differently; listen to the model.`,
  'Sprechen Sie Englisch?|Ja, ich spreche Englisch.|Sprechen Sie Deutsch?|Ich spreche ein bisschen Deutsch.',
  ['How much German does the second speaker say they speak?','A little','None','Fluently'],
  'Explain that you are learning German.',2,'Say which language you speak, that you are learning German, and ask whether the other person speaks English.');
addMonthLesson('fr','Meet my family','Introduce two family members.',
  'Ma goes with feminine nouns and mon with masculine nouns. They agree with the family word, not with your gender.',`
C’est ma mère.|This is my mother.|Use ma with mère.|The è in mère has an open vowel sound.
C’est mon père.|This is my father.|Use mon with père.|The final e in père is not a separate syllable.
J’ai une sœur.|I have a sister.|J’ai means I have.|The œu in sœur is a rounded vowel; listen and repeat.
J’ai un frère.|I have a brother.|Use un before the masculine noun frère.|Frère begins with f and r together.`,
  'Bonjour ! C’est ma mère.|Bonjour !|J’ai une sœur. Et toi ?|J’ai un frère.',
  ['Who is introduced at the beginning?','A mother','A father','A brother'],
  'Point out your father in a family picture.',1,'Use a real or imaginary family. Introduce a parent and say whether you have a brother or sister.');
addMonthLesson('de','Meet my family','Introduce two family members.',
  'Meine goes with Mutter here; mein goes with Vater. After ich habe, use einen Bruder but eine Schwester.',`
Das ist meine Mutter.|This is my mother.|Use meine before Mutter.|The u in Mutter is short.
Das ist mein Vater.|This is my father.|Use mein before Vater.|The v in Vater sounds like f.
Ich habe eine Schwester.|I have a sister.|Habe means have.|Schw in Schwester starts with sh followed by v.
Ich habe einen Bruder.|I have a brother.|Use einen with Bruder after habe.|The u in Bruder is long.`,
  'Hallo! Das ist meine Mutter.|Guten Tag!|Ich habe eine Schwester. Und du?|Ich habe einen Bruder.',
  ['Who is introduced at the beginning?','A mother','A father','A brother'],
  'Point out your father in a family picture.',1,'Introduce a parent from a real or imaginary family, then talk about a sibling.');
addMonthLesson('fr','A place to call home','Describe your home using short sentences.',
  'Un and une mean a or an. Learn the noun with its article: une maison, un appartement.',`
J’habite dans une maison.|I live in a house.|Dans means in when describing your type of home.|The s in dans is silent.
J’habite dans un appartement.|I live in an apartment.|Use un with appartement.|The final t in appartement is silent.
Voici la cuisine.|Here is the kitchen.|Use voici when showing someone a room.|The s in cuisine sounds like z.
Voici ma chambre.|Here is my bedroom.|Chambre can mean bedroom or room.|The ch in chambre sounds like English sh.`,
  'J’habite dans un appartement.|Voici la cuisine.|Merci ! Et ta chambre ?|Voici ma chambre.',
  ['What kind of home does the speaker live in?','An apartment','A house','A hotel'],
  'Show someone the kitchen.',2,'Describe your home, or an imaginary home. Show the kitchen and bedroom as if giving a short tour.');
addMonthLesson('de','A place to call home','Describe your home using short sentences.',
  'In einer Wohnung and in einem Haus describe location. Learn these useful phrases as chunks for now.',`
Ich wohne in einem Haus.|I live in a house.|Use this to describe a house as your home.|The au in Haus sounds like English ow in now.
Ich wohne in einer Wohnung.|I live in an apartment.|Wohnung means apartment.|The w in Wohnung sounds like v; the h lengthens the vowel.
Hier ist die Küche.|Here is the kitchen.|Use hier ist to show a room.|Round your lips for the ü in Küche.
Hier ist mein Zimmer.|Here is my room.|Zimmer is a room; this can refer to your own room.|The z in Zimmer sounds like ts.`,
  'Ich wohne in einer Wohnung.|Hier ist die Küche.|Danke! Und dein Zimmer?|Hier ist mein Zimmer.',
  ['What kind of home does the speaker live in?','An apartment','A house','A hotel'],
  'Show someone the kitchen.',2,'Describe a real or imaginary home and show a visitor two rooms.');
addMonthLesson('fr','Things around you','Name and ask about everyday objects.',
  'C’est means it is or this is. Un means a or an before masculine nouns such as livre and téléphone.',`
C’est un livre.|It is a book.|Use un before livre.|The final e in livre is usually silent.
C’est un téléphone.|It is a phone.|Use this to identify an object.|Each é in téléphone has a clear vowel sound.
J’ai un sac.|I have a bag.|J’ai tells what you have.|The c in sac is pronounced.
C’est votre livre ?|Is this your book? (polite)|Votre politely means your here.|Raise your intonation to turn this statement pattern into a question.`,
  'C’est votre livre ?|Oui, merci !|Et ça ?|C’est un téléphone.',
  ['Which object belongs to the person?','A book','A bag','A key'],
  'Say that you have a bag.',2,'Point to three objects or imagine them. Name two, then ask if a book belongs to someone.');
addMonthLesson('de','Things around you','Name and ask about everyday objects.',
  'Das ist introduces an object. After ich habe, masculine ein becomes einen: einen Rucksack.',`
Das ist ein Buch.|It is a book.|Buch is a neuter noun: das Buch.|The ch in Buch is the deeper sound used after u.
Das ist ein Handy.|It is a mobile phone.|Handy is the usual German word for a mobile phone.|The word Handy is used differently from the English adjective handy.
Ich habe einen Rucksack.|I have a backpack.|Use einen after habe with Rucksack.|The ck in Rucksack sounds like k.
Ist das Ihr Buch?|Is this your book? (polite)|Ihr with a capital I is the polite your.|The h in Ihr lengthens the vowel; it is not a separate h sound.`,
  'Ist das Ihr Buch?|Ja, danke!|Und das?|Das ist ein Handy.',
  ['Which object belongs to the person?','A book','A backpack','A key'],
  'Say that you have a backpack.',2,'Name two objects and ask whether a book belongs to someone.');
addMonthLesson('fr','Counting to ten','Recognise numbers from six to ten.',
  'Numbers help with quantities and prices. Practise them in a random order as well as counting upwards.',`
six|six|Count six objects.|On its own, six ends in an s sound.
sept|seven|Use this for a quantity of seven.|The p is silent; the final t is pronounced.
huit|eight|Use this for the number eight.|The final t is pronounced when counting.
neuf|nine|Use this for the number nine.|The final f is pronounced.
dix|ten|Use this for a quantity of ten.|On its own, dix ends in an s sound.`,
  'Combien ?|Six.|Six ?|Non, sept. Pardon !',
  ['What is the corrected number?','Seven','Six','Ten'],
  'Which word means eight?',2,'Count from one to ten, then say ten, eight, and six without reading.');
addMonthLesson('de','Counting to ten','Recognise numbers from six to ten.',
  'Learn six to ten, then mix them with one to five. Quantities will help in the café lessons.',`
sechs|six|Count six objects.|The chs in sechs sounds like ks.
sieben|seven|Use this for a quantity of seven.|The ie makes a long ee sound.
acht|eight|Use this for the number eight.|The ch is the deeper sound used after a.
neun|nine|Use this for the number nine.|Eu sounds like oy.
zehn|ten|Use this for a quantity of ten.|The z sounds like ts; the h lengthens the vowel.`,
  'Wie viele?|Sechs.|Sechs?|Nein, sieben. Entschuldigung!',
  ['What is the corrected number?','Seven','Six','Ten'],
  'Which word means eight?',2,'Count one to ten, then say ten, eight, and six without looking.');
addMonthLesson('fr','Checkpoint: meet a neighbour','Combine introductions, home, and family.',
  'Review je m’appelle, j’habite, and j’ai. Each starts a different piece of information about you.',`
Je m’appelle Alex.|My name is Alex.|Begin an introduction. Use Alex during the model check.|Link m directly to appelle.
J’habite à Lagos.|I live in Lagos.|Tell your neighbour which city you live in.|The h in habite is silent.
J’ai un frère.|I have a brother.|Give one piece of family information.|Say j’ai as one short unit.
Vous parlez anglais ?|Do you speak English? (polite)|Ask whether you share a language.|The ending -ez in parlez sounds like é.`,
  'Bonjour ! Je m’appelle Alex.|Bonjour ! Vous habitez où ?|J’habite à Lagos. Et vous ?|J’habite à Paris.',
  ['Where does Alex live?','Lagos','Paris','Berlin'],
  'Ask your neighbour whether they speak English.',3,'Speak for about 45 seconds: greet a neighbour, introduce yourself, name your city, mention family, and ask a question. Then repeat with one detail changed.');
addMonthLesson('de','Checkpoint: meet a neighbour','Combine introductions, home, and family.',
  'Review ich heiße, ich wohne, and ich habe. The verb stays immediately after ich in these statements.',`
Ich heiße Alex.|My name is Alex.|Begin an introduction. Use Alex during the model check.|Ei sounds like eye and ß like ss.
Ich wohne in Lagos.|I live in Lagos.|Tell your neighbour which city you live in.|The w in wohne sounds like v.
Ich habe einen Bruder.|I have a brother.|Give one piece of family information.|Keep einen before Bruder after habe.
Sprechen Sie Englisch?|Do you speak English? (polite)|Ask whether you share a language.|Start sprechen with a shp sound.`,
  'Hallo! Ich heiße Alex.|Guten Tag! Wo wohnen Sie?|Ich wohne in Lagos. Und Sie?|Ich wohne in Berlin.',
  ['Where does Alex live?','Lagos','Paris','Berlin'],
  'Ask your neighbour whether they speak English.',3,'Speak for about 45 seconds: greet a neighbour, introduce yourself, name your city, mention family, and ask a question. Repeat with a different detail.');
// Days 15–21: food and daily life.
addMonthLesson('fr','Something to eat','Ask for simple food politely.',
  'Je voudrais means I would like. Du, de la, and de l’ can mean some when talking about food.',`
Je voudrais du pain.|I would like some bread.|Use du with the masculine noun pain.|Pain ends with a nasal vowel, not a pronounced n.
Je voudrais du riz.|I would like some rice.|Use this to request rice.|The final z in riz is silent.
Je voudrais une pomme.|I would like an apple.|Une is used for one apple.|The final e in pomme is not a separate syllable.
J’ai faim.|I am hungry.|French uses I have hunger, not I am hunger.|Faim has a nasal vowel and a silent final m.`,
  'Bonjour !|Bonjour ! Je voudrais du pain, s’il vous plaît.|Et une pomme ?|Oui, merci.',
  ['What does the customer ask for first?','Bread','Rice','An apple'],
  'Say that you are hungry.',3,'Imagine choosing breakfast. Say you are hungry, ask for bread and an apple, and say thank you.','food');
addMonthLesson('de','Something to eat','Ask for simple food politely.',
  'Ich möchte means I would like. Use einen with the masculine noun Apfel after möchte.',`
Ich möchte Brot.|I would like bread.|Use this as a polite food request.|Brot has a long o sound.
Ich möchte Reis.|I would like rice.|Use this to request rice.|Ei in Reis sounds like eye.
Ich möchte einen Apfel.|I would like an apple.|Einen goes with Apfel here.|Pf in Apfel combines p and f closely.
Ich habe Hunger.|I am hungry.|German uses I have hunger.|The u in Hunger is short.`,
  'Guten Tag!|Guten Tag! Ich möchte Brot, bitte.|Und einen Apfel?|Ja, danke.',
  ['What does the customer ask for first?','Bread','Rice','An apple'],
  'Say that you are hungry.',3,'Choose an imaginary breakfast. Say you are hungry, ask for bread and an apple, and thank the person.','food');
addMonthLesson('fr','Something to drink','Order a drink and say you are thirsty.',
  'De l’ is used before a vowel sound, as in de l’eau. Un thé and un café refer to servings of drinks.',`
Je voudrais de l’eau.|I would like some water.|Use this to ask for water.|Eau sounds like o.
Un thé, s’il vous plaît.|A tea, please.|Order one serving of tea politely.|Th is pronounced t, not the English th sound.
Un café, s’il vous plaît.|A coffee, please.|Order one serving of coffee.|The final é is clearly pronounced.
J’ai soif.|I am thirsty.|French uses I have thirst.|Oi sounds like wa; pronounce the final f.`,
  'J’ai soif.|Un thé ?|Non, merci. Je voudrais de l’eau.|D’accord.',
  ['Which drink does the speaker choose?','Water','Tea','Coffee'],
  'Order a tea politely.',1,'Say you are thirsty, order a drink, and politely decline a different drink.','cafe');
addMonthLesson('de','Something to drink','Order a drink and say you are thirsty.',
  'Use einen with Tee and Kaffee after möchte. Wasser can be requested without an article in this sentence.',`
Ich möchte Wasser.|I would like water.|Ask for water with this polite request.|The w sounds like v; the a is short.
Einen Tee, bitte.|A tea, please.|Order one serving of tea.|The ee in Tee is a long vowel.
Einen Kaffee, bitte.|A coffee, please.|Order one serving of coffee.|Listen to the stress on the first syllable of Kaffee.
Ich habe Durst.|I am thirsty.|German uses I have thirst.|Pronounce the final st together.`,
  'Ich habe Durst.|Einen Tee?|Nein, danke. Ich möchte Wasser.|Gut.',
  ['Which drink does the speaker choose?','Water','Tea','Coffee'],
  'Order a tea politely.',1,'Say you are thirsty, order a drink, and politely decline a different drink.','cafe');
addMonthLesson('fr','At the café','Order, specify a preference, and ask for the bill.',
  'Sans means without. L’addition is the bill in a café or restaurant. Je voudrais keeps requests polite.',`
Je voudrais un café.|I would like a coffee.|Use the full polite request when ordering.|Join voudrais and un naturally.
Sans sucre, s’il vous plaît.|Without sugar, please.|Use sans before an ingredient you do not want.|The s at the end of sans is silent.
C’est tout, merci.|That is all, thank you.|Say this when you have finished ordering.|The final t in tout is silent here.
L’addition, s’il vous plaît.|The bill, please.|Ask to pay after your meal or drink.|The -tion in addition sounds like syon.`,
  'Bonjour ! Je voudrais un café.|Avec du sucre ?|Sans sucre, s’il vous plaît.|D’accord.',
  ['How does the customer want the coffee?','Without sugar','With sugar','With milk'],
  'Ask for the bill.',3,'Order a coffee without sugar. Say that is all, then ask for the bill. Change the drink on your second attempt.','cafe');
addMonthLesson('de','At the café','Order, specify a preference, and ask for the bill.',
  'Ohne means without. Die Rechnung is the bill. Bitte makes a short request polite.',`
Ich möchte einen Kaffee.|I would like a coffee.|Use the full polite request when ordering.|Keep the unstressed ending of einen light.
Ohne Zucker, bitte.|Without sugar, please.|Put ohne before an ingredient you do not want.|Z in Zucker sounds like ts.
Das ist alles, danke.|That is all, thank you.|Say this when you finish ordering.|The a in alles is short.
Die Rechnung, bitte.|The bill, please.|Ask to pay after eating or drinking.|The ch in Rechnung is the softer German ch sound.`,
  'Guten Tag! Ich möchte einen Kaffee.|Mit Zucker?|Ohne Zucker, bitte.|Gut.',
  ['How does the customer want the coffee?','Without sugar','With sugar','With milk'],
  'Ask for the bill.',3,'Order a coffee without sugar. Finish your order, then ask for the bill. Repeat with another drink.','cafe');
addMonthLesson('fr','How much is it?','Ask a price and choose how to pay.',
  'Combien asks how much or how many. Ça coûte introduces a price. These euro examples are practice amounts.',`
Ça coûte combien ?|How much does it cost?|Ask the price before buying.|The final e in coûte is not a separate syllable.
Ça coûte cinq euros.|It costs five euros.|Practise a price using a number you know.|Link the k sound of cinq to euros.
Je paie par carte.|I am paying by card.|Tell the seller your payment method.|Paie sounds like a single syllable.
Je paie en espèces.|I am paying in cash.|Use en espèces for cash.|The è in espèces is an open vowel.`,
  'Ça coûte combien ?|Ça coûte cinq euros.|Je paie par carte.|Merci !',
  ['How will the customer pay?','By card','In cash','They will not pay'],
  'Ask the price of an item.',0,'Ask the price of an imaginary item, repeat a price from one to ten euros, and choose cash or card.');
addMonthLesson('de','How much is it?','Ask a price and choose how to pay.',
  'Wie viel asks how much. Das kostet introduces a price. Euro normally stays Euro after a number in prices.',`
Wie viel kostet das?|How much does it cost?|Ask the price before buying.|V in viel sounds like f.
Das kostet fünf Euro.|It costs five euros.|Practise a price using a number you know.|Eu in Euro sounds like oy.
Ich zahle mit Karte.|I am paying by card.|Tell the seller your payment method.|Z in zahle sounds like ts.
Ich zahle bar.|I am paying in cash.|Bar means in cash here.|The a in bar is long.`,
  'Wie viel kostet das?|Das kostet fünf Euro.|Ich zahle mit Karte.|Danke!',
  ['How will the customer pay?','By card','In cash','They will not pay'],
  'Ask the price of an item.',0,'Ask a price, reply with an amount from one to ten euros, then choose cash or card.');
addMonthLesson('fr','What time is it?','Ask the time and understand whole hours.',
  'Il est introduces the time. Heure becomes heures after numbers greater than one.',`
Quelle heure est-il ?|What time is it?|Ask for the current time.|The h in heure is silent.
Il est huit heures.|It is eight o’clock.|Use this for eight on the clock.|The t in huit links to heures.
À neuf heures.|At nine o’clock.|Use à when giving the time of an activity.|The f in neuf is pronounced like v before heures.
À demain !|See you tomorrow!|Say goodbye when you expect to meet tomorrow.|Demain ends with a nasal vowel.`,
  'Quelle heure est-il ?|Il est huit heures.|Et le café ?|À neuf heures.',
  ['What time will they meet for coffee?','Nine o’clock','Eight o’clock','Five o’clock'],
  'Tell someone it is eight o’clock.',1,'Ask the time, answer with a whole hour, and arrange to meet at nine tomorrow.');
addMonthLesson('de','What time is it?','Ask the time and understand whole hours.',
  'Es ist introduces the time. Um is used for at when naming the time of an activity.',`
Wie spät ist es?|What time is it?|Ask for the current time.|Sp at the beginning of spät sounds like shp.
Es ist acht Uhr.|It is eight o’clock.|Uhr follows the hour number.|The h in Uhr lengthens the vowel.
Um neun Uhr.|At nine o’clock.|Use um before the time of an activity.|Eu in neun sounds like oy.
Bis morgen!|See you tomorrow!|Say goodbye when you expect to meet tomorrow.|The s in bis is pronounced.`,
  'Wie spät ist es?|Es ist acht Uhr.|Und der Kaffee?|Um neun Uhr.',
  ['What time will they meet for coffee?','Nine o’clock','Eight o’clock','Five o’clock'],
  'Tell someone it is eight o’clock.',1,'Ask the time, answer with a whole hour, and arrange to meet at nine tomorrow.');
addMonthLesson('fr','A simple daily routine','Describe three things you do in a day.',
  'Je takes the present-tense forms mange, travaille, and rentre. Use à with a clock time.',`
Je mange à huit heures.|I eat at eight o’clock.|Combine an activity with a time.|The g in mange sounds like the s in English measure.
Je travaille le matin.|I work in the morning.|Le matin can describe a regular morning activity.|The ending of travaille has a y-like sound.
Je rentre à la maison.|I go home.|Use rentrer for returning home.|The vowel in rentre is nasal.
Et vous ?|And you? (polite)|Invite the other person to describe their routine.|The t in et is silent.`,
  'Je mange à huit heures. Et vous ?|Je mange à neuf heures.|Je travaille le matin.|Moi aussi.',
  ['When does the first speaker eat?','At eight','At nine','At five'],
  'Say that you work in the morning.',1,'Describe eating, a morning activity, and returning home. Ask the other person about their day.');
addMonthLesson('de','A simple daily routine','Describe three things you do in a day.',
  'Ich is followed by esse, arbeite, or gehe. Use um for clock times and am Morgen for in the morning.',`
Ich esse um acht Uhr.|I eat at eight o’clock.|Combine an activity and a time.|The ss in esse follows a short vowel.
Ich arbeite am Morgen.|I work in the morning.|Am Morgen tells when you work.|The ei in arbeite sounds like eye.
Ich gehe nach Hause.|I go home.|Learn nach Hause as the chunk meaning homewards.|The h in gehe lengthens the first vowel.
Und Sie?|And you? (polite)|Invite the other person to describe their routine.|Sie sounds like zee.`,
  'Ich esse um acht Uhr. Und Sie?|Ich esse um neun Uhr.|Ich arbeite am Morgen.|Ich auch.',
  ['When does the first speaker eat?','At eight','At nine','At five'],
  'Say that you work in the morning.',1,'Describe eating, a morning activity, and going home. Ask the other person about their day.');
addMonthLesson('fr','Checkpoint: breakfast out','Complete a café visit from greeting to payment.',
  'Combine the chunks you already know. A polite request, a price question, and thanks make a useful exchange.',`
Je voudrais du pain.|I would like some bread.|Order a simple breakfast item.|Pain ends with a nasal vowel.
Un thé, s’il vous plaît.|A tea, please.|Add a drink to your order.|Th in thé sounds like t.
Ça coûte combien ?|How much does it cost?|Ask the total before paying.|Combien ends with a nasal vowel.
Je paie par carte.|I am paying by card.|Choose a payment method.|Carte has one main syllable.`,
  'Bonjour ! Je voudrais du pain et un thé.|Ça coûte cinq euros.|Je paie par carte.|Merci ! Au revoir !',
  ['What does the customer order?','Bread and tea','Rice and water','An apple and coffee'],
  'Tell the seller you will pay by card.',3,'Without looking: greet the server, order food and a drink, ask the price, choose payment, and say goodbye. Aim for about a minute.','cafe');
addMonthLesson('de','Checkpoint: breakfast out','Complete a café visit from greeting to payment.',
  'Combine known requests rather than translating a long English sentence. Bitte and danke keep the exchange polite.',`
Ich möchte Brot.|I would like bread.|Order a simple breakfast item.|Brot has a long o.
Einen Tee, bitte.|A tea, please.|Add a drink to your order.|Tee has a long vowel.
Wie viel kostet das?|How much does it cost?|Ask the total before paying.|The v in viel sounds like f.
Ich zahle mit Karte.|I am paying by card.|Choose a payment method.|The z in zahle sounds like ts.`,
  'Guten Tag! Ich möchte Brot und einen Tee.|Das kostet fünf Euro.|Ich zahle mit Karte.|Danke! Tschüss!',
  ['What does the customer order?','Bread and tea','Rice and water','An apple and coffee'],
  'Tell the seller you will pay by card.',3,'Without hints: greet the server, order food and a drink, ask the price, choose payment, and say goodbye. Aim for about a minute.','cafe');
// Days 22–30: preferences, getting around, and independent exchanges.
addMonthLesson('fr','What do you like?','Share a preference and ask about someone else.',
  'J’aime means I like. Je n’aime pas means I do not like. Keep le, la, or les when talking about things in general.',`
J’aime la musique.|I like music.|Use j’aime to describe a preference.|The s in musique sounds like z.
J’aime le football.|I like football.|Name an activity you enjoy.|Listen to the French pronunciation of this borrowed word.
Je n’aime pas le café.|I do not like coffee.|Ne and pas surround the verb; ne shortens to n’ before a vowel.|The final s in pas is silent.
Vous aimez la musique ?|Do you like music? (polite)|Ask whether someone shares your interest.|The s in vous links to aimez with a z sound.`,
  'Vous aimez la musique ?|Oui, j’aime la musique. Et vous ?|J’aime le football.|Moi aussi !',
  ['What do both speakers say they like?','Football','Coffee','Tea'],
  'Tell someone that you do not like coffee.',2,'Say two things you like and one you do not like. Ask whether someone shares one of your interests.');
addMonthLesson('de','What do you like?','Share a preference and ask about someone else.',
  'Ich mag means I like. With a noun such as Kaffee, keinen makes the meaning negative: keinen Kaffee.',`
Ich mag Musik.|I like music.|Use mag with something you like.|Stress the final syllable of Musik.
Ich mag Fußball.|I like football.|Name a sport you enjoy.|The ß sounds like ss.
Ich mag keinen Kaffee.|I do not like coffee.|Use keinen before masculine Kaffee in this sentence.|Ei in keinen sounds like eye.
Mögen Sie Musik?|Do you like music? (polite)|Mögen comes first in this yes-or-no question.|Round your lips for ö in mögen.`,
  'Mögen Sie Musik?|Ja, ich mag Musik. Und Sie?|Ich mag Fußball.|Ich auch!',
  ['What do both speakers say they like?','Football','Coffee','Tea'],
  'Tell someone that you do not like coffee.',2,'Say two things you like and one you do not like, then ask about someone else’s interests.');
addMonthLesson('fr','In your free time','Talk about simple hobbies.',
  'Je lis means I read. Je joue au is used with football. Je fais une promenade means I take a walk.',`
Je lis un livre.|I am reading a book.|French present tense can mean I read or I am reading.|The final s in lis is silent.
Je joue au football.|I play football.|Use au before football after joue.|J in joue has the sound in English measure.
Je fais une promenade.|I take a walk.|Use faire une promenade for going for a walk.|Fais has an open vowel sound; its final s is usually silent in everyday speech.
Qu’est-ce que vous faites ?|What are you doing? (polite)|Ask about someone’s activity.|Faites ends with a pronounced t sound.`,
  'Qu’est-ce que vous faites ?|Je lis un livre. Et vous ?|Je fais une promenade.|Bonne promenade !',
  ['What is the second speaker doing?','Reading a book','Playing football','Drinking tea'],
  'Say that you take a walk.',2,'Describe two hobbies and ask what another person is doing. Then answer as that person.');
addMonthLesson('de','In your free time','Talk about simple hobbies.',
  'The German present tense covers both I read and I am reading. After ich lese, use ein Buch.',`
Ich lese ein Buch.|I am reading a book.|Describe reading now or as a regular activity.|The s in lese sounds like z.
Ich spiele Fußball.|I play football.|Use spielen for playing a sport or game.|Sp at the start of spiele sounds like shp.
Ich gehe spazieren.|I go for a walk.|Learn gehe spazieren as a useful activity phrase.|The z in spazieren sounds like ts.
Was machen Sie?|What are you doing? (polite)|Ask about someone’s activity.|The ch in machen is the deeper ch sound after a.`,
  'Was machen Sie?|Ich lese ein Buch. Und Sie?|Ich gehe spazieren.|Viel Spaß!',
  ['What is the second speaker doing?','Reading a book','Playing football','Drinking tea'],
  'Say that you go for a walk.',2,'Describe two hobbies, ask what someone is doing, then answer as that person.');
addMonthLesson('fr','What is the weather like?','Describe the weather in a short exchange.',
  'French weather expressions often start with il. Use il fait for hot or cold, but il pleut for rain.',`
Il fait chaud.|It is hot.|Use this for hot weather.|The final d in chaud is silent.
Il fait froid.|It is cold.|Use this for cold weather.|Oi in froid sounds like wa; the final d is silent.
Il pleut.|It is raining.|Pleut is the rain verb in this expression.|The final t is silent.
Il y a du soleil.|It is sunny.|Literally, there is sunshine.|The end of soleil has a y-like sound.`,
  'Il fait froid aujourd’hui.|Oui, et il pleut.|Je rentre à la maison.|Moi aussi.',
  ['What is the weather like?','Cold and rainy','Hot and sunny','Cold and sunny'],
  'Say that it is sunny.',3,'Look outside or imagine a day. Describe the weather with two sentences and say whether you will go home.');
addMonthLesson('de','What is the weather like?','Describe the weather in a short exchange.',
  'Use es ist with weather adjectives, but es regnet for it is raining. Es stands in for the weather situation.',`
Es ist heiß.|It is hot.|Use this for hot weather.|Ei sounds like eye, and ß sounds like ss.
Es ist kalt.|It is cold.|Use this for cold weather.|Pronounce the final t in kalt.
Es regnet.|It is raining.|Regnet describes rain happening now.|Keep regnet as two syllables.
Die Sonne scheint.|The sun is shining.|Use this on a sunny day.|Sch in scheint sounds like sh.`,
  'Es ist kalt heute.|Ja, und es regnet.|Ich gehe nach Hause.|Ich auch.',
  ['What is the weather like?','Cold and rainy','Hot and sunny','Cold and sunny'],
  'Say that the sun is shining.',3,'Describe today’s weather or an imaginary day, then say whether you will go home.');
addMonthLesson('fr','Finding your way','Ask where the station is and follow simple directions.',
  'Où asks where. À gauche and à droite give directions; tout droit means straight ahead.',`
Où est la gare ?|Where is the station?|Use gare for a railway station.|The final e in gare is not a separate syllable.
À gauche.|To the left.|Use this to give a direction.|The ch in gauche sounds like sh.
À droite.|To the right.|Use this to give a direction.|Oi sounds like wa; pronounce the t.
Tout droit.|Straight ahead.|Use this when no turn is needed.|The final t in droit is silent, unlike droite.`,
  'Pardon. Où est la gare ?|Tout droit, puis à gauche.|À gauche ?|Oui.',
  ['After going straight, which way should you turn?','Left','Right','Back'],
  'Tell someone to go straight ahead.',3,'Ask for the station, then give directions using straight ahead and left or right. Draw a simple route to help you practise.','travel');
addMonthLesson('de','Finding your way','Ask where the station is and follow simple directions.',
  'Wo ist asks where something is. Learn directions as short chunks before making longer sentences.',`
Wo ist der Bahnhof?|Where is the station?|Bahnhof is a railway station.|The h in Bahn lengthens the a.
Nach links.|To the left.|Use this to give a direction.|The final ks in links is pronounced.
Nach rechts.|To the right.|Use this to give a direction.|Listen carefully to ch followed by ts in rechts.
Geradeaus.|Straight ahead.|Use this when no turn is needed.|The ending aus has the vowel in English now.`,
  'Entschuldigung. Wo ist der Bahnhof?|Geradeaus, dann nach links.|Nach links?|Ja.',
  ['After going straight, which way should you turn?','Left','Right','Back'],
  'Tell someone to go straight ahead.',3,'Ask for the station, then give directions using straight ahead and left or right. Sketch a route as you practise.','travel');
addMonthLesson('fr','Getting around','Name transport and ask about a bus.',
  'Je prends means I take. Use le before bus or train. Où est asks about a place or object.',`
Je prends le bus.|I take the bus.|Describe how you travel.|The s in bus is pronounced.
Je prends le train.|I take the train.|Describe a railway journey.|Train ends with a nasal vowel.
Où est l’arrêt de bus ?|Where is the bus stop?|Use this when you need to find a bus stop.|The t in arrêt is silent.
Ce bus va à la gare ?|Does this bus go to the station?|Check your destination before boarding.|Ce is unstressed; emphasise gare for the destination.`,
  'Ce bus va à la gare ?|Oui.|Merci ! Je prends le bus.|De rien.',
  ['Where does the bus go?','The station','The café','The house'],
  'Ask where the bus stop is.',2,'Ask for a bus stop and check if the bus goes to the station. Then explain how you travel.','travel');
addMonthLesson('de','Getting around','Name transport and ask about a bus.',
  'Ich nehme means I take. Masculine der becomes den after nehme: den Bus, den Zug.',`
Ich nehme den Bus.|I take the bus.|Describe how you travel.|The u in Bus is short.
Ich nehme den Zug.|I take the train.|Describe a railway journey.|Z sounds like ts; final g sounds like k.
Wo ist die Bushaltestelle?|Where is the bus stop?|Learn Haltestelle as stop in a transport setting.|Break the long noun into Bus, Halte, and Stelle while practising.
Fährt dieser Bus zum Bahnhof?|Does this bus go to the station?|Check the bus destination before boarding.|The ä in fährt is a long vowel.`,
  'Fährt dieser Bus zum Bahnhof?|Ja.|Danke! Ich nehme den Bus.|Bitte.',
  ['Where does the bus go?','The station','The café','The house'],
  'Ask where the bus stop is.',2,'Ask for a bus stop, check the destination, and say how you travel.','travel');
addMonthLesson('fr','Making a small plan','Invite someone and agree on a simple plan.',
  'On can mean we in everyday speech. Demain means tomorrow; aujourd’hui means today.',`
On va au café ?|Shall we go to the café?|Use on to suggest a shared activity.|The final n in on is not pronounced separately.
Demain, à neuf heures.|Tomorrow, at nine o’clock.|Suggest a day and time.|The f in neuf sounds like v before heures.
D’accord.|Okay / Agreed.|Accept a suggestion.|The final d in accord is silent.
Pas aujourd’hui, merci.|Not today, thank you.|Decline politely without a long explanation.|Aujourd’hui contains several linked vowel sounds; listen slowly.`,
  'On va au café ?|D’accord. Demain ?|Oui, demain, à neuf heures.|À demain !',
  ['When do they agree to meet?','Tomorrow at nine','Today at nine','Tomorrow at eight'],
  'Politely decline an invitation for today.',3,'Invite someone to a café, agree on tomorrow at nine, then practise politely declining a different invitation.','cafe');
addMonthLesson('de','Making a small plan','Invite someone and agree on a simple plan.',
  'Wir means we. With gehen first, Gehen wir…? can suggest doing something together.',`
Gehen wir ins Café?|Shall we go to the café?|Use this to suggest going together.|Café has stress on the final syllable.
Morgen um neun Uhr.|Tomorrow at nine o’clock.|Suggest a day and time.|Eu in neun sounds like oy.
Einverstanden.|Agreed.|Accept a suggestion.|The v in verstanden sounds like f.
Heute nicht, danke.|Not today, thank you.|Decline politely without a long explanation.|Eu in heute sounds like oy.`,
  'Gehen wir ins Café?|Einverstanden. Morgen?|Ja, morgen um neun Uhr.|Bis morgen!',
  ['When do they agree to meet?','Tomorrow at nine','Today at nine','Tomorrow at eight'],
  'Politely decline an invitation for today.',3,'Invite someone to a café, agree on tomorrow at nine, then practise declining an invitation for today.','cafe');
addMonthLesson('fr','Checkpoint: a day out','Ask directions, choose transport, and make a plan.',
  'Use short sentences confidently. Ask one question at a time and repeat important details to check understanding.',`
Où est la gare ?|Where is the station?|Start by asking for the railway station.|Gare ends with the French r sound.
Je prends le bus.|I take the bus.|Say which transport you choose.|Pronounce the final s in bus.
On va au café ?|Shall we go to the café?|Suggest where to meet.|The é in café is clearly pronounced.
Demain, à neuf heures.|Tomorrow, at nine o’clock.|Confirm a meeting time.|Link neuf to heures with a v sound.`,
  'On va au café demain ?|D’accord. À neuf heures ?|Oui. Je prends le bus.|Moi, je prends le train.',
  ['How does the final speaker travel?','By train','By bus','On foot'],
  'Suggest meeting at a café.',2,'Without hints, plan a day out: ask for the station, choose transport, invite someone to a café, and agree on a time. Aim for one minute.','travel');
addMonthLesson('de','Checkpoint: a day out','Ask directions, choose transport, and make a plan.',
  'Use short sentences and repeat the time or destination to check understanding. Combine familiar chunks.',`
Wo ist der Bahnhof?|Where is the station?|Start by asking for the railway station.|Bahn has a long a.
Ich nehme den Bus.|I take the bus.|Say which transport you choose.|The e in nehme is long.
Gehen wir ins Café?|Shall we go to the café?|Suggest where to meet.|Café is stressed on the final syllable.
Morgen um neun Uhr.|Tomorrow at nine o’clock.|Confirm a meeting time.|Keep neun and Uhr as separate clear words.`,
  'Gehen wir morgen ins Café?|Einverstanden. Um neun Uhr?|Ja. Ich nehme den Bus.|Ich nehme den Zug.',
  ['How does the final speaker travel?','By train','By bus','On foot'],
  'Suggest meeting at a café.',2,'Without hints, ask for the station, choose transport, suggest a café, and agree on a time. Aim for one minute.','travel');
addMonthLesson('fr','When you need help','Ask for help and explain a simple problem.',
  'Pouvez-vous…? is a polite way to ask can you. Use j’ai perdu to say you have lost something.',`
Pouvez-vous m’aider ?|Can you help me? (polite)|Use this to ask someone for assistance.|The ending -er in aider sounds like é.
J’ai perdu mon sac.|I have lost my bag.|Describe a missing item.|Round your lips for the u in perdu.
Où sont les toilettes ?|Where are the toilets?|Ask where the facilities are.|The final s in toilettes is silent.
Pouvez-vous écrire le mot ?|Can you write the word? (polite)|Ask for written help when listening is difficult.|The final t in mot is silent.`,
  'Pardon. Pouvez-vous m’aider ?|Oui.|J’ai perdu mon sac.|Votre sac ? D’accord.',
  ['What has the speaker lost?','A bag','A phone','A book'],
  'Ask someone to write the word.',3,'Imagine losing a bag. Politely ask for help, explain the problem, and ask for a word to be written down.');
addMonthLesson('de','When you need help','Ask for help and explain a simple problem.',
  'Können Sie…? politely asks can you. The other verb goes at the end: helfen or schreiben.',`
Können Sie mir helfen?|Can you help me? (polite)|Use mir with helfen when asking for help for yourself.|Round your lips for ö in können.
Ich habe meine Tasche verloren.|I have lost my bag.|Verloren describes losing something.|The v in verloren sounds like f.
Wo ist die Toilette?|Where is the toilet?|Ask where the facilities are.|Listen to the stress on the second syllable of Toilette.
Können Sie das Wort schreiben?|Can you write the word? (polite)|Ask for written help when listening is difficult.|Sch in schreiben sounds like sh, and ei like eye.`,
  'Entschuldigung. Können Sie mir helfen?|Ja.|Ich habe meine Tasche verloren.|Ihre Tasche? Gut.',
  ['What has the speaker lost?','A bag','A phone','A book'],
  'Ask someone to write the word.',3,'Imagine losing a bag. Ask for help, explain the problem, and ask for a word to be written down.');
addMonthLesson('fr','Your first month: connect and explore','Combine everyday skills in a longer exchange.',
  'This checkpoint mixes introductions, requests, directions, and repair phrases. Use simple language and ask for repetition when needed.',`
Je m’appelle Alex. J’habite à Lagos.|My name is Alex. I live in Lagos.|Give two pieces of information; personalise them after the model check.|Pause naturally between the two sentences.
Je voudrais de l’eau, s’il vous plaît.|I would like some water, please.|Make a complete polite request.|Link de and l’eau smoothly.
Où est la gare ?|Where is the station?|Ask a useful travel question.|Start où with a clear oo vowel and keep gare to one syllable.
Pouvez-vous répéter ?|Can you repeat? (polite)|Keep a conversation going when you miss something.|Répéter ends with an é sound.`,
  'Bonjour ! Je m’appelle Alex. J’habite à Lagos.|Bonjour ! On va au café ?|Oui. Je voudrais de l’eau, s’il vous plaît.|D’accord. Et après, la gare ?|Oui. Où est la gare ?|Tout droit, puis à droite.',
  ['After going straight, which way is the station?','Right','Left','Behind the café'],
  'You did not catch the directions. What do you ask?',3,'Try a two-minute role-play with pauses: meet someone, introduce yourself, order a drink, ask directions, and ask for repetition. Switch roles. Then write three sentences about yourself. Completing this month is practice, not an A1 certificate.','travel');
addMonthLesson('de','Your first month: connect and explore','Combine everyday skills in a longer exchange.',
  'This checkpoint combines introductions, requests, directions, and repair phrases. Short clear sentences are enough.',`
Ich heiße Alex. Ich wohne in Lagos.|My name is Alex. I live in Lagos.|Give two pieces of information; personalise them after the model check.|Pause between the sentences and keep ich clear.
Ich möchte Wasser, bitte.|I would like water, please.|Make a complete polite request.|Round your lips for ö in möchte.
Wo ist der Bahnhof?|Where is the station?|Ask a useful travel question.|The w in wo sounds like English v.
Können Sie das wiederholen?|Can you repeat that? (polite)|Keep an exchange going when you miss something.|The w in wiederholen sounds like v.`,
  'Hallo! Ich heiße Alex. Ich wohne in Lagos.|Guten Tag! Gehen wir ins Café?|Ja. Ich möchte Wasser, bitte.|Gut. Und danach zum Bahnhof?|Ja. Wo ist der Bahnhof?|Geradeaus, dann nach rechts.',
  ['After going straight, which way is the station?','Right','Left','Behind the café'],
  'You did not catch the directions. What do you ask?',3,'Try a two-minute role-play with pauses: meet someone, introduce yourself, order a drink, ask directions, and ask for repetition. Switch roles. Write three sentences about yourself afterwards. This checkpoint is practice, not an A1 certificate.','travel');
// Keep old progress IDs stable: the original seven lessons are unchanged in position.
for (const lang of ['fr','de']) {
  COURSE[lang].lessons[6].checkpoint = true;
  COURSE[lang].lessons.forEach((lesson,index)=>{
    if (lesson.listening) {
      const offset=index % lesson.listening.options.length;
      lesson.listening.options=lesson.listening.options.slice(offset).concat(lesson.listening.options.slice(0,offset));
    }
  });
}
