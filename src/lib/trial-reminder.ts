import type { PurchasesPackage } from 'react-native-purchases';

import { trialReminderAt } from '@/shared/billing';

import { currentTrial, packagePrice, STORE_NAME } from './billing';
import { useReminderStore } from './reminder-store';
import { requestNotificationPermission } from './reminders';

/** What the person is told after starting a free trial. */
export type TrialStarted = {
  endsAt: Date;
  /** When the reminder goes off, or null when it can't (notifications off, or the trial is too short). */
  remindAt: Date | null;
};

/**
 * Right after a purchase (the Premium offer or the Premium screen): if it started a free trial, ask for notifications
 * (the system alert only, nothing of ours in front of it: Apple 5.1.1(iv)) and plan a reminder two days before the
 * trial ends, at the store's end date and the price after it. `useReminderSync` schedules it and drops it once the
 * subscription won't renew. Null when the purchase didn't start a trial.
 */
export async function startTrialReminder(userId: string, pkg: PurchasesPackage): Promise<TrialStarted | null> {
  const trial = await currentTrial(userId).catch(() => null);
  if (!trial) return null;
  const endsAt = new Date(trial.endsAt);
  const remindAt = trialReminderAt(endsAt);
  useReminderStore.getState().update({
    trialEnd: { enabled: true, endsAt: trial.endsAt, price: packagePrice(pkg), store: STORE_NAME },
  });
  if (remindAt <= new Date()) return { endsAt, remindAt: null };
  const permission = await requestNotificationPermission().catch(() => 'denied' as const);
  return { endsAt, remindAt: permission === 'granted' ? remindAt : null };
}
