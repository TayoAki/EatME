# LongHorn Steakhouse: lines for a person

Guide: https://media.longhornsteakhouse.com/en_us/pdf/nutrition_allergen_guide.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (68)

The last column comes from `npm run chains:evidence`: whether a draft's numbers sit right after the item's name in the guide text the drafts read. It can't read sizes or sections (one draft called a single 78 g cookie a "6 pack"): check those against the guide, then fix the line and set its check to `person`.

Fix each line in `menus/longhorn-steakhouse.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B | In the guide text (no AI) |
| --- | --- | --- | --- | --- | --- |
| Texas Margarita | 1 serving | the guide gives no fiber_g, sugars_g | 200 / 0 / 0 / 0 / – / 990 / 28 / – / – / 0 | 200 / 0 / 0 / 0 / – / 990 / 28 / – / – / 0 | A: numbers found after the name (line 36); check the size; B: numbers found after the name (line 36); check the size |
| The Perfect | 1 serving | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 290 / – / – / – / – / 10 / 46 / – / 45 / – | 290 / – / – / – / – / 10 / 46 / – / 45 / – | A: numbers found after the name (line 39); check the size; B: numbers found after the name (line 39); check the size |
| Lemondrop Martini | 1 serving | the guide gives no fiber_g | 250 / 0 / 0 / 0 / – / 5 / 36 / – / 30 / 0 | 250 / 0 / 0 / 0 / – / 5 / 36 / – / 30 / 0 | A: numbers found after the name (line 49); check the size; B: numbers found after the name (line 49); check the size |
| Light Draft Beer | 20 oz. | differ: fiber_g, sugars_g | 170 / 0 / 0 / 0 / 0 / 25 / 10 / 0.5 / 1 / 1 | 170 / 0 / 0 / 0 / 0 / 25 / 10 / 0 / 0.5 / 1 | A: not as drafted (line 63 lacks 1); B: numbers found after the name (line 63); check the size |
| Cider Draft | 16 oz. | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 270 / – / – / – / – / – / – / – / – / – | 270 / – / – / – / – / – / – / – / – / – | A: numbers found after the name (line 64); check the size, mostly zeros: look; B: numbers found after the name (line 64); check the size, mostly zeros: look |
| Cider Draft | 20 oz. | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 330 / – / – / – / – / – / – / – / – / – | 330 / – / – / – / – / – / – / – / – / – | A: numbers found after the name (line 64); check the size, mostly zeros: look; B: numbers found after the name (line 64); check the size, mostly zeros: look |
| IPA Draft | 16 oz. | the guide gives no fat_g, saturated_fat_g, fiber_g, sugars_g | 270 / – / – / – / – / 20 / 1 / – / – / 4 | 270 / – / – / – / – / 20 / 1 / – / – / 4 | A: numbers found after the name (line 67); check the size; B: numbers found after the name (line 67); check the size |
| IPA Draft | 20 oz. | the guide gives no fat_g, saturated_fat_g, fiber_g, sugars_g | 340 / – / – / – / – / 25 / 2 / – / – / 5 | 340 / – / – / – / – / 25 / 2 / – / – / 5 | A: numbers found after the name (line 68); check the size; B: numbers found after the name (line 68); check the size |
| IPA Bottle (where available) | 1 serving | the guide gives no fat_g, saturated_fat_g, fiber_g, sugars_g | 210 / – / – / – / – / 15 / 0.5 / – / – / 3 | 210 / – / – / – / – / 15 / 0.5 / – / – / 3 | A: numbers found after the name (line 69); check the size; B: numbers found after the name (line 69); check the size |
| White - Glass | 1 serving | only in draft A | 150 / 0 / 0 / 0 / 0 / 10 / 4 / 0 / 2 / 0 | not found | A: numbers found after the name (line 72); check the size |
| White - LongPour | 1 serving | only in draft A | 220 / 0 / 0 / 0 / 0 / 15 / 6 / 0 / 3 / 0 | not found | A: numbers found after the name (line 73); check the size |
| White - Bottle | 1 serving | only in draft A | 630 / 0 / 0 / 0 / 0 / 35 / 16 / 0 / 7 / 0.5 | not found | A: numbers found after the name (line 74); check the size |
| Red - Glass | 1 serving | only in draft A | 160 / 0 / 0 / 0 / 0 / 0 / 5 / 0 / 0 / 0 | not found | A: numbers found after the name (line 75); check the size, mostly zeros: look |
| Red - LongPour | 1 serving | only in draft A | 230 / 0 / 0 / 0 / 0 / 0 / 8 / 0 / 0 / 0 | not found | A: numbers found after the name (line 76); check the size, mostly zeros: look |
| Red - Bottle | 1 serving | only in draft A | 660 / 0 / 0 / 0 / 0 / 0 / 21 / 0 / 0 / 0.5 | not found | A: numbers found after the name (line 77); check the size |
| Coke | 1 serving | the guide gives no saturated_fat_g, fiber_g, protein_g | 140 / 0 / – / – / – / 45 / 39 / – / 39 / – | 140 / 0 / – / – / – / 45 / 39 / – / 39 / – | A: numbers found after the name (line 89); check the size; B: numbers found after the name (line 89); check the size |
| Sprite | 1 serving | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 140 / – / – / – / – / 65 / 38 / – / 38 / – | 140 / – / – / – / – / 65 / 38 / – / 38 / – | A: numbers found after the name (line 91); check the size; B: numbers found after the name (line 91); check the size |
| Pibb Xtra | 1 serving | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 140 / – / – / – / – / 40 / 39 / – / 39 / – | 140 / – / – / – / – / 40 / 39 / – / 39 / – | A: numbers found after the name (line 92); check the size; B: numbers found after the name (line 92); check the size |
| Kid's Sirloin Steak | 1 serving | the guide gives no fiber_g | 240 / 16 / 3 / 0 / 65 / 390 / 1 / – / 0 / 24 | 240 / 16 / 3 / 0 / 65 / 390 / 1 / – / 0 / 24 | A: numbers found after the name (line 342); check the size; B: numbers found after the name (line 342); check the size |
| Kid's Fountain Drink | 1 serving | the guide gives no saturated_fat_g, fiber_g, protein_g | 110 / 0 / – / – / – / 35 / 29 / – / 29 / – | 110 / 0 / – / – / – / 35 / 29 / – / 29 / – | A: numbers found after the name (line 348); check the size; B: numbers found after the name (line 348); check the size |
| White Wine | Glass | only in draft B | not found | 150 / 0 / 0 / 0 / 0 / 10 / 4 / 0 / 2 / 0 | B: name not in the guide text |
| White Wine | LongPour | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 15 / 6 / 0 / 3 / 0 | B: name not in the guide text |
| White Wine | Bottle | only in draft B | not found | 630 / 0 / 0 / 0 / 0 / 35 / 16 / 0 / 7 / 0.5 | B: name not in the guide text |
| Red Wine | Glass | only in draft B | not found | 160 / 0 / 0 / 0 / 0 / 0 / 5 / 0 / 0 / 0 | B: name not in the guide text |
| Red Wine | LongPour | only in draft B | not found | 230 / 0 / 0 / 0 / 0 / 0 / 8 / 0 / 0 / 0 | B: name not in the guide text |
| Red Wine | Bottle | only in draft B | not found | 660 / 0 / 0 / 0 / 0 / 0 / 21 / 0 / 0 / 0.5 | B: name not in the guide text |
| 7-Pepper Crusted New York Strip | 14 oz. | only in draft B | not found | 780 / 30 / 27 / 2 / 270 / 1110 / 30 / 2 / 0.5 / 70 | B: numbers found after the name (line 214); check the size |
| Flo's Filet | 6 oz. | only in draft B | not found | 330 / 15 / 5 / 0.5 / 115 / 330 / 2 / 0 / 0.5 / 37 | B: numbers found after the name (line 215); check the size |
| Flo's Filet | 9 oz. | only in draft B | not found | 450 / 19 / 7 / 1 / 170 / 480 / 3 / 0 / 1 / 56 | B: numbers found after the name (line 216); check the size |
| Outlaw Ribeye | 20 oz. | only in draft B | not found | 1250 / 87 / 38 / 4.5 / 310 / 1670 / 2 / 0 / 0 / 94 | B: numbers found after the name (line 217); check the size |
| Renegade Sirloin | 6 oz. | only in draft B | not found | 320 / 15 / 5 / 0.5 / 95 / 530 / 2 / 0 / 0 / 36 | B: numbers found after the name (line 218); check the size |
| Renegade Sirloin | 8 oz. | only in draft B | not found | 390 / 16 / 6 / 1 / 125 / 670 / 2 / 0 / 0 / 51 | B: numbers found after the name (line 219); check the size |
| Ribeye | 12 oz. | only in draft B | not found | 810 / 54 / 22 / 3 / 205 / 670 / 4 / 0 / 0 / 66 | B: numbers found after the name (line 220); check the size |
| New York Strip/Kansas City Strip | 12 oz. | only in draft B | not found | 630 / 33 / 13 / 2 / 175 / 1740 / 1 / 1 / 0.5 / 72 | B: numbers found after the name (line 221); check the size |
| Fire-Grilled T-Bone | 18 oz. | only in draft B | not found | 1130 / 62 / 24 / 4.5 / 285 / 2030 / 1 / 2 / 1 / 123 | B: numbers found after the name (line 222); check the size |
| The LongHorn® | 22 oz. | only in draft B | not found | 1280 / 67 / 27 / 5 / 365 / 2450 / 1 / 2 / 1 / 150 | B: numbers found after the name (line 223); check the size |
| Chicken Fried Steak (where available) | 1 serving | only in draft B | not found | 730 / 26 / 6 / 0 / 75 / 760 / 24 / 0 / 2 / 30 | B: numbers found after the name (line 224); check the size |
| LongHorn® Steak Tips (where available) | 1 serving | only in draft B | not found | 610 / 29 / 10 / 1 / 195 / 2490 / 14 / 0 / 12 / 74 | B: numbers found after the name (line 227); check the size |
| LongHorn® Churrasco Steak w/ Plantains (where available) | 1 serving | only in draft B | not found | 840 / 52 / 12 / 1 / 150 / 670 / 47 / 5 / 31 / 49 | B: numbers found after the name (line 228); check the size |
| Parmesan Cheese Crust | 1 serving | only in draft B | not found | 390 / 30 / 13 / 0.5 / 65 / 1020 / 12 / 2 / 2 / 17 | B: numbers found after the name (line 271); check the size |
| Grilled Mushrooms Only | 1 serving | only in draft B | not found | 150 / 12 / 8 / 0 / 30 / 480 / 9 / 3 / 6 / 6 | B: numbers found after the name (line 272); check the size |
| Redrock Grilled Shrimp | 1 serving | only in draft B | not found | 80 / 1.5 / 1 / 0 / 115 / 480 / 1 / 0 / 0 / 15 | B: numbers found after the name (line 273); check the size |
| Lobster Tail | 1 serving | only in draft B | not found | 90 / 3 / 1.5 / 0 / 110 / 590 / 0 / 0 / 0 / 14 | B: numbers found after the name (line 276); check the size |
| + Butter Sauce | 1 serving | only in draft B | not found | 210 / 22 / 14 / 1 / – / 260 / 2 / – / – / 0 | B: numbers found after the name (line 264); check the size |
| Grilled Jalapeños (where available) | 1 serving | only in draft B | not found | 15 / 3 / 1.5 / 0 / 110 / 590 / 0 / 0 / 0 / 14 | B: numbers found after the name (line 279); check the size |
| Parmesan Crusted Chicken | 9 oz. | only in draft B | not found | 650 / 36 / 15 / 0.5 / 205 / 1860 / 12 / 2 / 2 / 68 | B: numbers found after the name (line 190); check the size |
| Parmesan Crusted Chicken | 12 oz. | only in draft B | not found | 1120 / 69 / 28 / 1.5 / 320 / 3160 / 24 / 4 / 3 / 102 | B: numbers found after the name (line 191); check the size |
| Baby Back Ribs - Half-Rack | 1 serving | only in draft B | not found | 820 / 56 / 21 / 0 / 255 / 740 / 16 / 1 / 15 / 62 | B: numbers found after the name (line 290); check the size |
| Baby Back Ribs - Full-Rack | 1 serving | only in draft B | not found | 1270 / 87 / 33 / 0 / 395 / 1150 / 25 / 2 / 24 / 96 | B: numbers found after the name (line 292); check the size |
| Redrock Grilled Shrimp | 12 ct. | only in draft B | not found | 240 / 4.5 / 2.5 / 0 / 340 / 1440 / 3 / 1 / 0.5 / 46 | B: numbers found after the name (line 307); check the size |
| Honey Glazed Carrots | 1 serving | only in draft B | not found | 290 / 14 / 9 / 0.5 / 35 / 790 / 39 / 6 / 29 / 2 | B: not as drafted (line 315 lacks 0.5) |
| Fresh Steamed Asparagus | 1 serving | only in draft B | not found | 130 / 7 / 1.5 / 0 / 2.5 / 15 / 9 / 5 / 3 / 8 | B: numbers found after the name (line 316); check the size |
| Steakhouse Mac & Cheese | 1 serving | only in draft B | not found | 610 / 37 / 22 / 1 / 120 / 1210 / 43 / 5 / 3 / 26 | B: numbers found after the name (line 317); check the size |
| Crispy Brussels Sprouts | 1 serving | only in draft B | not found | 310 / 23 / 9 / 0 / 35 / 590 / 27 / 5 / 17 / 5 | B: numbers found after the name (line 318); check the size |
| Plain Idaho® Baked Potato | 1 serving | only in draft B | not found | 290 / 2 / 0 / 0 / 0 / 2370 / 64 / 6 / 3 / 8 | B: numbers found after the name (line 319); check the size |
| Loaded Idaho® Baked Potato | 1 serving | only in draft B | not found | 470 / 20 / 12 / 0 / 55 / 2570 / 65 / 6 / 4 / 11 | B: numbers found after the name (line 320); check the size |
| Plain Sweet Potato | 1 serving | only in draft B | not found | 240 / 0 / 0 / 0 / 0 / 95 / 55 / 9 / 17 / 5 | B: numbers found after the name (line 321); check the size |
| Sweet Potato with Cinnamon Sugar & Butter | 1 serving | only in draft B | not found | 380 / 14 / 9 / 0 / 35 / 170 / 62 / 9 / 24 / 5 | B: numbers found after the name (line 322); check the size |
| Mashed Potatoes | 1 serving | only in draft B | not found | 340 / 19 / 10 / 0 / 40 / 790 / 37 / 4 / 2 / 5 | B: numbers found after the name (line 205); check the size |
| Seasoned Rice Pilaf | 1 serving | only in draft B | not found | 230 / 6 / 2 / 0 / 0 / 1120 / 41 / 0.5 / 4 / 3 | B: numbers found after the name (line 325); check the size |
| Fresh Steamed Broccoli | 1 serving | only in draft B | not found | 90 / 4 / 1 / 0 / 0 / 125 / 7 / 4 / 3 / 4 | B: numbers found after the name (line 326); check the size |
| Crispy Texas Okra (where available) | 1 serving | only in draft B | not found | 310 / 19 / 3.5 / 0 / 0 / 690 / 28 / 5 / 4 / 5 | B: numbers found after the name (line 328); check the size |
| Fried Okra (where available) | 1 serving | only in draft B | not found | 310 / 19 / 3.5 / 0 / 0 / 690 / 28 / 5 / 4 / 5 | B: numbers found after the name (line 329); check the size |
| Honey Wheat Bread | Full Loaf | only in draft B | not found | 480 / 7 / 1 / 0 / 0 / 920 / 88 / 2 / 8 / 16 | B: numbers found after the name (line 330); check the size |
| + Add Butter | 1 serving | only in draft B | not found | 120 / 13 / 8 / 0 / 35 / 80 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 331); check the size |
| Bacon | Strip | only in draft B | not found | 130 / 12 / 4.5 / 0 / 25 / 250 / 0 / 0 / 0 / 7 | B: numbers found after the name (line 296); check the size |
| Raspberry Lemonade | 1 serving | both read it the same, but its protein, carbs and fat make 204 kcal, not 170 | 170 / 0 / 0 / 0 / 0 / 0 / 41 / 0 / 39 / 10 | 170 / 0 / 0 / 0 / 0 / 0 / 41 / 0 / 39 / 10 | A: numbers found after the name (line 86); check the size; B: numbers found after the name (line 86); check the size |
| + Avocado-Lime Sauce | 1 serving | both read it the same, but its protein, carbs and fat make 223 kcal, not 170 | 170 / 23 / 3.5 / 0 / 15 / 450 / 3 / 0.5 / 2 / 1 | 170 / 23 / 3.5 / 0 / 15 / 450 / 3 / 0.5 / 2 / 1 | A: numbers found after the name (line 115); check the size; B: numbers found after the name (line 115); check the size |

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
