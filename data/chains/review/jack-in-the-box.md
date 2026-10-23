# Jack in the Box: lines for a person

Guide: https://cdn.sanity.io/files/j2jr32rk/content-production/5cbdb27f7f3cd5978732e01d566d4e11e064f0e4.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (61)

The last column comes from `npm run chains:evidence`: whether a draft's numbers sit right after the item's name in the guide text the drafts read. It can't read sizes or sections (one draft called a single 78 g cookie a "6 pack"): check those against the guide, then fix the line and set its check to `person`.

Fix each line in `menus/jack-in-the-box.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B | In the guide text (no AI) |
| --- | --- | --- | --- | --- | --- |
| Teriyaki Grilled Chicken Bowl | 1 serving | only in draft A | 590 / 8 / 2 / 0 / 50 / 1910 / 100 / 3 / 26 / 28 | not found | A: numbers found after the name (line 8); check the size |
| Teriyaki Grilled Chicken Bowl (Brown Rice) | 1 serving | only in draft A | 580 / 10 / 2 / 0 / 50 / 1910 / 95 / 7 / 26 / 29 | not found | A: numbers found after the name (line 9); check the size |
| Garden Salad with Grilled Chicken | 1 serving | only in draft A | 210 / 8 / 4.5 / 0 / 70 / 800 / 9 / 3 / 2 / 25 | not found | A: not as drafted (line 56 lacks 4.5, 800, 9, 25) |
| Jr. Jumbo Jack® | 1 serving | only in draft A | 400 / 25 / 6 / 0.5 / 30 / 700 / 31 / 1 / 5 / 14 | not found | A: not as drafted (line 296 lacks 400, 25, 6, 700, 31, 14) |
| Bacon Double Smashed Jack™ | 1 serving | only in draft A | 1120 / 83 / 30 / 4.5 / 170 / 2070 / 49 / 2 / 9 / 45 | not found | A: not as drafted (line 18 lacks 1120, 83, 30, 4.5, 170, 2070, 49, 9, 45) |
| Bacon & Swiss Buttery Jack™ | 1 serving | only in draft A | 800 / 53 / 23 / 2.5 / 125 / 1210 / 48 / 3 / 11 / 34 | not found | A: not as drafted (line 19 lacks 800, 53, 23, 2.5, 125, 1210, 48, 11, 34) |
| Bacon Ultimate Cheeseburger™ | 1 serving | only in draft A | 930 / 65 / 25 / 3 / 165 / 1960 / 32 / 1 / 6 / 55 | not found | A: not as drafted (line 20 lacks 930, 65, 25, 165, 1960, 32, 55) |
| Cheeseburger | 1 serving | only in draft A | 370 / 21 / 7 / 0.5 / 35 / 880 / 30 / 1 / 4 / 16 | not found | A: not as drafted (line 277 lacks 370, 21, 35, 880, 16) |
| Classic Buttery Jack™ | 1 serving | only in draft A | 780 / 51 / 23 / 2.5 / 115 / 1030 / 51 / 4 / 13 / 31 | not found | A: not as drafted (line 22 lacks 780, 51, 23, 2.5, 115, 1030, 51, 31) |
| Classic Smashed Jack™ | 1 serving | only in draft A | 720 / 48 / 18 / 2.5 / 90 / 1380 / 46 / 2 / 7 / 26 | not found | A: not as drafted (line 23 lacks 720, 48, 18, 2.5, 1380, 46) |
| Double Jack® | 1 serving | only in draft A | 830 / 58 / 21 / 3 / 140 / 1430 / 33 / 2 / 7 / 46 | not found | A: not as drafted (line 24 lacks 830, 58, 21, 140, 1430, 33, 46) |
| Hamburger | 1 serving | only in draft A | 330 / 18 / 5 / 0.5 / 25 / 680 / 30 / 1 / 4 / 13 | not found | A: not as drafted (line 284 lacks 330, 5, 25, 680, 13) |
| Jr. Bacon Cheeseburger | 1 serving | only in draft A | 470 / 31 / 9 / 1 / 45 / 1000 / 30 / 1 / 5 / 18 | not found | A: not as drafted (line 295 lacks 470, 31, 9, 45, 1000) |
| Jr. Jumbo Jack® Cheeseburger | 1 serving | only in draft A | 440 / 29 / 8 / 1 / 40 / 900 / 31 / 1 / 5 / 16 | not found | A: not as drafted (line 28 lacks 440, 40, 900, 31, 16) |
| Jumbo Jack® | 1 serving | only in draft A | 520 / 33 / 10 / 1.5 / 60 / 700 / 32 / 2 / 6 / 23 | not found | A: not as drafted (line 11 lacks 520, 33, 1.5, 60, 700, 32, 23) |
| Jumbo Jack® Cheeseburger | 1 serving | only in draft A | 600 / 40 / 14 / 1.5 / 80 / 1110 / 33 / 2 / 6 / 28 | not found | A: not as drafted (line 28 lacks 40, 14, 1.5, 1110, 33) |
| Sourdough Jack® | 1 serving | only in draft A | 690 / 44 / 15 / 1.5 / 90 / 1300 / 39 / 3 / 7 / 33 | not found | A: not as drafted (line 31 lacks 690, 44, 15, 1.5, 1300, 39, 33) |
| Ultimate Cheeseburger™ | 1 serving | only in draft A | 840 / 59 / 23 / 3 / 150 / 1550 / 31 / 1 / 5 / 47 | not found | A: not as drafted (line 20 lacks 840, 59, 23, 150, 1550, 31, 47) |
| Chocolate Overload™ Cake | 1 serving | only in draft A | 300 / 7 / 1.5 / 0 / 40 / 350 / 57 / 2 / 34 / 4 | not found | A: not as drafted (line 261 lacks 0, 350, 57, 34) |
| Mini Churros | 5 pc. | only in draft A | 350 / 18 / 3.5 / 0 / 5 / 280 / 42 / 2 / 12 / 4 | not found | A: not as drafted (line 262 lacks 350, 18, 3.5, 0, 280, 42, 12) |
| New York Style Cheesecake | 1 serving | only in draft A | 310 / 17 / 9 / 0 / 25 / 260 / 32 / 1 / 22 / 7 | not found | A: not as drafted (line 263 lacks 310, 17, 9, 25, 260, 32, 22) |
| Rg Chocolate Shake with Whipped Topping | 16 oz | only in draft A | 670 / 22 / 15 / 1 / 70 / 400 / 106 / 0 / 88 / 14 | not found | A: not as drafted (line 264 lacks 670, 22, 15, 70, 400, 106, 88, 14) |
| Lg Chocolate Shake with Whipped Topping | 24 oz | only in draft A | 970 / 30 / 20 / 1.5 / 95 / 580 / 157 / 0 / 130 / 20 | not found | A: not as drafted (line 265 lacks 970, 95, 580, 157, 130, 20) |
| Rg Oreo Shake with Whipped Topping | 16 oz | only in draft A | 690 / 27 / 16 / 0.5 / 70 / 470 / 99 / 1 / 78 / 14 | not found | A: not as drafted (line 266 lacks 690, 27, 70, 470, 99, 78, 14) |
| Lg Oreo Shake with Whipped Topping | 24oz | only in draft A | 990 / 37 / 22 / 0.5 / 95 / 690 / 146 / 1 / 115 / 20 | not found | A: not as drafted (line 267 lacks 990, 37, 22, 95, 690, 146, 115) |
| Rg Strawberry Shake with Whipped Topping | 16 oz | only in draft A | 640 / 22 / 14 / 0.5 / 70 / 340 / 99 / 0 / 85 / 13 | not found | A: not as drafted (line 268 lacks 640, 22, 14, 70, 340, 99, 85, 13) |
| Lg Strawberry Shake with Whipped Topping | 24 oz | only in draft A | 930 / 30 / 20 / 0.5 / 95 / 510 / 146 / 0 / 125 / 19 | not found | A: not as drafted (line 269 lacks 930, 95, 510, 146, 125, 19) |
| Rg Vanilla Shake with Whipped Topping | 16 oz | only in draft A | 580 / 22 / 14 / 0.5 / 70 / 340 / 82 / 0 / 68 / 13 | not found | A: not as drafted (line 270 lacks 580, 22, 14, 70, 340, 82, 68, 13) |
| Lg Vanilla Shake with Whipped Topping | 24 oz | only in draft A | 820 / 30 / 20 / 0.5 / 95 / 500 / 121 / 0 / 100 / 19 | not found | A: not as drafted (line 271 lacks 820, 95, 500, 121, 100, 19) |
| Shake, Vanilla with Boba & Whipped Topping | 16 fl. oz. | only in draft A | 710 / 22 / 14 / 0.5 / 70 / 350 / 117 / 0 / 88 / 13 | not found | A: not as drafted (line 272 lacks 710, 22, 14, 70, 117, 88, 13) |
| Fire Roasted Salsa | 1 fl. oz. | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 120 / 2 / 0 / 1 / 0 | B: numbers found after the name (line 463); check the size |
| French's Mustard | 1 packet | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 80 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 464); check the size, mostly zeros: look |
| Grape Jelly | 1 packet | only in draft B | not found | 35 / 0 / 0 / 0 / 0 / 0 / 9 / 0 / 6 / 0 | B: numbers found after the name (line 465); check the size |
| Grilled Onions | 0.71 oz. | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 0 / 2 / 0 / 1 / 0 | B: numbers found after the name (line 466); check the size |
| Hot Taco Sauce | 1 packet | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 60 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 467); check the size, mostly zeros: look |
| Ketchup | 1 packet | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 85 / 3 / 0 / 2 / 0 | B: numbers found after the name (line 468); check the size |
| Kikkoman® Soy Sauce | 1 packet | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 370 / 0 / 0 / 0 / 1 | B: numbers found after the name (line 469); check the size |
| Mayonnaise Packet | 1 packet | only in draft B | not found | 90 / 10 / 1.5 / 0 / 5 / 65 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 470); check the size |
| Gold-n-Sweet® Spread | 1 cup | only in draft B | not found | 20 / 2.5 / 0.5 / 0 / 0 / 45 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 471); check the size |
| Secret Sauce | 1 packet | only in draft B | not found | 30 / 2 / 0 / 0 / 0 / 90 / 3 / 0 / 2 / 0 | B: numbers found after the name (line 472); check the size |
| Strawberry Jam | 1 packet | only in draft B | not found | 40 / 0 / 0 / 0 / 0 / 0 / 10 / 0 / 9 / 0 | B: numbers found after the name (line 473); check the size |
| Gold Peak® Fresh Brewed Iced Tea | 20 fl. oz. | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 60 / 0 / 1 / 0 / 0 | B: numbers found after the name (line 474); check the size, mostly zeros: look |
| Gold Peak® Fresh Brewed Iced Tea | 30 fl. oz. | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 90 / 0 / 1 / 0 / 0 | B: numbers found after the name (line 475); check the size, mostly zeros: look |
| Gold Peak® Fresh Brewed Iced Tea | 40 fl. oz. | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 120 / 0 / 1 / 0 / 0 | B: numbers found after the name (line 476); check the size, mostly zeros: look |
| Berry Purple Daze Red Bull Infusion w/Red Bull® Energy | 1 serving | only in draft B | not found | 160 / 0 / 0 / 0 / 0 / 110 / 41 / 0 / 38 / 0 | B: numbers found after the name (line 477); check the size |
| Strawberry Red Daze Red Bull Infusion w/Red Bull® Energy | 1 serving | only in draft B | not found | 160 / 0 / 0 / 0 / 0 / 110 / 41 / 0 / 39 / 0 | B: numbers found after the name (line 478); check the size |
| Strawberry Red Daze White Peach Red Bull® Infusion | 1 serving | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 100 / 42 / 0 / 40 / 0 | B: numbers found after the name (line 479); check the size |
| Berry Purple Daze White Peach Red Bull® Infusion | 1 serving | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 100 / 42 / 0 / 40 / 0 | B: numbers found after the name (line 480); check the size |
| Red Bull® The Peach Edition (White Peach) | 1 serving | only in draft B | not found | 120 / 0 / 0 / 0 / 0 / 95 / 29 / 0 / 27 / 0 | B: numbers found after the name (line 481); check the size |
| Red Bull® Energy Can | 1 serving | only in draft B | not found | 110 / 0 / 0 / 0 / 0 / 105 / 29 / 0 / 26 / 0 | B: numbers found after the name (line 482); check the size |
| High Mountain Arabica Coffee | Rg. | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 5 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 483); check the size, mostly zeros: look |
| High Mountain Arabica Coffee | Lg. | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 10 / 0 / 0 / 0 / 1 | B: numbers found after the name (line 484); check the size |
| Iced Black Coffee | Rg. | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 485); check the size, mostly zeros: look |
| Iced Black Coffee | Lg. | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 10 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 486); check the size, mostly zeros: look |
| Caramel Sweet Cream Iced Coffee | Rg. | only in draft B | not found | 200 / 5 / 3 / 0 / 15 / 100 / 35 / 0 / 30 / 4 | B: numbers found after the name (line 487); check the size |
| Caramel Sweet Cream Iced Coffee | Lg. | only in draft B | not found | 300 / 7 / 5 / 0 / 20 / 150 / 52 / 0 / 46 / 6 | B: numbers found after the name (line 488); check the size |
| Mocha Sweet Cream Iced Coffee | Rg. | only in draft B | not found | 160 / 3 / 2 / 0 / 10 / 105 / 32 / 0 / 26 / 3 | B: numbers found after the name (line 489); check the size |
| Mocha Sweet Cream Iced Coffee | Lg. | only in draft B | not found | 280 / 5 / 4 / 0.5 / 15 / 180 / 54 / 0 / 44 / 5 | B: numbers found after the name (line 490); check the size |
| Vanilla Sweet Cream Iced Coffee | Rg. | only in draft B | not found | 150 / 5 / 3 / 0 / 15 / 100 / 23 / 0 / 19 / 4 | B: numbers found after the name (line 491); check the size |
| Vanilla Sweet Cream Iced Coffee | Lg. | only in draft B | not found | 220 / 7 / 5 / 0 / 20 / 150 / 34 / 0 / 28 / 6 | B: numbers found after the name (line 492); check the size |
| Sweet Cream Iced Coffee with Boba | Rg. | only in draft B | not found | 280 / 5 / 3 / 0 / 15 / 105 / 57 / 0 / 38 / 4 | B: numbers found after the name (line 493); check the size |

## Spot check (3 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Simply Orange® Juice | 1 serving | 160 / 0 / 0 / 0 / 0 / 0 / 37 / 0 / 33 / 2 |
| Minute Maid® Apple Juice | 1 serving | 80 / 0 / 0 / 0 / 0 / 15 / 21 / 0 / 19 / 0 |
| Milk | 1 serving | 110 / 2 / 1.5 / 0 / 10 / 130 / 12 / 0 / 12 / 9 |
