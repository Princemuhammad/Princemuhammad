import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import ScreenHeader from '../components/ScreenHeader';
import { RootStackParamList } from '../navigation/types';
import { JUMP_TO_SECTION } from '../data/menu';
import { colors, radius, spacing, typography } from '../theme';

type Props = NativeStackScreenProps<RootStackParamList, 'BookletAnnex'>;

export default function BookletAnnexScreen({ navigation }: Props) {
  return (
    <ScreenContainer>
      <ScreenHeader
        title="Booklet pages"
        subtitle="Annex: the pages of your printed booklet, in reading order. Some pages were written for Hajj; the ‘Umrah guide in this app applies them to ‘Umrah."
      />
      {JUMP_TO_SECTION.map((group) => (
        <View key={group.header} style={styles.group}>
          <Text style={styles.groupHeader}>{group.header}</Text>
          {group.items.map((item) => (
            <TouchableOpacity
              key={item.title}
              style={styles.row}
              onPress={() => navigation.navigate(item.route as any)}
              activeOpacity={0.6}
            >
              <Text style={typography.body}>{item.title}</Text>
              <Text style={styles.chevron}>{'›'}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  group: {
    backgroundColor: colors.card,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.md,
    overflow: 'hidden',
  },
  groupHeader: {
    ...typography.caption,
    color: colors.gold,
    fontWeight: '700',
    letterSpacing: 0.5,
    padding: spacing.md,
    paddingBottom: spacing.xs,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  chevron: { color: colors.gold, fontSize: 18 },
});
