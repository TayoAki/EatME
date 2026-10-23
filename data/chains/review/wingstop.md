# Wingstop: lines for a person

Guide: https://s3.amazonaws.com/wingstop.com/assets/static/WSR18-0009-Corporate-NutritionalGuide-JumboWings-HR_OFFICAL.pdf (read 2026-10-22). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (45)

Fix each line in `menus/wingstop.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B |
| --- | --- | --- | --- | --- |
| Atomic | 1ea (38.77g) | the guide gives no protein_g | 90 / 5 / 1.5 / 0 / 45 / 220 / 1 / 0 / 0 / – | 90 / 5 / 1.5 / 0 / 45 / 220 / 1 / 0 / 0 / – |
| Cajun | 1ea (38.86g) | the guide gives no protein_g | 90 / 5 / 1.5 / 0 / 45 / 310 / 0 / 0 / 0 / – | 90 / 5 / 1.5 / 0 / 45 / 310 / 0 / 0 / 0 / – |
| Garlic Parmesan | 1ea (35.65g) | the guide gives no protein_g | 120 / 8 / 2 / 0 / 45 / 75 / 1 / 0 / 0 / – | 120 / 8 / 2 / 0 / 45 / 75 / 1 / 0 / 0 / – |
| Hawaiian | 1ea (39.28g) | the guide gives no protein_g | 100 / 5 / 1.5 / 0 / 45 / 85 / 3 / 0 / 2 / – | 100 / 5 / 1.5 / 0 / 45 / 85 / 3 / 0 / 2 / – |
| Hickory Smoked BBQ | 1ea (39.78g) | the guide gives no protein_g | 100 / 5 / 1.5 / 0 / 45 / 150 / 4 / 0 / 3 / – | 100 / 5 / 1.5 / 0 / 45 / 150 / 4 / 0 / 3 / – |
| Hot Honey Rub | 1ea (36g) | the guide gives no protein_g | 120 / 8 / 2 / 0 / 45 / 160 / 2 / 0 / 1 / – | 120 / 8 / 2 / 0 / 45 / 160 / 2 / 0 / 1 / – |
| Lemon Pepper | 1ea (34.91g) | the guide gives no protein_g | 120 / 8 / 2 / 0 / 45 / 210 / 0 / 0 / 0 / – | 120 / 8 / 2 / 0 / 45 / 210 / 0 / 0 / 0 / – |
| Louisiana Rub | 1ea (33.99g) | the guide gives no protein_g | 110 / 7 / 2 / 0 / 45 / 140 / 0 / 0 / 0 / – | 110 / 7 / 2 / 0 / 45 / 140 / 0 / 0 / 0 / – |
| Mango Habanero | 1ea (39.28g) | the guide gives no protein_g | 100 / 5 / 1.5 / 0 / 45 / 80 / 4 / 0 / 3 / – | 100 / 5 / 1.5 / 0 / 45 / 80 / 4 / 0 / 3 / – |
| Mild | 1ea (38.04g) | the guide gives no protein_g | 120 / 8 / 2 / 0 / 45 / 160 / 0 / 0 / 0 / – | 120 / 8 / 2 / 0 / 45 / 160 / 0 / 0 / 0 / – |
| Original Hot | 1ea (38.29g) | the guide gives no protein_g | 90 / 5 / 1.5 / 0 / 45 / 230 / 0 / 0 / 0 / – | 90 / 5 / 1.5 / 0 / 45 / 230 / 0 / 0 / 0 / – |
| Plain | 1ea (30.78g) | the guide gives no protein_g | 90 / 5 / 1.5 / 0 / 45 / 30 / 0 / 0 / 0 / – | 90 / 5 / 1.5 / 0 / 45 / 30 / 0 / 0 / 0 / – |
| Spicy Korean Q | 1ea (39.11g) | the guide gives no protein_g | 100 / 5 / 1.5 / 0 / 45 / 135 / 3 / 0 / 3 / – | 100 / 5 / 1.5 / 0 / 45 / 135 / 3 / 0 / 3 / – |
| Lipton Tea - Plain | Regular, 20oz (600 ml) | only in draft A | 0 / 0 / 0 / – / – / 0 / 0 / – / 0 / – | not found |
| Lipton Tea - Plain | Large, 32oz (900 ml) | only in draft A | 0 / 0 / 0 / – / – / 0 / 0 / – / 0 / – | not found |
| Gold Peak Unsweet Tea | Regular, 20oz (600 ml) | only in draft A | 0 / 0 / 0 / – / – / 20 / 1 / – / 0 / – | not found |
| Gold Peak Unsweet Tea | Large, 32oz (900 ml) | only in draft A | 0 / 0 / 0 / – / – / 32 / 2 / – / 0 / – | not found |
| Dr Pepper | Regular, 20oz (600 ml) | the guide gives no fiber_g, protein_g | 230 / 0 / 0 / – / – / 75 / 65 / – / 65 / – | 230 / 0 / 0 / – / – / 75 / 65 / – / 65 / – |
| Dr Pepper | Large, 32oz (900 ml) | the guide gives no fiber_g, protein_g | 360 / 0 / 0 / – / – / 120 / 104 / – / 104 / – | 360 / 0 / 0 / – / – / 120 / 104 / – / 104 / – |
| Coke | Regular, 20oz (600 ml) | the guide gives no fiber_g, protein_g | 250 / 0 / 0 / – / – / 5 / 68 / – / 68 / – | 250 / 0 / 0 / – / – / 5 / 68 / – / 68 / – |
| Coke | Large, 32oz (900 ml) | the guide gives no fiber_g, protein_g | 400 / 0 / 0 / – / – / 8 / 108 / – / 108 / – | 400 / 0 / 0 / – / – / 8 / 108 / – / 108 / – |
| Diet Coke | Regular, 20oz (600 ml) | the guide gives no fiber_g, protein_g | 0 / 0 / 0 / – / – / 25 / 1 / – / 1 / – | 0 / 0 / 0 / – / – / 25 / 1 / – / 1 / – |
| Diet Coke | Large, 32oz (900 ml) | the guide gives no fiber_g, protein_g | 0 / 0 / 0 / – / – / 40 / 2 / – / 2 / – | 0 / 0 / 0 / – / – / 40 / 2 / – / 2 / – |
| Sprite | Regular, 20oz (600 ml) | the guide gives no fiber_g, protein_g | 240 / 0 / 0 / – / – / 55 / 65 / – / 65 / – | 240 / 0 / 0 / – / – / 55 / 65 / – / 65 / – |
| Sprite | Large, 32oz (900 ml) | the guide gives no fiber_g, protein_g | 390 / 0 / 0 / – / – / 88 / 104 / – / 104 / – | 390 / 0 / 0 / – / – / 88 / 104 / – / 104 / – |
| Fanta Orange | Regular, 20oz (600 ml) | the guide gives no fiber_g, protein_g | 280 / 0 / 0 / – / – / 35 / 75 / – / 75 / – | 280 / 0 / 0 / – / – / 35 / 75 / – / 75 / – |
| Fanta Orange | Large, 32oz (900 ml) | the guide gives no fiber_g, protein_g | 440 / 0 / 0 / – / – / 56 / 120 / – / 120 / – | 440 / 0 / 0 / – / – / 56 / 120 / – / 120 / – |
| Fanta Strawberry | Regular, 20oz (600 ml) | the guide gives no fiber_g, protein_g | 280 / 0 / 0 / – / – / 23 / 78 / – / 78 / – | 280 / 0 / 0 / – / – / 23 / 78 / – / 78 / – |
| Fanta Strawberry | Large, 32oz (900 ml) | the guide gives no fiber_g, protein_g | 450 / 0 / 0 / – / – / 36 / 124 / – / 124 / – | 450 / 0 / 0 / – / – / 36 / 124 / – / 124 / – |
| Lipton Tea - Sweet | Regular, 20oz (600 ml) | the guide gives no fiber_g, protein_g | 180 / 0 / 0 / – / – / 0 / 45 / – / 45 / – | 180 / 0 / 0 / – / – / 0 / 45 / – / 45 / – |
| Lipton Tea - Sweet | Large, 32oz (900 ml) | the guide gives no fiber_g, protein_g | 280 / 0 / 0 / – / – / 0 / 72 / – / 72 / – | 280 / 0 / 0 / – / – / 0 / 72 / – / 72 / – |
| Minute Maid Lemonade | Regular, 20oz (600 ml) | the guide gives no fiber_g, protein_g | 240 / 0 / 0 / – / – / 103 / 65 / – / 63 / – | 240 / 0 / 0 / – / – / 103 / 65 / – / 63 / – |
| Minute Maid Lemonade | Large, 32oz (900 ml) | the guide gives no fiber_g, protein_g | 390 / 0 / 0 / – / – / 164 / 104 / – / 100 / – | 390 / 0 / 0 / – / – / 164 / 104 / – / 100 / – |
| Nestea Raspberry Tea | Regular, 20oz (600 ml) | the guide gives no fiber_g, protein_g | 200 / 0 / 0 / – / – / 20 / 52 / – / 52 / – | 200 / 0 / 0 / – / – / 20 / 52 / – / 52 / – |
| Nestea Raspberry Tea | Large, 32oz (900 ml) | the guide gives no fiber_g, protein_g | 310 / 0 / 0 / – / – / 32 / 84 / – / 84 / – | 310 / 0 / 0 / – / – / 32 / 84 / – / 84 / – |
| Gold Peak Sweet Green Tea | Regular, 20oz (600 ml) | the guide gives no fiber_g, protein_g | 200 / 0 / 0 / – / – / 19 / 55 / – / 55 / – | 200 / 0 / 0 / – / – / 19 / 55 / – / 55 / – |
| Gold Peak Sweet Green Tea | Large, 32oz (900 ml) | the guide gives no fiber_g, protein_g | 320 / 0 / 0 / – / – / 30 / 88 / – / 88 / – | 320 / 0 / 0 / – / – / 30 / 88 / – / 88 / – |
| Gold Peak Southern Tea | Regular, 20oz (600 ml) | the guide gives no fiber_g, protein_g | 260 / 0 / 0 / – / – / 20 / 66 / – / 65 / – | 260 / 0 / 0 / – / – / 20 / 66 / – / 65 / – |
| Gold Peak Southern Tea | Large, 32oz (900 ml) | the guide gives no fiber_g, protein_g | 390 / 0 / 0 / – / – / 32 / 105 / – / 104 / – | 390 / 0 / 0 / – / – / 32 / 105 / – / 104 / – |
| Nestea Peach Tea | Regular, 20oz (600 ml) | the guide gives no fiber_g, protein_g | 200 / 0 / 0 / – / – / 20 / 50 / – / 50 / – | 200 / 0 / 0 / – / – / 20 / 50 / – / 50 / – |
| Nestea Peach Tea | Large, 32oz (900 ml) | the guide gives no fiber_g, protein_g | 310 / 0 / 0 / – / – / 30 / 80 / – / 80 / – | 310 / 0 / 0 / – / – / 30 / 80 / – / 80 / – |
| Lipton Tea - Plain | Regular 20oz (600 ml) | only in draft B | not found | 0 / 0 / 0 / – / – / 0 / 0 / – / 0 / – |
| Lipton Tea - Plain | Large 32oz (900 ml) | only in draft B | not found | 0 / 0 / 0 / – / – / 0 / 0 / – / 0 / – |
| Gold Peak Unsweet Tea | Regular 20oz (600 ml) | only in draft B | not found | 0 / 0 / 0 / – / – / 0 / 1 / – / 0 / – |
| Gold Peak Unsweet Tea | Large 32oz (900 ml) | only in draft B | not found | 0 / 0 / 0 / – / – / 0 / 2 / – / 0 / – |

## Spot check (3 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Lemon Pepper | 1ea (29.98g) | 110 / 7 / 1.5 / 0 / 10 / 290 / 6 / 0 / 0 / 4 |
| Garlic Parmesan | 1ea (280g) | 890 / 52 / 10 / 0 / 80 / 2060 / 71 / 2 / 11 / 34 |
| Lemon Pepper | 1ea (270g) | 850 / 50 / 9 / 0 / 80 / 2320 / 67 / 2 / 10 / 32 |
