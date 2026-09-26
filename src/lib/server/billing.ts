import { and, count, eq, gte, inArray, lt } from 'drizzle-orm';

import { db } from '@/db';
import { meals, subscriptions, users, type SubscriptionRow } from '@/db/schema';
import { PREMIUM_ENTITLEMENT, type BillingStatus } from '@/shared/billing';

import { dayBounds } from './day';
import { describeError } from './log';
import { localDate } from './streak';

/**
 * Payments (V2) stay off until PAYMENTS_ENABLED=true and RevenueCat's webhook secret are set.
 * Off, everything is free with the fair-use limit of 50 AI scans a day. On, free accounts get
 * FREE_SCANS_PER_DAY AI scans (photos, labels, descriptions) a day; barcodes, food search, goals,
 * water and weight stay free for everyone.
 */
export const paymentsEnabled = () => process.env.PAYMENTS_ENABLED === 'true' && !!process.env.REVENUECAT_WEBHOOK_SECRET;

export function freeScansPerDay() {
  const n = Number(process.env.FREE_SCANS_PER_DAY ?? 3);
  return Number.isInteger(n) && n >= 0 ? n : 3;
}

/** Meals that cost an AI call. */
export const ANALYZED_SOURCES = ['photo', 'label', 'text'] as const;

export const isActive = (row: SubscriptionRow | null | undefined) =>
  !!row?.active && (!row.expiresAt || row.expiresAt.getTime() > Date.now());

export async function subscriptionOf(userId: string) {
  return (await db.query.subscriptions.findFirst({ where: eq(subscriptions.userId, userId) })) ?? null;
}

/** AI analyses logged today in the user's time zone. */
export async function scansToday(userId: string, timeZone: string) {
  const { start, end } = dayBounds(localDate(new Date(), timeZone), timeZone);
  const [{ scans }] = await db
    .select({ scans: count() })
    .from(meals)
    .where(and(eq(meals.userId, userId), inArray(meals.source, ANALYZED_SOURCES), gte(meals.createdAt, start), lt(meals.createdAt, end)));
  return scans;
}

export async function billingStatus(userId: string, timeZone: string): Promise<BillingStatus> {
  const [row, today] = await Promise.all([subscriptionOf(userId), scansToday(userId, timeZone)]);
  const premium = isActive(row);
  const free = freeScansPerDay();
  return {
    enabled: paymentsEnabled(),
    premium,
    expiresAt: premium && row?.expiresAt ? row.expiresAt.toISOString() : null,
    willRenew: premium && !!row?.willRenew,
    store: premium ? (row?.store ?? null) : null,
    freeScansPerDay: free,
    scansToday: today,
    scansLeft: premium ? null : Math.max(0, free - today),
  };
}

async function saveSubscription(userId: string, values: Partial<typeof subscriptions.$inferInsert>) {
  await db
    .insert(subscriptions)
    .values({ userId, ...values })
    .onConflictDoUpdate({ target: subscriptions.userId, set: values });
}

// ─── RevenueCat webhook ────────────────────────────────────────────────────────

export type RevenueCatEvent = {
  id: string;
  type: string;
  app_user_id?: string | null;
  original_app_user_id?: string | null;
  aliases?: string[] | null;
  entitlement_ids?: string[] | null;
  entitlement_id?: string | null;
  product_id?: string | null;
  expiration_at_ms?: number | null;
  event_timestamp_ms: number;
  store?: string | null;
  transferred_from?: string[] | null;
  transferred_to?: string[] | null;
};

/** The first of the event's ids that is an EatME account (the app logs in with the user id). */
async function eventUser(ids: (string | null | undefined)[]) {
  const candidates = [...new Set(ids.filter((id): id is string => !!id && !id.startsWith('$RCAnonymousID')))];
  if (candidates.length === 0) return null;
  const rows = await db.select({ id: users.id }).from(users).where(inArray(users.id, candidates));
  return candidates.find((id) => rows.some((r) => r.id === id)) ?? null;
}

const GRANTING = ['INITIAL_PURCHASE', 'RENEWAL', 'PRODUCT_CHANGE', 'UNCANCELLATION', 'NON_RENEWING_PURCHASE', 'SUBSCRIPTION_EXTENDED', 'TEMPORARY_ENTITLEMENT_GRANT'];

/** Applies one webhook event. Returns what happened (for logs and tests). */
export async function applyWebhookEvent(event: RevenueCatEvent) {
  if (event.type === 'TEST') return 'test';

  if (event.type === 'TRANSFER') {
    for (const id of event.transferred_from ?? []) {
      const from = await eventUser([id]);
      if (from) await saveSubscription(from, { active: false, willRenew: false, lastEventId: event.id, lastEventAt: new Date(event.event_timestamp_ms) });
    }
    for (const id of event.transferred_to ?? []) {
      const to = await eventUser([id]);
      if (to) await syncFromRevenueCat(to).catch((error: unknown) => console.error(`[billing] sync after transfer failed: ${describeError(error)}`));
    }
    return 'transferred';
  }

  const entitlements = event.entitlement_ids ?? (event.entitlement_id ? [event.entitlement_id] : []);
  if (!entitlements.includes(PREMIUM_ENTITLEMENT)) return 'ignored';
  const userId = await eventUser([event.app_user_id, event.original_app_user_id, ...(event.aliases ?? [])]);
  if (!userId) return 'unknown-user';

  const current = await subscriptionOf(userId);
  if (current?.lastEventId === event.id) return 'duplicate';
  if (current?.lastEventAt && event.event_timestamp_ms < current.lastEventAt.getTime()) return 'stale';

  const base = {
    lastEventId: event.id,
    lastEventAt: new Date(event.event_timestamp_ms),
    expiresAt: event.expiration_at_ms ? new Date(event.expiration_at_ms) : null,
    productId: event.product_id ?? current?.productId ?? null,
    store: event.store ?? current?.store ?? null,
  };
  if (GRANTING.includes(event.type)) {
    await saveSubscription(userId, { ...base, active: true, willRenew: event.type !== 'NON_RENEWING_PURCHASE' });
  } else if (event.type === 'CANCELLATION' || event.type === 'BILLING_ISSUE') {
    // Paid time stays until it runs out (refunds come with an end in the past).
    await saveSubscription(userId, { ...base, active: current?.active ?? true, willRenew: false });
  } else if (event.type === 'EXPIRATION') {
    await saveSubscription(userId, { ...base, active: false, willRenew: false });
  } else {
    return 'ignored';
  }
  return 'applied';
}

// ─── RevenueCat REST (right after a purchase or restore; needs REVENUECAT_SECRET_KEY) ──

type RevenueCatSubscriber = {
  subscriber?: {
    entitlements?: Record<string, { expires_date?: string | null; product_identifier?: string | null }>;
    subscriptions?: Record<string, { store?: string; unsubscribe_detected_at?: string | null; billing_issues_detected_at?: string | null }>;
  };
};

/** Reads the user's entitlement from RevenueCat and saves it. Returns false when not configured. */
export async function syncFromRevenueCat(userId: string) {
  const key = process.env.REVENUECAT_SECRET_KEY;
  if (!key) return false;
  const base = process.env.REVENUECAT_API_BASE_URL ?? 'https://api.revenuecat.com';
  const res = await fetch(`${base}/v1/subscribers/${encodeURIComponent(userId)}`, {
    headers: { Authorization: `Bearer ${key}`, Accept: 'application/json' },
    signal: AbortSignal.timeout(8000),
  });
  if (!res.ok) throw new Error(`RevenueCat answered ${res.status}`);
  const { subscriber } = (await res.json()) as RevenueCatSubscriber;
  const entitlement = subscriber?.entitlements?.[PREMIUM_ENTITLEMENT];
  const expiresAt = entitlement?.expires_date ? new Date(entitlement.expires_date) : null;
  const active = !!entitlement && (!expiresAt || expiresAt.getTime() > Date.now());
  const product = entitlement?.product_identifier ? subscriber?.subscriptions?.[entitlement.product_identifier] : undefined;
  await saveSubscription(userId, {
    active,
    expiresAt,
    productId: entitlement?.product_identifier ?? null,
    store: product?.store ?? null,
    willRenew: active && !product?.unsubscribe_detected_at && !product?.billing_issues_detected_at,
  });
  return true;
}
