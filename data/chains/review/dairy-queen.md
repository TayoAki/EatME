# Dairy Queen: lines for a person

Guide: https://www.dairyqueen.com/en-us/nutrition/food-treats/ (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (131)

Fix each line in `menus/dairy-queen.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B |
| --- | --- | --- | --- | --- |
| Parmesan Garlic Sauced & Tossed Chicken Strip Basket | 4 Piece | differ: trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g | 1220 / 66 / 12 / 80 / 3130 / 117 / 7 / 6 / 37 / 37 | 1220 / 66 / 12 / – / 80 / 3130 / 117 / 7 / 6 / 37 |
| Kraft Fat Free Italian Dressing | 1 serving | the guide gives no saturated_fat_g, fiber_g | 25 / 0 / – / – / 0 / 380 / 4 / – / 3 / 0 | 25 / 0 / – / – / 0 / 380 / 4 / – / 3 / 0 |
| Kraft Honey Mustard Dressing | 1 serving | the guide gives no sugars_g | 130 / 9 / 1.5 / 0 / 10 / 330 / 12 / 0 / – / 0 | 130 / 9 / 1.5 / 0 / 10 / 330 / 12 / 0 / – / 0 |
| Yellow Mustard | 1 serving | differ: fat_g | 5 / 0 / 0 / 0 / 0 / 85 / 0 / 0 / 0 / 0 | 5 / 5 / 0 / 0 / 0 / 85 / 0 / 0 / 0 / 0 |
| Add A Banana | Small | the guide gives no fat_g, saturated_fat_g, sodium_mg, protein_g | 25 / – / – / – / – / – / 7 / 1 / 4 / – | 25 / – / – / – / – / – / 7 / 1 / 4 / – |
| Add A Banana | Medium | the guide gives no fat_g, saturated_fat_g, sodium_mg, protein_g | 40 / – / – / – / – / – / 10 / 1 / 5 / – | 40 / – / – / – / – / – / 10 / 1 / 5 / – |
| Add A Banana | Large | the guide gives no fat_g, saturated_fat_g, sodium_mg | 50 / – / – / – / – / – / 13 / 2 / 7 / 1 | 50 / – / – / – / – / – / 13 / 2 / 7 / 1 |
| Add A Banana | XLarge | the guide gives no fat_g, saturated_fat_g, sodium_mg | 70 / – / – / – / – / – / 17 / 2 / 9 / 1 | 70 / – / – / – / – / – / 17 / 2 / 9 / 1 |
| Antioxidant Boost | 1 serving | the guide gives no fat_g, saturated_fat_g, sodium_mg, fiber_g, sugars_g, protein_g | 20 / – / – / – / – / – / 5 / – / – / – | 20 / – / – / – / – / – / 5 / – / – / – |
| Energy Boost | 1 serving | the guide gives no fat_g, saturated_fat_g, sodium_mg, fiber_g, sugars_g, protein_g | 20 / – / – / – / – / – / 5 / – / – / – | 20 / – / – / – / – / – / 5 / – / – / – |
| Protein Boost | 1 serving | the guide gives no fat_g, saturated_fat_g, carbs_g, fiber_g, sugars_g | 50 / – / – / – / – / 90 / – / – / – / 12 | 50 / – / – / – / – / 90 / – / – / – / 12 |
| Vitamin C Boost | 1 serving | the guide gives no fat_g, saturated_fat_g, sodium_mg, fiber_g, sugars_g, protein_g | 20 / – / – / – / – / – / 5 / – / – / – | 20 / – / – / – / – / – / 5 / – / – / – |
| Applesauce | 1 serving | only in draft B | not found | 45 / 0 / 0 / 0 / 0 / 0 / 11 / 2 / 7 / 0 |
| Banana | 1 serving | only in draft B | not found | 110 / 0 / 0 / 0 / 0 / 0 / 27 / 3 / 14 / 1 |
| Chicken Strips | 2 pc | only in draft B | not found | 280 / 13 / 2.5 / 0 / 30 / 640 / 28 / 1 / 1 / 13 |
| Fries, Kids' | 1 serving | only in draft B | not found | 170 / 8 / 1 / 0 / 0 / 370 / 23 / 2 / 0 / 3 |
| Milk | 1 serving | only in draft B | not found | 110 / 2.5 / 1.5 / 0 / 10 / 130 / 12 / 0 / 12 / 8 |
| Butterfinger® Blizzard | Large | only in draft B | not found | 1060 / 37 / 22 / 1 / 85 / 480 / 155 / 2 / 119 / 27 |
| Butterfinger® Blizzard | Medium | only in draft B | not found | 800 / 28 / 17 / 1 / 65 / 360 / 118 / 2 / 91 / 20 |
| Butterfinger® Blizzard | Mini | only in draft B | not found | 350 / 12 / 7 / 0 / 30 / 150 / 52 / 1 / 41 / 9 |
| Butterfinger® Blizzard | Small | only in draft B | not found | 590 / 21 / 12 / 0.5 / 50 / 270 / 87 / 1 / 68 / 15 |
| Choco Brownie Extreme Blizzard | Large | only in draft B | not found | 1330 / 60 / 33 / 1.5 / 85 / 620 / 184 / 7 / 142 / 26 |
| Choco Brownie Extreme Blizzard | Medium | only in draft B | not found | 980 / 43 / 25 / 1 / 70 / 460 / 137 / 5 / 106 / 20 |
| Choco Brownie Extreme Blizzard | Mini | only in draft B | not found | 420 / 18 / 10 / 0 / 30 / 190 / 58 / 2 / 46 / 9 |
| Choco Brownie Extreme Blizzard | Small | only in draft B | not found | 740 / 33 / 18 / 1 / 50 / 340 / 103 / 4 / 81 / 15 |
| Chocolate Chip Cookie Dough Blizzard | Large | only in draft B | not found | 1370 / 54 / 33 / 1.5 / 80 / 740 / 201 / 3 / 151 / 23 |
| Chocolate Chip Cookie Dough Blizzard | Medium | only in draft B | not found | 1030 / 40 / 24 / 1 / 60 / 550 / 151 / 2 / 113 / 18 |
| Chocolate Chip Cookie Dough Blizzard | Mini | only in draft B | not found | 410 / 16 / 9 / 0 / 30 / 210 / 60 / 1 / 46 / 8 |
| Chocolate Chip Cookie Dough Blizzard | Small | only in draft B | not found | 710 / 27 / 16 / 0.5 / 45 / 380 / 104 / 1 / 78 / 13 |
| Heath® Blizzard | Large | only in draft B | not found | 1190 / 49 / 32 / 1.5 / 90 / 590 / 168 / 2 / 148 / 23 |
| Heath® Blizzard | Medium | only in draft B | not found | 880 / 37 / 24 / 1 / 70 / 430 / 124 / 1 / 110 / 17 |
| Heath® Blizzard | Mini | only in draft B | not found | 360 / 14 / 9 / 0 / 30 / 170 / 52 / 0 / 45 / 8 |
| Heath® Blizzard | Small | only in draft B | not found | 640 / 26 / 16 / 1 / 55 / 310 / 91 / 1 / 79 / 13 |
| M&M’s® Chocolate Candy Blizzard | Large | only in draft B | not found | 1160 / 38 / 24 / 1 / 85 / 380 / 183 / 3 / 159 / 23 |
| M&M’s® Chocolate Candy Blizzard | Medium | only in draft B | not found | 880 / 29 / 18 / 1 / 65 / 290 / 135 / 2 / 117 / 18 |
| M&M’s® Chocolate Candy Blizzard | Small | only in draft B | not found | 660 / 21 / 13 / 0.5 / 50 / 220 / 103 / 1 / 89 / 14 |
| M&M’s® Chocolate Candy Blizzard | Mini | only in draft B | not found | 370 / 12 / 8 / 0 / 30 / 125 / 58 / 1 / 50 / 8 |
| OREO® Cookie Blizzard | Large | only in draft B | not found | 1050 / 39 / 20 / 1.5 / 80 / 500 / 156 / 1 / 121 / 22 |
| OREO® Cookie Blizzard | Medium | only in draft B | not found | 820 / 30 / 16 / 1 / 65 / 390 / 121 / 1 / 94 / 17 |
| OREO® Cookie Blizzard | Mini | only in draft B | not found | 330 / 12 / 6 / 0 / 30 / 150 / 48 / 0 / 39 / 7 |
| OREO® Cookie Blizzard | Small | only in draft B | not found | 600 / 22 / 12 / 1 / 50 / 280 / 89 / 1 / 70 / 13 |
| Reese's® Peanut Butter Cups Blizzard | Large | only in draft B | not found | 1080 / 45 / 23 / 1.5 / 85 / 550 / 148 / 3 / 128 / 28 |
| Reese's® Peanut Butter Cups Blizzard | Medium | only in draft B | not found | 820 / 34 / 17 / 1 / 65 / 410 / 113 / 2 / 97 / 21 |
| Reese's® Peanut Butter Cups Blizzard | Mini | only in draft B | not found | 360 / 14 / 7 / 0 / 30 / 170 / 50 / 1 / 43 / 9 |
| Reese's® Peanut Butter Cups Blizzard | Small | only in draft B | not found | 610 / 24 / 13 / 1 / 50 / 300 / 84 / 1 / 72 / 16 |
| Royal New York Cheesecake Blizzard Filled with Strawberry | Large | only in draft B | not found | 1320 / 60 / 28 / 2 / 135 / 690 / 171 / 2 / 135 / 25 |
| Royal New York Cheesecake Blizzard Filled with Strawberry | Medium | only in draft B | not found | 1040 / 46 / 21 / 1.5 / 105 / 530 / 140 / 2 / 112 / 19 |
| Royal New York Cheesecake Blizzard Filled with Strawberry | Mini | only in draft B | not found | 450 / 18 / 8 / 0.5 / 40 / 220 / 65 / 1 / 53 / 8 |
| Royal New York Cheesecake Blizzard Filled with Strawberry | Small | only in draft B | not found | 750 / 32 / 15 / 1 / 75 / 380 / 102 / 2 / 82 / 14 |
| Royal Ultimate Choco Brownie Blizzard Filled with Fudge | Large | only in draft B | not found | 1340 / 60 / 36 / 1 / 80 / 620 / 186 / 8 / 148 / 25 |
| Royal Ultimate Choco Brownie Blizzard Filled with Fudge | Medium | only in draft B | not found | 1040 / 45 / 29 / 1 / 65 / 480 / 146 / 5 / 117 / 19 |
| Royal Ultimate Choco Brownie Blizzard Filled with Fudge | Mini | only in draft B | not found | 480 / 21 / 13 / 0 / 30 / 220 / 68 / 2 / 55 / 9 |
| Royal Ultimate Choco Brownie Blizzard Filled with Fudge | Small | only in draft B | not found | 770 / 34 / 20 / 0.5 / 45 / 350 / 107 / 4 / 86 / 14 |
| Snickers® Blizzard | Large | only in draft B | not found | 1060 / 36 / 20 / 1 / 80 / 450 / 162 / 2 / 138 / 24 |
| Snickers® Blizzard | Medium | only in draft B | not found | 800 / 28 / 15 / 1 / 65 / 340 / 120 / 1 / 102 / 19 |
| Snickers® Blizzard | Mini | only in draft B | not found | 350 / 12 / 7 / 0 / 30 / 150 / 53 / 0 / 45 / 8 |
| Snickers® Blizzard | Small | only in draft B | not found | 610 / 20 / 11 / 0.5 / 50 / 260 / 92 / 1 / 78 / 14 |
| Turtle Pecan Cluster Blizzard | Large | only in draft B | not found | 1370 / 71 / 41 / 1.5 / 85 / 510 / 165 / 4 / 132 / 24 |
| Turtle Pecan Cluster Blizzard | Medium | only in draft B | not found | 1020 / 52 / 29 / 1 / 65 / 390 / 123 / 3 / 99 / 18 |
| Turtle Pecan Cluster Blizzard | Mini | only in draft B | not found | 430 / 22 / 14 / 0 / 30 / 160 / 51 / 1 / 42 / 8 |
| Turtle Pecan Cluster Blizzard | Small | only in draft B | not found | 680 / 34 / 18 / 0.5 / 50 / 270 / 84 / 2 / 68 / 14 |
| Banana Shake | Large | only in draft B | not found | 750 / 27 / 19 / 1.5 / 75 / 310 / 109 / 2 / 88 / 21 |
| Banana Shake | Medium | only in draft B | not found | 590 / 22 / 16 / 1 / 55 / 240 / 83 / 1 / 68 / 16 |
| Banana Shake | Small | only in draft B | not found | 470 / 19 / 13 / 1 / 45 / 190 / 64 / 1 / 53 / 13 |
| Caramel Shake | Large | only in draft B | not found | 980 / 31 / 21 / 1.5 / 85 / 450 / 154 / 0 / 124 / 22 |
| Caramel Shake | Medium | only in draft B | not found | 750 / 25 / 17 / 1.5 / 65 / 330 / 115 / 0 / 93 / 17 |
| Caramel Shake | Small | only in draft B | not found | 550 / 20 / 14 / 1 / 50 / 240 / 79 / 0 / 65 / 13 |
| Chocolate Shake | Large | only in draft B | not found | 920 / 28 / 19 / 1.5 / 75 / 390 / 147 / 2 / 128 / 21 |
| Chocolate Shake | Medium | only in draft B | not found | 710 / 23 / 16 / 1 / 60 / 290 / 110 / 1 / 96 / 16 |
| Chocolate Shake | Small | only in draft B | not found | 530 / 19 / 14 / 1 / 45 / 220 / 77 / 1 / 67 / 13 |
| Hot Fudge Shake | Large | only in draft B | not found | 990 / 38 / 29 / 1.5 / 75 / 440 / 140 / 1 / 112 / 23 |
| Hot Fudge Shake | Medium | only in draft B | not found | 750 / 30 / 23 / 1.5 / 60 / 330 / 105 / 1 / 85 / 17 |
| Hot Fudge Shake | Small | only in draft B | not found | 550 / 22 / 17 / 1 / 45 / 240 / 75 / 0 / 61 / 13 |
| Make It A Malt Adds | Large | only in draft B | not found | 110 / 1 / 1 / 0 / 5 / 105 / 23 / 1 / 16 / 2 |
| Make It A Malt Adds | Medium | only in draft B | not found | 80 / 1 / 0.5 / 0 / 5 / 80 / 18 / 1 / 12 / 1 |
| Make It A Malt Adds | Small | only in draft B | not found | 60 / 0.5 / 0 / 0 / 0 / 50 / 12 / 0 / 8 / 1 |
| Peanut Butter Shake | Large | only in draft B | not found | 1250 / 72 / 26 / 1.5 / 75 / 830 / 119 / 4 / 89 / 30 |
| Peanut Butter Shake | Medium | only in draft B | not found | 930 / 53 / 20 / 1 / 60 / 590 / 91 / 3 / 69 / 22 |
| Peanut Butter Shake | Small | only in draft B | not found | 640 / 34 / 16 / 1 / 45 / 370 / 67 / 1 / 54 / 16 |
| Caramel MooLatte | Large | only in draft B | not found | 780 / 21 / 15 / 1 / 50 / 320 / 135 / 0 / 113 / 13 |
| Caramel MooLatte | Medium | only in draft B | not found | 620 / 18 / 13 / 1 / 40 / 240 / 103 / 0 / 87 / 10 |
| Caramel MooLatte | Small | only in draft B | not found | 490 / 15 / 11 / 1 / 30 / 190 / 81 / 0 / 69 / 8 |
| Mocha MooLatte | Large | only in draft B | not found | 780 / 29 / 16 / 1 / 50 / 310 / 121 / 2 / 106 / 14 |
| Mocha MooLatte | Medium | only in draft B | not found | 620 / 23 / 14 / 1 / 40 / 240 / 94 / 2 / 82 / 11 |
| Mocha MooLatte | Small | only in draft B | not found | 500 / 18 / 12 / 1 / 30 / 180 / 76 / 1 / 67 / 9 |
| Vanilla MooLatte | Large | only in draft B | not found | 700 / 19 / 14 / 1 / 45 / 240 / 121 / 0 / 109 / 12 |
| Vanilla MooLatte | Medium | only in draft B | not found | 560 / 17 / 12 / 1 / 35 / 190 / 93 / 0 / 84 / 9 |
| Vanilla MooLatte | Small | only in draft B | not found | 450 / 14 / 11 / 1 / 30 / 150 / 74 / 0 / 67 / 7 |
| Brown Sugar Cookie Dough Blizzard | Mini | only in draft B | not found | 420 / 17 / 9 / 0.5 / 35 / 240 / 59 / 0 / 47 / 7 |
| Brown Sugar Cookie Dough Blizzard | Small | only in draft B | not found | 650 / 25 / 14 / 1 / 55 / 350 / 93 / 1 / 72 / 12 |
| Brown Sugar Cookie Dough Blizzard | Medium | only in draft B | not found | 940 / 38 / 20 / 1 / 75 / 530 / 133 / 1 / 103 / 16 |
| Brown Sugar Cookie Dough Blizzard | Large | only in draft B | not found | 1260 / 52 / 26 / 1.5 / 100 / 730 / 178 / 1 / 138 / 21 |
| Enchanted Oreo Blizzard | Mini | only in draft B | not found | 440 / 17 / 8 / 0 / 308 / 180 / 64 / 0 / 51 / 8 |
| Enchanted Oreo Blizzard | Small | only in draft B | not found | 770 / 31 / 14 / 1 / 50 / 330 / 109 / 1 / 87 / 13 |
| Enchanted Oreo Blizzard | Medium | only in draft B | not found | 1050 / 44 / 19 / 1 / 65 / 460 / 148 / 1 / 119 / 17 |
| Enchanted Oreo Blizzard | Large | only in draft B | not found | 1380 / 59 / 25 / 1.5 / 80 / 600 / 193 / 1 / 155 / 22 |
| Bubble Brew DQ® Lemonade Sparkler | Small | only in draft B | not found | 250 / 2 / 2 / 0 / 0 / 20 / 57 / 0 / 55 / 0 |
| Bubble Brew DQ® Lemonade Sparkler | Medium | only in draft B | not found | 320 / 2 / 2 / 0 / 0 / 25 / 75 / 0 / 72 / 0 |
| Bubble Brew DQ® Lemonade Sparkler | Large | only in draft B | not found | 430 / 2 / 2 / 0 / 0 / 30 / 103 / 0 / 99 / 0 |
| Caramel Apple Cheesecake Blizzard | Mini | only in draft B | not found | 340 / 11 / 7 / 0.5 / 40 / 220 / 52 / 0 / 43 / 8 |
| Caramel Apple Cheesecake Blizzard | Small | only in draft B | not found | 600 / 20 / 12 / 1 / 75 / 410 / 92 / 0 / 75 / 13 |
| Caramel Apple Cheesecake Blizzard | Medium | only in draft B | not found | 840 / 27 / 17 / 1.5 / 100 / 600 / 130 / 1 / 105 / 17 |
| Caramel Apple Cheesecake Blizzard | Large | only in draft B | not found | 1130 / 36 / 22 / 1.5 / 135 / 800 / 177 / 1 / 141 / 23 |
| Pumpkin Pie Blizzard | Mini | only in draft B | not found | 360 / 14 / 9 / 0.5 / 25 / 190 / 52 / 1 / 41 / 7 |
| Pumpkin Pie Blizzard | Small | only in draft B | not found | 560 / 20 / 13 / 1 / 40 / 330 / 86 / 2 / 68 / 11 |
| Pumpkin Pie Blizzard | Medium | only in draft B | not found | 720 / 25 / 15 / 1 / 50 / 440 / 110 / 2 / 85 / 14 |
| Pumpkin Pie Blizzard | Large | only in draft B | not found | 940 / 32 / 19 / 1.5 / 70 / 570 / 145 / 2 / 112 / 19 |
| Hibiscus Lemonade DQ® Sparkler | Small | only in draft B | not found | 230 / 0 / 0 / 0 / 0 / 10 / 58 / 0 / 56 / 0 |
| Hibiscus Lemonade DQ® Sparkler | Medium | only in draft B | not found | 300 / 0 / 0 / 0 / 0 / 15 / 77 / 0 / 74 / 0 |
| Hibiscus Lemonade DQ® Sparkler | Large | only in draft B | not found | 420 / 0 / 0 / 0 / 0 / 20 / 105 / 0 / 102 / 0 |
| Hibiscus Lemonade DQ® Cooler | Small | only in draft B | not found | 460 / 6 / 4 / 0 / 20 / 95 / 97 / 0 / 91 / 5 |
| Hibiscus Lemonade DQ® Cooler | Medium | only in draft B | not found | 630 / 9 / 6 / 0 / 30 / 135 / 129 / 0 / 121 / 8 |
| Hibiscus Lemonade DQ® Cooler | Large | only in draft B | not found | 860 / 12 / 8 / 0.5 / 40 / 170 / 178 / 0 / 167 / 10 |
| Dipped Cone, Cherry | Kids | only in draft B | not found | 210 / 9 / 7 / 0 / 15 / 65 / 28 / 0 / 20 / 4 |
| DQ Cooler Classic Lemonade | Small | only in draft B | not found | 420 / 6 / 4 / 0 / 20 / 95 / 87 / 0 / 81 / 5 |
| DQ Cooler Classic Lemonade | Medium | only in draft B | not found | 540 / 9 / 6 / 0 / 30 / 130 / 112 / 0 / 103 / 7 |
| DQ Coolers Classic Lemonade | Large | only in draft B | not found | 740 / 11 / 7 / 0.5 / 40 / 170 / 154 / 0 / 143 / 9 |
| DQ Sparkler Classic Lemonade | Small | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 10 / 45 / 0 / 44 / 0 |
| DQ Sparklers Classic Lemonade | Medium | only in draft B | not found | 230 / 0 / 0 / 0 / 0 / 15 / 58 / 0 / 56 / 0 |
| DQ Sparklers Classic Lemonade | Large | only in draft B | not found | 320 / 0 / 0 / 0 / 0 / 20 / 80 / 0 / 77 / 0 |
| Mint OREO® Blizzard | Mini | only in draft B | not found | 360 / 12 / 7 / 0 / 30 / 160 / 56 / 0 / 45 / 8 |
| Mint OREO® Blizzard | Small | only in draft B | not found | 640 / 22 / 12 / 1 / 50 / 290 / 99 / 1 / 80 / 13 |
| Mint OREO® Blizzard | Medium | only in draft B | not found | 880 / 30 / 16 / 1 / 65 / 400 / 137 / 1 / 109 / 17 |
| Mint OREO® Blizzard | Large | only in draft B | not found | 1140 / 39 / 20 / 1.5 / 80 / 510 / 177 / 1 / 141 / 22 |
| Mocha Brownie Mudslide Blizzard | Mini | only in draft B | not found | 370 / 15 / 9 / 0 / 30 / 170 / 53 / 1 / 42 / 8 |
| Mocha Brownie Mudslide Blizzard | Small | only in draft B | not found | 650 / 26 / 17 / 1 / 50 / 310 / 94 / 3 / 73 / 14 |
| Mocha Brownie Mudslide Blizzard | Medium | only in draft B | not found | 900 / 37 / 23 / 1 / 70 / 430 / 128 / 4 / 99 / 19 |
| Mocha Brownie Mudslide Blizzard | Large | only in draft B | not found | 1170 / 48 / 30 / 1.5 / 90 / 570 / 167 / 5 / 128 / 25 |
| Maple Cookie Shake | Small | only in draft B | not found | 590 / 29 / 16 / 1 / 45 / 380 / 71 / 0 / 59 / 12 |
| Maple Cookie Shake | Medium | only in draft B | not found | 770 / 37 / 19 / 1.5 / 60 / 510 / 92 / 0 / 76 / 15 |
| Caramel Topping | Sundae, Shake, Malt, Medium/Large Blizzard | only in draft B | not found | 90 / 1 / 0.5 / 0 / 5 / 45 / 20 / 0 / 14 / 1 |

## Spot check (10 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Misty® Freeze | Large | 590 / 15 / 10 / 1 / 50 / 210 / 102 / 0 / 90 / 12 |
| BBQ Smokehouse Cheddar Signature Stackburger™ | Triple | 960 / 59 / 26 / 2.5 / 170 / 2280 / 56 / 2 / 16 / 49 |
| Hot Dog | 1 serving | 330 / 19 / 8 / 1 / 35 / 820 / 25 / 1 / 3 / 12 |
| Misty® Slush | Small | 200 / 0 / 0 / 0 / 0 / 35 / 50 / 0 / 50 / 0 |
| Tripleberry Smoothie | XLarge | 660 / 0 / 0 / 0 / 0 / 220 / 153 / 3 / 149 / 10 |
| Dilly Bar | 6 Pack - Store Made | 1210 / 71 / 59 / 1 / 75 / 300 / 128 / 3 / 108 / 19 |
| Chocolate Cone | Kids' | 160 / 5 / 3 / 0 / 15 / 60 / 25 / 0 / 17 / 4 |
| Pork Tenderloin Sandwich | 1 serving | 600 / 34 / 7 / 0 / 45 / 990 / 52 / 3 / 7 / 21 |
| Cherry Sundae | Medium | 360 / 9 / 6 / 0 / 30 / 135 / 61 / 0 / 52 / 8 |
| Soft Serve Dip Cup | 1 serving | 130 / 4 / 2.5 / 0 / 15 / 55 / 19 / 0 / 16 / 3 |
