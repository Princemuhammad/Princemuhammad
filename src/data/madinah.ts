import { Dua } from './types';

export const MADINAH_INTRO = {
  title: 'The City of the Prophet',
  body: 'No ihram is needed. One prayer in Masjid an-Nabawi is better than 1,000 elsewhere (Bukhari). Arrive with calm, humility and abundant salawat.',
  note: 'Before you go: book Rawdah slots in the Nusuk app, and agree one gate number as the family meeting point.',
};

export const BEFORE_YOU_GO_IN: string[] = [
  'Intend to visit the Prophet’s Mosque and to send salaam upon him.',
  'Make ghusl or wudu, wear clean clothes and use fragrance (no ihram in Madinah).',
  'Enter with the right foot, ideally by Bab as-Salam, reciting the mosque du‘a and salawat.',
  'Pray two rak‘at tahiyyat al-masjid, in the Rawdah if you have a permit, otherwise anywhere.',
  'Walk calmly to the Muwajaha, the brass grille facing the blessed grave. Stand at a respectful distance, gaze lowered, voice low.',
];

export interface SalaamStop {
  order: number;
  who: string;
  position: string;
  dua: Dua;
}

export const SALAAM_STOPS: SalaamStop[] = [
  {
    order: 1,
    who: 'The Prophet',
    position: 'Stand facing the grille, in the centre',
    dua: {
      transliteration:
        "As-salamu 'alayka ya Rasulallahi wa rahmatullahi wa barakatuh.",
      translation:
        'Peace be upon you, O Messenger of Allah, and the mercy of Allah and His blessings.',
    },
  },
  {
    order: 2,
    who: 'Abu Bakr as-Siddiq',
    position: 'One step to the right',
    dua: {
      transliteration:
        "As-salamu 'alayka ya Aba Bakrin-Siddiq, khalifata Rasulillah.",
      translation:
        'Peace be upon you, O Abu Bakr the Truthful, successor of the Messenger of Allah.',
    },
  },
  {
    order: 3,
    who: '‘Umar ibn al-Khattab',
    position: 'One more step to the right',
    dua: {
      transliteration:
        "As-salamu 'alayka ya 'Umara-l-Faruq, ya amiral-mu'minin.",
      translation:
        'Peace be upon you, O ‘Umar the Discerner, O Commander of the Believers.',
    },
  },
];

export const RAWDAH = {
  title: 'A garden of Paradise',
  quote:
    '"Between my house and my minbar is a garden from the gardens of Paradise." (Bukhari, Muslim)',
  body: 'It is the area with the green carpet between the blessed chamber and the minbar.',
  gettingIn: [
    'Book a permit in the Nusuk app. Men and women have separate time slots, and permits are limited, so check the current rules.',
    'Arrive early with wudu and your permit QR code ready.',
    'Visits are short, often 10–15 minutes, so plan what you will pray and ask for beforehand.',
  ],
  whatToDo: [
    'Pray two rak‘at nafl (not at a makruh time), and make long du‘a in sujud.',
    'Send abundant salawat on the Prophet — the Ibrahimiyyah below.',
    'Seek forgiveness with Sayyid al-Istighfar.',
    'Ask Allah from your personal list, for family and the Ummah.',
    'Leave calmly when asked, so others can have their turn.',
  ],
  salawatIbrahimiyyah: {
    label: 'Salawat Ibrahimiyyah — recited in every tashahhud',
    transliteration:
      "Allahumma salli 'ala Muhammadinw wa 'ala ali Muhammad, kama sallayta 'ala Ibrahima wa 'ala ali Ibrahim, innaka hamidum-majid. Allahumma barik 'ala Muhammadinw wa 'ala ali Muhammad, kama barakta 'ala Ibrahima wa 'ala ali Ibrahim, innaka hamidum-majid.",
    translation:
      'O Allah, send blessings upon Muhammad and upon the family of Muhammad, as You sent blessings upon Ibrahim and the family of Ibrahim; You are Praiseworthy, Glorious. O Allah, send favour upon Muhammad and upon the family of Muhammad, as You favoured Ibrahim and the family of Ibrahim; You are Praiseworthy, Glorious.',
  },
  sayyidAlIstighfar: {
    label: 'Sayyid al-Istighfar — the master of seeking forgiveness',
    transliteration:
      "Allahumma anta Rabbi la ilaha illa ant, khalaqtani wa ana 'abduk, wa ana 'ala 'ahdika wa wa'dika mastata't. A'udhu bika min sharri ma sana't, abu'u laka bini'matika 'alayya, wa abu'u bidhanbi faghfir li, fa-innahu la yaghfirudh-dhunuba illa ant.",
    translation:
      'O Allah, You are my Lord, there is no god but You. You created me and I am Your servant, and I am faithful to Your covenant and promise as much as I am able. I seek refuge in You from the evil of what I have done. I acknowledge Your favour upon me, and I acknowledge my sin, so forgive me, for none forgives sins but You.',
    source: 'Bukhari',
  },
};

export interface MadinahDua extends Dua {
  reference: string;
}

export const MADINAH_DUAS_INTRO =
  'There is no single fixed du‘a for Madinah. These are du‘as connected to the city and to the Prophet. The source is shown on each card.';

export const MADINAH_DUAS: MadinahDua[] = [
  {
    reference: 'The du‘a of ‘Umar',
    transliteration:
      "Allahummarzuqni shahadatan fi sabilika, waj'al mawti fi baladi rasulik.",
    translation:
      'O Allah, grant me martyrdom in Your path, and let my death be in the city of Your Messenger.',
    source: 'Bukhari',
  },
  {
    reference: 'Love for Madinah',
    transliteration:
      'Allahumma habbib ilaynal-madinata ka-hubbina makkata aw ashadd.',
    translation:
      'O Allah, make Madinah beloved to us as You made Makkah beloved, or even more.',
    source: 'Bukhari — a du‘a of the Prophet',
  },
  {
    reference: 'Blessing of Madinah',
    transliteration:
      "Allahummaj'al bil-madinati di'faymma ja'alta bi-makkata minal-barakah.",
    translation:
      'O Allah, grant Madinah twice the blessing that You granted Makkah.',
    source: 'Bukhari',
  },
  {
    reference: 'Entering the mosque',
    transliteration:
      "Bismillah, was-salatu was-salamu 'ala Rasulillah. Allahummaftah li abwaba rahmatik.",
    translation:
      'In the name of Allah, and peace and blessings on the Messenger of Allah. O Allah, open for me the doors of Your mercy.',
  },
];
