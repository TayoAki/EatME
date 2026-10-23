# Jollibee: lines for a person

Guide: https://jollibee-prod-media.s3.us-west-2.amazonaws.com/20260701_JB_USA_Nutrition_Facts_2026_Mktg_8f037d9d5d.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (5)

Fix each line in `menus/jollibee.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B |
| --- | --- | --- | --- | --- |
| Palabok with 2 pcs Chickenjoy and Gravy | 22.5 oz (637 g) | only in draft B | not found | 1040 / 56 / 14 / 0 / 155 / 2000 / 62 / 1 / 3 / 68 |
| Palabok with 2 pcs Spicy Chickenjoy and Gravy | 22.5 oz (637 g) | only in draft B | not found | 1005 / 46 / 9.5 / 0 / 330 / 2530 / 82 / 7 / 3 / 61 |
| Lemon Packet | 1 packet (4 g) | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 0 / 1 / 0 / 0 / 0 |
| Longanisa Rice Meal | 13.9 oz (393 g) | only in draft B | not found | 687 / 34 / 12 / 0 / 248 / 1748 / 60 / 1 / 8 / 27 |
| 2 pcs Chickenjoy Breakfast Rice Meal | 20 oz (565.7 g) | only in draft B | not found | 932 / 48 / 12 / 0 / 215 / 1952 / 65 / 1 / 1 / 59 |

## Spot check (5 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Chickenjoy Thigh | 1 pc, 4.4 oz (125 g) | 380 / 28 / 7 / 0 / 25 / 400 / 5 / 0 / 0 / 27 |
| Gravy | Large, 8.0 oz (198 g) | 70 / 0 / 0 / 0 / 0 / 980 / 14 / 0 / 2 / 3 |
| Palabok with 1 pc Spicy Chickenjoy Thigh and Gravy | 19.5 oz (552 g) | 805 / 36 / 8 / 0 / 245 / 2050 / 72 / 4 / 3 / 44 |
| Sausage Egg Cheese Biscuit | 6.4 oz (181 g) | 583 / 44 / 18 / 0 / 234 / 1160 / 28 / 1 / 1 / 17 |
| Chicken Nuggets | 5 pcs, 3.4 oz (95 g) | 256 / 13 / 2 / 0 / 43 / 874 / 16 / 3 / 2 / 18 |
