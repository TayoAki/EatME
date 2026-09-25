import { eq } from 'drizzle-orm';

import { db } from '@/db';
import { users } from '@/db/schema';
import { requireUserId } from '@/lib/server/auth';
import { billingStatus } from '@/lib/server/billing';
import { handle } from '@/lib/server/http';

/** The user's plan (free or Premium) and today's free AI scans. */
export const GET = handle(async (request) => {
  const userId = await requireUserId(request);
  const user = await db.query.users.findFirst({ where: eq(users.id, userId), columns: { timezone: true } });
  return Response.json(await billingStatus(userId, user?.timezone ?? 'UTC'));
});
