# Papa Johns: lines for a person

Guide: https://www.papajohns.com/company/nutritional-details/index.html (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (82)

Fix each line in `menus/papa-johns.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B |
| --- | --- | --- | --- | --- |
| Pizza My Heart (Canada) | 1 Slice | both read numbers that can't be right: saturated and trans fat above fat | 170 / 8 / 24.47 / 3 / 15 / 350 / 19 / 1 / 1 / 6 | 170 / 8 / 24.47 / 3 / 15 / 350 / 19 / 1 / 1 / 6 |
| Cheese Pizza | 1 slice (Small, 6 slices per pizza) | only in draft B | not found | 180 / 6 / 2.5 / 0 / 15 / 440 / 25 / 1 / 3 / 7 |
| Cheese Pizza | 1 slice (Medium, 8 slices per pizza) | only in draft B | not found | 210 / 7 / 3.5 / 0 / 20 / 520 / 27 / 1 / 3 / 8 |
| Cheese Pizza | 1 slice (Large, 8 slices per pizza) | only in draft B | not found | 290 / 10 / 4.5 / 0 / 25 / 710 / 38 / 2 / 5 / 11 |
| Cheese Pizza | 1 slice (Extra Large, 10 slices per pizza) | only in draft B | not found | 300 / 10 / 4.5 / 0 / 25 / 730 / 40 / 2 / 5 / 11 |
| Cheese Pizza | 1 slice (8 slices per pizza) | only in draft B | not found | 360 / 14 / 8 / 0 / 35 / 900 / 40 / 2 / 4 / 15 |
| Pepperoni Pizza | 1 slice (Small, 6 slices per pizza) | only in draft B | not found | 210 / 8 / 3.5 / 0 / 20 / 530 / 25 / 1 / 3 / 8 |
| Pepperoni Pizza | 1 slice (Medium, 8 slices per pizza) | only in draft B | not found | 230 / 9 / 4 / 0 / 20 / 570 / 26 / 1 / 3 / 8 |
| Pepperoni Pizza | 1 slice (Large, 8 slices per pizza) | only in draft B | not found | 320 / 13 / 6 / 0 / 30 / 810 / 38 / 2 / 5 / 12 |
| Pepperoni Pizza | 1 slice (Extra Large, 10 slices per pizza) | only in draft B | not found | 330 / 13 / 6 / 0 / 30 / 840 / 40 / 2 / 5 / 12 |
| Pepperoni Pizza | 1 slice (8 slices per pizza) | only in draft B | not found | 390 / 17 / 8 / 0 / 45 / 980 / 40 / 2 / 4 / 16 |
| Sausage Pizza | 1 slice (Small, 6 slices per pizza) | only in draft B | not found | 220 / 10 / 4 / 0 / 20 / 540 / 25 / 1 / 3 / 8 |
| Sausage Pizza | 1 slice (Medium, 8 slices per pizza) | only in draft B | not found | 240 / 11 / 4.5 / 0 / 20 / 580 / 27 / 1 / 3 / 8 |
| Sausage Pizza | 1 slice (Large, 8 slices per pizza) | only in draft B | not found | 330 / 14 / 6 / 0 / 30 / 810 / 38 / 2 / 5 / 12 |
| Sausage Pizza | 1 slice (Extra Large, 10 slices per pizza) | only in draft B | not found | 340 / 15 / 6 / 0 / 30 / 840 / 40 / 2 / 5 / 12 |
| Sausage Pizza | 1 slice (8 slices per pizza) | only in draft B | not found | 400 / 19 / 9 / 0 / 45 / 1000 / 40 / 2 / 5 / 16 |
| BBQ Chicken Bacon | 1 slice (Small, 6 slices per pizza) | only in draft B | not found | 230 / 7 / 3.5 / 0 / 25 / 660 / 30 / 1 / 7 / 10 |
| BBQ Chicken Bacon | 1 slice (Medium, 8 slices per pizza) | only in draft B | not found | 240 / 8 / 3.5 / 0 / 25 / 730 / 32 / 1 / 8 / 11 |
| BBQ Chicken Bacon | 1 slice (Large, 8 slices per pizza) | only in draft B | not found | 340 / 11 / 5 / 0 / 40 / 1020 / 45 / 2 / 11 / 16 |
| BBQ Chicken Bacon | 1 slice (Extra Large, 10 slices per pizza) | only in draft B | not found | 360 / 11 / 5 / 0 / 40 / 1070 / 48 / 2 / 11 / 16 |
| BBQ Chicken Bacon | 1 slice (8 slices per pizza) | only in draft B | not found | 400 / 15 / 8 / 0 / 50 / 1090 / 45 / 2 / 10 / 20 |
| Butter Chicken | 1 slice (Small, 6 slices per pizza) | only in draft B | not found | 200 / 4 / 3 / 0 / 20 / 510 / 26 / 0 / 3 / 11 |
| Butter Chicken | 1 slice (Medium, 8 slices per pizza) | only in draft B | not found | 280 / 4 / 4 / 0 / 30 / 700 / 36 / 0 / 4 / 15 |
| Butter Chicken | 1 slice (Large, 8 slices per pizza) | only in draft B | not found | 300 / 4 / 4 / 0 / 30 / 750 / 38 / 0 / 6 / 16 |
| Butter Chicken | 1 slice (Extra Large, 10 slices per pizza) | only in draft B | not found | 310 / 5 / 4 / 0 / 30 / 780 / 41 / 1 / 5 / 16 |
| Butter Chicken | 1 slice (8 slices per pizza) | only in draft B | not found | 370 / 10 / 7 / 0 / 45 / 930 / 39 / 0 / 5 / 23 |
| Extra Cheesy Alfredo | 1 slice (Small, 6 slices per pizza) | only in draft B | not found | 210 / 9 / 4.5 / 0 / 25 / 500 / 25 / 1 / 2 / 9 |
| Extra Cheesy Alfredo | 1 slice (Medium, 8 slices per pizza) | only in draft B | not found | 230 / 10 / 5 / 0 / 25 / 550 / 26 / 1 / 2 / 10 |
| Extra Cheesy Alfredo | 1 slice (Large, 8 slices per pizza) | only in draft B | not found | 320 / 13 / 7 / 0 / 35 / 750 / 37 / 1 / 3 / 13 |
| Extra Cheesy Alfredo | 1 slice (Extra Large, 10 slices per pizza) | only in draft B | not found | 330 / 13 / 7 / 0 / 35 / 760 / 39 / 1 / 4 / 13 |
| Extra Cheesy Alfredo | 1 slice (8 slices per pizza) | only in draft B | not found | 390 / 18 / 9 / 0.5 / 50 / 970 / 39 / 1 / 3 / 18 |
| Fiery Buffalo Chicken | 1 slice (Small, 6 slices per pizza) | only in draft B | not found | 220 / 8 / 3.5 / 0 / 25 / 780 / 26 / 1 / 3 / 10 |
| Fiery Buffalo Chicken | 1 slice (Medium, 8 slices per pizza) | only in draft B | not found | 230 / 9 / 3.5 / 0 / 25 / 820 / 27 / 1 / 3 / 11 |
| Fiery Buffalo Chicken | 1 slice (Large, 8 slices per pizza) | only in draft B | not found | 330 / 12 / 5 / 0 / 40 / 1190 / 38 / 2 / 5 / 16 |
| Fiery Buffalo Chicken | 1 slice (Extra Large, 10 slices per pizza) | only in draft B | not found | 350 / 13 / 5 / 0 / 40 / 1250 / 40 / 2 / 5 / 16 |
| Fiery Buffalo Chicken | 1 slice (8 slices per pizza) | only in draft B | not found | 390 / 16 / 8 / 0 / 50 / 1320 / – / 2 / 4 / 20 |
| Fresh Spinach & Tomato Alfredo | 1 slice (Small, 6 slices per pizza) | only in draft B | not found | 190 / 6 / 2.5 / 0 / 15 / 440 / 26 / 1 / 3 / 7 |
| Fresh Spinach & Tomato Alfredo | 1 slice (Medium, 8 slices per pizza) | only in draft B | not found | 200 / 7 / 3 / 0 / 20 / 470 / 27 / 1 / 4 / 7 |
| Fresh Spinach & Tomato Alfredo | 1 slice (Large, 8 slices per pizza) | only in draft B | not found | 280 / 10 / 4 / 0 / 25 / 690 / 39 / 2 / 5 / 10 |
| Fresh Spinach & Tomato Alfredo | 1 slice (Extra Large, 10 slices per pizza) | only in draft B | not found | 300 / 10 / 4 / 0 / 25 / 440 / 41 / 2 / 6 / 11 |
| Fresh Spinach & Tomato Alfredo | 1 slice (8 slices per pizza) | only in draft B | not found | 350 / 14 / 7 / 0 / 40 / 890 / 39 / 2 / 4 / 15 |
| Garden Fresh | 1 slice (Small, 6 slices per pizza) | only in draft B | not found | 190 / 6 / 2.5 / 0 / 15 / 450 / 26 / 1 / 3 / 7 |
| Garden Fresh | 1 slice (Medium, 8 slices per pizza) | only in draft B | not found | 200 / 7 / 3 / 0 / 15 / 480 / 27 / 1 / 4 / 7 |
| Garden Fresh | 1 slice (Large, 8 slices per pizza) | only in draft B | not found | 280 / 9 / 4 / 0 / 20 / 680 / 39 / 2 / 5 / 10 |
| Garden Fresh | 1 slice (Extra Large, 10 slices per pizza) | only in draft B | not found | 300 / 9 / 4 / 0 / 20 / 710 / 41 / 2 / 6 / 11 |
| Garden Fresh | 1 slice (8 slices per pizza) | only in draft B | not found | 350 / 14 / 7 / 0 / 35 / 870 / 41 / 2 / 5 / 15 |
| Meatball and Pepperoni | 1 slice (Small) | only in draft B | not found | 230 / 10 / 4.5 / 0 / 25 / 580 / 26 / 1 / 3 / 10 |
| Meatball and Pepperoni | 1 slice (Medium) | only in draft B | not found | 240 / 10 / 4.5 / 0 / 25 / 600 / 27 / 1 / 3 / 10 |
| Meatball and Pepperoni | 1 slice (Large) | only in draft B | not found | 360 / 15 / 7 / 0 / 40 / 880 / 38 / 2 / 5 / 15 |
| Meatball and Pepperoni | 1 slice (Extra Large) | only in draft B | not found | 370 / 16 / 7 / 0 / 40 / 920 / 41 / 2 / 5 / 15 |
| Pepperoni, Sausage & Six Cheese | 1 slice (Small) | only in draft B | not found | 260 / 13 / 6 / 0 / 30 / 620 / 24 / 1 / 2 / 11 |
| Pepperoni, Sausage & Six Cheese | 1 slice (Medium) | only in draft B | not found | 280 / 14 / 6 / 0 / 30 / 650 / 25 / 1 / 2 / 11 |
| Pepperoni, Sausage & Six Cheese | 1 slice (Large) | only in draft B | not found | 390 / 20 / 9 / 0 / 45 / 920 / 36 / 1 / 3 / 16 |
| Pepperoni, Sausage & Six Cheese | 1 slice (Extra Large) | only in draft B | not found | 410 / 21 / 9 / 0 / 45 / 960 / 38 / 1 / 3 / 16 |
| Philly Cheesesteak Pizza | 1 slice (Small) | only in draft B | not found | 220 / 8 / 3.5 / 0 / 25 / 780 / 26 / 1 / 3 / 10 |
| Philly Cheesesteak Pizza | 1 slice (Medium) | only in draft B | not found | 230 / 9 / 3.5 / 0 / 25 / 820 / 27 / 1 / 3 / 11 |
| Philly Cheesesteak Pizza | 1 slice (Large) | only in draft B | not found | 330 / 12 / 5 / 0 / 40 / 1190 / 38 / 2 / 5 / 16 |
| Philly Cheesesteak Pizza | 1 slice (Extra Large) | only in draft B | not found | 350 / 13 / 5 / 0 / 40 / 1250 / 40 / 2 / 5 / 16 |
| Super Hawaiian | 1 slice (Small) | only in draft B | not found | 230 / 8 / 3.5 / 0 / 25 / 610 / 27 / 1 / 4 / 10 |
| Super Hawaiian | 1 slice (Medium) | only in draft B | not found | 230 / 9 / 4 / 0 / 25 / 630 / 28 / 1 / 5 / 10 |
| Super Hawaiian | 1 slice (Large) | only in draft B | not found | 340 / 13 / 6 / 0 / 35 / 920 / 40 / 2 / 7 / 15 |
| Super Hawaiian | 1 slice (Extra Large) | only in draft B | not found | 360 / 13 / 6 / 0 / 35 / 970 / 42 / 2 / 4 / 16 |
| The Meats | 1 slice (Small) | only in draft B | not found | 250 / 12 / 5 / 0 / 30 / 700 / 26 / 1 / 3 / 10 |
| The Meats | 1 slice (Medium) | only in draft B | not found | 260 / 11 / 5 / 0 / 30 / 710 / 27 / 1 / 3 / 11 |
| The Meats | 1 slice (Large) | only in draft B | not found | 380 / 17 / 7 / 0 / 45 / 1040 / 38 / 2 / 5 / 15 |
| The Meats | 1 slice (Extra Large) | only in draft B | not found | 410 / 19 / 8 / 0 / 45 / 1130 / 41 / 2 / 5 / 17 |
| The Works | 1 slice (Small) | only in draft B | not found | 230 / 9 / 4 / 0 / 20 / 590 / 26 / 1 / 3 / 9 |
| The Works | 1 slice (Medium) | only in draft B | not found | 230 / 9 / 4 / 0 / 25 / 620 / 27 / 1 / 4 / 9 |
| The Works | 1 slice (Large) | only in draft B | not found | 340 / 14 / 6 / 0 / 35 / 890 / 39 / 2 / 5 / 13 |
| The Works | 1 slice (Extra Large) | only in draft B | not found | 360 / 15 / 6 / 0 / 35 / 940 / 41 / 2 / 6 / 14 |
| Tuscan Six Cheese | 1 slice (Small) | only in draft B | not found | 220 / 8 / 4 / 0 / 20 / 530 / 26 / 1 / 3 / 9 |
| Tuscan Six Cheese | 1 slice (Medium) | only in draft B | not found | 230 / 9 / 4.5 / 0 / 20 / 560 / 27 / 1 / 3 / 10 |
| Tuscan Six Cheese | 1 slice (Large) | only in draft B | not found | 320 / 12 / 6 / 0 / 30 / 780 / 38 / 2 / 5 / 14 |
| Tuscan Six Cheese | 1 slice (Extra Large) | only in draft B | not found | 330 / 12 / 6 / 0 / 30 / 810 / 40 / 2 / 5 / 14 |
| Ultimate Pepperoni | 1 slice (Small) | only in draft B | not found | 240 / 10 / 4.5 / 0 / 25 / 600 / 26 / 1 / 3 / 9 |
| Ultimate Pepperoni | 1 slice (Medium) | only in draft B | not found | 250 / 11 / 5 / 0 / 25 / 650 / 27 / 1 / 3 / 10 |
| Ultimate Pepperoni | 1 slice (Large) | only in draft B | not found | 360 / 16 / 7 / 0 / 40 / 930 / 38 / 2 / 5 / 14 |
| Ultimate Pepperoni | 1 slice (Extra Large) | only in draft B | not found | 370 / 16 / 7 / 0 / 40 / 940 / 40 / 2 / 5 / 14 |
| Zesty Italian Trio | 1 slice (Small) | only in draft B | not found | 240 / 11 / 4.5 / 0 / 25 / 660 / 25 / 1 / 3 / 9 |
| Zesty Italian Trio | 1 slice (Medium) | only in draft B | not found | 260 / 12 / 5 / 0 / 30 / 710 / 27 / 1 / 3 / 10 |
| Zesty Italian Trio | 1 slice (Large) | only in draft B | not found | 370 / 17 / 7 / 0 / 40 / 1020 / 38 / 2 / 5 / 14 |
| Zesty Italian Trio | 1 slice (Extra Large) | only in draft B | not found | 390 / 18 / 7 / 0 / 40 / 1070 / 40 / 2 / 5 / 15 |

## Spot check (3 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Butter Chicken | 1 slice (Pizza for One, 4 slices per pizza) | 210 / 4 / 3 / 0 / 25 / 520 / 26 / 0 / 3 / 11 |
| NY Style Crispy Cuppy ‘Roni Pizza | 1 slice (Large) | 390 / 14 / 8 / 0 / 40 / 920 / 39 / 0 / 4 / 17 |
| Cheese Pizza | 1 slice (Pizza for One, 4 slices per pizza) | 200 / 7 / 3.5 / 0 / 20 / 500 / 25 / 1 / 3 / 8 |
