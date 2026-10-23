# Church's Texas Chicken: lines for a person

Guide: https://cdn.sanity.io/files/at6verwz/production/987e1f90747ee65edf2ff6b494571290ed75e31c.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (37)

The last column comes from `npm run chains:evidence`: whether a draft's numbers sit right after the item's name in the guide text the drafts read. It can't read sizes or sections (one draft called a single 78 g cookie a "6 pack"): check those against the guide, then fix the line and set its check to `person`.

Fix each line in `menus/churchs-texas-chicken.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B | In the guide text (no AI) |
| --- | --- | --- | --- | --- | --- |
| BUTTERED CORN | REG | both read numbers that can't be right: saturated and trans fat above fat | 94 / 2 / 7 / 0 / 0 / 873 / 17 / 4 / 7 / 2 | 94 / 2 / 7 / 0 / 0 / 873 / 17 / 4 / 7 / 2 | A: numbers found after the name (line 31); check the size; B: numbers found after the name (line 31); check the size |
| BUTTERED CORN | LG | both read numbers that can't be right: saturated and trans fat above fat | 272 / 5 / 20 / 0 / 0 / 2516 / 48 / 10 / 20 / 7 | 272 / 5 / 20 / 0 / 0 / 2516 / 48 / 10 / 20 / 7 | A: numbers found after the name (line 32); check the size; B: numbers found after the name (line 32); check the size |
| JALAPEÑO PEPPER | 5 | both read numbers that can't be right: sugars 10 g above carbs 5 g | 25 / 0 / 0 / 0 / 0 / 850 / 5 / 0 / 10 / 0 | 25 / 0 / 0 / 0 / 0 / 850 / 5 / 0 / 10 / 0 | A: numbers found after the name (line 42); check the size; B: numbers found after the name (line 42); check the size |
| Coke® | MED | differ: sodium_mg | 400 / 0 / 0 / 0 / 0 / 90 / 109 / 0 / 109 / 0 | 400 / 0 / 0 / 0 / 0 / 109 / 109 / 0 / 109 / 0 | A: numbers found after the name (line 87); check the size; B: not as drafted (line 87 lacks 109) |
| Coke® | LG | differ: sodium_mg | 530 / 0 / 0 / 0 / 0 / 120 / 145 / 0 / 145 / 0 | 530 / 0 / 0 / 0 / 0 / 145 / 145 / 0 / 145 / 0 | A: numbers found after the name (line 88); check the size; B: not as drafted (line 88 lacks 145) |
| Sprite® | REG | differ: sodium_mg | 290 / 0 / 0 / 0 / 0 / 65 / 77 / 0 / 77 / 0 | 290 / 0 / 0 / 0 / 0 / 77 / 77 / 0 / 77 / 0 | A: numbers found after the name (line 89); check the size; B: not as drafted (line 89 lacks 77) |
| Sprite® | MED | differ: sodium_mg | 390 / 0 / 0 / 0 / 0 / 90 / 105 / 0 / 105 / 0 | 390 / 0 / 0 / 0 / 0 / 105 / 105 / 0 / 105 / 0 | A: numbers found after the name (line 90); check the size; B: not as drafted (line 90 lacks 105) |
| Sprite® | LG | differ: sodium_mg | 520 / 0 / 0 / 0 / 0 / 120 / 140 / 0 / 140 / 0 | 520 / 0 / 0 / 0 / 0 / 140 / 140 / 0 / 140 / 0 | A: numbers found after the name (line 91); check the size; B: not as drafted (line 91 lacks 140) |
| Minute Maid® Lemonade | REG | differ: sodium_mg | 290 / 0 / 0 / 0 / 0 / 130 / 79 / 0 / 79 / 0 | 290 / 0 / 0 / 0 / 0 / 79 / 79 / 0 / 79 / 0 | A: numbers found after the name (line 92); check the size; B: not as drafted (line 92 lacks 79) |
| Minute Maid® Lemonade | MED | differ: sodium_mg | 390 / 0 / 0 / 0 / 0 / 180 / 108 / 0 / 108 / 0 | 390 / 0 / 0 / 0 / 0 / 108 / 108 / 0 / 108 / 0 | A: numbers found after the name (line 93); check the size; B: not as drafted (line 93 lacks 108) |
| Minute Maid® Lemonade | LG | differ: sodium_mg | 520 / 0 / 0 / 0 / 0 / 240 / 144 / 0 / 144 / 0 | 520 / 0 / 0 / 0 / 0 / 144 / 144 / 0 / 144 / 0 | A: numbers found after the name (line 94); check the size; B: not as drafted (line 94 lacks 144) |
| Fanta® Strawberry | REG | differ: sodium_mg | 340 / 0 / 0 / 0 / 0 / 25 / 95 / 0 / 95 / 0 | 340 / 0 / 0 / 0 / 0 / 95 / 95 / 0 / 95 / 0 | A: numbers found after the name (line 101); check the size; B: not as drafted (line 101 lacks 95) |
| Fanta® Strawberry | MED | differ: sodium_mg | 460 / 0 / 0 / 0 / 0 / 35 / 125 / 0 / 125 / 0 | 460 / 0 / 0 / 0 / 0 / 125 / 125 / 0 / 125 / 0 | A: numbers found after the name (line 102); check the size; B: not as drafted (line 102 lacks 125) |
| Fanta® Strawberry | LG | differ: sodium_mg | 610 / 0 / 0 / 0 / 0 / 45 / 167 / 0 / 167 / 0 | 610 / 0 / 0 / 0 / 0 / 167 / 167 / 0 / 167 / 0 | A: numbers found after the name (line 103); check the size; B: not as drafted (line 103 lacks 167) |
| Hi-C® Flashin' Fruit Punch | REG | differ: sodium_mg | 310 / 0 / 0 / 0 / 0 / 40 / 85 / 0 / 85 / 0 | 310 / 0 / 0 / 0 / 0 / 85 / 85 / 0 / 85 / 0 | A: numbers found after the name (line 104); check the size; B: not as drafted (line 104 lacks 85) |
| Hi-C® Flashin' Fruit Punch | MED | differ: sodium_mg | 420 / 0 / 0 / 0 / 0 / 50 / 115 / 0 / 115 / 0 | 420 / 0 / 0 / 0 / 0 / 115 / 115 / 0 / 115 / 0 | A: numbers found after the name (line 105); check the size; B: not as drafted (line 105 lacks 115) |
| Hi-C® Flashin' Fruit Punch | LG | differ: sodium_mg | 560 / 0 / 0 / 0 / 0 / 60 / 153 / 0 / 153 / 0 | 560 / 0 / 0 / 0 / 0 / 153 / 153 / 0 / 153 / 0 | A: numbers found after the name (line 106); check the size; B: not as drafted (line 106 lacks 153) |
| Fanta® Apple | REG | differ: sodium_mg | 340 / 0 / 0 / 0 / 0 / 25 / 95 / 0 / 95 / 0 | 340 / 0 / 0 / 0 / 0 / 95 / 95 / 0 / 95 / 0 | A: numbers found after the name (line 116); check the size; B: not as drafted (line 116 lacks 95) |
| Fanta® Apple | MED | differ: sodium_mg | 460 / 0 / 0 / 0 / 0 / 35 / 125 / 0 / 125 / 0 | 460 / 0 / 0 / 0 / 0 / 125 / 125 / 0 / 125 / 0 | A: numbers found after the name (line 117); check the size; B: not as drafted (line 117 lacks 125) |
| Fanta® Apple | LG | differ: sodium_mg | 610 / 0 / 0 / 0 / 0 / 45 / 167 / 0 / 167 / 0 | 610 / 0 / 0 / 0 / 0 / 167 / 167 / 0 / 167 / 0 | A: numbers found after the name (line 118); check the size; B: not as drafted (line 118 lacks 167) |
| Fanta® Cherry | REG | differ: sodium_mg | 310 / 0 / 0 / 0 / 0 / 15 / 86 / 0 / 86 / 0 | 310 / 0 / 0 / 0 / 0 / 86 / 86 / 0 / 86 / 0 | A: numbers found after the name (line 119); check the size; B: not as drafted (line 119 lacks 86) |
| Fanta® Cherry | MED | differ: sodium_mg | 430 / 0 / 0 / 0 / 0 / 20 / 117 / 0 / 117 / 0 | 430 / 0 / 0 / 0 / 0 / 117 / 117 / 0 / 117 / 0 | A: numbers found after the name (line 120); check the size; B: not as drafted (line 120 lacks 117) |
| Fanta® Cherry | LG | differ: sodium_mg | 570 / 0 / 0 / 0 / 0 / 25 / 156 / 0 / 156 / 0 | 570 / 0 / 0 / 0 / 0 / 156 / 156 / 0 / 156 / 0 | A: numbers found after the name (line 121); check the size; B: not as drafted (line 121 lacks 156) |
| Fanta® Grape | REG | differ: sodium_mg | 340 / 0 / 0 / 0 / 0 / 25 / 95 / 0 / 95 / 0 | 340 / 0 / 0 / 0 / 0 / 95 / 95 / 0 / 95 / 0 | A: numbers found after the name (line 122); check the size; B: not as drafted (line 122 lacks 95) |
| Fanta® Grape | MED | differ: sodium_mg | 460 / 0 / 0 / 0 / 0 / 35 / 125 / 0 / 125 / 0 | 460 / 0 / 0 / 0 / 0 / 125 / 125 / 0 / 125 / 0 | A: numbers found after the name (line 123); check the size; B: not as drafted (line 123 lacks 125) |
| Fanta® Grape | LG | differ: sodium_mg | 610 / 0 / 0 / 0 / 0 / 45 / 167 / 0 / 167 / 0 | 610 / 0 / 0 / 0 / 0 / 167 / 167 / 0 / 167 / 0 | A: numbers found after the name (line 124); check the size; B: not as drafted (line 124 lacks 167) |
| Fanta® Orange | REG | differ: sodium_mg | 310 / 0 / 0 / 0 / 0 / 15 / 86 / 0 / 86 / 0 | 310 / 0 / 0 / 0 / 0 / 86 / 86 / 0 / 86 / 0 | A: numbers found after the name (line 125); check the size; B: not as drafted (line 125 lacks 86) |
| Fanta® Orange | MED | differ: sodium_mg | 430 / 0 / 0 / 0 / 0 / 20 / 117 / 0 / 117 / 0 | 430 / 0 / 0 / 0 / 0 / 117 / 117 / 0 / 117 / 0 | A: numbers found after the name (line 126); check the size; B: not as drafted (line 126 lacks 117) |
| Fanta® Orange | LG | differ: sodium_mg | 570 / 0 / 0 / 0 / 0 / 25 / 156 / 0 / 156 / 0 | 570 / 0 / 0 / 0 / 0 / 156 / 156 / 0 / 156 / 0 | A: numbers found after the name (line 127); check the size; B: not as drafted (line 127 lacks 156) |
| Fanta® Pineapple | REG | differ: sodium_mg | 310 / 0 / 0 / 0 / 0 / 15 / 86 / 0 / 86 / 0 | 310 / 0 / 0 / 0 / 0 / 86 / 86 / 0 / 86 / 0 | A: numbers found after the name (line 128); check the size; B: not as drafted (line 128 lacks 86) |
| Fanta® Pineapple | MED | differ: sodium_mg | 430 / 0 / 0 / 0 / 0 / 20 / 117 / 0 / 117 / 0 | 430 / 0 / 0 / 0 / 0 / 117 / 117 / 0 / 117 / 0 | A: numbers found after the name (line 129); check the size; B: not as drafted (line 129 lacks 117) |
| Fanta® Pineapple | LG | differ: sodium_mg | 570 / 0 / 0 / 0 / 0 / 25 / 156 / 0 / 156 / 0 | 570 / 0 / 0 / 0 / 0 / 156 / 156 / 0 / 156 / 0 | A: numbers found after the name (line 130); check the size; B: not as drafted (line 130 lacks 156) |
| Barq's® Root Beer | REG | differ: sodium_mg | 330 / 0 / 0 / 0 / 0 / 70 / 90 / 0 / 90 / 0 | 330 / 0 / 0 / 0 / 0 / 90 / 90 / 0 / 90 / 0 | A: numbers found after the name (line 134); check the size; B: not as drafted (line 134 lacks 90) |
| Barq's® Root Beer | MED | differ: sodium_mg | 450 / 0 / 0 / 0 / 0 / 95 / 122 / 0 / 122 / 0 | 450 / 0 / 0 / 0 / 0 / 122 / 122 / 0 / 122 / 0 | A: numbers found after the name (line 135); check the size; B: not as drafted (line 135 lacks 122) |
| Barq's® Root Beer | LG | differ: sodium_mg | 600 / 0 / 0 / 0 / 0 / 125 / 163 / 0 / 163 / 0 | 600 / 0 / 0 / 0 / 0 / 163 / 163 / 0 / 163 / 0 | A: numbers found after the name (line 136); check the size; B: not as drafted (line 136 lacks 163) |
| BROWN GRAVY | LG | both read it the same, but its protein, carbs and fat make 187 kcal, not 109 | 109 / 3 / 1 / 1 / 2 / 2579 / 37 / 1 / 2 / 3 | 109 / 3 / 1 / 1 / 2 / 2579 / 37 / 1 / 2 / 3 | A: numbers found after the name (line 57); check the size; B: numbers found after the name (line 57); check the size |
| CHICKEN FRIED STEAK with GRAVY | 1 | both read it the same, but its protein, carbs and fat make 639 kcal, not 540 | 540 / 47 / 13 / 1 / 40 / 1660 / 37 / 0 / 2 / 17 | 540 / 47 / 13 / 1 / 40 / 1660 / 37 / 0 / 2 / 17 | A: numbers found after the name (line 64); check the size; B: numbers found after the name (line 64); check the size |

## Spot check (5 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| WHITE GRAVY | REG | 80 / 4 / 2 / 0 / 0 / 580 / 12 / 0 / 1 / 0.5 |
| MINUTE MAID® ORANGE JUICE | 1 | 170 / 0 / 0 / 0 / 0 / 0 / 39 / 0 / 33 / 3 |
| WING - SPICY | 1 | 170 / 12 / 3 / 0 / 40 / 426 / 7 / 1 / 0 / 9 |
| Diet Coke® | LG | 0 / 0 / 0 / 0 / 0 / 50 / 0 / 0 / 0 / 0 |
| Church's® Southern Unsweet Tea | LG | 0 / 0 / 0 / 0 / 0 / 20 / 0 / 0 / 0 / 0 |
