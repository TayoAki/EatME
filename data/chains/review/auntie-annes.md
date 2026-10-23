# Auntie Anne's: lines for a person

Guide: https://assets.ctfassets.net/zqt8tllj2cy0/10Ezjc1ozMDByK7cBBikSn/4ca91079eaac12bb63fcec420cd0ca46/AA_2103518_NutritionAllergenGuide_W2andW3_2026_HIGHRES-1.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (3)

Fix each line in `menus/auntie-annes.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B |
| --- | --- | --- | --- | --- |
| Frozen Lemonade Mixer, Mango | Small (16 fl oz) | differ: sugars_g | 280 / 0 / 0 / 0 / 0 / 15 / 71 / 0 / 67 / 0 | 280 / 0 / 0 / 0 / 0 / 15 / 71 / 0 / 66 / 0 |
| Frozen Lemonade Mixer, Mango | Med (20 fl oz) | differ: sugars_g | 360 / 0 / 0 / 0 / 0 / 20 / 92 / 0 / 86 / 0 | 360 / 0 / 0 / 0 / 0 / 20 / 92 / 0 / 85 / 0 |
| Frozen Lemonade Mixer, Mango | Large (30 fl oz) | differ: sugars_g | 520 / 0 / 0 / 0 / 0 / 30 / 134 / 0 / 125 / 0 | 520 / 0 / 0 / 0 / 0 / 30 / 134 / 0 / 124 / 0 |

## Spot check (7 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Cherry Coke | Small (16 oz) | 160 / 0 / 0 / 0 / 0 / 45 / 44 / 0 / 44 / 0 |
| Dr. Pepper | Medium (21 oz) | 190 / 0 / 0 / 0 / 0 / 55 / 49 / 0 / 49 / 0 |
| Coca-Cola | Medium (21 oz) | 210 / 0 / 0 / 0 / 0 / 55 / 56 / 0 / 56 / 0 |
| (Sprite) Twisted Lemonade Sip Mixer, Strawberry | Med (20 fl oz) | 310 / 6 / 6 / 0 / 0 / 60 / 67 / 0 / 66 / 0 |
| Root Beer | Large (30 oz) | 300 / 0 / 0 / 0 / 0 / 140 / 81 / 0 / 80 / 0 |
| Sprite | Large (30 oz) | 270 / 0 / 0 / 0 / 0 / 135 / 73 / 0 / 73 / 0 |
| Egg & Cheese Sandwich | 1 each | 330 / 11 / 4.5 / 0 / 130 / 770 / 45 / 1 / 7 / 12 |
