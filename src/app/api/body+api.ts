import { requireUserId } from '@/lib/server/auth';
import { bodyOf } from '@/lib/server/body';
import { DATE_RE } from '@/lib/server/day';
import { handle, HttpError } from '@/lib/server/http';

/** Body measurements and progress photos (signed links for 30 minutes), `?from=&to=` optional. */
export const GET = handle(async (request) => {
  const userId = await requireUserId(request);
  const params = new URL(request.url).searchParams;
  const from = params.get('from') ?? undefined;
  const to = params.get('to') ?? undefined;
  if ((from && !DATE_RE.test(from)) || (to && !DATE_RE.test(to))) throw new HttpError(400, 'Dates are YYYY-MM-DD');
  return Response.json(await bodyOf(userId, from, to));
});
