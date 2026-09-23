import { handle, readJson } from '@/lib/server/http';
import { generatePlan } from '@/lib/server/plan';
import { clientIp, rateLimit } from '@/lib/server/rate-limit';
import { onboardingAnswersSchema } from '@/shared/onboarding';

/**
 * Builds the daily plan for the onboarding answers with AI and returns it (a few seconds).
 * Public on purpose — the plan is built before sign-up — so it is rate limited per IP address.
 */
export const POST = handle(async (request) => {
  rateLimit(`plan:${clientIp(request)}`, 10, 60 * 60_000);
  const answers = onboardingAnswersSchema.parse(await readJson(request));
  return Response.json({ plan: await generatePlan(answers) });
});
