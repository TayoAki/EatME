import { aiProviders } from '@/lib/server/ai';
import { freeScansPerDay, paymentsEnabled } from '@/lib/server/billing';
import { emailConfigured } from '@/lib/server/email';
import { followUpEnabled, foodQualityEnabled, multiPhotoEnabled } from '@/lib/server/experiments';
import { restaurantsEnabled } from '@/lib/server/fatsecret';
import { handle } from '@/lib/server/http';
import { appleConfigured, googleConfigured } from '@/lib/server/social';
import type { Features } from '@/shared/features';

/** Optional features this server has set up (no sign-in needed: the sign-in screen asks too). */
export const GET = handle(async () => {
  const features: Features = {
    email: emailConfigured(),
    apple: appleConfigured(),
    google: googleConfigured(),
    payments: paymentsEnabled(),
    freeScansPerDay: freeScansPerDay(),
    foodQuality: foodQualityEnabled(),
    multiPhoto: multiPhotoEnabled(),
    followUp: followUpEnabled(),
    restaurants: restaurantsEnabled(),
    aiProviders: aiProviders(),
  };
  return Response.json(features, { headers: { 'Cache-Control': 'public, max-age=300' } });
});
