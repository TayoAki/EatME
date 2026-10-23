# Arby's: lines for a person

Guide: https://assets.ctfassets.net/30q5w5l98nbx/42zLskOHOxnHbSVYO98X47/eb5b661b4d42295aaf804a8f6a150b13/Arbys_Nutritional_and_Allergen_OCT_2026.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (59)

Fix each line in `menus/arbys.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B |
| --- | --- | --- | --- | --- |
| Shirley 'n Cream | Small | only in draft A | 170 / 1.5 / 1 / 0 / 5 / 65 / 38 / 0 / 36 / 2 | not found |
| Shirley 'n Cream | Medium | only in draft A | 210 / 1.5 / 1 / 0 / 5 / 75 / 49 / 0 / 47 / 2 | not found |
| Shirley 'n Cream | Large | only in draft A | 300 / 1.5 / 1 / 0 / 5 / 105 / 71 / 0 / 69 / 2 | not found |
| Buffalo Dipping Sauce | Adds | only in draft A | 10 / 1 / 0 / 0 / 0 / 720 / 2 / 0 / 0 / 0 | not found |
| Potato Cakes | (3) | only in draft A | 370 / 21 / 3 / 0 / 0 / 650 / 35 / 4 / 0 / 3 | not found |
| Potato Cakes | (4) | only in draft A | 490 / 28 / 4.5 / 0 / 0 / 860 / 46 / 5 / 0 / 4 | not found |
| Ketchup | Adds | only in draft A | 10 / 0 / 0 / 0 / 0 / 85 / 3 / 0 / 2 / 0 | not found |
| Cheddar Cheese Sauce | Adds | only in draft A | 50 / 3.5 / 0.5 / 0 / 0 / 370 / 4 / 0 / 0 / 1 | not found |
| White Cheddar Mac 'n Cheese | 1 serving | only in draft A | 470 / 27 / 12 / 0 / 55 / 1310 / 40 / 1 / 10 / 17 | not found |
| Chicken Slider | 1 serving | only in draft A | 230 / 9 / 2 / 0 / 25 / 620 / 25 / 1 / 11 / 11 | not found |
| Ham Slider | 1 serving | only in draft A | 170 / 6 / 2 / 0 / 25 / 600 / 19 / 0 / 4 / 4 | not found |
| Buffalo Chicken Slider | 1 serving | only in draft A | 260 / 12 / 2 / 0 / 25 / 910 / 26 / 1 / 3 / 3 | not found |
| Ranch Chicken Wrap | 1 serving | only in draft A | 400 / 23 / 7 / 0 / 45 / 1000 / 32 / 1 / 16 / 16 | not found |
| Honey Mustard Chicken Wrap | 1 serving | only in draft A | 380 / 21 / 7 / 0 / 35 / 990 / 34 / 1 / 3 / 3 | not found |
| Curly Fries | Small | only in draft A | 250 / 13 / 2 / 0 / 0 / 570 / 29 / 3 / 3 / 3 | not found |
| Crinkle Fries | Small | only in draft A | 250 / 12 / 1.5 / 0 / 0 / 300 / 32 / 0 / 3 / 3 | not found |
| Apple Turnover | 1 serving | only in draft A | 430 / 18 / 9 / 0 / 0 / 210 / 65 / 2 / 39 / 0 | not found |
| Cherry Turnover | 1 serving | only in draft A | 390 / 13 / 6 / 0 / 0 / 200 / 65 / 2 / 40 / 0 | not found |
| Chicken Tenders | (2) | only in draft A | 160 / 9 / 1.5 / 0 / 40 / 420 / 7 / 1 / 0 / 13 | not found |
| Potato Cakes | (2) | only in draft A | 250 / 14 / 2 / 0 / 0 / 430 / 23 / 2 / 0 / 2 | not found |
| Honest Kids® Apple Juice Drink | 1 serving | only in draft A | 45 / 0 / 0 / 0 / 0 / 0 / 12 / 3 / 8 / 1 | not found |
| Nestle® Pure Life® Bottled Water | 1 serving | only in draft A | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | not found |
| 1% Lowfat Milk | 8oz | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 110 / 2.5 / 1.5 / 0 / 10 / 110 / 12 / 0 / 12 / 8 | 110 / 25 / 2.5 / 1.5 / 0 / 10 / 110 / 12 / 0 / 12 |
| 1% Lowfat Chocolate Milk | 8oz | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g | 140 / 2.5 / 1.5 / 0 / 10 / 130 / 22 / 1 / 22 / 8 | 140 / 25 / 2.5 / 1.5 / 0 / 10 / 130 / 22 / 1 / 8 |
| Mello Yello® | Med | both read numbers that can't be right: sugars 54 g above carbs 0 g | 200 / 0 / 0 / 0 / 0 / 65 / 0 / 1 / 54 / 0 | 200 / 0 / 0 / 0 / 0 / 65 / 0 / 1 / 54 / 0 |
| Potato Cakes | 2 | only in draft A | 250 / 14 / 2 / 0 / 0 / 430 / 23 / 2 / 0 / 2 | not found |
| Potato Cakes | 3 | only in draft A | 370 / 21 / 3 / 0 / 0 / 650 / 35 / 4 / 0 / 3 | not found |
| Potato Cakes | 4 | only in draft A | 490 / 28 / 4.5 / 0 / 0 / 860 / 46 / 5 / 0 / 4 | not found |
| Ketchup Adds | 1 serving | only in draft A | 10 / 0 / 0 / 0 / 0 / 85 / 3 / 0 / 2 / 0 | not found |
| Shirley 'n Cream | Small (223 g) | only in draft B | not found | 170 / 13.5 / 1.5 / 1 / 0 / 5 / 65 / 38 / 0 / 36 |
| Shirley 'n Cream | Medium (288 g) | only in draft B | not found | 210 / 13.5 / 1.5 / 1 / 0 / 5 / 75 / 49 / 0 / 47 |
| Shirley 'n Cream | Large (458 g) | only in draft B | not found | 300 / 13.5 / 1.5 / 1 / 0 / 5 / 105 / 71 / 0 / 69 |
| Buffalo Dipping Sauce | 28 g | only in draft B | not found | 10 / 10 / 1 / 0 / 0 / 720 / 2 / 0 / 0 / 0 |
| Potato Cakes | 3 ct (150 g) | only in draft B | not found | 370 / 21 / 3 / 0 / 0 / 650 / 35 / 4 / 0 / 3 |
| Potato Cakes | 4 ct (200 g) | only in draft B | not found | 490 / 28 / 4.5 / 0 / 0 / 860 / 46 / 5 / 0 / 4 |
| Ketchup | 9 g | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 85 / 3 / 0 / 2 / 0 |
| Cheddar Cheese Sauce | 43 g | only in draft B | not found | 50 / 35 / 3.5 / 0.5 / 0 / 370 / 4 / 0 / 0 / 1 |
| White Cheddar Mac 'n Cheese | 227 g | only in draft B | not found | 470 / 240 / 27 / 12 / 0 / 55 / 1310 / 40 / 1 / 10 |
| Chicken Slider | 79 g | only in draft B | not found | 230 / 9 / 2 / 0 / 25 / 620 / 25 / 1 / – / 11 |
| Ham Slider | 77 g | only in draft B | not found | 170 / 6 / 2 / 0 / 25 / 600 / 19 / 0 / 4 / 11 |
| Buffalo Chicken Slider | 92 g | only in draft B | not found | 260 / 12 / 2 / 0 / 25 / 910 / 26 / 1 / 3 / – |
| Ranch Chicken Wrap | 139 g | only in draft B | not found | 400 / 23 / 7 / 0 / 45 / 1000 / 32 / 1 / – / 16 |
| Honey Mustard Chicken Wrap | 139 g | only in draft B | not found | 380 / 21 / 7 / 0 / 35 / 990 / 34 / 1 / 3 / – |
| Curly Fries | Small (77 g) | only in draft B | not found | 250 / 13 / 2 / 0 / 0 / 570 / 29 / 3 / – / 3 |
| Crinkle Fries | Small (91 g) | only in draft B | not found | 250 / 12 / 1.5 / 0 / 0 / 300 / 32 / 0 / – / 3 |
| Apple Turnover | 128 g | only in draft B | not found | 430 / 18 / 9 / 0 / 0 / 210 / 65 / 2 / 39 / – |
| Cherry Turnover | 128 g | only in draft B | not found | 390 / 13 / 6 / 0 / 0 / 200 / 65 / 2 / 40 / – |
| Chicken Tenders | 2 ct (67 g) | only in draft B | not found | 160 / 80 / 9 / 1.5 / 0 / 40 / 420 / 7 / 1 / 0 |
| Potato Cakes | 2 ct (100 g) | only in draft B | not found | 250 / 14 / 2 / 0 / 0 / 430 / 23 / 2 / 0 / 2 |
| Honest Kids Apple Juice Drink | 91 g | only in draft B | not found | 45 / 0 / 0 / 0 / 0 / 0 / 12 / 3 / 8 / 1 |
| Nestle Pure Life Bottled Water | 479 g | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 |
| Shamrock Farms Lowfat White Milk | 214 g | only in draft B | not found | 90 / 20 / 2 / 1.5 / 0 / 10 / 105 / 10 / 0 / 10 |
| Shamrock Farms Lowfat Chocolate Milk | 218 g | only in draft B | not found | 150 / 20 / 2.5 / 1.5 / 0 / 10 / 170 / 26 / 1 / 23 |
| Nestle® Pure Life® Bottled Water | 479g | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 |
| Honest Kids® Apple Juice Drink | 91g | only in draft B | not found | 45 / 0 / 0 / 0 / 0 / 0 / 12 / 3 / 8 / 1 |
| Potato Cakes | 2 (100g) | only in draft B | not found | 250 / 14 / 2 / 0 / 0 / 430 / 23 / 2 / 0 / 2 |
| Potato Cakes | 3 (150g) | only in draft B | not found | 370 / 21 / 3 / 0 / 0 / 650 / 35 / 4 / 0 / 3 |
| Potato Cakes | 4 (200g) | only in draft B | not found | 490 / 28 / 4.5 / 0 / 0 / 860 / 46 / 5 / 0 / 4 |
| Ketchup Adds | 9g | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 85 / 3 / 0 / 2 / 0 |

## Spot check (9 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Dr Pepper® | XL | 350 / 0 / 0 / 0 / 0 / 105 / 95 / 0 / 93 / 0 |
| Classic Lemonade° | Small | 110 / 0 / 0 / 0 / 0 / 10 / 29 / 0 / 27 / 0 |
| Spicy Angus Cheesesteak Deluxe | 1 serving | 810 / 44 / 20 / 1.5 / 110 / 2240 / 66 / 5 / 10 / 39 |
| Ham, Egg & Cheese Wrap | 1 serving | 400 / 21 / 8 / 0 / 165 / 1390 / 31 / 1 / 2 / 20 |
| Barbeque Dipping Sauce | Adds | 70 / 0 / 0 / 0 / 0 / 290 / 16 / 0 / 15 / 0 |
| Diet Coke® | Small | 0 / 0 / 0 / 0 / 0 / 40 / 0 / 1 / 0 / 0 |
| Classic Shirley Temple | Small (202 g) | 120 / 0 / 0 / 0 / 0 / 40 / 31 / 0 / 30 / 0 |
| Roast Beef Gyro | 1 serving | 540 / 29 / 7 / 1 / 60 / 1300 / 48 / 3 / 5 / 24 |
| Chicken Tenders | 5 ct (215 g) | 610 / 30 / 4.5 / 0 / 100 / 1990 / 47 / 3 / 0 / 39 |
