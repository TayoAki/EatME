# White Castle: lines for a person

Guide: https://www.whitecastle.com/about-us/restaurant-menu-nutrition-information (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (59)

Fix each line in `menus/white-castle.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B |
| --- | --- | --- | --- | --- |
| Bacon Jalapeño Cheese | 71g | only in draft A | 230 / 14 / 6 / 0.5 / 25 / 550 / 17 / 1 / 3 / 11 | not found |
| Panko Fish Slider - Plain | 72g | only in draft A | 230 / 14 / 6 / 0.5 / 30 / 580 / 17 / 1 / 3 / 11 | not found |
| Panko Fish Slider w/Cheese | 68g | only in draft A | 230 / 15 / 6 / 0 / 30 / 540 / 16 / 1 / 2 / 11 | not found |
| Panko Fish Slider w/Jalapeno Cheese | 72g | only in draft A | 240 / 15 / 6 / 0 / 30 / 590 / 18 / 1 / 3 / 11 | not found |
| Panko Fish Slider w/Cheddar Cheese | 100g | only in draft A | 320 / 20 / 3.5 / 0 / 25 / 320 / 25 / 1 / 3 / 9 | not found |
| Chicken Ring w/Cheese | 108g | only in draft A | 340 / 22 / 4.5 / 0 / 30 / 460 / 25 / 1 / 3 / 11 | not found |
| Chicken Ring w/Jalapeno Cheese | 109g | only in draft A | 350 / 23 / 5 / 0 / 35 / 490 / 26 / 1 / 3 / 11 | not found |
| Chicken Ring w/Smoked Cheddar Cheese | 109g | only in draft A | 350 / 23 / 5 / 0 / 35 / 490 / 26 / 1 / 3 / 11 | not found |
| Crispy Chicken | 71g | only in draft A | 200 / 10 / 3 / 0 / 45 / 470 / 18 / 1 / 2 / 9 | not found |
| Garage Beer® Cheese Sausage Sliders - Limited Time Offering | 72g | only in draft A | 210 / 11 / 3.5 / 0 / 45 / 510 / 19 / 1 / 2 / 10 | not found |
| Southwest Veggie Slider | 72g | only in draft A | 210 / 11 / 3.5 / 0 / 45 / 510 / 19 / 1 / 2 / 10 | not found |
| French Fries | 112g | only in draft A | 330 / 18 / 3 / 0 / 35 / 680 / 31 / 2 / 7 / 13 | not found |
| French Fries | 109g | only in draft A | 280 / 18 / 7 / 0 / 45 / 750 / 18 / 0 / 3 / 10 | not found |
| French Fries | 85g | only in draft A | 240 / 10 / 3 / 0 / 10 / 540 / 31 / 4 / 5 / 6 | not found |
| French Fries (New York / New Jersey only) | 148g | only in draft A | 330 / 21 / 4 / 0 / 0 / 50 / 32 / 3 / 2 / 3 | not found |
| French Fries (New York / New Jersey only) | 266g | only in draft A | 600 / 39 / 7 / 0 / 0 / 85 / 57 / 6 / 3 / 6 | not found |
| French Fries (New York / New Jersey only) | 353g | only in draft A | 770 / 49 / 9 / 0 / 0 / 115 / 76 / 8 / 4 / 8 | not found |
| Cheese Fries | 148g | only in draft A | 350 / 21 / 4.5 / 0 / 0 / 40 / 34 / 3 / 1 / 5 | not found |
| Garage Beer® Cheese Fries - Limited Time Only | 266g | only in draft A | 630 / 39 / 9 / 0 / 0 / 70 / 60 / 6 / 3 / 9 | not found |
| French Fries (AZ/FL only) | 191g | only in draft A | 430 / 29 / 8 / 0 / 20 / 310 / 36 / 3 / 3 / 6 | not found |
| French Fries (AZ/FL only) | 201g | only in draft A | 410 / 28 / 5 / 0 / 0 / 350 / 35 / 3 / 2 / 4 | not found |
| Cheese Fries (Scottsdale / Orlando only) | 195g | only in draft A | 430 / 29 / 4 / 0 / 0 / 810 / 42 / 3 / 2 / 3 | not found |
| Garage Beer® Cheese Fries - Limited Time Only (AZ/FL only) | 268g | only in draft A | 540 / 33 / 5 / 0 / 0 / 1140 / 59 / 5 / 2 / 4 | not found |
| Onion Chips | 348g | only in draft A | 770 / 51 / 8 / 0 / 0 / 1450 / 74 / 6 / 3 / 5 | not found |
| Onion Chips | 237g | only in draft A | 470 / 32 / 5 / 0 / 0 / 1110 / 43 / 3 / 2 / 4 | not found |
| Onion Chips | 191g | only in draft A | 500 / 34 / 8 / 0 / 20 / 1070 / 44 / 3 / 3 / 6 | not found |
| Onion Rings | 124g | only in draft A | 480 / 36 / 6 / 0 / 0 / 690 / 33 / 6 / 4 / 4 | not found |
| Onion Rings | 262g | only in draft A | 930 / 65 / 11 / 0 / 0 / 1550 / 73 / 13 / 8 / 8 | not found |
| Onion Rings (New York / New Jersey only) | 349g | only in draft A | 1350 / 101 / 17 / 0 / 0 / 1950 / 92 / 16 / 11 / 11 | not found |
| Bacon Cheese (New York / New Jersey only) | 71 g | only in draft B | not found | 230 / 14 / 6 / 0.5 / 25 / 550 / 17 / 1 / 3 / 11 |
| Bacon Jalapeño Cheese | 67 g | only in draft B | not found | 230 / 15 / 6 / 0 / 30 / 540 / 16 / 1 / 2 / 11 |
| Bacon Jalapeño Cheese (New York / New Jersey only) | 72 g | only in draft B | not found | 230 / 14 / 6 / 0.5 / 30 / 580 / 17 / 1 / 3 / 11 |
| Bacon Smoked Cheddar Cheese (New York / New Jersey only) | 72 g | only in draft B | not found | 240 / 15 / 6 / 0 / 30 / 590 / 18 / 1 / 3 / 11 |
| Panko Fish Slider - Plain | 100 g | only in draft B | not found | 320 / 20 / 3.5 / 0 / 25 / 320 / 25 / 1 / 3 / 9 |
| Panko Fish Slider w/Cheese | 108 g | only in draft B | not found | 340 / 22 / 4.5 / 0 / 30 / 460 / 25 / 1 / 3 / 11 |
| Panko Fish Slider w/Jalapeno Cheese | 109 g | only in draft B | not found | 350 / 23 / 5 / 0 / 35 / 490 / 26 / 1 / 3 / 11 |
| Panko Fish Slider w/Cheddar Cheese | 109 g | only in draft B | not found | 350 / 23 / 5 / 0 / 35 / 490 / 26 / 1 / 3 / 11 |
| Chicken Ring w/Cheese | 71 g | only in draft B | not found | 200 / 10 / 3 / 0 / 45 / 470 / 18 / 1 / 2 / 9 |
| Chicken Ring w/Jalapeno Cheese | 72 g | only in draft B | not found | 210 / 11 / 3.5 / 0 / 45 / 510 / 19 / 1 / 2 / 10 |
| Chicken Ring w/Smoked Cheddar Cheese | 72 g | only in draft B | not found | 210 / 11 / 3.5 / 0 / 45 / 510 / 19 / 1 / 2 / 10 |
| Crispy Chicken | 112 g | only in draft B | not found | 330 / 18 / 3 / 0 / 35 / 680 / 31 / 2 / 7 / 13 |
| Garage Beer® Cheese Sausage Sliders - Limited Time Offering | 109 g | only in draft B | not found | 280 / 18 / 7 / 0 / 45 / 750 / 18 / 0 / 3 / 10 |
| Southwest Veggie Slider | 85 g | only in draft B | not found | 240 / 10 / 3 / 0 / 10 / 540 / 31 / 4 / 5 / 6 |
| French Fries | Small (148 g) | only in draft B | not found | 330 / 21 / 4 / 0 / 0 / 50 / 32 / 3 / 2 / 3 |
| French Fries | Medium (266 g) | only in draft B | not found | 600 / 39 / 7 / 0 / 0 / 85 / 57 / 6 / 3 / 6 |
| French Fries | Sack (serves 3) (353 g) | only in draft B | not found | 770 / 49 / 9 / 0 / 0 / 115 / 76 / 8 / 4 / 8 |
| French Fries (New York / New Jersey only) | Small (148 g) | only in draft B | not found | 350 / 21 / 4.5 / 0 / 0 / 40 / 34 / 3 / 1 / 5 |
| French Fries (New York / New Jersey only) | Medium (266 g) | only in draft B | not found | 630 / 39 / 9 / 0 / 0 / 70 / 60 / 6 / 3 / 9 |
| Garage Beer® Cheese Fries - Limited Time Only | 191 g | only in draft B | not found | 430 / 29 / 8 / 0 / 20 / 310 / 36 / 3 / 3 / 6 |
| Cheese Fries (New York / New Jersey only) | 201 g | only in draft B | not found | 410 / 28 / 5 / 0 / 0 / 350 / 35 / 3 / 2 / 4 |
| Garage Beer® Cheese Fries - Limited Time Only (NY/NJ only) | 191 g | only in draft B | not found | 450 / 29 / 9 / 0 / 20 / 300 / 38 / 3 / 2 / 8 |
| French Fries (AZ/FL only) | Small (195 g) | only in draft B | not found | 430 / 29 / 4 / 0 / 0 / 810 / 42 / 3 / 2 / 3 |
| French Fries (AZ/FL only) | Medium (268 g) | only in draft B | not found | 540 / 33 / 5 / 0 / 0 / 1140 / 59 / 5 / 2 / 4 |
| French Fries (AZ/FL only) | Sack (serves 3) (348 g) | only in draft B | not found | 770 / 51 / 8 / 0 / 0 / 1450 / 74 / 6 / 3 / 5 |
| Cheese Fries (Scottsdale / Orlando only) | 237 g | only in draft B | not found | 470 / 32 / 5 / 0 / 0 / 1110 / 43 / 3 / 2 / 4 |
| Garage Beer® Cheese Fries - Limited Time Only (AZ/FL only) | 191 g | only in draft B | not found | 500 / 34 / 8 / 0 / 20 / 1070 / 44 / 3 / 3 / 6 |
| Onion Chips | Small (124 g) | only in draft B | not found | 480 / 36 / 6 / 0 / 0 / 690 / 33 / 6 / 4 / 4 |
| Onion Chips | Medium (262 g) | only in draft B | not found | 930 / 65 / 11 / 0 / 0 / 1550 / 73 / 13 / 8 / 8 |
| Onion Chips | Sack (serves 3) (349 g) | only in draft B | not found | 1350 / 101 / 17 / 0 / 0 / 1950 / 92 / 16 / 11 / 11 |

## Spot check (3 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Cheese | 63 g | 170 / 9 / 4 / 0.5 / 15 / 370 / 16 / 1 / 2 / 8 |
| Garlic Cheese - Limited Time Offering | 61 g | 170 / 9 / 4 / 0.5 / 15 / 460 / 14 / 1 / 2 / 8 |
| The Original Slider® (New York / New Jersey only) | 59 g | 150 / 7 / 2.5 / 0 / 10 / 280 / 17 / 1 / 3 / 6 |
