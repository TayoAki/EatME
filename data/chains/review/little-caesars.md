# Little Caesars: lines for a person

Guide: https://littlecaesars.com/static/usnutritionguide.pdf (read 2026-10-22). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (1)

The last column comes from `npm run chains:evidence`: whether a draft's numbers sit right after the item's name in the guide text the drafts read. It can't read sizes or sections (one draft called a single 78 g cookie a "6 pack"): check those against the guide, then fix the line and set its check to `person`.

Fix each line in `menus/little-caesars.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B | In the guide text (no AI) |
| --- | --- | --- | --- | --- | --- |
| Crazy Combo* | 1 serving | only in draft B | not found | 840 / 22 / 4.5 / 0 / 5 / 1860 / 135 / 6 / 10 / 26 | B: numbers found after the name (line 51); check the size |

## Spot check (3 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Bacon | 1 serving | 380 / 35 / 12 / 0 / 55 / 1060 / 0 / 0 / 0 / 16 |
| Smoky Ham | 1 serving | 140 / 4.5 / 0 / 0 / 70 / 1830 / 3 / 0 / 3 / 26 |
| Jalapeño Peppers | 1 serving | 80 / 6 / 0 / 0 / 0 / 2000 / 4 / 4 / 0 / 0 |

## Agreed, but the numbers can't be right (1)

Both drafts read these the same way, but sugars or fiber are above the carbs, or saturated and trans fat above the fat: a typo in the guide or a misread table. Check them in the guide, fix the line in `menus/little-caesars.csv` and set its check to `person`.

| Item | Size | Why | Both drafts |
| --- | --- | --- | --- |
| Ranch | 1 container | both drafts read numbers that can't be right (sugars, fiber or fats above their total) | 230 / 23 / 3.5 / 0 / 20 / 48 / 4 / 0 / 32 / 2 |
