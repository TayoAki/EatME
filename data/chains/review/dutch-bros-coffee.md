# Dutch Bros Coffee: lines for a person

Guide: https://www.dutchbros.com/website/menu/nutritional-guide.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (501)

Fix each line in `menus/dutch-bros-coffee.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B |
| --- | --- | --- | --- | --- |
| Vanilla Mocha | Iced, Medium | only in draft A | 360 / 10 / 7 / 0 / 40 / 260 / 58 / 1 / 55 / 11 | not found |
| Zero Sugar Added Mocha | Iced, Large | only in draft A | 490 / 31 / 20 / 0 / 100 / 270 / 43 / 1 / 10 / 13 | not found |
| Zero Sugar Added Mocha | Iced, Medium | only in draft A | 410 / 24 / 16 / 0 / 80 / 230 / 39 / 1 / 8 / 11 | not found |
| Zero Sugar Added Mocha | Iced, Small | only in draft A | 270 / 12 / 8 / 0 / 40 / 150 / 35 / 1 / 4 / 7 | not found |
| Zero Sugar Pink Flamingo Rebel | Blended, Large | differ: fat_g, saturated_fat_g | 110 / 20 / 2 / 0 / 0 / 210 / 18 / 0 / 0 / 1 | 110 / 2 / 0 / 0 / 0 / 210 / 18 / 0 / 0 / 1 |
| Zero Sugar Pink Flamingo Rebel | Blended, Medium | differ: fat_g, saturated_fat_g | 90 / 15 / 1.5 / 0 / 0 / 150 / 13 / 0 / 0 / 1 | 90 / 1.5 / 0 / 0 / 0 / 150 / 13 / 0 / 0 / 1 |
| Zero Sugar Pink Flamingo Rebel | Blended, Small | differ: fat_g, saturated_fat_g | 60 / 10 / 1 / 0 / 0 / 105 / 9 / 0 / 0 / 1 | 60 / 1 / 0 / 0 / 0 / 105 / 9 / 0 / 0 / 1 |
| Zero Sugar Pink Flamingo Rebel | Iced, Large | differ: fat_g, saturated_fat_g | 70 / 10 / 1 / 0 / 0 / 210 / 10 / 0 / 0 / 2 | 70 / 1 / 0 / 0 / 0 / 210 / 10 / 0 / 0 / 2 |
| Cherry Lime Myst | Iced, Large | differ: sodium_mg | 180 / 0 / 0 / 0 / 0 / 0 / 43 / 0 / 35 / 0 | 180 / 0 / 0 / 0 / 0 / 5 / 43 / 0 / 35 / 0 |
| Mango Smoothie | Blended Large | only in draft A | 720 / 10 / 1 / 0 / 0 / 30 / 177 / 0 / 170 / 1 | not found |
| Mango Smoothie | Blended Medium | only in draft A | 540 / 5 / 1 / 0 / 0 / 20 / 133 / 0 / 128 / 0 | not found |
| Mango Smoothie | Blended Small | only in draft A | 360 / 5 / 0.5 / 0 / 0 / 15 / 89 / 0 / 85 / 0 | not found |
| Mango Smoothie | Blended Kids | only in draft A | 230 / 5 / 0 / 0 / 0 / 10 / 55 / 0 / 53 / 0 | not found |
| Soft Top | 2 Scoops | differ: fat_g, saturated_fat_g, trans_fat_g | 100 / 70 / 8 / 7 / 5 / 30 / 6 / 0 / 5 / 1 | 100 / 8 / 7 / 0 / 5 / 30 / 6 / 0 / 5 / 1 |
| Creepy Crawler Soda | Iced, Medium | only in draft A | 400 / 2.5 / 2.5 / 2.5 / 0 / 30 / 91 / 0 / 80 / 1 | not found |
| Creepy Crawler Soda | Iced, Small | only in draft A | 310 / 2.5 / 2.5 / 2.5 / 0 / 25 / 70 / 0 / 60 / 1 | not found |
| Creepy Crawler Lemoande | Blended, Large | only in draft A | 740 / 3 / 3 / 3 / 0 / 70 / 171 / 0 / 159 / 2 | not found |
| Creepy Crawler Lemoande | Blended, Medium | only in draft A | 600 / 3 / 3 / 3 / 0 / 60 / 138 / 0 / 127 / 1 | not found |
| Creepy Crawler Lemoande | Blended, Small | only in draft A | 470 / 3 / 3 / 3 / 0 / 45 / 106 / 0 / 95 / 1 | not found |
| Creepy Crawler Lemoande | Blended, Kids | only in draft A | 370 / 3 / 2.5 / 0 / 0 / 35 / 82 / 0 / 71 / 1 | not found |
| Creepy Crawler Lemoande | Iced, Large | only in draft A | 430 / 3 / 3 / 3 / 0 / 50 / 97 / 0 / 86 / 1 | not found |
| Creepy Crawler Soda w/ Sour Shot | Iced, Large | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 550 / – / – / – / – / – / – / – / – / – | 550 / – / – / – / – / – / – / – / – / – |
| 911 Zero Sugar Added Hot | Large | only in draft B | not found | 490 / 40 / 26 / 0 / 130 / 270 / 19 / 2 / 14 / 15 |
| 911 Zero Sugar Added Hot | Medium | only in draft B | not found | 350 / 28 / 18 / 0 / 90 / 190 / 15 / 2 / 10 / 11 |
| 911 Zero Sugar Added Hot | Small | only in draft B | not found | 210 / 16 / 10 / 0 / 50 / 105 / 11 / 2 / 6 / 7 |
| 911 Zero Sugar Added Iced | Large | only in draft B | not found | 350 / 28 / 18 / 0 / 90 / 190 / 15 / 2 / 10 / 11 |
| 911 Zero Sugar Added Iced | Medium | only in draft B | not found | 210 / 16 / 10 / 0 / 50 / 105 / 11 / 2 / 6 / 7 |
| 911 Zero Sugar Added Iced | Small | only in draft B | not found | 70 / 3.5 / 2.5 / 0 / 10 / 25 / 7 / 2 / 2 / 3 |
| Annihilator Zero Sugar Added Hot | Large | only in draft B | not found | 550 / 46 / 30 / 0 / 150 / 310 / 19 / 1 / 16 / 17 |
| Annihilator Zero Sugar Added Hot | Medium | only in draft B | not found | 470 / 39 / 26 / 0 / 130 / 270 / 16 / 0.5 / 13 / 14 |
| Annihilator Zero Sugar Added Hot | Small | only in draft B | not found | 330 / 27 / 18 / 0 / 90 / 190 / 12 / 0.5 / 9 / 10 |
| Annihilator Zero Sugar Added Iced | Large | only in draft B | not found | 410 / 34 / 22 / 0 / 110 / 230 / 15 / 1 / 11 / 12 |
| Annihilator Zero Sugar Added Iced | Medium | only in draft B | not found | 330 / 27 / 18 / 0 / 90 / 190 / 12 / 0.5 / 9 / 10 |
| Annihilator Zero Sugar Added Iced | Small | only in draft B | not found | 190 / 15 / 10 / 0 / 50 / 105 / 8 / 0.5 / 5 / 6 |
| Caramelizer Zero Sugar Added Hot | Large | only in draft B | not found | 660 / 45 / 30 / 0 / 145 / 390 / 52 / 6 / 15 / 17 |
| Caramelizer Zero Sugar Added Hot | Medium | only in draft B | not found | 570 / 39 / 26 / 0 / 125 / 340 / 48 / 5 / 13 / 14 |
| Caramelizer Zero Sugar Added Hot | Small | only in draft B | not found | 430 / 27 / 17 / 0 / 85 / 260 / 44 / 5 / 9 / 10 |
| Caramelizer Zero Sugar Added Iced | Large | only in draft B | not found | 510 / 33 / 22 / 0 / 105 / 300 / 48 / 6 / 11 / 13 |
| Caramelizer Zero Sugar Added Iced | Medium | only in draft B | not found | 430 / 27 / 17 / 0 / 85 / 260 / 44 / 5 / 9 / 10 |
| Caramelizer Zero Sugar Added Iced | Small | only in draft B | not found | 290 / 14 / 9 / 0 / 45 / 180 / 40 / 5 / 5 / 6 |
| Cocomo Zero Sugar Added Hot | Large | only in draft B | not found | 570 / 43 / 28 / 0 / 140 / 320 / 32 / 1 / 15 / 16 |
| Cocomo Zero Sugar Added Hot | Medium | only in draft B | not found | 490 / 36 / 24 / 0 / 120 / 280 / 28 / 0.5 / 12 / 14 |
| Cocomo Zero Sugar Added Hot | Small | only in draft B | not found | 350 / 24 / 16 / 0 / 80 / 200 / 24 / 0.5 / 8 / 10 |
| Cocomo Zero Sugar Added Iced | Large | only in draft B | not found | 430 / 31 / 20 / 0 / 100 / 240 / 28 / 1 / 10 / 12 |
| Cocomo Zero Sugar Added Iced | Medium | only in draft B | not found | 350 / 24 / 16 / 0 / 80 / 200 / 24 / 0.5 / 8 / 10 |
| Cocomo Zero Sugar Added Iced | Small | only in draft B | not found | 210 / 12 / 8 / 0 / 40 / 115 / 20 / 0.5 / 4 / 6 |
| Double Torture Zero Sugar Added Hot | Large | only in draft B | not found | 510 / 37 / 24 / 0 / 120 / 280 / 32 / 2 / 13 / 15 |
| Double Torture Zero Sugar Added Hot | Medium | only in draft B | not found | 430 / 31 / 20 / 0 / 100 / 240 / 28 / 1 / 10 / 12 |
| Double Torture Zero Sugar Added Hot | Small | only in draft B | not found | 290 / 18 / 12 / 0 / 60 / 160 / 24 / 1 / 6 / 8 |
| Double Torture Zero Sugar Added Iced | Large | only in draft B | not found | 370 / 25 / 16 / 0 / 80 / 200 / 28 / 2 / 9 / 11 |
| Double Torture Zero Sugar Added Iced | Medium | only in draft B | not found | 290 / 18 / 12 / 0 / 60 / 160 / 24 / 1 / 6 / 8 |
| Double Torture Zero Sugar Added Iced | Small | only in draft B | not found | 150 / 6 / 4 / 0 / 20 / 80 / 20 / 1 / 2 / 4 |
| Golden Eagle Zero Sugar Added Hot | Large | only in draft B | not found | 600 / 45 / 30 / 0 / 145 / 360 / 37 / 6 / 15 / 16 |
| Golden Eagle Zero Sugar Added Hot | Medium | only in draft B | not found | 520 / 39 / 26 / 0 / 125 / 320 / 33 / 5 / 13 / 13 |
| Golden Eagle Zero Sugar Added Hot | Small | only in draft B | not found | 370 / 27 / 17 / 0 / 85 / 230 / 29 / 5 / 9 / 9 |
| Golden Eagle Zero Sugar Added Iced | Large | only in draft B | not found | 460 / 33 / 22 / 0 / 105 / 270 / 33 / 6 / 11 / 12 |
| Golden Eagle Zero Sugar Added Iced | Medium | only in draft B | not found | 370 / 27 / 17 / 0 / 85 / 230 / 29 / 5 / 9 / 9 |
| Golden Eagle Zero Sugar Added Iced | Small | only in draft B | not found | 230 / 14 / 9 / 0 / 45 / 150 / 25 / 5 / 5 / 5 |
| Kicker Zero Sugar Added Hot | Large | only in draft B | not found | 550 / 46 / 30 / 0 / 150 / 310 / 19 / 1 / 16 / 17 |
| Kicker Zero Sugar Added Hot | Medium | only in draft B | not found | 470 / 39 / 26 / 0 / 130 / 270 / 16 / 0.5 / 13 / 14 |
| Kicker Zero Sugar Added Hot | Small | only in draft B | not found | 330 / 27 / 18 / 0 / 90 / 190 / 12 / 0.5 / 9 / 10 |
| Kicker Zero Sugar Added Iced | Large | only in draft B | not found | 410 / 34 / 22 / 0 / 110 / 230 / 15 / 1 / 12 / 12 |
| Kicker Zero Sugar Added Iced | Medium | only in draft B | not found | 330 / 27 / 18 / 0 / 90 / 190 / 12 / 0.5 / 9 / 10 |
| Kicker Zero Sugar Added Iced | Small | only in draft B | not found | 190 / 15 / 10 / 0 / 50 / 105 / 8 / 0.5 / 5 / 6 |
| Americano Hot | Large | only in draft B | not found | 20 / 0 / 0 / 0 / 0 / 20 / 3 / 1 / 0 / 1 |
| Americano Hot | Medium | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 15 / 2 / 1 / 0 / 1 |
| Americano Hot | Small | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 10 / 2 / 1 / 0 / 1 |
| Americano Iced | Large | only in draft B | not found | 20 / 0 / 0 / 0 / 0 / 15 / 3 / 1 / 0 / 1 |
| Americano Iced | Medium | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 10 / 2 / 1 / 0 / 1 |
| Americano Iced | Small | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 5 / 2 / 1 / 0 / 1 |
| Americano w/ Cream Hot | Large | only in draft B | not found | 80 / 6 / 4 / 0 / 20 / 60 / 4 / 1 / 2 / 3 |
| Americano w/ Cream Hot | Medium | only in draft B | not found | 80 / 6 / 4 / 0 / 20 / 55 / 4 / 1 / 2 / 3 |
| Americano w/ Cream Hot | Small | only in draft B | not found | 80 / 6 / 4 / 0 / 20 / 50 / 4 / 1 / 2 / 3 |
| Americano w/ Cream Iced | Large | only in draft B | not found | 80 / 6 / 4 / 0 / 20 / 55 / 4 / 1 / 2 / 3 |
| Americano w/ Cream Iced | Medium | only in draft B | not found | 80 / 6 / 4 / 0 / 20 / 50 / 4 / 1 / 2 / 3 |
| Americano w/ Cream Iced | Small | only in draft B | not found | 80 / 6 / 4 / 0 / 20 / 45 / 4 / 1 / 2 / 3 |
| Latte Hot | Large | only in draft B | not found | 300 / 10 / 6 / 0 / 40 / 300 / 33 / 1 / 28 / 21 |
| Latte Hot | Medium | only in draft B | not found | 260 / 9 / 5 / 0 / 35 / 260 / 28 / 1 / 25 / 18 |
| Latte Hot | Small | only in draft B | not found | 190 / 6 / 4 / 0 / 25 / 190 / 20 / 1 / 18 / 13 |
| Latte Iced | Large | only in draft B | not found | 230 / 8 / 4.5 / 0 / 30 / 230 / 26 / 1 / 21 / 16 |
| Latte Iced | Medium | only in draft B | not found | 190 / 6 / 4 / 0 / 25 / 190 / 20 / 1 / 18 / 13 |
| Latte Iced | Small | only in draft B | not found | 120 / 4 / 2.5 / 0 / 15 / 115 / 13 / 1 / 11 / 8 |
| Caramel Latte Hot | Large | only in draft B | not found | 400 / 10 / 6 / 0 / 40 / 360 / 59 / 1 / 49 / 20 |
| Caramel Latte Hot | Medium | only in draft B | not found | 360 / 8 / 5 / 0 / 35 / 320 / 54 / 1 / 45 / 17 |
| Caramel Latte Hot | Small | only in draft B | not found | 290 / 6 / 3.5 / 0 / 25 / 250 / 46 / 1 / 38 / 12 |
| Caramel Latte Iced | Large | only in draft B | not found | 330 / 7 / 4.5 / 0 / 30 / 290 / 52 / 1 / 42 / 15 |
| Caramel Latte Iced | Medium | only in draft B | not found | 290 / 6 / 3.5 / 0 / 25 / 250 / 46 / 1 / 38 / 12 |
| Caramel Latte Iced | Small | only in draft B | not found | 220 / 3.5 / 2 / 0 / 15 / 170 / 39 / 1 / 31 / 7 |
| Hazelnut Latte Hot | Large | only in draft B | not found | 360 / 10 / 6 / 0 / 40 / 280 / 51 / 1 / 45 / 20 |
| Hazelnut Latte Hot | Medium | only in draft B | not found | 320 / 8 / 5 / 0 / 35 / 240 / 46 / 1 / 42 / 17 |
| Hazelnut Latte Hot | Small | only in draft B | not found | 250 / 6 / 3.5 / 0 / 25 / 170 / 38 / 1 / 35 / 12 |
| Hazelnut Latte Iced | Large | only in draft B | not found | 290 / 7 / 4.5 / 0 / 30 / 210 / 43 / 1 / 38 / 15 |
| Hazelnut Latte Iced | Medium | only in draft B | not found | 250 / 6 / 3.5 / 0 / 25 / 170 / 38 / 1 / 35 / 12 |
| Hazelnut Latte Iced | Small | only in draft B | not found | 180 / 3.5 / 2 / 0 / 15 / 95 / 31 / 1 / 28 / 7 |
| Salted Caramel Latte Hot | Large | only in draft B | not found | 380 / 10 / 6 / 0 / 40 / 380 / 56 / 1 / 50 / 20 |
| Salted Caramel Latte Hot | Medium | only in draft B | not found | 340 / 8 / 5 / 0 / 35 / 350 / 51 / 1 / 47 / 17 |
| Salted Caramel Latte Hot | Small | only in draft B | not found | 270 / 6 / 3.5 / 0 / 25 / 270 / 43 / 1 / 40 / 12 |
| Salted Caramel Latte Iced | Large | only in draft B | not found | 310 / 7 / 4.5 / 0 / 30 / 310 / 48 / 1 / 43 / 15 |
| Salted Caramel Latte Iced | Medium | only in draft B | not found | 270 / 6 / 3.5 / 0 / 25 / 270 / 43 / 1 / 40 / 12 |
| Salted Caramel Latte Iced | Small | only in draft B | not found | 200 / 3.5 / 2 / 0 / 15 / 200 / 36 / 1 / 33 / 7 |
| Vanilla Latte Hot | Large | only in draft B | not found | 360 / 10 / 6 / 0 / 40 / 280 / 51 / 1 / 46 / 20 |
| Vanilla Latte Hot | Medium | only in draft B | not found | 320 / 8 / 5 / 0 / 35 / 240 / 46 / 1 / 43 / 17 |
| Vanilla Latte Hot | Small | only in draft B | not found | 250 / 6 / 3.5 / 0 / 25 / 170 / 38 / 1 / 36 / 12 |
| Vanilla Latte Iced | Large | only in draft B | not found | 290 / 7 / 4.5 / 0 / 30 / 210 / 43 / 1 / 39 / 15 |
| Vanilla Latte Iced | Medium | only in draft B | not found | 250 / 6 / 3.5 / 0 / 25 / 170 / 38 / 1 / 36 / 12 |
| Vanilla Latte Iced | Small | only in draft B | not found | 180 / 3.5 / 2 / 0 / 15 / 95 / 31 / 1 / 29 / 7 |
| White Chocolate Latte Hot | Large | only in draft B | not found | 390 / 10 / 6 / 0 / 40 / 360 / 58 / 1 / 50 / 21 |
| White Chocolate Latte Hot | Medium | only in draft B | not found | 350 / 9 / 5 / 0 / 35 / 320 / 52 / 1 / 46 / 18 |
| White Chocolate Latte Hot | Small | only in draft B | not found | 280 / 6 / 3.5 / 0 / 25 / 240 / 45 / 1 / 39 / 13 |
| White Chocolate Latte Iced | Large | only in draft B | not found | 320 / 8 / 4.5 / 0 / 30 / 280 / 50 / 1 / 43 / 16 |
| White Chocolate Latte Iced | Medium | only in draft B | not found | 280 / 6 / 3.5 / 0 / 25 / 240 / 45 / 1 / 39 / 13 |
| White Chocolate Latte Iced | Small | only in draft B | not found | 210 / 3.5 / 2 / 0 / 15 / 170 / 37 / 1 / 32 / 8 |
| Oat Milk Latte Hot | Large | only in draft B | not found | 380 / 16 / 2 / 0 / 0 / 320 / 48 / 3 / 6 / 9 |
| Oat Milk Latte Hot | Medium | only in draft B | not found | 320 / 14 / 2 / 0 / 0 / 280 / 41 / 2 / 5 / 8 |
| Oat Milk Latte Hot | Small | only in draft B | not found | 230 / 10 / 1.5 / 0 / 0 / 200 / 30 / 2 / 4 / 6 |
| Oat Milk Latte Iced | Large | only in draft B | not found | 290 / 12 / 1.5 / 0 / 0 / 240 / 37 / 3 / 5 / 7 |
| Oat Milk Latte Iced | Medium | only in draft B | not found | 230 / 10 / 1.5 / 0 / 0 / 200 / 30 / 2 / 4 / 6 |
| Oat Milk Latte Iced | Small | only in draft B | not found | 140 / 6 / 1 / 0 / 0 / 120 / 19 / 1 / 2 / 4 |
| Mocha Hot | Large | only in draft B | not found | 500 / 18 / 12 / 0 / 70 / 460 / 69 / 1 / 62 / 19 |
| Mocha Hot | Medium | only in draft B | not found | 430 / 16 / 11 / 0 / 60 / 400 / 59 / 1 / 54 / 16 |
| Mocha Hot | Small | only in draft B | not found | 310 / 11 / 8 / 0 / 45 / 290 / 43 / 1 / 39 / 12 |
| Mocha Iced | Large | only in draft B | not found | 380 / 14 / 9 / 0 / 55 / 340 / 53 / 1 / 47 / 15 |
| Mocha Iced | Medium | only in draft B | not found | 310 / 11 / 8 / 0 / 45 / 290 / 43 / 1 / 39 / 12 |
| Mocha Iced | Small | only in draft B | not found | 190 / 7 / 4.5 / 0 / 25 / 170 / 26 / 1 / 23 / 7 |
| Dark Chocolate Mocha Hot | Large | only in draft B | not found | 570 / 17 / 11 / 0 / 65 / 460 / 91 / 1 / 82 / 18 |
| Dark Chocolate Mocha Hot | Medium | only in draft B | not found | 500 / 15 / 10 / 0 / 55 / 400 / 81 / 1 / 74 / 15 |
| Dark Chocolate Mocha Hot | Small | only in draft B | not found | 380 / 10 / 7 / 0 / 40 / 280 / 65 / 1 / 58 / 11 |
| Dark Chocolate Mocha Iced | Large | only in draft B | not found | 450 / 13 / 8 / 0 / 50 / 340 / 74 / 1 / 66 / 14 |
| Dark Chocolate Mocha Iced | Medium | only in draft B | not found | 380 / 10 / 7 / 0 / 40 / 280 / 65 / 1 / 58 / 11 |
| Dark Chocolate Mocha Iced | Small | only in draft B | not found | 260 / 6 / 4 / 0 / 20 / 170 / 48 / 1 / 43 / 6 |
| Salted Caramel Mocha Hot | Large | only in draft B | not found | 570 / 17 / 11 / 0 / 65 / 530 / 90 / 1 / 82 / 18 |
| Salted Caramel Mocha Hot | Medium | only in draft B | not found | 500 / 15 / 10 / 0 / 55 / 480 / 80 / 1 / 74 / 15 |
| Salted Caramel Mocha Hot | Small | only in draft B | not found | 380 / 10 / 7 / 0 / 40 / 360 / 63 / 1 / 59 / 11 |
| Salted Caramel Mocha Iced | Large | only in draft B | not found | 450 / 13 / 8 / 0 / 50 / 420 / 73 / 1 / 67 / 14 |
| Salted Caramel Mocha Iced | Medium | only in draft B | not found | 380 / 10 / 7 / 0 / 40 / 360 / 63 / 1 / 59 / 11 |
| Salted Caramel Mocha Iced | Small | only in draft B | not found | 260 / 6 / 4 / 0 / 20 / 250 / 47 / 1 / 43 / 6 |
| Vanilla Mocha Hot | Large | only in draft B | not found | 550 / 17 / 11 / 0 / 65 / 430 / 85 / 1 / 78 / 18 |
| Vanilla Mocha Hot | Medium | only in draft B | not found | 480 / 15 / 10 / 0 / 55 / 370 / 75 / 1 / 70 / 15 |
| Vanilla Mocha Hot | Small | only in draft B | not found | 360 / 10 / 7 / 0 / 40 / 260 / 58 / 1 / 55 / 11 |
| Vanilla Mocha | Medium | only in draft B | not found | 360 / 10 / 7 / 0 / 40 / 260 / 58 / 1 / 55 / 11 |
| White Chocolate Mocha | Large | only in draft B | not found | 650 / 22 / 14 / 0 / 90 / 510 / 95 / 1 / 86 / 19 |
| White Chocolate Mocha | Medium | only in draft B | not found | 560 / 19 / 12 / 0 / 75 / 460 / 84 / 1 / 77 / 17 |
| White Chocolate Mocha | Small | only in draft B | not found | 420 / 13 / 8 / 0 / 50 / 340 / 66 / 1 / 60 / 12 |
| Golden Eagle Protein Latte | Large | only in draft B | not found | 470 / 9 / 5 / 0 / 55 / 300 / 57 / 1 / 53 / 39 |
| Golden Eagle Protein Latte | Medium | only in draft B | not found | 420 / 8 / 4.5 / 0 / 50 / 270 / 53 / 1 / 50 / 33 |
| Golden Eagle Protein Latte | Small | only in draft B | not found | 330 / 6 / 3.5 / 0 / 35 / 220 / 47 / 1 / 44 / 23 |
| Hopscotch Protein Latte | Large | only in draft B | not found | 490 / 9 / 5 / 0 / 55 / 340 / 60 / 1 / 53 / 39 |
| Hopscotch Protein Latte | Medium | only in draft B | not found | 430 / 8 / 4.5 / 0 / 50 / 310 / 56 / 1 / 49 / 33 |
| Hopscotch Protein Latte | Small | only in draft B | not found | 350 / 6 / 3.5 / 0 / 35 / 250 / 50 / 1 / 43 / 23 |
| Hopscotch Zero Sugar Added Protein Latte | Large | only in draft B | not found | 430 / 12 / 7 / 0 / 60 / 390 / 49 / 7 / 22 / 37 |
| Hopscotch Zero Sugar Added Protein Latte | Medium | only in draft B | not found | 370 / 10 / 6 / 0 / 50 / 360 / 45 / 7 / 19 / 31 |
| Hopscotch Zero Sugar Added Protein Latte | Small | only in draft B | not found | 290 / 8 / 4.5 / 0 / 35 / 310 / 39 / 7 / 13 / 21 |
| Hopscotch Protein Mocha | Large | only in draft B | not found | 480 / 9 / 5 / 0 / 55 / 310 / 60 / 1 / 52 / 39 |
| Hopscotch Protein Mocha | Medium | only in draft B | not found | 430 / 8 / 4.5 / 0 / 50 / 280 / 55 / 1 / 49 / 33 |
| Hopscotch Protein Mocha | Small | only in draft B | not found | 340 / 6 / 3.5 / 0 / 35 / 230 / 49 / 1 / 43 / 23 |
| Hopscotch Zero Sugar Added Protein Mocha | Large | only in draft B | not found | 440 / 11 / 6 / 0 / 55 / 360 / 53 / 6 / 22 / 37 |
| Hopscotch Zero Sugar Added Protein Mocha | Medium | only in draft B | not found | 380 / 9 / 6 / 0 / 50 / 330 / 48 / 5 / 19 / 32 |
| Hopscotch Zero Sugar Added Protein Mocha | Small | only in draft B | not found | 300 / 7 / 4 / 0 / 35 / 270 / 42 / 5 / 13 / 22 |
| Vanilla Protein Latte | Large | only in draft B | not found | 420 / 9 / 5 / 0 / 55 / 220 / 45 / 1 / 43 / 39 |
| Vanilla Protein Latte | Medium | only in draft B | not found | 370 / 8 / 4.5 / 0 / 50 / 190 / 41 / 1 / 40 / 33 |
| Vanilla Protein Latte | Small | only in draft B | not found | 280 / 6 / 3.5 / 0 / 35 / 135 / 35 / 1 / 34 / 23 |
| Vanilla Zero Sugar Added Protein Latte | Large | only in draft B | not found | 340 / 9 / 5 / 0 / 55 / 230 / 25 / 1 / 23 / 39 |
| Vanilla Zero Sugar Added Protein Latte | Medium | only in draft B | not found | 290 / 8 / 4.5 / 0 / 50 / 200 / 21 / 1 / 20 / 33 |
| Vanilla Zero Sugar Added Protein Latte | Small | only in draft B | not found | 200 / 6 / 3.5 / 0 / 35 / 140 / 15 / 1 / 14 / 23 |
| Protein Latte | Large | only in draft B | not found | 360 / 10 / 6 / 0 / 60 / 240 / 27 / 1 / 25 / 42 |
| Protein Latte | Medium | only in draft B | not found | 310 / 9 / 5 / 0 / 50 / 210 / 22 / 1 / 21 / 36 |
| Protein Latte | Small | only in draft B | not found | 220 / 6 / 3.5 / 0 / 35 / 150 / 16 / 1 / 15 / 26 |
| Plain Blended Rebel | Large | only in draft B | not found | 400 / 0 / 0 / 0 / 0 / 170 / 104 / 0 / 102 / 3 |
| Plain Blended Rebel | Medium | only in draft B | not found | 300 / 0 / 0 / 0 / 0 / 130 / 78 / 0 / 76 / 2 |
| Plain Blended Rebel | Small | only in draft B | not found | 200 / 0 / 0 / 0 / 0 / 85 / 52 / 0 / 51 / 1 |
| Aftershock Rebel | Large | only in draft B | not found | 570 / 0 / 0 / 0 / 0 / 140 / 145 / 0 / 142 / 2 |
| Aftershock Rebel | Medium | only in draft B | not found | 410 / 0 / 0 / 0 / 0 / 110 / 105 / 0 / 103 / 2 |
| Aftershock Rebel | Small | only in draft B | not found | 260 / 0 / 0 / 0 / 0 / 75 / 66 / 0 / 64 / 1 |
| Dragon Slayer Rebel | Large | only in draft B | not found | 670 / 0 / 0 / 0 / 0 / 140 / 171 / 0 / 169 / 2 |
| Dragon Slayer Rebel | Medium | only in draft B | not found | 510 / 0 / 0 / 0 / 0 / 110 / 129 / 0 / 128 / 2 |
| Dragon Slayer Rebel | Small | only in draft B | not found | 340 / 0 / 0 / 0 / 0 / 75 / 87 / 0 / 86 / 1 |
| Double Rainbro Rebel | Large | only in draft B | not found | 570 / 0 / 0 / 0 / 0 / 130 / 144 / 0 / 140 / 2 |
| Double Rainbro Rebel | Medium | only in draft B | not found | 430 / 0 / 0 / 0 / 0 / 110 / 109 / 0 / 106 / 2 |
| Double Rainbro Rebel | Small | only in draft B | not found | 260 / 0 / 0 / 0 / 0 / 75 / 67 / 0 / 66 / 1 |
| Dino Egg Rebel | Large | only in draft B | not found | 680 / 0 / 0 / 0 / 0 / 170 / 174 / 0 / 171 / 3 |
| Dino Egg Rebel | Medium | only in draft B | not found | 520 / 0 / 0 / 0 / 0 / 135 / 132 / 0 / 129 / 2 |
| Dino Egg Rebel | Small | only in draft B | not found | 350 / 0 / 0 / 0 / 0 / 105 / 89 / 0 / 87 / 2 |
| Electric Berry Rebel | Large | only in draft B | not found | 580 / 0 / 0 / 0 / 0 / 140 / 147 / 0 / 145 / 2 |
| Electric Berry Rebel | Medium | only in draft B | not found | 420 / 0 / 0 / 0 / 0 / 110 / 107 / 0 / 105 / 2 |
| Electric Berry Rebel | Small | only in draft B | not found | 260 / 0 / 0 / 0 / 0 / 75 / 66 / 0 / 65 / 1 |
| Hyperchrome Rebel | Large | only in draft B | not found | 570 / 0 / 0 / 0 / 0 / 140 / 147 / 0 / 144 / 2 |
| Hyperchrome Rebel | Medium | only in draft B | not found | 410 / 0 / 0 / 0 / 0 / 110 / 106 / 0 / 104 / 2 |
| Hyperchrome Rebel | Small | only in draft B | not found | 260 / 0 / 0 / 0 / 0 / 75 / 66 / 0 / 65 / 1 |
| Midnight Rebel | Large | only in draft B | not found | 560 / 0 / 0 / 0 / 0 / 140 / 141 / 0 / 139 / 2 |
| Midnight Rebel | Medium | only in draft B | not found | 410 / 0 / 0 / 0 / 0 / 110 / 103 / 0 / 101 / 2 |
| Midnight Rebel | Small | only in draft B | not found | 250 / 0 / 0 / 0 / 0 / 75 / 64 / 0 / 63 / 1 |
| OG Gummy Bear Rebel | Large | only in draft B | not found | 560 / 0 / 0 / 0 / 0 / 140 / 142 / 0 / 139 / 2 |
| OG Gummy Bear Rebel | Medium | only in draft B | not found | 410 / 0 / 0 / 0 / 0 / 110 / 104 / 0 / 101 / 2 |
| OG Gummy Bear Rebel | Small | only in draft B | not found | 250 / 0 / 0 / 0 / 0 / 75 / 65 / 0 / 63 / 1 |
| Palm Beach Rebel | Large | only in draft B | not found | 590 / 0 / 0 / 0 / 0 / 140 / 148 / 0 / 145 / 2 |
| Palm Beach Rebel | Medium | only in draft B | not found | 430 / 0 / 0 / 0 / 0 / 110 / 108 / 0 / 105 / 2 |
| Palm Beach Rebel | Small | only in draft B | not found | 260 / 0 / 0 / 0 / 0 / 75 / 67 / 0 / 65 / 1 |
| Peach Rebel | Large | only in draft B | not found | 620 / 0 / 0 / 0 / 0 / 140 / 156 / 0 / 151 / 2 |
| Peach Rebel | Medium | only in draft B | not found | 450 / 0 / 0 / 0 / 0 / 110 / 112 / 0 / 109 / 2 |
| Peach Rebel | Small | only in draft B | not found | 270 / 0 / 0 / 0 / 0 / 75 / 69 / 0 / 67 / 1 |
| Peach Ring Rebel | Large | only in draft B | not found | 710 / 1 / 0 / 0 / 0 / 260 / 176 / 0 / 168 / 4 |
| Peach Ring Rebel | Medium | only in draft B | not found | 540 / 0.5 / 0 / 0 / 0 / 190 / 134 / 0 / 128 / 3 |
| Peach Ring Rebel | Small | only in draft B | not found | 370 / 0 / 0 / 0 / 0 / 115 / 92 / 0 / 88 / 2 |
| Shark Attack Rebel | Large | only in draft B | not found | 660 / 0 / 0 / 0 / 0 / 140 / 168 / 0 / 165 / 2 |
| Shark Attack Rebel | Medium | only in draft B | not found | 500 / 0 / 0 / 0 / 0 / 110 / 126 / 0 / 125 / 2 |
| Shark Attack Rebel | Small | only in draft B | not found | 340 / 0 / 0 / 0 / 0 / 75 / 85 / 0 / 84 / 1 |
| Strawberry Rebel | Large | only in draft B | not found | 560 / 0 / 0 / 0 / 0 / 140 / 144 / 0 / 139 / 2 |
| Strawberry Rebel | Medium | only in draft B | not found | 410 / 0 / 0 / 0 / 0 / 110 / 105 / 0 / 101 / 2 |
| Strawberry Rebel | Small | only in draft B | not found | 250 / 0 / 0 / 0 / 0 / 75 / 65 / 0 / 63 / 1 |
| Watermelon Rebel | Large | only in draft B | not found | 560 / 0 / 0 / 0 / 0 / 140 / 144 / 0 / 142 / 2 |
| Watermelon Rebel | Medium | only in draft B | not found | 410 / 0 / 0 / 0 / 0 / 110 / 105 / 0 / 103 / 2 |
| Watermelon Rebel | Small | only in draft B | not found | 250 / 0 / 0 / 0 / 0 / 75 / 65 / 0 / 64 / 1 |
| Tigers Blood Rebel | Large | only in draft B | not found | 580 / 0 / 0 / 0 / 0 / 140 / 148 / 0 / 145 / 2 |
| Tigers Blood Rebel | Medium | only in draft B | not found | 420 / 0 / 0 / 0 / 0 / 110 / 108 / 0 / 105 / 2 |
| Tigers Blood Rebel | Small | only in draft B | not found | 260 / 0 / 0 / 0 / 0 / 75 / 67 / 0 / 65 / 1 |
| Vampire Slayer Rebel | Large | only in draft B | not found | 560 / 0 / 0 / 0 / 0 / 140 / 142 / 0 / 139 / 2 |
| Vampire Slayer Rebel | Medium | only in draft B | not found | 410 / 0 / 0 / 0 / 0 / 110 / 104 / 0 / 101 / 2 |
| Vampire Slayer Rebel | Small | only in draft B | not found | 250 / 0 / 0 / 0 / 0 / 75 / 65 / 0 / 63 / 1 |
| Zero Sugar Strawberry Rebel | Large | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 140 / 2 / 0 / 0 / 1 |
| Zero Sugar Strawberry Rebel | Medium | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 100 / 1 / 0 / 0 / 1 |
| Zero Sugar Strawberry Rebel | Small | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 70 / 1 / 0 / 0 / 1 |
| Zero Sugar Double Rainbro Rebel | Large | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 135 / 3 / 0 / 0 / 1 |
| Zero Sugar Double Rainbro Rebel | Medium | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 100 / 3 / 0 / 0 / 1 |
| Zero Sugar Double Rainbro Rebel | Small | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 70 / 2 / 0 / 0 / 1 |
| BLENDED FREEZE 9-1-1 | Blended, Large | only in draft B | not found | 820 / 22 / 15 / 0 / 90 / 330 / 133 / 1 / 124 / 22 |
| 9-1-1 | Blended, Medium | only in draft B | not found | 620 / 16 / 11 / 0 / 65 / 240 / 103 / 1 / 96 / 16 |
| 9-1-1 | Blended, Small | only in draft B | not found | 420 / 10 / 7 / 0 / 40 / 150 / 73 / 1 / 68 / 10 |
| Annihilator | Blended, Large | only in draft B | not found | 820 / 24 / 15 / 0 / 100 / 360 / 127 / 1 / 119 / 25 |
| Annihilator | Blended, Medium | only in draft B | not found | 630 / 17 / 11 / 0 / 75 / 270 / 100 / 1 / 94 / 19 |
| Annihilator | Blended, Small | only in draft B | not found | 440 / 11 / 7 / 0 / 50 / 170 / 73 / 1 / 68 / 12 |
| Caramelizer | Blended, Large | only in draft B | not found | 900 / 24 / 16 / 0 / 100 / 460 / 145 / 4 / 131 / 24 |
| Caramelizer | Blended, Medium | only in draft B | not found | 700 / 18 / 12 / 0 / 75 / 370 / 115 / 3 / 103 / 18 |
| Caramelizer | Blended, Small | only in draft B | not found | 500 / 12 / 8 / 0 / 50 / 280 / 85 / 2 / 75 / 12 |
| Cocomo | Blended, Large | only in draft B | not found | 840 / 24 / 15 / 0 / 105 / 400 / 129 / 1 / 123 / 26 |
| Cocomo | Blended, Medium | only in draft B | not found | 650 / 18 / 11 / 0 / 75 / 300 / 102 / 1 / 97 / 19 |
| Cocomo | Blended, Small | only in draft B | not found | 460 / 12 / 8 / 0 / 50 / 210 / 75 / 1 / 72 / 13 |
| Double Torture | Blended, Large | only in draft B | not found | 830 / 23 / 15 / 0 / 95 / 360 / 134 / 1 / 125 / 23 |
| Double Torture | Blended, Medium | only in draft B | not found | 630 / 17 / 11 / 0 / 70 / 270 / 104 / 1 / 97 / 17 |
| Double Torture | Blended, Small | only in draft B | not found | 430 / 11 / 7 / 0 / 45 / 180 / 74 / 1 / 69 / 11 |
| Golden Eagle | Blended, Large | only in draft B | not found | 900 / 23 / 15 / 0 / 95 / 430 / 148 / 4 / 138 / 23 |
| Golden Eagle | Blended, Medium | only in draft B | not found | 700 / 17 / 11 / 0 / 70 / 340 / 118 / 3 / 110 / 17 |
| Golden Eagle | Blended, Small | only in draft B | not found | 500 / 11 / 7 / 0 / 45 / 250 / 88 / 2 / 82 / 11 |
| Kicker | Blended, Large | only in draft B | not found | 820 / 24 / 15 / 0 / 100 / 360 / 128 / 1 / 121 / 25 |
| Kicker | Blended, Medium | only in draft B | not found | 630 / 17 / 11 / 0 / 75 / 270 / 101 / 1 / 96 / 19 |
| Kicker | Blended, Small | only in draft B | not found | 440 / 11 / 7 / 0 / 50 / 170 / 74 / 1 / 70 / 12 |
| Campin' Freeze | Blended, Large | only in draft B | not found | 1000 / 32 / 23 / 0 / 105 / 420 / 153 / 4 / 142 / 25 |
| Campin' Freeze | Blended, Medium | only in draft B | not found | 800 / 26 / 19 / 0 / 80 / 330 / 123 / 3 / 114 / 19 |
| Campin' Freeze | Blended, Small | only in draft B | not found | 600 / 20 / 15 / 0 / 55 / 240 / 93 / 2 / 86 / 13 |
| Mocha Freeze | Blended, Large | only in draft B | not found | 880 / 29 / 19 / 0 / 125 / 390 / 125 / 0 / 117 / 25 |
| Mocha Freeze | Blended, Medium | only in draft B | not found | 660 / 22 / 14 / 0 / 95 / 300 / 94 / 0 / 88 / 19 |
| Mocha Freeze | Blended, Small | only in draft B | not found | 460 / 16 / 10 / 0 / 70 / 210 / 64 / 0 / 60 / 13 |
| White Chocolate Mocha | Blended, Large | only in draft B | not found | 960 / 29 / 19 / 0 / 125 / 470 / 147 / 4 / 137 / 25 |
| White Chocolate Mocha | Blended, Medium | only in draft B | not found | 750 / 22 / 14 / 0 / 95 / 380 / 116 / 3 / 108 / 19 |
| White Chocolate Mocha | Blended, Small | only in draft B | not found | 530 / 15 / 9 / 0 / 60 / 290 / 85 / 2 / 79 / 13 |
| White Chocolate Lavender Freeze | Blended, Large | only in draft B | not found | 870 / 23 / 16 / 0 / 95 / 390 / 141 / 4 / 131 / 24 |
| White Chocolate Lavender Freeze | Blended, Medium | only in draft B | not found | 670 / 17 / 12 / 0 / 70 / 300 / 111 / 3 / 103 / 18 |
| White Chocolate Lavender Freeze | Blended, Small | only in draft B | not found | 470 / 11 / 8 / 0 / 45 / 210 / 81 / 2 / 75 / 12 |
| Picture Perfect Freeze | Blended, Large | only in draft B | not found | 950 / 24 / 16 / 0 / 100 / 430 / 156 / 4 / 142 / 24 |
| Picture Perfect Freeze | Blended, Medium | only in draft B | not found | 750 / 18 / 12 / 0 / 75 / 340 / 126 / 3 / 114 / 18 |
| Picture Perfect Freeze | Blended, Small | only in draft B | not found | 550 / 12 / 8 / 0 / 50 / 250 / 96 / 2 / 86 / 12 |
| Picture Perfect Freeze w/ Whip | Blended, Large | only in draft B | not found | 890 / 25 / 16 / 0 / 105 / 390 / 139 / 4 / 128 / 24 |
| Picture Perfect Freeze w/ Whip | Blended, Medium | only in draft B | not found | 680 / 19 / 12 / 0 / 80 / 300 / 108 / 3 / 99 / 18 |
| Picture Perfect Freeze w/ Whip | Blended, Small | only in draft B | not found | 480 / 13 / 8 / 0 / 55 / 210 / 78 / 2 / 71 / 12 |
| Birthday Cake Shake | Blended, Large | only in draft B | not found | 960 / 19 / 10 / 0 / 60 / 630 / 184 / 0 / 174 / 16 |
| Birthday Cake Shake | Blended, Medium | only in draft B | not found | 730 / 14 / 8 / 0 / 45 / 470 / 140 / 0 / 132 / 12 |
| Birthday Cake Shake | Blended, Small | only in draft B | not found | 520 / 11 / 6 / 0 / 35 / 320 / 97 / 0 / 91 / 8 |
| Birthday Cake Shake | Blended, Kids | only in draft B | not found | 330 / 8 / 4.5 / 0 / 30 / 180 / 58 / 0 / 54 / 5 |
| Cotton Candy Shake | Blended, Large | only in draft B | not found | 900 / 14 / 8 / 0 / 40 / 380 / 179 / 0 / 169 / 17 |
| Cotton Candy Shake | Blended, Medium | only in draft B | not found | 680 / 11 / 6 / 0 / 30 / 290 / 135 / 0 / 127 / 13 |
| Cotton Candy Shake | Blended, Small | only in draft B | not found | 450 / 7 / 4 / 0 / 20 / 190 / 90 / 0 / 84 / 9 |
| Cotton Candy Shake | Blended, Kids | only in draft B | not found | 270 / 4.5 / 2.5 / 0 / 15 / 115 / 52 / 0 / 49 / 6 |
| Ninja Shake | Blended, Large | only in draft B | not found | 900 / 14 / 8 / 0 / 40 / 380 / 179 / 0 / 169 / 17 |
| Ninja Shake | Blended, Medium | only in draft B | not found | 680 / 11 / 6 / 0 / 30 / 290 / 135 / 0 / 127 / 13 |
| Ninja Shake | Blended, Small | only in draft B | not found | 450 / 7 / 4 / 0 / 20 / 190 / 90 / 0 / 84 / 9 |
| Ninja Shake | Blended, Kids | only in draft B | not found | 270 / 4.5 / 2.5 / 0 / 15 / 115 / 52 / 0 / 49 / 6 |
| Strawberry Shake | Blended, Kids | only in draft B | not found | 250 / 4.5 / 2.5 / 0 / 15 / 75 / 47 / 0 / 44 / 5 |
| Strawberry Shake | Blended, Large | only in draft B | not found | 820 / 13 / 8 / 0 / 40 / 230 / 160 / 0 / 152 / 15 |
| Strawberry Shake | Blended, Medium | only in draft B | not found | 610 / 10 / 6 / 0 / 30 / 170 / 120 / 0 / 114 / 12 |
| Strawberry Shake | Blended, Small | only in draft B | not found | 410 / 7 / 4 / 0 / 20 / 115 / 80 / 0 / 76 / 8 |
| Chocolate Shake | Blended, Large | only in draft B | not found | 900 / 13 / 8 / 0 / 40 / 330 / 185 / 0 / 169 / 15 |
| Chocolate Shake | Blended, Medium | only in draft B | not found | 680 / 10 / 6 / 0 / 30 / 250 / 139 / 0 / 127 / 12 |
| Chocolate Shake | Blended, Small | only in draft B | not found | 450 / 7 / 4 / 0 / 20 / 170 / 92 / 0 / 85 / 8 |
| Chocolate Shake | Blended, Kids | only in draft B | not found | 270 / 4.5 / 2.5 / 0 / 15 / 100 / 53 / 0 / 49 / 5 |
| Vanilla Shake | Blended, Large | only in draft B | not found | 820 / 13 / 8 / 0 / 40 / 230 / 160 / 0 / 156 / 15 |
| Vanilla Shake | Blended, Medium | only in draft B | not found | 610 / 10 / 6 / 0 / 30 / 170 / 120 / 0 / 117 / 12 |
| Vanilla Shake | Blended, Small | only in draft B | not found | 410 / 7 / 4 / 0 / 20 / 115 / 80 / 0 / 78 / 8 |
| Vanilla Shake | Blended, Kids | only in draft B | not found | 250 / 4.5 / 2.5 / 0 / 15 / 75 / 47 / 0 / 45 / 5 |
| White Chocolate Shake | Blended, Kids | only in draft B | not found | 310 / 7 / 4 / 0 / 25 / 160 / 55 / 0 / 51 / 6 |
| White Chocolate Shake | Blended, Large | only in draft B | not found | 1010 / 20 / 11 / 0 / 65 / 560 / 188 / 0 / 174 / 20 |
| White Chocolate Shake | Blended, Medium | only in draft B | not found | 760 / 15 / 9 / 0 / 50 / 420 / 141 / 0 / 131 / 15 |
| White Chocolate Shake | Blended, Small | only in draft B | not found | 520 / 11 / 6 / 0 / 40 / 280 / 95 / 0 / 88 / 10 |
| Dragon Slayer Black Tea | Iced Large | only in draft B | not found | 350 / 0 / 0 / 0 / 0 / 15 / 87 / 0 / 87 / 0 |
| Dragon Slayer Black Tea | Iced Medium | only in draft B | not found | 260 / 0 / 0 / 0 / 0 / 15 / 64 / 0 / 64 / 0 |
| Dragon Slayer Black Tea | Iced Small | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 10 / 41 / 0 / 41 / 0 |
| Double Rainbro Black Tea | Iced Large | only in draft B | not found | 270 / 0 / 0 / 0 / 0 / 15 / 66 / 0 / 64 / 0 |
| Double Rainbro Black Tea | Iced Medium | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 10 / 44 / 0 / 42 / 0 |
| Double Rainbro Black Tea | Iced Small | only in draft B | not found | 90 / 0 / 0 / 0 / 0 / 10 / 22 / 0 / 21 / 0 |
| Double Rainbro Black Tea | Hot Large | only in draft B | not found | 90 / 0 / 0 / 0 / 0 / 20 / 22 / 0 / 21 / 0 |
| Double Rainbro Black Tea | Hot Medium | only in draft B | not found | 90 / 0 / 0 / 0 / 0 / 20 / 22 / 0 / 21 / 0 |
| Double Rainbro Black Tea | Hot Small | only in draft B | not found | 90 / 0 / 0 / 0 / 0 / 15 / 22 / 0 / 21 / 0 |
| Double Rainbro Green Tea | Iced Large | only in draft B | not found | 270 / 0 / 0 / 0 / 0 / 15 / 66 / 0 / 64 / 0 |
| Double Rainbro Green Tea | Iced Medium | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 10 / 44 / 0 / 42 / 0 |
| Double Rainbro Green Tea | Iced Small | only in draft B | not found | 90 / 0 / 0 / 0 / 0 / 10 / 22 / 0 / 21 / 0 |
| Double Rainbro Green Tea | Hot Large | only in draft B | not found | 90 / 0 / 0 / 0 / 0 / 20 / 22 / 0 / 21 / 0 |
| Double Rainbro Green Tea | Hot Medium | only in draft B | not found | 90 / 0 / 0 / 0 / 0 / 20 / 22 / 0 / 21 / 0 |
| Double Rainbro Green Tea | Hot Small | only in draft B | not found | 90 / 0 / 0 / 0 / 0 / 15 / 22 / 0 / 21 / 0 |
| Eclipse Black Tea | Iced Large | only in draft B | not found | 350 / 0 / 0 / 0 / 0 / 15 / 86 / 0 / 83 / 0 |
| Eclipse Black Tea | Iced Medium | only in draft B | not found | 260 / 0 / 0 / 0 / 0 / 15 / 64 / 0 / 62 / 0 |
| Eclipse Black Tea | Iced Small | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 10 / 42 / 0 / 41 / 0 |
| Marmalade Black Tea | Iced Large | only in draft B | not found | 250 / 0 / 0 / 0 / 0 / 20 / 62 / 0 / 61 / 0 |
| Marmalade Black Tea | Iced Medium | only in draft B | not found | 160 / 0 / 0 / 0 / 0 / 15 / 41 / 0 / 40 / 0 |
| Marmalade Black Tea | Iced Small | only in draft B | not found | 80 / 0 / 0 / 0 / 0 / 10 / 20 / 0 / 20 / 0 |
| Palm Beach Black Tea | Iced Large | only in draft B | not found | 270 / 0 / 0 / 0 / 0 / 15 / 64 / 0 / 62 / 0 |
| Palm Beach Black Tea | Iced Medium | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 10 / 42 / 0 / 41 / 0 |
| Palm Beach Black Tea | Iced Small | only in draft B | not found | 90 / 0 / 0 / 0 / 0 / 10 / 21 / 0 / 21 / 0 |
| Palm Beach Black Tea | Hot Large | only in draft B | not found | 90 / 0 / 0 / 0 / 0 / 20 / 21 / 0 / 21 / 0 |
| Palm Beach Black Tea | Hot Medium | only in draft B | not found | 90 / 0 / 0 / 0 / 0 / 20 / 21 / 0 / 21 / 0 |
| Palm Beach Green Tea | Iced Large | only in draft B | not found | 270 / 0 / 0 / 0 / 0 / 15 / 64 / 0 / 62 / 0 |
| Palm Beach Green Tea | Iced Medium | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 10 / 42 / 0 / 41 / 0 |
| Palm Beach Green Tea | Iced Small | only in draft B | not found | 90 / 0 / 0 / 0 / 0 / 10 / 21 / 0 / 21 / 0 |
| Palm Beach Green Tea | Hot Large | only in draft B | not found | 90 / 0 / 0 / 0 / 0 / 20 / 21 / 0 / 21 / 0 |
| Palm Beach Green Tea | Hot Medium | only in draft B | not found | 90 / 0 / 0 / 0 / 0 / 20 / 21 / 0 / 21 / 0 |
| Palm Beach Green Tea | Hot Small | only in draft B | not found | 90 / 0 / 0 / 0 / 0 / 15 / 21 / 0 / 21 / 0 |
| Passion Fruit Black Tea | Iced Large | only in draft B | not found | 240 / 0 / 0 / 0 / 0 / 15 / 59 / 0 / 56 / 0 |
| Passion Fruit Black Tea | Iced Medium | only in draft B | not found | 160 / 0 / 0 / 0 / 0 / 10 / 39 / 0 / 37 / 0 |
| Passion Fruit Black Tea | Iced Small | only in draft B | not found | 80 / 0 / 0 / 0 / 0 / 10 / 20 / 0 / 19 / 0 |
| Passion Fruit Black Tea | Hot Large | only in draft B | not found | 80 / 0 / 0 / 0 / 0 / 20 / 20 / 0 / 19 / 0 |
| Passion Fruit Black Tea | Hot Medium | only in draft B | not found | 80 / 0 / 0 / 0 / 0 / 20 / 20 / 0 / 19 / 0 |
| Passion Fruit Black Tea | Hot Small | only in draft B | not found | 80 / 0 / 0 / 0 / 0 / 15 / 20 / 0 / 19 / 0 |
| Passion Fruit Green Tea | Iced Large | only in draft B | not found | 240 / 0 / 0 / 0 / 0 / 15 / 59 / 0 / 56 / 0 |
| Passion Fruit Green Tea | Iced Medium | only in draft B | not found | 160 / 0 / 0 / 0 / 0 / 10 / 39 / 0 / 37 / 0 |
| Passion Fruit Green Tea | Iced Small | only in draft B | not found | 80 / 0 / 0 / 0 / 0 / 10 / 20 / 0 / 19 / 0 |
| Passion Fruit Green Tea | Hot Large | only in draft B | not found | 80 / 0 / 0 / 0 / 0 / 20 / 20 / 0 / 19 / 0 |
| Passion Fruit Green Tea | Hot Medium | only in draft B | not found | 80 / 0 / 0 / 0 / 0 / 20 / 20 / 0 / 19 / 0 |
| Passion Fruit Green Tea | Hot Small | only in draft B | not found | 80 / 0 / 0 / 0 / 0 / 15 / 20 / 0 / 19 / 0 |
| Peach Black Tea | Iced Large | only in draft B | not found | 300 / 0 / 0 / 0 / 0 / 15 / 71 / 0 / 68 / 0 |
| Peach Black Tea | Iced Medium | only in draft B | not found | 200 / 0 / 0 / 0 / 0 / 10 / 47 / 0 / 45 / 0 |
| Peach Black Tea | Iced Small | only in draft B | not found | 100 / 0 / 0 / 0 / 0 / 10 / 24 / 0 / 23 / 0 |
| Peach Black Tea | Hot Large | only in draft B | not found | 100 / 0 / 0 / 0 / 0 / 20 / 24 / 0 / 23 / 0 |
| Peach Black Tea | Hot Medium | only in draft B | not found | 100 / 0 / 0 / 0 / 0 / 20 / 24 / 0 / 23 / 0 |
| Peach Black Tea | Hot Small | only in draft B | not found | 100 / 0 / 0 / 0 / 0 / 15 / 24 / 0 / 23 / 0 |
| Peach Green Tea | Iced Large | only in draft B | not found | 300 / 0 / 0 / 0 / 0 / 15 / 71 / 0 / 68 / 0 |
| Peach Green Tea | Iced Medium | only in draft B | not found | 200 / 0 / 0 / 0 / 0 / 10 / 47 / 0 / 45 / 0 |
| Peach Green Tea | Iced Small | only in draft B | not found | 100 / 0 / 0 / 0 / 0 / 10 / 24 / 0 / 23 / 0 |
| Peach Green Tea | Hot Large | only in draft B | not found | 100 / 0 / 0 / 0 / 0 / 20 / 24 / 0 / 23 / 0 |
| Peach Green Tea | Hot Medium | only in draft B | not found | 100 / 0 / 0 / 0 / 0 / 20 / 24 / 0 / 23 / 0 |
| Peach Green Tea | Hot Small | only in draft B | not found | 100 / 0 / 0 / 0 / 0 / 15 / 24 / 0 / 23 / 0 |
| Strawberry Black Tea | Iced Large | only in draft B | not found | 240 / 0 / 0 / 0 / 0 / 15 / 59 / 0 / 56 / 0 |
| Strawberry Black Tea | Iced Medium | only in draft B | not found | 160 / 0 / 0 / 0 / 0 / 10 / 39 / 0 / 37 / 0 |
| Strawberry Black Tea | Iced Small | only in draft B | not found | 80 / 0 / 0 / 0 / 0 / 10 / 20 / 0 / 19 / 0 |
| Strawberry Black Tea | Hot Large | only in draft B | not found | 80 / 0 / 0 / 0 / 0 / 20 / 20 / 0 / 19 / 0 |
| Strawberry Black Tea | Hot Medium | only in draft B | not found | 80 / 0 / 0 / 0 / 0 / 20 / 20 / 0 / 19 / 0 |
| Strawberry Black Tea | Hot Small | only in draft B | not found | 80 / 0 / 0 / 0 / 0 / 15 / 20 / 0 / 19 / 0 |
| Strawberry Green Tea | Iced Large | only in draft B | not found | 240 / 0 / 0 / 0 / 0 / 15 / 59 / 0 / 56 / 0 |
| Strawberry Green Tea | Iced Medium | only in draft B | not found | 160 / 0 / 0 / 0 / 0 / 10 / 39 / 0 / 37 / 0 |
| Strawberry Green Tea | Iced Small | only in draft B | not found | 80 / 0 / 0 / 0 / 0 / 10 / 20 / 0 / 19 / 0 |
| Strawberry Green Tea | Hot Large | only in draft B | not found | 80 / 0 / 0 / 0 / 0 / 20 / 20 / 0 / 19 / 0 |
| Strawberry Green Tea | Hot Medium | only in draft B | not found | 80 / 0 / 0 / 0 / 0 / 20 / 20 / 0 / 19 / 0 |
| Strawberry Green Tea | Hot Small | only in draft B | not found | 80 / 0 / 0 / 0 / 0 / 20 / 20 / 0 / 19 / 0 |
| Sweet Tea | Iced Large | only in draft B | not found | 140 / 0 / 0 / 0 / 0 / 15 / 35 / 0 / 35 / 0 |
| Sweet Tea | Iced Medium | only in draft B | not found | 100 / 0 / 0 / 0 / 0 / 15 / 26 / 0 / 26 / 0 |
| Sweet Tea | Iced Small | only in draft B | not found | 70 / 0 / 0 / 0 / 0 / 10 / 17 / 0 / 17 / 0 |
| Tropical Black Tea | Iced Large | only in draft B | not found | 260 / 0 / 0 / 0 / 0 / 15 / 65 / 0 / 64 / 0 |
| Tropical Black Tea | Iced Medium | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 10 / 44 / 0 / 43 / 0 |
| Tropical Black Tea | Iced Small | only in draft B | not found | 80 / 0 / 0 / 0 / 0 / 10 / 21 / 0 / 21 / 0 |
| Tropical Black Tea | Hot Large | only in draft B | not found | 80 / 0 / 0 / 0 / 0 / 20 / 21 / 0 / 21 / 0 |
| Tropical Black Tea | Hot Medium | only in draft B | not found | 80 / 0 / 0 / 0 / 0 / 20 / 21 / 0 / 21 / 0 |
| Tropical Black Tea | Hot Small | only in draft B | not found | 80 / 0 / 0 / 0 / 0 / 15 / 21 / 0 / 21 / 0 |
| Tropical Green Tea | Iced Large | only in draft B | not found | 260 / 0 / 0 / 0 / 0 / 15 / 65 / 0 / 64 / 0 |
| Tropical Green Tea | Iced Medium | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 10 / 44 / 0 / 43 / 0 |
| Tropical Green Tea | Iced Small | only in draft B | not found | 80 / 0 / 0 / 0 / 0 / 10 / 21 / 0 / 21 / 0 |
| Tropical Green Tea | Hot Large | only in draft B | not found | 80 / 0 / 0 / 0 / 0 / 20 / 21 / 0 / 21 / 0 |
| Tropical Green Tea | Hot Medium | only in draft B | not found | 80 / 0 / 0 / 0 / 0 / 20 / 21 / 0 / 21 / 0 |
| Tropical Green Tea | Hot Small | only in draft B | not found | 80 / 0 / 0 / 0 / 0 / 15 / 21 / 0 / 21 / 0 |
| Electric Berry Black Tea | Iced Large | only in draft B | not found | 250 / 0 / 0 / 0 / 0 / 15 / 62 / 0 / 62 / 0 |
| Electric Berry Black Tea | Iced Medium | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 10 / 41 / 0 / 41 / 0 |
| Electric Berry Black Tea | Iced Small | only in draft B | not found | 80 / 0 / 0 / 0 / 0 / 10 / 21 / 0 / 21 / 0 |
| Electric Berry Black Tea | Hot Large | only in draft B | not found | 80 / 0 / 0 / 0 / 0 / 20 / 21 / 0 / 21 / 0 |
| Mango Smoothie | Large | only in draft B | not found | 720 / 1 / 0 / 0 / 0 / 30 / 177 / 0 / 170 / 1 |
| Mango Smoothie | Medium | only in draft B | not found | 540 / 1 / 0 / 0 / 0 / 20 / 133 / 0 / 128 / 0 |
| Mango Smoothie | Small | only in draft B | not found | 360 / 0.5 / 0 / 0 / 0 / 15 / 89 / 0 / 85 / 0 |
| Mango Smoothie | Kids | only in draft B | not found | 230 / 0 / 0 / 0 / 0 / 10 / 55 / 0 / 53 / 0 |
| Cherry Pie Chai | Hot Large | only in draft B | not found | 510 / 13 / 11 / 0 / 25 / 200 / 88 / 0 / 79 / 11 |
| Cherry Pie Chai | Hot Medium | only in draft B | not found | 440 / 12 / 10 / 0 / 20 / 160 / 75 / 0 / 66 / 9 |
| Cherry Pie Chai | Hot Small | only in draft B | not found | 370 / 11 / 9 / 0 / 15 / 125 / 62 / 0 / 53 / 6 |
| Cherry Pie Chai | Iced Large | only in draft B | not found | 480 / 12 / 10 / 0 / 25 / 180 / 81 / 0 / 72 / 10 |
| Cherry Pie Chai | Iced Medium | only in draft B | not found | 400 / 11 / 9 / 0 / 20 / 140 / 68 / 0 / 60 / 7 |
| Cherry Pie Chai | Iced Small | only in draft B | not found | 330 / 10 / 9 / 0 / 15 / 105 / 55 / 0 / 47 / 5 |
| Pumpkin Pie Spice Mocha | Hot Large | only in draft B | not found | 630 / 22 / 16 / 0 / 60 / 460 / 96 / 1 / 83 / 18 |
| Pumpkin Pie Spice Mocha | Hot Medium | only in draft B | not found | 560 / 19 / 15 / 0 / 50 / 400 / 86 / 0.5 / 75 / 15 |
| Pumpkin Pie Spice Mocha | Hot Small | only in draft B | not found | 440 / 15 / 12 / 0 / 35 / 280 / 70 / 0.5 / 59 / 10 |
| Pumpkin Pie Spice Mocha | Iced Large | only in draft B | not found | 570 / 19 / 15 / 0 / 50 / 400 / 88 / 1 / 75 / 16 |
| Pumpkin Pie Spice Mocha | Iced Small | only in draft B | not found | 380 / 12 / 10 / 0 / 25 / 230 / 62 / 0.5 / 51 / 8 |
| Pumpkin Pie Spice Mocha | Iced Medium | only in draft B | not found | 500 / 17 / 13 / 0 / 45 / 340 / 78 / 0.5 / 67 / 13 |
| Pumpkin Pie Spice Latte | Hot Large | only in draft B | not found | 460 / 15 / 11 / 0 / 35 / 330 / 67 / 1 / 55 / 19 |
| Pumpkin Pie Spice Latte | Hot Medium | only in draft B | not found | 420 / 14 / 11 / 0 / 30 / 290 / 62 / 0.5 / 51 / 16 |
| Pumpkin Pie Spice Latte | Hot Small | only in draft B | not found | 350 / 11 / 9 / 0 / 20 / 210 / 54 / 0.5 / 44 / 11 |
| Pumpkin Pie Spice Latte | Iced Large | only in draft B | not found | 430 / 14 / 11 / 0 / 30 / 290 / 63 / 1 / 51 / 17 |
| Pumpkin Pie Spice Latte | Iced Medium | only in draft B | not found | 380 / 12 / 10 / 0 / 25 / 250 / 58 / 0.5 / 48 / 14 |
| Pumpkin Pie Spice Latte | Iced Small | only in draft B | not found | 310 / 10 / 8 / 0 / 15 / 180 / 50 / 0.5 / 41 / 9 |
| Pumpkin Pie Spice Freeze | Blended Large | only in draft B | not found | 940 / 28 / 21 / 0 / 95 / 410 / 148 / 4 / 133 / 24 |
| Pumpkin Pie Spice Freeze | Blended Medium | only in draft B | not found | 740 / 22 / 17 / 0 / 70 / 320 / 118 / 3 / 105 / 18 |
| Pumpkin Pie Spice Freeze | Blended Small | only in draft B | not found | 540 / 16 / 13 / 0 / 45 / 230 / 88 / 2 / 77 / 12 |
| Pumpkin Pie Spice Breve | Hot Large | only in draft B | not found | 700 / 45 / 56 / 1 / 33 / 0 / 135 / 46 / 192 / 16 |
| Pumpkin Pie Spice Breve | Hot Medium | only in draft B | not found | 610 / 43 / 52 / 0.5 / 29 / 0 / 115 / 40 / 96 / 14 |
| Pumpkin Pie Spice Breve | Hot Small | only in draft B | not found | 470 / 39 / 48 / 0.5 / 20 / 0 / 75 / 28 / 96 / 10 |
| Pumpkin Pie Spice Breve | Iced Large | only in draft B | not found | 630 / 43 / 54 / 1 / 29 / 0 / 115 / 40 / 192 / 14 |
| Pumpkin Pie Spice Breve | Iced Medium | only in draft B | not found | 540 / 41 / 50 / 0.5 / 25 / 0 / 95 / 34 / 96 / 12 |
| Pumpkin Pie Spice Breve | Iced Small | only in draft B | not found | 400 / 37 / 46 / 0.5 / 16 / 0 / 55 / 22 / 96 / 7 |
| Pumpkin Pie Spice Cold Brew | Iced Large | only in draft B | not found | 310 / 13 / 10 / 0 / 25 / 180 / 46 / 0 / 39 / 5 |
| Pumpkin Pie Spice Cold Brew | Iced Medium | only in draft B | not found | 310 / 13 / 10 / 0 / 25 / 160 / 45 / 0 / 39 / 5 |
| Pumpkin Pie Spice Cold Brew | Iced Small | only in draft B | not found | 300 / 13 / 10 / 0 / 25 / 150 / 44 / 0 / 39 / 4 |
| Caramel Pumpkin Brûlée Breve | Hot Large | only in draft B | not found | 720 / 47 / 34 / 0 / 135 / 380 / 59 / 1 / 53 / 16 |
| Caramel Pumpkin Brûlée Breve | Hot Medium | only in draft B | not found | 640 / 41 / 30 / 0 / 115 / 340 / 56 / 1 / 51 / 13 |
| Caramel Pumpkin Brûlée Breve | Hot Small | only in draft B | not found | 500 / 29 / 22 / 0 / 75 / 260 / 52 / 1 / 47 / 9 |
| Caramel Pumpkin Brûlée Breve | Iced Large | only in draft B | not found | 580 / 35 / 26 / 0 / 95 / 300 / 55 / 1 / 49 / 12 |
| Caramel Pumpkin Brûlée Breve | Iced Medium | only in draft B | not found | 500 / 29 / 22 / 0 / 75 / 260 / 52 / 1 / 47 / 9 |
| Caramel Pumpkin Brûlée Breve | Iced Small | only in draft B | not found | 360 / 17 / 13 / 0 / 35 / 180 / 47 / 1 / 43 / 5 |
| Caramel Pumpkin Brulee Latte | Hot Large | only in draft B | not found | 490 / 16 / 12 / 0 / 40 / 360 / – / 1 / 63 / 19 |
| Caramel Pumpkin Brulee Latte | Hot Medium | only in draft B | not found | 440 / 15 / 12 / 0 / 35 / 330 / 64 / 1 / 59 / 16 |
| Caramel Pumpkin Brulee Latte | Hot Small | only in draft B | not found | 370 / 12 / 10 / 0 / 25 / 250 / 57 / 1 / 52 / 11 |
| Caramel Pumpkin Brulee Latte | Iced Large | only in draft B | not found | 450 / 15 / 12 / 0 / 35 / 330 / 66 / 1 / 59 / 16 |
| Caramel Pumpkin Brulee Latte | Iced Medium | only in draft B | not found | 410 / 14 / 11 / 0 / 30 / 290 / 60 / 1 / 55 / 13 |
| Caramel Pumpkin Brulee Latte | Iced Small | only in draft B | not found | 340 / 11 / 9 / 0 / 20 / 210 / 53 / 1 / 48 / 8 |
| Caramel Pumpkin Brûlée Chai | Hot Large | only in draft B | not found | 780 / 36 / 27 / 0 / 100 / 310 / 101 / 0 / 97 / 11 |
| Caramel Pumpkin Brûlée Chai | Hot Medium | only in draft B | not found | 670 / 30 / 22 / 0 / 80 / 270 / 89 / 0 / 84 / 9 |
| Caramel Pumpkin Brûlée Chai | Hot Small | only in draft B | not found | 550 / 24 / 18 / 0 / 60 / 230 / 76 / 0 / 72 / 7 |
| Caramel Pumpkin Brûlée Chai | Iced Large | only in draft B | not found | 670 / 30 / 22 / 0 / 80 / 270 / 89 / 0 / 84 / 9 |
| Caramel Pumpkin Brûlée Chai | Iced Medium | only in draft B | not found | 550 / 24 / 18 / 0 / 60 / 230 / 76 / 0 / 72 / 7 |
| Caramel Pumpkin Brûlée Chai | Iced Small | only in draft B | not found | 440 / 18 / 14 / 0 / 40 / 190 / 64 / 0 / 60 / 5 |
| Caramel Pumpkin Brûlée Freeze | Blended Large | only in draft B | not found | 970 / 29 / 22 / 0 / 95 / 450 / 152 / 0 / 141 / 23 |
| Caramel Pumpkin Brûlée Freeze | Blended Medium | only in draft B | not found | 770 / 23 / 18 / 0 / 70 / 360 / 122 / 0 / 113 / 17 |
| Caramel Pumpkin Brûlée Freeze | Blended Small | only in draft B | not found | 570 / 17 / 14 / 0 / 45 / 270 / 92 / 0 / 85 / 11 |
| Caramel Pumpkin Brûlée Shake | Blended Large | only in draft B | not found | 1050 / 21 / 15 / 0 / 45 / 580 / 201 / 0 / 190 / 18 |
| Caramel Pumpkin Brûlée Shake | Blended Medium | only in draft B | not found | 830 / 18 / 13 / 0 / 35 / 450 / 155 / 0 / 146 / 14 |
| Caramel Pumpkin Brûlée Shake | Blended Small | only in draft B | not found | 600 / 14 / 11 / 0 / 25 / 310 / 109 / 0 / 102 / 10 |
| Caramel Pumpkin Brûlée Cold Brew | Iced Large | only in draft B | not found | 330 / 14 / 11 / 0 / 25 / 210 / 48 / 0 / 42 / 4 |
| Caramel Pumpkin Brûlée Cold Brew | Iced Medium | only in draft B | not found | 320 / 14 / 11 / 0 / 25 / 190 / 47 / 0 / 42 / 4 |
| Caramel Pumpkin Brûlée Cold Brew | Iced Small | only in draft B | not found | 320 / 14 / 11 / 0 / 25 / 170 / 46 / 0 / 42 / 4 |
| Cookie Butter Latte | Hot Large | only in draft B | not found | 650 / 29 / 21 / 0 / 45 / 510 / 80 / 1 / 64 / 20 |
| Cookie Butter Latte | Hot Medium | only in draft B | not found | 600 / 28 / 20 / 0 / 40 / 480 / 75 / 0.5 / 60 / 16 |
| Cookie Butter Latte | Hot Small | only in draft B | not found | 530 / 25 / 18 / 0 / 30 / 400 / 67 / 0.5 / 53 / 11 |
| Cookie Butter Latte | Iced Large | only in draft B | not found | 610 / 28 / 20 / 0 / 40 / 480 / 76 / 1 / 60 / 17 |
| Cookie Butter Latte | Iced Medium | only in draft B | not found | 570 / 26 / 19 / 0 / 35 / 440 / 71 / 0.5 / 57 / 14 |
| Cookie Butter Latte | Iced Small | only in draft B | not found | 500 / 24 / 17 / 0 / 25 / 360 / 63 / 0.5 / 50 / 9 |
| Cookie Butter Protein Latte | Iced Large | only in draft B | not found | 660 / 27 / 20 / 0.5 / 50 / 430 / 72 / 1 / 57 / 32 |
| Cookie Butter Protein Latte | Iced Medium | only in draft B | not found | 600 / 26 / 19 / 0 / 40 / 400 / 67 / 0.5 / 54 / 26 |
| Cookie Butter Protein Latte | Iced Small | only in draft B | not found | 520 / 24 / 17 / 0 / 30 / 340 / 61 / 0.5 / 48 / 16 |
| Cookie Butter Freeze | Blended Large | only in draft B | not found | 1130 / 42 / 30 / 0 / 105 / 600 / 161 / 4 / 142 / 24 |
| Cookie Butter Freeze | Blended Medium | only in draft B | not found | 930 / 36 / 26 / 0 / 80 / 510 / 131 / 3 / 114 / 18 |
| Cookie Butter Freeze | Blended Small | only in draft B | not found | 730 / 30 / 22 / 0 / 55 / 420 / 101 / 2 / 86 / 12 |
| Cookie Butter Chai | Hot Large | only in draft B | not found | 710 / 26 / 19 / 0 / 35 / 430 / 108 / 0 / 94 / 13 |
| Cookie Butter Chai | Hot Medium | only in draft B | not found | 640 / 25 / 18 / 0 / 30 / 390 / 95 / 0 / 82 / 10 |
| Cookie Butter Chai | Hot Small | only in draft B | not found | 560 / 23 / 17 / 0 / 25 / 350 / 82 / 0 / 69 / 8 |
| Cookie Butter Chai | Iced Large | only in draft B | not found | 670 / 25 / 18 / 0 / 30 / 410 / 101 / 0 / 88 / 11 |
| Cookie Butter Chai | Iced Medium | only in draft B | not found | 600 / 24 / 18 / 0 / 25 / 370 / 88 / 0 / 75 / 9 |
| Cookie Butter Chai | Iced Small | only in draft B | not found | 530 / 23 / 17 / 0 / 20 / 340 / 75 / 0 / 63 / 6 |
| Cookie Butter Mocha | Hot Large | only in draft B | not found | 810 / 35 / 25 / 0 / 70 / 640 / 109 / 1 / 91 / 18 |
| Cookie Butter Mocha | Hot Medium | only in draft B | not found | 740 / 33 / 24 / 0 / 60 / 590 / 99 / 0.5 / 83 / 15 |
| Cookie Butter Mocha | Hot Small | only in draft B | not found | 620 / 29 / 21 / 0 / 45 / 470 / 83 / 0.5 / 68 / 10 |
| Cookie Butter Mocha | Iced Large | only in draft B | not found | 750 / 33 / 24 / 0 / 60 / 590 / 101 / 1 / 84 / 16 |
| Cookie Butter Mocha | Iced Medium | only in draft B | not found | 680 / 31 / 22 / 0 / 55 / 530 / 91 / 0.5 / 76 / 13 |
| Cookie Butter Mocha | Iced Small | only in draft B | not found | 560 / 26 / 19 / 0 / 35 / 410 / 75 / 0.5 / 60 / 8 |
| Autumn Berry Rebel | Blended Large | only in draft B | not found | 630 / 0 / 0 / 0 / 0 / 150 / 162 / 0 / 158 / 2 |
| Autumn Berry Rebel | Blended Medium | only in draft B | not found | 470 / 0 / 0 / 0 / 0 / 115 / 120 / 0 / 116 / 2 |
| Autumn Berry Rebel | Blended Small | only in draft B | not found | 300 / 0 / 0 / 0 / 0 / 80 / 78 / 0 / 76 / 1 |
| Autumn Berry Rebel | Iced Large | only in draft B | not found | 420 / 0 / 0 / 0 / 0 / 170 / 107 / 0 / 102 / 2 |
| Autumn Berry Rebel | Iced Medium | only in draft B | not found | 280 / 0 / 0 / 0 / 0 / 125 / 72 / 0 / 68 / 1 |
| Autumn Berry Rebel | Iced Small | only in draft B | not found | 240 / 0 / 0 / 0 / 0 / 90 / 60 / 0 / 57 / 0.5 |
| Autumn Berry Myst | Iced Large | only in draft B | not found | 200 / 0 / 0 / 0 / 0 / 5 / 49 / 0 / 44 / 0 |
| Autumn Berry Myst | Iced Medium | only in draft B | not found | 120 / 0 / 0 / 0 / 0 / 0 / 31 / 0 / 27 / 0 |
| Autumn Berry Myst | Iced Small | only in draft B | not found | 120 / 0 / 0 / 0 / 0 / 0 / 30 / 0 / 27 / 0 |
| Autumn Berry Fizz | Iced Large | only in draft B | not found | 390 / 0 / 0 / 0 / 0 / 20 / 99 / 0 / 97 / 0 |
| Autumn Berry Fizz | Iced Medium | only in draft B | not found | 310 / 0 / 0 / 0 / 0 / 15 / 77 / 0 / 75 / 0 |
| Autumn Berry Fizz | Iced Small | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 10 / 55 / 0 / 53 / 0 |
| Autumn Berry Fizz | Iced Kids | only in draft B | not found | 130 / 0 / 0 / 0 / 0 / 0 / 33 / 0 / 31 / 0 |
| Autumn Berry Lemonade | Blended Large | only in draft B | not found | 630 / 0 / 0 / 0 / 0 / 50 / 154 / 0 / 151 / 0 |
| Autumn Berry Lemonade | Blended Medium | only in draft B | not found | 500 / 0 / 0 / 0 / 0 / 40 / 122 / 0 / 119 / 0 |
| Autumn Berry Lemonade | Blended Small | only in draft B | not found | 360 / 0 / 0 / 0 / 0 / 25 / 89 / 0 / 87 / 0 |
| Autumn Berry Lemonade | Blended Kids | only in draft B | not found | 260 / 0 / 0 / 0 / 0 / 15 / 65 / 0 / 63 / 0 |
| Autumn Berry Lemonade | Iced Large | only in draft B | not found | 330 / 0 / 0 / 0 / 0 / 30 / 80 / 0 / 78 / 0 |
| Autumn Berry Lemonade | Iced Medium | only in draft B | not found | 270 / 0 / 0 / 0 / 0 / 20 / 67 / 0 / 65 / 0 |
| Autumn Berry Lemonade | Iced Small | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 15 / 55 / 0 / 53 / 0 |
| Autumn Berry Lemonade | Iced Kids | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 10 / 45 / 0 / 44 / 0 |
| Creepy Crawler Rebel | Iced Large | only in draft B | not found | 520 / 2.5 / 2.5 / 0 / 0 / 190 / 122 / 0 / 109 / 3 |
| Creepy Crawler Rebel | Iced Medium | only in draft B | not found | 390 / 2.5 / 2.5 / 0 / 0 / 150 / 88 / 0 / 76 / 3 |
| Creepy Crawler Rebel | Iced Small | only in draft B | not found | 340 / 2.5 / 2.5 / 0 / 0 / 110 / 77 / 0 / 66 / 2 |
| Creepy Crawler Rebel | Blended Large | only in draft B | not found | 720 / 2.5 / 2.5 / 0 / 0 / 170 / 175 / 0 / 163 / 4 |
| Creepy Crawler Rebel | Blended Medium | only in draft B | not found | 560 / 2.5 / 2.5 / 0 / 0 / 135 / 135 / 0 / 123 / 3 |
| Creepy Crawler Rebel | Blended Small | only in draft B | not found | 410 / 2.5 / 2.5 / 0 / 0 / 100 / 95 / 0 / 84 / 3 |
| Creepy Crawler Myst | Iced Large | only in draft B | not found | 300 / 2.5 / 2.5 / 0 / 0 / 25 / 65 / 0 / 52 / 1 |
| Creepy Crawler Myst | Iced Medium | only in draft B | not found | 230 / 2.5 / 2.5 / 0 / 0 / 25 / 48 / 0 / 36 / 1 |
| Creepy Crawler Myst | Iced Small | only in draft B | not found | 220 / 2.5 / 2.5 / 0 / 0 / 25 / 47 / 0 / 36 / 1 |
| Creepy Crawler Soda | Iced Large | only in draft B | not found | 480 / 2.5 / 2.5 / 0 / 0 / 35 / 111 / 0 / 100 / 1 |
| Creepy Crawler Soda | Iced Medium | only in draft B | not found | 400 / 2.5 / 2.5 / 0 / 0 / 30 / 91 / 0 / 80 / 1 |
| Creepy Crawler Soda | Iced Small | only in draft B | not found | 310 / 2.5 / 2.5 / 0 / 0 / 25 / 70 / 0 / 60 / 1 |
| Creepy Crawler Lemoande | Blended Large | only in draft B | not found | 740 / 3 / 3 / 0 / 0 / 70 / 171 / 0 / 159 / 2 |
| Creepy Crawler Lemoande | Blended Medium | only in draft B | not found | 600 / 3 / 3 / 0 / 0 / 60 / 138 / 0 / 127 / 1 |
| Creepy Crawler Lemoande | Blended Small | only in draft B | not found | 470 / 3 / 3 / 0 / 0 / 45 / 106 / 0 / 95 / 1 |
| Creepy Crawler Lemoande | Blended Kids | only in draft B | not found | 370 / 2.5 / 0 / 0 / 0 / 35 / 82 / 0 / 71 / 1 |
| Creepy Crawler Lemoande | Iced Large | only in draft B | not found | 430 / 3 / 3 / 0 / 0 / 50 / 97 / 0 / 86 / 1 |

## Spot check (15 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Strawberry Soda | Iced Small | 160 / 0 / 0 / 0 / 0 / 0 / 39 / 0 / 37 / 0 |
| White Chocolate Cocoa | Hot, Kids | 410 / 13 / 8 / 0 / 50 / 330 / 66 / 0 / 60 / 11 |
| Peach Lemonade | Iced Large | 310 / 0 / 0 / 0 / 0 / 30 / 74 / 0 / 71 / 0 |
| Banana Bread Chocolate Milk | Iced Medium | 410 / 12 / 8 / 0 / 50 / 320 / 65 / 0 / 61 / 12 |
| Creepy Crawler Rebel w/ Sour Shot | Iced, Medium | 460 / 2.5 / 2.5 / 0 / 0 / 160 / 101 / 0 / 89 / 3 |
| Strawberry Lavender Lemonade | Iced Small | 180 / 0 / 0 / 0 / 0 / 15 / 45 / 0 / 43 / 0 |
| Horchata Chai | Hot, Large | 470 / 6 / 3.5 / 0 / 25 / 230 / 90 / 0 / 86 / 12 |
| Strawberry Horchata Chai | Iced, Large | 390 / 5 / 3 / 0 / 20 / 180 / 75 / 0 / 72 / 10 |
| Vanilla Chai | Iced, Medium | 350 / 7 / 4 / 0 / 30 / 105 / 63 / 0 / 62 / 7 |
| Cold Brew | Iced, Large | 20 / 0 / 0 / 0 / 0 / 70 / 4 / 0 / 0 / 1 |
| White Chocolate Chai | Hot, Small | 320 / 4 / 2.5 / 0 / 15 / 180 / 65 / 0 / 61 / 8 |
| Horchata Chai | Hot, Small | 320 / 3.5 / 2 / 0 / 15 / 160 / 62 / 0 / 59 / 7 |
| Passion Watermelon Myst | Iced, Small | 80 / 0 / 0 / 0 / 0 / 0 / 22 / 0 / 17 / 0 |
| Creepy Crawler Rebel w/ Sour Shot | Iced, Small | 410 / 2.5 / 2.5 / 0 / 0 / 120 / 90 / 0 / 78 / 2 |
| Blue Raspberry Soda | Iced Small | 180 / 0 / 0 / 0 / 0 / 0 / 45 / 0 / 45 / 0 |
