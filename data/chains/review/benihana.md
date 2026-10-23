# Benihana: lines for a person

Guide: https://www.benihana.com/wp-content/uploads/2025/02/c114d5a3-benihana-food-nutritional-info-1.2025_d.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (97)

The last column comes from `npm run chains:evidence`: whether a draft's numbers sit right after the item's name in the guide text the drafts read. It can't read sizes or sections (one draft called a single 78 g cookie a "6 pack"): check those against the guide, then fix the line and set its check to `person`.

Fix each line in `menus/benihana.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B | In the guide text (no AI) |
| --- | --- | --- | --- | --- | --- |
| Pork Gyaza Dumplings | 5 | only in draft A | 250 / 12 / 3.5 / 0 / 20 / 990 / 25 / 0 / 7 / 10 | not found | A: numbers found after the name (line 18); check the size |
| Spicy Chicken Gyaza Dumplings | 5 | only in draft A | 370 / 8.8 / 2.5 / 0 / 43.8 / 1332 / 44 / 2.5 / 5 / 13 | not found | A: numbers found after the name (line 19); check the size |
| Shrimp Saute | 10 (EA) | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, protein_g | 140 / 3.4 / 0.5 / 0 / 117.4 / 336 / 0 / 0 / 0 / 27 | 140 / 17 / 3.4 / 0.5 / 0 / 117.4 / 336 / 0 / 0 / 0 | A: numbers found after the name (line 20); check the size; B: numbers found after the name (line 20); check the size |
| Tuna Nigiri | 0.6 | only in draft A | 40 / 0 / 0 / 0 / 5 / 70 / 5 / 0 / 1 / 5 | not found | A: numbers found after the name (line 27); check the size |
| Salmon Nigiri | 0.6 | only in draft A | 60 / 2 / 0.5 / 0 / 10 / 70 / 5 / 0 / 1 / 4 | not found | A: numbers found after the name (line 29); check the size |
| Shrimp Nigiri | 1 | only in draft A | 30 / 0 / 0 / 0 / 23 / 80 / 4 / 0 / 1 / 3 | not found | A: numbers found after the name (line 61); check the size |
| Shrimp | 1 | only in draft A | 30 / 0 / 0 / 0 / 23 / 80 / 4 / 0 / 1 / 3 | not found | A: numbers found after the name (line 61); check the size |
| Salmon | 0.6 | only in draft A | 60 / 2 / 0.5 / 0 / 10 / 70 / 5 / 0 / 1 / 4 | not found | A: numbers found after the name (line 29); check the size |
| Tuna | 0.6 | only in draft A | 40 / 0 / 0 / 0 / 5 / 70 / 5 / 0 / 1 / 5 | not found | A: numbers found after the name (line 27); check the size |
| Hibachi Vegetables Onions | 2 | differ: fat_g, saturated_fat_g, protein_g | 30 / 0.5 / 0.1 / 0 / 0 / 30 / 5 / 1 / 0 / 0.5 | 30 / 1 / 0 / 0 / 0 / 30 / 5 / 1 / 0 / 0 | A: numbers found after the name (line 141); check the size; B: numbers found after the name (line 181); check the size |
| Hibachi Vegetables Zucchini | 2 | differ: fat_g, saturated_fat_g, protein_g | 20 / 0.4 / 0.1 / 0 / 0 / 30 / 2 / 1 / 0 / 0.5 | 20 / 1 / 0 / 0 / 0 / 30 / 2 / 1 / 0 / 1 | A: numbers found after the name (line 142); check the size; B: numbers found after the name (line 182); check the size |
| Steamed Rice | 6 | differ: sodium_mg | 300 / 0 / 0 / 0 / 0 / 5 / 72 / 0.5 / 0.5 / 6 | 300 / 0 / 0 / 0 / 0 / 0 / 72 / 0.5 / 0.5 / 6 | A: numbers found after the name (line 146); check the size; B: numbers found after the name (line 146); check the size |
| Hibachi Steak | 7.00 | differ: calories, fiber_g, sugars_g | 230 / 11 / 5 / 1 / 160 / 190 / 1 / 0 / 0 / 32 | 240 / 11 / 5 / 1 / 160 / 190 / 1 / 1 / 0.5 / 32 | A: numbers found after the name (line 159); check the size; B: numbers found after the name (line 194); check the size |
| Hibachi Chateaubriand | 8.50 | both read numbers that can't be right: sugars 20 g above carbs 3 g | 360 / 18 / 7 / 0.5 / 130 / 400 / 3 / 0 / 20 / 48 | 360 / 18 / 7 / 0.5 / 130 / 400 / 3 / 0 / 20 / 48 | A: numbers found after the name (line 161); check the size; B: numbers found after the name (line 161); check the size |
| Ice cream | 3 | differ: fat_g | 100 / 5 / 3 / 0 / 20 / 25 / 13 / 1 / 11 / 2 | 100 / 6 / 3 / 0 / 20 / 25 / 13 / 1 / 11 / 2 | A: numbers found after the name (line 187); check the size; B: numbers found after the name (line 311); check the size |
| Chicken | 3.500 | only in draft A | 130 / 5 / 1.5 / 0 / 55 / 55 / 0 / 0 / 0 / 22 | not found | A: numbers found after the name (line 192); check the size |
| Steak Julienne | 3 | only in draft A | 110 / 4 / 1.5 / 0 / 70 / 210 / 6 / 0 / 0 / 13 | not found | A: numbers found after the name (line 237); check the size |
| Lunch Boat Chicken | 3.5 | only in draft A | 130 / 5 / 1.5 / 0 / 55 / 55 / 0 / 0 / 0 / 22 | not found | A: numbers found after the name (line 261); check the size |
| Lunch Boat Steak Julienne | 3 | only in draft A | 110 / 4 / 1.5 / 0 / 70 / 210 / 6 / 0 / 0 / 13 | not found | A: numbers found after the name (line 263); check the size |
| Hibachi Chicken Rice | 6 | differ: calories, fat_g, saturated_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, protein_g | 440 / 11 / 2.5 / 0 / 150 / 570 / 70 / 6 / 0.5 / 15 | 300 / 0 / 0 / 0 / 0 / 5 / 72 / 0.5 / 0.5 / 6 | A: numbers found after the name (line 282); check the size; B: numbers found after the name (line 340); check the size |
| Mustard Sauce | 1 oz | differ: fat_g, saturated_fat_g, trans_fat_g | 110 / 10 / 1.5 / 0 / 0 / 530 / 4 / 0 / 0 / 2 | 110 / 90 / 10 / 1.5 / 0 / 530 / 4 / 0 / 0 / 2 | A: numbers found after the name (line 144); check the size; B: numbers found after the name (line 144); check the size |
| Hot Sauce | 1 oz | differ: fat_g | 70 / 3 / 0 / 0 / 0 / 320 / 16 / 0 / 6 / 1 | 70 / 0 / 0 / 0 / 0 / 320 / 16 / 0 / 6 / 1 | A: numbers found after the name (line 302); check the size; B: numbers found after the name (line 302); check the size |
| Benhana Original Garlic SauceTM | 1 oz | differ: sugars_g, protein_g | 90 / 10 / 2.5 / 0 / 0 / 125 / 2.5 / 0 / 0.5 / 0 | 90 / 10 / 2.5 / 0 / 0 / 125 / 2.5 / 0 / 0 / 0.5 | A: numbers found after the name (line 303); check the size; B: numbers found after the name (line 303); check the size |
| Benhana Onion Soup | 6.7 | differ: saturated_fat_g | 30 / 1 / 1 / 0 / 0 / 710 / 3 / 0 / 0 / 1 | 30 / 1 / 0 / 0 / 0 / 710 / 3 / 0 / 0 / 1 | A: not as drafted (line 306 lacks 1); B: numbers found after the name (line 306); check the size |
| Sesame Garlic Sauce (6 wings) | 20 | only in draft A | 770 / 90 / 26 / 0 / 500 / 1856 / 8 / 0 / 0 / 81 | not found | A: numbers found after the name (line 383); check the size |
| Black Pepper Teriyaki S. (6 wings) | 19 | only in draft A | 680 / 60 / 18 / 0 / 500 / 2446 / 22 / 0 / 20 / 83 | not found | A: numbers found after the name (line 384); check the size |
| Spicy Sauce (6 wings) | 21 | only in draft A | 690 / 70 / 19 / 0 / 500 / 2276 / 5 / 1 / 3 / 82 | not found | A: numbers found after the name (line 385); check the size |
| Salmon Carpaccio | 5.5 oz | the guide gives no fiber_g | 390 / 32 / 6 / – / 80 / 270 / 2 / – / 1 / 25 | 390 / 32 / 6 / – / 80 / 270 / 2 / – / 1 / 25 | A: numbers found after the name (line 36); check the size; B: numbers found after the name (line 36); check the size |
| Chili Ponzu Yellowtail | 5 oz | both read numbers that can't be right: sugars 12 g above carbs 4 g | 260 / 15 / 4 / 0 / 70 / 430 / 4 / 5 / 12 / 26 | 260 / 15 / 4 / 0 / 70 / 430 / 4 / 5 / 12 / 26 | A: numbers found after the name (line 37); check the size; B: numbers found after the name (line 37); check the size |
| Chili Ponzu Yellowtail Roll | 10 oz | both read numbers that can't be right: sugars 59 g above carbs 55 g | 480 / 15 / 4 / 0 / 85 / 1020 / 55 / 22 / 59 / 30 | 480 / 15 / 4 / 0 / 85 / 1020 / 55 / 22 / 59 / 30 | A: numbers found after the name (line 126); check the size; B: numbers found after the name (line 126); check the size |
| Teriyaki Steak | 6.00 oz | both read numbers that can't be right: sugars 17 g above carbs 15 g | 290 / 11 / 4 / 0.5 / 135 / 530 / 15 / 2 / 17 / 33 | 290 / 11 / 4 / 0.5 / 135 / 530 / 15 / 2 / 17 / 33 | A: numbers found after the name (line 160); check the size; B: numbers found after the name (line 160); check the size |
| Steak Julienne | 4.00 oz | both read numbers that can't be right: sugars 13 g above carbs 9 g | 160 / 6 / 2 / 0 / 90 / 295 / 9 / 1 / 13 / 19 | 160 / 6 / 2 / 0 / 90 / 295 / 9 / 1 / 13 / 19 | A: numbers found after the name (line 226); check the size; B: numbers found after the name (line 226); check the size |
| Ginger Sauce | 16 oz (1 pt) | both read numbers that can't be right: sugars 5 g above carbs 2 g | 160 / 0 / 0 / 0 / 0 / 12000 / 2 / 0.5 / 5 / 28 | 160 / 0 / 0 / 0 / 0 / 12000 / 2 / 0.5 / 5 / 28 | A: numbers found after the name (line 281); check the size; B: numbers found after the name (line 281); check the size |
| Edamame | 6 oz | only in draft B | not found | 210 / 8.8 / 1.1 / 0 / 0 / 435 / 17 / 8.8 / 3.7 / 18.4 | B: numbers found after the name (line 11); check the size |
| Shrimp Tempura | 9 oz | only in draft B | not found | 560 / 37 / 5 / 0 / 78 / 910 / 38 / 1 / 1 / 18 | B: numbers found after the name (line 15); check the size |
| Pork Gyaza Dumplings | 5 oz | only in draft B | not found | 250 / 110 / 12 / 3.5 / 0 / 20 / 990 / 25 / 0 / 7 | B: numbers found after the name (line 18); check the size |
| Spicy Chicken Gyaza Dumplings | 5 oz | only in draft B | not found | 370 / 75 / 8.8 / 2.5 / 0 / 43.8 / 1332 / 44 / 2.5 / 5 | B: numbers found after the name (line 19); check the size |
| Sesame Garlic Sauce | 16 oz | only in draft B | not found | 770 / 760 / 90 / 26 / 0 / 500 / 1856 / 8 / 0 / 0 | B: numbers found after the name (line 23); check the size |
| Black Pepper Teriyaki Sauce | 15 oz | only in draft B | not found | 680 / 523 / 60 / 18 / 0 / 500 / 2446 / 22 / 0 / 20 | B: numbers found after the name (line 24); check the size |
| Spicy Sauce | 17 oz | only in draft B | not found | 690 / 607 / 70 / 19 / 0 / 500 / 2276 / 5 / 1 / 3 | B: numbers found after the name (line 25); check the size |
| Tuna Nigiri | 0.6 oz | only in draft B | not found | 40 / 0 / 0 / 0 / 5 / 70 / 5 / 0 / 1 / 5 | B: numbers found after the name (line 27); check the size |
| Salmon Nigiri | 0.6 oz | only in draft B | not found | 60 / 2 / 0.5 / 0 / 10 / 70 / 5 / 0 / 1 / 4 | B: numbers found after the name (line 29); check the size |
| Benihana Onion Soup | 6.7 oz | only in draft B | not found | 30 / 1 / 0 / 0 / 0 / 710 / 3 / 0 / 0 / 1 | B: numbers found after the name (line 46); check the size |
| Benihana Salad | 3.8 oz | only in draft B | not found | 90 / 8 / 1 / 0 / 0 / 360 / 3 / 1 / 0 / 2 | B: numbers found after the name (line 48); check the size |
| Shrimp Nigiri | 1 piece (1 oz) | only in draft B | not found | 30 / 0 / 0 / 0 / 23 / 80 / 4 / 0 / 1 / 3 | B: numbers found after the name (line 61); check the size |
| Shrimp | 1 piece (1 oz) | only in draft B | not found | 30 / 0 / 0 / 0 / 23 / 80 / 4 / 0 / 1 / 3 | B: numbers found after the name (line 61); check the size |
| Salmon | 0.6 oz | only in draft B | not found | 60 / 2 / 0.5 / 0 / 10 / 70 / 5 / 0 / 1 / 4 | B: numbers found after the name (line 29); check the size |
| Tuna | 0.6 oz | only in draft B | not found | 40 / 0 / 0 / 0 / 5 / 70 / 5 / 0 / 1 / 5 | B: numbers found after the name (line 27); check the size |
| Spicy Tuna Roll | 6 oz | only in draft B | not found | 340 / 6 / 1 / 0 / 22 / 924 / 56 / 1 / 12 / 13 | B: numbers found after the name (line 107); check the size |
| California Roll | 7 oz | only in draft B | not found | 280 / 5 / 0 / 0 / 4 / 680 / 55 / 5 / 10 / 13 | B: numbers found after the name (line 117); check the size |
| Spicy Tuna | 6.06 oz | only in draft B | not found | 220 / 3.8 / 0 / 0 / 5 / 1940 / 38 / 3 / 22 / 10 | B: numbers found after the name (line 123); check the size |
| Spicy Yellowtail | 6.06 oz | only in draft B | not found | 200 / 3.8 / 0 / 0 / 5 / 1940 / 38 / 3 / 22 / 7 | B: numbers found after the name (line 124); check the size |
| Spicy Salmon | 6.06 oz | only in draft B | not found | 240 / 5.9 / 0 / 0 / 11 / 1940 / 38 / 3 / 22 / 9 | B: numbers found after the name (line 125); check the size |
| Chili Shrimp Roll | 12 oz | only in draft B | not found | 810 / 32 / 6 / 0 / 150 / 2108 / 101 / 3 / 27 / 20 | B: numbers found after the name (line 127); check the size |
| Shrimp Crunchy Roll | 8 oz | only in draft B | not found | 500 / 20 / 3 / 0 / 20 / 1260 / 68 / 1 / 12 / 11 | B: numbers found after the name (line 129); check the size |
| Hibachi Vegetables Onions | 2 oz | only in draft B | not found | 30 / 0.5 / 0.1 / 0 / 0 / 30 / 5 / 1 / 0 / 0.5 | B: numbers found after the name (line 141); check the size |
| Hibachi Vegetables Zucchini | 2 oz | only in draft B | not found | 20 / 0.4 / 0.1 / 0 / 0 / 30 / 2 / 1 / 0 / 0.5 | B: numbers found after the name (line 142); check the size |
| Benihana's Original Yum Yum SauceTM | 1 oz | only in draft B | not found | 170 / 170 / 19 / 3 / 0 / 80 / 150 / 2 / 0 / 0.5 | B: numbers found after the name (line 145); check the size |
| Steamed Rice | 6 oz | only in draft B | not found | 300 / 0 / 0 / 0 / 0 / 5 / 72 / 0.5 / 0.5 / 6 | B: numbers found after the name (line 146); check the size |
| Yakisoba Chicken | 15.9 oz | only in draft B | not found | 640 / 14 / 2 / 0 / 75 / 1540 / 94 / 9 / 11 / 34 | B: numbers found after the name (line 150); check the size |
| Filet Mignon | 5.75 oz | only in draft B | not found | 250 / 11 / 5 / 0.5 / 85 / 190 / 1 / 0 / 0 / 36 | B: numbers found after the name (line 155); check the size |
| Hibachi Steak | 7.00 oz | only in draft B | not found | 230 / 11 / 5 / 1 / 160 / 190 / 1 / 0 / 0 / 32 | B: numbers found after the name (line 159); check the size |
| Hibachi Chateaubriand | 8.50 oz | only in draft B | not found | 360 / 18 / 7 / 0.5 / 130 / 400 / 3 / 0 / 20 / 48 | B: numbers found after the name (line 161); check the size |
| Hibachi Tuna Steak | 11 oz | only in draft B | not found | 500 / 31 / 4.5 / 0 / 155 / 530 / 7 / 1 / 0.5 / 45 | B: numbers found after the name (line 169); check the size |
| Ice cream | 3 oz | only in draft B | not found | 100 / 5 / 3 / 0 / 20 / 25 / 13 / 1 / 11 / 2 | B: numbers found after the name (line 187); check the size |
| Chicken | 3.50 oz | only in draft B | not found | 130 / 5 / 1.5 / 0 / 55 / 55 / 0 / 0 / 0 / 22 | B: numbers found after the name (line 192); check the size |
| Filet Mignon | 4.75 oz | only in draft B | not found | 200 / 9 / 4.5 / 0 / 70 / 160 / 1 / 1 / 0.5 / 30 | B: numbers found after the name (line 197); check the size |
| Chicken | 3.500 oz | only in draft B | not found | 130 / 5 / 1.5 / 0 / 55 / 55 / 0 / 0 / 0 / 22 | B: numbers found after the name (line 192); check the size |
| Steak Julienne | 3 oz | only in draft B | not found | 110 / 4 / 1.5 / 0 / 70 / 210 / 6 / 0 / 0 / 13 | B: numbers found after the name (line 237); check the size |
| Lunch Boat Chicken | 3.5 oz | only in draft B | not found | 130 / 5 / 1.5 / 0 / 55 / 55 / 0 / 0 / 0 / 22 | B: numbers found after the name (line 261); check the size |
| Lunch Boat Steak Julienne | 3 oz | only in draft B | not found | 110 / 4 / 1.5 / 0 / 70 / 210 / 6 / 0 / 0 / 13 | B: numbers found after the name (line 263); check the size |
| Hibachi Chicken Rice | 6 oz | only in draft B | not found | 440 / 11 / 2.5 / 0 / 150 / 570 / 70 / 6 / 0.5 / 15 | B: numbers found after the name (line 282); check the size |
| Chicken & Shrimp | 3.5 / (5 EA) | only in draft B | not found | 200 / 7 / 1.8 / 0 / 115 / 220 / 0 / 0 / 0 / 35 | B: numbers found after the name (line 321); check the size |
| Chicken & Steak | 3.5 / 2.5 | only in draft B | not found | 210 / 9 / 3.1 / 0.2 / 115 / 120 / 0 / 0 / 0 / 33 | B: numbers found after the name (line 322); check the size |
| Steak & Shrimp | 2.5 / (5 EA) | only in draft B | not found | 150 / 5 / 1.9 / 0.2 / 115 / 230 / 0 / 0 / 0 / 25 | B: numbers found after the name (line 323); check the size |
| Filet Mignon & Chicken | 6.5 | only in draft B | not found | 260 / 10.7 / 4.2 / 0.3 / 101.41 / 156 / 1 / 1 / 0 / 41 | B: numbers found after the name (line 324); check the size |
| Filet Mignon & Shrimp | 6.6 | only in draft B | not found | 200 / 7.2 / 2.9 / 0.3 / 106.22 / 275 / 0 / 0 / 0 / 33 | B: numbers found after the name (line 325); check the size |
| Shrimp Appelizer | 3 EA | only in draft B | not found | 40 / 1 / 0 / 0 / 35 / 100 / 0 / 0 / 0 / 8 | B: numbers found after the name (line 334); check the size |
| Yakisoba Steak | 15 | only in draft B | not found | 630 / 13 / 2 / 0 / 80 / 1640 / 98 / 9 / 11 / 28 | B: numbers found after the name (line 343); check the size |
| Yakisoba Shrimp | 15 | only in draft B | not found | 610 / 12 / 1 / 0 / 80 / 1640 / 94 / 9 / 11 / 30 | B: numbers found after the name (line 344); check the size |
| California Roll | 1 roll | both read it the same, but its protein, carbs and fat make 318 kcal, not 270 | 270 / 5 / 0 / 0 / 4.2 / 682 / 55.2 / 4.8 / 10.1 / 13 | 270 / 5 / 0 / 0 / 4.2 / 682 / 55.2 / 4.8 / 10.1 / 13 | A: numbers found after the name (line 242); check the size; B: numbers found after the name (line 242); check the size |
| Fruit | 1 serving | both read it the same, but its protein, carbs and fat make 74 kcal, not 30 | 30 / 0.2 / 0.2 / 0.2 / 0.21 / 1 / 17 / 2 / 8 / 1 | 30 / 0.2 / 0.2 / 0.2 / 0.21 / 1 / 17 / 2 / 8 / 1 | A: numbers found after the name (line 259); check the size; B: numbers found after the name (line 259); check the size |
| Hibachi Chicken Rice | 9 | both read it the same, but its protein, carbs and fat make 443 kcal, not 560 | 560 / 11 / 2.5 / 0 / 150 / 570 / 71 / 6 / 0.5 / 15 | 560 / 11 / 2.5 / 0 / 150 / 570 / 71 / 6 / 0.5 / 15 | A: numbers found after the name (line 328); check the size; B: numbers found after the name (line 328); check the size |
| Spicy Chicken Gyoza | 5 | both read it the same, but its protein, carbs and fat make 307 kcal, not 370 | 370 / 8.8 / 2.5 / 0 / 43.8 / 1332 / 44 / 2.5 / 5 / 13 | 370 / 8.8 / 2.5 / 0 / 43.8 / 1332 / 44 / 2.5 / 5 / 13 | A: numbers found after the name (line 377); check the size; B: numbers found after the name (line 377); check the size |
| Sesame Garlic Sauce | 20 (6 wings) | both read it the same, but its protein, carbs and fat make 1166 kcal, not 770 | 770 / 90 / 26 / 0 / 500 / 1856 / 8 / 0 / 0 / 81 | 770 / 90 / 26 / 0 / 500 / 1856 / 8 / 0 / 0 / 81 | A: numbers found after the name (line 23); check the size; B: numbers found after the name (line 23); check the size |
| Black Pepper Teriyaki Sauce | 19 (6 wings) | both read it the same, but its protein, carbs and fat make 960 kcal, not 680 | 680 / 60 / 18 / 0 / 500 / 2446 / 22 / 0 / 20 / 83 | 680 / 60 / 18 / 0 / 500 / 2446 / 22 / 0 / 20 / 83 | A: numbers found after the name (line 24); check the size; B: numbers found after the name (line 24); check the size |
| Spicy Sauce | 21 (6 wings) | both read it the same, but its protein, carbs and fat make 978 kcal, not 690 | 690 / 70 / 19 / 0 / 500 / 2276 / 5 / 1 / 3 / 82 | 690 / 70 / 19 / 0 / 500 / 2276 / 5 / 1 / 3 / 82 | A: numbers found after the name (line 25); check the size; B: numbers found after the name (line 25); check the size |
| Hibachi Chicken Rice | 9.03 oz | both read it the same, but its protein, carbs and fat make 439 kcal, not 560 | 560 / 11 / 2.5 / 0 / 150 / 570 / 70 / 6 / 0.5 / 15 | 560 / 11 / 2.5 / 0 / 150 / 570 / 70 / 6 / 0.5 / 15 | A: numbers found after the name (line 39); check the size; B: numbers found after the name (line 39); check the size |
| Hibachi Steak Rice | 9.03 oz | both read it the same, but its protein, carbs and fat make 470 kcal, not 600 | 600 / 14 / 2.8 / 0 / 151 / 564 / 71 / 6 / 1 / 15 | 600 / 14 / 2.8 / 0 / 151 / 564 / 71 / 6 / 1 / 15 | A: numbers found after the name (line 40); check the size; B: numbers found after the name (line 40); check the size |
| Hibachi Shrimp Rice | 9.03 oz | both read it the same, but its protein, carbs and fat make 437 kcal, not 600 | 600 / 10.3 / 1.3 / 0 / 159 / 621 / 71 / 6 / 1 / 15 | 600 / 10.3 / 1.3 / 0 / 159 / 621 / 71 / 6 / 1 / 15 | A: numbers found after the name (line 41); check the size; B: numbers found after the name (line 41); check the size |
| Spicy Hibachi Chicken Rice | 9.03 oz | both read it the same, but its protein, carbs and fat make 479 kcal, not 600 | 600 / 15 / 3 / 0 / 150 / 770 / 71 / 6 / 1 / 15 | 600 / 15 / 3 / 0 / 150 / 770 / 71 / 6 / 1 / 15 | A: numbers found after the name (line 42); check the size; B: numbers found after the name (line 42); check the size |
| Spicy Fried Steak Rice | 9.03 oz | both read it the same, but its protein, carbs and fat make 497 kcal, not 640 | 640 / 17 / 3 / 0 / 151 / 765 / 71 / 6 / 1 / 15 | 640 / 17 / 3 / 0 / 151 / 765 / 71 / 6 / 1 / 15 | A: numbers found after the name (line 43); check the size; B: numbers found after the name (line 43); check the size |
| Spicy Fried Shrimp Rice | 9.03 oz | both read it the same, but its protein, carbs and fat make 470 kcal, not 600 | 600 / 14 / 3 / 0 / 159 / 671 / 71 / 6 / 1 / 15 | 600 / 14 / 3 / 0 / 159 / 671 / 71 / 6 / 1 / 15 | A: numbers found after the name (line 44); check the size; B: numbers found after the name (line 44); check the size |
| Avocado and Cucumber Roll | 270 oz | both read it the same, but its protein, carbs and fat make 213 kcal, not 60 | 60 / 1 / 0 / 0 / 0 / 570 / 46 / 5 / 6 / 5 | 60 / 1 / 0 / 0 / 0 / 570 / 46 / 5 / 6 / 5 | A: numbers found after the name (line 115); check the size; B: numbers found after the name (line 115); check the size |
| Shrimp Lover's Roll | 8 oz | both read it the same, but its protein, carbs and fat make 393 kcal, not 240 | 240 / 9 / 2 / 0 / 60 / 1283 / 61 / 7 / 16 / 17 | 240 / 9 / 2 / 0 / 60 / 1283 / 61 / 7 / 16 / 17 | A: numbers found after the name (line 121); check the size; B: numbers found after the name (line 121); check the size |
| Las Vegas Roll | 8 oz | both read it the same, but its protein, carbs and fat make 473 kcal, not 280 | 280 / 21 / 7 / 0 / 32 / 878 / 58 / 5 / 12 / 13 | 280 / 21 / 7 / 0 / 32 / 878 / 58 / 5 / 12 / 13 | A: numbers found after the name (line 128); check the size; B: numbers found after the name (line 128); check the size |
| Sumo Roll | 12 oz | both read it the same, but its protein, carbs and fat make 995 kcal, not 610 | 610 / 55 / 10 / 0 / 136 / 1466 / 96 / 5 / 15 / 29 | 610 / 55 / 10 / 0 / 136 / 1466 / 96 / 5 / 15 / 29 | A: numbers found after the name (line 130); check the size; B: numbers found after the name (line 130); check the size |

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
