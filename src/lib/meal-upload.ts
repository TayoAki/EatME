import { ImageManipulator, SaveFormat } from 'expo-image-manipulator';
import { Platform } from 'react-native';

import { MEAL_PHOTO_FIELD, type Meal } from '@/shared/meals';

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

/**
 * Photo → EatME server (stored in the bucket, meal saved as "analyzing", AI analysis started).
 * The caller then polls `GET /api/meals/:id` for the result.
 */
export async function uploadMeal(api: ApiClient, photo: { uri: string; width?: number; height?: number }) {
  const uri = await prepare(photo.uri, photo.width, photo.height);
  const fileName = `meal-${Date.now()}.jpg`;

  const form = new FormData();
  if (Platform.OS === 'web') {
    form.append(MEAL_PHOTO_FIELD, await (await fetch(uri)).blob(), fileName);
  } else {
    // React Native uploads local files from { uri, name, type }.
    form.append(MEAL_PHOTO_FIELD, { uri, name: fileName, type: 'image/jpeg' } as unknown as Blob);
  }

  const { meal } = await api<{ meal: Meal }>('/api/meals', { method: 'POST', form });
  return meal;
}
