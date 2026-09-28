export interface Place {
  name: string;
  body: string;
}

export const PLACES_MAKKAH_INTRO =
  'Most sites fit in one morning ziyarah tour (about 07:00–11:00). Visiting them is not part of ‘Umrah, but it brings the Seerah to life.';

export const PLACES_MAKKAH: Place[] = [
  {
    name: 'Jabal an-Nur & Cave Hira',
    body: 'Where the first revelation, "Iqra’", came down. A steep climb of about 1–2 hours, too hard for young children; the Hira Cultural District at its foot has a revelation exhibition.',
  },
  {
    name: 'Jabal Thawr',
    body: 'The cave where the Prophet and Abu Bakr hid during the Hijrah (9:40). Best viewed from below.',
  },
  {
    name: 'Mina & Masjid al-Khayf',
    body: 'The tent city and the Jamarat of Hajj. Many prophets prayed at Masjid al-Khayf.',
  },
  {
    name: 'Muzdalifah',
    body: 'Where pilgrims spend the night under the sky on Hajj, near al-Mash‘ar al-Haram.',
  },
  {
    name: '‘Arafat & Jabal ar-Rahmah',
    body: '"Hajj is ‘Arafah." See Masjid Namirah and the Mount of Mercy, where the Farewell Sermon was given. Make du‘a here even outside Hajj.',
  },
  {
    name: 'Jannat al-Mu‘alla',
    body: 'Makkah’s historic cemetery, where Sayyidah Khadijah rests. Visit respectfully and recite the du‘a for the graves.',
  },
];

export const PLACES_MADINAH_INTRO =
  'Visit in the cool morning with a private van, and be back for Dhuhr. Opening hours change, so check locally.';

export const PLACES_MADINAH: Place[] = [
  {
    name: 'Masjid an-Nabawi',
    body: 'The Prophet’s Mosque, the Rawdah and the Muwajaha. Watch the giant umbrellas open in the courtyard.',
  },
  {
    name: 'Jannat al-Baqi‘',
    body: 'Resting place of many of the Prophet’s family and Companions, including ‘Uthman ibn ‘Affan. Men usually visit after Fajr or ‘Asr; recite the du‘a for the graves.',
  },
  {
    name: 'Masjid Quba',
    body: 'The first mosque in Islam. Make wudu at home and pray two rak‘at here for the reward of an ‘Umrah (Ibn Majah). The Prophet visited every Saturday.',
  },
  {
    name: 'Mount Uhud & the Martyrs’ cemetery',
    body: 'Site of the Battle of Uhud (3 AH), where Sayyiduna Hamzah and the martyrs rest. "Uhud is a mountain that loves us and we love it" (Bukhari).',
  },
  {
    name: 'Jabal ar-Rumat (Archers’ Hill)',
    body: 'Opposite Uhud; a short, easy climb. A good place to tell the children the lesson of obedience from the battle.',
  },
];

export const GRAVE_VISIT_DUA = {
  transliteration:
    "As-salamu 'alaykum ahlad-diyari minal-mu'minina wal-muslimin, wa inna in-sha'Allahu bikum lahiqun, as'alullaha lana wa lakumul-'afiyah.",
  translation:
    'Peace be upon you, inhabitants of these abodes, believers and Muslims. We shall, God willing, join you. We ask Allah for well-being for us and for you.',
  source: 'Muslim',
};
