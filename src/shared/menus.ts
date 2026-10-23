import { z } from 'zod';

import { CHAIN_ITEM_KINDS, type ChainItemKind } from './chains';
import { aiMealItemSchema, type FollowUpChange } from './meals';
import type { DishSource, FitWord, MenuFit, OrderVariant } from './menu-fit';
import type { NutrientAmounts } from './nutrients';

/**
 * What to order (v2.5, WHAT-TO-ORDER.md): menus read from photos (`menu_scans`) and the chains in
 * our own table, with what the app and the server send each other.
 */

export const MENU_SCAN_STATUSES = ['reading', 'ready', 'failed'] as const;
export type MenuScanStatus = (typeof MENU_SCAN_STATUSES)[number];

/** Long menus have pages: up to three photos a scan. */
export const MAX_MENU_PHOTOS = 3;
export const MAX_MENU_LINES = 80;
/** The second pass prices this many dishes from our database; the rest keep the quick estimate. */
export const PRICED_DISHES = 8;
/** Menu scans are deleted after this many days (a nightly job). */
export const MENU_SCAN_KEEP_DAYS = 30;

/** A dish line as the phone read it (or the person typed it), confirmed before the AI sees it. */
export const dishLineSchema = z.object({
  name: z.string().trim().min(2).max(120),
  description: z.string().trim().max(300).optional(),
  price: z.string().trim().max(20).optional(),
  section: z.string().trim().max(60).optional(),
});
export type DishLine = z.infer<typeof dishLineSchema>;

/** Body of `POST /api/menu-scans` as JSON: the confirmed dish lines and the restaurant's name. */
export const createMenuScanSchema = z
  .object({
    lines: z.array(dishLineSchema).min(1, 'Add at least one dish.').max(MAX_MENU_LINES),
    restaurant: z.string().trim().max(80).optional(),
  })
  .strict();
export type CreateMenuScanBody = z.infer<typeof createMenuScanSchema>;

/** The restaurant's name sent with photos (`X-Restaurant` header, URI-encoded). */
export const MENU_PHOTO_FIELD = 'photo';

/**
 * How far an estimate can be off, from the accuracy pilot (WHAT-TO-ORDER.md §11, `data/chains/pilot.md`):
 * the share below and above the number, per kind of dish, and the correction for a measured
 * underestimate (numbers are multiplied by it before anything is shown). `quick`: the AI's own first
 * estimate, before our database priced it.
 */
export const ESTIMATE_CALIBRATION = {
  correction: 1,
  estimate: {
    main: { below: 0.25, above: 0.3 },
    side: { below: 0.3, above: 0.35 },
    drink: { below: 0.3, above: 0.35 },
    dessert: { below: 0.3, above: 0.35 },
    extra: { below: 0.4, above: 0.4 },
  },
  quick: {
    main: { below: 0.35, above: 0.45 },
    side: { below: 0.4, above: 0.5 },
    drink: { below: 0.4, above: 0.5 },
    dessert: { below: 0.4, above: 0.5 },
    extra: { below: 0.5, above: 0.5 },
  },
} satisfies {
  correction: number;
  estimate: Record<ChainItemKind, { below: number; above: number }>;
  quick: Record<ChainItemKind, { below: number; above: number }>;
};

/** The calories an estimate could be, rounded to 10. */
export function estimateRange(calories: number, kind: ChainItemKind, source: 'estimate' | 'quick') {
  const { below, above } = ESTIMATE_CALIBRATION[source][kind];
  return { low: Math.round((calories * (1 - below)) / 10) * 10, high: Math.round((calories * (1 + above)) / 10) * 10 };
}

/** What a tweak a server can make does to the dish's foods: leave them out, or have them on the side (about half eaten). */
export const TWEAK_ACTIONS = ['remove', 'on_side'] as const;
export type TweakAction = (typeof TWEAK_ACTIONS)[number];
export const TWEAK_SHARE: Record<TweakAction, number> = { remove: 0, on_side: 0.5 };

/** The question asked before ordering, when the answer moves the number most. */
export const MENU_QUESTION_KINDS = ['prep', 'size'] as const;
export type MenuQuestionKind = (typeof MENU_QUESTION_KINDS)[number];
export const MENU_QUESTION_WORDING: Record<MenuQuestionKind, string> = {
  prep: 'How is it cooked?',
  size: 'Which size?',
};

/** The AI's reading of one menu line (first pass): foods, portions, its own quick numbers, likely tweaks. */
export const menuDishAnalysisSchema = z.object({
  line: z.number().int().min(1).max(MAX_MENU_LINES),
  isDish: z.boolean(),
  kind: z.enum(CHAIN_ITEM_KINDS),
  items: z.array(aiMealItemSchema).max(12),
  tweaks: z
    .array(
      z.object({
        label: z.string().transform((label) => label.trim().slice(0, 40)),
        items: z.array(z.number().int().min(1).max(12)).min(1).max(4),
        action: z.enum(TWEAK_ACTIONS),
      }),
    )
    .transform((tweaks) => tweaks.slice(0, 2))
    .catch([]),
  question: z
    .object({
      kind: z.enum(MENU_QUESTION_KINDS),
      item: z.number().int().min(0).max(12),
      options: z
        .array(
          z.object({
            label: z.string().transform((l) => l.trim().slice(0, 30)),
            food: z.string().max(160),
            grams: z.number().min(0).max(3000),
          }),
        )
        .transform((options) => options.slice(0, 3)),
    })
    .nullable()
    .catch(null),
});
export type MenuDishAnalysis = z.infer<typeof menuDishAnalysisSchema>;

export const menuAnalysisSchema = z.object({
  /** "fast food", "cafe", "casual dining"…: portions follow the kind of restaurant. */
  restaurantType: z.string().max(40),
  dishes: z.array(menuDishAnalysisSchema).max(MAX_MENU_LINES),
});
export type MenuAnalysis = z.infer<typeof menuAnalysisSchema>;

/** Lines read from a menu photo by the AI (when the phone can't read the text itself). */
export const menuReadingSchema = z.object({
  isMenu: z.boolean(),
  lines: z.array(z.object({ name: z.string().max(120), description: z.string().max(300), price: z.string().max(20), section: z.string().max(60) })).max(MAX_MENU_LINES),
});

/** A food of a scanned dish, with its numbers (from the database, or the AI's own estimate). */
export type ScanDishItem = {
  id: string;
  name: string;
  foodId: number | null;
  grams: number;
  nutrients: NutrientAmounts;
  aiName: string | null;
  /** From the person's remembered foods ("Your usual"): its product, or the food itself. */
  productCode?: string | null;
  personalFoodId?: string | null;
};

/** A tweak with the dish's numbers after it. */
export type ScanTweak = { label: string; itemIds: string[]; action: TweakAction; calories: number; proteinG: number };

/** The question with its answers worked out (no AI call when the person answers). */
export type MenuQuestionState = {
  kind: MenuQuestionKind;
  question: string;
  /** The food it is about. */
  about: string | null;
  options: { label: string; calories: number; change: FollowUpChange }[];
};

/** One dish of a menu scan (`menu_scans.dishes`). */
export type ScanDish = {
  /** Its line on the confirmed list (1-based): the dish's key. */
  n: number;
  name: string;
  description: string | null;
  section: string | null;
  price: string | null;
  kind: ChainItemKind;
  items: ScanDishItem[];
  /** For the whole dish as served. */
  nutrients: NutrientAmounts;
  /** `estimate`: priced from our database; `quick`: the AI's own first estimate. */
  source: Extract<DishSource, 'estimate' | 'quick'>;
  range: { low: number; high: number };
  tweaks: ScanTweak[];
  question: MenuQuestionState | null;
};

/** Where a chain's number comes from, shown wherever it is (Apple 1.4.1). */
export type ChainCitation = { chain: string; sourceUrl: string; checkedOn: string };

/** A row of a menu list in the app: the dish, its numbers and where they come from, and how it fits. */
export type MenuRow = {
  /** The chain item's id, or the scanned dish's line number. */
  key: string;
  name: string;
  section: string | null;
  serving: string | null;
  description: string | null;
  kind: ChainItemKind;
  source: DishSource;
  calories: number;
  proteinG: number;
  carbsG: number;
  fatG: number;
  range: { low: number; high: number } | null;
  citation: ChainCitation | null;
  /** The ranking (absent in the list of a dish that wasn't ranked). */
  variant: OrderVariant;
  rankedCalories: number;
  fit: FitWord;
  reason: string;
  overBudget: boolean;
  tweaks: { label: string; calories: number; proteinG: number }[];
  question: { kind: MenuQuestionKind; question: string; about: string | null; options: { label: string; calories: number }[] } | null;
};

/** A ranked menu for the person's day (a chain's menu, or a scan). */
export type MenuList = Omit<MenuFit, 'fitsWell' | 'others' | 'hidden'> & {
  fitsWell: MenuRow[];
  others: MenuRow[];
  /** How many dishes were left out because they mention a food the person skips. */
  hiddenCount: number;
  hidden: MenuRow[];
  /** This list is the person's one free try of What to order (Premium after it). */
  freeTry: boolean;
};

/** `GET /api/chains?q=`: chains in our table. */
export type ChainSummary = { slug: string; name: string; items: number; checkedOn: string };

/** `GET /api/chains/:slug/menu`. */
export type ChainMenuResponse = MenuList & {
  chain: { slug: string; name: string; guideUrl: string | null; checkedOn: string };
};

/** `GET /api/menu-scans/:id`. */
export type MenuScanResponse = {
  id: string;
  status: MenuScanStatus;
  restaurant: string | null;
  error: string | null;
  list: MenuList | null;
  createdAt: string;
};

/** Body of the log and save routes for a dish: whole or half, a tweak, the question's answer, a side. */
export const orderDishSchema = z
  .object({
    /** Made by the app for each order: the meal gets this id, so tapping twice logs once. */
    requestId: z.string().uuid(),
    variant: z.enum(['whole', 'half']).default('whole'),
    tweak: z.number().int().min(0).max(1).optional(),
    option: z.number().int().min(0).max(2).optional(),
    /** A chain's side or drink added to the order (at most two items an order). */
    sideId: z.string().uuid().optional(),
    /** Logs it on an earlier day; today when left out (local). */
    date: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/)
      .optional(),
  })
  .strict();
export type OrderDishBody = z.infer<typeof orderDishSchema>;

export const CHAIN_ITEM_REPORT_REASONS = ['wrong_numbers', 'not_on_menu', 'wrong_item', 'other'] as const;
export type ChainItemReportReason = (typeof CHAIN_ITEM_REPORT_REASONS)[number];
export const CHAIN_ITEM_REPORT_LABELS: Record<ChainItemReportReason, string> = {
  wrong_numbers: 'The numbers are wrong',
  not_on_menu: "It's not on the menu any more",
  wrong_item: "It's a different item",
  other: 'Something else',
};
export const chainItemReportSchema = z
  .object({
    reason: z.enum(CHAIN_ITEM_REPORT_REASONS),
    note: z.string().trim().max(300).optional(),
  })
  .strict();
export type ChainItemReportBody = z.infer<typeof chainItemReportSchema>;

/** Foods to skip (Profile → Preferences): a short list of words. */
export const MAX_FOODS_TO_SKIP = 12;
export const foodsToSkipSchema = z
  .array(z.string().trim().min(2).max(30))
  .max(MAX_FOODS_TO_SKIP)
  .transform((foods) => [...new Set(foods.map((food) => food.toLowerCase()))]);

/** What a meal logged from a menu keeps (`meal_items.menu`): the source travels with it. */
export type MenuRef = {
  /** `chain`: our table (with its citation); `scan`: a menu photo estimate. */
  from: 'chain' | 'scan';
  dish: string;
  chainItemId?: string;
  citation?: ChainCitation;
  /** Estimates: the calorie range when logged. */
  range?: { low: number; high: number };
  restaurant?: string | null;
  variant: OrderVariant;
  tweak?: string | null;
};

/** What the scan screen shows while the server works out the dishes. */
export const MENU_ANALYSIS_STAGES = [
  { after: 0, label: 'Reading the menu…' },
  { after: 5, label: 'Working out what fits…' },
  { after: 14, label: 'Almost done…' },
] as const;
