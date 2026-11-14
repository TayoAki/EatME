import * as Sentry from '@sentry/react-native';
import { useMutation } from '@tanstack/react-query';
import { Redirect, router } from 'expo-router';
import { Check } from 'lucide-react-native';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Text, View } from 'react-native';
import Animated, {
  Easing,
  FadeInDown,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  ZoomIn,
} from 'react-native-reanimated';

import { Button } from '@/components/ui/button';
import { Rise } from '@/components/ui/motion';
import { Screen } from '@/components/ui/screen';
import { colors } from '@/constants/colors';
import { apiFetch } from '@/lib/api';
import { cn } from '@/lib/cn';
import { haptics } from '@/lib/haptics';
import { completeAnswers, useOnboardingStore } from '@/lib/onboarding-store';
import { FIRST_STEP_HREF } from '@/lib/onboarding-steps';
import { formulaPlan } from '@/shared/nutrition';
import { ACTIVITY_LABELS, DIET_LABELS, type NutritionPlan, type OnboardingAnswers } from '@/shared/onboarding';
import { formatWeight, kgToLb } from '@/shared/units';

const STAGES = [
  { at: 0, text: 'Estimating your metabolic rate…' },
  { at: 35, text: 'Calculating your daily calories…' },
  { at: 60, text: 'Balancing your macros…' },
  { at: 85, text: 'Finalizing your plan…' },
];

type ChecklistItem = { label: string; detail: string; at: number };

/** What the plan is being built for, in the person's own answers. */
function checklistFor(answers: OnboardingAnswers, obstacles: number): ChecklistItem[] {
  const unit = answers.unitSystem;
  const pace =
    unit === 'metric' ? `${answers.weeklyGoalKg.toFixed(1)} kg` : `${kgToLb(answers.weeklyGoalKg).toFixed(1)} lb`;
  const items = [
    {
      label: 'Calories',
      detail:
        answers.goal === 'maintain'
          ? `to stay at ${formatWeight(answers.weightKg, unit, 0)}`
          : `to ${answers.goal} ${pace} a week`,
    },
    { label: 'Protein', detail: ACTIVITY_LABELS[answers.activityLevel].title },
    { label: 'Carbs and fat', detail: `${DIET_LABELS[answers.diet]} diet` },
  ];
  if (obstacles > 0) items.push({ label: 'Tips for you', detail: obstacles === 1 ? '1 pick' : `${obstacles} picks` });
  const at = items.length === 4 ? [25, 50, 72, 92] : [25, 55, 85];
  return items.map((item, i) => ({ ...item, at: at[i] }));
}

export default function BuildingPlanScreen() {
  const rawAnswers = useOnboardingStore((s) => s.answers);
  const aiConsent = useOnboardingStore((s) => s.aiConsent);
  const obstacles = useOnboardingStore((s) => s.obstacles.length);
  const setPlan = useOnboardingStore((s) => s.setPlan);
  const answers = useMemo(() => completeAnswers(rawAnswers), [rawAnswers]);
  const checklist = useMemo(() => (answers ? checklistFor(answers, obstacles) : []), [answers, obstacles]);

  // 1. Ask the server for the plan (AI when allowed on the consent screen, else the formula).
  const start = useMutation({
    mutationFn: (body: OnboardingAnswers) =>
      apiFetch<{ plan: NutritionPlan }>('/api/plan', { method: 'POST', body: { ...body, aiConsent: !!aiConsent } }),
  });
  const started = useRef(false);
  const startedAt = useRef(0);
  useEffect(() => {
    if (!answers || aiConsent === null || started.current) return;
    started.current = true;
    startedAt.current = Date.now();
    start.mutate(answers);
  });

  // 2. Smooth percentage: time-based while waiting, then fills up when the plan arrives.
  const [displayed, setDisplayed] = useState(0);
  const result = start.data?.plan;
  const failed = start.isError;
  const done = !!result;

  useEffect(() => {
    if (failed) return;
    const timer = setInterval(() => {
      const elapsed = (Date.now() - startedAt.current) / 1000;
      const target = done ? 100 : Math.min(95, 88 * (1 - Math.exp(-elapsed / 5)));
      setDisplayed((current) => (current >= target ? current : Math.min(target, current + (done ? 4 : 1))));
    }, 40);
    return () => clearInterval(timer);
  }, [done, failed]);

  const bar = useSharedValue(0);
  useEffect(() => {
    // As long as one tick of the number, and linear, so it never falls behind it.
    bar.set(withTiming(displayed / 100, { duration: 40, easing: Easing.linear }));
  }, [displayed, bar]);
  const barStyle = useAnimatedStyle(() => ({ width: `${bar.get() * 100}%` }));

  // A light tick each time a line of the checklist is done.
  const checked = checklist.filter((item) => displayed >= item.at).length;
  const ticked = useRef(0);
  useEffect(() => {
    if (checked > ticked.current) haptics.selection();
    ticked.current = checked;
  }, [checked]);

  // 3. Plan ready → store it and show it.
  useEffect(() => {
    if (!result || displayed < 100) return;
    const plan = result;
    const log = plan.source === 'ai' ? Sentry.logger.info : Sentry.logger.warn;
    log(plan.source === 'ai' ? 'Onboarding plan generated' : 'Onboarding plan used the formula fallback', {
      planSource: plan.source,
    });
    haptics.success();
    setPlan(plan);
    router.replace('/onboarding/plan');
  }, [displayed, result, setPlan]);

  if (!answers) return <Redirect href={FIRST_STEP_HREF} />;
  if (aiConsent === null) return <Redirect href="/onboarding/ai-consent" />;

  const stage = [...STAGES].reverse().find((s) => displayed >= s.at)?.text;

  const retry = () => {
    startedAt.current = Date.now();
    setDisplayed(0);
    start.reset();
    start.mutate(answers);
  };

  const applyStandardPlan = () => {
    Sentry.logger.warn('Onboarding plan generation failed, user picked the standard plan', {
      error: start.error?.message ?? 'unknown',
    });
    setPlan(formulaPlan(answers));
    router.replace('/onboarding/plan');
  };

  return (
    <Screen>
      <View className="flex-1 justify-center px-6">
        <Rise>
          <Text
            accessibilityRole="progressbar"
            accessibilityValue={{ min: 0, max: 100, now: Math.round(displayed) }}
            className="text-center text-[88px] font-bold leading-[96px] tracking-tighter text-ink"
            style={{ fontVariant: ['tabular-nums'] }}>
            {Math.round(displayed)}
            <Text className="text-[44px]">%</Text>
          </Text>
        </Rise>
        <Rise index={1}>
          <Text
            accessibilityRole="header"
            className="mt-2 text-center text-[28px] font-bold leading-[34px] tracking-tight text-ink">
            {failed ? "We couldn't build your plan" : "We're setting everything\nup for you"}
          </Text>
        </Rise>

        <Rise
          index={2}
          style={{ marginTop: 32, height: 8, overflow: 'hidden', borderRadius: 999, backgroundColor: colors.surface }}>
          <Animated.View style={[{ height: '100%', borderRadius: 999, backgroundColor: colors.ink }, barStyle]} />
        </Rise>
        <View className="mt-4 h-5 items-center">
          {failed ? (
            <Text className="text-center text-[15px] text-muted">Please check your connection and try again.</Text>
          ) : (
            <Animated.Text
              key={stage}
              entering={FadeInDown.duration(260)}
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                fontSize: 15,
                color: colors.muted,
                textAlign: 'center',
              }}>
              {stage}
            </Animated.Text>
          )}
        </View>

        <Rise index={3} style={{ marginTop: 40 }}>
          <View className="rounded-card bg-surface p-5">
            <Text className="mb-4 text-[17px] font-semibold text-ink">Daily recommendation for</Text>
            <View className="gap-3.5">
              {checklist.map(({ label, detail, at }) => {
                const isChecked = displayed >= at;
                return (
                  <View key={label} className="flex-row items-center gap-3">
                    {isChecked ? (
                      <Animated.View
                        entering={ZoomIn.springify().damping(11).stiffness(260)}
                        style={{
                          width: 24,
                          height: 24,
                          borderRadius: 12,
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: colors.ink,
                        }}>
                        <Check size={14} color={colors.canvas} strokeWidth={3} />
                      </Animated.View>
                    ) : (
                      <View className="h-6 w-6 rounded-full border-[1.5px] border-faint" />
                    )}
                    <Text className={cn('text-[16px]', isChecked ? 'text-ink' : 'text-muted')}>{label}</Text>
                    <Text
                      numberOfLines={1}
                      className={cn('flex-1 text-right text-[14px]', isChecked ? 'text-ink' : 'text-faint')}>
                      {detail}
                    </Text>
                  </View>
                );
              })}
            </View>
          </View>
        </Rise>
      </View>

      {failed ? (
        <View className="gap-2 px-6">
          <Button title="Try again" loading={start.isPending} onPress={retry} />
          <Button title="Use a standard plan" variant="ghost" onPress={applyStandardPlan} />
        </View>
      ) : null}
    </Screen>
  );
}
