import { and, count, desc, eq, gte, inArray, lt } from 'drizzle-orm';

import { db } from '@/db';
import { meals, users } from '@/db/schema';
import { requireUserId } from '@/lib/server/auth';
import { dateParam, dayBounds, userTimeZone } from '@/lib/server/day';
import { toMeal } from '@/lib/server/dto';
import { handle, HttpError, readJson } from '@/lib/server/http';
import { resumeStalledAnalyses, startMealAnalysis } from '@/lib/server/meal-analysis';
import { deleteObject, mealPhotoKey, putObject } from '@/lib/server/storage';
import {
  describeMealSchema,
  MAX_MEAL_NOTE_LENGTH,
  MAX_MEAL_PHOTO_BYTES,
  MEAL_PHOTO_FIELD,
  PHOTO_MODES,
  type PhotoMode,
} from '@/shared/meals';

/** AI analyses (photos, labels, descriptions) per rolling 24 hours — keeps the AI bill predictable. */
const DAILY_SCAN_LIMIT = 50;

/** Meals that cost an AI call. Copies and favourites are free. */
const ANALYZED_SOURCES = ['photo', 'label', 'text'] as const;

type UploadedFile = { size: number; type: string; arrayBuffer(): Promise<ArrayBuffer> };
type MultipartForm = { get(name: string): UploadedFile | string | null };

/** Meals logged on one local day (`?date=YYYY-MM-DD`, in the user's time zone). */
export const GET = handle(async (request) => {
  const userId = await requireUserId(request);
  const date = dateParam(request);

  void resumeStalledAnalyses(userId).catch((error: unknown) => console.error('[meals] resume failed', error));

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

/**
 * The photo's bytes. The app sends the JPEG itself as the body (`Content-Type: image/jpeg`);
 * multipart form data with a `photo` field is accepted too (older app versions).
 */
async function readPhoto(request: Request): Promise<ArrayBuffer> {
  const declaredSize = Number(request.headers.get('content-length') ?? 0);
  if (declaredSize > MAX_MEAL_PHOTO_BYTES + 64 * 1024) throw new HttpError(413, 'That photo is too large.');

  let bytes: ArrayBuffer;
  const contentType = request.headers.get('content-type') ?? '';
  if (contentType.startsWith('image/')) {
    bytes = await request.arrayBuffer();
  } else if (contentType.startsWith('multipart/form-data')) {
    // Typed by hand: the project's global FormData type is React Native's, which has no get().
    const form = (await request.formData().catch(() => null)) as MultipartForm | null;
    const photo = form?.get(MEAL_PHOTO_FIELD);
    if (!photo || typeof photo === 'string') throw new HttpError(400, 'Attach the meal photo.');
    if (photo.type && !photo.type.startsWith('image/')) throw new HttpError(415, 'Only photos can be analyzed.');
    bytes = await photo.arrayBuffer();
  } else {
    throw new HttpError(415, 'Send the meal photo as image/jpeg.');
  }

  if (bytes.byteLength === 0) throw new HttpError(400, 'Attach the meal photo.');
  if (bytes.byteLength > MAX_MEAL_PHOTO_BYTES) throw new HttpError(413, 'That photo is too large.');
  return bytes;
}

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

/**
 * Creates a meal and starts the AI analysis in the background; the app then polls
 * `GET /api/meals/:id`. The body is either a photo (a meal, or a nutrition label with
 * `?mode=label`; stored in the bucket) or JSON `{ text }` describing the meal in words.
 */
export const POST = handle(async (request) => {
  const userId = await requireUserId(request);

  const user = await db.query.users.findFirst({
    where: eq(users.id, userId),
    columns: { onboardingCompletedAt: true },
  });
  if (!user?.onboardingCompletedAt) throw new HttpError(409, 'Finish onboarding before logging meals.');

  const [{ scans }] = await db
    .select({ scans: count() })
    .from(meals)
    .where(
      and(
        eq(meals.userId, userId),
        inArray(meals.source, ANALYZED_SOURCES),
        gte(meals.createdAt, new Date(Date.now() - 24 * 60 * 60 * 1000)),
      ),
    );
  if (scans >= DAILY_SCAN_LIMIT) {
    throw new HttpError(429, `You can log up to ${DAILY_SCAN_LIMIT} meals with AI a day. Please try again tomorrow.`);
  }

  if ((request.headers.get('content-type') ?? '').startsWith('application/json')) {
    const { text } = describeMealSchema.parse(await readJson(request));
    const [meal] = await db.insert(meals).values({ userId, status: 'analyzing', source: 'text', note: text }).returning();
    startMealAnalysis(meal.id);
    return Response.json({ meal: await toMeal(meal) }, { status: 201 });
  }

  const mode = photoMode(request);
  // Label numbers are printed on the package; a note would only compete with them.
  const note = mode === 'meal' ? photoNote(request) : null;
  const photo = await readPhoto(request);
  const id = crypto.randomUUID();
  const imageKey = mealPhotoKey(userId, id);
  await putObject(imageKey, photo, 'image/jpeg');

  try {
    const [meal] = await db
      .insert(meals)
      .values({ id, userId, status: 'analyzing', source: mode === 'label' ? 'label' : 'photo', note, imageKey })
      .returning();
    startMealAnalysis(meal.id);
    return Response.json({ meal: await toMeal(meal) }, { status: 201 });
  } catch (error) {
    await deleteObject(imageKey).catch(() => undefined);
    throw error;
  }
});
