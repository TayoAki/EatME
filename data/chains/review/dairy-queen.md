# Dairy Queen: lines for a person

Guide: https://www.dairyqueen.com/en-us/nutrition/food-treats/ (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (131)

The last column comes from `npm run chains:evidence`: whether a draft's numbers sit right after the item's name in the guide text the drafts read. It can't read sizes or sections (one draft called a single 78 g cookie a "6 pack"): check those against the guide, then fix the line and set its check to `person`.

Fix each line in `menus/dairy-queen.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B | In the guide text (no AI) |
| --- | --- | --- | --- | --- | --- |
| Parmesan Garlic Sauced & Tossed Chicken Strip Basket | 4 Piece | differ: trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g | 1220 / 66 / 12 / 80 / 3130 / 117 / 7 / 6 / 37 / 37 | 1220 / 66 / 12 / – / 80 / 3130 / 117 / 7 / 6 / 37 | A: numbers found after the name (line 69); check the size; B: numbers found after the name (line 69); check the size |
| Kraft Fat Free Italian Dressing | 1 serving | the guide gives no saturated_fat_g, fiber_g | 25 / 0 / – / – / 0 / 380 / 4 / – / 3 / 0 | 25 / 0 / – / – / 0 / 380 / 4 / – / 3 / 0 | A: numbers found after the name (line 122); check the size; B: numbers found after the name (line 122); check the size |
| Kraft Honey Mustard Dressing | 1 serving | the guide gives no sugars_g | 130 / 9 / 1.5 / 0 / 10 / 330 / 12 / 0 / – / 0 | 130 / 9 / 1.5 / 0 / 10 / 330 / 12 / 0 / – / 0 | A: numbers found after the name (line 123); check the size; B: numbers found after the name (line 123); check the size |
| Yellow Mustard | 1 serving | differ: fat_g | 5 / 0 / 0 / 0 / 0 / 85 / 0 / 0 / 0 / 0 | 5 / 5 / 0 / 0 / 0 / 85 / 0 / 0 / 0 / 0 | A: numbers found after the name (line 403); check the size, mostly zeros: look; B: numbers found after the name (line 403); check the size |
| Add A Banana | Small | the guide gives no fat_g, saturated_fat_g, sodium_mg, protein_g | 25 / – / – / – / – / – / 7 / 1 / 4 / – | 25 / – / – / – / – / – / 7 / 1 / 4 / – | A: numbers found after the name (line 713); check the size; B: numbers found after the name (line 713); check the size |
| Add A Banana | Medium | the guide gives no fat_g, saturated_fat_g, sodium_mg, protein_g | 40 / – / – / – / – / – / 10 / 1 / 5 / – | 40 / – / – / – / – / – / 10 / 1 / 5 / – | A: numbers found after the name (line 714); check the size; B: numbers found after the name (line 714); check the size |
| Add A Banana | Large | the guide gives no fat_g, saturated_fat_g, sodium_mg | 50 / – / – / – / – / – / 13 / 2 / 7 / 1 | 50 / – / – / – / – / – / 13 / 2 / 7 / 1 | A: numbers found after the name (line 715); check the size; B: numbers found after the name (line 715); check the size |
| Add A Banana | XLarge | the guide gives no fat_g, saturated_fat_g, sodium_mg | 70 / – / – / – / – / – / 17 / 2 / 9 / 1 | 70 / – / – / – / – / – / 17 / 2 / 9 / 1 | A: numbers found after the name (line 716); check the size; B: numbers found after the name (line 716); check the size |
| Antioxidant Boost | 1 serving | the guide gives no fat_g, saturated_fat_g, sodium_mg, fiber_g, sugars_g, protein_g | 20 / – / – / – / – / – / 5 / – / – / – | 20 / – / – / – / – / – / 5 / – / – / – | A: numbers found after the name (line 717); check the size, mostly zeros: look; B: numbers found after the name (line 717); check the size, mostly zeros: look |
| Energy Boost | 1 serving | the guide gives no fat_g, saturated_fat_g, sodium_mg, fiber_g, sugars_g, protein_g | 20 / – / – / – / – / – / 5 / – / – / – | 20 / – / – / – / – / – / 5 / – / – / – | A: numbers found after the name (line 718); check the size, mostly zeros: look; B: numbers found after the name (line 718); check the size, mostly zeros: look |
| Protein Boost | 1 serving | the guide gives no fat_g, saturated_fat_g, carbs_g, fiber_g, sugars_g | 50 / – / – / – / – / 90 / – / – / – / 12 | 50 / – / – / – / – / 90 / – / – / – / 12 | A: numbers found after the name (line 719); check the size; B: numbers found after the name (line 719); check the size |
| Vitamin C Boost | 1 serving | the guide gives no fat_g, saturated_fat_g, sodium_mg, fiber_g, sugars_g, protein_g | 20 / – / – / – / – / – / 5 / – / – / – | 20 / – / – / – / – / – / 5 / – / – / – | A: numbers found after the name (line 720); check the size, mostly zeros: look; B: numbers found after the name (line 720); check the size, mostly zeros: look |
| Applesauce | 1 serving | only in draft B | not found | 45 / 0 / 0 / 0 / 0 / 0 / 11 / 2 / 7 / 0 | B: numbers found after the name (line 89); check the size |
| Banana | 1 serving | only in draft B | not found | 110 / 0 / 0 / 0 / 0 / 0 / 27 / 3 / 14 / 1 | B: numbers found after the name (line 90); check the size |
| Chicken Strips | 2 pc | only in draft B | not found | 280 / 13 / 2.5 / 0 / 30 / 640 / 28 / 1 / 1 / 13 | B: numbers found after the name (line 91); check the size |
| Fries, Kids' | 1 serving | only in draft B | not found | 170 / 8 / 1 / 0 / 0 / 370 / 23 / 2 / 0 / 3 | B: numbers found after the name (line 92); check the size |
| Milk | 1 serving | only in draft B | not found | 110 / 2.5 / 1.5 / 0 / 10 / 130 / 12 / 0 / 12 / 8 | B: numbers found after the name (line 95); check the size |
| Butterfinger® Blizzard | Large | only in draft B | not found | 1060 / 37 / 22 / 1 / 85 / 480 / 155 / 2 / 119 / 27 | B: numbers found after the name (line 144); check the size |
| Butterfinger® Blizzard | Medium | only in draft B | not found | 800 / 28 / 17 / 1 / 65 / 360 / 118 / 2 / 91 / 20 | B: numbers found after the name (line 145); check the size |
| Butterfinger® Blizzard | Mini | only in draft B | not found | 350 / 12 / 7 / 0 / 30 / 150 / 52 / 1 / 41 / 9 | B: numbers found after the name (line 146); check the size |
| Butterfinger® Blizzard | Small | only in draft B | not found | 590 / 21 / 12 / 0.5 / 50 / 270 / 87 / 1 / 68 / 15 | B: numbers found after the name (line 147); check the size |
| Choco Brownie Extreme Blizzard | Large | only in draft B | not found | 1330 / 60 / 33 / 1.5 / 85 / 620 / 184 / 7 / 142 / 26 | B: numbers found after the name (line 148); check the size |
| Choco Brownie Extreme Blizzard | Medium | only in draft B | not found | 980 / 43 / 25 / 1 / 70 / 460 / 137 / 5 / 106 / 20 | B: numbers found after the name (line 149); check the size |
| Choco Brownie Extreme Blizzard | Mini | only in draft B | not found | 420 / 18 / 10 / 0 / 30 / 190 / 58 / 2 / 46 / 9 | B: numbers found after the name (line 150); check the size |
| Choco Brownie Extreme Blizzard | Small | only in draft B | not found | 740 / 33 / 18 / 1 / 50 / 340 / 103 / 4 / 81 / 15 | B: numbers found after the name (line 151); check the size |
| Chocolate Chip Cookie Dough Blizzard | Large | only in draft B | not found | 1370 / 54 / 33 / 1.5 / 80 / 740 / 201 / 3 / 151 / 23 | B: numbers found after the name (line 152); check the size |
| Chocolate Chip Cookie Dough Blizzard | Medium | only in draft B | not found | 1030 / 40 / 24 / 1 / 60 / 550 / 151 / 2 / 113 / 18 | B: numbers found after the name (line 153); check the size |
| Chocolate Chip Cookie Dough Blizzard | Mini | only in draft B | not found | 410 / 16 / 9 / 0 / 30 / 210 / 60 / 1 / 46 / 8 | B: numbers found after the name (line 154); check the size |
| Chocolate Chip Cookie Dough Blizzard | Small | only in draft B | not found | 710 / 27 / 16 / 0.5 / 45 / 380 / 104 / 1 / 78 / 13 | B: numbers found after the name (line 155); check the size |
| Heath® Blizzard | Large | only in draft B | not found | 1190 / 49 / 32 / 1.5 / 90 / 590 / 168 / 2 / 148 / 23 | B: numbers found after the name (line 156); check the size |
| Heath® Blizzard | Medium | only in draft B | not found | 880 / 37 / 24 / 1 / 70 / 430 / 124 / 1 / 110 / 17 | B: numbers found after the name (line 157); check the size |
| Heath® Blizzard | Mini | only in draft B | not found | 360 / 14 / 9 / 0 / 30 / 170 / 52 / 0 / 45 / 8 | B: numbers found after the name (line 158); check the size |
| Heath® Blizzard | Small | only in draft B | not found | 640 / 26 / 16 / 1 / 55 / 310 / 91 / 1 / 79 / 13 | B: numbers found after the name (line 159); check the size |
| M&M’s® Chocolate Candy Blizzard | Large | only in draft B | not found | 1160 / 38 / 24 / 1 / 85 / 380 / 183 / 3 / 159 / 23 | B: numbers found after the name (line 160); check the size |
| M&M’s® Chocolate Candy Blizzard | Medium | only in draft B | not found | 880 / 29 / 18 / 1 / 65 / 290 / 135 / 2 / 117 / 18 | B: numbers found after the name (line 161); check the size |
| M&M’s® Chocolate Candy Blizzard | Small | only in draft B | not found | 660 / 21 / 13 / 0.5 / 50 / 220 / 103 / 1 / 89 / 14 | B: numbers found after the name (line 162); check the size |
| M&M’s® Chocolate Candy Blizzard | Mini | only in draft B | not found | 370 / 12 / 8 / 0 / 30 / 125 / 58 / 1 / 50 / 8 | B: numbers found after the name (line 163); check the size |
| OREO® Cookie Blizzard | Large | only in draft B | not found | 1050 / 39 / 20 / 1.5 / 80 / 500 / 156 / 1 / 121 / 22 | B: numbers found after the name (line 164); check the size |
| OREO® Cookie Blizzard | Medium | only in draft B | not found | 820 / 30 / 16 / 1 / 65 / 390 / 121 / 1 / 94 / 17 | B: numbers found after the name (line 165); check the size |
| OREO® Cookie Blizzard | Mini | only in draft B | not found | 330 / 12 / 6 / 0 / 30 / 150 / 48 / 0 / 39 / 7 | B: numbers found after the name (line 166); check the size |
| OREO® Cookie Blizzard | Small | only in draft B | not found | 600 / 22 / 12 / 1 / 50 / 280 / 89 / 1 / 70 / 13 | B: numbers found after the name (line 167); check the size |
| Reese's® Peanut Butter Cups Blizzard | Large | only in draft B | not found | 1080 / 45 / 23 / 1.5 / 85 / 550 / 148 / 3 / 128 / 28 | B: numbers found after the name (line 168); check the size |
| Reese's® Peanut Butter Cups Blizzard | Medium | only in draft B | not found | 820 / 34 / 17 / 1 / 65 / 410 / 113 / 2 / 97 / 21 | B: numbers found after the name (line 169); check the size |
| Reese's® Peanut Butter Cups Blizzard | Mini | only in draft B | not found | 360 / 14 / 7 / 0 / 30 / 170 / 50 / 1 / 43 / 9 | B: numbers found after the name (line 170); check the size |
| Reese's® Peanut Butter Cups Blizzard | Small | only in draft B | not found | 610 / 24 / 13 / 1 / 50 / 300 / 84 / 1 / 72 / 16 | B: numbers found after the name (line 171); check the size |
| Royal New York Cheesecake Blizzard Filled with Strawberry | Large | only in draft B | not found | 1320 / 60 / 28 / 2 / 135 / 690 / 171 / 2 / 135 / 25 | B: numbers found after the name (line 172); check the size |
| Royal New York Cheesecake Blizzard Filled with Strawberry | Medium | only in draft B | not found | 1040 / 46 / 21 / 1.5 / 105 / 530 / 140 / 2 / 112 / 19 | B: numbers found after the name (line 173); check the size |
| Royal New York Cheesecake Blizzard Filled with Strawberry | Mini | only in draft B | not found | 450 / 18 / 8 / 0.5 / 40 / 220 / 65 / 1 / 53 / 8 | B: numbers found after the name (line 174); check the size |
| Royal New York Cheesecake Blizzard Filled with Strawberry | Small | only in draft B | not found | 750 / 32 / 15 / 1 / 75 / 380 / 102 / 2 / 82 / 14 | B: numbers found after the name (line 175); check the size |
| Royal Ultimate Choco Brownie Blizzard Filled with Fudge | Large | only in draft B | not found | 1340 / 60 / 36 / 1 / 80 / 620 / 186 / 8 / 148 / 25 | B: numbers found after the name (line 176); check the size |
| Royal Ultimate Choco Brownie Blizzard Filled with Fudge | Medium | only in draft B | not found | 1040 / 45 / 29 / 1 / 65 / 480 / 146 / 5 / 117 / 19 | B: numbers found after the name (line 177); check the size |
| Royal Ultimate Choco Brownie Blizzard Filled with Fudge | Mini | only in draft B | not found | 480 / 21 / 13 / 0 / 30 / 220 / 68 / 2 / 55 / 9 | B: numbers found after the name (line 178); check the size |
| Royal Ultimate Choco Brownie Blizzard Filled with Fudge | Small | only in draft B | not found | 770 / 34 / 20 / 0.5 / 45 / 350 / 107 / 4 / 86 / 14 | B: numbers found after the name (line 179); check the size |
| Snickers® Blizzard | Large | only in draft B | not found | 1060 / 36 / 20 / 1 / 80 / 450 / 162 / 2 / 138 / 24 | B: numbers found after the name (line 180); check the size |
| Snickers® Blizzard | Medium | only in draft B | not found | 800 / 28 / 15 / 1 / 65 / 340 / 120 / 1 / 102 / 19 | B: numbers found after the name (line 181); check the size |
| Snickers® Blizzard | Mini | only in draft B | not found | 350 / 12 / 7 / 0 / 30 / 150 / 53 / 0 / 45 / 8 | B: numbers found after the name (line 182); check the size |
| Snickers® Blizzard | Small | only in draft B | not found | 610 / 20 / 11 / 0.5 / 50 / 260 / 92 / 1 / 78 / 14 | B: numbers found after the name (line 183); check the size |
| Turtle Pecan Cluster Blizzard | Large | only in draft B | not found | 1370 / 71 / 41 / 1.5 / 85 / 510 / 165 / 4 / 132 / 24 | B: numbers found after the name (line 184); check the size |
| Turtle Pecan Cluster Blizzard | Medium | only in draft B | not found | 1020 / 52 / 29 / 1 / 65 / 390 / 123 / 3 / 99 / 18 | B: numbers found after the name (line 185); check the size |
| Turtle Pecan Cluster Blizzard | Mini | only in draft B | not found | 430 / 22 / 14 / 0 / 30 / 160 / 51 / 1 / 42 / 8 | B: numbers found after the name (line 186); check the size |
| Turtle Pecan Cluster Blizzard | Small | only in draft B | not found | 680 / 34 / 18 / 0.5 / 50 / 270 / 84 / 2 / 68 / 14 | B: numbers found after the name (line 187); check the size |
| Banana Shake | Large | only in draft B | not found | 750 / 27 / 19 / 1.5 / 75 / 310 / 109 / 2 / 88 / 21 | B: numbers found after the name (line 193); check the size |
| Banana Shake | Medium | only in draft B | not found | 590 / 22 / 16 / 1 / 55 / 240 / 83 / 1 / 68 / 16 | B: numbers found after the name (line 194); check the size |
| Banana Shake | Small | only in draft B | not found | 470 / 19 / 13 / 1 / 45 / 190 / 64 / 1 / 53 / 13 | B: numbers found after the name (line 195); check the size |
| Caramel Shake | Large | only in draft B | not found | 980 / 31 / 21 / 1.5 / 85 / 450 / 154 / 0 / 124 / 22 | B: numbers found after the name (line 196); check the size |
| Caramel Shake | Medium | only in draft B | not found | 750 / 25 / 17 / 1.5 / 65 / 330 / 115 / 0 / 93 / 17 | B: numbers found after the name (line 197); check the size |
| Caramel Shake | Small | only in draft B | not found | 550 / 20 / 14 / 1 / 50 / 240 / 79 / 0 / 65 / 13 | B: numbers found after the name (line 198); check the size |
| Chocolate Shake | Large | only in draft B | not found | 920 / 28 / 19 / 1.5 / 75 / 390 / 147 / 2 / 128 / 21 | B: numbers found after the name (line 199); check the size |
| Chocolate Shake | Medium | only in draft B | not found | 710 / 23 / 16 / 1 / 60 / 290 / 110 / 1 / 96 / 16 | B: numbers found after the name (line 200); check the size |
| Chocolate Shake | Small | only in draft B | not found | 530 / 19 / 14 / 1 / 45 / 220 / 77 / 1 / 67 / 13 | B: numbers found after the name (line 201); check the size |
| Hot Fudge Shake | Large | only in draft B | not found | 990 / 38 / 29 / 1.5 / 75 / 440 / 140 / 1 / 112 / 23 | B: numbers found after the name (line 202); check the size |
| Hot Fudge Shake | Medium | only in draft B | not found | 750 / 30 / 23 / 1.5 / 60 / 330 / 105 / 1 / 85 / 17 | B: numbers found after the name (line 203); check the size |
| Hot Fudge Shake | Small | only in draft B | not found | 550 / 22 / 17 / 1 / 45 / 240 / 75 / 0 / 61 / 13 | B: numbers found after the name (line 204); check the size |
| Make It A Malt Adds | Large | only in draft B | not found | 110 / 1 / 1 / 0 / 5 / 105 / 23 / 1 / 16 / 2 | B: numbers found after the name (line 205); check the size |
| Make It A Malt Adds | Medium | only in draft B | not found | 80 / 1 / 0.5 / 0 / 5 / 80 / 18 / 1 / 12 / 1 | B: numbers found after the name (line 206); check the size |
| Make It A Malt Adds | Small | only in draft B | not found | 60 / 0.5 / 0 / 0 / 0 / 50 / 12 / 0 / 8 / 1 | B: numbers found after the name (line 207); check the size |
| Peanut Butter Shake | Large | only in draft B | not found | 1250 / 72 / 26 / 1.5 / 75 / 830 / 119 / 4 / 89 / 30 | B: numbers found after the name (line 208); check the size |
| Peanut Butter Shake | Medium | only in draft B | not found | 930 / 53 / 20 / 1 / 60 / 590 / 91 / 3 / 69 / 22 | B: numbers found after the name (line 209); check the size |
| Peanut Butter Shake | Small | only in draft B | not found | 640 / 34 / 16 / 1 / 45 / 370 / 67 / 1 / 54 / 16 | B: numbers found after the name (line 210); check the size |
| Caramel MooLatte | Large | only in draft B | not found | 780 / 21 / 15 / 1 / 50 / 320 / 135 / 0 / 113 / 13 | B: numbers found after the name (line 222); check the size |
| Caramel MooLatte | Medium | only in draft B | not found | 620 / 18 / 13 / 1 / 40 / 240 / 103 / 0 / 87 / 10 | B: numbers found after the name (line 223); check the size |
| Caramel MooLatte | Small | only in draft B | not found | 490 / 15 / 11 / 1 / 30 / 190 / 81 / 0 / 69 / 8 | B: numbers found after the name (line 224); check the size |
| Mocha MooLatte | Large | only in draft B | not found | 780 / 29 / 16 / 1 / 50 / 310 / 121 / 2 / 106 / 14 | B: numbers found after the name (line 225); check the size |
| Mocha MooLatte | Medium | only in draft B | not found | 620 / 23 / 14 / 1 / 40 / 240 / 94 / 2 / 82 / 11 | B: numbers found after the name (line 226); check the size |
| Mocha MooLatte | Small | only in draft B | not found | 500 / 18 / 12 / 1 / 30 / 180 / 76 / 1 / 67 / 9 | B: numbers found after the name (line 227); check the size |
| Vanilla MooLatte | Large | only in draft B | not found | 700 / 19 / 14 / 1 / 45 / 240 / 121 / 0 / 109 / 12 | B: numbers found after the name (line 228); check the size |
| Vanilla MooLatte | Medium | only in draft B | not found | 560 / 17 / 12 / 1 / 35 / 190 / 93 / 0 / 84 / 9 | B: numbers found after the name (line 229); check the size |
| Vanilla MooLatte | Small | only in draft B | not found | 450 / 14 / 11 / 1 / 30 / 150 / 74 / 0 / 67 / 7 | B: numbers found after the name (line 230); check the size |
| Brown Sugar Cookie Dough Blizzard | Mini | only in draft B | not found | 420 / 17 / 9 / 0.5 / 35 / 240 / 59 / 0 / 47 / 7 | B: numbers found after the name (line 411); check the size |
| Brown Sugar Cookie Dough Blizzard | Small | only in draft B | not found | 650 / 25 / 14 / 1 / 55 / 350 / 93 / 1 / 72 / 12 | B: numbers found after the name (line 412); check the size |
| Brown Sugar Cookie Dough Blizzard | Medium | only in draft B | not found | 940 / 38 / 20 / 1 / 75 / 530 / 133 / 1 / 103 / 16 | B: numbers found after the name (line 413); check the size |
| Brown Sugar Cookie Dough Blizzard | Large | only in draft B | not found | 1260 / 52 / 26 / 1.5 / 100 / 730 / 178 / 1 / 138 / 21 | B: numbers found after the name (line 414); check the size |
| Enchanted Oreo Blizzard | Mini | only in draft B | not found | 440 / 17 / 8 / 0 / 308 / 180 / 64 / 0 / 51 / 8 | B: numbers found after the name (line 415); check the size |
| Enchanted Oreo Blizzard | Small | only in draft B | not found | 770 / 31 / 14 / 1 / 50 / 330 / 109 / 1 / 87 / 13 | B: numbers found after the name (line 416); check the size |
| Enchanted Oreo Blizzard | Medium | only in draft B | not found | 1050 / 44 / 19 / 1 / 65 / 460 / 148 / 1 / 119 / 17 | B: numbers found after the name (line 417); check the size |
| Enchanted Oreo Blizzard | Large | only in draft B | not found | 1380 / 59 / 25 / 1.5 / 80 / 600 / 193 / 1 / 155 / 22 | B: numbers found after the name (line 418); check the size |
| Bubble Brew DQ® Lemonade Sparkler | Small | only in draft B | not found | 250 / 2 / 2 / 0 / 0 / 20 / 57 / 0 / 55 / 0 | B: numbers found after the name (line 419); check the size |
| Bubble Brew DQ® Lemonade Sparkler | Medium | only in draft B | not found | 320 / 2 / 2 / 0 / 0 / 25 / 75 / 0 / 72 / 0 | B: numbers found after the name (line 420); check the size |
| Bubble Brew DQ® Lemonade Sparkler | Large | only in draft B | not found | 430 / 2 / 2 / 0 / 0 / 30 / 103 / 0 / 99 / 0 | B: numbers found after the name (line 421); check the size |
| Caramel Apple Cheesecake Blizzard | Mini | only in draft B | not found | 340 / 11 / 7 / 0.5 / 40 / 220 / 52 / 0 / 43 / 8 | B: numbers found after the name (line 422); check the size |
| Caramel Apple Cheesecake Blizzard | Small | only in draft B | not found | 600 / 20 / 12 / 1 / 75 / 410 / 92 / 0 / 75 / 13 | B: numbers found after the name (line 423); check the size |
| Caramel Apple Cheesecake Blizzard | Medium | only in draft B | not found | 840 / 27 / 17 / 1.5 / 100 / 600 / 130 / 1 / 105 / 17 | B: numbers found after the name (line 424); check the size |
| Caramel Apple Cheesecake Blizzard | Large | only in draft B | not found | 1130 / 36 / 22 / 1.5 / 135 / 800 / 177 / 1 / 141 / 23 | B: numbers found after the name (line 425); check the size |
| Pumpkin Pie Blizzard | Mini | only in draft B | not found | 360 / 14 / 9 / 0.5 / 25 / 190 / 52 / 1 / 41 / 7 | B: numbers found after the name (line 426); check the size |
| Pumpkin Pie Blizzard | Small | only in draft B | not found | 560 / 20 / 13 / 1 / 40 / 330 / 86 / 2 / 68 / 11 | B: numbers found after the name (line 427); check the size |
| Pumpkin Pie Blizzard | Medium | only in draft B | not found | 720 / 25 / 15 / 1 / 50 / 440 / 110 / 2 / 85 / 14 | B: numbers found after the name (line 428); check the size |
| Pumpkin Pie Blizzard | Large | only in draft B | not found | 940 / 32 / 19 / 1.5 / 70 / 570 / 145 / 2 / 112 / 19 | B: numbers found after the name (line 429); check the size |
| Hibiscus Lemonade DQ® Sparkler | Small | only in draft B | not found | 230 / 0 / 0 / 0 / 0 / 10 / 58 / 0 / 56 / 0 | B: numbers found after the name (line 430); check the size |
| Hibiscus Lemonade DQ® Sparkler | Medium | only in draft B | not found | 300 / 0 / 0 / 0 / 0 / 15 / 77 / 0 / 74 / 0 | B: numbers found after the name (line 431); check the size |
| Hibiscus Lemonade DQ® Sparkler | Large | only in draft B | not found | 420 / 0 / 0 / 0 / 0 / 20 / 105 / 0 / 102 / 0 | B: numbers found after the name (line 432); check the size |
| Hibiscus Lemonade DQ® Cooler | Small | only in draft B | not found | 460 / 6 / 4 / 0 / 20 / 95 / 97 / 0 / 91 / 5 | B: numbers found after the name (line 433); check the size |
| Hibiscus Lemonade DQ® Cooler | Medium | only in draft B | not found | 630 / 9 / 6 / 0 / 30 / 135 / 129 / 0 / 121 / 8 | B: numbers found after the name (line 434); check the size |
| Hibiscus Lemonade DQ® Cooler | Large | only in draft B | not found | 860 / 12 / 8 / 0.5 / 40 / 170 / 178 / 0 / 167 / 10 | B: numbers found after the name (line 435); check the size |
| Dipped Cone, Cherry | Kids | only in draft B | not found | 210 / 9 / 7 / 0 / 15 / 65 / 28 / 0 / 20 / 4 | B: numbers found after the name (line 294); check the size |
| DQ Cooler Classic Lemonade | Small | only in draft B | not found | 420 / 6 / 4 / 0 / 20 / 95 / 87 / 0 / 81 / 5 | B: numbers found after the name (line 440); check the size |
| DQ Cooler Classic Lemonade | Medium | only in draft B | not found | 540 / 9 / 6 / 0 / 30 / 130 / 112 / 0 / 103 / 7 | B: numbers found after the name (line 441); check the size |
| DQ Coolers Classic Lemonade | Large | only in draft B | not found | 740 / 11 / 7 / 0.5 / 40 / 170 / 154 / 0 / 143 / 9 | B: numbers found after the name (line 442); check the size |
| DQ Sparkler Classic Lemonade | Small | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 10 / 45 / 0 / 44 / 0 | B: numbers found after the name (line 443); check the size |
| DQ Sparklers Classic Lemonade | Medium | only in draft B | not found | 230 / 0 / 0 / 0 / 0 / 15 / 58 / 0 / 56 / 0 | B: numbers found after the name (line 444); check the size |
| DQ Sparklers Classic Lemonade | Large | only in draft B | not found | 320 / 0 / 0 / 0 / 0 / 20 / 80 / 0 / 77 / 0 | B: numbers found after the name (line 445); check the size |
| Mint OREO® Blizzard | Mini | only in draft B | not found | 360 / 12 / 7 / 0 / 30 / 160 / 56 / 0 / 45 / 8 | B: numbers found after the name (line 471); check the size |
| Mint OREO® Blizzard | Small | only in draft B | not found | 640 / 22 / 12 / 1 / 50 / 290 / 99 / 1 / 80 / 13 | B: numbers found after the name (line 472); check the size |
| Mint OREO® Blizzard | Medium | only in draft B | not found | 880 / 30 / 16 / 1 / 65 / 400 / 137 / 1 / 109 / 17 | B: numbers found after the name (line 473); check the size |
| Mint OREO® Blizzard | Large | only in draft B | not found | 1140 / 39 / 20 / 1.5 / 80 / 510 / 177 / 1 / 141 / 22 | B: numbers found after the name (line 474); check the size |
| Mocha Brownie Mudslide Blizzard | Mini | only in draft B | not found | 370 / 15 / 9 / 0 / 30 / 170 / 53 / 1 / 42 / 8 | B: numbers found after the name (line 475); check the size |
| Mocha Brownie Mudslide Blizzard | Small | only in draft B | not found | 650 / 26 / 17 / 1 / 50 / 310 / 94 / 3 / 73 / 14 | B: numbers found after the name (line 476); check the size |
| Mocha Brownie Mudslide Blizzard | Medium | only in draft B | not found | 900 / 37 / 23 / 1 / 70 / 430 / 128 / 4 / 99 / 19 | B: numbers found after the name (line 477); check the size |
| Mocha Brownie Mudslide Blizzard | Large | only in draft B | not found | 1170 / 48 / 30 / 1.5 / 90 / 570 / 167 / 5 / 128 / 25 | B: numbers found after the name (line 478); check the size |
| Maple Cookie Shake | Small | only in draft B | not found | 590 / 29 / 16 / 1 / 45 / 380 / 71 / 0 / 59 / 12 | B: numbers found after the name (line 508); check the size |
| Maple Cookie Shake | Medium | only in draft B | not found | 770 / 37 / 19 / 1.5 / 60 / 510 / 92 / 0 / 76 / 15 | B: numbers found after the name (line 509); check the size |
| Caramel Topping | Sundae, Shake, Malt, Medium/Large Blizzard | only in draft B | not found | 90 / 1 / 0.5 / 0 / 5 / 45 / 20 / 0 / 14 / 1 | B: numbers found after the name (line 371); check the size |

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
