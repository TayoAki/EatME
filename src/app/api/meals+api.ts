import { and, desc, eq, gte, inArray, lt } from 'drizzle-orm';

import { db } from '@/db';
import { meals, users } from '@/db/schema';
import { requireAiConsent } from '@/lib/server/ai-consent';
import { requireUserId } from '@/lib/server/auth';
import { wantsChainMatch } from '@/lib/server/chain-match';
import { checkAiLimit, isActive, paymentsEnabled, subscriptionOf } from '@/lib/server/billing';
import { dateParam, dayBounds, loggedAtFor, userTimeZone } from '@/lib/server/day';
import { multiPhotoEnabled } from '@/lib/server/experiments';
import { toMeal } from '@/lib/server/dto';
import { handle, HttpError, readJson } from '@/lib/server/http';
import { logDrinkMeal, logFoodMeal, logProductMeal, logQuickMeal } from '@/lib/server/instant-meals';
import { describeError } from '@/lib/server/log';
import { resumeStalledAnalyses, startMealAnalysis } from '@/lib/server/meal-analysis';
import { rateLimit } from '@/lib/server/rate-limit';
import { deleteObject, extraPhotoKey, mealPhotoKey, putObject } from '@/lib/server/storage';
import { readPhotos } from '@/lib/server/uploads';
import {
  describeMealSchema,
  MAX_MEAL_NOTE_LENGTH,
  MAX_MEAL_PHOTOS,
  PHOTO_MODES,
  quickMealSchema,
  type PhotoMode,
} from '@/shared/meals';
import { drinkMealSchema } from '@/shared/drinks';
import { barcodeMealSchema, foodMealSchema } from '@/shared/products';

/** Meals logged without AI (barcodes, database foods, quick adds, drinks) per 24 hours: only there to stop abuse. */
const DAILY_INSTANT_LIMIT = 300;

/** Meals logged on one local day (`?date=YYYY-MM-DD`, in the user's time zone). */
export const GET = handle(async (request) => {
  const userId = await requireUserId(request);
  const date = dateParam(request);

  void resumeStalledAnalyses(userId).catch((error: unknown) => console.error(`[meals] resume failed: ${describeError(error)}`));

  const { start: dayStart, end: dayEnd } = dayBounds(date, await userTimeZone(userId));

  const rows = await db
    .select()
    .from(meals)
    .where(
      and(
        eq(meals.userId, userId),
        inArray(meals.status, ['analyzing', 'completed']),
        gte(meals.loggedAt, dayStart),
        lt(meals.loggedAt, dayEnd),
      ),
    )
    .orderBy(desc(meals.loggedAt));

  return Response.json({ meals: await Promise.all(rows.map(toMeal)) });
});

/** The note sent with a photo (`X-Meal-Note`, URI-encoded so any language fits in a header). */
function photoNote(request: Request) {
  const raw = request.headers.get('x-meal-note');
  if (!raw) return null;
  let note: string;
  try {
    note = decodeURIComponent(raw).trim();
  } catch {
    throw new HttpError(400, 'The note could not be read.');
  }
  if (note.length > MAX_MEAL_NOTE_LENGTH) throw new HttpError(400, `Keep the note under ${MAX_MEAL_NOTE_LENGTH} characters.`);
  return note || null;
}

function photoMode(request: Request): PhotoMode {
  const mode = new URL(request.url).searchParams.get('mode') ?? 'meal';
  if (!(PHOTO_MODES as readonly string[]).includes(mode)) throw new HttpError(400, 'Unknown photo mode.');
  return mode as PhotoMode;
}

const has = (body: unknown, key: string) => typeof body === 'object' && body !== null && key in body;

/**
 * Logs a meal. A photo (a meal, or a nutrition label with `?mode=label`; stored in the bucket) or
 * JSON `{ text }` describing the meal starts the AI analysis in the background, and the app polls
 * `GET /api/meals/:id`. JSON `{ barcode: { code, grams } }` (a packaged product),
 * `{ food: { foodId, grams } }` (a USDA database food), `{ quick: { calories, … } }` (numbers
 * typed in) or `{ drink: { type, volumeMl, abv, count, … } }` (an alcoholic drink) is saved as
 * completed right away.
 */
export const POST = handle(async (request) => {
  const userId = await requireUserId(request);

  const user = await db.query.users.findFirst({
    where: eq(users.id, userId),
    columns: { onboardingCompletedAt: true, timezone: true, aiConsentAt: true, aiConsentProviders: true },
  });
  if (!user?.onboardingCompletedAt) throw new HttpError(409, 'Finish onboarding before logging meals.');

  if ((request.headers.get('content-type') ?? '').startsWith('application/json')) {
    const body = await readJson(request);
    if (has(body, 'barcode') || has(body, 'food') || has(body, 'quick') || has(body, 'drink')) {
      rateLimit(`instant-meals:${userId}`, DAILY_INSTANT_LIMIT, 24 * 60 * 60 * 1000);
      let meal;
      if (has(body, 'quick')) {
        const { quick } = quickMealSchema.parse(body);
        meal = await logQuickMeal(userId, quick, loggedAtFor(quick.date, user.timezone, quick.time));
      } else if (has(body, 'drink')) {
        const { drink } = drinkMealSchema.parse(body);
        meal = await logDrinkMeal(userId, drink, loggedAtFor(drink.date, user.timezone));
      } else if (has(body, 'barcode')) {
        meal = await logProductMeal(userId, barcodeMealSchema.parse(body).barcode);
      } else {
        meal = await logFoodMeal(userId, foodMealSchema.parse(body).food);
      }
      return Response.json({ meal: await toMeal(meal) }, { status: 201 });
    }
    requireAiConsent(user);
    await checkAiLimit(userId, user.timezone);
    const { text } = describeMealSchema.parse(body);
    const [meal] = await db
      .insert(meals)
      .values({ userId, status: 'analyzing', source: 'text', note: text, chainMatch: wantsChainMatch(request) })
      .returning();
    startMealAnalysis(meal.id);
    return Response.json({ meal: await toMeal(meal) }, { status: 201 });
  }

  requireAiConsent(user);
  await checkAiLimit(userId, user.timezone);
  const mode = photoMode(request);
  // Label numbers are printed on the package; a note would only compete with them.
  const note = mode === 'meal' ? photoNote(request) : null;
  const photos = await readPhotos(request, MAX_MEAL_PHOTOS);
  // Several photos of one meal are still one scan.
  if (photos.length > 1) {
    if (mode !== 'meal') throw new HttpError(400, 'A nutrition label is read from one photo.');
    if (!multiPhotoEnabled()) throw new HttpError(400, 'Send one photo of the meal.');
    if (paymentsEnabled() && !isActive(await subscriptionOf(userId))) {
      throw new HttpError(402, 'Several photos of one meal are part of Premium. Your first photo is enough to log it.');
    }
  }
  const id = crypto.randomUUID();
  const imageKey = mealPhotoKey(userId, id);
  const extraKeys = photos.slice(1).map((_, i) => extraPhotoKey(userId, id, i + 2));
  const keys = [imageKey, ...extraKeys];

  try {
    // Every upload settles before any clean-up, so a slow one can't land after it.
    const uploads = await Promise.allSettled(keys.map((key, i) => putObject(key, photos[i], 'image/jpeg')));
    const failed = uploads.find((upload): upload is PromiseRejectedResult => upload.status === 'rejected');
    if (failed) throw failed.reason;
    const [meal] = await db
      .insert(meals)
      .values({
        id,
        userId,
        status: 'analyzing',
        source: mode === 'label' ? 'label' : 'photo',
        note,
        // A label is one product with its own numbers: nothing to match.
        chainMatch: mode !== 'label' && wantsChainMatch(request),
        imageKey,
        extraImageKeys: extraKeys.length > 0 ? extraKeys : null,
      })
      .returning();
    startMealAnalysis(meal.id);
    return Response.json({ meal: await toMeal(meal) }, { status: 201 });
  } catch (error) {
    await Promise.all(keys.map((key) => deleteObject(key).catch(() => undefined)));
    throw error;
  }
});
