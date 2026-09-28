import { z } from 'zod';

import { requireUserId } from '@/lib/server/auth';
import { deleteProgressPhoto } from '@/lib/server/body';
import { handle, HttpError } from '@/lib/server/http';

/** Deletes one progress photo (the row and the file). */
export const DELETE = handle<{ id: string }>(async (request, { id }) => {
  const userId = await requireUserId(request);
  const photoId = z.string().uuid().safeParse(id);
  if (!photoId.success) throw new HttpError(404, 'Photo not found');
  await deleteProgressPhoto(userId, photoId.data);
  return Response.json({ deleted: true });
});
