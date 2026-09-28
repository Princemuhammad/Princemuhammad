import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamList } from '../navigation/types';
import KaabaGraphic from '../components/KaabaGraphic';
import { colors, spacing, typography } from '../theme';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.content}>
        <Text style={styles.kicker}>HERE I AM, O ALLAH, HERE I AM</Text>
        <TouchableOpacity
          style={styles.kaabaWrap}
          onPress={() => navigation.navigate('MainMenu')}
          activeOpacity={0.85}
        >
          <KaabaGraphic size={190} />
        </TouchableOpacity>
        <Text style={styles.title}>My ‘Umrah{'\n'}Companion</Text>
        <Text style={styles.tapHint}>Tap the Ka‘bah to begin your journey</Text>
        <Text style={styles.tags}>‘Umrah · Madinah · 40 Rabbana · Niyyah · Du‘a</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.primaryDark },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.lg,
  },
  kicker: {
    color: colors.gold,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 2,
    marginBottom: spacing.xl,
    textAlign: 'center',
  },
  kaabaWrap: {
    marginBottom: spacing.xl,
    padding: spacing.md,
    borderRadius: 999,
    backgroundColor: 'rgba(255,255,255,0.05)',
  },
  title: {
    ...typography.title,
    color: colors.textInverse,
    textAlign: 'center',
    fontSize: 32,
    marginBottom: spacing.md,
  },
  tapHint: {
    color: colors.goldLight,
    fontSize: 15,
    marginBottom: spacing.xl,
    textAlign: 'center',
  },
  tags: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 12,
    textAlign: 'center',
    letterSpacing: 0.5,
  },
});
