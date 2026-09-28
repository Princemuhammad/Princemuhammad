import React from 'react';
import ScreenContainer from '../components/ScreenContainer';
import ScreenHeader from '../components/ScreenHeader';
import Section, { BulletList } from '../components/Section';
import Checklist from '../components/Checklist';
import {
  BEFORE_LEAVING_CHECKLIST,
  INTENTION_SINCERITY,
  REQUIREMENTS_MAHRAM,
  WHAT_TO_PACK,
} from '../data/preparation';

export default function PreparationScreen() {
  return (
    <ScreenContainer>
      <ScreenHeader
        title="Preparation"
        subtitle="Tap through each section. Begin at home, days before you travel."
      />

      <Section title={`1. ${BEFORE_LEAVING_CHECKLIST.title}`}>
        <Checklist items={BEFORE_LEAVING_CHECKLIST.items} />
      </Section>

      <Section title={`2. ${INTENTION_SINCERITY.title}`}>
        <BulletList items={INTENTION_SINCERITY.body} />
      </Section>

      <Section title={`3. ${REQUIREMENTS_MAHRAM.title}`}>
        <BulletList items={REQUIREMENTS_MAHRAM.body} />
      </Section>

      <Section title={`4. ${WHAT_TO_PACK.title}`}>
        <BulletList items={WHAT_TO_PACK.body} />
      </Section>
    </ScreenContainer>
  );
}
