import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Sentry from '@sentry/react-native';
import { useQueryClient } from '@tanstack/react-query';
import { router } from 'expo-router';
import { useEffect } from 'react';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { useSession } from './auth-client';
import { billingSupported, premiumOptions } from './billing';
import { useBilling, useFeatures } from './queries';

type PremiumOfferState = {
  /** The account that just finished onboarding on this phone and hasn't been offered Premium yet. */
  pendingFor: string | null;
  markPending: (userId: string) => void;
  clear: () => void;
};

/** One offer per new account (PLAN.md → Premium offer after sign-up), kept across an app restart. */
export const usePremiumOfferStore = create<PremiumOfferState>()(
  persist(
    (set) => ({
      pendingFor: null,
      markPending: (userId) => set({ pendingFor: userId }),
      clear: () => set({ pendingFor: null }),
    }),
    { name: 'eatme-premium-offer', storage: createJSONStorage(() => AsyncStorage) },
  ),
);

/** The Premium screen's options query (shared, so the offer opens with the prices already loaded). */
export const premiumOptionsKey = (userId: string | null) => ['premium-options', userId] as const;

/**
 * After the plan from onboarding is saved: opens the Premium offer once, and only when it can be honest about a free
 * trial — payments on, a store build, not Premium already, and the store says this person can still get a trial
 * (`premiumOptions`). Anything else and the offer is dropped without a word. Mounted in the signed-in layout.
 */
export function usePremiumOfferAfterSignUp() {
  const { userId } = useSession();
  const pendingFor = usePremiumOfferStore((s) => s.pendingFor);
  const features = useFeatures().data;
  const due = !!userId && pendingFor === userId;
  const canBuy = !!features?.payments && billingSupported;
  const billing = useBilling(due && canBuy);
  const queryClient = useQueryClient();

  useEffect(() => {
    if (!due || !features) return;
    const { clear } = usePremiumOfferStore.getState();
    if (!canBuy || billing.isError || billing.data?.premium) {
      clear();
      return;
    }
    if (!billing.data) return;
    let active = true;
    queryClient
      .fetchQuery({ queryKey: premiumOptionsKey(userId), queryFn: () => premiumOptions(userId), staleTime: 10 * 60_000 })
      .then((options) => {
        if (!active) return;
        clear();
        if (!options.some((option) => option.trial)) return;
        Sentry.logger.info('Premium offer shown');
        router.push('/premium-offer');
      })
      .catch(() => clear());
    return () => {
      active = false;
    };
  }, [due, features, canBuy, billing.data, billing.isError, queryClient, userId]);
}
