import { Dua } from './types';

export interface UmrahStep {
  stepNumber: number;
  totalSteps: number;
  title: string;
  intro: string;
  instructions: string[];
  duas: Dua[];
}

export const UMRAH_STEPS: UmrahStep[] = [
  {
    stepNumber: 1,
    totalSteps: 6,
    title: 'Ihram at the miqat',
    intro:
      '‘Umrah begins with the intention, made in ihram at or before the miqat.',
    instructions: [
      'Ghusl, clip nails and trim hair before leaving.',
      'Men put on the two white cloths; women wear modest dress.',
      'Pray two rak‘at nafl if it is not a makruh time.',
      'When the crew announces the miqat, make the intention.',
      'Add the conditional clause if you fear a hindrance, then begin the talbiyah.',
      'From now on, ihram restrictions apply.',
    ],
    duas: [
      {
        label: 'Intention for ‘Umrah',
        transliteration:
          "Allahumma inni uridul-'umrata, fa-yassirha li wa taqabbalha minni.",
        translation:
          'O Allah, I intend to perform ‘Umrah, so make it easy for me and accept it from me.',
      },
      {
        label: 'Conditional clause (if you fear illness or a hindrance)',
        transliteration: 'Allahumma mahilli haythu habastani.',
        translation:
          'O Allah, my place of release is wherever You withhold me.',
        source: 'Bukhari & Muslim, hadith of Dubai‘ah bint az-Zubair',
      },
      {
        label: 'Talbiyah — repeat often until tawaf begins',
        transliteration:
          'Labbayk Allahumma labbayk. Labbayka la sharika laka labbayk. Innal-hamda wan-ni‘mata laka wal-mulk, la sharika lak.',
        translation:
          'Here I am, O Allah, here I am. Here I am, You have no partner, here I am. Indeed all praise, favour and dominion are Yours. You have no partner.',
      },
    ],
  },
  {
    stepNumber: 2,
    totalSteps: 6,
    title: 'Entering Masjid al-Haram',
    intro:
      'Arrive rested. Keep reciting the talbiyah until you reach the Ka‘bah.',
    instructions: [
      'Make wudu before you enter; tawaf requires it.',
      'Enter with your right foot and recite the entry du‘a.',
      'At your first sight of the Ka‘bah, raise your hands and ask Allah from the heart. No fixed du‘a is authentic here.',
      'Head down to the mataf and find the Black Stone line, marked by a green light on the wall.',
    ],
    duas: [
      {
        label: 'Entering the mosque',
        transliteration:
          "Bismillah, was-salatu was-salamu 'ala Rasulillah. Allahummaftah li abwaba rahmatik.",
        translation:
          'In the name of Allah, and peace and blessings on the Messenger of Allah. O Allah, open for me the doors of Your mercy.',
      },
    ],
  },
  {
    stepNumber: 3,
    totalSteps: 6,
    title: 'Tawaf: seven circuits',
    intro:
      'Walk anticlockwise around the Ka‘bah, keeping it on your left, starting and ending at the Black Stone.',
    instructions: [
      'Be in wudu. Stop reciting the talbiyah once tawaf begins.',
      'Men: uncover the right shoulder (idtiba‘) for this tawaf only.',
      'Stand on the Black Stone line, face it, raise or point your right hand and say the takbir.',
      'Walk with the Ka‘bah on your left, outside the wall of Hijr Isma‘il.',
      'Men walk briskly with short steps (raml) in circuits 1–3 if the crowd allows.',
      'Touch Rukn al-Yamani if easy; otherwise pass on without pointing.',
      'Between Rukn al-Yamani and the Black Stone, recite "Rabbana atina…".',
      'Repeat at the Black Stone line for each of the 7 circuits.',
      'In between, make du‘a in any language, recite Qur’an or do dhikr — no fixed du‘a exists for each circuit.',
    ],
    duas: [
      {
        label: 'At the Black Stone, every circuit',
        transliteration: 'Bismillahi Allahu akbar.',
        translation: 'In the name of Allah, Allah is the Greatest.',
      },
      {
        label: 'Between Rukn al-Yamani and the Black Stone',
        transliteration:
          "Rabbana atina fid-dunya hasanatanw wa fil-akhirati hasanatanw wa qina 'adhaban-nar.",
        translation:
          'Our Lord, give us good in this world and good in the Hereafter, and protect us from the punishment of the Fire.',
        source: 'Qur’an 2:201',
      },
    ],
  },
  {
    stepNumber: 4,
    totalSteps: 6,
    title: 'Maqam Ibrahim & Zamzam',
    intro:
      'After the seventh circuit, cover your right shoulder again before praying.',
    instructions: [
      'Walk towards Maqam Ibrahim reciting the verse below.',
      'Pray two rak‘at behind it, or anywhere in the mosque if crowded: al-Kafirun in the first, al-Ikhlas in the second.',
      'Drink Zamzam facing the qiblah, in three sips, and make du‘a.',
      'If easy, return to face the Black Stone and say "Allahu Akbar" before going to Safa.',
    ],
    duas: [
      {
        label: 'Walking to the Maqam — Qur’an 2:125',
        transliteration: 'Wattakhidhu mim-maqami Ibrahima musalla.',
        translation: 'And take the station of Ibrahim as a place of prayer.',
      },
      {
        label: 'Drinking Zamzam',
        transliteration:
          "Allahumma inni as'aluka 'ilman nafi'an, wa rizqan wasi'an, wa shifa'an min kulli da'.",
        translation:
          'O Allah, I ask You for beneficial knowledge, abundant provision, and healing from every illness.',
      },
    ],
  },
  {
    stepNumber: 5,
    totalSteps: 6,
    title: 'Sa‘i: Safa to Marwah',
    intro:
      'Seven laps, following the footsteps of Hajar. Safa to Marwah is lap 1; lap 7 ends at Marwah.',
    instructions: [
      'Approaching Safa for the first time, recite the verse (du‘a 1).',
      'On Safa, face the Ka‘bah, raise your hands, say "Allahu Akbar" three times, then du‘a 2 three times, with your own du‘a in between.',
      'Walk to Marwah. Men jog lightly between the green lights.',
      'On Marwah, repeat what you did on Safa, without the verse.',
      'Continue until the seventh lap ends at Marwah. Wudu is recommended but not required for Sa‘i.',
    ],
    duas: [
      {
        label: 'Approaching Safa (first time only) — Qur’an 2:158',
        transliteration:
          "Innas-safa wal-marwata min sha'a'irillah. Abda'u bima bada'Allahu bih.",
        translation:
          'Indeed, Safa and Marwah are among the symbols of Allah. I begin with what Allah began with.',
      },
      {
        label: 'On Safa and Marwah, three times',
        transliteration:
          "La ilaha illallahu wahdahu la sharika lah, lahul-mulku wa lahul-hamdu wa huwa 'ala kulli shay'in qadeer. La ilaha illallahu wahdah, anjaza wa'dah, wa nasara 'abdah, wa hazamal-ahzaba wahdah.",
        translation:
          'There is no god but Allah alone, without partner. His is the dominion and His is the praise, and He is over all things omnipotent. There is no god but Allah alone. He fulfilled His promise, gave victory to His servant, and defeated the confederates alone.',
      },
    ],
  },
  {
    stepNumber: 6,
    totalSteps: 6,
    title: 'Halq or taqsir',
    intro: 'Cutting the hair is the final act. It releases you from ihram.',
    instructions: [
      'Men: shaving the whole head (halq) is better — the Prophet prayed three times for those who shave. Trimming evenly all over (taqsir) is also valid.',
      'Women: gather the hair and cut about a fingertip’s length (about 2 cm) from the ends, in private.',
      'Alhamdulillah — all ihram restrictions are now lifted. Thank Allah and ask Him to accept it.',
    ],
    duas: [
      {
        label: 'For acceptance — Qur’an 2:127',
        transliteration: "Rabbana taqabbal minna innaka antas-samee'ul-'aleem.",
        translation:
          'Our Lord, accept this from us. You are the All-Hearing, the All-Knowing.',
      },
    ],
  },
];
