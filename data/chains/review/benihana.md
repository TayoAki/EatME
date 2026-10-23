# Benihana: lines for a person

Guide: https://www.benihana.com/wp-content/uploads/2025/02/c114d5a3-benihana-food-nutritional-info-1.2025_d.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (80)

Fix each line in `menus/benihana.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B |
| --- | --- | --- | --- | --- |
| Pork Gyaza Dumplings | 5 | only in draft A | 250 / 12 / 3.5 / 0 / 20 / 990 / 25 / 0 / 7 / 10 | not found |
| Spicy Chicken Gyaza Dumplings | 5 | only in draft A | 370 / 8.8 / 2.5 / 0 / 43.8 / 1332 / 44 / 2.5 / 5 / 13 | not found |
| Shrimp Saute | 10 (EA) | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, protein_g | 140 / 3.4 / 0.5 / 0 / 117.4 / 336 / 0 / 0 / 0 / 27 | 140 / 17 / 3.4 / 0.5 / 0 / 117.4 / 336 / 0 / 0 / 0 |
| Tuna Nigiri | 0.6 | only in draft A | 40 / 0 / 0 / 0 / 5 / 70 / 5 / 0 / 1 / 5 | not found |
| Salmon Nigiri | 0.6 | only in draft A | 60 / 2 / 0.5 / 0 / 10 / 70 / 5 / 0 / 1 / 4 | not found |
| Shrimp Nigiri | 1 | only in draft A | 30 / 0 / 0 / 0 / 23 / 80 / 4 / 0 / 1 / 3 | not found |
| Shrimp | 1 | only in draft A | 30 / 0 / 0 / 0 / 23 / 80 / 4 / 0 / 1 / 3 | not found |
| Salmon | 0.6 | only in draft A | 60 / 2 / 0.5 / 0 / 10 / 70 / 5 / 0 / 1 / 4 | not found |
| Tuna | 0.6 | only in draft A | 40 / 0 / 0 / 0 / 5 / 70 / 5 / 0 / 1 / 5 | not found |
| Hibachi Vegetables Onions | 2 | differ: fat_g, saturated_fat_g, protein_g | 30 / 0.5 / 0.1 / 0 / 0 / 30 / 5 / 1 / 0 / 0.5 | 30 / 1 / 0 / 0 / 0 / 30 / 5 / 1 / 0 / 0 |
| Hibachi Vegetables Zucchini | 2 | differ: fat_g, saturated_fat_g, protein_g | 20 / 0.4 / 0.1 / 0 / 0 / 30 / 2 / 1 / 0 / 0.5 | 20 / 1 / 0 / 0 / 0 / 30 / 2 / 1 / 0 / 1 |
| Steamed Rice | 6 | differ: sodium_mg | 300 / 0 / 0 / 0 / 0 / 5 / 72 / 0.5 / 0.5 / 6 | 300 / 0 / 0 / 0 / 0 / 0 / 72 / 0.5 / 0.5 / 6 |
| Hibachi Steak | 7.00 | differ: calories, fiber_g, sugars_g | 230 / 11 / 5 / 1 / 160 / 190 / 1 / 0 / 0 / 32 | 240 / 11 / 5 / 1 / 160 / 190 / 1 / 1 / 0.5 / 32 |
| Hibachi Chateaubriand | 8.50 | both read numbers that can't be right: sugars 20 g above carbs 3 g | 360 / 18 / 7 / 0.5 / 130 / 400 / 3 / 0 / 20 / 48 | 360 / 18 / 7 / 0.5 / 130 / 400 / 3 / 0 / 20 / 48 |
| Ice cream | 3 | differ: fat_g | 100 / 5 / 3 / 0 / 20 / 25 / 13 / 1 / 11 / 2 | 100 / 6 / 3 / 0 / 20 / 25 / 13 / 1 / 11 / 2 |
| Chicken | 3.500 | only in draft A | 130 / 5 / 1.5 / 0 / 55 / 55 / 0 / 0 / 0 / 22 | not found |
| Steak Julienne | 3 | only in draft A | 110 / 4 / 1.5 / 0 / 70 / 210 / 6 / 0 / 0 / 13 | not found |
| Lunch Boat Chicken | 3.5 | only in draft A | 130 / 5 / 1.5 / 0 / 55 / 55 / 0 / 0 / 0 / 22 | not found |
| Lunch Boat Steak Julienne | 3 | only in draft A | 110 / 4 / 1.5 / 0 / 70 / 210 / 6 / 0 / 0 / 13 | not found |
| Hibachi Chicken Rice | 6 | differ: calories, fat_g, saturated_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, protein_g | 440 / 11 / 2.5 / 0 / 150 / 570 / 70 / 6 / 0.5 / 15 | 300 / 0 / 0 / 0 / 0 / 5 / 72 / 0.5 / 0.5 / 6 |
| Mustard Sauce | 1 oz | differ: fat_g, saturated_fat_g, trans_fat_g | 110 / 10 / 1.5 / 0 / 0 / 530 / 4 / 0 / 0 / 2 | 110 / 90 / 10 / 1.5 / 0 / 530 / 4 / 0 / 0 / 2 |
| Hot Sauce | 1 oz | differ: fat_g | 70 / 3 / 0 / 0 / 0 / 320 / 16 / 0 / 6 / 1 | 70 / 0 / 0 / 0 / 0 / 320 / 16 / 0 / 6 / 1 |
| Benhana Original Garlic SauceTM | 1 oz | differ: sugars_g, protein_g | 90 / 10 / 2.5 / 0 / 0 / 125 / 2.5 / 0 / 0.5 / 0 | 90 / 10 / 2.5 / 0 / 0 / 125 / 2.5 / 0 / 0 / 0.5 |
| Benhana Onion Soup | 6.7 | differ: saturated_fat_g | 30 / 1 / 1 / 0 / 0 / 710 / 3 / 0 / 0 / 1 | 30 / 1 / 0 / 0 / 0 / 710 / 3 / 0 / 0 / 1 |
| Sesame Garlic Sauce (6 wings) | 20 | only in draft A | 770 / 90 / 26 / 0 / 500 / 1856 / 8 / 0 / 0 / 81 | not found |
| Black Pepper Teriyaki S. (6 wings) | 19 | only in draft A | 680 / 60 / 18 / 0 / 500 / 2446 / 22 / 0 / 20 / 83 | not found |
| Spicy Sauce (6 wings) | 21 | only in draft A | 690 / 70 / 19 / 0 / 500 / 2276 / 5 / 1 / 3 / 82 | not found |
| Salmon Carpaccio | 5.5 oz | the guide gives no fiber_g | 390 / 32 / 6 / – / 80 / 270 / 2 / – / 1 / 25 | 390 / 32 / 6 / – / 80 / 270 / 2 / – / 1 / 25 |
| Chili Ponzu Yellowtail | 5 oz | both read numbers that can't be right: sugars 12 g above carbs 4 g | 260 / 15 / 4 / 0 / 70 / 430 / 4 / 5 / 12 / 26 | 260 / 15 / 4 / 0 / 70 / 430 / 4 / 5 / 12 / 26 |
| Chili Ponzu Yellowtail Roll | 10 oz | both read numbers that can't be right: sugars 59 g above carbs 55 g | 480 / 15 / 4 / 0 / 85 / 1020 / 55 / 22 / 59 / 30 | 480 / 15 / 4 / 0 / 85 / 1020 / 55 / 22 / 59 / 30 |
| Teriyaki Steak | 6.00 oz | both read numbers that can't be right: sugars 17 g above carbs 15 g | 290 / 11 / 4 / 0.5 / 135 / 530 / 15 / 2 / 17 / 33 | 290 / 11 / 4 / 0.5 / 135 / 530 / 15 / 2 / 17 / 33 |
| Steak Julienne | 4.00 oz | both read numbers that can't be right: sugars 13 g above carbs 9 g | 160 / 6 / 2 / 0 / 90 / 295 / 9 / 1 / 13 / 19 | 160 / 6 / 2 / 0 / 90 / 295 / 9 / 1 / 13 / 19 |
| Ginger Sauce | 16 oz (1 pt) | both read numbers that can't be right: sugars 5 g above carbs 2 g | 160 / 0 / 0 / 0 / 0 / 12000 / 2 / 0.5 / 5 / 28 | 160 / 0 / 0 / 0 / 0 / 12000 / 2 / 0.5 / 5 / 28 |
| Edamame | 6 oz | only in draft B | not found | 210 / 8.8 / 1.1 / 0 / 0 / 435 / 17 / 8.8 / 3.7 / 18.4 |
| Shrimp Tempura | 9 oz | only in draft B | not found | 560 / 37 / 5 / 0 / 78 / 910 / 38 / 1 / 1 / 18 |
| Pork Gyaza Dumplings | 5 oz | only in draft B | not found | 250 / 110 / 12 / 3.5 / 0 / 20 / 990 / 25 / 0 / 7 |
| Spicy Chicken Gyaza Dumplings | 5 oz | only in draft B | not found | 370 / 75 / 8.8 / 2.5 / 0 / 43.8 / 1332 / 44 / 2.5 / 5 |
| Sesame Garlic Sauce | 16 oz | only in draft B | not found | 770 / 760 / 90 / 26 / 0 / 500 / 1856 / 8 / 0 / 0 |
| Black Pepper Teriyaki Sauce | 15 oz | only in draft B | not found | 680 / 523 / 60 / 18 / 0 / 500 / 2446 / 22 / 0 / 20 |
| Spicy Sauce | 17 oz | only in draft B | not found | 690 / 607 / 70 / 19 / 0 / 500 / 2276 / 5 / 1 / 3 |
| Tuna Nigiri | 0.6 oz | only in draft B | not found | 40 / 0 / 0 / 0 / 5 / 70 / 5 / 0 / 1 / 5 |
| Salmon Nigiri | 0.6 oz | only in draft B | not found | 60 / 2 / 0.5 / 0 / 10 / 70 / 5 / 0 / 1 / 4 |
| Benihana Onion Soup | 6.7 oz | only in draft B | not found | 30 / 1 / 0 / 0 / 0 / 710 / 3 / 0 / 0 / 1 |
| Benihana Salad | 3.8 oz | only in draft B | not found | 90 / 8 / 1 / 0 / 0 / 360 / 3 / 1 / 0 / 2 |
| Shrimp Nigiri | 1 piece (1 oz) | only in draft B | not found | 30 / 0 / 0 / 0 / 23 / 80 / 4 / 0 / 1 / 3 |
| Shrimp | 1 piece (1 oz) | only in draft B | not found | 30 / 0 / 0 / 0 / 23 / 80 / 4 / 0 / 1 / 3 |
| Salmon | 0.6 oz | only in draft B | not found | 60 / 2 / 0.5 / 0 / 10 / 70 / 5 / 0 / 1 / 4 |
| Tuna | 0.6 oz | only in draft B | not found | 40 / 0 / 0 / 0 / 5 / 70 / 5 / 0 / 1 / 5 |
| Spicy Tuna Roll | 6 oz | only in draft B | not found | 340 / 6 / 1 / 0 / 22 / 924 / 56 / 1 / 12 / 13 |
| California Roll | 7 oz | only in draft B | not found | 280 / 5 / 0 / 0 / 4 / 680 / 55 / 5 / 10 / 13 |
| Spicy Tuna | 6.06 oz | only in draft B | not found | 220 / 3.8 / 0 / 0 / 5 / 1940 / 38 / 3 / 22 / 10 |
| Spicy Yellowtail | 6.06 oz | only in draft B | not found | 200 / 3.8 / 0 / 0 / 5 / 1940 / 38 / 3 / 22 / 7 |
| Spicy Salmon | 6.06 oz | only in draft B | not found | 240 / 5.9 / 0 / 0 / 11 / 1940 / 38 / 3 / 22 / 9 |
| Chili Shrimp Roll | 12 oz | only in draft B | not found | 810 / 32 / 6 / 0 / 150 / 2108 / 101 / 3 / 27 / 20 |
| Shrimp Crunchy Roll | 8 oz | only in draft B | not found | 500 / 20 / 3 / 0 / 20 / 1260 / 68 / 1 / 12 / 11 |
| Hibachi Vegetables Onions | 2 oz | only in draft B | not found | 30 / 0.5 / 0.1 / 0 / 0 / 30 / 5 / 1 / 0 / 0.5 |
| Hibachi Vegetables Zucchini | 2 oz | only in draft B | not found | 20 / 0.4 / 0.1 / 0 / 0 / 30 / 2 / 1 / 0 / 0.5 |
| Benihana's Original Yum Yum SauceTM | 1 oz | only in draft B | not found | 170 / 170 / 19 / 3 / 0 / 80 / 150 / 2 / 0 / 0.5 |
| Steamed Rice | 6 oz | only in draft B | not found | 300 / 0 / 0 / 0 / 0 / 5 / 72 / 0.5 / 0.5 / 6 |
| Yakisoba Chicken | 15.9 oz | only in draft B | not found | 640 / 14 / 2 / 0 / 75 / 1540 / 94 / 9 / 11 / 34 |
| Filet Mignon | 5.75 oz | only in draft B | not found | 250 / 11 / 5 / 0.5 / 85 / 190 / 1 / 0 / 0 / 36 |
| Hibachi Steak | 7.00 oz | only in draft B | not found | 230 / 11 / 5 / 1 / 160 / 190 / 1 / 0 / 0 / 32 |
| Hibachi Chateaubriand | 8.50 oz | only in draft B | not found | 360 / 18 / 7 / 0.5 / 130 / 400 / 3 / 0 / 20 / 48 |
| Hibachi Tuna Steak | 11 oz | only in draft B | not found | 500 / 31 / 4.5 / 0 / 155 / 530 / 7 / 1 / 0.5 / 45 |
| Ice cream | 3 oz | only in draft B | not found | 100 / 5 / 3 / 0 / 20 / 25 / 13 / 1 / 11 / 2 |
| Chicken | 3.50 oz | only in draft B | not found | 130 / 5 / 1.5 / 0 / 55 / 55 / 0 / 0 / 0 / 22 |
| Filet Mignon | 4.75 oz | only in draft B | not found | 200 / 9 / 4.5 / 0 / 70 / 160 / 1 / 1 / 0.5 / 30 |
| Chicken | 3.500 oz | only in draft B | not found | 130 / 5 / 1.5 / 0 / 55 / 55 / 0 / 0 / 0 / 22 |
| Steak Julienne | 3 oz | only in draft B | not found | 110 / 4 / 1.5 / 0 / 70 / 210 / 6 / 0 / 0 / 13 |
| Lunch Boat Chicken | 3.5 oz | only in draft B | not found | 130 / 5 / 1.5 / 0 / 55 / 55 / 0 / 0 / 0 / 22 |
| Lunch Boat Steak Julienne | 3 oz | only in draft B | not found | 110 / 4 / 1.5 / 0 / 70 / 210 / 6 / 0 / 0 / 13 |
| Hibachi Chicken Rice | 6 oz | only in draft B | not found | 440 / 11 / 2.5 / 0 / 150 / 570 / 70 / 6 / 0.5 / 15 |
| Chicken & Shrimp | 3.5 / (5 EA) | only in draft B | not found | 200 / 7 / 1.8 / 0 / 115 / 220 / 0 / 0 / 0 / 35 |
| Chicken & Steak | 3.5 / 2.5 | only in draft B | not found | 210 / 9 / 3.1 / 0.2 / 115 / 120 / 0 / 0 / 0 / 33 |
| Steak & Shrimp | 2.5 / (5 EA) | only in draft B | not found | 150 / 5 / 1.9 / 0.2 / 115 / 230 / 0 / 0 / 0 / 25 |
| Filet Mignon & Chicken | 6.5 | only in draft B | not found | 260 / 10.7 / 4.2 / 0.3 / 101.41 / 156 / 1 / 1 / 0 / 41 |
| Filet Mignon & Shrimp | 6.6 | only in draft B | not found | 200 / 7.2 / 2.9 / 0.3 / 106.22 / 275 / 0 / 0 / 0 / 33 |
| Shrimp Appelizer | 3 EA | only in draft B | not found | 40 / 1 / 0 / 0 / 35 / 100 / 0 / 0 / 0 / 8 |
| Yakisoba Steak | 15 | only in draft B | not found | 630 / 13 / 2 / 0 / 80 / 1640 / 98 / 9 / 11 / 28 |
| Yakisoba Shrimp | 15 | only in draft B | not found | 610 / 12 / 1 / 0 / 80 / 1640 / 94 / 9 / 11 / 30 |

## Spot check (10 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Yakisoba Trio | 16 oz | 620 / 13 / 2 / 0.1 / 79 / 1650 / 96 / 9 / 11 / 30 |
| Shrimp | 0.40 oz | 10 / 0 / 0 / 0 / 20 / 25 / 0 / 0 / 0 / 2 |
| Salmon Nigiri | 1 piece (1 oz) | 40 / 1 / 0 / 0 / 5 / 80 / 6 / 0 / 1 / 3 |
| Steak (Julienne - Yakisoba) | 2 oz | 80 / 3 / 1 / 0 / 45 / 140 / 4 / 0 / 0 / 9 |
| Mixed Greens | 3 oz | 20 / 0 / 0 / 0 / 0 / 31 / 4 / 2 / 2 / 1 |
| Avocado and Cucumber Roll | 270 oz | 60 / 1 / 0 / 0 / 0 / 570 / 46 / 5 / 6 / 5 |
| Scallops | 3.50 oz | 70 / 2 / 0.5 / 0 / 25 / 400 / 2 / 0 / 0 / 12 |
| Vanilla Ice Cream | 3 oz | 100 / 5.5 / 3 / 0 / 20 / 25 / 12 / 0 / 11 / 2 |
| California Roll (half) | 4 oz | 140 / 3 / 0 / 0 / 2 / 340 / 27 / 3 / 5 / 6 |
| Sashimi Assortment | 13 oz | 520 / 10 / 2 / 0 / 100 / 314 / 62 / 0 / 0 / 47 |
