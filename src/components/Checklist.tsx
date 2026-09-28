import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors, radius, spacing, typography } from '../theme';

interface Props {
  items: string[];
}

export default function Checklist({ items }: Props) {
  const [checked, setChecked] = useState<Record<number, boolean>>({});

  const toggle = (i: number) => setChecked((prev) => ({ ...prev, [i]: !prev[i] }));

  return (
    <View>
      {items.map((item, i) => {
        const isChecked = !!checked[i];
        return (
          <TouchableOpacity
            key={i}
            style={styles.row}
            onPress={() => toggle(i)}
            activeOpacity={0.6}
          >
            <View style={[styles.box, isChecked && styles.boxChecked]}>
              {isChecked ? <Text style={styles.check}>{'✓'}</Text> : null}
            </View>
            <Text style={[styles.text, isChecked && styles.textChecked]}>{item}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: spacing.md },
  box: {
    width: 24,
    height: 24,
    borderRadius: radius.sm,
    borderWidth: 2,
    borderColor: colors.primary,
    marginRight: spacing.sm,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 1,
  },
  boxChecked: { backgroundColor: colors.primary },
  check: { color: colors.textInverse, fontWeight: '700', fontSize: 14 },
  text: { ...typography.body, flex: 1 },
  textChecked: { color: colors.textMuted, textDecorationLine: 'line-through' },
});
