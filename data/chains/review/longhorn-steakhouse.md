# LongHorn Steakhouse: lines for a person

Guide: https://media.longhornsteakhouse.com/en_us/pdf/nutrition_allergen_guide.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (130)

Fix each line in `menus/longhorn-steakhouse.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B |
| --- | --- | --- | --- | --- |
| Texas Margarita | 1 serving | the guide gives no fiber_g, sugars_g | 200 / 0 / 0 / 0 / – / 990 / 28 / – / – / 0 | 200 / 0 / 0 / 0 / – / 990 / 28 / – / – / 0 |
| The Perfect | 1 serving | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 290 / – / – / – / – / 10 / 46 / – / 45 / – | 290 / – / – / – / – / 10 / 46 / – / 45 / – |
| Lemondrop Martini | 1 serving | differ: fat_g, saturated_fat_g, trans_fat_g | 250 / 0 / 0 / 0 / – / 5 / 36 / – / 30 / 0 | 250 / – / – / – / – / 5 / 36 / – / 30 / 0 |
| Light Draft Beer | 20 oz. | differ: fiber_g, sugars_g | 170 / 0 / 0 / 0 / 0 / 25 / 10 / 0.5 / 1 / 1 | 170 / 0 / 0 / 0 / 0 / 25 / 10 / 0 / 0.5 / 1 |
| Cider Draft | 16 oz. | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 270 / – / – / – / – / – / – / – / – / – | 270 / – / – / – / – / – / – / – / – / – |
| Cider Draft | 20 oz. | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 330 / – / – / – / – / – / – / – / – / – | 330 / – / – / – / – / – / – / – / – / – |
| IPA Draft | 16 oz. | the guide gives no fat_g, saturated_fat_g, fiber_g, sugars_g | 270 / – / – / – / – / 20 / 1 / – / – / 4 | 270 / – / – / – / – / 20 / 1 / – / – / 4 |
| IPA Draft | 20 oz. | the guide gives no fat_g, saturated_fat_g, fiber_g, sugars_g | 340 / – / – / – / – / 25 / 2 / – / – / 5 | 340 / – / – / – / – / 25 / 2 / – / – / 5 |
| IPA Bottle (where available) | 1 serving | the guide gives no fat_g, saturated_fat_g, fiber_g, sugars_g | 210 / – / – / – / – / 15 / 0.5 / – / – / 3 | 210 / – / – / – / – / 15 / 0.5 / – / – / 3 |
| Coke | 1 serving | differ: fat_g, saturated_fat_g | 140 / – / 0 / – / – / 45 / 39 / – / 39 / – | 140 / 0 / – / – / – / 45 / 39 / – / 39 / – |
| Sprite | 1 serving | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 140 / – / – / – / – / 65 / 38 / – / 38 / – | 140 / – / – / – / – / 65 / 38 / – / 38 / – |
| Pibb Xtra | 1 serving | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 140 / – / – / – / – / 40 / 39 / – / 39 / – | 140 / – / – / – / – / 40 / 39 / – / 39 / – |
| Kid's Sirloin Steak | 1 serving | the guide gives no fiber_g | 240 / 16 / 3 / 0 / 65 / 390 / 1 / – / 0 / 24 | 240 / 16 / 3 / 0 / 65 / 390 / 1 / – / 0 / 24 |
| Kid's Fountain Drink | 1 serving | the guide gives no saturated_fat_g, fiber_g, protein_g | 110 / 0 / – / – / – / 35 / 29 / – / 29 / – | 110 / 0 / – / – / – / 35 / 29 / – / 29 / – |
| Spicy Chicken Bites (where available) | 1 serving | only in draft B | not found | 740 / 39 / 7 / 0 / 110 / 1420 / 53 / 0 / 17 / 43 |
| + Sweet Chili Ginger Sauce | 1 serving | only in draft B | not found | 210 / 16 / 2.5 / 0 / 15 / 340 / 16 / 0 / 15 / 0.5 |
| Parmesan Crusted Fries | 1 serving | only in draft B | not found | 2070 / 130 / 36 / 0.5 / 195 / 5650 / 155 / 2 / 4 / 72 |
| Texas Tonion | 1 serving | only in draft B | not found | 1180 / 69 / 12 / 0 / 0 / 2720 / 126 / 9 / 9 / 15 |
| + Dip | 1 serving | only in draft B | not found | 500 / 52 / 8 / 1 / 30 / 700 / 9 / 0 / 8 / 0.5 |
| Parmesan Cheese Fries | 1 serving | only in draft B | not found | 2340 / 167 / 46 / 2.5 / 175 / 3630 / 143 / 0 / 5 / 65 |
| White Cheddar Stuffed Mushrooms | 1 serving | only in draft B | not found | 730 / 60 / 36 / 2 / 155 / 1570 / 14 / 1 / 4 / 33 |
| Firecracker Chicken Wraps | 1 serving | only in draft B | not found | 720 / 42 / 15 / 0 / 70 / 2120 / 62 / 0 / 0 / 28 |
| + Avocado-Lime Sauce | 1 serving | only in draft B | not found | 170 / 23 / 3.5 / 0 / 15 / 450 / 3 / 0.5 / 2 / 1 |
| Wild West Shrimp | 1 serving | only in draft B | not found | 970 / 62 / 17 / 0.5 / 290 / 3740 / 65 / 6 / 2 / 39 |
| + Ranch Dressing | 1 serving | only in draft B | not found | 230 / 25 / 4 / 0 / 20 / 380 / 2 / 0 / 1 / 0.5 |
| Seasoned Steakhouse Wings | 1 serving | only in draft B | not found | 460 / 28 / 7 / 0 / 245 / 1030 / 0 / 0.5 / 0 / 53 |
| + Blue Cheese Dressing | 1 serving | only in draft B | not found | 180 / 17 / 3.5 / 0 / 15 / 390 / 3 / 0 / 2 / 2 |
| + Buffalo Sauce | 1 serving | only in draft B | not found | 90 / 8 / 1.5 / 0 / 10 / 1280 / 3 / 0 / 0 / 0 |
| Surf & Surf Dip (where available) | 1 serving | only in draft B | not found | 730 / 60 / 28 / 0.5 / 275 / 2430 / 12 / 1 / 1 / 35 |
| + Flatbread (where available) | 1 serving | only in draft B | not found | 920 / 49 / 9 / 0 / 2.5 / 1750 / 99 / 5 / 7 / 19 |
| Texas Brisket Nachos (where available) | 1 serving | only in draft B | not found | 2040 / 130 / 45 / 0 / 240 / 4070 / 149 / 1 / 11 / 64 |
| Parmesan Crusted Spinach Dip (where available) | 1 serving | only in draft B | not found | 770 / 62 / 33 / 0.5 / 150 / 1730 / 21 / 2 / 2 / 28 |
| + Flatbread Chips (where available) | 1 serving | only in draft B | not found | 710 / 38 / 7 / 0 / 2.5 / 1350 / 76 / 4 / 5 / 15 |
| Spicy Chicken Bites - Larger Portion (where available) | 1 serving | only in draft B | not found | 920 / 49 / 9 / 0 / 140 / 1780 / 66 / 0 / 21 / 54 |
| Texas Brisket Queso (where available) | 1 serving | only in draft B | not found | 1070 / 89 / 49 / 3 / 20 / 2560 / 19 / 1 / 8 / 50 |
| + Chips (where available) | 1 serving | only in draft B | not found | 600 / 30 / 5 / 0 / 0 / 560 / 76 / 7 / 1 / 8 |
| Loaded Potato Soup | Cup | only in draft B | not found | 270 / 19 / 9 / 0 / 45 / 670 / 16 / 2 / 2 / 10 |
| Loaded Potato Soup | Bowl | only in draft B | not found | 380 / 27 / 13 / 0.5 / 65 / 970 / 21 / 2 / 2 / 15 |
| Shrimp & Lobster Chowder | Cup | only in draft B | not found | 190 / 11 / 6 / 0 / 65 / 570 / 17 / 2 / 4 / 8 |
| Shrimp & Lobster Chowder | Bowl | only in draft B | not found | 250 / 15 / 8 / 0 / 90 / 760 / 23 / 3 / 5 / 10 |
| French Onion Soup | Cup | only in draft B | not found | 170 / 10 / 4.5 / 0 / 25 / 880 / 13 / 1 / 4 / 8 |
| French Onion Soup | Bowl | only in draft B | not found | 480 / 31 / 18 / 0 / 100 / 1830 / 20 / 0 / 7 / 30 |
| Southwest Chicken Tortilla (where available) | Cup | only in draft B | not found | 250 / 14 / 1 / 0 / 25 / 1070 / 17 / 0.5 / 0 / 12 |
| Southwest Chicken Tortilla (where available) | Bowl | only in draft B | not found | 330 / 18 / 1.5 / 0 / 30 / 1420 / 22 / 1 / 0 / 16 |
| Mixed Greens Salad | 1 serving | only in draft B | not found | 140 / 8 / 3 / 0 / 15 / 270 / 13 / 3 / 3 / 6 |
| Caesar Side Salad with Caesar Dressing | 1 serving | only in draft B | not found | 250 / 19 / 5 / 0 / 15 / 600 / 12 / 2 / 1 / 6 |
| Strawberry & Pecan Salad with dressing | 1 serving | only in draft B | not found | 190 / 8 / 2 / 0 / 10 / 300 / 28 / 4 / 22 / 4 |
| Grilled Chicken & Strawberry Salad with Vinaigrette | 1 serving | only in draft B | not found | 530 / 19 / 7 / 0 / 125 / 1310 / 52 / 7 / 41 / 43 |
| Farm Fresh Field Greens with Crispy Chicken Tenders | 1 serving | only in draft B | not found | 650 / 35 / 10 / 1 / 105 / 1090 / 41 / 7 / 6 / 46 |
| Farm Fresh Field Greens with Salmon | 1 serving | only in draft B | not found | 530 / 29 / 9 / 1 / 115 / 710 / 23 / 5 / 7 / 43 |
| 7-Pepper Sirloin Salad | 1 serving | only in draft B | not found | 490 / 26 / 12 / 1 / 135 / 1120 / 22 / 5 / 5 / 45 |
| Blue Cheese | 1.5 oz. | only in draft B | not found | 180 / 17 / 3.5 / 0 / 15 / 390 / 3 / 0 / 2 / 2 |
| Blue Cheese | 3 oz. | only in draft B | not found | 350 / 34 / 7 / 0 / 35 / 770 / 6 / 0 / 3 / 4 |
| Honey Mustard | 1.5 oz. | only in draft B | not found | 240 / 23 / 3 / 0 / 25 / 200 / 8 / 0 / 6 / 0 |
| Honey Mustard | 3 oz. | only in draft B | not found | 480 / 45 / 6 / 0 / 45 / 410 / 15 / 0 / 12 / 0 |
| Ranch | 1.5 oz. | only in draft B | not found | 230 / 25 / 4 / 0 / 20 / 380 / 2 / 0 / 1 / 0.5 |
| Ranch | 3 oz. | only in draft B | not found | 460 / 49 / 8 / 0.5 / 40 / 750 / 4 / 0 / 3 / 2 |
| Raspberry Vinaigrette | 1.5 oz. | only in draft B | not found | 60 / 0.5 / 0 / 0 / 0 / 220 / 14 / 0 / 12 / 0 |
| Raspberry Vinaigrette | 3 oz. | only in draft B | not found | 120 / 1 / 0 / 0 / 0 / 440 / 27 / 0 / 25 / 0 |
| Thousand Island | 1.5 oz. | only in draft B | not found | 190 / 19 / 3 / 0 / 10 / 300 / 5 / 0 / 4 / 0 |
| Thousand Island | 3 oz. | only in draft B | not found | 390 / 39 / 6 / 0 / 20 / 610 / 11 / 0 / 9 / 0.5 |
| White Balsamic Vinaigrette | 1.5 oz. | only in draft B | not found | 200 / 20 / 1.5 / 0 / 0 / 240 / 6 / 0 / 5 / 0 |
| White Balsamic Vinaigrette | 3 oz. | only in draft B | not found | 390 / 39 / 3 / 0 / 0 / 480 / 12 / 0 / 9 / 0 |
| Blackened Chicken Sandwich | 6 oz | only in draft B | not found | 810 / 48 / 12 / 1 / 45 / 1710 / 47 / 3 / 7 / 48 |
| Crispy Buttermilk Chicken Sandwich | 6 oz | only in draft B | not found | 1080 / 72 / 12.5 / 0 / 140 / 2325 / 67 / 5 / 9 / 44 |
| Half-Pound Steakhouse Cheeseburger | 1 serving | only in draft B | not found | 850 / 51 / 15 / 2 / 165 / 1150 / 45 / 3 / 5 / 48 |
| Grilled Chicken & Strawberry Lunch Salad with Vinaigrette | 1 serving | only in draft B | not found | 280 / 11 / 2.5 / 0 / 55 / 580 / 28 / 4 / 22 / 20 |
| 7-Pepper Sirloin Lunch Salad | 1 serving | only in draft B | not found | 250 / 13 / 6 / 0.5 / 65 / 560 / 11 / 2 / 2 / 23 |
| Grilled Lamb Chops | 1 serving | only in draft B | not found | 1120 / 79 / 39 / 3.5 / 260 / 1670 / 42 / 6 / 3 / 63 |
| Hand-Breaded Chicken Tenders | 6 tenders | only in draft B | not found | 420 / 22 / 4 / 0 / 80 / 680 / 19 / 2 / 0.5 / 36 |
| + Honey Mustard | 1 serving | only in draft B | not found | 240 / 23 / 3 / 0 / 25 / 200 / 8 / 0 / 6 / 0 |
| + Seasoned French Fries | 1 serving | only in draft B | not found | 500 / 23 / 2 / 0 / 0 / 1280 / 67 / 0 / 1 / 6 |
| Hand-Breaded Chicken Tenders | 9 tenders | only in draft B | not found | 620 / 33 / 6 / 0 / 120 / 1030 / 28 / 4 / 0.5 / 53 |
| Parmesan Crusted Chicken | 6 oz | only in draft B | not found | 560 / 34 / 14 / 0.5 / 160 / 1580 / 12 / 2 / 2 / 51 |
| Parmesan Crusted Chicken | 9 oz | only in draft B | not found | 650 / 36 / 15 / 0.5 / 205 / 1860 / 12 / 2 / 2 / 68 |
| Parmesan Crusted Chicken | 12 oz | only in draft B | not found | 1120 / 69 / 28 / 1.5 / 320 / 3160 / 24 / 4 / 3 / 102 |
| Redrock Grilled Shrimp | 8 ct. | only in draft B | not found | 160 / 3 / 1.5 / 0 / 225 / 960 / 2 / 0.5 / 0.5 / 30 |
| + Rice | 1 serving | only in draft B | not found | 230 / 6 / 2 / 0 / 0 / 1120 / 41 / 0.5 / 4 / 3 |
| + Garlic Butter | 1 serving | only in draft B | not found | 230 / 26 / 13 / 1 / 55 / 230 / 2 / 0 / 0 / 0.5 |
| Baby Back Ribs | Half-Rack | only in draft B | not found | 820 / 56 / 21 / 0 / 255 / 740 / 16 / 1 / 15 / 62 |
| + BBQ Sauce | 1 serving | only in draft B | not found | 110 / 0 / 0 / 0 / 0 / 470 / 26 / 0 / 23 / 0 |
| Baby Back Ribs | Full-Rack | only in draft B | not found | 1270 / 87 / 33 / 0 / 395 / 1150 / 25 / 2 / 24 / 96 |
| LongHorn® Salmon | 7 oz. | only in draft B | not found | 300 / 16 / 3 / 0 / 90 / 310 / 2 / 0 / 1 / 33 |
| LongHorn® Salmon | 10 oz. | only in draft B | not found | 430 / 23 / 4 / 0 / 130 / 440 / 3 / 0 / 2 / 47 |
| Lemon Garlic Chicken | 6 oz. | only in draft B | not found | 240 / 10 / 4 / 0 / 105 / 840 / 2 / 0 / 0.5 / 36 |
| Lemon Garlic Chicken | 9 oz. | only in draft B | not found | 330 / 12 / 4.5 / 0 / 150 / 1120 / 2 / 0 / 0.5 / 53 |
| Lemon Garlic Chicken | 12 oz. | only in draft B | not found | 420 / 15 / 5 / 0 / 195 / 1400 / 2 / 0 / 0.5 / 70 |
| Chop Steak | 1 serving | only in draft B | not found | 640 / 46 / 21 / 2.5 / 145 / 1240 / 13 / 3 / 6 / 44 |
| Chicken Fried Chicken (where available) | 1 serving | only in draft B | not found | 400 / 20 / 4 / 0 / 100 / 1170 / 21 / 2 / 1 / 35 |
| + Mashed Potatoes | 1 serving | only in draft B | not found | 340 / 19 / 10 / 0 / 40 / 790 / 37 / 4 / 2 / 5 |
| + Gravy | 1 serving | only in draft B | not found | 160 / 9 / 5 / 0 / 10 / 660 / 18 / 0 / 2 / 1 |
| Cowboy Pork Chops (where available) | 1 serving | only in draft B | not found | 400 / 25 / 9 / 0 / 100 / 2460 / 2 / 0 / 1 / 44 |
| 7-Pepper Crusted New York Strip | 14oz. | only in draft B | not found | 780 / 30 / 27 / 2 / 270 / 1110 / 30 / 2 / 0.5 / 70 |
| Flo's Filet | 6 oz. | only in draft B | not found | 330 / 15 / 5 / 0.5 / 115 / 330 / 2 / 0 / 0.5 / 37 |
| Flo's Filet | 9 oz. | only in draft B | not found | 450 / 19 / 7 / 1 / 170 / 480 / 3 / 0 / 1 / 56 |
| Outlaw Ribeye | 20 oz. | only in draft B | not found | 1250 / 87 / 38 / 4.5 / 310 / 1670 / 2 / 0 / 0 / 94 |
| Renegade Sirloin | 6 oz. | only in draft B | not found | 320 / 15 / 5 / 0.5 / 95 / 530 / 2 / 0 / 0 / 36 |
| Renegade Sirloin | 8 oz. | only in draft B | not found | 390 / 16 / 6 / 1 / 125 / 670 / 2 / 0 / 0 / 51 |
| Ribeye | 12 oz. | only in draft B | not found | 810 / 54 / 22 / 3 / 205 / 670 / 4 / 0 / 0 / 66 |
| New York Strip/Kansas City Strip | 12 oz. | only in draft B | not found | 630 / 33 / 13 / 2 / 175 / 1740 / 1 / 1 / 0.5 / 72 |
| Fire-Grilled T-Bone | 18 oz. | only in draft B | not found | 1130 / 62 / 24 / 4.5 / 285 / 2030 / 1 / 2 / 1 / 123 |
| The LongHorn® | 22 oz. | only in draft B | not found | 1280 / 67 / 27 / 5 / 365 / 2450 / 1 / 2 / 1 / 150 |
| Chicken Fried Steak (where available) | 1 serving | only in draft B | not found | 730 / 26 / 6 / 0 / 75 / 760 / 24 / 0 / 2 / 30 |
| LongHorn® Steak Tips (where available) | 1 serving | only in draft B | not found | 610 / 29 / 10 / 1 / 195 / 2490 / 14 / 0 / 12 / 74 |
| LongHorn® Churrasco Steak w/ Plantains (where available) | 1 serving | only in draft B | not found | 840 / 52 / 12 / 1 / 150 / 670 / 47 / 5 / 31 / 49 |
| Parmesan Cheese Crust | 1 serving | only in draft B | not found | 390 / 30 / 13 / 0.5 / 65 / 1020 / 12 / 2 / 2 / 17 |
| Grilled Mushrooms Only | 1 serving | only in draft B | not found | 150 / 12 / 8 / 0 / 30 / 480 / 9 / 3 / 6 / 6 |
| Redrock Grilled Shrimp | 1 serving | only in draft B | not found | 80 / 1.5 / 1 / 0 / 115 / 480 / 1 / 0 / 0 / 15 |
| Lobster Tail (where available) | 1 serving | only in draft B | not found | 90 / 3 / 1.5 / 0 / 110 / 590 / 0 / 0 / 0 / 14 |
| + Butter Sauce | 1 serving | only in draft B | not found | 210 / 22 / 14 / 1 / – / 260 / 2 / – / – / 0 |
| Grilled Jalapeños (where available) | 1 serving | only in draft B | not found | 15 / 3 / 1.5 / 0 / 110 / 590 / 0 / 0 / 0 / 14 |
| Parmesan Crusted Chicken | 9 oz. | only in draft B | not found | 650 / 36 / 15 / 0.5 / 205 / 1860 / 12 / 2 / 2 / 68 |
| Parmesan Crusted Chicken | 12 oz. | only in draft B | not found | 1120 / 69 / 28 / 1.5 / 320 / 3160 / 24 / 4 / 3 / 102 |
| + Bacon (Strip) | 1 serving | only in draft B | not found | 130 / 12 / 4.5 / 0 / 25 / 250 / 0 / 0 / 0 / 7 |
| Redrock Grilled Shrimp | 12 ct. | only in draft B | not found | 240 / 4.5 / 2.5 / 0 / 340 / 1440 / 3 / 1 / 0.5 / 46 |
| Honey Glazed Carrots | 1 serving | only in draft B | not found | 290 / 14 / 9 / 0.5 / 35 / 790 / 39 / 6 / 29 / 2 |
| Fresh Steamed Asparagus | 1 serving | only in draft B | not found | 130 / 7 / 1.5 / 0 / 2.5 / 15 / 9 / 5 / 3 / 8 |
| Steakhouse Mac & Cheese | 1 serving | only in draft B | not found | 610 / 37 / 22 / 1 / 120 / 1210 / 43 / 5 / 3 / 26 |
| Crispy Brussels Sprouts | 1 serving | only in draft B | not found | 310 / 23 / 9 / 0 / 35 / 590 / 27 / 5 / 17 / 5 |
| Plain Idaho® Baked Potato | 1 serving | only in draft B | not found | 290 / 2 / 0 / 0 / 0 / 2370 / 64 / 6 / 3 / 8 |
| Loaded Idaho® Baked Potato | 1 serving | only in draft B | not found | 470 / 20 / 12 / 0 / 55 / 2570 / 65 / 6 / 4 / 11 |
| Plain Sweet Potato | 1 serving | only in draft B | not found | 240 / 0 / 0 / 0 / 0 / 95 / 55 / 9 / 17 / 5 |
| Sweet Potato with Cinnamon Sugar & Butter | 1 serving | only in draft B | not found | 380 / 14 / 9 / 0 / 35 / 170 / 62 / 9 / 24 / 5 |
| Mashed Potatoes | 1 serving | only in draft B | not found | 340 / 19 / 10 / 0 / 40 / 790 / 37 / 4 / 2 / 5 |
| Seasoned Rice Pilaf | 1 serving | only in draft B | not found | 230 / 6 / 2 / 0 / 0 / 1120 / 41 / 0.5 / 4 / 3 |
| Fresh Steamed Broccoli | 1 serving | only in draft B | not found | 90 / 4 / 1 / 0 / 0 / 125 / 7 / 4 / 3 / 4 |
| Crispy Texas Okra (where available) | 1 serving | only in draft B | not found | 310 / 19 / 3.5 / 0 / 0 / 690 / 28 / 5 / 4 / 5 |
| Fried Okra (where available) | 1 serving | only in draft B | not found | 310 / 19 / 3.5 / 0 / 0 / 690 / 28 / 5 / 4 / 5 |
| Honey Wheat Bread | Full Loaf | only in draft B | not found | 480 / 7 / 1 / 0 / 0 / 920 / 88 / 2 / 8 / 16 |
| + Add Butter | 1 serving | only in draft B | not found | 120 / 13 / 8 / 0 / 35 / 80 / 0 / 0 / 0 / 0 |

## Spot check (4 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| THE Cheesecake with Pecans | 1 serving | 1370 / 82 / 37 / 0 / 180 / 970 / 117 / 4 / 79 / 18 |
| Mango Long Pour | 1 serving | 630 / 0 / 0 / 0 / 0 / 20 / 118 / 0 / 117 / 0 |
| Light Draft/Bottle Beer | 12 oz. | 100 / 0 / 0 / 0 / 0 / 15 / 6 / 0 / 0 / 0 |
| Red - Bottle | 1 serving | 660 / 0 / 0 / 0 / 0 / 0 / 21 / 0 / 0 / 0.5 |
