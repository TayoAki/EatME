# Arby's: lines for a person

Guide: https://assets.ctfassets.net/30q5w5l98nbx/42zLskOHOxnHbSVYO98X47/eb5b661b4d42295aaf804a8f6a150b13/Arbys_Nutritional_and_Allergen_OCT_2026.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (45)

Fix each line in `menus/arbys.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B |
| --- | --- | --- | --- | --- |
| Shirley 'n Cream | Small | only in draft A | 170 / 1.5 / 1 / 0 / 5 / 65 / 38 / 0 / 36 / 2 | not found |
| Shirley 'n Cream | Medium | only in draft A | 210 / 1.5 / 1 / 0 / 5 / 75 / 49 / 0 / 47 / 2 | not found |
| Shirley 'n Cream | Large | only in draft A | 300 / 1.5 / 1 / 0 / 5 / 105 / 71 / 0 / 69 / 2 | not found |
| Potato Cakes | (3) | only in draft A | 370 / 21 / 3 / 0 / 0 / 650 / 35 / 4 / 0 / 3 | not found |
| Potato Cakes | (4) | only in draft A | 490 / 28 / 4.5 / 0 / 0 / 860 / 46 / 5 / 0 / 4 | not found |
| Ketchup | Adds | only in draft A | 10 / 0 / 0 / 0 / 0 / 85 / 3 / 0 / 2 / 0 | not found |
| Chicken Slider | 79 g | differ: sugars_g | 230 / 9 / 2 / 0 / 25 / 620 / 25 / 1 / 11 / 11 | 230 / 9 / 2 / 0 / 25 / 620 / 25 / 1 / – / 11 |
| Ham Slider | 77 g | differ: protein_g | 170 / 6 / 2 / 0 / 25 / 600 / 19 / 0 / 4 / 4 | 170 / 6 / 2 / 0 / 25 / 600 / 19 / 0 / 4 / – |
| Buffalo Chicken Slider | 92 g | differ: protein_g | 260 / 12 / 2 / 0 / 25 / 910 / 26 / 1 / 3 / 3 | 260 / 12 / 2 / 0 / 25 / 910 / 26 / 1 / 3 / – |
| Ranch Chicken Wrap | 139 g | differ: sugars_g | 400 / 23 / 7 / 0 / 45 / 1000 / 32 / 1 / 16 / 16 | 400 / 23 / 7 / 0 / 45 / 1000 / 32 / 1 / – / 16 |
| Honey Mustard Chicken Wrap | 139 g | differ: protein_g | 380 / 21 / 7 / 0 / 35 / 990 / 34 / 1 / 3 / 3 | 380 / 21 / 7 / 0 / 35 / 990 / 34 / 1 / 3 / – |
| Curly Fries | Small | only in draft A | 250 / 13 / 2 / 0 / 0 / 570 / 29 / 3 / 3 / 3 | not found |
| Crinkle Fries | Small | only in draft A | 250 / 12 / 1.5 / 0 / 0 / 300 / 32 / 0 / 3 / 3 | not found |
| Apple Turnover | 128 g | differ: protein_g | 430 / 18 / 9 / 0 / 0 / 210 / 65 / 2 / 39 / 0 | 430 / 18 / 9 / 0 / 0 / 210 / 65 / 2 / 39 / – |
| Cherry Turnover | 128 g | differ: protein_g | 390 / 13 / 6 / 0 / 0 / 200 / 65 / 2 / 40 / 0 | 390 / 13 / 6 / 0 / 0 / 200 / 65 / 2 / 40 / – |
| Potato Cakes | (2) | only in draft A | 250 / 14 / 2 / 0 / 0 / 430 / 23 / 2 / 0 / 2 | not found |
| Shamrock Farms® Lowfat White Milk | 214 g | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 90 / 2 / 1.5 / 0 / 10 / 105 / 10 / 0 / 10 / 7 | 90 / 20 / 2 / 1.5 / 0 / 10 / 105 / 10 / 0 / 10 |
| Shamrock Farms® Lowfat Chocolate Milk | 218 g | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 150 / 2.5 / 1.5 / 0 / 10 / 170 / 26 / 1 / 23 / 7 | 150 / 20 / 2.5 / 1.5 / 0 / 10 / 170 / 26 / 1 / 23 |
| 1% Lowfat Milk | 8oz | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 110 / 2.5 / 1.5 / 0 / 10 / 110 / 12 / 0 / 12 / 8 | 110 / 25 / 2.5 / 1.5 / 0 / 10 / 110 / 12 / 0 / 12 |
| 1% Lowfat Chocolate Milk | 8oz | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 140 / 2.5 / 1.5 / 0 / 10 / 130 / 22 / 1 / 22 / 8 | 140 / 25 / 2.5 / 1.5 / 0 / 10 / 130 / 22 / 1 / 22 |
| Mello Yello® | Med | both read numbers that can't be right: sugars 54 g above carbs 0 g | 200 / 0 / 0 / 0 / 0 / 65 / 0 / 1 / 54 / 0 | 200 / 0 / 0 / 0 / 0 / 65 / 0 / 1 / 54 / 0 |
| Shamrock Farms® Lowfat White Milk | 1 serving | only in draft A | 90 / 2 / 1 / 0 / 10 / 105 / 10 / 0 / 10 / 7 | not found |
| Potato Cakes | 2 | only in draft A | 250 / 14 / 2 / 0 / 0 / 430 / 23 / 2 / 0 / 2 | not found |
| Potato Cakes | 3 | only in draft A | 370 / 21 / 3 / 0 / 0 / 650 / 35 / 4 / 0 / 3 | not found |
| Potato Cakes | 4 | only in draft A | 490 / 28 / 4.5 / 0 / 0 / 860 / 46 / 5 / 0 / 4 | not found |
| Ketchup Adds | 1 serving | only in draft A | 10 / 0 / 0 / 0 / 0 / 85 / 3 / 0 / 2 / 0 | not found |
| Shirley 'n Cream | Small (223 g) | only in draft B | not found | 170 / 13.5 / 1.5 / 1 / 0 / 65 / 5 / 38 / 0 / 36 |
| Shirley 'n Cream | Medium (288 g) | only in draft B | not found | 210 / 13.5 / 1.5 / 1 / 5 / 75 / 49 / 0 / 47 / 2 |
| Shirley 'n Cream | Large (458 g) | only in draft B | not found | 300 / 13.5 / 1.5 / 1 / 5 / 105 / 71 / 0 / 69 / 2 |
| Potato Cakes | 3 ct (150 g) | only in draft B | not found | 370 / 21 / 3 / 0 / 0 / 650 / 35 / 4 / 0 / 3 |
| Potato Cakes | 4 ct (200 g) | only in draft B | not found | 490 / 28 / 4.5 / 0 / 0 / 860 / 46 / 5 / 0 / 4 |
| Ketchup | 9 g | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 85 / 3 / 0 / 2 / 0 |
| Curly Fries | Small (77 g) | only in draft B | not found | 250 / 13 / 2 / 0 / 0 / 570 / 29 / 3 / – / 3 |
| Crinkle Fries | Small (91 g) | only in draft B | not found | 250 / 12 / 1.5 / 0 / 0 / 300 / 32 / 0 / – / 3 |
| Potato Cakes | 2 ct (100 g) | only in draft B | not found | 250 / 14 / 2 / 0 / 0 / 430 / 23 / 2 / 0 / 2 |
| Sprite | XL | only in draft B | not found | 250 / 0 / 0 / 0 / 0 / 130 / 68 / 1 / 68 / 0 |
| Dr Pepper | XL | only in draft B | not found | 350 / 0 / 0 / 0 / 0 / 105 / 95 / 0 / 93 / 0 |
| Diet Dr Pepper | XL | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 170 / 0 / 0 / 0 / 0 |
| Brewed Sweet Tea | XL | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 0 / 42 / 0 / 41 / 0 |
| Brewed Unsweet Tea | XL | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 0 / 2 / 0 / 0 / 0 |
| Shamrock Farms Lowfat White Milk | 214 | only in draft B | not found | 90 / 2 / 1.5 / 0 / 10 / 105 / 10 / 0 / 10 / 7 |
| Potato Cakes | 2 pc (100g) | only in draft B | not found | 250 / 14 / 2 / 0 / 0 / 430 / 23 / 2 / 0 / 2 |
| Potato Cakes | 3 pc (150g) | only in draft B | not found | 370 / 21 / 3 / 0 / 0 / 650 / 35 / 4 / 0 / 3 |
| Potato Cakes | 4 pc (200g) | only in draft B | not found | 490 / 28 / 4.5 / 0 / 0 / 860 / 46 / 5 / 0 / 4 |
| Ketchup Adds | 9 | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 85 / 3 / 0 / 2 / 0 |

## Spot check (9 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Classic Lemonade° | Small | 110 / 0 / 0 / 0 / 0 / 10 / 29 / 0 / 27 / 0 |
| Ham, Egg & Cheese Wrap | 1 serving | 400 / 21 / 8 / 0 / 165 / 1390 / 31 / 1 / 2 / 20 |
| Barbeque Dipping Sauce | Adds | 70 / 0 / 0 / 0 / 0 / 290 / 16 / 0 / 15 / 0 |
| Diet Coke® | Small | 0 / 0 / 0 / 0 / 0 / 40 / 0 / 1 / 0 / 0 |
| Classic Shirley Temple | Small (202 g) | 120 / 0 / 0 / 0 / 0 / 40 / 31 / 0 / 30 / 0 |
| Roast Beef Gyro | 1 serving | 540 / 29 / 7 / 1 / 60 / 1300 / 48 / 3 / 5 / 24 |
| Chicken Tenders | 5 ct (215 g) | 610 / 30 / 4.5 / 0 / 100 / 1990 / 47 / 3 / 0 / 39 |
| Brewed Sweet Tea | Large | 120 / 0 / 0 / 0 / 0 / 0 / 32 / 0 / 30 / 0 |
| Jalapeno Bites® | 5 ct (110 g) | 290 / 17 / 6 / 0 / 25 / 660 / 31 / 2 / 3 / 5 |
