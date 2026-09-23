import { File } from 'expo-file-system';
import { ImageManipulator, SaveFormat } from 'expo-image-manipulator';
import { Platform } from 'react-native';

import type { Meal } from '@/shared/meals';

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

/**
 * Photo → EatME server (stored in the bucket, meal saved as "analyzing", AI analysis started).
 * The photo is sent as the raw request body — no FormData, which Expo's fetch only partly supports.
 * The caller then polls `GET /api/meals/:id` for the result.
 */
export async function uploadMeal(api: ApiClient, photo: { uri: string; width?: number; height?: number }) {
  const uri = await prepare(photo.uri, photo.width, photo.height);
  const data = await readBytes(uri);
  const { meal } = await api<{ meal: Meal }>('/api/meals', {
    method: 'POST',
    binary: { data, type: 'image/jpeg' },
  });
  return meal;
}
