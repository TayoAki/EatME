import { ImageManipulator, SaveFormat } from 'expo-image-manipulator';
import { Platform } from 'react-native';

import type { Meal } from '@/shared/meals';

import type { ApiClient } from './api';

type UploadAuth = {
  token: string;
  expire: number;
  signature: string;
  publicKey: string;
  folder: string;
  uploadUrl: string;
};

export type CreatedMeal = { meal: Meal; runId: string; publicAccessToken: string };

const MAX_UPLOAD_SIZE = 1600;

/** Resize + compress before uploading: faster uploads on mobile data, same result for the AI. */
async function prepare(uri: string, width?: number, height?: number) {
  const longest = Math.max(width ?? 0, height ?? 0);
  const context = ImageManipulator.manipulate(uri);
  if (longest > MAX_UPLOAD_SIZE) {
    context.resize(width && height && width >= height ? { width: MAX_UPLOAD_SIZE } : { height: MAX_UPLOAD_SIZE });
  }
  const image = await context.renderAsync();
  const result = await image.saveAsync({ compress: 0.8, format: SaveFormat.JPEG });
  return result.uri;
}

/** Uploads the photo straight to ImageKit with signed params from our API. */
async function uploadToImageKit(api: ApiClient, uri: string) {
  const auth = await api<UploadAuth>('/api/imagekit/auth');
  const fileName = `meal-${Date.now()}.jpg`;

  const form = new FormData();
  if (Platform.OS === 'web') {
    const blob = await (await fetch(uri)).blob();
    form.append('file', blob, fileName);
  } else {
    form.append('file', { uri, name: fileName, type: 'image/jpeg' } as unknown as Blob);
  }
  form.append('fileName', fileName);
  form.append('publicKey', auth.publicKey);
  form.append('signature', auth.signature);
  form.append('expire', String(auth.expire));
  form.append('token', auth.token);
  form.append('folder', auth.folder);
  form.append('useUniqueFileName', 'true');

  const res = await fetch(auth.uploadUrl, { method: 'POST', body: form });
  if (!res.ok) throw new Error(`Photo upload failed (${res.status})`);
  const json = (await res.json()) as { fileId: string; url: string };
  return json;
}

/** Photo → ImageKit → meal row (analyzing) → analyze-meal task. Returns the Realtime handle. */
export async function uploadAndAnalyzeMeal(
  api: ApiClient,
  photo: { uri: string; width?: number; height?: number },
): Promise<CreatedMeal> {
  const uri = await prepare(photo.uri, photo.width, photo.height);
  const { fileId } = await uploadToImageKit(api, uri);
  return api<CreatedMeal>('/api/meals', { method: 'POST', body: { fileId } });
}
