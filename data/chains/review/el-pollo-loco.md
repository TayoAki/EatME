# El Pollo Loco: lines for a person

Guide: https://www.elpolloloco.com/content/pdfs/epl_web_nutrition_guide_mod_1_2025_hr.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (7)

The last column comes from `npm run chains:evidence`: whether a draft's numbers sit right after the item's name in the guide text the drafts read. It can't read sizes or sections (one draft called a single 78 g cookie a "6 pack"): check those against the guide, then fix the line and set its check to `person`.

Fix each line in `menus/el-pollo-loco.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B | In the guide text (no AI) |
| --- | --- | --- | --- | --- | --- |
| Chocolate Dipping Sauce | 1.4 oz. | the guide gives no fiber_g | 90 / 0.5 / 0 / 0 / 0 / 45 / 23 / – / 20 / 1 | 90 / 0.5 / 0 / 0 / 0 / 45 / 23 / – / 20 / 1 | A: numbers found after the name (line 83); check the size; B: numbers found after the name (line 83); check the size |
| Horchata | Regular (22.0 oz.) | differ: saturated_fat_g | 170 / 6 / 0 / 0 / 0 / 35 / 28 / 0 / 22 / 0 | 170 / 6 / 6 / 0 / 0 / 35 / 28 / 0 / 22 / 0 | A: not as drafted (line 113 lacks 0); B: not as drafted (line 113 lacks 6) |
| Horchata | Large (34.4 oz.) | differ: fat_g, saturated_fat_g | 260 / 10 / 0 / 0 / 0 / 55 / 44 / 0 / 34 / 0 | 260 / 9 / 10 / 0 / 0 / 55 / 44 / 0 / 34 / 0 | A: not as drafted (line 113 lacks 260, 10, 55, 44, 34, 0); B: not as drafted (line 113 lacks 260, 9, 10, 55, 44, 34) |
| Minute Maid® Aguas Frescas Strawberry Hibiscus | Regular (18.9 oz.) | only in draft B | not found | 90 / 0 / 0 / 0 / 0 / 20 / 23 / 0 / 23 / 0 | B: name not in the guide text |
| Double Shrimp Street Corn Pollo Fit Bowl | 12.5 oz. | both read it the same, but its protein, carbs and fat make 335 kcal, not 430 | 430 / 27 / 7 / 0 / 180 / 1880 / 21 / 5 / 6 / 2 | 430 / 27 / 7 / 0 / 180 / 1880 / 21 / 5 / 6 / 2 | A: numbers found after the name (line 12); check the size; B: numbers found after the name (line 12); check the size |
| Dr Pepper® | Regular (21.6 oz.) | both read it the same, but its protein, carbs and fat make 188 kcal, not 160 | 160 / 0 / 0 / 0 / 0 / 60 / 47 / 0 / 47 / 0 | 160 / 0 / 0 / 0 / 0 / 60 / 47 / 0 / 47 / 0 | A: numbers found after the name (line 101); check the size; B: numbers found after the name (line 101); check the size |
| Dr Pepper® | Large (33.0 oz.) | both read it the same, but its protein, carbs and fat make 288 kcal, not 250 | 250 / 0 / 0 / 0 / 0 / 90 / 72 / 0 / 72 / 0 | 250 / 0 / 0 / 0 / 0 / 90 / 72 / 0 / 72 / 0 | A: not as drafted (line 101 lacks 250, 90, 72, 72); B: not as drafted (line 101 lacks 250, 90, 72, 72) |

## Spot check (5 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Chicken Avocado Taco | 6.4 oz. | 340 / 19 / 6 / 0 / 95 / 800 / 18 / 2 / 2 / 24 |
| Double Chicken Street Corn Pollo Fit Bowl | 13.5 oz. | 440 / 19 / 7 / 0 / 180 / 1560 / 18 / 5 / 5 / 54 |
| FUZE® Sweetened Raspberry Iced Tea | Regular (21.7 oz.) | 110 / 0 / 0 / 0 / 0 / 20 / 29 / 0 / 29 / 0 |
| Mashed Potatoes with Gravy | 6.0 oz. | 100 / 1.5 / 0.5 / 0 / 0 / 450 / 20 / 2 / 1 / 3 |
| Pinto Beans | 6.0 oz. | 140 / 0.5 / 0 / 0 / 0 / 460 / 25 / 6 / 1 / 9 |
