export interface KaabaFeature {
  name: string;
  body: string;
}

export const KAABA_FEATURES: KaabaFeature[] = [
  {
    name: 'Black Stone (Hajr al-Aswad)',
    body: 'Tawaf starts and ends on its line. Face it, raise or point your right hand. Do not push to kiss it.',
  },
  {
    name: 'Rukn al-Yamani',
    body: 'Touch with the right hand if easy, otherwise pass on without pointing. Recite "Rabbana atina…" from here to the Stone.',
  },
  {
    name: 'Hijr Isma‘il (Hateem)',
    body: 'Part of the Ka‘bah. Walk outside its curved wall or the circuit does not count. The Mizab (golden spout) is above it.',
  },
  {
    name: 'Maqam Ibrahim',
    body: 'Pray the two rak‘at after tawaf behind it, or anywhere in the mosque if crowded.',
  },
  {
    name: 'Multazam',
    body: 'The wall between the Black Stone and the door of the Ka‘bah — a place where du‘a is especially encouraged, if you can reach it without crowding others.',
  },
  {
    name: 'Mizab ar-Rahmah',
    body: 'The golden spout above Hijr Isma‘il that drains rainwater from the roof of the Ka‘bah.',
  },
];

export const KAABA_DIRECTION_NOTE =
  'Tawaf is always anticlockwise, with the Ka‘bah kept on your left, starting and ending at the line of the Black Stone.';
