import { Minus, Plus } from 'lucide-react-native';
import { Text, View } from 'react-native';

import { IconButton } from '@/components/ui/icon-button';
import { colors } from '@/constants/colors';
import { cn } from '@/lib/cn';

type NumberStepperProps = {
  label: string;
  /** Smaller gray text under the label. */
  hint?: string;
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  step?: number;
  /** Shown after the number, e.g. "days". */
  unit?: string;
  className?: string;
};

/** A labelled whole number with − and + buttons (counts the person enters). */
export function NumberStepper({ label, hint, value, onChange, min, max, step = 1, unit, className }: NumberStepperProps) {
  const set = (next: number) => onChange(Math.min(max, Math.max(min, next)));
  return (
    <View className={cn('min-h-[64px] flex-row items-center gap-3 rounded-2xl border border-line px-4 py-2.5', className)}>
      <View className="flex-1">
        <Text className="text-[15px] text-ink">{label}</Text>
        {hint ? <Text className="text-[13px] leading-[18px] text-muted">{hint}</Text> : null}
      </View>
      <IconButton
        accessibilityLabel={`Less: ${label}`}
        icon={<Minus size={18} color={colors.ink} />}
        disabled={value <= min}
        className={value <= min ? 'opacity-40' : undefined}
        onPress={() => set(value - step)}
      />
      <Text accessibilityLabel={`${label}: ${value}${unit ? ` ${unit}` : ''}`} className="min-w-[44px] text-center text-[20px] font-bold text-ink">
        {value}
        {unit ? <Text className="text-[13px] font-normal text-muted"> {unit}</Text> : null}
      </Text>
      <IconButton
        accessibilityLabel={`More: ${label}`}
        icon={<Plus size={18} color={colors.ink} />}
        disabled={value >= max}
        className={value >= max ? 'opacity-40' : undefined}
        onPress={() => set(value + step)}
      />
    </View>
  );
}
