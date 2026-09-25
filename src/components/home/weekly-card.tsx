import { ChevronRight } from 'lucide-react-native';
import { Pressable, Text, View } from 'react-native';

import { BottomSheet } from '@/components/ui/bottom-sheet';
import { colors } from '@/constants/colors';
import { fromIsoDate } from '@/lib/time';
import { calmFocusMessage } from '@/shared/calm';
import type { WeeklyInsights } from '@/shared/insights';
import type { UnitSystem } from '@/shared/onboarding';
import { formatVolume } from '@/shared/units';

const CHART_HEIGHT = 56;
/** Bars can reach 130% of the goal; the dashed line marks 100%. */
const CHART_MAX = 1.3;

const weekday = (date: string) => fromIsoDate(date).toLocaleDateString('en-US', { weekday: 'narrow' });
const shortDate = (date: string) => fromIsoDate(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
const number = (value: number) => value.toLocaleString('en-US');

/** Calories per day against the goal: same neutral colour whether a day was over or under. */
function CalorieBars({ insights, height = CHART_HEIGHT }: { insights: WeeklyInsights; height?: number }) {
  const goal = insights.goals.calories;
  const goalTop = height - height / CHART_MAX;
  return (
    <View>
      <View style={{ height }} className="flex-row items-end gap-2">
        {goal ? (
          <View
            pointerEvents="none"
            style={{ top: goalTop }}
            className="absolute left-0 right-0 border-t border-dashed border-faint"
          />
        ) : null}
        {insights.days.map((day) => {
          const ratio = goal ? Math.min(CHART_MAX, day.calories / goal) / CHART_MAX : 0;
          return (
            <View key={day.date} className="flex-1 items-center justify-end" style={{ height }}>
              {day.logged ? (
                <View style={{ height: Math.max(4, ratio * height) }} className="w-full rounded-md bg-ink" />
              ) : (
                <View className="h-1 w-full rounded-full bg-line" />
              )}
            </View>
          );
        })}
      </View>
      <View className="mt-1.5 flex-row gap-2">
        {insights.days.map((day) => (
          <Text key={day.date} className="flex-1 text-center text-[12px] text-muted">
            {weekday(day.date)}
          </Text>
        ))}
      </View>
    </View>
  );
}

function Stat({ color, label }: { color: string; label: string }) {
  return (
    <View className="flex-row items-center gap-1.5">
      <View style={{ backgroundColor: color }} className="h-2 w-2 rounded-full" />
      <Text className="text-[13px] text-ink">{label}</Text>
    </View>
  );
}

/**
 * "Last 7 days" on Home: calories per day, the week's averages and one neutral suggestion.
 * Calm mode keeps the bars and the tip but leaves out the calorie and protein numbers.
 */
export function WeeklyCard({ insights, onPress, calm = false }: { insights: WeeklyInsights; onPress: () => void; calm?: boolean }) {
  const { averages } = insights;
  if (!averages) return null;
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={
        calm
          ? `Last 7 days: ${insights.daysLogged} of 7 days logged. Opens the details.`
          : `Last 7 days: ${insights.daysLogged} of 7 days logged, ${averages.calories} calories on average. Opens the details.`
      }
      onPress={onPress}
      className="rounded-card border border-line bg-canvas p-4 active:opacity-80">
      <View className="mb-3 flex-row items-center justify-between">
        <Text className="text-[17px] font-bold tracking-tight text-ink">Last 7 days</Text>
        <View className="flex-row items-center gap-1">
          <Text className="text-[13px] text-muted">{insights.daysLogged} of 7 days logged</Text>
          <ChevronRight size={16} color={colors.faint} />
        </View>
      </View>
      <CalorieBars insights={insights} />
      <View className="mt-3 flex-row flex-wrap gap-x-4 gap-y-1.5">
        {calm ? null : <Stat color={colors.ink} label={`${number(averages.calories)} kcal avg`} />}
        {calm ? null : <Stat color={colors.protein} label={`${averages.proteinG} g protein`} />}
        <Stat color={colors.fiber} label={`${averages.fiberG} g fiber`} />
      </View>
      {insights.focus ? (
        <Text className="mt-3 text-[14px] leading-5 text-ink">
          {calm ? calmFocusMessage(insights.focus) : insights.focus.message}
        </Text>
      ) : null}
    </Pressable>
  );
}

function Row({ label, color, average, goal, format, hideNumbers = false }: {
  label: string;
  color: string;
  average: number | null;
  goal: number | null;
  format: (value: number) => string;
  /** Calm mode: the bar without the numbers. */
  hideNumbers?: boolean;
}) {
  const ratio = average !== null && goal ? Math.min(1, average / goal) : 0;
  return (
    <View className="py-2.5">
      <View className="flex-row items-baseline justify-between">
        <View className="flex-row items-center gap-2">
          <View style={{ backgroundColor: color }} className="h-2.5 w-2.5 rounded-full" />
          <Text className="text-[16px] text-ink">{label}</Text>
        </View>
        {hideNumbers ? null : (
          <Text className="text-[15px] text-ink">
            <Text className="font-semibold">{average === null ? '—' : format(average)}</Text>
            <Text className="text-muted">{goal ? ` / ${format(goal)}` : ''}</Text>
          </Text>
        )}
      </View>
      <View className="mt-2 h-1.5 overflow-hidden rounded-full bg-surface">
        <View style={{ width: `${ratio * 100}%`, backgroundColor: color }} className="h-full rounded-full" />
      </View>
    </View>
  );
}

/** Details: every average against its goal. */
export function WeeklySheet({
  visible,
  onClose,
  insights,
  unit,
  calm = false,
}: {
  visible: boolean;
  onClose: () => void;
  insights: WeeklyInsights;
  unit: UnitSystem;
  calm?: boolean;
}) {
  const { averages: a, goals } = insights;
  const grams = (value: number) => `${number(value)} g`;
  return (
    <BottomSheet visible={visible} onClose={onClose}>
      <Text className="text-[22px] font-bold tracking-tight text-ink">Last 7 days</Text>
      <Text className="mt-0.5 text-[14px] text-muted">
        {shortDate(insights.from)} – {shortDate(insights.to)} · {insights.daysLogged} of 7 days logged
      </Text>
      <View className="mt-4">
        <CalorieBars insights={insights} height={80} />
      </View>
      <View className="mt-3">
        <Row label="Calories" color={colors.ink} average={a?.calories ?? null} goal={goals.calories} format={(v) => `${number(v)} kcal`} hideNumbers={calm} />
        <Row label="Protein" color={colors.protein} average={a?.proteinG ?? null} goal={goals.proteinG} format={grams} hideNumbers={calm} />
        <Row label="Carbs" color={colors.carbs} average={a?.carbsG ?? null} goal={goals.carbsG} format={grams} hideNumbers={calm} />
        <Row label="Fats" color={colors.fat} average={a?.fatG ?? null} goal={goals.fatG} format={grams} hideNumbers={calm} />
        <Row label="Fiber" color={colors.fiber} average={a?.fiberG ?? null} goal={goals.fiberG} format={grams} />
        <Row
          label="Water"
          color={colors.water}
          average={a?.waterMl ?? null}
          goal={goals.waterMl}
          format={(v) => formatVolume(v, unit)}
        />
      </View>
      {insights.focus ? (
        <View className="mt-3 rounded-2xl bg-surface p-3.5">
          <Text className="text-[14px] leading-5 text-ink">{calm ? calmFocusMessage(insights.focus) : insights.focus.message}</Text>
        </View>
      ) : null}
      <Text className="mt-3 text-[12px] leading-4 text-muted">
        Averages count only the days you logged. Water counts the days you logged drinks.
      </Text>
    </BottomSheet>
  );
}
