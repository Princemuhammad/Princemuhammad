import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import ScreenHeader from '../components/ScreenHeader';
import Section, { BulletList } from '../components/Section';
import DuaCard from '../components/DuaCard';
import { BEFORE_YOU_GO_IN, SALAAM_STOPS } from '../data/madinah';
import { colors, radius, spacing, typography } from '../theme';

export default function SendingSalaamScreen() {
  return (
    <ScreenContainer>
      <ScreenHeader title="Sending salaam" />

      <Section title="Before you go in">
        <BulletList items={BEFORE_YOU_GO_IN} />
      </Section>

      {SALAAM_STOPS.map((stop) => (
        <View key={stop.order} style={styles.stopBlock}>
          <View style={styles.stopHeader}>
            <View style={styles.stopCircle}>
              <Text style={styles.stopCircleText}>{stop.order}</Text>
            </View>
            <View>
              <Text style={typography.subheading}>{stop.who}</Text>
              <Text style={styles.position}>{stop.position}</Text>
            </View>
          </View>
          <DuaCard dua={stop.dua} />
        </View>
      ))}
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  stopBlock: { marginBottom: spacing.md },
  stopHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: spacing.sm },
  stopCircle: {
    width: 30,
    height: 30,
    borderRadius: radius.full,
    backgroundColor: colors.gold,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.sm,
  },
  stopCircleText: { color: colors.primaryDark, fontWeight: '700' },
  position: { ...typography.caption, marginTop: 1 },
});
