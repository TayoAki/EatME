# Fleming's Prime Steakhouse & Wine Bar: lines for a person

Guide: https://www.flemingssteakhouse.com/-/media/fsh/promotions/assets/FlemingsPrimeSteakhouseNutritionJuly2026-ADA.ashx (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (21)

Fix each line in `menus/flemings-prime-steakhouse-and-wine-bar.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B |
| --- | --- | --- | --- | --- |
| Add Lobster Tail | 12 oz | only in draft A | 720 / 48 / 29 / 0 / 445 / 1370 / 3 / 1 / 1 / 65 | not found |
| Filet Medallion with Fries | 1 serving | only in draft A | 800 / 36 / 8 / 0.5 / 115 / 2910 / 69 / 7 / 8 / 51 | not found |
| Filet Sliders with Fries | 1 serving | only in draft A | 1160 / 60 / 19 / 1 / 95 / 3290 / 116 / 7 / 25 / 40 | not found |
| Chicken Tenders with Fries | 1 serving | only in draft A | 1080 / 52 / 10 / 0 / 60 / 3930 / 116 / 11 / 9 / 37 | not found |
| Herb Your Enthusiasm with Gin | 1 serving | differ: cholesterol_mg | 180 / 0 / 0 / 0 / 0 / 5 / 19 / 0 / 17 / 0 | 180 / 0 / 0 / 0 / 5 / 5 / 19 / 0 / 17 / 0 |
| Olive a Martini with Gin & Olives | 1 Serving | differ: fat_g, saturated_fat_g | 240 / 10 / 1 / 0 / 0 / 130 / 1 / 0 / 0 / 0 | 240 / 1 / 0 / 0 / 0 / 130 / 1 / 0 / 0 / 0 |
| Olive A Martini with Vodka & Olives | 1 Serving | differ: fat_g, saturated_fat_g | 210 / 10 / 1 / 0 / 0 / 125 / 1 / 0 / 0 / 0 | 210 / 1 / 0 / 0 / 0 / 125 / 1 / 0 / 0 / 0 |
| Spicy Tuna Crispy Rice (2 oz tuna) | 1 Serving | only in draft A | 330 / 23 / 4 / 0 / 25 / 310 / 16 / 0 / 3 / 14 | not found |
| Fleming's Prime Steakhouse Burger with Fries | 1 Serving | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 1520 / 83 / 31 / 2 / 205 / 4680 / 124 / 9 / 24 / 70 | 1520 / 750 / 83 / 31 / 2 / 205 / 4680 / 124 / 9 / 24 |
| FPS French Dip Filet Sandwich with fries | 1 Serving | differ: fat_g, saturated_fat_g, trans_fat_g | 1720 / 99 / 38 / 0 / 215 / 4290 / 132 / 12 / 17 / 68 | 1720 / 890 / 99 / 38 / 215 / 4290 / 132 / 12 / 17 / 68 |
| Spicy Tuna Crispy Rice | 2 oz tuna | only in draft B | not found | 330 / 23 / 4.5 / 0 / 25 / 310 / 16 / 0 / 3 / 14 |
| Side of House Made Chips | 1 Serving | only in draft B | not found | 130 / 5 / 1 / 0 / 0 / 300 / 21 / 1 / 1 / 2 |
| Protein Box | 1 Serving | only in draft B | not found | 530 / 39 / 9 / 0 / 220 / 770 / 28 / 4 / 22 / 24 |
| Fresh Fruit | 1 Serving | only in draft B | not found | 70 / 0.5 / 0 / 0 / 0 / 0 / 20 / 4 / 14 / 1 |
| Chocolate Chunk Cookies Catering Ind. Box | 1 Serving | only in draft B | not found | 370 / 18 / 9 / 0 / 35 / 190 / 52 / 2 / 30 / 4 |
| The Prime Burger (No Fries) | 1 Serving | only in draft B | not found | 920 / 51 / 22 / 2 / 195 / 2200 / 55 / 3 / 16 / 61 |
| Flemings Crispy Chicken Sandwich | 1 Serving | only in draft B | not found | 790 / 35 / 10 / 0 / 100 / 1800 / 83 / 3 / 26 / 39 |
| Full Fleming's Salad with Dressing | 1 Serving | only in draft B | not found | 410 / 29 / 7 / 0 / 15 / 320 / 34 / 7 / 19 / 7 |
| Chopped Wedge Salad | 1 Serving | only in draft B | not found | 500 / 46 / 14 / 0 / 50 / 820 / 16 / 3 / 12 / 13 |
| Add Filet | 4 oz | only in draft B | not found | 180 / 6 / 2 / 0 / 80 / 490 / 0 / 0 / 0 / 31 |
| Add Seared Salmon | 1 Serving | only in draft B | not found | 210 / 13 / 2 / 0 / 70 / 270 / 0 / 0 / 0 / 23 |

## Spot check (10 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Bone in NY Strip (Regional) | 28 oz | 1660 / 117 / 49 / 2 / 440 / 2060 / 1 / 1 / 1 / 151 |
| Grilled Chicken Burrata Sandwich | 1 serving | 800 / 44 / 12 / 0 / 125 / 990 / 51 / 6 / 6 / 45 |
| Main Filet Mignon (Regional) | 10 oz | 540 / 30 / 15 / 1 / 205 / 560 / 2 / 0 / 0 / 67 |
| Seafood Tower (Large) | 1 serving | 3750 / 178 / 34 / 1 / 2485 / 35500 / 97 / 11 / 33 / 442 |
| BBQ Salmon (Regional) | 1 serving | 670 / 48 / 13 / 0 / 170 / 690 / 11 / 1 / 9 / 48 |
| Jones Street Manhattan | 1 serving | 260 / 0 / 0 / 0 / 0 / 0 / 3 / 0 / 2 / 0 |
| Double Breast of Chicken | 1 serving | 630 / 18 / 4 / 0 / 395 / 1440 / 11 / 1 / 2 / 102 |
| Shaved Black Truffle | 1 serving | 10 / 0 / 0 / 0 / 0 / 40 / 2 / 0 / 0 / 0 |
| Roasted Asparagus | 1 serving | 150 / 12 / 7 / 0 / 30 / 810 / 9 / 5 / 4 / 5 |
| Lobster Bisque | 1 serving | 510 / 47 / 25 / 0 / 195 / 1220 / 14 / 1 / 2 / 8 |
