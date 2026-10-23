# Chuck E. Cheese: lines for a person

Guide: https://www.chuckecheese.com/wp-content/uploads/2025/01/12.5.24-CEC-24-0297-Chuck-E_Nutritionals.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (109)

The last column comes from `npm run chains:evidence`: whether a draft's numbers sit right after the item's name in the guide text the drafts read. It can't read sizes or sections (one draft called a single 78 g cookie a "6 pack"): check those against the guide, then fix the line and set its check to `person`.

Fix each line in `menus/chuck-e-cheese.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B | In the guide text (no AI) |
| --- | --- | --- | --- | --- | --- |
| Cake, Round Chocolate w Choc and Yellow Buttercream | whole | only in draft A | 3490 / 175 / 49 / 0 / 390 / 1460 / 485 / 0 / 349 / 29 | not found | A: numbers found after the name (line 313); check the size |
| Cake, Round White w Vanilla and Purple Buttercream | whole | only in draft A | 3160 / 162 / 69 / 0 / 580 / 1390 / 401 / 0 / 301 / 23 | not found | A: numbers found after the name (line 316); check the size |
| Cake, Sheet Chocolate w Fudge and Yellow Buttercream | whole | only in draft A | 5270 / 250 / 83 / 0 / 485 / 2080 / 722 / 0 / 514 / 42 | not found | A: numbers found after the name (line 318); check the size |
| Cake, Sheet White w Vanilla and Purple Buttercream | whole | only in draft A | 5100 / 228 / 94 / 0 / 1210 / 2420 / 685 / 0 / 483 / 40 | not found | A: numbers found after the name (line 320); check the size |
| Topping, Bacon | IND (for 1 slice) | only in draft B | not found | 20 / 1.5 / 0.5 / 0 / 5 / 70 / 0 / 0 / 0 / 2 | B: numbers found after the name (line 104); check the size |
| Topping, Bacon | LG (for 1 slice) | only in draft B | not found | 25 / 2 / 0.5 / 0 / 10 / 90 / 0 / 0 / 0 / 2 | B: numbers found after the name (line 108); check the size |
| Topping, Bacon | MED (for 1 slice) | only in draft B | not found | 25 / 1.5 / 0.5 / 0 / 5 / 85 / 0 / 0 / 0 / 2 | B: numbers found after the name (line 110); check the size |
| Topping, Bacon | XL (for 1 slice) | only in draft B | not found | 20 / 1.5 / 0.5 / 0 / 5 / 80 / 0 / 0 / 0 / 2 | B: numbers found after the name (line 111); check the size |
| Topping, Beef | IND (for 1 slice) | only in draft B | not found | 15 / 1 / 0 / 0 / 5 / 45 / 0 / 0 / 0 / 1 | B: numbers found after the name (line 112); check the size |
| Topping, Beef | LG (for 1 slice) | only in draft B | not found | 25 / 2 / 1 / 0 / 5 / 75 / 0 / 0 / 0 / 1 | B: numbers found after the name (line 113); check the size |
| Topping, Beef | MED (for 1 slice) | only in draft B | not found | 20 / 2 / 0.5 / 0 / 5 / 65 / 0 / 0 / 0 / 1 | B: numbers found after the name (line 114); check the size |
| Topping, Beef | XL (for 1 slice) | only in draft B | not found | 25 / 2 / 1 / 0 / 5 / 70 / 0 / 0 / 0 / 1 | B: numbers found after the name (line 115); check the size |
| Topping, Black Olives | IND (for 1 slice) | only in draft B | not found | 10 / 1 / 0 / 0 / 0 / 25 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 116); check the size |
| Topping, Black Olives | LG (for 1 slice) | only in draft B | not found | 10 / 1 / 0 / 0 / 0 / 35 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 117); check the size |
| Topping, Black Olives | MED (for 1 slice) | only in draft B | not found | 10 / 1 / 0 / 0 / 0 / 35 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 117); check the size |
| Topping, Black Olives | XL (for 1 slice) | only in draft B | not found | 10 / 1 / 0 / 0 / 0 / 30 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 119); check the size |
| Topping, Ham | IND (for 1 slice) | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 50 / 0 / 0 / 0 / 1 | B: numbers found after the name (line 120); check the size |
| Topping, Ham | LG (for 1 slice) | only in draft B | not found | 5 / 0 / 0 / 0 / 5 / 75 / 0 / 0 / 0 / 1 | B: numbers found after the name (line 121); check the size |
| Topping, Ham | MED (for 1 slice) | only in draft B | not found | 5 / 0 / 0 / 0 / 5 / 70 / 0 / 0 / 0 / 1 | B: numbers found after the name (line 122); check the size |
| Topping, Ham | XL (for 1 slice) | only in draft B | not found | 5 / 0 / 0 / 0 / 5 / 65 / 0 / 0 / 0 / 1 | B: numbers found after the name (line 123); check the size |
| Topping, Chicken | IND (for 1 slice) | only in draft B | not found | 5 / 0 / 0 / 0 / 5 / 40 / 0 / 0 / 0 / 1 | B: numbers found after the name (line 124); check the size |
| Topping, Chicken | LG (for 1 slice) | only in draft B | not found | 10 / 0 / 0 / 0 / 5 / 70 / 0 / 0 / 0 / 2 | B: numbers found after the name (line 125); check the size |
| Topping, Chicken | MED (for 1 slice) | only in draft B | not found | 10 / 0 / 0 / 0 / 5 / 60 / 0 / 0 / 0 / 2 | B: numbers found after the name (line 126); check the size |
| Topping, Chicken | XL (for 1 slice) | only in draft B | not found | 10 / 0 / 0 / 0 / 5 / 65 / 0 / 0 / 0 / 2 | B: numbers found after the name (line 127); check the size |
| Topping, Spinach | IND (for 1 slice) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 128); check the size, mostly zeros: look |
| Topping, Spinach | LG (for 1 slice) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 128); check the size, mostly zeros: look |
| Topping, Spinach | MED (for 1 slice) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 128); check the size, mostly zeros: look |
| Topping, Spinach | XL (for 1 slice) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 128); check the size, mostly zeros: look |
| Topping, Green Peppers | IND (for 1 slice) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 132); check the size, mostly zeros: look |
| Topping, Green Peppers | LG (for 1 slice) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 132); check the size, mostly zeros: look |
| Topping, Green Peppers | MED (for 1 slice) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 132); check the size, mostly zeros: look |
| Topping, Green Peppers | XL (for 1 slice) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 132); check the size, mostly zeros: look |
| Topping, Jalapenos | IND (for 1 slice) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 60 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 136); check the size, mostly zeros: look |
| Topping, Jalapenos | LG (for 1 slice) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 110 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 137); check the size, mostly zeros: look |
| Topping, Jalapenos | MED (for 1 slice) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 95 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 141); check the size, mostly zeros: look |
| Topping, Jalapenos | XL (for 1 slice) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 105 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 143); check the size, mostly zeros: look |
| Topping, Mushrooms | IND (for 1 slice) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 144); check the size, mostly zeros: look |
| Topping, Mushrooms | LG (for 1 slice) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 144); check the size, mostly zeros: look |
| Topping, Mushrooms | MED (for 1 slice) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 144); check the size, mostly zeros: look |
| Topping, Mushrooms | XL (for 1 slice) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 144); check the size, mostly zeros: look |
| Topping, Pepperoni | IND (for 1 slice) | only in draft B | not found | 15 / 1.5 / 0.5 / 0 / 5 / 60 / 0 / 0 / 0 / 1 | B: numbers found after the name (line 148); check the size |
| Topping, Pepperoni | LG (for 1 slice) | only in draft B | not found | 25 / 2.5 / 1 / 0 / 5 / 90 / 0 / 0 / 0 / 1 | B: numbers found after the name (line 149); check the size |
| Topping, Pepperoni | MED (for 1 slice) | only in draft B | not found | 25 / 2 / 1 / 0 / 5 / 85 / 0 / 0 / 0 / 1 | B: numbers found after the name (line 150); check the size |
| Topping, Pepperoni | XL (for 1 slice) | only in draft B | not found | 25 / 2 / 1 / 0 / 5 / 85 / 0 / 0 / 0 / 1 | B: numbers found after the name (line 150); check the size |
| Topping, Pineapple | IND (for 1 slice) | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 0 / 1 / 0 / 1 / 0 | B: numbers found after the name (line 152); check the size |
| Topping, Pineapple | LG (for 1 slice) | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 0 / 1 / 0 / 1 / 0 | B: numbers found after the name (line 152); check the size |
| Topping, Pineapple | MED (for 1 slice) | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 0 / 1 / 0 / 1 / 0 | B: numbers found after the name (line 152); check the size |
| Topping, Pineapple | XL (for 1 slice) | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 0 / 1 / 0 / 1 / 0 | B: numbers found after the name (line 152); check the size |
| Topping, Red Onion | IND (for 1 slice) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 156); check the size, mostly zeros: look |
| Topping, Red Onion | LG (for 1 slice) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 1 / 0 / 0 / 0 | B: numbers found after the name (line 156); check the size, mostly zeros: look |
| Topping, Red Onion | MED (for 1 slice) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 156); check the size, mostly zeros: look |
| Topping, Red Onion | XL (for 1 slice) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 1 / 0 / 0 / 0 | B: numbers found after the name (line 156); check the size, mostly zeros: look |
| Topping, Sausage | IND (for 1 slice) | only in draft B | not found | 15 / 1.5 / 0 / 0 / 5 / 50 / 0 / 0 / 0 / 1 | B: numbers found after the name (line 160); check the size |
| Topping, Sausage | LG (for 1 slice) | only in draft B | not found | 30 / 2.5 / 1 / 0 / 5 / 85 / 0 / 0 / 0 / 1 | B: numbers found after the name (line 161); check the size |
| Topping, Sausage | MED (for 1 slice) | only in draft B | not found | 25 / 2 / 0.5 / 0 / 5 / 75 / 0 / 0 / 0 / 1 | B: numbers found after the name (line 162); check the size |
| Topping, Sausage | XL (for 1 slice) | only in draft B | not found | 25 / 2.5 / 1 / 0 / 5 / 85 / 0 / 0 / 0 / 1 | B: numbers found after the name (line 161); check the size |
| Topping, Tomatoes (Grape) | IND (for 1 slice) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 164); check the size, mostly zeros: look |
| Topping, Tomatoes (Grape) | LG (for 1 slice) | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 0 / 1 / 0 / 0 / 0 | B: numbers found after the name (line 165); check the size, mostly zeros: look |
| Topping, Tomatoes (Grape) | MED (for 1 slice) | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 0 / 1 / 0 / 0 / 0 | B: numbers found after the name (line 165); check the size, mostly zeros: look |
| Topping, Tomatoes (Grape) | XL (for 1 slice) | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 0 / 1 / 0 / 0 / 0 | B: numbers found after the name (line 165); check the size, mostly zeros: look |
| Wings, Boneless, Plain | Large, 1/6 svg | only in draft B | not found | 210 / 9 / 1 / 0 / 45 / 700 / 20 / 1 / 1 / 19 | B: numbers found after the name (line 194); check the size |
| Wings, Boneless, Plain | Medium, 1/4 svg | only in draft B | not found | 210 / 9 / 1 / 0 / 45 / 700 / 20 / 1 / 1 / 19 | B: numbers found after the name (line 194); check the size |
| Wings, Boneless, Plain | Regular, 1/2 svg | only in draft B | not found | 210 / 9 / 1 / 0 / 45 / 700 / 20 / 1 / 1 / 19 | B: numbers found after the name (line 194); check the size |
| Wings, Boneless, Buffalo BBQ | Large, 1/6 svg | only in draft B | not found | 240 / 9 / 1 / 0 / 45 / 1270 / 27 / 1 / 6 / 19 | B: numbers found after the name (line 197); check the size |
| Wings, Boneless, Buffalo BBQ | Medium, 1/4 svg | only in draft B | not found | 240 / 9 / 1 / 0 / 45 / 1270 / 27 / 1 / 6 / 19 | B: numbers found after the name (line 197); check the size |
| Wings, Boneless, Buffalo BBQ | Regular, 1/2 svg | only in draft B | not found | 240 / 9 / 1 / 0 / 45 / 1270 / 27 / 1 / 6 / 19 | B: numbers found after the name (line 197); check the size |
| Wings, Boneless, Homestyle BBQ | Large, 1/6 svg | only in draft B | not found | 270 / 9 / 1 / 0 / 45 / 1010 / 34 / 1 / 12 / 19 | B: numbers found after the name (line 200); check the size |
| Wings, Boneless, Homestyle BBQ | Medium, 1/4 svg | only in draft B | not found | 270 / 9 / 1 / 0 / 45 / 1010 / 34 / 1 / 12 / 19 | B: numbers found after the name (line 200); check the size |
| Wings, Boneless, Homestyle BBQ | Regular, 1/2 svg | only in draft B | not found | 270 / 9 / 1 / 0 / 45 / 1010 / 34 / 1 / 12 / 19 | B: numbers found after the name (line 200); check the size |
| Wings, Boneless, Louisiana Honey Hot | Large, 1/6 svg | only in draft B | not found | 270 / 9 / 1 / 0 / 45 / 1080 / 36 / 1 / 15 / 19 | B: numbers found after the name (line 203); check the size |
| Wings, Boneless, Louisiana Honey Hot | Medium, 1/4 svg | only in draft B | not found | 270 / 9 / 1 / 0 / 45 / 1080 / 36 / 1 / 15 / 19 | B: numbers found after the name (line 203); check the size |
| Wings, Boneless, Louisiana Honey Hot | Regular, 1/2 svg | only in draft B | not found | 270 / 9 / 1 / 0 / 45 / 1080 / 36 / 1 / 15 / 19 | B: numbers found after the name (line 203); check the size |
| Wings, Boneless, Spicy Buffalo | Large, 1/6 svg | only in draft B | not found | 210 / 9 / 1 / 0 / 45 / 1540 / 20 / 1 / 1 / 19 | B: numbers found after the name (line 209); check the size |
| Wings, Boneless, Spicy Buffalo | Medium, 1/4 svg | only in draft B | not found | 210 / 9 / 1 / 0 / 45 / 1540 / 20 / 1 / 1 / 19 | B: numbers found after the name (line 209); check the size |
| Wings, Boneless, Spicy Buffalo | Regular, 1/2 svg | only in draft B | not found | 210 / 9 / 1 / 0 / 45 / 1540 / 20 / 1 / 1 / 19 | B: numbers found after the name (line 209); check the size |
| Wings, Boneless, Spicy Korean BBQ | Large, 1/6 svg | only in draft B | not found | 280 / 10 / 1 / 0 / 45 / 1340 / 34 / 1 / 13 / 19 | B: numbers found after the name (line 213); check the size |
| Wings, Boneless, Spicy Korean BBQ | Medium, 1/4 svg | only in draft B | not found | 280 / 10 / 1 / 0 / 45 / 1340 / 34 / 1 / 13 / 19 | B: numbers found after the name (line 213); check the size |
| Wings, Boneless, Spicy Korean BBQ | Regular, 1/2 svg | only in draft B | not found | 280 / 10 / 1 / 0 / 45 / 1340 / 34 / 1 / 13 / 19 | B: numbers found after the name (line 213); check the size |
| Wings, Boneless, Sweet Chili Sauce | Large, 1/6 svg | only in draft B | not found | 280 / 9 / 1 / 0 / 45 / 1260 / 37 / 1 / 15 / 19 | B: numbers found after the name (line 216); check the size |
| Wings, Boneless, Sweet Chili Sauce | Medium, 1/4 svg | only in draft B | not found | 280 / 9 / 1 / 0 / 45 / 1260 / 37 / 1 / 15 / 19 | B: numbers found after the name (line 216); check the size |
| Wings, Boneless, Sweet Chili Sauce | Regular, 1/2 svg | only in draft B | not found | 280 / 9 / 1 / 0 / 45 / 1260 / 37 / 1 / 15 / 19 | B: numbers found after the name (line 216); check the size |
| Wings, Traditional, Plain | Large, 1/6 svg | only in draft B | not found | 280 / 16 / 5 / 0 / 125 / 1100 / 7 / 0 / 0 / 26 | B: numbers found after the name (line 222); check the size |
| Wings, Traditional, Plain | Medium, 1/4 svg | only in draft B | not found | 280 / 16 / 5 / 0 / 125 / 1100 / 7 / 0 / 0 / 26 | B: numbers found after the name (line 222); check the size |
| Wings, Traditional, Plain | Regular, 1/2 svg | only in draft B | not found | 280 / 16 / 5 / 0 / 125 / 1100 / 7 / 0 / 0 / 26 | B: numbers found after the name (line 222); check the size |
| Wings, Traditional, Buffalo BBQ | Large, 1/6 svg | only in draft B | not found | 310 / 16 / 5 / 0 / 125 / 1670 / 14 / 0 / 6 / 26 | B: numbers found after the name (line 225); check the size |
| Wings, Traditional, Buffalo BBQ | Medium, 1/4 svg | only in draft B | not found | 310 / 16 / 5 / 0 / 125 / 1670 / 14 / 0 / 6 / 26 | B: numbers found after the name (line 225); check the size |
| Wings, Traditional, Buffalo BBQ | Regular, 1/2 svg | only in draft B | not found | 310 / 16 / 5 / 0 / 125 / 1670 / 14 / 0 / 6 / 26 | B: numbers found after the name (line 225); check the size |
| Wings, Traditional, Chili Lime | Large, 1/6 svg | only in draft B | not found | 320 / 21 / 6 / 0 / 125 / 1560 / 7 / 0 / 0 / 26 | B: numbers found after the name (line 228); check the size |
| Wings, Traditional, Chili Lime | Medium, 1/4 svg | only in draft B | not found | 320 / 21 / 6 / 0 / 125 / 1560 / 7 / 0 / 0 / 26 | B: numbers found after the name (line 228); check the size |
| Wings, Traditional, Chili Lime | Regular, 1/2 svg | only in draft B | not found | 320 / 21 / 6 / 0 / 125 / 1560 / 7 / 0 / 0 / 26 | B: numbers found after the name (line 228); check the size |
| Wings, Traditional, Homestyle BBQ | Large, 1/6 svg | only in draft B | not found | 340 / 16 / 5 / 0 / 125 / 1410 / 21 / 0 / 11 / 26 | B: numbers found after the name (line 231); check the size |
| Wings, Traditional, Homestyle BBQ | Medium, 1/4 svg | only in draft B | not found | 340 / 16 / 5 / 0 / 125 / 1410 / 21 / 0 / 11 / 26 | B: numbers found after the name (line 231); check the size |
| Wings, Traditional, Homestyle BBQ | Regular, 1/2 svg | only in draft B | not found | 340 / 16 / 5 / 0 / 125 / 1410 / 21 / 0 / 11 / 26 | B: numbers found after the name (line 231); check the size |
| Wings, Traditional, Lemon Pepper | Large, 1/6 svg | only in draft B | not found | 320 / 21 / 6 / 0 / 125 / 2470 / 9 / 0 / 1 / 26 | B: numbers found after the name (line 234); check the size |
| Wings, Traditional, Lemon Pepper | Medium, 1/4 svg | only in draft B | not found | 320 / 21 / 6 / 0 / 125 / 2470 / 9 / 0 / 1 / 26 | B: numbers found after the name (line 234); check the size |
| Wings, Traditional, Lemon Pepper | Regular, 1/2 svg | only in draft B | not found | 320 / 21 / 6 / 0 / 125 / 2470 / 9 / 0 / 1 / 26 | B: numbers found after the name (line 234); check the size |
| Wings, Traditional, Louisiana Honey Hot | Large, 1/6 svg | only in draft B | not found | 340 / 16 / 5 / 0 / 125 / 1480 / 23 / 0 / 14 / 26 | B: numbers found after the name (line 237); check the size |
| Wings, Traditional, Louisiana Honey Hot | Medium, 1/4 svg | only in draft B | not found | 340 / 16 / 5 / 0 / 125 / 1480 / 23 / 0 / 14 / 26 | B: numbers found after the name (line 237); check the size |
| Wings, Traditional, Louisiana Honey Hot | Regular, 1/2 svg | only in draft B | not found | 340 / 16 / 5 / 0 / 125 / 1480 / 23 / 0 / 14 / 26 | B: numbers found after the name (line 237); check the size |
| Wings, Traditional, Spicy Buffalo | Large, 1/6 svg | only in draft B | not found | 280 / 16 / 5 / 0 / 125 / 1940 / 7 / 0 / 0 / 26 | B: numbers found after the name (line 243); check the size |
| Wings, Traditional, Spicy Buffalo | Medium, 1/4 svg | only in draft B | not found | 280 / 16 / 5 / 0 / 125 / 1940 / 7 / 0 / 0 / 26 | B: numbers found after the name (line 243); check the size |
| Wings, Traditional, Spicy Buffalo | Regular, 1/2 svg | only in draft B | not found | 280 / 16 / 5 / 0 / 125 / 1940 / 7 / 0 / 0 / 26 | B: numbers found after the name (line 243); check the size |
| Wings, Traditional, Spicy Korean BBQ | Medium, 1/4 svg | only in draft B | not found | 350 / 17 / 5 / 0 / 125 / 1740 / 21 / 0 / 12 / 26 | B: numbers found after the name (line 247); check the size |
| Wings, Traditional, Spicy Korean BBQ | Regular, 1/2 svg | only in draft B | not found | 350 / 17 / 5 / 0 / 125 / 1740 / 21 / 0 / 12 / 26 | B: numbers found after the name (line 247); check the size |
| Wings, Traditional, Spicy Korean BBQ | Large, 1/6 svg | only in draft B | not found | 350 / 17 / 5 / 0 / 125 / 1740 / 21 / 0 / 12 / 26 | B: numbers found after the name (line 247); check the size |
| Wings, Traditional, Sweet Chili Sauce | Large, 1/6 svg | only in draft B | not found | 350 / 16 / 5 / 0 / 125 / 1660 / 24 / 0 / 14 / 26 | B: numbers found after the name (line 250); check the size |
| Wings, Traditional, Sweet Chili Sauce | Medium, 1/4 svg | only in draft B | not found | 350 / 16 / 5 / 0 / 125 / 1660 / 24 / 0 / 14 / 26 | B: numbers found after the name (line 250); check the size |
| Wings, Traditional, Sweet Chili Sauce | Regular, 1/2 svg | only in draft B | not found | 350 / 16 / 5 / 0 / 125 / 1660 / 24 / 0 / 14 / 26 | B: numbers found after the name (line 250); check the size |
| Side, French Fries | 8 oz | both read it the same, but its protein, carbs and fat make 521 kcal, not 420 | 420 / 13 / 4 / 0 / 0 / 640 / 67 / 5 / 2 / 34 | 420 / 13 / 4 / 0 / 0 / 640 / 67 / 5 / 2 / 34 | A: numbers found after the name (line 21); check the size; B: numbers found after the name (line 21); check the size |

## Spot check (7 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Salad Bar, Red Onions | 3 Slices/.25 oz | 5 / 0 / 0 / 0 / 0 / 0 / 1 / 0 / 0 / 0 |
| Platter, App Sampler (with Sweet Chili Sauce Boneless Wings) | 1 serving | 1650 / 94 / 25 / 1.5 / 140 / 4220 / 157 / 9 / 33 / 52 |
| Ice Cream Bar, Strawberry Shortcake | 1 serving | 190 / 9 / 3.5 / 0 / 5 / 90 / 26 / 0 / 17 / 2 |
| Salad Bar, Grape Tomatoes | 3 Each/.75 oz | 5 / 0 / 0 / 0 / 0 / 0 / 1 / 0 / 1 / 0 |
| Ice Cream, Dippin' Dots, Cookies & Cream | 5 fl oz | 240 / 12 / 6 / 0 / 30 / 95 / 30 / 0 / 25 / 4 |
| Salad Bar, Romaine Lettuce | 1 Cup | 10 / 0 / 0 / 0 / 0 / 0 / 2 / 1 / 1 / 1 |
| Ice Cream Sandwich, Big Bopper | 1 serving | 450 / 20 / 11 / 0 / 45 / 360 / 64 / 1 / 37 / 6 |
