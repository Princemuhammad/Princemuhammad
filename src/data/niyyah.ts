import { Dua } from './types';

export interface NiyyahEntry extends Dua {
  prayer: string;
  rakat: string;
}

export type NiyyahCategory = 'fard' | 'sunnah' | 'nafl';

export const NIYYAH_INTRO =
  'The niyyah (intention) is made in the heart: knowing which prayer you are about to pray. Saying it aloud is not required, but many find the words below help the heart focus. Then begin with "Allahu Akbar".';

export const NIYYAH_FARD: NiyyahEntry[] = [
  {
    prayer: 'Fajr',
    rakat: '2 rak‘at',
    transliteration:
      "Nawaytu an usalliya lillahi ta'ala rak'atay salatil-fajri fardal-waqti, mutawajjihan ila jihatil-ka'batish-sharifah. Allahu akbar.",
    translation:
      'I intend to pray, for Allah Most High, the two rak‘at of Fajr, the fard of this time, facing the noble Ka‘bah. Allah is the Greatest.',
  },
  {
    prayer: 'Dhuhr',
    rakat: '4 rak‘at',
    transliteration:
      "Nawaytu an usalliya lillahi ta'ala arba'a raka'atin salatiz-zuhri fardal-waqti, mutawajjihan ila jihatil-ka'batish-sharifah. Allahu akbar.",
    translation: 'I intend to pray, for Allah Most High, the four rak‘at of Dhuhr, the fard of this time.',
  },
  {
    prayer: "'Asr",
    rakat: '4 rak‘at',
    transliteration:
      "Nawaytu an usalliya lillahi ta'ala arba'a raka'atin salatil-'asri fardal-waqti, mutawajjihan ila jihatil-ka'batish-sharifah. Allahu akbar.",
    translation: 'I intend to pray, for Allah Most High, the four rak‘at of ‘Asr, the fard of this time.',
  },
  {
    prayer: 'Maghrib',
    rakat: '3 rak‘at',
    transliteration:
      "Nawaytu an usalliya lillahi ta'ala thalatha raka'atin salatil-maghribi fardal-waqti, mutawajjihan ila jihatil-ka'batish-sharifah. Allahu akbar.",
    translation: 'I intend to pray, for Allah Most High, the three rak‘at of Maghrib, the fard of this time.',
  },
  {
    prayer: "'Isha",
    rakat: '4 rak‘at',
    transliteration:
      "Nawaytu an usalliya lillahi ta'ala arba'a raka'atin salatil-'ishai fardal-waqti, mutawajjihan ila jihatil-ka'batish-sharifah. Allahu akbar.",
    translation: 'I intend to pray, for Allah Most High, the four rak‘at of ‘Isha, the fard of this time.',
  },
];

export const NIYYAH_SUNNAH: NiyyahEntry[] = [
  {
    prayer: 'Fajr sunnah',
    rakat: '2 rak‘at, sunnah mu‘akkadah',
    transliteration:
      "Nawaytu an usalliya lillahi ta'ala rak'atay sunnatil-fajri, mutawajjihan ila jihatil-ka'batish-sharifah. Allahu akbar.",
    translation: 'I intend to pray, for Allah Most High, the two rak‘at sunnah of Fajr.',
  },
  {
    prayer: 'Dhuhr sunnah (before)',
    rakat: '4 rak‘at, sunnah mu‘akkadah',
    transliteration:
      "Nawaytu an usalliya lillahi ta'ala arba'a raka'atin sunnatiz-zuhri, mutawajjihan ila jihatil-ka'batish-sharifah. Allahu akbar.",
    translation: 'I intend to pray, for Allah Most High, the four rak‘at sunnah before Dhuhr.',
  },
  {
    prayer: 'Dhuhr sunnah (after)',
    rakat: '2 rak‘at',
    transliteration:
      "Nawaytu an usalliya lillahi ta'ala rak'atay sunnatiz-zuhril-ba'diyyah, mutawajjihan ila jihatil-ka'batish-sharifah. Allahu akbar.",
    translation: 'I intend to pray, for Allah Most High, the two rak‘at sunnah after Dhuhr.',
  },
  {
    prayer: 'Maghrib sunnah',
    rakat: '2 rak‘at',
    transliteration:
      "Nawaytu an usalliya lillahi ta'ala rak'atay sunnatil-maghrib, mutawajjihan ila jihatil-ka'batish-sharifah. Allahu akbar.",
    translation: 'I intend to pray, for Allah Most High, the two rak‘at sunnah after Maghrib.',
  },
  {
    prayer: "'Isha sunnah",
    rakat: '2 rak‘at',
    transliteration:
      "Nawaytu an usalliya lillahi ta'ala rak'atay sunnatil-'isha, mutawajjihan ila jihatil-ka'batish-sharifah. Allahu akbar.",
    translation: 'I intend to pray, for Allah Most High, the two rak‘at sunnah after ‘Isha.',
  },
  {
    prayer: 'Witr',
    rakat: '3 rak‘at, wajib',
    transliteration:
      "Nawaytu an usalliya lillahi ta'ala thalatha raka'atin salatil-witri wajibal-lah, mutawajjihan ila jihatil-ka'batish-sharifah. Allahu akbar.",
    translation: 'I intend to pray, for Allah Most High, the three rak‘at of Witr, wajib for Him.',
  },
];

export const NIYYAH_NAFL: NiyyahEntry[] = [
  {
    prayer: 'Nafl (general)',
    rakat: '2 rak‘at, e.g. for the journey or on entering ihram',
    transliteration:
      "Nawaytu an usalliya lillahi ta'ala rak'ataynin naflan, mutawajjihan ila jihatil-ka'batish-sharifah. Allahu akbar.",
    translation: 'I intend to pray, for Allah Most High, two rak‘at of voluntary prayer.',
  },
  {
    prayer: 'Tahiyyat al-masjid',
    rakat: '2 rak‘at, on entering a mosque',
    transliteration:
      "Nawaytu an usalliya lillahi ta'ala rak'atay tahiyyatil-masjid, mutawajjihan ila jihatil-ka'batish-sharifah. Allahu akbar.",
    translation: 'I intend to pray, for Allah Most High, the two rak‘at greeting the mosque.',
  },
  {
    prayer: 'Tahajjud',
    rakat: '2 rak‘at or more, in the last third of the night',
    transliteration:
      "Nawaytu an usalliya lillahi ta'ala rak'atayt-tahajjudi naflan, mutawajjihan ila jihatil-ka'batish-sharifah. Allahu akbar.",
    translation: 'I intend to pray, for Allah Most High, two rak‘at of tahajjud, voluntary.',
  },
  {
    prayer: 'Du‘ha (forenoon)',
    rakat: '2–8 rak‘at, after sunrise',
    transliteration:
      "Nawaytu an usalliya lillahi ta'ala salatad-duha naflan, mutawajjihan ila jihatil-ka'batish-sharifah. Allahu akbar.",
    translation: 'I intend to pray, for Allah Most High, the du‘ha prayer, voluntary.',
  },
];
