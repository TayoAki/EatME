/**
 * Restaurant menu items logged while FatSecret menus were being tried out (switched off, then
 * retired in October 2026). They never reached the App Store build, but a meal logged in testing
 * keeps `meal_items.restaurant`, so the type stays for those rows. What to order (v2.5,
 * WHAT-TO-ORDER.md) has its own chain table and won't use this.
 */

/** Kept on a logged food (`meal_items.restaurant`): which item and serving, and how many. */
export type RestaurantRef = {
  chain: string;
  foodId: string;
  servingId: string;
  serving: string;
  count: number;
};

/** "½", "1½", "2". */
export function countLabel(count: number) {
  const whole = Math.floor(count);
  const half = count - whole === 0.5 ? '½' : '';
  return whole === 0 ? half : `${whole}${half}`;
}
