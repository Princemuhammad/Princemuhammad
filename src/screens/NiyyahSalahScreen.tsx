import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import ScreenHeader from '../components/ScreenHeader';
import TabSwitch from '../components/TabSwitch';
import { colors, radius, spacing, typography } from '../theme';
import { NIYYAH_FARD, NIYYAH_INTRO, NIYYAH_NAFL, NIYYAH_SUNNAH } from '../data/niyyah';

const TABS = [
  { label: 'Fard', data: NIYYAH_FARD },
  { label: 'Sunnah & Witr', data: NIYYAH_SUNNAH },
  { label: 'Nafl & Tahajjud', data: NIYYAH_NAFL },
];

export default function NiyyahSalahScreen() {
  const [tab, setTab] = useState(0);
  const data = TABS[tab].data;

  return (
    <ScreenContainer>
      <ScreenHeader title="Niyyah for salah" subtitle={NIYYAH_INTRO} />
      <TabSwitch options={TABS.map((t) => t.label)} selected={tab} onSelect={setTab} />

      {data.map((entry, i) => (
        <View key={i} style={styles.card}>
          <View style={styles.headerRow}>
            <Text style={typography.subheading}>{entry.prayer}</Text>
            <Text style={styles.rakat}>{entry.rakat}</Text>
          </View>
          <Text style={typography.arabic}>{entry.transliteration}</Text>
          <Text style={styles.translation}>{entry.translation}</Text>
        </View>
      ))}
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.goldLight,
    borderLeftWidth: 4,
    borderLeftColor: colors.gold,
    padding: spacing.md,
    marginBottom: spacing.md,
  },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: spacing.xs },
  rakat: { ...typography.caption, color: colors.primary, fontWeight: '700' },
  translation: { ...typography.body, marginTop: spacing.sm },
});
