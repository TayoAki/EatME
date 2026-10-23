# SONIC: lines for a person

Guide: https://offers.sonicdrivein.com/nutrition/nutrition.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (261)

The last column comes from `npm run chains:evidence`: whether a draft's numbers sit right after the item's name in the guide text the drafts read. It can't read sizes or sections (one draft called a single 78 g cookie a "6 pack"): check those against the guide, then fix the line and set its check to `person`.

Fix each line in `menus/sonic.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B | In the guide text (no AI) |
| --- | --- | --- | --- | --- | --- |
| JR. BURGER | 1 serving | differ: protein_g | 330 / 16 / 4.5 / 0.5 / 35 / 610 / 32 / 2 / 15 / 30 | 330 / 16 / 4.5 / 0.5 / 35 / 610 / 32 / 2 / 15 / – | A: not as drafted (line 58 lacks 30); B: numbers found after the name (line 58); check the size |
| QUARTER POUND DOUBLE CHEESEBURGER | 1 serving | differ: protein_g | 570 / 34 / 14 / 1 / 105 / 1370 / 34 / 2 / 6 / 30 | 570 / 34 / 14 / 1 / 105 / 1370 / 34 / 2 / 6 / – | A: not as drafted (line 59 lacks 30); B: numbers found after the name (line 59); check the size |
| SONIC® BACON CHEESEBURGER WITH MAYO | 1 serving | differ: protein_g | 770 / 46 / 14 / 1 / 105 / 1340 / 53 / 3 / 11 / 30 | 770 / 46 / 14 / 1 / 105 / 1340 / 53 / 3 / 11 / – | A: name not in the guide text; B: name not in the guide text |
| SONIC® BURGER WITH KETCHUP | 1 serving | differ: protein_g | 540 / 22 / 7 / 1 / 65 / 910 / 57 / 3 / 14 / 30 | 540 / 22 / 7 / 1 / 65 / 910 / 57 / 3 / 14 / – | A: name not in the guide text; B: name not in the guide text |
| SONIC® BURGER WITH MAYO | 1 serving | differ: protein_g | 620 / 34 / 9 / 1 / 70 / 850 / 53 / 3 / 11 / 30 | 620 / 34 / 9 / 1 / 70 / 850 / 53 / 3 / 11 / – | A: name not in the guide text; B: name not in the guide text |
| SONIC® BURGER WITH MUSTARD | 1 serving | differ: protein_g | 520 / 23 / 7 / 1 / 65 / 860 / 53 / 3 / 11 / 30 | 520 / 23 / 7 / 1 / 65 / 860 / 53 / 3 / 11 / – | A: name not in the guide text; B: name not in the guide text |
| SONIC® BURGER WITH MUSTARD, KETCHUP & MAYO | 1 serving | differ: protein_g | 640 / 34 / 9 / 1 / 70 / 1070 / 57 / 3 / 14 / 30 | 640 / 34 / 9 / 1 / 70 / 1070 / 57 / 3 / 14 / – | A: name not in the guide text; B: name not in the guide text |
| SONIC® CHEESEBURGER WITH KETCHUP | 1 serving | differ: protein_g | 600 / 28 / 10 / 1 / 85 / 1240 / 58 / 3 / 14 / 30 | 600 / 28 / 10 / 1 / 85 / 1240 / 58 / 3 / 14 / – | A: name not in the guide text; B: name not in the guide text |
| SONIC® CHEESEBURGER WITH MAYO | 1 serving | differ: protein_g | 680 / 39 / 12 / 1 / 85 / 1180 / 54 / 3 / 11 / 30 | 680 / 39 / 12 / 1 / 85 / 1180 / 54 / 3 / 11 / – | A: name not in the guide text; B: name not in the guide text |
| SONIC® CHEESEBURGER WITH MUSTARD | 1 serving | differ: protein_g | 590 / 28 / 10 / 1 / 85 / 1190 / 54 / 3 / 11 / 30 | 590 / 28 / 10 / 1 / 85 / 1190 / 54 / 3 / 11 / – | A: name not in the guide text; B: name not in the guide text |
| SONIC® CHEESEBURGER WITH MUSTARD, KETCHUP & MAYO | 1 serving | differ: protein_g | 710 / 39 / 12 / 1 / 85 / 1400 / 58 / 3 / 15 / 30 | 710 / 39 / 12 / 1 / 85 / 1400 / 58 / 3 / 15 / – | A: name not in the guide text; B: name not in the guide text |
| SUPERSONIC® BACON DOUBLE CHEESEBURGER WITH MAYO | 1 serving | differ: protein_g | 1030 / 65 / 23 / 2 / 190 / 1880 / 54 / 3 / 12 / 30 | 1030 / 65 / 23 / 2 / 190 / 1880 / 54 / 3 / 12 / – | A: name not in the guide text; B: name not in the guide text |
| SUPERSONIC® DOUBLE CHEESEBURGER WITH KETCHUP | 1 serving | differ: protein_g | 870 / 48 / 19 / 1.5 / 165 / 1780 / 59 / 3 / 15 / 30 | 870 / 48 / 19 / 1.5 / 165 / 1780 / 59 / 3 / 15 / – | A: name not in the guide text; B: name not in the guide text |
| SUPERSONIC® DOUBLE CHEESEBURGER WITH MAYO | 1 serving | differ: protein_g | 960 / 59 / 21 / 2 / 170 / 1720 / 55 / 3 / 12 / 30 | 960 / 59 / 21 / 2 / 170 / 1720 / 55 / 3 / 12 / – | A: name not in the guide text; B: name not in the guide text |
| SUPERSONIC® DOUBLE CHEESEBURGER WITH MUSTARD | 1 serving | differ: protein_g | 860 / 48 / 19 / 1.5 / 165 / 1730 / 55 / 3 / 12 / 30 | 860 / 48 / 19 / 1.5 / 165 / 1730 / 55 / 3 / 12 / – | A: name not in the guide text; B: name not in the guide text |
| SUPERSONIC® DOUBLE CHEESEBURGER WITH MUSTARD, KETCHUP & MAYO | 1 serving | differ: protein_g | 970 / 59 / 21 / 2 / 170 / 1940 / 59 / 3 / 15 / 30 | 970 / 59 / 21 / 2 / 170 / 1940 / 59 / 3 / 15 / – | A: name not in the guide text; B: name not in the guide text |
| SUPERSONIC® JALAPENO DOUBLE CHEESEBURGER WITH MUSTARD | 1 serving | differ: protein_g | 850 / 48 / 19 / 1.5 / 165 / 1740 / 54 / 2 / 12 / 30 | 850 / 48 / 19 / 1.5 / 165 / 1740 / 54 / 2 / 12 / – | A: name not in the guide text; B: name not in the guide text |
| VEGGIE BURGER WITH KETCHUP | 1 serving | only in draft A | 440 / 11 / 2.5 / 0 / 5 / 1800 / 73 / 7 / 14 / 30 | not found | A: not as drafted (line 75 lacks 30) |
| VEGGIE BURGER WITH MAYO | 1 serving | only in draft A | 530 / 22 / 4 / 0 / 10 / 1750 / 69 / 7 / 11 / 30 | not found | A: not as drafted (line 76 lacks 30) |
| VEGGIE BURGER WITH MUSTARD | 1 serving | only in draft A | 430 / 11 / 2.5 / 0 / 5 / 1760 / 69 / 7 / 10 / 30 | not found | A: not as drafted (line 77 lacks 30) |
| VEGGIE BURGER WITH MUSTARD, KETCHUP & MAYO | 1 serving | only in draft A | 550 / 23 / 4 / 0 / 10 / 1960 / 73 / 7 / 14 / 30 | not found | A: not as drafted (line 78 lacks 30) |
| AVOCADO | 1 serving | only in draft A | 35 / 3 / 0.5 / 0 / 0 / 20 / 2 / 1 / 0 / 0 | not found | A: not as drafted (line 81 lacks 0) |
| CRISPY BACON | 1 serving | differ: sugars_g, protein_g | 80 / 7 / 2.5 / 0 / 20 / 290 / 1 / 0 / 0 / 6 | 80 / 7 / 2.5 / 0 / 20 / 290 / 1 / 0 / 6 / – | A: not as drafted (line 82 lacks 0); B: numbers found after the name (line 82); check the size |
| GRILLED ONIONS | 1 serving | differ: protein_g | 5 / 0 / 0 / 0 / 0 / 5 / 1 / 0 / 0 / 0 | 5 / 0 / 0 / 0 / 0 / 5 / 1 / 0 / 0 / – | A: not as drafted (line 83 lacks 0); B: numbers found after the name (line 83); check the size |
| HATCH GREEN CHILES | 1 serving | only in draft A | 5 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | not found | A: numbers found after the name (line 84); check the size, mostly zeros: look |
| HICKORY BBQ SAUCE | 1 serving | only in draft A | 30 / 0 / 0 / 0 / 0 / 310 / 7 / 0 / 5 / 0 | not found | A: numbers found after the name (line 85); check the size |
| HOT CHILI | 1 serving | differ: protein_g | 60 / 4 / 1.5 / 0 / 10 / 170 / 3 / 1 / 1 / 1 | 60 / 4 / 1.5 / 0 / 10 / 170 / 3 / 1 / 1 / – | A: not as drafted (line 86 lacks 1); B: numbers found after the name (line 86); check the size |
| RANCH DRESSING | 1 serving | only in draft A | 130 / 14 / 2.5 / 0 / 5 / 250 / 2 / 0 / 1 / 0 | not found | A: not as drafted (line 87 lacks 0) |
| SLAW | 1 serving | only in draft A | 140 / 7 / 1.5 / 0 / 5 / 220 / 17 / 2 / 14 / 0 | not found | A: not as drafted (line 88 lacks 0) |
| SPICY JALAPENO | 1 serving | differ: protein_g | 5 / 0 / 0 / 0 / 0 / 140 / 1 / 0 / 1 / 0 | 5 / 0 / 0 / 0 / 0 / 140 / 1 / 0 / 1 / – | A: numbers found after the name (line 89); check the size; B: numbers found after the name (line 89); check the size |
| BLT TOASTER® SANDWICH | 1 serving | only in draft A | 580 / 32 / 8 / 0 / 40 / 1080 / 53 / 2 / 8 / 37 | not found | A: name not in the guide text |
| CHICKEN CLUB TOASTER® SANDWICH | 1 serving | only in draft A | 770 / 43 / 11 / 0 / 80 / 1590 / 63 / 3 / 8 / 37 | not found | A: name not in the guide text |
| COUNTRY FRIED STEAK TOASTER® SANDWICH | 1 serving | only in draft A | 700 / 35 / 9 / 0 / 45 / 1390 / 80 / 3 / 7 / 37 | not found | A: name not in the guide text |
| CHICKEN WRAP - GRILLED | 1 serving | only in draft A | 480 / 14 / 4 / 0 / 80 / 1720 / 39 / 2 / 3 / 21 | not found | A: not as drafted (line 106 lacks 21) |
| CORN DOG | 1 serving | differ: protein_g | 230 / 13 / 4 / 0 / 15 / 480 / 23 / 1 / 5 / 6 | 230 / 13 / 4 / 0 / 15 / 480 / 23 / 1 / 5 / – | A: numbers found after the name (line 194); check the size; B: numbers found after the name (line 92); check the size |
| FRIES | SMALL | differ: sugars_g, protein_g | 250 / 12 / 2 / 0 / 0 / 260 / 33 / 3 / 0 / 3 | 250 / 12 / 2 / 0 / 0 / 260 / 33 / 3 / 6 / – | A: numbers found after the name (line 195); check the size; B: numbers found after the name (line 93); check the size |
| TOTS | SMALL | differ: protein_g | 250 / 13 / 2.5 / 0 / 0 / 620 / 30 / 3 / 0 / 2 | 250 / 13 / 2.5 / 0 / 0 / 620 / 30 / 3 / 0 / – | A: numbers found after the name (line 217); check the size; B: numbers found after the name (line 97); check the size |
| ΔBIG RED® | SMALL | both read numbers that can't be right: sugars 41 g above carbs 31 g | 110 / 0 / 0 / 0 / 0 / 45 / 31 / 0 / 41 / 0 | 110 / 0 / 0 / 0 / 0 / 45 / 31 / 0 / 41 / 0 | A: numbers found after the name (line 337); check the size; B: numbers found after the name (line 337); check the size |
| CREAM CHEESE FROSTING | 1 serving | both read numbers that can't be right: sugars 19 g above carbs 17 g | 160 / 10 / 6 / 0 / 5 / 140 / 17 / 0 / 19 / 0 | 160 / 10 / 6 / 0 / 5 / 140 / 17 / 0 / 19 / 0 | A: numbers found after the name (line 555); check the size; B: numbers found after the name (line 555); check the size |
| AVEGGIE BURGER WITH KETCHUP | 1 serving | only in draft B | not found | 440 / 11 / 2.5 / 0 / 5 / 1800 / 73 / 7 / 14 / – | B: numbers found after the name (line 75); check the size |
| AVEGGIE BURGER WITH MAYO | 1 serving | only in draft B | not found | 530 / 22 / 4 / 0 / 10 / 1750 / 69 / 7 / 11 / – | B: numbers found after the name (line 76); check the size |
| AVEGGIE BURGER WITH MUSTARD | 1 serving | only in draft B | not found | 430 / 11 / 2.5 / 0 / 5 / 1760 / 69 / 7 / 10 / – | B: numbers found after the name (line 77); check the size |
| AVEGGIE BURGER WITH MUSTARD, KETCHUP & MAYO | 1 serving | only in draft B | not found | 550 / 23 / 4 / 0 / 10 / 1960 / 73 / 7 / 14 / – | B: numbers found after the name (line 78); check the size |
| AAVOCADO | 1 serving | only in draft B | not found | 35 / 3 / 0.5 / 0 / 0 / 20 / 2 / 1 / 0 / – | B: numbers found after the name (line 81); check the size |
| AHATCH GREEN CHILES | 1 serving | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / – | B: numbers found after the name (line 84); check the size, mostly zeros: look |
| AHICKORY BBQ SAUCE | 1 serving | only in draft B | not found | 30 / 0 / 0 / 0 / 0 / 310 / 7 / 0 / 5 / – | B: numbers found after the name (line 85); check the size |
| ARANCH DRESSING | 1 serving | only in draft B | not found | 130 / 14 / 2.5 / 0 / 5 / 250 / 2 / 0 / 1 / – | B: numbers found after the name (line 87); check the size |
| ASLAW | 1 serving | only in draft B | not found | 140 / 7 / 1.5 / 0 / 5 / 220 / 17 / 2 / 14 / – | B: numbers found after the name (line 88); check the size |
| CRISPY TENDERS | 2 PC. | only in draft B | not found | 170 / 8 / 0.5 / 0 / 40 / 490 / 11 / 1 / 0 / 14 | B: numbers found after the name (line 91); check the size |
| 1% MILK | JUG | only in draft B | not found | 130 / 2.5 / 1.5 / 0 / 15 / 160 / 16 / 0 / 15 / – | B: numbers found after the name (line 95); check the size |
| MINUTE MAID® 100% APPLE JUICE BOX | 1 serving | only in draft B | not found | 80 / 0 / 0 / 0 / 0 / 15 / 21 / 0 / 19 / – | B: numbers found after the name (line 418); check the size |
| TREE TOP® APPLE SAUCE | 1 serving | only in draft B | not found | 45 / 0 / 0 / 0 / 0 / 0 / 13 / 2 / 11 / – | B: name not in the guide text |
| ABLT TOASTER® SANDWICH | 1 serving | only in draft B | not found | 580 / 32 / 8 / 0 / 40 / 1080 / 53 / 2 / 8 / – | B: name not in the guide text |
| ACHICKEN CLUB TOASTER® SANDWICH | 1 serving | only in draft B | not found | 770 / 43 / 11 / 0 / 80 / 1590 / 63 / 3 / 8 / – | B: name not in the guide text |
| ACOUNTRY FRIED STEAK TOASTER® SANDWICH | 1 serving | only in draft B | not found | 700 / 35 / 9 / 0 / 45 / 1390 / 80 / 3 / 7 / – | B: name not in the guide text |
| ACHICKEN WRAP - GRILLED | 1 serving | only in draft B | not found | 480 / 14 / 4 / 0 / 80 / 1720 / 39 / 2 / 3 / – | B: numbers found after the name (line 106); check the size |
| JUMBO POPCORN CHICKEN# | SMALL | only in draft B | not found | 330 / 19 / 3.5 / 0 / 40 / 1100 / 24 / 3 / 1 / 16 | B: numbers found after the name (line 120); check the size |
| JUMBO POPCORN CHICKEN# | MEDIUM | only in draft B | not found | 490 / 28 / 5 / 0 / 55 / 1640 / 36 / 4 / 1 / 23 | B: numbers found after the name (line 121); check the size |
| JUMBO POPCORN CHICKEN# | LARGE | only in draft B | not found | 750 / 43 / 8 / 0.5 / 90 / 2520 / 55 / 6 / 2 / 36 | B: numbers found after the name (line 122); check the size |
| FANTA® ORANGE | WACKY PACK® | only in draft B | not found | 70 / 0 / 0 / 0 / 0 / 0 / 20 / 0 / 20 / 0 | B: numbers found after the name (line 371); check the size |
| FANTA® ORANGE | SMALL | only in draft B | not found | 110 / 0 / 0 / 0 / 0 / 0 / 31 / 0 / 31 / 0 | B: numbers found after the name (line 372); check the size |
| FANTA® ORANGE | MEDIUM | only in draft B | not found | 190 / 0 / 0 / 0 / 0 / 0 / 51 / 0 / 51 / 0 | B: numbers found after the name (line 373); check the size |
| FANTA® ORANGE | LARGE | only in draft B | not found | 280 / 0 / 0 / 0 / 0 / 10 / 78 / 0 / 78 / 0 | B: numbers found after the name (line 374); check the size |
| FANTA® ORANGE | RT 44® | only in draft B | not found | 380 / 0 / 0 / 0 / 0 / 10 / 105 / 0 / 105 / 0 | B: numbers found after the name (line 375); check the size |
| HI-C® FRUIT PUNCH | WACKY PACK® | only in draft B | not found | 70 / 0 / 0 / 0 / 0 / 10 / 19 / 0 / 19 / 0 | B: numbers found after the name (line 376); check the size |
| HI-C® FRUIT PUNCH | SMALL | only in draft B | not found | 110 / 0 / 0 / 0 / 0 / 15 / 30 / 0 / 30 / 0 | B: numbers found after the name (line 377); check the size |
| HI-C® FRUIT PUNCH | MEDIUM | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 20 / 50 / 0 / 50 / 0 | B: numbers found after the name (line 378); check the size |
| HI-C® FRUIT PUNCH | LARGE | only in draft B | not found | 280 / 0 / 0 / 0 / 0 / 35 / 75 / 0 / 75 / 0 | B: numbers found after the name (line 379); check the size |
| HI-C® FRUIT PUNCH | RT 44® | only in draft B | not found | 380 / 0 / 0 / 0 / 0 / 40 / 102 / 0 / 102 / 0 | B: numbers found after the name (line 380); check the size |
| ΔMELLO YELLO® | WACKY PACK® | only in draft B | not found | 70 / 0 / 0 / 0 / 0 / 10 / 20 / 0 / 20 / 0 | B: numbers found after the name (line 381); check the size |
| ΔMELLO YELLO® | SMALL | only in draft B | not found | 110 / 0 / 0 / 0 / 0 / 15 / 31 / 0 / 31 / 0 | B: numbers found after the name (line 382); check the size |
| ΔMELLO YELLO® | MEDIUM | only in draft B | not found | 190 / 0 / 0 / 0 / 0 / 20 / 51 / 0 / 51 / 0 | B: numbers found after the name (line 383); check the size |
| ΔMELLO YELLO® | LARGE | only in draft B | not found | 280 / 0 / 0 / 0 / 0 / 30 / 78 / 0 / 78 / 0 | B: numbers found after the name (line 384); check the size |
| ΔMELLO YELLO® | RT 44® | only in draft B | not found | 380 / 0 / 0 / 0 / 0 / 40 / 105 / 0 / 105 / 0 | B: numbers found after the name (line 385); check the size |
| POWERADE® MOUNTAIN BLAST® | WACKY PACK® | only in draft B | not found | 45 / 0 / 0 / 0 / 0 / 40 / 12 / 0 / 12 / 0 | B: numbers found after the name (line 386); check the size |
| POWERADE® MOUNTAIN BLAST® | SMALL | only in draft B | not found | 70 / 0 / 0 / 0 / 0 / 60 / 18 / 0 / 18 / 0 | B: numbers found after the name (line 387); check the size |
| POWERADE® MOUNTAIN BLAST® | MEDIUM | only in draft B | not found | 110 / 0 / 0 / 0 / 0 / 100 / 30 / 0 / 30 / 0 | B: numbers found after the name (line 388); check the size |
| POWERADE® MOUNTAIN BLAST® | LARGE | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 150 / 46 / 0 / 46 / 0 | B: numbers found after the name (line 389); check the size |
| POWERADE® MOUNTAIN BLAST® | RT 44® | only in draft B | not found | 230 / 0 / 0 / 0 / 0 / 200 / 62 / 0 / 62 / 0 | B: numbers found after the name (line 390); check the size |
| SPRITE® | WACKY PACK® | only in draft B | not found | 70 / 0 / 0 / 0 / 0 / 15 / 18 / 0 / 18 / 0 | B: numbers found after the name (line 391); check the size |
| SPRITE® | SMALL | only in draft B | not found | 100 / 0 / 0 / 0 / 0 / 25 / 28 / 0 / 28 / 0 | B: numbers found after the name (line 392); check the size |
| SPRITE® | MEDIUM | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 40 / 46 / 0 / 46 / 0 | B: numbers found after the name (line 393); check the size |
| SPRITE® | LARGE | only in draft B | not found | 260 / 0 / 0 / 0 / 0 / 70 / 70 / 0 / 70 / 0 | B: numbers found after the name (line 394); check the size |
| SPRITE® | RT 44® | only in draft B | not found | 350 / 0 / 0 / 0 / 0 / 85 / 94 / 0 / 94 / 0 | B: numbers found after the name (line 395); check the size |
| SPRITE ZERO® | WACKY PACK® | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 10 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 396); check the size, mostly zeros: look |
| SPRITE ZERO® | SMALL | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 15 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 397); check the size, mostly zeros: look |
| SPRITE ZERO® | MEDIUM | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 20 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 398); check the size, mostly zeros: look |
| SPRITE ZERO® | LARGE | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 30 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 399); check the size, mostly zeros: look |
| SPRITE ZERO® | RT 44® | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 40 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 400); check the size, mostly zeros: look |
| ΔSUN DROP® | WACKY PACK® | only in draft B | not found | 80 / 0 / 0 / 0 / 0 / 25 / 21 / 0 / 21 / 0 | B: numbers found after the name (line 401); check the size |
| ΔSUN DROP® | SMALL | only in draft B | not found | 130 / 0 / 0 / 0 / 0 / 45 / 33 / 0 / 33 / 0 | B: numbers found after the name (line 402); check the size |
| ΔSUN DROP® | MEDIUM | only in draft B | not found | 190 / 0 / 0 / 0 / 0 / 65 / 48 / 0 / 48 / 0 | B: numbers found after the name (line 403); check the size |
| ΔSUN DROP® | LARGE | only in draft B | not found | 280 / 0 / 0 / 0 / 0 / 100 / 73 / 0 / 73 / 0 | B: numbers found after the name (line 404); check the size |
| ΔSUN DROP® | RT 44® | only in draft B | not found | 380 / 0 / 0 / 0 / 0 / 135 / 99 / 0 / 99 / 0 | B: numbers found after the name (line 405); check the size |
| SWEET ICED TEA | WACKY PACK® | only in draft B | not found | 80 / 0 / 0 / 0 / 0 / 10 / 21 / 0 / 21 / 0 | B: numbers found after the name (line 407); check the size |
| SWEET ICED TEA | SMALL | only in draft B | not found | 140 / 0 / 0 / 0 / 0 / 10 / 37 / 0 / 37 / 0 | B: numbers found after the name (line 408); check the size |
| SWEET ICED TEA | MEDIUM | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 15 / 45 / 0 / 45 / 0 | B: numbers found after the name (line 409); check the size |
| SWEET ICED TEA | LARGE | only in draft B | not found | 290 / 0 / 0 / 0 / 0 / 30 / 78 / 0 / 78 / 0 | B: numbers found after the name (line 410); check the size |
| SWEET ICED TEA | RT 44® | only in draft B | not found | 360 / 0 / 0 / 0 / 0 / 35 / 96 / 0 / 96 / 0 | B: numbers found after the name (line 411); check the size |
| UNSWEET ICED TEA | WACKY PACK® | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 10 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 412); check the size, mostly zeros: look |
| UNSWEET ICED TEA | SMALL | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 10 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 412); check the size, mostly zeros: look |
| UNSWEET ICED TEA | MEDIUM | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 15 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 414); check the size, mostly zeros: look |
| UNSWEET ICED TEA | LARGE | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 30 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 415); check the size, mostly zeros: look |
| UNSWEET ICED TEA | RT 44® | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 35 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 416); check the size, mostly zeros: look |
| AMINUTE MAID® ORANGE JUICE | SMALL | only in draft B | not found | 140 / 0 / 0 / 0 / 0 / 25 / 34 / 0 / 30 / 2 | B: numbers found after the name (line 419); check the size |
| AMINUTE MAID® ORANGE JUICE | MEDIUM | only in draft B | not found | 200 / 0 / 0 / 0 / 0 / 35 / 47 / 0 / 42 / 3 | B: numbers found after the name (line 420); check the size |
| CHERRY LIMEADE | WACKY PACK® | only in draft B | not found | 110 / 0 / 0 / 0 / 0 / 20 / 29 / 0 / 28 / 0 | B: numbers found after the name (line 422); check the size |
| CHERRY LIMEADE | SMALL | only in draft B | not found | 150 / 0 / 0 / 0 / 0 / 30 / 39 / 0 / 38 / 0 | B: numbers found after the name (line 423); check the size |
| CHERRY LIMEADE | MEDIUM | only in draft B | not found | 250 / 0 / 0 / 0 / 0 / 50 / 66 / 0 / 65 / 0 | B: numbers found after the name (line 424); check the size |
| CHERRY LIMEADE | LARGE | only in draft B | not found | 370 / 0 / 0 / 0 / 0 / 70 / 99 / 0 / 97 / 0 | B: numbers found after the name (line 425); check the size |
| CHERRY LIMEADE | RT 44® | only in draft B | not found | 490 / 0 / 0 / 0 / 0 / 100 / 132 / 0 / 130 / 0 | B: numbers found after the name (line 426); check the size |
| DIET CHERRY® LIMEADE | WACKY PACK® | only in draft B | not found | 15 / 0 / 0 / 0 / 0 / 10 / 3 / 0 / 2 / 0 | B: numbers found after the name (line 427); check the size |
| DIET CHERRY® LIMEADE | SMALL | only in draft B | not found | 15 / 0 / 0 / 0 / 0 / 15 / 3 / 0 / 2 / 0 | B: numbers found after the name (line 428); check the size |
| DIET CHERRY® LIMEADE | MEDIUM | only in draft B | not found | 20 / 0 / 0 / 0 / 0 / 20 / 3 / 0 / 2 / 0 | B: numbers found after the name (line 429); check the size |
| DIET CHERRY® LIMEADE | LARGE | only in draft B | not found | 25 / 0 / 0 / 0 / 0 / 35 / 4 / 0 / 2 / 0 | B: numbers found after the name (line 430); check the size |
| DIET CHERRY® LIMEADE | RT 44® | only in draft B | not found | 30 / 0 / 0 / 0 / 0 / 45 / 4 / 0 / 2 / 0 | B: numbers found after the name (line 431); check the size |
| DIET LIME LIMEADE | WACKY PACK® | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 10 / 1 / 0 / 0 / 0 | B: numbers found after the name (line 432); check the size |
| DIET LIME LIMEADE | SMALL | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 10 / 1 / 0 / 0 / 0 | B: numbers found after the name (line 432); check the size |
| DIET LIME LIMEADE | MEDIUM | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 15 / 1 / 0 / 0 / 0 | B: numbers found after the name (line 434); check the size |
| DIET LIME LIMEADE | LARGE | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 25 / 2 / 0 / 0 / 0 | B: numbers found after the name (line 435); check the size |
| DIET LIME LIMEADE | RT 44® | only in draft B | not found | 15 / 0 / 0 / 0 / 0 / 35 / 2 / 0 / 0 / 0 | B: numbers found after the name (line 436); check the size |
| LIMEADE | WACKY PACK® | only in draft B | not found | 70 / 0 / 0 / 0 / 0 / 15 / 18 / 0 / 18 / 0 | B: numbers found after the name (line 437); check the size |
| LIMEADE | SMALL | only in draft B | not found | 100 / 0 / 0 / 0 / 0 / 25 / 28 / 0 / 28 / 0 | B: numbers found after the name (line 438); check the size |
| LIMEADE | MEDIUM | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 40 / 47 / 0 / 46 / 0 | B: numbers found after the name (line 439); check the size |
| LIMEADE | LARGE | only in draft B | not found | 270 / 0 / 0 / 0 / 0 / 65 / 72 / 0 / 70 / 0 | B: numbers found after the name (line 440); check the size |
| LIMEADE | RT 44® | only in draft B | not found | 360 / 0 / 0 / 0 / 0 / 85 / 97 / 0 / 95 / 0 | B: numbers found after the name (line 441); check the size |
| MINUTE MAID® CRANBERRY** LIMEADE | WACKY PACK® | only in draft B | not found | 100 / 0 / 0 / 0 / 0 / 20 / 27 / 0 / 26 / 0 | B: name not in the guide text |
| MINUTE MAID® CRANBERRY** LIMEADE | SMALL | only in draft B | not found | 140 / 0 / 0 / 0 / 0 / 20 / 37 / 0 / 36 / 0 | B: name not in the guide text |
| MINUTE MAID® CRANBERRY** LIMEADE | MEDIUM | only in draft B | not found | 240 / 0 / 0 / 0 / 0 / 45 / 64 / 0 / 62 / 0 | B: name not in the guide text |
| MINUTE MAID® CRANBERRY** LIMEADE | LARGE | only in draft B | not found | 360 / 0 / 0 / 0 / 0 / 65 / 97 / 0 / 94 / 0 | B: name not in the guide text |
| MINUTE MAID® CRANBERRY** LIMEADE | RT 44® | only in draft B | not found | 490 / 0 / 0 / 0 / 0 / 90 / 131 / 0 / 127 / 0 | B: name not in the guide text |
| STRAWBERRY LIMEADE | WACKY PACK® | only in draft B | not found | 100 / 0 / 0 / 0 / 0 / 25 / 25 / 1 / 24 / 0 | B: numbers found after the name (line 447); check the size |
| STRAWBERRY LIMEADE | SMALL | only in draft B | not found | 130 / 0 / 0 / 0 / 0 / 30 / 35 / 1 / 34 / 0 | B: numbers found after the name (line 448); check the size |
| STRAWBERRY LIMEADE | MEDIUM | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 50 / 59 / 1 / 57 / 0 | B: numbers found after the name (line 449); check the size |
| STRAWBERRY LIMEADE | LARGE | only in draft B | not found | 340 / 0 / 0 / 0 / 0 / 80 / 90 / 2 / 87 / 0 | B: numbers found after the name (line 450); check the size |
| STRAWBERRY LIMEADE | RT 44® | only in draft B | not found | 450 / 0 / 0 / 0 / 0 / 105 / 120 / 2 / 117 / 0 | B: numbers found after the name (line 451); check the size |
| OCEAN WATER® | WACKY PACK® | only in draft B | not found | 80 / 0 / 0 / 0 / 0 / 20 / 21 / 0 / 21 / 0 | B: numbers found after the name (line 452); check the size |
| OCEAN WATER® | SMALL | only in draft B | not found | 120 / 0 / 0 / 0 / 0 / 30 / 31 / 0 / 31 / 0 | B: numbers found after the name (line 452); check the size |
| OCEAN WATER® | MEDIUM | only in draft B | not found | 200 / 0 / 0 / 0 / 0 / 45 / 52 / 0 / 52 / 0 | B: numbers found after the name (line 452); check the size |
| OCEAN WATER® | LARGE | only in draft B | not found | 300 / 0 / 0 / 0 / 0 / 70 / 79 / 0 / 79 / 0 | B: numbers found after the name (line 456); check the size |
| OCEAN WATER® | RT 44® | only in draft B | not found | 400 / 0 / 0 / 0 / 0 / 95 / 107 / 0 / 106 / 0 | B: numbers found after the name (line 457); check the size |
| BLACKBERRY SUGAR-FREE ADD-IN | WACKY PACK® | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 5 / 1 / 0 / 0 / 0 | B: numbers found after the name (line 459); check the size, mostly zeros: look |
| BLACKBERRY SUGAR-FREE ADD-IN | SMALL | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 5 / 1 / 0 / 0 / 0 | B: numbers found after the name (line 459); check the size, mostly zeros: look |
| BLACKBERRY SUGAR-FREE ADD-IN | MEDIUM | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 15 / 1 / 0 / 0 / 0 | B: numbers found after the name (line 461); check the size |
| BLACKBERRY SUGAR-FREE ADD-IN | LARGE | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 20 / 2 / 0 / 0 / 0 | B: numbers found after the name (line 462); check the size |
| BLUE COCONUT ADD-IN | WACKY PACK® | only in draft B | not found | 15 / 0 / 0 / 0 / 0 / 0 / 3 / 0 / 3 / 0 | B: numbers found after the name (line 464); check the size |
| BLUE COCONUT ADD-IN | SMALL | only in draft B | not found | 15 / 0 / 0 / 0 / 0 / 0 / 3 / 0 / 3 / 0 | B: numbers found after the name (line 464); check the size |
| BLUE COCONUT ADD-IN | MEDIUM | only in draft B | not found | 25 / 0 / 0 / 0 / 0 / 0 / 6 / 0 / 6 / 0 | B: numbers found after the name (line 466); check the size |
| BLUE COCONUT ADD-IN | LARGE | only in draft B | not found | 40 / 0 / 0 / 0 / 0 / 5 / 9 / 0 / 9 / 0 | B: numbers found after the name (line 467); check the size |
| BLUE Raspberry ADD-IN | SMALL | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 0 / 3 / 0 / 3 / 0 | B: numbers found after the name (line 470); check the size |
| BLUE Raspberry ADD-IN | MEDIUM | only in draft B | not found | 20 / 0 / 0 / 0 / 0 / 0 / 6 / 0 / 5 / 0 | B: numbers found after the name (line 471); check the size |
| BLUE Raspberry ADD-IN | LARGE | only in draft B | not found | 35 / 0 / 0 / 0 / 0 / 5 / 8 / 0 / 8 / 0 | B: numbers found after the name (line 472); check the size |
| BLUE Raspberry ADD-IN | RT 44® | only in draft B | not found | 45 / 0 / 0 / 0 / 0 / 10 / 11 / 0 / 11 / 0 | B: numbers found after the name (line 473); check the size |
| CARAMEL TOPPING | WACKY PACK® | only in draft B | not found | 90 / 1 / 0.5 / 0 / 5 / 90 / 19 / 0 / 12 / 0 | B: numbers found after the name (line 474); check the size |
| CARAMEL TOPPING | SMALL | only in draft B | not found | 90 / 1 / 0.5 / 0 / 5 / 90 / 19 / 0 / 12 / 0 | B: numbers found after the name (line 474); check the size |
| CARAMEL TOPPING | MEDIUM | only in draft B | not found | 180 / 2 / 1.5 / 0 / 5 / 180 / 37 / 0 / 24 / 0 | B: numbers found after the name (line 476); check the size |
| CARAMEL TOPPING | LARGE | only in draft B | not found | 270 / 3.5 / 2 / 0 / 10 / 270 / 56 / 0 / 36 / 0 | B: numbers found after the name (line 477); check the size |
| CARAMEL TOPPING | RT 44® | only in draft B | not found | 360 / 4.5 / 3 / 0 / 15 / 360 / 75 / 0 / 48 / 0 | B: numbers found after the name (line 478); check the size |
| CHERRY ADD-IN | WACKY PACK® | only in draft B | not found | 30 / 0 / 0 / 0 / 0 / 0 / 8 / 0 / 8 / 0 | B: numbers found after the name (line 479); check the size |
| CHERRY ADD-IN | SMALL | only in draft B | not found | 30 / 0 / 0 / 0 / 0 / 0 / 8 / 0 / 8 / 0 | B: numbers found after the name (line 479); check the size |
| CHERRY ADD-IN | MEDIUM | only in draft B | not found | 60 / 0 / 0 / 0 / 0 / 5 / 17 / 0 / 17 / 0 | B: numbers found after the name (line 481); check the size |
| CHERRY ADD-IN | LARGE | only in draft B | not found | 90 / 0 / 0 / 0 / 0 / 10 / 25 / 0 / 25 / 0 | B: numbers found after the name (line 482); check the size |
| CHERRY ADD-IN | RT 44® | only in draft B | not found | 120 / 0 / 0 / 0 / 0 / 10 / 34 / 0 / 34 / 0 | B: numbers found after the name (line 483); check the size |
| CHERRY GARNISH | 1 serving | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 0 / 2 / 0 / 2 / 0 | B: numbers found after the name (line 484); check the size |
| CHOCOLATE ADD-IN | WACKY PACK® | only in draft B | not found | 80 / 0 / 0 / 0 / 0 / 30 / 19 / 0 / 15 / 0 | B: numbers found after the name (line 485); check the size |
| CHOCOLATE ADD-IN | SMALL | only in draft B | not found | 80 / 0 / 0 / 0 / 0 / 30 / 19 / 0 / 15 / 0 | B: numbers found after the name (line 485); check the size |
| CHOCOLATE ADD-IN | MEDIUM | only in draft B | not found | 160 / 0 / 0 / 0 / 0 / 60 / 38 / 0 / 31 / 0 | B: numbers found after the name (line 487); check the size |
| CHOCOLATE ADD-IN | LARGE | only in draft B | not found | 240 / 0 / 0 / 0 / 0 / 85 / 57 / 0 / 46 / 0 | B: numbers found after the name (line 488); check the size |
| CHOCOLATE ADD-IN | RT 44® | only in draft B | not found | 320 / 0 / 0 / 0 / 0 / 115 / 76 / 0 / 61 / 0 | B: numbers found after the name (line 489); check the size |
| DIET CHERRY SUGAR-FREE ADD-IN | WACKY PACK® | only in draft B | not found | 15 / 0 / 0 / 0 / 0 / 10 / 3 / 0 / 2 / 0 | B: numbers found after the name (line 490); check the size |
| DIET CHERRY SUGAR-FREE ADD-IN | SMALL | only in draft B | not found | 15 / 0 / 0 / 0 / 0 / 15 / 3 / 0 / 2 / 0 | B: numbers found after the name (line 491); check the size |
| DIET CHERRY SUGAR-FREE ADD-IN | MEDIUM | only in draft B | not found | 20 / 0 / 0 / 0 / 0 / 20 / 3 / 0 / 2 / 0 | B: numbers found after the name (line 492); check the size |
| DIET CHERRY SUGAR-FREE ADD-IN | LARGE | only in draft B | not found | 25 / 0 / 0 / 0 / 0 / 35 / 4 / 0 / 2 / 0 | B: numbers found after the name (line 493); check the size |
| DIET CHERRY SUGAR-FREE ADD-IN | RT 44® | only in draft B | not found | 30 / 0 / 0 / 0 / 0 / 45 / 4 / 0 / 2 / 0 | B: numbers found after the name (line 494); check the size |
| GRAPE ADD-IN | WACKY PACK® | only in draft B | not found | 20 / 0 / 0 / 0 / 0 / 0 / 5 / 0 / 5 / 0 | B: numbers found after the name (line 495); check the size |
| GRAPE ADD-IN | SMALL | only in draft B | not found | 20 / 0 / 0 / 0 / 0 / 0 / 5 / 0 / 5 / 0 | B: numbers found after the name (line 495); check the size |
| GRAPE ADD-IN | MEDIUM | only in draft B | not found | 45 / 0 / 0 / 0 / 0 / 5 / 11 / 0 / 10 / 0 | B: numbers found after the name (line 497); check the size |
| GRAPE ADD-IN | LARGE | only in draft B | not found | 70 / 0 / 0 / 0 / 0 / 10 / 16 / 0 / 16 / 0 | B: numbers found after the name (line 498); check the size |
| GRAPE ADD-IN | RT 44® | only in draft B | not found | 90 / 0 / 0 / 0 / 0 / 10 / 22 / 0 / 21 / 0 | B: numbers found after the name (line 499); check the size |
| HOT FUDGE TOPPING | WACKY PACK® | only in draft B | not found | 100 / 3.5 / 3 / 0 / 0 / 45 / 16 / 1 / 12 / 1 | B: numbers found after the name (line 500); check the size |
| HOT FUDGE TOPPING | SMALL | only in draft B | not found | 100 / 3.5 / 3 / 0 / 0 / 45 / 16 / 1 / 12 / 1 | B: numbers found after the name (line 500); check the size |
| HOT FUDGE TOPPING | MEDIUM | only in draft B | not found | 200 / 7 / 6 / 0 / 0 / 90 / 32 / 2 / 25 / 2 | B: numbers found after the name (line 502); check the size |
| HOT FUDGE TOPPING | LARGE | only in draft B | not found | 300 / 10 / 9 / 0 / 0 / 140 / 48 / 2 / 37 / 2 | B: numbers found after the name (line 503); check the size |
| HOT FUDGE TOPPING | RT 44® | only in draft B | not found | 400 / 14 / 12 / 0 / 0 / 180 / 64 / 3 / 49 / 3 | B: numbers found after the name (line 504); check the size |
| LEMON ADD-IN | WACKY PACK® | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 1 / 0 / 0 / 0 | B: numbers found after the name (line 505); check the size, mostly zeros: look |
| LEMON ADD-IN | SMALL | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 1 / 0 / 0 / 0 | B: numbers found after the name (line 505); check the size, mostly zeros: look |
| LEMON ADD-IN | MEDIUM | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 0 / 1 / 0 / 1 / 0 | B: numbers found after the name (line 507); check the size |
| LEMON ADD-IN | LARGE | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 0 / 2 / 0 / 1 / 0 | B: numbers found after the name (line 508); check the size |
| LEMON ADD-IN | RT 44® | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 0 / 2 / 0 / 1 / 0 | B: numbers found after the name (line 508); check the size |
| MANGO SUGAR-FREE ADD-IN | WACKY PACK® | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 5 / 1 / 0 / 0 / 0 | B: numbers found after the name (line 510); check the size, mostly zeros: look |
| MANGO SUGAR-FREE ADD-IN | SMALL | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 5 / 1 / 0 / 0 / 0 | B: numbers found after the name (line 510); check the size, mostly zeros: look |
| MANGO SUGAR-FREE ADD-IN | MEDIUM | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 15 / 1 / 0 / 0 / 0 | B: numbers found after the name (line 512); check the size, mostly zeros: look |
| MANGO SUGAR-FREE ADD-IN | LARGE | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 20 / 2 / 0 / 0 / 0 | B: numbers found after the name (line 513); check the size |
| MANGO SUGAR-FREE ADD-IN | RT 44® | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 30 / 2 / 0 / 0 / 0 | B: numbers found after the name (line 514); check the size |
| MINUTE MAID® CRANBERRY** ADD-IN | WACKY PACK® | only in draft B | not found | 35 / 0 / 0 / 0 / 0 / 0 / 9 / 0 / 8 / 0 | B: name not in the guide text |
| MINUTE MAID® CRANBERRY** ADD-IN | SMALL | only in draft B | not found | 35 / 0 / 0 / 0 / 0 / 0 / 9 / 0 / 8 / 0 | B: name not in the guide text |
| MINUTE MAID® CRANBERRY** ADD-IN | MEDIUM | only in draft B | not found | 70 / 0 / 0 / 0 / 0 / 0 / 17 / 0 / 16 / 0 | B: name not in the guide text |
| MINUTE MAID® CRANBERRY** ADD-IN | LARGE | only in draft B | not found | 100 / 0 / 0 / 0 / 0 / 0 / 26 / 0 / 24 / 0 | B: name not in the guide text |
| MINUTE MAID® CRANBERRY** ADD-IN | RT 44® | only in draft B | not found | 130 / 0 / 0 / 0 / 0 / 0 / 34 / 0 / 32 / 0 | B: name not in the guide text |
| NERDS® CANDY ADD-IN | WACKY PACK® | only in draft B | not found | 110 / 0 / 0 / 0 / 0 / 26 / 26 / 0 / 26 / 0 | B: not as drafted (line 520 lacks 26) |
| NERDS® CANDY ADD-IN | SMALL | only in draft B | not found | 160 / 0 / 0 / 0 / 0 / 5 / 39 / 0 / 39 / 0 | B: numbers found after the name (line 521); check the size |
| NERDS® CANDY ADD-IN | MEDIUM | only in draft B | not found | 210 / 0 / 0 / 0 / 0 / 10 / 52 / 0 / 52 / 0 | B: numbers found after the name (line 522); check the size |
| NERDS® CANDY ADD-IN | LARGE | only in draft B | not found | 230 / 0 / 0 / 0 / 0 / 10 / 57 / 0 / 57 / 0 | B: numbers found after the name (line 523); check the size |
| NERDS® CANDY ADD-IN | RT 44® | only in draft B | not found | 290 / 0 / 0 / 0 / 0 / 10 / 71 / 0 / 71 / 0 | B: numbers found after the name (line 524); check the size |
| PEACH SUGAR-FREE ADD-IN | WACKY PACK® | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 5 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 525); check the size, mostly zeros: look |
| PEACH SUGAR-FREE ADD-IN | SMALL | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 5 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 525); check the size, mostly zeros: look |
| PEACH SUGAR-FREE ADD-IN | MEDIUM | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 10 / 1 / 0 / 0 / 0 | B: numbers found after the name (line 527); check the size, mostly zeros: look |
| PEACH SUGAR-FREE ADD-IN | LARGE | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 20 / 1 / 0 / 0 / 0 | B: numbers found after the name (line 528); check the size |
| PEACH SUGAR-FREE ADD-IN | RT 44® | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 25 / 1 / 0 / 0 / 0 | B: numbers found after the name (line 529); check the size |
| POWERADE® ADD-IN | WACKY PACK® | only in draft B | not found | 25 / 0 / 0 / 0 / 0 / 20 / 6 / 0 / 6 / 0 | B: numbers found after the name (line 530); check the size |
| POWERADE® ADD-IN | SMALL | only in draft B | not found | 25 / 0 / 0 / 0 / 0 / 20 / 6 / 0 / 6 / 0 | B: numbers found after the name (line 530); check the size |
| POWERADE® ADD-IN | MEDIUM | only in draft B | not found | 45 / 0 / 0 / 0 / 0 / 40 / 13 / 0 / 13 / 0 | B: numbers found after the name (line 532); check the size |
| POWERADE® ADD-IN | LARGE | only in draft B | not found | 70 / 0 / 0 / 0 / 0 / 60 / 20 / 0 / 20 / 0 | B: numbers found after the name (line 533); check the size |
| POWERADE® ADD-IN | RT 44® | only in draft B | not found | 90 / 0 / 0 / 0 / 0 / 80 / 25 / 0 / 25 / 0 | B: numbers found after the name (line 534); check the size |
| RASPBERRY SUGAR-FREE ADD-IN | WACKY PACK® | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 5 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 535); check the size, mostly zeros: look |
| RASPBERRY SUGAR-FREE ADD-IN | SMALL | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 5 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 535); check the size, mostly zeros: look |
| RASPBERRY SUGAR-FREE ADD-IN | MEDIUM | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 15 / 1 / 0 / 0 / 0 | B: numbers found after the name (line 537); check the size |
| RASPBERRY SUGAR-FREE ADD-IN | LARGE | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 20 / 1 / 0 / 0 / 0 | B: numbers found after the name (line 538); check the size |
| RASPBERRY SUGAR-FREE ADD-IN | RT 44® | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 25 / 1 / 0 / 0 / 0 | B: numbers found after the name (line 539); check the size |
| STRAWBERRY ADD-IN | WACKY PACK® | only in draft B | not found | 25 / 0 / 0 / 0 / 0 / 5 / 7 / 1 / 6 / 0 | B: numbers found after the name (line 540); check the size |
| STRAWBERRY ADD-IN | SMALL | only in draft B | not found | 25 / 0 / 0 / 0 / 0 / 5 / 7 / 1 / 6 / 0 | B: numbers found after the name (line 540); check the size |
| STRAWBERRY ADD-IN | MEDIUM | only in draft B | not found | 50 / 0 / 0 / 0 / 0 / 10 / 12 / 1 / 11 / 0 | B: numbers found after the name (line 542); check the size |
| STRAWBERRY ADD-IN | LARGE | only in draft B | not found | 70 / 0 / 0 / 0 / 0 / 15 / 18 / 1 / 17 / 0 | B: numbers found after the name (line 543); check the size |
| STRAWBERRY ADD-IN | RT 44® | only in draft B | not found | 90 / 0 / 0 / 0 / 0 / 20 / 24 / 2 / 22 / 0 | B: numbers found after the name (line 544); check the size |
| VANILLA ADD-IN | WACKY PACK® | only in draft B | not found | 20 / 0 / 0 / 0 / 0 / 0 / 6 / 0 / 6 / 0 | B: numbers found after the name (line 545); check the size |
| VANILLA ADD-IN | SMALL | only in draft B | not found | 20 / 0 / 0 / 0 / 0 / 0 / 6 / 0 / 6 / 0 | B: numbers found after the name (line 545); check the size |
| VANILLA ADD-IN | MEDIUM | only in draft B | not found | 45 / 0 / 0 / 0 / 0 / 0 / 12 / 0 / 12 / 0 | B: numbers found after the name (line 547); check the size |
| VANILLA ADD-IN | LARGE | only in draft B | not found | 70 / 0 / 0 / 0 / 0 / 5 / 18 / 0 / 18 / 0 | B: numbers found after the name (line 548); check the size |
| VANILLA ADD-IN | RT 44® | only in draft B | not found | 90 / 0 / 0 / 0 / 0 / 5 / 24 / 0 / 24 / 0 | B: numbers found after the name (line 549); check the size |
| ΔRED BULL® SLUSH | SMALL | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 50 / 48 / 0 / 48 / 0 | B: numbers found after the name (line 568); check the size |
| ΔRED BULL® SLUSH | MEDIUM | only in draft B | not found | 250 / 0 / 0 / 0 / 0 / 80 / 65 / 0 / 65 / 0 | B: numbers found after the name (line 569); check the size |
| ΔRED BULL® SLUSH | LARGE | only in draft B | not found | 390 / 0 / 0 / 0 / 0 / 125 / 103 / 0 / 102 / 1 | B: numbers found after the name (line 570); check the size |
| ΔRED BULL® SLUSH | RT 44® | only in draft B | not found | 540 / 0 / 0 / 0 / 0 / 170 / 144 / 0 / 143 / 1 | B: numbers found after the name (line 571); check the size |
| ΔRED BULL® CAN | 1 serving | only in draft B | not found | 120 / 0 / 0 / 0 / 0 / 110 / 30 / 0 / 29 / 1 | B: numbers found after the name (line 572); check the size |
| ΔSUMMER EDITION WATERMELON RED BULL® SLUSH | SMALL | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 45 / 48 / 0 / 48 / 0 | B: numbers found after the name (line 573); check the size |
| ΔSUMMER EDITION WATERMELON RED BULL® SLUSH | MEDIUM | only in draft B | not found | 250 / 0 / 0 / 0 / 0 / 75 / 65 / 0 / 65 / 0 | B: numbers found after the name (line 574); check the size |
| ΔSUMMER EDITION WATERMELON RED BULL® SLUSH | LARGE | only in draft B | not found | 390 / 0 / 0 / 0 / 0 / 115 / 103 / 0 / 102 / 0 | B: numbers found after the name (line 575); check the size |
| ΔSUMMER EDITION WATERMELON RED BULL® SLUSH | RT 44® | only in draft B | not found | 540 / 0 / 0 / 0 / 0 / 160 / 144 / 0 / 143 / 0 | B: numbers found after the name (line 576); check the size |
| ΔSUMMER EDITION WATERMELON RED BULL® CAN | 1 serving | only in draft B | not found | 120 / 0 / 0 / 0 / 0 / 95 / 30 / 0 / 29 / 0 | B: numbers found after the name (line 577); check the size |
| ΔYELLOW CAKE BATTER SHAKE | MINI | only in draft B | not found | 540 / 31 / 18 / 0.5 / 55 / 200 / 57 / 0 / 40 / 6 | B: numbers found after the name (line 580); check the size |
| ΔYELLOW CAKE BATTER SHAKE | SMALL | only in draft B | not found | 770 / 44 / 26 / 1 / 100 / 330 / 83 / 0 / 57 / 10 | B: numbers found after the name (line 581); check the size |
| ΔYELLOW CAKE BATTER SHAKE | MEDIUM | only in draft B | not found | 1050 / 61 / 33 / 1.5 / 125 / 420 / 113 / 0 / 77 / 13 | B: numbers found after the name (line 582); check the size |
| ΔYELLOW CAKE BATTER SHAKE | LARGE | only in draft B | not found | 1560 / 90 / 48 / 2 / 190 / 640 / 168 / 1 / 113 / 20 | B: numbers found after the name (line 583); check the size |
| ΔBROWNIE BATTER SHAKE | MINI | only in draft B | not found | 530 / 31 / 18 / 0.5 / 55 / 320 / 59 / 1 / 40 / 7 | B: numbers found after the name (line 584); check the size |
| ΔBROWNIE BATTER SHAKE | SMALL | only in draft B | not found | 760 / 43 / 26 / 1 / 100 / 450 / 85 / 1 / 57 / 11 | B: numbers found after the name (line 585); check the size |
| ΔBROWNIE BATTER SHAKE | MEDIUM | only in draft B | not found | 1040 / 59 / 32 / 1.5 / 125 / 670 / 117 / 2 / 78 / 14 | B: numbers found after the name (line 586); check the size |
| ΔBROWNIE BATTER SHAKE | LARGE | only in draft B | not found | 1540 / 88 / 47 / 2 / 190 / 1010 / 174 / 4 / 115 / 22 | B: numbers found after the name (line 587); check the size |
| ΔLEMONBERRY SLUSH FLOAT | MINI | only in draft B | not found | 260 / 7 / 4 / 0 / 25 / 95 / 51 / 1 / 44 / 2 | B: numbers found after the name (line 588); check the size |
| ΔLEMONBERRY SLUSH FLOAT | SMALL | only in draft B | not found | 350 / 9 / 5 / 0 / 30 / 125 / 68 / 1 / 59 / 3 | B: numbers found after the name (line 589); check the size |
| ΔLEMONBERRY SLUSH FLOAT | MEDIUM | only in draft B | not found | 430 / 11 / 7 / 0 / 40 / 150 / 83 / 1 / 73 / 3 | B: numbers found after the name (line 590); check the size |
| ΔLEMONBERRY SLUSH FLOAT | LARGE | only in draft B | not found | 650 / 15 / 10 / 0.5 / 55 / 220 / 128 / 1 / 114 / 5 | B: numbers found after the name (line 591); check the size |
| CHED 'R' BITES® | SMALL | both read it the same, but its protein, carbs and fat make 391 kcal, not 280 | 280 / 27 / 8 / 0.5 / 40 / 970 / 23 / 1 / 1 / 14 | 280 / 27 / 8 / 0.5 / 40 / 970 / 23 / 1 / 1 / 14 | A: numbers found after the name (line 182); check the size; B: numbers found after the name (line 182); check the size |
| CHED 'R' BITES® | MEDIUM | both read it the same, but its protein, carbs and fat make 638 kcal, not 410 | 410 / 46 / 13 / 1 / 65 / 1570 / 35 / 2 / 2 / 21 | 410 / 46 / 13 / 1 / 65 / 1570 / 35 / 2 / 2 / 21 | A: numbers found after the name (line 183); check the size; B: numbers found after the name (line 183); check the size |
| CHED 'R' BITES® | LARGE | both read it the same, but its protein, carbs and fat make 769 kcal, not 550 | 550 / 53 / 16 / 1 / 85 / 1940 / 46 / 2 / 2 / 27 | 550 / 53 / 16 / 1 / 85 / 1940 / 46 / 2 / 2 / 27 | A: numbers found after the name (line 184); check the size; B: numbers found after the name (line 184); check the size |
| PICKLE-O'S® | SMALL | both read it the same, but its protein, carbs and fat make 293 kcal, not 190 | 190 / 21 / 3.5 / 0 / 10 / 850 / 23 / 1 / 2 / 3 | 190 / 21 / 3.5 / 0 / 10 / 850 / 23 / 1 / 2 / 3 | A: numbers found after the name (line 213); check the size; B: numbers found after the name (line 213); check the size |
| PICKLE-O'S® | MEDIUM | both read it the same, but its protein, carbs and fat make 527 kcal, not 310 | 310 / 39 / 7 / 0.5 / 20 / 1490 / 39 / 2 / 4 / 5 | 310 / 39 / 7 / 0.5 / 20 / 1490 / 39 / 2 / 4 / 5 | A: numbers found after the name (line 214); check the size; B: numbers found after the name (line 214); check the size |
| PICKLE-O'S® | LARGE | both read it the same, but its protein, carbs and fat make 717 kcal, not 500 | 500 / 49 / 8 / 0.5 / 20 / 2100 / 61 / 4 / 5 / 8 | 500 / 49 / 8 / 0.5 / 20 / 2100 / 61 / 4 / 5 / 8 | A: numbers found after the name (line 215); check the size; B: numbers found after the name (line 215); check the size |
| DR PEPPER® | LARGE | both read it the same, but its protein, carbs and fat make 280 kcal, not 240 | 240 / 0 / 0 / 0 / 0 / 90 / 70 / 0 / 70 / 0 | 240 / 0 / 0 / 0 / 0 / 90 / 70 / 0 / 70 / 0 | A: numbers found after the name (line 364); check the size; B: numbers found after the name (line 364); check the size |
| CHED 'R' PEPPERS® | 4 PC SMALL | both read it the same, but its protein, carbs and fat make 436 kcal, not 330 | 330 / 28 / 8 / 1 / 35 / 1340 / 37 / 2 / 2 / 9 | 330 / 28 / 8 / 1 / 35 / 1340 / 37 / 2 / 2 / 9 | A: numbers found after the name (line 185); check the size; B: numbers found after the name (line 185); check the size |
| CHED 'R' PEPPERS | 6 PC MEDIUM | both read it the same, but its protein, carbs and fat make 708 kcal, not 490 | 490 / 48 / 12 / 1.5 / 55 / 2130 / 56 / 3 / 4 / 13 | 490 / 48 / 12 / 1.5 / 55 / 2130 / 56 / 3 / 4 / 13 | A: numbers found after the name (line 186); check the size; B: numbers found after the name (line 186); check the size |
| CHED 'R' PEPPERS | 8 PC LARGE | both read it the same, but its protein, carbs and fat make 877 kcal, not 660 | 660 / 57 / 15 / 2 / 65 / 2690 / 74 / 4 / 5 / 17 | 660 / 57 / 15 / 2 / 65 / 2690 / 74 / 4 / 5 / 17 | A: numbers found after the name (line 187); check the size; B: numbers found after the name (line 187); check the size |

## Spot check (14 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| CINNASNACKS WITHOUT CREAM CHEESE FROSTING | 3 PC. | 380 / 22 / 6 / 0 / 0 / 210 / 38 / 2 / 12 / 6 |
| HOT FUDGE SHAKE | SMALL | 680 / 36 / 25 / 1 / 100 / 340 / 77 / 1 / 54 / 10 |
| SULFOSOLIC BREAKFAST BURRITO | 1 serving | 610 / 35 / 14 / 0 / 325 / 1800 / 49 / 3 / 3 / 24 |
| DIET COKE® | SMALL | 0 / 0 / 0 / 0 / 0 / 15 / 0 / 0 / 0 / 0 |
| JUMBO POPCORN CHICKEN | MEDIUM | 490 / 28 / 5 / 0 / 55 / 1640 / 36 / 4 / 1 / 23 |
| SONIC BLAST® WITH OREO® COOKIE PIECES | LARGE | 1300 / 67 / 38 / 2 / 195 / 890 / 153 / 2 / 98 / 20 |
| OREO® CHEESECAKE SHAKE | MEDIUM | 1030 / 51 / 30 / 1.5 / 125 / 900 / 131 / 2 / 84 / 13 |
| FRESH BANANA SHAKE | SMALL | 660 / 34 / 23 / 1 / 100 / 310 / 80 / 2 / 54 / 10 |
| ΔCOUNTRY GRAVY | 1 serving | 70 / 2 / 0.5 / 0.5 / 0 / 440 / 13 / 0 / 4 / 1 |
| LIMEADE SLUSH | RT 44® | 600 / 0 / 0 / 0 / 0 / 95 / 163 / 0 / 157 / 0 |
| SONIC BLAST® WITH CHOCOLATE CHIP COOKIE DOUGH | MEDIUM | 920 / 45 / 25 / 1.5 / 135 / 450 / 118 / 1 / 73 / 13 |
| OREO® CHOCOLATE SHAKE | SMALL | 750 / 40 / 25 / 1 / 100 / 510 / 90 / 1 / 61 / 10 |
| PORK TENDERLOIN SANDWICH | 1 serving | 710 / 35 / 4.5 / 0 / 45 / 1110 / 73 / 3 / 10 / 20 |
| ASIAN SWEET CHILI BONELESS WINGS | 24 PC. | 1860 / 95 / 37 / 2 / 330 / 5820 / 129 / 9 / 56 / 119 |
