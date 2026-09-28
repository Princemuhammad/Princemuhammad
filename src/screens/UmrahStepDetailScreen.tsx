import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import StepProgress from '../components/StepProgress';
import Section, { BulletList } from '../components/Section';
import DuaCard from '../components/DuaCard';
import { RootStackParamList } from '../navigation/types';
import { UMRAH_STEPS } from '../data/umrahSteps';
import { colors, radius, spacing, typography } from '../theme';

type Props = NativeStackScreenProps<RootStackParamList, 'UmrahStepDetail'>;

export default function UmrahStepDetailScreen({ route, navigation }: Props) {
  const { stepIndex } = route.params;
  const step = UMRAH_STEPS[stepIndex];
  const isFirst = stepIndex === 0;
  const isLast = stepIndex === UMRAH_STEPS.length - 1;

  return (
    <ScreenContainer
      style={{ paddingBottom: 100 }}
    >
      <StepProgress current={step.stepNumber} total={step.totalSteps} />
      <Text style={typography.title}>{step.title}</Text>
      <Text style={styles.intro}>{step.intro}</Text>

      <Section title="How to perform">
        <BulletList items={step.instructions} />
      </Section>

      {step.duas.length > 0 && (
        <Section title={step.duas.length > 1 ? "Du'as for this step" : "Du'a"}>
          {step.duas.map((dua, i) => (
            <DuaCard key={i} dua={dua} reference={dua.label} />
          ))}
        </Section>
      )}

      <View style={styles.navRow}>
        <TouchableOpacity
          style={[styles.navButton, isFirst && styles.navButtonDisabled]}
          disabled={isFirst}
          onPress={() => navigation.setParams({ stepIndex: stepIndex - 1 })}
        >
          <Text style={[styles.navButtonText, isFirst && styles.navButtonTextDisabled]}>
            {'‹'} Previous
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.navButton, styles.navButtonPrimary]}
          onPress={() => {
            if (isLast) {
              navigation.navigate('UmrahHome');
            } else {
              navigation.setParams({ stepIndex: stepIndex + 1 });
            }
          }}
        >
          <Text style={styles.navButtonTextPrimary}>{isLast ? 'Finish' : 'Next step ›'}</Text>
        </TouchableOpacity>
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  intro: { ...typography.body, color: colors.textMuted, marginBottom: spacing.lg },
  navRow: { flexDirection: 'row', marginTop: spacing.md, gap: spacing.sm },
  navButton: {
    flex: 1,
    borderRadius: radius.md,
    paddingVertical: spacing.md,
    alignItems: 'center',
    backgroundColor: colors.primaryLight,
  },
  navButtonDisabled: { opacity: 0.4 },
  navButtonPrimary: { backgroundColor: colors.primary },
  navButtonText: { color: colors.primary, fontWeight: '700' },
  navButtonTextDisabled: { color: colors.primary },
  navButtonTextPrimary: { color: colors.textInverse, fontWeight: '700' },
});
