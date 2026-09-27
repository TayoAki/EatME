import { and, desc, eq, gte } from 'drizzle-orm';

import { db } from '@/db';
import { doseLogs, glp1Medications, symptomLogs, users } from '@/db/schema';
import { requireUserId } from '@/lib/server/auth';
import { toDoseLog, toProfile, toSymptomLog } from '@/lib/server/dto';
import { ensureMedication, lastSiteOf, medicinesOf, saveSettings, supplyOf, toMedicine } from '@/lib/server/glp1';
import { handle, HttpError, readJson } from '@/lib/server/http';
import { localDate } from '@/lib/server/streak';
import { glp1SettingsSchema, medicineDetailsSchema, nextDoseDate, type Glp1Response } from '@/shared/glp1';

const DOSE_HISTORY_DAYS = 84;
const SYMPTOM_HISTORY_DAYS = 30;
const daysAgo = (days: number) => new Date(Date.now() - days * 24 * 60 * 60 * 1000);

/** GLP-1 mode: settings, the medicine and its history, supply, recent doses and side effects. */
export const GET = handle(async (request) => {
  const userId = await requireUserId(request);
  const current = await ensureMedication(userId);
  const user = await db.query.users.findFirst({ where: eq(users.id, userId), columns: { glp1: true, timezone: true } });
  if (!user) throw new HttpError(404, 'Profile not found');

  const [doses, symptoms, medicines, supply, lastSite] = await Promise.all([
    db
      .select()
      .from(doseLogs)
      .where(and(eq(doseLogs.userId, userId), gte(doseLogs.takenAt, daysAgo(DOSE_HISTORY_DAYS))))
      .orderBy(desc(doseLogs.takenAt)),
    db
      .select()
      .from(symptomLogs)
      .where(and(eq(symptomLogs.userId, userId), gte(symptomLogs.loggedAt, daysAgo(SYMPTOM_HISTORY_DAYS))))
      .orderBy(desc(symptomLogs.loggedAt)),
    medicinesOf(userId),
    current ? supplyOf(current, user.timezone) : null,
    lastSiteOf(userId),
  ]);

  const today = localDate(new Date(), user.timezone);
  const takenToday = doses.some((d) => localDate(d.takenAt, user.timezone) === today);
  const response: Glp1Response = {
    current: current ? toMedicine(current) : null,
    history: medicines.filter((m) => m.endedOn !== null).map(toMedicine),
    supply,
    lastSite,
    settings: user.glp1,
    doses: doses.map(toDoseLog),
    symptoms: symptoms.map(toSymptomLog),
    today,
    nextDose: user.glp1 ? nextDoseDate(user.glp1, today, takenToday) : null,
    takenToday,
  };
  return Response.json(response);
});

/**
 * Turns GLP-1 mode on or updates it (`{ settings, medicine? }`); `{ settings: null }` turns it off
 * (logs are kept). A different medicine starts today and the previous one moves to the history.
 */
export const PUT = handle(async (request) => {
  const userId = await requireUserId(request);
  const body = (await readJson(request)) as { settings?: unknown; medicine?: unknown };
  const settings = body?.settings === null ? null : glp1SettingsSchema.parse(body?.settings);
  const details = medicineDetailsSchema.parse(body?.medicine ?? {});
  await saveSettings(userId, settings, details);
  const row = await db.query.users.findFirst({ where: eq(users.id, userId) });
  if (!row) throw new HttpError(404, 'Profile not found');
  return Response.json({ user: toProfile(row) });
});

/** Turns GLP-1 mode off and deletes every medicine, dose, side-effect entry and supply count. */
export const DELETE = handle(async (request) => {
  const userId = await requireUserId(request);
  await db.transaction(async (tx) => {
    await tx.delete(doseLogs).where(eq(doseLogs.userId, userId));
    await tx.delete(symptomLogs).where(eq(symptomLogs.userId, userId));
    await tx.delete(glp1Medications).where(eq(glp1Medications.userId, userId));
    await tx.update(users).set({ glp1: null }).where(eq(users.id, userId));
  });
  return Response.json({ deleted: true });
});
