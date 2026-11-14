import { Redirect } from 'expo-router';
import { Text, View } from 'react-native';

import { DRAW_MS, GoalPathChart, weightIn } from '@/components/onboarding/goal-path-chart';
import { ENTER_AFTER_MS, OnboardingScreen } from '@/components/onboarding/onboarding-screen';
import { SourcesLink } from '@/components/sources';
import { Rise, useCountUp } from '@/components/ui/motion';
import { formatLongDate } from '@/lib/time';
import { useOnboardingStore } from '@/lib/onboarding-store';
import { stepHref } from '@/lib/onboarding-steps';
import { goalDate } from '@/shared/nutrition';
import { DEFAULT_WEEKLY_GOAL_KG } from '@/shared/onboarding';
import { kgToLb } from '@/shared/units';

/** When the line starts drawing: after the title, the subtitle and the card have risen in. */
const DRAW_AFTER_MS = ENTER_AFTER_MS + 450;

/**
 * Between the pace and the diet (lose or gain only, PLAN.md §3): the person's own path to the goal, drawn from their
 * answers. A plan, not a promise: no results claims, the date assumes the pace holds and Sources says so.
 */
export default function ProjectionStep() {
  const answers = useOnboardingStore((s) => s.answers);
  const goal = answers.goal ?? 'lose';
  const unit = answers.unitSystem ?? 'metric';
  const startKg = answers.weightKg ?? 70;
  const goalKg = answers.targetWeightKg ?? startKg;
  const paceKg = answers.weeklyGoalKg || DEFAULT_WEEKLY_GOAL_KG;
  const date = goalDate({ goal, weightKg: startKg, targetWeightKg: goalKg, weeklyGoalKg: paceKg });
  const weeks = Math.ceil(Math.abs(goalKg - startKg) / paceKg);

  // Shown after the line lands: how long, how fast, how much.
  const after = { duration: 700, delay: DRAW_AFTER_MS + DRAW_MS - 200 };
  const shownWeeks = useCountUp(weeks, after);
  const change = Math.abs(goalKg - startKg);
  const shownChange = useCountUp(unit === 'metric' ? change : kgToLb(change), after);

  if (!date || goal === 'maintain') return <Redirect href={stepHref('diet')} />;

  const pace = unit === 'metric' ? `${paceKg.toFixed(1)} kg` : `${kgToLb(paceKg).toFixed(1)} lb`;
  const long = weeks > 104;
  const changeDecimals = unit === 'metric' && !Number.isInteger(Math.round(change * 10) / 10) ? 1 : 0;

  return (
    <OnboardingScreen
      step="projection"
      title={`Your path to ${weightIn(goalKg, unit)}`}
      subtitle={`At ${pace} a week, you'd get there around ${formatLongDate(date)}.`}
      scrollable>
      <View className="rounded-card border border-line p-5">
        <GoalPathChart startKg={startKg} goalKg={goalKg} goalDate={date} unit={unit} delay={DRAW_AFTER_MS} />
      </View>

      <Rise index={0} after={DRAW_AFTER_MS + DRAW_MS - 250} style={{ marginTop: 12, flexDirection: 'row', gap: 12 }}>
        <Stat
          value={long ? `${Math.round(shownWeeks / 4.345)}` : `${Math.round(shownWeeks)}`}
          finalValue={long ? `${Math.round(weeks / 4.345)}` : `${weeks}`}
          label={long ? 'months' : weeks === 1 ? 'week' : 'weeks'}
        />
        <Stat value={pace} finalValue={pace} label="a week" />
        <Stat
          value={`${goal === 'lose' ? '−' : '+'}${shownChange.toFixed(changeDecimals)}`}
          finalValue={`${goal === 'lose' ? '−' : '+'}${(unit === 'metric' ? change : kgToLb(change)).toFixed(changeDecimals)}`}
          label={`${unit === 'metric' ? 'kg' : 'lb'} in all`}
        />
      </Rise>

      <Rise index={1} after={DRAW_AFTER_MS + DRAW_MS - 250} style={{ marginTop: 16 }}>
        <Text className="text-[14px] leading-5 text-muted">
          A straight line assumes your pace holds. Real weight change usually slows over time, and weight goes up and
          down from day to day.
        </Text>
        <SourcesLink topic="calories" className="mt-1" />
      </Rise>
    </OnboardingScreen>
  );
}

function Stat({ value, finalValue, label }: { value: string; finalValue: string; label: string }) {
  return (
    <View
      className="flex-1 items-center rounded-2xl bg-surface px-2 py-3.5"
      accessible
      accessibilityLabel={`${finalValue} ${label}`}>
      <Text className="text-[20px] font-bold tracking-tight text-ink" style={{ fontVariant: ['tabular-nums'] }}>
        {value}
      </Text>
      <Text className="mt-0.5 text-[13px] text-muted">{label}</Text>
    </View>
  );
}
