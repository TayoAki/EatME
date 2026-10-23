# Cheddar's Scratch Kitchen: lines for a person

Guide: https://media.cheddars.com/images/site/pdf/Cheddars_Nutrition_Guide_effective_3.20.23.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (104)

Fix each line in `menus/cheddars-scratch-kitchen.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B |
| --- | --- | --- | --- | --- |
| Key West Chicken & Shrimp | 1 serving | differ: calories, sodium_mg, carbs_g, fiber_g, sugars_g | 550 / 10 / 4 / 0 / 205 / 2460 / 65 / 3 / 35 / 49 | 440 / 10 / 4 / 0 / 205 / 2010 / 38 / 2 / 9 / 49 |
| Sweet White / Blush | 6 oz. | differ: cholesterol_mg, protein_g | 150 / 0 / 0 / 0 / 0.5 / 10 / 7 / 0 / 7 / 0 | 150 / 0 / 0 / 0 / 0 / 10 / 7 / 0 / 7 / 0.5 |
| Sparkling | Split | differ: cholesterol_mg, protein_g | 160 / 0 / 0 / 0 / 0.5 / 10 / 10 / 0 / 10 / 0 | 160 / 0 / 0 / 0 / 0 / 10 / 10 / 0 / 10 / 0.5 |
| White | Bottle | differ: cholesterol_mg, protein_g | 630 / 0 / 0 / 0 / 0.5 / 35 / 16 / 0 / 7 / 0 | 630 / 0 / 0 / 0 / 0 / 35 / 16 / 0 / 7 / 0.5 |
| Red | 6 oz. | differ: cholesterol_mg, protein_g | 160 / 0 / 0 / 0 / 0.5 / 0 / 5 / 0 / 1 / 0 | 160 / 0 / 0 / 0 / 0 / 0 / 5 / 0 / 1 / 0.5 |
| Red | Bottle | differ: cholesterol_mg, protein_g | 660 / 0 / 0 / 0 / 0.5 / 0 / 21 / 0 / 5 / 0 | 660 / 0 / 0 / 0 / 0 / 0 / 21 / 0 / 5 / 0.5 |
| Beer, Light | 12 fl. oz. | differ: cholesterol_mg, protein_g | 100 / 0 / 0 / 0 / 0.5 / 15 / 6 / 0 / 0 / 0 | 100 / 0 / 0 / 0 / 0 / 15 / 6 / 0 / 0 / 0.5 |
| Beer, Light | 16 fl. oz. | differ: cholesterol_mg, protein_g | 140 / 0 / 0 / 0 / 1 / 20 / 8 / 0 / 0 / 0 | 140 / 0 / 0 / 0 / 0 / 20 / 8 / 0 / 0 / 1 |
| Beer, Light | 23 fl. oz. | differ: cholesterol_mg, protein_g | 200 / 0 / 0 / 0 / 2 / 25 / 11 / 0 / 0.5 / 0 | 200 / 0 / 0 / 0 / 0 / 25 / 11 / 0 / 0.5 / 2 |
| Beer, Regular | 12 fl. oz. | differ: cholesterol_mg, protein_g | 150 / 0 / 0 / 0 / 2 / 15 / 13 / 0 / 0 / 0 | 150 / 0 / 0 / 0 / 0 / 15 / 13 / 0 / 0 / 2 |
| Beer, Regular | 16 fl. oz. | differ: cholesterol_mg, protein_g | 200 / 0 / 0 / 0 / 2 / 20 / 17 / 0 / 0 / 0 | 200 / 0 / 0 / 0 / 0 / 20 / 17 / 0 / 0 / 2 |
| Beer, Regular | 23 fl. oz. | differ: cholesterol_mg, protein_g | 290 / 0 / 0 / 0 / 3 / 25 / 24 / 0 / 0 / 0 | 290 / 0 / 0 / 0 / 0 / 25 / 24 / 0 / 0 / 3 |
| Lemon Pepper Chicken (carbs include bed of seasoned rice) | 1 serving | only in draft B | not found | 520 / 12 / 4.5 / 0 / 220 / 2340 / 35 / 0.5 / 2 / 68 |
| Dijon Chicken & Mushrooms (carbs include bed of seasoned rice) | 1 serving | only in draft B | not found | 1060 / 59 / 16 / 0 / 245 / 3980 / 60 / 2 / 28 / 71 |
| Key West Chicken & Shrimp (carbs include bed of seasoned rice) | 1 serving | only in draft B | not found | 550 / 10 / 4 / 0 / 205 / 2460 / 65 / 3 / 35 / 49 |
| Homemade Chicken Pot Pie | 1 serving | only in draft B | not found | 940 / 51 / 30 / 0.5 / 140 / 2250 / 59 / 4 / 10 / 60 |
| New Orleans Pasta | 1 serving | only in draft B | not found | 1540 / 87 / 40 / 1.5 / 350 / 4380 / 112 / 8 / 19 / 79 |
| Country Fried Chicken | Single | only in draft B | not found | 610 / 30 / 7 / 0 / 95 / 1770 / 44 / 2 / 5 / 40 |
| Country Fried Chicken | Double | only in draft B | not found | 1030 / 53 / 11 / 0 / 185 / 3020 / 64 / 3 / 6 / 74 |
| Idaho Mashed Potatoes | 1 serving | only in draft B | not found | 160 / 8 / 3.5 / 0 / 0 / 360 / 19 / 2 / 2 / 3 |
| Southern Green Beans | 1 serving | only in draft B | not found | 60 / 3 / 1 / 0 / 2.5 / 190 / 8 / 2 / 4 / 0.5 |
| Country Fried Steak | 1 serving | only in draft B | not found | 1030 / 60 / 13 / 0 / 85 / 2040 / 76 / 5 / 5 / 48 |
| Monte Cristo | 1 serving | only in draft B | not found | 1460 / 85 / 19 / 0 / 95 / 3090 / 132 / 8 / 46 / 44 |
| Buffalo Chicken Wrapper - Grilled | 1 serving | only in draft B | not found | 1520 / 92 / 26 / 1 / 315 / 5090 / 83 / 5 / 9 / 91 |
| Buffalo Chicken Wrapper - Fried | 1 serving | only in draft B | not found | 1830 / 120 / 29 / 1 / 255 / 4300 / 109 / 6 / 9 / 83 |
| Buttermilk Fried Chicken Sandwich | 1 serving | only in draft B | not found | 940 / 55 / 15 / 0.5 / 115 / 2080 / 64 / 3 / 8 / 48 |
| Smokehouse Burger | 1 serving | only in draft B | not found | 1040 / 55 / 22 / 2 / 170 / 2920 / 77 / 2 / 35 / 57 |
| Classic Burger | 1 serving | only in draft B | not found | 740 / 41 / 15 / 2 / 130 / 1670 / 45 / 3 / 7 / 46 |
| Classic Burger w/ Cheddar Cheese | 1 serving | only in draft B | not found | 830 / 48 / 19 / 2 / 150 / 1810 / 46 / 3 / 8 / 51 |
| Bacon Cheeseburger | 1 serving | only in draft B | not found | 1100 / 69 / 28 / 2 / 205 / 2650 / 47 / 3 / 8 / 67 |
| Add Sautéed Mushrooms | 1 serving | only in draft B | not found | 100 / 9 / 3.5 / 0 / 0 / 460 / 4 / 0 / 2 / 1 |
| Chicken Tenders & Grilled Shrimp | 1 serving | only in draft B | not found | 1240 / 63 / 12 / 0.5 / 270 / 2590 / 96 / 4 / 39 / 74 |
| Chicken Tenders & Coconut Shrimp (where available) | 1 serving | only in draft B | not found | 1300 / 80 / 15 / 0 / 245 / 1860 / 77 / 5 / 27 / 70 |
| Chicken Tenders & Beer-Battered Fried Shrimp | 1 serving | only in draft B | not found | 1460 / 86 / 14 / 0.5 / 290 / 3620 / 96 / 6 / 20 / 78 |
| Half Rack of Ribs & Grilled Shrimp | 1 serving | only in draft B | not found | 1120 / 62 / 23 / 0.5 / 315 / 2690 / 59 / 2 / 35 / 76 |
| Half Rack of Ribs & Coconut Shrimp (where available) | 1 serving | only in draft B | not found | 1250 / 83 / 27 / 0.5 / 290 / 2140 / 49 / 3 / 24 / 73 |
| Half Rack of Ribs & Beer-Battered Fried Shrimp | 1 serving | only in draft B | not found | 1230 / 78 / 24 / 0.5 / 300 / 3280 / 52 / 3 / 17 / 75 |
| Half Rack of Ribs & Chicken Tenders | 1 serving | only in draft B | not found | 1540 / 104 / 28 / 1 / 355 / 2350 / 45 / 2 / 21 / 104 |
| Top Sirloin Steak & Grilled Shrimp | 6 oz. | only in draft B | not found | 560 / 24 / 10 / 1 / 180 / 1770 / 49 / 1 / 27 / 38 |
| Top Sirloin Steak & Coconut Shrimp (where available) | 6 oz. | only in draft B | not found | 690 / 44 / 14 / 1 / 160 / 1230 / 38 / 3 / 16 / 35 |
| Top Sirloin Steak & Beer-Battered Fried Shrimp | 6 oz. | only in draft B | not found | 670 / 40 / 11 / 1 / 170 / 2370 / 41 / 3 / 8 / 36 |
| Top Sirloin Steak & Ribs | 6 oz. | only in draft B | not found | 1070 / 75 / 28 / 1.5 / 310 / 1880 / 11 / 0.5 / 9 / 83 |
| Top Sirloin & Chicken Tenders | 6 oz. | only in draft B | not found | 980 / 65 / 15 / 1 / 220 / 1430 / 34 / 2 / 12 / 66 |
| Top Sirloin Steak | 6 oz. | only in draft B | not found | 250 / 18 / 7 / 1 / 85 / 480 / 0 / 0 / 0 / 22 |
| Top Sirloin Steak | 8 oz. | only in draft B | not found | 330 / 23 / 9 / 1 / 115 / 640 / 0.5 / 0 / 0 / 30 |
| Ribeye Steak | 14 oz. | only in draft B | not found | 890 / 61 / 23 / 2 / 240 / 1000 / 6 / 0 / 0 / 78 |
| The Texas T-Bone (where available) | 1 serving | only in draft B | not found | 810 / 56 / 22 / 0 / 175 / 650 / 0.5 / 0 / 0 / 69 |
| Skirt Steak Churrasco (where available) | 1 serving | only in draft B | not found | 1050 / 52 / 19 / 2 / 215 / 1720 / 84 / 7 / 44 / 61 |
| Hickory Smoked Baby Back Ribs | Half Rack | only in draft B | not found | 810 / 57 / 20 / 0 / 220 / 1400 / 11 / 0 / 9 / 61 |
| Hickory Smoked Baby Back Ribs | Full Rack | only in draft B | not found | 1630 / 113 / 41 / 1 / 440 / 2790 / 22 / 0.5 / 17 / 121 |
| Grilled Shrimp Alfredo | 1 serving | only in draft B | not found | 1610 / 101 / 53 / 3 / 480 / 2670 / 105 / 9 / 13 / 73 |
| Grilled Whitefish - Lemon Pepper (carbs include bed of seasoned rice) | 1 serving | only in draft B | not found | 490 / 15 / 5 / 0 / 190 / 1650 / 34 / 0.5 / 1 / 52 |
| Grilled Whitefish - Blackened (carbs include bed of seasoned rice) | 1 serving | only in draft B | not found | 510 / 15 / 5 / 0 / 190 / 2190 / 36 / 2 / 1 / 53 |
| Cornmeal Whitefish | 1 serving | only in draft B | not found | 1080 / 79 / 13 / 0.5 / 120 / 2330 / 63 / 4 / 6 / 43 |
| Beer-Battered Fried Shrimp Platter | 1 serving | only in draft B | not found | 790 / 44 / 7 / 0 / 160 / 3140 / 72 / 5 / 9 / 27 |
| Coconut Shrimp Platter (where available) | 1 serving | only in draft B | not found | 770 / 47 / 11 / 0 / 140 / 1420 / 60 / 5 / 17 / 25 |
| Creamy Garlic Tilapia & Shrimp (carbs include bed of seasoned rice) | 1 serving | only in draft B | not found | 600 / 29 / 15 / 0.5 / 220 / 2060 / 32 / 2 / 3 / 54 |
| Beer-Battered Fish Fillet (where available) | 1 serving | only in draft B | not found | 690 / 46 / 6 / 0 / 140 / 1430 / 29 / 1 / 7 / 39 |
| Blackened Mahi Mahi (where available) | 1 serving | only in draft B | not found | 370 / 6 / 2.5 / 0 / 120 / 1440 / 40 / 2 / 12 / 34 |
| Grilled Salmon (carbs include seasoned rice) | 5 oz. | only in draft B | not found | 440 / 20 / 5 / 0 / 75 / 1060 / 33 / 0.5 / 0.5 / 29 |
| Grilled Salmon - Blackened (carbs include bed of seasoned rice) | 5 oz. | only in draft B | not found | 450 / 21 / 5 / 0 / 75 / 1370 / 34 / 1 / 1 / 29 |
| Grilled Salmon - Bourbon Glazed (carbs include bed of seasoned rice) | 5 oz. | only in draft B | not found | 560 / 21 / 5 / 0 / 75 / 1510 / 60 / 1 / 27 / 29 |
| Grilled Salmon (carbs include bed of seasoned rice) | 8 oz. | only in draft B | not found | 590 / 30 / 7 / 0 / 120 / 1260 / 33 / 0.5 / 1 / 44 |
| Grilled Salmon - Blackened (carbs include bed of seasoned rice) | 8 oz. | only in draft B | not found | 600 / 30 / 8 / 0 / 120 / 1740 / 35 / 1 / 1 / 44 |
| Grilled Salmon - Bourbon Glazed (carbs include bed of seasoned rice) | 8 oz. | only in draft B | not found | 750 / 31 / 8 / 0 / 120 / 1850 / 70 / 1 / 35 / 45 |
| Broccoli Cheese Casserole | 1 serving | only in draft B | not found | 220 / 14 / 8 / 0 / 40 / 640 / 16 / 2 / 2 / 9 |
| Loaded Baked Potato | 1 serving | only in draft B | not found | 430 / 22 / 11 / 0 / 35 / 720 / 51 / 5 / 4 / 10 |
| Loaded Baked Potato with Bacon | 1 serving | only in draft B | not found | 540 / 29 / 14 / 0.5 / 45 / 1340 / 51 / 5 / 5 / 18 |
| Gravy for Mashed Potatoes | 1 serving | only in draft B | not found | 30 / 1.5 / 1 / 0 / 0 / 110 / 3 / 0 / 1 / 0.5 |
| Cheese & Bacon Mashed Potatoes | 1 serving | only in draft B | not found | 350 / 23 / 10 / 0 / 30 / 1120 / 20 / 2 / 2 / 16 |
| Cheese & Bacon Fries | 1 serving | only in draft B | not found | 650 / 36 / 10 / 0 / 30 / 1760 / 62 / 8 / 0.5 / 19 |
| Red Beans & Rice | 1 serving | only in draft B | not found | 230 / 6 / 2.5 / 0 / 10 / 960 / 34 / 5 / 4 / 9 |
| Fresh Steamed Broccoli | 1 serving | only in draft B | not found | 100 / 8 / 3.5 / 0 / 0 / 105 / 6 / 3 / 2 / 3 |
| Sweet Baby Carrots | 1 serving | only in draft B | not found | 35 / 0 / 0 / 0 / 0 / 75 / 9 / 3 / 6 / 0.5 |
| Seasoned Rice | 1 serving | only in draft B | not found | 150 / 4 / 2 / 0 / 0 / 600 / 26 / 0.5 / 0.5 / 2 |
| Buttered Off-The-Cob Corn | 1 serving | only in draft B | not found | 110 / 2.5 / 0.5 / 0 / 0 / 80 / 22 / 2 / 8 / 4 |
| Fried Plantains (where available) | 1 serving | only in draft B | not found | 260 / 3 / 0 / 0 / 0 / 40 / 56 / 3 / 42 / 2 |
| Black Beans & Rice (where available) | 1 serving | only in draft B | not found | 140 / 2.5 / 1 / 0 / 0 / 620 / 25 / 3 / 0.5 / 5 |
| Kid's Chicken Tenders | 1 serving | only in draft B | not found | 630 / 42 / 7 / 0 / 135 / 1050 / 18 / 0.5 / 2 / 44 |
| Kid's Grilled Cheese | 1 serving | only in draft B | not found | 420 / 24 / 12 / 0 / 35 / 990 / 35 / 1 / 4 / 13 |
| Kid's Junior Burger | 1 serving | only in draft B | not found | 450 / 26 / 10 / 1 / 65 / 980 / 29 / 0.5 / 4 / 23 |
| Kid's Grilled Chicken | 1 serving | only in draft B | not found | 280 / 6 / 2.5 / 0 / 110 / 1250 / 21 / 0.5 / 0.5 / 34 |
| Kid's BBQ Chicken (carbs include bed of seasoned rice) | 1 serving | only in draft B | not found | 390 / 7 / 2.5 / 0 / 110 / 1920 / 48 / 0.5 / 25 / 34 |
| Kid's Fried Shrimp | 1 serving | only in draft B | not found | 410 / 22 / 3.5 / 0 / 80 / 1890 / 41 / 2 / 8 / 14 |
| Kid's Coconut Shrimp (where available) | 1 serving | only in draft B | not found | 440 / 26 / 6 / 0 / 70 / 750 / 38 / 3 / 16 / 13 |
| Kid's Penne Pasta Alfredo | 1 serving | only in draft B | not found | 700 / 46 / 24 / 1 / 95 / 770 / 55 / 3 / 6 / 16 |
| Cheddar's Legendary Monster Cookie | 1 serving | only in draft B | not found | 1390 / 77 / 42 / 1.5 / 160 / 760 / 157 / 6 / 115 / 16 |
| Carrot Cake | 1 serving | only in draft B | not found | 1100 / 63 / 20 / 1 / 75 / 730 / 124 / 7 / 89 / 16 |
| Classic Cheesecake | 1 serving | only in draft B | not found | 760 / 42 / 26 / 1.5 / 155 / 450 / 85 / 2 / 70 / 12 |
| Hot Fudge Cake Sundae | 1 serving | only in draft B | not found | 2510 / 116 / 56 / 2.5 / 240 / 2000 / 351 / 12 / 275 / 23 |
| Strawberry Paradise Punch | 1 serving | only in draft B | not found | 510 / 0 / 0 / 0 / 0 / 40 / 104 / 0.5 / 98 / 3 |
| The Texas T-Bone | 1 serving | only in draft B | not found | 810 / 56 / 22 / 0 / 175 / 650 / 0.5 / 0 / 0 / 69 |
| Chicken Caesar Salad | 1 serving | only in draft B | not found | 640 / 47 / 11 / 0 / 155 / 2050 / 13 / 5 / 7 / 43 |
| Salmon Caesar Salad | 1 serving | only in draft B | not found | 720 / 59 / 13 / 0 / 120 / 1570 / 13 / 5 / 6 / 36 |
| The Original Burger | 1 serving | only in draft B | not found | 400 / 26 / 10 / 1.5 / 130 / 1180 / 4 / 1 / 2 / 37 |
| The Original Burger with Cheddar Cheese | 1 serving | only in draft B | not found | 490 / 33 / 14 / 2 / 150 / 1330 / 5 / 1 / 2 / 42 |
| House Smoked Baby Back Ribs | Half Rack | only in draft B | not found | 1630 / 113 / 41 / 1 / 440 / 2790 / 22 / 0.5 / 17 / 121 |
| House Smoked Baby Back Ribs | Full Rack | only in draft B | not found | 3260 / 227 / 82 / 2 / 880 / 5590 / 44 / 2 / 34 / 243 |
| Top Sirloin Steak & Ribs | 1 serving | only in draft B | not found | 1070 / 75 / 28 / 1.5 / 310 / 1880 / 11 / 0.5 / 9 / 83 |
| Top Sirloin Steak & Grilled Shrimp | 1 serving | only in draft B | not found | 450 / 23 / 10 / 1 / 180 / 1320 / 21 / 1 / 0.5 / 37 |
| Lemon Pepper White Fish | 1 serving | only in draft B | not found | 490 / 15 / 5 / 0 / 190 / 1650 / 34 / 0.5 / 1 / 52 |
| Grilled Salmon | 1 serving | only in draft B | not found | 590 / 30 / 7 / 0 / 120 / 1260 / 33 / 0.5 / 1 / 44 |
| Blackened Salmon | 1 serving | only in draft B | not found | 600 / 30 / 8 / 0 / 120 / 1740 / 35 / 1 / 1 / 44 |
| Side - Red Beans & Rice | 1 serving | only in draft B | not found | 230 / 6 / 2.5 / 0 / 10 / 960 / 34 / 5 / 4 / 9 |

## Spot check (5 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Grilled White Fish - Blackened (carbs include bed of seasoned rice) | 1 serving | 350 / 10 / 3.5 / 0 / 95 / 1470 / 35 / 1 / 1 / 28 |
| Lemon Pepper Chicken | 1 serving | 520 / 12 / 4.5 / 0 / 220 / 2340 / 35 / 0.5 / 2 / 68 |
| Chicken Tender Platter - Classic | 1 serving | 1050 / 65 / 10 / 0 / 210 / 1350 / 48 / 3 / 13 / 72 |
| Hand-Crafted Lemonade - Traditional | 1 serving | 120 / 0 / 0 / 0 / 0 / 25 / 30 / 0 / 28 / 1 |
| Freshly Made Coleslaw | 1 serving | 170 / 13 / 2 / 0 / 10 / 200 / 14 / 1 / 12 / 0.5 |
