import { requireUserId } from '@/lib/server/auth';
import { handle, HttpError, readJson } from '@/lib/server/http';
import { createMenuScan, listMenuScans, menuScanResponse, menuUser, requireWhatToOrder } from '@/lib/server/menus';
import { readPhotos } from '@/lib/server/uploads';
import { createMenuScanSchema, MAX_MENU_PHOTOS } from '@/shared/menus';

/** The restaurant's name sent with photos (`X-Restaurant`, URI-encoded). */
function restaurantHeader(request: Request) {
  const raw = request.headers.get('x-restaurant');
  if (!raw) return null;
  try {
    return decodeURIComponent(raw).trim().slice(0, 80) || null;
  } catch {
    throw new HttpError(400, "The restaurant's name could not be read.");
  }
}

/**
 * Reads a menu: JSON `{ lines, restaurant? }` (the dish lines the phone read and the person
 * confirmed) or up to 3 photos of it (JPEGs back to back with `X-Photo-Lengths`, when the phone
 * can't read the text itself). The AI works in the background; the app polls `GET /api/menu-scans/:id`.
 * Counts as an AI scan; Premium after one free try.
 */
export const POST = handle(async (request) => {
  requireWhatToOrder();
  const userId = await requireUserId(request);
  const user = await menuUser(userId);
  let id: string;
  if ((request.headers.get('content-type') ?? '').startsWith('application/json')) {
    const { lines, restaurant } = createMenuScanSchema.parse(await readJson(request));
    id = await createMenuScan(user, { lines }, restaurant || null);
  } else {
    id = await createMenuScan(user, { photos: await readPhotos(request, MAX_MENU_PHOTOS) }, restaurantHeader(request));
  }
  return Response.json(await menuScanResponse(user, id), { status: 201 });
});

/** "Your menus": scans of the last 30 days (they are deleted after that). */
export const GET = handle(async (request) => {
  requireWhatToOrder();
  const userId = await requireUserId(request);
  return Response.json({ scans: await listMenuScans(userId) });
});
