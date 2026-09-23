import { useAuth } from '@clerk/expo';
import { useEffect, useRef } from 'react';

import { ErrorScreen, LoadingScreen } from '@/components/full-screen-state';
import { useOnboardingStore, type PendingOnboarding } from '@/lib/onboarding-store';
import { useSaveOnboarding } from '@/lib/queries';
import { deviceTimeZone } from '@/lib/time';

/**
 * Shown right after sign-up (or at the end of onboarding for signed-in users):
 * stores the answers + AI plan in Postgres, then the root layout moves on to the home screen.
 */
export function FinishOnboarding({ pending }: { pending: PendingOnboarding }) {
  const save = useSaveOnboarding();
  const reset = useOnboardingStore((s) => s.reset);
  const { signOut } = useAuth();
  const started = useRef(false);

  const run = () =>
    save.mutate(
      { ...pending, timezone: deviceTimeZone() },
      {
        onSuccess: () => {
          reset();
        },
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
        secondaryAction={{ label: 'Sign out', onPress: () => void signOut() }}
      />
    );
  }
  return <LoadingScreen label="Saving your plan…" />;
}
