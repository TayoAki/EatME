# Cafe Rio Mexican Grill: lines for a person

Guide: https://assets.trinitip.caferio-core.com/5fc18ec8aa3c03000910c905/635fd8e1f2751f0008cf4c0b/NutritionWebUpdate8.5x11printable.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (23)

Fix each line in `menus/cafe-rio-mexican-grill.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B |
| --- | --- | --- | --- | --- |
| Coconut Shrimp | 4oz | differ: fat_g, saturated_fat_g | 230 / 7 / 3 / 0 / 46 / 135 / 32 / 2 / 6 / 10 | 230 / 11 / 7 / 0 / 46 / 135 / 32 / 2 / 6 / 10 |
| Fire-Grilled Chicken | 2oz | differ: fat_g, saturated_fat_g | 80 / 2 / 0 / 0 / 40 / 125 / 0 / 0 / 0 / 14 | 80 / 15 / 2 / 0 / 40 / 125 / 0 / 0 / 0 / 14 |
| Fire-Grilled Steak | 2oz | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, protein_g | 120 / 6 / 2 / 0 / 40 / 45 / 1 / 0 / 0 / 14 | 120 / 50 / 6 / 2 / 0 / 40 / 45 / 1 / 0 / 0 |
| Pollo Asado | 2oz | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 110 / 4.5 / 1 / 0 / 65 / 180 / 2 / 0 / 2 / 12 | 110 / 40 / 4.5 / 1 / 0 / 65 / 180 / 2 / 0 / 2 |
| Shredded Chicken Breast | 2oz | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g | 80 / 4.5 / 1.5 / 0 / 25 / 440 / 1 / 0 / 1 / 8 | 80 / 40 / 4.5 / 1.5 / 0 / 25 / 440 / 1 / 0 / 8 |
| Sweet Pork Barbacoa | 2oz | differ: fat_g, saturated_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 70 / 2 / 0.5 / 0 / 15 / 130 / 10 / 0 / 9 / 4 | 70 / 15 / 2 / 0 / 0.5 / 15 / 130 / 10 / 0 / 9 |
| Cilantro Lime Dressing | 1.5floz | differ: fat_g, saturated_fat_g | 130 / 2 / 0 / 0 / 0 / 320 / 11 / 0 / 9 / 0 | 130 / 15 / 2 / 0 / 0 / 320 / 11 / 0 / 9 / 0 |
| Creamy Tomatillo Dressing | 1.5floz | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 150 / 15 / 2.5 / 0 / 10 / 210 / 3 / 0 / 2 / 1 | 150 / 130 / 15 / 2.5 / 0 / 10 / 210 / 3 / 0 / 2 |
| Green Chile Sauce (Med) | 2floz | differ: fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 40 / 0.5 / 0 / 0 / 0 / 330 / 9 / 1 / 5 / 1 | 40 / 5 / 0.5 / 0 / 0 / 0 / 330 / 9 / 1 / 5 |
| Mango Salsa | 2floz | differ: fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 35 / 0 / 0 / 0 / 0 / 200 / 6 / 1 / 4 / 1 | 35 / 2 / 0 / 0 / 0 / 0 / 200 / 6 / 1 / 4 |
| Red Chile Sauce (Hot) | 2floz | differ: fat_g, saturated_fat_g, trans_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 45 / 2.5 / 1 / 0 / 0 / 350 / 5 / 0 / 2 / 1 | 45 / 20 / 2.5 / 1 / 0 / 0 / 350 / 5 / 0 / 2 |
| Habanero (Hottest) | 2floz | differ: fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 30 / 2 / 0 / 0 / 0 / 190 / 5 / 1 / 2 / 1 | 30 / 10 / 2 / 0 / 0 / 0 / 190 / 5 / 1 / 2 |
| Tomatillo Sauce (Mild) | 2floz | differ: fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, protein_g | 25 / 1 / 0 / 0 / 0 / 160 / 3 / 1 / 1 / 0 | 25 / 10 / 1 / 0 / 0 / 0 / 160 / 3 / 1 / 1 |
| Cheddar Jack Blend | 2oz | differ: fat_g, saturated_fat_g | 220 / 18 / 11 / 0 / 55 / 360 / 1 / 0 / 0 / 13 | 220 / 160 / 18 / 0 / 55 / 360 / 1 / 0 / 0 / 13 |
| Cotija Cheese | 2.5oz | differ: fat_g, saturated_fat_g, cholesterol_mg, sodium_mg, carbs_g, protein_g | 25 / 2 / 1 / 0 / 5 / 100 / 0 / 0 / 0 / 1 | 25 / 20 / 2 / 0 / 1 / 5 / 100 / 0 / 0 / 0 |
| Guacamole | 1 oz | differ: fat_g, saturated_fat_g, sodium_mg, carbs_g, sugars_g, protein_g | 40 / 3.5 / 0 / 0 / 0 / 160 / 2 / 2 / 0 / 1 | 40 / 30 / 3.5 / 0 / 0 / 0 / 160 / 2 / 2 / 0 |
| Queso | 3floz | differ: fat_g | 130 / 9 / 6 / 0 / 25 / 550 / 6 / 1 / 4 / 5 | 130 / 80 / 6 / 0 / 25 / 550 / 6 / 1 / 4 / 5 |
| Shredded Jack Cheese | 2oz | differ: fat_g | 210 / 17 / 11 / 0 / 50 / 340 / 0 / 0 / 0 / 14 | 210 / 150 / 11 / 0 / 50 / 340 / 0 / 0 / 0 / 14 |
| Sour Cream | 1oz | differ: fat_g | 60 / 5 / 3.5 / 0 / 20 / 15 / 1 / 0 / 1 / 1 | 60 / 45 / 3.5 / 0 / 20 / 15 / 1 / 0 / 1 / 1 |
| Tortilla Soup with Tortilla Strips | 1ea | differ: fat_g | 380 / 18 / 7 / 0 / 65 / 2070 / 30 / 5 / 4 / 24 | 380 / 160 / 7 / 0 / 65 / 2070 / 30 / 5 / 4 / 24 |
| Fresh Lime Pie | 1ea | differ: fat_g | 870 / 29 / 13 / 0 / 145 / 380 / 137 / 1 / 125 / 20 | 870 / 260 / 13 / 0 / 145 / 380 / 137 / 1 / 125 / 20 |
| Horchata | 3floz | differ: fat_g, saturated_fat_g | 80 / 1.5 / 1 / 0 / 5 / 20 / 15 / 0 / 12 / 2 | 80 / 10 / 1.5 / 0 / 5 / 20 / 15 / 0 / 12 / 2 |
| Tres Leches | 1ea | differ: fat_g, saturated_fat_g, cholesterol_mg, sodium_mg, carbs_g, sugars_g | 240 / 3.5 / 1.5 / 0 / 105 / 180 / 47 / 1 / 30 / 6 | 240 / 30 / 3.5 / 0 / 1.5 / 105 / 180 / 1 / 47 / 6 |

## Spot check (3 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Chile Roast Beef | 2oz | 90 / 6 / 2 / 0 / 20 / 90 / 1 / 0 / 1 / 7 |
| 12 inch Wheat Tortilla | 1ea | 390 / 14 / 6 / 0 / 0 / 5 / 58 / 1 / 4 / 10 |
| Mint Limeade | 3floz | 45 / 0 / 0 / 0 / 0 / 0 / 12 / 0 / 12 / 0 |
