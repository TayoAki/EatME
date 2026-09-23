import { Image } from 'expo-image';
import { Text, View } from 'react-native';

import { cn } from '@/lib/cn';

type LogoProps = {
  size?: number;
  withWordmark?: boolean;
  /** Stack the wordmark under the mark instead of next to it. */
  stacked?: boolean;
  className?: string;
};

export function Logo({ size = 40, withWordmark = false, stacked = false, className }: LogoProps) {
  return (
    <View
      accessibilityRole="image"
      accessibilityLabel="EatME"
      className={cn('items-center', stacked ? 'gap-1' : 'flex-row gap-2', className)}>
      <Image
        source={require('@/assets/images/logo-dark.png')}
        style={{ width: size, height: size }}
        contentFit="contain"
      />
      {withWordmark ? (
        <Text
          className="font-bold tracking-tight text-ink"
          style={{ fontSize: Math.round(size * (stacked ? 0.75 : 0.72)) }}>
          EatME
        </Text>
      ) : null}
    </View>
  );
}
