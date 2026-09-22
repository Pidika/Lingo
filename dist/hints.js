// Each phrase has its own usage and pronunciation guidance, including review lessons.
const PHRASE_HINTS = {
fr: [
['Bonjour','Use this to greet a shopkeeper, neighbour, or someone you meet during the day.','The opening vowel is nasal. Listen to bon as one sound; avoid a strong final n.'],
['Salut','Use this relaxed greeting with friends or people you know well.','The final t is silent. Round your lips for the French u.'],
['Bonsoir','Use this greeting when you meet someone in the evening.','The ending soir sounds like swar; listen to the full word.'],
['Au revoir','Say this when you leave or finish a conversation.','Au sounds like o. Listen to how revoir flows together.'],
['Je m’appelle Alex.','Introduce yourself with Je m’appelle, then your name. For the speech check, use Alex as shown.','M’appelle links m directly to appelle. Keep the phrase smooth.'],
['Comment tu t’appelles ?','Ask a friend or another child their name. Tu is informal.','The final s in appelles is silent. Listen to tu and t’appelles as separate parts.'],
['Comment vous appelez-vous ?','Ask an unfamiliar adult their name politely with vous.','The s in the first vous links to appelez with a z sound.'],
['Enchanté.','A male speaker can use this after being introduced to someone.','The final é sounds like a clear ay, without a strong English glide.'],
['Enchantée.','A female speaker can use this after being introduced to someone.','The extra e changes the spelling, not the pronunciation: it sounds like enchanté.'],
['Merci.','Thank someone for help, a gift, or something they give you.','The c before i sounds like s. Listen for two syllables: mer-ci.'],
['S’il vous plaît.','Add this when making a polite request to an unfamiliar adult.','The final t in plaît is silent. Say the phrase as one gentle request.'],
['De rien.','Use this to reply when someone says merci.','Rien has a nasal vowel; avoid adding a strong final n.'],
['Pardon.','Use this to apologise briefly or get someone’s attention politely.','The final vowel is nasal. Listen to the two parts: par-don.'],
['Ça va ?','Ask a friend how they are. Your rising tone makes it a question.','The ç sounds like s, so ça begins with an s sound.'],
['Ça va bien, merci.','Use this to say you are well and thank the person for asking.','Bien has a nasal vowel. Pause lightly before merci.'],
['Et toi ?','Ask “And you?” when speaking with someone you address as tu.','The t in et is silent. Toi sounds like twa.'],
['Comme ci, comme ça.','Use this when you feel neither especially good nor especially bad.','Ci sounds like see; ça sounds like sa. Keep the two halves balanced.'],
['un','Use this when counting one object.','This is a nasal vowel. Listen before repeating; do not say the English word one.'],
['deux','Use this when counting two objects.','The final x is silent when you say this number on its own.'],
['trois','Use this when counting three objects.','The oi sounds like wa. The final s is silent on its own.'],
['quatre','Use this when counting four objects.','Qu makes a k sound. Listen to the final tr without adding a long extra vowel.'],
['cinq','Use this when counting five objects.','When said on its own, cinq ends with a k sound.'],
['Je ne comprends pas.','Say this when you do not understand what someone said.','The final s in comprends and pas is silent here.'],
['Pouvez-vous répéter ?','Politely ask someone to say something again.','The ending -er in répéter sounds like é, not English er.'],
['Plus lentement, s’il vous plaît.','Ask someone to speak more slowly so you can follow.','The s in plus is silent in this phrase. Pause slightly before s’il vous plaît.'],
['Oui.','Use this to answer yes.','Oui is one short syllable, sounding like wee.'],
['Non.','Use this to answer no.','The vowel is nasal; avoid a strong final n.'],
['Bonjour ! Je m’appelle Alex.','Combine a greeting and an introduction. Use Alex for this model check, then practise with your own name.','Pause after bonjour, then say Je m’appelle Alex smoothly.']
],
de: [
['Hallo','Use this everyday greeting when meeting someone.','The stress is on the second syllable: hal-LO.'],
['Guten Morgen','Greet someone in the morning with this phrase.','Morgen starts with a clear m. Listen to the softer ending -en.'],
['Guten Tag','Use this as a polite daytime greeting.','The final g in Tag is pronounced like k.'],
['Tschüss','Use this friendly goodbye when leaving.','Tsch sounds like English ch. Round your lips for ü.'],
['Ich heiße Alex.','Introduce yourself with Ich heiße and your name. Use Alex for the model speech check.','The ß sounds like ss. The ei in heiße sounds like English eye.'],
['Wie heißt du?','Ask a friend or child their name. Du is informal.','The w in wie sounds like English v. Du has a long oo vowel.'],
['Wie heißen Sie?','Ask an unfamiliar adult their name politely. Sie is the polite form.','Sie sounds like zee. The ei in heißen sounds like eye.'],
['Freut mich.','Say this when you are pleased to meet someone.','The eu in freut sounds like oy. Listen carefully to the soft ch in mich.'],
['Danke.','Thank someone for their help or kindness.','The final e is a short, unstressed sound; avoid a strong ay.'],
['Bitte.','Use this for please, or as a reply to danke. The situation gives the meaning.','The i is short. Listen to the two syllables: bit-te.'],
['Entschuldigung.','Use this to get someone’s attention or apologise.','Break the word into parts while practising, then join them smoothly.'],
['Vielen Dank.','Use this to thank someone warmly: thank you very much.','The v in vielen sounds like f. Dank ends with a clear k.'],
['Wie geht’s?','Use this friendly question to ask how someone is.','The w sounds like v, and geht has a long vowel.'],
['Gut, danke.','Say you are well, then thank the person who asked.','Gut has a long oo sound. Pause slightly before danke.'],
['Und dir?','Ask “And you?” when talking to someone you address as du.','The final d in und sounds like t when clearly pronounced.'],
['Es geht.','Use this to say you are okay, or so-so.','Geht has one syllable. The h makes the vowel long and is not spoken separately.'],
['eins','Use this to count one object.','Ei sounds like English eye; pronounce the final s.'],
['zwei','Use this to count two objects.','Z sounds like ts, and w sounds like v.'],
['drei','Use this to count three objects.','The ei sounds like English eye. Keep d and r close together.'],
['vier','Use this to count four objects.','The v sounds like f. Listen to the long vowel and soft ending.'],
['fünf','Use this to count five objects.','Round your lips for ü. The word begins and ends with f.'],
['Ich verstehe nicht.','Say this when you do not understand the other person.','The v in verstehe sounds like f. Listen to the soft ch in ich and nicht.'],
['Können Sie das wiederholen?','Politely ask someone to repeat what they said.','Round your lips for ö in können; the w in wiederholen sounds like v.'],
['Langsamer, bitte.','Ask someone to speak more slowly.','Give Langsamer three clear syllables, then pause before bitte.'],
['Ja.','Use this to answer yes.','German j sounds like English y, so ja begins with a y sound.'],
['Nein.','Use this to answer no.','The ei sounds like English eye. Pronounce the final n.'],
['Hallo! Ich heiße Alex.','Join a greeting and your introduction. Use Alex for this check, then practise your own name.','Pause after hallo. Remember that ß sounds like ss in heiße.']
]};
for (const lang of ['fr','de']) {
  const key = t => t.toLowerCase().replace(/[.!?\s]/g,'');
  const hints = new Map(PHRASE_HINTS[lang].map(([phrase,usage,sound]) => [key(phrase),[usage,sound]]));
  for (const lesson of COURSE[lang].lessons) for (const phrase of lesson.phrases) {
    const hint = hints.get(key(phrase[0]));
    if (!hint) throw new Error('Missing phrase guidance: '+phrase[0]);
    phrase.push(...hint);
  }
}
