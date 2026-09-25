import { Droplet, Drumstick, Flame, Wheat, type LucideIcon } from 'lucide-react-native';
import { Text, View } from 'react-native';

import { ProgressRing } from '@/components/ui/progress-ring';
import { colors } from '@/constants/colors';
import { calmProgressWord } from '@/shared/calm';

export type Totals = { calories: number; proteinG: number; carbsG: number; fatG: number };

/** `calm`: calm mode (Preferences) shows words instead of numbers and keeps rings neutral over a goal. */
type NutritionSummaryProps = { consumed: Totals; targets: Totals; calm?: boolean };

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
  calm,
}: {
  label: string;
  consumed: number;
  target: number;
  color: string;
  icon: LucideIcon;
  calm?: boolean;
}) {
  const { value, over } = remaining(consumed, target);
  // Calm mode: a ring past its goal is drawn full in a neutral grey.
  const ringColor = calm && consumed >= target && target > 0 ? colors.muted : color;
  return (
    <View className="flex-1 rounded-[20px] border border-line bg-canvas p-3.5">
      {calm ? (
        <Text numberOfLines={2} className="min-h-[40px] text-[15px] font-bold leading-5 tracking-tight text-ink">
          {calmProgressWord(consumed, target)}
        </Text>
      ) : (
        <Text className="text-[20px] font-bold tracking-tight text-ink">
          {value}
          <Text className="text-[15px] font-semibold">g</Text>
        </Text>
      )}
      <Text className="text-[12px] text-muted">{calm ? label : `${label} ${over ? 'over' : 'left'}`}</Text>
      <View className="mt-3 items-center">
        <ProgressRing progress={ratio(consumed, target)} size={64} strokeWidth={6} color={ringColor}>
          <Icon size={20} color={ringColor} strokeWidth={1.8} />
        </ProgressRing>
      </View>
    </View>
  );
}

/** Calories-left card with a ring + three macro cards (PLAN.md: calories ring and macro bars). */
export function NutritionSummary({ consumed, targets, calm = false }: NutritionSummaryProps) {
  const calories = remaining(consumed.calories, targets.calories);
  const calorieRing = calm && consumed.calories >= targets.calories && targets.calories > 0 ? colors.muted : colors.ink;
  return (
    <View className="gap-3 px-5">
      <View className="flex-row items-center justify-between rounded-card border border-line bg-canvas px-5 py-5">
        {calm ? (
          <View className="flex-1 pr-3">
            <Text className="text-[30px] font-bold leading-[36px] tracking-tight text-ink">
              {calmProgressWord(consumed.calories, targets.calories)}
            </Text>
            <Text className="mt-1 text-[16px] text-muted">Calories today</Text>
          </View>
        ) : (
          <View>
            <Text className="text-[44px] font-bold leading-[50px] tracking-tighter text-ink">
              {calories.value.toLocaleString()}
            </Text>
            <Text className="text-[16px] text-muted">Calories {calories.over ? 'over' : 'left'}</Text>
            <Text className="mt-1 text-[13px] text-faint">
              {Math.round(consumed.calories).toLocaleString()} / {targets.calories.toLocaleString()} eaten
            </Text>
          </View>
        )}
        <ProgressRing progress={ratio(consumed.calories, targets.calories)} size={104} strokeWidth={9} color={calorieRing}>
          <Flame size={28} color={calorieRing} fill={calorieRing} />
        </ProgressRing>
      </View>
      <View className="flex-row gap-3">
        <MacroCard
          label="Protein"
          consumed={consumed.proteinG}
          target={targets.proteinG}
          color={colors.protein}
          icon={Drumstick}
          calm={calm}
        />
        <MacroCard label="Carbs" consumed={consumed.carbsG} target={targets.carbsG} color={colors.carbs} icon={Wheat} calm={calm} />
        <MacroCard label="Fats" consumed={consumed.fatG} target={targets.fatG} color={colors.fat} icon={Droplet} calm={calm} />
      </View>
    </View>
  );
}
