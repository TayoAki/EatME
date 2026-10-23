# LongHorn Steakhouse: lines for a person

Guide: https://media.longhornsteakhouse.com/en_us/pdf/nutrition_allergen_guide.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (66)

Fix each line in `menus/longhorn-steakhouse.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B |
| --- | --- | --- | --- | --- |
| Texas Margarita | 1 serving | the guide gives no fiber_g, sugars_g | 200 / 0 / 0 / 0 / – / 990 / 28 / – / – / 0 | 200 / 0 / 0 / 0 / – / 990 / 28 / – / – / 0 |
| The Perfect | 1 serving | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 290 / – / – / – / – / 10 / 46 / – / 45 / – | 290 / – / – / – / – / 10 / 46 / – / 45 / – |
| Lemondrop Martini | 1 serving | the guide gives no fiber_g | 250 / 0 / 0 / 0 / – / 5 / 36 / – / 30 / 0 | 250 / 0 / 0 / 0 / – / 5 / 36 / – / 30 / 0 |
| Light Draft Beer | 20 oz. | differ: fiber_g, sugars_g | 170 / 0 / 0 / 0 / 0 / 25 / 10 / 0.5 / 1 / 1 | 170 / 0 / 0 / 0 / 0 / 25 / 10 / 0 / 0.5 / 1 |
| Cider Draft | 16 oz. | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 270 / – / – / – / – / – / – / – / – / – | 270 / – / – / – / – / – / – / – / – / – |
| Cider Draft | 20 oz. | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 330 / – / – / – / – / – / – / – / – / – | 330 / – / – / – / – / – / – / – / – / – |
| IPA Draft | 16 oz. | the guide gives no fat_g, saturated_fat_g, fiber_g, sugars_g | 270 / – / – / – / – / 20 / 1 / – / – / 4 | 270 / – / – / – / – / 20 / 1 / – / – / 4 |
| IPA Draft | 20 oz. | the guide gives no fat_g, saturated_fat_g, fiber_g, sugars_g | 340 / – / – / – / – / 25 / 2 / – / – / 5 | 340 / – / – / – / – / 25 / 2 / – / – / 5 |
| IPA Bottle (where available) | 1 serving | the guide gives no fat_g, saturated_fat_g, fiber_g, sugars_g | 210 / – / – / – / – / 15 / 0.5 / – / – / 3 | 210 / – / – / – / – / 15 / 0.5 / – / – / 3 |
| White - Glass | 1 serving | only in draft A | 150 / 0 / 0 / 0 / 0 / 10 / 4 / 0 / 2 / 0 | not found |
| White - LongPour | 1 serving | only in draft A | 220 / 0 / 0 / 0 / 0 / 15 / 6 / 0 / 3 / 0 | not found |
| White - Bottle | 1 serving | only in draft A | 630 / 0 / 0 / 0 / 0 / 35 / 16 / 0 / 7 / 0.5 | not found |
| Red - Glass | 1 serving | only in draft A | 160 / 0 / 0 / 0 / 0 / 0 / 5 / 0 / 0 / 0 | not found |
| Red - LongPour | 1 serving | only in draft A | 230 / 0 / 0 / 0 / 0 / 0 / 8 / 0 / 0 / 0 | not found |
| Red - Bottle | 1 serving | only in draft A | 660 / 0 / 0 / 0 / 0 / 0 / 21 / 0 / 0 / 0.5 | not found |
| Coke | 1 serving | the guide gives no saturated_fat_g, fiber_g, protein_g | 140 / 0 / – / – / – / 45 / 39 / – / 39 / – | 140 / 0 / – / – / – / 45 / 39 / – / 39 / – |
| Sprite | 1 serving | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 140 / – / – / – / – / 65 / 38 / – / 38 / – | 140 / – / – / – / – / 65 / 38 / – / 38 / – |
| Pibb Xtra | 1 serving | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 140 / – / – / – / – / 40 / 39 / – / 39 / – | 140 / – / – / – / – / 40 / 39 / – / 39 / – |
| Kid's Sirloin Steak | 1 serving | the guide gives no fiber_g | 240 / 16 / 3 / 0 / 65 / 390 / 1 / – / 0 / 24 | 240 / 16 / 3 / 0 / 65 / 390 / 1 / – / 0 / 24 |
| Kid's Fountain Drink | 1 serving | the guide gives no saturated_fat_g, fiber_g, protein_g | 110 / 0 / – / – / – / 35 / 29 / – / 29 / – | 110 / 0 / – / – / – / 35 / 29 / – / 29 / – |
| White Wine | Glass | only in draft B | not found | 150 / 0 / 0 / 0 / 0 / 10 / 4 / 0 / 2 / 0 |
| White Wine | LongPour | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 15 / 6 / 0 / 3 / 0 |
| White Wine | Bottle | only in draft B | not found | 630 / 0 / 0 / 0 / 0 / 35 / 16 / 0 / 7 / 0.5 |
| Red Wine | Glass | only in draft B | not found | 160 / 0 / 0 / 0 / 0 / 0 / 5 / 0 / 0 / 0 |
| Red Wine | LongPour | only in draft B | not found | 230 / 0 / 0 / 0 / 0 / 0 / 8 / 0 / 0 / 0 |
| Red Wine | Bottle | only in draft B | not found | 660 / 0 / 0 / 0 / 0 / 0 / 21 / 0 / 0 / 0.5 |
| 7-Pepper Crusted New York Strip | 14 oz. | only in draft B | not found | 780 / 30 / 27 / 2 / 270 / 1110 / 30 / 2 / 0.5 / 70 |
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
| Lobster Tail | 1 serving | only in draft B | not found | 90 / 3 / 1.5 / 0 / 110 / 590 / 0 / 0 / 0 / 14 |
| + Butter Sauce | 1 serving | only in draft B | not found | 210 / 22 / 14 / 1 / – / 260 / 2 / – / – / 0 |
| Grilled Jalapeños (where available) | 1 serving | only in draft B | not found | 15 / 3 / 1.5 / 0 / 110 / 590 / 0 / 0 / 0 / 14 |
| Parmesan Crusted Chicken | 9 oz. | only in draft B | not found | 650 / 36 / 15 / 0.5 / 205 / 1860 / 12 / 2 / 2 / 68 |
| Parmesan Crusted Chicken | 12 oz. | only in draft B | not found | 1120 / 69 / 28 / 1.5 / 320 / 3160 / 24 / 4 / 3 / 102 |
| Baby Back Ribs - Half-Rack | 1 serving | only in draft B | not found | 820 / 56 / 21 / 0 / 255 / 740 / 16 / 1 / 15 / 62 |
| Baby Back Ribs - Full-Rack | 1 serving | only in draft B | not found | 1270 / 87 / 33 / 0 / 395 / 1150 / 25 / 2 / 24 / 96 |
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
| Bacon | Strip | only in draft B | not found | 130 / 12 / 4.5 / 0 / 25 / 250 / 0 / 0 / 0 / 7 |

## Spot check (7 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Spicy Chicken Bites (where available) | 1 serving | 740 / 39 / 7 / 0 / 110 / 1420 / 53 / 0 / 17 / 43 |
| THE Cheesecake with Pecans | 1 serving | 1370 / 82 / 37 / 0 / 180 / 970 / 117 / 4 / 79 / 18 |
| Mango Long Pour | 1 serving | 630 / 0 / 0 / 0 / 0 / 20 / 118 / 0 / 117 / 0 |
| Light Draft/Bottle Beer | 12 oz. | 100 / 0 / 0 / 0 / 0 / 15 / 6 / 0 / 0 / 0 |
| Seasoned French Fries | 1 serving | 500 / 23 / 2 / 0 / 0 / 1280 / 67 / 0 / 1 / 6 |
| Thousand Island | 1.5 oz. | 190 / 19 / 3 / 0 / 10 / 300 / 5 / 0 / 4 / 0 |
| Crispy Buttermilk Chicken Sandwich | 6 oz | 1080 / 72 / 12.5 / 0 / 140 / 2325 / 67 / 5 / 9 / 44 |
