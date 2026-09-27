import { z } from 'zod';

import { requireUserId } from '@/lib/server/auth';
import { toMedicine, updateMedicine } from '@/lib/server/glp1';
import { handle, HttpError, readJson } from '@/lib/server/http';
import { rateLimit } from '@/lib/server/rate-limit';
import { updateMedicineSchema } from '@/shared/glp1';

/** Fixes a medicine's name (Other), form or dates. Periods of different medicines can't overlap. */
export const PATCH = handle<{ id: string }>(async (request, { id }) => {
  const userId = await requireUserId(request);
  rateLimit(`glp1-medicine:${userId}`, 60, 60 * 60 * 1000);
  const medicineId = z.string().uuid().safeParse(id);
  if (!medicineId.success) throw new HttpError(404, 'Medicine not found');
  const body = updateMedicineSchema.parse(await readJson(request));
  const row = await updateMedicine(userId, medicineId.data, body);
  return Response.json({ medicine: toMedicine(row) });
});
