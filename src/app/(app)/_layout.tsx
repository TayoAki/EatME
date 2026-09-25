import { Stack } from 'expo-router';
import { useEffect, useRef } from 'react';

import { colors } from '@/constants/colors';
import { useMe, useUpdateProfile } from '@/lib/queries';
import { useNotificationRouting, useReminderSync } from '@/lib/reminders';
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
  return (
    <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: colors.canvas } }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="meal/[id]" options={{ presentation: 'modal' }} />
      <Stack.Screen name="personal-details" />
      <Stack.Screen name="daily-goals" />
      <Stack.Screen name="reminders" />
      <Stack.Screen name="glp1" />
      <Stack.Screen name="sentry-test" />
    </Stack>
  );
}
