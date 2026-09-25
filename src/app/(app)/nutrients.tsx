import { router, useLocalSearchParams } from 'expo-router';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react-native';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';

import { IconButton } from '@/components/ui/icon-button';
import { Screen } from '@/components/ui/screen';
import { colors } from '@/constants/colors';
import { useCalmMode } from '@/lib/calm';
import { useNutrients } from '@/lib/queries';
import { addDays, formatDay, fromIsoDate, todayIso, toIsoDate } from '@/lib/time';
import {
  addNutrients,
  NUTRIENT_INFO,
  SUPPLEMENT_UPPER_LIMITS,
  type NutrientDay,
  type NutrientKey,
  type NutrientTarget,
} from '@/shared/nutrients';

const INFO = NUTRIENT_INFO;
const GROUPS: { title: string; keys: NutrientKey[] }[] = [
  { title: 'Keep an eye on', keys: ['sodium', 'saturatedFat', 'caffeine'] },
  { title: 'Minerals', keys: ['potassium', 'calcium', 'iron', 'magnesium', 'zinc', 'phosphorus', 'selenium', 'copper'] },
  {
    title: 'Vitamins',
    keys: ['vitaminA', 'vitaminC', 'vitaminD', 'vitaminE', 'vitaminK', 'thiamin', 'riboflavin', 'niacin', 'vitaminB6', 'folate', 'vitaminB12', 'choline'],
  },
];

function amount(value: number, unit: string) {
  const digits = value >= 100 ? 0 : value >= 10 ? 0 : 1;
  return `${value.toLocaleString('en-US', { maximumFractionDigits: digits })} ${unit}`;
}

function Row({ target, value, fromSupplements }: { target: NutrientTarget; value: number; fromSupplements: number }) {
  const info = INFO[target.key];
  const reference = target.goal ?? target.limit ?? 0;
  const ratio = reference > 0 ? value / reference : 0;
  const over = target.limit !== undefined && value > target.limit;
  const barColor = target.limit !== undefined ? (over ? colors.carbs : colors.muted) : ratio >= 1 ? colors.success : colors.ink;
  return (
    <View className="py-2.5">
      <View className="flex-row items-baseline justify-between">
        <Text className="text-[15px] text-ink">{info.label}</Text>
        <Text className="text-[14px] text-ink">
          <Text className="font-semibold">{amount(value, info.unit)}</Text>
          <Text className="text-muted">
            {target.goal !== undefined ? ` / ${amount(target.goal, info.unit)}` : ` · limit ${amount(target.limit ?? 0, info.unit)}`}
          </Text>
        </Text>
      </View>
      <View className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-surface">
        <View style={{ width: `${Math.min(1, ratio) * 100}%`, backgroundColor: barColor }} className="h-full rounded-full" />
      </View>
      {fromSupplements > 0 ? (
        <Text className="mt-1 text-[12px] text-muted">incl. {amount(fromSupplements, info.unit)} from supplements</Text>
      ) : null}
    </View>
  );
}

function Content({ day }: { day: NutrientDay }) {
  const calm = useCalmMode();
  const targets = new Map(day.targets.map((t) => [t.key, t]));
  const covered = day.calories > 0 ? Math.round((day.coveredCalories / day.calories) * 100) : 0;
  // Calm mode keeps the share but not the calories behind it.
  const coverage = calm
    ? `${covered}% of what you logged`
    : `${day.coveredCalories.toLocaleString('en-US')} of ${day.calories.toLocaleString('en-US')} kcal (${covered}%)`;
  const totals = addNutrients([day.totals, day.supplements]);
  if (day.meals === 0 && day.supplementNames.length === 0) {
    return <Text className="mt-6 text-center text-[15px] text-muted">No meals logged on this day.</Text>;
  }
  return (
    <>
      <View className="rounded-2xl bg-surface p-4">
        <Text className="text-[14px] leading-5 text-ink">
          {day.meals > 0
            ? `From the foods EatME matched in the USDA database: ${coverage}. Foods the AI only estimated add no vitamins or minerals, so your real intake is likely higher.`
            : 'No meals logged on this day yet — these numbers are your supplements only.'}
          {day.supplementNames.length > 0 ? ` Supplements included: ${day.supplementNames.join(', ')}.` : ''}
        </Text>
      </View>
      {day.overLimit.length > 0 ? (
        <View className="rounded-2xl border border-line p-4">
          <Text className="text-[14px] leading-5 text-ink">
            Your supplements alone are above the adult upper limit for{' '}
            {day.overLimit
              .map((key) => `${INFO[key].label} (${amount(SUPPLEMENT_UPPER_LIMITS[key] ?? 0, INFO[key].unit)})`)
              .join(', ')}
            . Check the dose with your doctor or pharmacist.
          </Text>
        </View>
      ) : null}
      {GROUPS.map((group) => (
        <View key={group.title}>
          <Text className="mb-1 ml-1 text-[15px] font-medium text-muted">{group.title}</Text>
          <View className="rounded-[20px] border border-line px-4 py-1">
            {group.keys.flatMap((key) => {
              const target = targets.get(key);
              return target
                ? [<Row key={key} target={target} value={totals[key] ?? 0} fromSupplements={day.supplements[key] ?? 0} />]
                : [];
            })}
          </View>
        </View>
      ))}
      <Text className="px-1 text-[12px] leading-4 text-muted">
        Targets are the US and Canadian Dietary Reference Intakes for your age and sex (saturated fat: under 10% of
        your calories). Estimates, not medical advice.
      </Text>
    </>
  );
}

export default function NutrientsScreen() {
  const params = useLocalSearchParams<{ date?: string }>();
  const today = todayIso();
  const date = params.date && /^\d{4}-\d{2}-\d{2}$/.test(params.date) && params.date <= today ? params.date : today;
  const nutrients = useNutrients(date);
  const go = (days: number) => router.setParams({ date: toIsoDate(addDays(fromIsoDate(date), days)) });

  return (
    <Screen>
      <View className="h-14 flex-row items-center justify-between px-5">
        <IconButton accessibilityLabel="Go back" icon={<ArrowLeft size={20} color={colors.ink} />} onPress={() => router.back()} />
        <View className="flex-row items-center gap-2">
          <IconButton accessibilityLabel="Previous day" icon={<ChevronLeft size={20} color={colors.ink} />} onPress={() => go(-1)} />
          <Text className="min-w-[96px] text-center text-[15px] font-semibold text-ink">{formatDay(date)}</Text>
          <IconButton
            accessibilityLabel="Next day"
            icon={<ChevronRight size={20} color={date >= today ? colors.faint : colors.ink} />}
            disabled={date >= today}
            onPress={() => go(1)}
          />
        </View>
      </View>
      <ScrollView contentContainerClassName="gap-5 px-5 pb-10" showsVerticalScrollIndicator={false}>
        <Text accessibilityRole="header" className="text-[32px] font-bold tracking-tight text-ink">
          Vitamins & minerals
        </Text>
        {nutrients.isPending ? (
          <ActivityIndicator color={colors.ink} />
        ) : nutrients.isError ? (
          <Text className="text-[15px] text-muted">We couldn&apos;t load this day. Pull down to try again.</Text>
        ) : (
          <Content day={nutrients.data} />
        )}
      </ScrollView>
    </Screen>
  );
}
