# Red Lobster: lines for a person

Guide: https://img-ecomm-rl-prod-fye5gqbxdtbghqer.a03.azurefd.net/brandsite/documents/US_Nutrition_10-12-26.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (34)

Fix each line in `menus/red-lobster.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B |
| --- | --- | --- | --- | --- |
| Blackberry Bourbon Smash | 1 serving | differ: sodium_mg | 160 / 0 / 0 / 0 / 0 / 2.5 / 20 / 0 / 19 / 0 | 160 / 0 / 0 / 0 / 0 / 5 / 20 / 0 / 19 / 0 |
| Classic Coconut Mojito | 1 serving | both read numbers that can't be right: sugars 23 g above carbs 20 g | 120 / 0 / 0 / 0 / 0 / 5 / 20 / 0 / 23 / 0 | 120 / 0 / 0 / 0 / 0 / 5 / 20 / 0 / 23 / 0 |
| Guava Margarita (non-spicy option) | 1 serving | differ: sodium_mg | 290 / 0 / 0 / 0 / 0 / 2.5 / 43 / 0 / 42 / 0 | 290 / 0 / 0 / 0 / 0 / 5 / 43 / 0 / 42 / 0 |
| Henny Margarita | 1 serving | differ: sodium_mg | 360 / 0 / 0 / 0 / 0 / 2.5 / 55 / 2 / 51 / 0 | 360 / 0 / 0 / 0 / 0 / 5 / 55 / 2 / 51 / 0 |
| The "Old Salt's" Smoked Old Fashioned | 1 serving | differ: sodium_mg | 180 / 0 / 0 / 0 / 0 / 2.5 / 12 / 0 / 12 / 0 | 180 / 0 / 0 / 0 / 0 / 5 / 12 / 0 / 12 / 0 |
| Triple Berry Sangria | 1 serving | differ: sodium_mg | 210 / 0 / 0 / 0 / 0 / 2.5 / 47 / 3 / 38 / 1 | 210 / 0 / 0 / 0 / 0 / 5 / 47 / 3 / 38 / 1 |
| Tuesday Crab Lover's Duo | 1 serving | only in draft B | not found | 1490 / 76 / 33 / 1.5 / 330 / 4230 / 128 / 6 / 8 / 78 |
| Wednesday Sirloin & Walt's Favorite Shrimp | 1 serving | only in draft B | not found | 710 / 40 / 10 / 0 / 200 / 3660 / 39 / 0 / 17 / 52 |
| Thursday Salmon New Orleans | 1 serving | only in draft B | not found | 1170 / 77 / 17 / 0 / 350 / 1460 / 13 / 0 / 3 / 103 |
| Friday Fish & Chips with fries & coleslaw | 1 serving | only in draft B | not found | 1840 / 95 / 20 / 2 / 340 / 4780 / 180 / 13 / 27 / 63 |
| Apple Juice | 1 serving | only in draft B | not found | 110 / 0 / 0 / 0 / 0 / 10 / 27 / 0 / 26 / 2 |
| Broccoli | 1 serving | only in draft B | not found | 190 / 16 / 10 / 0 / 40 / 400 / 9 / 3 / 2 / 4 |
| Coastal Cooler - Cherry Wave Slushy | 1 serving | only in draft B | not found | 150 / 0 / 0 / 0 / 0 / 20 / 37 / 0 / 36 / 0 |
| Coastal Cooler - Mango Smoothie | 1 serving | only in draft B | not found | 190 / 0 / 0 / 0 / 0 / 120 / 44 / 0 / 37 / 3 |
| Coastal Cooler - Raspberry Bay Smoothie | 1 serving | only in draft B | not found | 190 / 0 / 0 / 0 / 0 / 120 / 44 / 0 / 37 / 3 |
| Coastal Cooler - Sunset Strawberry Smoothie | 1 serving | only in draft B | not found | 190 / 0 / 0 / 0 / 0 / 120 / 44 / 1 / 37 / 3 |
| Cranberry Juice | 1 serving | only in draft B | not found | 120 / 0 / 0 / 0 / 0 / 10 / 29 / 0 / 29 / 0 |
| Crispy Chicken Tenders | 1 serving | only in draft B | not found | 690 / 54 / 7 / 0 / 80 / 1150 / 29 / 0 / 8 / 25 |
| Crunchy Popcorn Shrimp | 1 serving | only in draft B | not found | 430 / 25 / 3 / 0 / 100 / 940 / 33 / 1 / 11 / 17 |
| Garlic-Grilled Shrimp | 1 serving | only in draft B | not found | 80 / 4 / 1 / 0 / 100 / 580 / 1 / 0 / 0 / 11 |
| Golden-Fried Fish | 1 serving | only in draft B | not found | 530 / 25 / 2 / 0 / 60 / 1920 / 53 / 2 / 13 / 22 |
| Grilled Chicken | 1 serving | only in draft B | not found | 170 / 5 / 0 / 0 / 80 / 120 / 0 / 0 / 0 / 31 |
| Macaroni and Cheese | 1 serving | only in draft B | not found | 310 / 9 / 3 / 0 / 10 / 830 / 44 / 2 / 10 / 11 |
| Milk 1% | 1 serving | only in draft B | not found | 100 / 2 / 2 / 0 / 10 / 110 / 12 / 0 / 12 / 8 |
| Orange Juice | 1 serving | only in draft B | not found | 90 / 0 / 0 / 0 / 0 / 20 / 22 / 0 / 19 / 2 |
| Orange Wedges | 1 serving | only in draft B | not found | 30 / 0 / 0 / 0 / 0 / 0 / 10 / 2 / 6 / 1 |
| Petite Maine Lobster Tail | 1 serving | only in draft B | not found | 360 / 35 / 22 / 0 / 180 / 580 / 0 / 0 / 0 / 10 |
| Pineapple Juice | 1 serving | only in draft B | not found | 130 / 0 / 0 / 0 / 0 / 75 / 30 / 0 / 30 / 0 |
| Raspberry Lemonade | 1 serving | only in draft B | not found | 90 / 0 / 0 / 0 / 0 / 10 / 24 / 0 / 23 / 0 |
| Surf's Up Sundae | 1 serving | only in draft B | not found | 200 / 10 / 6 / 0 / 40 / 50 / 25 / 0 / 18 / 3 |
| Baked Potatoes with Butter and Sour Cream | 1 serving | only in draft B | not found | 1080 / 14 / 0 / 0 / 0 / 6920 / 220 / 24 / 12 / 28 |
| Orzo Rice | 1 serving | only in draft B | not found | 1240 / 24 / 4 / 0 / 0 / 3520 / 228 / 8 / 4 / 24 |
| Cheddar Bay Biscuits* | Half Dozen | only in draft B | not found | 970 / 59 / 26 / 1 / 30 / 2250 / 95 / 3 / 4 / 18 |
| Cheddar Bay Biscuits* | One Dozen | only in draft B | not found | 1940 / 118 / 53 / 2 / 50 / 4500 / 191 / 6 / 9 / 36 |

## Spot check (9 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Wine | Split, 187 mL | 130 / 0 / 0 / 0 / 0 / 10 / 3 / 0 / 3 / 0 |
| Southwest Shrimp Bowl | 1 serving | 700 / 45 / 12 / 1 / 180 / 2320 / 53 / 4 / 10 / 24 |
| Wine | 9 oz. | 220 / 0 / 0 / 0 / 0 / 10 / 7 / 0 / 2 / 0 |
| MUG® Root Beer | 1 serving | 150 / 0 / 0 / 0 / 0 / 60 / 52 / 0 / 52 / 0 |
| Cheeseburger with fries, ketchup | 1 serving | 1450 / 72 / 20 / 2 / 180 / 3220 / 130 / 9 / 23 / 64 |
| Lobster Bisque | Cup | 340 / 27 / 7 / 0 / 50 / 800 / 17 / 0 / 4 / 6 |
| Fish & Chips with fries, coleslaw | lighter portion | 1160 / 68 / 8 / 0 / 40 / 2690 / 112 / 9 / 17 / 22 |
| Under the Purple Sea | 1 serving | 160 / 0 / 0 / 0 / 0 / 10 / 20 / 1 / 17 / 0 |
| Classic Chicken Linguini Alfredo | lighter portion | 710 / 31 / 9 / 1 / 130 / 1390 / 54 / 0 / 2 / 53 |
