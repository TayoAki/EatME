import * as Sentry from '@sentry/react-native';
import * as Notifications from 'expo-notifications';
import { router } from 'expo-router';
import { useEffect } from 'react';
import { Platform } from 'react-native';

import { useProfile } from './queries';
import { planReminders, REMINDER_PREFIX, type PlannedReminder } from './reminder-plan';
import { useReminderStore } from './reminder-store';

/** Local notifications work on iOS and Android (Expo Go included), not on web. */
export const remindersSupported = Platform.OS === 'ios' || Platform.OS === 'android';

const CHANNEL_ID = 'reminders';

export type NotificationPermission = 'granted' | 'denied' | 'undetermined' | 'unsupported';

if (remindersSupported) {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowBanner: true,
      shouldShowList: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  });
}

async function ensureChannel() {
  // Android 13+ only shows the permission prompt once a channel exists.
  if (Platform.OS !== 'android') return;
  await Notifications.setNotificationChannelAsync(CHANNEL_ID, {
    name: 'Reminders',
    importance: Notifications.AndroidImportance.DEFAULT,
  });
}

export async function getNotificationPermission(): Promise<NotificationPermission> {
  if (!remindersSupported) return 'unsupported';
  const { status } = await Notifications.getPermissionsAsync();
  return status;
}

/** Asks once; afterwards the user can only change it in the phone's settings. */
export async function requestNotificationPermission(): Promise<NotificationPermission> {
  if (!remindersSupported) return 'unsupported';
  await ensureChannel();
  const { status } = await Notifications.requestPermissionsAsync({
    ios: { allowAlert: true, allowSound: true, allowBadge: false },
  });
  return status;
}

async function cancelReminders() {
  const scheduled = await Notifications.getAllScheduledNotificationsAsync();
  await Promise.all(
    scheduled
      .filter((n) => n.identifier.startsWith(REMINDER_PREFIX))
      .map((n) => Notifications.cancelScheduledNotificationAsync(n.identifier)),
  );
}

async function scheduleReminders(planned: PlannedReminder[]) {
  await cancelReminders();
  if (planned.length === 0) return;
  await ensureChannel();
  for (const reminder of planned) {
    const { trigger } = reminder;
    await Notifications.scheduleNotificationAsync({
      identifier: reminder.identifier,
      content: { title: reminder.title, body: reminder.body, data: { url: reminder.url } },
      trigger:
        trigger.type === 'daily'
          ? {
              type: Notifications.SchedulableTriggerInputTypes.DAILY,
              hour: trigger.hour,
              minute: trigger.minute,
              channelId: CHANNEL_ID,
            }
          : {
              type: Notifications.SchedulableTriggerInputTypes.WEEKLY,
              weekday: trigger.weekday,
              hour: trigger.hour,
              minute: trigger.minute,
              channelId: CHANNEL_ID,
            },
    });
  }
}

/**
 * Keeps the scheduled notifications in line with the reminder settings and GLP-1 mode.
 * Mounted once in the signed-in layout.
 */
export function useReminderSync() {
  const settings = useReminderStore((s) => s.settings);
  const glp1 = useProfile()?.glp1 ?? null;
  const plan = JSON.stringify(planReminders(settings, glp1));

  useEffect(() => {
    if (!remindersSupported) return;
    const planned = JSON.parse(plan) as PlannedReminder[];
    void (async () => {
      if (planned.length > 0 && (await getNotificationPermission()) !== 'granted') return;
      await scheduleReminders(planned);
    })().catch((error: unknown) => Sentry.logger.error('Reminder sync failed', { error: String(error) }));
  }, [plan]);
}

/** Signed out: no more reminders on this device, and the next account starts from the defaults. */
export async function clearReminders() {
  useReminderStore.getState().reset();
  if (remindersSupported) await cancelReminders();
}

/** Tapping a reminder opens the screen it is about (e.g. Scan for a meal reminder). */
export function useNotificationRouting() {
  useEffect(() => {
    if (!remindersSupported) return;
    const open = (notification: Notifications.Notification) => {
      const url = notification.request.content.data?.url;
      if (typeof url === 'string' && url.startsWith('/')) router.push(url as never);
    };
    const last = Notifications.getLastNotificationResponse();
    if (last?.notification) {
      open(last.notification);
      Notifications.clearLastNotificationResponse();
    }
    const subscription = Notifications.addNotificationResponseReceivedListener((response) => open(response.notification));
    return () => subscription.remove();
  }, []);
}
