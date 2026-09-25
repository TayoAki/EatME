import { Pressable, Text } from 'react-native';

import { cn } from '@/lib/cn';
import { haptics } from '@/lib/haptics';

type ChipProps = {
  label: string;
  selected: boolean;
  onPress: () => void;
  /** Checkbox (multi-select), radio (one of a group) or a plain action button. */
  role?: 'checkbox' | 'radio' | 'button';
  className?: string;
};

/** Small pill for picking one or several options. */
export function Chip({ label, selected, onPress, role = 'radio', className }: ChipProps) {
  return (
    <Pressable
      accessibilityRole={role}
      accessibilityState={role === 'checkbox' ? { checked: selected } : role === 'radio' ? { selected } : undefined}
      accessibilityLabel={label}
      onPress={() => {
        haptics.selection();
        onPress();
      }}
      className={cn(
        'h-10 items-center justify-center rounded-full border px-4 active:opacity-70',
        selected ? 'border-ink bg-ink' : 'border-line bg-canvas',
        className,
      )}>
      <Text className={cn('text-[15px] font-medium', selected ? 'text-white' : 'text-ink')}>{label}</Text>
    </Pressable>
  );
}
