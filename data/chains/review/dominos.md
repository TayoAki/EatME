# Domino's: lines for a person

Guide: https://cache.dominos.com/olo/6_48_1/assets/build/market/US/_en/pdf/DominosNutritionGuide.pdf (read 2026-10-22). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (146)

The last column comes from `npm run chains:evidence`: whether a draft's numbers sit right after the item's name in the guide text the drafts read. It can't read sizes or sections (one draft called a single 78 g cookie a "6 pack"): check those against the guide, then fix the line and set its check to `person`.

Fix each line in `menus/dominos.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B | In the guide text (no AI) |
| --- | --- | --- | --- | --- | --- |
| Buffalo Chicken | S (1/4 pizza) | only in draft A | 370 / 17 / 8 / 0 / 45 / 950 / 37 / 1 / 3 / 16 | not found | A: numbers found after the name (line 839); check the size |
| Buffalo Chicken | M (1/5 pizza) | only in draft A | 410 / 20 / 10 / 0.5 / 60 / 1020 / 38 / 1 / 3 / 19 | not found | A: numbers found after the name (line 840); check the size |
| Buffalo Chicken | L (1/8 pizza) | only in draft A | 350 / 16 / 8 / 0 / 45 / 840 / 33 / 1 / 2 / 15 | not found | A: numbers found after the name (line 841); check the size |
| Buffalo Chicken | XL (1/8 pizza) | only in draft A | 450 / 20 / 10 / 0.5 / 60 / 1090 / 44 / 1 / 3 / 20 | not found | A: numbers found after the name (line 842); check the size |
| Cali Chicken Bacon Ranch | S (1/4 pizza) | only in draft A | 420 / 22 / 8 / 0 / 50 / 900 / 36 / 1 / 3 / 17 | not found | A: numbers found after the name (line 843); check the size |
| Cali Chicken Bacon Ranch | M (1/5 pizza) | only in draft A | 480 / 27 / 10 / 0.5 / 60 / 1060 / 37 / 1 / 3 / 19 | not found | A: numbers found after the name (line 844); check the size |
| Cali Chicken Bacon Ranch | L (1/8 pizza) | only in draft A | 410 / 23 / 8 / 0 / 50 / 890 / 33 / 1 / 3 / 16 | not found | A: numbers found after the name (line 845); check the size |
| Cali Chicken Bacon Ranch | XL (1/8 pizza) | only in draft A | 530 / 29 / 11 / 0.5 / 65 / 1160 / 44 / 1 / 3 / 22 | not found | A: numbers found after the name (line 846); check the size |
| Cheeseburger | S (1/4 pizza) | only in draft A | 400 / 20 / 10 / 0.5 / 50 / 910 / 38 / 1 / 4 / 16 | not found | A: numbers found after the name (line 847); check the size |
| Cheeseburger | M (1/5 pizza) | only in draft A | 450 / 24 / 12 / 1 / 60 / 1070 / 40 / 1 / 5 / 18 | not found | A: numbers found after the name (line 848); check the size |
| Cheeseburger | L (1/8 pizza) | only in draft A | 380 / 19 / 9 / 0.5 / 50 / 880 / 35 / 1 / 4 / 15 | not found | A: numbers found after the name (line 849); check the size |
| Cheeseburger | XL (1/8 pizza) | only in draft A | 490 / 24 / 12 / 1 / 65 / 1130 / 46 / 2 / 5 / 20 | not found | A: numbers found after the name (line 850); check the size |
| Chicken Taco | S (1/4 pizza) | only in draft A | 380 / 17 / 8 / 0 / 45 / 830 / 37 / 1 / 3 / 16 | not found | A: numbers found after the name (line 851); check the size |
| Chicken Taco | M (1/5 pizza) | only in draft A | 420 / 20 / 10 / 0.5 / 60 / 950 / 38 / 1 / 3 / 19 | not found | A: numbers found after the name (line 852); check the size |
| Chicken Taco | L (1/8 pizza) | only in draft A | 350 / 16 / 8 / 0 / 45 / 780 / 34 / 1 / 3 / 16 | not found | A: numbers found after the name (line 853); check the size |
| Chicken Taco | XL (1/8 pizza) | only in draft A | 450 / 20 / 10 / 0.5 / 60 / 990 / 45 / 2 / 3 / 20 | not found | A: numbers found after the name (line 854); check the size |
| Deluxe | S (1/4 pizza) | only in draft A | 330 / 14 / 6 / 0 / 25 / 660 / 38 / 2 / 4 / 13 | not found | A: numbers found after the name (line 855); check the size |
| Deluxe | M (1/5 pizza) | only in draft A | 360 / 16 / 6 / 0 / 30 / 730 / 39 / 2 / 4 / 14 | not found | A: numbers found after the name (line 856); check the size |
| Deluxe | L (1/8 pizza) | only in draft A | 310 / 13 / 5 / 0 / 25 / 640 / 35 / 2 / 4 / 12 | not found | A: numbers found after the name (line 857); check the size |
| Deluxe | XL (1/8 pizza) | only in draft A | 410 / 18 / 7 / 0 / 35 / 850 / 46 / 2 / 5 / 16 | not found | A: numbers found after the name (line 858); check the size |
| ExtravaganZZa | S (1/4 pizza) | only in draft A | 410 / 20 / 8 / 0 / 45 / 950 / 39 / 2 / 4 / 17 | not found | A: numbers found after the name (line 859); check the size |
| ExtravaganZZa | M (1/5 pizza) | only in draft A | 440 / 22 / 9 / 0.5 / 50 / 1080 / 40 / 2 / 4 / 19 | not found | A: numbers found after the name (line 860); check the size |
| ExtravaganZZa | L (1/8 pizza) | only in draft A | 390 / 19 / 8 / 0 / 45 / 940 / 36 / 2 / 4 / 16 | not found | A: numbers found after the name (line 861); check the size |
| ExtravaganZZa | XL (1/8 pizza) | only in draft A | 510 / 25 / 11 / 0.5 / 60 / 1270 / 47 / 2 / 5 / 22 | not found | A: numbers found after the name (line 862); check the size |
| Honolulu Hawaiian | S (1/4 pizza) | only in draft A | 360 / 15 / 7 / 0 / 35 / 790 / 38 / 2 / 5 / 15 | not found | A: numbers found after the name (line 863); check the size |
| Honolulu Hawaiian | M (1/5 pizza) | only in draft A | 380 / 17 / 8 / 0 / 40 / 900 / 40 / 2 / 5 / 17 | not found | A: numbers found after the name (line 864); check the size |
| Honolulu Hawaiian | L (1/8 pizza) | only in draft A | 330 / 14 / 7 / 0 / 35 / 770 / 35 / 2 / 5 / 14 | not found | A: numbers found after the name (line 865); check the size |
| Honolulu Hawaiian | XL (1/8 pizza) | only in draft A | 430 / 18 / 8 / 0 / 45 / 1020 / 46 / 2 / 6 / 19 | not found | A: numbers found after the name (line 866); check the size |
| MeatZZa | S (1/4 pizza) | only in draft A | 400 / 19 / 8 / 0 / 45 / 920 / 38 / 2 / 3 / 16 | not found | A: numbers found after the name (line 867); check the size |
| MeatZZa | M (1/5 pizza) | only in draft A | 430 / 21 / 9 / 0.5 / 50 / 1030 / 38 / 2 / 4 / 18 | not found | A: numbers found after the name (line 868); check the size |
| MeatZZa | L (1/8 pizza) | only in draft A | 370 / 18 / 8 / 0 / 45 / 890 / 34 / 1 / 3 / 16 | not found | A: numbers found after the name (line 869); check the size |
| MeatZZa | XL (1/8 pizza) | only in draft A | 490 / 24 / 10 / 0.5 / 60 / 1210 / 45 / 2 / 4 / 21 | not found | A: numbers found after the name (line 870); check the size |
| Memphis BBQ Chicken | S (1/4 pizza) | only in draft A | 360 / 15 / 7 / 0 / 40 / 670 / 41 / 1 / 7 / 16 | not found | A: numbers found after the name (line 871); check the size |
| Memphis BBQ Chicken | M (1/5 pizza) | only in draft A | 410 / 17 / 8 / 0 / 50 / 780 / 44 / 1 / 8 / 18 | not found | A: numbers found after the name (line 872); check the size |
| Memphis BBQ Chicken | L (1/8 pizza) | only in draft A | 350 / 14 / 7 / 0 / 45 / 670 / 39 / 1 / 7 / 15 | not found | A: numbers found after the name (line 873); check the size |
| Memphis BBQ Chicken | XL (1/8 pizza) | only in draft A | 460 / 19 / 9 / 0.5 / 55 / 860 / 51 / 2 / 9 / 20 | not found | A: numbers found after the name (line 874); check the size |
| Pacific Veggie | S (1/4 pizza) | only in draft A | 330 / 13 / 6 / 0 / 30 / 630 / 38 / 2 / 3 / 13 | not found | A: numbers found after the name (line 875); check the size |
| Pacific Veggie | M (1/5 pizza) | only in draft A | 350 / 15 / 7 / 0 / 35 / 740 / 39 / 2 / 4 / 14 | not found | A: numbers found after the name (line 876); check the size |
| Roasted Red Peppers | 1/8 of pizza | only in draft A | 0 / 0 / – / 0 / 0 / 10 / 0 / 0 / 0 / 0 | not found | A: numbers found after the name (line 82); check the size, mostly zeros: look |
| Garlic Oil Blend (on crust) | 1/8 of pizza | only in draft A | 10 / 1 / – / 0 / 0 / 20 / 0 / 0 / 0 / 0 | not found | A: numbers found after the name (line 935); check the size |
| HAM & BACON BREAKFAST PIZZA | 1/8 of pizza | the guide gives no saturated_fat_g | 260 / 12 / – / 0 / 30 / 600 / 22 / 1 / 2 / 12 | 260 / 12 / – / 0 / 30 / 600 / 22 / 1 / 2 / 12 | A: numbers found after the name (line 911); check the size; B: numbers found after the name (line 911); check the size |
| Breakfast Pizza Base | 1/8 of pizza | the guide gives no saturated_fat_g | 230 / 10 / – / 0 / 20 / 410 / 22 / 1 / 1 / 9 | 230 / 10 / – / 0 / 20 / 410 / 22 / 1 / 1 / 9 | A: numbers found after the name (line 913); check the size; B: numbers found after the name (line 913); check the size |
| Bacon | 1/8 of pizza | the guide gives no saturated_fat_g | 20 / 1.5 / – / 0 / 5 / 85 / 0 / 0 / 0 / 2 | 20 / 1.5 / – / 0 / 5 / 85 / 0 / 0 / 0 / 2 | A: numbers found after the name (line 914); check the size; B: numbers found after the name (line 914); check the size |
| Ham | 1/8 of pizza | the guide gives no saturated_fat_g | 10 / 0 / – / 0 / 5 / 100 / 0 / 0 / 0 / 1 | 10 / 0 / – / 0 / 5 / 100 / 0 / 0 / 0 / 1 | A: numbers found after the name (line 915); check the size; B: numbers found after the name (line 915); check the size |
| BREAKFAST PIZZA | 1/8 of pizza | the guide gives no saturated_fat_g | 240 / 11 / – / 0 / 30 / 520 / 23 / 1 / 1 / 12 | 240 / 11 / – / 0 / 30 / 520 / 23 / 1 / 1 / 12 | A: numbers found after the name (line 925); check the size; B: numbers found after the name (line 925); check the size |
| Green Peppers | 1/8 of pizza | the guide gives no saturated_fat_g | 0 / 0 / – / 0 / 0 / 0 / 0 / 0 / 0 / 0 | 0 / 0 / – / 0 / 0 / 0 / 0 / 0 / 0 / 0 | A: numbers found after the name (line 72); check the size, mostly zeros: look; B: numbers found after the name (line 72); check the size, mostly zeros: look |
| Onions | 1/8 of pizza | the guide gives no saturated_fat_g | 0 / 0 / – / 0 / 0 / 0 / 0 / 0 / 0 / 0 | 0 / 0 / – / 0 / 0 / 0 / 0 / 0 / 0 / 0 | A: numbers found after the name (line 77); check the size, mostly zeros: look; B: numbers found after the name (line 77); check the size, mostly zeros: look |
| Hand Tossed | 1/2 of pizza | only in draft B | not found | 160 / 2 / 0 / 0 / 0 / 160 / 30 / 1 / 1 / 5 | B: numbers found after the name (line 43); check the size |
| Pizza Sauce | 1/2 of pizza | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 60 / 2 / 0 / 1 / 0 | B: numbers found after the name (line 48); check the size |
| Alfredo Sauce | 1/2 of pizza | only in draft B | not found | 25 / 2 / 1.5 / 0 / 5 / 70 / 1 / 0 / 0 / 0 | B: numbers found after the name (line 49); check the size |
| Honey BBQ | 1/2 of pizza | only in draft B | not found | 20 / 0 / 0 / 0 / 0 / 75 / 5 / 0 / 4 / 0 | B: numbers found after the name (line 50); check the size |
| Garlic Parm (White Sauce) | 1/2 of pizza | only in draft B | not found | 50 / 5 / 1 / 0 / 5 / 85 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 51); check the size |
| Ranch | 1/2 of pizza | only in draft B | not found | 50 / 5 / 1 / 0 / 5 / 125 / 1 / 0 / 0 / 0 | B: numbers found after the name (line 52); check the size |
| Hearty Marinara | 1/2 of pizza | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 100 / 2 / 0 / 1 / 0 | B: numbers found after the name (line 53); check the size |
| Regular Cheese | 1/2 of pizza | only in draft B | not found | 70 / 5 / 3 / 0 / 20 / 200 / 1 / 0 / 0 / 4 | B: numbers found after the name (line 55); check the size |
| Light Cheese | 1/2 of pizza | only in draft B | not found | 50 / 3.5 / 2.5 / 0 / 15 / 160 / 1 / 0 / 0 / 3 | B: numbers found after the name (line 56); check the size |
| Extra Cheese | 1/2 of pizza | only in draft B | not found | 100 / 7 / 4.5 / 0 / 25 / 300 / 2 / 0 / 0 / 6 | B: numbers found after the name (line 57); check the size |
| Double Cheese | 1/2 of pizza | only in draft B | not found | 100 / 7 / 4.5 / 0 / 25 / 300 / 2 / 0 / 0 / 6 | B: numbers found after the name (line 58); check the size |
| American Cheese | 1/2 of pizza | only in draft B | not found | 30 / 2 / 1.5 / 0 / 5 / 125 / 1 / 0 / 0 / 1 | B: numbers found after the name (line 65); check the size |
| Bacon | 1/2 of pizza | only in draft B | not found | 35 / 3 / 1 / 0 / 5 / 130 / 0 / 0 / 0 / 2 | B: numbers found after the name (line 66); check the size |
| Beef | 1/2 of pizza | only in draft B | not found | 25 / 2 / 1 / 0 / 5 / 50 / 0 / 0 / 0 / 1 | B: numbers found after the name (line 67); check the size |
| Black Olives | 1/2 of pizza | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 25 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 68); check the size, mostly zeros: look |
| Cheddar Cheese | 1/2 of pizza | only in draft B | not found | 10 / 1 / 0.5 / 0 / 5 / 20 / 0 / 0 / 0 / 1 | B: numbers found after the name (line 69); check the size |
| Premium Chicken | 1/2 of pizza | only in draft B | not found | 15 / 0 / 0 / 0 / 5 / 55 / 0 / 0 / 0 / 2 | B: numbers found after the name (line 70); check the size |
| Feta Cheese | 1/2 of pizza | only in draft B | not found | 10 / 0.5 / 0 / 0 / 0 / 35 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 71); check the size |
| Green Peppers | 1/2 of pizza | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 72); check the size, mostly zeros: look |
| Ham | 1/2 of pizza | only in draft B | not found | 10 / 0.5 / 0 / 0 / 5 / 135 / 0 / 0 / 0 / 1 | B: numbers found after the name (line 73); check the size |
| Banana Peppers | 1/2 of pizza | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 45 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 74); check the size, mostly zeros: look |
| Jalapeno Peppers | 1/2 of pizza | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 50 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 75); check the size, mostly zeros: look |
| Mushrooms | 1/2 of pizza | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 76); check the size, mostly zeros: look |
| Onions | 1/2 of pizza | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 77); check the size, mostly zeros: look |
| Pepperoni | 1/2 of pizza | only in draft B | not found | 30 / 3 / 1 / 0 / 5 / 135 / 0 / 0 / 0 / 1 | B: numbers found after the name (line 78); check the size |
| Philly Steak | 1/2 of pizza | only in draft B | not found | 15 / 1 / 0 / 0 / 5 / 115 / 1 / 0 / 0 / 1 | B: numbers found after the name (line 79); check the size |
| Pineapple | 1/2 of pizza | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 0 / 1 / 0 / 1 / 0 | B: numbers found after the name (line 80); check the size |
| Shredded Provolone Cheese | 1/2 of pizza | only in draft B | not found | 10 / 1 / 0.5 / 0 / 5 / 25 / 0 / 0 / 0 / 1 | B: numbers found after the name (line 81); check the size |
| Roasted Red Peppers | 1/2 of pizza | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 10 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 82); check the size, mostly zeros: look |
| Salami | 1/2 of pizza | only in draft B | not found | 20 / 1.5 / 0.5 / 0 / 5 / 85 / 0 / 0 / 0 / 1 | B: numbers found after the name (line 83); check the size |
| Italian Sausage | 1/2 of pizza | only in draft B | not found | 30 / 2.5 / 1 / 0 / 5 / 45 / 0 / 0 / 0 / 1 | B: numbers found after the name (line 84); check the size |
| Shredded Parmesan Asiago | 1/2 of pizza | only in draft B | not found | 10 / 1 / 0 / 0 / 0 / 25 / 0 / 0 / 0 / 1 | B: numbers found after the name (line 85); check the size |
| Spinach | 1/2 of pizza | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 86); check the size, mostly zeros: look |
| Diced Tomatoes | 1/2 of pizza | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 10 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 87); check the size, mostly zeros: look |
| Hot Buffalo Sauce | 1/2 of pizza | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 200 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 88); check the size, mostly zeros: look |
| Anchovies* | 1/2 of pizza | only in draft B | not found | 15 / 0 / 0 / 0 / 5 / 540 / 0 / 0 / 0 / 3 | B: numbers found after the name (line 89); check the size |
| BBQ Chicken Topping* | 1/2 of pizza | only in draft B | not found | 10 / 0 / 0 / 0 / 5 / 75 / 1 / 0 / 1 / 1 | B: numbers found after the name (line 90); check the size |
| Chorizo* | 1/2 of pizza | only in draft B | not found | 15 / 1 / 0 / 0 / 5 / 55 / 0 / 0 / 0 / 1 | B: numbers found after the name (line 91); check the size |
| Fresh Diced Tomatoes* | 1/2 of pizza | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 92); check the size, mostly zeros: look |
| Garlic* | 1/2 of pizza | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 0 / 1 / 0 / 0 / 0 | B: numbers found after the name (line 93); check the size, mostly zeros: look |
| Green Chile Peppers* | 1/2 of pizza | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 94); check the size, mostly zeros: look |
| Green Olives* | 1/2 of pizza | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 45 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 95); check the size, mostly zeros: look |
| Ham & Bacon Breakfast Pizza | 1 serving | only in draft B | not found | 330 / 15 / – / 0 / 35 / 730 / 32 / 1 / 2 / 16 | B: numbers found after the name (line 919); check the size |
| Roasted Red Peppers | 1 serving | only in draft B | not found | 0 / 0 / – / 0 / 10 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 82); check the size, mostly zeros: look |
| Garlic Oil Blend (on crust) | 1 serving | only in draft B | not found | 10 / 1 / – / 0 / 20 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 935); check the size |
| Hoagie Bun | 1 serving | only in draft B | not found | 190 / 3 / 1.5 / 0 / 0 / 370 / 34 / 1 / 2 / 7 | B: numbers found after the name (line 1128); check the size |
| Hoagie Beef Patty | 1 serving | only in draft B | not found | 140 / 10 / 3 / 0.5 / 35 / 450 / 2 / 1 / 1 / 10 | B: numbers found after the name (line 1129); check the size |
| Pizza Sauce (Robust Inspired Tomato Sauce) | One (1) Sauce | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 90 / 2 / 0 / 1 / 0 | B: numbers found after the name (line 1132); check the size |
| Ranch | One (1) Sauce | only in draft B | not found | 100 / 11 / 2 / 0 / 10 / 270 / 1 / 0 / 1 / 1 | B: numbers found after the name (line 1133); check the size |
| Honey BBQ | One (1) Sauce | only in draft B | not found | 40 / 0 / 0 / 0 / 0 / 170 / 10 / 0 / 9 / 0 | B: numbers found after the name (line 776); check the size |
| Hot Buffalo | One (1) Sauce | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 600 / 1 / 0 / 0 / 0 | B: numbers found after the name (line 1135); check the size |
| Mushroom Sauce | One (1) Sauce | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 170 / 2 / 0 / 0 / 0 | B: numbers found after the name (line 1136); check the size |
| Pizza Sauce (Robust Inspired Tomato Sauce) | Two (2) Sauces | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 60 / 2 / 0 / 1 / 0 | B: numbers found after the name (line 1138); check the size |
| Ranch | Two (2) Sauces | only in draft B | not found | 70 / 7 / 1 / 0 / 5 / 180 / 1 / 0 / 0 / 0 | B: numbers found after the name (line 117); check the size |
| Honey BBQ | Two (2) Sauces | only in draft B | not found | 25 / 0 / 0 / 0 / 0 / 110 / 7 / 0 / 6 / 0 | B: numbers found after the name (line 115); check the size |
| Hot Buffalo | Two (2) Sauces | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 400 / 1 / 0 / 0 / 0 | B: numbers found after the name (line 1141); check the size |
| Mushroom Sauce | Two (2) Sauces | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 115 / 1 / 0 / 0 / 0 | B: numbers found after the name (line 1142); check the size |
| Pizza Cheese | 1 serving | only in draft B | not found | 60 / 4 / 2.5 / 0 / 15 / 180 / 1 / 0 / 0 / 3 | B: numbers found after the name (line 1144); check the size |
| Garlic Oil Blend | 1 serving | only in draft B | not found | 25 / 3 / 0.5 / 0 / 0 / 55 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 1145); check the size |
| American Cheese | 1 - 3 Toppings | only in draft B | not found | 60 / 4 / 2.5 / 0 / 15 / 200 / 1 / 0 / 1 / 3 | B: numbers found after the name (line 1149); check the size |
| Anchovies | 1 - 3 Toppings | only in draft B | not found | 15 / 0 / 0 / 0 / 5 / 540 / 0 / 0 / 0 / 3 | B: numbers found after the name (line 89); check the size |
| Bacon | 1 - 3 Toppings | only in draft B | not found | 35 / 2.5 / 1 / 0 / 5 / 130 / 0 / 0 / 0 / 2 | B: numbers found after the name (line 1151); check the size |
| Black Olives | 1 - 3 Toppings | only in draft B | not found | 15 / 1 / 0 / 0 / 0 / 55 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 396); check the size |
| Cheddar Cheese | 1 - 3 Toppings | only in draft B | not found | 40 / 3.5 / 2 / 0 / 10 / 70 / 1 / 0 / 0 / 2 | B: numbers found after the name (line 1153); check the size |
| Green Peppers | 1 - 3 Toppings | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 72); check the size, mostly zeros: look |
| Green Olives | 1 - 3 Toppings | only in draft B | not found | 10 / 1 / 0 / 0 / 0 / 115 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 424); check the size |
| Ham | 1 - 3 Toppings | only in draft B | not found | 10 / 0 / 0 / 0 / 5 / 100 / 0 / 0 / 0 / 1 | B: numbers found after the name (line 915); check the size |
| Banana Peppers | 1 - 3 Toppings | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 105 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 1157); check the size, mostly zeros: look |
| Jalapeno Peppers | 1 - 3 Toppings | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 110 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 1158); check the size, mostly zeros: look |
| Mushrooms | 1 - 3 Toppings | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 76); check the size, mostly zeros: look |
| Onions | 1 - 3 Toppings | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 0 / 1 / 0 / 0 / 0 | B: numbers found after the name (line 142); check the size, mostly zeros: look |
| Pepperoni | 1 - 3 Toppings | only in draft B | not found | 25 / 2 / 1 / 0 / 5 / 100 / 0 / 0 / 0 / 1 | B: numbers found after the name (line 1161); check the size |
| Pickles | 1 - 3 Toppings | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 100 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 1162); check the size, mostly zeros: look |
| Pineapple | 1 - 3 Toppings | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 0 / 1 / 0 / 1 / 0 | B: numbers found after the name (line 80); check the size |
| Shredded Provolone Cheese | 1 - 3 Toppings | only in draft B | not found | 25 / 2 / 1.5 / 0 / 5 / 60 / 0 / 0 / 0 / 1 | B: numbers found after the name (line 146); check the size |
| Roasted Red Peppers | 1 - 3 Toppings | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 15 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 946); check the size, mostly zeros: look |
| Salami | 1 - 3 Toppings | only in draft B | not found | 20 / 1.5 / 0.5 / 0 / 5 / 85 / 0 / 0 / 0 / 1 | B: numbers found after the name (line 83); check the size |
| Shredded Parmesan Asiago | 1 - 3 Toppings | only in draft B | not found | 25 / 2 / 1 / 0 / 5 / 60 / 0 / 0 / 0 / 2 | B: numbers found after the name (line 150); check the size |
| Diced Tomatoes | 1 - 3 Toppings | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 20 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 1168); check the size, mostly zeros: look |
| American Cheese | 4 - 5 Toppings | only in draft B | not found | 60 / 4 / 2.5 / 0 / 15 / 200 / 1 / 0 / 1 / 3 | B: numbers found after the name (line 1149); check the size |
| Anchovies | 4 - 5 Toppings | only in draft B | not found | 15 / 0 / 0 / 0 / 5 / 540 / 0 / 0 / 0 / 3 | B: numbers found after the name (line 89); check the size |
| Bacon | 4 - 5 Toppings | only in draft B | not found | 15 / 1.5 / 0 / 0 / 5 / 65 / 0 / 0 / 0 / 1 | B: numbers found after the name (line 1172); check the size |
| Black Olives | 4 - 5 Toppings | only in draft B | not found | 5 / 0.5 / 0 / 0 / 0 / 30 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 1173); check the size |
| Cheddar Cheese | 4 - 5 Toppings | only in draft B | not found | 40 / 3.5 / 2 / 0 / 10 / 70 / 1 / 0 / 0 / 2 | B: numbers found after the name (line 1153); check the size |
| Green Peppers | 4 - 5 Toppings | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 72); check the size, mostly zeros: look |
| Green Olives | 4 - 5 Toppings | only in draft B | not found | 5 / 0.5 / 0 / 0 / 0 / 60 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 1176); check the size |
| Ham | 4 - 5 Toppings | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 70 / 0 / 0 / 0 / 1 | B: numbers found after the name (line 1177); check the size |
| Banana Peppers | 4 - 5 Toppings | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 55 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 1178); check the size, mostly zeros: look |
| Jalapeno Peppers | 4 - 5 Toppings | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 55 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 1179); check the size, mostly zeros: look |
| Mushrooms | 4 - 5 Toppings | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 76); check the size, mostly zeros: look |
| Onions | 4 - 5 Toppings | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 77); check the size, mostly zeros: look |
| Pepperoni | 4 - 5 Toppings | only in draft B | not found | 15 / 1.5 / 0.5 / 0 / 5 / 65 / 0 / 0 / 0 / 1 | B: numbers found after the name (line 1182); check the size |
| Pickles | 4 - 5 Toppings | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 50 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 1183); check the size, mostly zeros: look |
| Pineapple | 4 - 5 Toppings | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 0 / 1 / 0 / 1 / 0 | B: numbers found after the name (line 80); check the size |
| Shredded Provolone Cheese | 4 - 5 Toppings | only in draft B | not found | 15 / 1 / 0.5 / 0 / 5 / 30 / 0 / 0 / 0 / 1 | B: numbers found after the name (line 1185); check the size |
| Roasted Red Peppers | 4 - 5 Toppings | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 10 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 82); check the size, mostly zeros: look |
| Salami | 4 - 5 Toppings | only in draft B | not found | 20 / 1.5 / 0.5 / 0 / 5 / 85 / 0 / 0 / 0 / 1 | B: numbers found after the name (line 83); check the size |
| Shredded Parmesan Asiago | 4 - 5 Toppings | only in draft B | not found | 15 / 1 / 0.5 / 0 / 5 / 30 / 0 / 0 / 0 / 1 | B: numbers found after the name (line 1188); check the size |
| Diced Tomatoes | 4 - 5 Toppings | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 10 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 87); check the size, mostly zeros: look |

## Spot check (5 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Sweet Mango Habanero Wings | 4 pieces | 310 / 20 / 5 / 0 / 110 / 790 / 21 / 0 / 10 / 15 |
| Ultimate Pepperoni | S (1/4 pizza) | 390 / 19 / 8 / 0 / 45 / 880 / 37 / 2 / 3 / 16 |
| Crispy Bacon & Tomato Specialty Chicken | 4 pieces | 260 / 18 / 5 / 0 / 45 / 810 / 14 / 0 / 1 / 11 |
| Italian | 1/2 Sandwich | 410 / 20 / 9 / 0.5 / 55 / 1470 / 35 / 2 / 2 / 21 |
| Extra Cheese | 1/2 Sandwich | 20 / 1.5 / 1 / 0 / 5 / 45 / 0 / 0 / 0 / 1 |
