import { MAX_MENU_LINES, type DishLine } from './menus';

/**
 * What to order (v2.5): the text the phone read on a menu photo (Apple Vision, `modules/menu-text`)
 * turned into dish lines for the confirm step. Plain layout rules: words on one row belong together
 * (a price in a right-hand column joins its dish), a row with a price starts a dish, a short row in
 * capitals is a section, and smaller text under a dish is its description. The person fixes the rest
 * before anything is sent.
 */

/** One piece of text and where it sits on the page: 0–1000, origin at the top left. */
export type TextBox = { text: string; box: { x0: number; x1: number; y0: number; y1: number } };

const PRICE = /^(?:\$\s?)?\d{1,3}(?:[.,]\d{2})?\$?$/;
const TRAILING_PRICE = /\s*(?:\$\s?)?(\d{1,3}(?:[.,]\d{2})?)\s*\$?$/;
/** Hours, phone numbers, web and street addresses: never dishes. */
const NOISE = /(\b\d{1,2}(:\d{2})?\s?(am|pm)\b)|(\(\d{3}\)|\b\d{3}[-. ]\d{3}[-. ]\d{4}\b)|(www\.|https?:|\.com\b)|(\b\d+\s+\w+\s+(st|street|ave|avenue|rd|road|blvd)\b)/i;

type Row = { text: string; price: string | null; height: number; y: number };

/** Groups the boxes into rows (same line of the page), left to right. */
function rows(boxes: readonly TextBox[]): Row[] {
  const sorted = boxes
    .filter((b) => b.text.trim())
    .map((b) => ({ ...b, cy: (b.box.y0 + b.box.y1) / 2, h: Math.max(1, b.box.y1 - b.box.y0) }))
    .sort((a, b) => a.cy - b.cy);
  const groups: (typeof sorted)[] = [];
  for (const b of sorted) {
    const last = groups.at(-1);
    const lastCy = last ? last.reduce((sum, x) => sum + x.cy, 0) / last.length : -Infinity;
    const lastH = last ? Math.max(...last.map((x) => x.h)) : 0;
    if (last && Math.abs(b.cy - lastCy) <= Math.max(lastH, b.h) * 0.5) last.push(b);
    else groups.push([b]);
  }
  return groups.map((group) => {
    const parts = group.sort((a, b) => a.box.x0 - b.box.x0).map((b) => b.text.trim());
    // A price in its own column, or at the end of the dish's own text.
    let price: string | null = null;
    if (parts.length > 1 && PRICE.test(parts.at(-1)!)) price = parts.pop()!;
    let text = parts.join(' ').replace(/\s*\.{3,}\s*/g, ' ').replace(/\s+/g, ' ').trim();
    if (!price) {
      const match = text.match(TRAILING_PRICE);
      if (match && match.index !== undefined && match.index > 2 && /[a-z]/i.test(text.slice(0, match.index))) {
        price = match[0].trim();
        text = text.slice(0, match.index).trim();
      }
    }
    return {
      text,
      price: price ? (price.startsWith('$') ? price.replace(/\s/g, '') : `$${price}`) : null,
      height: Math.max(...group.map((b) => b.h)),
      y: group[0].cy,
    };
  });
}

const letters = (text: string) => (text.match(/[a-z]/gi) ?? []).length;
const median = (values: readonly number[]) => {
  const sorted = [...values].sort((a, b) => a - b);
  return sorted.length ? sorted[Math.floor(sorted.length / 2)] : 0;
};

/** A heading: short, mostly capitals (or ending in a colon), with no price. */
function isHeading(row: Row) {
  if (row.price || row.text.length > 32) return false;
  const caps = (row.text.match(/[A-Z]/g) ?? []).length;
  return row.text.endsWith(':') || (letters(row.text) >= 3 && caps / letters(row.text) > 0.8 && row.text.split(' ').length <= 4);
}

/** Dish lines from the text of one menu page (several pages: call once per page and join). */
export function dishLinesFromText(boxes: readonly TextBox[]): DishLine[] {
  const list = rows(boxes).filter((row) => letters(row.text) >= 2 && !NOISE.test(row.text));
  const priced = list.filter((row) => row.price);
  // On a menu with prices, rows without one are headings or descriptions; without prices, every row may be a dish.
  const withPrices = priced.length >= 2;
  const dishHeight = median((withPrices ? priced : list).map((row) => row.height));
  const dishes: DishLine[] = [];
  let section: string | undefined;
  let open: DishLine | null = null;
  for (const row of list) {
    if (isHeading(row)) {
      section = row.text.replace(/:$/, '').trim().slice(0, 60);
      open = null;
      continue;
    }
    const smaller = row.height < dishHeight * 0.85;
    const description = open && !row.price && (smaller || /^[a-z]/.test(row.text) || (withPrices && row.text.includes(',')));
    if (description && open) {
      open.description = `${open.description ? `${open.description} ` : ''}${row.text}`.slice(0, 300);
      continue;
    }
    if (withPrices && !row.price && open) {
      // A long line under a dish on a priced menu is still its description.
      if (row.text.length > 40) {
        open.description = `${open.description ? `${open.description} ` : ''}${row.text}`.slice(0, 300);
        continue;
      }
    }
    open = { name: row.text.slice(0, 120), ...(row.price ? { price: row.price } : {}), ...(section ? { section } : {}) };
    dishes.push(open);
  }
  const seen = new Set<string>();
  return dishes
    .filter((dish) => dish.name.length >= 2 && !seen.has(dish.name.toLowerCase()) && seen.add(dish.name.toLowerCase()))
    .slice(0, MAX_MENU_LINES);
}
