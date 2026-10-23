# Whataburger: lines for a person

Guide: https://wbimageserver.whataburger.com/Nutrition.pdf (read 2026-10-22). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (103)

Fix each line in `menus/whataburger.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B |
| --- | --- | --- | --- | --- |
| Jalapeños | whole or sliced - about 5-8 slices | the guide gives no sodium_mg | 0 / 0 / 0 / 0 / 0 / – / 1 / 0 / 0 / 0 | 0 / 0 / 0 / 0 / 0 / – / 1 / 0 / 0 / 0 |
| Hot Apple Pie | 1 serving | only in draft B | not found | 270 / 14 / 5 / 0 / 0 / 260 / 34 / 2 / 7 / 3 |
| Hot Lemon Pie | 1 serving | only in draft B | not found | 320 / 16 / 5 / 0 / 0 / 230 / 41 / 3 / 12 / 4 |
| Fruit Chews | 1 serving | only in draft B | not found | 80 / 0 / 0 / 0 / 0 / 20 / 19 / 0 / 11 / 1 |
| Chocolate Chunk Cookie | 1 serving | only in draft B | not found | 230 / 11 / 6 / 0 / 15 / 190 / 32 / 1 / 18 / 2 |
| Sugar Cookie | 1 serving | only in draft B | not found | 230 / 10 / 5 / 0 / 15 / 210 / 34 / 0 / 17 / 3 |
| Chocolate Shake | Small (16 fl oz) | only in draft B | not found | 440 / 11 / 6 / 0 / 30 / 390 / 80 / 0 / 78 / 10 |
| Chocolate Shake | Medium (20 fl oz) | only in draft B | not found | 560 / 14 / 8 / 0 / 40 / 490 / 102 / 0 / 100 / 13 |
| Chocolate Shake | Large (32 fl oz) | only in draft B | not found | 890 / 23 / 13 / 0 / 65 / 790 / 159 / 0 / 159 / 20 |
| Chocolate Malt | Small (16 fl oz) | only in draft B | not found | 460 / 11 / 6 / 0 / 30 / 390 / 85 / 1 / 83 / 10 |
| Chocolate Malt | Medium (20 fl oz) | only in draft B | not found | 590 / 13 / 8 / 0 / 35 / 490 / 110 / 2 / 107 / 12 |
| Chocolate Malt | Large (32 fl oz) | only in draft B | not found | 920 / 22 / 12 / 0 / 60 / 780 / 170 / 2 / 166 / 19 |
| Strawberry Shake | Small (16 fl oz) | only in draft B | not found | 450 / 11 / 6 / 0 / 30 / 370 / 80 / 0 / 80 / 9 |
| Strawberry Shake | Medium (20 fl oz) | only in draft B | not found | 560 / 14 / 8 / 0 / 40 / 460 / 103 / 0 / 103 / 12 |
| Strawberry Shake | Large (32 fl oz) | only in draft B | not found | 890 / 22 / 13 / 0 / 65 / 750 / 160 / 0 / 160 / 19 |
| Strawberry Malt | Small (16 fl oz) | only in draft B | not found | 460 / 11 / 6 / 0 / 30 / 370 / 85 / 0 / 85 / 9 |
| Strawberry Malt | Medium (20 fl oz) | only in draft B | not found | 590 / 13 / 7 / 0 / 35 / 460 / 111 / 0 / 110 / 11 |
| Strawberry Malt | Large (32 fl oz) | only in draft B | not found | 920 / 21 / 12 / 0 / 60 / 740 / 171 / 0 / 170 / 18 |
| Vanilla Shake | Small (16 fl oz) | only in draft B | not found | 410 / 12 / 7 / 0 / 35 / 390 / 69 / 0 / 69 / 10 |
| Vanilla Shake | Medium (20 fl oz) | only in draft B | not found | 510 / 15 / 9 / 0 / 45 / 490 / 86 / 0 / 86 / 13 |
| Vanilla Shake | Large (32 fl oz) | only in draft B | not found | 820 / 24 / 14 / 0 / 70 / 790 / 137 / 0 / 137 / 21 |
| Vanilla Malt | Small (16 fl oz) | only in draft B | not found | 430 / 12 / 7 / 0 / 35 / 390 / 74 / 0 / 74 / 10 |
| Vanilla Malt | Medium (20 fl oz) | only in draft B | not found | 540 / 14 / 8 / 0 / 40 / 490 / 94 / 0 / 93 / 12 |
| Vanilla Malt | Large (32 fl oz) | only in draft B | not found | 860 / 23 / 13 / 0 / 65 / 780 / 148 / 0 / 147 / 20 |
| Dr Pepper. Shake† | Small (16 fl oz) | only in draft B | not found | 430 / 11 / 6 / 0 / 30 / 370 / 78 / 0 / 78 / 9 |
| Dr Pepper. Shake† | Medium (20 fl oz) | only in draft B | not found | 550 / 14 / 8 / 0 / 40 / 460 / 100 / 0 / 99 / 12 |
| Dr Pepper. Shake† | Large (32 fl oz) | only in draft B | not found | 870 / 22 / 13 / 0 / 65 / 740 / 157 / 1 / 155 / 19 |
| Coca-Cola. Classic | Kid's (16 fl oz) | only in draft B | not found | 200 / 0 / 0 / 0 / 0 / 55 / 54 / 0 / 54 / 0 |
| Coca-Cola. Classic | Small (20 fl oz) | only in draft B | not found | 250 / 0 / 0 / 0 / 0 / 65 / 67 / 0 / 67 / 0 |
| Coca-Cola. Classic | Medium (32 fl oz) | only in draft B | not found | 390 / 0 / 0 / 0 / 0 / 105 / 107 / 0 / 107 / 0 |
| Coca-Cola. Classic | Large (44 fl oz) | only in draft B | not found | 540 / 0 / 0 / 0 / 0 / 150 / 147 / 0 / 147 / 0 |
| Diet Coke. | Kid's (16 fl oz) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 65 / 0 / 0 / 0 / 0 |
| Diet Coke. | Small (20 fl oz) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 80 / 0.5 / 0 / 0 / 0 |
| Diet Coke. | Medium (32 fl oz) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 130 / 0.5 / 0 / 0 / 0 |
| Diet Coke. | Large (44 fl oz) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 180 / 1 / 0 / 0 / 0 |
| Coke Zero | Kid's (16 fl oz) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 55 / 0 / 0 / 0 / 0 |
| Coke Zero | Small (20 fl oz) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 65 / 0 / 0 / 0 / 0 |
| Coke Zero | Medium (32 fl oz) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 105 / 0 / 0 / 0 / 0 |
| Coke Zero | Large (44 fl oz) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 150 / 0.5 / 0 / 0 / 0 |
| Caffeine Free Diet Coke. | Kid's (16 fl oz) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 65 / 0 / 0 / 0 / 0 |
| Caffeine Free Diet Coke. | Small (20 fl oz) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 80 / 0 / 0 / 0 / 0 |
| Caffeine Free Diet Coke. | Medium (32 fl oz) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 130 / 0.5 / 0 / 0 / 0 |
| Caffeine Free Diet Coke. | Large (44 fl oz) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 180 / 0.5 / 0 / 0 / 0 |
| Cherry Coke. | Kid's (16 fl oz) | only in draft B | not found | 210 / 0 / 0 / 0 / 0 / 55 / 56 / 0 / 56 / 0 |
| Cherry Coke. | Small (20 fl oz) | only in draft B | not found | 260 / 0 / 0 / 0 / 0 / 70 / 70 / 0 / 70 / 0 |
| Cherry Coke. | Medium (32 fl oz) | only in draft B | not found | 410 / 0 / 0 / 0 / 0 / 110 / 112 / 0 / 112 / 0 |
| Cherry Coke. | Large (44 fl oz) | only in draft B | not found | 560 / 0 / 0 / 0 / 0 / 150 / 154 / 0 / 154 / 0 |
| Sprite. | Kid's (16 fl oz) | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 95 / 50 / 0 / 50 / 0 |
| Sprite. | Small (20 fl oz) | only in draft B | not found | 230 / 0 / 0 / 0 / 0 / 120 / 62 / 0 / 62 / 0 |
| Sprite. | Medium (32 fl oz) | only in draft B | not found | 370 / 0 / 0 / 0 / 0 / 190 / 99 / 0 / 99 / 0 |
| Sprite. | Large (44 fl oz) | only in draft B | not found | 510 / 0 / 0 / 0 / 0 / 260 / 137 / 0 / 137 / 0 |
| Dr Pepper. | Kid's (16 fl oz) | only in draft B | not found | 190 / 0 / 0 / 0 / 0 / 20 / 52 / 0 / 51 / 0 |
| Dr Pepper. | Small (20 fl oz) | only in draft B | not found | 240 / 0 / 0 / 0 / 0 / 25 / 65 / 0 / 64 / 0 |
| Dr Pepper. | Medium (32 fl oz) | only in draft B | not found | 380 / 0 / 0 / 0 / 0 / 40 / 104 / 0 / 102 / 0 |
| Dr Pepper. | Large (44 fl oz) | only in draft B | not found | 530 / 0 / 0 / 0 / 0 / 60 / 143 / 0 / 140 / 0 |
| Diet Dr Pepper. | Kid's (16 fl oz) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 55 / 0 / 0 / 0 / 0 |
| Diet Dr Pepper. | Small (20 fl oz) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 65 / 0 / 0 / 0 / 0 |
| Diet Dr Pepper. | Medium (32 fl oz) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 110 / 1 / 0 / 0 / 0 |
| Diet Dr Pepper. | Large (44 fl oz) | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 150 / 1 / 0 / 0 / 0 |
| Barq's. Root Beer | Kid's (16 fl oz) | only in draft B | not found | 210 / 0 / 0 / 0 / 0 / 70 / 58 / 0 / 58 / 0 |
| Barq's. Root Beer | Small (20 fl oz) | only in draft B | not found | 270 / 0 / 0 / 0 / 0 / 90 / 73 / 0 / 73 / 0 |
| Barq's. Root Beer | Medium (32 fl oz) | only in draft B | not found | 430 / 0 / 0 / 0 / 0 / 140 / 116 / 0 / 116 / 0 |
| Barq's. Root Beer | Large (44 fl oz) | only in draft B | not found | 590 / 0 / 0 / 0 / 0 / 190 / 160 / 0 / 160 / 0 |
| Minute Maid. Light Lemonade | Kid's (16 fl oz) | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 55 / 3 / 0 / 0 / 0 |
| Minute Maid. Light Lemonade | Small (20 fl oz) | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 70 / 3 / 0 / 0 / 0 |
| Minute Maid. Light Lemonade | Medium (32 fl oz) | only in draft B | not found | 15 / 0 / 0 / 0 / 0 / 115 / 5 / 0 / 0 / 0 |
| Minute Maid. Light Lemonade | Large (44 fl oz) | only in draft B | not found | 25 / 0 / 0 / 0 / 0 / 160 / 7 / 0 / 0 / 0 |
| POWERADE. Mountain Blast | Kid's (16 fl oz) | only in draft B | not found | 110 / 0 / 0 / 0 / 0 / 150 / 29 / 0 / 29 / 0 |
| POWERADE. Mountain Blast | Small (20 fl oz) | only in draft B | not found | 140 / 0 / 0 / 0 / 0 / 190 / 37 / 0 / 36 / 0 |
| POWERADE. Mountain Blast | Medium (32 fl oz) | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 300 / 58 / 0 / 58 / 0 |
| POWERADE. Mountain Blast | Large (44 fl oz) | only in draft B | not found | 310 / 0 / 0 / 0 / 0 / 410 / 80 / 0 / 80 / 0 |
| POWERADE. Fruit Punch | Kid's (16 fl oz) | only in draft B | not found | 110 / 0 / 0 / 0 / 0 / 150 / 30 / 0 / 28 / 0 |
| POWERADE. Fruit Punch | Small (20 fl oz) | only in draft B | not found | 130 / 0 / 0 / 0 / 0 / 190 / 37 / 0 / 36 / 0 |
| POWERADE. Fruit Punch | Medium (32 fl oz) | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 310 / 59 / 0 / 57 / 0 |
| POWERADE. Fruit Punch | Large (44 fl oz) | only in draft B | not found | 300 / 0 / 0 / 0 / 0 / 420 / 82 / 0 / 78 / 0 |
| Hi-C' Orange Lavaburst | Kid's (16 fl oz) | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 55 / 58 / 0 / 57 / 0 |
| Hi-C' Orange Lavaburst | Small (20 fl oz) | only in draft B | not found | 280 / 0 / 0 / 0 / 0 / 65 / 73 / 0 / 71 / 0 |
| Hi-C' Orange Lavaburst | Medium (32 fl oz) | only in draft B | not found | 440 / 0 / 0 / 0 / 0 / 105 / 116 / 0 / 113 / 0 |
| Hi-C' Orange Lavaburst | Large (44 fl oz) | only in draft B | not found | 610 / 0 / 0 / 0 / 0 / 150 / 160 / 0 / 156 / 0 |
| Hi-C' Poppin' Pink Lemonade | Kid's (16 fl oz) | only in draft B | not found | 190 / 0 / 0 / 0 / 0 / 130 / 50 / 0 / 48 / 0 |
| Hi-C' Poppin' Pink Lemonade | Small (20 fl oz) | only in draft B | not found | 240 / 0 / 0 / 0 / 0 / 160 / 63 / 0 / 60 / 0 |
| Hi-C' Poppin' Pink Lemonade | Medium (32 fl oz) | only in draft B | not found | 380 / 0 / 0 / 0 / 0 / 260 / 100 / 0 / 96 / 0 |
| Hi-C' Poppin' Pink Lemonade | Large (44 fl oz) | only in draft B | not found | 520 / 0 / 0 / 0 / 0 / 350 / 138 / 0 / 132 / 0 |
| Fanta. Orange | Kid's (16 fl oz) | only in draft B | not found | 200 / 0 / 0 / 0 / 0 / 55 / 54 / 0 / 53 / 0 |
| Fanta. Orange | Small (20 fl oz) | only in draft B | not found | 250 / 0 / 0 / 0 / 0 / 65 / 67 / 0 / 66 / 0 |
| Fanta. Orange | Medium (32 fl oz) | only in draft B | not found | 390 / 0 / 0 / 0 / 0 / 105 / 108 / 0 / 106 / 0 |
| Fanta. Orange | Large (44 fl oz) | only in draft B | not found | 540 / 0 / 0 / 0 / 0 / 150 / 148 / 0 / 146 / 0 |
| Fanta. Strawberry | Kid's (16 fl oz) | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 55 / 59 / 0 / 59 / 0 |
| Fanta. Strawberry | Small (20 fl oz) | only in draft B | not found | 270 / 0 / 0 / 0 / 0 / 70 / 74 / 0 / 73 / 0 |
| Fanta. Strawberry | Medium (32 fl oz) | only in draft B | not found | 430 / 0 / 0 / 0 / 0 / 110 / 118 / 0 / 117 / 0 |
| Fanta. Strawberry | Large (44 fl oz) | only in draft B | not found | 600 / 0 / 0 / 0 / 0 / 150 / 162 / 0 / 161 / 0 |
| Mello Yello. | Kid's (16 fl oz) | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 65 / 58 / 0 / 58 / 0 |
| Mello Yello. | Small (20 fl oz) | only in draft B | not found | 270 / 0 / 0 / 0 / 0 / 85 / 73 / 0 / 73 / 0 |
| Mello Yello. | Medium (32 fl oz) | only in draft B | not found | 440 / 0 / 0 / 0 / 0 / 135 / 116 / 0 / 116 / 0 |
| Mello Yello. | Large (44 fl oz) | only in draft B | not found | 600 / 0 / 0 / 0 / 0 / 190 / 160 / 0 / 160 / 0 |
| Fuze' Raspberry Tea | Kid's (16 fl oz) | only in draft B | not found | 110 / 0 / 0 / 0 / 0 / 65 / 31 / 0 / 30 / 0 |
| Fuze' Raspberry Tea | Small (20 fl oz) | only in draft B | not found | 140 / 0 / 0 / 0 / 0 / 85 / 38 / 0 / 37 / 0 |
| Fuze' Raspberry Tea | Medium (32 fl oz) | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 135 / 61 / 0 / 59 / 0 |
| Fuze' Raspberry Tea | Large (44 fl oz) | only in draft B | not found | 310 / 0 / 0 / 0 / 0 / 180 / 84 / 0 / 81 / 0 |
| Pibb. Xtra | Kid's (16 fl oz) | only in draft B | not found | 190 / 0 / 0 / 0 / 0 / 70 / 50 / 0 / 50 / 0 |
| Pibb. Xtra | Small (20 fl oz) | only in draft B | not found | 240 / 0 / 0 / 0 / 0 / 90 / 63 / 0 / 63 / 0 |
| Pibb. Xtra | Medium (32 fl oz) | only in draft B | not found | 380 / 0 / 0 / 0 / 0 / 140 / 101 / 0 / 101 / 0 |
| Pibb. Xtra | Large (44 fl oz) | only in draft B | not found | 530 / 0 / 0 / 0 / 0 / 200 / 139 / 0 / 139 / 0 |

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
