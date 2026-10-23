import { MAX_MEAL_PHOTO_BYTES, MEAL_PHOTO_FIELD } from '@/shared/meals';

import { HttpError } from './http';

/** Photos sent by the app: meals (and their extra angles) and menus. */

type UploadedFile = { size: number; type: string; arrayBuffer(): Promise<ArrayBuffer> };
type MultipartForm = { get(name: string): UploadedFile | string | null };

/**
 * The photo's bytes. The app sends the JPEG itself as the body (`Content-Type: image/jpeg`);
 * multipart form data with a `photo` field is accepted too (older app versions).
 */
export async function readPhoto(request: Request): Promise<ArrayBuffer> {
  const declaredSize = Number(request.headers.get('content-length') ?? 0);
  if (declaredSize > MAX_MEAL_PHOTO_BYTES + 64 * 1024) throw new HttpError(413, 'That photo is too large.');

  let bytes: ArrayBuffer;
  const contentType = request.headers.get('content-type') ?? '';
  if (contentType.startsWith('image/')) {
    bytes = await request.arrayBuffer();
  } else if (contentType.startsWith('multipart/form-data')) {
    // Typed by hand: the project's global FormData type is React Native's, which has no get().
    const form = (await request.formData().catch(() => null)) as MultipartForm | null;
    const photo = form?.get(MEAL_PHOTO_FIELD);
    if (!photo || typeof photo === 'string') throw new HttpError(400, 'Attach the meal photo.');
    if (photo.type && !photo.type.startsWith('image/')) throw new HttpError(415, 'Only photos can be analyzed.');
    bytes = await photo.arrayBuffer();
  } else {
    throw new HttpError(415, 'Send the meal photo as image/jpeg.');
  }

  if (bytes.byteLength === 0) throw new HttpError(400, 'Attach the meal photo.');
  if (bytes.byteLength > MAX_MEAL_PHOTO_BYTES) throw new HttpError(413, 'That photo is too large.');
  return bytes;
}

/**
 * The photos' bytes: one JPEG as the body, or several (a meal from more angles, a menu's pages)
 * back to back with their sizes in `X-Photo-Lengths` ("48123,51200"). No FormData: Expo's fetch
 * only partly supports it.
 */
export async function readPhotos(request: Request, max: number): Promise<ArrayBuffer[]> {
  const header = request.headers.get('x-photo-lengths');
  if (!header) return [await readPhoto(request)];
  if (Number(request.headers.get('content-length') ?? 0) > max * MAX_MEAL_PHOTO_BYTES + 64 * 1024) {
    throw new HttpError(413, 'Those photos are too large.');
  }
  // Read the body before checking it, so a refusal never cuts the upload off mid-way.
  const bytes = await request.arrayBuffer();
  const lengths = header.split(',').map((value) => Number(value.trim()));
  if (
    lengths.length > max ||
    lengths.some((n) => !Number.isInteger(n) || n <= 0 || n > MAX_MEAL_PHOTO_BYTES)
  ) {
    throw new HttpError(400, `Send between 1 and ${max} photos.`);
  }
  if (!(request.headers.get('content-type') ?? '').startsWith('image/')) throw new HttpError(415, 'Send the photos as image/jpeg.');
  const total = lengths.reduce((sum, n) => sum + n, 0);
  if (bytes.byteLength !== total) throw new HttpError(400, "The photos didn't arrive completely. Please try again.");
  let offset = 0;
  return lengths.map((n) => {
    const photo = bytes.slice(offset, offset + n);
    offset += n;
    return photo;
  });
}
