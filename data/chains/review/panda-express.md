# Panda Express: lines for a person

Guide: https://www.pandaexpress.com/nutritioninformation (read 2026-10-22). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (1)

The last column comes from `npm run chains:evidence`: whether a draft's numbers sit right after the item's name in the guide text the drafts read. It can't read sizes or sections (one draft called a single 78 g cookie a "6 pack"): check those against the guide, then fix the line and set its check to `person`.

Fix each line in `menus/panda-express.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B | In the guide text (no AI) |
| --- | --- | --- | --- | --- | --- |
| Panda Crafted Beverages | 24 oz | the guide gives no calories, carbs_g, sugars_g | – / 0 / 0 / 0 / 0 / 0 / – / 0 / – / 0 | – / 0 / 0 / 0 / 0 / 0 / – / 0 / – / 0 | A: numbers found after the name (line 78); check the size, mostly zeros: look; B: numbers found after the name (line 78); check the size, mostly zeros: look |

## Spot check (7 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Fuze Raspberry Tea** | 30 oz | 220 / 0 / 0 / 0 / 0 / 120 / 55 / 1 / 54 / 0 |
| Fried Rice | 12 oz | 610 / 13 / 3 / 0 / 120 / 810 / 109 / 3 / 2 / 15 |
| Dr Pepper | 30 oz | 360 / 0 / 0 / 0 / 0 / 110 / 98 / 1 / 98 / 0 |
| Hi-C Flashin Fruit Punch | 22 oz | 270 / 0 / 0 / 0 / 0 / 90 / 73 / 1 / 72 / 0 |
| Dr Pepper | 12 oz | 140 / 0 / 0 / 0 / 0 / 45 / 39 / 1 / 38 / 0 |
| Sweet & Sour Sauce | 1.8 oz | 70 / 0 / 0 / 0 / 0 / 120 / 21 / 0 / 20 / 0 |
| Honey Sesame Chicken Breast | 6.2 oz | 420 / 20 / 5 / 0 / 35 / 540 / 44 / 2 / 19 / 16 |

## Agreed, but the numbers can't be right (1)

Both drafts read these the same way, but sugars or fiber are above the carbs, or saturated and trans fat above the fat: a typo in the guide or a misread table. Check them in the guide, fix the line in `menus/panda-express.csv` and set its check to `person`.

| Item | Size | Why | Both drafts |
| --- | --- | --- | --- |
| Hi-C Flashin Fruit Punch** | 12 oz | both drafts read numbers that can't be right (sugars, fiber or fats above their total) | 150 / 0 / 0 / 0 / 0 / 50 / 40 / 1 / 69 / 0 |
