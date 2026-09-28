import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import ScreenHeader from '../components/ScreenHeader';
import Section, { BulletList } from '../components/Section';
import DuaCard from '../components/DuaCard';
import { RAWDAH } from '../data/madinah';
import { colors, radius, spacing, typography } from '../theme';

export default function RawdahScreen() {
  return (
    <ScreenContainer>
      <ScreenHeader eyebrow={RAWDAH.title} title="In the Rawdah" />

      <View style={styles.quoteCard}>
        <Text style={styles.quote}>{RAWDAH.quote}</Text>
        <Text style={styles.quoteBody}>{RAWDAH.body}</Text>
      </View>

      <Section title="Getting in">
        <BulletList items={RAWDAH.gettingIn} />
      </Section>

      <Section title="What to do inside">
        <BulletList items={RAWDAH.whatToDo} />
      </Section>

      <Text style={typography.subheading}>{RAWDAH.salawatIbrahimiyyah.label}</Text>
      <DuaCard dua={RAWDAH.salawatIbrahimiyyah} />

      <Text style={typography.subheading}>{RAWDAH.sayyidAlIstighfar.label}</Text>
      <DuaCard dua={RAWDAH.sayyidAlIstighfar} />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  quoteCard: {
    backgroundColor: colors.primaryLight,
    borderRadius: radius.md,
    padding: spacing.md,
    marginBottom: spacing.lg,
  },
  quote: {
    ...typography.body,
    fontStyle: 'italic',
    color: colors.primaryDark,
    fontWeight: '600',
  },
  quoteBody: { ...typography.body, marginTop: spacing.sm, color: colors.primaryDark },
});
