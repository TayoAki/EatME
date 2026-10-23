import type { MenuScanResponse } from '@/shared/menus';

import type { ApiClient } from './api';
import { prepareJpeg, readBytes } from './meal-upload';

/** Menus have small print: the AI reads them from a larger copy than meal photos (when the phone can't). */
const MENU_UPLOAD_SIZE = 2000;

/**
 * Menu photos → EatME server, when the phone can't read the text itself (Android, older builds): up to
 * 3 pages back to back with their sizes in `X-Photo-Lengths`, the restaurant's name in `X-Restaurant`.
 * The server deletes them once the AI has read them.
 */
export async function uploadMenu(api: ApiClient, photos: readonly { uri: string; width?: number; height?: number }[], restaurant?: string) {
  const parts = await Promise.all(
    photos.map(
      async (photo) =>
        new Uint8Array(await readBytes(await prepareJpeg(photo.uri, photo.width, photo.height, { maxSize: MENU_UPLOAD_SIZE, compress: 0.8 }))),
    ),
  );
  const data = new Uint8Array(parts.reduce((sum, part) => sum + part.byteLength, 0));
  let offset = 0;
  for (const part of parts) {
    data.set(part, offset);
    offset += part.byteLength;
  }
  const headers: Record<string, string> = {};
  if (parts.length > 1) headers['X-Photo-Lengths'] = parts.map((part) => part.byteLength).join(',');
  if (restaurant?.trim()) headers['X-Restaurant'] = encodeURIComponent(restaurant.trim());
  return api<MenuScanResponse>('/api/menu-scans', { method: 'POST', binary: { data, type: 'image/jpeg' }, headers });
}
