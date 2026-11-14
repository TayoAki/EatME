/** `GET /api/billing`: the user's plan and today's free AI scans (payments on). */
export type BillingStatus = {
  /** Payments are switched on for this server. Off: everything is free (fair-use limit only). */
  enabled: boolean;
  premium: boolean;
  /** End of the current period (ISO), null = no end or not premium. */
  expiresAt: string | null;
  willRenew: boolean;
  store: string | null;
  freeScansPerDay: number;
  /** AI analyses (photos, labels, descriptions) logged today, in the user's time zone. */
  scansToday: number;
  /** Free scans left today; null for premium. */
  scansLeft: number | null;
  /**
   * What to order (v2.5): the list that was the one free try ("chain:<slug>" or "scan:<id>"; it
   * stays open), null while it's unused. Premium opens every list.
   */
  whatToOrderTry: string | null;
};

/** The paid plan unlocks one thing: unlimited AI scans (up to the 50 a day fair-use limit). */
export const PREMIUM_ENTITLEMENT = 'premium';

/** A store's trial length: "1 month", "7 days" (RevenueCat's `introPrice.periodUnit`). */
export type TrialPeriod = { units: number; unit: 'DAY' | 'WEEK' | 'MONTH' | 'YEAR' };

/**
 * When a free trial that starts at `from` ends, by calendar (a month from 31 January ends on the last day of
 * February). An estimate for the offer's timeline; once bought, the store's own end date is used.
 */
export function trialEnd(from: Date, { units, unit }: TrialPeriod): Date {
  const end = new Date(from);
  if (unit === 'DAY' || unit === 'WEEK') {
    end.setDate(end.getDate() + units * (unit === 'WEEK' ? 7 : 1));
    return end;
  }
  const months = unit === 'YEAR' ? units * 12 : units;
  const day = end.getDate();
  end.setDate(1);
  end.setMonth(end.getMonth() + months);
  const lastDay = new Date(end.getFullYear(), end.getMonth() + 1, 0).getDate();
  end.setDate(Math.min(day, lastDay));
  return end;
}

/** The trial reminder comes this many days before the trial ends. */
export const TRIAL_REMINDER_DAYS = 2;
/** At this local hour, so it never wakes anyone. */
const TRIAL_REMINDER_HOUR = 10;

/** When the trial reminder goes off: two days before the trial ends, at 10:00 on the phone's clock. */
export function trialReminderAt(endsAt: Date): Date {
  return new Date(endsAt.getFullYear(), endsAt.getMonth(), endsAt.getDate() - TRIAL_REMINDER_DAYS, TRIAL_REMINDER_HOUR, 0);
}
