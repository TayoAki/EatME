import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { haptics } from '@/lib/haptics';
import {
  celebrationText,
  flamieLine,
  flamieMood,
  lastShowedUp,
  markSeen,
  milestoneFor,
  nextCelebration,
  settleSeen,
  stageFor,
  type FlamieCelebration,
  type FlamieSeen,
  type Spark,
} from '@/shared/flamie';
import type { StreakResponse } from '@/shared/user';

const CHEER_MS = 2800;

type SeenState = {
  /** Per person: the last milestone celebrated, and today's sparks already cheered. */
  seen: Record<string, FlamieSeen>;
  init: (userId: string, streak: number) => void;
  settle: (userId: string, streak: number) => void;
  mark: (userId: string, celebration: FlamieCelebration, today: string) => void;
};

/** What this phone already celebrated, so each milestone and each day's spark cheers once (FLAMIE.md §2). */
export const useFlamieSeenStore = create<SeenState>()(
  persist(
    (set) => ({
      seen: {},
      // What the phone sees first counts as celebrated, so nobody gets a pile of old milestones.
      init: (userId, streak) =>
        set((s) => (s.seen[userId] ? s : { seen: { ...s.seen, [userId]: { milestone: milestoneFor(streak), sparks: { date: '', keys: [] } } } })),
      settle: (userId, streak) =>
        set((s) => {
          const mine = s.seen[userId];
          const settled = mine && settleSeen(mine, streak);
          return mine && settled !== mine ? { seen: { ...s.seen, [userId]: settled } } : s;
        }),
      mark: (userId, celebration, today) =>
        set((s) => (s.seen[userId] ? { seen: { ...s.seen, [userId]: markSeen(s.seen[userId], celebration, today) } } : s)),
    }),
    { name: 'eatme-flamie-celebrations', storage: createJSONStorage(() => AsyncStorage), version: 0 },
  ),
);

export type FlamieCheer = { celebration: FlamieCelebration; text: string; count: number };

/**
 * Flamie on Home: its mood and stage from the streak, its line, and the cheer playing now (one at a time: a milestone
 * first, then today's sparks). Off in calm mode.
 */
export function useFlamie({ userId, streak, sparks, enabled }: { userId: string | null | undefined; streak: StreakResponse | undefined; sparks: Spark[] | undefined; enabled: boolean }) {
  const seen = useFlamieSeenStore((s) => (userId ? s.seen[userId] : undefined));
  const init = useFlamieSeenStore((s) => s.init);
  const settle = useFlamieSeenStore((s) => s.settle);
  const mark = useFlamieSeenStore((s) => s.mark);
  const current = streak?.current;

  useEffect(() => {
    if (!enabled || !userId || current === undefined) return;
    init(userId, current);
    settle(userId, current);
  }, [enabled, userId, current, init, settle]);

  const next = enabled && streak && sparks ? nextCelebration(streak.current, streak.today, sparks, seen) : null;
  const [cheering, setCheering] = useState<(FlamieCheer & { mark: () => void }) | null>(null);
  const [cheers, setCheers] = useState(0);
  if (next && cheering === null && userId && streak) {
    const count = cheers + 1;
    setCheers(count);
    setCheering({ celebration: next, text: celebrationText(next), count, mark: () => mark(userId, next, streak.today) });
  }
  useEffect(() => {
    if (!cheering) return;
    haptics.success();
    // Seen as soon as it starts, so leaving Home mid-cheer doesn't play it again.
    cheering.mark();
    const timer = setTimeout(() => setCheering(null), CHEER_MS);
    return () => clearTimeout(timer);
  }, [cheering]);

  const last = streak ? lastShowedUp(streak) : null;
  const mood = streak ? flamieMood(streak.today, last) : 'waiting';
  const { stage, next: nextStage } = stageFor(streak?.current ?? 0);
  return {
    mood,
    stage,
    nextStage,
    line: flamieLine(mood, last),
    cheering: cheering ? { celebration: cheering.celebration, text: cheering.text, count: cheering.count } : null,
  };
}
