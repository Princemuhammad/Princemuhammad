export interface MiqatPoint {
  name: string;
  forWhom: string;
  distance: string;
}

export const MIQAT_INTRO =
  'A miqat is a boundary you may not cross towards Makkah, intending ‘Umrah, without being in ihram with your niyyah made. Where you enter ihram depends on where you are coming from.';

export const MIQATS: MiqatPoint[] = [
  {
    name: 'Dhul Hulayfah (Abyar ‘Ali)',
    forWhom: 'For those coming from Madinah',
    distance: 'About 10 km from Masjid an-Nabawi and about 420 km from Makkah — the farthest miqat.',
  },
  {
    name: 'al-Juhfah (near Rabigh)',
    forWhom: 'For those from Syria, Egypt, North Africa and the north-west, including most flights landing in Jeddah',
    distance: 'About 180 km from Makkah.',
  },
  {
    name: 'Qarn al-Manazil (as-Sayl al-Kabir)',
    forWhom: 'For those from Najd, Riyadh, the Gulf by road, and Taif',
    distance:
      'About 80 km from Makkah. Its upper point on the al-Hada mountain road is Wadi Muhrim.',
  },
  {
    name: 'Yalamlam',
    forWhom: 'For those from Yemen and the south, including many flights via the south route',
    distance: 'About 100 km south of Makkah.',
  },
  {
    name: 'Dhat ‘Irq',
    forWhom: 'For those from Iraq and the north-east',
    distance: 'About 100 km from Makkah.',
  },
];

export const MIQAT_INSIDE_NOTES = [
  'Jeddah: residents of Jeddah, and those who fly in with no intention to enter Makkah for ‘Umrah until later, make niyyah from Jeddah itself, as it lies inside the miqat boundary — check with your scholar if you are unsure of your case.',
  'Makkah residents, and those already inside the miqat who wish to perform another ‘Umrah, exit to a nearby point outside the Haram such as at-Tan‘im or al-Ji‘ranah to make their niyyah.',
];
