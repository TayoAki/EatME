import { File } from 'expo-file-system';
import { ImageManipulator, SaveFormat } from 'expo-image-manipulator';
import { Platform } from 'react-native';

import type { Meal, PhotoMode } from '@/shared/meals';
import { toPlateItem, type PlateLine } from '@/shared/restaurants';

import type { ApiClient } from './api';

/** The vision model looks at a small copy anyway; 1280 px keeps uploads fast on mobile data. */
const MAX_UPLOAD_SIZE = 1280;

/** Resize + compress to JPEG before uploading. */
async function prepare(uri: string, width?: number, height?: number) {
  const longest = Math.max(width ?? 0, height ?? 0);
  const context = ImageManipulator.manipulate(uri);
  if (longest > MAX_UPLOAD_SIZE) {
    context.resize(width && height && width >= height ? { width: MAX_UPLOAD_SIZE } : { height: MAX_UPLOAD_SIZE });
  }
  const image = await context.renderAsync();
  const result = await image.saveAsync({ compress: 0.75, format: SaveFormat.JPEG });
  return result.uri;
}

/** The JPEG's bytes: read from the phone's file system, or from the browser's blob on web. */
async function readBytes(uri: string): Promise<Uint8Array | ArrayBuffer> {
  if (Platform.OS === 'web') return (await fetch(uri)).arrayBuffer();
  return new File(uri).bytes();
}

type UploadOptions = {
  /** A photo of a meal (estimated) or of a nutrition-facts label (read). */
  mode?: PhotoMode;
  /** What the photo can't show, e.g. "cooked in 2 tbsp olive oil". Meals only. */
  note?: string;
};

/**
 * Photos → EatME server (stored in the bucket, meal saved as "analyzing", AI analysis started).
 * The photo is sent as the raw request body — no FormData, which Expo's fetch only partly supports.
 * Several photos of the same meal (up to 3) go back to back, their sizes in `X-Photo-Lengths`.
 * The caller then polls `GET /api/meals/:id` for the result.
 */
export async function uploadMeal(
  api: ApiClient,
  photos: readonly { uri: string; width?: number; height?: number }[],
  { mode = 'meal', note }: UploadOptions = {},
) {
  const parts = await Promise.all(
    photos.map(async (photo) => new Uint8Array(await readBytes(await prepare(photo.uri, photo.width, photo.height)))),
  );
  const data = new Uint8Array(parts.reduce((sum, part) => sum + part.byteLength, 0));
  let offset = 0;
  for (const part of parts) {
    data.set(part, offset);
    offset += part.byteLength;
  }
  const trimmed = note?.trim();
  const headers: Record<string, string> = {};
  if (trimmed && mode === 'meal') headers['X-Meal-Note'] = encodeURIComponent(trimmed);
  if (parts.length > 1) headers['X-Photo-Lengths'] = parts.map((part) => part.byteLength).join(',');
  const { meal } = await api<{ meal: Meal }>(`/api/meals${mode === 'label' ? '?mode=label' : ''}`, {
    method: 'POST',
    binary: { data, type: 'image/jpeg' },
    headers,
  });
  return meal;
}

/** A meal described in words: the server estimates it with AI, like a photo. */
export async function describeMeal(api: ApiClient, text: string) {
  const { meal } = await api<{ meal: Meal }>('/api/meals', { method: 'POST', body: { text: text.trim() } });
  return meal;
}

/** A packaged product by its barcode: saved right away with the label's numbers (no AI). */
export async function logProduct(api: ApiClient, code: string, grams: number) {
  const { meal } = await api<{ meal: Meal }>('/api/meals', { method: 'POST', body: { barcode: { code, grams } } });
  return meal;
}

/** A plate from restaurant menus: the server fetches the numbers (no AI). `save` keeps it in Saved meals. */
export async function logRestaurantPlate(api: ApiClient, lines: readonly PlateLine[], save = false) {
  const { meal } = await api<{ meal: Meal }>('/api/meals', {
    method: 'POST',
    body: { restaurant: { items: lines.map(toPlateItem), ...(save ? { save: true } : {}) } },
  });
  return meal;
}

/** A food from the USDA database search: saved right away (no AI). */
export async function logFood(api: ApiClient, foodId: number, grams: number) {
  const { meal } = await api<{ meal: Meal }>('/api/meals', { method: 'POST', body: { food: { foodId, grams } } });
  return meal;
}
