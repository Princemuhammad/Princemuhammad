import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import ScreenHeader from '../components/ScreenHeader';
import Section, { BulletList } from '../components/Section';
import {
  DAM_COMMON_CASES,
  DAM_INTRO,
  FORGOT_OR_DIDNT_KNOW,
  PENALTY_KINDS,
} from '../data/damPenalties';
import { colors, radius, spacing, typography } from '../theme';

export default function DamPenaltiesScreen() {
  return (
    <ScreenContainer>
      <ScreenHeader title="Dam & penalties" subtitle={DAM_INTRO} />

      <Section title="1. Three kinds of penalty">
        {PENALTY_KINDS.map((p) => (
          <View key={p.title} style={styles.card}>
            <Text style={typography.subheading}>{p.title}</Text>
            <Text style={styles.body}>{p.body}</Text>
          </View>
        ))}
      </Section>

      <Section title="2. When is Dam due in ‘Umrah? (Hanafi school)">
        <BulletList items={DAM_COMMON_CASES} />
      </Section>

      <Section title="3. Forgot, or didn’t know?">
        <BulletList items={FORGOT_OR_DIDNT_KNOW} />
      </Section>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
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
