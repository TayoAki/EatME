# Starbucks: lines for a person

Guide: 165 item pages under https://www.starbucks.com/menu/product/, each line's own page in its source_url (read 2026-10-22). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (1)

The last column comes from `npm run chains:evidence`: whether a draft's numbers sit right after the item's name in the guide text the drafts read. It can't read sizes or sections (one draft called a single 78 g cookie a "6 pack"): check those against the guide, then fix the line and set its check to `person`.

Fix each line in `menus/starbucks.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B | In the guide text (no AI) |
| --- | --- | --- | --- | --- | --- |
| Organic Valley Stringles® Mozzarella String Cheese | 1 Piece 28 g | differ: fiber_g | 80 / 6 / 3.5 / 0 / 20 / 200 / 1 / – / 0 / 7 | 80 / 6 / 3.5 / 0 / 20 / 200 / 1 / 0 / 0 / 7 | A: name not in the guide text; B: name not in the guide text |

## Spot check (9 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Mango Dream | Grande 16 fl oz | 170 / 2.5 / 2.5 / 0 / 0 / 90 / 35 / 1 / 32 / 0 |
| Iced Cinnamon Dolce Latte | Grande 16 fl oz | 300 / 13 / 8 / 0 / 45 / 115 / 38 / 0 / 35 / 8 |
| Tomato & Mozzarella on Focaccia | 1 Serving 153 g | 360 / 12 / 4.5 / 0 / 20 / 590 / 47 / 1 / 2 / 15 |
| Iced Espresso | Doppio 1.5 fl oz | 10 / 0 / 0 / 0 / 0 / 0 / 2 / 0 / 0 / 1 |
| London Fog Latte | Grande 16 fl oz | 180 / 4 / 2.5 / 0 / 15 / 105 / 29 / 0 / 29 / 7 |
| Iced Pumpkin Cream Shaken Espresso | Grande 16 fl oz | 310 / 14 / 8 / 0 / 40 / 160 / 44 / 1 / 37 / 4 |
| Iced Shaken Espresso | Grande 16 fl oz | 100 / 2 / 1 / 0 / 5 / 50 / 17 / 0 / 14 / 4 |
| Iced Banana Bread Latte | Grande 16 fl oz | 360 / 15 / 9 / 0.5 / 50 / 180 / 49 / 0 / 47 / 9 |
| Vanilla Sweet Cream Nitro Cold Brew | Grande 16 fl oz | 70 / 5 / 3.5 / 0 / 15 / 20 / 4 / 0 / 4 / 1 |
