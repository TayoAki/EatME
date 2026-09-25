import { emailConfigured } from '@/lib/server/email';
import { handle } from '@/lib/server/http';
import type { Features } from '@/shared/features';

/** Optional features this server has set up (no sign-in needed: the sign-in screen asks too). */
export const GET = handle(async () => {
  const features: Features = { email: emailConfigured() };
  return Response.json(features, { headers: { 'Cache-Control': 'public, max-age=300' } });
});
