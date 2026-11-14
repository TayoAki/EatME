import { CalendarDays, Clock, Drumstick, Flame, Pill, Utensils, Wallet, type LucideIcon } from 'lucide-react-native';

/**
 * "What's gotten in the way before?" (onboarding, PLAN.md §3): each answer shows the part of Weight Class made for
 * it, there and on the plan-ready screen. The answers stay on this phone: never sent to the server, the AI, analytics
 * or Sentry (one of them is about a medicine).
 */
export const OBSTACLES = ['logging', 'eatingOut', 'whatToEat', 'consistency', 'hunger', 'budget', 'glp1'] as const;
export type Obstacle = (typeof OBSTACLES)[number];

/** The server's switches that change what's true for an answer (`GET /api/features`). */
export type ObstacleFlags = { payments: boolean; whatToOrder: boolean };

type ObstacleInfo = {
  title: string;
  icon: LucideIcon;
  /** What in the app helps, in one line; Premium parts say so whenever payments are on. */
  help: (flags: ObstacleFlags) => string;
};

/** " (Premium)" when there is a Premium to buy. */
const premium = (flags: ObstacleFlags, extra = '') => (flags.payments ? ` (Premium${extra})` : '');

export const OBSTACLE_INFO: Record<Obstacle, ObstacleInfo> = {
  logging: {
    title: 'Logging takes too long',
    icon: Clock,
    help: () => 'Snap a photo and AI estimates the calories and macros. Barcodes and search work too.',
  },
  eatingOut: {
    title: 'Eating out and takeout',
    icon: Utensils,
    help: (flags) =>
      flags.whatToOrder
        ? `What to order ranks dishes at big chains for what's left of your day${premium(flags, ', one free try')}.`
        : 'Snap a restaurant meal and AI estimates it.',
  },
  whatToEat: {
    title: 'Not knowing what to eat',
    icon: CalendarDays,
    help: (flags) => `Plan tomorrow drafts a day from meals you've logged${premium(flags)}.`,
  },
  consistency: {
    title: 'Staying consistent',
    icon: Flame,
    help: () => 'Flamie, your streak flame, grows with every day you log.',
  },
  hunger: {
    title: 'Feeling hungry',
    icon: Drumstick,
    help: () => 'Your plan has a daily protein target, and every meal shows its protein.',
  },
  budget: {
    title: 'What food costs',
    icon: Wallet,
    help: (flags) => `Plan tomorrow shows about what a day of groceries costs, at US average prices${premium(flags)}.`,
  },
  glp1: {
    title: 'Eating enough on a GLP-1 medicine',
    icon: Pill,
    help: () => 'GLP-1 mode keeps your doses and side effects next to your meals and weight.',
  },
};
