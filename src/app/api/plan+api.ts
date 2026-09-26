import { handle, readJson } from '@/lib/server/http';
import { generatePlan } from '@/lib/server/plan';
import { clientIp, rateLimit } from '@/lib/server/rate-limit';
import { formulaPlan } from '@/shared/nutrition';
import { planRequestSchema } from '@/shared/onboarding';

/**
 * Builds the daily plan for the onboarding answers with AI and returns it (a few seconds), or with
 * the standard formula when the person didn't allow AI on the consent screen (Apple 5.1.2(i)).
 * Public on purpose — the plan is built before sign-up — so it is rate limited per IP address.
 */
export const POST = handle(async (request) => {
  rateLimit(`plan:${clientIp(request)}`, 10, 60 * 60_000);
  const { aiConsent, ...answers } = planRequestSchema.parse(await readJson(request));
  return Response.json({ plan: aiConsent ? await generatePlan(answers) : formulaPlan(answers) });
});
