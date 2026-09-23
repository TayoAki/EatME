import { requireUserId } from '@/lib/server/auth';
import { handle } from '@/lib/server/http';
import { createUploadAuth } from '@/lib/server/imagekit';

/**
 * Signed upload parameters so the app can upload a meal photo straight to ImageKit
 * (faster than sending the photo through our server). The private key never leaves the server.
 */
export const GET = handle(async (request) => {
  const userId = await requireUserId(request);
  return Response.json(await createUploadAuth(userId), { headers: { 'Cache-Control': 'no-store' } });
});
