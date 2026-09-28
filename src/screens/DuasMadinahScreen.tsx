import React from 'react';
import ScreenContainer from '../components/ScreenContainer';
import ScreenHeader from '../components/ScreenHeader';
import DuaCard from '../components/DuaCard';
import { MADINAH_DUAS, MADINAH_DUAS_INTRO } from '../data/madinah';

export default function DuasMadinahScreen() {
  return (
    <ScreenContainer>
      <ScreenHeader title="Du‘as in Madinah" subtitle={MADINAH_DUAS_INTRO} />
      {MADINAH_DUAS.map((dua, i) => (
        <DuaCard key={i} index={i + 1} dua={dua} reference={dua.reference} />
      ))}
    </ScreenContainer>
  );
}
