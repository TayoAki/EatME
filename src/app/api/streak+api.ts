import { eq } from 'drizzle-orm';

import { db } from '@/db';
import { users } from '@/db/schema';
import { requireUserId } from '@/lib/server/auth';
import { handle } from '@/lib/server/http';
import { getStreak } from '@/lib/server/streak';

/** Current streak + the days with logged meals (for the home screen's date strip and streak sheet). */
export const GET = handle(async (request) => {
  const userId = await requireUserId(request);
  const user = await db.query.users.findFirst({ where: eq(users.id, userId), columns: { timezone: true } });
  return Response.json(await getStreak(userId, user?.timezone ?? 'UTC'));
});
