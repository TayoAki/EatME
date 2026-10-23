# Biggby Coffee: lines for a person

Guide: https://biggby.com/wp-content/uploads/2026/02/BIGGBY_Nutrition_February_2026.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (113)

Fix each line in `menus/biggby-coffee.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B |
| --- | --- | --- | --- | --- |
| Rainbow Rooibos Tea Latte, Hot | 20oz | differ: calories, fat_g, saturated_fat_g, cholesterol_mg, sodium_mg, carbs_g, sugars_g, protein_g | 300 / 8 / 5 / 0 / 35 / 190 / 43 / 0 / 43 / 13 | 360 / 9 / 6 / 0 / 40 / 230 / 52 / 0 / 52 / 16 |
| Rainbow Rooibos Tea Latte, Hot | 24oz | differ: calories, fat_g, saturated_fat_g, cholesterol_mg, sodium_mg, carbs_g, sugars_g, protein_g | 360 / 9 / 6 / 0 / 40 / 230 / 52 / 0 / 52 / 16 | 160 / 3.5 / 2.5 / 0 / 15 / 95 / 26 / 0 / 26 / 6 |
| Rainbow Rooibos Tea Latte, Iced | 16oz | differ: calories, fat_g, saturated_fat_g, cholesterol_mg, sodium_mg, carbs_g, sugars_g, protein_g | 160 / 3.5 / 2.5 / 0 / 15 / 95 / 26 / 0 / 26 / 6 | 210 / 4.5 / 3 / 0 / 20 / 120 / 35 / 0 / 35 / 8 |
| Rainbow Rooibos Tea Latte, Iced | 20oz | differ: calories, fat_g, saturated_fat_g, sodium_mg, carbs_g, sugars_g, protein_g | 210 / 4.5 / 3 / 0 / 20 / 120 / 35 / 0 / 35 / 8 | 250 / 5 / 3.5 / 0 / 20 / 140 / 42 / 0 / 42 / 9 |
| Rainbow Rooibos Tea Latte, Iced | 24oz | only in draft A | 250 / 5 / 3.5 / 0 / 20 / 140 / 42 / 0 / 42 / 9 | not found |
| Tropic Biggby Blast® | Iced, 24oz | only in draft A | 240 / 0 / 0 / 0 / 0 / 40 / 58 / 1 / 50 / 0 | not found |
| Frozen Lemonade | 20oz | differ: calories, fat_g, saturated_fat_g, sodium_mg, carbs_g, sugars_g, protein_g | 420 / 5 / 5 / 0 / 0 / 200 / 90 / 0 / 76 / 2 | 510 / 6 / 6 / 0 / 0 / 240 / 111 / 0 / 94 / 3 |
| Frozen Lemonade | 24oz | differ: calories, fat_g, saturated_fat_g, sodium_mg, carbs_g, sugars_g, protein_g | 510 / 6 / 6 / 0 / 0 / 240 / 111 / 0 / 94 / 3 | 150 / 0 / 0 / 0 / 0 / 15 / 38 / 0 / 37 / 0 |
| Lemonade | 24oz | differ: calories, sugars_g | 150 / 0 / 0 / 0 / 0 / 15 / 38 / 0 / 37 / 0 | 140 / 0 / 0 / 0 / 0 / 15 / 38 / 0 / 36 / 0 |
| HALAL Beef Sausage, Egg, & Cheese Bragel® | 1 serving | both read numbers that can't be right: saturated and trans fat above fat | 610 / 26 / 52 / 0 / 175 / 1110 / 62 / 2 / 6 / 28 | 610 / 26 / 52 / 0 / 175 / 1110 / 62 / 2 / 6 / 28 |
| Black Bear Latte, Frozen | 16oz | only in draft B | not found | 500 / 14 / 10 / 0 / 30 / 240 / 90 / 1 / 75 / 2 |
| Black Bear Latte, Frozen | 20oz | only in draft B | not found | 570 / 15 / 12 / 0 / 35 / 280 / 103 / 1 / 85 / 3 |
| Black Bear Latte, Frozen | 24oz | only in draft B | not found | 710 / 18 / 14 / 0 / 40 / 360 / 133 / 1 / 111 / 4 |
| Black Bear Latte, Hot | 16oz | only in draft B | not found | 380 / 11 / 7 / 0 / 35 / 240 / 64 / 1 / 57 / 8 |
| Black Bear Latte, Hot | 20oz | only in draft B | not found | 440 / 12 / 8 / 0 / 40 / 290 / 77 / 1 / 68 / 10 |
| Black Bear Latte, Hot | 24oz | only in draft B | not found | 520 / 14 / 9 / 0 / 50 / 340 / 90 / 1 / 80 / 12 |
| Black Bear Latte, Iced | 16oz | only in draft B | not found | 400 / 13 / 9 / 0 / 45 / 220 / 64 / 1 / 57 / 7 |
| Black Bear Latte, Iced | 20oz | only in draft B | not found | 490 / 16 / 10 / 0 / 55 / 280 / 79 / 1 / 70 / 10 |
| Black Bear Latte, Iced | 24oz | only in draft B | not found | 560 / 18 / 12 / 0 / 60 / 330 / 91 / 1 / 81 / 11 |
| Mint Mocha Latte, Frozen | 16oz | only in draft B | not found | 480 / 13 / 10 / 0 / 30 / 190 / 86 / 1 / 75 / 3 |
| Mint Mocha Latte, Frozen | 20oz | only in draft B | not found | 550 / 15 / 11 / 0 / 30 / 230 / 99 / 1 / 85 / 3 |
| Mint Mocha Latte, Frozen | 24oz | only in draft B | not found | 700 / 17 / 13 / 0 / 35 / 280 / 129 / 2 / 112 / 4 |
| Mint Mocha Latte, Hot | 16oz | only in draft B | not found | 360 / 10 / 6 / 0 / 35 / 160 / 60 / 1 / 58 / 9 |
| Mint Mocha Latte, Hot | 20oz | only in draft B | not found | 430 / 11 / 7 / 0 / 40 / 190 / 72 / 2 / 70 / 10 |
| Mint Mocha Latte, Hot | 24oz | only in draft B | not found | 500 / 13 / 8 / 0 / 45 / 230 / 85 / 2 / 82 / 12 |
| Mint Mocha Latte, Iced | 16oz | only in draft B | not found | 390 / 12 / 8 / 0 / 45 / 140 / 60 / 1 / 58 / 7 |
| Mint Mocha Latte, Iced | 20oz | only in draft B | not found | 470 / 15 / 10 / 0 / 50 / 190 / 74 / 2 / 72 / 10 |
| Mint Mocha Latte, Iced | 24oz | only in draft B | not found | 550 / 17 / 11 / 0 / 60 / 210 / 86 / 2 / 83 / 11 |
| Mocha Caramel Latte, Frozen | 16oz | only in draft B | not found | 500 / 14 / 11 / 0 / 30 / 240 / 91 / 1 / 74 / 3 |
| Mocha Caramel Latte, Frozen | 20oz | only in draft B | not found | 570 / 15 / 12 / 0 / 35 / 270 / 104 / 1 / 85 / 3 |
| Mocha Caramel Latte, Frozen | 24oz | only in draft B | not found | 710 / 18 / 14 / 0 / 40 / 350 / 131 / 1 / 107 / 4 |
| Mocha Caramel Latte, Hot | 16oz | only in draft B | not found | 370 / 11 / 7 / 0 / 35 / 220 / 62 / 1 / 54 / 8 |
| Mocha Caramel Latte, Hot | 20oz | only in draft B | not found | 450 / 12 / 8 / 0 / 45 / 280 / 79 / 1 / 68 / 10 |
| Mocha Caramel Latte, Hot | 24oz | only in draft B | not found | 550 / 15 / 9 / 0 / 50 / 340 / 96 / 1 / 82 / 12 |
| Mocha Caramel Latte, Iced | 16oz | only in draft B | not found | 400 / 14 / 9 / 0 / 45 / 200 / 62 / 1 / 54 / 7 |
| Mocha Caramel Latte, Iced | 20oz | only in draft B | not found | 500 / 16 / 11 / 0 / 55 / 280 / 81 / 1 / 70 / 10 |
| Mocha Caramel Latte, Iced | 24oz | only in draft B | not found | 590 / 18 / 12 / 0 / 65 / 330 / 97 / 1 / 83 / 11 |
| Avalanche Latte, Frozen | 16oz | only in draft B | not found | 500 / 13 / 10 / 0 / 30 / 210 / 88 / 1 / 74 / 3 |
| Avalanche Latte, Frozen | 20oz | only in draft B | not found | 560 / 15 / 11 / 0 / 30 / 250 / 101 / 1 / 85 / 3 |
| Avalanche Latte, Frozen | 24oz | only in draft B | not found | 700 / 17 / 13 / 0 / 35 / 320 / 128 / 1 / 107 / 4 |
| Avalanche Latte, Hot | 16oz | only in draft B | not found | 370 / 10 / 6 / 0 / 35 / 190 / 62 / 1 / 56 / 9 |
| Avalanche Latte, Hot | 20oz | only in draft B | not found | 440 / 11 / 7 / 0 / 40 / 230 / 74 / 1 / 68 / 11 |
| Avalanche Latte, Hot | 24oz | only in draft B | not found | 520 / 13 / 8 / 0 / 45 / 270 / 87 / 1 / 79 / 13 |
| Avalanche Latte, Iced | 16oz | only in draft B | not found | 400 / 12 / 8 / 0 / 45 / 170 / 62 / 1 / 56 / 7 |
| Avalanche Latte, Iced | 20oz | only in draft B | not found | 710 / 15 / 10 / 0 / 50 / 310 / 133 / 3 / 123 / 12 |
| Avalanche Latte, Iced | 24oz | only in draft B | not found | 560 / 17 / 11 / 0 / 60 / 260 / 88 / 1 / 80 / 12 |
| German Mocha Latte, Frozen | 16oz | only in draft B | not found | 550 / 14 / 11 / 0 / 30 / 240 / 102 / 1 / 86 / 3 |
| German Mocha Latte, Frozen | 20oz | only in draft B | not found | 620 / 15 / 12 / 0 / 35 / 270 / 115 / 1 / 97 / 3 |
| German Mocha Latte, Frozen | 24oz | only in draft B | not found | 780 / 18 / 14 / 0 / 40 / 350 / 149 / 1 / 125 / 4 |
| German Mocha Latte, Hot | 16oz | only in draft B | not found | 360 / 10 / 7 / 0 / 35 / 180 / 59 / 0 / 54 / 8 |
| German Mocha Latte, Hot | 20oz | only in draft B | not found | 440 / 11 / 7 / 0 / 40 / 220 / 74 / 1 / 68 / 10 |
| German Mocha Latte, Hot | 24oz | only in draft B | not found | 520 / 14 / 9 / 0 / 50 / 260 / 90 / 1 / 83 / 12 |
| German Mocha Latte, Iced | 16oz | only in draft B | not found | 380 / 13 / 9 / 0 / 45 / 160 / 59 / 0 / 54 / 6 |
| German Mocha Latte, Iced | 20oz | only in draft B | not found | 480 / 15 / 10 / 0 / 55 / 220 / 76 / 1 / 70 / 9 |
| German Mocha Latte, Iced | 24oz | only in draft B | not found | 570 / 17 / 11 / 0 / 60 / 250 / 91 / 1 / 84 / 10 |
| Spotted Owl Latte, Frozen | 16oz | only in draft B | not found | 480 / 13 / 10 / 0 / 30 / 220 / 85 / 0 / 71 / 3 |
| Spotted Owl Latte, Frozen | 20oz | only in draft B | not found | 550 / 14 / 11 / 0 / 30 / 260 / 98 / 0 / 81 / 3 |
| Spotted Owl Latte, Frozen | 24oz | only in draft B | not found | 680 / 17 / 13 / 0 / 35 / 330 / 124 / 0 / 103 / 4 |
| Spotted Owl Latte, Hot | 16oz | only in draft B | not found | 350 / 9 / 6 / 0 / 35 / 200 / 55 / 0 / 50 / 9 |
| Spotted Owl Latte, Hot | 20oz | only in draft B | not found | 420 / 10 / 7 / 0 / 40 / 260 / 70 / 0 / 63 / 11 |
| Spotted Owl Latte, Hot | 24oz | only in draft B | not found | 510 / 12 / 8 / 0 / 45 / 300 / 85 / 0 / 76 / 13 |
| Spotted Owl Latte, Iced | 16oz | only in draft B | not found | 370 / 12 / 8 / 0 / 45 / 180 / 55 / 0 / 50 / 7 |
| Spotted Owl Latte, Iced | 20oz | only in draft B | not found | 470 / 14 / 9 / 0 / 50 / 250 / 72 / 0 / 65 / 10 |
| Spotted Owl Latte, Iced | 24oz | only in draft B | not found | 550 / 16 / 10 / 0 / 60 / 290 / 86 / 0 / 78 / 11 |
| Golden Honey Latte, Frozen | 16oz | only in draft B | not found | 340 / 4 / 4 / 0 / 0 / 160 / 74 / 0 / 64 / 2 |
| Golden Honey Latte, Frozen | 20oz | only in draft B | not found | 460 / 5 / 5 / 0 / 0 / 200 / 100 / 0 / 81 / 2 |
| Golden Honey Latte, Frozen | 24oz | only in draft B | not found | 600 / 6 / 6 / 0 / 0 / 240 / 131 / 0 / 107 / 3 |
| Golden Honey Latte, Hot | 16oz | only in draft B | not found | 250 / 6 / 3.5 / 0 / 25 / 135 / 41 / 0 / 37 / 9 |
| Golden Honey Latte, Hot | 20oz | only in draft B | not found | 330 / 7 / 4.5 / 0 / 30 / 180 / 54 / 0 / 48 / 12 |
| Golden Honey Latte, Hot | 24oz | only in draft B | not found | 400 / 8 / 5 / 0 / 35 / 200 / 66 / 0 / 59 / 14 |
| Golden Honey Latte, Iced | 16oz | only in draft B | not found | 230 / 4.5 / 3 / 0 / 20 / 115 / 39 / 0 / 34 / 8 |
| Golden Honey Latte, Iced | 20oz | only in draft B | not found | 300 / 6 / 4 / 0 / 25 / 150 / 51 / 0 / 45 / 10 |
| Golden Honey Latte, Iced | 24oz | only in draft B | not found | 360 / 7 / 4.5 / 0 / 30 / 170 / 63 / 0 / 55 / 12 |
| Honey Cinnamon Vanilla Latte, Frozen | 16oz | only in draft B | not found | 350 / 4.5 / 4 / 0 / 0 / 160 / 77 / 0 / 66 / 2 |
| Honey Cinnamon Vanilla Latte, Frozen | 20oz | only in draft B | not found | 410 / 5 / 5 / 0 / 0 / 190 / 89 / 0 / 76 / 2 |
| Honey Cinnamon Vanilla Latte, Frozen | 24oz | only in draft B | not found | 530 / 6 / 6 / 0 / 0 / 230 / 115 / 0 / 99 / 3 |
| Honey Cinnamon Vanilla Latte, Hot | 16oz | only in draft B | not found | 220 / 6 / 3.5 / 0 / 25 / 135 / 33 / 0 / 33 / 9 |
| Honey Cinnamon Vanilla Latte, Hot | 20oz | only in draft B | not found | 280 / 7 / 4.5 / 0 / 30 / 170 / 44 / 0 / 43 / 12 |
| Honey Cinnamon Vanilla Latte, Hot | 24oz | only in draft B | not found | 340 / 8 / 5 / 0 / 35 / 200 / 53 / 0 / 52 / 14 |
| Honey Cinnamon Vanilla Latte, Iced | 16oz | only in draft B | not found | 190 / 4.5 / 3 / 0 / 20 / 115 / 31 / 0 / 30 / 8 |
| Honey Cinnamon Vanilla Latte, Iced | 20oz | only in draft B | not found | 250 / 6 / 4 / 0 / 25 / 150 / 41 / 0 / 40 / 10 |
| Honey Cinnamon Vanilla Latte, Iced | 24oz | only in draft B | not found | 300 / 7 / 4.5 / 0 / 30 / 170 / 49 / 0 / 48 / 12 |
| Black Forest Latte, Frozen | 16oz | only in draft B | not found | 500 / 14 / 10 / 0 / 30 / 220 / 90 / 1 / 75 / 2 |
| Black Forest Latte, Frozen | 20oz | only in draft B | not found | 570 / 15 / 12 / 0 / 35 / 260 / 103 / 1 / 85 / 3 |
| Black Forest Latte, Frozen | 24oz | only in draft B | not found | 710 / 18 / 14 / 0 / 40 / 330 / 133 / 1 / 110 / 4 |
| Black Forest Latte, Hot | 16oz | only in draft B | not found | 380 / 11 / 7 / 0 / 35 / 210 / 64 / 1 / 57 / 8 |
| Black Forest Latte, Hot | 20oz | only in draft B | not found | 440 / 12 / 8 / 0 / 40 / 250 / 77 / 1 / 68 / 10 |
| Black Forest Latte, Hot | 24oz | only in draft B | not found | 520 / 14 / 9 / 0 / 50 / 290 / 89 / 1 / 79 / 12 |
| Black Forest Latte, Iced | 16oz | only in draft B | not found | 400 / 13 / 9 / 0 / 45 / 190 / 64 / 1 / 57 / 7 |
| Black Forest Latte, Iced | 20oz | only in draft B | not found | 490 / 16 / 10 / 0 / 55 / 250 / 78 / 1 / 70 / 10 |
| Black Forest Latte, Iced | 24oz | only in draft B | not found | 560 / 18 / 12 / 0 / 60 / 280 / 91 / 1 / 81 / 11 |
| Cinnabuzz Latte, Frozen | 16oz | only in draft B | not found | 490 / 13 / 10 / 0 / 30 / 250 / 86 / 0 / 71 / 3 |
| Cinnabuzz Latte, Frozen | 20oz | only in draft B | not found | 560 / 14 / 11 / 0 / 30 / 280 / 99 / 0 / 81 / 3 |
| Cinnabuzz Latte, Frozen | 24oz | only in draft B | not found | 700 / 17 / 13 / 0 / 35 / 370 / 129 / 0 / 105 / 5 |
| Cinnabuzz Latte, Hot | 16oz | only in draft B | not found | 370 / 9 / 6 / 0 / 35 / 250 / 60 / 0 / 51 / 9 |
| Cinnabuzz Latte, Hot | 20oz | only in draft B | not found | 440 / 10 / 7 / 0 / 40 / 300 / 73 / 0 / 62 / 11 |
| Cinnabuzz Latte, Hot | 24oz | only in draft B | not found | 510 / 12 / 8 / 0 / 45 / 350 / 85 / 0 / 73 / 13 |
| Cinnabuzz Latte, Iced | 16oz | only in draft B | not found | 390 / 12 / 8 / 0 / 45 / 230 / 60 / 0 / 51 / 7 |
| Cinnabuzz Latte, Iced | 20oz | only in draft B | not found | 480 / 14 / 9 / 0 / 50 / 300 / 75 / 0 / 64 / 11 |
| Cinnabuzz Latte, Iced | 24oz | only in draft B | not found | 560 / 16 / 11 / 0 / 60 / 340 / 87 / 0 / 74 / 12 |
| Coconut Creme Latte, Frozen | 16oz | only in draft B | not found | 350 / 4.5 / 4 / 0 / 0 / 160 / 75 / 0 / 65 / 2 |
| Coconut Creme Latte, Frozen | 20oz | only in draft B | not found | 410 / 5 / 5 / 0 / 0 / 200 / 88 / 0 / 75 / 2 |
| Coconut Creme Latte, Frozen | 24oz | only in draft B | not found | 520 / 6 / 6 / 0 / 0 / 240 / 112 / 0 / 97 / 3 |
| Coconut Creme Latte, Hot | 16oz | only in draft B | not found | 220 / 6 / 3.5 / 0 / 25 / 135 / 32 / 0 / 32 / 9 |
| Coconut Creme Latte, Hot | 20oz | only in draft B | not found | 280 / 7 / 4.5 / 0 / 30 / 180 / 42 / 0 / 42 / 12 |
| Coconut Creme Latte, Hot | 24oz | only in draft B | not found | 330 / 8 / 5 / 0 / 35 / 200 / 51 / 0 / 51 / 14 |
| Coconut Creme Latte, Iced | 16oz | only in draft B | not found | 190 / 4.5 / 3 / 0 / 20 / 115 / 29 / 0 / 29 / 8 |
| Coconut Creme Latte, Iced | 20oz | only in draft B | not found | 250 / 6 / 4 / 0 / 25 / 150 / 39 / 0 / 39 / 10 |
| Coconut Creme Latte, Iced | 24oz | only in draft B | not found | 300 / 7 / 4.5 / 0 / 30 / 170 / 47 / 0 / 47 / 11 |
| Firefly Latte, Frozen | 16oz | only in draft B | not found | 490 / 13 / 10 / 0 / 30 / 210 / 86 / 0 / 71 / 3 |
| Firefly Latte, Frozen | 20oz | only in draft B | not found | 550 / 15 / 11 / 0 / 30 / 250 / 99 / 0 / 82 / 3 |
| Firefly Latte, Frozen | 24oz | only in draft B | not found | 690 / 17 / 13 / 0 / 35 / 300 / 125 / 0 / 104 / 4 |
| Tropic Biggby Blast®, Iced | 24oz | only in draft B | not found | 240 / 0 / 0 / 0 / 0 / 45 / 58 / 1 / 50 / 0 |

## Spot check (15 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Snow Bear Latte | Iced, 24oz | 550 / 16 / 11 / 0 / 60 / 300 / 84 / 0 / 73 / 12 |
| Chai Tea Latte, Hot | 24oz | 380 / 9 / 6 / 0 / 35 / 220 / 60 / 0 / 49 / 15 |
| Nutty Buddy Latte | Frozen, 24oz | 510 / 6 / 6 / 0 / 0 / 250 / 109 / 0 / 94 / 3 |
| Chai Charger Latte, Frozen | 24oz | 470 / 6 / 6 / 0 / 0 / 230 / 99 / 0 / 77 / 3 |
| Mocha Mocha Latte, Hot | 20oz | 430 / 11 / 7 / 0 / 40 / 210 / 73 / 2 / 70 / 11 |
| Island Bear Latte, Hot | 16oz | 360 / 11 / 7 / 0 / 40 / 200 / 59 / 0 / 51 / 8 |
| Purple Haze Latte | Frozen, 16oz | 560 / 16 / 12 / 0 / 35 / 280 / 102 / 0 / 81 / 3 |
| Sweet Foam Red Velvet Cold Brew | 20oz | 430 / 17 / 16 / 0 / 10 / 250 / 67 / 1 / 64 / 3 |
| Vanilla Bean Latte, Hot, Sugar-Free Syrup | 16oz | 150 / 6 / 3.5 / 0 / 25 / 140 / 18 / 0 / 14 / 9 |
| Blackberry Bolt Red Bull® Mocktail | Iced, 20oz | 280 / 0 / 0 / 0 / 0 / 85 / 70 / 0 / 68 / 1 |
| Purple Haze Latte | Iced, 20oz | 570 / 19 / 12 / 0 / 65 / 330 / 91 / 0 / 75 / 10 |
| Red Bull® Energy Drink | 1 serving | 110 / 0 / 0 / 0 / 0 / 70 / 28 / 0 / 27 / 1 |
| Mocha Mocha Latte, Iced | 16oz | 380 / 13 / 8 / 0 / 45 / 150 / 58 / 2 / 55 / 7 |
| Sweet Foam Black Forest Cold Brew | 24oz | 500 / 19 / 17 / 0 / 15 / 220 / 84 / 1 / 70 / 2 |
| Island Bear Latte, Iced | 20oz | 480 / 16 / 10 / 0 / 55 / 240 / 77 / 0 / 67 / 9 |
