# Noodles & Company: lines for a person

Guide: https://www.noodles.com/sites/default/files/2026-01/Menu%20Nutritionals%201.14.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (61)

The last column comes from `npm run chains:evidence`: whether a draft's numbers sit right after the item's name in the guide text the drafts read. It can't read sizes or sections (one draft called a single 78 g cookie a "6 pack"): check those against the guide, then fix the line and set its check to `person`.

Fix each line in `menus/noodles-and-company.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B | In the guide text (no AI) |
| --- | --- | --- | --- | --- | --- |
| Roasted Garlic Cream Tortelloni | REG | only in draft A | 770 / 38 / 10 / 0 / 140 / 2400 / 72 / 5 / 7 / 36 | not found | A: numbers found after the name (line 5); check the size |
| Roasted Garlic Cream Tortelloni | SM | only in draft A | 380 / 19 / 0.5 / – / 70 / 1200 / 36 / 3 / 4 / 18 | not found | A: numbers found after the name (line 5); check the size |
| Pasta Fresca | SM | only in draft A | 330 / 10 / 2 / 0 / 5 / 620 / 52 / 5 / 5 / 10 | not found | A: numbers found after the name (line 10); check the size |
| Chicken Parmesan | REG | only in draft A | 940 / 12 / 1 / 0 / 90 / 1840 / 115 / 8 / 8 / 15 | not found | A: numbers found after the name (line 16); check the size |
| Chicken Parmesan | SM | only in draft A | 292 / 12 / 1 / 0 / – / – / 107 / 15 / 15 / 51 | not found | A: numbers found after the name (line 16); check the size |
| Chicken Caesar Salad | REG | only in draft A | 670 / 49 / 12 / 12 / 12 / 0.5 / 150 / 1510 / 1510 / 1510 | not found | A: numbers found after the name (line 27); check the size |
| Mediterranean Chicken Salad | REG | only in draft A | 430 / 17 / 6 / 12 / 12 / 0 / 0 / 125 / 1700 / 1700 | not found | A: numbers found after the name (line 28); check the size |
| Chicken Noodle Soup | REG | only in draft A | 360 / 10 / 2.5 / 10 / 140 / 140 / 140 / 140 / 140 / 140 | not found | A: numbers found after the name (line 29); check the size |
| Parmesan-Crusted Chicken | 1 serving | differ: calories, fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, protein_g | 180 / 8 / 2 / 2 / 55 / 55 / 8 / 1 / 0 / 1 | 100 / 4 / 1 / 0 / 30 / 460 / 4 / 0 / 0 / 11 | A: numbers found after the name (line 31); check the size; B: numbers found after the name (line 98); check the size |
| Grilled Chicken | 1 serving | only in draft A | 150 / 4 / 1 / 0 / 105 / 105 / 0 / 0 / 1 / 0 | not found | A: numbers found after the name (line 32); check the size |
| Sauteed Shrimp | 1 serving | only in draft A | 40 / 0 / 0 / 0 / 0 / 95 / 0 / 0 / 0 / 0 | not found | A: numbers found after the name (line 33); check the size, mostly zeros: look |
| Marinated Steak | 1 serving | only in draft A | 140 / 7 / 2 / 2 / 40 / 40 / 3 / 3 / 3 / 3 | not found | A: numbers found after the name (line 34); check the size |
| Pulled Pork | 1 serving | only in draft A | 130 / 5 / 1.5 / 1.5 / 15 / 15 / 1 / 1 / 0 / 1 | not found | A: numbers found after the name (line 35); check the size |
| Oven-Roasted Meatballs | 1 serving | differ: calories, fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 360 / 31 / 14 / 1.5 / 80 / 80 / 5 / 5 / 5 / 5 | 220 / 18 / 8 / 0.5 / 55 / 440 / 2 / 0 / 0 / 10 | A: numbers found after the name (line 36); check the size; B: numbers found after the name (line 103); check the size |
| Seasoned Tofu | 1 serving | only in draft A | 230 / 15 / 2 / 2 / 0 / 0 / 6 / 5 / 1 / 1 | not found | A: numbers found after the name (line 37); check the size |
| Potstickers with dipping sauce | 1 serving | only in draft A | 330 / 8 / 8 / 1 / 0 / 30 / 47 / 2 / 13 / 14 | not found | A: numbers found after the name (line 39); check the size |
| Cheesy Garlic Bread with marinara | 1 serving | only in draft A | 610 / 25 / 14 / 1 / 1 / 55 / 78 / 78 / 0 / 10 | not found | A: numbers found after the name (line 40); check the size |
| Korean BBQ Meatballs | 1 serving | only in draft A | 440 / 34 / 14 / 1.5 / 15 / 80 / 16 / 15 / 1 / 11 | not found | A: numbers found after the name (line 41); check the size |
| Garden Salad | 1 serving | only in draft A | 70 / 6 / 1 / 0 / 0 / 125 / 5 / 1 / 1 / 1 | not found | A: numbers found after the name (line 42); check the size |
| Creamy Cheddar Mac | 1 serving | differ: calories, fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 260 / 11 / 6 / 0 / 30 / 480 / 30 / 1 / 2 / 1 | 520 / 22 / 11 / 0.5 / 55 / 950 / 60 / 3 / 5 / 23 | A: numbers found after the name (line 44); check the size; B: numbers found after the name (line 22); check the size |
| Lemon Parmesan Broccoli | 1 serving | only in draft A | 140 / 13 / 8 / 0 / 35 / 350 / 4 / 2 / 2 / 1 | not found | A: numbers found after the name (line 45); check the size |
| Chicken Noodle Soup | 1 serving | only in draft A | 120 / 3.5 / 1 / 0 / 55 / 840 / 11 / 1 / 10 / 1 | not found | A: numbers found after the name (line 46); check the size |
| Baguette | 1 serving | only in draft A | 170 / 1.5 / 0.5 / 0 / 0 / 410 / 33 / 0 / 0 / 2 | not found | A: numbers found after the name (line 47); check the size |
| Rice Crispy | 1 serving | differ: calories, fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, sugars_g, protein_g | 540 / 19 / 12 / 1 / 1 / 50 / 87 / 0 / 39 / 6 | 130 / 5 / 3 / 0 / 10 / 115 / 22 / 0 / 10 / 1 | A: numbers found after the name (line 49); check the size; B: numbers found after the name (line 61); check the size |
| Chocolate Chunk Cookie | 1 serving | only in draft A | 450 / 21 / 9 / 0 / 25 / 290 / 64 / 3 / 36 / 6 | not found | A: numbers found after the name (line 50); check the size |
| Snoodle Doodle Cookie | 1 serving | only in draft A | 450 / 20 / 8 / 0 / 25 / 290 / 64 / 3 / 36 / 6 | not found | A: numbers found after the name (line 51); check the size |
| Roasted Garlic Cream Tortelloni ☑ w/a | REG | only in draft B | not found | 770 / 38 / – / 0.5 / 140 / 2400 / 72 / 5 / 7 / 36 | B: numbers found after the name (line 5); check the size |
| Roasted Garlic Cream Tortelloni ☑ w/a | SM | only in draft B | not found | 380 / 19 / 10 / 0 / 70 / 1200 / 36 / 3 / 4 / 18 | B: numbers found after the name (line 5); check the size |
| Pasta Fresca ☑ w/a | SM | only in draft B | not found | 330 / 10 / 2 / 0 / 5 / 620 / 52 / 5 / 5 / 10 | B: numbers found after the name (line 10); check the size |
| Buttery Parmesan Noodles | 1 serving | only in draft B | not found | 370 / 17 / 7 / 0 / 105 / 210 / 49 / 2 / 3 / 11 | B: numbers found after the name (line 8); check the size |
| Spaghetti & Meatballs | 1 serving | only in draft B | not found | 520 / 26 / 10 / 1 / 60 / 760 / 51 / 2 / 8 / 19 | B: numbers found after the name (line 57); check the size |
| Grilled Chicken Breast with Dipping Marinara* | 1 serving | only in draft B | not found | 170 / 5 / 1.5 / 0 / 105 / 640 / 3 / 1 / 2 / 27 | B: numbers found after the name (line 58); check the size |
| Broccoli* | 1 serving | only in draft B | not found | 15 / 0 / 0 / 0 / 0 / 15 / 3 / 1 / 1 / 2 | B: numbers found after the name (line 59); check the size |
| Applesauce | 1 serving | only in draft B | not found | 70 / 0 / 0 / 0 / 0 / 0 / 16 / 3 / 13 / 0 | B: numbers found after the name (line 60); check the size |
| Strogenoff w/a | 1 serving | only in draft B | not found | 540 / 30 / 13 / 0.5 / 120 / 610 / 57 / 4 / 6 / 15 | B: numbers found after the name (line 74); check the size |
| Creamy Cheddar Mac Ø | 1 serving | only in draft B | not found | 520 / 22 / 11 / 0.5 / 55 / 950 / 60 / 3 / 5 / 23 | B: numbers found after the name (line 75); check the size |
| Rigatoni Rosa Ø | 1 serving | only in draft B | not found | 350 / 11 / 4 / 0 / 15 / 360 / 52 / 6 / 6 / 11 | B: numbers found after the name (line 76); check the size |
| Pad Thai ✗ | 1 serving | only in draft B | not found | 520 / 21 / 4 / 0 / 170 / 1010 / 72 / 2 / 22 / 10 | B: numbers found after the name (line 77); check the size |
| Crispy Bacon Alfredo | 1 serving | only in draft B | not found | 490 / 27 / 15 / 0 / 85 / 460 / 48 / 4 / 3 / 14 | B: numbers found after the name (line 78); check the size |
| Buffalo Ranch Mac Ø | 1 serving | only in draft B | not found | 590 / 28 / 11 / 0.5 / 55 / 1450 / 64 / 3 / 6 / 22 | B: numbers found after the name (line 79); check the size |
| Buttery Parmesan Noodles Ø | 1 serving | only in draft B | not found | 370 / 17 / 7 / 0 / 105 / 160 / 49 / 2 / 3 / 11 | B: numbers found after the name (line 80); check the size |
| BBQ Mac Ø | 1 serving | only in draft B | not found | 550 / 22 / 10 / 0.5 / 50 / 1050 / 68 / 3 / 10 / 21 | B: numbers found after the name (line 81); check the size |
| Japanese Pan Noodles Ø | 1 serving | only in draft B | not found | 320 / 6 / 2 / 0 / 0 / 1000 / 57 / 2 / 11 / 10 | B: numbers found after the name (line 82); check the size |
| Basil Pesto Cavatappi Ø | 1 serving | only in draft B | not found | 430 / 20 / 7 / 0 / 25 / 570 / 51 / 5 / 4 / 12 | B: numbers found after the name (line 83); check the size |
| Spaghetti Ø | 1 serving | only in draft B | not found | 310 / 9 / 2 / 0.5 / 5 / 400 / 49 / 2 / 8 / 10 | B: numbers found after the name (line 84); check the size |
| Spicy Korean Noodles Ø w/a | 1 serving | only in draft B | not found | 410 / 9 / 1 / 0 / 0 / 1510 / 74 / 1 / 21 / 9 | B: numbers found after the name (line 85); check the size |
| Garlic Bacon Crunch Mac | 1 serving | only in draft B | not found | 640 / 31 / 14 / 0.5 / 70 / 1160 / 64 / 3 / 5 / 28 | B: numbers found after the name (line 25); check the size |
| Cajun Fettuccine | 1 serving | only in draft B | not found | 490 / 27 / 14 / 0 / 80 / 750 / 49 / 4 / 4 / 13 | B: numbers found after the name (line 87); check the size |
| Pasta Fresca Ø w/a | 1 serving | only in draft B | not found | 330 / 10 / 2 / 0 / 5 / 620 / 52 / 5 / 5 / 10 | B: numbers found after the name (line 88); check the size |
| Lemon Garlic Scampi Ø | 1 serving | only in draft B | not found | 510 / 30 / 13 / 0.5 / 60 / 550 / 52 / 5 / 4 / 11 | B: numbers found after the name (line 89); check the size |
| Roasted Garlic Cream Tortelloni Ø w/a | 1 serving | only in draft B | not found | 380 / 19 / 10 / 0 / 70 / 1200 / 36 / 3 / 4 / 18 | B: numbers found after the name (line 90); check the size |
| Chipotle Cavatappi Ø | 1 serving | only in draft B | not found | 520 / 28 / 14 / 0 / 75 / 660 / 54 / 3 / 6 / 13 | B: numbers found after the name (line 91); check the size |
| Garden Salad ✗ | 1 serving | only in draft B | not found | 70 / 6 / 1 / 0 / 0 / 125 / 5 / 1 / 3 / 1 | B: numbers found after the name (line 94); check the size |
| Lemon Parmesan Broccoli ✗ | 1 serving | only in draft B | not found | 140 / 13 / 8 / 0 / 35 / 350 / 4 / 2 / 2 / 3 | B: numbers found after the name (line 95); check the size |
| Chicken Noodle Soup w | 1 serving | only in draft B | not found | 120 / 3.5 / 1 / 0 / 55 / 840 / 11 / 1 / 3 / 13 | B: numbers found after the name (line 96); check the size |
| Grilled Chicken ✗ | 1 serving | only in draft B | not found | 70 / 2 / 0.5 / 0 / 55 / 270 / 0 / 0 / 0 / 13 | B: numbers found after the name (line 99); check the size |
| Sautéed Shrimp ✗ | 1 serving | only in draft B | not found | 20 / 0 / 0 / 0 / 50 / 160 / 0 / 0 / 0 / 5 | B: numbers found after the name (line 100); check the size |
| Marinated Steak ✗ | 1 serving | only in draft B | not found | 70 / 3.5 / 1 / 0 / 20 / 190 / 1 / 0 / 0 / 7 | B: numbers found after the name (line 101); check the size |
| Pulled Pork ✗ | 1 serving | only in draft B | not found | 70 / 2.5 / 1 / 0 / 30 / 240 / 1 / 0 / 0 / 10 | B: numbers found after the name (line 102); check the size |
| Seasoned Tofu Ø | 1 serving | only in draft B | not found | 130 / 8 / 1 / 0 / 0 / 320 / 4 / 1 / 3 / 11 | B: numbers found after the name (line 104); check the size |
| Pasta Fresca ☑ w/a | REG | both read it the same, but its protein, carbs and fat make 676 kcal, not 860 | 860 / 20 / 4 / 0 / 5 / 1240 / 103 / 10 / 10 / 21 | 860 / 20 / 4 / 0 / 5 / 1240 / 103 / 10 / 10 / 21 | A: numbers found after the name (line 10); check the size; B: numbers found after the name (line 10); check the size |

## Spot check (3 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Buffalo Chicken Ranch Mac | REG | 1380 / 61 / 24 / 1.5 / 215 / 3450 / 128 / 6 / 12 / 70 |
| Garlic Bacon Crunch Mac | SM | 640 / 31 / 14 / 0.5 / 70 / 1160 / 64 / 3 / 5 / 28 |
| Crispy Chicken Bacon Alfredo | SM | 680 / 35 / 16 / 0 / 135 / 1380 / 57 / 5 / 4 / 36 |
