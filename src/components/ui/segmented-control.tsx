import { Pressable, Text, View } from 'react-native';

import { cn } from '@/lib/cn';
import { haptics } from '@/lib/haptics';

type Option<T extends string> = { label: string; value: T };

type SegmentedControlProps<T extends string> = {
  options: readonly Option<T>[];
  value: T;
  onChange: (value: T) => void;
  className?: string;
};

export function SegmentedControl<T extends string>({
  options,
  value,
  onChange,
  className,
}: SegmentedControlProps<T>) {
  return (
    <View
      accessibilityRole="tablist"
      className={cn('flex-row rounded-2xl border border-line bg-canvas p-1', className)}>
      {options.map((option) => {
        const selected = option.value === value;
        return (
          <Pressable
            key={option.value}
            accessibilityRole="tab"
            accessibilityState={{ selected }}
            onPress={() => {
              if (selected) return;
              haptics.selection();
              onChange(option.value);
            }}
            className={cn(
              'h-11 flex-1 items-center justify-center rounded-xl',
              selected && 'bg-ink',
            )}>
            <Text className={cn('text-[15px] font-medium', selected ? 'text-white' : 'text-ink')}>
              {option.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}
