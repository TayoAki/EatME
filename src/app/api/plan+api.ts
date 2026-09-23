import { tasks } from '@trigger.dev/sdk';

import { handle, readJson } from '@/lib/server/http';
import { onboardingAnswersSchema } from '@/shared/onboarding';
import type { generatePlan } from '@/trigger/generate-plan';

/**
 * Starts the AI plan for the onboarding answers. Public on purpose: the plan is built before the
 * user signs up. Returns the run handle so the app can follow it with Trigger.dev Realtime.
 */
export const POST = handle(async (request) => {
  const answers = onboardingAnswersSchema.parse(await readJson(request));

  const run = await tasks.trigger<typeof generatePlan>('generate-plan', answers, {
    tags: ['onboarding'],
    // Nobody waits for a plan after this — drop the run if it cannot start in time.
    ttl: '10m',
  });

  return Response.json({ runId: run.id, publicAccessToken: run.publicAccessToken });
});
