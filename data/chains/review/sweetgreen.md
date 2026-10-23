# Sweetgreen: lines for a person

Guide: https://www.sweetgreen.com/nutrition/ (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (1)

The last column comes from `npm run chains:evidence`: whether a draft's numbers sit right after the item's name in the guide text the drafts read. It can't read sizes or sections (one draft called a single 78 g cookie a "6 pack"): check those against the guide, then fix the line and set its check to `person`.

Fix each line in `menus/sweetgreen.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B | In the guide text (no AI) |
| --- | --- | --- | --- | --- | --- |
| OLIPOP Vintage Cola | 12 oz | both read it the same, but its protein, carbs and fat make 64 kcal, not 35 | 35 / 0 / 0 / 0 / 0 / 25 / 16 / 9 / 2 / 0 | 35 / 0 / 0 / 0 / 0 / 25 / 16 / 9 / 2 / 0 | A: numbers found after the name (line 138); check the size; B: numbers found after the name (line 138); check the size |

## Spot check (3 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Autumn Harvest Bowl | 508 g | 900 / 51 / 12 / 0 / 95 / 1675 / 71 / 13 / 17 / 39 |
| Molly’s Double Chick Scoop | 272 g | 385 / 26 / 2 / 0 / 120 / 1420 / 3 / 0 / 0 / 34 |
| Mini Mezze | 225 g | 295 / 8 / 1 / 0 / 55 / 730 / 26 / 3 / 1 / 30 |
