import * as Sentry from '@sentry/react-native';
import { useMutation } from '@tanstack/react-query';
import { Redirect, router } from 'expo-router';
import { Check } from 'lucide-react-native';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Text, View } from 'react-native';

import { Button } from '@/components/ui/button';
import { Screen } from '@/components/ui/screen';
import { colors } from '@/constants/colors';
import { apiFetch } from '@/lib/api';
import { cn } from '@/lib/cn';
import { haptics } from '@/lib/haptics';
import { completeAnswers, useOnboardingStore } from '@/lib/onboarding-store';
import { FIRST_STEP_HREF } from '@/lib/onboarding-steps';
import { formulaPlan } from '@/shared/nutrition';
import type { NutritionPlan, OnboardingAnswers } from '@/shared/onboarding';

const CHECKLIST = [
  { label: 'Calories', at: 25 },
  { label: 'Carbs', at: 50 },
  { label: 'Protein', at: 72 },
  { label: 'Fats', at: 92 },
] as const;

const STAGES = [
  { at: 0, text: 'Estimating your metabolic rate…' },
  { at: 35, text: 'Calculating your daily calories…' },
  { at: 60, text: 'Balancing your macros…' },
  { at: 85, text: 'Finalizing your plan…' },
];

export default function BuildingPlanScreen() {
  const rawAnswers = useOnboardingStore((s) => s.answers);
  const aiConsent = useOnboardingStore((s) => s.aiConsent);
  const setPlan = useOnboardingStore((s) => s.setPlan);
  const answers = useMemo(() => completeAnswers(rawAnswers), [rawAnswers]);

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

  // 3. Plan ready → store it and show it.
  useEffect(() => {
    if (!result || displayed < 100) return;
    const plan = result;
    const log = plan.source === 'ai' ? Sentry.logger.info : Sentry.logger.warn;
    log(plan.source === 'ai' ? 'Onboarding plan generated' : 'Onboarding plan used the formula fallback', {
      planSource: plan.source,
      calories: plan.calories,
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
        <Text className="text-center text-[88px] font-bold leading-[96px] tracking-tighter text-ink">
          {Math.round(displayed)}
          <Text className="text-[44px]">%</Text>
        </Text>
        <Text accessibilityRole="header" className="mt-2 text-center text-[28px] font-bold leading-[34px] tracking-tight text-ink">
          {failed ? "We couldn't build your plan" : "We're setting everything\nup for you"}
        </Text>

        <View className="mt-8 h-2 overflow-hidden rounded-full bg-surface">
          <View style={{ width: `${displayed}%` }} className="h-full rounded-full bg-ink" />
        </View>
        <Text className="mt-4 text-center text-[15px] text-muted">
          {failed ? 'Please check your connection and try again.' : stage}
        </Text>

        <View className="mt-10 rounded-card bg-surface p-5">
          <Text className="mb-4 text-[17px] font-semibold text-ink">Daily recommendation for</Text>
          <View className="gap-3.5">
            {CHECKLIST.map(({ label, at }) => {
              const checked = displayed >= at;
              return (
                <View key={label} className="flex-row items-center gap-3">
                  <View
                    className={cn(
                      'h-6 w-6 items-center justify-center rounded-full',
                      checked ? 'bg-ink' : 'border-[1.5px] border-faint',
                    )}>
                    {checked ? <Check size={14} color={colors.canvas} strokeWidth={3} /> : null}
                  </View>
                  <Text className={cn('text-[16px]', checked ? 'text-ink' : 'text-muted')}>{label}</Text>
                </View>
              );
            })}
          </View>
        </View>
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
