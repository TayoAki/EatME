# Dave's Hot Chicken: lines for a person

Guide: https://store.daveshotchicken.com/wp-content/uploads/2026/06/DHC-Nutrition-Chart_FOODS.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (17)

Fix each line in `menus/daves-hot-chicken.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B |
| --- | --- | --- | --- | --- |
| Dave's Bites Hot Box | 40 pc (1385g) | only in draft A | 3450 / 226 / 39 / 0 / 465 / 7630 / 167 / 0 / 18 / 165 | not found |
| Dave's Bites Hot Box | 40 pc (1440g) | only in draft A | 3840 / 267 / 45 / 0 / 465 / 9340 / 174 / 0 / 21 / 166 | not found |
| Dave's Hot Mozz Hot Box | 1 serving | only in draft A | 9510 / 845 / 169 / – / 235 / 13180 / 321 / 14 / 48 / 107 | not found |
| Dave's Hot Mozz No Sides - Mild-Reaper | 1 Piece | the guide gives no fiber_g | 430 / 39 / 8 / – / 10 / 660 / 13 / – / 2 / 5 | 430 / 39 / 8 / – / 10 / 660 / 13 / – / 2 / 5 |
| Spice - Extra Hot | Per Hot Mozz Piece | the guide gives no saturated_fat_g, fiber_g | 10 / 0 / – / – / – / 270 / 2 / – / 1 / 0 | 10 / 0 / – / – / – / 270 / 2 / – / 1 / 0 |
| Spice - Hot | Per Hot Mozz Piece | the guide gives no saturated_fat_g, fiber_g | 10 / 0 / – / – / – / 280 / 2 / – / 0 / 0 | 10 / 0 / – / – / – / 280 / 2 / – / 0 / 0 |
| Spice - Lite Mild | Per Hot Mozz Piece | the guide gives no saturated_fat_g, fiber_g | 0 / 0 / – / – / – / 130 / 1 / – / 0 / 0 | 0 / 0 / – / – / – / 130 / 1 / – / 0 / 0 |
| Spice - Medium | Per Hot Mozz Piece | the guide gives no saturated_fat_g, fiber_g | 10 / 0 / – / – / – / 200 / 2 / – / 1 / 0 | 10 / 0 / – / – / – / 200 / 2 / – / 1 / 0 |
| Spice - Mild | Per Hot Mozz Piece | the guide gives no saturated_fat_g, fiber_g | 10 / 0 / – / – / – / 260 / 2 / – / 1 / 0 | 10 / 0 / – / – / – / 260 / 2 / – / 1 / 0 |
| Spice - Reaper | Per Hot Mozz Piece | the guide gives no fat_g, saturated_fat_g, fiber_g | 0 / – / – / – / – / 0 / 1 / – / 0 / 0 | 0 / – / – / – / – / 0 / 1 / – / 0 / 0 |
| Top-Loaded Fries, Med/Hot Spice | 389g | only in draft B | not found | 1000 / 61 / 10 / 0 / 45 / 2610 / 91 / 4 / 3 / 20 |
| Dave's Hot Mozz - Not Hot & Lite Mild | 1 piece | only in draft B | not found | 570 / 46 / 9 / – / 15 / 1210 / 28 / – / 4 / 7 |
| Dave's Hot Mozz No Sides - Not Hot & Lite Mild | 1 piece | only in draft B | not found | 420 / 38 / 8 / – / 10 / 590 / 12 / – / 2 / 5 |
| Dave's Hot Mozz - Not Hot & Lite Mild | 3 piece | only in draft B | not found | 1410 / 123 / 25 / – / 35 / 2390 / 52 / 2 / 7 / 17 |
| Dave's Hot Mozz - Not Hot & Lite Mild | 5 piece | only in draft B | not found | 2330 / 201 / 41 / – / 55 / 3700 / 88 / 4 / 12 / 29 |
| Dave's Hot Mozz Slider - Not Hot & Lite Mild | 1 serving | only in draft B | not found | 650 / 49 / 10 / – / 15 / 1120 / 40 / 2 / 9 / 11 |
| Dave's Hot Mozz Slider w/ Fries - Not Hot & Lite Mild | 1 serving | only in draft B | not found | 1190 / 80 / 16 / – / 15 / 2100 / 96 / 5 / 9 / 14 |

## Spot check (3 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Side Dave's Sauce Cup | 1.5 oz (39g) | 270 / 28 / 4.5 / 0 / 25 / 220 / 3 / 0 / 2 / 0 |
| Mike's Hot Honey Sauce | 42g | 150 / 0 / 0 / 0 / 0 / 0 / 36 / 0 / 28 / 0 |
| Dave's Bites w/Fries, Not Hot & Lite Mild Spice | 10 pc (469g) | 1090 / 55 / 9 / 0 / 100 / 2770 / 98 / 3 / 3 / 47 |
