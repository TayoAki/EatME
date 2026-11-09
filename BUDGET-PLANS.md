# EatME — Budget plans: meal costs in Plan tomorrow (v2.7 plan)

> Written 9 November 2026 from the owner's ask ("build step 1 cost per meal in plan tomorrow") and the TapCook
> research (`research/tapcook-teardown.md`). Read it with `PLAN.md` (the app as it is) and `AGENTS.md` (how we
> build). People see the app as **Weight Class**; the code keeps EatME. Tick the boxes here as parts ship and add them
> to `PLAN.md`.
>
> **Release:** step 1 is on the branch after Flamie, so it ships in the next App Store version built from it: 1.2.0
> if 1.2 hasn't gone to App Review yet, otherwise 1.3.0 (`app.json`'s version goes up first).

## 1. The idea

TapCook: Budget Meal Plans showed that people want a priced week of food, and its reviewers asked for what it can't
do: calories, protein and GLP-1 help. Weight Class already drafts tomorrow from the person's own meals against their
calorie target, protein target and floor (Plan tomorrow, `NEXT-FEATURES.md` §8). Step 1 adds what that day costs: a
grocery cost on every drafted meal and on the day, and an optional daily budget the draft keeps near. No AI, no
stores, no new permissions.

## 2. Steps

| Step | What | Status |
| --- | --- | --- |
| 1 | Cost per meal and per day in Plan tomorrow, a daily budget, prices from public US data, a Sources entry | **Built** (this file) |
| 2 | A week plan, a small starter set of low-cost, protein-first meals for people without history, a whole-pack shopping list | Only if people use step 1 |
| 3 | A "buy this list" hand-off to a store (Instacart's platform) | Needs the owner's decision: it pays commission, which sits awkwardly with "No ads" |

## 3. Where the prices come from

All public domain (US government works). `npm run prices:build` writes `data/food-prices.json`
(`data/food-prices/README.md`); the server loads it into `food_prices` when it starts.

- **Staples** (37 FNDDS foods: eggs, ground beef, chicken breast, bacon, dried beans, lentils and split peas, milk,
  white bread, rice, pasta, potatoes, cheddar, butter, sugar, bananas, tomatoes, oranges, lettuce): the month's
  **BLS average shelf price**, turned into a price as eaten with a typical cooking yield or the part left after
  peeling (`data/food-prices/staples.csv`).
- **Every other food**: USDA ERS **Purchase to Plate** national average prices (the newest cycle that prices it,
  mostly 2017–18), carried to the same month with the **CPI-U index of its food group**; beef, poultry and eggs follow
  the BLS average prices of ground beef, chicken and eggs. A price more than three times its near neighbours' is
  pulled back to theirs. Alcohol is never priced.
- **Coverage** (prices for September 2026): 4,094 of the 5,432 foods (75.4%); 24 prices pulled back.
- **The check** (9 November 2026), USDA carried forward against the BLS shelf price, per 100 g as eaten, for the 36
  staples USDA prices: median gap 28%, 17 within 25%; dried beans +120% to +196%, lentils +319%, split peas +530%,
  pasta +187%, eggs +21% to +69%, butter +33%, milk +16% to +25%, bread +27%, ground beef −4% to +2%, chicken +17%,
  cheddar +3%, bananas +5%, lettuce −1%. USDA averages everything shoppers buy under one food (canned beans, fresh
  pasta, premium brands), which is why staples use BLS. Other foods therefore run above the plainest store brand.
- **Not checked yet**: real receipts. When the owner has a few, compare them with the app's costs for the same meals
  before 1.x's submission and write the result here.

## 4. What the person sees

- **Each drafted meal**: "520 kcal · 50 g protein · about $2.80" (to the nearest 10 cents). Swap shows the same for
  each choice.
- **The day**, under the totals: "Groceries: about $8.00" (or "about $7.20 for 2 of 3 meals" when some have no
  cost), then "US average prices for September 2026, not your store's". The Sources link above it covers the method.
- **Set a budget** (the pill next to Groceries, and next to Draft tomorrow before there's a draft): Off, $8, $10, $12,
  $15, $20, or any whole dollar from $5 to $100 with − and +. "Plan tomorrow keeps the day's groceries near this with
  your own meals. It never plans less than your minimum to save money." Saving redrafts tomorrow.
- **Over the budget** (as shown, so "about $8.00" is never over $8): "About $1.20 over your $8 budget. These are the
  closest of your own meals that still reach your minimum." (Without "that still reach your minimum" when even the
  biggest day is under it.)
- **Home's evening card**: "About 1,760 kcal · 113 g protein · about $8.00".
- **Calm mode**: no money anywhere and no budget pill; the server ignores the budget, as it hides calories.
- **No cost** for meals whose foods aren't priced: restaurant dishes, barcoded products, quick adds, AI estimates
  without a database food, drinks.

## 5. How costs and the budget work

The maths is in `src/shared/meal-cost.ts` (tested in `meal-cost.test.ts`, `npm test`); the server reads prices in
`src/lib/server/meal-costs.ts`.

- **A meal's cost** = Σ grams × price per 100 g ÷ 100, times the meal's portion. It has a cost only when foods with a
  price make up at least **90% of its weight**; the rest counts at the same price per gram. A saved meal costs what
  its own foods cost; a meal eaten often costs what it cost the last time.
- **A draft** stores each meal's cost with its numbers (`day_plans.items`, no migration: jsonb); drafts made before
  have none.
- **The budget** (`users.preferences.planBudget`, whole dollars, null = off): a day over it adds 1.5 × the share over
  to the draft's score, **capped at 3**, far below the calorie floor's 10, so a budget never plans under the floor.
  Being under earns nothing, so the cheapest day never wins for being cheap. Each meal without a cost adds 0.05, so
  priced meals come first. Swap orders its choices the same way.

## 6. Data and code

- `food_prices` (migration `0028_food_prices`): food id (cascade with `foods`), cents per 100 g, basis (`bls` or the
  Purchase to Plate cycle), version (`2026-09.<hash>`).
- `scripts/build-food-prices.ts`, `data/food-prices/` (staples, README), `data/food-prices.json`,
  `server/food-prices.mjs` (loaded after the foods in `server/index.mjs`), `npm run prices:build`, `npm run db:prices`.
- `src/shared/meal-cost.ts`, `src/shared/day-draft.ts` (`costCents`, `budgetCents`, `draftCost`, the response's
  `cost`, `priceMonth`, `budget`, `overBudget`), `src/lib/server/day-draft.ts`, `src/shared/user.ts`
  (`planBudget`), `src/components/home/plan-tomorrow.tsx`, `src/lib/sources.ts` (Plan tomorrow's method and three
  citations), `legal/support.html` and `legal/privacy.html`.

## 7. Safety, privacy and App Review

- **Never plans less food to save money**: the floor outweighs any budget; no "cheapest" ranking; calm mode hides money.
- **Wording**: "about", "US average prices", "not your store's"; never "save $X", "cheap", "accurate" or "verified".
- **App Review**: no prices or savings in the app name, subtitle, keywords or screenshots (2.3.7, and the new 2.3.14
  of 16 October 2026 on creative assets); the feature is on in the reviewed build (2.5.19); its method and citations
  are on the Sources screen and the support page (1.4.1). No AI, so no consent change.
- **Privacy**: costs are worked out on our server from public prices; the budget is stored with the person's
  preferences and never sent to an AI or a store (`legal/privacy.html`, Plan tomorrow, updated 9 November 2026).

## 8. Build order

- [x] Spec (this file), from the TapCook research
- [x] Price table: the build script, the staples check against BLS, `food_prices` and its loader
- [x] Cost and budget maths with tests (`src/shared/meal-cost.ts`, 14 tests)
- [x] Server: costs on Plan tomorrow's choices and draft, the budget preference, the price month
- [x] App: costs on drafted meals and in Swap, Groceries with the budget pill, the budget sheet, the over-budget note,
      Home's evening card, calm mode; Sources, support page and Privacy Policy
- [x] Browser run against the local server (a test account with two weeks of priced meals: the draft, Swap, the
      budget sheet and redraft, $5 and $15 budgets, calm mode); lint, typecheck, tests
- [ ] A receipt check by the owner (§3), and a phone run of the build (`store/release.md` → Meal costs on a phone)
- [ ] After a month: how many Plan tomorrow meals have a cost (below), then decide on step 2

**Measuring coverage** (Railway → Postgres, read only): the share of last month's meals that would get a cost.

```sql
select round(100.0 * avg((priced / grams >= 0.9)::int), 1) as pct_meals_with_a_cost
from (select sum(mi.grams) grams, sum(case when fp.food_id is null then 0 else mi.grams end) priced
      from meals m join meal_items mi on mi.meal_id = m.id left join food_prices fp on fp.food_id = mi.food_id
      where m.status = 'completed' and m.logged_at > now() - interval '30 days' group by m.id) t
where grams > 0;
```

## 9. Choices made without the owner (easy to change)

- The 90% rule, rounding to 10 cents, and counting unpriced foods at the meal's own price per gram.
- The presets ($8 to $20), the $5–$100 range, and redrafting when the budget changes.
- The budget's weights (1.5 per share over, at most 3) and calm mode ignoring it.
- Staples from BLS, everything else from USDA carried forward; the monthly update by hand.
- Costs only inside Plan tomorrow (Premium) for now; a free cost line on the meal screen can come with step 2.
