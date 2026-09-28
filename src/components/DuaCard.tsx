import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dua } from '../data/types';
import { colors, radius, spacing, typography } from '../theme';

interface Props {
  dua: Dua;
  index?: number;
  reference?: string;
}

export default function DuaCard({ dua, index, reference }: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        {index !== undefined ? (
          <View style={styles.indexBadge}>
            <Text style={styles.indexText}>{index}</Text>
          </View>
        ) : null}
        <View style={styles.headerText}>
          {reference || dua.label ? (
            <Text style={styles.reference}>{reference ?? dua.label}</Text>
          ) : null}
        </View>
      </View>
      <Text style={typography.arabic}>{dua.transliteration}</Text>
      <Text style={styles.translation}>{dua.translation}</Text>
      {dua.source ? <Text style={styles.source}>{dua.source}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.goldLight,
    borderLeftWidth: 4,
    borderLeftColor: colors.gold,
    padding: spacing.md,
    marginBottom: spacing.md,
  },
  headerRow: { flexDirection: 'row', alignItems: 'center', marginBottom: spacing.xs },
  indexBadge: {
    width: 26,
    height: 26,
    borderRadius: radius.full,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.sm,
  },
  indexText: { color: colors.textInverse, fontWeight: '700', fontSize: 12 },
  headerText: { flex: 1 },
  reference: {
    ...typography.caption,
    color: colors.primary,
    textTransform: 'uppercase',
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  translation: { ...typography.body, marginTop: spacing.sm },
  source: { ...typography.caption, marginTop: spacing.sm, fontStyle: 'italic' },
});
