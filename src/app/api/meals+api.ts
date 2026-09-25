import { and, count, desc, eq, gte, inArray, lt } from 'drizzle-orm';

import { db } from '@/db';
import { meals, users } from '@/db/schema';
import { requireUserId } from '@/lib/server/auth';
import { dateParam, dayBounds, userTimeZone } from '@/lib/server/day';
import { toMeal } from '@/lib/server/dto';
import { handle, HttpError } from '@/lib/server/http';
import { resumeStalledAnalyses, startMealAnalysis } from '@/lib/server/meal-analysis';
import { deleteObject, mealPhotoKey, putObject } from '@/lib/server/storage';
import { MAX_MEAL_PHOTO_BYTES, MEAL_PHOTO_FIELD } from '@/shared/meals';

/** Scans per rolling 24 hours — keeps the AI bill predictable. */
const DAILY_SCAN_LIMIT = 50;

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

/**
 * Creates a meal from a photo: stores the photo in the bucket, saves the meal as "analyzing" and
 * starts the AI analysis in the background. The app then polls `GET /api/meals/:id`.
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
    .where(and(eq(meals.userId, userId), gte(meals.createdAt, new Date(Date.now() - 24 * 60 * 60 * 1000))));
  if (scans >= DAILY_SCAN_LIMIT) {
    throw new HttpError(429, `You can scan up to ${DAILY_SCAN_LIMIT} meals a day. Please try again tomorrow.`);
  }

  const photo = await readPhoto(request);
  const id = crypto.randomUUID();
  const imageKey = mealPhotoKey(userId, id);
  await putObject(imageKey, photo, 'image/jpeg');

  try {
    const [meal] = await db.insert(meals).values({ id, userId, status: 'analyzing', imageKey }).returning();
    startMealAnalysis(meal.id);
    return Response.json({ meal: await toMeal(meal) }, { status: 201 });
  } catch (error) {
    await deleteObject(imageKey).catch(() => undefined);
    throw error;
  }
});
