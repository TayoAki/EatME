# Subway: lines for a person

Guide: https://media.subway.com/dam/urn:aaid:aem:f20a4541-8c88-496b-940d-4aa8318cae26/original/as/us-nutrition-en.pdf (read 2026-10-22). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (118)

The last column comes from `npm run chains:evidence`: whether a draft's numbers sit right after the item's name in the guide text the drafts read. It can't read sizes or sections (one draft called a single 78 g cookie a "6 pack"): check those against the guide, then fix the line and set its check to `person`.

Fix each line in `menus/subway.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B | In the guide text (no AI) |
| --- | --- | --- | --- | --- | --- |
| Oven Roasted Turkey | 6-inch | only in draft B | not found | 270 / 4 / 1 / 0 / 25 / 810 / 40 / 4 / 6 / 20 | B: numbers found after the name (line 64); check the size |
| Rotisserie-Style Chicken | 6-inch | only in draft B | not found | 310 / 6 / 2 / 0 / 50 / 750 / 40 / 4 / 6 / 24 | B: numbers found after the name (line 66); check the size |
| Veggie Delite | 1 serving | only in draft B | not found | 140 / 2 / 0 / 0 / – / 240 / 27 / 3 / 4 / 6 | B: numbers found after the name (line 70); check the size |
| Black Forest Ham | 1 serving | only in draft B | not found | 180 / 3 / 1 / 0 / 15 / 480 / 28 / 3 / 4 / 11 | B: numbers found after the name (line 71); check the size |
| Oven Roasted Turkey | 1 serving | only in draft B | not found | 170 / 2 / 0 / 0 / 15 / 460 / 27 / 3 / 4 / 12 | B: numbers found after the name (line 72); check the size |
| Baja Chicken | 9-inch wrap (pocket) | only in draft B | not found | 330 / 13 / 5 / 0 / 70 / 750 / 30 / 2 / 2 / 24 | B: numbers found after the name (line 113); check the size |
| Italian Trio | 9-inch wrap (pocket) | only in draft B | not found | 480 / 29 / 10 / 1 / 80 / 1580 / 32 / 2 / 2 / 22 | B: numbers found after the name (line 114); check the size |
| Peppercorn Ranch Chicken | 9-inch wrap (pocket) | only in draft B | not found | 330 / 13 / 5 / 0 / 70 / 800 / 30 / 2 / 2 / 24 | B: numbers found after the name (line 115); check the size |
| Turkey & Ham | 9-inch wrap (pocket) | only in draft B | not found | 320 / 11 / 4 / 0 / 50 / 1260 / 32 / 2 / 4 / 21 | B: numbers found after the name (line 116); check the size |
| Steak Philly | 1 serving | only in draft B | not found | 450 / 35 / 10 / 1 / 95 / 1070 / 13 / 4 / 6 / 24 | B: numbers found after the name (line 123); check the size |
| Chipotle Philly | 1 serving | only in draft B | not found | 400 / 29 / 10 / 1 / 95 / 1250 / 14 / 5 / 7 / 25 | B: numbers found after the name (line 124); check the size |
| Steak & Bacon | 1 serving | only in draft B | not found | 510 / 37 / 12 / 1 / 115 / 1070 / 15 / 5 / 7 / 32 | B: numbers found after the name (line 125); check the size |
| Grilled Chicken | 1 serving | only in draft B | not found | 450 / 34 / 9 / 1 / 95 / 580 / 12 / 4 / 5 / 26 | B: numbers found after the name (line 127); check the size |
| Chicken & Bacon Ranch | 1 serving | only in draft B | not found | 490 / 36 / 11 / 1 / 110 / 1010 / 14 / 5 / 7 / 30 | B: numbers found after the name (line 128); check the size |
| Honey Mustard Chicken | 1 serving | only in draft B | not found | 370 / 24 / 8 / 0 / 90 / 1050 / 18 / 5 / 11 / 25 | B: numbers found after the name (line 129); check the size |
| Sweet Onion Chicken Teriyaki | 1 serving | only in draft B | not found | 300 / 10 / 5 / 0 / 70 / 1090 / 33 / 4 / 25 / 23 | B: numbers found after the name (line 130); check the size |
| B.M.T. | 1 serving | only in draft B | not found | 530 / 45 / 13 / 1 / 85 / 1220 / 13 / 4 / 5 / 21 | B: numbers found after the name (line 132); check the size |
| Spicy Italian | 1 serving | only in draft B | not found | 600 / 53 / 16 / 1 / 100 / 1410 / 13 / 4 / 5 / 21 | B: numbers found after the name (line 133); check the size |
| 5 Meat Italian | 1 serving | only in draft B | not found | 600 / 46 / 13 / 1 / 120 / 1660 / 14 / 4 / 7 / 34 | B: numbers found after the name (line 134); check the size |
| Meatball Marinara with MVP Parmesan Vinaigrette | 1 serving | only in draft B | not found | 520 / 38 / 13 / 1 / 60 / 1310 / 25 / 7 / 10 / 22 | B: numbers found after the name (line 135); check the size |
| Meatball Pepperoni with MVP Parmesan Vinaigrette | 1 serving | only in draft B | not found | 600 / 46 / 16 / 1 / 75 / 1600 / 25 / 7 / 10 / 25 | B: numbers found after the name (line 136); check the size |
| Oven-Roasted Turkey | 1 serving | only in draft B | not found | 400 / 32 / 8 / 1 / 65 / 870 / 11 / 4 / 5 / 20 | B: numbers found after the name (line 138); check the size |
| Roast Beef | 1 serving | only in draft B | not found | 430 / 32 / 8 / 1 / 70 / 840 / 13 / 4 / 6 / 25 | B: numbers found after the name (line 140); check the size |
| Cold Cut Combo | 1 serving | only in draft B | not found | 460 / 38 / 10 / 1 / 85 / 1040 / 11 / 4 / 5 / 19 | B: numbers found after the name (line 141); check the size |
| Tuna | 1 serving | only in draft B | not found | 400 / 31 / 8 / 1 / 60 / 600 / 10 / 4 / 5 / 21 | B: numbers found after the name (line 142); check the size |
| All American Club | 1 serving | only in draft B | not found | 470 / 38 / 11 / 1 / 80 / 1270 / 13 / 4 / 7 / 23 | B: numbers found after the name (line 145); check the size |
| Subway Club | 1 serving | only in draft B | not found | 440 / 33 / 9 / 1 / 85 / 1300 / 14 / 4 / 7 / 25 | B: numbers found after the name (line 146); check the size |
| Big Hot Pastrami | 1 serving | only in draft B | not found | 470 / 38 / 16 / 1 / 80 / 1840 / 14 / 5 / 7 / 23 | B: numbers found after the name (line 148); check the size |
| B.L.T. | 1 serving | only in draft B | not found | 420 / 36 / 9 / 0 / 50 / 540 / 11 / 4 / 6 / 13 | B: numbers found after the name (line 149); check the size |
| Buffalo Chicken | 1 serving | only in draft B | not found | 540 / 34 / 13 / 1 / 160 / 2590 / 18 / 4 / 9 / 44 | B: numbers found after the name (line 150); check the size |
| Turkey & Ham | 1 serving | only in draft B | not found | 400 / 32 / 8 / 1 / 65 / 890 / 12 / 4 / 6 / 20 | B: numbers found after the name (line 151); check the size |
| Pizza Sub | 1 serving | only in draft B | not found | 320 / 23 / 10 / 1 / 60 / 990 / 14 / 5 / 7 / 17 | B: numbers found after the name (line 152); check the size |
| Veggie Patty | 1 serving | only in draft B | not found | 300 / 17 / 5 / 0 / 20 / 810 / 28 / 12 / 8 / 13 | B: numbers found after the name (line 153); check the size |
| Bacon, Egg & Cheese | 6-inch | only in draft B | not found | 550 / 30 / 11 / 0 / 280 / 1200 / 43 / 2 / 4 / 26 | B: numbers found after the name (line 195); check the size |
| Black Forest Ham, Egg & Cheese | 6-inch | only in draft B | not found | 510 / 25 / 9 / 0 / 280 / 1330 / 44 / 2 / 5 / 27 | B: numbers found after the name (line 196); check the size |
| Egg & Cheese | 6-inch | only in draft B | not found | 470 / 24 / 8 / 0 / 265 / 1020 / 42 / 2 / 4 / 21 | B: numbers found after the name (line 197); check the size |
| Steak, Egg & Cheese | 6-inch | only in draft B | not found | 530 / 26 / 9 / 0 / 290 / 1250 / 43 / 2 / 4 / 30 | B: numbers found after the name (line 198); check the size |
| Bacon, Egg & Cheese | 12-inch wrap | only in draft B | not found | 900 / 56 / 16 / 1 / 540 / 1790 / 57 / 2 / 5 / 42 | B: numbers found after the name (line 208); check the size |
| Black Forest Ham, Egg & Cheese | 12-inch wrap | only in draft B | not found | 820 / 46 / 13 / 1 / 540 / 2060 / 58 / 2 / 5 / 44 | B: numbers found after the name (line 209); check the size |
| Egg & Cheese | 12-inch wrap | only in draft B | not found | 740 / 44 / 12 / 1 / 505 / 1440 / 55 / 2 / 3 / 32 | B: numbers found after the name (line 210); check the size |
| Steak, Egg & Cheese | 12-inch wrap | only in draft B | not found | 860 / 48 / 14 / 1 / 560 / 1890 / 57 / 2 / 4 / 48 | B: numbers found after the name (line 211); check the size |
| Ham & Jack (includes Pepper Jack Cheese) | 1 serving | only in draft B | not found | 160 / 4 / 2 / 0 / 20 / 550 / 21 / 0.5 / 2 / 10 | B: numbers found after the name (line 218); check the size |
| Italian Spice (includes American Cheese and MVP Parmesan Vinaigrette) | 1 serving | only in draft B | not found | 250 / 15 / 5 / 0 / 30 / 740 / 21 / 0.5 / 2 / 9 | B: numbers found after the name (line 219); check the size |
| Little Cheesesteak (includes American Cheese and Baja Chipotle Sauce) | 1 serving | only in draft B | not found | 180 / 7 / 3 / 0 / 20 / 450 / 21 / 1 / 2 / 8 | B: numbers found after the name (line 220); check the size |
| Turkey (includes Pepper Jack Cheese and Mayonnaise) | 1 serving | only in draft B | not found | 230 / 12 / 4 / 0 / 30 / 690 / 20 / 1 / 2 / 12 | B: numbers found after the name (line 221); check the size |
| Artisan Italian Bread | 6-inch | only in draft B | not found | 210 / 2 / 1 / 0 / 0 / 380 / 39 / 1 / 3 / 8 | B: numbers found after the name (line 227); check the size |
| Hearty Multigrain Bread | 6-inch | only in draft B | not found | 200 / 3 / 0 / 0 / 0 / 350 / 36 / 3 / 4 / 9 | B: numbers found after the name (line 228); check the size |
| Italian Herbs & Cheese Bread | 6-inch | only in draft B | not found | 250 / 5 / 2 / 0 / 10 / 580 / 42 / 2 / 3 / 10 | B: numbers found after the name (line 229); check the size |
| Jalapeno Cheddar Bread | 6-inch | only in draft B | not found | 240 / 5 / 2 / 0 / 5 / 500 / 39 / 2 / 3 / 9 | B: numbers found after the name (line 230); check the size |
| Artisan Flatbread | 6-inch | only in draft B | not found | 220 / 4 / 1 / 0 / 0 / 380 / 39 / 1 / 2 / 6 | B: numbers found after the name (line 231); check the size |
| Wrap | 12-inch | only in draft B | not found | 300 / 8 / 1 / 0 / 0 / 580 / 50 / 2 / 2 / 8 | B: numbers found after the name (line 232); check the size |
| Wrap (Pocket) | 9-inch | only in draft B | not found | 150 / 3 / 1 / 0 / 0 / 340 / 26 / 0.5 / 0 / 4 | B: numbers found after the name (line 233); check the size |
| Mini Artisan Italian Bread | 1 serving | only in draft B | not found | 160 / 2 / 0 / 0 / 0 / 310 / 30 / 1 / 2 / 6 | B: numbers found after the name (line 234); check the size |
| Mini Hearty Multigrain Bread | 1 serving | only in draft B | not found | 130 / 2 / 0 / 0 / 0 / 230 / 24 / 2 / 2 / 6 | B: numbers found after the name (line 235); check the size |
| Baja Chipotle | Amount on 6-inch sandwich or wrap | only in draft B | not found | 70 / 7 / 1 / 0 / 5 / 125 / 1 / 0 / 1 / 0 | B: numbers found after the name (line 237); check the size |
| BBQ Sauce | Amount on 6-inch sandwich or wrap | only in draft B | not found | 25 / 0 / 0 / 0 / 0 / 115 / 6 / 0 / 5 / 0 | B: numbers found after the name (line 238); check the size |
| Frank's Red Hot Buffalo Sauce | Amount on 6-inch sandwich or wrap | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 440 / 1 / 0 / 0 / 0 | B: numbers found after the name (line 239); check the size, mostly zeros: look |
| Giardiniera | Amount on 6-inch sandwich or wrap | only in draft B | not found | 80 / 9 / 2 / 0 / 0 / 340 / 1 / 0 / 1 / 0 | B: numbers found after the name (line 240); check the size |
| Honey Mustard | Amount on 6-inch sandwich or wrap | only in draft B | not found | 60 / 5 / 1 / 0 / 5 / 125 / 3 / 0 / 3 / 0 | B: numbers found after the name (line 241); check the size |
| Hot Honey Sauce | Amount on 6-inch sandwich or wrap | only in draft B | not found | 30 / 0 / 0 / 0 / 0 / 120 / 8 / 0 / 8 / 0 | B: numbers found after the name (line 242); check the size |
| Mayonnaise | Amount on 6-inch sandwich or wrap | only in draft B | not found | 100 / 11 / 2 / 0 / 10 / 65 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 243); check the size |
| Mustard, Yellow | Amount on 6-inch sandwich or wrap | only in draft B | not found | 10 / 1 / 0 / 0 / 0 / 170 / 1 / 0 / 0 / 0 | B: numbers found after the name (line 244); check the size |
| Olive Oil Blend | Amount on 6-inch sandwich or wrap | only in draft B | not found | 45 / 5 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 245); check the size, mostly zeros: look |
| Olive Oil Blend & Vinegar | Amount on 6-inch sandwich or wrap | only in draft B | not found | 45 / 5 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 246); check the size, mostly zeros: look |
| MVP Parmesan Vinaigrette | Amount on 6-inch sandwich or wrap | only in draft B | not found | 60 / 6 / 1 / 0 / 0 / 140 / 1 / 0 / 1 / 0 | B: numbers found after the name (line 247); check the size |
| Peppercorn Ranch | Amount on 6-inch sandwich or wrap | only in draft B | not found | 80 / 8 / 2 / 0 / 5 / 100 / 1 / 0 / 1 / 0 | B: numbers found after the name (line 248); check the size |
| Red Wine Vinegar | Amount on 6-inch sandwich or wrap | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 249); check the size, mostly zeros: look |
| Roasted Garlic Aioli | Amount on 6-inch sandwich or wrap | only in draft B | not found | 80 / 9 / 2 / 0 / 5 / 150 / 1 / 0 / 1 / 0 | B: numbers found after the name (line 250); check the size |
| Sweet Onion Teriyaki | Amount on 6-inch sandwich or wrap | only in draft B | not found | 30 / 0 / 0 / 0 / 0 / 130 / 7 / 0 / 6 / 0 | B: numbers found after the name (line 251); check the size |
| Pepper, Black | Amount on 6-inch sandwich or wrap | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 253); check the size, mostly zeros: look |
| Oregano | Amount on 6-inch sandwich or wrap | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 254); check the size, mostly zeros: look |
| Salt | Amount on 6-inch sandwich or wrap | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 160 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 255); check the size, mostly zeros: look |
| Avocado, Sliced | Amount on 6-inch sandwich or wrap | only in draft B | not found | 45 / 4 / 1 / 0 / 0 / 2 / 2 / 0 / 0 / 2 | B: numbers found after the name (line 257); check the size |
| Avocado, Smashed | Amount on 6-inch sandwich or wrap | only in draft B | not found | 70 / 6 / 1 / 0 / 0 / 130 / 3 / 2 / 0 / 1 | B: numbers found after the name (line 258); check the size |
| Banana Peppers | 3 rings | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 65 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 259); check the size, mostly zeros: look |
| Cucumbers | 3 slices | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 1 / 0 / 0 / 0 | B: numbers found after the name (line 260); check the size, mostly zeros: look |
| Green Chiles | Amount on 6-inch sandwich or wrap | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 95 / 1 / 0 / 0 / 0 | B: numbers found after the name (line 261); check the size |
| Green Peppers | 3 strips | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 262); check the size, mostly zeros: look |
| Jalapeno Peppers | 3 rings | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 70 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 263); check the size, mostly zeros: look |
| Lettuce | Amount on 6-inch sandwich or wrap | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 264); check the size, mostly zeros: look |
| Olives, Black | 3 rings | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 20 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 265); check the size, mostly zeros: look |
| Onions | Amount on 6-inch sandwich or wrap | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 1 / 0 / 0 / 0 | B: numbers found after the name (line 266); check the size, mostly zeros: look |
| Pickles, Crinkle | 3 chips | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 160 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 267); check the size, mostly zeros: look |
| Spinach, Baby | Amount on 6-inch sandwich or wrap | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 5 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 268); check the size, mostly zeros: look |
| Tomatoes | 3 wheels | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 0 / 1 / 0 / 1 / 0 | B: numbers found after the name (line 269); check the size |
| American | Amount on 6-inch sandwich, salad or wrap | only in draft B | not found | 80 / 7 / 5 / 0 / 20 / 420 / 1 / 0 / 1 / 4 | B: numbers found after the name (line 271); check the size |
| Monterey Cheddar, Shredded | Amount on 6-inch sandwich, salad or wrap | only in draft B | not found | 110 / 9 / 5 / 0 / 25 / 170 / 1 / 0 / 0 / 7 | B: numbers found after the name (line 272); check the size |
| Parmesan Grated | Amount on 6-inch sandwich, salad or wrap | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 25 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 273); check the size, mostly zeros: look |
| Pepperjack | Amount on 6-inch sandwich, salad or wrap | only in draft B | not found | 100 / 8 / 5 / 0 / 25 / 480 / 1 / 0 / 0 / 5 | B: numbers found after the name (line 274); check the size |
| Provolone | Amount on 6-inch sandwich, salad or wrap | only in draft B | not found | 90 / 7 / 4 / 0 / 20 / 220 / 1 / 0 / 0 / 6 | B: numbers found after the name (line 275); check the size |
| All-American Club Meats (Ham, Turkey, Bacon) | Amount on 6-inch sub or salad | only in draft B | not found | 140 / 7 / 3 / 0 / 45 / 650 / 2 / 0 / 1 / 15 | B: numbers found after the name (line 277); check the size |
| Bacon | 2 strips | only in draft B | not found | 80 / 6 / 3 / 0 / 15 / 170 / 1 / 0 / 1 / 5 | B: numbers found after the name (line 278); check the size |
| Black Forest Ham | Amount on 6-inch sub or salad | only in draft B | not found | 70 / 2 / 1 / 0 / 30 / 490 / 2 / 0 / 1 / 10 | B: numbers found after the name (line 279); check the size |
| Cold Cut Combo Meats | Amount on 6-inch sub or salad | only in draft B | not found | 110 / 8 / 1 / 0 / 45 / 620 / 1 / 0 / 1 / 9 | B: numbers found after the name (line 280); check the size |
| Egg Patty | Amount on 6-inch sub or salad | only in draft B | not found | 180 / 15 / 4 / 0 / 240 / 220 / 2 / 0 / 0 / 10 | B: numbers found after the name (line 281); check the size |
| Genoa Salami | 3 slices | only in draft B | not found | 70 / 6 / 3 / 0 / 20 / 260 / 1 / 0 / 0 / 3 | B: numbers found after the name (line 282); check the size |
| Grilled Chicken | Amount on 6-inch sub or salad | only in draft B | not found | 80 / 2 / 2 / 0 / 50 / 210 / 1 / 0 / 1 / 16 | B: numbers found after the name (line 283); check the size |
| Grilled Chicken, Sweet Onion Teriyaki Glazed | Amount on 6-inch sub or salad | only in draft B | not found | 110 / 2 / 1 / 0 / 50 / 350 / 9 / 0 / 8 / 16 | B: numbers found after the name (line 284); check the size |
| Meatballs | Amount on 6-inch sub or salad | only in draft B | not found | 250 / 17 / 7 / 0 / 35 / 700 / 13 / 2 / 4 / 12 | B: numbers found after the name (line 285); check the size |
| Oven-Roasted Turkey | Amount on 6-inch sub or salad | only in draft B | not found | 50 / 0 / 0 / 0 / 25 / 450 / 1 / 0 / 1 / 11 | B: numbers found after the name (line 286); check the size |
| Pastrami | Amount on 6-inch sub or salad | only in draft B | not found | 320 / 29 / 12 / 1 / 55 / 850 / 2 / 0 / 1 / 15 | B: numbers found after the name (line 287); check the size |
| Pepperoni | 3 slices | only in draft B | not found | 80 / 7 / 3 / 0 / 20 / 290 / 1 / 0 / 0 / 3 | B: numbers found after the name (line 288); check the size |
| Roast Beef | Amount on 6-inch sub or salad | only in draft B | not found | 80 / 2 / 1 / 0 / 35 / 420 / 2 / 0 / 2 / 15 | B: numbers found after the name (line 289); check the size |
| Rotisserie-Style Chicken | Amount on 6-inch sub or salad | only in draft B | not found | 90 / 4 / 1 / 0 / 50 / 400 / 0 / 0 / 0 / 15 | B: numbers found after the name (line 290); check the size |
| Steak (no cheese) | Amount on 6-inch sub or salad | only in draft B | not found | 110 / 5 / 2 / 0 / 55 / 450 / 2 / 0 / 1 / 17 | B: numbers found after the name (line 291); check the size |
| Subway Club Meats (Turkey, Ham, Roast Beef) | Amount on 6-inch sub or salad | only in draft B | not found | 100 / 3 / 1 / 0 / 45 / 690 / 3 / 0 / 2 / 17 | B: numbers found after the name (line 295); check the size |
| Tuna | Amount on 6-inch sub or salad | only in draft B | not found | 250 / 23 / 2 / 0 / 40 / 310 / 0 / 0 / 0 / 12 | B: numbers found after the name (line 297); check the size |
| Veggie Patty | Amount on 6-inch sub or salad | only in draft B | not found | 170 / 9 / 1 / 0 / 0 / 320 / 17 / 8 / 2 / 6 | B: numbers found after the name (line 298); check the size |
| Chocolate Chip Cookie | 1 serving | only in draft B | not found | 210 / 10 / 5 / 0 / 10 / 120 / 30 / 0.5 / 18 / 2 | B: numbers found after the name (line 304); check the size |
| Double Chocolate Cookie | 1 serving | only in draft B | not found | 210 / 9 / 5 / 0 / 15 / 125 / 29 / 1 / 20 / 2 | B: numbers found after the name (line 305); check the size |
| Oatmeal Raisin Cookie | 1 serving | only in draft B | not found | 200 / 8 / 4 / 0 / 15 / 110 / 30 / 1 / 16 / 3 | B: numbers found after the name (line 306); check the size |
| Naturally Flavored Raspberry Cheesecake Cookie | 1 serving | only in draft B | not found | 210 / 9 / 5 / 0 / 15 / 115 / 29 / 0 / 16 / 2 | B: numbers found after the name (line 307); check the size |
| White Chip Macadamia Nut Cookie | 1 serving | only in draft B | not found | 210 / 10 / 5 / 0 / 15 / 125 / 28 / 0.5 / 17 / 2 | B: numbers found after the name (line 308); check the size |
| Applesauce | 1 serving | only in draft B | not found | 70 / 0 / 0 / 0 / 0 / 0 / 16 / 3 / 13 / 0 | B: numbers found after the name (line 309); check the size |
| Hash Browns | 1 serving | only in draft B | not found | 190 / 9 / 3 / 0 / 0 / 600 / 24 / 3 / 1 / 3 | B: numbers found after the name (line 310); check the size |
| Broccoli Cheddar | 8 oz. bowl | only in draft B | not found | 200 / 13 / 8 / 0 / 45 / 960 / 16 / 0.5 / 7 / 9 | B: numbers found after the name (line 312); check the size |
| Chicken Noodle | 8 oz. bowl | only in draft B | not found | 70 / 3 / 1 / 0 / 15 / 1160 / 6 / 0.5 / 1 / 7 | B: numbers found after the name (line 313); check the size |
| Loaded Baked Potato with Bacon | 8 oz. bowl | only in draft B | not found | 200 / 14 / 7 / 0 / 45 / 910 / 17 / 1 / 4 / 9 | B: numbers found after the name (line 314); check the size |

## Spot check (3 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Veggie Patty ** | 12-inch wrap | 740 / 33 / 7 / 1 / 20 / 1650 / 88 / 19 / 9 / 25 |
| Meatball Marinara | 6-inch | 550 / 27 / 12 / 0 / 55 / 1330 / 52 / 4 / 7 / 26 |
| Oven-Roasted Turkey & Ham** | 6-inch | 460 / 22 / 7 / 0 / 55 / 1110 / 41 / 4 / 6 / 26 |
