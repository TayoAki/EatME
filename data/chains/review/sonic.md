# SONIC: lines for a person

Guide: https://offers.sonicdrivein.com/nutrition/nutrition.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (251)

Fix each line in `menus/sonic.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B |
| --- | --- | --- | --- | --- |
| JR. BURGER | 1 serving | differ: protein_g | 330 / 16 / 4.5 / 0.5 / 35 / 610 / 32 / 2 / 15 / 30 | 330 / 16 / 4.5 / 0.5 / 35 / 610 / 32 / 2 / 15 / – |
| QUARTER POUND DOUBLE CHEESEBURGER | 1 serving | differ: protein_g | 570 / 34 / 14 / 1 / 105 / 1370 / 34 / 2 / 6 / 30 | 570 / 34 / 14 / 1 / 105 / 1370 / 34 / 2 / 6 / – |
| SONIC® BACON CHEESEBURGER WITH MAYO | 1 serving | differ: protein_g | 770 / 46 / 14 / 1 / 105 / 1340 / 53 / 3 / 11 / 30 | 770 / 46 / 14 / 1 / 105 / 1340 / 53 / 3 / 11 / – |
| SONIC® BURGER WITH KETCHUP | 1 serving | differ: protein_g | 540 / 22 / 7 / 1 / 65 / 910 / 57 / 3 / 14 / 30 | 540 / 22 / 7 / 1 / 65 / 910 / 57 / 3 / 14 / – |
| SONIC® BURGER WITH MAYO | 1 serving | differ: protein_g | 620 / 34 / 9 / 1 / 70 / 850 / 53 / 3 / 11 / 30 | 620 / 34 / 9 / 1 / 70 / 850 / 53 / 3 / 11 / – |
| SONIC® BURGER WITH MUSTARD | 1 serving | differ: protein_g | 520 / 23 / 7 / 1 / 65 / 860 / 53 / 3 / 11 / 30 | 520 / 23 / 7 / 1 / 65 / 860 / 53 / 3 / 11 / – |
| SONIC® BURGER WITH MUSTARD, KETCHUP & MAYO | 1 serving | differ: protein_g | 640 / 34 / 9 / 1 / 70 / 1070 / 57 / 3 / 14 / 30 | 640 / 34 / 9 / 1 / 70 / 1070 / 57 / 3 / 14 / – |
| SONIC® CHEESEBURGER WITH KETCHUP | 1 serving | differ: protein_g | 600 / 28 / 10 / 1 / 85 / 1240 / 58 / 3 / 14 / 30 | 600 / 28 / 10 / 1 / 85 / 1240 / 58 / 3 / 14 / – |
| SONIC® CHEESEBURGER WITH MAYO | 1 serving | differ: protein_g | 680 / 39 / 12 / 1 / 85 / 1180 / 54 / 3 / 11 / 30 | 680 / 39 / 12 / 1 / 85 / 1180 / 54 / 3 / 11 / – |
| SONIC® CHEESEBURGER WITH MUSTARD | 1 serving | differ: protein_g | 590 / 28 / 10 / 1 / 85 / 1190 / 54 / 3 / 11 / 30 | 590 / 28 / 10 / 1 / 85 / 1190 / 54 / 3 / 11 / – |
| SONIC® CHEESEBURGER WITH MUSTARD, KETCHUP & MAYO | 1 serving | differ: protein_g | 710 / 39 / 12 / 1 / 85 / 1400 / 58 / 3 / 15 / 30 | 710 / 39 / 12 / 1 / 85 / 1400 / 58 / 3 / 15 / – |
| SUPERSONIC® BACON DOUBLE CHEESEBURGER WITH MAYO | 1 serving | differ: protein_g | 1030 / 65 / 23 / 2 / 190 / 1880 / 54 / 3 / 12 / 30 | 1030 / 65 / 23 / 2 / 190 / 1880 / 54 / 3 / 12 / – |
| SUPERSONIC® DOUBLE CHEESEBURGER WITH KETCHUP | 1 serving | differ: protein_g | 870 / 48 / 19 / 1.5 / 165 / 1780 / 59 / 3 / 15 / 30 | 870 / 48 / 19 / 1.5 / 165 / 1780 / 59 / 3 / 15 / – |
| SUPERSONIC® DOUBLE CHEESEBURGER WITH MAYO | 1 serving | differ: protein_g | 960 / 59 / 21 / 2 / 170 / 1720 / 55 / 3 / 12 / 30 | 960 / 59 / 21 / 2 / 170 / 1720 / 55 / 3 / 12 / – |
| SUPERSONIC® DOUBLE CHEESEBURGER WITH MUSTARD | 1 serving | differ: protein_g | 860 / 48 / 19 / 1.5 / 165 / 1730 / 55 / 3 / 12 / 30 | 860 / 48 / 19 / 1.5 / 165 / 1730 / 55 / 3 / 12 / – |
| SUPERSONIC® DOUBLE CHEESEBURGER WITH MUSTARD, KETCHUP & MAYO | 1 serving | differ: protein_g | 970 / 59 / 21 / 2 / 170 / 1940 / 59 / 3 / 15 / 30 | 970 / 59 / 21 / 2 / 170 / 1940 / 59 / 3 / 15 / – |
| SUPERSONIC® JALAPENO DOUBLE CHEESEBURGER WITH MUSTARD | 1 serving | differ: protein_g | 850 / 48 / 19 / 1.5 / 165 / 1740 / 54 / 2 / 12 / 30 | 850 / 48 / 19 / 1.5 / 165 / 1740 / 54 / 2 / 12 / – |
| VEGGIE BURGER WITH KETCHUP | 1 serving | only in draft A | 440 / 11 / 2.5 / 0 / 5 / 1800 / 73 / 7 / 14 / 30 | not found |
| VEGGIE BURGER WITH MAYO | 1 serving | only in draft A | 530 / 22 / 4 / 0 / 10 / 1750 / 69 / 7 / 11 / 30 | not found |
| VEGGIE BURGER WITH MUSTARD | 1 serving | only in draft A | 430 / 11 / 2.5 / 0 / 5 / 1760 / 69 / 7 / 10 / 30 | not found |
| VEGGIE BURGER WITH MUSTARD, KETCHUP & MAYO | 1 serving | only in draft A | 550 / 23 / 4 / 0 / 10 / 1960 / 73 / 7 / 14 / 30 | not found |
| AVOCADO | 1 serving | only in draft A | 35 / 3 / 0.5 / 0 / 0 / 20 / 2 / 1 / 0 / 0 | not found |
| CRISPY BACON | 1 serving | differ: sugars_g, protein_g | 80 / 7 / 2.5 / 0 / 20 / 290 / 1 / 0 / 0 / 6 | 80 / 7 / 2.5 / 0 / 20 / 290 / 1 / 0 / 6 / – |
| GRILLED ONIONS | 1 serving | differ: protein_g | 5 / 0 / 0 / 0 / 0 / 5 / 1 / 0 / 0 / 0 | 5 / 0 / 0 / 0 / 0 / 5 / 1 / 0 / 0 / – |
| HATCH GREEN CHILES | 1 serving | only in draft A | 5 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | not found |
| HICKORY BBQ SAUCE | 1 serving | only in draft A | 30 / 0 / 0 / 0 / 0 / 310 / 7 / 0 / 5 / 0 | not found |
| HOT CHILI | 1 serving | differ: protein_g | 60 / 4 / 1.5 / 0 / 10 / 170 / 3 / 1 / 1 / 1 | 60 / 4 / 1.5 / 0 / 10 / 170 / 3 / 1 / 1 / – |
| RANCH DRESSING | 1 serving | only in draft A | 130 / 14 / 2.5 / 0 / 5 / 250 / 2 / 0 / 1 / 0 | not found |
| SLAW | 1 serving | only in draft A | 140 / 7 / 1.5 / 0 / 5 / 220 / 17 / 2 / 14 / 0 | not found |
| SPICY JALAPENO | 1 serving | differ: protein_g | 5 / 0 / 0 / 0 / 0 / 140 / 1 / 0 / 1 / 0 | 5 / 0 / 0 / 0 / 0 / 140 / 1 / 0 / 1 / – |
| BLT TOASTER® SANDWICH | 1 serving | only in draft A | 580 / 32 / 8 / 0 / 40 / 1080 / 53 / 2 / 8 / 37 | not found |
| CHICKEN CLUB TOASTER® SANDWICH | 1 serving | only in draft A | 770 / 43 / 11 / 0 / 80 / 1590 / 63 / 3 / 8 / 37 | not found |
| COUNTRY FRIED STEAK TOASTER® SANDWICH | 1 serving | only in draft A | 700 / 35 / 9 / 0 / 45 / 1390 / 80 / 3 / 7 / 37 | not found |
| CHICKEN WRAP - GRILLED | 1 serving | only in draft A | 480 / 14 / 4 / 0 / 80 / 1720 / 39 / 2 / 3 / 21 | not found |
| CORN DOG | 1 serving | differ: protein_g | 230 / 13 / 4 / 0 / 15 / 480 / 23 / 1 / 5 / 6 | 230 / 13 / 4 / 0 / 15 / 480 / 23 / 1 / 5 / – |
| FRIES | SMALL | differ: sugars_g, protein_g | 250 / 12 / 2 / 0 / 0 / 260 / 33 / 3 / 0 / 3 | 250 / 12 / 2 / 0 / 0 / 260 / 33 / 3 / 6 / – |
| TOTS | SMALL | differ: protein_g | 250 / 13 / 2.5 / 0 / 0 / 620 / 30 / 3 / 0 / 2 | 250 / 13 / 2.5 / 0 / 0 / 620 / 30 / 3 / 0 / – |
| ΔBIG RED® | SMALL | both read numbers that can't be right: sugars 41 g above carbs 31 g | 110 / 0 / 0 / 0 / 0 / 45 / 31 / 0 / 41 / 0 | 110 / 0 / 0 / 0 / 0 / 45 / 31 / 0 / 41 / 0 |
| CREAM CHEESE FROSTING | 1 serving | both read numbers that can't be right: sugars 19 g above carbs 17 g | 160 / 10 / 6 / 0 / 5 / 140 / 17 / 0 / 19 / 0 | 160 / 10 / 6 / 0 / 5 / 140 / 17 / 0 / 19 / 0 |
| AVEGGIE BURGER WITH KETCHUP | 1 serving | only in draft B | not found | 440 / 11 / 2.5 / 0 / 5 / 1800 / 73 / 7 / 14 / – |
| AVEGGIE BURGER WITH MAYO | 1 serving | only in draft B | not found | 530 / 22 / 4 / 0 / 10 / 1750 / 69 / 7 / 11 / – |
| AVEGGIE BURGER WITH MUSTARD | 1 serving | only in draft B | not found | 430 / 11 / 2.5 / 0 / 5 / 1760 / 69 / 7 / 10 / – |
| AVEGGIE BURGER WITH MUSTARD, KETCHUP & MAYO | 1 serving | only in draft B | not found | 550 / 23 / 4 / 0 / 10 / 1960 / 73 / 7 / 14 / – |
| AAVOCADO | 1 serving | only in draft B | not found | 35 / 3 / 0.5 / 0 / 0 / 20 / 2 / 1 / 0 / – |
| AHATCH GREEN CHILES | 1 serving | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / – |
| AHICKORY BBQ SAUCE | 1 serving | only in draft B | not found | 30 / 0 / 0 / 0 / 0 / 310 / 7 / 0 / 5 / – |
| ARANCH DRESSING | 1 serving | only in draft B | not found | 130 / 14 / 2.5 / 0 / 5 / 250 / 2 / 0 / 1 / – |
| ASLAW | 1 serving | only in draft B | not found | 140 / 7 / 1.5 / 0 / 5 / 220 / 17 / 2 / 14 / – |
| CRISPY TENDERS | 2 PC. | only in draft B | not found | 170 / 8 / 0.5 / 0 / 40 / 490 / 11 / 1 / 0 / 14 |
| 1% MILK | JUG | only in draft B | not found | 130 / 2.5 / 1.5 / 0 / 15 / 160 / 16 / 0 / 15 / – |
| MINUTE MAID® 100% APPLE JUICE BOX | 1 serving | only in draft B | not found | 80 / 0 / 0 / 0 / 0 / 15 / 21 / 0 / 19 / – |
| TREE TOP® APPLE SAUCE | 1 serving | only in draft B | not found | 45 / 0 / 0 / 0 / 0 / 0 / 13 / 2 / 11 / – |
| ABLT TOASTER® SANDWICH | 1 serving | only in draft B | not found | 580 / 32 / 8 / 0 / 40 / 1080 / 53 / 2 / 8 / – |
| ACHICKEN CLUB TOASTER® SANDWICH | 1 serving | only in draft B | not found | 770 / 43 / 11 / 0 / 80 / 1590 / 63 / 3 / 8 / – |
| ACOUNTRY FRIED STEAK TOASTER® SANDWICH | 1 serving | only in draft B | not found | 700 / 35 / 9 / 0 / 45 / 1390 / 80 / 3 / 7 / – |
| ACHICKEN WRAP - GRILLED | 1 serving | only in draft B | not found | 480 / 14 / 4 / 0 / 80 / 1720 / 39 / 2 / 3 / – |
| JUMBO POPCORN CHICKEN# | SMALL | only in draft B | not found | 330 / 19 / 3.5 / 0 / 40 / 1100 / 24 / 3 / 1 / 16 |
| JUMBO POPCORN CHICKEN# | MEDIUM | only in draft B | not found | 490 / 28 / 5 / 0 / 55 / 1640 / 36 / 4 / 1 / 23 |
| JUMBO POPCORN CHICKEN# | LARGE | only in draft B | not found | 750 / 43 / 8 / 0.5 / 90 / 2520 / 55 / 6 / 2 / 36 |
| FANTA® ORANGE | WACKY PACK® | only in draft B | not found | 70 / 0 / 0 / 0 / 0 / 0 / 20 / 0 / 20 / 0 |
| FANTA® ORANGE | SMALL | only in draft B | not found | 110 / 0 / 0 / 0 / 0 / 0 / 31 / 0 / 31 / 0 |
| FANTA® ORANGE | MEDIUM | only in draft B | not found | 190 / 0 / 0 / 0 / 0 / 0 / 51 / 0 / 51 / 0 |
| FANTA® ORANGE | LARGE | only in draft B | not found | 280 / 0 / 0 / 0 / 0 / 10 / 78 / 0 / 78 / 0 |
| FANTA® ORANGE | RT 44® | only in draft B | not found | 380 / 0 / 0 / 0 / 0 / 10 / 105 / 0 / 105 / 0 |
| HI-C® FRUIT PUNCH | WACKY PACK® | only in draft B | not found | 70 / 0 / 0 / 0 / 0 / 10 / 19 / 0 / 19 / 0 |
| HI-C® FRUIT PUNCH | SMALL | only in draft B | not found | 110 / 0 / 0 / 0 / 0 / 15 / 30 / 0 / 30 / 0 |
| HI-C® FRUIT PUNCH | MEDIUM | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 20 / 50 / 0 / 50 / 0 |
| HI-C® FRUIT PUNCH | LARGE | only in draft B | not found | 280 / 0 / 0 / 0 / 0 / 35 / 75 / 0 / 75 / 0 |
| HI-C® FRUIT PUNCH | RT 44® | only in draft B | not found | 380 / 0 / 0 / 0 / 0 / 40 / 102 / 0 / 102 / 0 |
| ΔMELLO YELLO® | WACKY PACK® | only in draft B | not found | 70 / 0 / 0 / 0 / 0 / 10 / 20 / 0 / 20 / 0 |
| ΔMELLO YELLO® | SMALL | only in draft B | not found | 110 / 0 / 0 / 0 / 0 / 15 / 31 / 0 / 31 / 0 |
| ΔMELLO YELLO® | MEDIUM | only in draft B | not found | 190 / 0 / 0 / 0 / 0 / 20 / 51 / 0 / 51 / 0 |
| ΔMELLO YELLO® | LARGE | only in draft B | not found | 280 / 0 / 0 / 0 / 0 / 30 / 78 / 0 / 78 / 0 |
| ΔMELLO YELLO® | RT 44® | only in draft B | not found | 380 / 0 / 0 / 0 / 0 / 40 / 105 / 0 / 105 / 0 |
| POWERADE® MOUNTAIN BLAST® | WACKY PACK® | only in draft B | not found | 45 / 0 / 0 / 0 / 0 / 40 / 12 / 0 / 12 / 0 |
| POWERADE® MOUNTAIN BLAST® | SMALL | only in draft B | not found | 70 / 0 / 0 / 0 / 0 / 60 / 18 / 0 / 18 / 0 |
| POWERADE® MOUNTAIN BLAST® | MEDIUM | only in draft B | not found | 110 / 0 / 0 / 0 / 0 / 100 / 30 / 0 / 30 / 0 |
| POWERADE® MOUNTAIN BLAST® | LARGE | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 150 / 46 / 0 / 46 / 0 |
| POWERADE® MOUNTAIN BLAST® | RT 44® | only in draft B | not found | 230 / 0 / 0 / 0 / 0 / 200 / 62 / 0 / 62 / 0 |
| SPRITE® | WACKY PACK® | only in draft B | not found | 70 / 0 / 0 / 0 / 0 / 15 / 18 / 0 / 18 / 0 |
| SPRITE® | SMALL | only in draft B | not found | 100 / 0 / 0 / 0 / 0 / 25 / 28 / 0 / 28 / 0 |
| SPRITE® | MEDIUM | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 40 / 46 / 0 / 46 / 0 |
| SPRITE® | LARGE | only in draft B | not found | 260 / 0 / 0 / 0 / 0 / 70 / 70 / 0 / 70 / 0 |
| SPRITE® | RT 44® | only in draft B | not found | 350 / 0 / 0 / 0 / 0 / 85 / 94 / 0 / 94 / 0 |
| SPRITE ZERO® | WACKY PACK® | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 10 / 0 / 0 / 0 / 0 |
| SPRITE ZERO® | SMALL | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 15 / 0 / 0 / 0 / 0 |
| SPRITE ZERO® | MEDIUM | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 20 / 0 / 0 / 0 / 0 |
| SPRITE ZERO® | LARGE | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 30 / 0 / 0 / 0 / 0 |
| SPRITE ZERO® | RT 44® | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 40 / 0 / 0 / 0 / 0 |
| ΔSUN DROP® | WACKY PACK® | only in draft B | not found | 80 / 0 / 0 / 0 / 0 / 25 / 21 / 0 / 21 / 0 |
| ΔSUN DROP® | SMALL | only in draft B | not found | 130 / 0 / 0 / 0 / 0 / 45 / 33 / 0 / 33 / 0 |
| ΔSUN DROP® | MEDIUM | only in draft B | not found | 190 / 0 / 0 / 0 / 0 / 65 / 48 / 0 / 48 / 0 |
| ΔSUN DROP® | LARGE | only in draft B | not found | 280 / 0 / 0 / 0 / 0 / 100 / 73 / 0 / 73 / 0 |
| ΔSUN DROP® | RT 44® | only in draft B | not found | 380 / 0 / 0 / 0 / 0 / 135 / 99 / 0 / 99 / 0 |
| SWEET ICED TEA | WACKY PACK® | only in draft B | not found | 80 / 0 / 0 / 0 / 0 / 10 / 21 / 0 / 21 / 0 |
| SWEET ICED TEA | SMALL | only in draft B | not found | 140 / 0 / 0 / 0 / 0 / 10 / 37 / 0 / 37 / 0 |
| SWEET ICED TEA | MEDIUM | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 15 / 45 / 0 / 45 / 0 |
| SWEET ICED TEA | LARGE | only in draft B | not found | 290 / 0 / 0 / 0 / 0 / 30 / 78 / 0 / 78 / 0 |
| SWEET ICED TEA | RT 44® | only in draft B | not found | 360 / 0 / 0 / 0 / 0 / 35 / 96 / 0 / 96 / 0 |
| UNSWEET ICED TEA | WACKY PACK® | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 10 / 0 / 0 / 0 / 0 |
| UNSWEET ICED TEA | SMALL | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 10 / 0 / 0 / 0 / 0 |
| UNSWEET ICED TEA | MEDIUM | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 15 / 0 / 0 / 0 / 0 |
| UNSWEET ICED TEA | LARGE | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 30 / 0 / 0 / 0 / 0 |
| UNSWEET ICED TEA | RT 44® | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 35 / 0 / 0 / 0 / 0 |
| AMINUTE MAID® ORANGE JUICE | SMALL | only in draft B | not found | 140 / 0 / 0 / 0 / 0 / 25 / 34 / 0 / 30 / 2 |
| AMINUTE MAID® ORANGE JUICE | MEDIUM | only in draft B | not found | 200 / 0 / 0 / 0 / 0 / 35 / 47 / 0 / 42 / 3 |
| CHERRY LIMEADE | WACKY PACK® | only in draft B | not found | 110 / 0 / 0 / 0 / 0 / 20 / 29 / 0 / 28 / 0 |
| CHERRY LIMEADE | SMALL | only in draft B | not found | 150 / 0 / 0 / 0 / 0 / 30 / 39 / 0 / 38 / 0 |
| CHERRY LIMEADE | MEDIUM | only in draft B | not found | 250 / 0 / 0 / 0 / 0 / 50 / 66 / 0 / 65 / 0 |
| CHERRY LIMEADE | LARGE | only in draft B | not found | 370 / 0 / 0 / 0 / 0 / 70 / 99 / 0 / 97 / 0 |
| CHERRY LIMEADE | RT 44® | only in draft B | not found | 490 / 0 / 0 / 0 / 0 / 100 / 132 / 0 / 130 / 0 |
| DIET CHERRY® LIMEADE | WACKY PACK® | only in draft B | not found | 15 / 0 / 0 / 0 / 0 / 10 / 3 / 0 / 2 / 0 |
| DIET CHERRY® LIMEADE | SMALL | only in draft B | not found | 15 / 0 / 0 / 0 / 0 / 15 / 3 / 0 / 2 / 0 |
| DIET CHERRY® LIMEADE | MEDIUM | only in draft B | not found | 20 / 0 / 0 / 0 / 0 / 20 / 3 / 0 / 2 / 0 |
| DIET CHERRY® LIMEADE | LARGE | only in draft B | not found | 25 / 0 / 0 / 0 / 0 / 35 / 4 / 0 / 2 / 0 |
| DIET CHERRY® LIMEADE | RT 44® | only in draft B | not found | 30 / 0 / 0 / 0 / 0 / 45 / 4 / 0 / 2 / 0 |
| DIET LIME LIMEADE | WACKY PACK® | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 10 / 1 / 0 / 0 / 0 |
| DIET LIME LIMEADE | SMALL | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 10 / 1 / 0 / 0 / 0 |
| DIET LIME LIMEADE | MEDIUM | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 15 / 1 / 0 / 0 / 0 |
| DIET LIME LIMEADE | LARGE | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 25 / 2 / 0 / 0 / 0 |
| DIET LIME LIMEADE | RT 44® | only in draft B | not found | 15 / 0 / 0 / 0 / 0 / 35 / 2 / 0 / 0 / 0 |
| LIMEADE | WACKY PACK® | only in draft B | not found | 70 / 0 / 0 / 0 / 0 / 15 / 18 / 0 / 18 / 0 |
| LIMEADE | SMALL | only in draft B | not found | 100 / 0 / 0 / 0 / 0 / 25 / 28 / 0 / 28 / 0 |
| LIMEADE | MEDIUM | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 40 / 47 / 0 / 46 / 0 |
| LIMEADE | LARGE | only in draft B | not found | 270 / 0 / 0 / 0 / 0 / 65 / 72 / 0 / 70 / 0 |
| LIMEADE | RT 44® | only in draft B | not found | 360 / 0 / 0 / 0 / 0 / 85 / 97 / 0 / 95 / 0 |
| MINUTE MAID® CRANBERRY** LIMEADE | WACKY PACK® | only in draft B | not found | 100 / 0 / 0 / 0 / 0 / 20 / 27 / 0 / 26 / 0 |
| MINUTE MAID® CRANBERRY** LIMEADE | SMALL | only in draft B | not found | 140 / 0 / 0 / 0 / 0 / 20 / 37 / 0 / 36 / 0 |
| MINUTE MAID® CRANBERRY** LIMEADE | MEDIUM | only in draft B | not found | 240 / 0 / 0 / 0 / 0 / 45 / 64 / 0 / 62 / 0 |
| MINUTE MAID® CRANBERRY** LIMEADE | LARGE | only in draft B | not found | 360 / 0 / 0 / 0 / 0 / 65 / 97 / 0 / 94 / 0 |
| MINUTE MAID® CRANBERRY** LIMEADE | RT 44® | only in draft B | not found | 490 / 0 / 0 / 0 / 0 / 90 / 131 / 0 / 127 / 0 |
| STRAWBERRY LIMEADE | WACKY PACK® | only in draft B | not found | 100 / 0 / 0 / 0 / 0 / 25 / 25 / 1 / 24 / 0 |
| STRAWBERRY LIMEADE | SMALL | only in draft B | not found | 130 / 0 / 0 / 0 / 0 / 30 / 35 / 1 / 34 / 0 |
| STRAWBERRY LIMEADE | MEDIUM | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 50 / 59 / 1 / 57 / 0 |
| STRAWBERRY LIMEADE | LARGE | only in draft B | not found | 340 / 0 / 0 / 0 / 0 / 80 / 90 / 2 / 87 / 0 |
| STRAWBERRY LIMEADE | RT 44® | only in draft B | not found | 450 / 0 / 0 / 0 / 0 / 105 / 120 / 2 / 117 / 0 |
| OCEAN WATER® | WACKY PACK® | only in draft B | not found | 80 / 0 / 0 / 0 / 0 / 20 / 21 / 0 / 21 / 0 |
| OCEAN WATER® | SMALL | only in draft B | not found | 120 / 0 / 0 / 0 / 0 / 30 / 31 / 0 / 31 / 0 |
| OCEAN WATER® | MEDIUM | only in draft B | not found | 200 / 0 / 0 / 0 / 0 / 45 / 52 / 0 / 52 / 0 |
| OCEAN WATER® | LARGE | only in draft B | not found | 300 / 0 / 0 / 0 / 0 / 70 / 79 / 0 / 79 / 0 |
| OCEAN WATER® | RT 44® | only in draft B | not found | 400 / 0 / 0 / 0 / 0 / 95 / 107 / 0 / 106 / 0 |
| BLACKBERRY SUGAR-FREE ADD-IN | WACKY PACK® | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 5 / 1 / 0 / 0 / 0 |
| BLACKBERRY SUGAR-FREE ADD-IN | SMALL | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 5 / 1 / 0 / 0 / 0 |
| BLACKBERRY SUGAR-FREE ADD-IN | MEDIUM | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 15 / 1 / 0 / 0 / 0 |
| BLACKBERRY SUGAR-FREE ADD-IN | LARGE | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 20 / 2 / 0 / 0 / 0 |
| BLUE COCONUT ADD-IN | WACKY PACK® | only in draft B | not found | 15 / 0 / 0 / 0 / 0 / 0 / 3 / 0 / 3 / 0 |
| BLUE COCONUT ADD-IN | SMALL | only in draft B | not found | 15 / 0 / 0 / 0 / 0 / 0 / 3 / 0 / 3 / 0 |
| BLUE COCONUT ADD-IN | MEDIUM | only in draft B | not found | 25 / 0 / 0 / 0 / 0 / 0 / 6 / 0 / 6 / 0 |
| BLUE COCONUT ADD-IN | LARGE | only in draft B | not found | 40 / 0 / 0 / 0 / 0 / 5 / 9 / 0 / 9 / 0 |
| BLUE Raspberry ADD-IN | SMALL | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 0 / 3 / 0 / 3 / 0 |
| BLUE Raspberry ADD-IN | MEDIUM | only in draft B | not found | 20 / 0 / 0 / 0 / 0 / 0 / 6 / 0 / 5 / 0 |
| BLUE Raspberry ADD-IN | LARGE | only in draft B | not found | 35 / 0 / 0 / 0 / 0 / 5 / 8 / 0 / 8 / 0 |
| BLUE Raspberry ADD-IN | RT 44® | only in draft B | not found | 45 / 0 / 0 / 0 / 0 / 10 / 11 / 0 / 11 / 0 |
| CARAMEL TOPPING | WACKY PACK® | only in draft B | not found | 90 / 1 / 0.5 / 0 / 5 / 90 / 19 / 0 / 12 / 0 |
| CARAMEL TOPPING | SMALL | only in draft B | not found | 90 / 1 / 0.5 / 0 / 5 / 90 / 19 / 0 / 12 / 0 |
| CARAMEL TOPPING | MEDIUM | only in draft B | not found | 180 / 2 / 1.5 / 0 / 5 / 180 / 37 / 0 / 24 / 0 |
| CARAMEL TOPPING | LARGE | only in draft B | not found | 270 / 3.5 / 2 / 0 / 10 / 270 / 56 / 0 / 36 / 0 |
| CARAMEL TOPPING | RT 44® | only in draft B | not found | 360 / 4.5 / 3 / 0 / 15 / 360 / 75 / 0 / 48 / 0 |
| CHERRY ADD-IN | WACKY PACK® | only in draft B | not found | 30 / 0 / 0 / 0 / 0 / 0 / 8 / 0 / 8 / 0 |
| CHERRY ADD-IN | SMALL | only in draft B | not found | 30 / 0 / 0 / 0 / 0 / 0 / 8 / 0 / 8 / 0 |
| CHERRY ADD-IN | MEDIUM | only in draft B | not found | 60 / 0 / 0 / 0 / 0 / 5 / 17 / 0 / 17 / 0 |
| CHERRY ADD-IN | LARGE | only in draft B | not found | 90 / 0 / 0 / 0 / 0 / 10 / 25 / 0 / 25 / 0 |
| CHERRY ADD-IN | RT 44® | only in draft B | not found | 120 / 0 / 0 / 0 / 0 / 10 / 34 / 0 / 34 / 0 |
| CHERRY GARNISH | 1 serving | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 0 / 2 / 0 / 2 / 0 |
| CHOCOLATE ADD-IN | WACKY PACK® | only in draft B | not found | 80 / 0 / 0 / 0 / 0 / 30 / 19 / 0 / 15 / 0 |
| CHOCOLATE ADD-IN | SMALL | only in draft B | not found | 80 / 0 / 0 / 0 / 0 / 30 / 19 / 0 / 15 / 0 |
| CHOCOLATE ADD-IN | MEDIUM | only in draft B | not found | 160 / 0 / 0 / 0 / 0 / 60 / 38 / 0 / 31 / 0 |
| CHOCOLATE ADD-IN | LARGE | only in draft B | not found | 240 / 0 / 0 / 0 / 0 / 85 / 57 / 0 / 46 / 0 |
| CHOCOLATE ADD-IN | RT 44® | only in draft B | not found | 320 / 0 / 0 / 0 / 0 / 115 / 76 / 0 / 61 / 0 |
| DIET CHERRY SUGAR-FREE ADD-IN | WACKY PACK® | only in draft B | not found | 15 / 0 / 0 / 0 / 0 / 10 / 3 / 0 / 2 / 0 |
| DIET CHERRY SUGAR-FREE ADD-IN | SMALL | only in draft B | not found | 15 / 0 / 0 / 0 / 0 / 15 / 3 / 0 / 2 / 0 |
| DIET CHERRY SUGAR-FREE ADD-IN | MEDIUM | only in draft B | not found | 20 / 0 / 0 / 0 / 0 / 20 / 3 / 0 / 2 / 0 |
| DIET CHERRY SUGAR-FREE ADD-IN | LARGE | only in draft B | not found | 25 / 0 / 0 / 0 / 0 / 35 / 4 / 0 / 2 / 0 |
| DIET CHERRY SUGAR-FREE ADD-IN | RT 44® | only in draft B | not found | 30 / 0 / 0 / 0 / 0 / 45 / 4 / 0 / 2 / 0 |
| GRAPE ADD-IN | WACKY PACK® | only in draft B | not found | 20 / 0 / 0 / 0 / 0 / 0 / 5 / 0 / 5 / 0 |
| GRAPE ADD-IN | SMALL | only in draft B | not found | 20 / 0 / 0 / 0 / 0 / 0 / 5 / 0 / 5 / 0 |
| GRAPE ADD-IN | MEDIUM | only in draft B | not found | 45 / 0 / 0 / 0 / 0 / 5 / 11 / 0 / 10 / 0 |
| GRAPE ADD-IN | LARGE | only in draft B | not found | 70 / 0 / 0 / 0 / 0 / 10 / 16 / 0 / 16 / 0 |
| GRAPE ADD-IN | RT 44® | only in draft B | not found | 90 / 0 / 0 / 0 / 0 / 10 / 22 / 0 / 21 / 0 |
| HOT FUDGE TOPPING | WACKY PACK® | only in draft B | not found | 100 / 3.5 / 3 / 0 / 0 / 45 / 16 / 1 / 12 / 1 |
| HOT FUDGE TOPPING | SMALL | only in draft B | not found | 100 / 3.5 / 3 / 0 / 0 / 45 / 16 / 1 / 12 / 1 |
| HOT FUDGE TOPPING | MEDIUM | only in draft B | not found | 200 / 7 / 6 / 0 / 0 / 90 / 32 / 2 / 25 / 2 |
| HOT FUDGE TOPPING | LARGE | only in draft B | not found | 300 / 10 / 9 / 0 / 0 / 140 / 48 / 2 / 37 / 2 |
| HOT FUDGE TOPPING | RT 44® | only in draft B | not found | 400 / 14 / 12 / 0 / 0 / 180 / 64 / 3 / 49 / 3 |
| LEMON ADD-IN | WACKY PACK® | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 1 / 0 / 0 / 0 |
| LEMON ADD-IN | SMALL | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 1 / 0 / 0 / 0 |
| LEMON ADD-IN | MEDIUM | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 0 / 1 / 0 / 1 / 0 |
| LEMON ADD-IN | LARGE | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 0 / 2 / 0 / 1 / 0 |
| LEMON ADD-IN | RT 44® | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 0 / 2 / 0 / 1 / 0 |
| MANGO SUGAR-FREE ADD-IN | WACKY PACK® | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 5 / 1 / 0 / 0 / 0 |
| MANGO SUGAR-FREE ADD-IN | SMALL | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 5 / 1 / 0 / 0 / 0 |
| MANGO SUGAR-FREE ADD-IN | MEDIUM | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 15 / 1 / 0 / 0 / 0 |
| MANGO SUGAR-FREE ADD-IN | LARGE | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 20 / 2 / 0 / 0 / 0 |
| MANGO SUGAR-FREE ADD-IN | RT 44® | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 30 / 2 / 0 / 0 / 0 |
| MINUTE MAID® CRANBERRY** ADD-IN | WACKY PACK® | only in draft B | not found | 35 / 0 / 0 / 0 / 0 / 0 / 9 / 0 / 8 / 0 |
| MINUTE MAID® CRANBERRY** ADD-IN | SMALL | only in draft B | not found | 35 / 0 / 0 / 0 / 0 / 0 / 9 / 0 / 8 / 0 |
| MINUTE MAID® CRANBERRY** ADD-IN | MEDIUM | only in draft B | not found | 70 / 0 / 0 / 0 / 0 / 0 / 17 / 0 / 16 / 0 |
| MINUTE MAID® CRANBERRY** ADD-IN | LARGE | only in draft B | not found | 100 / 0 / 0 / 0 / 0 / 0 / 26 / 0 / 24 / 0 |
| MINUTE MAID® CRANBERRY** ADD-IN | RT 44® | only in draft B | not found | 130 / 0 / 0 / 0 / 0 / 0 / 34 / 0 / 32 / 0 |
| NERDS® CANDY ADD-IN | WACKY PACK® | only in draft B | not found | 110 / 0 / 0 / 0 / 0 / 26 / 26 / 0 / 26 / 0 |
| NERDS® CANDY ADD-IN | SMALL | only in draft B | not found | 160 / 0 / 0 / 0 / 0 / 5 / 39 / 0 / 39 / 0 |
| NERDS® CANDY ADD-IN | MEDIUM | only in draft B | not found | 210 / 0 / 0 / 0 / 0 / 10 / 52 / 0 / 52 / 0 |
| NERDS® CANDY ADD-IN | LARGE | only in draft B | not found | 230 / 0 / 0 / 0 / 0 / 10 / 57 / 0 / 57 / 0 |
| NERDS® CANDY ADD-IN | RT 44® | only in draft B | not found | 290 / 0 / 0 / 0 / 0 / 10 / 71 / 0 / 71 / 0 |
| PEACH SUGAR-FREE ADD-IN | WACKY PACK® | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 5 / 0 / 0 / 0 / 0 |
| PEACH SUGAR-FREE ADD-IN | SMALL | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 5 / 0 / 0 / 0 / 0 |
| PEACH SUGAR-FREE ADD-IN | MEDIUM | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 10 / 1 / 0 / 0 / 0 |
| PEACH SUGAR-FREE ADD-IN | LARGE | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 20 / 1 / 0 / 0 / 0 |
| PEACH SUGAR-FREE ADD-IN | RT 44® | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 25 / 1 / 0 / 0 / 0 |
| POWERADE® ADD-IN | WACKY PACK® | only in draft B | not found | 25 / 0 / 0 / 0 / 0 / 20 / 6 / 0 / 6 / 0 |
| POWERADE® ADD-IN | SMALL | only in draft B | not found | 25 / 0 / 0 / 0 / 0 / 20 / 6 / 0 / 6 / 0 |
| POWERADE® ADD-IN | MEDIUM | only in draft B | not found | 45 / 0 / 0 / 0 / 0 / 40 / 13 / 0 / 13 / 0 |
| POWERADE® ADD-IN | LARGE | only in draft B | not found | 70 / 0 / 0 / 0 / 0 / 60 / 20 / 0 / 20 / 0 |
| POWERADE® ADD-IN | RT 44® | only in draft B | not found | 90 / 0 / 0 / 0 / 0 / 80 / 25 / 0 / 25 / 0 |
| RASPBERRY SUGAR-FREE ADD-IN | WACKY PACK® | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 5 / 0 / 0 / 0 / 0 |
| RASPBERRY SUGAR-FREE ADD-IN | SMALL | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 5 / 0 / 0 / 0 / 0 |
| RASPBERRY SUGAR-FREE ADD-IN | MEDIUM | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 15 / 1 / 0 / 0 / 0 |
| RASPBERRY SUGAR-FREE ADD-IN | LARGE | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 20 / 1 / 0 / 0 / 0 |
| RASPBERRY SUGAR-FREE ADD-IN | RT 44® | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 25 / 1 / 0 / 0 / 0 |
| STRAWBERRY ADD-IN | WACKY PACK® | only in draft B | not found | 25 / 0 / 0 / 0 / 0 / 5 / 7 / 1 / 6 / 0 |
| STRAWBERRY ADD-IN | SMALL | only in draft B | not found | 25 / 0 / 0 / 0 / 0 / 5 / 7 / 1 / 6 / 0 |
| STRAWBERRY ADD-IN | MEDIUM | only in draft B | not found | 50 / 0 / 0 / 0 / 0 / 10 / 12 / 1 / 11 / 0 |
| STRAWBERRY ADD-IN | LARGE | only in draft B | not found | 70 / 0 / 0 / 0 / 0 / 15 / 18 / 1 / 17 / 0 |
| STRAWBERRY ADD-IN | RT 44® | only in draft B | not found | 90 / 0 / 0 / 0 / 0 / 20 / 24 / 2 / 22 / 0 |
| VANILLA ADD-IN | WACKY PACK® | only in draft B | not found | 20 / 0 / 0 / 0 / 0 / 0 / 6 / 0 / 6 / 0 |
| VANILLA ADD-IN | SMALL | only in draft B | not found | 20 / 0 / 0 / 0 / 0 / 0 / 6 / 0 / 6 / 0 |
| VANILLA ADD-IN | MEDIUM | only in draft B | not found | 45 / 0 / 0 / 0 / 0 / 0 / 12 / 0 / 12 / 0 |
| VANILLA ADD-IN | LARGE | only in draft B | not found | 70 / 0 / 0 / 0 / 0 / 5 / 18 / 0 / 18 / 0 |
| VANILLA ADD-IN | RT 44® | only in draft B | not found | 90 / 0 / 0 / 0 / 0 / 5 / 24 / 0 / 24 / 0 |
| ΔRED BULL® SLUSH | SMALL | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 50 / 48 / 0 / 48 / 0 |
| ΔRED BULL® SLUSH | MEDIUM | only in draft B | not found | 250 / 0 / 0 / 0 / 0 / 80 / 65 / 0 / 65 / 0 |
| ΔRED BULL® SLUSH | LARGE | only in draft B | not found | 390 / 0 / 0 / 0 / 0 / 125 / 103 / 0 / 102 / 1 |
| ΔRED BULL® SLUSH | RT 44® | only in draft B | not found | 540 / 0 / 0 / 0 / 0 / 170 / 144 / 0 / 143 / 1 |
| ΔRED BULL® CAN | 1 serving | only in draft B | not found | 120 / 0 / 0 / 0 / 0 / 110 / 30 / 0 / 29 / 1 |
| ΔSUMMER EDITION WATERMELON RED BULL® SLUSH | SMALL | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 45 / 48 / 0 / 48 / 0 |
| ΔSUMMER EDITION WATERMELON RED BULL® SLUSH | MEDIUM | only in draft B | not found | 250 / 0 / 0 / 0 / 0 / 75 / 65 / 0 / 65 / 0 |
| ΔSUMMER EDITION WATERMELON RED BULL® SLUSH | LARGE | only in draft B | not found | 390 / 0 / 0 / 0 / 0 / 115 / 103 / 0 / 102 / 0 |
| ΔSUMMER EDITION WATERMELON RED BULL® SLUSH | RT 44® | only in draft B | not found | 540 / 0 / 0 / 0 / 0 / 160 / 144 / 0 / 143 / 0 |
| ΔSUMMER EDITION WATERMELON RED BULL® CAN | 1 serving | only in draft B | not found | 120 / 0 / 0 / 0 / 0 / 95 / 30 / 0 / 29 / 0 |
| ΔYELLOW CAKE BATTER SHAKE | MINI | only in draft B | not found | 540 / 31 / 18 / 0.5 / 55 / 200 / 57 / 0 / 40 / 6 |
| ΔYELLOW CAKE BATTER SHAKE | SMALL | only in draft B | not found | 770 / 44 / 26 / 1 / 100 / 330 / 83 / 0 / 57 / 10 |
| ΔYELLOW CAKE BATTER SHAKE | MEDIUM | only in draft B | not found | 1050 / 61 / 33 / 1.5 / 125 / 420 / 113 / 0 / 77 / 13 |
| ΔYELLOW CAKE BATTER SHAKE | LARGE | only in draft B | not found | 1560 / 90 / 48 / 2 / 190 / 640 / 168 / 1 / 113 / 20 |
| ΔBROWNIE BATTER SHAKE | MINI | only in draft B | not found | 530 / 31 / 18 / 0.5 / 55 / 320 / 59 / 1 / 40 / 7 |
| ΔBROWNIE BATTER SHAKE | SMALL | only in draft B | not found | 760 / 43 / 26 / 1 / 100 / 450 / 85 / 1 / 57 / 11 |
| ΔBROWNIE BATTER SHAKE | MEDIUM | only in draft B | not found | 1040 / 59 / 32 / 1.5 / 125 / 670 / 117 / 2 / 78 / 14 |
| ΔBROWNIE BATTER SHAKE | LARGE | only in draft B | not found | 1540 / 88 / 47 / 2 / 190 / 1010 / 174 / 4 / 115 / 22 |
| ΔLEMONBERRY SLUSH FLOAT | MINI | only in draft B | not found | 260 / 7 / 4 / 0 / 25 / 95 / 51 / 1 / 44 / 2 |
| ΔLEMONBERRY SLUSH FLOAT | SMALL | only in draft B | not found | 350 / 9 / 5 / 0 / 30 / 125 / 68 / 1 / 59 / 3 |
| ΔLEMONBERRY SLUSH FLOAT | MEDIUM | only in draft B | not found | 430 / 11 / 7 / 0 / 40 / 150 / 83 / 1 / 73 / 3 |
| ΔLEMONBERRY SLUSH FLOAT | LARGE | only in draft B | not found | 650 / 15 / 10 / 0.5 / 55 / 220 / 128 / 1 / 114 / 5 |

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
