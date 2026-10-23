# Whataburger: lines for a person

Guide: https://wbimageserver.whataburger.com/Nutrition.pdf (read 2026-10-22). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (103)

The last column comes from `npm run chains:evidence`: whether a draft's numbers sit right after the item's name in the guide text the drafts read. It can't read sizes or sections (one draft called a single 78 g cookie a "6 pack"): check those against the guide, then fix the line and set its check to `person`.

Fix each line in `menus/whataburger.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B | In the guide text (no AI) |
| --- | --- | --- | --- | --- | --- |
| Jalapeños | whole or sliced - about 5-8 slices | the guide gives no sodium_mg | 0 / 0 / 0 / 0 / 0 / – / 1 / 0 / 0 / 0 | 0 / 0 / 0 / 0 / 0 / – / 1 / 0 / 0 / 0 | A: numbers found after the name (line 72); check the size, mostly zeros: look; B: numbers found after the name (line 72); check the size, mostly zeros: look |
| Hot Apple Pie | 1 serving | only in draft B | not found | 270 / 14 / 5 / 0 / 0 / 260 / 34 / 2 / 7 / 3 | B: numbers found after the name (line 190); check the size |
| Hot Lemon Pie | 1 serving | only in draft B | not found | 320 / 16 / 5 / 0 / 0 / 230 / 41 / 3 / 12 / 4 | B: numbers found after the name (line 191); check the size |
| Fruit Chews | 1 serving | only in draft B | not found | 80 / 0 / 0 / 0 / 0 / 20 / 19 / 0 / 11 / 1 | B: numbers found after the name (line 192); check the size |
| Chocolate Chunk Cookie | 1 serving | only in draft B | not found | 230 / 11 / 6 / 0 / 15 / 190 / 32 / 1 / 18 / 2 | B: numbers found after the name (line 194); check the size |
| Sugar Cookie | 1 serving | only in draft B | not found | 230 / 10 / 5 / 0 / 15 / 210 / 34 / 0 / 17 / 3 | B: numbers found after the name (line 195); check the size |
| Chocolate Shake | Small (16 fl oz) | only in draft B | not found | 440 / 11 / 6 / 0 / 30 / 390 / 80 / 0 / 78 / 10 | B: numbers found after the name (line 197); check the size |
| Chocolate Shake | Medium (20 fl oz) | only in draft B | not found | 560 / 14 / 8 / 0 / 40 / 490 / 102 / 0 / 100 / 13 | B: numbers found after the name (line 198); check the size |
| Chocolate Shake | Large (32 fl oz) | only in draft B | not found | 890 / 23 / 13 / 0 / 65 / 790 / 159 / 0 / 159 / 20 | B: numbers found after the name (line 199); check the size |
| Chocolate Malt | Small (16 fl oz) | only in draft B | not found | 460 / 11 / 6 / 0 / 30 / 390 / 85 / 1 / 83 / 10 | B: numbers found after the name (line 200); check the size |
| Chocolate Malt | Medium (20 fl oz) | only in draft B | not found | 590 / 13 / 8 / 0 / 35 / 490 / 110 / 2 / 107 / 12 | B: numbers found after the name (line 201); check the size |
| Chocolate Malt | Large (32 fl oz) | only in draft B | not found | 920 / 22 / 12 / 0 / 60 / 780 / 170 / 2 / 166 / 19 | B: numbers found after the name (line 202); check the size |
| Strawberry Shake | Small (16 fl oz) | only in draft B | not found | 450 / 11 / 6 / 0 / 30 / 370 / 80 / 0 / 80 / 9 | B: numbers found after the name (line 203); check the size |
| Strawberry Shake | Medium (20 fl oz) | only in draft B | not found | 560 / 14 / 8 / 0 / 40 / 460 / 103 / 0 / 103 / 12 | B: numbers found after the name (line 204); check the size |
| Strawberry Shake | Large (32 fl oz) | only in draft B | not found | 890 / 22 / 13 / 0 / 65 / 750 / 160 / 0 / 160 / 19 | B: numbers found after the name (line 205); check the size |
| Strawberry Malt | Small (16 fl oz) | only in draft B | not found | 460 / 11 / 6 / 0 / 30 / 370 / 85 / 0 / 85 / 9 | B: numbers found after the name (line 206); check the size |
| Strawberry Malt | Medium (20 fl oz) | only in draft B | not found | 590 / 13 / 7 / 0 / 35 / 460 / 111 / 0 / 110 / 11 | B: numbers found after the name (line 207); check the size |
| Strawberry Malt | Large (32 fl oz) | only in draft B | not found | 920 / 21 / 12 / 0 / 60 / 740 / 171 / 0 / 170 / 18 | B: numbers found after the name (line 208); check the size |
| Vanilla Shake | Small (16 fl oz) | only in draft B | not found | 410 / 12 / 7 / 0 / 35 / 390 / 69 / 0 / 69 / 10 | B: numbers found after the name (line 209); check the size |
| Vanilla Shake | Medium (20 fl oz) | only in draft B | not found | 510 / 15 / 9 / 0 / 45 / 490 / 86 / 0 / 86 / 13 | B: numbers found after the name (line 210); check the size |
| Vanilla Shake | Large (32 fl oz) | only in draft B | not found | 820 / 24 / 14 / 0 / 70 / 790 / 137 / 0 / 137 / 21 | B: numbers found after the name (line 211); check the size |
| Vanilla Malt | Small (16 fl oz) | only in draft B | not found | 430 / 12 / 7 / 0 / 35 / 390 / 74 / 0 / 74 / 10 | B: numbers found after the name (line 212); check the size |
| Vanilla Malt | Medium (20 fl oz) | only in draft B | not found | 540 / 14 / 8 / 0 / 40 / 490 / 94 / 0 / 93 / 12 | B: numbers found after the name (line 213); check the size |
| Vanilla Malt | Large (32 fl oz) | only in draft B | not found | 860 / 23 / 13 / 0 / 65 / 780 / 148 / 0 / 147 / 20 | B: numbers found after the name (line 214); check the size |
| Dr Pepper. Shake† | Small (16 fl oz) | only in draft B | not found | 430 / 11 / 6 / 0 / 30 / 370 / 78 / 0 / 78 / 9 | B: numbers found after the name (line 215); check the size |
| Dr Pepper. Shake† | Medium (20 fl oz) | only in draft B | not found | 550 / 14 / 8 / 0 / 40 / 460 / 100 / 0 / 99 / 12 | B: numbers found after the name (line 216); check the size |
| Dr Pepper. Shake† | Large (32 fl oz) | only in draft B | not found | 870 / 22 / 13 / 0 / 65 / 740 / 157 / 1 / 155 / 19 | B: numbers found after the name (line 217); check the size |
| Coca-Cola. Classic | Kid's (16 fl oz) | only in draft B | not found | 200 / 0 / 0 / 0 / 0 / 55 / 54 / 0 / 54 / 0 | B: numbers found after the name (line 219); check the size |
| Coca-Cola. Classic | Small (20 fl oz) | only in draft B | not found | 250 / 0 / 0 / 0 / 0 / 65 / 67 / 0 / 67 / 0 | B: numbers found after the name (line 220); check the size |
| Coca-Cola. Classic | Medium (32 fl oz) | only in draft B | not found | 390 / 0 / 0 / 0 / 0 / 105 / 107 / 0 / 107 / 0 | B: numbers found after the name (line 221); check the size |
| Coca-Cola. Classic | Large (44 fl oz) | only in draft B | not found | 540 / 0 / 0 / 0 / 0 / 150 / 147 / 0 / 147 / 0 | B: numbers found after the name (line 222); check the size |
| Diet Coke. | Kid's (16 fl oz) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 65 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 223); check the size, mostly zeros: look |
| Diet Coke. | Small (20 fl oz) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 80 / 0.5 / 0 / 0 / 0 | B: numbers found after the name (line 224); check the size, mostly zeros: look |
| Diet Coke. | Medium (32 fl oz) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 130 / 0.5 / 0 / 0 / 0 | B: numbers found after the name (line 225); check the size, mostly zeros: look |
| Diet Coke. | Large (44 fl oz) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 180 / 1 / 0 / 0 / 0 | B: numbers found after the name (line 226); check the size, mostly zeros: look |
| Coke Zero | Kid's (16 fl oz) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 55 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 227); check the size, mostly zeros: look |
| Coke Zero | Small (20 fl oz) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 65 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 228); check the size, mostly zeros: look |
| Coke Zero | Medium (32 fl oz) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 105 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 229); check the size, mostly zeros: look |
| Coke Zero | Large (44 fl oz) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 150 / 0.5 / 0 / 0 / 0 | B: numbers found after the name (line 230); check the size, mostly zeros: look |
| Caffeine Free Diet Coke. | Kid's (16 fl oz) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 65 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 249); check the size, mostly zeros: look |
| Caffeine Free Diet Coke. | Small (20 fl oz) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 80 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 250); check the size, mostly zeros: look |
| Caffeine Free Diet Coke. | Medium (32 fl oz) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 130 / 0.5 / 0 / 0 / 0 | B: numbers found after the name (line 251); check the size, mostly zeros: look |
| Caffeine Free Diet Coke. | Large (44 fl oz) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 180 / 0.5 / 0 / 0 / 0 | B: numbers found after the name (line 252); check the size, mostly zeros: look |
| Cherry Coke. | Kid's (16 fl oz) | only in draft B | not found | 210 / 0 / 0 / 0 / 0 / 55 / 56 / 0 / 56 / 0 | B: numbers found after the name (line 253); check the size |
| Cherry Coke. | Small (20 fl oz) | only in draft B | not found | 260 / 0 / 0 / 0 / 0 / 70 / 70 / 0 / 70 / 0 | B: numbers found after the name (line 254); check the size |
| Cherry Coke. | Medium (32 fl oz) | only in draft B | not found | 410 / 0 / 0 / 0 / 0 / 110 / 112 / 0 / 112 / 0 | B: numbers found after the name (line 255); check the size |
| Cherry Coke. | Large (44 fl oz) | only in draft B | not found | 560 / 0 / 0 / 0 / 0 / 150 / 154 / 0 / 154 / 0 | B: numbers found after the name (line 256); check the size |
| Sprite. | Kid's (16 fl oz) | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 95 / 50 / 0 / 50 / 0 | B: numbers found after the name (line 257); check the size |
| Sprite. | Small (20 fl oz) | only in draft B | not found | 230 / 0 / 0 / 0 / 0 / 120 / 62 / 0 / 62 / 0 | B: numbers found after the name (line 258); check the size |
| Sprite. | Medium (32 fl oz) | only in draft B | not found | 370 / 0 / 0 / 0 / 0 / 190 / 99 / 0 / 99 / 0 | B: numbers found after the name (line 259); check the size |
| Sprite. | Large (44 fl oz) | only in draft B | not found | 510 / 0 / 0 / 0 / 0 / 260 / 137 / 0 / 137 / 0 | B: numbers found after the name (line 260); check the size |
| Dr Pepper. | Kid's (16 fl oz) | only in draft B | not found | 190 / 0 / 0 / 0 / 0 / 20 / 52 / 0 / 51 / 0 | B: numbers found after the name (line 261); check the size |
| Dr Pepper. | Small (20 fl oz) | only in draft B | not found | 240 / 0 / 0 / 0 / 0 / 25 / 65 / 0 / 64 / 0 | B: numbers found after the name (line 262); check the size |
| Dr Pepper. | Medium (32 fl oz) | only in draft B | not found | 380 / 0 / 0 / 0 / 0 / 40 / 104 / 0 / 102 / 0 | B: numbers found after the name (line 263); check the size |
| Dr Pepper. | Large (44 fl oz) | only in draft B | not found | 530 / 0 / 0 / 0 / 0 / 60 / 143 / 0 / 140 / 0 | B: numbers found after the name (line 264); check the size |
| Diet Dr Pepper. | Kid's (16 fl oz) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 55 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 265); check the size, mostly zeros: look |
| Diet Dr Pepper. | Small (20 fl oz) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 65 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 266); check the size, mostly zeros: look |
| Diet Dr Pepper. | Medium (32 fl oz) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 110 / 1 / 0 / 0 / 0 | B: numbers found after the name (line 267); check the size, mostly zeros: look |
| Diet Dr Pepper. | Large (44 fl oz) | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 150 / 1 / 0 / 0 / 0 | B: numbers found after the name (line 268); check the size |
| Barq's. Root Beer | Kid's (16 fl oz) | only in draft B | not found | 210 / 0 / 0 / 0 / 0 / 70 / 58 / 0 / 58 / 0 | B: numbers found after the name (line 269); check the size |
| Barq's. Root Beer | Small (20 fl oz) | only in draft B | not found | 270 / 0 / 0 / 0 / 0 / 90 / 73 / 0 / 73 / 0 | B: numbers found after the name (line 270); check the size |
| Barq's. Root Beer | Medium (32 fl oz) | only in draft B | not found | 430 / 0 / 0 / 0 / 0 / 140 / 116 / 0 / 116 / 0 | B: numbers found after the name (line 271); check the size |
| Barq's. Root Beer | Large (44 fl oz) | only in draft B | not found | 590 / 0 / 0 / 0 / 0 / 190 / 160 / 0 / 160 / 0 | B: numbers found after the name (line 272); check the size |
| Minute Maid. Light Lemonade | Kid's (16 fl oz) | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 55 / 3 / 0 / 0 / 0 | B: numbers found after the name (line 273); check the size |
| Minute Maid. Light Lemonade | Small (20 fl oz) | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 70 / 3 / 0 / 0 / 0 | B: numbers found after the name (line 274); check the size |
| Minute Maid. Light Lemonade | Medium (32 fl oz) | only in draft B | not found | 15 / 0 / 0 / 0 / 0 / 115 / 5 / 0 / 0 / 0 | B: numbers found after the name (line 275); check the size |
| Minute Maid. Light Lemonade | Large (44 fl oz) | only in draft B | not found | 25 / 0 / 0 / 0 / 0 / 160 / 7 / 0 / 0 / 0 | B: numbers found after the name (line 276); check the size |
| POWERADE. Mountain Blast | Kid's (16 fl oz) | only in draft B | not found | 110 / 0 / 0 / 0 / 0 / 150 / 29 / 0 / 29 / 0 | B: numbers found after the name (line 277); check the size |
| POWERADE. Mountain Blast | Small (20 fl oz) | only in draft B | not found | 140 / 0 / 0 / 0 / 0 / 190 / 37 / 0 / 36 / 0 | B: numbers found after the name (line 278); check the size |
| POWERADE. Mountain Blast | Medium (32 fl oz) | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 300 / 58 / 0 / 58 / 0 | B: numbers found after the name (line 279); check the size |
| POWERADE. Mountain Blast | Large (44 fl oz) | only in draft B | not found | 310 / 0 / 0 / 0 / 0 / 410 / 80 / 0 / 80 / 0 | B: numbers found after the name (line 280); check the size |
| POWERADE. Fruit Punch | Kid's (16 fl oz) | only in draft B | not found | 110 / 0 / 0 / 0 / 0 / 150 / 30 / 0 / 28 / 0 | B: numbers found after the name (line 281); check the size |
| POWERADE. Fruit Punch | Small (20 fl oz) | only in draft B | not found | 130 / 0 / 0 / 0 / 0 / 190 / 37 / 0 / 36 / 0 | B: numbers found after the name (line 282); check the size |
| POWERADE. Fruit Punch | Medium (32 fl oz) | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 310 / 59 / 0 / 57 / 0 | B: numbers found after the name (line 283); check the size |
| POWERADE. Fruit Punch | Large (44 fl oz) | only in draft B | not found | 300 / 0 / 0 / 0 / 0 / 420 / 82 / 0 / 78 / 0 | B: numbers found after the name (line 284); check the size |
| Hi-C' Orange Lavaburst | Kid's (16 fl oz) | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 55 / 58 / 0 / 57 / 0 | B: numbers found after the name (line 285); check the size |
| Hi-C' Orange Lavaburst | Small (20 fl oz) | only in draft B | not found | 280 / 0 / 0 / 0 / 0 / 65 / 73 / 0 / 71 / 0 | B: numbers found after the name (line 286); check the size |
| Hi-C' Orange Lavaburst | Medium (32 fl oz) | only in draft B | not found | 440 / 0 / 0 / 0 / 0 / 105 / 116 / 0 / 113 / 0 | B: numbers found after the name (line 287); check the size |
| Hi-C' Orange Lavaburst | Large (44 fl oz) | only in draft B | not found | 610 / 0 / 0 / 0 / 0 / 150 / 160 / 0 / 156 / 0 | B: numbers found after the name (line 288); check the size |
| Hi-C' Poppin' Pink Lemonade | Kid's (16 fl oz) | only in draft B | not found | 190 / 0 / 0 / 0 / 0 / 130 / 50 / 0 / 48 / 0 | B: numbers found after the name (line 289); check the size |
| Hi-C' Poppin' Pink Lemonade | Small (20 fl oz) | only in draft B | not found | 240 / 0 / 0 / 0 / 0 / 160 / 63 / 0 / 60 / 0 | B: numbers found after the name (line 290); check the size |
| Hi-C' Poppin' Pink Lemonade | Medium (32 fl oz) | only in draft B | not found | 380 / 0 / 0 / 0 / 0 / 260 / 100 / 0 / 96 / 0 | B: numbers found after the name (line 291); check the size |
| Hi-C' Poppin' Pink Lemonade | Large (44 fl oz) | only in draft B | not found | 520 / 0 / 0 / 0 / 0 / 350 / 138 / 0 / 132 / 0 | B: numbers found after the name (line 292); check the size |
| Fanta. Orange | Kid's (16 fl oz) | only in draft B | not found | 200 / 0 / 0 / 0 / 0 / 55 / 54 / 0 / 53 / 0 | B: numbers found after the name (line 293); check the size |
| Fanta. Orange | Small (20 fl oz) | only in draft B | not found | 250 / 0 / 0 / 0 / 0 / 65 / 67 / 0 / 66 / 0 | B: numbers found after the name (line 294); check the size |
| Fanta. Orange | Medium (32 fl oz) | only in draft B | not found | 390 / 0 / 0 / 0 / 0 / 105 / 108 / 0 / 106 / 0 | B: numbers found after the name (line 295); check the size |
| Fanta. Orange | Large (44 fl oz) | only in draft B | not found | 540 / 0 / 0 / 0 / 0 / 150 / 148 / 0 / 146 / 0 | B: numbers found after the name (line 296); check the size |
| Fanta. Strawberry | Kid's (16 fl oz) | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 55 / 59 / 0 / 59 / 0 | B: numbers found after the name (line 297); check the size |
| Fanta. Strawberry | Small (20 fl oz) | only in draft B | not found | 270 / 0 / 0 / 0 / 0 / 70 / 74 / 0 / 73 / 0 | B: numbers found after the name (line 298); check the size |
| Fanta. Strawberry | Medium (32 fl oz) | only in draft B | not found | 430 / 0 / 0 / 0 / 0 / 110 / 118 / 0 / 117 / 0 | B: numbers found after the name (line 299); check the size |
| Fanta. Strawberry | Large (44 fl oz) | only in draft B | not found | 600 / 0 / 0 / 0 / 0 / 150 / 162 / 0 / 161 / 0 | B: numbers found after the name (line 300); check the size |
| Mello Yello. | Kid's (16 fl oz) | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 65 / 58 / 0 / 58 / 0 | B: numbers found after the name (line 301); check the size |
| Mello Yello. | Small (20 fl oz) | only in draft B | not found | 270 / 0 / 0 / 0 / 0 / 85 / 73 / 0 / 73 / 0 | B: numbers found after the name (line 302); check the size |
| Mello Yello. | Medium (32 fl oz) | only in draft B | not found | 440 / 0 / 0 / 0 / 0 / 135 / 116 / 0 / 116 / 0 | B: numbers found after the name (line 303); check the size |
| Mello Yello. | Large (44 fl oz) | only in draft B | not found | 600 / 0 / 0 / 0 / 0 / 190 / 160 / 0 / 160 / 0 | B: numbers found after the name (line 304); check the size |
| Fuze' Raspberry Tea | Kid's (16 fl oz) | only in draft B | not found | 110 / 0 / 0 / 0 / 0 / 65 / 31 / 0 / 30 / 0 | B: numbers found after the name (line 305); check the size |
| Fuze' Raspberry Tea | Small (20 fl oz) | only in draft B | not found | 140 / 0 / 0 / 0 / 0 / 85 / 38 / 0 / 37 / 0 | B: numbers found after the name (line 306); check the size |
| Fuze' Raspberry Tea | Medium (32 fl oz) | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 135 / 61 / 0 / 59 / 0 | B: numbers found after the name (line 307); check the size |
| Fuze' Raspberry Tea | Large (44 fl oz) | only in draft B | not found | 310 / 0 / 0 / 0 / 0 / 180 / 84 / 0 / 81 / 0 | B: numbers found after the name (line 308); check the size |
| Pibb. Xtra | Kid's (16 fl oz) | only in draft B | not found | 190 / 0 / 0 / 0 / 0 / 70 / 50 / 0 / 50 / 0 | B: numbers found after the name (line 309); check the size |
| Pibb. Xtra | Small (20 fl oz) | only in draft B | not found | 240 / 0 / 0 / 0 / 0 / 90 / 63 / 0 / 63 / 0 | B: numbers found after the name (line 310); check the size |
| Pibb. Xtra | Medium (32 fl oz) | only in draft B | not found | 380 / 0 / 0 / 0 / 0 / 140 / 101 / 0 / 101 / 0 | B: numbers found after the name (line 311); check the size |
| Pibb. Xtra | Large (44 fl oz) | only in draft B | not found | 530 / 0 / 0 / 0 / 0 / 200 / 139 / 0 / 139 / 0 | B: numbers found after the name (line 312); check the size |

## Spot check (7 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Large American Cheese | per slice | 90 / 7 / 4 / 0 / 20 / 430 / 0 / 0 / 0 / 5 |
| Jr. Sweet & Spicy Bacon Burger* | 1 serving | 600 / 33 / 13 / 1 / 75 / 1350 / 42 / 1 / 11 / 32 |
| Grilled Peppers and Onions | 1 serving | 25 / 1.5 / 0 / 0 / 0 / 130 / 3 / 1 / 1 / 0 |
| Fat-Free Ranch Dressing | 1 serving | 50 / 0 / 0 / 0 / 0 / 770 / 13 / 1 / 5 / 1 |
| Cobb Salad with Whatachick'n' | 1 serving | 540 / 31 / 17 / 0 / 305 / 1090 / 20 / 2 / 3 / 45 |
| #7 Whataburger Jr. | 1 serving | 310 / 11 / 3 / 0 / 20 / 750 / 37 / 2 / 6 / 14 |
| Apple & Cranberry Salad with Grilled Chicken | 1 serving | 380 / 12 / 7 / 0 / 110 / 780 / 38 / 6 / 27 / 33 |
