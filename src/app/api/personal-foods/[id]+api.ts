import { requireUserId } from '@/lib/server/auth';
import { handle, readJson } from '@/lib/server/http';
import { deletePersonalFood, updatePersonalFood } from '@/lib/server/personal-foods';
import { rateLimit } from '@/lib/server/rate-limit';
import { updatePersonalFoodSchema } from '@/shared/personal-foods';

type Params = { id: string };

/** Rename a remembered food or change its usual grams. */
export const PATCH = handle<Params>(async (request, { id }) => {
  const userId = await requireUserId(request);
  rateLimit(`personal-foods:${userId}`, 60, 60 * 60 * 1000);
  await updatePersonalFood(userId, id, updatePersonalFoodSchema.parse(await readJson(request)));
  return Response.json({ updated: true });
});

/** "Forget": EatME stops using it. Meals already logged keep their numbers. */
export const DELETE = handle<Params>(async (request, { id }) => {
  const userId = await requireUserId(request);
  rateLimit(`personal-foods:${userId}`, 60, 60 * 60 * 1000);
  await deletePersonalFood(userId, id);
  return Response.json({ deleted: true });
});
