# El Pollo Loco: lines for a person

Guide: https://www.elpolloloco.com/content/pdfs/epl_web_nutrition_guide_mod_1_2025_hr.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (4)

Fix each line in `menus/el-pollo-loco.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B |
| --- | --- | --- | --- | --- |
| Chocolate Dipping Sauce | 1.4 oz. | the guide gives no fiber_g | 90 / 0.5 / 0 / 0 / 0 / 45 / 23 / – / 20 / 1 | 90 / 0.5 / 0 / 0 / 0 / 45 / 23 / – / 20 / 1 |
| Horchata | Regular (22.0 oz.) | differ: saturated_fat_g | 170 / 6 / 0 / 0 / 0 / 35 / 28 / 0 / 22 / 0 | 170 / 6 / 6 / 0 / 0 / 35 / 28 / 0 / 22 / 0 |
| Horchata | Large (34.4 oz.) | differ: fat_g, saturated_fat_g | 260 / 10 / 0 / 0 / 0 / 55 / 44 / 0 / 34 / 0 | 260 / 9 / 10 / 0 / 0 / 55 / 44 / 0 / 34 / 0 |
| Minute Maid® Aguas Frescas Strawberry Hibiscus | Regular (18.9 oz.) | only in draft B | not found | 90 / 0 / 0 / 0 / 0 / 20 / 23 / 0 / 23 / 0 |

## Spot check (5 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Chicken Avocado Taco | 6.4 oz. | 340 / 19 / 6 / 0 / 95 / 800 / 18 / 2 / 2 / 24 |
| Double Chicken Street Corn Pollo Fit Bowl | 13.5 oz. | 440 / 19 / 7 / 0 / 180 / 1560 / 18 / 5 / 5 / 54 |
| FUZE® Sweetened Raspberry Iced Tea | Regular (21.7 oz.) | 110 / 0 / 0 / 0 / 0 / 20 / 29 / 0 / 29 / 0 |
| Mashed Potatoes with Gravy | 6.0 oz. | 100 / 1.5 / 0.5 / 0 / 0 / 450 / 20 / 2 / 1 / 3 |
| Pinto Beans | 6.0 oz. | 140 / 0.5 / 0 / 0 / 0 / 460 / 25 / 6 / 1 / 9 |
