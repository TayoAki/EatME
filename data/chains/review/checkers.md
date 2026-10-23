# Checkers: lines for a person

Guide: https://web.checkersandrallys.com/wp-content/uploads/2025/11/Checkers-and-Rallys-Nutritional-Facts.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (138)

The last column comes from `npm run chains:evidence`: whether a draft's numbers sit right after the item's name in the guide text the drafts read. It can't read sizes or sections (one draft called a single 78 g cookie a "6 pack"): check those against the guide, then fix the line and set its check to `person`.

Fix each line in `menus/checkers.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B | In the guide text (no AI) |
| --- | --- | --- | --- | --- | --- |
| Mushroom Swissburger | 1 serving | both read numbers that can't be right: saturated and trans fat above fat | 330 / 15 / 18 / 0.5 / 40 / 930 / 29 / 2 / 5 / 15 | 330 / 15 / 18 / 0.5 / 40 / 930 / 29 / 2 / 5 / 15 | A: numbers found after the name (line 26); check the size; B: numbers found after the name (line 26); check the size |
| Chicken Bites and Fries Box | 1 serving | only in draft B | not found | 710 / 40 / 14 / 2 / 85 / 1680 / 64 / 6 / 0 / 24 | B: numbers found after the name (line 39); check the size |
| Half Pound Chicken Bites and Fries Box | 1 serving | only in draft B | not found | 1150 / 67 / 23 / 3 / 160 / 2780 / 89 / 9 / 0 / 46 | B: numbers found after the name (line 40); check the size |
| Classic Wings® (Plain) | 20 PC | only in draft B | not found | 1380 / 89 / 29 / 1.5 / 700 / 3000 / 8 / 0 / 0 / 136 | B: numbers found after the name (line 64); check the size |
| Classic Wings® (Angry Buffalo) | 20 PC | only in draft B | not found | 1420 / 91 / 29 / 1.5 / 700 / 6070 / 13 / 3 / 0 / 137 | B: numbers found after the name (line 65); check the size |
| Classic Wings® (Medium Buffalo) | 20 PC | only in draft B | not found | 1410 / 91 / 29 / 1.5 / 700 / 6490 / 10 / 0 / 1 / 137 | B: numbers found after the name (line 66); check the size |
| Classic Wings® (Garlic Parmesan) | 20 PC | only in draft B | not found | 2040 / 158 / 55 / 2.5 / 710 / 4290 / 13 / 0 / 0 / 139 | B: numbers found after the name (line 67); check the size |
| Classic Wings® (Sweet & Smoky BBQ) | 20 PC | only in draft B | not found | 1690 / 89 / 29 / 1.5 / 700 / 4150 / 76 / 3 / 62 / 138 | B: numbers found after the name (line 68); check the size |
| Classic Wings® (Stinging' Honey Garlic) | 20 PC | only in draft B | not found | 1550 / 121 / 44 / 4.5 / 700 / 4010 / 42 / 0 / 30 / 112 | B: numbers found after the name (line 69); check the size |
| R \downarrow T | 1 serving | only in draft B | not found | 470 / 42 / 8 / 0 / 15 / 1020 / 30 / 2 / 7 / 17 | B: name not in the guide text |
| Bowl of Chili | 12 FO | only in draft B | not found | 380 / 20 / 9 / 0.5 / 65 / 1800 / 26 / 9 / 8 / 23 | B: numbers found after the name (line 72); check the size |
| Bowl of Chili with Beans | 12 FO | only in draft B | not found | 430 / 15 / 6 / 0 / 40 / 2000 / 53 / 1 / 18 / 9 | B: numbers found after the name (line 73); check the size |
| Chili Cheeseburger | 1 serving | only in draft B | not found | 340 / 18 / 7 / 0 / 40 / 960 / 30 / 1 / 5 / 13 | B: numbers found after the name (line 74); check the size |
| Double Mushroom Swissburger | 1 serving | only in draft B | not found | 460 / 29 / 12 / 1 / 70 / 1210 / 29 / 2 / 5 / 22 | B: numbers found after the name (line 76); check the size |
| Bacon Cheddar Crisp Double | 1 serving | only in draft B | not found | 570 / 37 / 15 / 1 / 85 / 1470 / 33 / 1 / 8 / 25 | B: numbers found after the name (line 78); check the size |
| Chicken Nuggets | 10 PC | only in draft B | not found | 500 / 32 / 14 / 0 / 90 / 1160 / 28 / 2 / 0 / 24 | B: numbers found after the name (line 79); check the size |
| Olive Burger | 1 serving | only in draft B | not found | 440 / 33 / 8 / 0 / 35 / 1560 / 33 / 2 / 8 / 12 | B: numbers found after the name (line 80); check the size |
| Double Olive Burger | 1 serving | only in draft B | not found | 570 / 44 / 13 / 1 / 65 / 1850 / 33 / 2 / 8 / 18 | B: numbers found after the name (line 81); check the size |
| Beef Tacos | 2 | only in draft B | not found | 550 / 35 / 15 / 1 / 85 / 1260 / 35 / 3 / 3 / 25 | B: numbers found after the name (line 82); check the size |
| Angry Buffalo--wing sauce | 1 FO | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 770 / 1 / 1 / 0 / 0 | B: name not in the guide text |
| Sweet & Smoky BBQ Sauce--wing/burger sauce | 1 FO | only in draft B | not found | 80 / 0 / 0 / 0 / 0 / 290 / 17 / 1 / 16 / 0 | B: name not in the guide text |
| Medium Buffalo Sauce--wing sauce | 1 FO | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 870 / 1 / 0 / 0 / 0 | B: name not in the guide text |
| Parmesan Garlic--wing sauce | 1 FO | only in draft B | not found | 160 / 17 / 6 / 0 / 5 / 320 / 1 / 0 / 0 / 1 | B: name not in the guide text |
| Ranch Dressing--burger sauce | 1FO | only in draft B | not found | 150 / 14 / 2 / 0 / 5 / 240 / 4 / 0 / 3 / 0 | B: name not in the guide text |
| BBQ Sauce Dipper | 1 each PC | only in draft B | not found | 60 / 0 / 0 / 0 / 0 / 300 / 15 / 0 / 12 / 0 | B: numbers found after the name (line 93); check the size |
| Easible Buffalo Hot Sauce Dinner | 1 each PC | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 730 / 1 / 1 / 0 / 0 | B: numbers found after the name (line 94); check the size |
| Fries & SIDES | 1 serving | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 750 / 1 / 1 / 0 / 0 | B: numbers found after the name (line 95); check the size |
| Blue Cheese Dipping Sauce | 1 each PC | only in draft B | not found | 230 / 24 / 4.5 / 0 / 25 / 450 / 2 / 0 / 1 / 1 | B: numbers found after the name (line 96); check the size |
| Honey Mustard Dipper | 1 each PC | only in draft B | not found | 160 / 16 / 2.5 / 0 / 15 / 135 / 4 / 0 / 4 / 0 | B: numbers found after the name (line 97); check the size |
| Ranch Dipping Sauce Dipper | 1 each PC | only in draft B | not found | 210 / 23 / 3.5 / 0 / 10 / 440 / 2 / 0 / 1 / 1 | B: numbers found after the name (line 98); check the size |
| Fries | Small | only in draft B | not found | 390 / 19 / 7 / 1 / 20 / 870 / 49 / 5 / 0 / 5 | B: numbers found after the name (line 99); check the size |
| Fries | Medium | only in draft B | not found | 500 / 24 / 9 / 1 / 25 / 1110 / 63 / 6 / 0 / 7 | B: numbers found after the name (line 99); check the size |
| Fries | Large | only in draft B | not found | 590 / 29 / 10 / 1.5 / 30 / 1310 / 74 / 7 / 1 / 8 | B: numbers found after the name (line 99); check the size |
| Fries - Fry Lover's XL | 1 serving | only in draft B | not found | 910 / 45 / 16 / 2 / 50 / 2030 / 115 / 12 / 1 / 12 | B: numbers found after the name (line 103); check the size |
| Cheese Chili Cheese Fries® | Reg | only in draft B | not found | 540 / 37 / 13 / 1.5 / 13 / 1510 / 43 / 4 / 1 / 7 | B: numbers found after the name (line 104); check the size |
| Cheese Chili Cheese Fries® | Lg | only in draft B | not found | 810 / 56 / 20 / 2 / 25 / 2110 / 66 / 6 / 2 / 9 | B: numbers found after the name (line 105); check the size |
| Fully Loaded Fries | Reg | only in draft B | not found | 870 / 62 / 19 / 1.5 / 45 / 1920 / 46 / 4 / 4 / 14 | B: numbers found after the name (line 106); check the size |
| Fully Loaded Fries | Lg | only in draft B | not found | 1090 / 80 / 25 / 2 / 50 / 2510 / 68 / 6 / 5 / 14 | B: numbers found after the name (line 107); check the size |
| Monsterella Stix™ | 4 pc. w/ 1 portion cup Marinara | only in draft B | not found | 280 / 17 / 8 / 0.5 / 35 / 1060 / 20 / 1 / 3 / 12 | B: numbers found after the name (line 108); check the size |
| Monsterella Stix™ | 6 pc. w/ 1 portion cup Marinara | only in draft B | not found | 420 / 25 / 13 / 1 / 50 / 1530 / 29 / 2 / 3 / 18 | B: numbers found after the name (line 109); check the size |
| Bacon | 2 Slices | only in draft B | not found | 70 / 6 / 2 / 0 / 10 / 170 / 1 / 0 / 0 / 4 | B: numbers found after the name (line 110); check the size |
| Cheese Sauce | 1 serving | only in draft B | not found | 35 / 2.5 / 1 / 0 / 0 / 180 / 2 / 0 / 1 / 0 | B: numbers found after the name (line 111); check the size |
| Chili | 1 FO | only in draft B | not found | 30 / 1.5 / 1 / 0 / 5 / 150 / 2 / 1 / 1 / 2 | B: numbers found after the name (line 112); check the size |
| Grilled Onions | 1 serving | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 25 / 2 / 1 / 1 / 0 | B: numbers found after the name (line 113); check the size |
| Philly Cheesesteak Bites | 4 PC | only in draft B | not found | 220 / 10 / 5 / 0 / 50 / 640 / 19 / 2 / 2 / 11 | B: numbers found after the name (line 114); check the size |
| Value Fries | 1 serving | only in draft B | not found | 295 / 14 / 5 / 0.5 / 15 / 660 / 37 / 4 / 0 / 4 | B: numbers found after the name (line 115); check the size |
| Fried Strawberry Cheesecakes Bites | 1 serving | only in draft B | not found | 260 / 10 / 5 / 0 / 40 / 170 / 39 / 0 / 19 / 6 | B: numbers found after the name (line 116); check the size |
| Milkshake - Banana | 12 FO | only in draft B | not found | 350 / 10 / 7 / 0 / 35 / 200 / 58 / 1 / 48 / 7 | B: numbers found after the name (line 122); check the size |
| Milkshake - Banana | 16 FO | only in draft B | not found | 460 / 13 / 9 / 0 / 45 / 260 / 77 / 2 / 63 / 9 | B: numbers found after the name (line 123); check the size |
| Milkshake - Banana | 20 FO | only in draft B | not found | 700 / 20 / 14 / 0 / 65 / 390 / 117 / 3 / 95 / 14 | B: numbers found after the name (line 124); check the size |
| Milkshake - Chocolate | 12 FO | only in draft B | not found | 380 / 11 / 8 / 0 / 35 / 240 / 64 / 2 / 49 / 8 | B: numbers found after the name (line 125); check the size |
| Milkshake - Chocolate | 16 FO | only in draft B | not found | 470 / 13 / 9 / 0 / 45 / 290 / 79 / 2 / 60 / 10 | B: numbers found after the name (line 126); check the size |
| Milkshake - Chocolate | 20 FO | only in draft B | not found | 720 / 20 / 14 / 0 / 65 / 440 / 120 / 3 / 92 / 15 | B: numbers found after the name (line 127); check the size |
| Milkshake - Strawberry | 12 FO | only in draft B | not found | 350 / 10 / 7 / 0 / 35 / 190 / 57 / 1 / 46 / 7 | B: numbers found after the name (line 128); check the size |
| Milkshake - Strawberry | 16 FO | only in draft B | not found | 460 / 13 / 9 / 0 / 45 / 250 / 75 / 2 / 61 / 9 | B: numbers found after the name (line 129); check the size |
| Milkshake - Strawberry | 20 FO | only in draft B | not found | 690 / 20 / 14 / 0 / 65 / 380 / 114 / 3 / 93 / 14 | B: numbers found after the name (line 130); check the size |
| Milkshake - Vanilla | 12 FO | only in draft B | not found | 290 / 10 / 7 / 0 / 35 / 180 / 44 / 1 / 33 / 7 | B: numbers found after the name (line 131); check the size |
| Milkshake - Vanilla | 16 FO | only in draft B | not found | 390 / 13 / 9 / 0 / 45 / 240 / 57 / 2 / 44 / 9 | B: numbers found after the name (line 132); check the size |
| Milkshake - Vanilla | 20 FO | only in draft B | not found | 590 / 20 / 14 / 0 / 65 / 370 / 87 / 3 / 66 / 14 | B: numbers found after the name (line 133); check the size |
| Fudge Cheesecake Sundae | 1 serving | only in draft B | not found | 500 / 17 / 12 / 0 / 45 / 510 / 79 / 0 / 62 / 8 | B: numbers found after the name (line 134); check the size |
| Caramel Cheesecake Sundae | 1 serving | only in draft B | not found | 460 / 15 / 10 / 0 / 50 / 460 / 73 / 0 / 53 / 8 | B: numbers found after the name (line 135); check the size |
| Strawberry Cheesecake Sundae | 1 serving | only in draft B | not found | 470 / 15 / 9 / 0 / 45 / 460 / 77 / 1 / 60 / 8 | B: numbers found after the name (line 136); check the size |
| Chocolate Soft Serve Cone - Classic | 1 serving | only in draft B | not found | 140 / 4.5 / 3 / 0 / 15 / 85 / 21 / 1 / 17 / 3 | B: numbers found after the name (line 137); check the size |
| Chocolate Soft Serve Cone - Swirl | 1 serving | only in draft B | not found | 140 / 4.5 / 3 / 0 / 15 / 85 / 21 / 1 / 16 / 3 | B: numbers found after the name (line 138); check the size |
| Soft Serve - Vanilla | 1 serving | only in draft B | not found | 130 / 4.5 / 3 / 0 / 15 / 85 / 20 / 1 / 15 / 3 | B: numbers found after the name (line 139); check the size |
| Cake Cone | 1 serving | only in draft B | not found | 20 / 0 / 0 / 0 / 0 / 5 / 4 / 0 / 0 / 0 | B: numbers found after the name (line 140); check the size |
| Fudge Sundae Topping | 1 FO | only in draft B | not found | 90 / 2.5 / 2 / 0 / 0 / 60 / 17 / 0 / 16 / 1 | B: numbers found after the name (line 141); check the size |
| Strawberry Sundae Topping | 1.8 FO | only in draft B | not found | 60 / 0 / 0 / 0 / 0 / 15 / 16 / 1 / 13 / 0 | B: numbers found after the name (line 142); check the size |
| Caramel Sundae Topping | .5 FO | only in draft B | not found | 45 / 0 / 0 / 0 / 0 / 0 / 10 / 0 / 6 / 0 | B: numbers found after the name (line 143); check the size |
| Graham Sundae Topping | .6oz | only in draft B | not found | 60 / 0 / 0 / 0 / 0 / 130 / 15 / 0 / 6 / 0 | B: numbers found after the name (line 144); check the size |
| Cheesecake Filling | 1oz | only in draft B | not found | 80 / 6 / 3.5 / 0 / 15 / 95 / 6 / 0 / 5 / 1 | B: numbers found after the name (line 145); check the size |
| Funnel Cake Fries | 1 serving | only in draft B | not found | 370 / 23 / 9 / 1 / 30 / 250 / 38 / 0 / 16 / 2 | B: numbers found after the name (line 146); check the size |
| Apple Pie | 1 | only in draft B | not found | 270 / 12 / 5 / 0 / 5 / 310 / 38 / 2 / 14 / 3 | B: numbers found after the name (line 147); check the size |
| Classic Slushie - Watermelon | Regular 16 fl oz | only in draft B | not found | 110 / 0 / 0 / 0 / 0 / 35 / 28 / 0 / 28 / 0 | B: numbers found after the name (line 149); check the size |
| Classic Slushie - Watermelon | Large 20 fl oz | only in draft B | not found | 130 / 0 / 0 / 0 / 0 / 45 / 35 / 0 / 35 / 0 | B: numbers found after the name (line 150); check the size |
| Classic Slushie - Blue Raspberry | Regular 16 fl oz | only in draft B | not found | 110 / 0 / 0 / 0 / 0 / 25 / 28 / 0 / 28 / 0 | B: numbers found after the name (line 151); check the size |
| Classic Slushie - Blue Raspberry | Large 20 fl oz | only in draft B | not found | 130 / 0 / 0 / 0 / 0 / 30 / 35 / 0 / 35 / 0 | B: numbers found after the name (line 152); check the size |
| Classic Slushie - Mango | Regular 16 fl oz | only in draft B | not found | 110 / 0 / 0 / 0 / 0 / 25 / 28 / 0 / 28 / 0 | B: numbers found after the name (line 153); check the size |
| Classic Slushie - Mango | Large 20 fl oz | only in draft B | not found | 130 / 0 / 0 / 0 / 0 / 35 / 35 / 0 / 35 / 0 | B: numbers found after the name (line 154); check the size |
| Nerds® Layered Slushie - Blue Raspberry & Piña Colada | Regular 16 fl oz | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 30 / 47 / 0 / 47 / 0 | B: name not in the guide text |
| Nerds® Layered Slushie - Blue Raspberry & Piña Colada | Large 20 fl oz | only in draft B | not found | 210 / 0 / 0 / 0 / 0 / 35 / 55 / 0 / 54 / 0 | B: name not in the guide text |
| Strawberry Sweet Creamery Slushie | Regular 16 fl oz | only in draft B | not found | 160 / 4 / 4 / 0 / 0 / 40 / 31 / 0 / 30 / 0 | B: numbers found after the name (line 157); check the size |
| Strawberry Sweet Creamery Slushie | Large 20 fl oz | only in draft B | not found | 180 / 4 / 4 / 0 / 0 / 50 / 38 / 0 / 37 / 0 | B: numbers found after the name (line 158); check the size |
| Orange Sweet Creamery Slushie | Regular 16 fl oz | only in draft B | not found | 170 / 4 / 4 / 0 / 0 / 45 / 35 / 0 / 34 / 0 | B: numbers found after the name (line 159); check the size |
| Orange Sweet Creamery Slushie | Large 20 fl oz | only in draft B | not found | 200 / 4 / 4 / 0 / 0 / 50 / 43 / 0 / 42 / 0 | B: numbers found after the name (line 160); check the size |
| Piña Colada Energy Slushie | Regular 16 fl oz | only in draft B | not found | 130 / 0 / 0 / 0 / 0 / 25 / 34 / 0 / 30 / 0 | B: numbers found after the name (line 161); check the size |
| Piña Colada Energy Slushie | Large 20 fl oz | only in draft B | not found | 160 / 0 / 0 / 0 / 0 / 35 / 42 / 0 / 38 / 0 | B: numbers found after the name (line 162); check the size |
| Piña Colada (no energy) Slushie | Regular 16 fl oz | only in draft B | not found | 120 / 0 / 0 / 0 / 0 / 30 / 32 / 0 / 32 / 0 | B: numbers found after the name (line 163); check the size |
| Piña Colada (no energy) Slushie | Large 20 fl oz | only in draft B | not found | 150 / 0 / 0 / 0 / 0 / 35 / 40 / 0 / 40 / 0 | B: numbers found after the name (line 164); check the size |
| Strawberry Piña Colada Energy Slushie | Regular 16 fl oz | only in draft B | not found | 130 / 0 / 0 / 0 / 0 / 25 / 35 / 0 / 31 / 0 | B: numbers found after the name (line 165); check the size |
| Strawberry Piña Colada Energy Slushie | Large 20 fl oz | only in draft B | not found | 160 / 0 / 0 / 0 / 0 / 35 / 42 / 0 / 38 / 0 | B: numbers found after the name (line 166); check the size |
| Strawberry Piña Colada (no energy) Slushie | Regular 16 fl oz | only in draft B | not found | 130 / 0 / 0 / 0 / 0 / 25 / 35 / 0 / 31 / 0 | B: numbers found after the name (line 167); check the size |
| Strawberry Piña Colada (no energy) Slushie | Large 20 fl oz | only in draft B | not found | 160 / 0 / 0 / 0 / 0 / 35 / 42 / 0 / 38 / 0 | B: numbers found after the name (line 168); check the size |
| Frozen Sprite FCB | 16 oz | only in draft B | not found | 120 / 0 / 0 / 0 / 0 / 75 / 30 / 1 / 30 / 0 | B: numbers found after the name (line 169); check the size |
| Frozen Sprite FCB | 20 oz | only in draft B | not found | 150 / 0 / 0 / 0 / 0 / 0 / 95 / 37 / 1 / 37 | B: numbers found after the name (line 170); check the size |
| Frozen Fanta Blue Raspberry FCB | 16 oz | only in draft B | not found | 130 / 0 / 0 / 0 / 0 / 0 / 60 / 34 / 1 / 34 | B: numbers found after the name (line 171); check the size |
| Frozen Fanta Blue Raspberry FCB | 20 oz | only in draft B | not found | 160 / 0 / 0 / 0 / 0 / 0 / 75 / 43 / 1 / 43 | B: numbers found after the name (line 172); check the size |
| Dasani | 1 serving | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 174); check the size, mostly zeros: look |
| Barq's Root Beer | Value 12 | only in draft B | not found | 110 / 0 / 0 / 0 / 0 / 0 / 50 / 29 / 0 / 29 | B: numbers found after the name (line 175); check the size |
| Barq's Root Beer | Small 16 | only in draft B | not found | 140 / 0 / 0 / 0 / 0 / 0 / 55 / 39 / 0 / 39 | B: numbers found after the name (line 176); check the size |
| Barq's Root Beer | Medium 20 | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 0 / 60 / 49 / 0 / 49 | B: numbers found after the name (line 177); check the size |
| Barq's Root Beer | Large 30 | only in draft B | not found | 270 / 0 / 0 / 0 / 0 / 0 / 90 / 73 / 0 / 73 | B: numbers found after the name (line 178); check the size |
| Cherry Coca-Cola | Value 12 | only in draft B | not found | 110 / 0 / 0 / 0 / 0 / 0 / 30 / 31 / 0 / 31 | B: numbers found after the name (line 179); check the size |
| Cherry Coca-Cola | Small 16 | only in draft B | not found | 150 / 0 / 0 / 0 / 0 / 0 / 35 / 37 / 0 / 37 | B: numbers found after the name (line 180); check the size |
| Cherry Coca-Cola | Medium 20 | only in draft B | not found | 190 / 0 / 0 / 0 / 0 / 0 / 45 / 47 / 0 / 47 | B: numbers found after the name (line 181); check the size |
| Cherry Coca-Cola | Large 30 | only in draft B | not found | 280 / 0 / 0 / 0 / 0 / 0 / 70 / 70 / 0 / 70 | B: numbers found after the name (line 182); check the size |
| Coca-Cola High Yield | Value 12 | only in draft B | not found | 110 / 0 / 0 / 0 / 0 / 0 / 30 / 29 / 0 / 29 | B: numbers found after the name (line 183); check the size |
| Coca-Cola High Yield | Small 16 | only in draft B | not found | 140 / 0 / 0 / 0 / 0 / 0 / 35 / 36 / 0 / 36 | B: numbers found after the name (line 184); check the size |
| Coca-Cola High Yield | Medium 20 | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 0 / 45 / 45 / 0 / 45 | B: numbers found after the name (line 185); check the size |
| Coca-Cola High Yield | Large 30 | only in draft B | not found | 270 / 0 / 0 / 0 / 0 / 0 / 65 / 67 / 0 / 67 | B: numbers found after the name (line 186); check the size |
| Diet Coke | Small 12 | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 35 / 0 / 0 / 0 | B: numbers found after the name (line 187); check the size, mostly zeros: look |
| Diet Coke | Small 16 | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 45 / 0 / 0 / 0 | B: numbers found after the name (line 188); check the size, mostly zeros: look |
| Diet Coke | Medium 20 | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 55 / 0 / 0 / 0 | B: numbers found after the name (line 189); check the size, mostly zeros: look |
| Diet Coke | Large 30 | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 85 / 1 / 0 / 0 | B: numbers found after the name (line 190); check the size, mostly zeros: look |
| Coke Zero Sugar | Value 12 | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 30 / 0 / 0 / 0 | B: numbers found after the name (line 191); check the size, mostly zeros: look |
| Coke Zero Sugar | Small 16 | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 45 / 0 / 0 / 0 | B: numbers found after the name (line 192); check the size, mostly zeros: look |
| Coke Zero Sugar | Medium 20 | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 55 / 0 / 0 / 0 | B: numbers found after the name (line 193); check the size, mostly zeros: look |
| Coke Zero Sugar | Large 20 | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 85 / 0 / 0 / 0 | B: numbers found after the name (line 194); check the size, mostly zeros: look |
| Coke Zero Sugar | Large 30 | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 85 / 0 / 0 / 0 | B: numbers found after the name (line 194); check the size, mostly zeros: look |
| Fanta Grape POM | Value 12 | only in draft B | not found | 110 / 0 / 0 / 0 / 0 / 0 / 40 / 29 / 0 / 29 | B: numbers found after the name (line 196); check the size |
| Fanta Grape POM | Small 16 | only in draft B | not found | 140 / 0 / 0 / 0 / 0 / 0 / 45 / 35 / 0 / 35 | B: numbers found after the name (line 197); check the size |
| Fanta Grape POM | Medium 20 | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 0 / 60 / 44 / 0 / 44 | B: numbers found after the name (line 198); check the size |
| Fanta Grape POM | Large 30 | only in draft B | not found | 270 / 0 / 0 / 0 / 0 / 0 / 85 / 66 / 0 / 65 | B: numbers found after the name (line 199); check the size |
| Fanta Orange | Value 12 | only in draft B | not found | 110 / 0 / 0 / 0 / 0 / 0 / 25 / 29 / 0 / 29 | B: numbers found after the name (line 200); check the size |
| Fanta Orange | Small 16 | only in draft B | not found | 140 / 0 / 0 / 0 / 0 / 0 / 35 / 36 / 0 / 35 | B: numbers found after the name (line 201); check the size |
| Fanta Orange | Medium 20 | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 0 / 45 / 45 / 0 / 44 | B: numbers found after the name (line 202); check the size |
| Fanta Orange | Large 30 | only in draft B | not found | 270 / 0 / 0 / 0 / 0 / 0 / 65 / 68 / 0 / 66 | B: numbers found after the name (line 203); check the size |
| Fanta Strawberry | Value 12 | only in draft B | not found | 120 / 0 / 0 / 0 / 0 / 0 / 60 / 31 / 0 / 31 | B: numbers found after the name (line 204); check the size |
| Fanta Strawberry | Small 16 | only in draft B | not found | 150 / 0 / 0 / 0 / 0 / 0 / 75 / 38 / 0 / 38 | B: numbers found after the name (line 205); check the size |
| Fanta Strawberry | Medium 20 | only in draft B | not found | 190 / 0 / 0 / 0 / 0 / 0 / 95 / 48 / 0 / 47 | B: numbers found after the name (line 206); check the size |
| Fanta Strawberry | Large 30 | only in draft B | not found | 290 / 0 / 0 / 0 / 0 / 0 / 140 / 72 / 0 / 71 | B: numbers found after the name (line 207); check the size |
| Gold Peak Premium Unsweetened Tea | Value 12 | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 35 / 0 / 0 / 0 | B: numbers found after the name (line 208); check the size, mostly zeros: look |
| Gold Peak Premium Unsweetened Tea | Small 16 | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 45 / 0 / 0 / 0 | B: numbers found after the name (line 209); check the size, mostly zeros: look |
| Gold Peak Premium Unsweetened Tea | Medium 20 | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 55 / 0 / 0 / 0 | B: numbers found after the name (line 210); check the size, mostly zeros: look |
| Gold Peak Premium Unsweetened Tea | Large 30 | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 85 / 0 / 0 / 0 | B: numbers found after the name (line 211); check the size, mostly zeros: look |
| Gold Peak Southern Style Tea | Value 12 | only in draft B | not found | 100 / 0 / 0 / 0 / 0 / 0 / 35 / 28 / 0 / 28 | B: numbers found after the name (line 212); check the size |
| Gold Peak Southern Style Tea | Small 16 | only in draft B | not found | 140 / 0 / 0 / 0 / 0 / 0 / 45 / 33 / 0 / 33 | B: numbers found after the name (line 213); check the size |
| Sprite High Yield | Large 30 | both read it the same, but its protein, carbs and fat make 252 kcal, not 170 | 170 / 0 / 0 / 0 / 0 / 120 / 63 / 0 / 62 / 0 | 170 / 0 / 0 / 0 / 0 / 120 / 63 / 0 / 62 / 0 | A: numbers found after the name (line 243); check the size; B: numbers found after the name (line 243); check the size |

## Spot check (4 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Minute Maid Lemonade(HFCS) | Medium 20 | 170 / 0 / 0 / 0 / 0 / 110 / 42 / 0 / 40 / 0 |
| All American Cheeseburger | 1 serving | 330 / 18 / 7 / 0 / 40 / 1050 / 31 / 1 / 8 / 13 |
| Classic Wings® (Stinging' Honey Garlic) | 5 PC | 390 / 30 / 11 / 1 / 180 / 1050 / 10 / 0 / 8 / 28 |
| POWERade Mountain Berry Blast | Small 16 | 80 / 0 / 0 / 0 / 0 / 100 / 20 / 0 / 20 / 0 |
