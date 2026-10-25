/**
 * Chain meals matched by themselves (WHAT-TO-ORDER.md §5): the AI names a chain, a dish as the chain's menu
 * calls it and the size; this finds the one chain and the one item of our chain table they mean, or nothing.
 * Anything uncertain is no match: the meal keeps its estimate. Shared and pure so it is tested.
 */

/** The header the v2.5 app sends: chain meals are matched only for an app that shows their citations. */
export const CLIENT_FEATURES_HEADER = 'X-Weight-Class-Features';
export const CHAIN_MATCH_FEATURE = 'chain-match';

/** Names people and the AI use for a chain that its own name doesn't cover. */
const CHAIN_ALIASES: Record<string, string> = {
  mcd: 'mcdonalds',
  mcds: 'mcdonalds',
  mickeyds: 'mcdonalds',
  cfa: 'chick-fil-a',
  dq: 'dairy-queen',
  bww: 'buffalo-wild-wings',
  bdubs: 'buffalo-wild-wings',
  cheesecake: 'the-cheesecake-factory',
};

/** Size words as menus write them, to one spelling each. */
const SIZE_SPELLINGS: Record<string, string> = {
  sm: 'small',
  sml: 'small',
  med: 'medium',
  md: 'medium',
  lg: 'large',
  lrg: 'large',
  reg: 'regular',
  kid: 'kids',
  kiddie: 'kids',
  jr: 'junior',
  pc: 'ct',
  pcs: 'ct',
  piece: 'ct',
  pieces: 'ct',
  count: 'ct',
  oz: 'oz',
  ounce: 'oz',
  ounces: 'oz',
};

const ARTICLES = new Set(['a', 'an', 'the']);

export function normalizeName(text: string) {
  return text
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[®™©*†‡]/g, '')
    .replace(/&/g, ' and ')
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9%.]+/g, ' ')
    .replace(/(?<!\d)\.|\.(?!\d)/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

const compact = (text: string) => normalizeName(text).replace(/ /g, '');
/** "nuggets" and "nugget", "fries" and "fry", "sandwiches" and "sandwich" compare as one word. */
const stem = (word: string) =>
  word.length <= 3
    ? word
    : word.endsWith('ies')
      ? `${word.slice(0, -3)}y`
      : /(ch|sh|x|ss)es$/.test(word)
        ? word.slice(0, -2)
        : word.endsWith('s') && !word.endsWith('ss')
          ? word.slice(0, -1)
          : word;
const words = (text: string) => normalizeName(text).split(' ').filter((word) => word && !ARTICLES.has(word)).map(stem);

/** A chain by the name used for it ("McDonalds", "Chick fil A", "DQ", "Dunkin Donuts"); null when unsure. */
export function findChain<T extends { slug: string; name: string }>(chains: readonly T[], said: string): T | null {
  const wanted = compact(said);
  if (wanted.length < 2) return null;
  const alias = CHAIN_ALIASES[wanted];
  const exact = chains.filter((chain) => compact(chain.name) === wanted || chain.slug.replace(/-/g, '') === wanted || chain.slug === alias);
  if (exact.length === 1) return exact[0];
  if (exact.length > 1) return null;
  // The chain's whole name, then more words ("Dunkin Donuts" for Dunkin', "Starbucks Coffee" for Starbucks).
  const starts = chains.filter((chain) => compact(chain.name).length >= 4 && wanted.startsWith(compact(chain.name)));
  return starts.length === 1 ? starts[0] : null;
}

/** How close a dish name is to an item's name, once the chain's own name is taken out of both; 0 = not it. */
function nameScore(said: readonly string[], item: readonly string[]) {
  const p = new Set(said);
  const q = new Set(item);
  if (p.size === 0 || q.size === 0) return 0;
  const shared = [...p].filter((word) => q.has(word)).length;
  if (shared === p.size && shared === q.size) return 3;
  // Every word said is in the item's name ("Fries" for "French Fries"): fewer extra words come first.
  if (shared === p.size) return 2 - Math.min(0.9, (q.size - shared) / 10);
  // Every word of the item's name was said ("Big Mac Sandwich" for "Big Mac").
  if (shared === q.size) return 1.5 - Math.min(0.9, (p.size - shared) / 10);
  const jaccard = shared / new Set([...p, ...q]).size;
  return jaccard >= 0.6 ? jaccard : 0;
}

const sizeWords = (text: string) =>
  normalizeName(text)
    .replace(/(\d)([a-z])/g, '$1 $2')
    .split(' ')
    .filter(Boolean)
    .map((word) => SIZE_SPELLINGS[word] ?? word);

/** Whether an item is the size said ("Medium", "8 ct", "10 piece"): every size word in its size or name. */
function fitsSize(size: string, item: { name: string; serving: string }) {
  const wanted = sizeWords(size);
  if (wanted.length === 0) return false;
  const has = new Set([...sizeWords(item.serving), ...sizeWords(item.name)]);
  return wanted.every((word) => has.has(word));
}

const DEFAULT_SIZE = /\b(medium|regular|med|reg|grande)\b/i;

/** Sizes besides the usual one. A guide may list only some of a dish's sizes, so one of these is never assumed. */
const OTHER_SIZES = new Set(['small', 'large', 'kids', 'junior', 'mini', 'snack', 'value', 'jumbo', 'tall', 'venti', 'trenta', 'short', 'family', 'half', 'ct', 'xl']);
/** "Small", "Large (179g)" or "4 Piece" name a size; "1 serving", "113g" and "Medium" don't. */
const namesOtherSize = (serving: string) => sizeWords(serving).some((word) => OTHER_SIZES.has(word));
const namesSize = (serving: string) => namesOtherSize(serving) || DEFAULT_SIZE.test(serving);

export type ChainDishCandidate = { id: string; name: string; serving: string; calories: number };

/**
 * The usual size when a guide left its name out: "Small (96g)", "125g", "Large (179g)" (Chick-fil-A's waffle
 * fries). The one size named nothing, every other one named, and it sits between them.
 */
function unnamedUsual<T extends ChainDishCandidate>(sizes: readonly T[]) {
  const unnamed = sizes.filter((item) => !namesOtherSize(item.serving) && !DEFAULT_SIZE.test(item.serving));
  if (unnamed.length !== 1 || sizes.length < 3) return null;
  const named = sizes.filter((item) => item !== unnamed[0]);
  const below = named.some((item) => item.calories < unnamed[0].calories);
  const above = named.some((item) => item.calories > unnamed[0].calories);
  return below && above ? unnamed[0] : null;
}

/**
 * The item of one chain a dish means: the best name (one name only, else no match), then the size said, or with
 * no size the only size (when it isn't called small, large or a count) or the one called medium or regular
 * (`sizeGuessed`). A medium the guide left unnamed comes with `sizeName`. Null when unsure.
 */
export function pickChainDish<T extends ChainDishCandidate>(
  items: readonly T[],
  dish: string,
  size: string,
  chainName: string,
): { item: T; sizeGuessed: boolean; sizeName?: string } | null {
  const chainWords = new Set(words(chainName));
  const without = (text: string) => words(text).filter((word) => !chainWords.has(word));
  const said = without(dish);
  if (said.length === 0) return null;

  let best = 0;
  let names = new Set<string>();
  for (const item of items) {
    const score = nameScore(said, without(item.name));
    const name = normalizeName(item.name);
    if (score > best + 1e-9) {
      best = score;
      names = new Set([name]);
    } else if (score > 0 && Math.abs(score - best) < 1e-9) {
      names.add(name);
    }
  }
  // Two different dishes fit as well as each other ("Burger" at a burger chain): not sure, no match.
  if (best === 0 || names.size !== 1) return null;
  const [name] = names;
  const sizes = items.filter((item) => normalizeName(item.name) === name);

  if (size.trim()) {
    const fit = sizes.filter((item) => fitsSize(size, item));
    if (fit.length === 1) return { item: fit[0], sizeGuessed: false };
    const middle = fit.length === 0 && DEFAULT_SIZE.test(size) ? unnamedUsual(sizes) : null;
    return middle ? { item: middle, sizeGuessed: false, sizeName: 'Medium' } : null;
  }
  // The one size the guide lists, unless it is another size than the usual ("Small" fries, "4 Piece" nuggets).
  if (sizes.length === 1) return namesOtherSize(sizes[0].serving) ? null : { item: sizes[0], sizeGuessed: false };
  const usual = sizes.filter((item) => DEFAULT_SIZE.test(item.serving));
  if (usual.length === 1) return { item: usual[0], sizeGuessed: true };
  const middle = usual.length === 0 ? unnamedUsual(sizes) : null;
  return middle ? { item: middle, sizeGuessed: true, sizeName: 'Medium' } : null;
}

/** How many of the dish were eaten, within reason (a typo of "20" never becomes twenty burgers' numbers). */
export const chainServings = (servings: number | undefined) =>
  Number.isFinite(servings) && (servings ?? 0) > 0 ? Math.min(6, Math.max(0.25, Math.round((servings ?? 1) * 4) / 4)) : 1;

// ── Food search ─────────────────────────────────────────────────────────────────────────────────

export type ChainSearchEntry = ChainDishCandidate & { chain: string; chainSlug: string; calories: number; rank: number | null };

const rawWords = (text: string) => normalizeName(text).split(' ').filter((word) => word && !ARTICLES.has(word));

/** An item's words for search, made once: its name without its chain's own name (as typed and stemmed), and its size. */
export function chainSearchIndex<T extends ChainSearchEntry>(entries: readonly T[]) {
  return entries.map((entry) => {
    const chainWords = new Set(words(entry.chain));
    const name = rawWords(entry.name).filter((word) => !chainWords.has(stem(word)));
    return { entry, name, stems: name.map(stem), serving: sizeWords(entry.serving), key: `${entry.chainSlug}|${name.join(' ')}` };
  });
}
type SearchIndex<T extends ChainSearchEntry> = ReturnType<typeof chainSearchIndex<T>>;

/** The chain a search names first or last ("mcdonalds fries", "nuggets chick fil a"), with the other words. */
function chainNamed<C extends { slug: string; name: string }>(chains: readonly C[], typed: readonly string[]) {
  for (let k = 1; k < typed.length && k <= 5; k++) {
    const first = findChain(chains, typed.slice(0, k).join(' '));
    if (first) return { chain: first, rest: typed.slice(k), dishLast: true };
    const last = findChain(chains, typed.slice(-k).join(' '));
    if (last) return { chain: last, rest: typed.slice(0, -k), dishLast: false };
  }
  return null;
}

/** A typed word is a name word when it is the same word, inside a longer one ("nuggets" in "McNuggets") or half typed. */
const sameWord = (word: string, typed: string, partial: boolean) =>
  stem(word) === stem(typed) || (typed.length >= 4 && (word.includes(typed) || stem(word).includes(stem(typed)))) || (partial && word.startsWith(typed));

type Indexed = SearchIndex<ChainSearchEntry>[number];

/** Whether a typed word is in the item's name or its size ("12 piece" for "12 ct"). */
function hasWord(item: Indexed, typed: string, partial: boolean) {
  const size = SIZE_SPELLINGS[typed] ?? typed;
  return item.name.some((word) => sameWord(word, typed, partial)) || item.serving.some((word) => word === size || (partial && word.startsWith(size)));
}

/**
 * Chain dishes for a food search ("big mac", "mcdonalds fries", "nuggets chick fil a 12"): every word typed is in
 * the dish's name or size (the last one may be half typed), and a chain named first or last keeps the search to
 * it. The closest names first, then the biggest chains and the smaller sizes; a dish a guide prints twice once.
 */
export function searchChainDishes<T extends ChainSearchEntry>(
  index: SearchIndex<T>,
  chains: readonly { slug: string; name: string }[],
  q: string,
  limit = 5,
): T[] {
  const typed = normalizeName(q).split(' ').filter(Boolean);
  const partial = !/\s$/.test(q);
  const named = chainNamed(chains, typed);
  const search = (said: readonly string[], slug: string | null, lastPartial: boolean) => {
    const wanted = said.filter((word) => !ARTICLES.has(word));
    if (wanted.length === 0) return [];
    const isPartial = (i: number) => lastPartial && i === wanted.length - 1;
    // Name words nobody typed: the fewer, the closer.
    const extra = (item: Indexed) => item.name.filter((word) => !wanted.some((t, i) => sameWord(word, t, isPartial(i)))).length;
    return index
      .filter((item) => (slug === null || item.entry.chainSlug === slug) && wanted.every((word, i) => hasWord(item, word, isPartial(i))))
      .map((item) => ({ item, extra: extra(item) }))
      .sort(
        (a, b) =>
          a.extra - b.extra ||
          (a.item.entry.rank ?? 10_000) - (b.item.entry.rank ?? 10_000) ||
          a.item.key.localeCompare(b.item.key) ||
          a.item.entry.calories - b.item.entry.calories ||
          Number(namesSize(b.item.entry.serving)) - Number(namesSize(a.item.entry.serving)) ||
          b.item.entry.serving.length - a.item.entry.serving.length,
      );
  };
  // A chain named but nothing of it found: the words may be a dish's after all ("chipotle chicken sandwich").
  let ranked = named ? search(named.rest, named.chain.slug, partial && named.dishLast) : [];
  const inChain = ranked.length > 0;
  if (!inChain) ranked = search(typed, null, partial);

  const seen = new Set<string>();
  const results: T[] = [];
  for (const { item } of ranked) {
    const key = `${item.key}|${item.entry.calories}`;
    if (seen.has(key)) continue;
    seen.add(key);
    results.push(item.entry);
    // One chain's sizes need a few more rows.
    if (results.length === (inChain ? limit + 3 : limit)) break;
  }
  return results;
}
