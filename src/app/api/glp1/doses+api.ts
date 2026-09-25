import { db } from '@/db';
import { doseLogs } from '@/db/schema';
import { requireUserId } from '@/lib/server/auth';
import { loggedAtFor, userTimeZone } from '@/lib/server/day';
import { toDoseLog } from '@/lib/server/dto';
import { handle, readJson } from '@/lib/server/http';
import { rateLimit } from '@/lib/server/rate-limit';
import { addDoseSchema } from '@/shared/glp1';

/** Logs a dose now (or at noon of an earlier `date`). The dose text is the user's own words. */
export const POST = handle(async (request) => {
  const userId = await requireUserId(request);
  rateLimit(`dose:${userId}`, 30, 24 * 60 * 60 * 1000);
  const body = addDoseSchema.parse(await readJson(request));
  const [row] = await db
    .insert(doseLogs)
    .values({
      userId,
      takenAt: loggedAtFor(body.date, await userTimeZone(userId)),
      doseLabel: body.doseLabel || null,
      site: body.site ?? null,
      note: body.note || null,
    })
    .returning();
  return Response.json({ dose: toDoseLog(row) }, { status: 201 });
});
