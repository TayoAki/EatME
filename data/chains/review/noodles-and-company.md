# Noodles & Company: lines for a person

Guide: https://www.noodles.com/sites/default/files/2026-01/Menu%20Nutritionals%201.14.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (60)

Fix each line in `menus/noodles-and-company.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B |
| --- | --- | --- | --- | --- |
| Roasted Garlic Cream Tortelloni | REG | only in draft A | 770 / 38 / 10 / 0 / 140 / 2400 / 72 / 5 / 7 / 36 | not found |
| Roasted Garlic Cream Tortelloni | SM | only in draft A | 380 / 19 / 0.5 / – / 70 / 1200 / 36 / 3 / 4 / 18 | not found |
| Pasta Fresca | SM | only in draft A | 330 / 10 / 2 / 0 / 5 / 620 / 52 / 5 / 5 / 10 | not found |
| Chicken Parmesan | REG | only in draft A | 940 / 12 / 1 / 0 / 90 / 1840 / 115 / 8 / 8 / 15 | not found |
| Chicken Parmesan | SM | only in draft A | 292 / 12 / 1 / 0 / – / – / 107 / 15 / 15 / 51 | not found |
| Chicken Caesar Salad | REG | only in draft A | 670 / 49 / 12 / 12 / 12 / 0.5 / 150 / 1510 / 1510 / 1510 | not found |
| Mediterranean Chicken Salad | REG | only in draft A | 430 / 17 / 6 / 12 / 12 / 0 / 0 / 125 / 1700 / 1700 | not found |
| Chicken Noodle Soup | REG | only in draft A | 360 / 10 / 2.5 / 10 / 140 / 140 / 140 / 140 / 140 / 140 | not found |
| Parmesan-Crusted Chicken | 1 serving | differ: calories, fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, protein_g | 180 / 8 / 2 / 2 / 55 / 55 / 8 / 1 / 0 / 1 | 100 / 4 / 1 / 0 / 30 / 460 / 4 / 0 / 0 / 11 |
| Grilled Chicken | 1 serving | only in draft A | 150 / 4 / 1 / 0 / 105 / 105 / 0 / 0 / 1 / 0 | not found |
| Sauteed Shrimp | 1 serving | only in draft A | 40 / 0 / 0 / 0 / 0 / 95 / 0 / 0 / 0 / 0 | not found |
| Marinated Steak | 1 serving | only in draft A | 140 / 7 / 2 / 2 / 40 / 40 / 3 / 3 / 3 / 3 | not found |
| Pulled Pork | 1 serving | only in draft A | 130 / 5 / 1.5 / 1.5 / 15 / 15 / 1 / 1 / 0 / 1 | not found |
| Oven-Roasted Meatballs | 1 serving | differ: calories, fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 360 / 31 / 14 / 1.5 / 80 / 80 / 5 / 5 / 5 / 5 | 220 / 18 / 8 / 0.5 / 55 / 440 / 2 / 0 / 0 / 10 |
| Seasoned Tofu | 1 serving | only in draft A | 230 / 15 / 2 / 2 / 0 / 0 / 6 / 5 / 1 / 1 | not found |
| Potstickers with dipping sauce | 1 serving | only in draft A | 330 / 8 / 8 / 1 / 0 / 30 / 47 / 2 / 13 / 14 | not found |
| Cheesy Garlic Bread with marinara | 1 serving | only in draft A | 610 / 25 / 14 / 1 / 1 / 55 / 78 / 78 / 0 / 10 | not found |
| Korean BBQ Meatballs | 1 serving | only in draft A | 440 / 34 / 14 / 1.5 / 15 / 80 / 16 / 15 / 1 / 11 | not found |
| Garden Salad | 1 serving | only in draft A | 70 / 6 / 1 / 0 / 0 / 125 / 5 / 1 / 1 / 1 | not found |
| Creamy Cheddar Mac | 1 serving | differ: calories, fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 260 / 11 / 6 / 0 / 30 / 480 / 30 / 1 / 2 / 1 | 520 / 22 / 11 / 0.5 / 55 / 950 / 60 / 3 / 5 / 23 |
| Lemon Parmesan Broccoli | 1 serving | only in draft A | 140 / 13 / 8 / 0 / 35 / 350 / 4 / 2 / 2 / 1 | not found |
| Chicken Noodle Soup | 1 serving | only in draft A | 120 / 3.5 / 1 / 0 / 55 / 840 / 11 / 1 / 10 / 1 | not found |
| Baguette | 1 serving | only in draft A | 170 / 1.5 / 0.5 / 0 / 0 / 410 / 33 / 0 / 0 / 2 | not found |
| Rice Crispy | 1 serving | differ: calories, fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, sugars_g, protein_g | 540 / 19 / 12 / 1 / 1 / 50 / 87 / 0 / 39 / 6 | 130 / 5 / 3 / 0 / 10 / 115 / 22 / 0 / 10 / 1 |
| Chocolate Chunk Cookie | 1 serving | only in draft A | 450 / 21 / 9 / 0 / 25 / 290 / 64 / 3 / 36 / 6 | not found |
| Snoodle Doodle Cookie | 1 serving | only in draft A | 450 / 20 / 8 / 0 / 25 / 290 / 64 / 3 / 36 / 6 | not found |
| Roasted Garlic Cream Tortelloni ☑ w/a | REG | only in draft B | not found | 770 / 38 / – / 0.5 / 140 / 2400 / 72 / 5 / 7 / 36 |
| Roasted Garlic Cream Tortelloni ☑ w/a | SM | only in draft B | not found | 380 / 19 / 10 / 0 / 70 / 1200 / 36 / 3 / 4 / 18 |
| Pasta Fresca ☑ w/a | SM | only in draft B | not found | 330 / 10 / 2 / 0 / 5 / 620 / 52 / 5 / 5 / 10 |
| Buttery Parmesan Noodles | 1 serving | only in draft B | not found | 370 / 17 / 7 / 0 / 105 / 210 / 49 / 2 / 3 / 11 |
| Spaghetti & Meatballs | 1 serving | only in draft B | not found | 520 / 26 / 10 / 1 / 60 / 760 / 51 / 2 / 8 / 19 |
| Grilled Chicken Breast with Dipping Marinara* | 1 serving | only in draft B | not found | 170 / 5 / 1.5 / 0 / 105 / 640 / 3 / 1 / 2 / 27 |
| Broccoli* | 1 serving | only in draft B | not found | 15 / 0 / 0 / 0 / 0 / 15 / 3 / 1 / 1 / 2 |
| Applesauce | 1 serving | only in draft B | not found | 70 / 0 / 0 / 0 / 0 / 0 / 16 / 3 / 13 / 0 |
| Strogenoff w/a | 1 serving | only in draft B | not found | 540 / 30 / 13 / 0.5 / 120 / 610 / 57 / 4 / 6 / 15 |
| Creamy Cheddar Mac Ø | 1 serving | only in draft B | not found | 520 / 22 / 11 / 0.5 / 55 / 950 / 60 / 3 / 5 / 23 |
| Rigatoni Rosa Ø | 1 serving | only in draft B | not found | 350 / 11 / 4 / 0 / 15 / 360 / 52 / 6 / 6 / 11 |
| Pad Thai ✗ | 1 serving | only in draft B | not found | 520 / 21 / 4 / 0 / 170 / 1010 / 72 / 2 / 22 / 10 |
| Crispy Bacon Alfredo | 1 serving | only in draft B | not found | 490 / 27 / 15 / 0 / 85 / 460 / 48 / 4 / 3 / 14 |
| Buffalo Ranch Mac Ø | 1 serving | only in draft B | not found | 590 / 28 / 11 / 0.5 / 55 / 1450 / 64 / 3 / 6 / 22 |
| Buttery Parmesan Noodles Ø | 1 serving | only in draft B | not found | 370 / 17 / 7 / 0 / 105 / 160 / 49 / 2 / 3 / 11 |
| BBQ Mac Ø | 1 serving | only in draft B | not found | 550 / 22 / 10 / 0.5 / 50 / 1050 / 68 / 3 / 10 / 21 |
| Japanese Pan Noodles Ø | 1 serving | only in draft B | not found | 320 / 6 / 2 / 0 / 0 / 1000 / 57 / 2 / 11 / 10 |
| Basil Pesto Cavatappi Ø | 1 serving | only in draft B | not found | 430 / 20 / 7 / 0 / 25 / 570 / 51 / 5 / 4 / 12 |
| Spaghetti Ø | 1 serving | only in draft B | not found | 310 / 9 / 2 / 0.5 / 5 / 400 / 49 / 2 / 8 / 10 |
| Spicy Korean Noodles Ø w/a | 1 serving | only in draft B | not found | 410 / 9 / 1 / 0 / 0 / 1510 / 74 / 1 / 21 / 9 |
| Garlic Bacon Crunch Mac | 1 serving | only in draft B | not found | 640 / 31 / 14 / 0.5 / 70 / 1160 / 64 / 3 / 5 / 28 |
| Cajun Fettuccine | 1 serving | only in draft B | not found | 490 / 27 / 14 / 0 / 80 / 750 / 49 / 4 / 4 / 13 |
| Pasta Fresca Ø w/a | 1 serving | only in draft B | not found | 330 / 10 / 2 / 0 / 5 / 620 / 52 / 5 / 5 / 10 |
| Lemon Garlic Scampi Ø | 1 serving | only in draft B | not found | 510 / 30 / 13 / 0.5 / 60 / 550 / 52 / 5 / 4 / 11 |
| Roasted Garlic Cream Tortelloni Ø w/a | 1 serving | only in draft B | not found | 380 / 19 / 10 / 0 / 70 / 1200 / 36 / 3 / 4 / 18 |
| Chipotle Cavatappi Ø | 1 serving | only in draft B | not found | 520 / 28 / 14 / 0 / 75 / 660 / 54 / 3 / 6 / 13 |
| Garden Salad ✗ | 1 serving | only in draft B | not found | 70 / 6 / 1 / 0 / 0 / 125 / 5 / 1 / 3 / 1 |
| Lemon Parmesan Broccoli ✗ | 1 serving | only in draft B | not found | 140 / 13 / 8 / 0 / 35 / 350 / 4 / 2 / 2 / 3 |
| Chicken Noodle Soup w | 1 serving | only in draft B | not found | 120 / 3.5 / 1 / 0 / 55 / 840 / 11 / 1 / 3 / 13 |
| Grilled Chicken ✗ | 1 serving | only in draft B | not found | 70 / 2 / 0.5 / 0 / 55 / 270 / 0 / 0 / 0 / 13 |
| Sautéed Shrimp ✗ | 1 serving | only in draft B | not found | 20 / 0 / 0 / 0 / 50 / 160 / 0 / 0 / 0 / 5 |
| Marinated Steak ✗ | 1 serving | only in draft B | not found | 70 / 3.5 / 1 / 0 / 20 / 190 / 1 / 0 / 0 / 7 |
| Pulled Pork ✗ | 1 serving | only in draft B | not found | 70 / 2.5 / 1 / 0 / 30 / 240 / 1 / 0 / 0 / 10 |
| Seasoned Tofu Ø | 1 serving | only in draft B | not found | 130 / 8 / 1 / 0 / 0 / 320 / 4 / 1 / 3 / 11 |

## Spot check (3 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Buffalo Chicken Ranch Mac | REG | 1380 / 61 / 24 / 1.5 / 215 / 3450 / 128 / 6 / 12 / 70 |
| Garlic Bacon Crunch Mac | SM | 640 / 31 / 14 / 0.5 / 70 / 1160 / 64 / 3 / 5 / 28 |
| Crispy Chicken Bacon Alfredo | SM | 680 / 35 / 16 / 0 / 135 / 1380 / 57 / 5 / 4 / 36 |
