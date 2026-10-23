# Long John Silver's: lines for a person

Guide: https://www.ljsilvers.com/nutrition (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (110)

The last column comes from `npm run chains:evidence`: whether a draft's numbers sit right after the item's name in the guide text the drafts read. It can't read sizes or sections (one draft called a single 78 g cookie a "6 pack"): check those against the guide, then fix the line and set its check to `person`.

Fix each line in `menus/long-john-silvers.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B | In the guide text (no AI) |
| --- | --- | --- | --- | --- | --- |
| Sweet & Zesty Asian Sauce | 1 oz. | differ: fat_g | 45 / 0 / 0 / 0 / 0 / 217 / 11 / 0 / 10 / 0 | 45 / 2 / 0 / 0 / 0 / 217 / 11 / 0 / 10 / 0 | A: numbers found after the name (line 214); check the size; B: numbers found after the name (line 214); check the size |
| Corn Dog Nuggets® | 5 Pc. | only in draft A | 270 / 13 / 2.5 / 0 / 50 / 330 / 30 / 6 / 6 / 8 | not found | A: numbers found after the name (line 353); check the size |
| Pepsi® | Kids | only in draft B | not found | 150 / 0 / 0 / 0 / 0 / 35 / 42 / 0 / 40 / 0 | B: numbers found after the name (line 230); check the size |
| Pepsi® | Small | only in draft B | not found | 250 / 0 / 0 / 0 / 0 / 60 / 70 / 0 / 67 / 0 | B: numbers found after the name (line 231); check the size |
| Pepsi® | Medium | only in draft B | not found | 400 / 0 / 0 / 0 / 0 / 100 / 112 / 0 / 108 / 0 | B: numbers found after the name (line 232); check the size |
| Pepsi® | Large | only in draft B | not found | 500 / 0 / 0 / 0 / 0 / 125 / 140 / 0 / 135 / 0 | B: numbers found after the name (line 233); check the size |
| Mountain Dew® | Kids | only in draft B | not found | 160 / 0 / 0 / 0 / 0 / 50 / 43 / 0 / 43 / 0 | B: numbers found after the name (line 234); check the size |
| Mountain Dew® | Small | only in draft B | not found | 270 / 0 / 0 / 0 / 0 / 85 / 72 / 0 / 72 / 0 | B: numbers found after the name (line 235); check the size |
| Mountain Dew® | Medium | only in draft B | not found | 440 / 0 / 0 / 0 / 0 / 140 / 116 / 0 / 116 / 0 | B: numbers found after the name (line 236); check the size |
| Mountain Dew® | Large | only in draft B | not found | 550 / 0 / 0 / 0 / 0 / 170 / 145 / 0 / 145 / 0 | B: numbers found after the name (line 237); check the size |
| Starry® | Kids | only in draft B | not found | 150 / 0 / 0 / 0 / 0 / 35 / 39 / 0 / 39 / 0 | B: numbers found after the name (line 238); check the size |
| Starry® | Small | only in draft B | not found | 240 / 0 / 0 / 0 / 0 / 58 / 65 / 0 / 65 / 0 | B: numbers found after the name (line 239); check the size |
| Starry® | Medium | only in draft B | not found | 400 / 0 / 0 / 0 / 0 / 93 / 104 / 0 / 104 / 0 | B: numbers found after the name (line 240); check the size |
| Starry® | Large | only in draft B | not found | 480 / 0 / 0 / 0 / 0 / 116 / 130 / 0 / 130 / 0 | B: numbers found after the name (line 241); check the size |
| Dr. Pepper® | Kids | only in draft B | not found | 150 / 0 / 0 / 0 / 0 / 50 / 40 / 0 / 40 / 0 | B: numbers found after the name (line 242); check the size |
| Dr. Pepper® | Small | only in draft B | not found | 250 / 0 / 0 / 0 / 0 / 85 / 67 / 0 / 67 / 0 | B: numbers found after the name (line 243); check the size |
| Dr. Pepper® | Medium | only in draft B | not found | 400 / 0 / 0 / 0 / 0 / 140 / 108 / 0 / 108 / 0 | B: numbers found after the name (line 244); check the size |
| Dr. Pepper® | Large | only in draft B | not found | 500 / 0 / 0 / 0 / 0 / 175 / 135 / 0 / 135 / 0 | B: numbers found after the name (line 245); check the size |
| Tropicana® Lemonade | Kids | only in draft B | not found | 150 / 0 / 0 / 0 / 0 / 160 / 41 / 0 / 41 / 0 | B: numbers found after the name (line 246); check the size |
| Tropicana® Lemonade | Small | only in draft B | not found | 250 / 0 / 0 / 0 / 0 / 265 / 68 / 0 / 68 / 0 | B: numbers found after the name (line 247); check the size |
| Tropicana® Lemonade | Medium | only in draft B | not found | 400 / 0 / 0 / 0 / 0 / 420 / 108 / 0 / 108 / 0 | B: numbers found after the name (line 248); check the size |
| Tropicana® Fruit Punch | Large | only in draft B | not found | 500 / 0 / 0 / 0 / 0 / 525 / 135 / 0 / 135 / 0 | B: numbers found after the name (line 249); check the size |
| Tropicana® Fruit Punch | Small | only in draft B | not found | 270 / 0 / 0 / 0 / 0 / 35 / 45 / 0 / 45 / 0 | B: numbers found after the name (line 250); check the size |
| Tropicana® Fruit Punch | Medium | only in draft B | not found | 440 / 0 / 0 / 0 / 0 / 60 / 75 / 0 / 75 / 0 | B: numbers found after the name (line 251); check the size |
| Dole Starrberry Lemonade | Kids | only in draft B | not found | 165 / 0 / 0 / 0 / 0 / 240 / 42 / 0 / 42 / 0 | B: numbers found after the name (line 254); check the size |
| Dole Starrberry Lemonade | Small | only in draft B | not found | 275 / 0 / 0 / 0 / 0 / 400 / 70 / 0 / 70 / 0 | B: numbers found after the name (line 255); check the size |
| Dole Starrberry Lemonade | Medium | only in draft B | not found | 440 / 0 / 0 / 0 / 0 / 640 / 112 / 0 / 112 / 0 | B: numbers found after the name (line 256); check the size |
| Dole Starrberry Lemonade | Large | only in draft B | not found | 550 / 0 / 0 / 0 / 0 / 800 / 140 / 0 / 140 / 0 | B: numbers found after the name (line 257); check the size |
| Wild Cherry Pepsi® | Kids | only in draft B | not found | 150 / 0 / 0 / 0 / 0 / 30 / 42 / 0 / 42 / 0 | B: numbers found after the name (line 258); check the size |
| Wild Cherry Pepsi® | Small | only in draft B | not found | 250 / 0 / 0 / 0 / 0 / 50 / 70 / 0 / 70 / 0 | B: numbers found after the name (line 259); check the size |
| Wild Cherry Pepsi® | Medium | only in draft B | not found | 400 / 0 / 0 / 0 / 0 / 80 / 112 / 0 / 112 / 0 | B: numbers found after the name (line 260); check the size |
| Wild Cherry Pepsi® | Large | only in draft B | not found | 500 / 0 / 0 / 0 / 0 / 100 / 140 / 0 / 140 / 0 | B: numbers found after the name (line 261); check the size |
| Lipton® Raspberry Tea | Kids | only in draft B | not found | 120 / 0 / 0 / 0 / 0 / 35 / 31 / 0 / 31 / 0 | B: numbers found after the name (line 262); check the size |
| Lipton® Raspberry Tea | Small | only in draft B | not found | 200 / 0 / 0 / 0 / 0 / 60 / 52 / 0 / 52 / 0 | B: numbers found after the name (line 263); check the size |
| Lipton® Raspberry Tea | Medium | only in draft B | not found | 320 / 0 / 0 / 0 / 0 / 100 / 84 / 0 / 84 / 0 | B: numbers found after the name (line 264); check the size |
| Lipton® Raspberry Tea | Large | only in draft B | not found | 400 / 0 / 0 / 0 / 0 / 125 / 105 / 0 / 105 / 0 | B: numbers found after the name (line 265); check the size |
| Lipton® Brewed Tea (sweetened) | Kids | only in draft B | not found | 130 / 0 / 0 / 0 / 0 / 15 / 32 / 0 / 32 / 0 | B: numbers found after the name (line 266); check the size |
| Lipton® Brewed Tea (sweetened) | Small | only in draft B | not found | 210 / 0 / 0 / 0 / 0 / 20 / 54 / 0 / 54 / 0 | B: numbers found after the name (line 267); check the size |
| Lipton® Brewed Tea (sweetened) | Medium | only in draft B | not found | 340 / 0 / 0 / 0 / 0 / 35 / 87 / 0 / 87 / 0 | B: numbers found after the name (line 268); check the size |
| Lipton® Brewed Tea (sweetened) | Large | only in draft B | not found | 420 / 0 / 0 / 0 / 0 / 40 / 108 / 0 / 108 / 0 | B: numbers found after the name (line 269); check the size |
| Lipton® Brewed Tea (unsweetened) | Small | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 25 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 271); check the size, mostly zeros: look |
| Lipton® Brewed Tea (unsweetened) | Medium | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 35 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 272); check the size, mostly zeros: look |
| Lipton® Brewed Tea (unsweetened) | Large | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 45 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 273); check the size, mostly zeros: look |
| Diet Pepsi® | Kids | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 35 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 274); check the size, mostly zeros: look |
| Diet Pepsi® | Small | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 60 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 275); check the size, mostly zeros: look |
| Diet Pepsi® | Medium | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 100 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 276); check the size, mostly zeros: look |
| Diet Pepsi® | Large | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 125 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 277); check the size, mostly zeros: look |
| Diet Mountain Dew® | Kids | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 60 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 278); check the size, mostly zeros: look |
| Diet Mountain Dew® | Small | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 100 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 279); check the size, mostly zeros: look |
| Diet Mountain Dew® | Medium | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 160 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 280); check the size, mostly zeros: look |
| Diet Mountain Dew® | Large | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 200 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 281); check the size, mostly zeros: look |
| Diet Root Beer | 1/2 Gallon | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 576 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 282); check the size, mostly zeros: look |
| Diet Root Beer | Gallon | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 1152 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 283); check the size, mostly zeros: look |
| Diet Root Beer | Kid's | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 108 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 284); check the size, mostly zeros: look |
| Diet Root Beer | Large | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 288 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 285); check the size, mostly zeros: look |
| Diet Root Beer | Regular | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 180 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 286); check the size, mostly zeros: look |
| Diet Root Beer | Small | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 144 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 287); check the size, mostly zeros: look |
| Root Beer | 1/2 Gallon | only in draft B | not found | 930 / 0 / 0 / 0 / 0 / 432 / 250 / 0 / 240 / 0 | B: numbers found after the name (line 288); check the size |
| Root Beer | Gallon | only in draft B | not found | 1860 / 0 / 0 / 0 / 0 / 864 / 500 / 0 / 480 / 0 | B: numbers found after the name (line 289); check the size |
| Root Beer | Kids | only in draft B | not found | 150 / 0 / 0 / 0 / 0 / 30 / 43 / 0 / 43 / 0 | B: numbers found after the name (line 290); check the size |
| Root Beer | Large | only in draft B | not found | 470 / 0 / 0 / 0 / 0 / 216 / 125 / 0 / 120 / 0 | B: numbers found after the name (line 291); check the size |
| Root Beer | Regular | only in draft B | not found | 290 / 0 / 0 / 0 / 0 / 135 / 78 / 0 / 75 / 0 | B: numbers found after the name (line 292); check the size |
| Root Beer | Small | only in draft B | not found | 240 / 0 / 0 / 0 / 0 / 108 / 63 / 0 / 60 / 0 | B: numbers found after the name (line 293); check the size |
| Mug Root Beer | Large | only in draft B | not found | 500 / 0 / 0 / 0 / 0 / 216 / 125 / 0 / 120 / 0 | B: numbers found after the name (line 294); check the size |
| Mug Root Beer | Medium | only in draft B | not found | 375 / 0 / 0 / 0 / 0 / 135 / 78 / 0 / 75 / 0 | B: numbers found after the name (line 295); check the size |
| Mug Root Beer | Small | only in draft B | not found | 250 / 0 / 0 / 0 / 0 / 108 / 63 / 0 / 60 / 0 | B: numbers found after the name (line 296); check the size |
| Float Diet Root Beer | Large 32 oz. | only in draft B | not found | 320 / 11 / 6 / 0 / 45 / 380 / 47 / 0 / 42 / 9 | B: numbers found after the name (line 298); check the size |
| Float Diet Root Beer | Regular 20 oz. | only in draft B | not found | 160 / 5 / 3 / 0 / 20 / 200 / 24 / 0 / 21 / 4 | B: numbers found after the name (line 299); check the size |
| Float Diet Root Beer | Small 16 oz. | only in draft B | not found | 160 / 5 / 3 / 0 / 20 / 190 / 24 / 0 / 21 / 4 | B: numbers found after the name (line 300); check the size |
| Float Root Beer | Regular 20 oz. | only in draft B | not found | 340 / 5 / 3 / 0 / 20 / 190 / 68 / 0 / 66 / 4 | B: numbers found after the name (line 302); check the size |
| Float Root Beer | Small 16 oz. | only in draft B | not found | 310 / 5 / 3 / 0 / 20 / 180 / 61 / 0 / 59 / 4 | B: numbers found after the name (line 303); check the size |
| Freeze Diet Root Beer | Large 32 oz. | only in draft B | not found | 630 / 21 / 12 / 0 / 90 / 620 / 95 / 0 / 84 / 18 | B: numbers found after the name (line 304); check the size |
| Freeze Diet Root Beer | Regular 20 oz. | only in draft B | not found | 360 / 12 / 7 / 0 / 50 / 360 / 54 / 0 / 48 / 10 | B: numbers found after the name (line 305); check the size |
| Freeze Diet Root Beer | Small 16 oz. | only in draft B | not found | 270 / 9 / 5 / 0 / 40 / 270 / 41 / 0 / 36 / 8 | B: numbers found after the name (line 306); check the size |
| Freeze Root Beer | Large 32 oz. | only in draft B | not found | 870 / 21 / 12 / 0 / 90 / 610 / 153 / 0 / 143 / 18 | B: numbers found after the name (line 307); check the size |
| Freeze Root Beer | Regular 20 oz. | only in draft B | not found | 520 / 12 / 7 / 0 / 50 / 350 / 92 / 0 / 86 / 10 | B: numbers found after the name (line 308); check the size |
| Freeze Root Beer | Small 16 oz. | only in draft B | not found | 380 / 9 / 5 / 0 / 40 / 260 / 68 / 0 / 64 / 8 | B: numbers found after the name (line 309); check the size |
| Shake Chocolate | Large 32 oz. | only in draft B | not found | 1160 / 34 / 21 / 0 / 125 / 830 / 193 / 0 / 166 / 26 | B: numbers found after the name (line 310); check the size |
| Shake Chocolate | Regular 20 oz. | only in draft B | not found | 770 / 23 / 14 / 0 / 80 / 540 / 129 / 0 / 109 / 17 | B: numbers found after the name (line 311); check the size |
| Shake Chocolate | Small 16 oz. | only in draft B | not found | 540 / 17 / 11 / 0 / 60 / 390 / 88 / 0 / 74 / 12 | B: numbers found after the name (line 312); check the size |
| Shake Strawberry | Large 32 oz. | only in draft B | not found | 1090 / 33 / 20 / 0 / 125 / 780 / 173 / 0 / 149 / 25 | B: numbers found after the name (line 313); check the size |
| Shake Strawberry | Regular 20 oz. | only in draft B | not found | 730 / 22 / 14 / 0 / 80 / 510 / 115 / 0 / 98 / 16 | B: numbers found after the name (line 314); check the size |
| Shake Strawberry | Small 16 oz. | only in draft B | not found | 520 / 17 / 11 / 0 / 60 / 370 / 81 / 0 / 69 / 12 | B: numbers found after the name (line 315); check the size |
| Shake Vanilla | Large 32 oz. | only in draft B | not found | 1070 / 33 / 20 / 0 / 125 / 780 / 173 / 0 / 149 / 25 | B: numbers found after the name (line 316); check the size |
| Shake Vanilla | Regular 20 oz. | only in draft B | not found | 690 / 22 / 14 / 0 / 80 / 510 / 110 / 0 / 94 / 16 | B: numbers found after the name (line 317); check the size |
| Shake Vanilla | Small 16 oz. | only in draft B | not found | 540 / 17 / 11 / 0 / 60 / 380 / 86 / 0 / 73 / 12 | B: numbers found after the name (line 318); check the size |
| Polar Swirl Cookie Dough | 20 oz. | only in draft B | not found | 970 / 34 / 19 / 1 / 140 / 640 / 145 / 0 / 113 / 22 | B: numbers found after the name (line 319); check the size |
| Polar Swirl Cookie Dough | Mini | only in draft B | not found | 380 / 14 / 8 / 0 / 55 / 250 / 57 / 0 / 45 / 9 | B: numbers found after the name (line 320); check the size |
| Polar Swirl Cookie Dough | 16 oz. | only in draft B | not found | 740 / 26 / 15 / 1 / 105 / 500 / 111 / 0 / 88 / 17 | B: numbers found after the name (line 321); check the size |
| Polar Swirl Cookie Dough | 12 oz. | only in draft B | not found | 650 / 23 / 13 / 1 / 95 / 430 / 98 / 0 / 76 / 15 | B: numbers found after the name (line 322); check the size |
| Polar Swirl M&M | 20 oz. | only in draft B | not found | 1190 / 43 / 26 / 0 / 105 / 640 / 182 / 3 / 162 / 24 | B: numbers found after the name (line 323); check the size |
| Polar Swirl M&M | Mini | only in draft B | not found | 470 / 17 / 10 / 0 / 40 / 260 / 71 / 1 / 64 / 10 | B: numbers found after the name (line 324); check the size |
| Polar Swirl M&M | 16 oz. | only in draft B | not found | 900 / 32 / 19 / 0 / 80 / 500 / 137 / 2 / 122 / 19 | B: numbers found after the name (line 325); check the size |
| Polar Swirl M&M | 12 oz. | only in draft B | not found | 810 / 29 / 17 / 0 / 70 / 430 / 123 / 2 / 110 / 16 | B: numbers found after the name (line 326); check the size |
| Polar Swirl Oreo | 20 oz. | only in draft B | not found | 980 / 26 / 14 / 0 / 95 / 810 / 148 / 0 / 117 / 21 | B: numbers found after the name (line 327); check the size |
| Polar Swirl Oreo | Mini | only in draft B | not found | 390 / 10 / 6 / 0 / 40 / 320 / 59 / 0 / 46 / 9 | B: numbers found after the name (line 328); check the size |
| Polar Swirl Oreo | 16 oz. | only in draft B | not found | 750 / 20 / 11 / 0 / 75 / 620 / 114 / 0 / 90 / 17 | B: numbers found after the name (line 329); check the size |
| Polar Swirl Oreo | 12 oz. | only in draft B | not found | 660 / 17 / 9 / 0 / 65 / 550 / 100 / 0 / 78 / 14 | B: numbers found after the name (line 330); check the size |
| Polar Swirl Reese's Peanut Butter Cup | 20 oz. | only in draft B | not found | 1030 / 43 / 20 / 0 / 100 / 810 / 141 / 3 / 126 / 26 | B: numbers found after the name (line 331); check the size |
| Polar Swirl Reese's Peanut Butter Cup | Mini | only in draft B | not found | 410 / 17 / 8 / 0 / 40 / 320 / 56 / 1 / 50 / 10 | B: numbers found after the name (line 332); check the size |
| Polar Swirl Reese's Peanut Butter Cup | 16 oz. | only in draft B | not found | 780 / 32 / 16 / 0 / 80 / 620 / 109 / 2 / 97 / 20 | B: numbers found after the name (line 333); check the size |
| Polar Swirl Reese's Peanut Butter Cup | 12 oz. | only in draft B | not found | 690 / 29 / 14 / 0 / 65 / 540 / 95 / 2 / 85 / 18 | B: numbers found after the name (line 334); check the size |
| Sundae Chocolate | Regular | only in draft B | not found | 360 / 11 / 8 / 0 / 35 / 240 / 61 / 0 / 50 / 7 | B: numbers found after the name (line 335); check the size |
| Sundae Hot Caramel | Regular | only in draft B | not found | 380 / 11 / 7 / 0 / 35 / 270 / 65 / 0 / 51 / 7 | B: numbers found after the name (line 336); check the size |
| Sundae Hot Fudge | Regular | only in draft B | not found | 390 / 14 / 11 / 0 / 35 / 250 / 60 / 0 / 46 / 7 | B: numbers found after the name (line 337); check the size |
| Sundae Strawberry | Regular | only in draft B | not found | 340 / 11 / 7 / 0 / 35 / 220 / 54 / 0 / 44 / 7 | B: numbers found after the name (line 338); check the size |
| Vanilla Cone | Kids 4 oz. | only in draft B | not found | 200 / 6 / 3.5 / 0 / 25 / 160 / 32 / 0 / 24 / 5 | B: numbers found after the name (line 339); check the size |
| Vanilla Cone | Regular 5.5 oz. | only in draft B | not found | 270 / 8 / 5 / 0 / 35 / 220 / 42 / 0 / 33 / 7 | B: numbers found after the name (line 340); check the size |
| Lobster Bites | 4.0 oz | both read it the same, but its protein, carbs and fat make 194 kcal, not 130 | 130 / 1.5 / 0 / 0 / 0 / 510 / 27 / 1 / 1 / 18 | 130 / 1.5 / 0 / 0 / 0 / 510 / 27 / 1 / 1 / 18 | A: numbers found after the name (line 176); check the size; B: numbers found after the name (line 176); check the size |
| Corn Dog Nuggets® | 10 Pc. | both read it the same, but its protein, carbs and fat make 442 kcal, not 540 | 540 / 26 / 4 / 0.5 / 57 / 1038 / 40 / 2 / 12 / 12 | 540 / 26 / 4 / 0.5 / 57 / 1038 / 40 / 2 / 12 / 12 | A: numbers found after the name (line 354); check the size; B: numbers found after the name (line 354); check the size |

## Spot check (5 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Battered Shrimp | 3 pieces | 111 / 7.5 / 3.4 / 0.5 / 30 / 484 / 7 / 0 / 0 / 4 |
| Baja Grilled Shrimp Taco | 1 taco | 205 / 7 / 1.6 / 0 / 59 / 873 / 25 / 1 / 1 / 10 |
| Battered Alaskan Cod | 1 piece | 212 / 13.1 / 6 / 0.9 / 38 / 774 / 13 / 1 / 0 / 11 |
| Lime Vinaigrette | 1 oz | 70 / 6 / 0.5 / 0 / 0 / 240 / 5 / 0 / 4 / 0 |
| Sweet Chili Grilled Shrimp Taco | 1 taco | 187 / 4.4 / 1.2 / 0 / 56 / 872 / 26 / 1 / 3 / 10 |
