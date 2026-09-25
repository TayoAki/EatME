import { db } from '@/db';
import { symptomLogs } from '@/db/schema';
import { requireUserId } from '@/lib/server/auth';
import { loggedAtFor, userTimeZone } from '@/lib/server/day';
import { toSymptomLog } from '@/lib/server/dto';
import { handle, readJson } from '@/lib/server/http';
import { rateLimit } from '@/lib/server/rate-limit';
import { addSymptomsSchema } from '@/shared/glp1';

/** Logs how the user feels: one or more side effects with one severity. */
export const POST = handle(async (request) => {
  const userId = await requireUserId(request);
  rateLimit(`symptoms:${userId}`, 60, 24 * 60 * 60 * 1000);
  const body = addSymptomsSchema.parse(await readJson(request));
  const [row] = await db
    .insert(symptomLogs)
    .values({
      userId,
      loggedAt: loggedAtFor(body.date, await userTimeZone(userId)),
      symptoms: [...new Set(body.symptoms)],
      severity: body.severity,
      note: body.note || null,
    })
    .returning();
  return Response.json({ entry: toSymptomLog(row) }, { status: 201 });
});
