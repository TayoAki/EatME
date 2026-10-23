# Freddy's: lines for a person

Guide: https://www.freddys.com/nutrition-and-allergens (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (35)

The last column comes from `npm run chains:evidence`: whether a draft's numbers sit right after the item's name in the guide text the drafts read. It can't read sizes or sections (one draft called a single 78 g cookie a "6 pack"): check those against the guide, then fix the line and set its check to `person`.

Fix each line in `menus/freddys.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B | In the guide text (no AI) |
| --- | --- | --- | --- | --- | --- |
| Make any Sandwich a Lettuce Wrap | 1 serving | both read numbers that can't be right: sugars -3 g above carbs -25 g | -180 / -6 / -1 / 0 / 0 / -270 / -25 / 1 / -3 / -3 | -180 / -6 / -1 / 0 / 0 / -270 / -25 / 1 / -3 / -3 | A: not as drafted (line 377 lacks -180, -6, -1, -270, -25, -3, -3); B: not as drafted (line 377 lacks -180, -6, -1, -270, -25, -3, -3) |
| Tropicana®️ Pink Lemonade | Small | only in draft A | 160 / 0 / 0 / 0 / 0 / 155 / 40 / 0 / 40 / 0 | not found | A: numbers found after the name (line 7169); check the size |
| Tropicana®️ Pink Lemonade | Medium | only in draft A | 260 / 0 / 0 / 0 / 0 / 260 / 67 / 0 / 67 / 0 | not found | A: numbers found after the name (line 7169); check the size |
| Tropicana®️ Pink Lemonade | Large | only in draft A | 410 / 0 / 0 / 0 / 0 / 410 / 107 / 0 / 107 / 0 | not found | A: numbers found after the name (line 7169); check the size |
| Tropicana®️ Lemonade | Small | only in draft A | 160 / 0 / 0 / 0 / 0 / 155 / 40 / 0 / 40 / 0 | not found | A: numbers found after the name (line 7307); check the size |
| Tropicana®️ Lemonade | Medium | only in draft A | 260 / 0 / 0 / 0 / 0 / 260 / 67 / 0 / 67 / 0 | not found | A: numbers found after the name (line 7307); check the size |
| Tropicana®️ Lemonade | Large | only in draft A | 410 / 0 / 0 / 0 / 0 / 410 / 107 / 0 / 107 / 0 | not found | A: numbers found after the name (line 7307); check the size |
| Luzianne®️ Iced Tea Unsweet | Small | only in draft A | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | not found | A: numbers found after the name (line 7859); check the size, mostly zeros: look |
| Luzianne®️ Iced Tea Unsweet | Medium | only in draft A | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | not found | A: numbers found after the name (line 7859); check the size, mostly zeros: look |
| Luzianne®️ Iced Tea Unsweet | Large | only in draft A | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | not found | A: numbers found after the name (line 7859); check the size, mostly zeros: look |
| Freddy's Bevies - Mango Sunrise Tea | Regular | the guide gives no saturated_fat_g | 100 / 0 / – / 0 / 0 / 10 / 26 / 0 / 24 / 0 | 100 / 0 / – / 0 / 0 / 10 / 26 / 0 / 24 / 0 | A: numbers found after the name (line 9147); check the size; B: numbers found after the name (line 9147); check the size |
| Freddy's Bevies - Mango Sunrise Tea | Large | the guide gives no saturated_fat_g | 180 / 0 / – / 0 / 0 / 15 / 45 / 0 / 42 / 0 | 180 / 0 / – / 0 / 0 / 15 / 45 / 0 / 42 / 0 | A: numbers found after the name (line 9147); check the size; B: numbers found after the name (line 9147); check the size |
| Freddy's Bevies -Peachy Keen Lemonade | Regular | differ: saturated_fat_g, trans_fat_g | 200 / 0 / 0 / 0 / 0 / 125 / 51 / 0 / 51 / 0 | 200 / 0 / – / – / 0 / 125 / 51 / 0 / 51 / 0 | A: numbers found after the name (line 9231); check the size; B: numbers found after the name (line 9231); check the size |
| Freddy's Bevies - Peachy Keen Lemonade | Large | only in draft A | 330 / 0 / 0 / 0 / 0 / 190 / 85 / 0 / 85 / 0 | not found | A: numbers found after the name (line 9273); check the size |
| Freddy's Bevies - Peachy Keen Tea | Regular | only in draft A | 100 / 0 / – / 0 / 0 / 10 / 25 / 0 / 24 / 0 | not found | A: numbers found after the name (line 9315); check the size |
| Freddy's Bevies - Peachy Keen Tea | Large | only in draft A | 180 / 0 / – / 0 / 0 / 15 / 43 / 0 / 42 / 0 | not found | A: numbers found after the name (line 9315); check the size |
| Freddy's Bevies - Strawberry Sunset Lemonade | Regular | differ: saturated_fat_g, trans_fat_g | 190 / 0 / 0 / 0 / 0 / 125 / 50 / 0 / 49 / 0 | 190 / 0 / – / – / 0 / 125 / 50 / 0 / 49 / 0 | A: numbers found after the name (line 9491); check the size; B: numbers found after the name (line 9491); check the size |
| Freddy's Bevies - Strawberry Sunset Lemonade | Large | differ: saturated_fat_g, trans_fat_g | 320 / 0 / 0 / 0 / 0 / 190 / 83 / 0 / 82 / 0 | 320 / 0 / – / – / 0 / 190 / 83 / 0 / 82 / 0 | A: numbers found after the name (line 9491); check the size; B: numbers found after the name (line 9491); check the size |
| Freddy's Bevies - Strawberry Sunset Tea | Regular | differ: trans_fat_g | 90 / 0 / – / 0 / 0 / 10 / 24 / 0 / 22 / 0 | 90 / 0 / – / – / 0 / 10 / 24 / 0 / 22 / 0 | A: numbers found after the name (line 9575); check the size; B: numbers found after the name (line 9575); check the size |
| Freddy's Bevies - Strawberry Sunset Tea | Large | differ: trans_fat_g | 160 / 0 / – / 0 / 0 / 15 / 42 / 0 / 38 / 0 | 160 / 0 / – / – / 0 / 15 / 42 / 0 / 38 / 0 | A: numbers found after the name (line 9575); check the size; B: numbers found after the name (line 9575); check the size |
| CYO Malt - Chocolate | Regular | only in draft A | – / – / – / – / – / – / – / – / – / – | not found | no numbers to look for |
| Luzianne®️ Iced Tea | Small | the guide gives no sugars_g, protein_g | 110 / 0 / 0 / 0 / 0 / 5 / 27 / 0 / – / – | 110 / 0 / 0 / 0 / 0 / 5 / 27 / 0 / – / – | A: numbers found after the name (line 7905); check the size; B: numbers found after the name (line 7905); check the size |
| Tropicana® Pink Lemonade | Small | only in draft B | not found | 160 / 0 / 0 / 0 / 0 / 155 / 40 / 0 / 40 / 0 | B: name not in the guide text |
| Tropicana® Pink Lemonade | Medium | only in draft B | not found | 260 / 0 / 0 / 0 / 0 / 260 / 67 / 0 / 67 / 0 | B: name not in the guide text |
| Tropicana® Pink Lemonade | Large | only in draft B | not found | 410 / 0 / 0 / 0 / 0 / 410 / 107 / 0 / 107 / 0 | B: name not in the guide text |
| Tropicana® Lemonade | Small | only in draft B | not found | 160 / 0 / 0 / 0 / 0 / 155 / 40 / 0 / 40 / 0 | B: name not in the guide text |
| Tropicana® Lemonade | Medium | only in draft B | not found | 260 / 0 / 0 / 0 / 0 / 260 / 67 / 0 / 67 / 0 | B: name not in the guide text |
| Tropicana® Lemonade | Large | only in draft B | not found | 410 / 0 / 0 / 0 / 0 / 410 / 107 / 0 / 107 / 0 | B: name not in the guide text |
| Luzianne® Iced Tea Unsweet | Small | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: name not in the guide text |
| Luzianne® Iced Tea Unsweet | Medium | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: name not in the guide text |
| Luzianne® Iced Tea Unsweet | Large | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: name not in the guide text |
| Freddy's Bevies -Peachy Keen Lemonade | Large | only in draft B | not found | 330 / 0 / – / – / 0 / 190 / 85 / 0 / 85 / 0 | B: numbers found after the name (line 9231); check the size |
| Freddy's Bevies -Peachy Keen Tea | Regular | only in draft B | not found | 100 / 0 / – / – / 0 / 10 / 25 / 0 / 24 / 0 | B: name not in the guide text |
| Freddy's Bevies -Peachy Keen Tea | Large | only in draft B | not found | 180 / 0 / – / – / 0 / 15 / 43 / 0 / 42 / 0 | B: name not in the guide text |
| Chocolate Chips | 1 serving | both read it the same, but its protein, carbs and fat make 156 kcal, not 130 | 130 / 8 / 4.5 / 0 / 0 / 0 / 19 / 2 / 15 / 2 | 130 / 8 / 4.5 / 0 / 0 / 0 / 19 / 2 / 15 / 2 | A: numbers found after the name (line 949); check the size; B: numbers found after the name (line 949); check the size |

## Spot check (15 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Freddy's Bevies - Blue Rizzberry Custard Cream Soda | Large | 430 / 7 / 4.5 / 0 / 40 / 100 / 87 / 0 / 86 / 3 |
| OREO® Double Trouble - Shake | Large | 1630 / 78 / 45 / 0 / 370 / 900 / 178 / 3 / 145 / 35 |
| Signature Turtle - Shake | Large | 2050 / 98 / 54 / 0 / 375 / 950 / 237 / 4 / 195 / 37 |
| Dirt n' Worms - Sundae | Regular | 860 / 37 / 23 / 0 / 205 / 410 / 102 / 0 / 84 / 17 |
| Peanut Butter Bananza - Sundae | Mini | 530 / 27 / 14 / 0 / 105 / 260 / 58 / 2 / 51 / 12 |
| Cheeseburger | Triple Patty | 910 / 54 / 22 / 2.5 / 240 / 2000 / 33 / 0 / 7 / 70 |
| Freddy's Frost - Orange Cream | Large | 1500 / 51 / 32 / 0 / 300 / 480 / 222 / 0 / 209 / 23 |
| Lipton Brisk®️ Peach | Large | 10 / 0 / 0 / 0 / 0 / 285 / 0 / 0 / 0 / 0 |
| Bacon | 1 serving | 80 / 6 / 2.5 / 0 / 20 / 330 / 1 / 0 / 1 / 7 |
| Hot Dog | 1 serving | 420 / 24 / 9 / 0 / 40 / 1000 / 35 / 0 / 6 / 15 |
| Pint - Chocolate | 1 serving | 1150 / 57 / 37 / 0 / 365 / 520 / 125 / 5 / 104 / 31 |
| Freddy's Bevies - Peach Peach Baby Custard Cream Soda | Large | 460 / 7 / 4.5 / 0 / 40 / 100 / 96 / 0 / 95 / 3 |
| Smoky Bacon Cheddar Stack | 1 serving | 1090 / 67 / 21 / 1.5 / 260 / 1700 / 48 / 2 / 18 / 70 |
| OREO® Double Trouble - Concrete | Large | 1520 / 72 / 42 / 0 / 350 / 820 / 169 / 3 / 135 / 29 |
| Hot Fudge | 1 serving | 160 / 5 / 5 / 0 / 0 / 70 / 25 / 1 / 19 / 0 |
