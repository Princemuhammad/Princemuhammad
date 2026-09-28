import React from 'react';
import ScreenContainer from '../components/ScreenContainer';
import ScreenHeader from '../components/ScreenHeader';
import DuaCard from '../components/DuaCard';
import { RABBANA_DUAS } from '../data/rabbana';

export default function Rabbana40Screen() {
  return (
    <ScreenContainer>
      <ScreenHeader
        title="40 Rabbana"
        subtitle="Du‘as from the Qur’an that call on Allah as “Rabbana”, Our Lord. Recite them after salah, in tawaf and Sa‘i, or at any time. Scroll to read all 40."
      />
      {RABBANA_DUAS.map((dua, i) => (
        <DuaCard key={i} index={i + 1} dua={dua} reference={dua.reference} />
      ))}
    </ScreenContainer>
  );
}
