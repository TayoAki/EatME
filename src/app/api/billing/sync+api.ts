import { eq } from 'drizzle-orm';

import { db } from '@/db';
import { users } from '@/db/schema';
import { requireUserId } from '@/lib/server/auth';
import { billingStatus, paymentsEnabled, syncFromRevenueCat } from '@/lib/server/billing';
import { handle, HttpError } from '@/lib/server/http';
import { rateLimit } from '@/lib/server/rate-limit';

/** Right after a purchase or restore: reads the entitlement from RevenueCat (the webhook may lag). */
export const POST = handle(async (request) => {
  const userId = await requireUserId(request);
  if (!paymentsEnabled()) throw new HttpError(404, 'Payments are not available.');
  rateLimit(`billing-sync:${userId}`, 30, 60 * 60 * 1000);
  try {
    await syncFromRevenueCat(userId);
  } catch (error) {
    console.error('[billing] sync failed', error instanceof Error ? error.message : error);
  }
  const user = await db.query.users.findFirst({ where: eq(users.id, userId), columns: { timezone: true } });
  return Response.json(await billingStatus(userId, user?.timezone ?? 'UTC'));
});
