import { and, desc, eq, gte, lt, max, sql } from 'drizzle-orm';

import { db } from '@/db';
import { characterDays, meals, users, waterLogs } from '@/db/schema';
import {
  characterSchema,
  DAY_XP,
  earnedGear,
  levelFor,
  levelStart,
  MAX_LEVEL,
  type CharacterBody,
  type CharacterResponse,
  type DayFlags,
  type StoredCharacter,
} from '@/shared/character';

import { dayBounds } from './day';
import { toProfile } from './dto';
import { HttpError } from './http';
import { getStreak, localDate } from './streak';

/** The first time, days are looked at as far back as the streak goes; after that, the last two weeks (meals can be logged on earlier days). */
const BACKFILL_DAYS = 400;
const RECENT_DAYS = 15;

type User = typeof users.$inferSelect;

function shiftDate(isoDate: string, days: number) {
  const d = new Date(`${isoDate}T12:00:00Z`);
  d.setUTCDate(d.getUTCDate() + days);
  return d.toISOString().slice(0, 10);
}

/**
 * Brings `character_days` up to date from the person's own logs and current goals (CHARACTER.md §3): a day's flags
 * only ever turn on, so deleting a meal later never takes XP back.
 */
async function syncDays(user: User, today: string) {
  const [{ latest }] = await db.select({ latest: max(characterDays.date) }).from(characterDays).where(eq(characterDays.userId, user.id));
  const from = shiftDate(today, -(latest ? RECENT_DAYS : BACKFILL_DAYS));
  const timeZone = user.timezone;
  const start = dayBounds(from, timeZone).start;
  const end = dayBounds(today, timeZone).end;
  const profile = toProfile(user);

  const mealDay = sql<string>`to_char(${meals.loggedAt} at time zone ${timeZone}, 'YYYY-MM-DD')`;
  const mealRows = await db
    .select({
      day: mealDay,
      proteinG: sql<number>`coalesce(sum(${meals.proteinG}), 0)::int`,
      fiberG: sql<number>`coalesce(sum(${meals.fiberG}), 0)::int`,
    })
    .from(meals)
    .where(and(eq(meals.userId, user.id), eq(meals.status, 'completed'), gte(meals.loggedAt, start), lt(meals.loggedAt, end)))
    // By position: the day expression binds the time zone as a parameter (as in the weekly insights).
    .groupBy(sql`1`);
  const waterDay = sql<string>`to_char(${waterLogs.loggedAt} at time zone ${timeZone}, 'YYYY-MM-DD')`;
  const waterRows = await db
    .select({ day: waterDay, waterMl: sql<number>`sum(${waterLogs.amountMl})::int` })
    .from(waterLogs)
    .where(and(eq(waterLogs.userId, user.id), gte(waterLogs.loggedAt, start), lt(waterLogs.loggedAt, end)))
    .groupBy(sql`1`);

  const days = new Map<string, DayFlags>();
  const flagsOf = (day: string) => days.get(day) ?? days.set(day, { showedUp: false, protein: false, water: false, fiber: false }).get(day)!;
  for (const row of mealRows) {
    const flags = flagsOf(row.day);
    flags.showedUp = true;
    flags.protein = !!profile.dailyProteinG && row.proteinG >= profile.dailyProteinG;
    flags.fiber = row.fiberG >= profile.dailyFiberG;
  }
  for (const row of waterRows) flagsOf(row.day).water = row.waterMl >= profile.dailyWaterMl;

  const earned = [...days.entries()].filter(([, f]) => f.showedUp || f.protein || f.water || f.fiber);
  if (earned.length === 0) return;
  await db
    .insert(characterDays)
    .values(earned.map(([date, f]) => ({ userId: user.id, date, ...f })))
    .onConflictDoUpdate({
      target: [characterDays.userId, characterDays.date],
      set: {
        showedUp: sql`${characterDays.showedUp} or excluded.showed_up`,
        protein: sql`${characterDays.protein} or excluded.protein`,
        water: sql`${characterDays.water} or excluded.water`,
        fiber: sql`${characterDays.fiber} or excluded.fiber`,
      },
    });
}

/** A stored character read with today's schema: options added later get their defaults (a look saved before builds is medium). */
function readCharacter(stored: StoredCharacter | null): StoredCharacter | null {
  if (!stored) return null;
  const parsed = characterSchema.safeParse(stored);
  return parsed.success ? { ...parsed.data, madeAt: stored.madeAt } : null;
}

/** The character, its level and stats, after bringing the days up to date (`GET /api/character`). */
export async function characterFor(userId: string, { sync = true } = {}): Promise<CharacterResponse> {
  const user = await db.query.users.findFirst({ where: eq(users.id, userId) });
  if (!user) throw new HttpError(404, 'Profile not found');
  const today = localDate(new Date(), user.timezone);
  if (sync) await syncDays(user, today);

  const [totals] = await db
    .select({
      daysShownUp: sql<number>`count(*) filter (where ${characterDays.showedUp})::int`,
      proteinDays: sql<number>`count(*) filter (where ${characterDays.protein})::int`,
      waterDays: sql<number>`count(*) filter (where ${characterDays.water})::int`,
      fiberDays: sql<number>`count(*) filter (where ${characterDays.fiber})::int`,
    })
    .from(characterDays)
    .where(eq(characterDays.userId, user.id));
  const [todayRow] = await db
    .select()
    .from(characterDays)
    .where(and(eq(characterDays.userId, user.id), eq(characterDays.date, today)));
  // The streak and the last day shown up follow the meals as they are now, like Home's streak (XP never goes down,
  // but a deleted day breaks the streak there too); the days kept here only answer for longer ago.
  const streak = await getStreak(user.id, user.timezone);
  const [longAgo] = streak.loggedDates.length
    ? []
    : await db
        .select({ date: characterDays.date })
        .from(characterDays)
        .where(and(eq(characterDays.userId, user.id), eq(characterDays.showedUp, true)))
        .orderBy(desc(characterDays.date))
        .limit(1);
  // Each flag earns its own XP, so the total is the sum over the counts (CHARACTER.md §3).
  const xp =
    DAY_XP.showedUp * totals.daysShownUp + DAY_XP.protein * totals.proteinDays + DAY_XP.water * totals.waterDays + DAY_XP.fiber * totals.fiberDays;
  const level = levelFor(xp);

  return {
    character: readCharacter(user.character),
    level,
    xp,
    levelStart: levelStart(level),
    nextLevelStart: level < MAX_LEVEL ? levelStart(level + 1) : null,
    stats: { ...totals, streak: streak.current },
    today: {
      date: today,
      showedUp: !!todayRow?.showedUp,
      protein: !!todayRow?.protein,
      water: !!todayRow?.water,
      fiber: !!todayRow?.fiber,
    },
    lastShowedUp: streak.loggedDates.at(-1) ?? longAgo?.date ?? null,
    gear: earnedGear(level),
  };
}

/** Saves the look, the name and the worn gear (only gear the level has earned), keeping when it was first made. */
export async function saveCharacter(userId: string, body: CharacterBody): Promise<CharacterResponse> {
  const current = await characterFor(userId, { sync: false });
  const earned = new Set<string>(current.gear);
  const stored: StoredCharacter = {
    name: body.name,
    look: body.look,
    gear: Object.fromEntries(Object.entries(body.gear).filter(([key, on]) => on && earned.has(key))),
    madeAt: current.character?.madeAt ?? new Date().toISOString(),
  };
  await db.update(users).set({ character: stored }).where(eq(users.id, userId));
  return { ...current, character: stored };
}
