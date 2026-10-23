# Slim Chickens: lines for a person

Guide: https://www.slimchickens.com/nutritional-and-allergen-info/ (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (7)

The last column comes from `npm run chains:evidence`: whether a draft's numbers sit right after the item's name in the guide text the drafts read. It can't read sizes or sections (one draft called a single 78 g cookie a "6 pack"): check those against the guide, then fix the line and set its check to `person`.

Fix each line in `menus/slim-chickens.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B | In the guide text (no AI) |
| --- | --- | --- | --- | --- | --- |
| Garden Salad Tray | 4 oz | only in draft B | not found | 13 / 0 / 0 / 0 / 0 / 23 / 2 / 0 / 0 / 0 | B: numbers found after the name (line 330); check the size |
| Honey Jalapeno Pimento Sandwich | 1 each | both read it the same, but its protein, carbs and fat make 985 kcal, not 720 | 720 / 37 / 9 / 0 / 125 / 730 / 114 / 7 / 13 / 49 | 720 / 37 / 9 / 0 / 125 / 730 / 114 / 7 / 13 / 49 | A: numbers found after the name (line 252); check the size; B: numbers found after the name (line 252); check the size |
| Peach Tea | 1 gal | both read it the same, but the build would refuse it (serving_g: Too big: expected number to be <=3000) | 1300 / 0 / 0 / 0 / 0 / 117 / 336 / 0 / 335 / 0 | 1300 / 0 / 0 / 0 / 0 / 117 / 336 / 0 / 335 / 0 | A: numbers found after the name (line 888); check the size; B: numbers found after the name (line 888); check the size |
| Raspberry Tea | 1 gal | both read it the same, but the build would refuse it (serving_g: Too big: expected number to be <=3000) | 1300 / 0 / 0 / 0 / 0 / 117 / 336 / 0 / 335 / 0 | 1300 / 0 / 0 / 0 / 0 / 117 / 336 / 0 / 335 / 0 | A: numbers found after the name (line 912); check the size; B: numbers found after the name (line 912); check the size |
| Sweetened Ice Tea | 1 gal | both read it the same, but the build would refuse it (serving_g: Too big: expected number to be <=3000) | 1300 / 0 / 0 / 0 / 0 / 117 / 336 / 0 / 335 / 0 | 1300 / 0 / 0 / 0 / 0 / 117 / 336 / 0 / 335 / 0 | A: numbers found after the name (line 936); check the size; B: numbers found after the name (line 936); check the size |
| Unsweetened Ice Tea | 1 gal | both read it the same, but the build would refuse it (serving_g: Too big: expected number to be <=3000) | 0 / 0 / 0 / 0 / 0 / 114 / 0 / 0 / 0 / 0 | 0 / 0 / 0 / 0 / 0 / 114 / 0 / 0 / 0 / 0 | A: numbers found after the name (line 954); check the size, mostly zeros: look; B: numbers found after the name (line 954); check the size, mostly zeros: look |
| Lemonade | 1 gal | both read it the same, but the build would refuse it (serving_g: Too big: expected number to be <=3000) | 1600 / 0 / 0 / 0 / 0 / 0 / 416 / 0 / 400 / 0 | 1600 / 0 / 0 / 0 / 0 / 0 / 416 / 0 / 400 / 0 | A: numbers found after the name (line 978); check the size; B: numbers found after the name (line 978); check the size |

## Spot check (9 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| NILLA Banana Pudding Jar | 1 jar | 602 / 27 / 17 / 0 / 23 / 362 / 85 / 0 / 59 / 5 |
| Unsweetened Ice Tea | 1 gal | 0 / 0 / 0 / 0 / 0 / 114 / 0 / 0 / 0 / 0 |
| Fried Okra | 8 wt oz | 535 / 26 / 0 / 0 / 0 / 934 / 68 / 3 / 5 / 8 |
| Cayenne Ranch | 1.5 fl oz | 163 / 16 / 3 / 0 / 9 / 206 / 1 / 0 / 1 / 1 |
| Garlic Parmesan Tender Bite | 1 Each | 57 / 4 / 1 / 0 / 14 / 214 / 1 / 0 / 0 / 5 |
| Coke Zero | 20 fl oz | 0 / 0 / 0 / 0 / 0 / 58 / 0 / 0 / 0 / 0 |
| Peach Tea | 1 gal | 1300 / 0 / 0 / 0 / 0 / 117 / 336 / 0 / 335 / 0 |
| Balsamic | 1.5 fl oz | 90 / 8 / 1 / 0 / 0 / 285 / 6 / 0 / 6 / 0 |
| Hi-C Fruit Punch | 32 fl oz | 427 / 0 / 0 / 0 / 0 / 71 / 118 / 0 / 118 / 0 |
