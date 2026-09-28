import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import ScreenHeader from '../components/ScreenHeader';
import TabSwitch from '../components/TabSwitch';
import { BulletList } from '../components/Section';
import { WEARING_IHRAM_MEN, WEARING_IHRAM_WOMEN } from '../data/ihram';
import { colors, radius, spacing, typography } from '../theme';

export default function WearingIhramScreen() {
  const [tab, setTab] = useState(0);
  const data = tab === 0 ? WEARING_IHRAM_MEN : WEARING_IHRAM_WOMEN;

  return (
    <ScreenContainer>
      <ScreenHeader title="Wearing the ihram" />
      <TabSwitch options={['Men & boys', 'Women & girls']} selected={tab} onSelect={setTab} />

      <Text style={typography.subheading}>{data.title}</Text>
      <Text style={styles.subtitle}>{data.subtitle}</Text>
      <BulletList items={data.steps} ordered />

      <View style={styles.noteCard}>
        <Text style={styles.noteText}>{data.note}</Text>
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  subtitle: { ...typography.body, color: colors.textMuted, marginBottom: spacing.md },
  noteCard: {
    backgroundColor: colors.goldLight,
    borderRadius: radius.md,
    padding: spacing.md,
    marginTop: spacing.sm,
  },
  noteText: { ...typography.body, color: colors.primaryDark },
});
