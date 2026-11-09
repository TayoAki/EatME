# Food prices for meal costs

What 100 g of each USDA FNDDS food costs as eaten, for the grocery costs in Plan tomorrow (`BUDGET-PLANS.md`). All
sources are US government works (public domain). The built file is `../food-prices.json`; the server loads it into
`food_prices` when it starts (`server/food-prices.mjs`).

| Path | What it is |
| --- | --- |
| `staples.csv` | Staples priced from the month's BLS average shelf price (series on FRED). `grams` is how many grams of the food as eaten one unit makes: a typical cooking yield (1 lb of dried beans cooks to about 1,111 g) or the part left after peeling (64% of a pound of bananas). `codes` are the FNDDS foods it prices |
| `.cache/` | The USDA Purchase to Plate download (git-ignored) |

Every other food uses USDA ERS's Purchase to Plate national average prices (the newest cycle that prices it, mostly
2017–18), carried to the same month with the CPI-U index of its food group; beef, poultry and eggs use the BLS
average prices of ground beef, chicken and eggs instead, because the public files break out no finer CPI group. A
price more than three times its near neighbours' (same first six code digits) is pulled back to theirs. Alcoholic
drinks are never priced.

```bash
npm run prices:build -- --check   # the staples check only: USDA carried forward against the BLS shelf price
npm run prices:build              # download, check, write data/food-prices.json (commit it)
npm run db:prices                 # load it into DATABASE_URL by hand (the server does it when it starts)
```

**Each month**, after BLS publishes the CPI (around the middle of the month, for the month before): run
`npm run prices:build`, commit `data/food-prices.json`, and deploy. The app shows the month of the prices. When USDA
publishes the 2021–23 Purchase to Plate prices (not before spring 2027), update the download link in
`scripts/build-food-prices.ts`, add the cycle to `CYCLES`, and run the check again.

Why staples use BLS: on 9 November 2026 the check put USDA's carried-forward prices a median 28% above the BLS shelf
price for the 36 staple foods, and far above it for dried beans (+120% to +196%), lentils and split peas (+319%,
+530%) and pasta (+187%), because USDA averages everything shoppers bought (canned beans, fresh pasta, premium
brands) under one food. FRED answers 503 to unnamed scripts, so the build sends its own user agent and fetches one
series at a time.
