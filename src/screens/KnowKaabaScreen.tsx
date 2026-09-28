import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import ScreenHeader from '../components/ScreenHeader';
import KaabaGraphic from '../components/KaabaGraphic';
import { KAABA_DIRECTION_NOTE, KAABA_FEATURES } from '../data/kaaba';
import { colors, radius, spacing, typography } from '../theme';

export default function KnowKaabaScreen() {
  return (
    <ScreenContainer>
      <ScreenHeader title="Know the Ka‘bah" />

      <View style={styles.graphicWrap}>
        <KaabaGraphic size={160} />
      </View>
      <View style={styles.noteCard}>
        <Text style={styles.noteText}>{KAABA_DIRECTION_NOTE}</Text>
      </View>

      {KAABA_FEATURES.map((f) => (
        <View key={f.name} style={styles.card}>
          <Text style={typography.subheading}>{f.name}</Text>
          <Text style={styles.body}>{f.body}</Text>
        </View>
      ))}
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  graphicWrap: { alignItems: 'center', marginBottom: spacing.md },
  noteCard: {
    backgroundColor: colors.primaryLight,
    borderRadius: radius.md,
    padding: spacing.md,
    marginBottom: spacing.lg,
  },
  noteText: { ...typography.body, color: colors.primaryDark },
  card: {
    backgroundColor: colors.card,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    marginBottom: spacing.sm,
  },
  body: { ...typography.body, marginTop: spacing.xs, color: colors.textMuted },
});
