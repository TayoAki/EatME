import { and, count, eq, gte, isNull, lt, ne, or, sql } from 'drizzle-orm';
import { z } from 'zod';

import { db } from '@/db';
import { chainItemReports, chainItems, chains, meals, menuScans, users, type ChainItemRow, type MealRow, type MenuScanRow, type User } from '@/db/schema';
import { MIN_CHOICE_KCAL, slotOf, slotTimes, type DraftSlot } from '@/shared/day-draft';
import { scaleNutrition, type MealConfidence } from '@/shared/meals';
import { laterMeals, rankMenu, type MenuDay, type MenuDish, type MenuFit, type RankedDish } from '@/shared/menu-fit';
import {
  estimateRange,
  MAX_MENU_PHOTOS,
  MENU_SCAN_KEEP_DAYS,
  PRICED_DISHES,
  type ChainItemReportBody,
  type ChainMenuResponse,
  type ChainSummary,
  type DishLine,
  type MenuList,
  type MenuRef,
  type MenuRow,
  type MenuScanResponse,
  type MenuScanSummary,
  type OrderDishBody,
  type ScanDish,
  type ScanDishItem,
} from '@/shared/menus';
import { scaleNutrients } from '@/shared/nutrients';
import { minimumCalories } from '@/shared/nutrition';

import { requireMenuConsent } from './ai-consent';
import { checkAiLimit, hasPremiumAccess } from './billing';
import { dayBounds, loggedAtFor } from './day';
import { whatToOrderEnabled } from './experiments';
import { itemTotals, type ComputedItem } from './food-match';
import { applyChange } from './follow-up';
import { HttpError } from './http';
import { describeError } from './log';
import { baseFromNutrients, saveItems } from './meal-analysis';
import { analyzeMenuLines, applyTweak, priceDishes, quickDish, readMenuPhotos } from './menu-analysis';
import { markUsed, personalFoodsFor } from './personal-foods';
import { assertRoomForSavedMeal } from './saved-meals';
import { deleteObject, getObject, isMealPhotoKey, putObject } from './storage';
import { localDate } from './streak';

/**
 * What to order (v2.5, WHAT-TO-ORDER.md): chain menus from our own table and menus read from photos,
 * ranked for what's left of the person's day (`src/shared/menu-fit.ts`), ordered in one tap. Premium,
 * with one free try. The AI never sees the person's targets, what's left, weight or foods to skip.
 */

/** The routes answer 404 while the server switch is off (WHAT_TO_ORDER=false, outages only). */
export function requireWhatToOrder() {
  if (!whatToOrderEnabled()) throw new HttpError(404, 'What to order is turned off for now.');
}

const uuid = z.string().uuid();
/** A `:id` that must be a uuid (anything else is simply not found). */
export function idParam(id: string, what: string) {
  if (!uuid.safeParse(id).success) throw new HttpError(404, `That ${what} wasn't found.`);
  return id;
}

/** The signed-in person, once onboarding is done (their targets shape the ranking). */
export async function menuUser(userId: string) {
  const user = await db.query.users.findFirst({ where: eq(users.id, userId) });
  if (!user?.onboardingCompletedAt) throw new HttpError(409, 'Finish onboarding first.');
  return user;
}

// ── The person's day ────────────────────────────────────────────────────────────────────────────

const MEAL_TIMES_DAYS = 30;

function minutesNow(timeZone: string) {
  const parts = new Intl.DateTimeFormat('en-US', { timeZone, hour: 'numeric', minute: 'numeric', hourCycle: 'h23' }).formatToParts(new Date());
  const part = (type: string) => Number(parts.find((p) => p.type === type)?.value ?? 0);
  return part('hour') * 60 + part('minute');
}

/**
 * Today so far (eaten, in the person's time zone) and the main meals still to come, from their own
 * meal times of the last 30 days, as Plan tomorrow works them out.
 */
export async function menuDay(user: User): Promise<MenuDay> {
  const tz = user.timezone;
  const { start, end } = dayBounds(localDate(new Date(), tz), tz);
  const localMinutes = sql<number>`(extract(hour from ${meals.loggedAt} at time zone ${tz}) * 60 + extract(minute from ${meals.loggedAt} at time zone ${tz}))::int`;
  const [today, history] = await Promise.all([
    db
      .select({ calories: meals.calories, proteinG: meals.proteinG, minutes: localMinutes })
      .from(meals)
      .where(and(eq(meals.userId, user.id), eq(meals.status, 'completed'), gte(meals.loggedAt, start), lt(meals.loggedAt, end))),
    db
      .select({ minutes: localMinutes })
      .from(meals)
      .where(
        and(
          eq(meals.userId, user.id),
          eq(meals.status, 'completed'),
          ne(meals.source, 'drink'),
          gte(meals.calories, MIN_CHOICE_KCAL),
          gte(meals.loggedAt, sql`now() - make_interval(days => ${MEAL_TIMES_DAYS})`),
        ),
      ),
  ]);
  const bySlot: Partial<Record<DraftSlot, number[]>> = {};
  for (const row of history) (bySlot[slotOf(row.minutes)] ??= []).push(row.minutes);
  const logged = new Set(today.filter((m) => (m.calories ?? 0) >= MIN_CHOICE_KCAL).map((m) => slotOf(m.minutes)));
  return {
    target: { calories: user.dailyCalories ?? 2000, proteinG: user.dailyProteinG ?? 0 },
    eaten: today.reduce((sum, m) => ({ calories: sum.calories + (m.calories ?? 0), proteinG: sum.proteinG + (m.proteinG ?? 0) }), { calories: 0, proteinG: 0 }),
    floor: minimumCalories(user.gender),
    glp1: !!user.glp1,
    later: laterMeals(minutesNow(tz), slotTimes(bySlot), logged),
  };
}

// ── Premium with one free try ───────────────────────────────────────────────────────────────────

/**
 * Opens a list ("chain:<slug>" or "scan:<id>"): Premium opens every list; without it the first list
 * is the free try and stays open, any other answers 402 (the app shows the Premium screen).
 */
export async function openList(user: Pick<User, 'id' | 'whatToOrderTry'>, key: string) {
  if (await hasPremiumAccess(user.id)) return { freeTry: false };
  if (user.whatToOrderTry === key) return { freeTry: true };
  if (user.whatToOrderTry === null) {
    const [taken] = await db
      .update(users)
      .set({ whatToOrderTry: key })
      .where(and(eq(users.id, user.id), or(isNull(users.whatToOrderTry), eq(users.whatToOrderTry, key))))
      .returning({ id: users.id });
    if (taken) return { freeTry: true };
  }
  throw new HttpError(402, 'What to order is part of Weight Class Premium. Your free try was used.', 'premium_required');
}

/** A free try that never showed a list (the menu couldn't be read) is given back. */
async function giveBackFreeTry(userId: string, key: string) {
  await db.update(users).set({ whatToOrderTry: null }).where(and(eq(users.id, userId), eq(users.whatToOrderTry, key)));
}

// ── Rows of a list ──────────────────────────────────────────────────────────────────────────────

type RowBase = Omit<MenuRow, 'variant' | 'rankedCalories' | 'fit' | 'reason' | 'overBudget'>;

const round = (value: number | undefined) => Math.round(value ?? 0);

/** "1 sandwich" says nothing a person needs; "Medium (16 fl oz)" or "8 ct" does. */
const plainServing = (serving: string) => /^1\s+(each|ea|item|serving|order|sandwich|burger|wrap|bowl|salad|burrito|taco)s?$/i.test(serving.trim());

function chainBase(item: ChainItemRow): RowBase {
  const n = item.nutrients;
  return {
    key: item.id,
    name: item.name,
    section: item.section,
    serving: plainServing(item.serving) ? null : item.serving,
    description: null,
    kind: item.kind,
    source: 'chain',
    calories: item.calories,
    proteinG: round(n.protein),
    carbsG: round(n.carbs),
    fatG: round(n.fat),
    range: null,
    citation: { chain: item.chain, sourceUrl: item.sourceUrl, checkedOn: item.checkedOn },
    foods: [],
    tweaks: [],
    question: null,
  };
}

function scanBase(dish: ScanDish): RowBase {
  const n = dish.nutrients;
  return {
    key: String(dish.n),
    name: dish.name,
    section: dish.section,
    serving: null,
    description: dish.description,
    kind: dish.kind,
    source: dish.source,
    calories: round(n.calories),
    proteinG: round(n.protein),
    carbsG: round(n.carbs),
    fatG: round(n.fat),
    range: dish.range,
    citation: null,
    foods: dish.items.map((item) => ({ name: item.name, grams: Math.round(item.grams) })),
    tweaks: dish.tweaks.map((t) => ({ label: t.label, calories: t.calories, proteinG: t.proteinG })),
    question: dish.question && {
      kind: dish.question.kind,
      question: dish.question.question,
      about: dish.question.about,
      options: dish.question.options.map((o) => ({ label: o.label, calories: o.calories })),
    },
  };
}

const asMenuDish = (base: RowBase): MenuDish => ({
  key: base.key,
  name: base.name,
  description: base.description,
  section: base.section,
  kind: base.kind,
  serving: base.serving,
  numbers: { calories: base.calories, proteinG: base.proteinG, carbsG: base.carbsG, fatG: base.fatG },
  range: base.range,
  source: base.source,
});

/** A ranked order as a row: a half portion shows half the numbers. */
function toRow(base: RowBase, ranked: RankedDish): MenuRow {
  const share = ranked.variant === 'half' ? 0.5 : 1;
  return {
    ...base,
    calories: Math.round(base.calories * share),
    proteinG: Math.round(base.proteinG * share),
    carbsG: Math.round(base.carbsG * share),
    fatG: Math.round(base.fatG * share),
    range: base.range && { low: Math.round(base.range.low * share), high: Math.round(base.range.high * share) },
    foods: base.foods.map((food) => ({ ...food, grams: Math.round(food.grams * share) })),
    variant: ranked.variant,
    rankedCalories: ranked.calories,
    fit: ranked.fit,
    reason: ranked.reason,
    overBudget: ranked.overBudget,
  };
}

function listFrom(fit: MenuFit, bases: readonly RowBase[], freeTry: boolean): MenuList {
  const byKey = new Map(bases.map((base) => [base.key, base]));
  const rows = (list: readonly RankedDish[]) => list.flatMap((ranked) => (byKey.has(ranked.key) ? [toRow(byKey.get(ranked.key)!, ranked)] : []));
  return {
    state: fit.state,
    left: fit.left,
    aim: fit.aim,
    closeCall: fit.closeCall,
    fitsWell: rows(fit.fitsWell),
    others: rows(fit.others),
    hiddenCount: fit.hidden.length,
    hidden: rows(fit.hidden),
    freeTry,
  };
}

/** Ranks dishes for the person's day and foods to skip. */
async function rankedList(user: User, bases: readonly RowBase[], freeTry: boolean) {
  const fit = rankMenu(bases.map(asMenuDish), await menuDay(user), user.preferences.foodsToSkip ?? []);
  return listFrom(fit, bases, freeTry);
}

// ── Chains ──────────────────────────────────────────────────────────────────────────────────────

/** Chains whose name has the words typed ("mcd", "chick fil"), biggest first; all of them for an empty search. */
export async function searchChains(q: string): Promise<ChainSummary[]> {
  const term = q.toLowerCase().replace(/[^a-z0-9]/g, '').slice(0, 40);
  const rows = await db
    .select({
      slug: chains.slug,
      name: chains.name,
      items: count(chainItems.id),
      checkedOn: sql<string>`min(${chainItems.checkedOn})::text`,
    })
    .from(chains)
    .innerJoin(chainItems, and(eq(chainItems.chainSlug, chains.slug), eq(chainItems.status, 'live')))
    .where(term ? sql`regexp_replace(lower(${chains.name}), '[^a-z0-9]', '', 'g') like ${`%${term}%`}` : undefined)
    .groupBy(chains.slug, chains.name, chains.rank)
    .orderBy(sql`${chains.rank} asc nulls last`, chains.name)
    .limit(40);
  return rows.map((row) => ({ slug: row.slug, name: row.name, items: Number(row.items), checkedOn: row.checkedOn }));
}

/** A chain's menu ranked for the person's day. */
export async function chainMenu(user: User, slug: string): Promise<ChainMenuResponse> {
  const chain = await db.query.chains.findFirst({ where: eq(chains.slug, slug) });
  const items = chain ? await db.select().from(chainItems).where(and(eq(chainItems.chainSlug, slug), eq(chainItems.status, 'live'))) : [];
  if (!chain || items.length === 0) throw new HttpError(404, "That restaurant isn't in Weight Class yet.");
  const { freeTry } = await openList(user, `chain:${slug}`);
  const checkedOn = items.reduce((oldest, item) => (item.checkedOn < oldest ? item.checkedOn : oldest), items[0].checkedOn);
  return {
    ...(await rankedList(user, items.map(chainBase), freeTry)),
    chain: { slug: chain.slug, name: chain.name, guideUrl: chain.guideUrl, checkedOn },
  };
}

// ── Menu scans ──────────────────────────────────────────────────────────────────────────────────

/** A scan attempt older than this is considered dead (server restarted mid-way) and is retried. */
const LEASE_MS = 150_000;
const MAX_ATTEMPTS = 3;
const MENU_SCAN_NOT_READ = "We couldn't read a menu in this photo. Try again in better light, or type the dishes.";

const menuPhotoKey = (userId: string, scanId: string, n: number) => `meals/${userId}/menu-${scanId}-${n}.jpg`;

/**
 * Starts reading a menu: the confirmed dish lines (or photos when the phone couldn't read them) and
 * the restaurant's name. Counts as an AI scan; the free try is taken here (and given back if the
 * menu can't be read).
 */
export async function createMenuScan(user: User, input: { lines: DishLine[] } | { photos: ArrayBuffer[] }, restaurant: string | null) {
  requireMenuConsent(user);
  await checkAiLimit(user.id, user.timezone);
  const id = crypto.randomUUID();
  await openList(user, `scan:${id}`);
  if ('photos' in input) {
    if (input.photos.length > MAX_MENU_PHOTOS) throw new HttpError(400, `Send up to ${MAX_MENU_PHOTOS} photos of the menu.`);
    const keys = input.photos.map((_, i) => menuPhotoKey(user.id, id, i + 1));
    try {
      const uploads = await Promise.allSettled(keys.map((key, i) => putObject(key, input.photos[i], 'image/jpeg')));
      const failed = uploads.find((upload): upload is PromiseRejectedResult => upload.status === 'rejected');
      if (failed) throw failed.reason;
      await db.insert(menuScans).values({ id, userId: user.id, restaurant, photoKeys: keys });
    } catch (error) {
      await Promise.all(keys.map((key) => deleteObject(key).catch(() => undefined)));
      await giveBackFreeTry(user.id, `scan:${id}`);
      throw error;
    }
  } else {
    await db.insert(menuScans).values({ id, userId: user.id, restaurant, lines: input.lines });
  }
  startMenuAnalysis(id);
  return id;
}

const staleScan = () => or(isNull(menuScans.analysisStartedAt), lt(menuScans.analysisStartedAt, new Date(Date.now() - LEASE_MS)));

/** Reads the menu in the background (the request that created the scan has answered); the app polls. */
export function startMenuAnalysis(scanId: string) {
  void analyzeMenuScan(scanId).catch((error: unknown) => console.error(`[menus] scan ${scanId} crashed: ${describeError(error)}`));
}

/** Restarts scans that a restart or deploy interrupted. */
export async function resumeStalledMenuScans(userId: string) {
  const stalled = await db
    .select({ id: menuScans.id })
    .from(menuScans)
    .where(and(eq(menuScans.userId, userId), eq(menuScans.status, 'reading'), staleScan()));
  for (const { id } of stalled) startMenuAnalysis(id);
}

async function deletePhotos(keys: readonly string[] | null) {
  await Promise.all(
    (keys ?? []).filter(isMealPhotoKey).map((key) => deleteObject(key).catch((error: unknown) => console.warn(`[menus] could not delete a menu photo: ${describeError(error)}`))),
  );
}

function toDataUrl(bytes: ArrayBuffer) {
  const view = new Uint8Array(bytes);
  let binary = '';
  for (let i = 0; i < view.length; i += 0x8000) binary += String.fromCharCode(...view.subarray(i, i + 0x8000));
  return `data:image/jpeg;base64,${btoa(binary)}`;
}

async function failScan(scan: MenuScanRow, message: string) {
  await db
    .update(menuScans)
    .set({ status: 'failed', error: message.slice(0, 500), photoKeys: null, analysisStartedAt: null })
    .where(eq(menuScans.id, scan.id));
  await deletePhotos(scan.photoKeys);
  // A menu that couldn't be read never counts as the free try.
  await giveBackFreeTry(scan.userId, `scan:${scan.id}`);
}

async function analyzeMenuScan(scanId: string) {
  const [scan] = await db
    .update(menuScans)
    .set({ analysisStartedAt: new Date(), analysisAttempts: sql`${menuScans.analysisAttempts} + 1` })
    .where(and(eq(menuScans.id, scanId), eq(menuScans.status, 'reading'), staleScan()))
    .returning();
  if (!scan) return;

  try {
    let lines = scan.lines;
    if (!lines) {
      // The photos go to the AI only to read the text, then they are deleted.
      if (!scan.photoKeys?.every(isMealPhotoKey)) throw new Error('Only menu photos can be read');
      const photos = await Promise.all(scan.photoKeys.map((key) => getObject(key)));
      lines = await readMenuPhotos(photos.map(toDataUrl));
      if (!lines || lines.length === 0) return await failScan(scan, MENU_SCAN_NOT_READ);
      await db.update(menuScans).set({ lines, photoKeys: null }).where(eq(menuScans.id, scan.id));
      await deletePhotos(scan.photoKeys);
    }

    const user = await db.query.users.findFirst({ where: eq(users.id, scan.userId) });
    if (!user) return;
    const memory = await personalFoodsFor(user.id);
    const { restaurantType, byLine } = await analyzeMenuLines(lines, scan.restaurant);
    const quick = lines.flatMap((line, i) => {
      const analysis = byLine.get(i + 1);
      return analysis?.isDish && analysis.items.length > 0 ? [quickDish(line, i + 1, analysis)] : [];
    });
    if (quick.length === 0) return await failScan(scan, "We couldn't find dishes on this menu. Try again, or type the dishes.");

    // Our code ranks the quick numbers; the best eight are priced from the database (the second pass).
    const fit = rankMenu(quick.map((dish) => asMenuDish(scanBase(dish))), await menuDay(user), user.preferences.foodsToSkip ?? []);
    const picks = new Set([...fit.fitsWell, ...fit.others].map((r) => Number(r.key)).slice(0, PRICED_DISHES));
    const priced = await priceDishes(
      quick.filter((dish) => picks.has(dish.n)),
      byLine,
      memory,
    );
    const dishes = quick.map((dish) => priced.find((p) => p.n === dish.n) ?? dish);
    const [saved] = await db
      .update(menuScans)
      .set({ status: 'ready', dishes, restaurantType: restaurantType.slice(0, 40) || null, error: null, analysisStartedAt: null })
      .where(and(eq(menuScans.id, scan.id), eq(menuScans.status, 'reading')))
      .returning({ id: menuScans.id });
    if (saved) await markUsed(priced.flatMap((dish) => dish.items.flatMap((item) => (item.personalFoodId ? [item.personalFoodId] : []))));
    console.info('[menus] scan ready', JSON.stringify({ scanId, lines: lines.length, dishes: dishes.length, priced: priced.length }));
  } catch (error) {
    console.error(`[menus] attempt ${scan.analysisAttempts} of ${MAX_ATTEMPTS} for scan ${scanId} failed: ${describeError(error)}`);
    if (scan.analysisAttempts >= MAX_ATTEMPTS) {
      // The AI failed: the scan isn't counted against the day's free scans (failed scans aren't).
      await failScan(scan, 'Something went wrong reading the menu. Please try again.');
      return;
    }
    await db.update(menuScans).set({ analysisStartedAt: null }).where(eq(menuScans.id, scanId));
    setTimeout(() => startMenuAnalysis(scanId), 2000 * scan.analysisAttempts);
  }
}

async function findScan(userId: string, scanId: string) {
  const scan = await db.query.menuScans.findFirst({ where: and(eq(menuScans.id, idParam(scanId, 'menu')), eq(menuScans.userId, userId)) });
  if (!scan) throw new HttpError(404, "That menu wasn't found. Menus are kept for 30 days.");
  return scan;
}

/** "Your menus": the person's scans that were read or are being read (failed ones are left out), newest first. */
export async function listMenuScans(userId: string): Promise<MenuScanSummary[]> {
  const rows = await db
    .select({
      id: menuScans.id,
      status: menuScans.status,
      restaurant: menuScans.restaurant,
      dishes: sql<number>`coalesce(jsonb_array_length(${menuScans.dishes}), 0)::int`,
      createdAt: menuScans.createdAt,
    })
    .from(menuScans)
    .where(
      and(
        eq(menuScans.userId, userId),
        ne(menuScans.status, 'failed'),
        gte(menuScans.createdAt, sql`now() - make_interval(days => ${MENU_SCAN_KEEP_DAYS})`),
      ),
    )
    .orderBy(sql`${menuScans.createdAt} desc`)
    .limit(20);
  return rows.map((row) => ({ ...row, dishes: Number(row.dishes), createdAt: row.createdAt.toISOString() }));
}

/** A scan, ranked again on every read so the list follows what's been eaten since. */
export async function menuScanResponse(user: User, scanId: string): Promise<MenuScanResponse> {
  const scan = await findScan(user.id, scanId);
  if (scan.status === 'reading') void resumeStalledMenuScans(user.id).catch(() => undefined);
  const base = { id: scan.id, status: scan.status, restaurant: scan.restaurant, error: scan.error, createdAt: scan.createdAt.toISOString() };
  if (scan.status !== 'ready' || !scan.dishes) return { ...base, list: null };
  const { freeTry } = await openList(user, `scan:${scan.id}`);
  const list = await rankedList(user, scan.dishes.map(scanBase), freeTry);
  // Estimates can't tell which dish fits best (the accuracy pilot, WHAT-TO-ORDER.md §11): the dishes that fit even
  // at the top of their range are Likely fits, in the order the menu lists them.
  const fitsWell = [...list.fitsWell].sort((a, b) => Number(a.key) - Number(b.key));
  return { ...base, list: { ...list, fitsWell, closeCall: false } };
}

// ── Ordering: Log it, Save for later ────────────────────────────────────────────────────────────

/**
 * Saves the order as a meal (`saved`: in Saved meals, to log when the food arrives). The request's
 * id becomes the meal's, so tapping twice logs once.
 */
async function saveOrder(
  user: User,
  requestId: string,
  { name, items, status, confidence, date }: { name: string; items: ComputedItem[]; status: 'completed' | 'saved'; confidence: MealConfidence; date?: string },
): Promise<MealRow> {
  if (status === 'saved') await assertRoomForSavedMeal(user.id);
  const totals = itemTotals(items);
  const base = baseFromNutrients(totals.nutrients);
  return db.transaction(async (tx) => {
    const [meal] = await tx
      .insert(meals)
      .values({
        id: requestId,
        userId: user.id,
        status,
        source: 'menu',
        name: name.slice(0, 80),
        confidence,
        ...scaleNutrition(base, 1),
        baseNutrition: base,
        portion: 1,
        nutrients: totals.nutrients,
        matchedShare: totals.matchedShare,
        ...(status === 'completed' ? { loggedAt: loggedAtFor(date, user.timezone) } : {}),
      })
      .onConflictDoNothing({ target: meals.id })
      .returning();
    if (meal) {
      await saveItems(meal.id, items, tx);
      return meal;
    }
    const existing = await tx.query.meals.findFirst({ where: and(eq(meals.id, requestId), eq(meals.userId, user.id)) });
    if (!existing) throw new HttpError(409, 'That order was already used. Please try again.');
    return existing;
  });
}

/** A chain item as a meal's food: its numbers for the serving (half, for a half portion), with its citation. */
function chainFood(item: ChainItemRow, share: number, ref: Omit<MenuRef, 'dish' | 'chainItemId' | 'citation'>): ComputedItem {
  return {
    name: (plainServing(item.serving) ? item.name : `${item.name} (${item.serving})`).slice(0, 80),
    foodId: null,
    grams: Math.round((item.servingGrams ?? 0) * share * 10) / 10,
    nutrients: scaleNutrients(item.nutrients, share),
    menu: {
      ...ref,
      from: 'chain',
      dish: item.name,
      chainItemId: item.id,
      citation: { chain: item.chain, sourceUrl: item.sourceUrl, checkedOn: item.checkedOn },
    },
  };
}

/** Logs (or saves) a chain item, whole or half, with one side or drink from the same chain at most. */
export async function orderChainItem(user: User, itemId: string, body: OrderDishBody, status: 'completed' | 'saved') {
  const item = await db.query.chainItems.findFirst({ where: and(eq(chainItems.id, idParam(itemId, 'item')), eq(chainItems.status, 'live')) });
  if (!item) throw new HttpError(404, "That item isn't on the menu any more.");
  await openList(user, `chain:${item.chainSlug}`);
  const side = body.sideId
    ? await db.query.chainItems.findFirst({ where: and(eq(chainItems.id, body.sideId), eq(chainItems.chainSlug, item.chainSlug), eq(chainItems.status, 'live')) })
    : null;
  if (body.sideId && (!side || side.id === item.id)) throw new HttpError(400, "That side isn't on this menu.");
  const share = body.variant === 'half' ? 0.5 : 1;
  const ref = { from: 'chain' as const, variant: body.variant, restaurant: item.chain, tweak: null };
  const items = [chainFood(item, share, ref), ...(side ? [chainFood(side, 1, { ...ref, variant: 'whole' })] : [])];
  const name = `${item.name}${body.variant === 'half' ? ' (half)' : ''}${side ? ` + ${side.name}` : ''}`;
  return saveOrder(user, body.requestId, { name, items, status, confidence: 'high', date: body.date });
}

/** Logs (or saves) a dish of a menu scan: whole or half, with a tweak and the question's answer. */
export async function orderScanDish(user: User, scanId: string, n: number, body: OrderDishBody, status: 'completed' | 'saved') {
  const scan = await findScan(user.id, scanId);
  const dish = scan.status === 'ready' ? scan.dishes?.find((d) => d.n === n) : undefined;
  if (!dish) throw new HttpError(404, "That dish isn't on this menu.");
  await openList(user, `scan:${scan.id}`);

  let items: ScanDishItem[] = dish.items;
  const option = body.option !== undefined ? dish.question?.options[body.option] : undefined;
  if (body.option !== undefined && !option) throw new HttpError(400, "That answer doesn't fit the question.");
  if (option) items = applyChange(items, option.change) as ScanDishItem[];
  const tweak = body.tweak !== undefined ? dish.tweaks[body.tweak] : undefined;
  if (body.tweak !== undefined && !tweak) throw new HttpError(400, "That change isn't offered for this dish.");
  if (tweak) items = applyTweak(items, tweak);
  const share = body.variant === 'half' ? 0.5 : 1;
  const calories = Math.round((itemTotals(items).nutrients.calories ?? 0) * share);
  const ref: MenuRef = {
    from: 'scan',
    dish: dish.name,
    range: dish.source === 'quick' ? estimateRange(calories, dish.kind, 'quick') : estimateRange(calories, dish.kind, 'estimate'),
    restaurant: scan.restaurant,
    variant: body.variant,
    tweak: tweak?.label ?? null,
  };
  const foods: ComputedItem[] = items.map((item) => ({
    name: item.name,
    foodId: item.foodId,
    productCode: item.productCode ?? null,
    grams: Math.round(item.grams * share * 10) / 10,
    nutrients: scaleNutrients(item.nutrients, share),
    aiName: item.aiName,
    personalFoodId: item.personalFoodId ?? null,
    menu: ref,
  }));
  const name = `${dish.name}${body.variant === 'half' ? ' (half)' : ''}`;
  return saveOrder(user, body.requestId, { name, items: foods, status, confidence: dish.source === 'estimate' ? 'medium' : 'low', date: body.date });
}

// ── Reports ─────────────────────────────────────────────────────────────────────────────────────

/** "Report a wrong item": one report per person and item (reporting again updates it); reviewed by hand. */
export async function reportChainItem(userId: string, itemId: string, { reason, note }: ChainItemReportBody) {
  const item = await db.query.chainItems.findFirst({ where: eq(chainItems.id, idParam(itemId, 'item')) });
  if (!item) throw new HttpError(404, "That item wasn't found.");
  const snapshot = { calories: item.calories, nutrients: item.nutrients, sourceUrl: item.sourceUrl, checkedOn: item.checkedOn };
  await db
    .insert(chainItemReports)
    .values({ chainItemId: item.id, userId, reason, note: note || null, snapshot })
    .onConflictDoUpdate({
      target: [chainItemReports.userId, chainItemReports.chainItemId],
      set: { reason, note: note || null, snapshot, status: 'open', updatedAt: new Date() },
    });
  console.info('[menus] chain item reported', JSON.stringify({ itemId: item.id, chain: item.chainSlug, reason }));
}
