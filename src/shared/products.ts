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
