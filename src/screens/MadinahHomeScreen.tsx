import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import ScreenHeader from '../components/ScreenHeader';
import MenuCard from '../components/MenuCard';
import { RootStackParamList } from '../navigation/types';
import { MADINAH_MENU } from '../data/menu';
import { MADINAH_INTRO } from '../data/madinah';
import { colors, radius, spacing, typography } from '../theme';

type Props = NativeStackScreenProps<RootStackParamList, 'MadinahHome'>;

export default function MadinahHomeScreen({ navigation }: Props) {
  return (
    <ScreenContainer>
      <ScreenHeader eyebrow={MADINAH_INTRO.title} title="Madinah ziyarah" subtitle={MADINAH_INTRO.body} />

      {MADINAH_MENU.map((item) => (
        <MenuCard
          key={item.route}
          title={item.title}
          subtitle={item.subtitle}
          onPress={() => navigation.navigate(item.route as any)}
        />
      ))}

      <View style={styles.noteCard}>
        <Text style={styles.noteText}>{MADINAH_INTRO.note}</Text>
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  noteCard: {
    backgroundColor: colors.goldLight,
    borderRadius: radius.md,
    padding: spacing.md,
    marginTop: spacing.md,
  },
  noteText: { ...typography.body, color: colors.primaryDark },
});
