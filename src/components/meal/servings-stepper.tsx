import { Minus, Plus } from 'lucide-react-native';
import { Text, View } from 'react-native';

import { IconButton } from '@/components/ui/icon-button';
import { colors } from '@/constants/colors';
import { notify } from '@/lib/confirm';
import { useUpdateMeal } from '@/lib/queries';
import type { Meal } from '@/shared/meals';

const STEP = 0.5;
const MIN = 0.5;
const MAX = 20;

/** 0.5 → "½", 1.5 → "1½", 2 → "2". */
export function formatServings(value: number) {
  const whole = Math.floor(value);
  const half = value - whole >= 0.5;
  if (!half) return String(whole);
  return whole === 0 ? '½' : `${whole}½`;
}

/** Nutrition labels: how many servings were eaten (the server rescales every number). */
export function ServingsStepper({ meal }: { meal: Meal }) {
  const update = useUpdateMeal(meal.id);
  const set = (portion: number) =>
    update.mutate({ portion }, { onError: (error) => notify("We couldn't change the servings", error.message) });
  const value = meal.portion;

  return (
    <View className="flex-row items-center gap-3 rounded-2xl border border-line px-4 py-3">
      <View className="flex-1">
        <Text className="text-[15px] font-semibold text-ink">Servings</Text>
        {meal.servingSize ? (
          <Text numberOfLines={2} className="text-[13px] text-muted">
            1 serving = {meal.servingSize}
          </Text>
        ) : null}
      </View>
      <IconButton
        accessibilityLabel="Fewer servings"
        icon={<Minus size={18} color={colors.ink} />}
        disabled={value <= MIN || update.isPending}
        className={value <= MIN ? 'opacity-40' : undefined}
        onPress={() => set(Math.max(MIN, value - STEP))}
      />
      <Text accessibilityLabel={`${value} servings`} className="min-w-[40px] text-center text-[20px] font-bold text-ink">
        {formatServings(value)}
      </Text>
      <IconButton
        accessibilityLabel="More servings"
        icon={<Plus size={18} color={colors.ink} />}
        disabled={value >= MAX || update.isPending}
        className={value >= MAX ? 'opacity-40' : undefined}
        onPress={() => set(Math.min(MAX, value + STEP))}
      />
    </View>
  );
}
