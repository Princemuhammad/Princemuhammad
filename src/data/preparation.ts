export interface ChecklistSection {
  title: string;
  subtitle: string;
  items: string[];
}

export const BEFORE_LEAVING_CHECKLIST: ChecklistSection = {
  title: 'Before leaving checklist',
  subtitle: 'Tick off each item at home',
  items: [
    'Have a ghusl (full body wash)',
    'Clip the nails',
    'Trim the moustache and remove unwanted hair from the pubic area and armpits',
    'Perform two rak‘at nafl for ease of the journey (avoid the makruh times)',
    'Make du‘a, recite salawat and thank Allah for the opportunity of ‘Umrah',
    'Meet family and friends; seek forgiveness if you have any rifts or have hurt anyone',
    'Settle debts and write down your wasiyyah (will)',
  ],
};

export const INTENTION_SINCERITY = {
  title: 'Intention & sincerity',
  subtitle: 'Why we go, and for whom',
  body: [
    '‘Umrah, like every act of worship, is judged by its intention. "Actions are but by intentions, and every person will have only what he intended" (Bukhari & Muslim).',
    'Go for the sake of Allah alone — not to be seen or praised, not for a photograph or a title. Renew this intention often: before booking, while packing, and again at the miqat.',
    'Ask Allah to accept the ‘Umrah, to forgive your sins, and to make it a means of drawing closer to Him, not an end in itself.',
  ],
};

export const REQUIREMENTS_MAHRAM = {
  title: 'Requirements & mahram',
  subtitle: 'Who performs ‘Umrah, and with whom',
  body: [
    '‘Umrah is due once in a lifetime upon every adult Muslim who is sane and able — physically and financially — to perform it.',
    'A woman should travel with her mahram (husband or a permanently unmarriageable male relative) or, where scholars permit, in a trustworthy group, according to the safety and rulings of her school of thought.',
    'Children may accompany a guardian; their ‘Umrah is voluntary and does not discharge the obligation once they reach maturity.',
  ],
};

export const WHAT_TO_PACK = {
  title: 'What to pack',
  subtitle: 'Ihram, documents, family essentials',
  body: [
    'Men: two or three sets of ihram cloth (izar and rida’), a money belt, sandals that leave the ankles uncovered.',
    'Women: loose, modest, plain clothing; a headscarf; comfortable closed shoes.',
    'Documents: passport, visa, ‘Umrah permit, vaccination certificate, travel insurance, printed hotel and flight bookings.',
    'Essentials: unscented soap and wipes, a small first-aid kit, a prayer mat, a phone power bank, a card for each child with the hotel name and a family meeting-gate number.',
  ],
};
