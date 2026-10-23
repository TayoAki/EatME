# Baskin-Robbins: lines for a person

Guide: https://www.baskinrobbins.com/en/nutrition?srsltid=AYCX9vJ4kPmX1wr0d_8IstpfFOnKoF9SkalHuYbgM71NhmZrnGUFreHh (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (81)

The last column comes from `npm run chains:evidence`: whether a draft's numbers sit right after the item's name in the guide text the drafts read. It can't read sizes or sections (one draft called a single 78 g cookie a "6 pack"): check those against the guide, then fix the line and set its check to `person`.

Fix each line in `menus/baskin-robbins.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B | In the guide text (no AI) |
| --- | --- | --- | --- | --- | --- |
| Chocolate Dipped Banana | 1 Banana Pop (145g) | differ: sodium_mg | 280 / 15 / 9 / 0 / 0 / 0 / 38 / 5 / 22 / 3 | 280 / 15 / 9 / 0 / 0 / 15 / 38 / 5 / 22 / 3 | A: numbers found after the name (line 481); check the size; B: numbers found after the name (line 481); check the size |
| Baseball Nut® | 1 - 2.5 oz | only in draft B | not found | 170 / 9 / 4.5 / 0 / 25 / 80 / 21 / 0 / 15 / 3 | B: numbers found after the name (line 115); check the size |
| Baseball Nut® | Scoop (71 grams) | only in draft B | not found | 170 / 9 / 4.5 / 0 / 25 / 80 / 21 / 0 / 15 / 3 | B: numbers found after the name (line 115); check the size |
| Baseball Nut® | 1 - 4 oz | only in draft B | not found | 280 / 14 / 8 / 0 / 45 / 125 / 34 / 1 / 23 / 5 | B: numbers found after the name (line 117); check the size |
| Baseball Nut® | Scoop (113 grams) | only in draft B | not found | 280 / 14 / 8 / 0 / 45 / 125 / 34 / 1 / 23 / 5 | B: numbers found after the name (line 117); check the size |
| Black Walnut | 1 - 4 oz | only in draft B | not found | 260 / 18 / 8 / 0 / 50 / 95 / 20 / 1 / 15 / 6 | B: numbers found after the name (line 119); check the size |
| Black Walnut | Scoop (113 grams) | only in draft B | not found | 260 / 18 / 8 / 0 / 50 / 95 / 20 / 1 / 15 / 6 | B: numbers found after the name (line 119); check the size |
| Black Walnut | 1 - 2.5 oz | only in draft B | not found | 160 / 11 / 5 / 0 / 30 / 60 / 12 / 1 / 10 / 4 | B: numbers found after the name (line 121); check the size |
| Black Walnut | Scoop (71 grams) | only in draft B | not found | 160 / 11 / 5 / 0 / 30 / 60 / 12 / 1 / 10 / 4 | B: numbers found after the name (line 121); check the size |
| Cherries Jubilee | 1 - 2.5 oz | only in draft B | not found | 150 / 7 / 4.5 / 0 / 30 / 45 / 20 / 0 / 16 / 2 | B: numbers found after the name (line 123); check the size |
| Cherries Jubilee | Scoop (71 grams) | only in draft B | not found | 150 / 7 / 4.5 / 0 / 30 / 45 / 20 / 0 / 16 / 2 | B: numbers found after the name (line 123); check the size |
| Cherries Jubilee | 1 - 4 oz | only in draft B | not found | 240 / 11 / 7 / 0 / 45 / 75 / 31 / 0 / 25 / 4 | B: numbers found after the name (line 125); check the size |
| Cherries Jubilee | Scoop (113 grams) | only in draft B | not found | 240 / 11 / 7 / 0 / 45 / 75 / 31 / 0 / 25 / 4 | B: numbers found after the name (line 125); check the size |
| Chocolate | 1 - 2.5 oz | only in draft B | not found | 150 / 9 / 6 / 0 / 30 / 75 / 16 / 1 / 12 / 3 | B: numbers found after the name (line 127); check the size |
| Chocolate | Scoop (71 grams) | only in draft B | not found | 150 / 9 / 6 / 0 / 30 / 75 / 16 / 1 / 12 / 3 | B: numbers found after the name (line 127); check the size |
| Chocolate | 1 - 4 oz | only in draft B | not found | 240 / 14 / 9 / 0 / 50 / 115 / 26 / 2 / 19 / 5 | B: numbers found after the name (line 129); check the size |
| Chocolate | Scoop (113 grams) | only in draft B | not found | 240 / 14 / 9 / 0 / 50 / 115 / 26 / 2 / 19 / 5 | B: numbers found after the name (line 129); check the size |
| Chocolate Chip | 1 - 2.5 oz | only in draft B | not found | 170 / 10 / 6 / 0 / 35 / 55 / 17 / 1 / 14 / 3 | B: numbers found after the name (line 131); check the size |
| Chocolate Chip | Scoop (71 grams) | only in draft B | not found | 170 / 10 / 6 / 0 / 35 / 55 / 17 / 1 / 14 / 3 | B: numbers found after the name (line 131); check the size |
| Chocolate Chip | 1 - 4 oz | only in draft B | not found | 260 / 16 / 10 / 0 / 55 / 90 / 28 / 1 / 22 / 5 | B: numbers found after the name (line 133); check the size |
| Chocolate Chip | Scoop (113 grams) | only in draft B | not found | 260 / 16 / 10 / 0 / 55 / 90 / 28 / 1 / 22 / 5 | B: numbers found after the name (line 133); check the size |
| Chocolate Chip Cheesecake | 1 - 2.5 oz | only in draft B | not found | 200 / 12 / 6 / 0 / 30 / 85 / 21 / 1 / 16 / 3 | B: numbers found after the name (line 135); check the size |
| Chocolate Chip Cheesecake | Scoop (71 grams) | only in draft B | not found | 200 / 12 / 6 / 0 / 30 / 85 / 21 / 1 / 16 / 3 | B: numbers found after the name (line 135); check the size |
| Chocolate Chip Cheesecake | 1 - 4 oz | only in draft B | not found | 310 / 19 / 9 / 0 / 50 / 135 / 34 / 2 / 25 / 5 | B: numbers found after the name (line 137); check the size |
| Chocolate Chip Cheesecake | Scoop (113 grams) | only in draft B | not found | 310 / 19 / 9 / 0 / 50 / 135 / 34 / 2 / 25 / 5 | B: numbers found after the name (line 137); check the size |
| Chocolate Chip Cookie Dough | 1 - 2.5 oz | only in draft B | not found | 180 / 10 / 6 / 0 / 35 / 85 / 22 / 0 / 16 / 3 | B: numbers found after the name (line 139); check the size |
| Chocolate Chip Cookie Dough | Scoop (71 grams) | only in draft B | not found | 180 / 10 / 6 / 0 / 35 / 85 / 22 / 0 / 16 / 3 | B: numbers found after the name (line 139); check the size |
| Chocolate Chip Cookie Dough | 1 - 4 oz | only in draft B | not found | 290 / 15 / 9 / 0.5 / 55 / 130 / 36 / 1 / 26 / 5 | B: numbers found after the name (line 141); check the size |
| Chocolate Chip Cookie Dough | Scoop (113 grams) | only in draft B | not found | 290 / 15 / 9 / 0.5 / 55 / 130 / 36 / 1 / 26 / 5 | B: numbers found after the name (line 141); check the size |
| Chocolate Fudge | 1 - 4 oz | only in draft B | not found | 240 / 15 / 9 / 0 / 50 / 135 / 27 / 2 / 19 / 4 | B: numbers found after the name (line 143); check the size |
| Chocolate Fudge | Scoop (113 grams) | only in draft B | not found | 240 / 15 / 9 / 0 / 50 / 135 / 27 / 2 / 19 / 4 | B: numbers found after the name (line 143); check the size |
| Chocolate Fudge | 1 - 2.5 oz | only in draft B | not found | 150 / 9 / 6 / 0 / 30 / 85 / 17 / 1 / 12 / 3 | B: numbers found after the name (line 145); check the size |
| Chocolate Mousse Royale | 1 - 2.5 oz | only in draft B | not found | 190 / 11 / 8 / 0 / 25 / 60 / 22 / 1 / 16 / 3 | B: numbers found after the name (line 147); check the size |
| Chocolate Mousse Royale | 1 - 4 oz | only in draft B | not found | 310 / 17 / 12 / 0 / 40 / 95 / 35 / 2 / 26 / 5 | B: numbers found after the name (line 148); check the size |
| Cookie Monster | 1 - 2.5 oz | only in draft B | not found | 190 / 10 / 6 / 0 / 30 / 75 / 24 / 0 / 18 / 3 | B: numbers found after the name (line 151); check the size |
| Cookie Monster | 1 - 4 oz | only in draft B | not found | 310 / 15 / 9 / 0 / 50 / 120 / 38 / 0 / 28 / 5 | B: numbers found after the name (line 152); check the size |
| Cotton Candy | 1 - 2.5 oz | only in draft B | not found | 160 / 9 / 6 / 0 / 35 / 55 / 16 / 0 / 13 / 3 | B: numbers found after the name (line 155); check the size |
| Cotton Candy | 1 - 4 oz | only in draft B | not found | 250 / 14 / 9 / 0.5 / 55 / 85 / 25 / 0 / 21 / 5 | B: numbers found after the name (line 156); check the size |
| Creole Cream Chese | 1 - 4 oz | only in draft B | not found | 230 / 13 / 8 / 0 / 55 / 90 / 23 / 0 / 18 / 4 | B: numbers found after the name (line 159); check the size |
| Creole Cream Chese | 1 - 2.5 oz | only in draft B | not found | 150 / 8 / 5 / 0 / 35 / 55 / 15 / 0 / 11 / 3 | B: numbers found after the name (line 160); check the size |
| Daiquiri Ice | 1 - 2.5 oz | only in draft B | not found | 90 / 0 / 0 / 0 / 0 / 0 / 22 / 0 / 17 / 0 | B: numbers found after the name (line 163); check the size |
| Daiquiri Ice | 1 - 4 oz | only in draft B | not found | 140 / 0 / 0 / 0 / 0 / 5 / 35 / 0 / 27 / 0 | B: numbers found after the name (line 164); check the size |
| Galactic Brownie | 1 - 2.5 oz | only in draft B | not found | 200 / 10 / 6 / 0 / 25 / 65 / 25 / 1 / 20 / 3 | B: numbers found after the name (line 167); check the size |
| Galactic Brownie | 1 - 4 oz | only in draft B | not found | 310 / 16 / 9 / 0 / 45 / 105 / 39 / 2 / 31 / 5 | B: numbers found after the name (line 168); check the size |
| Gold Medal Ribbon® | 1 - 2.5 oz | only in draft B | not found | 150 / 8 / 5 / 0 / 30 / 100 / 18 / 0 / 13 / 3 | B: numbers found after the name (line 171); check the size |
| Gold Medal Ribbon® | 1 - 4 oz | only in draft B | not found | 240 / 13 / 8 / 0 / 45 / 160 / 29 / 1 / 21 / 5 | B: numbers found after the name (line 172); check the size |
| Icing on the Cake® | 1 - 2.5 oz | only in draft B | not found | 210 / 11 / 6 / 0 / 25 / 60 / 24 / 0 / 19 / 3 | B: numbers found after the name (line 175); check the size |
| Icing on the Cake® | 1 - 4 oz | only in draft B | not found | 330 / 18 / 9 / 0 / 40 / 100 / 39 / 0 / 31 / 4 | B: numbers found after the name (line 176); check the size |
| Jamoca® | 1 - 2.5 oz | only in draft B | not found | 140 / 8 / 5 / 0 / 35 / 55 / 13 / 0 / 11 / 3 | B: numbers found after the name (line 179); check the size |
| Jamoca® | 1 - 4 oz | only in draft B | not found | 220 / 13 / 8 / 0 / 55 / 85 / 21 / 0 / 17 / 5 | B: numbers found after the name (line 180); check the size |
| Jamoca® | Scoop (113 grams) | only in draft B | not found | 220 / 13 / 8 / 0 / 55 / 85 / 21 / 0 / 17 / 5 | B: numbers found after the name (line 180); check the size |
| Jamoca® Almond Fudge | 1 - 2.5 oz | only in draft B | not found | 170 / 9 / 4.5 / 0 / 25 / 45 / 19 / 1 / 14 / 3 | B: numbers found after the name (line 184); check the size |
| Jamoca® Almond Fudge | Scoop (71 grams) | only in draft B | not found | 170 / 9 / 4.5 / 0 / 25 / 45 / 19 / 1 / 14 / 3 | B: numbers found after the name (line 184); check the size |
| Jamoca® Almond Fudge | 1 - 4 oz | only in draft B | not found | 270 / 15 / 7 / 0 / 40 / 70 / 31 / 1 / 22 / 5 | B: numbers found after the name (line 186); check the size |
| Jamoca® Almond Fudge | Scoop (113 grams) | only in draft B | not found | 270 / 15 / 7 / 0 / 40 / 70 / 31 / 1 / 22 / 5 | B: numbers found after the name (line 186); check the size |
| Lemon Custard | 1 - 2.5 oz | only in draft B | not found | 150 / 8 / 5 / 0 / 45 / 60 / 16 / 0 / 13 / 3 | B: numbers found after the name (line 188); check the size |
| Lemon Custard | Scoop (71 grams) | only in draft B | not found | 150 / 8 / 5 / 0 / 45 / 60 / 16 / 0 / 13 / 3 | B: numbers found after the name (line 188); check the size |
| Lemon Custard | 1 - 4 oz | only in draft B | not found | 240 / 13 / 8 / 0 / 70 / 100 / 26 / 0 / 21 / 5 | B: numbers found after the name (line 190); check the size |
| Lemon Custard | Scoop (113 grams) | only in draft B | not found | 240 / 13 / 8 / 0 / 70 / 100 / 26 / 0 / 21 / 5 | B: numbers found after the name (line 190); check the size |
| Mint Chocolate Chip | 1 - 2.5 oz | only in draft B | not found | 170 / 10 / 6 / 0 / 35 / 55 / 17 / 1 / 14 / 3 | B: numbers found after the name (line 192); check the size |
| Mint Chocolate Chip | Scoop (71 grams) | only in draft B | not found | 170 / 10 / 6 / 0 / 35 / 55 / 17 / 1 / 14 / 3 | B: numbers found after the name (line 192); check the size |
| Mint Chocolate Chip | 1 - 4 oz | only in draft B | not found | 260 / 16 / 10 / 0 / 55 / 85 / 28 / 1 / 22 / 5 | B: numbers found after the name (line 194); check the size |
| Mint Chocolate Chip | Scoop (113 grams) | only in draft B | not found | 260 / 16 / 10 / 0 / 55 / 85 / 28 / 1 / 22 / 5 | B: numbers found after the name (line 194); check the size |
| Non-Dairy Cookies 'n Crème | oz | only in draft B | not found | 200 / 11 / 8 / 0 / 0 / 100 / 24 / 1 / 16 / 1 | B: numbers found after the name (line 196); check the size |
| Non-Dairy Cookies 'n Crème | Scoop (71 grams) | only in draft B | not found | 200 / 11 / 8 / 0 / 0 / 100 / 24 / 1 / 16 / 1 | B: numbers found after the name (line 196); check the size |
| Non-Dairy Cookies 'n Crème | 1 - 4 oz | only in draft B | not found | 310 / 18 / 13 / 0 / 0 / 160 / 37 / 1 / 26 / 2 | B: numbers found after the name (line 198); check the size |
| Non-Dairy Cookies 'n Crème | Scoop (113 grams) | only in draft B | not found | 310 / 18 / 13 / 0 / 0 / 160 / 37 / 1 / 26 / 2 | B: numbers found after the name (line 198); check the size |
| Non-Dairy Jamoca® Chip | 1 - 2.5 oz | only in draft B | not found | 170 / 9 / 7 / 0 / 0 / 35 / 23 / 1 / 20 / 1 | B: numbers found after the name (line 200); check the size |
| Non-Dairy Jamoca® Chip | Scoop (71 grams) | only in draft B | not found | 170 / 9 / 7 / 0 / 0 / 35 / 23 / 1 / 20 / 1 | B: numbers found after the name (line 200); check the size |
| Non-Dairy Jamoca® Chip | 1 - 4 oz | only in draft B | not found | 270 / 14 / 11 / 0 / 0 / 50 / 37 / 1 / 31 / 1 | B: numbers found after the name (line 202); check the size |
| Non-Dairy Jamoca® Chip | Scoop (113 grams) | only in draft B | not found | 270 / 14 / 11 / 0 / 0 / 50 / 37 / 1 / 31 / 1 | B: numbers found after the name (line 202); check the size |
| Nutty Coconut | 1 - 2.5 oz | only in draft B | not found | 190 / 12 / 6 / 0 / 30 / 55 / 18 / 1 / 13 / 4 | B: numbers found after the name (line 204); check the size |
| Nutty Coconut | Scoop (71 grams) | only in draft B | not found | 190 / 12 / 6 / 0 / 30 / 55 / 18 / 1 / 13 / 4 | B: numbers found after the name (line 204); check the size |
| Nutty Coconut | 1 - 4 oz | only in draft B | not found | 300 / 19 / 9 / 0 / 45 / 90 / 28 / 1 / 20 / 6 | B: numbers found after the name (line 206); check the size |
| Nutty Coconut | Scoop (113 grams) | only in draft B | not found | 300 / 19 / 9 / 0 / 45 / 90 / 28 / 1 / 20 / 6 | B: numbers found after the name (line 206); check the size |
| OREO® 'n Cold Brew | 1 - 2.5 oz | only in draft B | not found | 200 / 11 / 5 / 0 / 25 / 95 / 22 / 1 / 15 / 3 | B: numbers found after the name (line 208); check the size |
| Reduced Fat, No Sugar Added | 4 oz | both read it the same, but its protein, carbs and fat make 235 kcal, not 200 | 200 / 7 / 4 / 0 / 20 / 120 / 39 / 3 / 6 / 4 | 200 / 7 / 4 / 0 / 20 / 120 / 39 / 3 / 6 / 4 | A: numbers found after the name (line 64); check the size; B: numbers found after the name (line 64); check the size |
| Strawberry Shortcake | 1 serving | both read it the same, but its protein, carbs and fat make 235 kcal, not 130 | 130 / 7 / 4 / 0 / 20 / 120 / 39 / 3 / 6 / 4 | 130 / 7 / 4 / 0 / 20 / 120 / 39 / 3 / 6 / 4 | A: numbers found after the name (line 65); check the size; B: numbers found after the name (line 65); check the size |
| Caramel Turtle Truffle | 1 - 4 oz | both read it the same, but its protein, carbs and fat make 194 kcal, not 160 | 160 / 6 / 4 / 0 / 25 / 80 / 30 / 3 / 7 / 5 | 160 / 6 / 4 / 0 / 25 / 80 / 30 / 3 / 7 / 5 | A: numbers found after the name (line 246); check the size; B: numbers found after the name (line 246); check the size |
| Reduced Fat, No Sugar Added | 1 - 4 oz | both read it the same, but its protein, carbs and fat make 190 kcal, not 160 | 160 / 6 / 4 / 0 / 25 / 80 / 29 / 3 / 8 / 5 | 160 / 6 / 4 / 0 / 25 / 80 / 29 / 3 / 8 / 5 | A: numbers found after the name (line 248); check the size; B: numbers found after the name (line 248); check the size |
| Very Berry Strawberry | 1 - 4 oz | both read it the same, but its protein, carbs and fat make 275 kcal, not 220 | 220 / 11 / 7 / 0 / 40 / 65 / 40 / 1 / 23 / 4 | 220 / 11 / 7 / 0 / 40 / 65 / 40 / 1 / 23 / 4 | A: numbers found after the name (line 274); check the size; B: numbers found after the name (line 274); check the size |

## Spot check (15 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Pink Bubblegum | 1 - 4 oz | 250 / 12 / 8 / 0 / 50 / 75 / 30 / 0 / 26 / 4 |
| German Chocolate Cake | Scoop (71 grams) | 200 / 10 / 5 / 0 / 25 / 80 / 24 / 1 / 16 / 3 |
| Lemon Sorbet | 1 - 2.5 oz | 80 / 0 / 0 / 0 / 0 / 0 / 21 / 0 / 16 / 0 |
| OREO® Layered Sundae | 1 Sundae (369 grams) | 1100 / 46 / 28 / 1 / 100 / 530 / 161 / 3 / 118 / 14 |
| Baseball Nut® Pre-Packed Quart | 2/3 cup (102 grams) | 250 / 13 / 7 / 0 / 40 / 115 / 30 / 1 / 21 / 4 |
| Gold Medal Ribbon® Pre-Packed Quart | 2/3 cup (98 grams) | 210 / 11 / 7 / 0 / 40 / 135 / 25 / 1 / 18 / 4 |
| Mom's Makin' Cookies® | 1 - 4 oz | 310 / 15 / 9 / 0 / 45 / 135 / 42 / 0 / 31 / 4 |
| Peppermint Fudge Cappy™ | 32 fl oz | 1120 / 40 / 31 / 1 / 85 / 430 / 179 / 2 / 150 / 15 |
| Peppermint | 1 - 4 oz | 270 / 14 / 9 / 0 / 50 / 80 / 33 / 0 / 27 / 4 |
| Chocolate Chip Milkshake - Medium | 24 fl oz | 1030 / 54 / 34 / 1.5 / 185 / 360 / 118 / 3 / 102 / 22 |
| Gold Medal Ribbon® Milkshake - Small | 16 fl oz | 680 / 30 / 19 / 1 / 110 / 380 / 91 / 1 / 73 / 14 |
| Chocolate Fudge Cappy™ - Medium | 24 fl oz | 860 / 32 / 24 / 0.5 / 70 / 380 / 136 / 3 / 113 / 13 |
| Creature Creations™ - High End | 2 Scoops (160g) | 490 / 30 / 15 / 0.5 / 55 / 210 / 51 / 3 / 36 / 9 |
| Chocolate Dipped Sugar Cone | 1 Cone (32 grams) | 160 / 8 / 4.5 / 0 / 0 / 65 / 22 / 1 / 13 / 1 |
| Mango Chamoy Bar | 1 Bar (106g) | 90 / 0 / 0 / 0 / 0 / 140 / 23 / 1 / 22 / 0 |
