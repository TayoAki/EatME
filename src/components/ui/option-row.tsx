import type { LucideIcon } from 'lucide-react-native';
import { Pressable, Text, View } from 'react-native';

import { colors } from '@/constants/colors';
import { cn } from '@/lib/cn';
import { haptics } from '@/lib/haptics';

type OptionRowProps = {
  title: string;
  description?: string;
  icon?: LucideIcon;
  selected: boolean;
  onPress: () => void;
  /** Center the label (simple single-line options such as gender or goal). */
  centered?: boolean;
  /** Shown but not selectable (e.g. "Lose weight" at the lowest healthy weight). */
  disabled?: boolean;
};

export function OptionRow({ title, description, icon: Icon, selected, onPress, centered, disabled = false }: OptionRowProps) {
  return (
    <Pressable
      accessibilityRole="radio"
      accessibilityState={{ selected, disabled }}
      disabled={disabled}
      onPress={() => {
        haptics.selection();
        onPress();
      }}
      className={cn(
        'min-h-[64px] flex-row items-center gap-4 rounded-[20px] px-5 py-4 active:opacity-80',
        selected ? 'bg-ink' : 'bg-surface',
        centered && 'justify-center',
        disabled && 'opacity-40',
      )}>
      {Icon ? <Icon size={24} strokeWidth={1.6} color={selected ? colors.canvas : colors.ink} /> : null}
      <View className={cn(centered ? 'items-center' : 'flex-1')}>
        <Text className={cn('text-[17px] font-semibold', selected ? 'text-white' : 'text-ink')}>
          {title}
        </Text>
        {description ? (
          <Text className={cn('mt-0.5 text-[14px]', selected ? 'text-white/70' : 'text-muted')}>
            {description}
          </Text>
        ) : null}
      </View>
    </Pressable>
  );
}
