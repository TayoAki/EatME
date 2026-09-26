import AsyncStorage from '@react-native-async-storage/async-storage';
import { useMemo, useSyncExternalStore } from 'react';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import {
  DEFAULT_WEEKLY_GOAL_KG,
  onboardingAnswersSchema,
  type NutritionPlan,
  type OnboardingAnswers,
} from '@/shared/onboarding';

/** A plan that was generated but not saved yet (e.g. the user still has to sign up). */
const PENDING_SAVE_TTL_MS = 7 * 24 * 60 * 60 * 1000;

export const DEFAULT_ANSWERS: Partial<OnboardingAnswers> = {
  unitSystem: 'metric',
  heightCm: 175,
  weightKg: 70,
  dateOfBirth: '2000-01-01',
  weeklyGoalKg: DEFAULT_WEEKLY_GOAL_KG,
};

type OnboardingState = {
  answers: Partial<OnboardingAnswers>;
  plan: NutritionPlan | null;
  /** The choice on the AI consent screen (null until it was shown). */
  aiConsent: boolean | null;
  /** Set when the user finished onboarding; cleared after the plan is saved to the database. */
  pendingSaveAt: number | null;
  setAnswers: (answers: Partial<OnboardingAnswers>) => void;
  setPlan: (plan: NutritionPlan) => void;
  setAiConsent: (allowed: boolean) => void;
  markPendingSave: () => void;
  clearPendingSave: () => void;
  reset: () => void;
};

export const useOnboardingStore = create<OnboardingState>()(
  persist(
    (set) => ({
      answers: DEFAULT_ANSWERS,
      plan: null,
      aiConsent: null,
      pendingSaveAt: null,
      setAnswers: (answers) => set((s) => ({ answers: { ...s.answers, ...answers } })),
      setPlan: (plan) => set({ plan }),
      setAiConsent: (aiConsent) => set({ aiConsent }),
      markPendingSave: () => set({ pendingSaveAt: Date.now() }),
      clearPendingSave: () => set({ pendingSaveAt: null }),
      reset: () => set({ answers: DEFAULT_ANSWERS, plan: null, aiConsent: null, pendingSaveAt: null }),
    }),
    {
      name: 'eatme-onboarding',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: ({ answers, plan, aiConsent, pendingSaveAt }) => ({ answers, plan, aiConsent, pendingSaveAt }),
      // A finished onboarding that was never saved (no sign-up) expires after a week.
      onRehydrateStorage: () => (state) => {
        if (state?.pendingSaveAt && Date.now() - state.pendingSaveAt > PENDING_SAVE_TTL_MS) {
          state.clearPendingSave();
        }
      },
    },
  ),
);

/** Complete, validated answers — or null while onboarding is unfinished. */
export function completeAnswers(answers: Partial<OnboardingAnswers>): OnboardingAnswers | null {
  const normalized =
    answers.goal === 'maintain'
      ? { ...answers, targetWeightKg: answers.weightKg, weeklyGoalKg: 0 }
      : answers;
  const parsed = onboardingAnswersSchema.safeParse(normalized);
  return parsed.success ? parsed.data : null;
}

export type PendingOnboarding = { answers: OnboardingAnswers; plan: NutritionPlan; aiConsent: boolean };

/** The answers + plan waiting to be saved after sign-up, if they are still fresh. */
export function usePendingOnboarding(): PendingOnboarding | null {
  const answers = useOnboardingStore((s) => s.answers);
  const plan = useOnboardingStore((s) => s.plan);
  const aiConsent = useOnboardingStore((s) => s.aiConsent);
  const pendingSaveAt = useOnboardingStore((s) => s.pendingSaveAt);
  return useMemo(() => {
    if (!pendingSaveAt || !plan) return null;
    const complete = completeAnswers(answers);
    return complete ? { answers: complete, plan, aiConsent: !!aiConsent } : null;
  }, [answers, plan, aiConsent, pendingSaveAt]);
}

const subscribeToHydration = (onChange: () => void) => useOnboardingStore.persist.onFinishHydration(onChange);
const getHydrated = () => useOnboardingStore.persist.hasHydrated();

/** True once the persisted onboarding answers were loaded from storage. */
export function useOnboardingHydrated() {
  return useSyncExternalStore(subscribeToHydration, getHydrated, getHydrated);
}
