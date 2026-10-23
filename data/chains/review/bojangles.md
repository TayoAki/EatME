# Bojangles: lines for a person

Guide: https://storyblok.pleinaircdn.com/f/110020/x/6c7b2a7e6a/m25-099-2025_02-nutritiongudeupdates_bobitessalad_master.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (92)

The last column comes from `npm run chains:evidence`: whether a draft's numbers sit right after the item's name in the guide text the drafts read. It can't read sizes or sections (one draft called a single 78 g cookie a "6 pack"): check those against the guide, then fix the line and set its check to `person`.

Fix each line in `menus/bojangles.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B | In the guide text (no AI) |
| --- | --- | --- | --- | --- | --- |
| Creamy Buffalo Sauce | 2 oz | the guide gives no fiber_g | 170 / 18 / 3 / 0 / 15 / 0 / 2 / – / 0 / 0 | 170 / 18 / 3 / 0 / 15 / 0 / 2 / – / 0 / 0 | A: numbers found after the name (line 98); check the size; B: numbers found after the name (line 98); check the size |
| Cheerwine | Small | only in draft A | 200 / 0 / 0 / 0 / 0 / 56 / 34 / 0 / 56 / 0 | not found | A: not as drafted (line 124 lacks 200, 56, 34, 56) |
| Cheerwine | Regular | only in draft A | 280 / 0 / 0 / 0 / 0 / 77 / 47 / 0 / 77 / 0 | not found | A: numbers found after the name (line 124); check the size |
| Cheerwine | Large | only in draft A | 400 / 0 / 0 / 0 / 0 / 112 / 68 / 0 / 112 / 0 | not found | A: numbers found after the name (line 125); check the size |
| Coffee | Sm | only in draft A | 5 / 0 / 0 / 0 / 0 / 0 / 10 / 1 / 0 / 0 | not found | A: numbers found after the name (line 126); check the size |
| Coffee | Regular | only in draft A | 5 / 0 / 0 / 0 / 0 / 0 / 10 / 1 / 0 / 0 | not found | A: numbers found after the name (line 126); check the size |
| Diet Mountain Dew | Small | only in draft A | 0 / 0 / 0 / 0 / 0 / 0 / 80 / 0 / 0 / 0 | not found | A: numbers found after the name (line 128); check the size, mostly zeros: look |
| Diet Mountain Dew | Regular | only in draft A | 0 / 0 / 0 / 0 / 0 / 0 / 110 / 0 / 0 / 0 | not found | A: numbers found after the name (line 129); check the size, mostly zeros: look |
| Diet Mountain Dew | Large | only in draft A | 0 / 0 / 0 / 0 / 0 / 0 / 160 / 0 / 0 / 0 | not found | A: numbers found after the name (line 130); check the size, mostly zeros: look |
| Diet Pepsi | Small | only in draft A | 0 / 0 / 0 / 0 / 0 / 0 / 80 / 0 / 0 / 0 | not found | A: numbers found after the name (line 131); check the size, mostly zeros: look |
| Diet Pepsi | Regular | only in draft A | 0 / 0 / 0 / 0 / 0 / 0 / 110 / 0 / 0 / 0 | not found | A: numbers found after the name (line 132); check the size, mostly zeros: look |
| Diet Pepsi | Large | only in draft A | 0 / 0 / 0 / 0 / 0 / 0 / 160 / 0 / 0 / 0 | not found | A: numbers found after the name (line 133); check the size, mostly zeros: look |
| Dr Pepper | Small | only in draft A | 190 / 0 / 0 / 0 / 0 / 52 / 60 / 0 / 51 / 0 | not found | A: numbers found after the name (line 134); check the size |
| Dr Pepper | Regular | only in draft A | 260 / 0 / 0 / 0 / 0 / 72 / 80 / 0 / 70 / 0 | not found | A: numbers found after the name (line 135); check the size |
| Dr Pepper | Large | only in draft A | 380 / 0 / 0 / 0 / 0 / 104 / 115 / 0 / 102 / 0 | not found | A: numbers found after the name (line 136); check the size |
| Mirinda Strawberry | Small | only in draft A | 220 / 0 / 0 / 0 / 0 / 58 / 100 / 0 / 58 / 0 | not found | A: numbers found after the name (line 139); check the size |
| Mirinda Strawberry | Regular | only in draft A | 300 / 0 / 0 / 0 / 0 / 80 / 138 / 0 / 80 / 0 | not found | A: numbers found after the name (line 140); check the size |
| Mirinda Strawberry | Large | only in draft A | 440 / 0 / 0 / 0 / 0 / 116 / 200 / 0 / 116 / 0 | not found | A: numbers found after the name (line 141); check the size |
| Mountain Dew | Small | only in draft A | 220 / 0 / 0 / 0 / 0 / 58 / 70 / 0 / 58 / 0 | not found | A: numbers found after the name (line 142); check the size |
| Mountain Dew | Regular | only in draft A | 300 / 0 / 0 / 0 / 0 / 80 / 96 / 0 / 80 / 0 | not found | A: numbers found after the name (line 143); check the size |
| Mountain Dew | Large | only in draft A | 440 / 0 / 0 / 0 / 0 / 116 / 140 / 0 / 116 / 0 | not found | A: numbers found after the name (line 144); check the size |
| Mug Root Beer | Small | only in draft A | 200 / 0 / 0 / 0 / 0 / 52 / 60 / 0 / 52 / 0 | not found | A: numbers found after the name (line 145); check the size |
| Mug Root Beer | Regular | only in draft A | 280 / 0 / 0 / 0 / 0 / 72 / 83 / 0 / 72 / 0 | not found | A: numbers found after the name (line 146); check the size |
| Mug Root Beer | Large | only in draft A | 400 / 0 / 0 / 0 / 0 / 104 / 120 / 0 / 104 / 0 | not found | A: numbers found after the name (line 147); check the size |
| Pepsi | Small | only in draft A | 200 / 0 / 0 / 0 / 0 / 56 / 40 / 0 / 56 / 0 | not found | A: numbers found after the name (line 148); check the size |
| Pepsi | Regular | only in draft A | 280 / 0 / 0 / 0 / 0 / 77 / 55 / 0 / 77 / 0 | not found | A: numbers found after the name (line 149); check the size |
| Pepsi | Large | only in draft A | 400 / 0 / 0 / 0 / 0 / 112 / 80 / 0 / 112 / 0 | not found | A: numbers found after the name (line 150); check the size |
| Pepsi Zero | Small | only in draft A | 0 / 0 / 0 / 0 / 0 / 0 / 40 / 0 / 0 / 0 | not found | A: numbers found after the name (line 151); check the size, mostly zeros: look |
| Pepsi Zero | Regular | only in draft A | 0 / 0 / 0 / 0 / 0 / 0 / 50 / 0 / 0 / 0 | not found | A: numbers found after the name (line 152); check the size, mostly zeros: look |
| Pepsi Zero | Large | only in draft A | 0 / 0 / 0 / 0 / 0 / 0 / 80 / 0 / 0 / 0 | not found | A: numbers found after the name (line 153); check the size, mostly zeros: look |
| Simply Orange | 11.5 oz | differ: fiber_g, protein_g | 160 / 0 / 0 / 0 / 0 / 0 / 37 / 2 / 33 / 0 | 160 / 0 / 0 / 0 / 0 / 0 / 37 / 0 / 33 / 2 | A: numbers found after the name (line 154); check the size; B: numbers found after the name (line 154); check the size |
| Starry | Small | only in draft A | 130 / 0 / 0 / 0 / 0 / 35 / 30 / 0 / 35 / 0 | not found | A: numbers found after the name (line 155); check the size |
| Starry | Regular | only in draft A | 180 / 0 / 0 / 0 / 0 / 48 / 41 / 0 / 48 / 0 | not found | A: numbers found after the name (line 156); check the size |
| Starry | Large | only in draft A | 270 / 0 / 0 / 0 / 0 / 73 / 62 / 0 / 73 / 0 | not found | A: numbers found after the name (line 157); check the size |
| Tropicana Fruit Punch | Small | only in draft A | 220 / 0 / 0 / 0 / 0 / 60 / 50 / 0 / 60 / 0 | not found | A: numbers found after the name (line 158); check the size |
| Tropicana Fruit Punch | Regular | only in draft A | 300 / 0 / 0 / 0 / 0 / 83 / 69 / 0 / 83 / 0 | not found | A: numbers found after the name (line 159); check the size |
| Tropicana Fruit Punch | Large | only in draft A | 440 / 0 / 0 / 0 / 0 / 120 / 100 / 0 / 120 / 0 | not found | A: numbers found after the name (line 160); check the size |
| Tropicana Lemonade | Small | only in draft A | 200 / 0 / 0 / 0 / 0 / 54 / 210 / 0 / 54 / 0 | not found | A: numbers found after the name (line 161); check the size |
| Tropicana Lemonade | Regular | only in draft A | 280 / 0 / 0 / 0 / 0 / 75 / 289 / 0 / 75 / 0 | not found | A: numbers found after the name (line 162); check the size |
| Tropicana Lemonade | Large | only in draft A | 400 / 0 / 0 / 0 / 0 / 108 / 420 / 0 / 108 / 0 | not found | A: numbers found after the name (line 163); check the size |
| Tropicana Pink Lemonade | Small | only in draft A | 200 / 0 / 0 / 0 / 0 / 54 / 210 / 0 / 54 / 0 | not found | A: numbers found after the name (line 164); check the size |
| Tropicana Pink Lemonade | Regular | only in draft A | 280 / 0 / 0 / 0 / 0 / 74 / 289 / 0 / 74 / 0 | not found | A: numbers found after the name (line 165); check the size |
| Tropicana Pink Lemonade | Large | only in draft A | 400 / 0 / 0 / 0 / 0 / 108 / 420 / 0 / 108 / 0 | not found | A: numbers found after the name (line 166); check the size |
| Tropicana Twister Soda | Small | only in draft A | 220 / 0 / 0 / 0 / 0 / 62 / 50 / 0 / 60 / 0 | not found | A: numbers found after the name (line 167); check the size |
| Tropicana Twister Soda | Regular | only in draft A | 300 / 0 / 0 / 0 / 0 / 86 / 69 / 0 / 83 / 0 | not found | A: numbers found after the name (line 168); check the size |
| Tropicana Twister Soda | Large | only in draft A | 440 / 0 / 0 / 0 / 0 / 124 / 100 / 0 / 120 / 0 | not found | A: numbers found after the name (line 169); check the size |
| Sweet Cream Cold Brew | Regular | both read numbers that can't be right: sugars 23 g above carbs 4 g | 190 / 8 / 5 / 0 / 30 / 200 / 4 / 1 / 23 / 5 | 190 / 8 / 5 / 0 / 30 / 200 / 4 / 1 / 23 / 5 | A: numbers found after the name (line 171); check the size; B: numbers found after the name (line 171); check the size |
| Cheervine * | Small (16oz) | only in draft B | not found | 200 / 0 / 0 / 0 / 0 / 34 / 56 / 0 / 56 / 0 | B: numbers found after the name (line 123); check the size |
| Cheerwine * | Regular (22oz) | only in draft B | not found | 280 / 0 / 0 / 0 / 0 / 47 / 77 / 0 / 77 / 0 | B: numbers found after the name (line 124); check the size |
| Cheerwine * | Large (32oz) | only in draft B | not found | 400 / 0 / 0 / 0 / 0 / 68 / 112 / 0 / 112 / 0 | B: numbers found after the name (line 125); check the size |
| Coffee * | Sm (16oz) | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 10 / 0 / 1 / 0 / 0 | B: numbers found after the name (line 126); check the size |
| Coffee | Regular (20oz) | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 10 / 0 / 1 / 0 / 0 | B: numbers found after the name (line 126); check the size |
| Diet Mountain Dew | Small (16oz) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 80 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 128); check the size, mostly zeros: look |
| Diet Mountain Dew | Regular (22oz) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 110 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 129); check the size, mostly zeros: look |
| Diet Mountain Dew | Large (32oz) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 160 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 130); check the size, mostly zeros: look |
| Diet Pepsi | Small (16oz) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 80 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 131); check the size, mostly zeros: look |
| Diet Pepsi | Regular (22oz) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 110 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 132); check the size, mostly zeros: look |
| Diet Pepsi | Large (32oz) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 160 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 133); check the size, mostly zeros: look |
| Dr Pepper * | Small (16oz) | only in draft B | not found | 190 / 0 / 0 / 0 / 0 / 60 / 52 / 0 / 51 / 0 | B: numbers found after the name (line 134); check the size |
| Dr Pepper * | Regular (22oz) | only in draft B | not found | 260 / 0 / 0 / 0 / 0 / 80 / 72 / 0 / 70 / 0 | B: numbers found after the name (line 135); check the size |
| Dr Pepper * | Large (32oz) | only in draft B | not found | 380 / 0 / 0 / 0 / 0 / 115 / 104 / 0 / 102 / 0 | B: numbers found after the name (line 136); check the size |
| Mirinda Strawberry * | Small (16oz) | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 100 / 58 / 0 / 58 / 0 | B: numbers found after the name (line 139); check the size |
| Mirinda Strawberry * | Regular (22oz) | only in draft B | not found | 300 / 0 / 0 / 0 / 0 / 138 / 80 / 0 / 80 / 0 | B: numbers found after the name (line 140); check the size |
| Mirinda Strawberry * | Large (32oz) | only in draft B | not found | 440 / 0 / 0 / 0 / 0 / 200 / 116 / 0 / 116 / 0 | B: numbers found after the name (line 141); check the size |
| Mountain Dew | Small (16oz) | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 70 / 58 / 0 / 58 / 0 | B: numbers found after the name (line 142); check the size |
| Mountain Dew | Regular (22oz) | only in draft B | not found | 300 / 0 / 0 / 0 / 0 / 96 / 80 / 0 / 80 / 0 | B: numbers found after the name (line 143); check the size |
| Mountain Dew | Large (32oz) | only in draft B | not found | 440 / 0 / 0 / 0 / 0 / 140 / 116 / 0 / 116 / 0 | B: numbers found after the name (line 144); check the size |
| Mug Root Beer * | Small (16oz) | only in draft B | not found | 200 / 0 / 0 / 0 / 0 / 60 / 52 / 0 / 52 / 0 | B: numbers found after the name (line 145); check the size |
| Mug Root Beer * | Regular (22oz) | only in draft B | not found | 280 / 0 / 0 / 0 / 0 / 83 / 72 / 0 / 72 / 0 | B: numbers found after the name (line 146); check the size |
| Mug Root Beer * | Large (32oz) | only in draft B | not found | 400 / 0 / 0 / 0 / 0 / 120 / 104 / 0 / 104 / 0 | B: numbers found after the name (line 147); check the size |
| Pepsi | Small (16oz) | only in draft B | not found | 200 / 0 / 0 / 0 / 0 / 40 / 56 / 0 / 56 / 0 | B: numbers found after the name (line 148); check the size |
| Pepsi | Regular (22oz) | only in draft B | not found | 280 / 0 / 0 / 0 / 0 / 55 / 77 / 0 / 77 / 0 | B: numbers found after the name (line 149); check the size |
| Pepsi | Large (32oz) | only in draft B | not found | 400 / 0 / 0 / 0 / 0 / 80 / 112 / 0 / 112 / 0 | B: numbers found after the name (line 150); check the size |
| Pepsi Zero | Small (16oz) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 40 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 151); check the size, mostly zeros: look |
| Pepsi Zero | Regular (22oz) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 50 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 152); check the size, mostly zeros: look |
| Pepsi Zero | Large (32oz) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 80 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 153); check the size, mostly zeros: look |
| Starry * | Small (16oz) | only in draft B | not found | 130 / 0 / 0 / 0 / 0 / 30 / 35 / 0 / 35 / 0 | B: numbers found after the name (line 155); check the size |
| Starry * | Regular (22oz) | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 41 / 48 / 0 / 48 / 0 | B: numbers found after the name (line 156); check the size |
| Starry * | Large (32oz) | only in draft B | not found | 270 / 0 / 0 / 0 / 0 / 62 / 73 / 0 / 73 / 0 | B: numbers found after the name (line 157); check the size |
| Tropicana Fruit Punch * | Small (16oz) | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 50 / 60 / 0 / 60 / 0 | B: numbers found after the name (line 158); check the size |
| Tropicana Fruit Punch * | Regular (22oz) | only in draft B | not found | 300 / 0 / 0 / 0 / 0 / 69 / 83 / 0 / 83 / 0 | B: numbers found after the name (line 159); check the size |
| Tropicana Fruit Punch * | Large (32oz) | only in draft B | not found | 440 / 0 / 0 / 0 / 0 / 100 / 120 / 0 / 120 / 0 | B: numbers found after the name (line 160); check the size |
| Tropicana Lemonade * | Small (16oz) | only in draft B | not found | 200 / 0 / 0 / 0 / 0 / 210 / 54 / 0 / 54 / 0 | B: numbers found after the name (line 161); check the size |
| Tropicana Lemonade * | Regular (22oz) | only in draft B | not found | 280 / 0 / 0 / 0 / 0 / 289 / 75 / 0 / 75 / 0 | B: numbers found after the name (line 162); check the size |
| Tropicana Lemonade * | Large (32oz) | only in draft B | not found | 400 / 0 / 0 / 0 / 0 / 420 / 108 / 0 / 108 / 0 | B: numbers found after the name (line 163); check the size |
| Tropicana Pink Lemonade * | Small (16oz) | only in draft B | not found | 200 / 0 / 0 / 0 / 0 / 210 / 54 / 0 / 54 / 0 | B: numbers found after the name (line 164); check the size |
| Tropicana Pink Lemonade * | Regular (22oz) | only in draft B | not found | 280 / 0 / 0 / 0 / 0 / 289 / 74 / 0 / 74 / 0 | B: numbers found after the name (line 165); check the size |
| Tropicana Pink Lemonade * | Large (32oz) | only in draft B | not found | 400 / 0 / 0 / 0 / 0 / 420 / 108 / 0 / 108 / 0 | B: numbers found after the name (line 166); check the size |
| Tropicana Twister Soda * | Small (16oz) | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 50 / 62 / 0 / 60 / 0 | B: numbers found after the name (line 167); check the size |
| Tropicana Twister Soda * | Regular (22oz) | only in draft B | not found | 300 / 0 / 0 / 0 / 0 / 69 / 86 / 0 / 83 / 0 | B: numbers found after the name (line 168); check the size |
| Tropicana Twister Soda * | Large (32oz) | only in draft B | not found | 440 / 0 / 0 / 0 / 0 / 100 / 124 / 0 / 120 / 0 | B: numbers found after the name (line 169); check the size |
| Bo's Chicken Sandwich | 1 | both read it the same, but its protein, carbs and fat make 828 kcal, not 670 | 670 / 36 / 8 / 1 / 95 / 1730 / 95 / 0 / 8 / 31 | 670 / 36 / 8 / 1 / 95 / 1730 / 95 / 0 / 8 / 31 | A: numbers found after the name (line 25); check the size; B: numbers found after the name (line 25); check the size |

## Spot check (5 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Ken's Thousand Island | 1.5 oz | 190 / 18 / 3 / 0 / 20 / 350 / 6 / 0 / 6 / 0 |
| Bo-Tato Rounds® | Medium | 390 / 24 / 7 / 1 / 15 / 880 / 40 / 3 / 0 / 3 |
| Bojangles Cajun Pintos® | Ind. | 130 / 0.5 / 0 / 0 / 0 / 850 / 24 / 7 / 5 / 7 |
| Garden Salad | 1 | 170 / 10 / 6 / 0 / 0 / 70 / 6 / 2 / 2 / 14 |
| Chicken Supremes* Salad | 1 | 420 / 22 / 10 / 1 / 50 / 530 / 23 / 2 / 2 / 29 |
