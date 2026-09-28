import React from 'react';
import Svg, { Path, Rect, Line } from 'react-native-svg';
import { colors } from '../theme';

interface Props {
  size?: number;
}

export default function KaabaGraphic({ size = 180 }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 200 200">
      <Rect x="20" y="70" width="160" height="110" rx="4" fill="#151515" />
      <Path d="M20 70 L60 40 L220 40 L180 70 Z" fill="#232323" />
      <Path d="M180 70 L220 40 L220 150 L180 180 Z" fill="#0d0d0d" />
      <Rect x="35" y="98" width="130" height="26" fill={colors.gold} opacity={0.95} />
      <Rect x="35" y="98" width="130" height="4" fill="#E9D28A" opacity={0.9} />
      <Rect x="90" y="128" width="26" height="52" fill="#0d0d0d" stroke={colors.gold} strokeWidth={1.5} />
      <Line x1="20" y1="150" x2="180" y2="150" stroke="#000" strokeWidth={1} opacity={0.3} />
    </Svg>
  );
}
