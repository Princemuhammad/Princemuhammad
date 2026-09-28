import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import ScreenHeader from '../components/ScreenHeader';
import MenuCard from '../components/MenuCard';
import { RootStackParamList } from '../navigation/types';
import { UMRAH_MENU } from '../data/menu';
import { colors, radius, spacing, typography } from '../theme';

type Props = NativeStackScreenProps<RootStackParamList, 'UmrahHome'>;

export default function UmrahHomeScreen({ navigation }: Props) {
  return (
    <ScreenContainer>
      <ScreenHeader
        eyebrow="As-salamu ‘alaykum"
        title="‘Umrah journey"
        subtitle="Prepare with the guides, then follow the six steps of ‘Umrah in order."
      />

      <TouchableOpacity
        style={styles.stepsCard}
        onPress={() => navigation.navigate('UmrahSteps')}
        activeOpacity={0.85}
      >
        <Text style={styles.stepsBadge}>6 STEPS</Text>
        <Text style={styles.stepsTitle}>‘Umrah step by step</Text>
        <Text style={styles.stepsSubtitle}>
          Ihram · Tawaf · Prayer & Zamzam · Sa‘i · Halq, with every du‘a to read
        </Text>
        <Text style={styles.startLink}>Start the guide {'→'}</Text>
      </TouchableOpacity>

      <View style={styles.sectionLabel}>
        <Text style={typography.subheading}>Before you go</Text>
      </View>
      {UMRAH_MENU.map((item) => (
        <MenuCard
          key={item.route}
          title={item.title}
          subtitle={item.subtitle}
          onPress={() => navigation.navigate(item.route as any)}
        />
      ))}
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  stepsCard: {
    backgroundColor: colors.primary,
    borderRadius: radius.lg,
    padding: spacing.lg,
    marginBottom: spacing.lg,
  },
  stepsBadge: {
    color: colors.gold,
    fontWeight: '700',
    fontSize: 12,
    letterSpacing: 1,
    marginBottom: spacing.xs,
  },
  stepsTitle: { color: colors.textInverse, fontSize: 22, fontWeight: '700', marginBottom: spacing.xs },
  stepsSubtitle: { color: 'rgba(255,255,255,0.85)', fontSize: 14, marginBottom: spacing.md, lineHeight: 20 },
  startLink: { color: colors.gold, fontWeight: '700' },
  sectionLabel: { marginBottom: spacing.sm, marginTop: spacing.xs },
});
