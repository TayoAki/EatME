import type { ReactNode } from 'react';
import { Pressable, type PressableProps } from 'react-native';

import { cn } from '@/lib/cn';
import { haptics } from '@/lib/haptics';

type IconButtonProps = Omit<PressableProps, 'children'> & {
  icon: ReactNode;
  accessibilityLabel: string;
  variant?: 'surface' | 'outline' | 'dark';
  size?: number;
  className?: string;
};

export function IconButton({
  icon,
  variant = 'surface',
  size = 40,
  className,
  onPress,
  ...props
}: IconButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      hitSlop={8}
      onPress={(e) => {
        haptics.selection();
        onPress?.(e);
      }}
      style={{ width: size, height: size }}
      className={cn(
        'items-center justify-center rounded-full active:opacity-70',
        variant === 'surface' && 'bg-surface',
        variant === 'outline' && 'border border-line bg-canvas',
        variant === 'dark' && 'bg-black/40',
        className,
      )}
      {...props}>
      {icon}
    </Pressable>
  );
}
