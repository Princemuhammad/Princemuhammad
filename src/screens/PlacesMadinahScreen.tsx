import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import ScreenHeader from '../components/ScreenHeader';
import { PLACES_MADINAH, PLACES_MADINAH_INTRO } from '../data/places';
import { colors, radius, spacing, typography } from '../theme';

export default function PlacesMadinahScreen() {
  return (
    <ScreenContainer>
      <ScreenHeader title="Places in Madinah" subtitle={PLACES_MADINAH_INTRO} />
      {PLACES_MADINAH.map((p, i) => (
        <View key={p.name} style={styles.card}>
          <Text style={styles.index}>{i + 1}</Text>
          <View style={styles.textWrap}>
            <Text style={typography.subheading}>{p.name}</Text>
            <Text style={styles.body}>{p.body}</Text>
          </View>
        </View>
      ))}
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: colors.card,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    marginBottom: spacing.sm,
  },
  index: {
    ...typography.subheading,
    color: colors.gold,
    width: 28,
  },
  textWrap: { flex: 1 },
  body: { ...typography.body, marginTop: spacing.xs, color: colors.textMuted },
});
