import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Sentry from '@sentry/react-native';
import * as StoreReview from 'expo-store-review';
import { useEffect, useRef } from 'react';
import { AppState, Platform } from 'react-native';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import type { Meal } from '@/shared/meals';
import { scansJustDone } from '@/shared/rating';

/** The store's rating sheet exists on phones only (and Apple never shows it in TestFlight). */
const ratingSupported = Platform.OS === 'ios' || Platform.OS === 'android';

/** Long enough to read the scan's numbers first. */
const ASK_AFTER_MS = 2500;

type RatingState = {
  /** When this phone asked for a rating (once: the store decides whether its sheet actually shows). */
  askedAt: string | null;
  markAsked: () => void;
};

export const useRatingStore = create<RatingState>()(
  persist(
    (set) => ({
      askedAt: null,
      markAsked: () => set({ askedAt: new Date().toISOString() }),
    }),
    { name: 'eatme-rating', storage: createJSONStorage(() => AsyncStorage) },
  ),
);

async function askForRating(stillHere: () => boolean) {
  if (AppState.currentState !== 'active' || !stillHere()) return;
  if (!(await StoreReview.isAvailableAsync().catch(() => false))) return;
  useRatingStore.getState().markAsked();
  Sentry.logger.info('Rating prompt requested');
  await StoreReview.requestReview().catch(() => undefined);
}

/**
 * The rating prompt (PLAN.md → Rating prompt, Apple 5.6.1): after the first scan the person watched finish well
 * (`scansJustDone`: a photo, description or label, not a rough estimate, no question waiting), wait a moment, then ask
 * with the store's own sheet, once per phone. Never a question of ours first, never in onboarding (there are no scans
 * there). `meals` is today's list on Home; `focused` keeps it from opening over another screen.
 */
export function useRatingPrompt(meals: readonly Meal[] | undefined, focused: boolean) {
  const askedAt = useRatingStore((s) => s.askedAt);
  const lastLook = useRef<readonly Meal[] | undefined>(undefined);
  const pending = useRef<ReturnType<typeof setTimeout> | null>(null);
  const focusedNow = useRef(focused);

  useEffect(() => {
    focusedNow.current = focused;
  }, [focused]);

  useEffect(
    () => () => {
      if (pending.current) clearTimeout(pending.current);
    },
    [],
  );

  useEffect(() => {
    const before = lastLook.current;
    lastLook.current = meals;
    if (!ratingSupported || askedAt || !meals || !before || pending.current) return;
    if (scansJustDone(before, meals).length === 0) return;
    pending.current = setTimeout(() => {
      pending.current = null;
      void askForRating(() => focusedNow.current);
    }, ASK_AFTER_MS);
  }, [meals, askedAt]);
}
