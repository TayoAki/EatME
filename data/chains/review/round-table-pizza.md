# Round Table Pizza: lines for a person

Guide: https://www.roundtablepizza.com/wp-content/uploads/2023/10/FINAL-10_2023-Updated-Full-Nutrtional-Info.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (109)

The last column comes from `npm run chains:evidence`: whether a draft's numbers sit right after the item's name in the guide text the drafts read. It can't read sizes or sections (one draft called a single 78 g cookie a "6 pack"): check those against the guide, then fix the line and set its check to `person`.

Fix each line in `menus/round-table-pizza.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B | In the guide text (no AI) |
| --- | --- | --- | --- | --- | --- |
| Mist Twst | 12 fl oz | the guide gives no saturated_fat_g, fiber_g | 140 / 0 / – / – / – / 35 / 39 / – / 39 / 0 | 140 / 0 / – / – / – / 35 / 39 / – / 39 / 0 | A: numbers found after the name (line 273); check the size; B: numbers found after the name (line 273); check the size |
| Mist Twst | 16 fl oz | the guide gives no saturated_fat_g, fiber_g | 190 / 0 / – / – / – / 45 / 52 / – / 52 / 0 | 190 / 0 / – / – / – / 45 / 52 / – / 52 / 0 | A: numbers found after the name (line 274); check the size; B: numbers found after the name (line 274); check the size |
| Mist Twst | 22 fl oz | the guide gives no saturated_fat_g, fiber_g | 260 / 0 / – / – / – / 60 / 72 / – / 72 / 0 | 260 / 0 / – / – / – / 60 / 72 / – / 72 / 0 | A: numbers found after the name (line 275); check the size; B: numbers found after the name (line 275); check the size |
| Mist Twst | 32 fl oz | the guide gives no saturated_fat_g, fiber_g | 380 / 0 / – / – / – / 90 / 104 / – / 104 / 0 | 380 / 0 / – / – / – / 90 / 104 / – / 104 / 0 | A: numbers found after the name (line 276); check the size; B: numbers found after the name (line 276); check the size |
| Mountain Dew | 12 fl oz | the guide gives no saturated_fat_g, fiber_g | 165 / 0 / – / – / – / 60 / 46 / – / 46 / 0 | 165 / 0 / – / – / – / 60 / 46 / – / 46 / 0 | A: numbers found after the name (line 277); check the size; B: numbers found after the name (line 277); check the size |
| Mountain Dew | 16 fl oz | the guide gives no saturated_fat_g, fiber_g | 220 / 0 / – / – / – / 85 / 62 / – / 61 / 0 | 220 / 0 / – / – / – / 85 / 62 / – / 61 / 0 | A: numbers found after the name (line 278); check the size; B: numbers found after the name (line 278); check the size |
| Mountain Dew | 22 fl oz | the guide gives no saturated_fat_g, fiber_g | 300 / 0 / – / – / – / 120 / 85 / – / 84 / 0 | 300 / 0 / – / – / – / 120 / 85 / – / 84 / 0 | A: numbers found after the name (line 279); check the size; B: numbers found after the name (line 279); check the size |
| Mountain Dew | 32 fl oz | the guide gives no saturated_fat_g, fiber_g | 440 / 0 / – / – / – / 170 / 124 / – / 122 / 0 | 440 / 0 / – / – / – / 170 / 124 / – / 122 / 0 | A: numbers found after the name (line 280); check the size; B: numbers found after the name (line 280); check the size |
| Mug Root Beer | 12 fl oz | the guide gives no saturated_fat_g, fiber_g | 150 / 0 / – / – / – / 60 / 38 / – / 38 / 0 | 150 / 0 / – / – / – / 60 / 38 / – / 38 / 0 | A: numbers found after the name (line 281); check the size; B: numbers found after the name (line 281); check the size |
| Mug Root Beer | 16 fl oz | the guide gives no saturated_fat_g, fiber_g | 200 / 0 / – / – / – / 80 / 50 / – / 50 / 0 | 200 / 0 / – / – / – / 80 / 50 / – / 50 / 0 | A: numbers found after the name (line 282); check the size; B: numbers found after the name (line 282); check the size |
| Mug Root Beer | 22 fl oz | the guide gives no saturated_fat_g, fiber_g | 280 / 0 / – / – / – / 110 / 69 / – / 69 / 0 | 280 / 0 / – / – / – / 110 / 69 / – / 69 / 0 | A: numbers found after the name (line 283); check the size; B: numbers found after the name (line 283); check the size |
| Mug Root Beer | 32 fl oz | the guide gives no saturated_fat_g, fiber_g | 400 / 0 / – / – / – / 160 / 100 / – / 100 / 0 | 400 / 0 / – / – / – / 160 / 100 / – / 100 / 0 | A: numbers found after the name (line 284); check the size; B: numbers found after the name (line 284); check the size |
| Pepsi | 12 fl oz | the guide gives no saturated_fat_g, fiber_g | 150 / 0 / – / – / – / 30 / 41 / – / 41 / 0 | 150 / 0 / – / – / – / 30 / 41 / – / 41 / 0 | A: numbers found after the name (line 285); check the size; B: numbers found after the name (line 285); check the size |
| Pepsi | 16 fl oz | the guide gives no saturated_fat_g, fiber_g | 200 / 0 / – / – / – / 40 / 55 / – / 55 / 0 | 200 / 0 / – / – / – / 40 / 55 / – / 55 / 0 | A: numbers found after the name (line 286); check the size; B: numbers found after the name (line 286); check the size |
| Pepsi | 22 fl oz | the guide gives no saturated_fat_g, fiber_g | 280 / 0 / – / – / – / 55 / 75 / – / 75 / 0 | 280 / 0 / – / – / – / 55 / 75 / – / 75 / 0 | A: numbers found after the name (line 287); check the size; B: numbers found after the name (line 287); check the size |
| Pepsi | 32 fl oz | the guide gives no saturated_fat_g, fiber_g | 400 / 0 / – / – / – / 80 / 110 / – / 110 / 0 | 400 / 0 / – / – / – / 80 / 110 / – / 110 / 0 | A: numbers found after the name (line 288); check the size; B: numbers found after the name (line 288); check the size |
| Pepsi Wild Cherry | 12 fl oz | the guide gives no saturated_fat_g, fiber_g | 160 / 0 / – / – / – / 30 / 42 / – / 42 / 0 | 160 / 0 / – / – / – / 30 / 42 / – / 42 / 0 | A: numbers found after the name (line 289); check the size; B: numbers found after the name (line 289); check the size |
| Pepsi Wild Cherry | 16 fl oz | the guide gives no saturated_fat_g, fiber_g | 210 / 0 / – / – / – / 40 / 56 / – / 56 / 0 | 210 / 0 / – / – / – / 40 / 56 / – / 56 / 0 | A: numbers found after the name (line 290); check the size; B: numbers found after the name (line 290); check the size |
| Pepsi Wild Cherry | 22 fl oz | the guide gives no saturated_fat_g, fiber_g | 290 / 0 / – / – / – / 55 / 77 / – / 77 / 0 | 290 / 0 / – / – / – / 55 / 77 / – / 77 / 0 | A: numbers found after the name (line 291); check the size; B: numbers found after the name (line 291); check the size |
| Pepsi Wild Cherry | 32 fl oz | the guide gives no saturated_fat_g, fiber_g | 410 / 0 / – / – / – / 85 / 112 / – / 112 / 0 | 410 / 0 / – / – / – / 85 / 112 / – / 112 / 0 | A: numbers found after the name (line 292); check the size; B: numbers found after the name (line 292); check the size |
| Sobe Lifewater Yumberry Pomegranate | 12 fl oz | the guide gives no saturated_fat_g, fiber_g | 0 / 0 / – / – / – / 45 / 0 / – / 0 / 0 | 0 / 0 / – / – / – / 45 / 0 / – / 0 / 0 | A: numbers found after the name (line 293); check the size, mostly zeros: look; B: numbers found after the name (line 293); check the size, mostly zeros: look |
| Sobe Lifewater Yumberry Pomegranate | 16 fl oz | the guide gives no saturated_fat_g, fiber_g | 0 / 0 / – / – / – / 60 / 0 / – / 0 / 0 | 0 / 0 / – / – / – / 60 / 0 / – / 0 / 0 | A: numbers found after the name (line 294); check the size, mostly zeros: look; B: numbers found after the name (line 294); check the size, mostly zeros: look |
| Sobe Lifewater Yumberry Pomegranate | 22 fl oz | the guide gives no saturated_fat_g, fiber_g | 0 / 0 / – / – / – / 80 / 0 / – / 0 / 0 | 0 / 0 / – / – / – / 80 / 0 / – / 0 / 0 | A: numbers found after the name (line 295); check the size, mostly zeros: look; B: numbers found after the name (line 295); check the size, mostly zeros: look |
| Sobe Lifewater Yumberry Pomegranate | 32 fl oz | the guide gives no saturated_fat_g, fiber_g | 0 / 0 / – / – / – / 120 / 0 / – / 0 / 0 | 0 / 0 / – / – / – / 120 / 0 / – / 0 / 0 | A: numbers found after the name (line 296); check the size, mostly zeros: look; B: numbers found after the name (line 296); check the size, mostly zeros: look |
| Tropicana Fruit Punch | 12 fl oz | the guide gives no saturated_fat_g, fiber_g | 170 / 0 / – / – / – / 40 / 45 / – / 45 / 0 | 170 / 0 / – / – / – / 40 / 45 / – / 45 / 0 | A: numbers found after the name (line 297); check the size; B: numbers found after the name (line 297); check the size |
| Tropicana Fruit Punch | 16 fl oz | the guide gives no saturated_fat_g, fiber_g | 220 / 0 / – / – / – / 50 / 60 / – / 60 / 0 | 220 / 0 / – / – / – / 50 / 60 / – / 60 / 0 | A: numbers found after the name (line 298); check the size; B: numbers found after the name (line 298); check the size |
| Tropicana Fruit Punch | 22 fl oz | the guide gives no saturated_fat_g, fiber_g | 300 / 0 / – / – / – / 70 / 83 / – / 82 / 0 | 300 / 0 / – / – / – / 70 / 83 / – / 82 / 0 | A: numbers found after the name (line 299); check the size; B: numbers found after the name (line 299); check the size |
| Tropicana Fruit Punch | 32 fl oz | the guide gives no saturated_fat_g, fiber_g | 440 / 0 / – / – / – / 100 / 120 / – / 120 / 0 | 440 / 0 / – / – / – / 100 / 120 / – / 120 / 0 | A: numbers found after the name (line 300); check the size; B: numbers found after the name (line 300); check the size |
| Tropicana Pink Lemonade | 12 fl oz | the guide gives no saturated_fat_g, fiber_g | 150 / 0 / – / – / – / 160 / 41 / – / 41 / 0 | 150 / 0 / – / – / – / 160 / 41 / – / 41 / 0 | A: numbers found after the name (line 301); check the size; B: numbers found after the name (line 301); check the size |
| Tropicana Pink Lemonade | 16 fl oz | the guide gives no saturated_fat_g, fiber_g | 200 / 0 / – / – / – / 210 / 54 / – / 54 / 0 | 200 / 0 / – / – / – / 210 / 54 / – / 54 / 0 | A: numbers found after the name (line 302); check the size; B: numbers found after the name (line 302); check the size |
| Tropicana Pink Lemonade | 22 fl oz | the guide gives no saturated_fat_g, fiber_g | 280 / 0 / – / – / – / 290 / 74 / – / 74 / 0 | 280 / 0 / – / – / – / 290 / 74 / – / 74 / 0 | A: numbers found after the name (line 303); check the size; B: numbers found after the name (line 303); check the size |
| Tropicana Pink Lemonade | 32 fl oz | the guide gives no saturated_fat_g, fiber_g | 400 / 0 / – / – / – / 420 / 108 / – / 10 / 0 | 400 / 0 / – / – / – / 420 / 108 / – / 10 / 0 | A: numbers found after the name (line 304); check the size; B: numbers found after the name (line 304); check the size |
| Ize Sparkling Blackberry Juice | 12 fl oz | the guide gives no saturated_fat_g, fiber_g | 130 / 0 / – / – / – / 25 / 31 / – / 29 / 0 | 130 / 0 / – / – / – / 25 / 31 / – / 29 / 0 | A: numbers found after the name (line 305); check the size; B: numbers found after the name (line 305); check the size |
| Ize Sparkling Clementine Juice | 12 fl oz | the guide gives no saturated_fat_g, fiber_g | 120 / 0 / – / – / – / 25 / 30 / – / 27 / 0 | 120 / 0 / – / – / – / 25 / 30 / – / 27 / 0 | A: numbers found after the name (line 306); check the size; B: numbers found after the name (line 306); check the size |
| Mott's Apple Juice | 6.75 fl oz | the guide gives no saturated_fat_g, fiber_g | 100 / 0 / – / – / – / 10 / 24 / – / 23 / 0 | 100 / 0 / – / – / – / 10 / 24 / – / 23 / 0 | A: numbers found after the name (line 307); check the size; B: numbers found after the name (line 307); check the size |
| 1% Reduced Fat Milk | 8 fl oz | differ: fat_g, saturated_fat_g, trans_fat_g | 100 / 18 / 2 / 1.5 / 15 / 180 / 23 / 0 / 22 / 8 | 100 / 2 / 1.5 / – / 15 / 180 / 23 / 0 / 22 / 8 | A: numbers found after the name (line 308); check the size; B: numbers found after the name (line 308); check the size |
| 2% Reduced Fat Chocolate Milk | 8 fl oz | differ: fat_g, saturated_fat_g, trans_fat_g | 220 / 45 / 5 / 3.5 / 25 / 230 / 32 / 0.5 / 29 / 10 | 220 / 5 / 3.5 / 0 / 25 / 230 / 32 / 0.5 / 29 / 10 | A: numbers found after the name (line 309); check the size; B: numbers found after the name (line 309); check the size |
| Three Cheese Blend | 6 Slices | only in draft B | not found | 20 / 2 / 1 / 0 / 5 / 40 / 0 / 0 / 0 / 2 | B: numbers found after the name (line 80); check the size |
| Bacon, Armour | 6 Slices | only in draft B | not found | 30 / 2 / 1 / 0 / 5 / 90 / 0 / 0 / 0 / 2 | B: numbers found after the name (line 134); check the size |
| Chicken | 6 Slices | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 60 / 0 / 0 / 0 / 2 | B: numbers found after the name (line 33); check the size |
| Ham | 6 Slices | only in draft B | not found | 10 / 0 / 0 / 0 / 5 / 80 / 0 / 0 / 0 / 1 | B: numbers found after the name (line 136); check the size |
| Italian Sausage | 6 Slices | only in draft B | not found | 20 / 2 / 0.5 / 0 / 5 / 60 / 0 / 0 / 0 / 1 | B: numbers found after the name (line 137); check the size |
| Linguica, Burke | 6 Slices | only in draft B | not found | 15 / 1 / 0.5 / 0 / 5 / 70 / 0 / 0 / 0 / 1 | B: numbers found after the name (line 138); check the size |
| Mini Pepperoni | 6 Slices | only in draft B | not found | 20 / 2.5 / 1 / 0 / 5 / 110 / 0 / 0 / 0 / 1 | B: numbers found after the name (line 139); check the size |
| Salami | 6 Slices | only in draft B | not found | 20 / 2 / 0.5 / 0 / 5 / 90 / 0 / 0 / 0 / 1 | B: numbers found after the name (line 39); check the size |
| Artichoke Hearts | 6 Slices | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 50 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 143); check the size, mostly zeros: look |
| Black Olives | 6 Slices | only in draft B | not found | 10 / 1 / 0 / 0 / 0 / 70 / 1 / 0 / 0 / 0 | B: numbers found after the name (line 144); check the size |
| Green Onions | 6 Slices | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 43); check the size, mostly zeros: look |
| Green Peppers | 6 Slices | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 44); check the size, mostly zeros: look |
| Jalapeños | 6 Slices | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 45); check the size, mostly zeros: look |
| Mushrooms | 6 Slices | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 46); check the size, mostly zeros: look |
| Pineapple | 6 Slices | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 0 / 2 / 0 / 2 / 0 | B: numbers found after the name (line 47); check the size |
| Red Onions | 6 Slices | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 48); check the size, mostly zeros: look |
| Roma Tomatoes | 6 Slices | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 99); check the size, mostly zeros: look |
| Chopped Garlic | 6 Slices | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 50); check the size, mostly zeros: look |
| Spinach | 6 Slices | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 51); check the size, mostly zeros: look |
| Yellow Onions | 6 Slices | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 52); check the size, mostly zeros: look |
| Zucchini | 6 Slices | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 53); check the size, mostly zeros: look |
| Bleu Cheese | 2 oz | only in draft B | not found | 290 / 31 / 7 / 0.5 / 30 / 395 / 1 / 0 / 0.5 / 3 | B: numbers found after the name (line 217); check the size |
| Bleu Cheese | 5 oz | only in draft B | not found | 730 / 78 / 17 / 0.5 / 80 / 980 / 6 / 0 / 5 / 4 | B: numbers found after the name (line 218); check the size |
| Creamy Ranch | 2 oz | only in draft B | not found | 220 / 23 / 4 / 0 / 15 / 390 / 2 / 0 / 2 / 2 | B: numbers found after the name (line 219); check the size |
| Creamy Ranch | 5 oz | only in draft B | not found | 560 / 58 / 10 / 0.5 / 40 / 980 / 6 / 0 / 5 / 4 | B: numbers found after the name (line 220); check the size |
| Zesty Red Sauce | 2 oz | only in draft B | not found | 30 / 0 / 0 / 0 / 0 / 135 / 6 / 1 / 4 / 1 | B: numbers found after the name (line 221); check the size |
| Zesty Red Sauce | 5 oz | only in draft B | not found | 70 / 0.5 / 0 / 0 / 0 / 330 / 15 / 4 / 9 / 3 | B: numbers found after the name (line 222); check the size |
| Polynesian Sweet Chili Sauce | 2 oz | only in draft B | not found | 90 / 0 / 0 / 0 / 0 / 590 / 21 / 0.5 / 18 / 0 | B: numbers found after the name (line 223); check the size |
| Polynesian Sweet Chili Sauce | 5 oz | only in draft B | not found | 220 / 0.5 / 0 / 0 / 0 / 1480 / 52 / 1 / 46 / 1 | B: numbers found after the name (line 224); check the size |
| Thousand Island | 2 oz | only in draft B | not found | 280 / 28 / 4.5 / 0 / 20 / 390 / 7 / 0 / 6 / 0.5 | B: numbers found after the name (line 225); check the size |
| Thousand Island | 5 oz | only in draft B | not found | 700 / 70 / 11 / 0.5 / 55 / 980 / 18 / 0 / 16 / 1 | B: numbers found after the name (line 226); check the size |
| Parmesan Vinaigrette | 2 oz | only in draft B | not found | 230 / 25 / 4 / 0 / 0 / 550 / 2 / 1 / 2 / 0 | B: numbers found after the name (line 227); check the size |
| Parmesan Vinaigrette | 5 oz | only in draft B | not found | 600 / 60 / 10 / 0 / 0 / 1400 / 5 / 0 / 5 / 0 | B: numbers found after the name (line 228); check the size |
| Marinara Sauce | 2 oz | only in draft B | not found | 30 / 0 / 0 / 0 / 0 / 220 / 6 / 1 / 4 / 0.5 | B: numbers found after the name (line 229); check the size |
| Marinara Sauce | 5 oz | only in draft B | not found | 70 / 0.5 / 0 / 0 / 0 / 560 / 15 / 4 / 9 / 2 | B: numbers found after the name (line 230); check the size |
| Mango Habanero Sauce | 2 oz | only in draft B | not found | 80 / 0 / 0 / 0 / 0 / 440 / 20 / 0.5 / 18 / 0 | B: numbers found after the name (line 231); check the size |
| Mango Habanero Sauce | 5 oz | only in draft B | not found | 200 / 0.5 / 0 / 0 / 0 / 1110 / 51 / 1 / 45 / 0.5 | B: numbers found after the name (line 232); check the size |
| RT BBQ Sauce | 2 oz | only in draft B | not found | 90 / 0 / 0 / 0 / 0 / 480 / 22 / 0 / 18 / 0 | B: numbers found after the name (line 233); check the size |
| RT BBQ Sauce | 5 oz | only in draft B | not found | 220 / 0.5 / 0 / 0 / 0 / 1210 / 53 / 2 / 45 / 2 | B: numbers found after the name (line 234); check the size |
| RT Mild Buffalo Sauce | 2 oz | only in draft B | not found | 120 / 12 / 2 / 0.5 / 0 / 1240 / 2 / 0.5 / 0 / 0 | B: numbers found after the name (line 235); check the size |
| RT Mild Buffalo Sauce | 5 oz | only in draft B | not found | 290 / 31 / 4.5 / 1 / 0 / 3090 / 4 / 2 / 0.5 / 0.5 | B: numbers found after the name (line 236); check the size |
| RT Hot Buffalo Sauce | 2 oz | only in draft B | not found | 100 / 10 / 1.5 / 0.5 / 0 / 1340 / 2 / 0.5 / 0 / 0 | B: numbers found after the name (line 237); check the size |
| RT Hot Buffalo Sauce | 5 oz | only in draft B | not found | 250 / 26 / 3.5 / 1 / 0 / 3350 / 5 / 2 / 1 / 1 | B: numbers found after the name (line 238); check the size |
| Garden Salad - Side (3 oz) | 1 | only in draft B | not found | 15 / 0 / 0 / 0 / 2.5 / 15 / 3 / 1 / 2 / 0.5 | B: numbers found after the name (line 242); check the size |
| Garden Salad - Individual | 1 | only in draft B | not found | 100 / 3.5 / 0.5 / 0 / 2.5 / 150 / 16 / 3 / 5 / 4 | B: numbers found after the name (line 243); check the size |
| Garden Salad - Family/Entree | 1 | only in draft B | not found | 210 / 7 / 0.5 / 0 / 2.5 / 320 / 33 / 6 / 9 / 7 | B: numbers found after the name (line 244); check the size |
| Brisk No Calorie Peach Green Tea | 12 fl oz | only in draft B | not found | 0 / 0 / – / – / – / 70 / 0 / – / 0 / 0 | B: numbers found after the name (line 253); check the size, mostly zeros: look |
| Brisk No Calorie Peach Green Tea | 16 fl oz | only in draft B | not found | 0 / 0 / – / – / – / 90 / 0 / – / 0 / 0 | B: numbers found after the name (line 254); check the size, mostly zeros: look |
| Brisk No Calorie Peach Green Tea | 22 fl oz | only in draft B | not found | 0 / 0 / – / – / – / 130 / 0 / – / 0 / 0 | B: numbers found after the name (line 255); check the size, mostly zeros: look |
| Brisk No Calorie Peach Green Tea | 32 fl oz | only in draft B | not found | 0 / 0 / – / – / – / 190 / 0 / – / 0 / 0 | B: numbers found after the name (line 256); check the size, mostly zeros: look |
| Raspberry Brisk Iced Tea | 12 fl oz | only in draft B | not found | 80 / 0 / – / – / – / 45 / 20 / – / 20 / 0 | B: numbers found after the name (line 257); check the size |
| Raspberry Brisk Iced Tea | 16 fl oz | only in draft B | not found | 100 / 0 / – / – / – / 60 / 26 / – / 26 / 0 | B: numbers found after the name (line 258); check the size |
| Raspberry Brisk Iced Tea | 22 fl oz | only in draft B | not found | 140 / 0 / – / – / – / 80 / 36 / – / 36 / 0 | B: numbers found after the name (line 259); check the size |
| Raspberry Brisk Iced Tea | 32 fl oz | only in draft B | not found | 200 / 0 / – / – / – / 120 / 52 / – / 52 / 0 | B: numbers found after the name (line 260); check the size |
| Brisk Unsweetened No Lemon Iced Tea | 12 fl oz | only in draft B | not found | 0 / 0 / – / – / – / 45 / 0 / – / 0 / 0 | B: numbers found after the name (line 261); check the size, mostly zeros: look |
| Brisk Unsweetened No Lemon Iced Tea | 16 fl oz | only in draft B | not found | 0 / 0 / – / – / – / 60 / 0 / – / 0 / 0 | B: numbers found after the name (line 262); check the size, mostly zeros: look |
| Brisk Unsweetened No Lemon Iced Tea | 22 fl oz | only in draft B | not found | 0 / 0 / – / – / – / 85 / 0 / – / 0 / 0 | B: numbers found after the name (line 263); check the size, mostly zeros: look |
| Brisk Unsweetened No Lemon Iced Tea | 32 fl oz | only in draft B | not found | 0 / 0 / – / – / – / 120 / 0 / – / 0 / 0 | B: numbers found after the name (line 264); check the size, mostly zeros: look |
| Diet Pepsi | 12 fl oz | only in draft B | not found | 0 / 0 / – / – / – / 35 / 0 / – / 0 / 0 | B: numbers found after the name (line 265); check the size, mostly zeros: look |
| Diet Pepsi | 16 fl oz | only in draft B | not found | 0 / 0 / – / – / – / 50 / 0 / – / 0 / 0 | B: numbers found after the name (line 266); check the size, mostly zeros: look |
| Diet Pepsi | 22 fl oz | only in draft B | not found | 0 / 0 / – / – / – / 65 / 0 / – / 0 / 0 | B: numbers found after the name (line 267); check the size, mostly zeros: look |
| Diet Pepsi | 32 fl oz | only in draft B | not found | 0 / 0 / – / – / – / 100 / 0 / – / 0 / 0 | B: numbers found after the name (line 268); check the size, mostly zeros: look |
| Dr. Pepper | 12 fl oz | only in draft B | not found | 150 / 0 / – / – / – / 60 / 40 / – / 38 / 0 | B: numbers found after the name (line 269); check the size |
| Dr. Pepper | 16 fl oz | only in draft B | not found | 200 / 0 / – / – / – / 80 / 53 / – / 51 / 0 | B: numbers found after the name (line 270); check the size |
| Dr. Pepper | 22 fl oz | only in draft B | not found | 275 / 0 / – / – / – / 110 / 73 / – / 70 / 0 | B: numbers found after the name (line 271); check the size |
| Dr. Pepper | 32 fl oz | only in draft B | not found | 400 / 0 / – / – / – / 160 / 106 / – / 102 / 0 | B: numbers found after the name (line 272); check the size |
| House Chips | 1 (4 oz) | only in draft B | not found | 300 / 21 / 4 / 0 / 7 / 900 / 25 / 2 / 2 / 3 | B: numbers found after the name (line 413); check the size |
| Guinevere's Garden Delight® | 6 Slices | both read it the same, but its protein, carbs and fat make 275 kcal, not 190 | 190 / 7 / 3 / 0 / 15 / 510 / 46 / 2 / 6 / 7 | 190 / 7 / 3 / 0 / 15 / 510 / 46 / 2 / 6 / 7 | A: numbers found after the name (line 117); check the size; B: numbers found after the name (line 117); check the size |
| Applewood Smoked Bacon | 0.75 oz | both read it the same, but its protein, carbs and fat make 294 kcal, not 110 | 110 / 30 / 3.5 / 0 / 10 / 340 / 0 / 0 / 0 / 6 | 110 / 30 / 3.5 / 0 / 10 / 340 / 0 / 0 / 0 / 6 | A: numbers found after the name (line 454); check the size; B: numbers found after the name (line 454); check the size |
| Green Olives | 2 Tbsp | both read it the same, but its protein, carbs and fat make 9 kcal, not 50 | 50 / 0.5 / 0 / 0 / 0 / 350 / 1 / 0 / 0 / 0 | 50 / 0.5 / 0 / 0 / 0 / 350 / 1 / 0 / 0 / 0 | A: numbers found after the name (line 492); check the size; B: numbers found after the name (line 492); check the size |
| Pepperoncinis | 1/4 Cup | both read it the same, but its protein, carbs and fat make 8 kcal, not 50 | 50 / 0 / 0 / 0 / 0 / 600 / 2 / 1 / 0 / 0 | 50 / 0 / 0 / 0 / 0 / 600 / 2 / 1 / 0 / 0 | A: numbers found after the name (line 496); check the size; B: numbers found after the name (line 496); check the size |
| Tropical Fruit Salad | 1/2 Cup | both read it the same, but its protein, carbs and fat make 92 kcal, not 120 | 120 / 0 / 0 / 0 / 0 / 0 / 22 / 2 / 20 / 1 | 120 / 0 / 0 / 0 / 0 / 0 / 22 / 2 / 20 / 1 | A: numbers found after the name (line 516); check the size; B: numbers found after the name (line 516); check the size |

## Spot check (9 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Grilled Onions | 1.5 oz | 60 / 6 / 0 / 1.5 / 0 / 40 / 2 / 0 / 2 / 2 |
| King Arthur's Supreme® | 6 Slices | 290 / 12 / 5 / 0 / 30 / 620 / 33 / 2 / 5 / 10 |
| Lay's Potato Chips Original | 1 (1 oz.) | 160 / 10 / 1.5 / 0 / 0 / 170 / 15 / 1 / 1 / 2 |
| Red Wine Vinegar | 1 tbsp. | 3 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 |
| Ham Club | 1 | 670 / 30 / 12 / 0.5 / 95 / 2430 / 59 / 3 / 4 / 39 |
| Maui Zaui™ (Zesty Red Sauce) | 12 Slices | 180 / 8 / 3.5 / 0 / 20 / 480 / 19 / 0.5 / 3 / 9 |
| Dessert Pizza | XL (16) | 290 / 7 / 1.5 / 0 / 0 / 330 / 52 / 1 / 23 / 4 |
| Garlic Parmesan Twists® | 1 Twist | 170 / 5 / 2 / 0 / 10 / 460 / 25 / 1 / 1 / 6 |
| Maui Zaui™ with Pepperoni | 12 Slices | 200 / 9 / 4.5 / 0 / 25 / 530 / 20 / 0.5 / 4 / 9 |
