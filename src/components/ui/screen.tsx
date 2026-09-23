import type { ReactNode } from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { cn } from '@/lib/cn';

type Edge = 'top' | 'bottom';

type ScreenProps = {
  children: ReactNode;
  edges?: Edge[];
  className?: string;
};

/** White full-screen container that respects the safe area. */
export function Screen({ children, edges = ['top', 'bottom'], className }: ScreenProps) {
  const insets = useSafeAreaInsets();
  return (
    <View
      className={cn('flex-1 bg-canvas', className)}
      style={{
        paddingTop: edges.includes('top') ? insets.top : 0,
        paddingBottom: edges.includes('bottom') ? Math.max(insets.bottom, 16) : 0,
      }}>
      {children}
    </View>
  );
}
