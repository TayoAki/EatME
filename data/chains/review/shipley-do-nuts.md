# Shipley Do-Nuts: lines for a person

Guide: https://shipleydonuts.com/2022-Nutritional-Website.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (6)

The last column comes from `npm run chains:evidence`: whether a draft's numbers sit right after the item's name in the guide text the drafts read. It can't read sizes or sections (one draft called a single 78 g cookie a "6 pack"): check those against the guide, then fix the line and set its check to `person`.

Fix each line in `menus/shipley-do-nuts.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B | In the guide text (no AI) |
| --- | --- | --- | --- | --- | --- |
| Cream Cheese Roll | 1 Ea. | both read it the same, but its protein, carbs and fat make 410 kcal, not 310 | 310 / 18 / 6 / 0 / 0 / 320 / 56 / 2 / 18 / 6 | 310 / 18 / 6 / 0 / 0 / 320 / 56 / 2 / 18 / 6 | A: numbers found after the name (line 60); check the size; B: numbers found after the name (line 60); check the size |
| Glazed | 1 Ea. | both read it the same, but its protein, carbs and fat make 213 kcal, not 180 | 180 / 13 / 6 / 0 / 0 / 212 / 22 / 0 / 11 / 2 | 180 / 13 / 6 / 0 / 0 / 212 / 22 / 0 / 11 / 2 | A: numbers found after the name (line 66); check the size; B: numbers found after the name (line 66); check the size |
| Plain | 1 Ea. | both read it the same, but its protein, carbs and fat make 197 kcal, not 160 | 160 / 13 / 6 / 0 / 0 / 207 / 18 / 0 / 7 / 2 | 160 / 13 / 6 / 0 / 0 / 207 / 18 / 0 / 7 / 2 | A: numbers found after the name (line 67); check the size; B: numbers found after the name (line 67); check the size |
| Cold Brew Bold Black | Medium (16Oz) | both read it the same, but the build would refuse it (calories: whole kcal, as the guide prints it) | 7.5 / 0 / 0 / 0 / 0 / 0 / 1 / 0 / 0 / 0 | 7.5 / 0 / 0 / 0 / 0 / 0 / 1 / 0 / 0 / 0 | A: numbers found after the name (line 95); check the size, mostly zeros: look; B: numbers found after the name (line 95); check the size, mostly zeros: look |
| Cold Brew Bold Black | Large (20Oz) | both read it the same, but the build would refuse it (calories: whole kcal, as the guide prints it) | 11.25 / 0 / 0 / 0 / 0 / 0 / 2 / 0 / 0 / 0 | 11.25 / 0 / 0 / 0 / 0 / 0 / 2 / 0 / 0 / 0 | A: numbers found after the name (line 95); check the size, mostly zeros: look; B: numbers found after the name (line 95); check the size, mostly zeros: look |
| Cookies & Cream | 16Oz | both read it the same, but its protein, carbs and fat make 341 kcal, not 470 | 470 / 21 / 19 / 0 / 15 / 182 / 31 / 0 / 27 / 7 | 470 / 21 / 19 / 0 / 15 / 182 / 31 / 0 / 27 / 7 | A: numbers found after the name (line 118); check the size; B: numbers found after the name (line 118); check the size |

## Spot check (4 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Cinnamon Rolls | 1 Ea. | 320 / 15 / 7 / 0 / 0 / 287 / 39 / 2 / 4 / 6 |
| Vitamin D Milk | 16Oz | 150 / 8 / 5 / 0 / 35 / 125 / 12 / 0 / 12 / 8 |
| Ham & Cheese | 1 Ea. | 360 / 16 / 7 / 0 / 25 / 832 / 39 / 2 / 5 / 13 |
| Cinnamon Twist | 1 Ea. | 340 / 15 / 7 / 0 / 0 / 288 / 46 / 2 / 12 / 6 |
