export const DAM_INTRO =
  'A Dam is the sacrifice of a sheep or goat within the Haram of Makkah, its meat given to the poor. It is owed when a wajib act of ‘Umrah is left out or a major ihram restriction is broken. Smaller breaches need a Sadaqah (charity) instead. This page is general guidance, not a fatwa — for your own situation, ask a qualified scholar.';

export interface PenaltyKind {
  title: string;
  body: string;
}

export const PENALTY_KINDS: PenaltyKind[] = [
  {
    title: 'Dam',
    body: 'One sheep or goat, fit for Qurbani, slaughtered inside the Haram. You do not eat from it.',
  },
  {
    title: 'Sadaqah',
    body: 'Half a sa‘ of wheat (about 1.6–2 kg) or its value, the same as sadaqat al-fitr, given to the poor.',
  },
  {
    title: 'Fidyah by choice (with a valid excuse)',
    body: 'If illness or a head ailment forced the breach, choose one: sacrifice a sheep, feed six poor people, or fast three days (Qur’an 2:196).',
  },
];

export const DAM_COMMON_CASES: string[] = [
  'Missing the wajib order of the six steps, such as delaying halq/taqsir well beyond Sa‘i without excuse',
  'Covering the head, or wearing stitched clothing (for men), for a substantial time without excuse',
  'Applying perfume to the body or ihram cloth deliberately',
  'Cutting a significant amount of hair or trimming the nails deliberately, without excuse',
  'Intimate relations before completing ‘Umrah — this invalidates the ‘Umrah; it must be completed and then made up, along with a Dam',
  'Hunting land game while in ihram',
];

export const FORGOT_OR_DIDNT_KNOW = [
  'The sin of a restriction is lifted when it is broken by genuine forgetfulness or ignorance, as Allah does not burden a soul beyond what it can bear.',
  'The worldly ruling (the Dam or Sadaqah owed) generally still applies in most cases, as it repairs what was missed rather than punishes intent — though scholars differ on some restrictions. Ask your local scholar for your specific case.',
];
