import { db } from '@/db';
import { doseLogs } from '@/db/schema';
import { requireUserId } from '@/lib/server/auth';
import { loggedAtFor, userTimeZone } from '@/lib/server/day';
import { toDoseLog } from '@/lib/server/dto';
import { ensureMedication, medicineForDose } from '@/lib/server/glp1';
import { handle, readJson } from '@/lib/server/http';
import { rateLimit } from '@/lib/server/rate-limit';
import { addDoseSchema } from '@/shared/glp1';

/**
 * Logs a dose now (or at noon of an earlier `date`) for the current medicine. The dose text is the
 * user's own words; a logged dose also counts one down in Pens & vials.
 */
export const POST = handle(async (request) => {
  const userId = await requireUserId(request);
  rateLimit(`dose:${userId}`, 30, 24 * 60 * 60 * 1000);
  const body = addDoseSchema.parse(await readJson(request));
  const current = await ensureMedication(userId);
  const takenAt = loggedAtFor(body.date, await userTimeZone(userId));
  const medicationId = await medicineForDose(userId, body.date, current);
  const [row] = await db
    .insert(doseLogs)
    .values({
      userId,
      takenAt,
      doseLabel: body.doseLabel || null,
      site: body.site ?? null,
      side: body.site ? (body.side ?? null) : null,
      medicationId,
      note: body.note || null,
    })
    .returning();
  return Response.json({ dose: toDoseLog(row) }, { status: 201 });
});
