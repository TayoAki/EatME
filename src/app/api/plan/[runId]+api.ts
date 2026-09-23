import { runs } from '@trigger.dev/sdk';

import { handle, HttpError } from '@/lib/server/http';
import type { generatePlan } from '@/trigger/generate-plan';

/** Polling fallback for the "Building your plan" screen in case Realtime is unavailable. */
export const GET = handle<{ runId: string }>(async (_request, { runId }) => {
  if (!/^run_[a-z0-9]+$/i.test(runId)) throw new HttpError(400, 'Invalid run id');

  const run = await runs.retrieve<typeof generatePlan>(runId).catch(() => null);
  if (!run || run.taskIdentifier !== 'generate-plan') throw new HttpError(404, 'Plan not found');

  return Response.json({
    status: run.status,
    isCompleted: run.isCompleted,
    isFailed: run.isFailed,
    output: run.output ?? null,
    metadata: run.metadata ?? null,
  });
});
