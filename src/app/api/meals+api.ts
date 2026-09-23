import { tasks } from '@trigger.dev/sdk';
import { and, desc, eq, gte, lt, ne, sql } from 'drizzle-orm';

import { db } from '@/db';
import { meals, users } from '@/db/schema';
import { requireUserId } from '@/lib/server/auth';
import { toMeal } from '@/lib/server/dto';
import { handle, HttpError, readJson } from '@/lib/server/http';
import { getFileDetails, mealsFolder } from '@/lib/server/imagekit';
import { createMealSchema } from '@/shared/meals';
import type { analyzeMeal } from '@/trigger/analyze-meal';

const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

/** Meals logged on one local day (`?date=YYYY-MM-DD`, in the user's time zone). */
export const GET = handle(async (request) => {
  const userId = await requireUserId(request);
  const date = new URL(request.url).searchParams.get('date');
  if (!date || !DATE_RE.test(date)) throw new HttpError(400, 'Pass ?date=YYYY-MM-DD');

  const user = await db.query.users.findFirst({ where: eq(users.id, userId), columns: { timezone: true } });
  const tz = user?.timezone ?? 'UTC';

  // Local midnight → next local midnight, converted to timestamps so the index can be used.
  const dayStart = sql`(${date}::timestamp at time zone ${tz})`;
  const dayEnd = sql`((${date}::date + 1)::timestamp at time zone ${tz})`;

  const rows = await db
    .select()
    .from(meals)
    .where(
      and(
        eq(meals.userId, userId),
        ne(meals.status, 'failed'),
        gte(meals.loggedAt, dayStart),
        lt(meals.loggedAt, dayEnd),
      ),
    )
    .orderBy(desc(meals.loggedAt));

  return Response.json({ meals: rows.map(toMeal) });
});

/**
 * Creates a meal from a photo the app already uploaded to ImageKit, then triggers the analyze-meal
 * task. Returns the run handle so the app can follow the analysis with Trigger.dev Realtime.
 */
export const POST = handle(async (request) => {
  const userId = await requireUserId(request);
  const { fileId } = createMealSchema.parse(await readJson(request));

  // Never trust the client with URLs: look the file up and make sure it is in this user's folder.
  const file = await getFileDetails(fileId);
  if (!file || !file.filePath.startsWith(`${mealsFolder(userId)}/`)) {
    throw new HttpError(400, 'Photo not found. Please try again.');
  }

  const user = await db.query.users.findFirst({ where: eq(users.id, userId), columns: { id: true } });
  if (!user) throw new HttpError(409, 'Finish onboarding before logging meals.');

  const [meal] = await db
    .insert(meals)
    .values({ userId, status: 'analyzing', imageUrl: file.url, imageFileId: file.fileId, imagePath: file.filePath })
    .returning();

  try {
    const run = await tasks.trigger<typeof analyzeMeal>(
      'analyze-meal',
      { mealId: meal.id },
      { tags: [`user_${userId}`, `meal_${meal.id}`], idempotencyKey: `analyze-${meal.id}` },
    );
    const [saved] = await db
      .update(meals)
      .set({ triggerRunId: run.id })
      .where(eq(meals.id, meal.id))
      .returning();

    return Response.json(
      { meal: toMeal(saved), runId: run.id, publicAccessToken: run.publicAccessToken },
      { status: 201 },
    );
  } catch (error) {
    await db
      .update(meals)
      .set({ status: 'failed', error: 'Could not start the analysis' })
      .where(eq(meals.id, meal.id));
    throw error;
  }
});
