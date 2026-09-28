import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors, radius, spacing } from '../theme';

interface Props {
  options: string[];
  selected: number;
  onSelect: (index: number) => void;
}

export default function TabSwitch({ options, selected, onSelect }: Props) {
  return (
    <View style={styles.wrap}>
      {options.map((opt, i) => (
        <TouchableOpacity
          key={opt}
          style={[styles.tab, i === selected && styles.tabActive]}
          onPress={() => onSelect(i)}
          activeOpacity={0.8}
        >
          <Text style={[styles.tabText, i === selected && styles.tabTextActive]}>{opt}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    backgroundColor: colors.primaryLight,
    borderRadius: radius.full,
    padding: 4,
    marginBottom: spacing.lg,
  },
  tab: {
    flex: 1,
    paddingVertical: spacing.sm,
    borderRadius: radius.full,
    alignItems: 'center',
  },
  tabActive: { backgroundColor: colors.primary },
  tabText: { color: colors.primary, fontWeight: '600', fontSize: 13 },
  tabTextActive: { color: colors.textInverse },
});
