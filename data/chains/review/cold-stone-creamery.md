# Cold Stone Creamery: lines for a person

Guide: https://www.coldstonecreamery.com/nutrition/pdf/CSC_Nutrition%20Info-Ice%20Cream_Sorbet.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (194)

Fix each line in `menus/cold-stone-creamery.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B |
| --- | --- | --- | --- | --- |
| Boo Batter Ice Cream | Gotta Have It | both read numbers that can't be right: sugars 83 g above carbs 15 g | 860 / 45 / 27 / 1.5 / 175 / 390 / 15 / 0 / 83 / 9 | 860 / 45 / 27 / 1.5 / 175 / 390 / 15 / 0 / 83 / 9 |
| Countrytime® Pink Lemonade Sorbet | Kids | differ: sodium_mg, carbs_g, fiber_g, sugars_g | 100 / 0 / 0 / 0 / 0 / 0 / 15 / 26 / 0 / 0 | 100 / 0 / 0 / 0 / 0 / 15 / 26 / 0 / 25 / 0 |
| Countrytime® Pink Lemonade Sorbet | Like It® | differ: sodium_mg, carbs_g, fiber_g, sugars_g | 170 / 0 / 0 / 0 / 0 / 0 / 20 / 43 / 0 / 0 | 170 / 0 / 0 / 0 / 0 / 20 / 43 / 0 / 42 / 0 |
| Countrytime® Pink Lemonade Sorbet | Love It® | differ: sodium_mg, carbs_g, fiber_g, sugars_g | 280 / 0 / 0 / 0 / 0 / 0 / 35 / 68 / 0 / 0 | 280 / 0 / 0 / 0 / 0 / 35 / 68 / 0 / 68 / 0 |
| Countrytime® Pink Lemonade Sorbet | Gotta Have It® | differ: sodium_mg, carbs_g, fiber_g, sugars_g | 410 / 0 / 0 / 0 / 0 / 0 / 50 / 102 / 0 / 0 | 410 / 0 / 0 / 0 / 0 / 50 / 102 / 0 / 101 / 0 |
| Lemon Sorbet | Kids | differ: sodium_mg, carbs_g, fiber_g, sugars_g | 90 / 0 / 0 / 0 / 0 / 0 / 10 / 23 / 0 / 0 | 90 / 0 / 0 / 0 / 0 / 10 / 23 / 0 / 23 / 0 |
| Lemon Sorbet | Like It | differ: sodium_mg, carbs_g, fiber_g, sugars_g | 160 / 0 / 0 / 0 / 0 / 0 / 15 / 39 / 0 / 0 | 160 / 0 / 0 / 0 / 0 / 15 / 39 / 0 / 38 / 0 |
| Lemon Sorbet | Love It | differ: sodium_mg, carbs_g, fiber_g, sugars_g | 250 / 0 / 0 / 0 / 0 / 0 / 25 / 62 / 0 / 0 | 250 / 0 / 0 / 0 / 0 / 25 / 62 / 0 / 61 / 0 |
| Lemon Sorbet | Gotta Have It | differ: sodium_mg, carbs_g, fiber_g, sugars_g | 380 / 0 / 0 / 0 / 0 / 0 / 40 / 93 / 0 / 0 | 380 / 0 / 0 / 0 / 0 / 40 / 93 / 0 / 92 / 0 |
| Mojito Sorbet | Kids | differ: sodium_mg, carbs_g, fiber_g, sugars_g | 110 / 0 / 0 / 0 / 0 / 0 / 10 / 27 / 0 / 0 | 110 / 0 / 0 / 0 / 0 / 10 / 27 / 0 / 26 / 0 |
| Mojito Sorbet | Like It | differ: sodium_mg, carbs_g, fiber_g, sugars_g | 190 / 1 / 0 / 0 / 0 / 0 / 15 / 44 / 0 / 0 | 190 / 1 / 0 / 0 / 0 / 15 / 44 / 0 / 43 / 0 |
| Mojito Sorbet | Love It | differ: sodium_mg, carbs_g, fiber_g, sugars_g | 300 / 1 / 0.5 / 0 / 0 / 0 / 25 / 71 / 0 / 0 | 300 / 1 / 0.5 / 0 / 0 / 25 / 71 / 0 / 69 / 0 |
| Mojito Sorbet | Gotta Have It | differ: sodium_mg, carbs_g, fiber_g, sugars_g | 450 / 2 / 1 / 0 / 0 / 0 / 35 / 106 / 0 / 0 | 450 / 2 / 1 / 0 / 0 / 35 / 106 / 0 / 103 / 0 |
| Orange Sorbet | Kids | differ: sodium_mg, carbs_g, fiber_g, sugars_g | 90 / 0 / 0 / 0 / 0 / 0 / 10 / 22 / 0 / 0 | 90 / 0 / 0 / 0 / 0 / 10 / 22 / 0 / 22 / 0 |
| Orange Sorbet | Like It | differ: sodium_mg, carbs_g, fiber_g, sugars_g | 150 / 0 / 0 / 0 / 0 / 0 / 15 / 38 / 0 / 0 | 150 / 0 / 0 / 0 / 0 / 15 / 38 / 0 / 37 / 0 |
| Orange Sorbet | Love It | differ: sodium_mg, carbs_g, fiber_g, sugars_g | 250 / 0 / 0 / 0 / 0 / 0 / 25 / 60 / 0 / 0 | 250 / 0 / 0 / 0 / 0 / 25 / 60 / 0 / 60 / 0 |
| Orange Sorbet | Gotta Have It | differ: sodium_mg, carbs_g, fiber_g, sugars_g | 370 / 0 / 0 / 0 / 0 / 0 / 40 / 90 / 0 / 0 | 370 / 0 / 0 / 0 / 0 / 40 / 90 / 0 / 89 / 0 |
| Peach Mango Sorbet | Kids | differ: sodium_mg, carbs_g, fiber_g, sugars_g | 100 / 0 / 0 / 0 / 0 / 0 / 10 / 26 / 0 / 0 | 100 / 0 / 0 / 0 / 0 / 10 / 26 / 0 / 25 / 0 |
| Peach Mango Sorbet | Like It | differ: sodium_mg, carbs_g, fiber_g, sugars_g | 170 / 0 / 0 / 0 / 0 / 0 / 20 / 43 / 0 / 0 | 170 / 0 / 0 / 0 / 0 / 20 / 43 / 0 / 42 / 0 |
| Peach Mango Sorbet | Love It | differ: sodium_mg, carbs_g, fiber_g, sugars_g | 280 / 0 / 0 / 0 / 0 / 0 / 35 / 68 / 0 / 0 | 280 / 0 / 0 / 0 / 0 / 35 / 68 / 0 / 68 / 0 |
| Peach Mango Sorbet | Gotta Have It | differ: sodium_mg, carbs_g, fiber_g, sugars_g | 410 / 0 / 0 / 0 / 0 / 0 / 50 / 102 / 0 / 0 | 410 / 0 / 0 / 0 / 0 / 50 / 102 / 0 / 101 / 0 |
| Pineapple Sorbet | Kids | differ: sodium_mg, carbs_g, fiber_g, sugars_g | 90 / 0 / 0 / 0 / 0 / 0 / 10 / 21 / 0 / 0 | 90 / 0 / 0 / 0 / 0 / 10 / 21 / 0 / 21 / 0 |
| Pineapple Sorbet | Like It | differ: sodium_mg, carbs_g, fiber_g, sugars_g | 140 / 0 / 0 / 0 / 0 / 0 / 15 / 35 / 0 / 0 | 140 / 0 / 0 / 0 / 0 / 15 / 35 / 0 / 35 / 0 |
| Pineapple Sorbet | Love It | differ: sodium_mg, carbs_g, fiber_g, sugars_g | 230 / 0 / 0 / 0 / 0 / 0 / 20 / 56 / 0 / 0 | 230 / 0 / 0 / 0 / 0 / 20 / 56 / 0 / 56 / 0 |
| Pineapple Sorbet | Gotta Have It | differ: sodium_mg, carbs_g, fiber_g, sugars_g | 350 / 0 / 0 / 0 / 0 / 0 / 30 / 84 / 0 / 0 | 350 / 0 / 0 / 0 / 0 / 30 / 84 / 0 / 84 / 0 |
| Pineapple Orange Banana Sorbet | Kids | differ: sodium_mg, carbs_g, fiber_g, sugars_g | 90 / 0 / 0 / 0 / 0 / 0 / 10 / 23 / 0 / 0 | 90 / 0 / 0 / 0 / 0 / 10 / 23 / 0 / 23 / 0 |
| Cake Batter Ganache™ Ice Cream | Kids | only in draft B | not found | 240 / 13 / 7 / 0 / 40 / 95 / 27 / 0 / 22 / 2 |
| Cake Batter Ganache™ Ice Cream | Like It | only in draft B | not found | 390 / 22 / 12 / 0.5 / 70 / 160 / 46 / 1 / 37 / 4 |
| Cake Batter Ganache™ Ice Cream | Love It | only in draft B | not found | 630 / 34 / 19 / 1 / 110 / 250 / 73 / 1 / 59 / 6 |
| Cake Batter Ganache™ Ice Cream | Gotta Have It | only in draft B | not found | 940 / 52 / 28 / 1.5 / 165 / 370 / 110 / 1 / 88 / 9 |
| Cake Batter Ice Cream® | Kids | only in draft B | not found | 220 / 11 / 7 / 0 / 45 / 95 / 26 / 0 / 21 / 2 |
| Cake Batter Ice Cream® | Like It | only in draft B | not found | 360 / 19 / 11 / 0.5 / 75 / 160 / 43 / 0 / 35 / 4 |
| Cake Batter Ice Cream® | Love It | only in draft B | not found | 580 / 30 / 18 / 1 / 120 / 260 / 70 / 0 / 56 / 6 |
| Cake Batter Ice Cream® | Gotta Have It | only in draft B | not found | 860 / 45 / 27 / 1.5 / 175 / 390 / 104 / 0 / 83 / 9 |
| Caramel Cardamom Ice Cream | Kids | only in draft B | not found | 210 / 11 / 7 / 0 / 45 / 70 / 26 / 0 / 21 / 2 |
| Caramel Cardamom Ice Cream | Like It | only in draft B | not found | 350 / 18 / 12 / 0.5 / 75 / 120 / 43 / 0 / 35 / 4 |
| Caramel Cardamom Ice Cream | Love It | only in draft B | not found | 560 / 29 / 18 / 1 / 120 / 190 / 68 / 0 / 56 / 6 |
| Caramel Cardamom Ice Cream | Gotta Have It | only in draft B | not found | 840 / 44 / 28 / 1.5 / 175 / 280 / 102 / 0 / 84 / 9 |
| Caramel Chocolate Cheesecake Ice Cream | Kids | only in draft B | not found | 210 / 12 / 7 / 0 / 40 / 115 / 23 / 1 / 20 / 3 |
| Caramel Chocolate Cheesecake Ice Cream | Like It | only in draft B | not found | 350 / 20 / 12 / 0.5 / 70 / 190 / 39 / 1 / 33 / 5 |
| Caramel Chocolate Cheesecake Ice Cream | Love It | only in draft B | not found | 570 / 32 / 19 / 1 / 110 / 310 / 63 / 2 / 53 / 8 |
| Caramel Chocolate Cheesecake Ice Cream | Gotta Have It | only in draft B | not found | 850 / 48 / 28 / 1.5 / 165 / 460 / 94 / 3 / 80 / 11 |
| Caramel Latte Ice Cream | Kids | only in draft B | not found | 210 / 11 / 7 / 0 / 45 / 70 / 24 / 0 / 20 / 2 |
| Caramel Latte Ice Cream | Like It | only in draft B | not found | 350 / 19 / 12 / 0.5 / 75 / 115 / 40 / 0 / 34 / 4 |
| Caramel Latte Ice Cream | Love It | only in draft B | not found | 560 / 30 / 19 / 1 / 120 / 180 / 65 / 0 / 54 / 6 |
| Caramel Latte Ice Cream | Gotta Have It | only in draft B | not found | 840 / 45 / 28 / 1.5 / 180 / 270 / 97 / 0 / 81 / 9 |
| Caramel Truffle Ice Cream | Kids | only in draft B | not found | 230 / 13 / 7 / 0 / 35 / 75 / 27 / 1 / 22 / 3 |
| Caramel Truffle Ice Cream | Like It® | only in draft B | not found | 390 / 21 / 12 / 0.5 / 60 / 120 / 45 / 2 / 38 / 5 |
| Caramel Truffle Ice Cream | Love It® | only in draft B | not found | 620 / 34 / 19 / 1 / 100 / 190 / 72 / 2 / 60 / 8 |
| Caramel Truffle Ice Cream | Gotta Have It® | only in draft B | not found | 930 / 51 / 28 / 1 / 150 / 290 / 108 / 4 / 90 / 11 |
| Chai Cold Brew Ice Cream | Kids | only in draft B | not found | 190 / 12 / 8 / 0 / 45 / 60 / 25 / 0 / 21 / 2 |
| Chai Cold Brew Ice Cream | Like It | only in draft B | not found | 310 / 20 / 13 / 0.5 / 75 / 100 / 41 / 0 / 36 / 4 |
| Chai Cold Brew Ice Cream | Love It | only in draft B | not found | 500 / 33 / 21 / 1 / 120 / 160 / 66 / 1 / 57 / 6 |
| Chai Cold Brew Ice Cream | Gotta Have It | only in draft B | not found | 750 / 49 / 32 / 1.5 / 180 / 240 / 98 / 1 / 85 / 8 |
| Cheesecake Ice Cream | Kids | only in draft B | not found | 200 / 11 / 7 / 0 / 45 / 85 / 23 / 0 / 19 / 2 |
| Cheesecake Ice Cream | Like It | only in draft B | not found | 340 / 19 / 12 / 0.5 / 75 / 140 / 39 / 0 / 32 / 4 |
| Cheesecake Ice Cream | Love It | only in draft B | not found | 540 / 30 / 19 / 1 / 120 / 230 / 62 / 0 / 51 / 6 |
| Cheesecake Ice Cream | Gotta Have It | only in draft B | not found | 820 / 45 / 28 / 1.5 / 180 / 350 / 93 / 0 / 77 / 9 |
| Cherry Vanilla Ice Cream | Kids | only in draft B | not found | 200 / 11 / 7 / 0 / 45 / 55 / 23 / 0 / 21 / 2 |
| Cherry Vanilla Ice Cream | Like It | only in draft B | not found | 340 / 18 / 11 / 0.5 / 75 / 95 / 38 / 0 / 34 / 3 |
| Cherry Vanilla Ice Cream | Love It | only in draft B | not found | 540 / 29 / 18 / 1 / 120 / 150 / 61 / 0 / 55 / 6 |
| Cherry Vanilla Ice Cream | Gotta Have It | only in draft B | not found | 810 / 44 / 27 / 1.5 / 180 / 230 / 92 / 0 / 82 / 8 |
| Chocolate Ice Cream | Kids | only in draft B | not found | 200 / 12 / 8 / 0 / 45 / 65 / 20 / 1 / 19 / 3 |
| Chocolate Ice Cream | Like It | only in draft B | not found | 340 / 20 / 13 / 0.5 / 75 / 105 / 34 / 1 / 31 / 5 |
| Chocolate Ice Cream | Love It | only in draft B | not found | 540 / 32 / 20 / 1 / 120 / 170 / 54 / 2 / 50 / 8 |
| Chocolate Ice Cream | Gotta Have It | only in draft B | not found | 810 / 48 / 30 / 1.5 / 180 / 260 / 81 / 3 / 75 / 12 |
| Chocolate Cake Batter Ice Cream® | Kids | only in draft B | not found | 220 / 11 / 7 / 0 / 40 / 105 / 26 / 1 / 21 / 3 |
| Chocolate Cake Batter Ice Cream® | Like It | only in draft B | not found | 360 / 19 / 11 / 0.5 / 65 / 180 / 44 / 1 / 35 / 5 |
| Chocolate Cake Batter Ice Cream® | Love It | only in draft B | not found | 580 / 30 / 18 / 1 / 105 / 290 / 70 / 2 / 57 / 8 |
| Chocolate Cake Batter Ice Cream® | Gotta Have It | only in draft B | not found | 870 / 44 / 27 / 1.5 / 160 / 430 / 105 / 3 / 85 / 12 |
| Chocolate Cake BatterTM Ganache Ice Cream | Kids | only in draft B | not found | 240 / 13 / 7 / 0 / 35 / 105 / 28 / 1 / 22 / 3 |
| Chocolate Cake BatterTM Ganache Ice Cream | Like It | only in draft B | not found | 400 / 21 / 11 / 0.5 / 60 / 170 / 46 / 2 / 37 / 5 |
| Chocolate Cake BatterTM Ganache Ice Cream | Love It | only in draft B | not found | 630 / 34 / 18 / 1 / 100 / 270 / 74 / 3 / 59 / 8 |
| Chocolate Cake BatterTM Ganache Ice Cream | Gotta Have It | only in draft B | not found | 950 / 51 / 27 / 1.5 / 150 / 410 / 110 / 4 / 89 / 12 |
| Chocolate Cupcake Ice Cream | Kids | only in draft B | not found | 220 / 12 / 7 / 0 / 40 / 120 / 24 / 1 / 20 / 3 |
| Chocolate Cupcake Ice Cream | Like It | only in draft B | not found | 360 / 20 / 12 / 0.5 / 65 / 200 / 40 / 2 / 33 / 5 |
| Chocolate Cupcake Ice Cream | Love It | only in draft B | not found | 580 / 33 / 19 / 1 / 105 / 320 / 64 / 3 / 53 / 9 |
| Chocolate Cupcake Ice Cream | Gotta Have It | only in draft B | not found | 870 / 49 / 29 / 1 / 160 / 480 / 96 / 5 / 79 / 13 |
| Chocolate Dipped Strawberry Ice Cream | Kids | only in draft B | not found | 220 / 13 / 7 / 0 / 40 / 55 / 24 / 0 / 21 / 2 |
| Chocolate Dipped Strawberry Ice Cream | Like It | only in draft B | not found | 360 / 21 / 12 / 0.5 / 70 / 90 / 39 / 1 / 35 / 3 |
| Chocolate Dipped Strawberry Ice Cream | Love It | only in draft B | not found | 580 / 34 / 18 / 1 / 110 / 140 / 63 / 1 / 55 / 6 |
| Chocolate Dipped Strawberry Ice Cream | Gotta Have It | only in draft B | not found | 860 / 50 / 28 / 1.5 / 165 / 210 / 94 / 1 / 83 / 8 |
| Chocolate Hazelnut Ice Cream | Kids | only in draft B | not found | 220 / 13 / 8 / 0 / 40 / 60 / 23 / 1 / 21 / 3 |
| Chocolate Hazelnut Ice Cream | Like It | only in draft B | not found | 370 / 22 / 13 / 0.5 / 70 / 105 / 38 / 1 / 35 / 5 |
| Chocolate Hazelnut Ice Cream | Love It | only in draft B | not found | 600 / 35 / 20 / 1 / 110 / 160 / 61 / 2 / 57 / 8 |
| Chocolate Hazelnut Ice Cream | Gotta Have It | only in draft B | not found | 890 / 52 / 31 / 1.5 / 165 / 250 / 91 / 4 / 85 / 13 |
| Chocolate Layer Cake Ice Cream | Kids | only in draft B | not found | 210 / 12 / 7 / 0 / 45 / 115 / 24 / 0 / 20 / 3 |
| Chocolate Layer Cake Ice Cream | Like It | only in draft B | not found | 360 / 19 / 11 / 0.5 / 75 / 200 / 41 / 0 / 33 / 4 |
| Chocolate Layer Cake Ice Cream | Love It | only in draft B | not found | 570 / 31 / 18 / 1 / 120 / 310 / 65 / 0 / 53 / 7 |
| Chocolate Layer Cake Ice Cream | Gotta Have It | only in draft B | not found | 850 / 47 / 27 / 1.5 / 180 / 470 / 97 / 1 / 79 / 11 |
| Chocolate Malt Ice Cream | Kids | only in draft B | not found | 220 / 11 / 7 / 0 / 40 / 100 / 25 / 1 / 22 / 4 |
| Chocolate Malt Ice Cream | Like It | only in draft B | not found | 370 / 19 / 12 / 0.5 / 70 / 170 / 41 / 1 / 36 / 6 |
| Chocolate Malt Ice Cream | Love It | only in draft B | not found | 580 / 30 / 19 / 1 / 110 / 270 / 66 / 2 / 58 / 9 |
| Chocolate Malt Ice Cream | Gotta Have It | only in draft B | not found | 880 / 45 / 29 / 1.5 / 165 / 400 / 99 / 3 / 87 / 14 |
| Chocolate Peanut Butter Ice Cream | Kids | only in draft B | not found | 260 / 17 / 8 / 0 / 35 / 130 / 23 / 1 / 19 / 6 |
| Chocolate Peanut Butter Ice Cream | Like It | only in draft B | not found | 440 / 29 / 13 / 0 / 55 / 220 / 38 / 2 / 32 / 10 |
| Chocolate Peanut Butter Ice Cream | Love It | only in draft B | not found | 700 / 46 / 20 / 1 / 90 / 340 / 61 / 3 / 52 / 16 |
| Chocolate Peanut Butter Ice Cream | Gotta Have It | only in draft B | not found | 1050 / 68 / 30 / 1 / 130 / 520 / 91 / 5 / 77 / 24 |
| Chocolate Pudding Ice Cream | Kids | only in draft B | not found | 220 / 10 / 7 / 0 / 40 / 100 / 28 / 0 / 23 / 2 |
| Chocolate Pudding Ice Cream | Like It | only in draft B | not found | 360 / 17 / 11 / 0.5 / 70 / 170 / 47 / 0 / 39 / 3 |
| Chocolate Pudding Ice Cream | Love It | only in draft B | not found | 580 / 28 / 17 / 1 / 115 / 270 / 75 / 0 / 62 / 5 |
| Chocolate Pudding Ice Cream | Gotta Have It | only in draft B | not found | 870 / 42 / 26 / 1.5 / 170 / 410 / 113 / 0 / 92 / 8 |
| Chocolate Raspberry Truffle Ice Cream | Kids | only in draft B | not found | 210 / 10 / 7 / 0 / 35 / 75 / 25 / 1 / 23 / 3 |
| Chocolate Raspberry Truffle Ice Cream | Like It® | only in draft B | not found | 350 / 17 / 11 / 0.5 / 60 / 130 / 42 / 1 / 38 / 5 |
| Chocolate Raspberry Truffle Ice Cream | Love It® | only in draft B | not found | 550 / 28 / 18 / 1 / 95 / 210 / 67 / 2 / 61 / 8 |
| Chocolate Raspberry Truffle Ice Cream | Gotta Have It® | only in draft B | not found | 830 / 42 / 27 / 1 / 145 / 310 / 101 / 3 / 91 / 12 |
| Churro Ice Cream | Kids | only in draft B | not found | 220 / 11 / 7 / 0 / 40 / 95 / 28 / 0 / 23 / 2 |
| Churro Ice Cream | Like It | only in draft B | not found | 370 / 18 / 11 / 0.5 / 70 / 160 / 47 / 0 / 38 / 4 |
| Churro Ice Cream | Love It | only in draft B | not found | 590 / 29 / 18 / 1 / 115 / 250 / 75 / 1 / 61 / 6 |
| Churro Ice Cream | Gotta Have It | only in draft B | not found | 880 / 43 / 26 / 1.5 / 170 / 370 / 113 / 1 / 92 / 9 |
| Cinnamon Ice Cream | Kids | only in draft B | not found | 200 / 12 / 7 / 0 / 50 / 60 / 22 / 0 / 19 / 2 |
| Cinnamon Ice Cream | Like It | only in draft B | not found | 340 / 20 / 12 / 0.5 / 80 / 100 / 36 / 1 / 31 / 4 |
| Cinnamon Ice Cream | Love It | only in draft B | not found | 540 / 32 / 20 / 1 / 130 / 160 / 57 / 1 / 50 / 6 |
| Cinnamon Ice Cream | Gotta Have It | only in draft B | not found | 810 / 48 / 30 / 1.5 / 195 / 240 / 86 / 2 / 75 / 9 |
| Cinnamon Bun Batter Ice Cream | Kids | only in draft B | not found | 220 / 10 / 6 / 0 / 40 / 100 / 30 / 0 / 22 / 2 |
| Cinnamon Bun Batter Ice Cream | Like It | only in draft B | not found | 370 / 17 / 11 / 0.5 / 65 / 170 / 50 / 1 / 37 / 4 |
| Cinnamon Bun Batter Ice Cream | Love It | only in draft B | not found | 590 / 28 / 17 / 1 / 105 / 270 / 80 / 1 / 60 / 6 |
| Cinnamon Bun Batter Ice Cream | Gotta Have It | only in draft B | not found | 890 / 41 / 25 / 1 / 160 / 410 / 120 / 2 / 90 / 9 |
| Circus Animal Cookies Ice Cream | Kids | only in draft B | not found | 230 / 12 / 8 / 0 / 40 / 140 / 28 / 0 / 22 / 2 |
| Circus Animal Cookies Ice Cream | Like It | only in draft B | not found | 390 / 21 / 14 / 0.5 / 70 / 230 / 48 / 0 / 37 / 4 |
| Circus Animal Cookies Ice Cream | Love It | only in draft B | not found | 630 / 33 / 22 / 1 / 110 / 370 / 76 / 0 / 59 / 6 |
| Circus Animal Cookies Ice Cream | Gotta Have It | only in draft B | not found | 940 / 50 / 33 / 1.5 / 160 / 560 / 114 / 0 / 88 / 10 |
| Classic Cookie Dough Ice Cream | Kids | only in draft B | not found | 220 / 10 / 6 / 0 / 40 / 130 / 29 / 0 / 22 / 2 |
| Classic Cookie Dough Ice Cream | Like It | only in draft B | not found | 370 / 17 / 11 / 0.5 / 70 / 220 / 49 / 0 / 37 / 4 |
| Classic Cookie Dough Ice Cream | Love It | only in draft B | not found | 590 / 28 / 17 / 1 / 110 / 350 / 78 / 0 / 60 / 6 |
| Classic Cookie Dough Ice Cream | Gotta Have It | only in draft B | not found | 890 / 42 / 25 / 1.5 / 165 / 520 / 117 / 0 / 90 / 10 |
| Coconut Ice Cream | Kids | only in draft B | not found | 200 / 12 / 7 / 0 / 45 / 60 / 22 / 0 / 19 / 2 |
| Coconut Ice Cream | Like It | only in draft B | not found | 340 / 19 / 12 / 0.5 / 80 / 100 / 36 / 0 / 32 / 4 |
| Coconut Ice Cream | Love It | only in draft B | not found | 540 / 31 / 19 / 1 / 125 / 160 / 57 / 0 / 52 / 6 |
| Coconut Ice Cream | Gotta Have It | only in draft B | not found | 800 / 47 / 29 / 1.5 / 190 / 240 / 86 / 0 / 77 / 9 |
| Coffee Ice Cream | Kids | only in draft B | not found | 200 / 12 / 7 / 0 / 50 / 60 / 21 / 0 / 19 / 2 |
| Coffee Ice Cream | Like It | only in draft B | not found | 340 / 20 / 13 / 0.5 / 80 / 100 / 36 / 0 / 31 / 4 |
| Coffee Ice Cream | Love It | only in draft B | not found | 540 / 32 / 20 / 1 / 130 / 160 / 57 / 0 / 50 / 6 |
| Coffee Ice Cream | Gotta Have It | only in draft B | not found | 810 / 48 / 30 / 1.5 / 195 / 240 / 85 / 0 / 75 / 9 |
| Cookie Butter Ice Cream | Kids | only in draft B | not found | 240 / 15 / 8 / 0 / 45 / 50 / 24 / 0 / 20 / 2 |
| Cookie Butter Ice Cream | Like It | only in draft B | not found | 410 / 26 / 13 / 0.5 / 70 / 85 / 40 / 0 / 33 / 4 |
| Cookie Butter Ice Cream | Love It | only in draft B | not found | 650 / 41 / 21 / 1 / 115 / 140 / 64 / 0 / 53 / 6 |
| Cookie Butter Ice Cream | Gotta Have It | only in draft B | not found | 980 / 61 / 32 / 2 / 175 / 210 / 96 / 1 / 79 / 9 |
| Cookies 'n' Peanut Butter Ice Cream made with OREO® and REESE'S | Kids | only in draft B | not found | 230 / 13 / 7 / 0 / 45 / 90 / 25 / 0 / 20 / 3 |
| Cookies 'n' Peanut Butter Ice Cream made with OREO® and REESE'S | Like It | only in draft B | not found | 380 / 22 / 12 / 0.5 / 70 / 150 / 41 / 0 / 33 / 4 |
| Cookies 'n' Peanut Butter Ice Cream made with OREO® and REESE'S | Love It | only in draft B | not found | 610 / 36 / 19 / 1 / 115 / 230 / 66 / 1 / 54 / 7 |
| Cookies 'n' Peanut Butter Ice Cream made with OREO® and REESE'S | Gotta Have It | only in draft B | not found | 910 / 53 / 29 / 1.5 / 175 / 350 / 99 / 1 / 80 / 10 |
| Cotton Candy Ice Cream | Kids | only in draft B | not found | 200 / 12 / 7 / 0 / 50 / 60 / 21 / 0 / 18 / 2 |
| Cotton Candy Ice Cream | Like It | only in draft B | not found | 330 / 20 / 12 / 0.5 / 80 / 100 / 35 / 0 / 31 / 4 |
| Cotton Candy Ice Cream | Love It | only in draft B | not found | 540 / 31 / 20 / 1 / 130 / 160 / 56 / 0 / 49 / 6 |
| Cotton Candy Ice Cream | Gotta Have It | only in draft B | not found | 800 / 47 / 29 / 1.5 / 190 / 240 / 84 / 0 / 74 / 9 |
| Dark Chocolate Ice Cream | Kids | only in draft B | not found | 200 / 12 / 7 / 0 / 45 / 100 / 21 / 2 / 18 / 4 |
| Dark Chocolate Ice Cream | Like It | only in draft B | not found | 340 / 20 / 12 / 0.5 / 70 / 170 / 35 / 3 / 30 / 6 |
| Dark Chocolate Ice Cream | Love It | only in draft B | not found | 540 / 32 / 20 / 1 / 115 / 270 / 57 / 5 / 48 / 10 |
| Dark Chocolate Ice Cream | Gotta Have It | only in draft B | not found | 810 / 48 / 30 / 1.5 / 175 / 400 / 85 / 7 / 72 / 15 |
| Dark Chocolate Peppermint Ice Cream | Kids | only in draft B | not found | 200 / 12 / 7 / 0 / 45 / 100 / 22 / 2 / 18 / 4 |
| Dark Chocolate Peppermint Ice Cream | Like It | only in draft B | not found | 340 / 20 / 12 / 0.5 / 70 / 170 / 36 / 3 / 30 / 6 |
| Dark Chocolate Peppermint Ice Cream | Love It | only in draft B | not found | 540 / 32 / 20 / 1 / 115 / 260 / 58 / 5 / 48 / 10 |
| Dark Chocolate Peppermint Ice Cream | Gotta Have It | only in draft B | not found | 810 / 47 / 30 / 1.5 / 170 / 400 / 87 / 7 / 72 / 15 |
| Double Chocolate Malt | Kids | only in draft B | not found | 220 / 11 / 7 / 0 / 40 / 75 / 28 / 1 / 25 / 3 |
| Double Chocolate Malt | Like It | only in draft B | not found | 370 / 18 / 11 / 0.5 / 65 / 125 / 46 / 1 / 42 / 5 |
| Double Chocolate Malt | Love It | only in draft B | not found | 590 / 29 / 18 / 1 / 105 / 200 / 74 / 2 / 67 / 8 |
| Double Chocolate Malt | Gotta Have It | only in draft B | not found | 880 / 44 / 27 / 1.5 / 155 / 300 / 111 / 3 / 101 / 13 |
| Dulce De Leche Ice Cream | Kids | only in draft B | not found | 210 / 11 / 7 / 0 / 45 / 70 / 25 / 0 / 23 / 3 |
| Dulce De Leche Ice Cream | Like It® | only in draft B | not found | 350 / 19 / 12 / 0.5 / 80 / 115 / 42 / 0 / 39 / 4 |
| Dulce De Leche Ice Cream | Love It® | only in draft B | not found | 570 / 30 / 19 / 1 / 125 / 180 / 67 / 0 / 62 / 7 |
| Dulce De Leche Ice Cream | Gotta Have It® | only in draft B | not found | 850 / 45 / 28 / 1.5 / 185 / 270 / 101 / 0 / 93 / 10 |
| Eggnog Ice Cream | Kids | only in draft B | not found | 170 / 10 / 6 / 0 / 45 / 65 / 19 / 0 / 17 / 2 |
| Eggnog Ice Cream | Like It | only in draft B | not found | 290 / 16 / 10 / 0 / 75 / 105 / 31 / 0 / 28 / 4 |
| Eggnog Ice Cream | Love It | only in draft B | not found | 460 / 26 / 16 / 0.5 / 125 / 170 / 50 / 0 / 45 / 6 |
| Eggnog Ice Cream | Gotta Have It | only in draft B | not found | 700 / 39 / 25 / 1 / 185 / 250 / 75 / 0 / 68 / 10 |
| French Vanilla Ice Cream | Kids | only in draft B | not found | 200 / 12 / 7 / 0 / 55 / 60 / 22 / 0 / 20 / 2 |
| French Vanilla Ice Cream | Like It | only in draft B | not found | 340 / 20 / 12 / 0.5 / 95 / 105 / 37 / 0 / 33 / 4 |
| French Vanilla Ice Cream | Love It | only in draft B | not found | 550 / 31 / 19 / 1 / 150 / 160 / 59 / 0 / 53 / 6 |
| French Vanilla Ice Cream | Gotta Have It | only in draft B | not found | 820 / 47 / 29 / 1.5 / 225 / 250 / 88 / 0 / 79 / 9 |
| Frozen Hot Chocolate Ice Cream | Kids | only in draft B | not found | 210 / 12 / 7 / 0 / 45 / 160 / 24 / 0 / 21 / 2 |
| Frozen Hot Chocolate Ice Cream | Like It | only in draft B | not found | 350 / 19 / 12 / 0.5 / 75 / 270 / 40 / 0 / 36 / 4 |
| Frozen Hot Chocolate Ice Cream | Love It | only in draft B | not found | 560 / 31 / 20 / 1 / 120 / 430 / 65 / 1 / 57 / 6 |
| Frozen Hot Chocolate Ice Cream | Gotta Have It | only in draft B | not found | 840 / 46 / 29 / 1.5 / 180 / 650 / 97 / 1 / 85 / 9 |
| Fudge Brownie Batter Ice Cream | Kids | only in draft B | not found | 220 / 12 / 7 / 0 / 40 / 95 / 27 / 1 / 22 / 3 |
| Fudge Brownie Batter Ice Cream | Like It | only in draft B | not found | 370 / 19 / 11 / 0.5 / 65 / 150 / 44 / 2 / 37 / 5 |
| Fudge Brownie Batter Ice Cream | Love It | only in draft B | not found | 600 / 31 / 18 / 1 / 105 / 250 / 71 / 2 / 60 / 9 |
| Fudge Brownie Batter Ice Cream | Gotta Have It | only in draft B | not found | 900 / 46 / 27 / 1.5 / 155 / 370 / 106 / 4 / 89 / 13 |
| Fudge Mint Cookie Ice Cream | Kids | only in draft B | not found | 220 / 13 / 8 / 0 / 40 / 60 / 23 / 1 / 20 / 3 |
| Fudge Mint Cookie Ice Cream | Like It | only in draft B | not found | 370 / 21 / 13 / 0.5 / 70 / 100 / 39 / 1 / 34 / 5 |
| Fudge Mint Cookie Ice Cream | Love It | only in draft B | not found | 570 / 34 / 21 / 1 / 110 / 160 / 62 / 2 / 54 / 8 |
| Fudge Mint Cookie Ice Cream | Gotta Have It | only in draft B | not found | 890 / 51 / 32 / 1.5 / 165 / 240 / 93 / 3 / 80 / 12 |
| Fudge Truffle Ice Cream | Kids | only in draft B | not found | 210 / 11 / 7 / 0 / 35 / 105 / 26 / 1 / 23 / 3 |
| Fudge Truffle Ice Cream | Like It | only in draft B | not found | 360 / 18 / 12 / 0 / 60 / 170 / 44 / 2 / 39 / 6 |
| Fudge Truffle Ice Cream | Love It | only in draft B | not found | 570 / 29 / 19 / 1 / 95 / 280 / 70 / 4 / 62 / 9 |
| Fudge Truffle Ice Cream | Gotta Have It | only in draft B | not found | 850 / 43 / 28 / 1 / 140 / 420 / 105 / 6 / 93 / 13 |
| Ghirardelli® Chocolate Ice Cream | Kids | only in draft B | not found | 200 / 12 / 7 / 0 / 45 / 60 / 23 / 2 / 17 / 3 |
| Ghirardelli® Chocolate Ice Cream | Like It | only in draft B | not found | 340 / 20 / 12 / 0.5 / 75 / 100 / 38 / 4 / 29 / 4 |
| Ghirardelli® Chocolate Ice Cream | Love It | only in draft B | not found | 540 / 32 / 20 / 1 / 120 / 160 / 61 / 6 / 46 / 7 |
| Ghirardelli® Chocolate Ice Cream | Gotta Have It | only in draft B | not found | 800 / 48 / 30 / 1.5 / 180 / 230 / 92 / 8 / 69 / 11 |
| Golden OREO® Cookie Ice Cream | Kids | only in draft B | not found | 220 / 13 / 7 / 0 / 45 / 95 / 25 / 0 / 20 / 2 |
| Golden OREO® Cookie Ice Cream | Like It | only in draft B | not found | 370 / 21 / 12 / 0.5 / 75 / 160 / 42 / 0 / 33 / 4 |
| Golden OREO® Cookie Ice Cream | Love It | only in draft B | not found | 600 / 34 / 19 / 1 / 120 / 260 / 67 / 0 / 53 / 6 |
| Golden OREO® Cookie Ice Cream | Gotta Have It | only in draft B | not found | 900 / 50 / 29 / 1.5 / 175 / 390 / 100 / 0 / 79 / 9 |

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
