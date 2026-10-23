# Auntie Anne's: lines for a person

Guide: https://assets.ctfassets.net/zqt8tllj2cy0/10Ezjc1ozMDByK7cBBikSn/4ca91079eaac12bb63fcec420cd0ca46/AA_2103518_NutritionAllergenGuide_W2andW3_2026_HIGHRES-1.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (27)

Fix each line in `menus/auntie-annes.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B |
| --- | --- | --- | --- | --- |
| Crispy Cheesy Mini Dogs | small, Approx 8 | only in draft A | 690 / 39 / 17 / 0 / 110 / 1900 / 59 / 2 / 8 / 27 | not found |
| Crispy Cheesy Mini Dogs | bucket, 5 servings (8 each) | only in draft A | 690 / 39 / 17 / 0 / 110 / 1900 / 59 / 2 / 8 / 27 | not found |
| Mozzarella Stuffed Nuggets | small, Approx 10 | only in draft A | 540 / 17 / 9 / 0 / 40 / 780 / 75 / 2 / 10 / 21 | not found |
| Mozzarella Stuffed Nuggets | bucket, 4 servings (10 each) | only in draft A | 540 / 17 / 9 / 0 / 40 / 780 / 75 / 2 / 10 / 21 | not found |
| Original Nuggets | Small - 16 oz cup, Approx 19 | only in draft A | 430 / 9 / 5 / 0 / 20 / 1040 / 78 / 2 / 11 / 10 | not found |
| Original Nuggets | Bucket, 5 servings (19 each) | only in draft A | 430 / 9 / 5 / 0 / 20 / 1040 / 78 / 2 / 11 / 10 | not found |
| Cinnamon Sugar Nuggets | Small - 16 oz cup, Approx 19 | only in draft A | 500 / 9 / 5 / 0 / 20 / 340 / 96 / 2 / 29 / 10 | not found |
| Cinnamon Sugar Nuggets | Bucket, 5 servings (19 each) | only in draft A | 500 / 9 / 5 / 0 / 20 / 340 / 96 / 2 / 29 / 10 | not found |
| Pepperoni Nuggets | Small - 16 oz cup, Approx 14 | only in draft A | 480 / 20 / 10 / 0.5 / 50 / 940 / 58 / 2 / 8 / 16 | not found |
| Pepperoni Nuggets | Bucket, 5 servings (14 each) | only in draft A | 480 / 20 / 10 / 0.5 / 50 / 940 / 58 / 2 / 8 / 16 | not found |
| Mini Pretzel Dogs | Small - 16 oz cup, Approx 10 | only in draft A | 700 / 37 / 15 / 0 / 80 / 1590 / 73 / 2 / 10 / 21 | not found |
| Mini Pretzel Dogs | Bucket, 5 servings (10 each) | only in draft A | 700 / 37 / 15 / 0 / 80 / 1590 / 73 / 2 / 10 / 21 | not found |
| Frozen Lemonade Mixer, Mango | Small (16 fl oz) | differ: sugars_g | 280 / 0 / 0 / 0 / 0 / 15 / 71 / 0 / 67 / 0 | 280 / 0 / 0 / 0 / 0 / 15 / 71 / 0 / 66 / 0 |
| Frozen Lemonade Mixer, Mango | Med (20 fl oz) | differ: sugars_g | 360 / 0 / 0 / 0 / 0 / 20 / 92 / 0 / 86 / 0 | 360 / 0 / 0 / 0 / 0 / 20 / 92 / 0 / 85 / 0 |
| Frozen Lemonade Mixer, Mango | Large (30 fl oz) | differ: sugars_g | 520 / 0 / 0 / 0 / 0 / 30 / 134 / 0 / 125 / 0 | 520 / 0 / 0 / 0 / 0 / 30 / 134 / 0 / 124 / 0 |
| Crispy Cheesy Mini Dogs | small (Approx 8) | only in draft B | not found | 690 / 39 / 17 / 0 / 110 / 1900 / 59 / 2 / 8 / 27 |
| Crispy Cheesy Mini Dogs | bucket (5 servings (8 each)) | only in draft B | not found | 690 / 39 / 17 / 0 / 110 / 1900 / 59 / 2 / 8 / 27 |
| Mozzarella Stuffed Nuggets | small (Approx 10) | only in draft B | not found | 540 / 17 / 9 / 0 / 40 / 780 / 75 / 2 / 10 / 21 |
| Mozzarella Stuffed Nuggets | bucket (4 servings (10 each)) | only in draft B | not found | 540 / 17 / 9 / 0 / 40 / 780 / 75 / 2 / 10 / 21 |
| Original Nuggets | Small - 16 oz cup (Approx 19) | only in draft B | not found | 430 / 9 / 5 / 0 / 20 / 1040 / 78 / 2 / 11 / 10 |
| Original Nuggets | Bucket (5 servings (19 each)) | only in draft B | not found | 430 / 9 / 5 / 0 / 20 / 1040 / 78 / 2 / 11 / 10 |
| Cinnamon Sugar Nuggets | Small - 16 oz cup (Approx 19) | only in draft B | not found | 500 / 9 / 5 / 0 / 20 / 340 / 96 / 2 / 29 / 10 |
| Cinnamon Sugar Nuggets | Bucket (5 servings (19 each)) | only in draft B | not found | 500 / 9 / 5 / 0 / 20 / 340 / 96 / 2 / 29 / 10 |
| Pepperoni Nuggets | Small - 16 oz cup (Approx 14) | only in draft B | not found | 480 / 20 / 10 / 0.5 / 50 / 940 / 58 / 2 / 8 / 16 |
| Pepperoni Nuggets | Bucket (5 servings (14 each)) | only in draft B | not found | 480 / 20 / 10 / 0.5 / 50 / 940 / 58 / 2 / 8 / 16 |
| Mini Pretzel Dogs | Small - 16 oz cup (Approx 10) | only in draft B | not found | 700 / 37 / 15 / 0 / 80 / 1590 / 73 / 2 / 10 / 21 |
| Mini Pretzel Dogs | Bucket (5 servings (10 each)) | only in draft B | not found | 700 / 37 / 15 / 0 / 80 / 1590 / 73 / 2 / 10 / 21 |

## Spot check (6 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Cherry Coke | Small (16 oz) | 160 / 0 / 0 / 0 / 0 / 45 / 44 / 0 / 44 / 0 |
| Dr. Pepper | Medium (21 oz) | 190 / 0 / 0 / 0 / 0 / 55 / 49 / 0 / 49 / 0 |
| Coca-Cola | Medium (21 oz) | 210 / 0 / 0 / 0 / 0 / 55 / 56 / 0 / 56 / 0 |
| (Sprite) Twisted Lemonade Sip Mixer, Strawberry | Med (20 fl oz) | 310 / 6 / 6 / 0 / 0 / 60 / 67 / 0 / 66 / 0 |
| Root Beer | Large (30 oz) | 300 / 0 / 0 / 0 / 0 / 140 / 81 / 0 / 80 / 0 |
| Sprite | Large (30 oz) | 270 / 0 / 0 / 0 / 0 / 135 / 73 / 0 / 73 / 0 |
