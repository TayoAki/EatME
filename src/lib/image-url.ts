/**
 * ImageKit URL transformations, applied on the fly by ImageKit's CDN:
 * we store the original photo once and request exactly the size each screen needs.
 * https://imagekit.io/docs/image-transformation
 */
function withTransformation(url: string | null | undefined, transformation: string) {
  if (!url) return undefined;
  if (!url.includes('imagekit.io')) return url;
  return `${url}${url.includes('?') ? '&' : '?'}tr=${transformation}`;
}

/** Square thumbnail for the meal list (3× a 88pt thumbnail). */
export const mealThumbnailUrl = (url: string | null | undefined) =>
  withTransformation(url, 'w-264,h-264,fo-auto,q-80');

/** Wide header image for the meal details screen. */
export const mealHeroUrl = (url: string | null | undefined) =>
  withTransformation(url, 'w-1200,h-900,fo-auto,q-80');
