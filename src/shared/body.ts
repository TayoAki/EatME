import { z } from 'zod';

import type { UnitSystem } from './onboarding';
import { CM_PER_INCH } from './units';

/**
 * Body measurements and progress photos (v2.2). Measurements are stored in cm and shown in cm or
 * inches. Photos stay in the private bucket, only the person sees them, and they never go to AI.
 */

export const MEASUREMENTS = ['waist', 'hips', 'chest', 'arm', 'thigh', 'neck'] as const;
export type Measurement = (typeof MEASUREMENTS)[number];
export const MEASUREMENT_LABELS: Record<Measurement, string> = {
  waist: 'Waist',
  hips: 'Hips',
  chest: 'Chest',
  arm: 'Arm',
  thigh: 'Thigh',
  neck: 'Neck',
};

/** Accepted range for any measurement (cm). */
export const MEASUREMENT_RANGE_CM = { min: 10, max: 250 } as const;

export type MeasurementValues = Partial<Record<Measurement, number | null>>;

const cm = z.number().min(MEASUREMENT_RANGE_CM.min).max(MEASUREMENT_RANGE_CM.max).nullable().optional();

/** `PUT /api/body/measurements/:date`: the day's measurements (in cm); it replaces that day's entry. */
export const measurementsSchema = z
  .object({ waist: cm, hips: cm, chest: cm, arm: cm, thigh: cm, neck: cm })
  .strict()
  .refine((m) => MEASUREMENTS.some((key) => typeof m[key] === 'number'), { message: 'Enter at least one measurement' });
export type MeasurementsBody = z.infer<typeof measurementsSchema>;

export type BodyMeasurement = { id: string; date: string } & Record<Measurement, number | null>;

export const PHOTO_POSES = ['front', 'side', 'back'] as const;
export type PhotoPose = (typeof PHOTO_POSES)[number];
export const PHOTO_POSE_LABELS: Record<PhotoPose, string> = { front: 'Front', side: 'Side', back: 'Back' };

export type ProgressPhoto = {
  id: string;
  date: string;
  pose: PhotoPose;
  /** Signed link that works for 30 minutes. */
  url: string;
  width: number;
  height: number;
};

/** `GET /api/body`: every measurement (oldest first) and every photo (newest first). */
export type BodyResponse = { measurements: BodyMeasurement[]; photos: ProgressPhoto[] };

/** Largest progress photo the server accepts (the app sends about 1,600 px JPEGs). */
export const MAX_PROGRESS_PHOTO_BYTES = 4 * 1024 * 1024;
/** Long side of the photo the app uploads. */
export const PROGRESS_PHOTO_SIZE = 1600;

export const cmToInches = (value: number) => value / CM_PER_INCH;
export const inchesToCm = (value: number) => value * CM_PER_INCH;
export const lengthUnit = (unit: UnitSystem) => (unit === 'metric' ? 'cm' : 'in');

/** A length in the person's unit, to one decimal: "84.5 cm" / "33.3 in". */
export function formatLength(valueCm: number, unit: UnitSystem, withUnit = true) {
  const value = unit === 'metric' ? valueCm : cmToInches(valueCm);
  const text = (Math.round(value * 10) / 10).toFixed(1).replace(/\.0$/, '');
  return withUnit ? `${text} ${lengthUnit(unit)}` : text;
}

/** From the person's unit to cm, kept to 0.1 cm. */
export const toCm = (value: number, unit: UnitSystem) => Math.round((unit === 'metric' ? value : inchesToCm(value)) * 10) / 10;
