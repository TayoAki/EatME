import { z } from 'zod';

/**
 * Your character (v2.6, CHARACTER.md): how it looks, how it grows and how it feels. It grows with habits (protein,
 * water and fiber days, the streak) and never with weight; its body is the person's own pick.
 */

/** Skin tones, light to deep. */
export const SKIN_TONES = ['#FFE0C2', '#F3C79A', '#E0A774', '#C68642', '#A86B3C', '#8D5524', '#6B4226', '#4A2C1A'] as const;

/** No curly hair for now (the owner, 28 October 2026). */
export const HAIR_STYLES = ['short', 'long', 'bun', 'ponytail', 'buzz', 'bald'] as const;
export type HairStyle = (typeof HAIR_STYLES)[number];
export const HAIR_STYLE_LABELS: Record<HairStyle, string> = {
  short: 'Short',
  long: 'Long',
  bun: 'Bun',
  ponytail: 'Ponytail',
  buzz: 'Buzz cut',
  bald: 'Bald',
};

export const HAIR_COLORS = {
  black: '#1F1A17',
  brown: '#5A3825',
  chestnut: '#8A5232',
  blonde: '#E2B866',
  auburn: '#A4452B',
  grey: '#A9A9AE',
  pink: '#F08BB4',
  blue: '#4A7BD8',
} as const;
export type HairColor = keyof typeof HAIR_COLORS;

export const TOP_COLORS = {
  orange: '#FF8A3D',
  blue: '#4A90E2',
  green: '#12A150',
  purple: '#7B61FF',
  yellow: '#FFC23D',
  pink: '#E94A8B',
  black: '#2B2B33',
  white: '#F2F2F5',
} as const;
export type TopColor = keyof typeof TOP_COLORS;

export const BOTTOM_COLORS = {
  navy: '#33415C',
  black: '#2D2D3A',
  denim: '#4F6D9A',
  khaki: '#B49A6A',
  grey: '#7A7A85',
  purple: '#5A3E8E',
} as const;
export type BottomColor = keyof typeof BOTTOM_COLORS;

export const BODIES = ['girl', 'guy'] as const;
export type Body = (typeof BODIES)[number];
export const FACIAL_HAIR = ['none', 'stubble', 'beard'] as const;
export const GLASSES = ['none', 'round', 'square'] as const;

/** Gear is earned with levels, never bought (all free). */
export const GEAR = [
  { key: 'headband', label: 'Headband', level: 5 },
  { key: 'wristbands', label: 'Wristbands', level: 8 },
  { key: 'medal', label: 'Medal', level: 12 },
  { key: 'gloves', label: 'Boxing gloves', level: 16 },
  { key: 'belt', label: 'Champion belt', level: 25 },
] as const;
export type GearKey = (typeof GEAR)[number]['key'];
const GEAR_KEYS = GEAR.map((g) => g.key) as [GearKey, ...GearKey[]];

const keysOf = <T extends Record<string, string>>(record: T) => Object.keys(record) as [keyof T & string, ...(keyof T & string)[]];

export const lookSchema = z.object({
  body: z.enum(BODIES),
  skin: z
    .number()
    .int()
    .min(0)
    .max(SKIN_TONES.length - 1),
  hair: z.enum(HAIR_STYLES),
  hairColor: z.enum(keysOf(HAIR_COLORS)),
  facialHair: z.enum(FACIAL_HAIR),
  glasses: z.enum(GLASSES),
  top: z.enum(keysOf(TOP_COLORS)),
  bottom: z.enum(keysOf(BOTTOM_COLORS)),
});
export type Look = z.infer<typeof lookSchema>;

export const CHARACTER_NAME_MAX = 16;
export const DEFAULT_CHARACTER_NAME = 'Champ';

/** Body of `PUT /api/character`: the look, the name and which earned gear is worn. */
export const characterSchema = z.object({
  name: z.string().trim().min(1, 'Give your character a name.').max(CHARACTER_NAME_MAX),
  look: lookSchema,
  gear: z.partialRecord(z.enum(GEAR_KEYS), z.boolean()).default({}),
});
export type CharacterBody = z.infer<typeof characterSchema>;
/** `users.character`: null until the person makes their character. */
export type StoredCharacter = CharacterBody & { madeAt: string };

/** The starting looks for Girl and Guy in the editor; everything can be changed. */
export const DEFAULT_LOOKS: Record<Body, Look> = {
  girl: { body: 'girl', skin: 1, hair: 'long', hairColor: 'brown', facialHair: 'none', glasses: 'none', top: 'orange', bottom: 'navy' },
  guy: { body: 'guy', skin: 3, hair: 'short', hairColor: 'black', facialHair: 'none', glasses: 'none', top: 'blue', bottom: 'navy' },
};

/** What a local day earned (CHARACTER.md §3). Flags only ever turn on, so levels never go down. */
export type DayFlags = { showedUp: boolean; protein: boolean; water: boolean; fiber: boolean };
export const DAY_XP = { showedUp: 10, protein: 10, water: 5, fiber: 5 } as const;

export function dayXp(day: DayFlags) {
  return (day.showedUp ? DAY_XP.showedUp : 0) + (day.protein ? DAY_XP.protein : 0) + (day.water ? DAY_XP.water : 0) + (day.fiber ? DAY_XP.fiber : 0);
}

export const MAX_LEVEL = 50;

/** XP at which `level` starts: 5 × (n − 1) × (n + 4) (level 2 at 30, 5 at 180, 10 at 630). */
export function levelStart(level: number) {
  return 5 * (level - 1) * (level + 4);
}

export function levelFor(xp: number) {
  let level = 1;
  while (level < MAX_LEVEL && xp >= levelStart(level + 1)) level += 1;
  return level;
}

/** Shoulders and arms grow with protein days, never with weight: 0, 1 at 10 days, 2 at 30. */
export function strengthTier(proteinDays: number): 0 | 1 | 2 {
  return proteinDays >= 30 ? 2 : proteinDays >= 10 ? 1 : 0;
}
/** A warm glow around the character from this many water days. */
export const GLOW_WATER_DAYS = 14;
/** A streak flame by the level from this many days in a row. */
export const STREAK_FLAME_DAYS = 7;
export const STREAK_MILESTONES = [7, 14, 30, 50, 100, 200, 365] as const;

export function earnedGear(level: number): GearKey[] {
  return GEAR.filter((g) => level >= g.level).map((g) => g.key);
}

export type Mood = 'happy' | 'waiting' | 'missing';

const dayNumber = (isoDate: string) => Date.parse(`${isoDate}T00:00:00Z`) / 86_400_000;

/** Happy after showing up today; missing you after two or more days away; otherwise waiting (also before the first log). */
export function moodFor(today: string, showedUpToday: boolean, lastShowedUp: string | null): Mood {
  if (showedUpToday) return 'happy';
  if (!lastShowedUp) return 'waiting';
  return dayNumber(today) - dayNumber(lastShowedUp) >= 2 ? 'missing' : 'waiting';
}

export type CharacterStats = {
  /** Days the protein goal was reached (Strength). */
  proteinDays: number;
  /** Days the water goal was reached (Energy). */
  waterDays: number;
  /** Days the fiber goal was reached (Vitality). */
  fiberDays: number;
  /** Days with a logged meal, ever. */
  daysShownUp: number;
  /** Days in a row with a logged meal (the app's streak). */
  streak: number;
};

/** `GET /api/character`. */
export type CharacterResponse = {
  character: StoredCharacter | null;
  level: number;
  xp: number;
  /** XP at which this level started, and the next one starts (null at the top level). */
  levelStart: number;
  nextLevelStart: number | null;
  stats: CharacterStats;
  /** What today earned (it stays earned if a meal is deleted later). */
  today: DayFlags & { date: string };
  /**
   * The last day with a logged meal as the meals are now (like Home's streak): the mood comes from it,
   * `moodFor(today.date, lastShowedUp === today.date, lastShowedUp)`.
   */
  lastShowedUp: string | null;
  gear: GearKey[];
};
