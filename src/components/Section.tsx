import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, spacing, typography } from '../theme';

interface Props {
  title?: string;
  children: React.ReactNode;
}

export default function Section({ title, children }: Props) {
  return (
    <View style={styles.wrap}>
      {title ? <Text style={styles.title}>{title}</Text> : null}
      {children}
    </View>
  );
}

interface ListProps {
  items: string[];
  ordered?: boolean;
}

export function BulletList({ items, ordered }: ListProps) {
  return (
    <View>
      {items.map((item, i) => (
        <View key={i} style={styles.bulletRow}>
          <Text style={styles.bulletMark}>{ordered ? `${i + 1}.` : '•'}</Text>
          <Text style={styles.bulletText}>{item}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { marginBottom: spacing.lg },
  title: {
    ...typography.subheading,
    marginBottom: spacing.sm,
    color: colors.primaryDark,
  },
  bulletRow: { flexDirection: 'row', marginBottom: spacing.sm, paddingRight: spacing.xs },
  bulletMark: { ...typography.body, color: colors.gold, width: 22, fontWeight: '700' },
  bulletText: { ...typography.body, flex: 1 },
});
