import { Droplet, Drumstick, Flame, Wheat, type LucideIcon } from 'lucide-react-native';
import { Text, View } from 'react-native';

import { ProgressRing } from '@/components/ui/progress-ring';
import { colors } from '@/constants/colors';

export type Totals = { calories: number; proteinG: number; carbsG: number; fatG: number };

type NutritionSummaryProps = { consumed: Totals; targets: Totals };

const ratio = (value: number, target: number) => (target > 0 ? value / target : 0);

function remaining(consumed: number, target: number) {
  const left = target - consumed;
  return { value: Math.abs(Math.round(left)), over: left < 0 };
}

function MacroCard({
  label,
  consumed,
  target,
  color,
  icon: Icon,
}: {
  label: string;
  consumed: number;
  target: number;
  color: string;
  icon: LucideIcon;
}) {
  const { value, over } = remaining(consumed, target);
  return (
    <View className="flex-1 rounded-[20px] border border-line bg-canvas p-3.5">
      <Text className="text-[20px] font-bold tracking-tight text-ink">
        {value}
        <Text className="text-[15px] font-semibold">g</Text>
      </Text>
      <Text className="text-[12px] text-muted">
        {label} {over ? 'over' : 'left'}
      </Text>
      <View className="mt-3 items-center">
        <ProgressRing progress={ratio(consumed, target)} size={64} strokeWidth={6} color={color}>
          <Icon size={20} color={color} strokeWidth={1.8} />
        </ProgressRing>
      </View>
    </View>
  );
}

/** Calories-left card with a ring + three macro cards (PLAN.md: calories ring and macro bars). */
export function NutritionSummary({ consumed, targets }: NutritionSummaryProps) {
  const calories = remaining(consumed.calories, targets.calories);
  return (
    <View className="gap-3 px-5">
      <View className="flex-row items-center justify-between rounded-card border border-line bg-canvas px-5 py-5">
        <View>
          <Text className="text-[44px] font-bold leading-[50px] tracking-tighter text-ink">
            {calories.value.toLocaleString()}
          </Text>
          <Text className="text-[16px] text-muted">Calories {calories.over ? 'over' : 'left'}</Text>
          <Text className="mt-1 text-[13px] text-faint">
            {Math.round(consumed.calories).toLocaleString()} / {targets.calories.toLocaleString()} eaten
          </Text>
        </View>
        <ProgressRing progress={ratio(consumed.calories, targets.calories)} size={104} strokeWidth={9}>
          <Flame size={28} color={colors.ink} fill={colors.ink} />
        </ProgressRing>
      </View>
      <View className="flex-row gap-3">
        <MacroCard
          label="Protein"
          consumed={consumed.proteinG}
          target={targets.proteinG}
          color={colors.protein}
          icon={Drumstick}
        />
        <MacroCard label="Carbs" consumed={consumed.carbsG} target={targets.carbsG} color={colors.carbs} icon={Wheat} />
        <MacroCard label="Fats" consumed={consumed.fatG} target={targets.fatG} color={colors.fat} icon={Droplet} />
      </View>
    </View>
  );
}
