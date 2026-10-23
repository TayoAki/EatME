# Buffalo Wild Wings: lines for a person

Guide: https://assets.ctfassets.net/6dxmiqksdkqb/2XgznB5cOqQ9l1r7PQAasB/dd312340082cc00107545e7ab21318a7/BWW_Nutrition_Guide__08-18-2026_-_11-17-2026_.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (254)

Fix each line in `menus/buffalo-wild-wings.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B |
| --- | --- | --- | --- | --- |
| BONE-IN WINGS, add Signature Sauce or Dry Rub | 15 count | only in draft A | 1080 / 61 / 20 / 1.5 / 540 / 400 / 0 / 0 / 0 / 132 | not found |
| BONE-IN WINGS (FLATS ONLY), add Signature Sauce or Dry Rub | 15 count | only in draft A | 1020 / 63 / 20 / 1.5 / 530 / 350 / 0 / 0 / 0 / 115 | not found |
| BONE-IN WINGS (DRUMS ONLY), add Signature Sauce or Dry Rub | 15 count | only in draft A | 1120 / 58 / 20 / 1.5 / 545 / 450 / 0 / 0 / 0 / 150 | not found |
| BONE-IN WINGS, add Signature Sauce or Dry Rub | 20 count | only in draft A | 1440 / 82 / 27 / 2 / 720 / 530 / 0 / 0 / 0 / 177 | not found |
| BONE-IN WINGS (FLATS ONLY), add Signature Sauce or Dry Rub | 20 count | only in draft A | 1370 / 84 / 27 / 1.5 / 705 / 470 / 0 / 0 / 0 / 154 | not found |
| BONE-IN WINGS (DRUMS ONLY), add Signature Sauce or Dry Rub | 20 count | only in draft A | 1490 / 77 / 26 / 2 / 725 / 600 / 0 / 0 / 0 / 200 | not found |
| BONE-IN WINGS, add Signature Sauce or Dry Rub | 30 count | only in draft A | 2160 / 122 / 40 / 2.5 / 1080 / 800 / 0 / 0 / 0 / 265 | not found |
| BONE-IN WINGS (FLATS ONLY), add Signature Sauce or Dry Rub | 30 count | only in draft A | 2050 / 125 / 41 / 2.5 / 1055 / 700 / 0 / 0 / 0 / 230 | not found |
| BONE-IN WINGS (DRUMS ONLY), add Signature Sauce or Dry Rub | 30 count | only in draft A | 2240 / 116 / 39 / 3 / 1085 / 900 / 0 / 0 / 0 / 299 | not found |
| Saucy Chicken Sandwich | 1 serving | differ: calories, fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 570 / 19 / 7 / 1 / 80 / 2540 / 57 / 4 / 5 / 31 | – / – / – / – / – / – / – / – / – / – |
| Add Signature Sauce | 2 fl oz | differ: calories, fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 60 / 0 / 0 / 0 / 0 / 830 / 2 / 0 / 0 / 0 | – / – / – / – / – / – / – / – / – / – |
| Add Signature Sauce | 1 serving | differ: calories, fat_g, saturated_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 15 / 0 / 0 / 0 / 0 / 210 / 1 / 0 / 0 / 0 | – / – / – / 0 / – / – / – / – / – / – |
| Boneless Wings | 1 serving | differ: calories, fat_g, saturated_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, protein_g | 240 / 12 / 5 / 1 / 55 / 840 / 14 / 0 / 0 / 19 | 300 / 15 / 6 / 1 / 70 / 1050 / 17 / 1 / 0 / 24 |
| Asian Zing* | 1 serving | only in draft B | not found | 130 / 0 / 0 / 0 / 0 / 860 / 31 / 1 / 29 / 1 |
| Black Garlic Glaze - limited time, at select locations | 1 serving | only in draft B | not found | 90 / 0 / 0 / 0 / 0 / 630 / 21 / 0 / 19 / 1 |
| Blazin* Knockout | 1 serving | only in draft B | not found | 80 / 3 / 0 / 0 / 0 / 1370 / 12 / 1 / 10 / 0 |
| Buffalo Ranch | 1 serving | only in draft B | not found | 80 / 8 / 1.5 / 0 / 10 / 1290 / 3 / 1 / 0 / 1 |
| Caribbean Jerk | 1 serving | only in draft B | not found | 110 / 4 / 0.5 / 0 / 0 / 490 / 19 / 1 / 17 / 0 |
| Golden Fire | 1 serving | only in draft B | not found | 90 / 2 / 0 / 0 / 0 / 760 / 19 / 1 / 17 / 1 |
| Honey BBQ | 1 serving | only in draft B | not found | 100 / 0 / 0 / 0 / 0 / 620 / 25 / 0 / 21 / 0 |
| Honey Garlic | 1 serving | only in draft B | not found | 120 / 0.5 / 0 / 0 / 0 / 1060 / 29 / 0 / 26 / 1 |
| Hot | 1 serving | only in draft B | not found | 70 / 6 / 1 / 0 / 0 / 1650 / 3 / 1 / 0 / 1 |
| Hot BBQ - limited time | 1 serving | only in draft B | not found | 50 / 2.5 / 0 / 0 / 0 / 1010 / 8 / 1 / 5 / 1 |
| Jammin' Jalapeño | 1 serving | only in draft B | not found | 130 / 0 / 0 / 0 / 0 / 1020 / 30 / 0 / 24 / 0 |
| Lemon Pepper | 1 serving | only in draft B | not found | 230 / 23 / 4.5 / 0 / 15 / 850 / 4 / 1 / 2 / 0 |
| Lemon Pepper Hot - limited time | 1 serving | only in draft B | not found | 160 / 17 / 3.5 / 0 / 5 / 1400 / 2 / 1 / 0 / 0 |
| Mango Habanero™ | 1 serving | only in draft B | not found | 110 / 1 / 0 / 0 / 0 / 650 / 26 / 1 / 20 / 0 |
| Medium | 1 serving | only in draft B | not found | 50 / 4 / 0.5 / 0 / 10 / 1630 / 2 / 0 / 0 / 0 |
| Mild | 1 serving | only in draft B | not found | 70 / 7 / 1 / 0 / 10 / 1390 / 2 / 0 / 0 / 0 |
| Original Buffalo | 1 serving | only in draft B | not found | 170 / 18 / 3.5 / 0 / 0 / 1480 / 2 / 0 / 0 / 0 |
| Parmesan Garlic | 1 serving | only in draft B | not found | 190 / 19 / 3.5 / 0 / 20 / 940 / 5 / 1 / 2 / 2 |
| Spicy Garlic | 1 serving | only in draft B | not found | 70 / 6 / 1 / 0 / 10 / 1700 / 3 / 0 / 0 / 1 |
| Sweet BBQ | 1 serving | only in draft B | not found | 70 / 0 / 0 / 0 / 0 / 840 / 17 / 1 / 13 / 1 |
| Teriyaki | 1 serving | only in draft B | not found | 100 / 0 / 0 / 0 / 0 / 1090 / 22 / 0 / 18 / 3 |
| Thai Curry | 1 serving | only in draft B | not found | 220 / 22 / 4 / 0 / 15 / 1350 / 6 / 1 / 3 / 1 |
| Wild* | 1 serving | only in draft B | not found | 70 / 6 / 1 / 0 / 0 / 1280 / 4 / 1 / 1 / 0 |
| Buffalo Dry Rub | 1 serving | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 480 / 1 / 0 / 0 / 0 |
| Chipotle BBQ Dry Rub | 1 serving | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 360 / 1 / 0 / 1 / 0 |
| Desert Heat Dry Rub | 1 serving | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 250 / 1 / 0 / 1 / 0 |
| Lemon Pepper Dry Rub | 1 serving | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 290 / 1 / 0 / 0 / 0 |
| Salt & Vinegar Dry Rub | 1 serving | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 540 / 1 / 0 / 0 / 0 |
| Wild' | 1 serving | only in draft B | not found | 100 / 8 / 1.5 / 0 / 0 / 1710 / 5 / 1 / 2 / 1 |
| Blazin™ Knockout | 1 serving | only in draft B | not found | 200 / 8 / 1 / 0 / 0 / 3650 / 32 / 2 / 26 / 1 |
| Asian Zing* | 2 fl oz | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 1150 / 41 / 1 / 38 / 1 |
| Black Garlic Glaze - limited time, at select locations | 2 fl oz | only in draft B | not found | 120 / 0 / 0 / 0 / 0 / 840 / 28 / 1 / 25 / 1 |
| Blazin* Knockout | 2 fl oz | only in draft B | not found | 100 / 4 / 0.5 / 0 / 0 / 1820 / 16 / 1 / 13 / 1 |
| Buffalo Ranch | 2 fl oz | only in draft B | not found | 110 / 10 / 2 / 0 / 15 / 1720 / 4 / 1 / 0 / 1 |
| Caribbean Jerk | 2 fl oz | only in draft B | not found | 150 / 5 / 1 / 0 / 0 / 660 / 26 / 1 / 23 / 1 |
| Golden Fire | 2 fl oz | only in draft B | not found | 130 / 2.5 / 0 / 0 / 0 / 1020 / 25 / 1 / 22 / 1 |
| Honey BBQ | 2 fl oz | only in draft B | not found | 140 / 0 / 0 / 0 / 0 / 830 / 34 / 0 / 28 / 0 |
| Honey Garlic | 2 fl oz | only in draft B | not found | 160 / 1 / 0 / 0 / 0 / 1410 / 39 / 0 / 34 / 1 |
| Hot | 2 fl oz | only in draft B | not found | 90 / 8 / 1.5 / 0 / 0 / 2200 / 4 / 1 / 0 / 1 |
| Hot BBQ - limited time | 2 fl oz | only in draft B | not found | 70 / 3.5 / 0.5 / 0 / 0 / 1340 / 10 / 1 / 7 / 1 |
| Jammin' Jalapeño | 2 fl oz | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 1360 / 40 / 0 / 32 / 0 |
| Lemon Pepper | 2 fl oz | only in draft B | not found | 300 / 31 / 6 / 0.5 / 25 / 1130 / 5 / 1 / 2 / 1 |
| Mango Habanero™ | 2 fl oz | only in draft B | not found | 160 / 1 / 0 / 0 / 0 / 890 / 36 / 1 / 26 / 0 |
| Medium | 2 fl oz | only in draft B | not found | 60 / 6 / 1 / 0 / 10 / 2170 / 3 / 0 / 0 / 1 |
| Mild | 2 fl oz | only in draft B | not found | 100 / 9 / 1.5 / 0 / 10 / 1850 / 3 / 0 / 0 / 1 |
| Original Buffalo | 2 fl oz | only in draft B | not found | 220 / 24 / 4.5 / 0 / 0 / 1980 / 2 / 0 / 0 / 0 |
| Parmesan Garlic | 2 fl oz | only in draft B | not found | 260 / 25 / 4.5 / 0 / 25 / 1250 / 6 / 1 / 2 / 2 |
| Spicy Garlic | 2 fl oz | only in draft B | not found | 90 / 8 / 1.5 / 0 / 15 / 2270 / 4 / 0 / 0 / 1 |
| Sweet BBQ | 2 fl oz | only in draft B | not found | 100 / 0 / 0 / 0 / 0 / 1120 / 23 / 1 / 17 / 1 |
| Teriyaki | 2 fl oz | only in draft B | not found | 130 / 0 / 0 / 0 / 0 / 1450 / 30 / 1 / 24 / 4 |
| Thai Curry | 2 fl oz | only in draft B | not found | 290 / 29 / 5 / 0 / 15 / 1800 / 8 / 1 / 4 / 1 |
| Wild* | 2 fl oz | only in draft B | not found | 100 / 8 / 1.5 / 0 / 0 / 1710 / 5 / 1 / 2 / 1 |
| Buffalo Dry Rub | 1 tsp | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 670 / 1 / 0 / 0 / 0 |
| Desert Heat* Dry Rub | 1 tsp | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 290 / 2 / 0 / 1 / 0 |
| Chipotle BBQ Dry Rub | 1 tsp | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 330 / 1 / 0 / 1 / 0 |
| Lemon Pepper Dry Rub | 1 tsp | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 460 / 1 / 0 / 0 / 0 |
| Salt & Vinegar Dry Rub | 1 tsp | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 520 / 1 / 0 / 0 / 0 |
| New Belgium Fat Tire' Beer Cheese | 1 serving | only in draft B | not found | 120 / 9 / 5 / 0 / 20 / 430 / 5 / 0 / 3 / 5 |
| Creamy Chimichurri | 1 serving | only in draft B | not found | 200 / 15 / 2.5 / 0 / 35 / 1090 / 15 / 0 / 5 / 1 |
| Maple Sweet Chili | 1 serving | only in draft B | not found | 150 / 0 / 0 / 0 / 0 / 860 / 35 / 1 / 30 / 0 |
| Peri Peri | 1 serving | only in draft B | not found | 150 / 0 / 0 / 0 / 0 / 860 / 35 / 1 / 30 / 0 |
| Smoky Elote | 1 serving | only in draft B | not found | 230 / 22 / 3.5 / 0 / 30 / 960 / 6 / 0 / 3 / 2 |
| Sweet Curry | 1 serving | only in draft B | not found | 90 / 0.5 / 0 / 0 / 0 / 840 / 20 / 1 / 18 / 1 |
| Yuzu Wasabi | 1 serving | only in draft B | not found | 200 / 15 / 3 / 0 / 15 / 880 / 15 / 0 / 8 / 1 |
| Asian Zing® | 3 count | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 1150 / 41 / 1 / 38 / 1 |
| Asian Zing® | 5 count | only in draft B | not found | 260 / 0.5 / 0 / 0 / 0 / 1720 / 62 / 1 / 57 / 1 |
| Black Garlic Glaze - limited time, at select locations | 3 count | only in draft B | not found | 120 / 0 / 0 / 0 / 0 / 840 / 28 / 1 / 25 / 1 |
| Black Garlic Glaze - limited time, at select locations | 5 count | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 1250 / 42 / 1 / 37 / 1 |
| Blazin™ Knockout | 3 count | only in draft B | not found | 100 / 4 / 0.5 / 0 / 0 / 1820 / 16 / 1 / 13 / 1 |
| Blazin™ Knockout | 5 count | only in draft B | not found | 150 / 6 / 1 / 0 / 0 / 2740 / 24 / 2 / 19 / 1 |
| Buffalo Ranch | 3 count | only in draft B | not found | 110 / 10 / 2 / 0 / 15 / 1720 / 4 / 1 / 0 / 1 |
| Buffalo Ranch | 5 count | only in draft B | not found | 170 / 15 / 3 / 0 / 20 / 2580 / 5 / 2 / 1 / 1 |
| Caribbean Jerk | 3 count | only in draft B | not found | 150 / 5 / 1 / 0 / 0 / 660 / 26 / 1 / 23 / 0 |
| Caribbean Jerk | 5 count | only in draft B | not found | 230 / 8 / 1.5 / 0 / 0 / 990 / 39 / 1 / 34 / 0 |
| Golden Fire | 3 count | only in draft B | not found | 130 / 2.5 / 0 / 0 / 0 / 1020 / 25 / 1 / 22 / 1 |
| Golden Fire | 5 count | only in draft B | not found | 190 / 4 / 0 / 0 / 0 / 1530 / 38 / 2 / 34 / 2 |
| Honey BBQ | 3 count | only in draft B | not found | 140 / 0 / 0 / 0 / 0 / 830 / 34 / 0 / 28 / 0 |
| Honey BBQ | 5 count | only in draft B | not found | 200 / 0 / 0 / 0 / 0 / 1240 / 50 / 1 / 41 / 1 |
| Honey Garlic | 3 count | only in draft B | not found | 160 / 1 / 0 / 0 / 0 / 1410 / 39 / 0 / 34 / 1 |
| Honey Garlic | 5 count | only in draft B | not found | 250 / 1.5 / 0 / 0 / 0 / 2120 / 59 / 1 / 51 / 1 |
| Hot | 3 count | only in draft B | not found | 90 / 8 / 1.5 / 0 / 0 / 2200 / 4 / 1 / 0 / 1 |
| Hot | 5 count | only in draft B | not found | 140 / 12 / 2 / 0 / 0 / 3300 / 6 / 1 / 0 / 1 |
| Hot BBQ - limited time | 3 count | only in draft B | not found | 70 / 3.5 / 0.5 / 0 / 0 / 1340 / 10 / 1 / 7 / 1 |
| Hot BBQ - limited time | 5 count | only in draft B | not found | 110 / 5 / 1 / 0 / 0 / 2010 / 15 / 1 / 10 / 1 |
| Jammin' Jalapeño | 3 count | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 1360 / 40 / 0 / 32 / 0 |
| Jammin' Jalapeño | 5 count | only in draft B | not found | 270 / 0 / 0 / 0 / 0 / 2040 / 60 / 0 / 48 / 0 |
| Lemon Pepper | 3 count | only in draft B | not found | 300 / 31 / 6 / 0.5 / 25 / 1130 / 5 / 1 / 2 / 1 |
| Lemon Pepper | 5 count | only in draft B | not found | 450 / 47 / 9 / 2 / 35 / 1690 / 8 / 2 / 4 / 1 |
| Mango Habanero™ | 3 count | only in draft B | not found | 150 / 1 / 0 / 0 / 0 / 870 / 35 / 1 / 26 / 0 |
| Mango Habanero™ | 5 count | only in draft B | not found | 220 / 1.5 / 0 / 0 / 0 / 1300 / 53 / 1 / 40 / 1 |
| Everything Pretzel Knots, with New Belgium Fat Tire Beer Cheese and Honey Mustard | 1 serving | only in draft B | not found | 890 / 43 / 10 / 0 / 35 / 3000 / 106 / 3 / 13 / 20 |
| Garlic Mushrooms, with Southwestern Ranch - limited time | 1 serving | only in draft B | not found | 660 / 51 / 11 / 1 / 25 / 1420 / 44 / 6 / 5 / 6 |
| Hatch Queso with Chips | 1 serving | only in draft B | not found | 1110 / 59 / 28 / 2.5 / 105 / 2370 / 119 / 11 / 8 / 28 |
| Add Chili | 1 serving | only in draft B | not found | 110 / 6 / 2.5 / 0 / 20 / 350 / 5 / 2 / 2 / 8 |
| Add House-made Guacamole | 1 serving | only in draft B | not found | 45 / 4.5 / 1 / 0 / 0 / 85 / 3 / 2 / 0 / 1 |
| Mini Corn Dogs, with Honey Mustard - limited time | 1 serving | only in draft B | not found | 850 / 57 / 15 / 2 / 110 / 1880 / 64 / 3 / 20 / 17 |
| Mini Corn Dogs, with Ranch - limited time | 1 serving | only in draft B | not found | 940 / 71 / 17 / 2 / 100 / 1760 / 56 / 2 / 13 / 16 |
| Add Chicken | 1 serving | only in draft B | not found | 120 / 4 / 2 / 0 / 60 / 470 / 1 / 0 / 0 / 21 |
| Beer-Battered Onion Rings | 1 serving | only in draft B | not found | 550 / 31 / 13 / 1.5 / 25 / 750 / 65 / 5 / 10 / 5 |
| Buffalo Chips - limited time | 1 serving | only in draft B | not found | 370 / 15 / 5 / 1 / 10 / 750 / 54 / 5 / 0 / 6 |
| Cauliflower Wings | 1 serving | only in draft B | not found | 520 / 29 / 11 / 1.5 / 35 / 650 / 58 / 5 / 4 / 8 |
| Cheddar Cheese Curds | 1 serving | only in draft B | not found | 530 / 38 / 22 / 2 / 110 / 1180 / 18 / 1 / 2 / 28 |
| Cheeseburger Sliders - at select locations | 1 serving | only in draft B | not found | 360 / 15 / 7 / 0.5 / 65 / 810 / 38 / 1 / 17 / 17 |
| Spicy Chicken Dippers | 1 serving | only in draft B | not found | 330 / 16 / 6 / 0.5 / 80 / 1130 / 25 / 2 / 1 / 22 |
| Everything Pretzel Knots | 1 serving | only in draft B | not found | 330 / 9 / 1 / 0 / 0 / 1150 / 54 / 2 / 1 / 9 |
| Fried Pickles | 1 serving | only in draft B | not found | 450 / 25 / 11 / 1.5 / 25 / 2390 / 49 / 5 / 1 / 7 |
| Garlic Mushrooms - limited time | 1 serving | only in draft B | not found | 320 / 14 / 5 / 1 / 10 / 620 / 42 / 6 / 4 / 5 |
| Jumbo Stuffed Tots - at select locations | 1 serving | only in draft B | not found | 260 / 16 / 7 / 0.5 / 0 / 820 / 17 / 2 / 0 / 10 |
| Mini Corn Dogs - limited time | 1 serving | only in draft B | not found | 310 / 19 / 6 / 1 / 50 / 620 / 27 / 1 / 6 / 8 |
| Mozzarella Sticks | 1 serving | only in draft B | not found | 310 / 16 / 8 / 1 / 35 / 940 / 30 / 4 / 1 / 13 |
| Caramel Sauce - at select locations | 1 serving | only in draft B | not found | 130 / 0.5 / 0 / 0 / 5 / 75 / 30 / 0 / 23 / 0 |
| Hatch Queso - at select locations | 1 serving | only in draft B | not found | 110 / 8 / 4.5 / 0 / 25 / 520 / 4 / 0 / 2 / 6 |
| Honey Mustard - at select locations | 1 serving | only in draft B | not found | 220 / 20 / 3 / 0 / 15 / 650 / 11 / 1 / 9 / 1 |
| New Belgium Fat Tire® Beer Cheese - at select locations | 1 serving | only in draft B | not found | 120 / 9 / 5 / 0 / 20 / 430 / 5 / 0 / 3 / 5 |
| Southwestern Ranch Dressing | 1 serving | only in draft B | not found | 340 / 37 / 6 / 0.5 / 15 / 800 / 2 / 0 / 1 / 1 |
| add Sautéed Mushrooms | 1 serving | only in draft B | not found | 40 / 2 / 0 / 0 / 0 / 220 / 4 / 1 / 1 / 2 |
| Buffalo Dry Rub | Regular | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 240 / 1 / 0 / 0 / 0 |
| Buffalo Dry Rub | Large | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 710 / 1 / 0 / 0 / 0 |
| Chipotle BBQ Dry Rub | Regular | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 180 / 1 / 0 / 0 / 0 |
| Chipotle BBQ Dry Rub | Large | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 540 / 2 / 0 / 1 / 0 |
| Desert Heat® Dry Rub | Regular | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 125 / 1 / 0 / 0 / 0 |
| Desert Heat® Dry Rub | Large | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 380 / 2 / 0 / 1 / 0 |
| Lemon Pepper Dry Rub | Regular | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 150 / 0 / 0 / 0 / 0 |
| Lemon Pepper Dry Rub | Large | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 440 / 1 / 0 / 0 / 0 |
| Salt & Vinegar Dry Rub | Regular | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 270 / 0 / 0 / 0 / 0 |
| Salt & Vinegar Dry Rub | Large | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 800 / 1 / 0 / 1 / 0 |
| Chocolate Sauce | 1 serving | only in draft B | not found | 45 / 0 / 0 / 0 / 0 / 20 / 11 / 0 / 10 / 0 |
| Maraschino Cherry | 1 serving | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 0 / 1 / 0 / 1 / 0 |
| Vanilla Ice Cream | 1 serving | only in draft B | not found | 160 / 9 / 5 / 0 / 35 / 50 / 17 / 0 / 14 / 3 |
| Whipped Cream | 1 serving | only in draft B | not found | 40 / 4.5 / 2.5 / 0 / 15 / 0 / 0 / 0 / 0 / 0 |
| American Breakfast | With Bacon | only in draft B | not found | 590 / 32 / 13 / 0 / 580 / 6870 / 40 / 2 / 3 / 33 |
| American Breakfast | With Sausage | only in draft B | not found | 660 / 42 / 16 / 0 / 595 / 6730 / 40 / 2 / 2 / 29 |
| B-Dubs Breakfast Bowl | 1 serving | only in draft B | not found | 1250 / 85 / 33 / 3.5 / 465 / 2860 / 77 / 1 / 2 / 45 |
| Add Boneless | 1 serving | only in draft B | not found | 240 / 12 / 5 / 1 / 55 / 840 / 14 / 0 / 0 / 19 |
| Bacon, Egg & Cheese Sandwich | 1 serving | only in draft B | not found | 580 / 33 / 16 / 0 / 405 / 1550 / 37 / 2 / 6 / 30 |
| Boneless Breakfast Wrap | 1 serving | only in draft B | not found | 1220 / 74 / 26 / 1.5 / 460 / 3360 / 85 / 0 / 6 / 51 |
| Breakfast Sandwich | With Bacon | only in draft B | not found | 560 / 31 / 13 / 0 / 580 / 6960 / 35 / 2 / 6 / 34 |
| Breakfast Sandwich | With Sausage | only in draft B | not found | 640 / 41 / 16 / 0 / 595 / 6820 / 35 / 2 / 5 / 31 |
| Breakfast Wrap | With Bacon | only in draft B | not found | 690 / 36 / 14 / 0 / 580 / 7350 / 52 / 1 / 3 / 38 |
| Breakfast Wrap | With Sausage | only in draft B | not found | 770 / 46 / 17 / 0 / 595 / 7220 / 52 / 1 / 3 / 34 |
| Asian Zing | 8 fl oz | only in draft B | not found | 690 / 1.5 / 0 / 0 / 0 / 4580 / 166 / 4 / 153 / 3 |
| Black Garlic Glaze | 8 fl oz | only in draft B | not found | 460 / 0.5 / 0 / 0 / 0 / 3340 / 111 / 2 / 99 / 3 |
| Blazin" Knockout | 8 fl oz | only in draft B | not found | 410 / 16 / 2 / 0 / 0 / 7300 / 64 / 4 / 51 / 2 |
| Buffalo Ranch | 8 fl oz | only in draft B | not found | 440 / 41 / 8 / 0.5 / 55 / 6870 / 14 / 4 / 2 / 3 |
| Caribbean Jerk | 8 fl oz | only in draft B | not found | 600 / 21 / 4 / 0 / 0 / 2640 / 103 / 4 / 92 / 3 |
| Golden Fire | 8 fl oz | only in draft B | not found | 500 / 10 / 1 / 0 / 0 / 4070 / 101 / 5 / 89 / 5 |
| Honey BBQ | 8 fl oz | only in draft B | not found | 540 / 0.5 / 0 / 0 / 0 / 3310 / 134 / 2 / 110 / 2 |
| Honey Garlic | 8 fl oz | only in draft B | not found | 660 / 3.5 / 0.5 / 0 / 0 / 5640 / 157 / 1.76 / 137 / 3 |
| Hot | 8 fl oz | only in draft B | not found | 370 / 32 / 5 / 0 / 0 / 8810 / 15 / 3 / 1 / 3 |
| Hot BBQ | 8 fl oz | only in draft B | not found | 290 / 13 / 2 / 0 / 0 / 5370 / 40 / 4 / 27 / 3 |
| Jammin' Jalapeno | 8 fl oz | only in draft B | not found | 720 / 0 / 0 / 0 / 0 / 5440 / 160 / 0 / 128 / 0 |
| Lemon Pepper | 8 fl oz | only in draft B | not found | 1210 / 124 / 24 / 2 / 90 / 4520 / 21 / 4 / 10 / 2 |
| Mango Habanero™ | 8 fl oz | only in draft B | not found | 600 / 4.5 / 0.5 / 0 / 0 / 3470 / 141 / 3 / 105 / 2 |
| Medium | 8 fl oz | only in draft B | not found | 260 / 22 / 4 / 0 / 45 / 8700 / 10 / 1 / 0 / 3 |
| Mild | 8 fl oz | only in draft B | not found | 390 / 37 / 6 / 0.5 / 45 / 7390 / 11 / 1 / 0 / 2 |
| Original Buffalo | 8 fl oz | only in draft B | not found | 890 / 95 / 18 / 1 / 0 / 7900 / 9 / 1 / 1 / 2 |
| Parmesan Garlic | 8 fl oz | only in draft B | not found | 1030 / 101 / 19 / 1.5 / 95 / 5000 / 24 / 3 / 9 / 9 |
| Spicy Garlic | 8 fl oz | only in draft B | not found | 370 / 32 / 6 / 0 / 55 / 9060 / 15 / 1 / 0 / 3 |
| Sweet BBO | 8 fl oz | only in draft B | not found | 390 / 0.5 / 0 / 0 / 0 / 4470 / 93 / 4 / 68 / 3 |
| Teriyaki | 8 fl oz | only in draft B | not found | 540 / 0 / 0 / 0 / 0 / 5800 / 120 / 2 / 94 / 15 |
| Thai Curry | 8 fl oz | only in draft B | not found | 1170 / 115 / 22 / 1.5 / 70 / 7220 / 30 / 5 / 18 / 5 |
| Wild | 8 fl oz | only in draft B | not found | 390 / 33 / 5 / 0 / 0 / 6820 / 20 / 3 / 7 / 3 |
| B-Dubs Dip | 8 fl oz | only in draft B | not found | 1050 / 103 / 17 / 1.5 / 80 / 3200 / 26 / 2 / 19 / 4 |
| Carrots and Celery Sticks | 1 serving | only in draft B | not found | 130 / 0 / 0 / 0 / 0 / 340 / 28 / 9 / 17 / 4 |
| Bleu Cheese Dressing | 8 fl oz | only in draft B | not found | 1130 / 117 / 23 / 2 / 140 / 2190 / 9 / 1 / 7 / 8 |
| Ranch Dressing | 8 fl oz | only in draft B | not found | 1270 / 136 / 21 / 2 / 30 / 2040 / 9 / 1 / 7 / 2 |
| Pickles | 6 ea | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 400 / 1 / 0 / 1 / 0 |
| Deluxe Shirley Temple | 1 serving | only in draft B | not found | 310 / 3 / 0 / 0 / 0 / 30 / 71 / 0 / 70 / 0 |
| Orange Cream | 1 serving | only in draft B | not found | 270 / 6 / 4 / 0 / 20 / 60 / 55 / 0 / 54 / 1 |
| Passionita | 1 serving | only in draft B | not found | 120 / 0 / 0 / 0 / 0 / 100 / 29 / 0 / 26 / 0 |
| Peach Tea | 1 serving | only in draft B | not found | 130 / 0 / 0 / 0 / 0 / 25 / 34 / 0 / 32 / 0 |
| Red Bull Watermelon Punch | 1 serving | only in draft B | not found | 290 / 0 / 0 / 0 / 0 / 110 / 73 / 0 / 67 / 1 |
| Spicy Marg-No-Rita | 1 serving | only in draft B | not found | 100 / 0 / 0 / 0 / 0 / 95 / 24 / 1 / 19 / 0 |
| Strawberry Dirty Soda | 1 serving | only in draft B | not found | 280 / 3 / 0 / 0 / 0 / 40 / 65 / 0 / 64 / 0 |
| Strawberry Lemonade | 1 serving | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 115 / 46 / 1 / 43 / 0 |
| Diet Pepsi | 20 oz cup | only in draft B | not found | 0 / – / – / – / – / – / – / – / – / – |
| Dr Pepper | 20 oz cup | only in draft B | not found | 100 / – / – / – / – / – / – / – / – / – |
| Mountain Dew | 20 oz cup | only in draft B | not found | 110 / – / – / – / – / – / – / – / – / – |
| Mug® Root Beer | 20 oz cup | only in draft B | not found | 100 / – / – / – / – / – / – / – / – / – |
| Pepsi | 20 oz cup | only in draft B | not found | 100 / – / – / – / – / – / – / – / – / – |
| Pepsi Zero | 20 oz cup | only in draft B | not found | 0 / – / – / – / – / – / – / – / – / – |
| Starry | 20 oz cup | only in draft B | not found | 100 / – / – / – / – / – / – / – / – / – |
| Tropicana® Lemonade | 20 oz cup | only in draft B | not found | 100 / – / – / – / – / – / – / – / – / – |
| Fresh-Brewed Lipton® Unsweetened Iced Tea | 20 oz cup | only in draft B | not found | 0 / – / – / – / – / – / – / – / – / – |
| Sweet Tea | 20 oz cup | only in draft B | not found | 110 / – / – / – / – / – / – / – / – / – |
| Lipton Brisk® Iced Tea | 20 oz cup | only in draft B | not found | 70 / – / – / – / – / – / – / – / – / – |
| Coffee | 1 serving | only in draft B | not found | 0 / – / – / – / – / – / – / – / – / – |
| Aquafina Bottled Water | 1 serving | only in draft B | not found | 0 / – / – / – / – / – / – / – / – / – |
| bubly™ sparkling water | 1 serving | only in draft B | not found | 0 / – / – / – / – / – / – / – / – / – |
| Mug® Root Beer Bottle | 1 serving | only in draft B | not found | 260 / – / – / – / – / – / – / – / – / – |
| Lowfat Milk | 1 serving | only in draft B | not found | 110 / – / – / – / – / – / – / – / – / – |
| Chocolate Milk | 1 serving | only in draft B | not found | 140 / – / – / – / – / – / – / – / – / – |
| Apple Juice | 1 serving | only in draft B | not found | 80 / – / – / – / – / – / – / – / – / – |
| Orange Juice | 1 serving | only in draft B | not found | 80 / – / – / – / – / – / – / – / – / – |
| Black Cherry | 1 serving | only in draft B | not found | 50 / – / – / – / – / – / – / – / – / – |
| Mango | 1 serving | only in draft B | not found | 50 / – / – / – / – / – / – / – / – / – |
| Passion Fruit | 1 serving | only in draft B | not found | 50 / – / – / – / – / – / – / – / – / – |
| Peach | 1 serving | only in draft B | not found | 50 / – / – / – / – / – / – / – / – / – |
| Pineapple | 1 serving | only in draft B | not found | 50 / – / – / – / – / – / – / – / – / – |
| Strawberry | 1 serving | only in draft B | not found | 50 / – / – / – / – / – / – / – / – / – |
| Watermelon | 1 serving | only in draft B | not found | 50 / – / – / – / – / – / – / – / – / – |
| Ginger Beer | 1 serving | only in draft B | not found | 80 / – / – / – / – / – / – / – / – / – |
| Tonic | 1 serving | only in draft B | not found | 50 / – / – / – / – / – / – / – / – / – |
| Club Soda | 1 serving | only in draft B | not found | 0 / – / – / – / – / – / – / – / – / – |
| O Hibiscus Ginger Beer | 1 serving | only in draft B | not found | 90 / – / – / – / – / – / – / – / – / – |
| Red Bull® | 1 serving | only in draft B | not found | 110 / – / – / – / – / – / – / – / – / – |
| Red Bull® Sugarfree | 1 serving | only in draft B | not found | 10 / – / – / – / – / – / – / – / – / – |
| Red Bull® Peach Edition (White Peach) | 1 serving | only in draft B | not found | 110 / – / – / – / – / – / – / – / – / – |
| Red Bull® Sea Blue Edition (Juneberry) | 1 serving | only in draft B | not found | 110 / – / – / – / – / – / – / – / – / – |
| Red Bull® Red Edition (Watermelon) | 1 serving | only in draft B | not found | 110 / – / – / – / – / – / – / – / – / – |
| B-Dubs Bloody Mary | 1 serving | only in draft B | not found | 140 / – / – / – / – / – / – / – / – / – |
| Blue Long Island Iced Tea | 1 serving | only in draft B | not found | 220 / – / – / – / – / – / – / – / – / – |
| Blue Watermelon Cooler | 1 serving | only in draft B | not found | 190 / – / – / – / – / – / – / – / – / – |
| Boozy Dunkin' 'Cold Brew | 1 serving | only in draft B | not found | 300 / – / – / – / – / – / – / – / – / – |
| Bourbon Old Fashioned | 1 serving | only in draft B | not found | 200 / – / – / – / – / – / – / – / – / – |
| Buffalo Trace Old Fashioned | 1 serving | only in draft B | not found | 220 / – / – / – / – / – / – / – / – / – |
| Buffalo Zoo | 1 serving | only in draft B | not found | 240 / – / – / – / – / – / – / – / – / – |
| Caesar | 1 serving | only in draft B | not found | 180 / – / – / – / – / – / – / – / – / – |
| Classic Espresso Martini | 1 serving | only in draft B | not found | 210 / – / – / – / – / – / – / – / – / – |
| House Margarita | 1 serving | only in draft B | not found | 230 / – / – / – / – / – / – / – / – / – |
| Old Fashioned | 1 serving | only in draft B | not found | 220 / – / – / – / – / – / – / – / – / – |
| Mezcal Margarita | 1 serving | only in draft B | not found | 230 / – / – / – / – / – / – / – / – / – |
| Modelo Michelada | 1 serving | only in draft B | not found | 140 / – / – / – / – / – / – / – / – / – |
| Patrón Margarita | 1 serving | only in draft B | not found | 220 / – / – / – / – / – / – / – / – / – |
| Red Bull® Sunrise | 1 serving | only in draft B | not found | 400 / – / – / – / – / – / – / – / – / – |
| Red, White & Booze | 1 serving | only in draft B | not found | 380 / – / – / – / – / – / – / – / – / – |
| Salted Caramel Espresso Martini | 1 serving | only in draft B | not found | 330 / – / – / – / – / – / – / – / – / – |
| Spicy Margarita | 1 serving | only in draft B | not found | 230 / – / – / – / – / – / – / – / – / – |
| Spicy Pickle Bloody Mary | 1 serving | only in draft B | not found | 140 / – / – / – / – / – / – / – / – / – |
| Strawberry Margarita | 1 serving | only in draft B | not found | 260 / – / – / – / – / – / – / – / – / – |
| Tito's® Spiked Lemonade | 1 serving | only in draft B | not found | 270 / – / – / – / – / – / – / – / – / – |
| Top Shelf Long Island Iced Tea | 1 serving | only in draft B | not found | 290 / – / – / – / – / – / – / – / – / – |
| Tropical Margarita | 1 serving | only in draft B | not found | 280 / – / – / – / – / – / – / – / – / – |
| Barefoot, Pinot Grigio | 6.7 fl oz | only in draft B | not found | 160 / – / – / – / – / – / – / – / – / – |
| Butter, Chardonnay | 8.4 fl oz | only in draft B | not found | 210 / – / – / – / – / – / – / – / – / – |
| Josh, Chardonnay | 12.7 fl oz | only in draft B | not found | 310 / – / – / – / – / – / – / – / – / – |
| Barefoot, Cabernet Sauvignon | 6.7 fl oz | only in draft B | not found | 160 / – / – / – / – / – / – / – / – / – |
| Archer Roose, Pinot Noir | 8.4 fl oz | only in draft B | not found | 200 / – / – / – / – / – / – / – / – / – |
| Josh, Cabernet Sauvignon | 12.7 fl oz | only in draft B | not found | 310 / – / – / – / – / – / – / – / – / – |
| Francis Coppola, Prosecco | 187 mL | only in draft B | not found | 160 / – / – / – / – / – / – / – / – / – |
| Graham & Fish, Moscato w/ Bubbles | 250 mL | only in draft B | not found | 210 / – / – / – / – / – / – / – / – / – |

## Spot check (8 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Southwestern Ranch | Large | 1360 / 146 / 24 / 2 / 50 / 3180 / 9 / 1 / 6 / 3 |
| Chips & Dip Trio | 1 serving | 1490 / 87 / 33 / 2.5 / 105 / 4210 / 155 / 26 / 20 / 37 |
| Kickin' Chicken Sandwich | 1 serving | 970 / 64 / 18 / 1 / 135 / 3080 / 62 / 5 / 7 / 39 |
| House-Made Guacamole | 1 serving | 100 / 10 / 1.5 / 0 / 0 / 125 / 6 / 4 / 0 / 2 |
| New Belgium Fat Tire® Beer Cheese | Regular | 120 / 9 / 5 / 0 / 20 / 430 / 5 / 0 / 3 / 5 |
| NEW Crispy Battered French Fries | 1 serving | 370 / 18 / 7 / 1 / 15 / 950 / 47 / 2 / 0 / 5 |
| Bleu Cheese Dressing | Large | 1130 / 117 / 23 / 2 / 140 / 2190 / 9 / 1 / 7 / 8 |
| Lite Balsamic with Olive Oil Vinaigrette | 2 fl oz | 140 / 12 / 2 / 0 / 0 / 540 / 6 / 0 / 4 / 0 |
