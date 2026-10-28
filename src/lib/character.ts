import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import type { FigureOptions } from '@/components/character/figure';
import {
  DAY_XP,
  DEFAULT_CHARACTER_NAME,
  DEFAULT_LOOKS,
  GEAR,
  GLOW_WATER_DAYS,
  moodFor,
  STREAK_MILESTONES,
  strengthTier,
  type CharacterResponse,
  type Look,
  type Mood,
} from '@/shared/character';
import type { Gender } from '@/shared/onboarding';

/** The look before the person makes their own: Girl for women, Guy otherwise; everything can be changed. */
export function defaultLook(gender: Gender | null | undefined): Look {
  return gender === 'female' ? DEFAULT_LOOKS.girl : DEFAULT_LOOKS.guy;
}

export function characterName(character: CharacterResponse | undefined) {
  return character?.character?.name ?? DEFAULT_CHARACTER_NAME;
}

/** Happy, waiting or missing you, from the meals as they are now (CHARACTER.md §4). */
export function characterMood(character: CharacterResponse): Mood {
  return moodFor(character.today.date, character.lastShowedUp === character.today.date, character.lastShowedUp);
}

/** The drawing's options: the look, strength from protein days, worn gear and the Energy glow. */
export function figureOptions(character: CharacterResponse, gender: Gender | null | undefined, mood: FigureOptions['mood']): FigureOptions {
  const stored = character.character;
  const earned = new Set<string>(character.gear);
  const worn = stored ? stored.gear : Object.fromEntries(character.gear.map((key) => [key, true]));
  return {
    look: stored?.look ?? defaultLook(gender),
    strength: strengthTier(character.stats.proteinDays),
    gear: Object.fromEntries(Object.entries(worn).filter(([key, on]) => on && earned.has(key))),
    glow: character.stats.waterDays >= GLOW_WATER_DAYS,
    mood,
  };
}

/** XP today earned, as words: "+20 XP: showed up, protein goal". */
export function todayLine(character: CharacterResponse, mood: Mood) {
  const name = characterName(character);
  if (mood === 'missing') return `Missed you! A meal wakes ${name} up`;
  const { today } = character;
  const earned: [string, number][] = [];
  if (today.showedUp) earned.push(['showed up', DAY_XP.showedUp]);
  if (today.protein) earned.push(['protein goal', DAY_XP.protein]);
  if (today.water) earned.push(['water goal', DAY_XP.water]);
  if (today.fiber) earned.push(['fiber goal', DAY_XP.fiber]);
  if (earned.length === 0) return character.lastShowedUp ? `${name} saved you a seat` : 'Log a meal to earn your first XP';
  const xp = earned.reduce((sum, [, n]) => sum + n, 0);
  return `+${xp} XP today: ${earned.map(([label]) => label).join(', ')}`;
}

/** The gear a level brings, for the celebration ("Headband earned"). */
export function gearAt(level: number) {
  return GEAR.filter((g) => g.level === level).map((g) => g.label);
}

export type Celebration = { kind: 'level'; level: number } | { kind: 'streak'; days: number } | { kind: 'goal'; goal: 'protein' | 'water' | 'fiber' };

type SeenState = {
  /** Per person: the last level and streak milestone celebrated, and today's goals already cheered. */
  seen: Record<string, { level: number; streak: number; goals: { date: string; keys: string[] } }>;
  mark: (userId: string, celebration: Celebration, date: string) => void;
  init: (userId: string, level: number, streak: number) => void;
};

/** What this phone already celebrated, so each level, streak milestone and day's goal cheers once. */
export const useCelebrationStore = create<SeenState>()(
  persist(
    (set) => ({
      seen: {},
      init: (userId, level, streak) =>
        set((s) => (s.seen[userId] ? s : { seen: { ...s.seen, [userId]: { level, streak, goals: { date: '', keys: [] } } } })),
      mark: (userId, celebration, date) =>
        set((s) => {
          const mine = s.seen[userId] ?? { level: 1, streak: 0, goals: { date: '', keys: [] } };
          const goals = mine.goals.date === date ? mine.goals : { date, keys: [] };
          return {
            seen: {
              ...s.seen,
              [userId]:
                celebration.kind === 'level'
                  ? { ...mine, level: celebration.level }
                  : celebration.kind === 'streak'
                    ? { ...mine, streak: celebration.days }
                    : { ...mine, goals: { date, keys: [...goals.keys, celebration.goal] } },
            },
          };
        }),
    }),
    { name: 'eatme-character-celebrations', storage: createJSONStorage(() => AsyncStorage), version: 0 },
  ),
);

/** The next thing to celebrate that this phone hasn't: a level up first, then a streak milestone, then a goal today. */
export function nextCelebration(character: CharacterResponse, seen: SeenState['seen'][string] | undefined): Celebration | null {
  if (!seen) return null;
  if (character.level > seen.level) return { kind: 'level', level: character.level };
  const milestone = [...STREAK_MILESTONES].reverse().find((days) => character.stats.streak >= days);
  if (milestone && milestone > seen.streak) return { kind: 'streak', days: milestone };
  const cheered = seen.goals.date === character.today.date ? seen.goals.keys : [];
  for (const goal of ['protein', 'water', 'fiber'] as const) {
    if (character.today[goal] && !cheered.includes(goal)) return { kind: 'goal', goal };
  }
  return null;
}

export function celebrationText(celebration: Celebration, name: string) {
  if (celebration.kind === 'level') {
    const gear = gearAt(celebration.level);
    return gear.length ? `Level ${celebration.level}! ${gear.join(', ')} earned` : `Level ${celebration.level}! ${name} is getting stronger`;
  }
  if (celebration.kind === 'streak') return `${celebration.days} days in a row! ${name} is on fire`;
  return { protein: 'Protein goal reached! Strength +1', water: 'Water goal reached! Energy +1', fiber: 'Fiber goal reached! Vitality +1' }[celebration.goal];
}
