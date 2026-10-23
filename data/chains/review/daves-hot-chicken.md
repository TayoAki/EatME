# Dave's Hot Chicken: lines for a person

Guide: https://store.daveshotchicken.com/wp-content/uploads/2026/06/DHC-Nutrition-Chart_FOODS.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (17)

The last column comes from `npm run chains:evidence`: whether a draft's numbers sit right after the item's name in the guide text the drafts read. It can't read sizes or sections (one draft called a single 78 g cookie a "6 pack"): check those against the guide, then fix the line and set its check to `person`.

Fix each line in `menus/daves-hot-chicken.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B | In the guide text (no AI) |
| --- | --- | --- | --- | --- | --- |
| Dave's Bites Hot Box | 40 pc (1385g) | only in draft A | 3450 / 226 / 39 / 0 / 465 / 7630 / 167 / 0 / 18 / 165 | not found | A: numbers found after the name (line 48); check the size |
| Dave's Bites Hot Box | 40 pc (1440g) | only in draft A | 3840 / 267 / 45 / 0 / 465 / 9340 / 174 / 0 / 21 / 166 | not found | A: numbers found after the name (line 49); check the size |
| Dave's Hot Mozz Hot Box | 1 serving | only in draft A | 9510 / 845 / 169 / – / 235 / 13180 / 321 / 14 / 48 / 107 | not found | A: numbers found after the name (line 154); check the size |
| Dave's Hot Mozz No Sides - Mild-Reaper | 1 Piece | the guide gives no fiber_g | 430 / 39 / 8 / – / 10 / 660 / 13 / – / 2 / 5 | 430 / 39 / 8 / – / 10 / 660 / 13 / – / 2 / 5 | A: name not in the guide text; B: name not in the guide text |
| Spice - Extra Hot | Per Hot Mozz Piece | the guide gives no saturated_fat_g, fiber_g | 10 / 0 / – / – / – / 270 / 2 / – / 1 / 0 | 10 / 0 / – / – / – / 270 / 2 / – / 1 / 0 | A: numbers found after the name (line 160); check the size; B: numbers found after the name (line 160); check the size |
| Spice - Hot | Per Hot Mozz Piece | the guide gives no saturated_fat_g, fiber_g | 10 / 0 / – / – / – / 280 / 2 / – / 0 / 0 | 10 / 0 / – / – / – / 280 / 2 / – / 0 / 0 | A: numbers found after the name (line 161); check the size; B: numbers found after the name (line 161); check the size |
| Spice - Lite Mild | Per Hot Mozz Piece | the guide gives no saturated_fat_g, fiber_g | 0 / 0 / – / – / – / 130 / 1 / – / 0 / 0 | 0 / 0 / – / – / – / 130 / 1 / – / 0 / 0 | A: numbers found after the name (line 162); check the size, mostly zeros: look; B: numbers found after the name (line 162); check the size, mostly zeros: look |
| Spice - Medium | Per Hot Mozz Piece | the guide gives no saturated_fat_g, fiber_g | 10 / 0 / – / – / – / 200 / 2 / – / 1 / 0 | 10 / 0 / – / – / – / 200 / 2 / – / 1 / 0 | A: numbers found after the name (line 163); check the size; B: numbers found after the name (line 163); check the size |
| Spice - Mild | Per Hot Mozz Piece | the guide gives no saturated_fat_g, fiber_g | 10 / 0 / – / – / – / 260 / 2 / – / 1 / 0 | 10 / 0 / – / – / – / 260 / 2 / – / 1 / 0 | A: numbers found after the name (line 164); check the size; B: numbers found after the name (line 164); check the size |
| Spice - Reaper | Per Hot Mozz Piece | the guide gives no fat_g, saturated_fat_g, fiber_g | 0 / – / – / – / – / 0 / 1 / – / 0 / 0 | 0 / – / – / – / – / 0 / 1 / – / 0 / 0 | A: numbers found after the name (line 165); check the size, mostly zeros: look; B: numbers found after the name (line 165); check the size, mostly zeros: look |
| Top-Loaded Fries, Med/Hot Spice | 389g | only in draft B | not found | 1000 / 61 / 10 / 0 / 45 / 2610 / 91 / 4 / 3 / 20 | B: numbers found after the name (line 66); check the size |
| Dave's Hot Mozz - Not Hot & Lite Mild | 1 piece | only in draft B | not found | 570 / 46 / 9 / – / 15 / 1210 / 28 / – / 4 / 7 | B: name not in the guide text |
| Dave's Hot Mozz No Sides - Not Hot & Lite Mild | 1 piece | only in draft B | not found | 420 / 38 / 8 / – / 10 / 590 / 12 / – / 2 / 5 | B: name not in the guide text |
| Dave's Hot Mozz - Not Hot & Lite Mild | 3 piece | only in draft B | not found | 1410 / 123 / 25 / – / 35 / 2390 / 52 / 2 / 7 / 17 | B: name not in the guide text |
| Dave's Hot Mozz - Not Hot & Lite Mild | 5 piece | only in draft B | not found | 2330 / 201 / 41 / – / 55 / 3700 / 88 / 4 / 12 / 29 | B: name not in the guide text |
| Dave's Hot Mozz Slider - Not Hot & Lite Mild | 1 serving | only in draft B | not found | 650 / 49 / 10 / – / 15 / 1120 / 40 / 2 / 9 / 11 | B: numbers found after the name (line 157); check the size |
| Dave's Hot Mozz Slider w/ Fries - Not Hot & Lite Mild | 1 serving | only in draft B | not found | 1190 / 80 / 16 / – / 15 / 2100 / 96 / 5 / 9 / 14 | B: numbers found after the name (line 159); check the size |

## Spot check (3 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Side Dave's Sauce Cup | 1.5 oz (39g) | 270 / 28 / 4.5 / 0 / 25 / 220 / 3 / 0 / 2 / 0 |
| Mike's Hot Honey Sauce | 42g | 150 / 0 / 0 / 0 / 0 / 0 / 36 / 0 / 28 / 0 |
| Dave's Bites w/Fries, Not Hot & Lite Mild Spice | 10 pc (469g) | 1090 / 55 / 9 / 0 / 100 / 2770 / 98 / 3 / 3 / 47 |
