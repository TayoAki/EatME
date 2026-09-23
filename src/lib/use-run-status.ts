import { useQuery } from '@tanstack/react-query';
import type { AnyTask } from '@trigger.dev/sdk';
import { useRealtimeRun } from '@trigger.dev/react-hooks';

const FINAL_STATUSES = new Set([
  'COMPLETED',
  'CANCELED',
  'FAILED',
  'CRASHED',
  'SYSTEM_FAILURE',
  'EXPIRED',
  'TIMED_OUT',
]);

export type RunHandle = { runId: string; publicAccessToken: string };

type PolledRun<TOutput> = {
  status: string;
  output: TOutput | null;
  metadata: Record<string, unknown> | null;
};

/**
 * Follows a Trigger.dev run with Realtime (`useRealtimeRun`). A slow poll of our own API runs next to
 * it as a safety net, so the UI still finishes if the Realtime connection drops.
 */
export function useRunStatus<TTask extends AnyTask, TOutput>(
  handle: RunHandle | undefined,
  poll: { queryKey: readonly unknown[]; fetch: () => Promise<PolledRun<TOutput>> },
) {
  const { run, error: realtimeError } = useRealtimeRun<TTask>(handle?.runId, {
    accessToken: handle?.publicAccessToken,
    enabled: !!handle,
  });

  const realtimeDone = !!run && FINAL_STATUSES.has(run.status);
  const polled = useQuery({
    queryKey: poll.queryKey,
    queryFn: poll.fetch,
    enabled: !!handle && !realtimeDone,
    refetchInterval: (query) => (query.state.data && FINAL_STATUSES.has(query.state.data.status) ? false : 4000),
    retry: false,
  });

  const status = run?.status ?? polled.data?.status;
  const metadata = (run?.metadata ?? polled.data?.metadata ?? undefined) as Record<string, unknown> | undefined;
  const output = (run?.output ?? polled.data?.output ?? undefined) as TOutput | undefined;

  return {
    status,
    metadata,
    output: status === 'COMPLETED' ? output : undefined,
    isDone: !!status && FINAL_STATUSES.has(status),
    isFailed: !!status && FINAL_STATUSES.has(status) && status !== 'COMPLETED',
    realtimeError,
  };
}
