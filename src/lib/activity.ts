import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { AppState } from 'react-native';

import { activityDays } from './activity-plan';
import { readActivity } from './health-read';
import { useHealthStore } from './health-store';
import { todayIso } from './time';

/**
 * Steps, workouts and sleep for the last `count` days (oldest first), read on the phone when
 * "Read activity and sleep" is on. Refreshes when the app comes back to the front.
 */
export function useActivity(count = 7) {
  const readEnabled = useHealthStore((s) => s.readEnabled);
  const query = useQuery({
    queryKey: ['activity', count, todayIso()],
    queryFn: async () => {
      const { days, raw } = await readActivity(count);
      return activityDays(days, raw);
    },
    enabled: readEnabled,
    staleTime: 5 * 60_000,
  });
  const { refetch } = query;
  useEffect(() => {
    if (!readEnabled) return;
    const subscription = AppState.addEventListener('change', (state) => state === 'active' && void refetch());
    return () => subscription.remove();
  }, [readEnabled, refetch]);
  return query;
}
