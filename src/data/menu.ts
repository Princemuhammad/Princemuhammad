import { MenuItem } from './types';

export const MAIN_MENU: MenuItem[] = [
  {
    title: '‘Umrah journey',
    subtitle: 'Preparation, ihram, Dam, and the six steps with every du‘a',
    route: 'UmrahHome',
  },
  {
    title: 'Madinah ziyarah',
    subtitle:
      'Salaam to the Prophet, the Rawdah, special du‘as and places to visit',
    route: 'MadinahHome',
  },
  {
    title: '40 Rabbana',
    subtitle: 'Qur’anic du‘as beginning “Our Lord”',
    route: 'Rabbana40',
  },
  {
    title: 'Niyyah for salah',
    subtitle: 'Fard, sunnah, nafl and tahajjud',
    route: 'NiyyahSalah',
  },
  {
    title: 'How to make du‘a',
    subtitle: 'Seven steps to a du‘a that is answered',
    route: 'HowToDua',
  },
];

export const UMRAH_MENU: MenuItem[] = [
  {
    title: 'Preparation',
    subtitle: 'Checklist, packing, travel du‘as',
    route: 'Preparation',
  },
  {
    title: 'Do’s & Don’ts',
    subtitle: 'Etiquette at the Haram',
    route: 'DosDonts',
  },
  {
    title: 'Wearing ihram',
    subtitle: 'Dress for men and women',
    route: 'WearingIhram',
  },
  {
    title: 'State of ihram',
    subtitle: 'Intention, talbiyah, restrictions',
    route: 'StateOfIhram',
  },
  {
    title: 'Where to make niyyah',
    subtitle: 'The five miqats',
    route: 'Miqat',
  },
  {
    title: 'Know the Ka‘bah',
    subtitle: 'Black Stone, Rukn al-Yamani, Maqam Ibrahim',
    route: 'KnowKaaba',
  },
  {
    title: 'Dam & penalties',
    subtitle: 'What is owed, and why',
    route: 'DamPenalties',
  },
  {
    title: 'Places in Makkah',
    subtitle: 'A morning ziyarah tour',
    route: 'PlacesMakkah',
  },
];

export const MADINAH_MENU: MenuItem[] = [
  {
    title: 'Sending salaam',
    subtitle: 'To the Prophet, Abu Bakr and ‘Umar',
    route: 'SendingSalaam',
  },
  {
    title: 'In the Rawdah',
    subtitle: 'Booking, what to pray and what to read',
    route: 'Rawdah',
  },
  {
    title: 'Special du‘as in Madinah',
    subtitle: 'What to ask for in the city of the Prophet',
    route: 'DuasMadinah',
  },
  {
    title: 'Places to visit in Madinah',
    subtitle: 'Quba, Uhud, Baqi‘ and more',
    route: 'PlacesMadinah',
  },
];

export const JUMP_TO_SECTION: { header: string; items: MenuItem[] }[] = [
  {
    header: 'Main menu',
    items: [
      { title: 'Main menu', route: 'MainMenu' },
      { title: '40 Rabbana', route: 'Rabbana40' },
      { title: 'Niyyah for salah', route: 'NiyyahSalah' },
      { title: 'How to make du‘a', route: 'HowToDua' },
      { title: 'Booklet pages (annex)', route: 'BookletAnnex' },
    ],
  },
  {
    header: '‘Umrah journey',
    items: [{ title: '‘Umrah home', route: 'UmrahHome' }, ...UMRAH_MENU],
  },
  {
    header: 'Madinah ziyarah',
    items: [{ title: 'Madinah home', route: 'MadinahHome' }, ...MADINAH_MENU],
  },
];
