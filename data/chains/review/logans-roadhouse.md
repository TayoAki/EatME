# Logan's Roadhouse: lines for a person

Guide: https://logans.wpenginepowered.com/wp-content/uploads/2026/06/LRH_Menu_Items_Nutritional_0526.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (40)

Fix each line in `menus/logans-roadhouse.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B |
| --- | --- | --- | --- | --- |
| French Dressing | 1.5 fl oz. | differ: cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g | 190 / 16 / 2.5 / 0 / 560 / 11 / 0 / 10 / 0 / 0 | 190 / 16 / 2.5 / 0 / – / 560 / 11 / 0 / 10 / 0 |
| Garlic Butter | 1 serving | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 140 / – / – / – / – / – / – / – / – / – | 140 / – / – / – / – / – / – / – / – / – |
| Brewski Onions® | 1 serving | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 40 / – / – / – / – / – / – / – / – / – | 40 / – / – / – / – / – / – / – / – / – |
| Roasted Jalapeños | 1 serving | differ: cholesterol_mg, sodium_mg, carbs_g, sugars_g, protein_g | 24 / 1 / 0 / 0 / 607 / 3 / 1 / 1 / 339 / 19 | 24 / 1 / 0 / 0 / – / 607 / 3 / 1 / 1 / – |
| Filet Mignon | 7 oz. | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 300 / – / – / – / – / – / – / – / – / – | 300 / – / – / – / – / – / – / – / – / – |
| Grilled Meatloaf | 1 serving | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 1200 / – / – / – / – / – / – / – / – / – | 1200 / – / – / – / – / – / – / – / – / – |
| Southern Peach Roadhouse Tea | 1 serving | differ: fat_g | 320 / 0 / 0 / 0 / 0 / 10 / 48 / 1 / 43 / 0 | 320 / 1 / 0 / 0 / 0 / 10 / 48 / 1 / 43 / 0 |
| Big Easy Blue Roadhouse Tea | 1 serving | differ: fat_g | 300 / 0 / 0 / 0 / 0 / 11 / 41 / 1 / 36 / 0 | 300 / 1 / 0 / 0 / 0 / 11 / 41 / 1 / 36 / 0 |
| Watermelon 'Rita | 1 serving | differ: fat_g | 330 / 0 / 0 / 0 / 0 / 256 / 49 / 0 / 47 / 0 | 330 / 0.2 / 0 / 0 / 0 / 256 / 49 / 0 / 47 / 0 |
| Roadhouse 'Rita, Frozen | 1 serving | both read numbers that can't be right: sugars 44 g above carbs 0 g | 470 / 0 / 0 / 0 / 0 / 49 / 0 / 0 / 44 / 0 | 470 / 0 / 0 / 0 / 0 / 49 / 0 / 0 / 44 / 0 |
| Top Shell 'Rita | 1 serving | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 330 / – / – / – / – / – / – / – / – / – | 330 / – / – / – / – / – / – / – / – / – |
| Rockin' Strawberry | 1 serving | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 260 / – / – / – / – / – / – / – / – / – | 260 / – / – / – / – / – / – / – / – / – |
| Blueberry Blues | 1 serving | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 230 / – / – / – / – / – / – / – / – / – | 230 / – / – / – / – / – / – / – / – / – |
| Pabst Blue Ribbon | 16oz. | only in draft A | 190 / 5 / 0 / 0 / 0 / 0 / 67 / 0 / 9 / 7 | not found |
| Jack Daniel's & Coke | 12 oz. | only in draft A | 140 / 0 / 0 / 0 / 23 / 19 / 0 / 0 / 19 / 0 | not found |
| Raspberry Lemon Fizz | 1 serving | differ: cholesterol_mg, sodium_mg, carbs_g | 260 / 0 / 0 / 0 / 20 / 34 / 0 / 0 / 28 / 0 | 260 / 0 / 0 / 0 / 0 / 20 / 34 / 0 / 28 / 0 |
| Cajun Chicken and Sausage Alfredo Pasta, Plating | 1 serving | only in draft B | not found | 1085 / 64 / 18 / 0 / 136 / 1759 / 64 / 4 / 12 / 60 |
| Lemon Herb Chicken Bowl | 1 serving | only in draft B | not found | 1679 / 78 / 29 / 0 / 122 / 3164 / 176 / 9 / 15 / 71 |
| Steak Tips | 1 serving | only in draft B | not found | 230 / 13 / 0 / 0 / 84 / 1127 / 2 / 0 / 0 / 4 |
| Smothered Steak Tips | 1 serving | only in draft B | not found | 320 / 62 / 20 / 2 / 85 / 2330 / 17 / 1 / 7 / 6 |
| Smothered Chopped Steak | 1 serving | only in draft B | not found | 830 / 62 / 20 / 2 / 141 / 3210 / 31 / 3 / 8 / 36 |
| Bayou Popcorn Shrimp w/Cocktail Sauce | 1 serving | only in draft B | not found | 490 / 21 / 4 / 0.5 / 155 / 1615 / 49 / 2 / 4 / 26 |
| BBQ Grilled Pork Chop | 1 serving | only in draft B | not found | 380 / 15 / 8 / 0 / 136 / 3043 / 9 / 2 / 5 / 47 |
| Kid's Roadies | 1 serving | only in draft B | not found | 370 / 20 / 8 / 0 / 48 / 1188 / 32 / 1 / 8 / 14 |
| Kid's Popcorn Shrimp | 1 serving | only in draft B | not found | 220 / 11 / 2 / 0.25 / 77 / 264 / 19 / 0.5 / 0 / 12 |
| Kid's Grilled Chicken | 1 serving | only in draft B | not found | 220 / 10 / 2.5 / 0 / 80 / 280 / 1 / 0 / 1 / 30 |
| Kids Pasta | 1 serving | only in draft B | not found | 520 / 5 / 0 / 0 / 0 / 796 / 105 / 7 / 16 / 17 |
| Kid's Macaroni & Cheese | 1 serving | only in draft B | not found | 290 / 17 / 10 / 0 / 45 / 850 / 24 / 1 / 1 / 10 |
| Kid's Chicken Tenders | 1 serving | only in draft B | not found | 700 / 24 / 5 / 2 / 45 / 1400 / 36 / 0 / 2 / 24 |
| Kid's Ribs | 1 serving | only in draft B | not found | 450 / – / – / – / – / – / – / – / – / – |
| Kid's Steak Tips | 1 serving | only in draft B | not found | 230 / 13 / 0 / 0 / 84 / 1127 / 2 / 0 / 0 / 4 |
| Kid's Roadhouse Rice | 1 serving | only in draft B | not found | 110 / 2 / 1 / 0 / 0 / 60 / 23 / 1 / 0 / 3 |
| Kid's Fries | 1 serving | only in draft B | not found | 284 / 13 / 3 / 0 / 0 / 535 / 40 / 3 / 1 / 3 |
| Kid's Corn | 1 serving | only in draft B | not found | 50 / 1 / 0 / 0 / 0 / 0 / 11 / 1 / 4 / 1 |
| Kid's Steamed Broccoli | 1 serving | only in draft B | not found | 160 / 15 / 5 / 0 / 2 / 162 / 6 / 3 / 2 / 3 |
| Kid's Cinnamon Apples | 1 serving | only in draft B | not found | 120 / 5 / 1 / 1 / 0 / 70 / 21 / 1 / 16 / 0 |
| Kid's Mashed Potatoes, Made In-House | 1 serving | only in draft B | not found | 130 / 13 / 5 / 1 / 2 / 499 / 21 / 1 / 1 / 2 |
| Kid's Green Beans | 1 serving | only in draft B | not found | 30 / 0 / 0 / 0 / 0 / 882 / 6 / 1 / 3 / 0 |
| Pabst Blue Ribbon | 16 oz. | only in draft B | not found | 190 / 0 / 5 / 0 / 0 / 0 / 67 / 0 / 9 / 7 |
| Jack Daniel's & Coke | 1 serving | only in draft B | not found | 140 / 0 / 0 / 0 / 0 / 23 / 19 / 0 / 19 / 0 |

## Spot check (8 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| All American Cheeseburger | 1 serving | 653 / 31 / 11 / 0 / 141 / 1970 / 45 / 2 / 10 / 48 |
| Corn | 1 serving | 100 / 1 / 0 / 0 / 0 / 0 / 21 / 1 / 8 / 3 |
| Country Fried Steak w/White Gravy | 1 serving | 920 / 63 / 17 / 1.5 / 85 / 2310 / 60 / 3 / 2 / 29 |
| Fall-off-the-Bone Ribs | Half Rack | 920 / 52 / 18 / 0 / 185 / 3520 / 59 / 1 / 51 / 51 |
| Loaded Baked Potato Soup, Plating | 1 serving | 416 / 27 / 11 / 0 / 32 / 871 / 32 / 2 / 6 / 9 |
| Original Roadies® | 1 serving | 970 / 45 / 16 / 1.5 / 134 / 2240 / 91 / 3.5 / 24 / 51 |
| Signature Hand-Cut Ribeye | 12 oz. | 720 / 69 / 27 / 7 / 195 / 1900 / 2 / 1 / 0 / 58 |
| Anything & Everything Salad without dressing | 1 serving | 680 / 39 / 12 / 0 / 380 / 1270 / 30 / 6 / 20 / 70 |
