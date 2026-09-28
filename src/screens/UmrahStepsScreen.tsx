import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import ScreenHeader from '../components/ScreenHeader';
import { RootStackParamList } from '../navigation/types';
import { UMRAH_STEPS } from '../data/umrahSteps';
import { colors, radius, spacing, typography } from '../theme';

type Props = NativeStackScreenProps<RootStackParamList, 'UmrahSteps'>;

export default function UmrahStepsScreen({ navigation }: Props) {
  return (
    <ScreenContainer>
      <ScreenHeader
        eyebrow="6 Steps"
        title="Six steps to complete ‘Umrah"
        subtitle="Pillars: ihram, tawaf and Sa‘i. Required (wajib): ihram from the miqat and cutting the hair. Tap a step for the details and du‘as."
      />
      {UMRAH_STEPS.map((step, i) => (
        <TouchableOpacity
          key={step.title}
          style={styles.card}
          onPress={() => navigation.navigate('UmrahStepDetail', { stepIndex: i })}
          activeOpacity={0.75}
        >
          <View style={styles.numberCircle}>
            <Text style={styles.numberText}>{step.stepNumber}</Text>
          </View>
          <View style={styles.textWrap}>
            <Text style={typography.subheading}>{step.title}</Text>
            <Text style={styles.intro}>{step.intro}</Text>
          </View>
          <Text style={styles.chevron}>{'›'}</Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity
        style={styles.startButton}
        onPress={() => navigation.navigate('UmrahStepDetail', { stepIndex: 0 })}
        activeOpacity={0.85}
      >
        <Text style={styles.startButtonText}>Start with Step 1</Text>
      </TouchableOpacity>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.card,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    marginBottom: spacing.sm,
  },
  numberCircle: {
    width: 34,
    height: 34,
    borderRadius: radius.full,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
  },
  numberText: { color: colors.textInverse, fontWeight: '700' },
  textWrap: { flex: 1 },
  intro: { ...typography.caption, marginTop: 2 },
  chevron: { fontSize: 22, color: colors.gold, marginLeft: spacing.sm },
  startButton: {
    backgroundColor: colors.gold,
    borderRadius: radius.md,
    paddingVertical: spacing.md,
    alignItems: 'center',
    marginTop: spacing.md,
  },
  startButtonText: { color: colors.primaryDark, fontWeight: '700', fontSize: 16 },
});
