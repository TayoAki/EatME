# Cheddar's Scratch Kitchen: lines for a person

Guide: https://media.cheddars.com/images/site/pdf/Cheddars_Nutrition_Guide_effective_3.20.23.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (40)

The last column comes from `npm run chains:evidence`: whether a draft's numbers sit right after the item's name in the guide text the drafts read. It can't read sizes or sections (one draft called a single 78 g cookie a "6 pack"): check those against the guide, then fix the line and set its check to `person`.

Fix each line in `menus/cheddars-scratch-kitchen.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B | In the guide text (no AI) |
| --- | --- | --- | --- | --- | --- |
| Key West Chicken & Shrimp | 1 serving | differ: calories, sodium_mg, carbs_g, fiber_g, sugars_g | 550 / 10 / 4 / 0 / 205 / 2460 / 65 / 3 / 35 / 49 | 440 / 10 / 4 / 0 / 205 / 2010 / 38 / 2 / 9 / 49 | A: numbers found after the name (line 65); check the size; B: not as drafted (line 65 lacks 440, 2010, 38, 2, 9) |
| Grilled Salmon | 8 oz. | only in draft A | 590 / 30 / 7 / 0 / 120 / 1260 / 33 / 0.5 / 1 / 44 | not found | A: not as drafted (line 139 lacks 0.5) |
| Grilled Salmon - Blackened | 8 oz. | only in draft A | 600 / 30 / 8 / 0 / 120 / 1740 / 35 / 1 / 1 / 44 | not found | A: numbers found after the name (line 140); check the size |
| Sweet White / Blush | 6 oz. | differ: cholesterol_mg, protein_g | 150 / 0 / 0 / 0 / 0.5 / 10 / 7 / 0 / 7 / 0 | 150 / 0 / 0 / 0 / 0 / 10 / 7 / 0 / 7 / 0.5 | A: not as drafted (line 423 lacks 0.5); B: not as drafted (line 423 lacks 0.5) |
| Sparkling | Split | differ: cholesterol_mg, protein_g | 160 / 0 / 0 / 0 / 0.5 / 10 / 10 / 0 / 10 / 0 | 160 / 0 / 0 / 0 / 0 / 10 / 10 / 0 / 10 / 0.5 | A: not as drafted (line 425 lacks 0.5); B: not as drafted (line 425 lacks 0.5) |
| White | Bottle | differ: cholesterol_mg, protein_g | 630 / 0 / 0 / 0 / 0.5 / 35 / 16 / 0 / 7 / 0 | 630 / 0 / 0 / 0 / 0 / 35 / 16 / 0 / 7 / 0.5 | A: not as drafted (line 427 lacks 0.5); B: not as drafted (line 427 lacks 0.5) |
| Red | 6 oz. | differ: cholesterol_mg, protein_g | 160 / 0 / 0 / 0 / 0.5 / 0 / 5 / 0 / 1 / 0 | 160 / 0 / 0 / 0 / 0 / 0 / 5 / 0 / 1 / 0.5 | A: not as drafted (line 428 lacks 0.5); B: not as drafted (line 428 lacks 0.5) |
| Red | Bottle | differ: cholesterol_mg, protein_g | 660 / 0 / 0 / 0 / 0.5 / 0 / 21 / 0 / 5 / 0 | 660 / 0 / 0 / 0 / 0 / 0 / 21 / 0 / 5 / 0.5 | A: not as drafted (line 429 lacks 0.5); B: not as drafted (line 429 lacks 0.5) |
| Beer, Light | 12 fl. oz. | differ: cholesterol_mg, protein_g | 100 / 0 / 0 / 0 / 0.5 / 15 / 6 / 0 / 0 / 0 | 100 / 0 / 0 / 0 / 0 / 15 / 6 / 0 / 0 / 0.5 | A: not as drafted (line 431 lacks 0.5); B: not as drafted (line 431 lacks 0.5) |
| Lemon Pepper Chicken (carbs include bed of seasoned rice) | 1 serving | only in draft B | not found | 520 / 12 / 4.5 / 0 / 220 / 2340 / 35 / 0.5 / 2 / 68 | B: not as drafted (line 58 lacks 0.5) |
| Dijon Chicken & Mushrooms (carbs include bed of seasoned rice) | 1 serving | only in draft B | not found | 1060 / 59 / 16 / 0 / 245 / 3980 / 60 / 2 / 28 / 71 | B: numbers found after the name (line 64); check the size |
| Key West Chicken & Shrimp (carbs include bed of seasoned rice) | 1 serving | only in draft B | not found | 550 / 10 / 4 / 0 / 205 / 2460 / 65 / 3 / 35 / 49 | B: numbers found after the name (line 65); check the size |
| Chicken Tenders & Grilled Shrimp | 1 serving | only in draft B | not found | 1240 / 63 / 12 / 0.5 / 270 / 2590 / 96 / 4 / 39 / 74 | B: numbers found after the name (line 95); check the size |
| Chicken Tenders & Coconut Shrimp (where available) | 1 serving | only in draft B | not found | 1300 / 80 / 15 / 0 / 245 / 1860 / 77 / 5 / 27 / 70 | B: numbers found after the name (line 96); check the size |
| Chicken Tenders & Beer-Battered Fried Shrimp | 1 serving | only in draft B | not found | 1460 / 86 / 14 / 0.5 / 290 / 3620 / 96 / 6 / 20 / 78 | B: numbers found after the name (line 97); check the size |
| Half Rack of Ribs & Grilled Shrimp | 1 serving | only in draft B | not found | 1120 / 62 / 23 / 0.5 / 315 / 2690 / 59 / 2 / 35 / 76 | B: numbers found after the name (line 98); check the size |
| Half Rack of Ribs & Coconut Shrimp (where available) | 1 serving | only in draft B | not found | 1250 / 83 / 27 / 0.5 / 290 / 2140 / 49 / 3 / 24 / 73 | B: numbers found after the name (line 99); check the size |
| Half Rack of Ribs & Beer-Battered Fried Shrimp | 1 serving | only in draft B | not found | 1230 / 78 / 24 / 0.5 / 300 / 3280 / 52 / 3 / 17 / 75 | B: numbers found after the name (line 100); check the size |
| Half Rack of Ribs & Chicken Tenders | 1 serving | only in draft B | not found | 1540 / 104 / 28 / 1 / 355 / 2350 / 45 / 2 / 21 / 104 | B: numbers found after the name (line 101); check the size |
| Top Sirloin Steak & Grilled Shrimp | 6 oz. | only in draft B | not found | 560 / 24 / 10 / 1 / 180 / 1770 / 49 / 1 / 27 / 38 | B: numbers found after the name (line 102); check the size |
| Top Sirloin Steak & Coconut Shrimp (where available) | 6 oz. | only in draft B | not found | 690 / 44 / 14 / 1 / 160 / 1230 / 38 / 3 / 16 / 35 | B: numbers found after the name (line 103); check the size |
| Top Sirloin Steak & Beer-Battered Fried Shrimp | 6 oz. | only in draft B | not found | 670 / 40 / 11 / 1 / 170 / 2370 / 41 / 3 / 8 / 36 | B: numbers found after the name (line 104); check the size |
| Top Sirloin Steak & Ribs | 6 oz. | only in draft B | not found | 1070 / 75 / 28 / 1.5 / 310 / 1880 / 11 / 0.5 / 9 / 83 | B: not as drafted (line 105 lacks 0.5) |
| Top Sirloin & Chicken Tenders | 6 oz. | only in draft B | not found | 980 / 65 / 15 / 1 / 220 / 1430 / 34 / 2 / 12 / 66 | B: numbers found after the name (line 106); check the size |
| Grilled Salmon (carbs include bed of seasoned rice) | 8 oz. | only in draft B | not found | 590 / 30 / 7 / 0 / 120 / 1260 / 33 / 0.5 / 1 / 44 | B: not as drafted (line 139 lacks 0.5) |
| Grilled Salmon - Blackened (carbs include bed of seasoned rice) | 8 oz. | only in draft B | not found | 600 / 30 / 8 / 0 / 120 / 1740 / 35 / 1 / 1 / 44 | B: numbers found after the name (line 140); check the size |
| Strawberry Paradise Punch | 1 serving | only in draft B | not found | 510 / 0 / 0 / 0 / 0 / 40 / 104 / 0.5 / 98 / 3 | B: not as drafted (line 177 lacks 0.5) |
| The Texas T-Bone | 1 serving | only in draft B | not found | 810 / 56 / 22 / 0 / 175 / 650 / 0.5 / 0 / 0 / 69 | B: not as drafted (line 111 lacks 0.5) |
| Chicken Caesar Salad | 1 serving | only in draft B | not found | 640 / 47 / 11 / 0 / 155 / 2050 / 13 / 5 / 7 / 43 | B: not as drafted (line 188 lacks 155, 2050, 13, 5, 7, 43) |
| Salmon Caesar Salad | 1 serving | only in draft B | not found | 720 / 59 / 13 / 0 / 120 / 1570 / 13 / 5 / 6 / 36 | B: not as drafted (line 189 lacks 120, 1570, 13, 5, 6, 36) |
| The Original Burger | 1 serving | only in draft B | not found | 400 / 26 / 10 / 1.5 / 130 / 1180 / 4 / 1 / 2 / 37 | B: not as drafted (line 195 lacks 130, 1180, 4, 1, 2, 37) |
| The Original Burger with Cheddar Cheese | 1 serving | only in draft B | not found | 490 / 33 / 14 / 2 / 150 / 1330 / 5 / 1 / 2 / 42 | B: not as drafted (line 196 lacks 150, 1330, 5, 1, 2, 42) |
| House Smoked Baby Back Ribs | Half Rack | only in draft B | not found | 1630 / 113 / 41 / 1 / 440 / 2790 / 22 / 0.5 / 17 / 121 | B: not as drafted (line 203 lacks 440, 2790, 22, 0.5, 17, 121) |
| House Smoked Baby Back Ribs | Full Rack | only in draft B | not found | 3260 / 227 / 82 / 2 / 880 / 5590 / 44 / 2 / 34 / 243 | B: not as drafted (line 204 lacks 880, 5590, 44, 2, 34, 243) |
| Top Sirloin Steak & Ribs | 1 serving | only in draft B | not found | 1070 / 75 / 28 / 1.5 / 310 / 1880 / 11 / 0.5 / 9 / 83 | B: not as drafted (line 105 lacks 0.5) |
| Top Sirloin Steak & Grilled Shrimp | 1 serving | only in draft B | not found | 450 / 23 / 10 / 1 / 180 / 1320 / 21 / 1 / 0.5 / 37 | B: not as drafted (line 102 lacks 450, 23, 1320, 21, 0.5, 37) |
| Lemon Pepper White Fish | 1 serving | only in draft B | not found | 490 / 15 / 5 / 0 / 190 / 1650 / 34 / 0.5 / 1 / 52 | B: not as drafted (line 213 lacks 190, 1650, 34, 0.5, 1, 52) |
| Grilled Salmon | 1 serving | only in draft B | not found | 590 / 30 / 7 / 0 / 120 / 1260 / 33 / 0.5 / 1 / 44 | B: not as drafted (line 139 lacks 0.5) |
| Blackened Salmon | 1 serving | only in draft B | not found | 600 / 30 / 8 / 0 / 120 / 1740 / 35 / 1 / 1 / 44 | B: not as drafted (line 215 lacks 120, 1740, 35, 1, 1, 44) |
| Side - Red Beans & Rice | 1 serving | only in draft B | not found | 230 / 6 / 2.5 / 0 / 10 / 960 / 34 / 5 / 4 / 9 | B: not as drafted (line 220 lacks 10, 960, 34, 5, 4, 9) |

## Spot check (9 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Kid's BBQ Chicken (carbs include bed of seasoned rice) | 1 serving | 390 / 7 / 2.5 / 0 / 110 / 1920 / 48 / 0.5 / 25 / 34 |
| Coconut Shrimp Platter (where available) | 1 serving | 770 / 47 / 11 / 0 / 140 / 1420 / 60 / 5 / 17 / 25 |
| Grilled White Fish - Blackened (carbs include bed of seasoned rice) | 1 serving | 350 / 10 / 3.5 / 0 / 95 / 1470 / 35 / 1 / 1 / 28 |
| Ribeye Steak | 14 oz. | 890 / 61 / 23 / 2 / 240 / 1000 / 6 / 0 / 0 / 78 |
| Seasoned Rice | 1 serving | 150 / 4 / 2 / 0 / 0 / 600 / 26 / 0.5 / 0.5 / 2 |
| Classic Burger w/ Cheddar Cheese | 1 serving | 830 / 48 / 19 / 2 / 150 / 1810 / 46 / 3 / 8 / 51 |
| Lemon Pepper Chicken | 1 serving | 520 / 12 / 4.5 / 0 / 220 / 2340 / 35 / 0.5 / 2 / 68 |
| Beer, Regular | 23 fl. oz. | 290 / 0 / 0 / 0 / 0 / 25 / 24 / 0 / 0 / 3 |
| Chicken Tender Platter - Classic | 1 serving | 1050 / 65 / 10 / 0 / 210 / 1350 / 48 / 3 / 13 / 72 |
