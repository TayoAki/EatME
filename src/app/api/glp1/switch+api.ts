import { eq } from 'drizzle-orm';

import { db } from '@/db';
import { users } from '@/db/schema';
import { requireUserId } from '@/lib/server/auth';
import { toProfile } from '@/lib/server/dto';
import { switchMedicine, toMedicine } from '@/lib/server/glp1';
import { handle, HttpError, readJson } from '@/lib/server/http';
import { rateLimit } from '@/lib/server/rate-limit';
import { switchMedicineSchema } from '@/shared/glp1';

/**
 * Switch medicine: the current one ends on `startsOn` (today by default) and moves to the history;
 * doses logged from that day on count for the new one. Nothing is deleted.
 */
export const POST = handle(async (request) => {
  const userId = await requireUserId(request);
  rateLimit(`glp1-switch:${userId}`, 30, 24 * 60 * 60 * 1000);
  const body = switchMedicineSchema.parse(await readJson(request));
  const medicine = await switchMedicine(userId, body);
  const user = await db.query.users.findFirst({ where: eq(users.id, userId) });
  if (!user) throw new HttpError(404, 'Profile not found');
  return Response.json({ medicine: toMedicine(medicine), user: toProfile(user) }, { status: 201 });
});
