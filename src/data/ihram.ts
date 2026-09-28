export const WEARING_IHRAM_MEN = {
  title: 'Two white cloths',
  subtitle: 'Izar around the waist, rida’ over the shoulders. Head uncovered.',
  steps: [
    'The ihram attire consists of two unsewn plain white pieces of cloth.',
    'One piece covers the lower half of the body, the other drapes over the upper half.',
    'Secure the lower cloth by tying a knot or folding it over the waist. A belt or money pouch is allowed.',
    'The navel must be covered. No additional garments underneath, including underwear.',
    'Footwear must leave the ankles and the upper-middle part of the foot, where laces are tied, uncovered.',
    'Keep the head uncovered: no cap, turban or hood. An umbrella is fine.',
  ],
  note: 'During tawaf only: uncover the right shoulder (idtiba‘) by passing the upper cloth under the right arm. Cover it again before praying.',
};

export const WEARING_IHRAM_WOMEN = {
  title: 'Modest dress',
  subtitle: 'Ordinary loose, plain, modest clothing that covers the body. No niqab or gloves.',
  steps: [
    'Any modest, loose-fitting clothing that fully covers the body, in any colour, may be worn — there is no obligatory white for women.',
    'The face and hands remain uncovered while in ihram, though a woman may lower a headscarf over her face for privacy from strangers without it touching the face.',
    'No gloves.',
    'Ordinary comfortable shoes may be worn.',
  ],
  note: 'Women do not uncover the shoulder during tawaf; idtiba‘ is only for men.',
};

export interface IhramStep {
  title: string;
  body: string;
}

export const ENTERING_IHRAM_STEPS: IhramStep[] = [
  {
    title: 'Purification',
    body: 'Perform ghusl or wudu to attain cleanliness before ihram.',
  },
  {
    title: 'Dress in ihram',
    body: 'Two white cloths for men; modest clothing for women, symbolising equality and simplicity.',
  },
  {
    title: 'Optional nafl salah',
    body: 'Two rak‘at if it is not a makruh time, seeking blessing for the journey.',
  },
  {
    title: 'Recitation in salah',
    body: 'Surah al-Kafirun in the first rak‘ah and al-Ikhlas in the second.',
  },
  {
    title: 'Make the intention',
    body: 'Intend ‘Umrah solely for the pleasure of Allah.',
  },
  {
    title: 'Recite the talbiyah',
    body: 'Men aloud, women softly.',
  },
];

export const IHRAM_RESTRICTIONS: string[] = [
  'Applying perfume or scented products to the body, hair or ihram cloth',
  'Cutting or trimming hair or nails',
  'Hunting land game, or pointing others to it',
  'Sexual relations, or their preliminaries (kissing, touching with desire)',
  'Contracting a marriage, for yourself or on behalf of another',
  'Men: wearing stitched or shaped clothing (garments sewn to the form of the body)',
  'Men: covering the head, including with a cap, turban or hood (an umbrella is allowed)',
  'Women: covering the face with a niqab, or wearing gloves',
  'Uprooting or cutting plants and trees within the boundary of the Haram',
  'Using obscene language, arguing or quarrelling (rafath, fusuq and jidal — Qur’an 2:197)',
  'Carrying weapons with intent to fight',
  'Applying oil or dye to the hair',
];
