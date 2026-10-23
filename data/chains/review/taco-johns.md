# Taco John's: lines for a person

Guide: https://tacojohns.com/wp-content/uploads/2026/09/TAC-26-P5_NUTRITION-GUIDE_ED_V3.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (12)

The last column comes from `npm run chains:evidence`: whether a draft's numbers sit right after the item's name in the guide text the drafts read. It can't read sizes or sections (one draft called a single 78 g cookie a "6 pack"): check those against the guide, then fix the line and set its check to `person`.

Fix each line in `menus/taco-johns.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B | In the guide text (no AI) |
| --- | --- | --- | --- | --- | --- |
| Mexi Rolls®, Chipotle Shredded Chicken | 2 count | differ: sugars_g | 250 / 12 / 4 / 0 / 30 / 410 / 23 / 4 / 0.5 / 12 | 250 / 12 / 4 / 0 / 30 / 410 / 23 / 4 / 4 / 12 | A: name not in the guide text; B: name not in the guide text |
| Fiesta Rice Bowl, Beef | 1 serving | both read numbers that can't be right: fiber 100 g above carbs 76 g | 670 / 27 / 9 / 0.5 / 65 / 1600 / 76 / 100 / 7 / 30 | 670 / 27 / 9 / 0.5 / 65 / 1600 / 76 / 100 / 7 / 30 | A: name not in the guide text; B: name not in the guide text |
| Cherry Fizz | Small | differ: protein_g | 280 / 0 / 0 / 0 / 0 / 60 / 71 / 0 / 71 / 0 | 280 / 0 / 0 / 0 / 0 / 60 / 71 / 0 / 71 / 1 | A: name not in the guide text; B: name not in the guide text |
| Cherry Fizz | Medium | differ: protein_g | 420 / 0 / 0 / 0 / 0 / 85 / 108 / 0 / 107 / 0 | 420 / 0 / 0 / 0 / 0 / 85 / 108 / 0 / 107 / 1 | A: name not in the guide text; B: name not in the guide text |
| Cherry Fizz | Large | differ: protein_g | 580 / 0 / 0 / 0 / 0 / 120 / 149 / 0 / 148 / 0 | 580 / 0 / 0 / 0 / 0 / 120 / 149 / 0 / 148 / 1 | A: name not in the guide text; B: name not in the guide text |
| Summer Punch | Small | differ: protein_g | 310 / 0 / 0 / 0 / 0 / 80 / 79 / 0 / 78 / 0 | 310 / 0 / 0 / 0 / 0 / 80 / 79 / 0 / 78 / 1 | A: name not in the guide text; B: name not in the guide text |
| Summer Punch | Medium | differ: protein_g | 460 / 0 / 0 / 0 / 0 / 120 / 119 / 0 / 118 / 0 | 460 / 0 / 0 / 0 / 0 / 120 / 119 / 0 / 118 / 1 | A: name not in the guide text; B: name not in the guide text |
| Summer Punch | Large | differ: protein_g | 640 / 0 / 0 / 0 / 0 / 170 / 165 / 0 / 164 / 0 | 640 / 0 / 0 / 0 / 0 / 170 / 165 / 0 / 164 / 1 | A: name not in the guide text; B: name not in the guide text |
| Add-on, Cherry Fizz Syrup | Small | differ: protein_g | 20 / 0 / 0 / 0 / 0 / 0 / 5 / 0 / 4 / 0 | 20 / 0 / 0 / 0 / 0 / 0 / 5 / 0 / 4 / 1 | A: name not in the guide text; B: name not in the guide text |
| Add-on, Cherry Fizz Syrup | Medium/Large | differ: protein_g | 40 / 0 / 0 / 0 / 0 / 0 / 9 / 0 / 9 / 0 | 40 / 0 / 0 / 0 / 0 / 0 / 9 / 0 / 9 / 1 | A: name not in the guide text; B: name not in the guide text |
| Add-on, Summer Punch Syrup | Small | differ: protein_g | 20 / 0 / 0 / 0 / 0 / 0 / 5 / 0 / 4 / 0 | 20 / 0 / 0 / 0 / 0 / 0 / 5 / 0 / 4 / 1 | A: name not in the guide text; B: name not in the guide text |
| Add-on, Summer Punch Syrup | Medium/Large | differ: protein_g | 35 / 0 / 0 / 0 / 0 / 0 / 9 / 0 / 9 / 0 | 35 / 0 / 0 / 0 / 0 / 0 / 9 / 0 / 9 / 1 | A: name not in the guide text; B: name not in the guide text |

## Spot check (11 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Super Burrito, Beef | 1 serving | 460 / 19 / 8 / 0.5 / 35 / 980 / 52 / 6 / 2 / 19 |
| Ketchup | Packet | 10 / 0 / 0 / 0 / 0 / 90 / 2 / 0 / 2 / 0 |
| Brisk® Raspberry Iced Tea | Small | 110 / 0 / 0 / 0 / 0 / 80 / 29 / 0 / 29 / 0 |
| Softshell Taco, Chicken | 1 serving | 210 / 7 / 2.5 / 0 / 40 / 570 / 21 / 1 / 1 / 14 |
| Crispy Taco, Refried Beans | 1 serving | 120 / 5 / 2 / 0 / 5 / 320 / 14 / 4 / 0.5 / 6 |
| Crispy Taco, Super, Refried Beans | 1 serving | 140 / 6 / 2.5 / 0 / 10 / 330 / 16 / 4 / 2 / 6 |
| Diet Mountain Dew® | Medium | 0 / 0 / 0 / 0 / 0 / 125 / 2 / 0 / 0 / 0 |
| Boss Bowl, Steak | 1 serving | 670 / 26 / 8 / 0 / 70 / 1560 / 74 / 9 / 7 / 34 |
| Taco Bravo®, Super, Steak | 1 serving | 330 / 13 / 4.5 / 0 / 35 / 730 / 35 / 5 / 2 / 17 |
| Potato Olés®, Junior | 1 serving | 330 / 21 / 3 / 0 / 0 / 720 / 30 / 5 / 0 / 3 |
| Chipotle Chicken Quesadilla | 1 serving | 590 / 34 / 14 / 0.5 / 115 / 1370 / 40 / 2 / 2 / 29 |
