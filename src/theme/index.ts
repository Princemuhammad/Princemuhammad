export const colors = {
  background: '#F7F3E9',
  surface: '#FFFFFF',
  card: '#FFFDF7',
  primary: '#0B5D4C',
  primaryDark: '#073F33',
  primaryLight: '#E4F0EC',
  gold: '#C9A24B',
  goldLight: '#F3E7C9',
  text: '#1C2422',
  textMuted: '#5B6864',
  textInverse: '#FFFFFF',
  border: '#E2DCC8',
  danger: '#A13B2B',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const radius = {
  sm: 8,
  md: 14,
  lg: 20,
  full: 999,
};

export const typography = {
  title: { fontSize: 28, fontWeight: '700' as const, color: colors.text },
  heading: { fontSize: 22, fontWeight: '700' as const, color: colors.text },
  subheading: { fontSize: 17, fontWeight: '600' as const, color: colors.text },
  body: { fontSize: 15, fontWeight: '400' as const, color: colors.text, lineHeight: 22 },
  caption: { fontSize: 13, fontWeight: '500' as const, color: colors.textMuted },
  arabic: { fontSize: 19, fontWeight: '600' as const, color: colors.primaryDark, lineHeight: 30 },
};
