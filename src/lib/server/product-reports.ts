import { and, desc, eq, gt, inArray, isNotNull, sql } from 'drizzle-orm';

import { db } from '@/db';
import { productReports, products } from '@/db/schema';
import { barcodeCandidates } from '@/shared/barcodes';
import type { ProductReportBody, ProductReportReason, ProductReportSnapshot } from '@/shared/products';

import { HttpError } from './http';
import { FLAG_DAYS } from './products';

/** Reports from this many different people within FLAG_DAYS show everyone "scan the label to be sure". */
const REPORTERS_TO_FLAG = 3;

/** The cached product the person looked at (it was found, so it is in the cache). */
async function reportedProduct(rawCode: string) {
  const codes = barcodeCandidates(rawCode);
  if (!codes) throw new HttpError(400, "That barcode doesn't look right.");
  const [row] = await db
    .select()
    .from(products)
    .where(and(inArray(products.code, codes), isNotNull(products.source)))
    .limit(1);
  if (!row) throw new HttpError(404, "We couldn't find this product.");
  return row;
}

/**
 * Sets or clears the flag from the open reports of the last FLAG_DAYS (one per person). The flag
 * time is the third-newest report's: the flag shows until that report is FLAG_DAYS old, which is
 * when fewer than three recent reports are left.
 */
async function updateFlag(code: string) {
  const [third] = await db
    .select({ at: productReports.updatedAt })
    .from(productReports)
    .where(
      and(
        eq(productReports.code, code),
        eq(productReports.status, 'open'),
        gt(productReports.updatedAt, sql`now() - make_interval(days => ${FLAG_DAYS})`),
      ),
    )
    .orderBy(desc(productReports.updatedAt))
    .offset(REPORTERS_TO_FLAG - 1)
    .limit(1);
  await db
    .update(products)
    .set({ flaggedAt: third?.at ?? null })
    .where(eq(products.code, code));
}

/**
 * "Report a problem": one report per person and product (a new one replaces it). The next lookup
 * fetches the product again (at most once a day); logged meals never change.
 */
export async function reportProduct(userId: string, rawCode: string, { reason, note }: ProductReportBody) {
  const product = await reportedProduct(rawCode);
  const snapshot: ProductReportSnapshot = {
    source: product.source,
    sourceId: product.sourceId,
    fetchedAt: product.fetchedAt.toISOString(),
    // Open Food Facts data stays in the products cache only (ODbL); USDA data is public domain.
    ...(product.source === 'usda' ? { name: product.name, nutrients: product.nutrients } : {}),
  };
  await db
    .insert(productReports)
    .values({ code: product.code, userId, reason, note: note || null, snapshot })
    .onConflictDoUpdate({
      target: [productReports.userId, productReports.code],
      set: { reason, note: note || null, snapshot, status: 'open', updatedAt: new Date() },
    });
  await db
    .update(products)
    .set({ recheckAt: sql`greatest(now(), ${products.fetchedAt} + interval '1 day')` })
    .where(eq(products.code, product.code));
  await updateFlag(product.code);
  return product.code;
}

/** Takes the person's report back. */
export async function withdrawReport(userId: string, rawCode: string) {
  const product = await reportedProduct(rawCode);
  await db.delete(productReports).where(and(eq(productReports.userId, userId), eq(productReports.code, product.code)));
  await updateFlag(product.code);
}

/** The person's own open report of a product, if any. */
export async function myReport(userId: string, code: string): Promise<ProductReportReason | null> {
  const row = await db.query.productReports.findFirst({
    where: and(eq(productReports.userId, userId), eq(productReports.code, code), eq(productReports.status, 'open')),
    columns: { reason: true },
  });
  return row?.reason ?? null;
}
