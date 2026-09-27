import { and, asc, desc, eq, gt, gte, isNotNull, isNull, sql } from 'drizzle-orm';

import { db, type Executor } from '@/db';
import { doseLogs, glp1Medications, users, type Glp1MedicationRow } from '@/db/schema';
import {
  defaultForm,
  formsFor,
  replaySupply,
  type Glp1Medicine,
  type Glp1Settings,
  type LastSite,
  type MedicineDetails,
  type MedicineForm,
  type SupplyBody,
  type SupplyStatus,
  type SwitchMedicineBody,
  type UpdateMedicineBody,
} from '@/shared/glp1';

import { dayBounds } from './day';
import { HttpError } from './http';
import { localDate } from './streak';

/**
 * GLP-1 mode (v2.2): one current medicine and the ones before it. `users.glp1` stays the on/off
 * switch and mirrors the current medicine, so older apps keep working. The medicine name (Other)
 * is health data: it never goes into logs or notifications.
 */

export function toMedicine(row: Glp1MedicationRow): Glp1Medicine {
  return {
    id: row.id,
    medication: row.medication,
    name: row.name,
    form: row.form,
    schedule: row.schedule,
    doseWeekday: row.doseWeekday,
    startedOn: row.startedOn,
    endedOn: row.endedOn,
  };
}

const mirror = (row: Pick<Glp1MedicationRow, 'medication' | 'schedule' | 'doseWeekday'>): Glp1Settings => ({
  medication: row.medication,
  schedule: row.schedule,
  doseWeekday: row.schedule === 'daily' ? null : row.doseWeekday,
});

export async function currentMedication(userId: string, tx: Executor = db) {
  const [row] = await tx
    .select()
    .from(glp1Medications)
    .where(and(eq(glp1Medications.userId, userId), isNull(glp1Medications.endedOn)))
    .limit(1);
  return row ?? null;
}

/** The user row, locked until the transaction ends, so two changes can't interleave. */
async function lockUser(tx: Executor, userId: string) {
  const [user] = await tx
    .select({ glp1: users.glp1, timezone: users.timezone })
    .from(users)
    .where(eq(users.id, userId))
    .for('update');
  if (!user) throw new HttpError(404, 'Profile not found');
  return user;
}

/**
 * The current medicine, created from `users.glp1` the first time (accounts from before medicine
 * history): it starts on the first dose logged, and those doses move to it. Safe to repeat.
 */
export async function ensureMedication(userId: string) {
  const current = await currentMedication(userId);
  if (current) return current;
  return db.transaction(async (tx) => {
    const user = await lockUser(tx, userId);
    if (!user.glp1) return null;
    const existing = await currentMedication(userId, tx);
    if (existing) return existing;
    const [first] = await tx
      .select({ takenAt: doseLogs.takenAt })
      .from(doseLogs)
      .where(and(eq(doseLogs.userId, userId), isNull(doseLogs.medicationId)))
      .orderBy(asc(doseLogs.takenAt))
      .limit(1);
    const [row] = await tx
      .insert(glp1Medications)
      .values({
        userId,
        ...mirror(user.glp1),
        form: defaultForm(user.glp1.medication),
        startedOn: localDate(first?.takenAt ?? new Date(), user.timezone),
      })
      .returning();
    await tx
      .update(doseLogs)
      .set({ medicationId: row.id })
      .where(and(eq(doseLogs.userId, userId), isNull(doseLogs.medicationId)));
    return row;
  });
}

function checkForm(medication: Glp1Settings['medication'], form: MedicineForm | undefined) {
  if (form && !formsFor(medication).includes(form)) throw new HttpError(400, "That medicine doesn't come in that form.");
  return form ?? defaultForm(medication);
}

/** Only "Other" keeps a name; an empty name is none. */
const nameFor = (medication: Glp1Settings['medication'], name: string | null | undefined) =>
  medication === 'other' ? name?.trim() || null : null;

/**
 * Ends a medicine on `endDate`. One that started that day and has no doses was a mistake, not a
 * medicine taken: it is removed instead of filling the history.
 */
async function closeMedication(tx: Executor, row: Glp1MedicationRow, endDate: string) {
  if (row.startedOn >= endDate) {
    const [dose] = await tx.select({ id: doseLogs.id }).from(doseLogs).where(eq(doseLogs.medicationId, row.id)).limit(1);
    if (!dose) {
      await tx.delete(glp1Medications).where(eq(glp1Medications.id, row.id));
      return;
    }
  }
  await tx.update(glp1Medications).set({ endedOn: endDate }).where(eq(glp1Medications.id, row.id));
}

type NewMedicine = Glp1Settings & { name?: string | null; form?: MedicineForm; startsOn: string; moveDoses?: boolean };

/**
 * Ends the current medicine on `startsOn` and starts the new one that day. Doses already logged
 * from that day on count for the new medicine, unless `moveDoses` is false (a switch today after
 * logging the last dose of the old one).
 */
async function switchTo(tx: Executor, userId: string, timeZone: string, current: Glp1MedicationRow | null, next: NewMedicine) {
  const today = localDate(new Date(), timeZone);
  if (next.startsOn > today) throw new HttpError(400, "The new medicine can't start in the future.");
  if (current && next.startsOn < current.startedOn) {
    throw new HttpError(400, "The new medicine can't start before the current one did.");
  }
  const form = checkForm(next.medication, next.form);
  if (current) {
    await tx.update(glp1Medications).set({ endedOn: next.startsOn }).where(eq(glp1Medications.id, current.id));
  }
  const [row] = await tx
    .insert(glp1Medications)
    .values({ userId, ...mirror(next), name: nameFor(next.medication, next.name), form, startedOn: next.startsOn })
    .returning();
  if (current && next.moveDoses !== false) {
    await tx
      .update(doseLogs)
      .set({ medicationId: row.id })
      .where(and(eq(doseLogs.medicationId, current.id), gte(doseLogs.takenAt, dayBounds(next.startsOn, timeZone).start)));
  }
  if (current) {
    // The old medicine may now have no doses at all (a correction on its first day).
    const [ended] = await tx.select().from(glp1Medications).where(eq(glp1Medications.id, current.id));
    if (ended) await closeMedication(tx, ended, next.startsOn);
  }
  await tx.update(users).set({ glp1: mirror(row) }).where(eq(users.id, userId));
  return row;
}

/**
 * `PUT /api/glp1`: turns GLP-1 mode on, changes the schedule, or turns it off (`null`). A
 * different medicine is a switch that starts today (older apps change the medicine this way).
 */
export async function saveSettings(userId: string, settings: Glp1Settings | null, details: MedicineDetails = {}) {
  await ensureMedication(userId);
  return db.transaction(async (tx) => {
    const user = await lockUser(tx, userId);
    const current = await currentMedication(userId, tx);
    const today = localDate(new Date(), user.timezone);
    if (settings === null) {
      if (current) await closeMedication(tx, current, today);
      await tx.update(users).set({ glp1: null }).where(eq(users.id, userId));
      return;
    }
    if (!current || current.medication !== settings.medication) {
      // Older apps change the medicine here: doses already logged stay with the old one.
      await switchTo(tx, userId, user.timezone, current, { ...settings, ...details, startsOn: today, moveDoses: false });
      return;
    }
    const form = details.form ? checkForm(settings.medication, details.form) : current.form;
    await tx
      .update(glp1Medications)
      .set({
        ...mirror(settings),
        form,
        ...(details.name !== undefined ? { name: nameFor(settings.medication, details.name) } : {}),
      })
      .where(eq(glp1Medications.id, current.id));
    await tx.update(users).set({ glp1: mirror(settings) }).where(eq(users.id, userId));
  });
}

/** `POST /api/glp1/switch`: the new medicine from `startsOn` (today by default). */
export async function switchMedicine(userId: string, body: SwitchMedicineBody) {
  await ensureMedication(userId);
  return db.transaction(async (tx) => {
    const user = await lockUser(tx, userId);
    const current = await currentMedication(userId, tx);
    return switchTo(tx, userId, user.timezone, current, {
      ...body,
      startsOn: body.startsOn ?? localDate(new Date(), user.timezone),
    });
  });
}

/** `PATCH /api/glp1/medications/:id`: fix a name, the form or the dates. Periods can't overlap. */
export async function updateMedicine(userId: string, id: string, body: UpdateMedicineBody) {
  return db.transaction(async (tx) => {
    const user = await lockUser(tx, userId);
    const rows = await tx
      .select()
      .from(glp1Medications)
      .where(eq(glp1Medications.userId, userId))
      .orderBy(asc(glp1Medications.startedOn), asc(glp1Medications.createdAt));
    const row = rows.find((r) => r.id === id);
    if (!row) throw new HttpError(404, 'Medicine not found');

    const today = localDate(new Date(), user.timezone);
    const next = { ...row };
    if (body.name !== undefined) {
      if (row.medication !== 'other') throw new HttpError(400, 'Only "Other" medicines have a name to change.');
      next.name = nameFor('other', body.name);
    }
    if (body.form !== undefined) next.form = checkForm(row.medication, body.form);
    if (body.startedOn !== undefined) next.startedOn = body.startedOn;
    if (body.endedOn !== undefined) {
      if (row.endedOn === null) throw new HttpError(400, 'Use "Switch medicine" or turn GLP-1 mode off to end the current medicine.');
      next.endedOn = body.endedOn;
    }
    if (next.startedOn > today || (next.endedOn !== null && next.endedOn > today)) {
      throw new HttpError(400, "Dates can't be in the future.");
    }
    if (next.endedOn !== null && next.endedOn < next.startedOn) throw new HttpError(400, 'A medicine has to end after it starts.');

    const timeline = rows.map((r) => (r.id === id ? next : r)).sort((a, b) => a.startedOn.localeCompare(b.startedOn));
    const current = timeline.findIndex((r) => r.endedOn === null);
    const overlaps = timeline.some((r, i) => i > 0 && (timeline[i - 1].endedOn === null || timeline[i - 1].endedOn! > r.startedOn));
    if (overlaps || (current !== -1 && current !== timeline.length - 1)) {
      throw new HttpError(400, 'Those dates overlap with another medicine.');
    }
    const [saved] = await tx
      .update(glp1Medications)
      .set({ name: next.name, form: next.form, startedOn: next.startedOn, endedOn: next.endedOn })
      .where(eq(glp1Medications.id, id))
      .returning();
    return saved;
  });
}

/** Every medicine of the user, the current one first, then the latest. */
export async function medicinesOf(userId: string) {
  return db
    .select()
    .from(glp1Medications)
    .where(eq(glp1Medications.userId, userId))
    .orderBy(sql`${glp1Medications.endedOn} is null desc`, desc(glp1Medications.startedOn));
}

const hasSupply = (row: Glp1MedicationRow) =>
  row.dosesPerContainer !== null && row.countStartedAt !== null && row.dosesLeftAtCount !== null && row.unopenedAtCount !== null;

/** Pens & vials for a medicine: the counts replayed with the doses logged since. Null when not set up. */
export async function supplyOf(row: Glp1MedicationRow, timeZone: string): Promise<SupplyStatus | null> {
  if (!hasSupply(row)) return null;
  const doses = await db
    .select({ takenAt: doseLogs.takenAt })
    .from(doseLogs)
    .where(and(eq(doseLogs.medicationId, row.id), gt(doseLogs.takenAt, row.countStartedAt!)))
    .orderBy(asc(doseLogs.takenAt));
  const replay = replaySupply(
    {
      dosesPerContainer: row.dosesPerContainer!,
      dosesLeft: row.dosesLeftAtCount!,
      unopened: row.unopenedAtCount!,
      openedOn: row.openedOn,
      countDate: localDate(row.countStartedAt!, timeZone),
      useWithinDays: row.useWithinDays,
      lowSupplyAt: row.lowSupplyAt,
    },
    doses.map((d) => localDate(d.takenAt, timeZone)),
  );
  return {
    form: row.form,
    dosesPerContainer: row.dosesPerContainer!,
    ...replay,
    useWithinDays: row.useWithinDays,
    lowSupplyAt: row.lowSupplyAt,
    remindUseBy: row.remindUseBy,
    remindLow: row.remindLow,
  };
}

/** `PUT /api/glp1/supply`: set up or fix the counts; counting starts again from now. */
export async function saveSupply(userId: string, body: SupplyBody, timeZone: string) {
  const current = await ensureMedication(userId);
  if (!current) throw new HttpError(409, 'Turn on GLP-1 mode first.');
  const form = checkForm(current.medication, body.form);
  const today = localDate(new Date(), timeZone);
  if (body.openedOn && body.openedOn > today) throw new HttpError(400, "The opening date can't be in the future.");
  const [row] = await db
    .update(glp1Medications)
    .set({
      form,
      dosesPerContainer: body.dosesPerContainer,
      countStartedAt: new Date(),
      dosesLeftAtCount: body.dosesLeft,
      unopenedAtCount: body.unopened,
      // Nothing open, nothing to date.
      openedOn: body.dosesLeft > 0 ? (body.openedOn ?? null) : null,
      useWithinDays: body.useWithinDays ?? null,
      lowSupplyAt: body.lowSupplyAt,
      remindUseBy: body.remindUseBy,
      remindLow: body.remindLow,
    })
    .where(eq(glp1Medications.id, current.id))
    .returning();
  return supplyOf(row, timeZone);
}

/** Stops tracking Pens & vials for the current medicine. */
export async function clearSupply(userId: string) {
  const current = await ensureMedication(userId);
  if (!current) return;
  await db
    .update(glp1Medications)
    .set({ dosesPerContainer: null, countStartedAt: null, dosesLeftAtCount: null, unopenedAtCount: null, openedOn: null, useWithinDays: null })
    .where(eq(glp1Medications.id, current.id));
}

/** Most unopened pens, vials or packs EatME counts (after a refill). */
const MAX_UNOPENED = 60;

/** `POST /api/glp1/supply/refill`: a new count from what is left now, plus the new unopened ones. */
export async function refillSupply(userId: string, containers: number, timeZone: string) {
  const current = await ensureMedication(userId);
  if (!current) throw new HttpError(409, 'Turn on GLP-1 mode first.');
  const supply = await supplyOf(current, timeZone);
  if (!supply) throw new HttpError(409, 'Set up Pens & vials first.');
  if (supply.unopened + containers > MAX_UNOPENED) throw new HttpError(400, `EatME counts up to ${MAX_UNOPENED} unopened.`);
  const [row] = await db
    .update(glp1Medications)
    .set({
      countStartedAt: new Date(),
      dosesLeftAtCount: supply.openLeft,
      unopenedAtCount: supply.unopened + containers,
      openedOn: supply.openLeft > 0 ? supply.openedOn : null,
    })
    .where(eq(glp1Medications.id, current.id))
    .returning();
  return supplyOf(row, timeZone);
}

/**
 * The medicine a dose belongs to: the current one for a dose taken now; for an earlier day, the
 * medicine taken then (the one that started later on a switch day). A day before the current
 * medicine started that no earlier medicine covers moves its start back to that day.
 */
export async function medicineForDose(userId: string, date: string | undefined, current: Glp1MedicationRow | null) {
  if (!date || !current || date >= current.startedOn) return current?.id ?? null;
  const medicines = await medicinesOf(userId);
  const covering = medicines
    .filter((m) => m.startedOn <= date && (m.endedOn === null || date <= m.endedOn))
    .sort((a, b) => b.startedOn.localeCompare(a.startedOn))[0];
  if (covering) return covering.id;
  const laterEnd = medicines.some((m) => m.id !== current.id && m.endedOn !== null && m.endedOn > date);
  if (laterEnd) return current.id;
  await db.update(glp1Medications).set({ startedOn: date }).where(eq(glp1Medications.id, current.id));
  return current.id;
}

/** The last dose with an injection site, of any medicine. */
export async function lastSiteOf(userId: string): Promise<LastSite | null> {
  const [row] = await db
    .select({ site: doseLogs.site, side: doseLogs.side, takenAt: doseLogs.takenAt })
    .from(doseLogs)
    .where(and(eq(doseLogs.userId, userId), isNotNull(doseLogs.site)))
    .orderBy(desc(doseLogs.takenAt))
    .limit(1);
  return row?.site ? { site: row.site, side: row.side, takenAt: row.takenAt.toISOString() } : null;
}
