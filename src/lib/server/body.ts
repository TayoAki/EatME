import { and, asc, desc, eq, gte, lte } from 'drizzle-orm';

import { db } from '@/db';
import { bodyMeasurements, progressPhotos, type BodyMeasurementRow, type ProgressPhotoRow } from '@/db/schema';
import { MEASUREMENTS, type BodyMeasurement, type BodyResponse, type MeasurementsBody, type PhotoPose, type ProgressPhoto } from '@/shared/body';

import { HttpError } from './http';
import { describeError } from './log';
import { deleteObject, listKeys, progressPhotoKey, progressPhotosPrefix, putObject, signedGetUrl } from './storage';

/** Progress photo links work for 30 minutes (a meal photo's for 6 hours). */
const PHOTO_LINK_SECONDS = 30 * 60;

const COLUMNS = {
  waist: 'waistCm',
  hips: 'hipsCm',
  chest: 'chestCm',
  arm: 'armCm',
  thigh: 'thighCm',
  neck: 'neckCm',
} as const satisfies Record<(typeof MEASUREMENTS)[number], keyof BodyMeasurementRow>;

export function toMeasurement(row: BodyMeasurementRow): BodyMeasurement {
  return {
    id: row.id,
    date: row.date,
    ...(Object.fromEntries(MEASUREMENTS.map((key) => [key, row[COLUMNS[key]]])) as Record<(typeof MEASUREMENTS)[number], number | null>),
  };
}

export async function toProgressPhoto(row: ProgressPhotoRow): Promise<ProgressPhoto> {
  return { id: row.id, date: row.date, pose: row.pose, url: await signedGetUrl(row.key, PHOTO_LINK_SECONDS), width: row.width, height: row.height };
}

/** Measurements (oldest first) and photos (newest first), optionally between two dates. */
export async function bodyOf(userId: string, from?: string, to?: string): Promise<BodyResponse> {
  const range = <T extends typeof bodyMeasurements.date | typeof progressPhotos.date>(column: T) => [
    ...(from ? [gte(column, from)] : []),
    ...(to ? [lte(column, to)] : []),
  ];
  const [measurements, photos] = await Promise.all([
    db
      .select()
      .from(bodyMeasurements)
      .where(and(eq(bodyMeasurements.userId, userId), ...range(bodyMeasurements.date)))
      .orderBy(asc(bodyMeasurements.date)),
    db
      .select()
      .from(progressPhotos)
      .where(and(eq(progressPhotos.userId, userId), ...range(progressPhotos.date)))
      .orderBy(desc(progressPhotos.date), asc(progressPhotos.pose)),
  ]);
  return { measurements: measurements.map(toMeasurement), photos: await Promise.all(photos.map(toProgressPhoto)) };
}

/** Saves a day's measurements, replacing what was saved that day. */
export async function saveMeasurements(userId: string, date: string, body: MeasurementsBody) {
  const values = Object.fromEntries(MEASUREMENTS.map((key) => [COLUMNS[key], body[key] ?? null])) as Pick<
    BodyMeasurementRow,
    (typeof COLUMNS)[keyof typeof COLUMNS]
  >;
  const [row] = await db
    .insert(bodyMeasurements)
    .values({ userId, date, ...values })
    .onConflictDoUpdate({ target: [bodyMeasurements.userId, bodyMeasurements.date], set: values })
    .returning();
  return toMeasurement(row);
}

export async function deleteMeasurements(userId: string, date: string) {
  const deleted = await db
    .delete(bodyMeasurements)
    .where(and(eq(bodyMeasurements.userId, userId), eq(bodyMeasurements.date, date)))
    .returning({ id: bodyMeasurements.id });
  if (deleted.length === 0) throw new HttpError(404, 'Nothing saved that day');
}

/** Stores a progress photo; a retake of the same day and pose replaces the old photo. */
export async function saveProgressPhoto(
  userId: string,
  date: string,
  pose: PhotoPose,
  bytes: ArrayBuffer,
  size: { width: number; height: number },
) {
  const id = crypto.randomUUID();
  const key = progressPhotoKey(userId, id);
  await putObject(key, bytes, 'image/jpeg');
  let replaced: string[] = [];
  try {
    const row = await db.transaction(async (tx) => {
      const old = await tx
        .delete(progressPhotos)
        .where(and(eq(progressPhotos.userId, userId), eq(progressPhotos.date, date), eq(progressPhotos.pose, pose)))
        .returning({ key: progressPhotos.key });
      replaced = old.map((r) => r.key);
      const [inserted] = await tx.insert(progressPhotos).values({ id, userId, date, pose, key, ...size }).returning();
      return inserted;
    });
    await Promise.all(replaced.map((k) => deleteObject(k).catch((error: unknown) => console.warn(`[body] old photo not deleted: ${describeError(error)}`))));
    return toProgressPhoto(row);
  } catch (error) {
    await deleteObject(key).catch(() => undefined);
    throw error;
  }
}

export async function deleteProgressPhoto(userId: string, id: string) {
  const [row] = await db
    .delete(progressPhotos)
    .where(and(eq(progressPhotos.id, id), eq(progressPhotos.userId, userId)))
    .returning({ key: progressPhotos.key });
  if (!row) throw new HttpError(404, 'Photo not found');
  await deleteObject(row.key);
}

/** "Delete all photos": every row and everything under progress/<userId>/ in the bucket. */
export async function deleteAllProgressPhotos(userId: string) {
  const rows = await db.delete(progressPhotos).where(eq(progressPhotos.userId, userId)).returning({ key: progressPhotos.key });
  const keys = [...new Set([...rows.map((r) => r.key), ...(await listKeys(progressPhotosPrefix(userId)))])];
  const results = await Promise.allSettled(keys.map((key) => deleteObject(key)));
  const failed = results.filter((r) => r.status === 'rejected').length;
  if (failed) console.error(`[body] ${failed} progress photo(s) could not be deleted`);
  return rows.length;
}
