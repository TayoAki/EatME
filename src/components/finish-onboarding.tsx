import * as Sentry from '@sentry/react-native';
import { useEffect, useRef } from 'react';

import { ErrorScreen, LoadingScreen } from '@/components/full-screen-state';
import { authClient, useSession } from '@/lib/auth-client';
import { useOnboardingStore, type PendingOnboarding } from '@/lib/onboarding-store';
import { usePremiumOfferStore } from '@/lib/premium-offer';
import { useSaveOnboarding } from '@/lib/queries';
import { deviceTimeZone } from '@/lib/time';

/**
 * Shown right after sign-up (or at the end of onboarding for signed-in users):
 * stores the answers + AI plan in Postgres, then the root layout moves on to the home screen.
 */
export function FinishOnboarding({ pending }: { pending: PendingOnboarding }) {
  const save = useSaveOnboarding();
  const reset = useOnboardingStore((s) => s.reset);
  const { userId } = useSession();
  const started = useRef(false);

  const run = () =>
    save.mutate(
      { ...pending, timezone: deviceTimeZone() },
      {
        onSuccess: () => {
          Sentry.logger.info('Onboarding completed', { planSource: pending.plan.source, aiConsent: pending.aiConsent });
          // A new account sees the Premium offer once, if the store can give it a free trial (premium-offer.ts).
          if (userId) usePremiumOfferStore.getState().markPending(userId);
          reset();
        },
        onError: (error) => Sentry.logger.error('Saving the onboarding plan failed', { error: error.message }),
      },
    );

  useEffect(() => {
    if (started.current) return;
    started.current = true;
    run();
  });

  if (save.isError) {
    return (
      <ErrorScreen
        title="We couldn't save your plan"
        message={save.error.message}
        onRetry={run}
        retrying={save.isPending}
        secondaryAction={{ label: 'Sign out', onPress: () => void authClient.signOut() }}
      />
    );
  }
  return <LoadingScreen label="Saving your plan…" />;
}
