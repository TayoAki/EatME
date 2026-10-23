# Panera Bread: lines for a person

Guide: https://www.panerabread.com/content/dam/panerabread/documents/c8-26-nutrition-guide.pdf (read 2026-10-22). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (278)

Fix each line in `menus/panera-bread.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B |
| --- | --- | --- | --- | --- |
| Bottled Passionfruit Papaya Naturally Flavored Iced Green Tea | 1 Bottle (500 mL) | the guide gives no fiber_g | 130 / 0 / 0 / 0 / 0 / 0 / 31 / – / 28 / 0 | 130 / 0 / 0 / 0 / 0 / 0 / 31 / – / 28 / 0 |
| Bottled Water | 16.9 fl oz (500mL) | differ: sodium_mg, carbs_g | 0 / 0 / 0 / 0 / 0 / 10 / 0 / 0 / 0 / 0 | 0 / 0 / 0 / 0 / 0 / 0 / 10 / 0 / 0 / 0 |
| Cafe Blend Dark Roast Coffee - 16 fl oz | 16 fl oz (473 mL) | only in draft A | 5 / 0 / 0 / 0 / 0 / 10 / 0 / 0 / 0 / 1 | not found |
| Cafe Blend Dark Roast Coffee - 20 fl oz | 20 fl oz (591 mL) | only in draft A | 5 / 0 / 0 / 0 / 0 / 10 / 0 / 0 / 0 / 1 | not found |
| Cafe Blend Light Roast Coffee - 16 fl oz | 16 fl oz (473 mL) | only in draft A | 5 / 0 / 0 / 0 / 0 / 10 / 0 / 0 / 0 / 1 | not found |
| Cafe Blend Light Roast Coffee - 20 fl oz | 20 fl oz (591 mL) | only in draft A | 5 / 0 / 0 / 0 / 0 / 10 / 0 / 0 / 0 / 1 | not found |
| Caffeine Free Diet Pepsi - 20 fl oz | 20 fl oz (591 mL) | only in draft A | 0 / 0 / 0 / 0 / 0 / 100 / 0 / 0 / 0 / 0 | not found |
| Caffeine Free Diet Pepsi - 30 fl oz | 30 fl oz (887 mL) | only in draft A | 0 / 0 / 0 / 0 / 0 / 140 / 0 / 0 / 0 / 0 | not found |
| Drive Thru - Agave Lemonade - 20 fl oz with Ice | 20 fl oz (591 mL) | only in draft A | 130 / 0 / 0 / 0 / 0 / 10 / 32 / 0 / 29 / 0 | not found |
| Drive Thru - Agave Lemonade - 30 fl oz with Ice | 30 fl oz (887 mL) | only in draft A | 190 / 0 / 0 / 0 / 0 / 15 / 48 / 0 / 44 / 0 | not found |
| Drive Thru - Caffeine Free Diet Pepsi - 20 fl oz with Ice | 20 fl oz (591 mL) | only in draft A | 0 / 0 / 0 / 0 / 0 / 65 / 0 / 0 / 0 / 0 | not found |
| Drive Thru - Caffeine Free Diet Pepsi - 30 fl oz with Ice | 30 fl oz (887 mL) | only in draft A | 0 / 0 / 0 / 0 / 0 / 90 / 0 / 0 / 0 / 0 | not found |
| Drive Thru - Canada Dry Ginger Ale - 20 fl oz with Ice | 20 fl oz (591 mL) | only in draft A | 140 / 0 / 0 / 0 / 0 / 50 / 38 / 0 / 37 / 0 | not found |
| Drive Thru - Canada Dry Ginger Ale - 30 fl oz with Ice | 30 fl oz (887 mL) | only in draft A | 210 / 0 / 0 / 0 / 0 / 80 / 57 / 0 / 56 / 0 | not found |
| Drive Thru - Coke - 20 fl oz with Ice | 20 fl oz (591 mL) | only in draft A | 150 / 0 / 0 / 0 / 0 / 40 / 42 / 0 / 42 / 0 | not found |
| Drive Thru - Coke - 30 fl oz with Ice | 30 fl oz (887 mL) | only in draft A | 230 / 0 / 0 / 0 / 0 / 60 / 63 / 0 / 63 / 0 | not found |
| Drive Thru - Coke Zero - 20 fl oz with Ice | 20 fl oz (591 mL) | only in draft A | 0 / 0 / 0 / 0 / 0 / 40 / 0 / 0 / 0 / 0 | not found |
| Drive Thru - Coke Zero - 30 fl oz with Ice | 30 fl oz (887 mL) | only in draft A | 0 / 0 / 0 / 0 / 0 / 65 / 0 / 0 / 0 / 0 | not found |
| Drive Thru - Diet Coke - 20 fl oz with Ice | 20 fl oz (591 mL) | only in draft A | 0 / 0 / 0 / 0 / 0 / 50 / 0 / 0 / 0 / 0 | not found |
| Drive Thru - Diet Coke - 30 fl oz with Ice | 30 fl oz (887 mL) | only in draft A | 0 / 0 / 0 / 0 / 0 / 75 / 0 / 0 / 0 / 0 | not found |
| Drive Thru - Diet Dr. Pepper - 20 fl oz with Ice | 20 fl oz (591 mL) | only in draft A | 0 / 0 / 0 / 0 / 0 / 75 / 0 / 0 / 0 / 0 | not found |
| Drive Thru - Diet Dr. Pepper - 30 fl oz with Ice | 30 fl oz (887 mL) | only in draft A | 0 / 0 / 0 / 0 / 0 / 110 / 0 / 0 / 0 / 0 | not found |
| Drive Thru - Diet Mountain Dew - 20 fl oz with Ice | 20 fl oz (591 mL) | only in draft A | 0 / 0 / 0 / 0 / 0 / 60 / 1 / 0 / 0 / 0 | not found |
| Drive Thru - Diet Mountain Dew - 30 fl oz with Ice | 30 fl oz (887 mL) | only in draft A | 5 / 0 / 0 / 0 / 0 / 85 / 1 / 0 / 0 / 0 | not found |
| Drive Thru - Diet Pepsi - 20 fl oz with Ice | 20 fl oz (591 mL) | only in draft A | 0 / 0 / 0 / 0 / 0 / 65 / 0 / 0 / 0 / 0 | not found |
| Drive Thru - Diet Pepsi - 30 fl oz with Ice | 30 fl oz (887 mL) | only in draft A | 0 / 0 / 0 / 0 / 0 / 90 / 0 / 0 / 0 / 0 | not found |
| Drive Thru - Dr. Pepper - 20 fl oz with Ice | 20 fl oz (591 mL) | only in draft A | 150 / 0 / 0 / 0 / 0 / 45 / 41 / 0 / 40 / 0 | not found |
| Drive Thru - Dr. Pepper - 30 fl oz with Ice | 30 fl oz (887 mL) | only in draft A | 220 / 0 / 0 / 0 / 0 / 70 / 61 / 0 / 60 / 0 | not found |
| Drive Thru - Fanta Orange - 20 fl oz with Ice | 20 fl oz (591 mL) | only in draft A | 160 / 0 / 0 / 0 / 0 / 40 / 42 / 0 / 42 / 0 | not found |
| Drive Thru - Fanta Orange - 30 fl oz with Ice | 30 fl oz (887 mL) | only in draft A | 230 / 0 / 0 / 0 / 0 / 65 / 63 / 0 / 63 / 0 | not found |
| Drive Thru - Lipton Brisk Raspberry Tea - 20 fl oz with Ice | 20 fl oz (591 mL) | only in draft A | 70 / 0 / 0 / 0 / 0 / 50 / 19 / 0 / 19 / 0 | not found |
| Drive Thru - Lipton Brisk Raspberry Tea - 30 fl oz with Ice | 30 fl oz (887 mL) | only in draft A | 110 / 0 / 0 / 0 / 0 / 75 / 28 / 0 / 28 / 0 | not found |
| Drive Thru - Mountain Dew - 20 fl oz with Ice | 20 fl oz (591 mL) | only in draft A | 180 / 0 / 0 / 0 / 0 / 55 / 46 / 0 / 46 / 0 | not found |
| Drive Thru - Mountain Dew - 30 fl oz with Ice | 30 fl oz (887 mL) | only in draft A | 260 / 0 / 0 / 0 / 0 / 80 / 69 / 0 / 69 / 0 | not found |
| Drive Thru - Mug Root Beer - 20 fl oz with Ice | 20 fl oz (591 mL) | only in draft A | 150 / 0 / 0 / 0 / 0 / 60 / 40 / 0 / 40 / 0 | not found |
| Drive Thru - Mug Root Beer - 30 fl oz with Ice | 30 fl oz (887 mL) | only in draft A | 230 / 0 / 0 / 0 / 0 / 90 / 60 / 0 / 59 / 0 | not found |
| Drive Thru - Blackberry Hibiscus Iced Tea - Naturally Flavored Herbal Tea - 20 fl oz with Ice | 20 fl oz with ice | only in draft A | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | not found |
| Drive Thru - Blackberry Hibiscus Iced Tea - Naturally Flavored Herbal Tea - 30 fl oz with Ice | 30 fl oz with ice | only in draft A | 0 / 0 / 0 / 0 / 0 / 5 / 0 / 0 / 0 / 0 | not found |
| Drive Thru - Passion Papaya Naturally Flavored Iced Green Tea - 20 fl oz with Ice | 20 fl oz (591 mL) | only in draft A | 80 / 0 / 0 / 0 / 0 / 20 / 21 / 0 / 21 / 0 | not found |
| Drive Thru - Passion Papaya Naturally Flavored Iced Green Tea - 30 fl oz with Ice | 30 fl oz (887 mL) | only in draft A | 120 / 0 / 0 / 0 / 0 / 30 / 29 / 0 / 29 / 0 | not found |
| Drive Thru - Pepsi - 20 fl oz with Ice | 20 fl oz (591 mL) | only in draft A | 160 / 0 / 0 / 0 / 0 / 35 / 43 / 0 / 43 / 0 | not found |
| Drive Thru - Pepsi - 30 fl oz with Ice | 30 fl oz (887 mL) | only in draft A | 240 / 0 / 0 / 0 / 0 / 50 / 65 / 0 / 64 / 0 | not found |
| Drive Thru - Pepsi Zero - 20 fl oz with Ice | 20 fl oz (591 mL) | only in draft A | 0 / 0 / 0 / 0 / 0 / 40 / 0 / 0 / 0 / 0 | not found |
| Drive Thru - Pibb Xtra - 20 fl oz with Ice | 20 fl oz (591 mL) | only in draft A | 150 / 0 / 0 / 0 / 0 / 55 / 39 / 0 / 39 / 0 | not found |
| Drive Thru - Pibb Xtra - 30 fl oz with Ice | 30 fl oz (887 mL) | only in draft A | 230 / 0 / 0 / 0 / 0 / 85 / 58 / 0 / 58 / 0 | not found |
| Drive Thru - Powerade Mountain Blast - 20 fl oz with Ice | 20 fl oz (591 mL) | only in draft A | 90 / 0 / 0 / 0 / 0 / 120 / 23 / 0 / 23 / 0 | not found |
| Drive Thru - Powerade Mountain Blast - 30 fl oz with Ice | 30 fl oz (887 mL) | only in draft A | 130 / 0 / 0 / 0 / 0 / 180 / 35 / 0 / 34 / 0 | not found |
| Drive Thru - SoBe Life Water Yumberry Pomegranate - 20 fl oz with Ice | 20 fl oz (591 mL) | only in draft A | 0 / 0 / 0 / 0 / 0 / 50 / 0 / 0 / 0 / 0 | not found |
| Drive Thru - SoBe Life Water Yumberry Pomegranate - 30 fl oz with Ice | 30 fl oz (887 mL) | only in draft A | 0 / 0 / 0 / 0 / 0 / 75 / 0 / 0 / 0 / 0 | not found |
| Drive Thru - Sprite - 20 fl oz with Ice | 20 fl oz (591 mL) | only in draft A | 140 / 0 / 0 / 0 / 0 / 70 / 38 / 0 / 38 / 0 | not found |
| Drive Thru - Sprite - 30 fl oz with Ice | 30 fl oz (887 mL) | only in draft A | 210 / 0 / 0 / 0 / 0 / 105 / 57 / 0 / 57 / 0 | not found |
| Drive Thru - Starry Lemon Lime - 20 fl oz with Ice | 20 fl oz (591 mL) | only in draft A | 160 / 0 / 0 / 0 / 0 / 35 / 43 / 0 / 43 / 0 | not found |
| Drive Thru - Starry Lemon Lime - 30 fl oz with Ice | 30 fl oz (887 mL) | only in draft A | 230 / 0 / 0 / 0 / 0 / 50 / 61 / 0 / 61 / 0 | not found |
| Strawberry Basil Lemonade Fresca - 20 fl oz | 20 fl oz (591 mL) | only in draft A | 150 / 0 / 0 / 0 / 0 / 15 / 36 / 1 / 32 / 1 | not found |
| Strawberry Basil Lemonade Fresca - 30 fl oz | 30 fl oz (887 mL) | only in draft A | 220 / 0 / 0 / 0 / 0 / 20 / 55 / 1 / 49 / 1 | not found |
| Drive Thru - Sweet Iced Tea - 20 fl oz with Ice | 20 fl oz (591 mL) | only in draft A | 130 / 0 / 0 / 0 / 0 / 15 / 34 / 0 / 32 / 0 | not found |
| Drive Thru - Sweet Tea - 30 fl oz with Ice | 30 fl oz (887 mL) | only in draft A | 190 / 0 / 0 / 0 / 0 / 25 / 50 / 0 / 49 / 0 | not found |
| Drive Thru - Tropicana Fruit Punch - 20 fl oz with Ice | 20 fl oz (591 mL) | only in draft A | 190 / 0 / 0 / 0 / 0 / 35 / 49 / 0 / 49 / 0 | not found |
| Drive Thru - Tropicana Fruit Punch - 30 fl oz with Ice | 30 fl oz (887 mL) | only in draft A | 270 / 0 / 0 / 0 / 0 / 50 / 71 / 0 / 70 / 0 | not found |
| Drive Thru - Tropicana Lemonade - 20 fl oz with Ice | 20 fl oz (591 mL) | only in draft A | 160 / 0 / 0 / 0 / 0 / 160 / 42 / 0 / 41 / 0 | not found |
| Drive Thru - Tropicana Lemonade - 30 fl oz with Ice | 30 fl oz (887 mL) | only in draft A | 240 / 0 / 0 / 0 / 0 / 240 / 62 / 0 / 62 / 0 | not found |
| Drive Thru - Tropicana Light Lemonade - 20 fl oz with Ice | 20 fl oz (591 mL) | only in draft A | 5 / 0 / 0 / 0 / 0 / 150 / 0 / 0 / 0 / 0 | not found |
| Drive Thru - Tropicana Light Lemonade - 30 fl oz with Ice | 30 fl oz (887 mL) | only in draft A | 10 / 0 / 0 / 0 / 0 / 220 / 0 / 0 / 0 / 0 | not found |
| Drive Thru - Unsweetened Iced Tea - 20 fl oz with Ice | 20 fl oz (591 mL) | only in draft A | 5 / 0 / 0 / 0 / 0 / 15 / 1 / 0 / 0 / 0 | not found |
| Drive Thru - Unsweetened Iced Tea - 30 fl oz with Ice | 30 fl oz (887 mL) | only in draft A | 5 / 0 / 0 / 0 / 0 / 20 / 2 / 0 / 0 / 0 | not found |
| Drive Thru - Wild Cherry Pepsi 20 fl oz with Ice | 20 fl oz (591 mL) | only in draft A | 160 / 0 / 0 / 0 / 0 / 35 / 44 / 0 / 44 / 0 | not found |
| Drive Thru - Wild Cherry Pepsi 30 fl oz with Ice | 30 fl oz (887 mL) | only in draft A | 240 / 0 / 0 / 0 / 0 / 50 / 66 / 0 / 66 / 0 | not found |
| Drive-Thru - Lime Bubly Sparkling Water - 20 fl oz with Ice | 20 fl oz (591 mL) | only in draft A | 0 / 0 / 0 / 0 / 0 / 70 / 0 / 0 / 0 / 0 | not found |
| Drive-Thru - Lime Bubly Sparkling Water - 30 fl oz with Ice | 30 fl oz (887 mL) | only in draft A | 5 / 0 / 0 / 0 / 0 / 95 / 0 / 0 / 0 / 0 | not found |
| Espresso | 2 fl oz (59 mL) | only in draft A | 5 / 0 / 0 / 0 / 0 / 10 / 1 / 0 / 0 / 0 | not found |
| Fanta Orange - 20 fl oz | 20 fl oz (591 mL) | only in draft A | 250 / 0 / 0 / 0 / 0 / 65 / 66 / 0 / 66 / 0 | not found |
| Fanta Orange - 30 fl oz | 30 fl oz (887 mL) | only in draft A | 370 / 0 / 0 / 0 / 0 / 100 / 99 / 0 / 99 / 0 | not found |
| Frozen Signature Hot Chocolate | 16 fl oz | only in draft A | 530 / 14 / 9 / 0 / 50 / 240 / 93 / 3 / 67 / 9 | not found |
| Gold Peak Unsweetened Iced Tea - 18.5 fl oz | 18.5 fl oz (547 mL) | only in draft A | 0 / 0 / 0 / 0 / 0 / 55 / 0 / 0 / 0 / 0 | not found |
| Hazelnut Flavored Coffee - 16 fl oz | 16 fl oz (473 mL) | only in draft A | 5 / 0 / 0 / 0 / 0 / 10 / 0 / 0 / 0 / 1 | not found |
| Hazelnut Flavored Coffee - 20 fl oz | 20 fl oz (591 mL) | only in draft A | 5 / 0 / 0 / 0 / 0 / 10 / 0 / 0 / 0 / 1 | not found |
| Hazelnut Flavored Mocha Frozen Coffee - Naturally Flavored - 20 fl oz | 20 fl oz (591 mL) | only in draft A | 460 / 14 / 9 / 0 / 50 / 270 / 74 / 0 / 60 / 8 | not found |
| Hazelnut Flavored Mocha Iced Coffee - 20 fl oz | 20 fl oz (591 mL) | only in draft A | 210 / 4 / 2.5 / 0 / 10 / 100 / 42 / 0 / 36 / 1 | not found |
| Hazelnut Flavored Mocha Iced Coffee - 30 fl oz | 30 fl oz (887 mL) | only in draft A | 240 / 4 / 2.5 / 0 / 10 / 125 / 48 / 0 / 41 / 1 | not found |
| Honest Berry Hibiscus Iced Tea - 16.9 fl oz bottle | 16.9 fl oz bottle | only in draft A | 100 / 0 / 0 / 0 / 0 / 5 / 26 / 0 / 25 / 0 | not found |
| Honey Ginseng Green Tea - 16 fl oz | 16 fl oz (473 mL) | only in draft A | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | not found |
| Signature Hot Chocolate - 16 fl oz | 16 fl oz (473 mL) | only in draft A | 340 / 10 / 6 / 0 / 35 / 160 / 53 / 2 / 37 / 10 | not found |
| Signature Hot Chocolate - 20 fl oz | 20 fl oz (591 mL) | only in draft A | 420 / 11 / 7 / 0 / 40 / 200 / 68 / 2 / 48 / 13 | not found |
| Hot Tea - 16 fl oz | 16 fl oz (473 mL) | only in draft A | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | not found |
| Cafe Blend Iced Coffee - 20 fl oz | 20 fl oz (591 mL) | only in draft A | 5 / 0 / 0 / 0 / 0 / 10 / 0 / 0 / 0 / 0 | not found |
| Cafe Blend Iced Coffee - 20 fl oz - no ice | 20 fl oz (591 mL) | only in draft A | 5 / 0 / 0 / 0 / 0 / 10 / 0 / 0 / 0 / 1 | not found |
| Cafe Blend Iced Coffee - 30 fl oz | 30 fl oz (887 mL) | only in draft A | 5 / 0 / 0 / 0 / 0 / 15 / 0 / 0 / 0 / 0 | not found |
| Café Blend Iced Coffee - 30 fl oz - no ice | 30 fl oz (887 mL) | only in draft A | 10 / 0 / 0 / 0 / 0 / 20 / 0 / 0 / 0 / 1 | not found |
| Iced Caffe Latte - 20 fl oz | 20 fl oz (591 mL) | only in draft A | 160 / 6 / 4 / 0 / 25 / 135 / 15 / 0 / 14 / 10 | not found |
| Iced Caramel Latte - 20 fl oz | 20 fl oz (591 mL) | only in draft A | 350 / 10 / 7 / 0 / 40 / 280 / 53 / 0 / 47 / 11 | not found |
| Iced Chai Tea Latte - 20 fl oz | 20 fl oz (591 mL) | only in draft A | 230 / 6 / 4 / 0 / 25 / 135 / 33 / 0 / 32 / 10 | not found |
| Iced Madagascar Vanilla Latte - 20 fl oz | 20 fl oz (591 mL) | only in draft A | 280 / 10 / 7 / 0 / 40 / 150 / 35 / 0 / 34 / 11 | not found |
| Iced Mocha Latte - 20 fl oz | 20 fl oz (591 mL) | only in draft A | 380 / 11 / 7 / 0 / 40 / 190 / 57 / 2 / 40 / 13 | not found |
| Iced Pumpkin Spice Latte - 20 fl oz | 20 fl oz (591 mL) | only in draft A | 370 / 10 / 7 / 0 / 40 / 180 / 58 / 0 / 53 / 12 | not found |
| Island Mango Energy Refresher - Naturally Flavored - 20 fl oz with ice | 20 fl oz (591 mL) | only in draft A | 190 / 0 / 0 / 0 / 0 / 20 / 45 / 1 / 41 / 0 | not found |
| Island Mango Energy Refresher - Naturally Flavored - 30 fl oz with ice | 30 fl oz (887 mL) | only in draft A | 270 / 0 / 0 / 0 / 0 / 30 / 65 / 1 / 60 / 0 | not found |
| Island Mango Energy Refresher - Naturally Flavored - 20 fl oz with ice - With Pineapple | 20 fl oz (591 mL) | only in draft A | 190 / 0 / 0 / 0 / 0 / 20 / 45 / 0 / 42 / 0 | not found |
| Island Mango Energy Refresher - Naturally Flavored - 30 fl oz with ice - With Pineapple | 30 fl oz (887 mL) | only in draft A | 270 / 0 / 0 / 0 / 0 / 30 / 65 / 0 / 61 / 0 | not found |
| Kids Organic Apple juice | 6.75 fl oz (200 mL) | only in draft A | 100 / 0 / 0 / 0 / 0 / 10 / 24 / 0 / 23 / 0 | not found |
| Kids Organic Chocolate Milk | 8 fl oz (237 mL) | only in draft A | 150 / 2.5 / 1.5 / 0 / 15 / 180 / 23 / 0 / 22 / 8 | not found |
| Kids Organic White Milk | 8 fl oz (237 mL) | only in draft A | 110 / 2.5 / 1.5 / 0 / 10 / 130 / 13 / 0 / 12 / 8 | not found |
| Lime Bubly Sparkling Water - 20 fl oz | 20 fl oz (591 mL) | only in draft A | 0 / 0 / 0 / 0 / 0 / 110 / 0 / 0 / 0 / 0 | not found |
| Lime Bubly Sparkling Water - 30 fl oz | 30 fl oz (887 mL) | only in draft A | 5 / 0 / 0 / 0 / 0 / 160 / 0 / 0 / 0 / 0 | not found |
| Lipton Brisk Raspberry Tea - 20 fl oz | 20 fl oz (591 mL) | only in draft A | 120 / 0 / 0 / 0 / 0 / 80 / 30 / 0 / 30 / 0 | not found |
| Lipton Brisk Raspberry Tea - 30 fl oz | 30 fl oz (887 mL) | only in draft A | 170 / 0 / 0 / 0 / 0 / 120 / 45 / 0 / 45 / 0 | not found |
| Madagascar Vanilla Latte - 16 fl oz | 16 fl oz (473 mL) | only in draft A | 250 / 9 / 6 / 0 / 35 / 120 / 32 / 0 / 31 / 9 | not found |
| Madagascar Vanilla Latte - 20 fl oz | 20 fl oz (591 mL) | only in draft A | 300 / 10 / 7 / 0 / 40 / 150 / 41 / 0 / 40 / 11 | not found |
| Mango Smoothie with Greek Yogurt - 16 fl oz | 16 fl oz (473 mL) | only in draft A | 300 / 5 / 3 / 0 / 20 / 75 / 51 / 1 / 42 / 13 | not found |
| Minute Maid Orange Juice - 12 fl oz bottle | 12 fl oz (355 mL) | only in draft A | 220 / 0 / 0 / 0 / 0 / 30 / 51 / 0 / 45 / 0 | not found |
| Mocha Latte - 16 fl oz | 16 fl oz (473 mL) | only in draft A | 340 / 10 / 6 / 0 / 35 / 170 / 54 / 2 / 37 / 10 | not found |
| Mocha Latte - 20 fl oz | 20 fl oz (591 mL) | only in draft A | 430 / 11 / 7 / 0 / 40 / 210 / 69 / 2 / 48 / 13 | not found |
| Mountain Dew - 12 fl oz can | 1 can (355 mL) | only in draft A | 170 / 0 / 0 / 0 / 0 / 60 / 46 / 0 / 46 / 0 | not found |
| Mountain Dew - 20 fl oz | 20 fl oz (591 mL) | only in draft A | 280 / 0 / 0 / 0 / 0 / 85 / 73 / 0 / 73 / 0 | not found |
| Mountain Dew - 20 fl oz bottle | 20 fl oz bottle (591 mL) | only in draft A | 290 / 0 / 0 / 0 / 0 / 105 / 77 / 0 / 77 / 0 | not found |
| Mountain Dew - 30 fl oz | 30 fl oz (887 mL) | only in draft A | 420 / 0 / 0 / 0 / 0 / 130 / 110 / 0 / 110 / 0 | not found |
| Mug Root Beer - 20 fl oz | 20 fl oz (591 mL) | only in draft A | 240 / 0 / 0 / 0 / 0 / 95 / 64 / 0 / 63 / 0 | not found |
| Mug Root Beer - 30 fl oz | 30 fl oz (887 mL) | only in draft A | 360 / 0 / 0 / 0 / 0 / 140 / 96 / 0 / 95 / 0 | not found |
| Blackberry Hibiscus Iced Tea - Naturally Flavored Herbal Tea - 20 fl oz | 20 fl oz | only in draft A | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | not found |
| Blackberry Hibiscus Iced Tea - Naturally Flavored Herbal Tea - 30 fl oz | 30 fl oz | only in draft A | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | not found |
| Orange Ginger Mint Tea - 16 fl oz | 16 fl oz (473 mL) | only in draft A | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | not found |
| Passion Papaya Naturally Flavored Iced Green Tea - 20 fl oz | 20 fl oz (591 mL) | only in draft A | 140 / 0 / 0 / 0 / 0 / 25 / 36 / 0 / 36 / 0 | not found |
| Passion Papaya Naturally Flavored Iced Green Tea - 30 fl oz | 30 fl oz (887 mL) | only in draft A | 220 / 0 / 0 / 0 / 0 / 40 / 54 / 0 / 54 / 0 | not found |
| Passionfruit Paradise Energy Refresher - Naturally Flavored - 20 fl oz with ice | 20 fl oz (591 mL) | only in draft A | 130 / 0 / 0 / 0 / 0 / 10 / 31 / 0 / 30 / 0 | not found |
| Passionfruit Paradise Energy Refresher - Naturally Flavored - 30 fl oz with ice | 30 fl oz (887 mL) | only in draft A | 210 / 0 / 0 / 0 / 0 / 15 / 47 / 0 / 46 / 0 | not found |
| Pepsi - 20 fl oz | 20 fl oz (591 mL) | only in draft A | 250 / 0 / 0 / 0 / 0 / 50 / 69 / 0 / 69 / 0 | not found |
| Pepsi - 20 fl oz bottle | 20 fl oz bottle (591 mL) | only in draft A | 250 / 0 / 0 / 0 / 0 / 55 / 69 / 0 / 69 / 0 | not found |
| Pepsi - 30 fl oz | 30 fl oz (887 mL) | only in draft A | 380 / 0 / 0 / 0 / 0 / 80 / 103 / 0 / 103 / 0 | not found |
| Pepsi 12 fl oz can | 12 fl oz can (355 mL) | only in draft A | 150 / 0 / 0 / 0 / 0 / 30 / 41 / 0 / 41 / 0 | not found |
| Pepsi Zero - 20 fl oz | 20 fl oz (591 mL) | only in draft A | 0 / 0 / 0 / 0 / 0 / 65 / 0 / 0 / 0 / 0 | not found |
| Pepsi Zero - 20 fl oz bottle | 20 fl oz bottle (591 mL) | only in draft A | 0 / 0 / 0 / 0 / 0 / 65 / 0 / 0 / 0 / 0 | not found |
| Pibb Xtra - 20 fl oz | 20 fl oz (591 mL) | only in draft A | 240 / 0 / 0 / 0 / 0 / 90 / 61 / 0 / 61 / 0 | not found |
| Pibb Xtra - 30 fl oz | 30 fl oz (887 mL) | only in draft A | 370 / 0 / 0 / 0 / 0 / 135 / 92 / 0 / 92 / 0 | not found |
| Powerade Mountain Blast - 20 fl oz | 20 fl oz (591 mL) | only in draft A | 140 / 0 / 0 / 0 / 0 / 190 / 37 / 0 / 36 / 0 | not found |
| Powerade Mountain Blast - 30 fl oz | 30 fl oz (887 mL) | only in draft A | 210 / 0 / 0 / 0 / 0 / 280 / 55 / 0 / 55 / 0 | not found |
| Premium OJ 11.5 fl oz | 1 Bottle | only in draft A | 160 / 0 / 0 / 0 / 0 / 5 / 37 / – / 32 / 2 | not found |
| Pumpkin Spice Frozen Java - 20 fl oz | 20 fl oz (591 mL) | only in draft A | 490 / 13 / 9 / 0 / 50 / 230 / 84 / 0 / 72 / 9 | not found |
| Pumpkin Spice Iced Coffee - 20 fl oz | 20 fl oz (591 mL) | only in draft A | 240 / 3 / 2 / 0 / 10 / 55 / 52 / 0 / 49 / 2 | not found |
| Pumpkin Spice Iced Coffee - 30 fl oz | 30 fl oz (887 mL) | only in draft A | 290 / 3 / 2 / 0 / 10 / 75 / 64 / 0 / 59 / 2 | not found |
| Pumpkin Spice Latte - 16 fl oz | 16 fl oz (473 mL) | only in draft A | 340 / 9 / 6 / 0 / 35 / 160 / 55 / 0 / 50 / 10 | not found |
| Pumpkin Spice Latte -20 fl oz | 20 fl oz (591 mL) | only in draft A | 420 / 10 / 7 / 0 / 40 / 190 / 69 / 0 / 63 / 12 | not found |
| Rocky Road Frozen Java -20 fl oz | 20 fl oz (591 mL) | only in draft A | 450 / 14 / 9 / 0 / 50 / 270 / 72 / 0 / 58 / 8 | not found |
| Rocky Road Iced Coffee -20 fl oz | 20 fl oz (591 mL) | only in draft A | 210 / 4 / 2.5 / 0 / 10 / 105 / 41 / 0 / 34 / 1 | not found |
| Rocky Road Iced Coffee -30 fl oz | 30 fl oz (887 mL) | only in draft A | 230 / 4 / 2.5 / 0 / 10 / 125 / 46 / 0 / 39 / 1 | not found |
| Snickerdoodle Frozen Java -20 fl oz | 20 fl oz (591 mL) | only in draft A | 440 / 13 / 9 / 0 / 50 / 280 / 71 / 0 / 56 / 8 | not found |
| Snickerdoodle Iced Coffee -20 fl oz | 20 fl oz (591 mL) | only in draft A | 190 / 3 / 2 / 0 / 10 / 110 / 40 / 0 / 32 / 1 | not found |
| Snickerdoodle Iced Coffee -30 fl oz | 30 fl oz (887 mL) | only in draft A | 220 / 3 / 2 / 0 / 10 / 130 / 45 / 0 / 36 / 1 | not found |
| SoBe Life Water Yumberry Pomegranate -20 fl oz | 20 fl oz (591 mL) | only in draft A | 0 / 0 / 0 / 0 / 0 / 80 / 0 / 0 / 0 / 0 | not found |
| SoBe Life Water Yumberry Pomegranate -30 fl oz | 30 fl oz (887 mL) | only in draft A | 5 / 0 / 0 / 0 / 0 / 120 / 1 / 0 / 0 / 0 | not found |
| Sprite -20 fl oz | 20 fl oz (591 mL) | only in draft A | 230 / 0 / 0 / 0 / 0 / 115 / 61 / 0 / 61 / 0 | not found |
| Sprite -30 fl oz | 30 fl oz (887 mL) | only in draft A | 340 / 0 / 0 / 0 / 0 / 170 / 91 / 0 / 91 / 0 | not found |
| Sprite 20 fl oz Bottle | 20 fl oz bottle (591 mL) | only in draft A | 230 / 0 / 0 / 0 / 0 / 110 / 64 / 0 / 64 / 0 | not found |
| Sprite Zero -20 fl oz bottle | 20 fl oz (591 mL) | only in draft A | 0 / 0 / 0 / 0 / 0 / 60 / 1 / 0 / 0 / 0 | not found |
| Starry Lemon Lime -20 fl oz | 20 fl oz (591 mL) | only in draft A | 250 / 0 / 0 / 0 / 0 / 55 / 68 / 0 / 68 / 0 | not found |
| Starry Lemon Lime -30 fl oz | 30 fl oz (887 mL) | only in draft A | 370 / 0 / 0 / 0 / 0 / 85 / 97 / 0 / 97 / 0 | not found |
| Starry Lemon Lime 12 fl oz Can | 1 Can (355 mL) | only in draft A | 150 / 0 / 0 / 0 / 0 / 35 / 39 / 0 / 39 / 0 | not found |
| Starry Lemon Lime 20 fl oz bottle | 20 fl oz bottle (591 mL) | only in draft A | 250 / 0 / 0 / 0 / 0 / 55 / 68 / 0 / 68 / 0 | not found |
| Strawberry Banana Smoothie with Greek Yogurt -16 fl oz | 16 fl oz (473 mL) | only in draft A | 250 / 2.5 / 1.5 / 0 / 10 / 40 / 51 / 4 / 36 / 7 | not found |
| Strawberry Smoothie with Greek Yogurt -16 fl oz | 16 fl oz (473 mL) | only in draft A | 260 / 4.5 / 2.5 / 0 / 20 / 70 / 43 / 2 / 37 / 12 | not found |
| Sweet Iced Tea - 20 fl oz | 20 fl oz (591 mL) | only in draft A | 170 / 0 / 0 / 0 / 0 / 15 / 45 / 0 / 44 / 0 | not found |
| Sweet Iced Tea - 30 fl oz | 30 fl oz (887 mL) | only in draft A | 260 / 0 / 0 / 0 / 0 / 25 / 68 / 0 / 65 / 0 | not found |
| Tropical Green Smoothie - 16 fl oz | 16 fl oz (473 mL) | only in draft A | 200 / 0 / 0 / 0 / 0 / 60 / 48 / 2 / 41 / 1 | not found |
| Tropicana Fruit Punch - 20 fl oz | 20 fl oz (591 mL) | only in draft A | 290 / 0 / 0 / 0 / 0 / 55 / 78 / 0 / 78 / 0 | not found |
| Tropicana Fruit Punch - 30 fl oz | 30 fl oz (887 mL) | only in draft A | 420 / 0 / 0 / 0 / 0 / 85 / 113 / 0 / 112 / 0 | not found |
| Tropicana Lemonade - 20 fl oz | 20 fl oz (591 mL) | only in draft A | 250 / 0 / 0 / 0 / 0 / 260 / 67 / 0 / 66 / 0 | not found |
| Tropicana Lemonade - 30 fl oz | 30 fl oz (887 mL) | only in draft A | 380 / 0 / 0 / 0 / 0 / 390 / 100 / 0 / 99 / 0 | not found |
| Tropicana Light Lemonade - 20 fl oz | 20 fl oz (591 mL) | only in draft A | 10 / 0 / 0 / 0 / 0 / 230 / 0 / 0 / 0 / 0 | not found |
| Tropicana Light Lemonade - 30 fl oz | 30 fl oz (887 mL) | only in draft A | 15 / 0 / 0 / 0 / 0 / 350 / 0 / 0 / 0 / 0 | not found |
| Unsweetened Iced Tea - 20 fl oz | 20 fl oz (591 mL) | only in draft A | 5 / 0 / 0 / 0 / 0 / 20 / 2 / 0 / 0 / 0 | not found |
| Unsweetened Iced Tea - 30 fl oz | 30 fl oz (887 mL) | only in draft A | 10 / 0 / 0 / 0 / 0 / 25 / 3 / 0 / 0 / 0 | not found |
| Wild Cherry Pepsi 20 fl oz | 20 fl oz (591 mL) | only in draft A | 260 / 0 / 0 / 0 / 0 / 55 / 70 / 0 / 70 / 0 | not found |
| Wild Cherry Pepsi 30 fl oz | 30 fl oz (887 mL) | only in draft A | 390 / 0 / 0 / 0 / 0 / 80 / 106 / 0 / 105 / 0 | not found |
| Grilled Cheese on Classic White Loaf - Whole | 1 Sandwich | only in draft A | 810 / 42 / 26 / 1.5 / 120 / 2540 / 74 / 5 / 16 / 32 | not found |
| Kids Ham & American Cheese on Classic White Loaf - Whole | 1 Sandwich | only in draft A | 640 / 24 / 14 / 0 / 110 / 2490 / 69 / 5 / 14 / 38 | not found |
| Kids Turkey & American Cheese on Classic White Loaf - Whole | 1 Sandwich | only in draft A | 640 / 22 / 13 / 0 / 115 / 2250 / 69 / 5 / 15 / 40 | not found |
| Mac & Cheese- Cup | About 1 Cup | only in draft A | 490 / 32 / 16 / 1 / 85 / 1150 / 34 / 0 / 7 / 16 | not found |
| Broccoli Cheddar - Cup | 1 Cup | only in draft A | 280 / 20 / 13 / 1.5 / 60 / 1010 / 17 / 1 / 6 / 8 | not found |
| Pastry - Asiago Croissant Twists 2 -Pack | 2 Twists | only in draft A | 210 / 13 / 8 / 0.5 / 40 / 250 / 16 / 1 / 3 / 7 | not found |
| Muffin - Blueberry | 1 Muffin | only in draft A | 530 / 22 / 5 / 0 / 55 / 410 / 75 / 2 / 42 / 7 | not found |
| Brownie | 1 Brownie | only in draft A | 520 / 24 / 8 / 0 / 115 / 230 / 70 / 4 / 50 / 7 | not found |
| Cookie - Candy | 1 Cookie | only in draft A | 410 / 19 / 11 / 0 / 55 / 310 / 58 / 1 / 31 / 4 | not found |
| Muffie - Chocolate Chip | 1 Muffie | only in draft A | 340 / 13 / 4.5 / 0 / 35 / 200 / 51 / 3 / 22 / 5 | not found |
| Cookie - Chocolate Chipper | 1 Cookie | only in draft A | 390 / 18 / 11 / 0 / 40 / 330 / 52 / 1 / 31 / 4 | not found |
| Pastry - Chocolate Croissant | 1 Croissant | only in draft A | 410 / 20 / 13 / 0.5 / 40 / 330 / 51 / 2 / 17 / 7 | not found |
| Cookie - Chocolate Coconut Macaroon | 1 macaroon | only in draft A | 190 / 10 / 8 / 0 / 0 / 95 / 23 / 3 / 18 / 3 | not found |
| Cookie - Coconut Macaroon | 1 macaroon | only in draft A | 180 / 9 / 8 / 0 / 0 / 105 / 24 / 2 / 19 / 3 | not found |
| Cookie - Pumpkin Shaped Shortbread | 1 Cookie | only in draft A | 460 / 26 / 15 / 0 / 25 / 270 / 51 / 1 / 14 / 4 | not found |
| Cookie - PB&J | 1 Cookie | only in draft A | 390 / 19 / 8 / 0 / 45 / 290 / 52 / 1 / 29 / 6 | not found |
| Pastry - Caramel Pumpkin Slice - Naturally Flavored | 1 slice | only in draft A | 420 / 9 / 3 / 0 / 65 / 340 / 77 / 1 / 54 / 7 | not found |
| Pastry - Cranberry Orange Loaf Slice - Naturally Flavored | 1 Slice | only in draft A | 370 / 14 / 2.5 / 0 / 35 / 240 / 53 / 1 / 30 / 5 | not found |
| Cookie - Dubai Style Chocolate Pistachio | 1 Cookie | only in draft A | 220 / 13 / 5 / 0 / 30 / 65 / 25 / 2 / 14 / 4 | not found |
| Cinnamon Roll | 1 Roll | only in draft A | 580 / 18 / 10 / 0 / 40 / 420 / 97 / 2 / 62 / 7 | not found |
| Pumpkin Spice Cinnamon Roll | 1 Roll | only in draft A | 650 / 19 / 10 / 0 / 40 / 510 / 115 / 3 / 75 / 8 | not found |
| Cookie - Kitchen Sink | 1 Cookie | only in draft A | 810 / 42 / 26 / 1 / 65 / 840 / 100 / 3 / 56 / 7 | not found |
| Mini Scone - Orange | 1 mini scone | only in draft A | 180 / 7 / 4.5 / 0 / 25 / 280 / 25 / 1 / 13 / 3 | not found |
| Cookie - Oatmeal Raisin with Berries | 1 Cookie | only in draft A | 340 / 12 / 6 / 0 / 40 / 190 / 55 / 3 / 33 / 4 | not found |
| Scone - Orange | 1 Scone | only in draft A | 540 / 21 / 13 / 1 / 80 / 850 / 77 / 2 / 39 / 8 | not found |
| Pastry - Almond | 1 Pastry | only in draft A | 470 / 24 / 11 / 0.5 / 60 / 280 / 54 / 3 / 21 / 10 | not found |
| Pastry - Cherry | 1 Pastry | only in draft A | 330 / 11 / 6 / 0 / 35 / 300 / 53 / 2 / 24 / 6 | not found |
| Pastry - Pecan Braid | 1 Pastry | only in draft A | 450 / 25 / 9 / 0 / 25 / 160 / 51 / 3 / 23 / 7 | not found |
| Pastry - Cinnamon Croissant Bites with Icing - 12 Count | 12 Pieces with Icing | only in draft A | 750 / 29 / 17 / 1 / 85 / 420 / 113 / 2 / 74 / 10 | not found |
| Pastry - Cinnamon Croissant Bites with Icing - 24 Count | 24 Pieces with Icing | only in draft A | 2180 / 60 / 34 / 2 / 170 / 1110 / 392 / 5 / 316 / 22 | not found |
| Pastry - Cinnamon Croissant Bites with Icing - 4 Count | 4 Pieces with Icing | only in draft A | 360 / 10 / 6 / 0 / 30 / 190 / 65 / 1 / 53 / 4 | not found |
| Cookie - Petite Chocolate Chipper | 1 Cookie | only in draft A | 100 / 4.5 / 2.5 / 0 / 10 / 85 / 13 / 0 / 8 / 1 | not found |
| Add on - White Icing Portion Cup | 1 portion cup | only in draft A | 170 / 0 / 0 / 0 / 0 / 65 / 42 / 0 / 42 / 0 | not found |
| Salad Stuffer - Green Goddess Cobb with Chicken | 1 Stuffer | only in draft A | 600 / 26 / 4.5 / 0 / 140 / 1580 / 61 / 5 / 11 / 29 | not found |
| Asian Sesame Chicken - Half | 1/2 Salad | only in draft A | 260 / 15 / 2 / 0 / 35 / 950 / 17 / 3 / 5 / 15 | not found |
| Asian Sesame Chicken- Half (no nuts) | 1/2 Salad | only in draft A | 220 / 12 / 1.5 / 0 / 35 / 950 / 16 / 2 / 4 / 13 | not found |
| Asian Sesame Chicken - Whole | 1 Salad | only in draft A | 530 / 31 / 4 / 0 / 70 / 1900 / 35 / 6 / 9 / 29 | not found |
| Asian Sesame Chicken - Whole (no nuts) | 1 Salad | only in draft A | 440 / 23 / 3.5 / 0 / 70 / 1900 / 32 / 5 / 9 / 26 | not found |
| Caesar Salad - Half | 1/2 Salad | only in draft A | 270 / 22 / 6 / 0 / 30 / 700 / 11 / 2 / 3 / 7 | not found |
| Caesar Salad - Whole | 1 Salad | only in draft A | 530 / 44 / 13 / 0.5 / 55 / 1390 / 22 / 4 / 6 / 14 | not found |
| Caesar with Chicken Salad - Half | 1/2 Salad | only in draft A | 340 / 23 / 7 / 0 / 60 / 1310 / 14 / 2 / 4 / 18 | not found |
| Caesar with Chicken Salad - Whole | 1 Salad | only in draft A | 670 / 47 / 13 / 0.5 / 125 / 2620 / 27 / 4 / 7 / 35 | not found |
| Fuji Apple Chicken Salad - Half | 1/2 Salad | only in draft A | 350 / 22 / 4 / 0 / 40 / 890 / 24 / 3 / 16 / 14 | not found |
| Fuji Apple Chicken Salad without pecans - Half | 1/2 Salad | only in draft A | 300 / 17 / 3.5 / 0 / 40 / 890 / 23 / 2 / 16 / 13 | not found |
| Fuji Apple Chicken Salad - Whole | 1 Salad | only in draft A | 710 / 44 / 8 / 0 / 85 / 1770 / 49 / 5 / 32 / 28 | not found |
| Fuji Apple Chicken Salad without pecans - Whole | 1 Salad | only in draft A | 600 / 34 / 7 / 0 / 85 / 1770 / 47 / 4 / 31 / 26 | not found |
| Greek Salad - Half | 1/2 Salad | only in draft A | 310 / 30 / 6 / 0 / 15 / 700 / 9 / 2 / 4 / 4 | not found |
| Greek Salad - Whole | 1 Salad | only in draft A | 630 / 59 / 12 / 0 / 30 / 1400 / 17 / 5 / 7 / 8 | not found |
| Greek Salad with Chicken - Half | 1/2 Salad | only in draft A | 380 / 31 / 6 / 0 / 50 / 1320 / 11 / 3 / 5 / 15 | not found |
| Greek Salad with Chicken - Whole | 1 Salad | only in draft A | 760 / 62 / 13 / 0 / 100 / 2630 / 22 / 5 / 9 / 30 | not found |
| Green Goddess Cobb Salad with Chicken - Half | 1/2 Salad | only in draft A | 290 / 17 / 3.5 / 0 / 140 / 990 / 15 / 4 / 8 / 20 | not found |
| Green Goddess Cobb Salad with Chicken - Whole | 1 Salad | only in draft A | 580 / 34 / 7 / 0 / 280 / 1980 / 30 / 7 / 15 / 40 | not found |
| Harvest Medley Chicken Salad - Half | 1/2 Salad | only in draft A | 440 / 23 / 4 / 0 / 40 / 1050 / 41 / 3 / 20 / 17 | not found |
| Harvest Medley Chicken Salad - Half - No Pecans | 1/2 Salad | only in draft A | 390 / 18 / 3.5 / 0 / 40 / 1050 / 40 / 3 / 19 / 16 | not found |
| Harvest Medley Chicken Salad - Whole | 1 Salad | only in draft A | 880 / 47 / 8 / 0 / 85 / 2100 / 83 / 7 / 40 / 34 | not found |
| Harvest Medley Chicken Salad - Whole - No Pecans | 1 Salad | only in draft A | 780 / 36 / 7 / 0 / 85 / 2100 / 81 / 6 / 39 / 32 | not found |
| Harvest Medley Salad - Half | 1/2 Salad | only in draft A | 370 / 22 / 4 / 0 / 10 / 440 / 39 / 3 / 19 / 6 | not found |
| Harvest Medley Salad - Half - No Pecans | 1/2 Salad | only in draft A | 320 / 17 / 3 / 0 / 10 / 440 / 38 / 3 / 19 / 5 | not found |
| Harvest Medley Salad - Whole | 1 Salad | only in draft A | 750 / 44 / 8 / 0 / 15 / 870 / 78 / 7 / 38 / 12 | not found |
| Harvest Medley Salad - Whole - No Pecans | 1 Salad | only in draft A | 640 / 34 / 6 / 0 / 15 / 870 / 76 / 6 / 37 / 11 | not found |
| Salad Stuffer - Harvest Medley Chicken Salad | 1 Stuffer | only in draft A | 770 / 34 / 6 / 0 / 40 / 1770 / 91 / 5 / 28 / 25 | not found |
| Salad Stuffer - Harvest Medley Chicken Salad - No Pecans | 1 Stuffer | only in draft A | 720 / 29 / 5 / 0 / 40 / 1770 / 90 / 4 / 28 / 24 | not found |
| Salad Stuffer - Harvest Medley Salad | 1 Stuffer | only in draft A | 700 / 33 / 5 / 0 / 10 / 1160 / 88 / 5 / 27 / 14 | not found |
| Salad Stuffer - Harvest Medley Salad - No Pecans | 1 Stuffer | only in draft A | 650 / 27 / 4.5 / 0 / 10 / 1160 / 88 / 4 / 27 / 13 | not found |
| Ranch Parm BLT Salad- Half | 1/2 Salad | only in draft A | 380 / 31 / 9 / 0 / 45 / 950 / 14 / 2 / 5 / 12 | not found |
| Ranch Parm BLT Salad- Whole | 1 Salad | only in draft A | 750 / 62 / 18 / 0.5 / 85 / 1900 / 28 / 4 / 11 / 23 | not found |
| Salad Stuffer - Farmhouse Crunch Salad - No Almonds | 1 Stuffer | only in draft A | 750 / 49 / 10 / 0 / 40 / 1350 / 62 / 6 / 11 / 17 | not found |
| Salad Stuffer - Ranch Parm BLT | 1 Stuffer | only in draft A | 780 / 51 / 12 / 0.5 / 60 / 1740 / 59 / 3 / 9 / 21 | not found |
| Salad Stuffer - Southwest Chicken Ranch | 1 Stuffer | only in draft A | 800 / 50 / 9 / 0 / 70 / 1820 / 65 / 6 / 10 / 24 | not found |
| Southwest Chicken Ranch Salad - Half | 1/2 Salad | only in draft A | 400 / 30 / 5 / 0 / 55 / 1040 / 20 / 5 / 7 / 15 | not found |
| Southwest Chicken Ranch Salad - Whole | 1 Salad | only in draft A | 810 / 59 / 10 / 0 / 110 / 2080 / 40 / 10 / 14 / 30 | not found |
| Salad Stuffer - Farmhouse Crunch Salad | 1 Stuffer | only in draft A | 790 / 51 / 11 / 0 / 40 / 1380 / 69 / 7 / 16 / 18 | not found |
| Salad Stuffer - Ultimate Garden Steak Salad | 1 Stuffer | only in draft A | 790 / 46 / 8 / 0.5 / 60 / 1560 / 70 / 5 / 13 / 25 | not found |
| Salad Stuffer - Asian Sesame Chicken Salad | 1 Stuffer | only in draft A | 580 / 26 / 3.5 / 0 / 35 / 1640 / 64 / 5 / 9 / 22 | not found |
| Salad Stuffer - Asian Sesame Chicken - No Almonds | 1 Stuffer | only in draft A | 540 / 22 / 3.5 / 0 / 35 / 1640 / 62 / 4 / 8 / 21 | not found |
| Salad Stuffer - Caesar | 1 Stuffer | only in draft A | 650 / 41 / 10 / 0.5 / 45 / 1570 / 55 / 4 / 5 / 16 | not found |
| Salad Stuffer - Caesar with Chicken | 1 Stuffer | only in draft A | 720 / 42 / 10 / 0.5 / 80 / 2190 / 57 / 4 / 6 / 27 | not found |
| Salad Stuffer - Fuji Apple Chicken | 1 Stuffer | only in draft A | 700 / 34 / 6 / 0 / 40 / 1450 / 74 / 4 / 25 / 21 | not found |
| Salad Stuffer - Fuji Apple Chicken - No Pecans | 1 Stuffer | only in draft A | 640 / 29 / 5 / 0 / 40 / 1450 / 73 / 3 / 24 / 21 | not found |
| Banana | 1 Banana | differ: fat_g | 90 / 0 / 0 / 0 / 0 / 0 / 23 / 3 / 12 / 1 | 90 / 5 / 0 / 0 / 0 / 0 / 23 / 3 / 12 / 1 |
| Kettle Cooked Potato Chips | 1 package | the guide gives no fiber_g | 150 / 9 / 1 / 0 / 0 / 75 / 17 / – / 0.5 / 2 | 150 / 9 / 1 / 0 / 0 / 75 / 17 / – / 0.5 / 2 |
| Bistro French Onion Soup | 1 Container | only in draft A | 810 / 40 / 21 / 0.5 / 80 / 4490 / 88 / 2 / 40 / 26 | not found |
| Vegetarian Creamy Tomato Soup with Croissant Croutons | 1 Container | only in draft A | 840 / 56 / 34 / 1 / 100 / 2690 / 75 / 2 / 40 / 10 | not found |
| Broccoli Cheddar Soup | 1 Container | only in draft A | 990 / 72 / 44 / 6 / 205 / 3540 / 58 / 3 / 20 / 28 | not found |
| Bacon Mac & Cheese | 1 Container | only in draft A | 2110 / 141 / 68 / 4.5 / 370 / 5240 / 137 / 0 / 31 / 73 | not found |
| Homestyle Chicken Noodle Soup | 1 container | only in draft A | 420 / 10 / 3 / 0 / 120 / 3660 / 49 / 0 / 6 / 33 | not found |
| Mac & Cheese | 1 Container | only in draft A | 1950 / 128 / 63 / 4 / 335 / 4590 / 135 / 0 / 29 / 63 | not found |
| Hearty Fireside Chili | 1 Container | only in draft A | 950 / 35 / 17 / 0 / 60 / 4030 / 113 / 22 / 19 / 45 | not found |
| Three Cheese Lasagna Soup | 1 Container | only in draft A | 820 / 39 / 16 / 0.5 / 165 / 3350 / 77 / 8 / 15 / 43 | not found |
| Vegetarian Autumn Squash Soup | 1 Container | only in draft A | 760 / 38 / 17 / 0 / 120 / 2810 / 96 / 11 / 77 / 18 | not found |
| Rustic Baked Potato Soup | 1 Container | only in draft A | 990 / 58 / 32 / 1.5 / 190 / 3760 / 88 / 5 / 15 / 32 | not found |
| Catering White Icing Portion | 1 Cup | differ: fat_g, saturated_fat_g | 1040 / 2.5 / 0 / 0 / 0 / 400 / 250 / 0 / 252 / 3 | 1040 / 23 / 2.5 / 0 / 0 / 400 / 250 / 0 / 252 / 3 |
| Cafe Blend Dark Roast Coffee | 16 fl oz (473 mL) | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 10 / 0 / 0 / 0 / 1 |
| Cafe Blend Dark Roast Coffee | 20 fl oz (591 mL) | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 10 / 0 / 0 / 0 / 1 |
| Cafe Blend Light Roast Coffee | 16 fl oz (473 mL) | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 10 / 0 / 0 / 0 / 1 |
| Cafe Blend Light Roast Coffee | 20 fl oz (591 mL) | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 10 / 0 / 0 / 0 / 1 |
| Caffeine Free Diet Pepsi | 20 fl oz (591 mL) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 100 / 0 / 0 / 0 / 0 |
| Caffeine Free Diet Pepsi | 30 fl oz (887 mL) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 140 / 0 / 0 / 0 / 0 |
| Catering Asian Sesame Salad | 1/2 Salad | only in draft B | not found | 200 / 14 / 2 / 0 / 0 / 340 / 15 / 3 / 4 / 4 |
| Catering Asian Sesame Salad (no nuts and no chicken) | 1/2 Salad | only in draft B | not found | 150 / 10 / 1.5 / 0 / 0 / 340 / 13 / 2 / 3 / 2 |
| Catering Asian Sesame Salad (no nuts and no chicken) | 1 Salad | only in draft B | not found | 310 / 21 / 3 / 0 / 0 / 670 / 27 / 4 / 7 / 5 |
| Catering Asian Sesame Salad | 1 Salad | only in draft B | not found | 390 / 28 / 3.5 / 0 / 0 / 670 / 30 / 6 / 8 / 8 |
| Catering Fuji Apple Salad | 1/2 Salad | only in draft B | not found | 280 / 21 / 3.5 / 0 / 10 / 270 / 22 / 3 / 15 / 3 |
| Catering Fuji Apple Salad | 1 Salad | only in draft B | not found | 570 / 42 / 7 / 0 / 15 / 540 / 44 / 5 / 30 / 6 |
| Catering Fuji Apple without pecans | 1/2 Salad | only in draft B | not found | 230 / 16 / 3 / 0 / 10 / 270 / 21 / 2 / 15 / 2 |
| Catering Fuji Apple without pecans | 1 Salad | only in draft B | not found | 460 / 31 / 6 / 0 / 15 / 540 / 42 / 4 / 30 / 4 |
| Catering Ham & Cheddar on Country Rustic Sourdough | 1 Sandwich | only in draft B | not found | 840 / 49 / 13 / 0 / 120 / 2350 / 63 / 3 / 6 / 38 |

## Spot check (13 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Market Bowl - All-In Veggie | 1/2 Bowl | 450 / 24 / 4.5 / 0 / 10 / 850 / 50 / 5 / 12 / 7 |
| Rustic Baked Potato Soup | 1 1/2 cups | 430 / 26 / 14 / 0.5 / 85 / 1660 / 38 / 2 / 6 / 14 |
| Americano - 16 fl oz | 16 fl oz (473 mL) | 5 / 0 / 0 / 0 / 0 / 15 / 1 / 0 / 0 / 0 |
| French Ciabatta Dipper | 1 Sandwich + Dipper | 1240 / 58 / 20 / 0.5 / 195 / 2960 / 114 / 4 / 9 / 66 |
| Cherry Lime Fresca - 30 fl oz with ice | 30 fl oz (887 mL) with ice | 280 / 0 / 0 / 0 / 0 / 25 / 69 / 0 / 67 / 0 |
| Spread - Green Chile Salsa Verde - Sandwich Portion | 1 Portion | 60 / 5 / 3 / 0 / 10 / 160 / 2 / 0 / 1 / 1 |
| Sausage, Egg & Cheese on Artisan Ciabatta | 1 Sandwich | 610 / 33 / 14 / 0 / 320 / 1080 / 51 / 2 / 2 / 28 |
| 1 Pump Snickerdoodle Syrup | 1 pump | 20 / 0 / 0 / 0 / 0 / 20 / 5 / 0 / 4 / 0 |
| Sugar | 1 packet | 10 / 0 / 0 / 0 / 0 / 0 / 3 / 0 / 3 / 0 |
| Additional Shot of Espresso | 1 fl oz (30 mL) | 5 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 |
| Multigrain Bagel Flat | 1 Bagel | 190 / 2.5 / 0 / 0 / 0 / 420 / 35 / 0 / 2 / 6 |
| Sauce- Creamy Basil Pesto- Sandwich Portion | 1 portion | 25 / 2 / 1.5 / 0 / 5 / 105 / 1 / 0 / 0 / 1 |
| Cafe Frozen Java - 20 fl oz | 20 fl oz (591 mL) | 440 / 13 / 9 / 0 / 50 / 190 / 73 / 0 / 65 / 8 |
