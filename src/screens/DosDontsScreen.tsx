import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import ScreenHeader from '../components/ScreenHeader';
import { DOS_DONTS } from '../data/dosDonts';
import { colors, radius, spacing, typography } from '../theme';

export default function DosDontsScreen() {
  return (
    <ScreenContainer>
      <ScreenHeader title="Do’s & Don’ts" subtitle="Etiquette at the Haram" />
      {DOS_DONTS.map((item, i) => (
        <View key={i} style={styles.card}>
          <View style={styles.doTag}>
            <Text style={styles.doTagText}>DO</Text>
          </View>
          <Text style={typography.subheading}>{item.title}</Text>
          <Text style={styles.body}>{item.body}</Text>
        </View>
      ))}
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    marginBottom: spacing.sm,
  },
  doTag: {
    alignSelf: 'flex-start',
    backgroundColor: colors.primaryLight,
    borderRadius: radius.sm,
    paddingHorizontal: spacing.sm,
    paddingVertical: 2,
    marginBottom: spacing.xs,
  },
  doTagText: { color: colors.primary, fontWeight: '700', fontSize: 11, letterSpacing: 0.5 },
  body: { ...typography.body, marginTop: spacing.xs, color: colors.textMuted },
});
