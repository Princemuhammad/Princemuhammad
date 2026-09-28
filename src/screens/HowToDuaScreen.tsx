import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import ScreenHeader from '../components/ScreenHeader';
import { DUA_INTRO, DUA_STEPS } from '../data/duaSteps';
import { colors, radius, spacing, typography } from '../theme';

export default function HowToDuaScreen() {
  return (
    <ScreenContainer>
      <ScreenHeader title="How to make du‘a" subtitle={DUA_INTRO} />
      <Text style={styles.sectionLabel}>STEP BY STEP</Text>
      {DUA_STEPS.map((step, i) => (
        <View key={i} style={styles.row}>
          <View style={styles.numberCircle}>
            <Text style={styles.numberText}>{i + 1}</Text>
          </View>
          <View style={styles.textWrap}>
            <Text style={typography.subheading}>{step.title}</Text>
            <Text style={styles.body}>{step.body}</Text>
          </View>
        </View>
      ))}
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  sectionLabel: {
    ...typography.caption,
    color: colors.gold,
    fontWeight: '700',
    letterSpacing: 0.5,
    marginBottom: spacing.md,
  },
  row: { flexDirection: 'row', marginBottom: spacing.lg },
  numberCircle: {
    width: 30,
    height: 30,
    borderRadius: radius.full,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
  },
  numberText: { color: colors.textInverse, fontWeight: '700' },
  textWrap: { flex: 1 },
  body: { ...typography.body, marginTop: spacing.xs, color: colors.textMuted },
});
