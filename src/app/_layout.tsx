import '@/global.css';
// Initialise Sentry before anything else renders.
import { navigationIntegration, Sentry } from '@/lib/sentry';

import { QueryClientProvider, useQueryClient } from '@tanstack/react-query';
import { Stack, useNavigationContainerRef } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { FinishOnboarding } from '@/components/finish-onboarding';
import { ErrorScreen, LoadingScreen, MissingConfigScreen } from '@/components/full-screen-state';
import { colors } from '@/constants/colors';
import { API_URL } from '@/lib/api-url';
import { useSession } from '@/lib/auth-client';
import { useOnboardingHydrated, usePendingOnboarding } from '@/lib/onboarding-store';
import { useMe } from '@/lib/queries';
import { queryClient } from '@/lib/query-client';
import { useHealthStore } from '@/lib/health-store';
import { clearReminders } from '@/lib/reminders';

void SplashScreen.preventAutoHideAsync();

function RootLayout() {
  const navigationRef = useNavigationContainerRef();
  useEffect(() => {
    if (navigationRef) navigationIntegration.registerNavigationContainer(navigationRef);
  }, [navigationRef]);

  if (!API_URL) {
    return (
      <MissingConfigScreen
        variable="EXPO_PUBLIC_API_URL"
        hint="Set it to your Railway server URL (e.g. https://api-production.up.railway.app), then rebuild the app."
      />
    );
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient}>
        <StatusBar style="dark" />
        <RootNavigator />
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}

export default Sentry.wrap(RootLayout);

/**
 * Routing rules (PLAN.md §3):
 * - signed out            → (public) welcome / sign-in + onboarding
 * - signed in, no plan    → onboarding (nobody reaches home without a plan)
 * - just signed up        → save the plan from onboarding first
 * - signed in with a plan → (app) tabs
 */
function RootNavigator() {
  const { isLoaded, isSignedIn, userId } = useSession();
  const hydrated = useOnboardingHydrated();
  const pending = usePendingOnboarding();
  const me = useMe();
  const signedIn = isLoaded && !!isSignedIn;

  const ready = isLoaded && hydrated && (!signedIn || !!pending || !me.isPending);
  const [slowStart, setSlowStart] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setSlowStart(true), 6000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (ready || slowStart) void SplashScreen.hideAsync();
  }, [ready, slowStart]);

  // Attach the user id to every Sentry event, log and replay.
  useEffect(() => {
    Sentry.setUser(isSignedIn && userId ? { id: userId } : null);
  }, [isSignedIn, userId]);

  // After sign-out (or account deletion) drop every cached response of the previous user.
  // Runs after the signed-out screens replaced the app screens, so nothing reads the cache anymore.
  const client = useQueryClient();
  useEffect(() => {
    if (!isLoaded || isSignedIn) return;
    client.clear();
    // Reminders and Health sync belong to the account that set them up.
    void clearReminders().catch(() => undefined);
    useHealthStore.getState().reset();
  }, [client, isLoaded, isSignedIn]);

  if (!ready) return slowStart ? <LoadingScreen label="Connecting…" /> : null;

  if (signedIn && pending) return <FinishOnboarding pending={pending} />;

  if (signedIn && me.isError) {
    return (
      <ErrorScreen
        title="We couldn't load your profile"
        message={me.error.message}
        retrying={me.isFetching}
        onRetry={() => void me.refetch()}
      />
    );
  }

  const onboarded = !!me.data?.user?.onboardingCompletedAt;

  return (
    <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: colors.canvas } }}>
      <Stack.Protected guard={signedIn && onboarded}>
        <Stack.Screen name="(app)" />
      </Stack.Protected>
      <Stack.Protected guard={!signedIn}>
        <Stack.Screen name="(public)" />
      </Stack.Protected>
      <Stack.Protected guard={!signedIn || !onboarded}>
        <Stack.Screen name="onboarding" />
      </Stack.Protected>
    </Stack>
  );
}
