import { requireUserId } from '@/lib/server/auth';
import { deleteMeasurements, saveMeasurements } from '@/lib/server/body';
import { DATE_RE, userTimeZone } from '@/lib/server/day';
import { handle, HttpError, readJson } from '@/lib/server/http';
import { rateLimit } from '@/lib/server/rate-limit';
import { localDate } from '@/lib/server/streak';
import { measurementsSchema } from '@/shared/body';

async function checkDate(userId: string, date: string) {
  if (!DATE_RE.test(date)) throw new HttpError(404, 'Not found');
  if (date > localDate(new Date(), await userTimeZone(userId))) throw new HttpError(400, "You can't log things in the future.");
}

/** Saves the day's measurements (cm), replacing that day's entry. */
export const PUT = handle<{ date: string }>(async (request, { date }) => {
  const userId = await requireUserId(request);
  rateLimit(`body-measurements:${userId}`, 120, 60 * 60 * 1000);
  await checkDate(userId, date);
  const body = measurementsSchema.parse(await readJson(request));
  return Response.json({ measurement: await saveMeasurements(userId, date, body) });
});

export const DELETE = handle<{ date: string }>(async (request, { date }) => {
  const userId = await requireUserId(request);
  if (!DATE_RE.test(date)) throw new HttpError(404, 'Not found');
  await deleteMeasurements(userId, date);
  return Response.json({ deleted: true });
});
