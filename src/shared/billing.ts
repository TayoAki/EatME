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
};

/** The paid plan unlocks one thing: unlimited AI scans (up to the 50 a day fair-use limit). */
export const PREMIUM_ENTITLEMENT = 'premium';
