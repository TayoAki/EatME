# SONIC: lines for a person

Guide: https://offers.sonicdrivein.com/nutrition/nutrition.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (527)

Fix each line in `menus/sonic.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B |
| --- | --- | --- | --- | --- |
| JR. BURGER | 1 serving | differ: protein_g | 330 / 16 / 4.5 / 0.5 / 35 / 610 / 32 / 2 / 15 / 5 | 330 / 16 / 4.5 / 0.5 / 35 / 610 / 32 / 2 / 15 / – |
| QUARTER POUND DOUBLE CHEESEBURGER | 1 serving | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 570 / 34 / 14 / 1 / 105 / 1370 / 34 / 2 / 6 / – | 570 / 310 / 34 / 14 / 1 / 105 / 1370 / 34 / 2 / 6 |
| SONIC\circledR BACON CHEESEBURGER WITH MAYO | 1 serving | only in draft A | 770 / 46 / 14 / 1 / 105 / 1340 / 53 / 3 / 11 / – | not found |
| SONIC\circledR BURGER WITH KETCHUP | 1 serving | only in draft A | 540 / 22 / 7 / 1 / 65 / 910 / 57 / 3 / 14 / – | not found |
| SONIC\circledR BURGER WITH MAYO | 1 serving | only in draft A | 620 / 34 / 9 / 1 / 70 / 850 / 53 / 3 / 11 / – | not found |
| SONIC\circledR BURGER WITH MUSTARD | 1 serving | only in draft A | 520 / 23 / 7 / 1 / 65 / 860 / 53 / 3 / 11 / – | not found |
| SONIC\circledR BURGER WITH MUSTARD, KETCHUP & MAYO | 1 serving | only in draft A | 640 / 34 / 9 / 1 / 70 / 1070 / 57 / 3 / 14 / – | not found |
| SONIC\circledR CHEESEBURGER WITH KETCHUP | 1 serving | only in draft A | 600 / 28 / 10 / 1 / 85 / 1240 / 58 / 3 / 14 / – | not found |
| SONIC\circledR CHEESEBURGER WITH MAYO | 1 serving | only in draft A | 680 / 39 / 12 / 1 / 85 / 1180 / 54 / 3 / 11 / – | not found |
| SONIC\circledR CHEESEBURGER WITH MUSTARD | 1 serving | only in draft A | 590 / 28 / 10 / 1 / 85 / 1190 / 54 / 3 / 11 / – | not found |
| SONIC\circledR CHEESEBURGER WITH MUSTARD, KETCHUP & MAYO | 1 serving | only in draft A | 710 / 39 / 12 / 1 / 85 / 1400 / 58 / 3 / 15 / – | not found |
| SUPERSONIC\circledR BACON DOUBLE CHEESEBURGER WITH MAYO | 1 serving | only in draft A | 1030 / 65 / 23 / 2 / 190 / 1880 / 54 / 3 / 12 / – | not found |
| SUPERSONIC\circledR DOUBLE CHEESEBURGER WITH KETCHUP | 1 serving | only in draft A | 870 / 48 / 19 / 1.5 / 165 / 1780 / 59 / 3 / 15 / – | not found |
| SUPERSONIC\circledR DOUBLE CHEESEBURGER WITH MAYO | 1 serving | only in draft A | 960 / 59 / 21 / 2 / 170 / 1720 / 55 / 3 / 12 / – | not found |
| SUPERSONIC\circledR DOUBLE CHEESEBURGER WITH MUSTARD | 1 serving | only in draft A | 860 / 48 / 19 / 1.5 / 165 / 1730 / 55 / 3 / 12 / – | not found |
| SUPERSONIC\circledR DOUBLE CHEESEBURGER WITH MUSTARD, KETCHUP & MAYO | 1 serving | only in draft A | 970 / 59 / 21 / 2 / 170 / 1940 / 59 / 3 / 15 / – | not found |
| SUPERSONIC\circledR JALAPENO DOUBLE CHEESEBURGER WITH MUSTARD | 1 serving | only in draft A | 850 / 48 / 19 / 1.5 / 165 / 1740 / 54 / 2 / 12 / – | not found |
| AVEGGIE BURGER WITH KETCHUP | 1 serving | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 440 / 11 / 2.5 / 0 / 5 / 1800 / 73 / 7 / 14 / – | 440 / 100 / 11 / 2.5 / 0 / 5 / 1800 / 73 / 7 / 14 |
| AVEGGIE BURGER WITH MAYO | 1 serving | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 530 / 22 / 4 / 0 / 10 / 1750 / 69 / 7 / 11 / – | 530 / 200 / 22 / 4 / 0 / 10 / 1750 / 69 / 7 / 11 |
| AVEGGIE BURGER WITH MUSTARD | 1 serving | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 430 / 11 / 2.5 / 0 / 5 / 1760 / 69 / 7 / 10 / – | 430 / 100 / 11 / 2.5 / 0 / 5 / 1760 / 69 / 7 / 10 |
| AVEGGIE BURGER WITH MUSTARD, KETCHUP & MAYO | 1 serving | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 550 / 23 / 4 / 0 / 10 / 1960 / 73 / 7 / 14 / – | 550 / 200 / 23 / 4 / 0 / 10 / 1960 / 73 / 7 / 14 |
| AMERICAN CHEESE | 1 serving | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, protein_g | 70 / 6 / 3 / 0 / 20 / 330 / 1 / 0 / 0 / 4 | 70 / 50 / 6 / 3 / 0 / 20 / 330 / 1 / 0 / 0 |
| AAVOCADO | 1 serving | differ: fat_g, saturated_fat_g, trans_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g | 35 / 3 / 0.5 / 0 / 0 / 20 / 2 / 1 / 0 / 0 | 35 / 25 / 3 / 0.5 / 0 / 0 / 20 / 2 / 1 / 0 |
| CRISPY BACON | 1 serving | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g | 80 / 7 / 2.5 / 0 / 20 / 290 / 1 / 0 / 0 / 6 | 80 / 60 / 7 / 2.5 / 0 / 20 / 290 / 1 / 0 / 6 |
| GRILLED ONIONS | 1 serving | differ: fat_g, sodium_mg, carbs_g, fiber_g | 5 / 0 / 0 / 0 / 0 / 5 / 1 / 0 / 0 / 0 | 5 / 5 / 0 / 0 / 0 / 0 / 5 / 1 / 0 / 0 |
| HOT CHILI | 1 serving | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g | 60 / 4 / 1.5 / 0 / 10 / 170 / 3 / 1 / 1 / 1 | 60 / 35 / 4 / 1.5 / 0 / 10 / 170 / 3 / 1 / 1 |
| ARANCH DRESSING | 1 serving | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g | 130 / 14 / 2.5 / 0 / 5 / 250 / 2 / 0 / 0 / 1 | 130 / 120 / 14 / 2.5 / 0 / 5 / 250 / 2 / 0 / 1 |
| ASLAW | 1 serving | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g | 140 / 7 / 1.5 / 0 / 5 / 220 / 17 / 2 / 2 / 14 | 140 / 60 / 7 / 1.5 / 0 / 5 / 220 / 17 / 2 / 14 |
| SPICY JALAPENO | 1 serving | differ: sodium_mg, carbs_g, fiber_g | 5 / 0 / 0 / 0 / 0 / 140 / 1 / 0 / 0 / 1 | 5 / 0 / 0 / 0 / 0 / 0 / 140 / 1 / 0 / 1 |
| ABACON CHEESEBURGER TOASTER\circledR SANDWICH | 1 serving | only in draft A | 760 / 38 / 13 / 1 / 100 / 1670 / 68 / 3 / 14 / 37 | not found |
| ABLT TOASTER\circledR SANDWICH | 1 serving | only in draft A | 580 / 32 / 8 / 0 / 40 / 1080 / 53 / 2 / 8 / – | not found |
| ACHICKEN CLUB TOASTER\circledR SANDWICH | 1 serving | only in draft A | 770 / 43 / 11 / 0 / 80 / 1590 / 63 / 3 / 8 / – | not found |
| ACOUNTRY FRIED STEAK TOASTER\circledR SANDWICH | 1 serving | only in draft A | 700 / 35 / 9 / 0 / 45 / 1390 / 80 / 3 / 7 / – | not found |
| ACHICKEN WRAP - CRISPY | 1 serving | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, protein_g | 530 / 28 / 6 / 0 / 40 / 1280 / 48 / 2 / 2 / 21 | 530 / 250 / 28 / 6 / 0 / 40 / 1280 / 48 / 2 / 2 |
| ACHICKEN WRAP - GRILLED | 1 serving | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 480 / 14 / 4 / 0 / 80 / 1720 / 39 / 2 / 3 / – | 480 / 120 / 14 / 4 / 0 / 80 / 1720 / 39 / 2 / 3 |
| \wedgeASIAN SWEET CHILI BONELESS WINGS | 6 PC. | only in draft A | 470 / 24 / 9 / 0 / 80 / 1450 / 32 / 2 / 14 / 30 | not found |
| \wedgeASIAN SWEET CHILI BONELESS WINGS | 12 PC. | only in draft A | 930 / 48 / 19 / 1 / 165 / 2910 / 65 / 4 / 28 / 60 | not found |
| \wedgeASIAN SWEET CHILI BONELESS WINGS | 24 PC. | only in draft A | 1860 / 95 / 37 / 2 / 330 / 5820 / 129 / 9 / 56 / 119 | not found |
| \wedgeHONEY BBQ BONELESS WINGS | 6 PC. | only in draft A | 470 / 24 / 9 / 0 / 80 / 1380 / 33 / 2 / 16 / 29 | not found |
| \wedgeHONEY BBQ BONELESS WINGS | 12 PC. | only in draft A | 930 / 48 / 19 / 1 / 165 / 2760 / 67 / 4 / 32 / 58 | not found |
| \wedgeHONEY BBQ BONELESS WINGS | 24 PC. | only in draft A | 1860 / 95 / 37 / 2 / 330 / 5530 / 133 / 9 / 65 / 117 | not found |
| \wedgeBUFFALO BONELESS WINGS | 6 PC. | only in draft A | 440 / 28 / 10 / 0.5 / 85 / 1430 / 17 / 2 / 1 / 29 | not found |
| \wedgeBUFFALO BONELESS WINGS | 12 PC. | only in draft A | 880 / 57 / 20 / 1 / 175 / 2860 / 34 / 4 / 1 / 59 | not found |
| \wedgeBUFFALO BONELESS WINGS | 24 PC. | only in draft A | 1760 / 113 / 40 / 2 / 345 / 5720 / 68 / 9 / 2 / 117 | not found |
| CLASSIC CRISPY CHICKEN SANDWICH | 1 serving | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 550 / 30 / 6 / 0 / 45 / 870 / 48 / 4 / 10 / 21 | 550 / 270 / 30 / 6 / 0 / 45 / 870 / 48 / 4 / 10 |
| CLASSIC CRILLED CHICKEN SANDWICH | 1 serving | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 470 / 22 / 4 / 0 / 75 / 1340 / 39 / 3 / 10 / 30 | 470 / 190 / 22 / 4 / 0 / 75 / 1340 / 39 / 3 / 10 |
| CRISPY TENDER SANDWICH | 1 serving | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 440 / 22 / 3 / 0 / 40 / 910 / 41 / 2 / 3 / 19 | 440 / 200 / 22 / 3 / 0 / 40 / 910 / 41 / 2 / 3 |
| JUMBO POPCORN CHICKEN# | SMALL | only in draft A | 330 / 19 / 3.5 / 0 / 40 / 1100 / 24 / 3 / 1 / 16 | not found |
| JUMBO POPCORN CHICKEN# | MEDIUM | only in draft A | 490 / 28 / 5 / 0 / 55 / 1640 / 36 / 4 / 1 / 23 | not found |
| JUMBO POPCORN CHICKEN# | LARGE | only in draft A | 750 / 43 / 8 / 0.5 / 90 / 2520 / 55 / 6 / 2 / 36 | not found |
| \wedgeSAUCED JUMBO POPCORN CHICKEN# - BUFFALO | MEDIUM | only in draft A | 560 / 35 / 6 / 0.5 / 65 / 2500 / 37 / 5 / 2 / 24 | not found |
| \wedgeSAUCED JUMBO POPCORN CHICKEN# - BUFFALO | LARGE | only in draft A | 920 / 60 / 11 / 1 / 105 / 4670 / 58 / 8 / 3 / 37 | not found |
| \wedgeSAUCED JUMBO POPCORN CHICKEN# - HONEY BBQ | MEDIUM | only in draft A | 570 / 28 / 5 / 0 / 55 / 2170 / 53 / 4 / 17 / 24 | not found |
| \wedgeSAUCED JUMBO POPCORN CHICKEN# - HONEY BBQ | LARGE | only in draft A | 930 / 43 / 8 / 1 / 90 / 3830 / 98 / 7 / 42 / 36 | not found |
| CRISPY TENDERS | 3 PC. | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 260 / 12 / 1 / 0 / 60 / 730 / 16 / 2 / 0 / 21 | 260 / 110 / 12 / 1 / 0 / 60 / 730 / 16 / 2 / 0 |
| CRISPY TENDERS | 5 PC. | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 430 / 20 / 2 / 0 / 95 / 1210 / 27 / 3 / 0 / 35 | 430 / 180 / 20 / 2 / 0 / 95 / 1210 / 27 / 3 / 0 |
| \wedgeCOUNTRY FRIED STEAK SANDWICH | 1 serving | only in draft A | 700 / 35 / 9 / 0 / 45 / 1410 / 80 / 3 / 10 / 16 | not found |
| \wedgeFISH SANDWICH | 1 serving | only in draft A | 540 / 27 / 5 / 0 / 35 / 1240 / 57 / 4 / 10 / 18 | not found |
| GRILLED CHEESE SANDWICH | 1 serving | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 430 / 19 / 7 / 0 / 35 / 1090 / 51 / 2 / 7 / 14 | 430 / 170 / 19 / 7 / 0 / 35 / 1090 / 51 / 2 / 7 |
| \wedgePHILLY CHEESE STEAK SANDWICH | 1 serving | only in draft A | 750 / 39 / 16 / 1.5 / 125 / 1710 / 53 / 1 / 5 / 46 | not found |
| \wedgePORK TENDERLOIN SANDWICH | 1 serving | only in draft A | 710 / 35 / 4.5 / 0 / 45 / 1110 / 73 / 3 / 10 / 20 | not found |
| \wedgeSEAFOOD & CRAB SANDWICH | 1 serving | only in draft A | 510 / 21 / 3.5 / 0 / 35 / 1110 / 64 / 3 / 12 / 14 | not found |
| ALL-AMERICAN DOG | 6" | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 410 / 21 / 8 / 1 / 35 / 1120 / 41 / 2 / 12 / 13 | 410 / 190 / 21 / 8 / 1 / 35 / 1120 / 41 / 2 / 12 |
| ALL BEEF REGULAR HOT DOG | 6" | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 360 / 21 / 8 / 1 / 35 / 800 / 31 / 2 / 4 / 12 | 360 / 190 / 21 / 8 / 1 / 35 / 800 / 31 / 2 / 4 |
| \wedgeCHEESY BACON PRETZEL DOG | 6" | only in draft A | 430 / 29 / 12 / 1.5 / 50 / 1130 / 27 / 2 / 4 / 15 | not found |
| \wedgeCHICAGO DOG | 6" | only in draft A | 400 / 20 / 7 / 1 / 35 / 2010 / 41 / 1 / 13 / 11 | not found |
| CHILI CHEESE CONEY | 6" | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 470 / 29 / 12 / 1.5 / 55 / 1260 / 34 / 2 / 5 / 18 | 470 / 260 / 29 / 12 / 1.5 / 55 / 1260 / 34 / 2 / 5 |
| FOOTLONG QUARTER POUND CONEY | 1 serving | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 790 / 49 / 19 / 1 / 105 / 2300 / 55 / 3 / 9 / 31 | 790 / 440 / 49 / 19 / 1 / 105 / 2300 / 55 / 3 / 9 |
| \wedgeNEW YORK DOG | 6" | only in draft A | 400 / 23 / 8 / 1 / 35 / 1110 / 35 / 3 / 5 / 13 | not found |
| \wedgeORIGINAL PRETZEL DOG | 6" | only in draft A | 320 / 20 / 8 / 1 / 35 / 760 / 23 / 1 / 2 / 11 | not found |
| \wedgeBAGEL BREAKFAST SANDWICH BACON | 1 serving | only in draft A | 660 / 29 / 10 / 0 / 330 / 1830 / 68 / 2 / 5 / 33 | not found |
| ΔBACEL BREAKFAST SANDWICH HAM | 1 serving | only in draft A | 590 / 21 / 7 / 0 / 330 / 2070 / 70 / 2 / 7 / 33 | not found |
| ΔBAGEL BREAKFAST SANDWICH SAUSAGE | 1 serving | only in draft A | 770 / 41 / 14 / 0 / 340 / 1750 / 68 / 2 / 5 / 33 | not found |
| ΔBISCUIT SANDWICH BACON | 1 serving | only in draft A | 570 / 30 / 15 / 0 / 330 / 1970 / 40 / 1 / 5 / 28 | not found |
| ΔBISCUIT SANDWICH HAM | 1 serving | only in draft A | 510 / 21 / 12 / 0 / 330 / 2210 / 42 / 1 / 7 / 28 | not found |
| ΔBISCUIT SANDWICH SAUSAGE | 1 serving | only in draft A | 680 / 42 / 19 / 0 / 340 / 1890 / 40 / 1 / 5 / 28 | not found |
| ΔBREAKFAST BURRITO BACON | 1 serving | only in draft A | 470 / 25 / 11 / 0 / 320 / 1540 / 35 / 1 / 1 / 25 | not found |
| ΔBREAKFAST BURRITO HAM | 1 serving | only in draft A | 440 / 20 / 9 / 0 / 330 / 1920 / 38 / 1 / 2 / 27 | not found |
| BREAKFAST BURRITO SAUSAGE | 1 serving | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, protein_g | 500 / 30 / 13 / 0 / 325 / 1430 / 35 / 1 / 1 / 23 | 500 / 270 / 30 / 13 / 0 / 325 / 1430 / 35 / 1 / 1 |
| ΔBREAKFAST BURRITO STEAK & EGG | 1 serving | only in draft A | 650 / 36 / 14 / 1.5 / 345 / 1960 / 48 / 2 / 2 / 33 | not found |
| BREAKFAST TOASTER# BACON | 1 serving | only in draft A | 610 / 31 / 10 / 0 / 330 / 1610 / 52 / 2 / 7 / 29 | not found |
| ΔBREAKFAST TOASTER# HAM | 1 serving | only in draft A | 540 / 22 / 7 / 0 / 330 / 1850 / 54 / 2 / 9 / 29 | not found |
| BREAKFAST TOASTER# SAUSAGE | 1 serving | only in draft A | 720 / 43 / 14 / 0 / 340 / 1530 / 52 / 2 / 7 / 29 | not found |
| ΔBRIOCHE BREAKFAST SANDWICH BACON | 1 serving | only in draft A | 530 / 30 / 11 / 0 / 330 / 1520 / 38 / 2 / 10 / 27 | not found |
| ΔBRIOCHE BREAKFAST SANDWICH HAM | 1 serving | only in draft A | 470 / 22 / 8 / 0 / 330 / 1750 / 40 / 2 / 11 / 27 | not found |
| ΔBRIOCHE BREAKFAST SANDWICH SAUSAGE | 1 serving | only in draft A | 640 / 43 / 15 / 0 / 340 / 1440 / 38 / 3 / 10 / 27 | not found |
| CINNASNACKS# WITHOUT CREAM CHEESE FROSTING | 3 PC. | only in draft A | 380 / 22 / 6 / 0 / 0 / 210 / 38 / 2 / 12 / 6 | not found |
| CINNASNACKS# WITHOUT CREAM CHEESE FROSTING | 5 PC. | only in draft A | 630 / 37 / 11 / 0 / 0 / 350 / 63 / 4 / 21 / 10 | not found |
| ΔCROISSONIC# BREAKFAST SANDWICH BACON | 1 serving | only in draft A | 560 / 37 / 14 / 0 / 330 / 1380 / 31 / 1 / 5 / 26 | not found |
| ΔCROISSONIC# BREAKFAST SANDWICH HAM | 1 serving | only in draft A | 490 / 29 / 11 / 0 / 330 / 1620 / 33 / 1 / 7 / 26 | not found |
| ΔCROISSONIC# BREAKFAST SANDWICH SAUSAGE | 1 serving | only in draft A | 670 / 49 / 18 / 0 / 340 / 1300 / 31 / 1 / 5 / 26 | not found |
| FRENCH TOAST STICKS WITHOUT SYRUP | 4 PC. | differ: fat_g, saturated_fat_g, trans_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 480 / 25 / 4.5 / 0 / 0 / 460 / 54 / 3 / 12 / 8 | 480 / 230 / 25 / 4.5 / 0 / 0 / 460 / 54 / 3 / 12 |
| JR. BREAKFAST BURRITO | 1 serving | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 290 / 17 / 7 / 0 / 145 / 820 / 22 / 1 / 0 / 12 | 290 / 150 / 17 / 7 / 0 / 145 / 820 / 22 / 1 / 0 |
| #SULFOSOLIC# BREAKFAST BURRITO | 1 serving | only in draft A | 610 / 35 / 14 / 0 / 325 / 1800 / 49 / 3 / 3 / 24 | not found |
| ULTIMATE MEAT & CHEESE BREAKFAST BURRITO | 1 serving | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 840 / 58 / 19 / 0.5 / 360 / 2220 / 47 / 2 / 1 / 30 | 840 / 530 / 58 / 19 / 0.5 / 360 / 2220 / 47 / 2 / 1 |
| FRENCH VANILLA COLD BREW ICED COFFEE | SMALL | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 210 / 9 / 6 / 0 / 30 / 110 / 29 / 0 / 17 / 4 | 210 / 80 / 9 / 6 / 0 / 30 / 110 / 29 / 0 / 17 |
| FRENCH VANILLA COLD BREW ICED COFFEE | MEDIUM | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 300 / 13 / 8 / 0 / 45 / 150 / 42 / 0 / 25 / 5 | 300 / 110 / 13 / 8 / 0 / 45 / 150 / 42 / 0 / 25 |
| FRENCH VANILLA COLD BREW ICED COFFEE | LARGE | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 470 / 20 / 12 / 0.5 / 70 / 230 / 65 / 0 / 39 / 8 | 470 / 180 / 20 / 12 / 0.5 / 70 / 230 / 65 / 0 / 39 |
| FRENCH VANILLA COLD BREW ICED COFFEE | RT 44° | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 650 / 27 / 17 / 1 / 95 / 320 / 90 / 0 / 54 / 11 | 650 / 250 / 27 / 17 / 1 / 95 / 320 / 90 / 0 / 54 |
| ORIGINAL COLD BREW ICED COFFEE | SMALL | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 190 / 9 / 6 / 0 / 30 / 110 / 24 / 0 / 12 / 4 | 190 / 80 / 9 / 6 / 0 / 30 / 110 / 24 / 0 / 12 |
| ORIGINAL COLD BREW ICED COFFEE | MEDIUM | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 260 / 13 / 8 / 0 / 45 / 150 / 32 / 0 / 17 / 5 | 260 / 110 / 13 / 8 / 0 / 45 / 150 / 32 / 0 / 17 |
| ORIGINAL COLD BREW ICED COFFEE | LARGE | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 410 / 20 / 12 / 0.5 / 70 / 230 / 50 / 0 / 26 / 8 | 410 / 180 / 20 / 12 / 0.5 / 70 / 230 / 50 / 0 / 26 |
| ORIGINAL COLD BREW ICED COFFEE | RT 44° | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 570 / 27 / 17 / 1 / 95 / 320 / 70 / 0 / 37 / 11 | 570 / 250 / 27 / 17 / 1 / 95 / 320 / 70 / 0 / 37 |
| ΔCHED 'R' BITES® | SMALL | only in draft A | 280 / 27 / 8 / 0.5 / 40 / 970 / 23 / 1 / 1 / 14 | not found |
| ΔCHED 'R' BITES® | MEDIUM | only in draft A | 410 / 46 / 13 / 1 / 65 / 1570 / 35 / 2 / 2 / 21 | not found |
| ΔCHED 'R' BITES® | LARGE | only in draft A | 550 / 53 / 16 / 1 / 85 / 1940 / 46 / 2 / 2 / 27 | not found |
| CHED 'R' PEPPERS® | (4 PC) SMALL | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, protein_g | 330 / 28 / 8 / 1 / 35 / 1340 / 37 / 2 / 2 / 9 | 330 / 150 / 28 / 8 / 1 / 35 / 1340 / 37 / 2 / 2 |
| CHED 'R' PEPPERS | (6 PC) MEDIUM | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 490 / 48 / 12 / 1.5 / 55 / 2130 / 56 / 3 / 4 / 13 | 490 / 230 / 48 / 12 / 1.5 / 55 / 2130 / 56 / 3 / 4 |
| CHED 'R' PEPPERS | (8 PC) LARGE | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 660 / 57 / 15 / 2 / 65 / 2690 / 74 / 4 / 5 / 17 | 660 / 300 / 57 / 15 / 2 / 65 / 2690 / 74 / 4 / 5 |
| CHILI CHEESE FRIES | SMALL | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 350 / 19 / 6 / 0 / 20 / 640 / 36 / 3 / 1 / 8 | 350 / 170 / 19 / 6 / 0 / 20 / 640 / 36 / 3 / 1 |
| CHILI CHEESE FRIES | MEDIUM | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 450 / 26 / 10 / 0.5 / 35 / 940 / 42 / 4 / 2 / 12 | 450 / 240 / 26 / 10 / 0.5 / 35 / 940 / 42 / 4 / 2 |
| CHILI CHEESE FRIES | LARGE | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 710 / 40 / 14 / 1 / 50 / 1390 / 70 / 7 / 2 / 18 | 710 / 360 / 40 / 14 / 1 / 50 / 1390 / 70 / 7 / 2 |
| CHILI CHEESE TOTS | SMALL | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 350 / 21 / 7 / 0 / 20 / 1000 / 32 / 3 / 1 / 7 | 350 / 190 / 21 / 7 / 0 / 20 / 1000 / 32 / 3 / 1 |
| CHILI CHEESE TOTS | MEDIUM | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 530 / 32 / 10 / 0.5 / 35 / 1540 / 47 / 5 / 2 / 12 | 530 / 290 / 32 / 10 / 0.5 / 35 / 1540 / 47 / 5 / 2 |
| CHILI CHEESE TOTS | LARGE | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 960 / 57 / 17 / 1 / 50 / 2690 / 92 / 9 / 3 / 19 | 960 / 510 / 57 / 17 / 1 / 50 / 2690 / 92 / 9 / 3 |
| CORN DOG | 1 serving | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 230 / 13 / 4 / 0 / 15 / 480 / 23 / 1 / 5 / 6 | 230 / 120 / 13 / 4 / 0 / 15 / 480 / 23 / 1 / 5 |
| FRIES | SMALL | differ: fat_g, saturated_fat_g, trans_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 250 / 12 / 2 / 0 / 0 / 260 / 33 / 3 / 0 / 3 | 250 / 110 / 12 / 2 / 0 / 0 / 260 / 33 / 3 / 0 |
| FRIES | MEDIUM | differ: fat_g, saturated_fat_g, trans_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 290 / 13 / 2.5 / 0 / 0 / 300 / 38 / 3 / 0 / 3 | 290 / 120 / 13 / 2.5 / 0 / 0 / 300 / 38 / 3 / 0 |
| FRIES | LARGE | differ: fat_g, saturated_fat_g, trans_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 470 / 22 / 4 / 0 / 0 / 490 / 63 / 6 / 1 / 5 | 470 / 200 / 22 / 4 / 0 / 0 / 490 / 63 / 6 / 1 |
| ΔFRIES WITH CHEESE | SMALL | only in draft A | 310 / 17 / 5 / 0 / 20 / 590 / 34 / 3 / 1 / 6 | not found |
| ΔFRIES WITH CHEESE | MEDIUM | only in draft A | 380 / 22 / 7 / 0 / 25 / 790 / 39 / 3 / 1 / 9 | not found |
| ΔFRIES WITH CHEESE | LARGE | only in draft A | 600 / 33 / 10 / 0 / 35 / 1150 / 64 / 6 / 2 / 12 | not found |
| ΔFRITOS® CHILI PIE | SMALL | only in draft A | 510 / 34 / 10 / 0.5 / 35 / 1030 / 35 / 3 / 1 / 14 | not found |
| ΔFRITOS | (CHILI PIE MEDIUM) | only in draft A | 750 / 50 / 15 / 1 / 50 / 1490 / 53 / 5 / 2 / 20 | not found |
| ΔFRITOS | (CHILI PIE LARGE) | only in draft A | 990 / 66 / 20 / 1 / 70 / 1940 / 71 / 6 / 3 / 26 | not found |
| HANDMADE ONION RINGS | SMALL | differ: fat_g, saturated_fat_g, trans_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 440 / 21 / 3.5 / 0 / 0 / 430 / 55 / 3 / 14 / 6 | 440 / 190 / 21 / 3.5 / 0 / 0 / 430 / 55 / 3 / 14 |
| HANDMADE ONION RINGS | MEDIUM | differ: fat_g, saturated_fat_g, trans_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 580 / 29 / 5 / 0 / 0 / 570 / 74 / 4 / 19 / 8 | 580 / 260 / 29 / 5 / 0 / 0 / 570 / 74 / 4 / 19 |
| HANDMADE ONION RINGS | LARGE | differ: fat_g, saturated_fat_g, trans_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 800 / 39 / 7 / 0.5 / 0 / 790 / 101 / 5 / 26 / 11 | 800 / 350 / 39 / 7 / 0 / 0.5 / 790 / 101 / 5 / 26 |
| JUMBO POPCORN CHICKEN® | SMALL | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 330 / 19 / 3.5 / 0 / 40 / 1100 / 24 / 3 / 1 / 16 | 330 / 170 / 19 / 3.5 / 0 / 40 / 1100 / 24 / 3 / 1 |
| JUMBO POPCORN CHICKEN® | MEDIUM | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 490 / 28 / 5 / 0 / 55 / 1640 / 36 / 4 / 1 / 23 | 490 / 250 / 28 / 5 / 0 / 55 / 1640 / 36 / 4 / 1 |
| JUMBO POPCORN CHICKEN® | LARGE | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 750 / 43 / 8 / 0.5 / 90 / 2520 / 55 / 6 / 2 / 36 | 750 / 390 / 43 / 8 / 0.5 / 90 / 2520 / 55 / 6 / 2 |
| MOZZARELLA STICKS | (4 PC) SMALL | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 370 / 19 / 7 / 0 / 30 / 950 / 40 / 2 / 5 / 15 | 370 / 170 / 19 / 7 / 0 / 30 / 950 / 40 / 2 / 5 |
| MOZZARELLA STICKS | (6 PC) MEDIUM | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 560 / 29 / 11 / 0.5 / 45 / 1490 / 61 / 3 / 8 / 23 | 560 / 250 / 29 / 11 / 0.5 / 45 / 1490 / 61 / 3 / 8 |
| MOZZARELLA STICKS | (8 PC) LARGE | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 750 / 38 / 15 / 0.5 / 60 / 1890 / 79 / 4 / 9 / 31 | 750 / 340 / 38 / 15 / 0.5 / 60 / 1890 / 79 / 4 / 9 |
| ΔPICKLE-O'S® | SMALL | only in draft A | 190 / 21 / 3.5 / 0 / 10 / 850 / 23 / 1 / 2 / 3 | not found |
| ΔPICKLE-O'S® | MEDIUM | only in draft A | 310 / 39 / 7 / 0.5 / 20 / 1490 / 39 / 2 / 4 / 5 | not found |
| ΔPICKLE-O'S® | LARGE | only in draft A | 500 / 49 / 8 / 0.5 / 20 / 2100 / 61 / 4 / 5 / 8 | not found |
| SOFT PRETZEL TWIST | 1 serving | differ: fat_g, saturated_fat_g, trans_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 250 / 7 / 1 / 0 / 0 / 440 / 39 / 2 / 6 / 7 | 250 / 60 / 7 / 1 / 0 / 0 / 440 / 39 / 2 / 6 |
| TOTS | SMALL | differ: fat_g, saturated_fat_g, trans_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 250 / 13 / 2.5 / 0 / 0 / 620 / 30 / 3 / 0 / 2 | 250 / 120 / 13 / 2.5 / 0 / 0 / 620 / 30 / 3 / 0 |
| TOTS | MEDIUM | differ: fat_g, saturated_fat_g, trans_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 360 / 19 / 3.5 / 0 / 0 / 890 / 43 / 4 / 0 / 3 | 360 / 170 / 19 / 3.5 / 0 / 0 / 890 / 43 / 4 / 0 |
| TOTS | LARGE | differ: fat_g, saturated_fat_g, trans_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 580 / 31 / 6 / 0 / 0 / 1450 / 69 / 6 / 1 / 5 | 580 / 280 / 31 / 6 / 0 / 0 / 1450 / 69 / 6 / 1 |
| ΔTOTS WITH CHEESE | SMALL | only in draft A | 310 / 19 / 5 / 0 / 20 / 950 / 30 / 3 / 1 / 6 | not found |
| ΔTOTS WITH CHEESE | MEDIUM | only in draft A | 450 / 28 / 8 / 0 / 30 / 1390 / 43 / 4 / 1 / 8 | not found |
| ΔTOTS WITH CHEESE | LARGE | only in draft A | 840 / 50 / 13 / 0 / 40 / 2450 / 86 / 8 / 2 / 13 | not found |
| CARAMEL REAL ICE CREAM SUNDAE | 1 serving | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 490 / 22 / 15 / 1 / 65 / 350 / 61 / 0 / 43 / 7 | 490 / 200 / 22 / 15 / 1 / 65 / 350 / 61 / 0 / 43 |
| CHOCOLATE REAL ICE CREAM SUNDAE | 1 serving | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 430 / 22 / 15 / 0.5 / 65 / 280 / 51 / 1 / 36 / 7 | 430 / 200 / 22 / 15 / 0.5 / 65 / 280 / 51 / 1 / 36 |
| HOT FUDGE REAL ICE CREAM SUNDAE | 1 serving | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 520 / 26 / 18 / 0.5 / 65 / 270 / 65 / 1 / 46 / 7 | 520 / 230 / 26 / 18 / 0.5 / 65 / 270 / 65 / 1 / 46 |
| STRAWBERRY REAL ICE CREAM SUNDAE | 1 serving | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 440 / 21 / 14 / 0.5 / 65 / 220 / 55 / 1 / 40 / 7 | 440 / 190 / 21 / 14 / 0.5 / 65 / 220 / 55 / 1 / 40 |
| PEANUTS ADD-ON | 1 serving | differ: fat_g, saturated_fat_g, trans_fat_g, carbs_g, fiber_g, sugars_g, protein_g | 40 / 3.5 / 0.5 / 0 / 0 / 0 / 2 / 1 / 0 / 2 | 40 / 5 / 3.5 / 0.5 / 0 / 0 / 0 / 2 / 1 / 0 |
| WHIPPED TOPPING ADD-ON | 1 serving | differ: fat_g, trans_fat_g, carbs_g, fiber_g, sugars_g, protein_g | 70 / 5 / 5 / 0 / 0 / 0 / 5 / 0 / 5 / 0 | 70 / 45 / 5 / 5 / 0 / 0 / 0 / 5 / 0 / 5 |
| VANILLA CONE | 1 serving | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 250 / 12 / 8 / 0 / 45 / 140 / 30 / 0 / 17 / 4 | 250 / 110 / 12 / 8 / 0 / 45 / 140 / 30 / 0 / 17 |
| ΔBIG RED® | SMALL | both read numbers that can't be right: sugars 41 g above carbs 31 g | 110 / 0 / 0 / 0 / 0 / 45 / 31 / 0 / 41 / 0 | 110 / 0 / 0 / 0 / 0 / 45 / 31 / 0 / 41 / 0 |
| SONIC® BACON CHEESEBURGER WITH MAYO | 1 serving | only in draft B | not found | 770 / 410 / 46 / 14 / 1 / 105 / 1340 / 53 / 3 / 11 |
| SONIC® BURGER WITH KETCHUP | 1 serving | only in draft B | not found | 540 / 200 / 22 / 7 / 1 / 65 / 910 / 57 / 3 / 14 |
| SONIC® BURGER WITH MAYO | 1 serving | only in draft B | not found | 620 / 300 / 34 / 9 / 1 / 70 / 850 / 53 / 3 / 11 |
| SONIC® BURGER WITH MUSTARD | 1 serving | only in draft B | not found | 520 / 200 / 23 / 7 / 1 / 65 / 860 / 53 / 3 / 11 |
| SONIC® BURGER WITH MUSTARD, KETCHUP & MAYO | 1 serving | only in draft B | not found | 640 / 300 / 34 / 9 / 1 / 70 / 1070 / 57 / 3 / 14 |
| SONIC® CHEESEBURGER WITH KETCHUP | 1 serving | only in draft B | not found | 600 / 250 / 28 / 10 / 1 / 85 / 1240 / 58 / 3 / 14 |
| SONIC® CHEESEBURGER WITH MAYO | 1 serving | only in draft B | not found | 680 / 350 / 39 / 12 / 1 / 85 / 1180 / 54 / 3 / 11 |
| SONIC® CHEESEBURGER WITH MUSTARD | 1 serving | only in draft B | not found | 590 / 250 / 28 / 10 / 1 / 85 / 1190 / 54 / 3 / 11 |
| SONIC® CHEESEBURGER WITH MUSTARD, KETCHUP & MAYO | 1 serving | only in draft B | not found | 710 / 350 / 39 / 12 / 1 / 85 / 1400 / 58 / 3 / 15 |
| SUPERSONIC® BACON DOUBLE CHEESEBURGER WITH MAYO | 1 serving | only in draft B | not found | 1030 / 590 / 65 / 23 / 2 / 190 / 1880 / 54 / 3 / 12 |
| SUPERSONIC® DOUBLE CHEESEBURGER WITH KETCHUP | 1 serving | only in draft B | not found | 870 / 430 / 48 / 19 / 1.5 / 165 / 1780 / 59 / 3 / 15 |
| SUPERSONIC® DOUBLE CHEESEBURGER WITH MAYO | 1 serving | only in draft B | not found | 960 / 530 / 59 / 21 / 2 / 170 / 1720 / 55 / 3 / 12 |
| SUPERSONIC® DOUBLE CHEESEBURGER WITH MUSTARD | 1 serving | only in draft B | not found | 860 / 430 / 48 / 19 / 1.5 / 165 / 1730 / 55 / 3 / 12 |
| SUPERSONIC® DOUBLE CHEESEBURGER WITH MUSTARD, KETCHUP & MAYO | 1 serving | only in draft B | not found | 970 / 530 / 59 / 21 / 2 / 170 / 1940 / 59 / 3 / 15 |
| SUPERSONIC® JALAPENO DOUBLE CHEESEBURGER WITH MUSTARD | 1 serving | only in draft B | not found | 850 / 430 / 48 / 19 / 1.5 / 165 / 1740 / 54 / 2 / 12 |
| ABACON CHEESEBURGER TOASTER® SANDWICH | 1 serving | only in draft B | not found | 760 / 340 / 38 / 13 / 1 / 100 / 1670 / 68 / 3 / 14 |
| ABLT TOASTER® SANDWICH | 1 serving | only in draft B | not found | 580 / 290 / 32 / 8 / 0 / 40 / 1080 / 53 / 2 / 8 |
| ACHICKEN CLUB TOASTER® SANDWICH | 1 serving | only in draft B | not found | 770 / 390 / 43 / 11 / 0 / 80 / 1590 / 63 / 3 / 8 |
| ACOUNTRY FRIED STEAK TOASTER® SANDWICH | 1 serving | only in draft B | not found | 700 / 310 / 35 / 9 / 0 / 45 / 1390 / 80 / 3 / 7 |
| ASIAN SWEET CHILI BONELESS WINGS | 6 PC. | only in draft B | not found | 470 / 210 / 24 / 9 / 0 / 80 / 1450 / 32 / 2 / 14 |
| ASIAN SWEET CHILI BONELESS WINGS | 12 PC. | only in draft B | not found | 930 / 430 / 48 / 19 / 1 / 165 / 2910 / 65 / 4 / 28 |
| ASIAN SWEET CHILI BONELESS WINGS | 24 PC. | only in draft B | not found | 1860 / 860 / 95 / 37 / 2 / 330 / 5820 / 129 / 9 / 56 |
| HONEY BBQ BONELESS WINGS | 6 PC. | only in draft B | not found | 470 / 210 / 24 / 9 / 0 / 80 / 1380 / 33 / 2 / 16 |
| HONEY BBQ BONELESS WINGS | 12 PC. | only in draft B | not found | 930 / 430 / 48 / 19 / 1 / 165 / 2760 / 67 / 4 / 32 |
| HONEY BBQ BONELESS WINGS | 24 PC. | only in draft B | not found | 1860 / 860 / 95 / 37 / 2 / 330 / 5530 / 133 / 9 / 65 |
| BUFFALO BONELESS WINGS | 6 PC. | only in draft B | not found | 440 / 250 / 28 / 10 / 0.5 / 85 / 1430 / 17 / 2 / 1 |
| BUFFALO BONELESS WINGS | 12 PC. | only in draft B | not found | 880 / 510 / 57 / 20 / 1 / 175 / 2860 / 34 / 4 / 1 |
| BUFFALO BONELESS WINGS | 24 PC. | only in draft B | not found | 1760 / 1020 / 113 / 40 / 2 / 345 / 5720 / 68 / 9 / 2 |
| SAUCED JUMBO POPCORN CHICKEN - BUFFALO | Medium | only in draft B | not found | 560 / 310 / 35 / 6 / 0.5 / 65 / 2500 / 37 / 5 / 2 |
| SAUCED JUMBO POPCORN CHICKEN - BUFFALO | Large | only in draft B | not found | 920 / 540 / 60 / 11 / 1 / 105 / 4670 / 58 / 8 / 3 |
| SAUCED JUMBO POPCORN CHICKEN - HONEY BBQ | Medium | only in draft B | not found | 570 / 250 / 28 / 5 / 0 / 55 / 2170 / 53 / 4 / 17 |
| SAUCED JUMBO POPCORN CHICKEN - HONEY BBQ | Large | only in draft B | not found | 930 / 390 / 43 / 8 / 1 / 90 / 3830 / 98 / 7 / 42 |
| COUNTRY FRIED STEAK SANDWICH | 1 serving | only in draft B | not found | 700 / 320 / 35 / 9 / 0 / 45 / 1410 / 80 / 3 / 10 |
| FISH SANDWICH | 1 serving | only in draft B | not found | 540 / 240 / 27 / 5 / 0 / 35 / 1240 / 57 / 4 / 10 |
| PHILLY CHEESE STEAK SANDWICH | 1 serving | only in draft B | not found | 750 / 350 / 39 / 16 / 1.5 / 125 / 1710 / 53 / 1 / 5 |
| PORK TENDERLOIN SANDWICH | 1 serving | only in draft B | not found | 710 / 320 / 35 / 4.5 / 0 / 45 / 1110 / 73 / 3 / 10 |
| SEAFOOD & CRAB SANDWICH | 1 serving | only in draft B | not found | 510 / 190 / 21 / 3.5 / 0 / 35 / 1110 / 64 / 3 / 12 |
| CHEESY BACON PRETZEL DOG | 6" | only in draft B | not found | 430 / 260 / 29 / 12 / 1.5 / 50 / 1130 / 27 / 2 / 4 |
| CHICAGO DOG | 6" | only in draft B | not found | 400 / 180 / 20 / 7 / 1 / 35 / 2010 / 41 / 1 / 13 |
| NEW YORK DOG | 6" | only in draft B | not found | 400 / 210 / 23 / 8 / 1 / 35 / 1110 / 35 / 3 / 5 |
| ORIGINAL PRETZEL DOG | 6" | only in draft B | not found | 320 / 180 / 20 / 8 / 1 / 35 / 760 / 23 / 1 / 2 |
| BAGEL BREAKFAST SANDWICH BACON | 1 serving | only in draft B | not found | 660 / 260 / 29 / 10 / 0 / 330 / 1830 / 68 / 2 / 5 |
| BACEL BREAKFAST SANDWICH HAM | 1 serving | only in draft B | not found | 590 / 180 / 21 / 7 / 0 / 330 / 2070 / 70 / 2 / 7 |
| BAGEL BREAKFAST SANDWICH SAUSAGE | 1 serving | only in draft B | not found | 770 / 370 / 41 / 14 / 0 / 340 / 1750 / 68 / 2 / 5 |
| BISCUIT SANDWICH BACON | 1 serving | only in draft B | not found | 570 / 270 / 30 / 15 / 0 / 330 / 1970 / 40 / 1 / 5 |
| BISCUIT SANDWICH HAM | 1 serving | only in draft B | not found | 510 / 190 / 21 / 12 / 0 / 330 / 2210 / 42 / 1 / 7 |
| BISCUIT SANDWICH SAUSAGE | 1 serving | only in draft B | not found | 680 / 380 / 42 / 19 / 0 / 340 / 1890 / 40 / 1 / 5 |
| BREAKFAST BURRITO BACON | 1 serving | only in draft B | not found | 470 / 230 / 25 / 11 / 0 / 320 / 1540 / 35 / 1 / 1 |
| BREAKFAST BURRITO HAM | 1 serving | only in draft B | not found | 440 / 180 / 20 / 9 / 0 / 330 / 1920 / 38 / 1 / 2 |
| BREAKFAST BURRITO STEAK & EGG | 1 serving | only in draft B | not found | 650 / 320 / 36 / 14 / 1.5 / 345 / 1960 / 48 / 2 / 2 |
| BREAKFAST TOASTER BACON | 1 serving | only in draft B | not found | 610 / 280 / 31 / 10 / 0 / 330 / 1610 / 52 / 2 / 7 |
| BREAKFAST TOASTER HAM | 1 serving | only in draft B | not found | 540 / 200 / 22 / 7 / 0 / 330 / 1850 / 54 / 2 / 9 |
| BREAKFAST TOASTER SAUSAGE | 1 serving | only in draft B | not found | 720 / 390 / 43 / 14 / 0 / 340 / 1530 / 52 / 2 / 7 |
| BRIOCHE BREAKFAST SANDWICH BACON | 1 serving | only in draft B | not found | 530 / 270 / 30 / 11 / 0 / 330 / 1520 / 38 / 2 / 10 |
| BRIOCHE BREAKFAST SANDWICH HAM | 1 serving | only in draft B | not found | 470 / 200 / 22 / 8 / 0 / 330 / 1750 / 40 / 2 / 11 |
| BRIOCHE BREAKFAST SANDWICH SAUSAGE | 1 serving | only in draft B | not found | 640 / 380 / 43 / 15 / 0 / 340 / 1440 / 38 / 3 / 10 |
| CINNASNACKS WITHOUT CREAM CHEESE FROSTING | 3 PC. | only in draft B | not found | 380 / 200 / 22 / 6 / 0 / 0 / 210 / 38 / 2 / 12 |
| CINNASNACKS WITHOUT CREAM CHEESE FROSTING | 5 PC. | only in draft B | not found | 630 / 340 / 37 / 11 / 0 / 0 / 350 / 63 / 4 / 21 |
| CROISSONIC BREAKFAST SANDWICH BACON | 1 serving | only in draft B | not found | 560 / 330 / 37 / 14 / 0 / 330 / 1380 / 31 / 1 / 5 |
| CROISSONIC BREAKFAST SANDWICH HAM | 1 serving | only in draft B | not found | 490 / 260 / 29 / 11 / 0 / 330 / 1620 / 33 / 1 / 7 |
| CROISSONIC BREAKFAST SANDWICH SAUSAGE | 1 serving | only in draft B | not found | 670 / 440 / 49 / 18 / 0 / 340 / 1300 / 31 / 1 / 5 |
| SULFOSOLIC BREAKFAST BURRITO | 1 serving | only in draft B | not found | 610 / 310 / 35 / 14 / 0 / 325 / 1800 / 49 / 3 / 3 |
| CHED 'R' BITES® | Small | only in draft B | not found | 280 / 140 / 27 / 8 / 0.5 / 40 / 970 / 23 / 1 / 1 |
| CHED 'R' BITES® | Medium | only in draft B | not found | 410 / 200 / 46 / 13 / 1 / 65 / 1570 / 35 / 2 / 2 |
| CHED 'R' BITES® | Large | only in draft B | not found | 550 / 270 / 53 / 16 / 1 / 85 / 1940 / 46 / 2 / 2 |
| FRIES WITH CHEESE | Small | only in draft B | not found | 310 / 150 / 17 / 5 / 0 / 20 / 590 / 34 / 3 / 1 |
| FRIES WITH CHEESE | Medium | only in draft B | not found | 380 / 190 / 22 / 7 / 0 / 25 / 790 / 39 / 3 / 1 |
| FRIES WITH CHEESE | Large | only in draft B | not found | 600 / 300 / 33 / 10 / 0 / 35 / 1150 / 64 / 6 / 2 |
| FRITOS® CHILI PIE | Small | only in draft B | not found | 510 / 310 / 34 / 10 / 0.5 / 35 / 1030 / 35 / 3 / 1 |
| FRITOS® CHILI PIE | Medium | only in draft B | not found | 750 / 450 / 50 / 15 / 1 / 50 / 1490 / 53 / 5 / 2 |
| FRITOS® CHILI PIE | Large | only in draft B | not found | 990 / 600 / 66 / 20 / 1 / 70 / 1940 / 71 / 6 / 3 |
| PICKLE-O'S® | Small | only in draft B | not found | 190 / 90 / 21 / 3.5 / 0 / 10 / 850 / 23 / 1 / 2 |
| PICKLE-O'S® | Medium | only in draft B | not found | 310 / 150 / 39 / 7 / 0.5 / 20 / 1490 / 39 / 2 / 4 |
| PICKLE-O'S® | Large | only in draft B | not found | 500 / 230 / 49 / 8 / 0.5 / 20 / 2100 / 61 / 4 / 5 |
| TOTS WITH CHEESE | Small | only in draft B | not found | 310 / 170 / 19 / 5 / 0 / 20 / 950 / 30 / 3 / 1 |
| TOTS WITH CHEESE | Medium | only in draft B | not found | 450 / 250 / 28 / 8 / 0 / 30 / 1390 / 43 / 4 / 1 |
| TOTS WITH CHEESE | Large | only in draft B | not found | 840 / 450 / 50 / 13 / 0 / 40 / 2450 / 86 / 8 / 2 |
| SONIC BLAST® WITH BUTTERFINGER® PIECES | Mini | only in draft B | not found | 470 / 210 / 23 / 13 / 0.5 / 60 / 260 / 57 / 1 / 36 |
| SONIC BLAST® WITH BUTTERFINGER® PIECES | Small | only in draft B | not found | 740 / 330 / 37 / 21 / 1 / 95 / 420 / 90 / 2 / 57 |
| SONIC BLAST® WITH BUTTERFINGER® PIECES | Medium | only in draft B | not found | 980 / 440 / 48 / 28 / 1.5 / 125 / 550 / 118 / 2 / 75 |
| SONIC BLAST® WITH BUTTERFINGER® PIECES | Large | only in draft B | not found | 1440 / 650 / 72 / 43 / 2 / 200 / 820 / 172 / 3 / 110 |
| SONIC BLAST® WITH CHOCOLATE CHIP COOKIE DOUGH | Mini | only in draft B | not found | 450 / 190 / 22 / 12 / 0.5 / 65 / 220 / 59 / 0 / 37 |
| SONIC BLAST® WITH CHOCOLATE CHIP COOKIE DOUGH | Small | only in draft B | not found | 690 / 300 / 34 / 19 / 1 / 100 / 340 / 89 / 1 / 55 |
| SONIC BLAST® WITH CHOCOLATE CHIP COOKIE DOUGH | Medium | only in draft B | not found | 920 / 400 / 45 / 25 / 1.5 / 135 / 450 / 118 / 1 / 73 |
| SONIC BLAST® WITH CHOCOLATE CHIP COOKIE DOUGH | Large | only in draft B | not found | 1370 / 610 / 68 / 39 / 2 / 210 / 690 / 172 / 1 / 108 |
| SONIC BLAST® WITH M&M'S® MINIS CHOCOLATE CANDIES | Mini | only in draft B | not found | 530 / 250 / 27 / 17 / 0.5 / 65 / 210 / 65 / 1 / 51 |
| SONIC BLAST® WITH M&M'S® MINIS CHOCOLATE CANDIES | Small | only in draft B | not found | 800 / 370 / 41 / 25 / 1 / 100 / 330 / 97 / 2 / 75 |
| SONIC BLAST® WITH M&M'S® MINIS CHOCOLATE CANDIES | Medium | only in draft B | not found | 1060 / 490 / 54 / 34 / 1.5 / 135 / 430 / 127 / 2 / 98 |
| SONIC BLAST® WITH M&M'S® MINIS CHOCOLATE CANDIES | Large | only in draft B | not found | 1540 / 720 / 80 / 49 / 2 / 210 / 680 / 183 / 3 / 138 |
| SONIC BLAST® WITH OREO® COOKIE PIECES | Mini | only in draft B | not found | 440 / 200 / 22 / 12 / 0.5 / 55 / 340 / 54 / 1 / 34 |
| SONIC BLAST® WITH OREO® COOKIE PIECES | Small | only in draft B | not found | 650 / 300 / 33 / 18 / 1 / 90 / 470 / 78 / 1 / 50 |
| SONIC BLAST® WITH OREO® COOKIE PIECES | Medium | only in draft B | not found | 860 / 390 / 44 / 24 / 1.5 / 125 / 620 / 103 / 2 / 66 |
| SONIC BLAST® WITH OREO® COOKIE PIECES | Large | only in draft B | not found | 1300 / 600 / 67 / 38 / 2 / 195 / 890 / 153 / 2 / 98 |
| SONIC BLAST® WITH REESE'S® PEANUT BUTTER CUPS | Mini | only in draft B | not found | 490 / 250 / 27 / 14 / 0.5 / 60 / 310 / 55 / 1 / 42 |
| SONIC BLAST® WITH REESE'S® PEANUT BUTTER CUPS | Small | only in draft B | not found | 750 / 370 / 41 / 22 / 1 / 95 / 460 / 84 / 2 / 62 |
| SONIC BLAST® WITH REESE'S® PEANUT BUTTER CUPS | Medium | only in draft B | not found | 990 / 490 / 55 / 29 / 1.5 / 130 / 610 / 110 / 2 / 82 |
| SONIC BLAST® WITH REESE'S® PEANUT BUTTER CUPS | Large | only in draft B | not found | 1460 / 720 / 80 / 44 / 2 / 205 / 890 / 162 / 3 / 118 |
| SONIC BLAST® WITH SNICKERS® BARS | Mini | only in draft B | not found | 460 / 220 / 24 / 13 / 1 / 65 / 250 / 54 / 1 / 38 |
| SONIC BLAST® WITH SNICKERS® BARS | Small | only in draft B | not found | 720 / 340 / 37 / 21 / 1 / 95 / 390 / 84 / 1 / 61 |
| SONIC BLAST® WITH SNICKERS® BARS | Medium | only in draft B | not found | 890 / 420 / 46 / 26 / 1.5 / 130 / 490 / 103 / 1 / 73 |
| SONIC BLAST® WITH SNICKERS® BARS | Large | only in draft B | not found | 1340 / 630 / 70 / 40 / 2.5 / 205 / 750 / 154 / 1 / 108 |
| CARAMEL SHAKE | Mini | only in draft B | not found | 430 / 200 / 22 / 16 / 0.5 / 55 / 210 / 45 / 0 / 32 |
| CARAMEL SHAKE | Small | only in draft B | not found | 660 / 310 / 34 / 23 / 1 / 100 / 350 / 71 / 0 / 49 |
| CARAMEL SHAKE | Medium | only in draft B | not found | 830 / 380 / 41 / 28 / 1.5 / 125 / 520 / 97 / 0 / 67 |
| CARAMEL SHAKE | Large | only in draft B | not found | 1230 / 550 / 61 / 41 / 2 / 190 / 790 / 144 / 0 / 99 |
| CHOCOLATE SHAKE | Mini | only in draft B | not found | 420 / 200 / 23 / 16 / 0.5 / 55 / 250 / 48 / 1 / 35 |
| CHOCOLATE SHAKE | Small | only in draft B | not found | 650 / 320 / 35 / 24 / 1 / 100 / 390 / 74 / 1 / 52 |
| CHOCOLATE SHAKE | Medium | only in draft B | not found | 810 / 390 / 43 / 29 / 1.5 / 125 / 540 / 95 / 1 / 67 |
| CHOCOLATE SHAKE | Large | only in draft B | not found | 1200 / 570 / 63 / 42 / 2 / 190 / 820 / 142 / 2 / 99 |
| FRESH BANANA SHAKE | Mini | only in draft B | not found | 430 / 200 / 22 / 15 / 0.5 / 55 / 180 / 54 / 2 / 37 |
| FRESH BANANA SHAKE | Small | only in draft B | not found | 660 / 310 / 34 / 23 / 1 / 100 / 310 / 80 / 2 / 54 |
| FRESH BANANA SHAKE | Medium | only in draft B | not found | 850 / 370 / 41 / 27 / 1.5 / 125 / 390 / 108 / 3 / 70 |
| FRESH BANANA SHAKE | Large | only in draft B | not found | 1250 / 550 / 61 / 39 / 2 / 190 / 590 / 160 / 5 / 103 |
| HOT FUDGE SHAKE | Mini | only in draft B | not found | 450 / 210 / 24 / 17 / 0.5 / 55 / 210 / 51 / 1 / 37 |
| HOT FUDGE SHAKE | Small | only in draft B | not found | 680 / 330 / 36 / 25 / 1 / 100 / 340 / 77 / 1 / 54 |
| HOT FUDGE SHAKE | Medium | only in draft B | not found | 940 / 430 / 48 / 33 / 1.5 / 125 / 480 / 113 / 2 / 80 |
| HOT FUDGE SHAKE | Large | only in draft B | not found | 1350 / 620 / 69 / 47 / 2 / 190 / 710 / 162 / 2 / 113 |
| PEANUT BUTTER SHAKE | Mini | only in draft B | not found | 480 / 270 / 30 / 17 / 0.5 / 55 / 220 / 45 / 1 / 32 |
| PEANUT BUTTER SHAKE | Small | only in draft B | not found | 710 / 380 / 43 / 24 / 1 / 100 / 360 / 71 / 1 / 49 |
| PEANUT BUTTER SHAKE | Medium | only in draft B | not found | 940 / 520 / 58 / 30 / 1.5 / 125 / 480 / 89 / 1 / 61 |
| PEANUT BUTTER SHAKE | Large | only in draft B | not found | 1490 / 850 / 94 / 45 / 2 / 190 / 770 / 136 / 2 / 91 |
| STRAWBERRY SHAKE | Mini | only in draft B | not found | 400 / 190 / 21 / 15 / 0.5 / 55 / 180 / 47 / 0 / 35 |
| STRAWBERRY SHAKE | Small | only in draft B | not found | 630 / 310 / 34 / 23 / 1 / 100 / 320 / 72 / 0 / 52 |
| STRAWBERRY SHAKE | Medium | only in draft B | not found | 790 / 370 / 41 / 27 / 1.5 / 125 / 400 / 92 / 1 / 66 |
| STRAWBERRY SHAKE | Large | only in draft B | not found | 1160 / 540 / 60 / 39 / 2 / 190 / 600 / 137 / 1 / 97 |
| VANILLA SHAKE | Mini | only in draft B | not found | 420 / 210 / 23 / 16 / 0.5 / 65 / 200 / 45 / 0 / 32 |
| VANILLA SHAKE | Small | only in draft B | not found | 650 / 330 / 36 / 24 / 1.1 / 110 / 340 / 71 / 0 / 49 |
| VANILLA SHAKE | Medium | only in draft B | not found | 820 / 410 / 45 / 30 / 1.4 / 140 / 430 / 89 / 0 / 61 |
| VANILLA SHAKE | Large | only in draft B | not found | 1200 / 590 / 66 / 43 / 2.1 / 210 / 650 / 132 / 0 / 90 |
| CHEESECAKE SHAKE | Mini | only in draft B | not found | 440 / 200 / 23 / 15 / 0.5 / 55 / 340 / 53 / 0 / 36 |
| CHEESECAKE SHAKE | Small | only in draft B | not found | 670 / 320 / 35 / 23 / 1 / 100 / 470 / 79 / 0 / 53 |
| CHEESECAKE SHAKE | Medium | only in draft B | not found | 840 / 380 / 43 / 28 / 1.5 / 125 / 680 / 101 / 1 / 68 |
| CHEESECAKE SHAKE | Large | only in draft B | not found | 1230 / 560 / 62 / 39 / 2 / 190 / 1010 / 148 / 1 / 99 |
| OREO® CHEESECAKE SHAKE | Mini | only in draft B | not found | 550 / 240 / 27 / 17 / 0.5 / 55 / 460 / 69 / 1 / 45 |
| OREO® CHEESECAKE SHAKE | Small | only in draft B | not found | 820 / 370 / 41 / 25 / 1 / 100 / 650 / 102 / 1 / 66 |
| OREO® CHEESECAKE SHAKE | Medium | only in draft B | not found | 1030 / 460 / 51 / 30 / 1.5 / 125 / 900 / 131 / 2 / 84 |
| OREO® CHEESECAKE SHAKE | Large | only in draft B | not found | 1470 / 650 / 72 / 42 / 2 / 190 / 1280 / 184 / 2 / 119 |
| OREO® CHOCOLATE SHAKE | Mini | only in draft B | not found | 520 / 240 / 27 / 18 / 0.5 / 55 / 380 / 65 / 1 / 44 |
| OREO® CHOCOLATE SHAKE | Small | only in draft B | not found | 750 / 360 / 40 / 25 / 1 / 100 / 510 / 90 / 1 / 61 |
| OREO® CHOCOLATE SHAKE | Medium | only in draft B | not found | 1000 / 460 / 51 / 32 / 1.5 / 125 / 760 / 125 / 3 / 84 |
| OREO® CHOCOLATE SHAKE | Large | only in draft B | not found | 1430 / 660 / 73 / 45 / 2 / 190 / 1090 / 178 / 4 / 119 |
| OREO® PEANUT BUTTER SHAKE | Mini | only in draft B | not found | 590 / 310 / 34 / 18 / 0.5 / 55 / 350 / 61 / 1 / 41 |
| OREO® PEANUT BUTTER SHAKE | Small | only in draft B | not found | 820 / 420 / 47 / 26 / 1 / 100 / 480 / 87 / 1 / 58 |
| OREO® PEANUT BUTTER SHAKE | Medium | only in draft B | not found | 1130 / 590 / 66 / 33 / 1.5 / 125 / 700 / 118 / 2 / 77 |
| OREO® PEANUT BUTTER SHAKE | Large | only in draft B | not found | 1720 / 930 / 104 / 48 / 2 / 190 / 1040 / 172 / 4 / 111 |
| STRAWBERRY CHEESECAKE SHAKE | Mini | only in draft B | not found | 460 / 200 / 23 / 15 / 0.5 / 55 / 340 / 59 / 1 / 41 |
| STRAWBERRY CHEESECAKE SHAKE | Small | only in draft B | not found | 700 / 320 / 35 / 23 / 1 / 100 / 480 / 84 / 1 / 58 |
| STRAWBERRY CHEESECAKE SHAKE | Medium | only in draft B | not found | 890 / 380 / 43 / 28 / 1.5 / 125 / 680 / 112 / 2 / 78 |
| STRAWBERRY CHEESECAKE SHAKE | Large | only in draft B | not found | 1300 / 560 / 62 / 39 / 2 / 190 / 1020 / 165 / 2 / 115 |
| CANADA DRY® GINGER ALE | Wacky Pack® | only in draft B | not found | 70 / 0 / 0 / 0 / 0 / 25 / 16 / 0 / 16 / 0 |
| CANADA DRY® GINGER ALE | Small | only in draft B | not found | 100 / 0 / 0 / 0 / 0 / 45 / 26 / 0 / 26 / 0 |
| CANADA DRY® GINGER ALE | Medium | only in draft B | not found | 150 / 0 / 0 / 0 / 0 / 65 / 37 / 0 / 37 / 0 |
| CANADA DRY® GINGER ALE | Large | only in draft B | not found | 230 / 0 / 0 / 0 / 0 / 100 / 56 / 0 / 56 / 0 |
| CANADA DRY® GINGER ALE | RT 44® | only in draft B | not found | 310 / 0 / 0 / 0 / 0 / 135 / 76 / 0 / 76 / 0 |
| DR PEPPER® | Wacky Pack® | only in draft B | not found | 60 / 0 / 0 / 0 / 0 / 25 / 18 / 0 / 18 / 0 |
| DR PEPPER® | Small | only in draft B | not found | 100 / 0 / 0 / 0 / 0 / 35 / 28 / 0 / 28 / 0 |
| DR PEPPER® | Medium | only in draft B | not found | 160 / 0 / 0 / 0 / 0 / 60 / 46 / 0 / 46 / 0 |
| DR PEPPER® | Large | only in draft B | not found | 240 / 0 / 0 / 0 / 0 / 90 / 70 / 0 / 70 / 0 |
| DR PEPPER® | RT 44® | only in draft B | not found | 330 / 0 / 0 / 0 / 0 / 120 / 94 / 0 / 94 / 0 |
| DIET DR PEPPER® | Wacky Pack® | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 35 / 0 / 0 / 0 / 0 |
| DIET DR PEPPER® | Small | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 55 / 0 / 0 / 0 / 0 |
| DIET DR PEPPER® | Medium | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 95 / 0 / 0 / 0 / 0 |
| DIET DR PEPPER® | Large | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 140 / 0 / 0 / 0 / 0 |
| DIET DR PEPPER® | RT 44® | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 190 / 0 / 0 / 0 / 0 |
| FANTA® ORANGE | Wacky Pack® | only in draft B | not found | 70 / 0 / 0 / 0 / 0 / 0 / 20 / 0 / 20 / 0 |
| FANTA® ORANGE | Small | only in draft B | not found | 110 / 0 / 0 / 0 / 0 / 0 / 31 / 0 / 31 / 0 |
| FANTA® ORANGE | Medium | only in draft B | not found | 190 / 0 / 0 / 0 / 0 / 0 / 51 / 0 / 51 / 0 |
| FANTA® ORANGE | Large | only in draft B | not found | 280 / 0 / 0 / 0 / 0 / 10 / 78 / 0 / 78 / 0 |
| FANTA® ORANGE | RT 44® | only in draft B | not found | 380 / 0 / 0 / 0 / 0 / 10 / 105 / 0 / 105 / 0 |
| HI-C® FRUIT PUNCH | Wacky Pack® | only in draft B | not found | 70 / 0 / 0 / 0 / 0 / 10 / 19 / 0 / 19 / 0 |
| HI-C® FRUIT PUNCH | Small | only in draft B | not found | 110 / 0 / 0 / 0 / 0 / 15 / 30 / 0 / 30 / 0 |
| HI-C® FRUIT PUNCH | Medium | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 20 / 50 / 0 / 50 / 0 |
| HI-C® FRUIT PUNCH | Large | only in draft B | not found | 280 / 0 / 0 / 0 / 0 / 35 / 75 / 0 / 75 / 0 |
| HI-C® FRUIT PUNCH | RT 44® | only in draft B | not found | 380 / 0 / 0 / 0 / 0 / 40 / 102 / 0 / 102 / 0 |
| MELLO YELLO® | Wacky Pack® | only in draft B | not found | 70 / 0 / 0 / 0 / 0 / 10 / 20 / 0 / 20 / 0 |
| MELLO YELLO® | Small | only in draft B | not found | 110 / 0 / 0 / 0 / 0 / 15 / 31 / 0 / 31 / 0 |
| MELLO YELLO® | Medium | only in draft B | not found | 190 / 0 / 0 / 0 / 0 / 20 / 51 / 0 / 51 / 0 |
| MELLO YELLO® | Large | only in draft B | not found | 280 / 0 / 0 / 0 / 0 / 30 / 78 / 0 / 78 / 0 |
| MELLO YELLO® | RT 44® | only in draft B | not found | 380 / 0 / 0 / 0 / 0 / 40 / 105 / 0 / 105 / 0 |
| POWERADE® MOUNTAIN BLAST® | Wacky Pack® | only in draft B | not found | 45 / 0 / 0 / 0 / 0 / 40 / 12 / 0 / 12 / 0 |
| POWERADE® MOUNTAIN BLAST® | Small | only in draft B | not found | 70 / 0 / 0 / 0 / 0 / 60 / 18 / 0 / 18 / 0 |
| POWERADE® MOUNTAIN BLAST® | Medium | only in draft B | not found | 110 / 0 / 0 / 0 / 0 / 100 / 30 / 0 / 30 / 0 |
| POWERADE® MOUNTAIN BLAST® | Large | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 150 / 46 / 0 / 46 / 0 |
| POWERADE® MOUNTAIN BLAST® | RT 44® | only in draft B | not found | 230 / 0 / 0 / 0 / 0 / 200 / 62 / 0 / 62 / 0 |
| SPRITE® | Wacky Pack® | only in draft B | not found | 70 / 0 / 0 / 0 / 0 / 15 / 18 / 0 / 18 / 0 |
| SPRITE® | Small | only in draft B | not found | 100 / 0 / 0 / 0 / 0 / 25 / 28 / 0 / 28 / 0 |
| SPRITE® | Medium | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 40 / 46 / 0 / 46 / 0 |
| SPRITE® | Large | only in draft B | not found | 260 / 0 / 0 / 0 / 0 / 70 / 70 / 0 / 70 / 0 |
| SPRITE® | RT 44® | only in draft B | not found | 350 / 0 / 0 / 0 / 0 / 85 / 94 / 0 / 94 / 0 |
| SPRITE ZERO® | Wacky Pack® | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 10 / 0 / 0 / 0 / 0 |
| SPRITE ZERO® | Small | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 15 / 0 / 0 / 0 / 0 |
| SPRITE ZERO® | Medium | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 20 / 0 / 0 / 0 / 0 |
| SPRITE ZERO® | Large | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 30 / 0 / 0 / 0 / 0 |
| SPRITE ZERO® | RT 44® | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 40 / 0 / 0 / 0 / 0 |
| SUN DROP® | Wacky Pack® | only in draft B | not found | 80 / 0 / 0 / 0 / 0 / 25 / 21 / 0 / 21 / 0 |
| SUN DROP® | Small | only in draft B | not found | 130 / 0 / 0 / 0 / 0 / 45 / 33 / 0 / 33 / 0 |
| SUN DROP® | Medium | only in draft B | not found | 190 / 0 / 0 / 0 / 0 / 65 / 48 / 0 / 48 / 0 |
| SUN DROP® | Large | only in draft B | not found | 280 / 0 / 0 / 0 / 0 / 100 / 73 / 0 / 73 / 0 |
| SUN DROP® | RT 44® | only in draft B | not found | 380 / 0 / 0 / 0 / 0 / 135 / 99 / 0 / 99 / 0 |
| SWEET ICED TEA | Wacky Pack® | only in draft B | not found | 80 / 0 / 0 / 0 / 0 / 10 / 21 / 0 / 21 / 0 |
| SWEET ICED TEA | Small | only in draft B | not found | 140 / 0 / 0 / 0 / 0 / 10 / 37 / 0 / 37 / 0 |
| SWEET ICED TEA | Medium | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 15 / 45 / 0 / 45 / 0 |
| SWEET ICED TEA | Large | only in draft B | not found | 290 / 0 / 0 / 0 / 0 / 30 / 78 / 0 / 78 / 0 |
| SWEET ICED TEA | RT 44® | only in draft B | not found | 360 / 0 / 0 / 0 / 0 / 35 / 96 / 0 / 96 / 0 |
| UNSWEET ICED TEA | Wacky Pack® | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 10 / 0 / 0 / 0 / 0 |
| UNSWEET ICED TEA | Small | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 10 / 0 / 0 / 0 / 0 |
| UNSWEET ICED TEA | Medium | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 15 / 0 / 0 / 0 / 0 |
| UNSWEET ICED TEA | Large | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 30 / 0 / 0 / 0 / 0 |
| UNSWEET ICED TEA | RT 44® | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 35 / 0 / 0 / 0 / 0 |
| MINUTE MAID® 100% APPLE JUICE | Box | only in draft B | not found | 80 / 0 / 0 / 0 / 0 / 15 / 21 / 0 / 19 / 0 |
| MINUTE MAID® ORANGE JUICE | Small | only in draft B | not found | 140 / 0 / 0 / 0 / 0 / 25 / 34 / 0 / 30 / 2 |
| MINUTE MAID® ORANGE JUICE | Medium | only in draft B | not found | 200 / 0 / 0 / 0 / 0 / 35 / 47 / 0 / 42 / 3 |
| CHERRY LIMEADE | Wacky Pack® | only in draft B | not found | 110 / 0 / 0 / 0 / 0 / 20 / 29 / 0 / 28 / 0 |
| CHERRY LIMEADE | Small | only in draft B | not found | 150 / 0 / 0 / 0 / 0 / 30 / 39 / 0 / 38 / 0 |
| CHERRY LIMEADE | Medium | only in draft B | not found | 250 / 0 / 0 / 0 / 0 / 50 / 66 / 0 / 65 / 0 |
| CHERRY LIMEADE | Large | only in draft B | not found | 370 / 0 / 0 / 0 / 0 / 70 / 99 / 0 / 97 / 0 |
| CHERRY LIMEADE | RT 44® | only in draft B | not found | 490 / 0 / 0 / 0 / 0 / 100 / 132 / 0 / 130 / 0 |
| DIET CHERRY® LIMEADE | Wacky Pack® | only in draft B | not found | 15 / 0 / 0 / 0 / 0 / 10 / 3 / 0 / 2 / 0 |
| DIET CHERRY® LIMEADE | Small | only in draft B | not found | 15 / 0 / 0 / 0 / 0 / 15 / 3 / 0 / 2 / 0 |
| DIET CHERRY® LIMEADE | Medium | only in draft B | not found | 20 / 0 / 0 / 0 / 0 / 20 / 3 / 0 / 2 / 0 |
| DIET CHERRY® LIMEADE | Large | only in draft B | not found | 25 / 0 / 0 / 0 / 0 / 35 / 4 / 0 / 2 / 0 |
| DIET CHERRY® LIMEADE | RT 44® | only in draft B | not found | 30 / 0 / 0 / 0 / 0 / 45 / 4 / 0 / 2 / 0 |
| DIET LIME LIMEADE | Wacky Pack® | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 10 / 1 / 0 / 0 / 0 |
| DIET LIME LIMEADE | Small | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 10 / 1 / 0 / 0 / 0 |
| DIET LIME LIMEADE | Medium | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 15 / 1 / 0 / 0 / 0 |
| DIET LIME LIMEADE | Large | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 25 / 2 / 0 / 0 / 0 |
| DIET LIME LIMEADE | RT 44® | only in draft B | not found | 15 / 0 / 0 / 0 / 0 / 35 / 2 / 0 / 0 / 0 |
| LIMEADE | Wacky Pack® | only in draft B | not found | 70 / 0 / 0 / 0 / 0 / 15 / 18 / 0 / 18 / 0 |
| LIMEADE | Small | only in draft B | not found | 100 / 0 / 0 / 0 / 0 / 25 / 28 / 0 / 28 / 0 |
| LIMEADE | Medium | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 40 / 47 / 0 / 46 / 0 |
| LIMEADE | Large | only in draft B | not found | 270 / 0 / 0 / 0 / 0 / 65 / 72 / 0 / 70 / 0 |
| LIMEADE | RT 44® | only in draft B | not found | 360 / 0 / 0 / 0 / 0 / 85 / 97 / 0 / 95 / 0 |
| MINUTE MAID® CRANBERRY LIMEADE | Wacky Pack® | only in draft B | not found | 100 / 0 / 0 / 0 / 0 / 20 / 27 / 0 / 26 / 0 |
| MINUTE MAID® CRANBERRY LIMEADE | Small | only in draft B | not found | 140 / 0 / 0 / 0 / 0 / 20 / 37 / 0 / 36 / 0 |
| MINUTE MAID® CRANBERRY LIMEADE | Medium | only in draft B | not found | 240 / 0 / 0 / 0 / 0 / 45 / 64 / 0 / 62 / 0 |
| MINUTE MAID® CRANBERRY LIMEADE | Large | only in draft B | not found | 360 / 0 / 0 / 0 / 0 / 65 / 97 / 0 / 94 / 0 |
| MINUTE MAID® CRANBERRY LIMEADE | RT 44® | only in draft B | not found | 490 / 0 / 0 / 0 / 0 / 90 / 131 / 0 / 127 / 0 |
| STRAWBERRY LIMEADE | Wacky Pack® | only in draft B | not found | 100 / 0 / 0 / 1 / 0 / 25 / 25 / 1 / 24 / 0 |
| STRAWBERRY LIMEADE | Small | only in draft B | not found | 130 / 0 / 0 / 1 / 0 / 30 / 35 / 1 / 34 / 0 |
| STRAWBERRY LIMEADE | Medium | only in draft B | not found | 220 / 0 / 0 / 1 / 0 / 50 / 59 / 1 / 57 / 0 |
| STRAWBERRY LIMEADE | Large | only in draft B | not found | 340 / 0 / 0 / 2 / 0 / 80 / 90 / 2 / 87 / 0 |
| STRAWBERRY LIMEADE | RT 44® | only in draft B | not found | 450 / 0 / 0 / 2 / 0 / 105 / 120 / 2 / 117 / 0 |
| OCEAN WATER® | Wacky Pack® | only in draft B | not found | 80 / 0 / 0 / 0 / 0 / 20 / 21 / 0 / 21 / 0 |
| OCEAN WATER® | Small | only in draft B | not found | 120 / 0 / 0 / 0 / 0 / 30 / 31 / 0 / 31 / 0 |
| OCEAN WATER® | Medium | only in draft B | not found | 200 / 0 / 0 / 0 / 0 / 45 / 52 / 0 / 52 / 0 |
| OCEAN WATER® | Large | only in draft B | not found | 300 / 0 / 0 / 0 / 0 / 70 / 79 / 0 / 79 / 0 |
| OCEAN WATER® | RT 44® | only in draft B | not found | 400 / 0 / 0 / 0 / 0 / 95 / 107 / 0 / 106 / 0 |
| BLACKBERRY SUGAR-FREE ADD-IN | Wacky Pack® | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 5 / 1 / 0 / 0 / 0 |
| BLACKBERRY SUGAR-FREE ADD-IN | Small | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 5 / 1 / 0 / 0 / 0 |
| BLACKBERRY SUGAR-FREE ADD-IN | Medium | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 15 / 1 / 0 / 0 / 0 |
| BLACKBERRY SUGAR-FREE ADD-IN | Large | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 20 / 2 / 0 / 0 / 0 |
| BLUE COCONUT ADD-IN | Wacky Pack® | only in draft B | not found | 15 / 0 / 0 / 0 / 0 / 0 / 3 / 0 / 3 / 0 |
| BLUE COCONUT ADD-IN | Small | only in draft B | not found | 15 / 0 / 0 / 0 / 0 / 0 / 3 / 0 / 3 / 0 |
| BLUE COCONUT ADD-IN | Medium | only in draft B | not found | 25 / 0 / 0 / 0 / 0 / 0 / 6 / 0 / 6 / 0 |
| BLUE COCONUT ADD-IN | Large | only in draft B | not found | 40 / 0 / 0 / 0 / 0 / 5 / 9 / 0 / 9 / 0 |
| BLUE Raspberry ADD-IN | Small | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 0 / 3 / 0 / 3 / 0 |
| BLUE Raspberry ADD-IN | Medium | only in draft B | not found | 20 / 0 / 0 / 0 / 0 / 0 / 6 / 0 / 5 / 0 |
| BLUE Raspberry ADD-IN | Large | only in draft B | not found | 35 / 0 / 0 / 0 / 0 / 5 / 8 / 0 / 8 / 0 |
| BLUE Raspberry ADD-IN | RT 44® | only in draft B | not found | 45 / 0 / 0 / 0 / 0 / 10 / 11 / 0 / 11 / 0 |
| CARAMEL TOPPING | Wacky Pack® | only in draft B | not found | 90 / 1 / 0.5 / 0 / 5 / 90 / 19 / 0 / 12 / 0 |
| CARAMEL TOPPING | Small | only in draft B | not found | 90 / 1 / 0.5 / 0 / 5 / 90 / 19 / 0 / 12 / 0 |
| CARAMEL TOPPING | Medium | only in draft B | not found | 180 / 2 / 1.5 / 0 / 5 / 180 / 37 / 0 / 24 / 0 |
| CARAMEL TOPPING | Large | only in draft B | not found | 270 / 3.5 / 2 / 0 / 10 / 270 / 56 / 0 / 36 / 0 |
| CARAMEL TOPPING | RT 44® | only in draft B | not found | 360 / 4.5 / 3 / 0 / 15 / 360 / 75 / 0 / 48 / 0 |
| CHERRY ADD-IN | Wacky Pack® | only in draft B | not found | 30 / 0 / 0 / 0 / 0 / 0 / 8 / 0 / 8 / 0 |
| CHERRY ADD-IN | Small | only in draft B | not found | 30 / 0 / 0 / 0 / 0 / 0 / 8 / 0 / 8 / 0 |
| CHERRY ADD-IN | Medium | only in draft B | not found | 60 / 0 / 0 / 0 / 0 / 5 / 17 / 0 / 17 / 0 |
| CHERRY ADD-IN | Large | only in draft B | not found | 90 / 0 / 0 / 0 / 0 / 10 / 25 / 0 / 25 / 0 |
| CHERRY ADD-IN | RT 44® | only in draft B | not found | 120 / 0 / 0 / 0 / 0 / 10 / 34 / 0 / 34 / 0 |
| CHERRY GARNISH | 1 serving | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 0 / 2 / 0 / 2 / 0 |
| CHOCOLATE ADD-IN | Wacky Pack® | only in draft B | not found | 80 / 0 / 0 / 0 / 0 / 30 / 19 / 0 / 15 / 0 |
| CHOCOLATE ADD-IN | Small | only in draft B | not found | 80 / 0 / 0 / 0 / 0 / 30 / 19 / 0 / 15 / 0 |
| CHOCOLATE ADD-IN | Medium | only in draft B | not found | 160 / 0 / 0 / 0 / 0 / 60 / 38 / 0 / 31 / 0 |
| CHOCOLATE ADD-IN | Large | only in draft B | not found | 240 / 0 / 0 / 0 / 0 / 85 / 57 / 0 / 46 / 0 |
| CHOCOLATE ADD-IN | RT 44® | only in draft B | not found | 320 / 0 / 0 / 0 / 0 / 115 / 76 / 0 / 61 / 0 |
| DIET CHERRY SUGAR-FREE ADD-IN | Wacky Pack® | only in draft B | not found | 15 / 0 / 0 / 0 / 0 / 10 / 3 / 0 / 2 / 0 |
| DIET CHERRY SUGAR-FREE ADD-IN | Small | only in draft B | not found | 15 / 0 / 0 / 0 / 0 / 15 / 3 / 0 / 2 / 0 |
| DIET CHERRY SUGAR-FREE ADD-IN | Medium | only in draft B | not found | 20 / 0 / 0 / 0 / 0 / 20 / 3 / 0 / 2 / 0 |
| DIET CHERRY SUGAR-FREE ADD-IN | Large | only in draft B | not found | 25 / 0 / 0 / 0 / 0 / 35 / 4 / 0 / 2 / 0 |
| DIET CHERRY SUGAR-FREE ADD-IN | RT 44® | only in draft B | not found | 30 / 0 / 0 / 0 / 0 / 45 / 4 / 0 / 2 / 0 |
| GRAPE ADD-IN | Wacky Pack® | only in draft B | not found | 20 / 0 / 0 / 0 / 0 / 0 / 5 / 0 / 5 / 0 |
| GRAPE ADD-IN | Small | only in draft B | not found | 20 / 0 / 0 / 0 / 0 / 0 / 5 / 0 / 5 / 0 |
| GRAPE ADD-IN | Medium | only in draft B | not found | 45 / 0 / 0 / 0 / 0 / 5 / 11 / 0 / 10 / 0 |
| GRAPE ADD-IN | Large | only in draft B | not found | 70 / 0 / 0 / 0 / 0 / 10 / 16 / 0 / 16 / 0 |
| GRAPE ADD-IN | RT 44® | only in draft B | not found | 90 / 0 / 0 / 0 / 0 / 10 / 22 / 0 / 21 / 0 |
| HOT FUDGE TOPPING | Wacky Pack® | only in draft B | not found | 100 / 3.5 / 3 / 0 / 0 / 45 / 16 / 1 / 12 / 1 |
| HOT FUDGE TOPPING | Small | only in draft B | not found | 100 / 3.5 / 3 / 0 / 0 / 45 / 16 / 1 / 12 / 1 |
| HOT FUDGE TOPPING | Medium | only in draft B | not found | 200 / 7 / 6 / 0 / 0 / 90 / 32 / 2 / 25 / 2 |
| HOT FUDGE TOPPING | Large | only in draft B | not found | 300 / 10 / 9 / 0 / 0 / 140 / 48 / 2 / 37 / 2 |
| HOT FUDGE TOPPING | RT 44® | only in draft B | not found | 400 / 14 / 12 / 0 / 0 / 180 / 64 / 3 / 49 / 3 |
| LEMON ADD-IN | Wacky Pack® | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 1 / 0 / 0 / 0 |
| LEMON ADD-IN | Small | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 1 / 0 / 0 / 0 |
| LEMON ADD-IN | Medium | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 0 / 1 / 0 / 1 / 0 |
| LEMON ADD-IN | Large | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 0 / 2 / 0 / 1 / 0 |
| LEMON ADD-IN | RT 44® | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 0 / 2 / 0 / 1 / 0 |
| MANGO SUGAR-FREE ADD-IN | Wacky Pack® | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 5 / 1 / 0 / 0 / 0 |
| MANGO SUGAR-FREE ADD-IN | Small | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 5 / 1 / 0 / 0 / 0 |
| MANGO SUGAR-FREE ADD-IN | Medium | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 15 / 1 / 0 / 0 / 0 |
| MANGO SUGAR-FREE ADD-IN | Large | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 20 / 2 / 0 / 0 / 0 |
| MANGO SUGAR-FREE ADD-IN | RT 44® | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 30 / 2 / 0 / 0 / 0 |
| MINUTE MAID® CRANBERRY ADD-IN | Wacky Pack® | only in draft B | not found | 35 / 0 / 0 / 0 / 0 / 0 / 9 / 0 / 8 / 0 |
| MINUTE MAID® CRANBERRY ADD-IN | Small | only in draft B | not found | 35 / 0 / 0 / 0 / 0 / 0 / 9 / 0 / 8 / 0 |
| MINUTE MAID® CRANBERRY ADD-IN | Medium | only in draft B | not found | 70 / 0 / 0 / 0 / 0 / 0 / 17 / 0 / 16 / 0 |
| MINUTE MAID® CRANBERRY ADD-IN | Large | only in draft B | not found | 100 / 0 / 0 / 0 / 0 / 0 / 26 / 0 / 24 / 0 |
| MINUTE MAID® CRANBERRY ADD-IN | RT 44® | only in draft B | not found | 130 / 0 / 0 / 0 / 0 / 0 / 34 / 0 / 32 / 0 |
| NERDS® CANDY ADD-IN | Wacky Pack® | only in draft B | not found | 110 / 0 / 0 / 0 / 0 / 0 / 26 / 26 / 0 / 0 |
| NERDS® CANDY ADD-IN | Small | only in draft B | not found | 160 / 0 / 0 / 0 / 0 / 5 / 39 / 39 / 0 / 0 |
| NERDS® CANDY ADD-IN | Medium | only in draft B | not found | 210 / 0 / 0 / 0 / 0 / 10 / 52 / 52 / 0 / 0 |
| NERDS® CANDY ADD-IN | Large | only in draft B | not found | 230 / 0 / 0 / 0 / 0 / 10 / 57 / 57 / 0 / 0 |
| NERDS® CANDY ADD-IN | RT 44® | only in draft B | not found | 290 / 0 / 0 / 0 / 0 / 10 / 71 / 71 / 0 / 0 |
| PEACH SUGAR-FREE ADD-IN | Wacky Pack® | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 5 / 0 / 0 / 0 / 0 |
| PEACH SUGAR-FREE ADD-IN | Small | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 5 / 0 / 0 / 0 / 0 |
| PEACH SUGAR-FREE ADD-IN | Medium | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 10 / 1 / 0 / 0 / 0 |
| PEACH SUGAR-FREE ADD-IN | Large | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 20 / 1 / 0 / 0 / 0 |
| PEACH SUGAR-FREE ADD-IN | RT 44® | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 25 / 1 / 0 / 0 / 0 |
| POWERADE® ADD-IN | Wacky Pack® | only in draft B | not found | 25 / 0 / 0 / 0 / 0 / 20 / 6 / 0 / 6 / 0 |
| POWERADE® ADD-IN | Small | only in draft B | not found | 25 / 0 / 0 / 0 / 0 / 20 / 6 / 0 / 6 / 0 |
| POWERADE® ADD-IN | Medium | only in draft B | not found | 45 / 0 / 0 / 0 / 0 / 40 / 13 / 0 / 13 / 0 |
| POWERADE® ADD-IN | Large | only in draft B | not found | 70 / 0 / 0 / 0 / 0 / 60 / 20 / 0 / 20 / 0 |
| POWERADE® ADD-IN | RT 44® | only in draft B | not found | 90 / 0 / 0 / 0 / 0 / 80 / 25 / 0 / 25 / 0 |
| RASPBERRY SUGAR-FREE ADD-IN | Wacky Pack® | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 5 / 0 / 0 / 0 / 0 |
| RASPBERRY SUGAR-FREE ADD-IN | Small | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 5 / 0 / 0 / 0 / 0 |
| RASPBERRY SUGAR-FREE ADD-IN | Medium | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 15 / 1 / 0 / 0 / 0 |
| RASPBERRY SUGAR-FREE ADD-IN | Large | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 20 / 1 / 0 / 0 / 0 |
| RASPBERRY SUGAR-FREE ADD-IN | RT 44® | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 25 / 1 / 0 / 0 / 0 |
| STRAWBERRY ADD-IN | Wacky Pack® | only in draft B | not found | 25 / 0 / 0 / 0 / 0 / 5 / 7 / 1 / 6 / 0 |
| STRAWBERRY ADD-IN | Small | only in draft B | not found | 25 / 0 / 0 / 0 / 0 / 5 / 7 / 1 / 6 / 0 |
| STRAWBERRY ADD-IN | Medium | only in draft B | not found | 50 / 0 / 0 / 0 / 0 / 10 / 12 / 1 / 11 / 0 |
| STRAWBERRY ADD-IN | Large | only in draft B | not found | 70 / 0 / 0 / 0 / 0 / 15 / 18 / 1 / 17 / 0 |
| STRAWBERRY ADD-IN | RT 44® | only in draft B | not found | 90 / 0 / 0 / 0 / 0 / 20 / 24 / 2 / 22 / 0 |
| VANILLA ADD-IN | Wacky Pack® | only in draft B | not found | 20 / 0 / 0 / 0 / 0 / 0 / 6 / 0 / 6 / 0 |
| VANILLA ADD-IN | Small | only in draft B | not found | 20 / 0 / 0 / 0 / 0 / 0 / 6 / 0 / 6 / 0 |
| VANILLA ADD-IN | Medium | only in draft B | not found | 45 / 0 / 0 / 0 / 0 / 0 / 12 / 0 / 12 / 0 |
| VANILLA ADD-IN | Large | only in draft B | not found | 70 / 0 / 0 / 0 / 0 / 5 / 18 / 0 / 18 / 0 |
| VANILLA ADD-IN | RT 44® | only in draft B | not found | 90 / 0 / 0 / 0 / 0 / 5 / 24 / 0 / 24 / 0 |
| SONIC® WATER BOTTLE | 16.9 OZ. | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 |
| BBQ SAUCE | 1 serving | only in draft B | not found | 40 / 0 / 0 / 0 / 0 / 360 / 9 / 0 / 7 / 0 |
| COUNTRY GRAVY | 1 serving | only in draft B | not found | 70 / 2 / 0.5 / 0.5 / 0 / 440 / 13 / 0 / 4 / 1 |
| CREAM CHEESE FROSTING | 1 serving | only in draft B | not found | 160 / 10 / 6 / 0 / 5 / 140 / 17 / 0 / 19 / 0 |
| HONEY MUSTARD | 1 serving | only in draft B | not found | 90 / 8 / 1.5 / 0 / 10 / 170 / 6 / 0 / 4 / 0 |
| KETCHUP | 1 serving | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 85 / 3 / 0 / 2 / 0 |
| MARINARA | 1 serving | only in draft B | not found | 15 / 0 / 0 / 0 / 0 / 140 / 4 / 0 / 2 / 0 |
| LIGHT MAYO | 1 serving | only in draft B | not found | 40 / 3 / 0 / 0 / 5 / 105 / 3 / 2 / 0 / 0 |
| MUSTARD | 1 serving | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 85 / 0 / 0 / 0 / 0 |
| RANCH | 1 serving | only in draft B | not found | 110 / 11 / 2 / 0 / 10 / 230 / 1 / 0 / 1 / 0 |
| SALSA DE SONIC® | 1 serving | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 140 / 0 / 0 / 0 / 0 |
| SIGNATURE CHEESE SAUCE | 1 serving | only in draft B | not found | 110 / 9 / 2 / 0 / 5 / 580 / 5 / 0 / 2 / 2 |
| SIGNATURE SAUCE | 1 serving | only in draft B | not found | 100 / 6 / 1 / 0 / 5 / 280 / 10 / 0 / 8 / 0 |
| SWEET RELISH | 1 serving | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 55 / 3 / 0 / 2 / 0 |
| SYRUP | 1 serving | only in draft B | not found | 90 / 0 / 0 / 0 / 0 / 0 / 22 / 0 / 15 / 0 |
| RED BULL® SLUSH | Small | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 50 / 48 / 0 / 48 / 0 |
| RED BULL® SLUSH | Medium | only in draft B | not found | 250 / 0 / 0 / 0 / 0 / 80 / 65 / 0 / 65 / 0 |
| RED BULL® SLUSH | Large | only in draft B | not found | 390 / 0 / 0 / 0 / 0 / 125 / 103 / 0 / 102 / 1 |
| RED BULL® SLUSH | RT 44® | only in draft B | not found | 540 / 0 / 0 / 0 / 0 / 170 / 144 / 0 / 143 / 1 |
| RED BULL® CAN | Can | only in draft B | not found | 120 / 0 / 0 / 0 / 0 / 110 / 30 / 0 / 29 / 1 |
| SUMMER EDITION WATERMELON RED BULL® SLUSH | Small | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 45 / 48 / 0 / 48 / 0 |
| SUMMER EDITION WATERMELON RED BULL® SLUSH | Medium | only in draft B | not found | 250 / 0 / 0 / 0 / 0 / 75 / 65 / 0 / 65 / 0 |
| SUMMER EDITION WATERMELON RED BULL® SLUSH | Large | only in draft B | not found | 390 / 0 / 0 / 0 / 0 / 115 / 103 / 0 / 102 / 0 |
| SUMMER EDITION WATERMELON RED BULL® SLUSH | RT 44® | only in draft B | not found | 540 / 0 / 0 / 0 / 0 / 160 / 144 / 0 / 143 / 0 |
| SUMMER EDITION WATERMELON RED BULL® CAN | Can | only in draft B | not found | 120 / 0 / 0 / 0 / 0 / 95 / 30 / 0 / 29 / 0 |
| CLASSIC CHICKEN SLINGER | 1 serving | only in draft B | not found | 350 / 16 / 3.5 / 0 / 35 / 680 / 35 / 3 / 6 / 15 |
| SPICY CHICKEN SLINGER | 1 serving | only in draft B | not found | 330 / 15 / 3.5 / 0 / 35 / 740 / 36 / 3 / 6 / 15 |
| YELLOW CAKE BATTER SHAKE | Mini | only in draft B | not found | 540 / 31 / 18 / 0.5 / 55 / 200 / 57 / 0 / 40 / 6 |
| YELLOW CAKE BATTER SHAKE | Small | only in draft B | not found | 770 / 44 / 26 / 1 / 100 / 330 / 83 / 0 / 57 / 10 |
| YELLOW CAKE BATTER SHAKE | Medium | only in draft B | not found | 1050 / 61 / 33 / 1.5 / 125 / 420 / 113 / 0 / 77 / 13 |
| YELLOW CAKE BATTER SHAKE | Large | only in draft B | not found | 1560 / 90 / 48 / 2 / 190 / 640 / 168 / 1 / 113 / 20 |
| BROWNIE BATTER SHAKE | Mini | only in draft B | not found | 530 / 31 / 18 / 0.5 / 55 / 320 / 59 / 1 / 40 / 7 |
| BROWNIE BATTER SHAKE | Small | only in draft B | not found | 760 / 43 / 26 / 1 / 100 / 450 / 85 / 1 / 57 / 11 |
| BROWNIE BATTER SHAKE | Medium | only in draft B | not found | 1040 / 59 / 32 / 1.5 / 125 / 670 / 117 / 2 / 78 / 14 |
| BROWNIE BATTER SHAKE | Large | only in draft B | not found | 1540 / 88 / 47 / 2 / 190 / 1010 / 174 / 4 / 115 / 22 |
| LEMONBERRY SLUSH FLOAT | Mini | only in draft B | not found | 260 / 7 / 4 / 0 / 25 / 95 / 51 / 1 / 44 / 2 |
| LEMONBERRY SLUSH FLOAT | Small | only in draft B | not found | 350 / 9 / 5 / 0 / 30 / 125 / 68 / 1 / 59 / 3 |
| LEMONBERRY SLUSH FLOAT | Medium | only in draft B | not found | 430 / 11 / 7 / 0 / 40 / 150 / 83 / 1 / 73 / 3 |
| LEMONBERRY SLUSH FLOAT | Large | only in draft B | not found | 650 / 15 / 10 / 0.5 / 55 / 220 / 128 / 1 / 114 / 5 |
| BBLT | 1 serving | only in draft B | not found | 610 / 39 / 10 / 0 / 55 / 1300 / 42 / 3 / 12 / 24 |

## Spot check (3 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| DIET COKE® | SMALL | 0 / 0 / 0 / 0 / 0 / 15 / 0 / 0 / 0 / 0 |
| LIMEADE SLUSH | RT 44® | 600 / 0 / 0 / 0 / 0 / 95 / 163 / 0 / 157 / 0 |
| AHATCH GREEN CHILE CHEESEBURGER | 1 serving | 590 / 28 / 10 / 1 / 85 / 1070 / 53 / 3 / 11 / 30 |
