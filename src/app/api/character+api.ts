import { requireUserId } from '@/lib/server/auth';
import { characterFor, saveCharacter } from '@/lib/server/character';
import { handle, readJson } from '@/lib/server/http';
import { rateLimit } from '@/lib/server/rate-limit';
import { characterSchema } from '@/shared/character';

/** Your character (v2.6, CHARACTER.md): its look, level, stats and today's flags, after bringing the days up to date. */
export const GET = handle(async (request) => {
  const userId = await requireUserId(request);
  rateLimit(`character:${userId}`, 600, 60 * 60 * 1000);
  return Response.json(await characterFor(userId));
});

/** Saves the look, name and worn gear (`characterSchema`); gear the level hasn't earned is left off. */
export const PUT = handle(async (request) => {
  const userId = await requireUserId(request);
  rateLimit(`character-save:${userId}`, 60, 60 * 60 * 1000);
  const body = characterSchema.parse(await readJson(request));
  return Response.json(await saveCharacter(userId, body));
});
