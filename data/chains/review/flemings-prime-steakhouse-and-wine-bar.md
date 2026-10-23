# Fleming's Prime Steakhouse & Wine Bar: lines for a person

Guide: https://www.flemingssteakhouse.com/-/media/fsh/promotions/assets/FlemingsPrimeSteakhouseNutritionJuly2026-ADA.ashx (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (26)

The last column comes from `npm run chains:evidence`: whether a draft's numbers sit right after the item's name in the guide text the drafts read. It can't read sizes or sections (one draft called a single 78 g cookie a "6 pack"): check those against the guide, then fix the line and set its check to `person`.

Fix each line in `menus/flemings-prime-steakhouse-and-wine-bar.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B | In the guide text (no AI) |
| --- | --- | --- | --- | --- | --- |
| Add Lobster Tail | 12 oz | only in draft A | 720 / 48 / 29 / 0 / 445 / 1370 / 3 / 1 / 1 / 65 | not found | A: name not in the guide text |
| Filet Medallion with Fries | 1 serving | only in draft A | 800 / 36 / 8 / 0.5 / 115 / 2910 / 69 / 7 / 8 / 51 | not found | A: numbers found after the name (line 121); check the size |
| Filet Sliders with Fries | 1 serving | only in draft A | 1160 / 60 / 19 / 1 / 95 / 3290 / 116 / 7 / 25 / 40 | not found | A: numbers found after the name (line 122); check the size |
| Chicken Tenders with Fries | 1 serving | only in draft A | 1080 / 52 / 10 / 0 / 60 / 3930 / 116 / 11 / 9 / 37 | not found | A: numbers found after the name (line 124); check the size |
| Herb Your Enthusiasm with Gin | 1 serving | differ: cholesterol_mg | 180 / 0 / 0 / 0 / 0 / 5 / 19 / 0 / 17 / 0 | 180 / 0 / 0 / 0 / 5 / 5 / 19 / 0 / 17 / 0 | A: numbers found after the name (line 244); check the size; B: not as drafted (line 244 lacks 5) |
| Olive a Martini with Gin & Olives | 1 Serving | differ: fat_g, saturated_fat_g | 240 / 10 / 1 / 0 / 0 / 130 / 1 / 0 / 0 / 0 | 240 / 1 / 0 / 0 / 0 / 130 / 1 / 0 / 0 / 0 | A: numbers found after the name (line 252); check the size; B: numbers found after the name (line 252); check the size |
| Olive A Martini with Vodka & Olives | 1 Serving | differ: fat_g, saturated_fat_g | 210 / 10 / 1 / 0 / 0 / 125 / 1 / 0 / 0 / 0 | 210 / 1 / 0 / 0 / 0 / 125 / 1 / 0 / 0 / 0 | A: numbers found after the name (line 253); check the size; B: numbers found after the name (line 253); check the size |
| Spicy Tuna Crispy Rice (2 oz tuna) | 1 Serving | only in draft A | 330 / 23 / 4 / 0 / 25 / 310 / 16 / 0 / 3 / 14 | not found | A: not as drafted (line 261 lacks 4) |
| Fleming's Prime Steakhouse Burger with Fries | 1 Serving | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 1520 / 83 / 31 / 2 / 205 / 4680 / 124 / 9 / 24 / 70 | 1520 / 750 / 83 / 31 / 2 / 205 / 4680 / 124 / 9 / 24 | A: numbers found after the name (line 284); check the size; B: numbers found after the name (line 284); check the size |
| FPS French Dip Filet Sandwich with fries | 1 Serving | differ: fat_g, saturated_fat_g, trans_fat_g | 1720 / 99 / 38 / 0 / 215 / 4290 / 132 / 12 / 17 / 68 | 1720 / 890 / 99 / 38 / 215 / 4290 / 132 / 12 / 17 / 68 | A: numbers found after the name (line 285); check the size; B: numbers found after the name (line 285); check the size |
| Spicy Tuna Crispy Rice | 2 oz tuna | only in draft B | not found | 330 / 23 / 4.5 / 0 / 25 / 310 / 16 / 0 / 3 / 14 | B: numbers found after the name (line 261); check the size |
| Side of House Made Chips | 1 Serving | only in draft B | not found | 130 / 5 / 1 / 0 / 0 / 300 / 21 / 1 / 1 / 2 | B: numbers found after the name (line 328); check the size |
| Protein Box | 1 Serving | only in draft B | not found | 530 / 39 / 9 / 0 / 220 / 770 / 28 / 4 / 22 / 24 | B: numbers found after the name (line 329); check the size |
| Fresh Fruit | 1 Serving | only in draft B | not found | 70 / 0.5 / 0 / 0 / 0 / 0 / 20 / 4 / 14 / 1 | B: numbers found after the name (line 330); check the size |
| Chocolate Chunk Cookies Catering Ind. Box | 1 Serving | only in draft B | not found | 370 / 18 / 9 / 0 / 35 / 190 / 52 / 2 / 30 / 4 | B: numbers found after the name (line 331); check the size |
| The Prime Burger (No Fries) | 1 Serving | only in draft B | not found | 920 / 51 / 22 / 2 / 195 / 2200 / 55 / 3 / 16 / 61 | B: numbers found after the name (line 332); check the size |
| Flemings Crispy Chicken Sandwich | 1 Serving | only in draft B | not found | 790 / 35 / 10 / 0 / 100 / 1800 / 83 / 3 / 26 / 39 | B: numbers found after the name (line 334); check the size |
| Full Fleming's Salad with Dressing | 1 Serving | only in draft B | not found | 410 / 29 / 7 / 0 / 15 / 320 / 34 / 7 / 19 / 7 | B: numbers found after the name (line 338); check the size |
| Chopped Wedge Salad | 1 Serving | only in draft B | not found | 500 / 46 / 14 / 0 / 50 / 820 / 16 / 3 / 12 / 13 | B: numbers found after the name (line 339); check the size |
| Add Filet | 4 oz | only in draft B | not found | 180 / 6 / 2 / 0 / 80 / 490 / 0 / 0 / 0 / 31 | B: numbers found after the name (line 342); check the size |
| Add Seared Salmon | 1 Serving | only in draft B | not found | 210 / 13 / 2 / 0 / 70 / 270 / 0 / 0 / 0 / 23 | B: numbers found after the name (line 343); check the size |
| Half Dozen Oysters | 1 serving | both read it the same, but its protein, carbs and fat make 123 kcal, not 180 | 180 / 2.5 / 0.5 / 0 / 35 / 1560 / 15 / 5 / 6 / 10 | 180 / 2.5 / 0.5 / 0 / 35 / 1560 / 15 / 5 / 6 / 10 | A: numbers found after the name (line 18); check the size; B: numbers found after the name (line 18); check the size |
| Dozen Oysters | 1 serving | both read it the same, but its protein, carbs and fat make 222 kcal, not 340 | 340 / 6 / 1.5 / 0 / 80 / 2000 / 22 / 6 / 6 / 20 | 340 / 6 / 1.5 / 0 / 80 / 2000 / 22 / 6 / 6 / 20 | A: numbers found after the name (line 19); check the size; B: numbers found after the name (line 19); check the size |
| Time is Honey | 1 serving | both read it the same, but its protein, carbs and fat make 60 kcal, not 200 | 200 / 0 / 0 / 0 / 0 / 0 / 15 / 0 / 14 / 0 | 200 / 0 / 0 / 0 / 0 / 0 / 15 / 0 / 14 / 0 | A: numbers found after the name (line 249); check the size; B: numbers found after the name (line 249); check the size |
| Agave My Heart | 1 serving | both read it the same, but its protein, carbs and fat make 68 kcal, not 160 | 160 / 0 / 0 / 0 / 0 / 0 / 17 / 0 / 16 / 0 | 160 / 0 / 0 / 0 / 0 / 0 / 17 / 0 / 16 / 0 | A: numbers found after the name (line 250); check the size; B: numbers found after the name (line 250); check the size |
| Seafood Tower (Large) | 1 serving | both read it the same, but the build would refuse it (sodium_mg: Too big: expected number to be <=20000) | 3750 / 178 / 34 / 1 / 2485 / 35500 / 97 / 11 / 33 / 442 | 3750 / 178 / 34 / 1 / 2485 / 35500 / 97 / 11 / 33 / 442 | A: numbers found after the name (line 12); check the size; B: numbers found after the name (line 12); check the size |

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
