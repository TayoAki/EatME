import { Stack } from 'expo-router';
import { useEffect, useRef } from 'react';

import { colors } from '@/constants/colors';
import { HealthSync } from '@/lib/health';
import { useHealthStore } from '@/lib/health-store';
import { useMe, useUpdateProfile } from '@/lib/queries';
import { useNotificationRouting, useReminderSync } from '@/lib/reminders';
import { WaterWidgetSync, waterWidgetSupported } from '@/lib/water-widget';
import { deviceTimeZone } from '@/lib/time';

export const unstable_settings = {
  initialRouteName: '(tabs)',
};

/** Keeps the stored time zone in sync with the device (day boundaries and streaks use it). */
function useSyncTimeZone() {
  const { data } = useMe();
  const { mutate } = useUpdateProfile();
  const stored = data?.user?.timezone;
  const synced = useRef<string | null>(null);

  useEffect(() => {
    const device = deviceTimeZone();
    if (!stored || stored === device || synced.current === device) return;
    synced.current = device;
    mutate({ timezone: device });
  }, [stored, mutate]);
}

export default function AppLayout() {
  useSyncTimeZone();
  useReminderSync();
  useNotificationRouting();
  const healthSync = useHealthStore((state) => state.enabled);
  return (
    <>
      {healthSync ? <HealthSync /> : null}
      {waterWidgetSupported ? <WaterWidgetSync /> : null}
      <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: colors.canvas } }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="meal/[id]" options={{ presentation: 'modal' }} />
        <Stack.Screen name="personal-details" />
        <Stack.Screen name="daily-goals" />
        <Stack.Screen name="reminders" />
        <Stack.Screen name="glp1" />
        <Stack.Screen name="health" />
        <Stack.Screen name="nutrients" />
        <Stack.Screen name="supplements" />
        <Stack.Screen name="weight" />
        <Stack.Screen name="verify-email" />
        <Stack.Screen name="sentry-test" />
      </Stack>
    </>
  );
}
