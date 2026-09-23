import type { ReactNode } from 'react';
import { ActivityIndicator, Pressable, Text, View, type PressableProps } from 'react-native';

import { colors } from '@/constants/colors';
import { cn } from '@/lib/cn';
import { haptics } from '@/lib/haptics';

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';

type ButtonProps = Omit<PressableProps, 'children'> & {
  title: string;
  variant?: Variant;
  size?: 'lg' | 'md';
  loading?: boolean;
  icon?: ReactNode;
  className?: string;
};

const containerByVariant: Record<Variant, string> = {
  primary: 'bg-ink',
  secondary: 'bg-surface',
  outline: 'bg-canvas border border-line',
  ghost: 'bg-transparent',
  danger: 'bg-transparent',
};

const labelByVariant: Record<Variant, string> = {
  primary: 'text-white',
  secondary: 'text-ink',
  outline: 'text-ink',
  ghost: 'text-ink',
  danger: 'text-danger',
};

export function Button({
  title,
  variant = 'primary',
  size = 'lg',
  loading = false,
  disabled,
  icon,
  className,
  onPress,
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading;
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled: !!isDisabled, busy: loading }}
      disabled={isDisabled}
      onPress={(e) => {
        haptics.light();
        onPress?.(e);
      }}
      className={cn(
        'flex-row items-center justify-center rounded-full px-6 active:opacity-80',
        size === 'lg' ? 'h-14' : 'h-12',
        containerByVariant[variant],
        isDisabled && 'opacity-40',
        className,
      )}
      {...props}>
      {loading ? (
        <ActivityIndicator color={variant === 'primary' ? colors.canvas : colors.ink} />
      ) : (
        <View className="flex-row items-center gap-3">
          {icon}
          <Text
            className={cn(
              'font-semibold',
              size === 'lg' ? 'text-[17px]' : 'text-[15px]',
              labelByVariant[variant],
            )}>
            {title}
          </Text>
        </View>
      )}
    </Pressable>
  );
}
