// Days 91–120: connect past experiences, present needs and future plans.
// Reuse the established bilingual phrase format and assessment flow.
function addStoryLesson(title,goal,grammar,rows,dialogue,listening,question,answerIndex,speak,imageKey='') {
  addTownLesson(title,goal,grammar,rows,dialogue,listening,answerIndex,imageKey);
  for(const lang of ['fr','de']) {
    const lesson=COURSE[lang].lessons.at(-1);
    lesson.question=question;
    lesson.speak=speak;
  }
}
// 91
addStoryLesson('Tell me about your weekend','Describe a weekend with two activities and an opinion.',[
 'Use avoir plus a past participle for completed activities: j’ai regardé, j’ai préparé. C’était introduces a past description.',
 'Use haben plus a past participle at the end: ich habe … gekocht. Es war introduces a past description.'
],`
Samedi, j’ai regardé un film.|Am Samstag habe ich einen Film gesehen.|On Saturday, I watched a film.|Begin with the day to place your story in time.|The final é in regardé is pronounced.|The eh in gesehen is a long vowel.
Dimanche, j’ai préparé le dîner.|Am Sonntag habe ich das Abendessen gekocht.|On Sunday, I cooked dinner.|Add an activity from the following day.|The final r in dîner is silent.|The ch in gekocht is a back-of-mouth sound.
J’ai passé du temps avec ma famille.|Ich habe Zeit mit meiner Familie verbracht.|I spent time with my family.|Say who shared part of your weekend.|The ill in famille has a y sound.|The z in Zeit sounds like ts.
C’était un week-end tranquille.|Es war ein ruhiges Wochenende.|It was a quiet weekend.|Finish with a short description.|The qu in tranquille sounds like k.|The w in Wochenende sounds like v.
`,['Tu as passé un bon week-end ?|Oui. Samedi, j’ai regardé un film.|Et dimanche ?|J’ai préparé le dîner.|Avec qui ?|Avec ma famille.', 'Hattest du ein schönes Wochenende?|Ja. Am Samstag habe ich einen Film gesehen.|Und am Sonntag?|Ich habe das Abendessen gekocht.|Mit wem?|Mit meiner Familie.'],['What happened on Sunday?','Cooking dinner','Watching a film','Taking a train'],'Someone asks what you did on Saturday. Choose your reply.',0,'Tell a partner what you did on two different days and how the weekend felt. Ask about their weekend.');
// 92
addStoryLesson('A recent trip','Describe a short journey and who came with you.',[
 'For these movement verbs, use être: je suis allé, nous sommes partis. Written endings can change with gender and number.',
 'For these movement verbs, use sein: ich bin gefahren, wir sind losgefahren. The past participle goes at the end.'
],`
Je suis allé à la mer.|Ich bin ans Meer gefahren.|I went to the seaside.|Describe the destination; a woman writes allée in French.|Allé and allée sound the same.|The ee in Meer is a long vowel.
Nous sommes partis tôt.|Wir sind früh losgefahren.|We set off early.|Give a detail about departure; an all-female group writes parties in French.|Partis and parties sound the same.|The ü in früh is rounded and long.
J’ai voyagé avec un ami.|Ich bin mit einem Freund gereist.|I travelled with a friend.|Name your travel companion; these models refer to a male friend.|The oy in voyagé includes a wa-y sound.|The eu in Freund sounds like oy.
Le trajet a duré deux heures.|Die Fahrt hat zwei Stunden gedauert.|The journey took two hours.|Describe how long travelling took.|Link deux to heures with a z sound.|The z in zwei sounds like ts.
`,['Tu es allé où ?|Je suis allé à la mer avec un ami.|Le trajet a duré combien de temps ?|Deux heures.|Vous êtes partis tôt ?|Oui.', 'Wohin bist du gefahren?|Ich bin mit einem Freund ans Meer gefahren.|Wie lange hat die Fahrt gedauert?|Zwei Stunden.|Seid ihr früh losgefahren?|Ja.'],['How long did the journey take?','Two hours','One day','Five minutes'],'Explain the duration of the journey.',3,'Describe a journey: destination, companion, departure and duration. Change one detail on your second attempt.','travel');
// 93
addStoryLesson('How long have you been here?','Distinguish a finished duration from something still continuing.',[
 'Use the present with depuis for something that started earlier and continues: j’habite ici depuis un an. Pendant can describe a finished duration.',
 'Use the present with seit for a continuing situation: ich wohne seit einem Jahr hier. A finished duration can use lang.'
],`
J’habite ici depuis un an.|Ich wohne seit einem Jahr hier.|I have lived here for a year.|Use the present because you still live here.|The final t in habite is heard.|The h in Jahr lengthens the vowel.
J’apprends cette langue depuis trois mois.|Ich lerne diese Sprache seit drei Monaten.|I have been learning this language for three months.|Describe learning that is still continuing.|The final s in mois is silent.|The sp in Sprache begins with shp.
Le cours a duré une heure.|Der Kurs hat eine Stunde gedauert.|The class lasted an hour.|Describe a class that has finished.|The h in heure is silent.|The st in Stunde begins with sht.
Depuis quand ?|Seit wann?|Since when?|Ask when a continuing situation began.|The an in quand is nasal.|The ei in seit sounds like eye.
`,['Tu habites ici depuis combien de temps ?|Depuis un an.|Et tu apprends cette langue depuis un an aussi ?|Non, depuis trois mois.', 'Seit wann wohnst du hier?|Seit einem Jahr.|Und lernst du diese Sprache auch seit einem Jahr?|Nein, seit drei Monaten.'],['How long has the person been learning the language?','Three months','One year','One hour'],'Describe how long you have been learning this language.',1,'Say how long you have lived somewhere and studied a language. Ask your partner when they started.');
// 94
addStoryLesson('When I was younger','Describe a past home and a childhood routine.',[
 'The imparfait describes a past situation or habit: j’habitais, je jouais, j’allais. Learn these as useful chunks first.',
 'War and hatte are common past forms. With als ich … war, the verb war ends the opening clause.'
],`
Quand j’étais enfant, j’habitais dans un village.|Als ich ein Kind war, habe ich in einem Dorf gewohnt.|When I was a child, I lived in a village.|Describe a past home.|The ais ending in j’étais sounds like an open e.|The o in Dorf is short.
Je jouais souvent dehors.|Ich habe oft draußen gespielt.|I often played outside.|Describe a repeated childhood activity.|The j in jouais sounds like zh.|The ß in draußen sounds like s.
J’allais à l’école à pied.|Ich bin zu Fuß zur Schule gegangen.|I used to walk to school.|Describe your usual journey at that time.|The final d in pied is silent.|The sch in Schule sounds like sh.
J’avais un petit vélo.|Ich hatte ein kleines Fahrrad.|I had a small bicycle.|Mention something you owned.|The final t in petit is silent before vélo.|The final d in Fahrrad sounds like t.
`,['Quand tu étais enfant, tu habitais où ?|Dans un village.|Tu allais à l’école en bus ?|Non, j’allais à l’école à pied.', 'Wo hast du gewohnt, als du ein Kind warst?|In einem Dorf.|Bist du mit dem Bus zur Schule gefahren?|Nein, ich bin zu Fuß zur Schule gegangen.'],['How did the person get to school?','On foot','By bus','By bicycle'],'Describe how you usually got to school.',2,'Describe a real or imagined childhood home, activity and school journey. You can invent details rather than share personal information.');
// 95
addStoryLesson('Then and now','Compare a past routine with your life today.',[
 'Avant places a habit in the past. Maintenant introduces the present. Ne … plus means not anymore.',
 'Früher introduces a past habit. Jetzt introduces the present. Nicht mehr means not anymore.'
],`
Avant, je prenais le bus.|Früher bin ich mit dem Bus gefahren.|I used to take the bus.|Introduce an old routine.|The ais in prenais sounds like an open e.|The ü in früher is rounded and long.
Maintenant, je vais au travail à vélo.|Jetzt fahre ich mit dem Fahrrad zur Arbeit.|Now I cycle to work.|Describe what you do instead today.|The au in au sounds like o.|The ei in Arbeit sounds like eye.
Je n’habite plus là-bas.|Ich wohne nicht mehr dort.|I do not live there anymore.|Explain that an earlier situation has ended.|The s in plus is silent in this negative expression.|The ch in nicht is a soft breathy sound.
C’est plus facile maintenant.|Jetzt ist es einfacher.|It is easier now.|Give your opinion about the change.|The c in facile sounds like s.|The ei in einfacher sounds like eye.
`,['Tu prends toujours le bus ?|Non. Avant, je prenais le bus.|Et maintenant ?|Je vais au travail à vélo.|C’est mieux ?|Oui, c’est plus facile maintenant.', 'Fährst du noch mit dem Bus?|Nein. Früher bin ich mit dem Bus gefahren.|Und jetzt?|Jetzt fahre ich mit dem Fahrrad zur Arbeit.|Ist das besser?|Ja, jetzt ist es einfacher.'],['How does the speaker travel now?','By bicycle','By bus','On foot'],'Explain that you no longer live in that place.',2,'Contrast one old habit with what you do now. Give a simple opinion about the change.','travel');
// 96
addStoryLesson('Ask about an experience','Use follow-up questions to learn more about a story.',[
 'You can ask conversational questions with rising intonation: tu as aimé ? Add avec qui for with whom.',
 'In a yes/no question the verb comes first: hat es … ? With a question word, the verb follows it: wie war … ?'
],`
Comment s’est passé le voyage ?|Wie war die Reise?|How was the trip?|Invite someone to describe an experience.|The oy in voyage includes a wa-y sound.|The ei in Reise sounds like eye.
Tu as aimé ?|Hat es dir gefallen?|Did you enjoy it?|Ask for an informal opinion.|Link tu to as without adding a consonant.|Stress fal in gefallen.
Tu y es allé avec qui ?|Mit wem bist du hingefahren?|Who did you go with?|Ask about a companion; a woman is addressed as allée in French writing.|Allé and allée sound the same.|The w in wem sounds like v.
Qu’est-ce que tu as fait ensuite ?|Was hast du danach gemacht?|What did you do afterwards?|Ask for the next part of the story.|The ui in ensuite is a flowing rounded sound.|Stress nach in danach.
`,['Comment s’est passé le voyage ?|Très bien.|Tu y es allé avec qui ?|Avec ma sœur.|Tu as aimé ?|Oui, beaucoup.', 'Wie war die Reise?|Sehr gut.|Mit wem bist du hingefahren?|Mit meiner Schwester.|Hat es dir gefallen?|Ja, sehr.'],['Who accompanied the traveller?','Their sister','Their brother','A colleague'],'Ask what happened next.',3,'Listen to a partner’s short story. Ask about their opinion, companion and what happened next.');
// 97
addEverydayCheckpoint('Checkpoint: tell a travel story',[[92,0],[92,2],[92,3],[96,1],[96,3]],[
 'Tu es allé où ?|Je suis allé à la mer.|Avec qui ?|Avec un ami.|Le trajet a duré combien de temps ?|Deux heures.|Tu as aimé ?|Oui, beaucoup.',
 'Wohin bist du gefahren?|Ich bin ans Meer gefahren.|Mit wem?|Mit einem Freund.|Wie lange hat die Fahrt gedauert?|Zwei Stunden.|Hat es dir gefallen?|Ja, sehr.'
],['Who went with the traveller?','A friend','Their family','Nobody'],'Ask whether the person enjoyed the experience.',3,'Tell a short travel story with a destination, companion and duration. Your partner asks two follow-up questions. Switch roles.','travel');
// 98
addStoryLesson('Describe a place to stay','Explain what a home offers and one drawback.',[
 'Il y a introduces what exists. Mais joins a positive detail to a contrasting detail.',
 'Es gibt takes an accusative noun: es gibt einen Balkon. Aber links contrasting details.'
],`
Il y a deux chambres.|Es gibt zwei Schlafzimmer.|There are two bedrooms.|Describe the sleeping space.|The am in chambres is nasal.|The sch in Schlafzimmer sounds like sh.
La cuisine est petite mais claire.|Die Küche ist klein, aber hell.|The kitchen is small but bright.|Give two contrasting details.|The ui in cuisine is rounded and flowing.|The ü in Küche is a rounded front vowel.
Il y a un balcon.|Es gibt einen Balkon.|There is a balcony.|Mention an outdoor feature.|The on in balcon is nasal.|Stress kon in Balkon.
C’est calme, sauf le matin.|Es ist ruhig, außer am Morgen.|It is quiet, except in the morning.|Explain a limitation honestly.|The final f in sauf is heard.|The ß in außer sounds like s.
`,['Comment est l’appartement ?|Il y a deux chambres et un balcon.|La cuisine est grande ?|Non, elle est petite mais claire.|C’est calme ?|Oui, sauf le matin.', 'Wie ist die Wohnung?|Es gibt zwei Schlafzimmer und einen Balkon.|Ist die Küche groß?|Nein, sie ist klein, aber hell.|Ist es ruhig?|Ja, außer am Morgen.'],['What is the kitchen like?','Small but bright','Large and dark','Large and bright'],'Explain when the place is less quiet.',3,'Describe a real or imagined home. Give two useful features and one drawback.');
// 99
addStoryLesson('Welcome a guest','Invite a friend in and offer something to drink.',[
 'Entre and installe-toi address one person informally. Tu veux … ? is a casual offer.',
 'Komm rein and setz dich address one person informally. Möchtest du … ? makes an offer.'
],`
Entre, je t’en prie.|Komm bitte rein.|Please come in.|Welcome a friend at the door.|The en in entre is nasal.|The ei in rein sounds like eye.
Installe-toi.|Setz dich.|Make yourself comfortable.|Invite your guest to sit down.|The oi in toi sounds like wa.|The z in setz sounds like ts.
Tu veux du thé ou du café ?|Möchtest du Tee oder Kaffee?|Would you like tea or coffee?|Offer a choice of drinks.|The th in thé sounds like t.|The ö in möchtest is rounded.
Merci de m’avoir invité.|Danke für die Einladung.|Thank you for inviting me.|Thank your host; a woman writes invitée in French.|Invité and invitée sound the same.|The ei in Einladung sounds like eye.
`,['Entre, je t’en prie.|Merci de m’avoir invité.|Tu veux du thé ou du café ?|Du thé, s’il te plaît.|Avec du lait ?|Non, merci.', 'Komm bitte rein.|Danke für die Einladung.|Möchtest du Tee oder Kaffee?|Tee, bitte.|Mit Milch?|Nein, danke.'],['What drink does the guest choose?','Tea without milk','Coffee with milk','Tea with milk'],'Thank someone for inviting you.',3,'Welcome a guest, offer two drinks, and ask a follow-up question about their choice. Then switch roles.','cafe');
// 100
addStoryLesson('Cook something simple','Explain the order of four kitchen tasks.',[
 'Infinitives often appear in recipe instructions: couper, ajouter, mélanger. These models use polite commands ending in -ez.',
 'These instructions use the polite imperative with Sie: schneiden Sie, geben Sie. Zum Schluss marks the final step.'
],`
D’abord, coupez les légumes.|Schneiden Sie zuerst das Gemüse.|First, cut the vegetables.|Begin a recipe with the first task.|The final s in légumes is silent.|The sch in schneiden sounds like sh.
Ensuite, ajoutez de l’eau.|Geben Sie dann Wasser dazu.|Then, add water.|Explain the next step.|The eau in eau sounds like o.|The w in Wasser sounds like v.
Mélangez doucement.|Rühren Sie vorsichtig um.|Stir gently.|Describe how to combine the ingredients.|The en in doucement is nasal.|The ü in rühren is rounded and long.
Enfin, goûtez la soupe.|Probieren Sie zum Schluss die Suppe.|Finally, taste the soup.|Finish with a check of the flavour.|The ou in soupe sounds like oo.|The u in Suppe is short.
`,['Qu’est-ce que je fais d’abord ?|Coupez les légumes.|Et ensuite ?|Ajoutez de l’eau, puis mélangez doucement.|Et à la fin ?|Goûtez la soupe.', 'Was mache ich zuerst?|Schneiden Sie das Gemüse.|Und dann?|Geben Sie Wasser dazu und rühren Sie vorsichtig um.|Und zum Schluss?|Probieren Sie die Suppe.'],['What comes immediately after cutting the vegetables?','Adding water','Tasting the soup','Serving coffee'],'Tell someone to stir gently.',2,'Explain a simple sequence using first, then and finally. The listener repeats the steps in order.','food');
// 101
addStoryLesson('Explain a purchase problem','Describe an item and ask about a possible exchange.',[
 'J’ai acheté refers to a completed purchase. Est-ce que je peux asks whether an action is possible.',
 'Ich habe … gekauft refers to a completed purchase. Kann ich … ? asks whether an action is possible.'
],`
J’ai acheté cette chemise hier.|Ich habe dieses Hemd gestern gekauft.|I bought this shirt yesterday.|Identify the purchase and when it happened.|The ch in chemise sounds like sh.|The final d in Hemd sounds like t.
Elle est trop grande.|Es ist zu groß.|It is too big.|Describe the shirt; elle refers to chemise and es to Hemd.|The final e in grande is silent but d is heard.|The ß in groß sounds like s.
Est-ce que je peux l’échanger ?|Kann ich es umtauschen?|Can I exchange it?|Ask what the shop allows rather than assume a policy.|The er in échanger sounds like é.|The au in umtauschen sounds like ow.
J’ai le ticket de caisse.|Ich habe den Kassenbon.|I have the receipt.|Say that you can show proof of purchase.|The final t in ticket is silent.|Stress Kas in Kassenbon.
`,['Bonjour, j’ai acheté cette chemise hier.|Quel est le problème ?|Elle est trop grande. Est-ce que je peux l’échanger ?|Vous avez le ticket de caisse ?|Oui, le voici.', 'Guten Tag, ich habe dieses Hemd gestern gekauft.|Was ist das Problem?|Es ist zu groß. Kann ich es umtauschen?|Haben Sie den Kassenbon?|Ja, hier ist er.'],['Why does the customer want an exchange?','The shirt is too big','The shirt is damaged','The colour is wrong'],'Ask whether you can exchange the item.',2,'Explain when you bought an item, describe the problem and ask about an exchange. Let the other person ask for the receipt.');
// 102
addStoryLesson('Ask about an internet connection','Describe a connection problem and request the details you need.',[
 'Ne … pas makes a negative statement: ça ne marche pas. Quel est … ? asks for a particular detail.',
 'Nicht makes a negative statement: es funktioniert nicht. Wie lautet … ? asks for a detail such as a password.'
],`
Je n’arrive pas à me connecter.|Ich kann mich nicht verbinden.|I cannot connect.|Describe your difficulty using a network.|The final er in connecter sounds like é.|The v in verbinden sounds like f.
Quel est le mot de passe ?|Wie lautet das Passwort?|What is the password?|Ask the host for the network password.|The final t in mot is silent.|The w in Passwort sounds like v.
Le réseau n’apparaît pas.|Das Netzwerk wird nicht angezeigt.|The network does not appear.|Explain why you cannot choose the network.|The eau in réseau sounds like o.|The z in angezeigt sounds like ts.
Maintenant, ça fonctionne.|Jetzt funktioniert es.|Now it works.|Confirm that the problem is resolved.|The tion in fonctionne sounds like syon.|The tion in funktioniert includes a ts sound.
`,['Je n’arrive pas à me connecter.|Le réseau apparaît ?|Oui, mais quel est le mot de passe ?|Il est sur cette carte.|Merci. Maintenant, ça fonctionne.', 'Ich kann mich nicht verbinden.|Wird das Netzwerk angezeigt?|Ja, aber wie lautet das Passwort?|Es steht auf dieser Karte.|Danke. Jetzt funktioniert es.'],['Where can the guest find the password?','On a card','On the door','In a message'],'Confirm that the connection now works.',3,'Describe a connection problem, ask for the missing detail and confirm whether it works. Use imaginary details for practice.');
// 103
addStoryLesson('Arrange a repair visit','Explain a household problem and agree a suitable visit.',[
 'Ne … plus means no longer. Quel jour vous convient ? asks which day suits the other person.',
 'Nicht mehr means no longer. Welcher Tag passt Ihnen ? asks which day suits the other person.'
],`
La lampe ne s’allume plus.|Die Lampe geht nicht mehr an.|The lamp no longer turns on.|Describe the problem without diagnosing it.|The u in allume is a rounded front vowel.|The final e in Lampe is an unstressed vowel.
Quand pouvez-vous venir ?|Wann können Sie kommen?|When can you come?|Ask for a possible visit politely.|The final d in quand is silent before pouvez.|The ö in können is rounded.
Je suis disponible jeudi après-midi.|Ich habe am Donnerstagnachmittag Zeit.|I am available on Thursday afternoon.|Offer a specific day and part of the day.|The eu in jeudi is rounded.|Break Donnerstagnachmittag into Donnerstag and Nachmittag.
Quel jour vous convient ?|Welcher Tag passt Ihnen?|Which day suits you?|Invite the other person to suggest a day.|The ien in convient is nasal.|The ch in welcher is a soft breathy sound.
`,['La lampe ne s’allume plus. Quand pouvez-vous venir ?|Jeudi matin ?|Je suis disponible jeudi après-midi.|D’accord, jeudi après-midi.', 'Die Lampe geht nicht mehr an. Wann können Sie kommen?|Am Donnerstagvormittag?|Ich habe am Donnerstagnachmittag Zeit.|Gut, am Donnerstagnachmittag.'],['When is the visit agreed?','Thursday afternoon','Thursday morning','Friday afternoon'],'Offer your availability on Thursday afternoon.',2,'Describe a household problem and arrange a visit. Decline the first suggested time and agree on a second one.');
// 104
addEverydayCheckpoint('Checkpoint: welcome and help a guest',[[99,0],[99,2],[102,0],[102,1],[102,3]],[
 'Entre, je t’en prie. Tu veux du thé ou du café ?|Du café, merci. Je n’arrive pas à me connecter.|Le réseau apparaît ?|Oui. Quel est le mot de passe ?|Il est sur cette carte.|Merci. Maintenant, ça fonctionne.',
 'Komm bitte rein. Möchtest du Tee oder Kaffee?|Kaffee, danke. Ich kann mich nicht verbinden.|Wird das Netzwerk angezeigt?|Ja. Wie lautet das Passwort?|Es steht auf dieser Karte.|Danke. Jetzt funktioniert es.'
],['What does the guest ask for to connect?','The password','A new phone','A different room'],'Ask for the password.',3,'Welcome a guest and offer a drink. The guest asks for help connecting to the internet. Finish by confirming that it works.','cafe');
// 105
addStoryLesson('Choose a short holiday','Describe the kind of break you would like.',[
 'J’aimerais expresses I would like. On pourrait makes a gentle suggestion: we could.',
 'Ich würde gern expresses I would like. Wir könnten makes a gentle suggestion: we could.'
],`
J’aimerais passer quelques jours à la campagne.|Ich würde gern ein paar Tage auf dem Land verbringen.|I would like to spend a few days in the countryside.|Describe the kind of break you want.|The gn in campagne sounds like ny.|The ü in würde is rounded.
On pourrait partir vendredi.|Wir könnten am Freitag losfahren.|We could leave on Friday.|Suggest a departure day without fixing it yet.|The ait in pourrait sounds like an open e.|The ei in Freitag sounds like eye.
Je cherche un endroit calme.|Ich suche einen ruhigen Ort.|I am looking for a quiet place.|Explain a preference for your destination.|The oi in endroit sounds like wa.|The ch in suche is a back-of-mouth sound.
Je préfère voyager en train.|Ich reise lieber mit dem Zug.|I prefer to travel by train.|Give your preferred transport.|The ain in train is nasal.|The z in Zug sounds like ts.
`,['Tu veux aller en ville ?|Je cherche plutôt un endroit calme, à la campagne.|Comment veux-tu voyager ?|Je préfère voyager en train.|On pourrait partir vendredi ?|Oui, bonne idée.', 'Möchtest du in die Stadt fahren?|Ich suche eher einen ruhigen Ort auf dem Land.|Wie möchtest du reisen?|Ich reise lieber mit dem Zug.|Könnten wir am Freitag losfahren?|Ja, gute Idee.'],['What kind of destination does the traveller want?','A quiet place in the countryside','A busy city centre','A seaside station'],'Suggest leaving on Friday.',1,'Suggest a destination, explain one preference and agree on a departure day and way to travel.','travel');
// 106
addStoryLesson('Ask before booking','Check the details of a possible stay.',[
 'Pour introduces a duration in a booking: pour trois nuits. Compris means included.',
 'Für introduces a duration in a booking: für drei Nächte. Inbegriffen means included.'
],`
Je voudrais une chambre pour trois nuits.|Ich hätte gern ein Zimmer für drei Nächte.|I would like a room for three nights.|State the length of the stay you want.|The ui in nuits is a flowing rounded sound.|The ä in Nächte is an open vowel.
Le petit-déjeuner est compris ?|Ist das Frühstück inbegriffen?|Is breakfast included?|Check what the quoted price covers.|The final s in compris is silent.|The ü in Frühstück is rounded.
À quelle heure peut-on arriver ?|Ab wann kann man anreisen?|From what time can we arrive?|Ask when arrival is possible.|Link peut to on with a t sound.|The ei in anreisen sounds like eye.
Est-ce qu’il y a une salle de bains privée ?|Gibt es ein eigenes Bad?|Is there a private bathroom?|Check a feature before deciding.|The ain in bains is nasal.|The ei in eigenes sounds like eye.
`,['Je voudrais une chambre pour trois nuits.|Oui, c’est possible.|Le petit-déjeuner est compris ?|Non, il n’est pas compris.|Et la salle de bains ?|Elle est privée.', 'Ich hätte gern ein Zimmer für drei Nächte.|Ja, das ist möglich.|Ist das Frühstück inbegriffen?|Nein, es ist nicht inbegriffen.|Und das Bad?|Sie haben ein eigenes Bad.'],['Which detail is confirmed about the room?','It has a private bathroom','Breakfast is included','It is available for one night only'],'Ask whether breakfast is included.',1,'Ask about the length of a stay, breakfast, arrival time and bathroom. Repeat the two details most important to you.');
// 107
addStoryLesson('Confirm your arrival','Check a reservation and departure arrangements.',[
 'Au nom de means in the name of. À quelle heure asks for an exact time.',
 'Auf den Namen means in the name of. Um wie viel Uhr asks for an exact time.'
],`
J’ai une réservation au nom de Martin.|Ich habe eine Reservierung auf den Namen Martin.|I have a reservation under the name Martin.|Give a booking name; substitute another name in the optional role-play.|The in in Martin is nasal in French.|Stress vie in Reservierung.
Nous restons jusqu’à dimanche.|Wir bleiben bis Sonntag.|We are staying until Sunday.|Confirm the last day of the stay.|The an in dimanche is nasal.|The ei in bleiben sounds like eye.
À quelle heure faut-il quitter la chambre ?|Um wie viel Uhr müssen wir das Zimmer verlassen?|What time do we have to leave the room?|Ask about the departure time.|Link faut to il with a t sound.|The z in Zimmer sounds like ts.
Où peut-on laisser les bagages ?|Wo können wir das Gepäck lassen?|Where can we leave our luggage?|Ask for a place to keep bags.|The g in bagages sounds like zh.|Stress päck in Gepäck.
`,['J’ai une réservation au nom de Martin.|Oui. Vous restez jusqu’à dimanche ?|C’est bien ça. À quelle heure faut-il quitter la chambre ?|Avant onze heures.|Merci.', 'Ich habe eine Reservierung auf den Namen Martin.|Ja. Bleiben Sie bis Sonntag?|Genau. Um wie viel Uhr müssen wir das Zimmer verlassen?|Vor elf Uhr.|Danke.'],['By when must the guests leave the room?','Before eleven','Before nine','Before five'],'Ask where you can leave your luggage.',3,'Confirm a booking name and length of stay. Ask when to leave and where to keep your bags.');
// 108
addStoryLesson('Make a weather backup plan','Choose an alternative if the weather changes.',[
 'For a realistic condition, use si plus the present: s’il pleut. The result can use aller plus an infinitive.',
 'With wenn, the conjugated verb ends the condition: wenn es regnet. When this clause comes first, the next clause begins with its verb.'
],`
S’il pleut, on va rester à l’intérieur.|Wenn es regnet, bleiben wir drinnen.|If it rains, we will stay inside.|Make a plan for wet weather.|Link à to l’intérieur without an extra consonant.|The ei in bleiben sounds like eye.
S’il fait beau, on va se promener.|Wenn das Wetter schön ist, gehen wir spazieren.|If the weather is nice, we will go for a walk.|Describe your outdoor option.|The eau in beau sounds like o.|The sp in spazieren begins with shp.
Prenons un parapluie.|Nehmen wir einen Regenschirm mit.|Let’s take an umbrella.|Suggest something useful to bring.|The ui in parapluie is rounded and flowing.|The sch in Regenschirm sounds like sh.
On peut décider demain matin.|Wir können morgen früh entscheiden.|We can decide tomorrow morning.|Delay the decision until you know more.|The final r in décider is silent.|The ei in entscheiden sounds like eye.
`,['On va se promener demain ?|S’il fait beau, oui. S’il pleut, on va rester à l’intérieur.|On décide maintenant ?|On peut décider demain matin.', 'Gehen wir morgen spazieren?|Wenn das Wetter schön ist, ja. Wenn es regnet, bleiben wir drinnen.|Entscheiden wir jetzt?|Wir können morgen früh entscheiden.'],['When will they decide?','Tomorrow morning','This evening','Next week'],'Explain your plan if it rains.',0,'Propose an outdoor activity and an indoor alternative. Agree when to make the final decision.');
// 109
addStoryLesson('When transport is cancelled','Ask for another way to reach your destination.',[
 'Est annulé describes a cancellation. Un autre means another. Devoir plus an infinitive expresses a need.',
 'Fällt aus describes a cancellation. Einen anderen means another with a masculine accusative noun. Müssen expresses a need.'
],`
Mon train est annulé.|Mein Zug fällt aus.|My train is cancelled.|State the travel problem.|The final é in annulé is pronounced.|The ä in fällt is an open vowel.
Y a-t-il un autre train ?|Gibt es einen anderen Zug?|Is there another train?|Ask for an alternative service.|The t in y a-t-il connects the vowels.|The z in Zug sounds like ts.
Je dois arriver avant six heures.|Ich muss vor sechs Uhr ankommen.|I need to arrive before six.|Explain the time constraint.|The x in six links to heures with a z sound.|The chs in sechs sounds like ks.
Est-ce que ce billet est valable ?|Ist diese Fahrkarte gültig?|Is this ticket valid?|Check your ticket before using the alternative.|The final t in billet is silent.|The ü in gültig is rounded.
`,['Mon train est annulé. Y a-t-il un autre train ?|Oui, un train arrive à cinq heures.|Je dois arriver avant six heures.|Alors, ce train convient.|Ce billet est valable ?|Oui.', 'Mein Zug fällt aus. Gibt es einen anderen Zug?|Ja, ein Zug kommt um fünf Uhr an.|Ich muss vor sechs Uhr ankommen.|Dann passt dieser Zug.|Ist diese Fahrkarte gültig?|Ja.'],['When does the alternative train arrive?','At five','At six','At nine'],'Explain that you need to arrive before six.',2,'Describe a cancellation, explain your latest arrival time and check whether your ticket works for the alternative.','travel');
// 110
addStoryLesson('Explain a travel choice','Weigh comfort, cost and journey time.',[
 'Même si means even if or even though. In these examples it is followed by an ordinary present-tense clause.',
 'Obwohl means although and sends the conjugated verb to the end: obwohl es länger dauert.'
],`
Le train est confortable, mais assez cher.|Der Zug ist bequem, aber ziemlich teuer.|The train is comfortable but quite expensive.|Give both a benefit and a drawback.|The on in confortable is nasal.|The eu in teuer sounds like oy.
Le bus prend plus de temps.|Mit dem Bus dauert es länger.|The bus takes longer.|Compare the duration of two options.|The final ps in temps are silent.|The ä in länger is an open vowel.
Je choisis le bus parce qu’il coûte moins cher.|Ich nehme den Bus, weil er weniger kostet.|I choose the bus because it costs less.|Explain a choice based on price.|The oi in choisis sounds like wa.|The w in weniger sounds like v.
Je préfère le train, même si c’est plus cher.|Ich nehme lieber den Zug, obwohl er teurer ist.|I prefer the train, even though it is more expensive.|Explain that another benefit matters more than price.|The ê in même is an open vowel.|The eu in teurer sounds like oy.
`,['Tu choisis le bus ?|Non, je préfère le train.|Même si c’est plus cher ?|Oui, il est plus confortable.', 'Nimmst du den Bus?|Nein, ich nehme lieber den Zug.|Obwohl er teurer ist?|Ja, er ist bequemer.'],['Why does the speaker prefer the train?','It is more comfortable','It costs less','It has been cancelled'],'Choose the cheaper bus and explain why.',2,'Compare two travel options with one advantage and one drawback each. Explain your final choice.','travel');
// 111
addEverydayCheckpoint('Checkpoint: change your travel plans',[[109,0],[109,1],[109,2],[109,3],[110,1]],[
 'Mon train est annulé. Y a-t-il un autre train ?|Oui, mais il arrive à sept heures.|Je dois arriver avant six heures.|Vous pouvez prendre le bus. Il arrive à cinq heures.|Ce billet est valable dans le bus ?|Oui.',
 'Mein Zug fällt aus. Gibt es einen anderen Zug?|Ja, aber er kommt um sieben Uhr an.|Ich muss vor sechs Uhr ankommen.|Sie können den Bus nehmen. Er kommt um fünf Uhr an.|Ist diese Fahrkarte im Bus gültig?|Ja.'
],['Which option meets the traveller’s arrival deadline?','The bus arriving at five','The train arriving at seven','Neither option'],'Check whether your ticket is valid.',3,'Explain a cancellation and your arrival deadline. Compare two alternatives, choose one that works and check your ticket.','travel');
// 112
addStoryLesson('Talk about a film or book','Give an opinion with a concrete reason.',[
 'J’ai trouvé means I found when giving an opinion. Histoire is feminine, so use intéressante.',
 'Ich fand is a common past form for giving an opinion. The adjective after war does not need an ending.'
],`
J’ai trouvé l’histoire intéressante.|Ich fand die Geschichte interessant.|I found the story interesting.|Give an opinion about the story itself.|The final e in intéressante is silent but t is heard.|The ch in Geschichte is a soft breathy sound.
Le début était un peu lent.|Der Anfang war etwas langsam.|The beginning was a little slow.|Give a specific criticism.|The final t in début is silent.|The ng in Anfang is one nasal sound.
J’ai surtout aimé la fin.|Mir hat besonders das Ende gefallen.|I especially liked the ending.|Identify your favourite part.|The in in fin is nasal.|The final e in Ende is an unstressed vowel.
Je te le recommande.|Ich empfehle es dir.|I recommend it to you.|Suggest it to one person informally.|The an in recommande is nasal.|Stress pfeh in empfehle.
`,['Tu as aimé le film ?|Oui, j’ai trouvé l’histoire intéressante.|Tout était bien ?|Le début était un peu lent, mais j’ai surtout aimé la fin.', 'Hat dir der Film gefallen?|Ja, ich fand die Geschichte interessant.|War alles gut?|Der Anfang war etwas langsam, aber mir hat besonders das Ende gefallen.'],['Which part did the speaker especially like?','The ending','The beginning','The title'],'Recommend the film or book to a friend.',3,'Name a real or imagined film or book, give one positive detail and one criticism, and say whether you recommend it.');
// 113
addStoryLesson('Agree and disagree kindly','Respond to an opinion without ending the conversation.',[
 'Je suis d’accord means I agree. Pas tout à fait softens a disagreement: not completely.',
 'Ich stimme zu means I agree. Nicht ganz softens a disagreement: not completely.'
],`
Je suis d’accord avec toi.|Ich stimme dir zu.|I agree with you.|Support a friend’s opinion.|Link suis to d’accord without sounding the final s.|The st in stimme begins with sht.
Je comprends ton point de vue.|Ich verstehe deinen Standpunkt.|I understand your point of view.|Acknowledge an opinion before replying.|The u in vue is rounded.|The v in verstehe sounds like f.
Je ne suis pas tout à fait d’accord.|Ich bin nicht ganz einverstanden.|I do not completely agree.|Disagree gently.|Link tout to à with a t sound.|The ei in einverstanden sounds like eye.
Pour moi, c’est différent.|Für mich ist das anders.|For me, it is different.|Explain that your experience or preference differs.|The final t in différent is silent.|The ü in für is rounded and long.
`,['Le film était trop long.|Je comprends ton point de vue, mais je ne suis pas tout à fait d’accord.|Pourquoi ?|Pour moi, l’histoire était intéressante.', 'Der Film war zu lang.|Ich verstehe deinen Standpunkt, aber ich bin nicht ganz einverstanden.|Warum?|Für mich war die Geschichte interessant.'],['Does the second speaker fully agree?','No, they partly disagree','Yes, completely','They have no opinion'],'Acknowledge the other person’s point of view.',1,'Discuss a film, food or activity. Acknowledge your partner’s view, agree or disagree politely, and give one reason.');
// 114
addStoryLesson('Choose an activity together','Suggest an activity and find out what others prefer.',[
 'Ça te dirait de … ? is an informal would you like to … ? Et si on … ? introduces a suggestion with the imparfait.',
 'Hättest du Lust … ? asks whether someone would like an activity. Wie wäre es mit … ? suggests an option.'
],`
Ça te dirait de faire une randonnée ?|Hättest du Lust auf eine Wanderung?|Would you like to go for a hike?|Suggest an outdoor activity to a friend.|The an in randonnée is nasal.|The w in Wanderung sounds like v.
Et si on visitait une exposition ?|Wie wäre es mit einer Ausstellung?|How about visiting an exhibition?|Offer an indoor alternative.|The tion in exposition sounds like syon.|The st in Ausstellung begins with sht.
Qu’est-ce qui te ferait plaisir ?|Worauf hättest du Lust?|What would you enjoy doing?|Invite the other person to suggest an activity.|The ai in ferait sounds like an open e.|The ä in hättest is an open vowel.
Les deux me vont.|Beides passt mir.|Either works for me.|Say that you accept either option.|The final t in vont is silent.|The ei in beides sounds like eye.
`,['Ça te dirait de faire une randonnée ?|Peut-être. Et si on visitait une exposition ?|Les deux me vont.|Alors, choisissons l’exposition cette fois.', 'Hättest du Lust auf eine Wanderung?|Vielleicht. Wie wäre es mit einer Ausstellung?|Beides passt mir.|Dann nehmen wir diesmal die Ausstellung.'],['Which activity do they choose?','An exhibition','A hike','A film'],'Ask what the other person would enjoy doing.',2,'Suggest two activities, ask what your partner would enjoy and choose one together.');
// 115
addStoryLesson('Share the preparations','Divide simple tasks for a shared meal.',[
 'Je m’occupe de means I will take care of. Qui peut … ? asks who can do a task.',
 'Ich kümmere mich um means I will take care of. Wer kann … ? asks who can do a task.'
],`
Je m’occupe des boissons.|Ich kümmere mich um die Getränke.|I will take care of the drinks.|Volunteer for one part of the preparation.|The oi in boissons sounds like wa.|The ä in Getränke is an open vowel.
Tu peux apporter du pain ?|Kannst du Brot mitbringen?|Can you bring some bread?|Ask a friend to bring one item.|The ain in pain is nasal.|Stress mit in mitbringen.
Qui peut préparer la salade ?|Wer kann den Salat machen?|Who can prepare the salad?|Ask the group for a volunteer.|The final e in salade is silent but d is heard.|Stress lat in Salat.
On a déjà tout ce qu’il faut.|Wir haben schon alles, was wir brauchen.|We already have everything we need.|Explain that no more supplies are necessary.|The final t in faut is silent.|The ch in brauchen is a back-of-mouth sound.
`,['Je m’occupe des boissons. Tu peux apporter du pain ?|Oui. Qui prépare la salade ?|Sam prépare la salade.|Très bien, je prends le pain.', 'Ich kümmere mich um die Getränke. Kannst du Brot mitbringen?|Ja. Wer macht den Salat?|Sam macht den Salat.|Gut, ich bringe das Brot mit.'],['What does the second speaker agree to bring?','Bread','Drinks','Salad'],'Volunteer to take care of the drinks.',0,'Plan a small shared meal. Volunteer for one task, ask a partner to do another and check that everything is covered.','food');
// 116
addStoryLesson('Check that you understood','Confirm a detail before acting on it.',[
 'Si j’ai bien compris introduces a summary of what you heard. C’est bien ça ? asks for confirmation.',
 'Wenn ich richtig verstanden habe introduces a summary. Stimmt das ? asks for confirmation.'
],`
Si j’ai bien compris, on se retrouve à midi.|Wenn ich richtig verstanden habe, treffen wir uns um zwölf.|If I understood correctly, we are meeting at noon.|Repeat your understanding of the plan.|The in in bien is nasal.|The ö in zwölf is rounded.
Tu veux dire samedi, pas dimanche ?|Meinst du Samstag, nicht Sonntag?|Do you mean Saturday, not Sunday?|Check between two possible days.|The final s in pas is silent.|The ei in meinst sounds like eye.
C’est bien ça ?|Stimmt das?|Is that right?|Invite someone to confirm your summary.|The ç in ça sounds like s.|The st in stimmt begins with sht.
Merci, c’est plus clair maintenant.|Danke, jetzt ist es klarer.|Thank you, that is clearer now.|Acknowledge a useful explanation.|The final t in maintenant is silent.|The a in klarer is a long vowel.
`,['On se retrouve samedi à midi.|Dimanche ?|Non, samedi.|Tu veux dire samedi, pas dimanche ?|Oui, c’est bien ça.', 'Wir treffen uns am Samstag um zwölf.|Am Sonntag?|Nein, am Samstag.|Meinst du Samstag, nicht Sonntag?|Ja, genau.'],['Which day is confirmed?','Saturday','Sunday','Friday'],'Check whether you heard Saturday rather than Sunday.',1,'Make a plan with a day and time. Your partner deliberately mishears one detail, then checks and corrects it.');
// 117
addStoryLesson('Find a plan that works','Explain a limitation and suggest a compromise.',[
 'Jusqu’à means until. Au lieu de introduces an alternative: instead of. Ça te convient ? asks if the plan suits someone.',
 'Bis means until. Statt … zu introduces an alternative action: instead of doing something. Passt dir das ? asks if the plan suits someone.'
],`
Je suis libre, mais seulement jusqu’à quatre heures.|Ich habe Zeit, aber nur bis vier Uhr.|I am free, but only until four.|State your available time clearly.|Link jusqu’à smoothly into quatre.|The v in vier sounds like f.
Je préfère ne pas dépenser trop.|Ich möchte nicht zu viel ausgeben.|I would rather not spend too much.|Explain a spending preference.|The en in dépenser is nasal.|The ie in viel is a long ee sound.
On peut pique-niquer au lieu d’aller au restaurant.|Wir können ein Picknick machen, statt ins Restaurant zu gehen.|We can have a picnic instead of going to a restaurant.|Suggest an alternative to eating out.|The qu in pique-niquer sounds like k.|Stress Pick in Picknick.
Est-ce que ça te convient ?|Passt dir das?|Does that work for you?|Check that the compromise suits your partner.|The ien in convient is nasal.|Pronounce the final st in passt.
`,['On va au restaurant ?|Je préfère ne pas dépenser trop.|On peut pique-niquer au lieu d’aller au restaurant.|D’accord. Mais je suis libre seulement jusqu’à quatre heures.|Alors, on commence à midi.', 'Gehen wir ins Restaurant?|Ich möchte nicht zu viel ausgeben.|Wir können stattdessen ein Picknick machen.|Gut. Aber ich habe nur bis vier Uhr Zeit.|Dann fangen wir um zwölf an.'],['What time does the second speaker need to finish by?','Four','Twelve','Six'],'Explain that you would rather not spend too much.',1,'Agree an activity despite a time limit and a spending preference. Suggest an alternative and confirm it works.','food');
// 118
addEverydayCheckpoint('Checkpoint: organise a picnic',[[115,0],[115,1],[116,1],[117,0],[117,3]],[
 'On pique-nique samedi à midi ?|Tu veux dire samedi, pas dimanche ?|Oui. Je m’occupe des boissons. Tu peux apporter du pain ?|Oui. Je suis libre, mais seulement jusqu’à quatre heures.|Ça me convient.',
 'Machen wir am Samstag um zwölf ein Picknick?|Meinst du Samstag, nicht Sonntag?|Ja. Ich kümmere mich um die Getränke. Kannst du Brot mitbringen?|Ja. Ich habe Zeit, aber nur bis vier Uhr.|Das passt mir.'
],['What will the second speaker bring?','Bread','Drinks','A salad'],'Ask the other person to bring bread.',1,'Agree on a day and time, check one detail, divide the food tasks and explain when you need to leave.','food');
// 119
addStoryLesson('Connect experience to a new plan','Use a past experience to explain what you want to do next.',[
 'L’année dernière refers to last year; la prochaine fois refers to next time. Cette fois-ci means this time.',
 'Letztes Jahr refers to last year; nächstes Mal refers to next time. Diesmal means this time.'
],`
L’année dernière, j’ai visité cette ville.|Letztes Jahr habe ich diese Stadt besucht.|Last year, I visited this city.|Introduce a relevant past experience.|The final é in visité is pronounced.|The st in Stadt begins with sht.
Cette fois-ci, je voudrais rester plus longtemps.|Diesmal würde ich gern länger bleiben.|This time, I would like to stay longer.|Explain what you want to change.|The ps in longtemps are silent.|The ä in länger is an open vowel.
Je n’ai pas encore vu le musée.|Ich habe das Museum noch nicht gesehen.|I have not seen the museum yet.|Name something you still want to do.|The u in vu is a rounded front vowel.|Stress se in Museum.
La prochaine fois, je vais y aller.|Nächstes Mal gehe ich hin.|Next time, I will go there.|Turn an unfinished wish into a plan.|The ch in prochaine sounds like sh.|The ä in nächstes is an open vowel.
`,['Tu connais cette ville ?|Oui, je l’ai visitée l’année dernière.|Tu as vu le musée ?|Non, pas encore. La prochaine fois, je vais y aller.|Tu restes longtemps ?|Cette fois-ci, je voudrais rester plus longtemps.', 'Kennst du diese Stadt?|Ja, ich habe sie letztes Jahr besucht.|Hast du das Museum gesehen?|Nein, noch nicht. Nächstes Mal gehe ich hin.|Bleibst du lange?|Diesmal würde ich gern länger bleiben.'],['What has the traveller not seen yet?','The museum','The station','The park'],'Explain that you want to stay longer this time.',1,'Describe somewhere you have visited, one thing you have not done there yet, and what you would change on a future visit.','travel');
// 120
addEverydayCheckpoint('Checkpoint: stories become plans',[[119,0],[119,2],[119,1],[108,0],[116,2]],[
 'Tu connais cette ville ?|Oui, l’année dernière, j’ai visité cette ville, mais je n’ai pas encore vu le musée.|On pourrait y aller samedi.|Bonne idée. Cette fois-ci, je voudrais rester plus longtemps.|Et s’il pleut ?|On va visiter le musée. S’il fait beau, on peut aussi se promener.',
 'Kennst du diese Stadt?|Ja, letztes Jahr habe ich diese Stadt besucht, aber ich habe das Museum noch nicht gesehen.|Wir könnten am Samstag hinfahren.|Gute Idee. Diesmal würde ich gern länger bleiben.|Und wenn es regnet?|Dann besuchen wir das Museum. Wenn das Wetter schön ist, können wir auch spazieren gehen.'
],['What is the plan if it rains?','Visit the museum','Go for a walk','Cancel the visit'],'Say that you have not seen the museum yet.',1,'Tell a partner about a past visit and something you missed. Agree on a new visit, explain one preference and make a weather backup plan. Ask two follow-up questions, then switch roles.','travel');
