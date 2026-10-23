# Cold Stone Creamery: lines for a person

Guide: https://www.coldstonecreamery.com/nutrition/pdf/CSC_Nutrition%20Info-Ice%20Cream_Sorbet.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (196)

The last column comes from `npm run chains:evidence`: whether a draft's numbers sit right after the item's name in the guide text the drafts read. It can't read sizes or sections (one draft called a single 78 g cookie a "6 pack"): check those against the guide, then fix the line and set its check to `person`.

Fix each line in `menus/cold-stone-creamery.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B | In the guide text (no AI) |
| --- | --- | --- | --- | --- | --- |
| Boo Batter Ice Cream | Gotta Have It | both read numbers that can't be right: sugars 83 g above carbs 15 g | 860 / 45 / 27 / 1.5 / 175 / 390 / 15 / 0 / 83 / 9 | 860 / 45 / 27 / 1.5 / 175 / 390 / 15 / 0 / 83 / 9 | A: numbers found after the name (line 37); check the size; B: numbers found after the name (line 37); check the size |
| Countrytime® Pink Lemonade Sorbet | Kids | differ: sodium_mg, carbs_g, fiber_g, sugars_g | 100 / 0 / 0 / 0 / 0 / 0 / 15 / 26 / 0 / 0 | 100 / 0 / 0 / 0 / 0 / 15 / 26 / 0 / 25 / 0 | A: numbers found after the name (line 469); check the size; B: numbers found after the name (line 469); check the size |
| Countrytime® Pink Lemonade Sorbet | Like It® | differ: sodium_mg, carbs_g, fiber_g, sugars_g | 170 / 0 / 0 / 0 / 0 / 0 / 20 / 43 / 0 / 0 | 170 / 0 / 0 / 0 / 0 / 20 / 43 / 0 / 42 / 0 | A: numbers found after the name (line 470); check the size; B: numbers found after the name (line 470); check the size |
| Countrytime® Pink Lemonade Sorbet | Love It® | differ: sodium_mg, carbs_g, fiber_g, sugars_g | 280 / 0 / 0 / 0 / 0 / 0 / 35 / 68 / 0 / 0 | 280 / 0 / 0 / 0 / 0 / 35 / 68 / 0 / 68 / 0 | A: numbers found after the name (line 471); check the size; B: numbers found after the name (line 471); check the size |
| Countrytime® Pink Lemonade Sorbet | Gotta Have It® | differ: sodium_mg, carbs_g, fiber_g, sugars_g | 410 / 0 / 0 / 0 / 0 / 0 / 50 / 102 / 0 / 0 | 410 / 0 / 0 / 0 / 0 / 50 / 102 / 0 / 101 / 0 | A: numbers found after the name (line 472); check the size; B: numbers found after the name (line 472); check the size |
| Lemon Sorbet | Kids | differ: sodium_mg, carbs_g, fiber_g, sugars_g | 90 / 0 / 0 / 0 / 0 / 0 / 10 / 23 / 0 / 0 | 90 / 0 / 0 / 0 / 0 / 10 / 23 / 0 / 23 / 0 | A: numbers found after the name (line 473); check the size; B: numbers found after the name (line 473); check the size |
| Lemon Sorbet | Like It | differ: sodium_mg, carbs_g, fiber_g, sugars_g | 160 / 0 / 0 / 0 / 0 / 0 / 15 / 39 / 0 / 0 | 160 / 0 / 0 / 0 / 0 / 15 / 39 / 0 / 38 / 0 | A: numbers found after the name (line 474); check the size; B: numbers found after the name (line 474); check the size |
| Lemon Sorbet | Love It | differ: sodium_mg, carbs_g, fiber_g, sugars_g | 250 / 0 / 0 / 0 / 0 / 0 / 25 / 62 / 0 / 0 | 250 / 0 / 0 / 0 / 0 / 25 / 62 / 0 / 61 / 0 | A: numbers found after the name (line 475); check the size; B: numbers found after the name (line 475); check the size |
| Lemon Sorbet | Gotta Have It | differ: sodium_mg, carbs_g, fiber_g, sugars_g | 380 / 0 / 0 / 0 / 0 / 0 / 40 / 93 / 0 / 0 | 380 / 0 / 0 / 0 / 0 / 40 / 93 / 0 / 92 / 0 | A: numbers found after the name (line 476); check the size; B: numbers found after the name (line 476); check the size |
| Mojito Sorbet | Kids | differ: sodium_mg, carbs_g, fiber_g, sugars_g | 110 / 0 / 0 / 0 / 0 / 0 / 10 / 27 / 0 / 0 | 110 / 0 / 0 / 0 / 0 / 10 / 27 / 0 / 26 / 0 | A: numbers found after the name (line 477); check the size; B: numbers found after the name (line 477); check the size |
| Mojito Sorbet | Like It | differ: sodium_mg, carbs_g, fiber_g, sugars_g | 190 / 1 / 0 / 0 / 0 / 0 / 15 / 44 / 0 / 0 | 190 / 1 / 0 / 0 / 0 / 15 / 44 / 0 / 43 / 0 | A: numbers found after the name (line 478); check the size; B: numbers found after the name (line 478); check the size |
| Mojito Sorbet | Love It | differ: sodium_mg, carbs_g, fiber_g, sugars_g | 300 / 1 / 0.5 / 0 / 0 / 0 / 25 / 71 / 0 / 0 | 300 / 1 / 0.5 / 0 / 0 / 25 / 71 / 0 / 69 / 0 | A: numbers found after the name (line 479); check the size; B: numbers found after the name (line 479); check the size |
| Mojito Sorbet | Gotta Have It | differ: sodium_mg, carbs_g, fiber_g, sugars_g | 450 / 2 / 1 / 0 / 0 / 0 / 35 / 106 / 0 / 0 | 450 / 2 / 1 / 0 / 0 / 35 / 106 / 0 / 103 / 0 | A: numbers found after the name (line 480); check the size; B: numbers found after the name (line 480); check the size |
| Orange Sorbet | Kids | differ: sodium_mg, carbs_g, fiber_g, sugars_g | 90 / 0 / 0 / 0 / 0 / 0 / 10 / 22 / 0 / 0 | 90 / 0 / 0 / 0 / 0 / 10 / 22 / 0 / 22 / 0 | A: numbers found after the name (line 481); check the size; B: numbers found after the name (line 481); check the size |
| Orange Sorbet | Like It | differ: sodium_mg, carbs_g, fiber_g, sugars_g | 150 / 0 / 0 / 0 / 0 / 0 / 15 / 38 / 0 / 0 | 150 / 0 / 0 / 0 / 0 / 15 / 38 / 0 / 37 / 0 | A: numbers found after the name (line 482); check the size; B: numbers found after the name (line 482); check the size |
| Orange Sorbet | Love It | differ: sodium_mg, carbs_g, fiber_g, sugars_g | 250 / 0 / 0 / 0 / 0 / 0 / 25 / 60 / 0 / 0 | 250 / 0 / 0 / 0 / 0 / 25 / 60 / 0 / 60 / 0 | A: numbers found after the name (line 483); check the size; B: numbers found after the name (line 483); check the size |
| Orange Sorbet | Gotta Have It | differ: sodium_mg, carbs_g, fiber_g, sugars_g | 370 / 0 / 0 / 0 / 0 / 0 / 40 / 90 / 0 / 0 | 370 / 0 / 0 / 0 / 0 / 40 / 90 / 0 / 89 / 0 | A: numbers found after the name (line 484); check the size; B: numbers found after the name (line 484); check the size |
| Peach Mango Sorbet | Kids | differ: sodium_mg, carbs_g, fiber_g, sugars_g | 100 / 0 / 0 / 0 / 0 / 0 / 10 / 26 / 0 / 0 | 100 / 0 / 0 / 0 / 0 / 10 / 26 / 0 / 25 / 0 | A: numbers found after the name (line 485); check the size; B: numbers found after the name (line 485); check the size |
| Peach Mango Sorbet | Like It | differ: sodium_mg, carbs_g, fiber_g, sugars_g | 170 / 0 / 0 / 0 / 0 / 0 / 20 / 43 / 0 / 0 | 170 / 0 / 0 / 0 / 0 / 20 / 43 / 0 / 42 / 0 | A: numbers found after the name (line 486); check the size; B: numbers found after the name (line 486); check the size |
| Peach Mango Sorbet | Love It | differ: sodium_mg, carbs_g, fiber_g, sugars_g | 280 / 0 / 0 / 0 / 0 / 0 / 35 / 68 / 0 / 0 | 280 / 0 / 0 / 0 / 0 / 35 / 68 / 0 / 68 / 0 | A: numbers found after the name (line 487); check the size; B: numbers found after the name (line 487); check the size |
| Peach Mango Sorbet | Gotta Have It | differ: sodium_mg, carbs_g, fiber_g, sugars_g | 410 / 0 / 0 / 0 / 0 / 0 / 50 / 102 / 0 / 0 | 410 / 0 / 0 / 0 / 0 / 50 / 102 / 0 / 101 / 0 | A: numbers found after the name (line 488); check the size; B: numbers found after the name (line 488); check the size |
| Pineapple Sorbet | Kids | differ: sodium_mg, carbs_g, fiber_g, sugars_g | 90 / 0 / 0 / 0 / 0 / 0 / 10 / 21 / 0 / 0 | 90 / 0 / 0 / 0 / 0 / 10 / 21 / 0 / 21 / 0 | A: numbers found after the name (line 489); check the size; B: numbers found after the name (line 489); check the size |
| Pineapple Sorbet | Like It | differ: sodium_mg, carbs_g, fiber_g, sugars_g | 140 / 0 / 0 / 0 / 0 / 0 / 15 / 35 / 0 / 0 | 140 / 0 / 0 / 0 / 0 / 15 / 35 / 0 / 35 / 0 | A: numbers found after the name (line 490); check the size; B: numbers found after the name (line 490); check the size |
| Pineapple Sorbet | Love It | differ: sodium_mg, carbs_g, fiber_g, sugars_g | 230 / 0 / 0 / 0 / 0 / 0 / 20 / 56 / 0 / 0 | 230 / 0 / 0 / 0 / 0 / 20 / 56 / 0 / 56 / 0 | A: numbers found after the name (line 491); check the size; B: numbers found after the name (line 491); check the size |
| Pineapple Sorbet | Gotta Have It | differ: sodium_mg, carbs_g, fiber_g, sugars_g | 350 / 0 / 0 / 0 / 0 / 0 / 30 / 84 / 0 / 0 | 350 / 0 / 0 / 0 / 0 / 30 / 84 / 0 / 84 / 0 | A: numbers found after the name (line 492); check the size; B: numbers found after the name (line 492); check the size |
| Pineapple Orange Banana Sorbet | Kids | differ: sodium_mg, carbs_g, fiber_g, sugars_g | 90 / 0 / 0 / 0 / 0 / 0 / 10 / 23 / 0 / 0 | 90 / 0 / 0 / 0 / 0 / 10 / 23 / 0 / 23 / 0 | A: numbers found after the name (line 493); check the size; B: numbers found after the name (line 493); check the size |
| Cake Batter Ganache™ Ice Cream | Kids | only in draft B | not found | 240 / 13 / 7 / 0 / 40 / 95 / 27 / 0 / 22 / 2 | B: numbers found after the name (line 46); check the size |
| Cake Batter Ganache™ Ice Cream | Like It | only in draft B | not found | 390 / 22 / 12 / 0.5 / 70 / 160 / 46 / 1 / 37 / 4 | B: numbers found after the name (line 47); check the size |
| Cake Batter Ganache™ Ice Cream | Love It | only in draft B | not found | 630 / 34 / 19 / 1 / 110 / 250 / 73 / 1 / 59 / 6 | B: numbers found after the name (line 48); check the size |
| Cake Batter Ganache™ Ice Cream | Gotta Have It | only in draft B | not found | 940 / 52 / 28 / 1.5 / 165 / 370 / 110 / 1 / 88 / 9 | B: numbers found after the name (line 49); check the size |
| Cake Batter Ice Cream® | Kids | only in draft B | not found | 220 / 11 / 7 / 0 / 45 / 95 / 26 / 0 / 21 / 2 | B: numbers found after the name (line 50); check the size |
| Cake Batter Ice Cream® | Like It | only in draft B | not found | 360 / 19 / 11 / 0.5 / 75 / 160 / 43 / 0 / 35 / 4 | B: numbers found after the name (line 51); check the size |
| Cake Batter Ice Cream® | Love It | only in draft B | not found | 580 / 30 / 18 / 1 / 120 / 260 / 70 / 0 / 56 / 6 | B: numbers found after the name (line 52); check the size |
| Cake Batter Ice Cream® | Gotta Have It | only in draft B | not found | 860 / 45 / 27 / 1.5 / 175 / 390 / 104 / 0 / 83 / 9 | B: numbers found after the name (line 53); check the size |
| Caramel Cardamom Ice Cream | Kids | only in draft B | not found | 210 / 11 / 7 / 0 / 45 / 70 / 26 / 0 / 21 / 2 | B: numbers found after the name (line 54); check the size |
| Caramel Cardamom Ice Cream | Like It | only in draft B | not found | 350 / 18 / 12 / 0.5 / 75 / 120 / 43 / 0 / 35 / 4 | B: numbers found after the name (line 55); check the size |
| Caramel Cardamom Ice Cream | Love It | only in draft B | not found | 560 / 29 / 18 / 1 / 120 / 190 / 68 / 0 / 56 / 6 | B: numbers found after the name (line 56); check the size |
| Caramel Cardamom Ice Cream | Gotta Have It | only in draft B | not found | 840 / 44 / 28 / 1.5 / 175 / 280 / 102 / 0 / 84 / 9 | B: numbers found after the name (line 57); check the size |
| Caramel Chocolate Cheesecake Ice Cream | Kids | only in draft B | not found | 210 / 12 / 7 / 0 / 40 / 115 / 23 / 1 / 20 / 3 | B: numbers found after the name (line 58); check the size |
| Caramel Chocolate Cheesecake Ice Cream | Like It | only in draft B | not found | 350 / 20 / 12 / 0.5 / 70 / 190 / 39 / 1 / 33 / 5 | B: numbers found after the name (line 59); check the size |
| Caramel Chocolate Cheesecake Ice Cream | Love It | only in draft B | not found | 570 / 32 / 19 / 1 / 110 / 310 / 63 / 2 / 53 / 8 | B: numbers found after the name (line 60); check the size |
| Caramel Chocolate Cheesecake Ice Cream | Gotta Have It | only in draft B | not found | 850 / 48 / 28 / 1.5 / 165 / 460 / 94 / 3 / 80 / 11 | B: numbers found after the name (line 61); check the size |
| Caramel Latte Ice Cream | Kids | only in draft B | not found | 210 / 11 / 7 / 0 / 45 / 70 / 24 / 0 / 20 / 2 | B: numbers found after the name (line 62); check the size |
| Caramel Latte Ice Cream | Like It | only in draft B | not found | 350 / 19 / 12 / 0.5 / 75 / 115 / 40 / 0 / 34 / 4 | B: numbers found after the name (line 63); check the size |
| Caramel Latte Ice Cream | Love It | only in draft B | not found | 560 / 30 / 19 / 1 / 120 / 180 / 65 / 0 / 54 / 6 | B: numbers found after the name (line 64); check the size |
| Caramel Latte Ice Cream | Gotta Have It | only in draft B | not found | 840 / 45 / 28 / 1.5 / 180 / 270 / 97 / 0 / 81 / 9 | B: numbers found after the name (line 65); check the size |
| Caramel Truffle Ice Cream | Kids | only in draft B | not found | 230 / 13 / 7 / 0 / 35 / 75 / 27 / 1 / 22 / 3 | B: numbers found after the name (line 77); check the size |
| Caramel Truffle Ice Cream | Like It® | only in draft B | not found | 390 / 21 / 12 / 0.5 / 60 / 120 / 45 / 2 / 38 / 5 | B: numbers found after the name (line 78); check the size |
| Caramel Truffle Ice Cream | Love It® | only in draft B | not found | 620 / 34 / 19 / 1 / 100 / 190 / 72 / 2 / 60 / 8 | B: numbers found after the name (line 79); check the size |
| Caramel Truffle Ice Cream | Gotta Have It® | only in draft B | not found | 930 / 51 / 28 / 1 / 150 / 290 / 108 / 4 / 90 / 11 | B: numbers found after the name (line 80); check the size |
| Chai Cold Brew Ice Cream | Kids | only in draft B | not found | 190 / 12 / 8 / 0 / 45 / 60 / 25 / 0 / 21 / 2 | B: numbers found after the name (line 81); check the size |
| Chai Cold Brew Ice Cream | Like It | only in draft B | not found | 310 / 20 / 13 / 0.5 / 75 / 100 / 41 / 0 / 36 / 4 | B: numbers found after the name (line 82); check the size |
| Chai Cold Brew Ice Cream | Love It | only in draft B | not found | 500 / 33 / 21 / 1 / 120 / 160 / 66 / 1 / 57 / 6 | B: numbers found after the name (line 83); check the size |
| Chai Cold Brew Ice Cream | Gotta Have It | only in draft B | not found | 750 / 49 / 32 / 1.5 / 180 / 240 / 98 / 1 / 85 / 8 | B: numbers found after the name (line 84); check the size |
| Cheesecake Ice Cream | Kids | only in draft B | not found | 200 / 11 / 7 / 0 / 45 / 85 / 23 / 0 / 19 / 2 | B: numbers found after the name (line 85); check the size |
| Cheesecake Ice Cream | Like It | only in draft B | not found | 340 / 19 / 12 / 0.5 / 75 / 140 / 39 / 0 / 32 / 4 | B: numbers found after the name (line 86); check the size |
| Cheesecake Ice Cream | Love It | only in draft B | not found | 540 / 30 / 19 / 1 / 120 / 230 / 62 / 0 / 51 / 6 | B: numbers found after the name (line 87); check the size |
| Cheesecake Ice Cream | Gotta Have It | only in draft B | not found | 820 / 45 / 28 / 1.5 / 180 / 350 / 93 / 0 / 77 / 9 | B: numbers found after the name (line 88); check the size |
| Cherry Vanilla Ice Cream | Kids | only in draft B | not found | 200 / 11 / 7 / 0 / 45 / 55 / 23 / 0 / 21 / 2 | B: numbers found after the name (line 89); check the size |
| Cherry Vanilla Ice Cream | Like It | only in draft B | not found | 340 / 18 / 11 / 0.5 / 75 / 95 / 38 / 0 / 34 / 3 | B: numbers found after the name (line 90); check the size |
| Cherry Vanilla Ice Cream | Love It | only in draft B | not found | 540 / 29 / 18 / 1 / 120 / 150 / 61 / 0 / 55 / 6 | B: numbers found after the name (line 91); check the size |
| Cherry Vanilla Ice Cream | Gotta Have It | only in draft B | not found | 810 / 44 / 27 / 1.5 / 180 / 230 / 92 / 0 / 82 / 8 | B: numbers found after the name (line 92); check the size |
| Chocolate Ice Cream | Kids | only in draft B | not found | 200 / 12 / 8 / 0 / 45 / 65 / 20 / 1 / 19 / 3 | B: numbers found after the name (line 93); check the size |
| Chocolate Ice Cream | Like It | only in draft B | not found | 340 / 20 / 13 / 0.5 / 75 / 105 / 34 / 1 / 31 / 5 | B: numbers found after the name (line 94); check the size |
| Chocolate Ice Cream | Love It | only in draft B | not found | 540 / 32 / 20 / 1 / 120 / 170 / 54 / 2 / 50 / 8 | B: numbers found after the name (line 95); check the size |
| Chocolate Ice Cream | Gotta Have It | only in draft B | not found | 810 / 48 / 30 / 1.5 / 180 / 260 / 81 / 3 / 75 / 12 | B: numbers found after the name (line 96); check the size |
| Chocolate Cake Batter Ice Cream® | Kids | only in draft B | not found | 220 / 11 / 7 / 0 / 40 / 105 / 26 / 1 / 21 / 3 | B: numbers found after the name (line 97); check the size |
| Chocolate Cake Batter Ice Cream® | Like It | only in draft B | not found | 360 / 19 / 11 / 0.5 / 65 / 180 / 44 / 1 / 35 / 5 | B: numbers found after the name (line 98); check the size |
| Chocolate Cake Batter Ice Cream® | Love It | only in draft B | not found | 580 / 30 / 18 / 1 / 105 / 290 / 70 / 2 / 57 / 8 | B: numbers found after the name (line 99); check the size |
| Chocolate Cake Batter Ice Cream® | Gotta Have It | only in draft B | not found | 870 / 44 / 27 / 1.5 / 160 / 430 / 105 / 3 / 85 / 12 | B: numbers found after the name (line 100); check the size |
| Chocolate Cake BatterTM Ganache Ice Cream | Kids | only in draft B | not found | 240 / 13 / 7 / 0 / 35 / 105 / 28 / 1 / 22 / 3 | B: numbers found after the name (line 101); check the size |
| Chocolate Cake BatterTM Ganache Ice Cream | Like It | only in draft B | not found | 400 / 21 / 11 / 0.5 / 60 / 170 / 46 / 2 / 37 / 5 | B: numbers found after the name (line 102); check the size |
| Chocolate Cake BatterTM Ganache Ice Cream | Love It | only in draft B | not found | 630 / 34 / 18 / 1 / 100 / 270 / 74 / 3 / 59 / 8 | B: numbers found after the name (line 103); check the size |
| Chocolate Cake BatterTM Ganache Ice Cream | Gotta Have It | only in draft B | not found | 950 / 51 / 27 / 1.5 / 150 / 410 / 110 / 4 / 89 / 12 | B: numbers found after the name (line 104); check the size |
| Chocolate Cupcake Ice Cream | Kids | only in draft B | not found | 220 / 12 / 7 / 0 / 40 / 120 / 24 / 1 / 20 / 3 | B: numbers found after the name (line 105); check the size |
| Chocolate Cupcake Ice Cream | Like It | only in draft B | not found | 360 / 20 / 12 / 0.5 / 65 / 200 / 40 / 2 / 33 / 5 | B: numbers found after the name (line 106); check the size |
| Chocolate Cupcake Ice Cream | Love It | only in draft B | not found | 580 / 33 / 19 / 1 / 105 / 320 / 64 / 3 / 53 / 9 | B: numbers found after the name (line 107); check the size |
| Chocolate Cupcake Ice Cream | Gotta Have It | only in draft B | not found | 870 / 49 / 29 / 1 / 160 / 480 / 96 / 5 / 79 / 13 | B: numbers found after the name (line 108); check the size |
| Chocolate Dipped Strawberry Ice Cream | Kids | only in draft B | not found | 220 / 13 / 7 / 0 / 40 / 55 / 24 / 0 / 21 / 2 | B: numbers found after the name (line 109); check the size |
| Chocolate Dipped Strawberry Ice Cream | Like It | only in draft B | not found | 360 / 21 / 12 / 0.5 / 70 / 90 / 39 / 1 / 35 / 3 | B: numbers found after the name (line 110); check the size |
| Chocolate Dipped Strawberry Ice Cream | Love It | only in draft B | not found | 580 / 34 / 18 / 1 / 110 / 140 / 63 / 1 / 55 / 6 | B: numbers found after the name (line 111); check the size |
| Chocolate Dipped Strawberry Ice Cream | Gotta Have It | only in draft B | not found | 860 / 50 / 28 / 1.5 / 165 / 210 / 94 / 1 / 83 / 8 | B: numbers found after the name (line 112); check the size |
| Chocolate Hazelnut Ice Cream | Kids | only in draft B | not found | 220 / 13 / 8 / 0 / 40 / 60 / 23 / 1 / 21 / 3 | B: numbers found after the name (line 113); check the size |
| Chocolate Hazelnut Ice Cream | Like It | only in draft B | not found | 370 / 22 / 13 / 0.5 / 70 / 105 / 38 / 1 / 35 / 5 | B: numbers found after the name (line 114); check the size |
| Chocolate Hazelnut Ice Cream | Love It | only in draft B | not found | 600 / 35 / 20 / 1 / 110 / 160 / 61 / 2 / 57 / 8 | B: numbers found after the name (line 115); check the size |
| Chocolate Hazelnut Ice Cream | Gotta Have It | only in draft B | not found | 890 / 52 / 31 / 1.5 / 165 / 250 / 91 / 4 / 85 / 13 | B: numbers found after the name (line 116); check the size |
| Chocolate Layer Cake Ice Cream | Kids | only in draft B | not found | 210 / 12 / 7 / 0 / 45 / 115 / 24 / 0 / 20 / 3 | B: numbers found after the name (line 117); check the size |
| Chocolate Layer Cake Ice Cream | Like It | only in draft B | not found | 360 / 19 / 11 / 0.5 / 75 / 200 / 41 / 0 / 33 / 4 | B: numbers found after the name (line 118); check the size |
| Chocolate Layer Cake Ice Cream | Love It | only in draft B | not found | 570 / 31 / 18 / 1 / 120 / 310 / 65 / 0 / 53 / 7 | B: numbers found after the name (line 119); check the size |
| Chocolate Layer Cake Ice Cream | Gotta Have It | only in draft B | not found | 850 / 47 / 27 / 1.5 / 180 / 470 / 97 / 1 / 79 / 11 | B: numbers found after the name (line 120); check the size |
| Chocolate Malt Ice Cream | Kids | only in draft B | not found | 220 / 11 / 7 / 0 / 40 / 100 / 25 / 1 / 22 / 4 | B: numbers found after the name (line 121); check the size |
| Chocolate Malt Ice Cream | Like It | only in draft B | not found | 370 / 19 / 12 / 0.5 / 70 / 170 / 41 / 1 / 36 / 6 | B: numbers found after the name (line 122); check the size |
| Chocolate Malt Ice Cream | Love It | only in draft B | not found | 580 / 30 / 19 / 1 / 110 / 270 / 66 / 2 / 58 / 9 | B: numbers found after the name (line 123); check the size |
| Chocolate Malt Ice Cream | Gotta Have It | only in draft B | not found | 880 / 45 / 29 / 1.5 / 165 / 400 / 99 / 3 / 87 / 14 | B: numbers found after the name (line 124); check the size |
| Chocolate Peanut Butter Ice Cream | Kids | only in draft B | not found | 260 / 17 / 8 / 0 / 35 / 130 / 23 / 1 / 19 / 6 | B: numbers found after the name (line 125); check the size |
| Chocolate Peanut Butter Ice Cream | Like It | only in draft B | not found | 440 / 29 / 13 / 0 / 55 / 220 / 38 / 2 / 32 / 10 | B: numbers found after the name (line 126); check the size |
| Chocolate Peanut Butter Ice Cream | Love It | only in draft B | not found | 700 / 46 / 20 / 1 / 90 / 340 / 61 / 3 / 52 / 16 | B: numbers found after the name (line 127); check the size |
| Chocolate Peanut Butter Ice Cream | Gotta Have It | only in draft B | not found | 1050 / 68 / 30 / 1 / 130 / 520 / 91 / 5 / 77 / 24 | B: numbers found after the name (line 128); check the size |
| Chocolate Pudding Ice Cream | Kids | only in draft B | not found | 220 / 10 / 7 / 0 / 40 / 100 / 28 / 0 / 23 / 2 | B: numbers found after the name (line 129); check the size |
| Chocolate Pudding Ice Cream | Like It | only in draft B | not found | 360 / 17 / 11 / 0.5 / 70 / 170 / 47 / 0 / 39 / 3 | B: numbers found after the name (line 130); check the size |
| Chocolate Pudding Ice Cream | Love It | only in draft B | not found | 580 / 28 / 17 / 1 / 115 / 270 / 75 / 0 / 62 / 5 | B: numbers found after the name (line 131); check the size |
| Chocolate Pudding Ice Cream | Gotta Have It | only in draft B | not found | 870 / 42 / 26 / 1.5 / 170 / 410 / 113 / 0 / 92 / 8 | B: numbers found after the name (line 132); check the size |
| Chocolate Raspberry Truffle Ice Cream | Kids | only in draft B | not found | 210 / 10 / 7 / 0 / 35 / 75 / 25 / 1 / 23 / 3 | B: numbers found after the name (line 144); check the size |
| Chocolate Raspberry Truffle Ice Cream | Like It® | only in draft B | not found | 350 / 17 / 11 / 0.5 / 60 / 130 / 42 / 1 / 38 / 5 | B: numbers found after the name (line 145); check the size |
| Chocolate Raspberry Truffle Ice Cream | Love It® | only in draft B | not found | 550 / 28 / 18 / 1 / 95 / 210 / 67 / 2 / 61 / 8 | B: numbers found after the name (line 146); check the size |
| Chocolate Raspberry Truffle Ice Cream | Gotta Have It® | only in draft B | not found | 830 / 42 / 27 / 1 / 145 / 310 / 101 / 3 / 91 / 12 | B: numbers found after the name (line 147); check the size |
| Churro Ice Cream | Kids | only in draft B | not found | 220 / 11 / 7 / 0 / 40 / 95 / 28 / 0 / 23 / 2 | B: numbers found after the name (line 148); check the size |
| Churro Ice Cream | Like It | only in draft B | not found | 370 / 18 / 11 / 0.5 / 70 / 160 / 47 / 0 / 38 / 4 | B: numbers found after the name (line 149); check the size |
| Churro Ice Cream | Love It | only in draft B | not found | 590 / 29 / 18 / 1 / 115 / 250 / 75 / 1 / 61 / 6 | B: numbers found after the name (line 150); check the size |
| Churro Ice Cream | Gotta Have It | only in draft B | not found | 880 / 43 / 26 / 1.5 / 170 / 370 / 113 / 1 / 92 / 9 | B: numbers found after the name (line 151); check the size |
| Cinnamon Ice Cream | Kids | only in draft B | not found | 200 / 12 / 7 / 0 / 50 / 60 / 22 / 0 / 19 / 2 | B: numbers found after the name (line 152); check the size |
| Cinnamon Ice Cream | Like It | only in draft B | not found | 340 / 20 / 12 / 0.5 / 80 / 100 / 36 / 1 / 31 / 4 | B: numbers found after the name (line 153); check the size |
| Cinnamon Ice Cream | Love It | only in draft B | not found | 540 / 32 / 20 / 1 / 130 / 160 / 57 / 1 / 50 / 6 | B: numbers found after the name (line 154); check the size |
| Cinnamon Ice Cream | Gotta Have It | only in draft B | not found | 810 / 48 / 30 / 1.5 / 195 / 240 / 86 / 2 / 75 / 9 | B: numbers found after the name (line 155); check the size |
| Cinnamon Bun Batter Ice Cream | Kids | only in draft B | not found | 220 / 10 / 6 / 0 / 40 / 100 / 30 / 0 / 22 / 2 | B: numbers found after the name (line 156); check the size |
| Cinnamon Bun Batter Ice Cream | Like It | only in draft B | not found | 370 / 17 / 11 / 0.5 / 65 / 170 / 50 / 1 / 37 / 4 | B: numbers found after the name (line 157); check the size |
| Cinnamon Bun Batter Ice Cream | Love It | only in draft B | not found | 590 / 28 / 17 / 1 / 105 / 270 / 80 / 1 / 60 / 6 | B: numbers found after the name (line 158); check the size |
| Cinnamon Bun Batter Ice Cream | Gotta Have It | only in draft B | not found | 890 / 41 / 25 / 1 / 160 / 410 / 120 / 2 / 90 / 9 | B: numbers found after the name (line 159); check the size |
| Circus Animal Cookies Ice Cream | Kids | only in draft B | not found | 230 / 12 / 8 / 0 / 40 / 140 / 28 / 0 / 22 / 2 | B: numbers found after the name (line 160); check the size |
| Circus Animal Cookies Ice Cream | Like It | only in draft B | not found | 390 / 21 / 14 / 0.5 / 70 / 230 / 48 / 0 / 37 / 4 | B: numbers found after the name (line 161); check the size |
| Circus Animal Cookies Ice Cream | Love It | only in draft B | not found | 630 / 33 / 22 / 1 / 110 / 370 / 76 / 0 / 59 / 6 | B: numbers found after the name (line 162); check the size |
| Circus Animal Cookies Ice Cream | Gotta Have It | only in draft B | not found | 940 / 50 / 33 / 1.5 / 160 / 560 / 114 / 0 / 88 / 10 | B: numbers found after the name (line 163); check the size |
| Classic Cookie Dough Ice Cream | Kids | only in draft B | not found | 220 / 10 / 6 / 0 / 40 / 130 / 29 / 0 / 22 / 2 | B: numbers found after the name (line 164); check the size |
| Classic Cookie Dough Ice Cream | Like It | only in draft B | not found | 370 / 17 / 11 / 0.5 / 70 / 220 / 49 / 0 / 37 / 4 | B: numbers found after the name (line 165); check the size |
| Classic Cookie Dough Ice Cream | Love It | only in draft B | not found | 590 / 28 / 17 / 1 / 110 / 350 / 78 / 0 / 60 / 6 | B: numbers found after the name (line 166); check the size |
| Classic Cookie Dough Ice Cream | Gotta Have It | only in draft B | not found | 890 / 42 / 25 / 1.5 / 165 / 520 / 117 / 0 / 90 / 10 | B: numbers found after the name (line 167); check the size |
| Coconut Ice Cream | Kids | only in draft B | not found | 200 / 12 / 7 / 0 / 45 / 60 / 22 / 0 / 19 / 2 | B: numbers found after the name (line 168); check the size |
| Coconut Ice Cream | Like It | only in draft B | not found | 340 / 19 / 12 / 0.5 / 80 / 100 / 36 / 0 / 32 / 4 | B: numbers found after the name (line 169); check the size |
| Coconut Ice Cream | Love It | only in draft B | not found | 540 / 31 / 19 / 1 / 125 / 160 / 57 / 0 / 52 / 6 | B: numbers found after the name (line 170); check the size |
| Coconut Ice Cream | Gotta Have It | only in draft B | not found | 800 / 47 / 29 / 1.5 / 190 / 240 / 86 / 0 / 77 / 9 | B: numbers found after the name (line 171); check the size |
| Coffee Ice Cream | Kids | only in draft B | not found | 200 / 12 / 7 / 0 / 50 / 60 / 21 / 0 / 19 / 2 | B: numbers found after the name (line 172); check the size |
| Coffee Ice Cream | Like It | only in draft B | not found | 340 / 20 / 13 / 0.5 / 80 / 100 / 36 / 0 / 31 / 4 | B: numbers found after the name (line 173); check the size |
| Coffee Ice Cream | Love It | only in draft B | not found | 540 / 32 / 20 / 1 / 130 / 160 / 57 / 0 / 50 / 6 | B: numbers found after the name (line 174); check the size |
| Coffee Ice Cream | Gotta Have It | only in draft B | not found | 810 / 48 / 30 / 1.5 / 195 / 240 / 85 / 0 / 75 / 9 | B: numbers found after the name (line 175); check the size |
| Cookie Butter Ice Cream | Kids | only in draft B | not found | 240 / 15 / 8 / 0 / 45 / 50 / 24 / 0 / 20 / 2 | B: numbers found after the name (line 176); check the size |
| Cookie Butter Ice Cream | Like It | only in draft B | not found | 410 / 26 / 13 / 0.5 / 70 / 85 / 40 / 0 / 33 / 4 | B: numbers found after the name (line 177); check the size |
| Cookie Butter Ice Cream | Love It | only in draft B | not found | 650 / 41 / 21 / 1 / 115 / 140 / 64 / 0 / 53 / 6 | B: numbers found after the name (line 178); check the size |
| Cookie Butter Ice Cream | Gotta Have It | only in draft B | not found | 980 / 61 / 32 / 2 / 175 / 210 / 96 / 1 / 79 / 9 | B: numbers found after the name (line 179); check the size |
| Cookies 'n' Peanut Butter Ice Cream made with OREO® and REESE'S | Kids | only in draft B | not found | 230 / 13 / 7 / 0 / 45 / 90 / 25 / 0 / 20 / 3 | B: numbers found after the name (line 180); check the size |
| Cookies 'n' Peanut Butter Ice Cream made with OREO® and REESE'S | Like It | only in draft B | not found | 380 / 22 / 12 / 0.5 / 70 / 150 / 41 / 0 / 33 / 4 | B: numbers found after the name (line 181); check the size |
| Cookies 'n' Peanut Butter Ice Cream made with OREO® and REESE'S | Love It | only in draft B | not found | 610 / 36 / 19 / 1 / 115 / 230 / 66 / 1 / 54 / 7 | B: numbers found after the name (line 182); check the size |
| Cookies 'n' Peanut Butter Ice Cream made with OREO® and REESE'S | Gotta Have It | only in draft B | not found | 910 / 53 / 29 / 1.5 / 175 / 350 / 99 / 1 / 80 / 10 | B: numbers found after the name (line 183); check the size |
| Cotton Candy Ice Cream | Kids | only in draft B | not found | 200 / 12 / 7 / 0 / 50 / 60 / 21 / 0 / 18 / 2 | B: numbers found after the name (line 184); check the size |
| Cotton Candy Ice Cream | Like It | only in draft B | not found | 330 / 20 / 12 / 0.5 / 80 / 100 / 35 / 0 / 31 / 4 | B: numbers found after the name (line 185); check the size |
| Cotton Candy Ice Cream | Love It | only in draft B | not found | 540 / 31 / 20 / 1 / 130 / 160 / 56 / 0 / 49 / 6 | B: numbers found after the name (line 186); check the size |
| Cotton Candy Ice Cream | Gotta Have It | only in draft B | not found | 800 / 47 / 29 / 1.5 / 190 / 240 / 84 / 0 / 74 / 9 | B: numbers found after the name (line 187); check the size |
| Dark Chocolate Ice Cream | Kids | only in draft B | not found | 200 / 12 / 7 / 0 / 45 / 100 / 21 / 2 / 18 / 4 | B: numbers found after the name (line 188); check the size |
| Dark Chocolate Ice Cream | Like It | only in draft B | not found | 340 / 20 / 12 / 0.5 / 70 / 170 / 35 / 3 / 30 / 6 | B: numbers found after the name (line 189); check the size |
| Dark Chocolate Ice Cream | Love It | only in draft B | not found | 540 / 32 / 20 / 1 / 115 / 270 / 57 / 5 / 48 / 10 | B: numbers found after the name (line 190); check the size |
| Dark Chocolate Ice Cream | Gotta Have It | only in draft B | not found | 810 / 48 / 30 / 1.5 / 175 / 400 / 85 / 7 / 72 / 15 | B: numbers found after the name (line 191); check the size |
| Dark Chocolate Peppermint Ice Cream | Kids | only in draft B | not found | 200 / 12 / 7 / 0 / 45 / 100 / 22 / 2 / 18 / 4 | B: numbers found after the name (line 192); check the size |
| Dark Chocolate Peppermint Ice Cream | Like It | only in draft B | not found | 340 / 20 / 12 / 0.5 / 70 / 170 / 36 / 3 / 30 / 6 | B: numbers found after the name (line 193); check the size |
| Dark Chocolate Peppermint Ice Cream | Love It | only in draft B | not found | 540 / 32 / 20 / 1 / 115 / 260 / 58 / 5 / 48 / 10 | B: numbers found after the name (line 194); check the size |
| Dark Chocolate Peppermint Ice Cream | Gotta Have It | only in draft B | not found | 810 / 47 / 30 / 1.5 / 170 / 400 / 87 / 7 / 72 / 15 | B: numbers found after the name (line 195); check the size |
| Double Chocolate Malt | Kids | only in draft B | not found | 220 / 11 / 7 / 0 / 40 / 75 / 28 / 1 / 25 / 3 | B: numbers found after the name (line 196); check the size |
| Double Chocolate Malt | Like It | only in draft B | not found | 370 / 18 / 11 / 0.5 / 65 / 125 / 46 / 1 / 42 / 5 | B: numbers found after the name (line 197); check the size |
| Double Chocolate Malt | Love It | only in draft B | not found | 590 / 29 / 18 / 1 / 105 / 200 / 74 / 2 / 67 / 8 | B: numbers found after the name (line 198); check the size |
| Double Chocolate Malt | Gotta Have It | only in draft B | not found | 880 / 44 / 27 / 1.5 / 155 / 300 / 111 / 3 / 101 / 13 | B: numbers found after the name (line 199); check the size |
| Dulce De Leche Ice Cream | Kids | only in draft B | not found | 210 / 11 / 7 / 0 / 45 / 70 / 25 / 0 / 23 / 3 | B: numbers found after the name (line 211); check the size |
| Dulce De Leche Ice Cream | Like It® | only in draft B | not found | 350 / 19 / 12 / 0.5 / 80 / 115 / 42 / 0 / 39 / 4 | B: numbers found after the name (line 212); check the size |
| Dulce De Leche Ice Cream | Love It® | only in draft B | not found | 570 / 30 / 19 / 1 / 125 / 180 / 67 / 0 / 62 / 7 | B: numbers found after the name (line 213); check the size |
| Dulce De Leche Ice Cream | Gotta Have It® | only in draft B | not found | 850 / 45 / 28 / 1.5 / 185 / 270 / 101 / 0 / 93 / 10 | B: numbers found after the name (line 214); check the size |
| Eggnog Ice Cream | Kids | only in draft B | not found | 170 / 10 / 6 / 0 / 45 / 65 / 19 / 0 / 17 / 2 | B: numbers found after the name (line 215); check the size |
| Eggnog Ice Cream | Like It | only in draft B | not found | 290 / 16 / 10 / 0 / 75 / 105 / 31 / 0 / 28 / 4 | B: numbers found after the name (line 216); check the size |
| Eggnog Ice Cream | Love It | only in draft B | not found | 460 / 26 / 16 / 0.5 / 125 / 170 / 50 / 0 / 45 / 6 | B: numbers found after the name (line 217); check the size |
| Eggnog Ice Cream | Gotta Have It | only in draft B | not found | 700 / 39 / 25 / 1 / 185 / 250 / 75 / 0 / 68 / 10 | B: numbers found after the name (line 218); check the size |
| French Vanilla Ice Cream | Kids | only in draft B | not found | 200 / 12 / 7 / 0 / 55 / 60 / 22 / 0 / 20 / 2 | B: numbers found after the name (line 219); check the size |
| French Vanilla Ice Cream | Like It | only in draft B | not found | 340 / 20 / 12 / 0.5 / 95 / 105 / 37 / 0 / 33 / 4 | B: numbers found after the name (line 220); check the size |
| French Vanilla Ice Cream | Love It | only in draft B | not found | 550 / 31 / 19 / 1 / 150 / 160 / 59 / 0 / 53 / 6 | B: numbers found after the name (line 221); check the size |
| French Vanilla Ice Cream | Gotta Have It | only in draft B | not found | 820 / 47 / 29 / 1.5 / 225 / 250 / 88 / 0 / 79 / 9 | B: numbers found after the name (line 222); check the size |
| Frozen Hot Chocolate Ice Cream | Kids | only in draft B | not found | 210 / 12 / 7 / 0 / 45 / 160 / 24 / 0 / 21 / 2 | B: numbers found after the name (line 223); check the size |
| Frozen Hot Chocolate Ice Cream | Like It | only in draft B | not found | 350 / 19 / 12 / 0.5 / 75 / 270 / 40 / 0 / 36 / 4 | B: numbers found after the name (line 224); check the size |
| Frozen Hot Chocolate Ice Cream | Love It | only in draft B | not found | 560 / 31 / 20 / 1 / 120 / 430 / 65 / 1 / 57 / 6 | B: numbers found after the name (line 225); check the size |
| Frozen Hot Chocolate Ice Cream | Gotta Have It | only in draft B | not found | 840 / 46 / 29 / 1.5 / 180 / 650 / 97 / 1 / 85 / 9 | B: numbers found after the name (line 226); check the size |
| Fudge Brownie Batter Ice Cream | Kids | only in draft B | not found | 220 / 12 / 7 / 0 / 40 / 95 / 27 / 1 / 22 / 3 | B: numbers found after the name (line 227); check the size |
| Fudge Brownie Batter Ice Cream | Like It | only in draft B | not found | 370 / 19 / 11 / 0.5 / 65 / 150 / 44 / 2 / 37 / 5 | B: numbers found after the name (line 228); check the size |
| Fudge Brownie Batter Ice Cream | Love It | only in draft B | not found | 600 / 31 / 18 / 1 / 105 / 250 / 71 / 2 / 60 / 9 | B: numbers found after the name (line 229); check the size |
| Fudge Brownie Batter Ice Cream | Gotta Have It | only in draft B | not found | 900 / 46 / 27 / 1.5 / 155 / 370 / 106 / 4 / 89 / 13 | B: numbers found after the name (line 230); check the size |
| Fudge Mint Cookie Ice Cream | Kids | only in draft B | not found | 220 / 13 / 8 / 0 / 40 / 60 / 23 / 1 / 20 / 3 | B: numbers found after the name (line 231); check the size |
| Fudge Mint Cookie Ice Cream | Like It | only in draft B | not found | 370 / 21 / 13 / 0.5 / 70 / 100 / 39 / 1 / 34 / 5 | B: numbers found after the name (line 232); check the size |
| Fudge Mint Cookie Ice Cream | Love It | only in draft B | not found | 570 / 34 / 21 / 1 / 110 / 160 / 62 / 2 / 54 / 8 | B: numbers found after the name (line 233); check the size |
| Fudge Mint Cookie Ice Cream | Gotta Have It | only in draft B | not found | 890 / 51 / 32 / 1.5 / 165 / 240 / 93 / 3 / 80 / 12 | B: numbers found after the name (line 234); check the size |
| Fudge Truffle Ice Cream | Kids | only in draft B | not found | 210 / 11 / 7 / 0 / 35 / 105 / 26 / 1 / 23 / 3 | B: numbers found after the name (line 235); check the size |
| Fudge Truffle Ice Cream | Like It | only in draft B | not found | 360 / 18 / 12 / 0 / 60 / 170 / 44 / 2 / 39 / 6 | B: numbers found after the name (line 236); check the size |
| Fudge Truffle Ice Cream | Love It | only in draft B | not found | 570 / 29 / 19 / 1 / 95 / 280 / 70 / 4 / 62 / 9 | B: numbers found after the name (line 237); check the size |
| Fudge Truffle Ice Cream | Gotta Have It | only in draft B | not found | 850 / 43 / 28 / 1 / 140 / 420 / 105 / 6 / 93 / 13 | B: numbers found after the name (line 238); check the size |
| Ghirardelli® Chocolate Ice Cream | Kids | only in draft B | not found | 200 / 12 / 7 / 0 / 45 / 60 / 23 / 2 / 17 / 3 | B: numbers found after the name (line 239); check the size |
| Ghirardelli® Chocolate Ice Cream | Like It | only in draft B | not found | 340 / 20 / 12 / 0.5 / 75 / 100 / 38 / 4 / 29 / 4 | B: numbers found after the name (line 240); check the size |
| Ghirardelli® Chocolate Ice Cream | Love It | only in draft B | not found | 540 / 32 / 20 / 1 / 120 / 160 / 61 / 6 / 46 / 7 | B: numbers found after the name (line 241); check the size |
| Ghirardelli® Chocolate Ice Cream | Gotta Have It | only in draft B | not found | 800 / 48 / 30 / 1.5 / 180 / 230 / 92 / 8 / 69 / 11 | B: numbers found after the name (line 242); check the size |
| Golden OREO® Cookie Ice Cream | Kids | only in draft B | not found | 220 / 13 / 7 / 0 / 45 / 95 / 25 / 0 / 20 / 2 | B: numbers found after the name (line 243); check the size |
| Golden OREO® Cookie Ice Cream | Like It | only in draft B | not found | 370 / 21 / 12 / 0.5 / 75 / 160 / 42 / 0 / 33 / 4 | B: numbers found after the name (line 244); check the size |
| Golden OREO® Cookie Ice Cream | Love It | only in draft B | not found | 600 / 34 / 19 / 1 / 120 / 260 / 67 / 0 / 53 / 6 | B: numbers found after the name (line 245); check the size |
| Golden OREO® Cookie Ice Cream | Gotta Have It | only in draft B | not found | 900 / 50 / 29 / 1.5 / 175 / 390 / 100 / 0 / 79 / 9 | B: numbers found after the name (line 246); check the size |
| Vanilla Lite™ No Sugar Added Ice Cream | Like it | both read it the same, but its protein, carbs and fat make 238 kcal, not 200 | 200 / 6 / 3.5 / 0 / 25 / 150 / 40 / 0 / 10 / 6 | 200 / 6 / 3.5 / 0 / 25 / 150 / 40 / 0 / 10 / 6 | A: numbers found after the name (line 458); check the size; B: numbers found after the name (line 458); check the size |
| Vanilla Lite™ No Sugar Added Ice Cream | Love it | both read it the same, but its protein, carbs and fat make 382 kcal, not 330 | 330 / 10 / 6 / 0 / 40 / 240 / 63 / 0 / 15 / 10 | 330 / 10 / 6 / 0 / 40 / 240 / 63 / 0 / 15 / 10 | A: numbers found after the name (line 459); check the size; B: numbers found after the name (line 459); check the size |

## Spot check (13 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Strawberry Marshmallow Ice Cream | Kids | 200 / 10 / 6 / 0 / 40 / 55 / 25 / 0 / 19 / 2 |
| Marbled Cake Batter™ Ice Cream | Kids | 210 / 12 / 7 / 0 / 45 / 80 / 23 / 0 / 20 / 3 |
| Apple Cinnamon Oatmeal Ice Cream | Kids | 210 / 12 / 7 / 0 / 45 / 70 / 23 / 0 / 19 / 2 |
| Sweet Cream Ice Cream | Like It | 340 / 20 / 13 / 0.5 / 80 / 100 / 35 / 0 / 31 / 4 |
| Peanut Butter Cookie Dough Ice Cream | Like It | 380 / 20 / 11 / 0.5 / 70 / 260 / 45 / 0 / 34 / 5 |
| Black Cherry Ice Cream | Like It | 340 / 19 / 12 / 0.5 / 75 / 95 / 38 / 0 / 34 / 4 |
| Raspberry Ice Cream | Gotta Have It | 800 / 45 / 28 / 1.5 / 180 / 230 / 88 / 0 / 78 / 9 |
| Peanut Butter Ice Cream | Kids | 230 / 15 / 8 / 0 / 45 / 85 / 21 / 0 / 18 / 4 |
| Peppermint Mocha Ice Cream | Like It | 340 / 20 / 12 / 0.5 / 75 / 105 / 35 / 1 / 31 / 5 |
| Pistachio Pudding Ice Cream | Love It | 580 / 29 / 17 / 1 / 115 / 580 / 76 / 0 / 65 / 5 |
| Salted Chocolate Caramel Ice Cream | Kids | 230 / 14 / 7 / 0 / 40 / 140 / 25 / 0 / 21 / 2 |
| Strawberry Shortcake Ice Cream | Love It | 560 / 30 / 19 / 1 / 115 / 280 / 65 / 0 / 54 / 6 |
| Strawberry Sorbet | Kids | 100 / 0 / 0 / 0 / 0 / 10 / 24 / 0 / 24 / 0 |
