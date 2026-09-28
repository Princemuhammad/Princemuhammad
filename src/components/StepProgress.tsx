import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, spacing } from '../theme';

interface Props {
  current: number;
  total: number;
}

export default function StepProgress({ current, total }: Props) {
  return (
    <View style={styles.wrap}>
      <View style={styles.dotsRow}>
        {Array.from({ length: total }).map((_, i) => (
          <View
            key={i}
            style={[
              styles.dot,
              i + 1 === current && styles.dotActive,
              i + 1 < current && styles.dotDone,
            ]}
          />
        ))}
      </View>
      <Text style={styles.label}>
        STEP {current} OF {total}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { marginBottom: spacing.md },
  dotsRow: { flexDirection: 'row', marginBottom: spacing.sm },
  dot: {
    flex: 1,
    height: 5,
    borderRadius: 3,
    backgroundColor: colors.border,
    marginRight: 4,
  },
  dotActive: { backgroundColor: colors.gold },
  dotDone: { backgroundColor: colors.primary },
  label: {
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1,
    color: colors.gold,
  },
});
