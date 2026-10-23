# Popeyes: lines for a person

Guide: https://plk-use1-prod.sites.rbictg.com/nutrition/PLK_Nutrition.pdf (read 2026-10-22). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (32)

Fix each line in `menus/popeyes.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B |
| --- | --- | --- | --- | --- |
| TENDERS - CLASSIC OR SPICY | 3 Pieces | the guide gives no protein_g | 390 / 19 / 9 / 1 / 100 / 1700 / 25 / 1 / 0 / – | 390 / 19 / 9 / 1 / 100 / 1700 / 25 / 1 / 0 / – |
| TENDERS - CLASSIC OR SPICY | 5 Pieces | the guide gives no protein_g | 650 / 32 / 15 / 2 / 170 / 2840 / 41 / 2 / 1 / – | 650 / 32 / 15 / 2 / 170 / 2840 / 41 / 2 / 1 / – |
| TENDERS - BLACKENED | 3 Pieces | the guide gives no protein_g | 170 / 6 / 2 / 0 / 80 / 860 / 2 / 1 / 0 / – | 170 / 6 / 2 / 0 / 80 / 860 / 2 / 1 / 0 / – |
| TENDERS - BLACKENED | 5 Pieces | the guide gives no protein_g | 280 / 9 / 4 / 0 / 140 / 1430 / 4 / 1 / 0 / – | 280 / 9 / 4 / 0 / 140 / 1430 / 4 / 1 / 0 / – |
| CLASSIC BONE-IN WINGS | 6 Pieces | the guide gives no protein_g | 640 / 38 / 15 / 2 / 195 / 2430 / 40 / 3 / 1 / – | 640 / 38 / 15 / 2 / 195 / 2430 / 40 / 3 / 1 / – |
| GHOST PEPPER BONE-IN WINGS | 6 Pieces | the guide gives no protein_g | 650 / 38 / 15 / 2 / 195 / 2930 / 42 / 3 / 1 / – | 650 / 38 / 15 / 2 / 195 / 2930 / 42 / 3 / 1 / – |
| HONEY BBQ BONE-IN WINGS | 6 Pieces | the guide gives no protein_g | 850 / 38 / 15 / 2 / 195 / 3510 / 90 / 3 / 48 / – | 850 / 38 / 15 / 2 / 195 / 3510 / 90 / 3 / 48 / – |
| SWEET & SPICY BONE-IN WINGS | 6 Pieces | the guide gives no protein_g | 870 / 38 / 15 / 2 / 195 / 3810 / 96 / 3 / 50 / – | 870 / 38 / 15 / 2 / 195 / 3810 / 96 / 3 / 50 / – |
| BUTTERFLY SHRIMP | 8 Pieces | the guide gives no protein_g | 360 / 21 / 9 / 1 / 80 / 1140 / 30 / 2 / 1 / – | 360 / 21 / 9 / 1 / 80 / 1140 / 30 / 2 / 1 / – |
| CHICKEN SANDWICH-CLASSIC | 1 | the guide gives no protein_g | 700 / 42 / 14 / 1.5 / 90 / 1440 / 50 / 2 / 8 / – | 700 / 42 / 14 / 1.5 / 90 / 1440 / 50 / 2 / 8 / – |
| CHICKEN SANDWICH-SPICY | 1 | the guide gives no protein_g | 700 / 42 / 14 / 1.5 / 90 / 1470 / 50 / 2 / 8 / – | 700 / 42 / 14 / 1.5 / 90 / 1470 / 50 / 2 / 8 / – |
| HONEY CHICKEN BISCUIT | 1 | the guide gives no protein_g | 730 / 41 / 18 / 1 / 65 / 1750 / 67 / 3 / 15 / – | 730 / 41 / 18 / 1 / 65 / 1750 / 67 / 3 / 15 / – |
| CLASSIC TENDER WRAP | 1 | the guide gives no protein_g | 480 / 32 / 10 / 1 / 45 / 1260 / 31 / 2 / 2 / – | 480 / 32 / 10 / 1 / 45 / 1260 / 31 / 2 / 2 / – |
| SPICY TENDER WRAP | 1 | the guide gives no protein_g | 480 / 31 / 10 / 1 / 45 / 1320 / 32 / 2 / 2 / – | 480 / 31 / 10 / 1 / 45 / 1320 / 32 / 2 / 2 / – |
| CLASSIC TENDER BLACKENED RANCH WRAP | 1 | the guide gives no protein_g | 430 / 25 / 9 / 1 / 40 / 1340 / 32 / 2 / 3 / – | 430 / 25 / 9 / 1 / 40 / 1340 / 32 / 2 / 3 / – |
| BISCUIT | 1 | the guide gives no protein_g | 230 / 14 / 6 / 0 / 0 / 520 / 24 / 1 / 2 / – | 230 / 14 / 6 / 0 / 0 / 520 / 24 / 1 / 2 / – |
| CAJUN FRIES | Reg | the guide gives no protein_g | 270 / 15 / 7 / 1 / 10 / 620 / 31 / 3 / 0 / – | 270 / 15 / 7 / 1 / 10 / 620 / 31 / 3 / 0 / – |
| CAJUN FRIES | Lg | the guide gives no protein_g | 740 / 41 / 18 / 2 / 35 / 1720 / 86 / 8 / 1 / – | 740 / 41 / 18 / 2 / 35 / 1720 / 86 / 8 / 1 / – |
| HOMESTYLE MAC & CHEESE | Reg | the guide gives no protein_g | 280 / 20 / 10 / 0.5 / 60 / 510 / 16 / 0 / 3 / – | 280 / 20 / 10 / 0.5 / 60 / 510 / 16 / 0 / 3 / – |
| HOMESTYLE MAC & CHEESE | Lg | the guide gives no protein_g | 850 / 63 / 36 / 1.5 / 180 / 1540 / 48 / 1 / 9 / – | 850 / 63 / 36 / 1.5 / 180 / 1540 / 48 / 1 / 9 / – |
| MASHED POTATOES WITH CAJUN GRAVY | Reg | the guide gives no protein_g | 110 / 6 / 0 / 0 / 5 / 750 / 13 / 0 / 3 / – | 110 / 6 / 0 / 0 / 5 / 750 / 13 / 0 / 3 / – |
| MASHED POTATOES WITH CAJUN GRAVY | Lg | the guide gives no protein_g | 310 / 14 / 4 / 0 / 10 / 2190 / 39 / 4 / 2 / – | 310 / 14 / 4 / 0 / 10 / 2190 / 39 / 4 / 2 / – |
| RED BEANS & RICE | Reg | the guide gives no protein_g | 260 / 16 / 4 / 0 / 10 / 580 / 29 / 6 / 1 / – | 260 / 16 / 4 / 0 / 10 / 580 / 29 / 6 / 1 / – |
| RED BEANS & RICE | Lg | the guide gives no protein_g | 640 / 40 / 9 / 0 / 25 / 1420 / 73 / 13 / 2 / – | 640 / 40 / 9 / 0 / 25 / 1420 / 73 / 13 / 2 / – |
| COLESLAW | Reg | the guide gives no protein_g | 160 / 12 / 2 / 0 / 10 / 210 / 12 / 2 / 10 / – | 160 / 12 / 2 / 0 / 10 / 210 / 12 / 2 / 10 / – |
| COLESLAW | Lg | the guide gives no protein_g | 480 / 37 / 6 / 0 / 25 / 620 / 37 / 6 / 30 / – | 480 / 37 / 6 / 0 / 25 / 620 / 37 / 6 / 30 / – |
| TENDER - CLASSIC | 1 | only in draft A | 130 / 6 / 3 / 0 / 35 / 570 / 8 / 0 / 0 / 12 | not found |
| LEG - CLASSIC | 1 | only in draft A | 190 / 11 / 4 / 0.5 / 55 / 350 / 9 / 0 / 0 / 12 | not found |
| WING (EACH) | 1 (each) | the guide gives no protein_g | 220 / 15 / 6 / 0.5 / 60 / 630 / 11 / 1 / 0 / – | 220 / 15 / 6 / 0.5 / 60 / 630 / 11 / 1 / 0 / – |
| LEG (EACH) | 1 (each) | the guide gives no protein_g | 200 / 12 / 6 / 0.5 / 70 / 540 / 9 / 1 / 0 / – | 200 / 12 / 6 / 0.5 / 70 / 540 / 9 / 1 / 0 / – |
| THIGH (EACH) | 1 (each) | the guide gives no protein_g | 490 / 34 / 15 / 1 / 110 / 1120 / 18 / 1 / 0 / – | 490 / 34 / 15 / 1 / 110 / 1120 / 18 / 1 / 0 / – |
| BREAST (EACH) | 1 (each) | the guide gives no protein_g | 620 / 30 / 16 / 1.5 / 180 / 1780 / 17 / 2 / 1 / – | 620 / 30 / 16 / 1.5 / 180 / 1780 / 17 / 2 / 1 / – |

## Spot check (3 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| SAUSAGE & GRAVY BISCUIT | 1 | 510 / 33 / 14 / 0.5 / 15 / 1090 / 42 / 3 / 3 / 10 |
| COCKTAIL SAUCE | 1 | 35 / 0 / 0 / 0 / 0 / 370 / 9 / 1 / 6 / 1 |
| SPRITE | Reg | 230 / 0 / 0 / 0 / 0 / 115 / 61 / 0 / 61 / 0 |
