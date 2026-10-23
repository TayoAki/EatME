# Cook Out: lines for a person

Guide: https://cookout.com/wp-content/uploads/Cook-Out-Nutrition1.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (102)

Fix each line in `menus/cook-out.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B |
| --- | --- | --- | --- | --- |
| Coca-Cola® | Huge 32 oz (907.2 g) | only in draft B | not found | 280 / 0 / 0 / 0 / 0 / 0 / 78 / 0 / 78 / 0 |
| Coca-Cola® | Large 24 oz (680.4 g) | only in draft B | not found | 210 / 0 / 0 / 0 / 0 / 0 / 59 / 0 / 59 / 0 |
| Coca-Cola® | Regular 16 oz (453.6 g) | only in draft B | not found | 140 / 0 / 0 / 0 / 0 / 0 / 39 / 0 / 39 / 0 |
| Coca-Cola® | Small 12 oz (340.19 g) | only in draft B | not found | 105 / 0 / 0 / 0 / 0 / 0 / 29 / 0 / 29 / 0 |
| Diet Coke® | Huge 32 oz (907.2 g) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 20 / 0 / 0 / 0 / 0 |
| Diet Coke® | Large 24 oz (680.4 g) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 15 / 0 / 0 / 0 / 0 |
| Diet Coke® | Regular 16 oz (453.6 g) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 10 / 0 / 0 / 0 / 0 |
| Diet Coke® | Small 12 oz (340.19 g) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 8 / 0 / 0 / 0 / 0 |
| Coca-Cola® Zero | Huge 32 oz (907.2 g) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 16 / 0 / 0 / 0 / 0 |
| Coca-Cola® Zero | Large 24 oz (680.4 g) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 12 / 0 / 0 / 0 / 0 |
| Coca-Cola® Zero | Regular 16 oz (453.6 g) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 8 / 0 / 0 / 0 / 0 |
| Coca-Cola® Zero | Small 12 oz (340.19 g) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 6 / 0 / 0 / 0 / 0 |
| Sprite® | Huge 32 oz (907.2 g) | only in draft B | not found | 289 / 0 / 0 / 0 / 0 / 65 / 65 / 0 / 65 / 0 |
| Sprite® | Large 24 oz (680.4 g) | only in draft B | not found | 222 / 0 / 0 / 0 / 0 / 50 / 50 / 0 / 50 / 0 |
| Sprite® | Regular 16 oz (453.6 g) | only in draft B | not found | 139 / 0 / 0 / 0 / 0 / 31 / 31 / 0 / 31 / 0 |
| Sprite® | Small 12 oz (340.19 g) | only in draft B | not found | 104 / 0 / 0 / 0 / 0 / 23 / 23 / 0 / 23 / 0 |
| Pibb® Xtra | Huge 32 oz (907.2 g) | only in draft B | not found | 290 / 0 / 0 / 0 / 0 / 45 / 79 / 0 / 79 / 0 |
| Pibb® Xtra | Large 24 oz (680.4 g) | only in draft B | not found | 218 / 0 / 0 / 0 / 0 / 34 / 59 / 0 / 59 / 0 |
| Pibb® Xtra | Regular 16 oz (453.6 g) | only in draft B | not found | 145 / 0 / 0 / 0 / 0 / 23 / 40 / 0 / 40 / 0 |
| Pibb® Xtra | Small 12 oz (340.19 g) | only in draft B | not found | 109 / 0 / 0 / 0 / 0 / 17 / 30 / 0 / 30 / 0 |
| Mellow Yellow | Huge 32 oz (907.2 g) | only in draft B | not found | 288 / 0 / 0 / 0 / 0 / 32 / 77 / 0 / 77 / 0 |
| Mellow Yellow | Large 24 oz (680.4 g) | only in draft B | not found | 209 / 0 / 0 / 0 / 0 / 23 / 56 / 0 / 56 / 0 |
| Mellow Yellow | Regular 16 oz (453.6 g) | only in draft B | not found | 144 / 0 / 0 / 0 / 0 / 16 / 38 / 0 / 38 / 0 |
| Mellow Yellow | Small 12 oz (340.19 g) | only in draft B | not found | 108 / 0 / 0 / 0 / 0 / 12 / 29 / 0 / 29 / 0 |
| Fanta Orange® | Huge 32 oz (907.2 g) | only in draft B | not found | 302 / 0 / 0 / 0 / 0 / 86 / 89 / 0 / 88 / 0 |
| Fanta Orange® | Large 24 oz (680.4 g) | only in draft B | not found | 227 / 0 / 0 / 0 / 0 / 65 / 67 / 0 / 66 / 0 |
| Fanta Orange® | Regular 16 oz (453.6 g) | only in draft B | not found | 151 / 0 / 0 / 0 / 0 / 43 / 45 / 0 / 44 / 0 |
| Fanta Orange® | Small 12 oz (340.19 g) | only in draft B | not found | 113 / 0 / 0 / 0 / 0 / 32 / 33 / 0 / 33 / 0 |
| Hi-C® Poppin' Pink Lemonade | Huge 32 oz (907.2 g) | only in draft B | not found | 280 / 0 / 0 / 0 / 0 / 130 / 73 / 0 / 73 / 0 |
| Hi-C® Poppin' Pink Lemonade | Large 24 oz (680.4 g) | only in draft B | not found | 210 / 0 / 0 / 0 / 0 / 98 / 55 / 0 / 55 / 0 |
| Hi-C® Poppin' Pink Lemonade | Regular 16 oz (453.6 g) | only in draft B | not found | 140 / 0 / 0 / 0 / 0 / 65 / 37 / 0 / 37 / 0 |
| Hi-C® Poppin' Pink Lemonade | Small 12 oz (340.19 g) | only in draft B | not found | 105 / 0 / 0 / 0 / 0 / 49 / 27 / 0 / 27 / 0 |
| Hi-C® Fruit Punch | Huge 32 oz (907.2 g) | only in draft B | not found | 317 / 0 / 0 / 0 / 0 / 108 / 89 / 0 / 88 / 0 |
| Hi-C® Fruit Punch | Large 24 oz (680.4 g) | only in draft B | not found | 238 / 0 / 0 / 0 / 0 / 81 / 67 / 0 / 66 / 0 |
| Hi-C® Fruit Punch | Regular 16 oz (453.6 g) | only in draft B | not found | 158 / 0 / 0 / 0 / 0 / 54 / 45 / 0 / 44 / 0 |
| Hi-C® Fruit Punch | Small 12 oz (340.19 g) | only in draft B | not found | 119 / 0 / 0 / 0 / 0 / 41 / 33 / 0 / 33 / 0 |
| Fresh Brewed Sweet Tea | Huge 32 oz (907.2 g) | only in draft B | not found | 330 / 0 / 0 / 0 / 0 / 2 / 148 / 0 / 148 / 0 |
| Fresh Brewed Sweet Tea | Large 24 oz (680.4 g) | only in draft B | not found | 248 / 0 / 0 / 0 / 0 / 1 / 111 / 0 / 111 / 0 |
| Fresh Brewed Sweet Tea | Regular 16 oz (453.6 g) | only in draft B | not found | 236 / 0 / 0 / 0 / 0 / 1 / 74 / 0 / 74 / 0 |
| Fresh Brewed Sweet Tea | Small 12 oz (340.19 g) | only in draft B | not found | 177 / 0 / 0 / 0 / 0 / 1 / 56 / 0 / 55 / 0 |
| Fresh Brewed Tea | Huge 32 oz (907.2 g) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 2 / 0 / 0 / 0 / 0 |
| Fresh Brewed Tea | Large 24 oz (680.4 g) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 1 / 0 / 0 / 0 / 0 |
| Fresh Brewed Tea | Regular 16 oz (453.6 g) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 1 / 0 / 0 / 0 / 0 |
| Fresh Brewed Tea | Small 12 oz (340.19 g) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 1 / 0 / 0 / 0 / 0 |
| Dr. Pepper® | Huge 32 oz (907.2 g) | only in draft B | not found | 280 / 0 / 0 / 0 / 0 / 90 / 74 / 0 / 70 / 0 |
| Dr. Pepper® | Large 24 oz (680.4 g) | only in draft B | not found | 210 / 0 / 0 / 0 / 0 / 68 / 56 / 0 / 53 / 0 |
| Dr. Pepper® | Regular 16 oz (453.6 g) | only in draft B | not found | 140 / 0 / 0 / 0 / 0 / 45 / 37 / 0 / 35 / 0 |
| Dr. Pepper® | Small 12 oz (340.19 g) | only in draft B | not found | 105 / 0 / 0 / 0 / 0 / 34 / 28 / 0 / 26 / 0 |
| Cheerwine® | Huge 32 oz (907.2 g) | only in draft B | not found | 288 / 0 / 0 / 0 / 0 / 49 / 81 / 0 / 81 / 0 |
| Cheerwine® | Large 24 oz (680.4 g) | only in draft B | not found | 216 / 0 / 0 / 0 / 0 / 37 / 60 / 0 / 60 / 0 |
| Cheerwine® | Regular 16 oz (453.6 g) | only in draft B | not found | 144 / 0 / 0 / 0 / 0 / 24 / 40 / 0 / 40 / 0 |
| Cheerwine® | Small 12 oz (340.19 g) | only in draft B | not found | 108 / 0 / 0 / 0 / 0 / 18 / 30 / 0 / 30 / 0 |
| Powerade® Mountain Blast | Huge 32 oz (907.2 g) | only in draft B | not found | 149 / 0 / 0 / 0 / 0 / 149 / 40.5 / 0 / 41 / 0 |
| Powerade® Mountain Blast | Large 24 oz (680.4 g) | only in draft B | not found | 109 / 0 / 0 / 0 / 0 / 109 / 29.5 / 0 / 29 / 0 |
| Powerade® Mountain Blast | Regular 16 oz (453.6 g) | only in draft B | not found | 74.7 / 0 / 0 / 0 / 0 / 74.7 / 20.3 / 0 / 20 / 0 |
| Powerade® Mountain Blast | Small 12 oz (340.19 g) | only in draft B | not found | 56 / 0 / 0 / 0 / 0 / 56 / 15.2 / 0 / 15 / 0 |
| Coke® Float | 16 oz (453.59 g) | only in draft B | not found | 399 / 11 / 7 / 0 / 37 / 293 / 69 / 0 / 67 / 10 |
| Cheerwine® Float | 16 oz (453.59 g) | only in draft B | not found | 401 / 11 / 7 / 0 / 37 / 303 / 69 / 0 / 67 / 10 |
| Vanilla | 32.9 oz (934g) | only in draft B | not found | 555 / 18 / 11 / 0 / 59 / 469 / 86 / 0 / 83 / 16 |
| Hershey's® Chocolate | 32.9 oz (934g) | only in draft B | not found | 620 / 18 / 11 / 0 / 59 / 484 / 110 / 0 / 103 / 16 |
| Strawberry | 32.8 oz (929.6 g) | only in draft B | not found | 610 / 17 / 10 / 0 / 55 / 455 / 105 / 0 / 99 / 15 |
| Fresh Banana | 30.9 oz (876.3 g) | only in draft B | not found | 538 / 16 / 9 / 0 / 51 / 412 / 89 / 2 / 80 / 15 |
| Banana Berry | 33.6 oz (952.8 g) | only in draft B | not found | 671 / 16 / 9 / 0 / 51 / 440 / 123 / 3 / 111 / 15 |
| Banana Nut | 32.1 oz (907.8 g) | only in draft B | not found | 704 / 27 / 11 / 0 / 51 / 412 / 103 / 3 / 92 / 15 |
| Banana Fudge | 33.5 oz (950.3 g) | only in draft B | not found | 772 / 24 / 16 / 0 / 51 / 470 / 130 / 2 / 111 / 17 |
| Banana Pineapple | 32 oz (907.3 g) | only in draft B | not found | 566 / 16 / 9 / 0 / 51 / 412 / 96 / 2 / 86 / 15 |
| Banana Pudding | 34.7 oz (928.3 g) | only in draft B | not found | 781 / 26 / 12 / 0 / 141 / 611 / 126 / 2 / 99 / 16 |
| Blueberry | 32.9 oz (933.6 g) | only in draft B | not found | 617 / 17 / 10 / 0 / 55 / 464 / 107 / 0 / 101 / 15 |
| Chocolate Cherry | 32.3 oz (914.6 g) | only in draft B | not found | 665 / 17 / 10 / 0 / 55 / 472 / 123 / 2 / 116 / 15 |
| Red Cherry | 32.3 oz (916.6 g) | only in draft B | not found | 600 / 17 / 10 / 0 / 55 / 457 / 99 / 2 / 96 / 15 |
| Fresh Peanut Butter | 32.8 oz (930.6 g) | only in draft B | not found | 847 / 45 / 15 / 0 / 55 / 698 / 91 / 3 / 83 / 27 |
| Peanut Butter Banana | 32.8 oz (931.3 g) | only in draft B | not found | 864 / 43 / 14 / 0 / 51 / 669 / 99 / 5 / 85 / 27 |
| Peanut Butter Fudge | 33.2 oz (940.6 g) | only in draft B | not found | 765 / 34 / 15 / 0 / 51 / 569 / 101 / 2 / 91 / 21 |
| Cappuccino | 31.9 oz (904 g) | only in draft B | not found | 555 / 18 / 11 / 0 / 59 / 469 / 86 / 0 / 83 / 16 |
| Caramel Fudge | 32.8 oz (928.6 g) | only in draft B | not found | 677 / 21 / 13 / 0 / 55 / 509 / 111 / 0 / 102 / 16 |
| Caramel | 33.51 oz (950 g) | only in draft B | not found | 560 / 17 / 10 / 0 / 55 / 480 / 91 / 0 / 87 / 15 |
| Pineapple | 33 oz (937.6 g) | only in draft B | not found | 575 / 17 / 10 / 0 / 55 / 440 / 94 / 1 / 91 / 16 |
| Snickers® | 32.4 oz (917.6 g) | only in draft B | not found | 720 / 27 / 14 / 0 / 65 / 540 / 107 / 0 / 100 / 19 |
| Hi-C Punch® | 31.9 oz (904 g) | only in draft B | not found | 598 / 17 / 10 / 0 / 55 / 447 / 102 / 0 / 99 / 15 |
| Walnut | 33.1 oz (938.6 g) | only in draft B | not found | 853 / 40 / 13 / 0 / 55 / 440 / 109 / 4 / 103 / 15 |
| Oreo® | 33 oz (935.6 g) | only in draft B | not found | 802 / 29 / 14 / 0 / 55 / 678 / 125 / 2 / 103 / 17 |
| M&M® | 32.6 oz (924.6 g) | only in draft B | not found | 755 / 27 / 16 / 0 / 65 / 469 / 114 / 2 / 107 / 17 |
| Oreo® Mint | 33 oz (935.6 g) | only in draft B | not found | 853 / 29 / 14 / 0 / 55 / 678 / 138 / 2 / 115 / 17 |
| Peach | 32.7 oz (925.6 g) | only in draft B | not found | 547 / 17 / 10 / 0 / 55 / 442 / 91 / 0 / 86 / 15 |
| Chocolate Chip | 34.46 oz (977 g) | only in draft B | not found | 783 / 32 / 20 / 0 / 64 / 472 / 107 / 4 / 103 / 18 |
| Chocolate Chip Mint | 35 oz (993 g) | only in draft B | not found | 834 / 32 / 20 / 0 / 64 / 472 / 120 / 4 / 115 / 18 |
| Chocolate Nut | 33.4 oz (946.1 g) | only in draft B | not found | 752 / 28 / 11 / 0 / 55 / 455 / 119 / 2 / 110 / 15 |
| Mocha | 35.32 oz (1001.4 g) | only in draft B | not found | 620 / 18 / 11 / 0 / 59 / 484 / 110 / 0 / 103 / 16 |
| Peach Cobbler | 34.5 (977.6 g) | only in draft B | not found | 790 / 27 / 13 / 0 / 145 / 641 / 127 / 0 / 105 / 17 |
| Reese's® Cup | 33.4 oz (947.6 g) | only in draft B | not found | 894 / 37 / 19 / 0 / 55 / 699 / 121 / 3 / 115 / 24 |
| Orange Push Up | 33.95 oz (962.4 g) | only in draft B | not found | 638 / 18 / 11 / 0 / 59 / 469 / 109 / 0 / 106 / 16 |
| Cherry Cobbler | 34.2 oz (968.6 g) | only in draft B | not found | 842 / 27 / 13 / 0 / 145 / 656 / 135 / 2 / 115 / 17 |
| Chocolate Malt | 34.7 oz (985 g) | only in draft B | not found | 671 / 19 / 11 / 0 / 62 / 541 / 119 / 0 / 109 / 17 |
| Heath® Toffee | 32.1 oz (909.6 g) | only in draft B | not found | 701 / 28 / 16 / 0 / 66 / 565 / 101 / 0 / 98 / 15 |
| Cherry Cheesecake | 34 oz (964.3 g) | only in draft B | not found | 925 / 42 / 23 / 1 / 171 / 698 / 119 / 2 / 115 / 21 |
| Double Chocolate | 33.6 oz (953.6 g) | only in draft B | not found | 651 / 17 / 10 / 0 / 55 / 470 / 129 / 0 / 118 / 15 |
| Fresh Watermelon | 35 oz (992.3 g) | only in draft B | not found | 645 / 16 / 9 / 0 / 51 / 413 / 89 / 1 / 84 / 15 |
| Philadelphia® Cheesecake | 32.6 oz (923.3 g) | only in draft B | not found | 845 / 42 / 23 / 1 / 171 / 681 / 101 / 0 / 97 / 21 |
| Nilla® Wafers | 32.7 oz (927.6 g) | only in draft B | not found | 763 / 27 / 13 / 0 / 145 / 639 / 117 / 0 / 97 / 17 |
| Mint | 33.5 oz (950 g) | only in draft B | not found | 605 / 18 / 11 / 0 / 59 / 469 / 99 / 0 / 96 / 16 |
| Malted Milk | 33.4 oz (946 g) | only in draft B | not found | 606 / 19 / 11 / 0 / 62 / 526 / 95 / 0 / 89 / 17 |
| Fudge | 33.5 oz (949.6 g) | only in draft B | not found | 754 / 25 / 17 / 0 / 55 / 498 / 122 / 0 / 109 / 17 |

## Spot check (3 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Spicy Chicken Breast | 5.61 oz (159 g) | 446 / 18 / 3 / 0 / 39 / 1158 / 45 / 2 / 5 / 21 |
| BLT Sandwich | 4.3 oz (123 g) | 392 / 25 / 7 / 0 / 37 / 1054 / 29 / 0 / 5 / 15 |
| Cook Out® Style | 4.5 oz (126.8 g) | 123 / 5 / 1 / 0 / 9 / 518 / 7 / 1 / 4 / 3 |
