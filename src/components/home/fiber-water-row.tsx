import { GlassWater, Plus, Sprout } from 'lucide-react-native';
import { Pressable, Text, View } from 'react-native';

import { ProgressRing } from '@/components/ui/progress-ring';
import { colors } from '@/constants/colors';
import { haptics } from '@/lib/haptics';
import type { UnitSystem } from '@/shared/onboarding';
import { formatVolume, waterAmounts } from '@/shared/units';

type FiberWaterRowProps = {
  fiberG: number;
  fiberGoalG: number;
  waterMl: number;
  waterGoalMl: number;
  unit: UnitSystem;
  onAddWater: (ml: number) => void;
  onOpenWater: () => void;
};

const ratio = (value: number, goal: number) => (goal > 0 ? Math.min(1, value / goal) : 0);

/** Fiber ring + water bar with a one-tap "+ glass" under the macro cards. */
export function FiberWaterRow({ fiberG, fiberGoalG, waterMl, waterGoalMl, unit, onAddWater, onOpenWater }: FiberWaterRowProps) {
  const glass = waterAmounts(unit)[0];
  const waterDone = waterMl >= waterGoalMl;
  return (
    <View className="mt-3 flex-row gap-3 px-5">
      <View className="flex-1 flex-row items-center justify-between rounded-[20px] border border-line bg-canvas p-3.5">
        <View className="flex-1">
          <Text className="text-[20px] font-bold tracking-tight text-ink">
            {Math.round(fiberG)}
            <Text className="text-[14px] font-semibold text-muted"> / {fiberGoalG} g</Text>
          </Text>
          <Text className="text-[12px] text-muted">Fiber</Text>
        </View>
        <ProgressRing progress={ratio(fiberG, fiberGoalG)} size={52} strokeWidth={5} color={colors.fiber}>
          <Sprout size={18} color={colors.fiber} strokeWidth={1.8} />
        </ProgressRing>
      </View>

      {/* The "+" sits on top of the card instead of inside it: nested buttons are unreachable for
          screen readers (and invalid on web). */}
      <View className="flex-1">
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={`Water, ${formatVolume(waterMl, unit)} of ${formatVolume(waterGoalMl, unit)}. Opens the water log.`}
          onPress={onOpenWater}
          className="flex-1 rounded-[20px] border border-line bg-canvas p-3.5 active:opacity-80">
          {/* The first line is as tall as the "+" so the label below can use the full width. */}
          <View className="h-9 justify-center pr-11">
            <Text numberOfLines={1} className="text-[20px] font-bold tracking-tight text-ink">
              {formatVolume(waterMl, unit)}
            </Text>
          </View>
          <Text numberOfLines={1} className="text-[12px] text-muted">
            Water · {waterDone ? 'goal reached' : `goal ${formatVolume(waterGoalMl, unit)}`}
          </Text>
          <View className="mt-2.5 flex-row items-center gap-2">
            <GlassWater size={16} color={colors.water} strokeWidth={1.8} />
            <View className="h-2 flex-1 overflow-hidden rounded-full bg-surface">
              <View style={{ width: `${ratio(waterMl, waterGoalMl) * 100}%`, backgroundColor: colors.water }} className="h-full rounded-full" />
            </View>
          </View>
        </Pressable>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={`Add ${glass.label} of water`}
          hitSlop={8}
          onPress={() => {
            haptics.light();
            onAddWater(glass.ml);
          }}
          className="absolute right-3.5 top-3.5 h-9 w-9 items-center justify-center rounded-full bg-ink active:opacity-80">
          <Plus size={18} color={colors.canvas} strokeWidth={2.4} />
        </Pressable>
      </View>
    </View>
  );
}
