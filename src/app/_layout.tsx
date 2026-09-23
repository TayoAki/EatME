import '@/global.css';
// Initialise Sentry before anything else renders.
import { navigationIntegration, Sentry } from '@/lib/sentry';

import { ClerkProvider, useAuth } from '@clerk/expo';
import { tokenCache } from '@clerk/expo/token-cache';
import { QueryClientProvider } from '@tanstack/react-query';
import { Stack, useNavigationContainerRef } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { FinishOnboarding } from '@/components/finish-onboarding';
import { ErrorScreen, LoadingScreen, MissingConfigScreen } from '@/components/full-screen-state';
import { colors } from '@/constants/colors';
import { useOnboardingHydrated, usePendingOnboarding } from '@/lib/onboarding-store';
import { useMe } from '@/lib/queries';
import { queryClient } from '@/lib/query-client';

void SplashScreen.preventAutoHideAsync();

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY ?? '';

function RootLayout() {
  const navigationRef = useNavigationContainerRef();
  useEffect(() => {
    if (navigationRef) navigationIntegration.registerNavigationContainer(navigationRef);
  }, [navigationRef]);

  if (!publishableKey) {
    return (
      <MissingConfigScreen
        variable="EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY"
        hint="Add your Clerk publishable key to .env (Clerk dashboard → API keys), then restart Expo."
      />
    );
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
        <QueryClientProvider client={queryClient}>
          <StatusBar style="dark" />
          <RootNavigator />
        </QueryClientProvider>
      </ClerkProvider>
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
  const { isLoaded, isSignedIn, userId } = useAuth();
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

  // Attach the Clerk user id to every Sentry event, log and replay.
  useEffect(() => {
    Sentry.setUser(isSignedIn && userId ? { id: userId } : null);
  }, [isSignedIn, userId]);

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
