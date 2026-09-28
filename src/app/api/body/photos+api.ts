import { requireUserId } from '@/lib/server/auth';
import { deleteAllProgressPhotos, saveProgressPhoto } from '@/lib/server/body';
import { DATE_RE, userTimeZone } from '@/lib/server/day';
import { handle, HttpError } from '@/lib/server/http';
import { jpegSize } from '@/lib/server/jpeg';
import { rateLimit } from '@/lib/server/rate-limit';
import { localDate } from '@/lib/server/streak';
import { MAX_PROGRESS_PHOTO_BYTES, PHOTO_POSES, type PhotoPose } from '@/shared/body';

/**
 * A progress photo for `?date=YYYY-MM-DD&pose=front|side|back`, the JPEG itself as the body (like
 * meal photos: no FormData). A retake of that day and pose replaces the old photo. Private: only
 * the person sees it, and it is never sent to the AI.
 */
export const POST = handle(async (request) => {
  const userId = await requireUserId(request);
  const params = new URL(request.url).searchParams;
  const date = params.get('date') ?? '';
  const pose = params.get('pose') ?? '';
  if (!DATE_RE.test(date)) throw new HttpError(400, 'Pass ?date=YYYY-MM-DD');
  if (!(PHOTO_POSES as readonly string[]).includes(pose)) throw new HttpError(400, 'Pose is front, side or back.');
  if (date > localDate(new Date(), await userTimeZone(userId))) throw new HttpError(400, "You can't log things in the future.");
  if (Number(request.headers.get('content-length') ?? 0) > MAX_PROGRESS_PHOTO_BYTES + 64 * 1024) throw new HttpError(413, 'That photo is too large.');
  if (!(request.headers.get('content-type') ?? '').startsWith('image/')) throw new HttpError(415, 'Send the photo as image/jpeg.');
  const bytes = await request.arrayBuffer();
  if (bytes.byteLength === 0) throw new HttpError(400, 'Attach the photo.');
  if (bytes.byteLength > MAX_PROGRESS_PHOTO_BYTES) throw new HttpError(413, 'That photo is too large.');
  const size = jpegSize(bytes);
  if (!size) throw new HttpError(415, 'Send the photo as a JPEG.');
  rateLimit(`progress-photos:${userId}`, 30, 24 * 60 * 60 * 1000);
  const photo = await saveProgressPhoto(userId, date, pose as PhotoPose, bytes, size);
  return Response.json({ photo }, { status: 201 });
});

/** "Delete all photos". */
export const DELETE = handle(async (request) => {
  const userId = await requireUserId(request);
  const deleted = await deleteAllProgressPhotos(userId);
  return Response.json({ deleted });
});
