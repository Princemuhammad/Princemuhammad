import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import ScreenHeader from '../components/ScreenHeader';
import MenuCard from '../components/MenuCard';
import { RootStackParamList } from '../navigation/types';
import { MAIN_MENU } from '../data/menu';
import { colors, spacing } from '../theme';

type Props = NativeStackScreenProps<RootStackParamList, 'MainMenu'>;

export default function MainMenuScreen({ navigation }: Props) {
  return (
    <ScreenContainer>
      <ScreenHeader eyebrow="Main menu" title="What would you like to open?" />
      {MAIN_MENU.map((item) => (
        <MenuCard
          key={item.route}
          title={item.title}
          subtitle={item.subtitle}
          onPress={() => navigation.navigate(item.route as any)}
        />
      ))}
      <TouchableOpacity style={styles.jumpLink} onPress={() => navigation.navigate('BookletAnnex')}>
        <Text style={styles.jumpLinkText}>Jump to any section {'→'}</Text>
      </TouchableOpacity>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  jumpLink: { alignItems: 'center', paddingVertical: spacing.md, marginTop: spacing.sm },
  jumpLinkText: { color: colors.primary, fontWeight: '700' },
});
