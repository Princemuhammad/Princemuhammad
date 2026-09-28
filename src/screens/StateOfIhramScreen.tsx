import React from 'react';
import ScreenContainer from '../components/ScreenContainer';
import ScreenHeader from '../components/ScreenHeader';
import Section, { BulletList } from '../components/Section';
import DuaCard from '../components/DuaCard';
import { ENTERING_IHRAM_STEPS, IHRAM_RESTRICTIONS } from '../data/ihram';

export default function StateOfIhramScreen() {
  return (
    <ScreenContainer>
      <ScreenHeader
        title="State of ihram"
        subtitle="Ihram is a sacred state entered by intention at the miqat. It lasts until the hair is cut after Sa‘i."
      />

      <Section title="1. Entering ihram: 6 steps">
        <BulletList ordered items={ENTERING_IHRAM_STEPS.map((s) => `${s.title}. ${s.body}`)} />
      </Section>

      <Section title="2. Du‘a of intention (niyyah)">
        <DuaCard
          reference="Said at the miqat"
          dua={{
            transliteration: "Allahumma inni uridul-'umrata, fa-yassirha li wa taqabbalha minni.",
            translation: 'O Allah, I intend to perform ‘Umrah, so make it easy for me and accept it from me.',
          }}
        />
      </Section>

      <Section title="3. Talbiyah">
        <DuaCard
          reference="Repeat often until tawaf begins"
          dua={{
            transliteration:
              'Labbayk Allahumma labbayk. Labbayka la sharika laka labbayk. Innal-hamda wan-ni‘mata laka wal-mulk, la sharika lak.',
            translation:
              'Here I am, O Allah, here I am. Here I am, You have no partner, here I am. Indeed all praise, favour and dominion are Yours. You have no partner.',
          }}
        />
      </Section>

      <Section title="4. Ihram restrictions">
        <BulletList items={IHRAM_RESTRICTIONS} />
      </Section>
    </ScreenContainer>
  );
}
