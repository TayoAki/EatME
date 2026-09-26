import type { Href } from 'expo-router';

import type { Goal } from '@/shared/onboarding';

export const ONBOARDING_STEPS = [
  'gender',
  'birthday',
  'height',
  'weight',
  'goal',
  'desired-weight',
  'activity',
  'pace',
  'diet',
] as const;
export type OnboardingStep = (typeof ONBOARDING_STEPS)[number];

const STEP_HREF: Record<OnboardingStep, Href> = {
  gender: '/onboarding/gender',
  birthday: '/onboarding/birthday',
  height: '/onboarding/height',
  weight: '/onboarding/weight',
  goal: '/onboarding/goal',
  'desired-weight': '/onboarding/desired-weight',
  activity: '/onboarding/activity',
  pace: '/onboarding/pace',
  diet: '/onboarding/diet',
};

/** Maintaining weight skips the desired-weight and pace questions. */
const SKIPPED_WHEN_MAINTAINING = new Set<OnboardingStep>(['desired-weight', 'pace']);

export function stepsFor(goal: Goal | undefined) {
  return ONBOARDING_STEPS.filter((step) => goal !== 'maintain' || !SKIPPED_WHEN_MAINTAINING.has(step));
}

export function nextStepHref(step: OnboardingStep, goal: Goal | undefined): Href {
  const steps = stepsFor(goal);
  const next = steps[steps.indexOf(step) + 1];
  // After the questions: the AI consent screen, then the plan (built with AI only when allowed).
  return next ? STEP_HREF[next] : '/onboarding/ai-consent';
}

/** 0 … 1 — the building-plan screen counts as the final step. */
export function stepProgress(step: OnboardingStep, goal: Goal | undefined) {
  const steps = stepsFor(goal);
  return (steps.indexOf(step) + 1) / (steps.length + 1);
}

export const FIRST_STEP_HREF = STEP_HREF.gender;
