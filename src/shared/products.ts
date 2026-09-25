import { z } from 'zod';

import type { NutrientAmounts } from './nutrients';

/** Where a packaged product's numbers come from. */
export const PRODUCT_SOURCES = ['off', 'usda'] as const;
export type ProductSource = (typeof PRODUCT_SOURCES)[number];

export const PRODUCT_SOURCE_LABELS: Record<ProductSource, string> = {
  off: 'Open Food Facts',
  usda: 'USDA FoodData Central',
};

/** `GET /api/products/:code`: a packaged product found by its barcode. Nutrients are per 100 g. */
export type Product = {
  code: string;
  name: string;
  brand: string | null;
  source: ProductSource;
  /** As printed, e.g. "1 can (355 ml)". */
  servingSize: string | null;
  servingGrams: number | null;
  /** The whole package, when known. */
  packageGrams: number | null;
  nutrients: NutrientAmounts;
  /** Calories, protein, carbs and fat are all known, so it can be logged. */
  complete: boolean;
  /** The product's page at the source (Open Food Facts or FoodData Central). */
  sourceUrl: string | null;
  /** When EatME last fetched the numbers from the source. */
  checkedAt: string;
  /** Several people reported it lately: everyone is asked to check the label. */
  flagged: boolean;
};

/** `GET /api/products/:code`: the product, and the signed-in person's own report of it. */
export type ProductResponse = { product: Product; myReport: ProductReportReason | null };

/** Why someone reports a product (barcode fixes). */
export const PRODUCT_REPORT_REASONS = ['wrong_product', 'wrong_numbers', 'missing_numbers', 'other'] as const;
export type ProductReportReason = (typeof PRODUCT_REPORT_REASONS)[number];
export const PRODUCT_REPORT_LABELS: Record<ProductReportReason, string> = {
  wrong_product: 'Wrong product',
  wrong_numbers: 'Wrong numbers',
  missing_numbers: 'Missing numbers',
  other: 'Something else',
};

/** `open` until the product is fetched again with different data (`refetched`) or someone checks it (`resolved`). */
export const PRODUCT_REPORT_STATUSES = ['open', 'refetched', 'resolved'] as const;

/** Body of `POST /api/products/:code/report`. */
export const productReportSchema = z
  .object({
    reason: z.enum(PRODUCT_REPORT_REASONS),
    note: z.string().trim().max(300).optional(),
  })
  .strict();
export type ProductReportBody = z.infer<typeof productReportSchema>;

/**
 * What the reporter saw. Open Food Facts values are never copied out of the products cache (ODbL);
 * USDA's (public domain) are kept so a later check can compare.
 */
export type ProductReportSnapshot = {
  source: ProductSource | null;
  sourceId: string | null;
  fetchedAt: string;
  name?: string | null;
  nutrients?: NutrientAmounts | null;
};

/** The brand, unless the product name already says it ("Nutella" by Nutella). */
export function distinctBrand(product: Pick<Product, 'name' | 'brand'>) {
  const brand = product.brand?.trim();
  return brand && !product.name.toLowerCase().includes(brand.toLowerCase()) ? brand : null;
}

const grams = z.number().min(1).max(3000);

/** `POST /api/meals` as JSON: a packaged product by its barcode, and how much of it. */
export const barcodeMealSchema = z.object({
  barcode: z.object({ code: z.string().regex(/^\d{8,14}$/, 'That barcode is not valid.'), grams }),
});

/** `POST /api/meals` as JSON: a food from the USDA database, and how much of it. */
export const foodMealSchema = z.object({
  food: z.object({ foodId: z.number().int().positive(), grams }),
});
