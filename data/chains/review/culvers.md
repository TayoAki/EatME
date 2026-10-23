# Culver's: lines for a person

Guide: https://cdn.culvers.com/page-content/menu/nutrition-guide.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (146)

Fix each line in `menus/culvers.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B |
| --- | --- | --- | --- | --- |
| Fresh Fried Chicken Value Basket | 2 Piece | only in draft A | 840 / 35 / 5.7 / 0 / 250 / 1493 / 57 / 4 / 0 / 75 | not found |
| Caffeine Free Diet Pepsi® | Small | only in draft A | 0 / 0 / 0 / 0 / 0 / 50 / 0 / 0 / 0 / 0 | not found |
| Caffeine Free Diet Pepsi® | Medium | only in draft A | 0 / 0 / 0 / 0 / 0 / 69 / 0 / 0 / 0 / 0 | not found |
| Caffeine Free Diet Pepsi® | Large | only in draft A | 0 / 0 / 0 / 0 / 0 / 100 / 0 / 0 / 0 / 0 | not found |
| Chocolate Milk, Low Fat | 8 oz | differ: carbs_g, fiber_g, sugars_g, protein_g | 170 / 2 / 1.5 / 0 / 0 / 10 / 28 / 0 / 26 / 8 | 170 / 2 / 1.5 / 0 / 0 / 10 / 230 / 28 / 0 / 26 |
| Culver's® Diet Root Beer | Small | only in draft A | 0 / 0 / 0 / 0 / 0 / 110 / 0 / 0 / 0 / 0 | not found |
| Culver's® Diet Root Beer | Medium | only in draft A | 0 / 0 / 0 / 0 / 0 / 151 / 0 / 0 / 0 / 0 | not found |
| Culver's® Diet Root Beer | Large | only in draft A | 0 / 0 / 0 / 0 / 0 / 220 / 0 / 0 / 0 / 0 | not found |
| Culver's® Root Beer | Small | only in draft A | 220 / 0 / 0 / 0 / 0 / 110 / 60 / 0 / 58 / 0 | not found |
| Culver's® Root Beer | Medium | only in draft A | 300 / 0 / 0 / 0 / 0 / 150 / 82 / 0 / 79 / 0 | not found |
| Culver's® Root Beer | Large | only in draft A | 440 / 0 / 0 / 0 / 0 / 220 / 120 / 0 / 116 / 0 | not found |
| Diet Dr Pepper® | Small | only in draft A | 0 / 0 / 0 / 0 / 0 / 100 / 0 / 0 / 0 / 0 | not found |
| Diet Dr Pepper® | Medium | only in draft A | 0 / 0 / 0 / 0 / 0 / 138 / 0 / 0 / 0 / 0 | not found |
| Diet Dr Pepper® | Large | only in draft A | 0 / 0 / 0 / 0 / 0 / 200 / 0 / 0 / 0 / 0 | not found |
| Dr Pepper® | Small | only in draft A | 200 / 0 / 0 / 0 / 0 / 72 / 51 / 0 / 51 / 0 | not found |
| Dr Pepper® | Medium | only in draft A | 280 / 0 / 0 / 0 / 0 / 100 / 71 / 0 / 71 / 0 | not found |
| Dr Pepper® | Large | only in draft A | 400 / 0 / 0 / 0 / 0 / 143 / 102 / 0 / 102 / 0 | not found |
| Fresh Brewed Sweet Tea | Small | only in draft A | 180 / 0 / 0 / 0 / 0 / 0 / 46 / 0 / 46 / 0 | not found |
| Fresh Brewed Sweet Tea | Medium | only in draft A | 250 / 0 / 0 / 0 / 0 / 0 / 64 / 0 / 64 / 0 | not found |
| Fresh Brewed Sweet Tea | Large | only in draft A | 360 / 0 / 0 / 0 / 0 / 0 / 92 / 0 / 92 / 0 | not found |
| Fresh Brewed Unsweet Tea | Small | only in draft A | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | not found |
| Fresh Brewed Unsweet Tea | Medium | only in draft A | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | not found |
| Fresh Brewed Unsweet Tea | Large | only in draft A | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | not found |
| Milk, 1% | 8 oz | differ: carbs_g, fiber_g, sugars_g, protein_g | 110 / 0 / 0 / 0 / 0 / 10 / 13 / 0 / 12 / 8 | 110 / 0 / 0 / 0 / 0 / 10 / 135 / 13 / 0 / 12 |
| Mountain Dew® | Small | only in draft A | 220 / 0 / 0 / 0 / 0 / 70 / 58 / 0 / 58 / 0 | not found |
| Mountain Dew® | Medium | only in draft A | 300 / 0 / 0 / 0 / 0 / 96 / 79 / 0 / 79 / 0 | not found |
| Mountain Dew® | Large | only in draft A | 440 / 0 / 0 / 0 / 0 / 140 / 116 / 0 / 116 / 0 | not found |
| Pepsi® | Small | only in draft A | 200 / 0 / 0 / 0 / 0 / 40 / 56 / 0 / 56 / 0 | not found |
| Pepsi® | Medium | only in draft A | 270 / 0 / 0 / 0 / 0 / 54 / 76 / 0 / 76 / 0 | not found |
| Pepsi® | Large | only in draft A | 400 / 0 / 0 / 0 / 0 / 80 / 112 / 0 / 112 / 0 | not found |
| Applesauce | 112 g | only in draft B | not found | 50 / 0 / 0 / 0 / 0 / 10 / 12 / 2 / 8 / 0 |
| Buffalo Chicken Tenders | 2 Piece | only in draft B | not found | 230 / 11 / 1.4 / 0 / 50 / 910 / 16 / 1 / 0 / 17 |
| Chicken Tenders | 2 Piece | only in draft B | not found | 270 / 12 / 1.4 / 0 / 47 / 920 / 21 / 1 / 0 / 20 |
| Corn Dog | 75 g | only in draft B | not found | 230 / 14 / 4 / 0 / 15 / 500 / 17 / 0 / 6 / 7 |
| Grilled Cheese on Sourdough | 116 g | only in draft B | not found | 350 / 18 / 9 / 0 / 40 / 670 / 38 / 1 / 4 / 12 |
| Reese's Chocolate Concrete Mixer | Mini | only in draft B | not found | 480 / 25 / 13.2 / 0.6 / 119 / 244 / 58 / 3 / 50 / 10 |
| Reese's Chocolate Concrete Mixer | Short | only in draft B | not found | 730 / 38 / 20.7 / 1 / 206 / 351 / 90 / 4 / 76 / 15 |
| Reese's Chocolate Concrete Mixer | Medium | only in draft B | not found | 980 / 51 / 27 / 1.2 / 245 / 498 / 120 / 6 / 102 / 20 |
| Reese's Chocolate Concrete Mixer | Tall | only in draft B | not found | 1420 / 74 / 39 / 1.7 / 350 / 725 / 173 / 8 / 147 / 29 |
| Reese's Chocolate Concrete Mini Mixer | 1 serving | only in draft B | not found | 510 / 30 / 16.5 / 0.8 / 135 / 201 / 53 / 1 / 46 / 10 |
| Reese's Vanilla Concrete Mixer | Short | only in draft B | not found | 790 / 46 / 26.6 / 1.5 / 236 / 277 / 81 / 1 / 70 / 15 |
| Reese's Vanilla Concrete Mixer | Medium | only in draft B | not found | 1050 / 62 / 34 / 1.8 / 280 / 410 / 109 / 2 / 94 / 20 |
| Reese's Vanilla Concrete Mixer | Tall | only in draft B | not found | 1520 / 89 / 49 / 2.5 / 400 / 600 / 158 / 3 / 137 / 29 |
| Snickers Chocolate Concrete Mixer | Mini | only in draft B | not found | 470 / 23 / 12.7 / 0.6 / 119 / 210 / 60 / 2 / 50 / 9 |
| Snickers Chocolate Concrete Mixer | Short | only in draft B | not found | 720 / 36 / 20.2 / 1 / 206 / 316 / 91 / 4 / 76 / 14 |
| Snickers Chocolate Concrete Mixer | Medium | only in draft B | not found | 960 / 47 / 26 / 1.2 / 245 / 428 / 122 / 5 / 102 / 18 |
| Snickers Chocolate Concrete Mixer | Tall | only in draft B | not found | 1390 / 68 / 37.5 / 1.7 / 350 / 620 / 176 / 7 / 147 / 26 |
| Snickers Vanilla Concrete Mixer | Mini | only in draft B | not found | 500 / 28 / 16 / 0.8 / 135 / 166 / 54 / 1 / 46 / 9 |
| Snickers Vanilla Concrete Mixer | Short | only in draft B | not found | 780 / 44 / 26.1 / 1.5 / 236 / 242 / 82 / 1 / 70 / 14 |
| Snickers Vanilla Concrete Mixer | Medium | only in draft B | not found | 1030 / 58 / 33 / 1.8 / 280 / 340 / 111 / 1 / 94 / 18 |
| Snickers Vanilla Concrete Mixer | Tall | only in draft B | not found | 1490 / 83 / 47.5 / 2.5 / 400 / 495 / 161 / 2 / 137 / 26 |
| Almond | 28 g | only in draft B | not found | 170 / 15 / 1 / 0 / 0 / 0 / 5 / 3 / 1 / 6 |
| Andes® Creme De Menthe Thins | 28 g | only in draft B | not found | 150 / 9 / 8.5 / 0 / 0 / 15 / 15 / 1 / 15 / 1 |
| Banana | 60 g | only in draft B | not found | 50 / 0 / 0 / 0 / 0 / 0 / 13 / 2 / 7 / 1 |
| Blackberry | 33 g | only in draft B | not found | 40 / 0 / 0 / 0 / 0 / 10 / 10 / 1 / 8 / 0 |
| Blueberry | 33 g | only in draft B | not found | 30 / 0 / 0 / 0 / 0 / 10 / 7 / 0 / 6 / 0 |
| Brownie Pieces | 28 g | only in draft B | not found | 110 / 5 / 1 / 0 / 15 / 15 / 17 / 1 / 11 / 2 |
| Butterfinger® | 28 g | only in draft B | not found | 130 / 5 / 3 / 0 / 0 / 60 / 20 / 0 / 13 / 1 |
| Butterscotch | 38 g | only in draft B | not found | 110 / 1 / 0.5 / 0 / 0 / 130 / 25 / 0 / 13 / 0 |
| Cashew | 28 g | only in draft B | not found | 160 / 13 / 2.6 / 0.2 / 0 / 110 / 9 / 1 / 1 / 4 |
| Cheesecake Pieces | 30 g | only in draft B | not found | 110 / 7 / 3.5 / 0.5 / 30 / 90 / 10 / 0 / 7 / 2 |
| Cherry, Red Topping | 33 g | only in draft B | not found | 40 / 0 / 0 / 0 / 0 / 10 / 10 / 0 / 9 / 0 |
| Chocolate Chip Cookie Dough | 28 g | only in draft B | not found | 120 / 5 / 2 / 0.5 / 15 / 50 / 18 / 0 / 9 / 1 |
| Chocolate Flake | 22 g | only in draft B | not found | 110 / 7 / 6 / 0 / 0 / 0 / 13 / 1 / 11 / 1 |
| Creme® De Menthe | 38 g | only in draft B | not found | 100 / 0 / 0 / 0 / 0 / 100 / 25 / 0 / 20 / 0 |
| Culver's® Chocolate Syrup | 35 g | only in draft B | not found | 90 / 0 / 0 / 0 / 0 / 45 / 22 / 0 / 13 / 0 |
| Culver's® Hot Caramel | 38 g | only in draft B | not found | 120 / 2 / 1 / 0 / 5 / 100 / 26 / 0 / 15 / 1 |
| Culver's® Hot Fudge | 38 g | only in draft B | not found | 120 / 4 / 3.7 / 0 / 0 / 90 / 21 / 0 / 18 / 2 |
| Health® Toffee Chunks | 28 g | only in draft B | not found | 150 / 9 / 5 / 0 / 5 / 95 / 17 / 1 / 17 / 1 |
| Kit Kat® | 24 g | only in draft B | not found | 120 / 6 / 4 / 0 / 0 / 15 / 16 / 0 / 12 / 1 |
| M&M® Minis | 28 g | only in draft B | not found | 140 / 6 / 3.5 / 0 / 0 / 20 / 20 / 1 / 18 / 2 |
| Mango Fruit Infusion | 35 g | only in draft B | not found | 60 / 0 / 0 / 0 / 0 / 5 / 16 / 0 / 15 / 0 |
| Maraschino Cherry | 5 g | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 1 / 2 / 0 / 2 / 0 |
| Marshmallow Creme | 38 g | only in draft B | not found | 110 / 0 / 0 / 0 / 0 / 15 / 27 / 0 / 23 / 0 |
| Nerds® | 28 g | only in draft B | not found | 100 / 0 / 0 / 0 / 0 / 0 / 25 / 0 / 25 / 0 |
| Nestlé® Chunch | 28 g | only in draft B | not found | 140 / 7 / 4 / 0 / 0 / 40 / 19 / 0 / 15 / 1 |
| Novelty Coating | 28 g | only in draft B | not found | 170 / 13 / 6 / 0 / 5 / 20 / 12 / 0 / 11 / 2 |
| Oreo® Cookie Crumbs | 19 g | only in draft B | not found | 90 / 4 / 1 / 0 / 0 / 80 / 14 / 0 / 8 / 1 |
| Peach | 33 g | only in draft B | not found | 35 / 0 / 0 / 0 / 0 / 10 / 9 / 0 / 8 / 0 |
| Peanut Butter | 34 g | only in draft B | not found | 200 / 18 / 2.5 / 0 / 0 / 170 / 7 / 2 / 4 / 7 |
| Peanuts, Dry Roast Seasoned | 28 g | only in draft B | not found | 160 / 13 / 1.8 / 0 / 0 / 210 / 6 / 2 / 2 / 6 |
| Pecan Halves | 28 g | only in draft B | not found | 200 / 21 / 1.8 / 0.2 / 0 / 110 / 4 / 2 / 1 / 2 |
| Pie Crust Pieces | 28 g | only in draft B | not found | 200 / 6 / 3 / 0 / 0 / 0 / 70 / 19 / 0 / 5 |
| Raspberry | 28 g | only in draft B | not found | 30 / 1 / 0 / 0 / 0 / 0 / 0 / 7 / 1 / 6 |
| Reese's Pieces® | 28 g | only in draft B | not found | 130 / 6 / 5 / 0 / 0 / 0 / 40 / 18 / 1 / 15 |
| Reese's® Peanut Butter Cups | 28 g | only in draft B | not found | 140 / 8 / 3 / 0 / 0 / 0 / 100 / 16 / 1 / 14 |
| Salted Caramel Topping | 38 g | only in draft B | not found | 120 / 2 / 1 / 0 / 0 / 0 / 240 / 25 / 0 / 16 |
| Snickers® Candy Bar Pieces | 28 g | only in draft B | not found | 130 / 6 / 2.5 / 0 / 0 / 0 / 65 / 17 / 1 / 14 |
| Sprinkles, Blue and White | 28 g | only in draft B | not found | 120 / 2 / 2 / 0 / 0 / 0 / 0 / 26 / 0 / 24 |
| Strawberry, Sliced | 42 g | only in draft B | not found | 45 / 0 / 0 / 0 / 0 / 0 / 0 / 11 / 0 / 11 |
| Twin® | 28 g | only in draft B | not found | 140 / 6 / 3.8 / 0 / 0 / 0 / 55 / 18 / 0 / 13 |
| Whipped Topping, Extra Creamy | 5 g | only in draft B | not found | 15 / 1 / 0.5 / 0 / 0 / 0 / 0 / 1 / 0 / 0 |
| Caffeine Free Diet Pepsi® | Small (16 oz) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 50 / 0 / 0 / 0 |
| Caffeine Free Diet Pepsi® | Medium (22 oz) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 69 / 0 / 0 / 0 |
| Caffeine Free Diet Pepsi® | Large (32 oz) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 100 / 0 / 0 / 0 |
| Culver's® Diet Root Beer | Small (16 oz) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 110 / 0 / 0 / 0 |
| Culver's® Diet Root Beer | Medium (22 oz) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 151 / 0 / 0 / 0 |
| Culver's® Diet Root Beer | Large (32 oz) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 220 / 0 / 0 / 0 |
| Culver's® Root Beer | Small (16 oz) | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 0 / 110 / 60 / 0 / 58 |
| Culver's® Root Beer | Medium (22 oz) | only in draft B | not found | 300 / 0 / 0 / 0 / 0 / 0 / 150 / 82 / 0 / 79 |
| Culver's® Root Beer | Large (32 oz) | only in draft B | not found | 440 / 0 / 0 / 0 / 0 / 0 / 220 / 120 / 0 / 116 |
| Diet Dr Pepper® | Small (16 oz) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 100 / 0 / 0 / 0 |
| Diet Dr Pepper® | Medium (22 oz) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 138 / 0 / 0 / 0 |
| Diet Dr Pepper® | Large (32 oz) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 200 / 0 / 0 / 0 |
| Diet Mountain Dew® | Small (16 oz) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 80 / 0 / 0 / 0 |
| Diet Mountain Dew® | Medium (22 oz) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 110 / 0 / 0 / 0 |
| Diet Mountain Dew® | Large (32 oz) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 160 / 0 / 0 / 0 |
| Diet Pepsi® | Small (16 oz) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 50 / 0 / 0 / 0 |
| Diet Pepsi® | Medium (22 oz) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 69 / 0 / 0 / 0 |
| Diet Pepsi® | Large (32 oz) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 100 / 0 / 0 / 0 |
| Dr Pepper® | Small (16 oz) | only in draft B | not found | 200 / 0 / 0 / 0 / 0 / 0 / 72 / 51 / 0 / 51 |
| Dr Pepper® | Medium (22 oz) | only in draft B | not found | 280 / 0 / 0 / 0 / 0 / 0 / 100 / 71 / 0 / 71 |
| Dr Pepper® | Large (32 oz) | only in draft B | not found | 400 / 0 / 0 / 0 / 0 / 0 / 143 / 102 / 0 / 102 |
| Fresh Brewed Sweet Tea | Small (16 oz) | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 0 / 0 / 46 / 0 / 46 |
| Fresh Brewed Sweet Tea | Medium (22 oz) | only in draft B | not found | 250 / 0 / 0 / 0 / 0 / 0 / 0 / 64 / 0 / 64 |
| Fresh Brewed Sweet Tea | Large (32 oz) | only in draft B | not found | 360 / 0 / 0 / 0 / 0 / 0 / 0 / 92 / 0 / 92 |
| Fresh Brewed Unsweet Tea | Small (16 oz) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 |
| Fresh Brewed Unsweet Tea | Medium (22 oz) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 |
| Fresh Brewed Unsweet Tea | Large (32 oz) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 |
| Mountain Dew® | Small (16 oz) | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 0 / 70 / 58 / 0 / 58 |
| Mountain Dew® | Medium (22 oz) | only in draft B | not found | 300 / 0 / 0 / 0 / 0 / 0 / 96 / 79 / 0 / 79 |
| Mountain Dew® | Large (32 oz) | only in draft B | not found | 440 / 0 / 0 / 0 / 0 / 0 / 140 / 116 / 0 / 116 |
| Pepsi® | Small (16 oz) | only in draft B | not found | 200 / 0 / 0 / 0 / 0 / 0 / 40 / 56 / 0 / 56 |
| Pepsi® | Medium (22 oz) | only in draft B | not found | 270 / 0 / 0 / 0 / 0 / 0 / 54 / 76 / 0 / 76 |
| Pepsi® | Large (32 oz) | only in draft B | not found | 400 / 0 / 0 / 0 / 0 / 0 / 80 / 112 / 0 / 112 |
| Sierra Mist® | Small (16 oz) | only in draft B | not found | 200 / 0 / 0 / 0 / 0 / 0 / 40 / 54 / 0 / 54 |
| Sierra Mist® | Medium (22 oz) | only in draft B | not found | 270 / 0 / 0 / 0 / 0 / 0 / 54 / 73 / 0 / 73 |
| Sierra Mist® | Large (32 oz) | only in draft B | not found | 400 / 0 / 0 / 0 / 0 / 0 / 80 / 108 / 0 / 108 |
| Strawberry Mirinda® | Small (16 oz) | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 0 / 100 / 58 / 0 / 58 |
| Strawberry Mirinda® | Medium (22 oz) | only in draft B | not found | 300 / 0 / 0 / 0 / 0 / 0 / 136 / 79 / 0 / 79 |
| Strawberry Mirinda® | Large (32 oz) | only in draft B | not found | 440 / 0 / 0 / 0 / 0 / 0 / 200 / 116 / 0 / 116 |
| Tropicana Fruit Punch® | Small (16 oz) | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 0 / 50 / 60 / 0 / 60 |
| Tropicana Fruit Punch® | Medium (22 oz) | only in draft B | not found | 300 / 0 / 0 / 0 / 0 / 0 / 68 / 82 / 0 / 82 |
| Tropicana Fruit Punch® | Large (32 oz) | only in draft B | not found | 440 / 0 / 0 / 0 / 0 / 0 / 100 / 120 / 0 / 120 |
| Tropicana® Light Lemonade | Small (16 oz) | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 0 / 190 / 0 / 0 / 0 |
| Tropicana® Light Lemonade | Medium (22 oz) | only in draft B | not found | 15 / 0 / 0 / 0 / 0 / 0 / 285 / 0 / 0 / 0 |
| Tropicana® Light Lemonade | Large (32 oz) | only in draft B | not found | 20 / 0 / 0 / 0 / 0 / 0 / 380 / 0 / 0 / 0 |
| Tropicana® Pink Lemonade | Small (16 oz) | only in draft B | not found | 200 / 0 / 0 / 0 / 0 / 0 / 207 / 50 / 0 / 50 |
| Tropicana® Pink Lemonade | Medium (22 oz) | only in draft B | not found | 280 / 0 / 0 / 0 / 0 / 0 / 289 / 70 / 0 / 70 |
| Tropicana® Pink Lemonade | Large (32 oz) | only in draft B | not found | 410 / 0 / 0 / 0 / 0 / 0 / 423 / 103 / 0 / 103 |
| Pepsi® Max | Small (16 oz) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 51 / 0 / 0 / 0 |
| Pepsi® Max | Medium (22 oz) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 70 / 0 / 0 / 0 |
| Pepsi® Max | Large (32 oz) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 102 / 0 / 0 / 0 |
| Wild Cherry Pepsi | Small (16 oz) | only in draft B | not found | 200 / 0 / 0 / 0 / 0 / 0 / 40 / 56 / 0 / 56 |
| Wild Cherry Pepsi | Medium (22 oz) | only in draft B | not found | 270 / 0 / 0 / 0 / 0 / 0 / 54 / 76 / 0 / 76 |
| Wild Cherry Pepsi | Large (32 oz) | only in draft B | not found | 400 / 0 / 0 / 0 / 0 / 0 / 80 / 112 / 0 / 112 |

## Spot check (10 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Chunky Bleu Cheese Dressing | 1 serving | 310 / 33 / 6 / 0.5 / 20 / 480 / 2 / 0 / 1 / 1 |
| Mushroom & Swiss | Triple | 1030 / 69 / 27.3 / 1.5 / 216 / 1024 / 42 / 1 / 6 / 66 |
| Bean with Ham | 1 serving | 160 / 2 / 0.5 / 0 / 5 / 1270 / 28 / 7 / 3 / 7 |
| Crazy for Cookie Dough Concrete Mixer | Short | 890 / 46 / 28 / 2 / 251 / 392 / 106 / 0 / 82 / 14 |
| ButterBurger "The Original" | Double | 560 / 32 / 11.8 / 1 / 106 / 670 / 39 / 1 / 6 / 34 |
| ButterBurger Cheese | Triple | 940 / 63 / 27.3 / 1.5 / 202 / 1190 / 42 / 1 / 9 / 57 |
| Cauliflower Cheese | 1 serving | 270 / 15 / 6 / 0 / 26 / 1320 / 25 / 1 / 15 / 10 |
| Picante Sauce, Mild and Medium | 1 serving | 10 / 0 / 0 / 0 / 0 / 220 / 2 / 0 / 2 / 0 |
| Wisconsin Cheese Curds | 1 serving | 510 / 25 / 12 / 0.7 / 55 / 1230 / 51 / 0 / 4 / 20 |
| Culver's® Root Beer Float | Tall | 530 / 18 / 11.3 / 0.7 / 113 / 195 / 91 / 0 / 85 / 6 |
