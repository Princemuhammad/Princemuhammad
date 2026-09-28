import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import ScreenHeader from '../components/ScreenHeader';
import { BulletList } from '../components/Section';
import { MIQATS, MIQAT_INSIDE_NOTES, MIQAT_INTRO } from '../data/miqat';
import { colors, radius, spacing, typography } from '../theme';

export default function MiqatScreen() {
  return (
    <ScreenContainer>
      <ScreenHeader title="Where to make niyyah" subtitle={MIQAT_INTRO} />

      <Text style={styles.sectionLabel}>
        THE FIVE MIQATS SET BY THE PROPHET
      </Text>
      {MIQATS.map((m) => (
        <View key={m.name} style={styles.card}>
          <Text style={typography.subheading}>{m.name}</Text>
          <Text style={styles.forWhom}>{m.forWhom}</Text>
          <Text style={styles.distance}>{m.distance}</Text>
        </View>
      ))}

      <View style={{ marginTop: spacing.md }}>
        <Text style={styles.sectionLabel}>
          IF YOU ARE ALREADY INSIDE THE MIQAT
        </Text>
        <BulletList items={MIQAT_INSIDE_NOTES} />
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  sectionLabel: {
    ...typography.caption,
    color: colors.gold,
    fontWeight: '700',
    letterSpacing: 0.5,
    marginBottom: spacing.sm,
  },
  card: {
    backgroundColor: colors.card,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    marginBottom: spacing.sm,
  },
  forWhom: { ...typography.body, marginTop: spacing.xs },
  distance: { ...typography.caption, marginTop: spacing.xs },
});
