# What to order: accuracy pilot

Run 2026-10-23 with `npm run menus:pilot` (WHAT-TO-ORDER.md §11). 465 dishes from 15 chains, each read the
way a menu photo shows it (name, size and section; never the chain's name) through the menu pipeline: the AI's foods and
restaurant portions, priced from the USDA database. Compared with each chain's own published calories (only numbers two
drafts or a person agreed on). Error = (our estimate − published) ÷ published.

## Pass lines

| Check | Result | Pass line | Passed |
| --- | --- | --- | --- |
| Median calorie error (after the correction) | 20% | 20% or less | no |
| Fits well: our top five and the published top five share | median 20% (41 days compared) | at least 3 of 5 (60%) | no |
| Big plates (published 800 kcal or more): median error after the correction | −10% (55 dishes) | no underestimate beyond 10% | yes |

Safety, not a pass line: of the 202 dishes we put in Fits well, 89% fit the day by the chain's own
numbers too; 0% are too big by them (they'd leave less than a small meal for each meal still to come)
and 10% too small to be a meal.

## Errors

| | Dishes | Median error (bias) | Median size of the error | 80% of errors within |
| --- | --- | --- | --- | --- |
| Priced from our database, before the correction | 465 | 3% | 20% | 48% |
| Priced, after the correction (×1) | 465 | 3% | 20% | 48% |
| The AI's own quick estimate | 465 | 27% | 31% | 6% |
| Mains, priced and corrected | 345 | 11% | 23% | 50% |
| Sides, priced and corrected | 41 | −9% | 27% | 47% |
| Drinks, priced and corrected | 44 | 0% | 31% | 82% |
| Desserts, priced and corrected | 35 | 23% | 28% | 56% |

Database match: 100% of a dish's calories came from USDA foods (median).

## Calibration (copy into `ESTIMATE_CALIBRATION`)

Ranges hold the published number about 80% of the time (10% outside on each side); a kind with fewer than 15 dishes
uses the overall widths.

```ts
correction: 1,
estimate: {"main":{"below":0.46,"above":0.36},"side":{"below":0.41,"above":0.61},"drink":{"below":0.6,"above":1},"dessert":{"below":0.48,"above":0.34}},
quick: {"main":{"below":0.44,"above":0.31},"side":{"below":0.29,"above":0.6},"drink":{"below":0.3,"above":0.22},"dessert":{"below":0.49,"above":0.23}},
```

## Fits well, published against ours

| Chain | Day (aim) | Shared of the top five |
| Arby's | 500 kcal | 0 of 5 |
| Arby's | 750 kcal | 1 of 5 |
| Arby's | 1000 kcal | 3 of 5 |
| Chick-fil-A | 500 kcal | 0 of 5 |
| Chick-fil-A | 750 kcal | 1 of 5 |
| Chick-fil-A | 1000 kcal | 1 of 5 |
| Dairy Queen | 500 kcal | 1 of 5 |
| Dairy Queen | 750 kcal | 1 of 5 |
| Dairy Queen | 1000 kcal | 1 of 5 |
| Domino's | 500 kcal | 2 of 5 |
| Domino's | 750 kcal | 2 of 5 |
| Domino's | 1000 kcal | 1 of 5 |
| Dunkin' | 500 kcal | 1 of 5 |
| Dunkin' | 750 kcal | 2 of 5 |
| Dunkin' | 1000 kcal | 1 of 5 |
| Little Caesars | 500 kcal | 0 of 0 |
| Little Caesars | 750 kcal | 4 of 4 |
| Little Caesars | 1000 kcal | 4 of 4 |
| McDonald's | 500 kcal | 1 of 5 |
| McDonald's | 750 kcal | 0 of 5 |
| McDonald's | 1000 kcal | 2 of 5 |
| Olive Garden | 500 kcal | 2 of 4 |
| Olive Garden | 750 kcal | 3 of 5 |
| Olive Garden | 1000 kcal | 4 of 5 |
| Panda Express | 500 kcal | 1 of 5 |
| Panda Express | 750 kcal | 0 of 5 |
| Panda Express | 1000 kcal | 0 of 5 |
| Panera Bread | 500 kcal | 1 of 5 |
| Panera Bread | 750 kcal | 2 of 5 |
| Panera Bread | 1000 kcal | 2 of 5 |
| Papa Johns | 500 kcal | 1 of 5 |
| Papa Johns | 750 kcal | 4 of 5 |
| Papa Johns | 1000 kcal | 5 of 5 |
| Starbucks | 500 kcal | 4 of 5 |
| Starbucks | 750 kcal | 4 of 5 |
| Starbucks | 1000 kcal | 3 of 5 |
| Subway | 500 kcal | 2 of 5 |
| Subway | 750 kcal | 3 of 5 |
| Subway | 1000 kcal | 4 of 5 |
| Whataburger | 500 kcal | 1 of 5 |
| Whataburger | 750 kcal | 1 of 5 |
| Whataburger | 1000 kcal | 1 of 5 |
| Wingstop | 500 kcal | 0 of 0 |
| Wingstop | 750 kcal | 0 of 0 |
| Wingstop | 1000 kcal | 0 of 0 |

## Every dish

| Chain | Dish | Published | Ours (corrected) | Error | Quick |
| Arby's | Classic Shirley Temple — Small (202 g) | 120 | 113 | −6% | 90 |
| Arby's | Peach Cobbler Roll — 1 ct (53 g) | 170 | 212 | 25% | 220 |
| Arby's | Bacon & Cheese Croissant | 330 | 494 | 50% | 480 |
| Arby's | Bacon Biscuit | 340 | 436 | 28% | 435 |
| Arby's | Classic Roast Beef | 360 | 537 | 49% | 540 |
| Arby's | Chicken Biscuit | 390 | 521 | 34% | 520 |
| Arby's | Bacon, Egg & Cheese Wrap | 410 | 505 | 23% | 510 |
| Arby's | Bacon, Egg & Cheese Croissant | 430 | 582 | 35% | 555 |
| Arby's | Classic Beef 'n Cheddar | 450 | 482 | 7% | 520 |
| Arby's | Bacon, Egg & Cheese Sourdough | 470 | 526 | 12% | 525 |
| Arby's | Sausage Gravy Biscuit | 480 | 531 | 11% | 470 |
| Arby's | Double Roast Beef | 510 | 753 | 48% | 750 |
| Arby's | Roast Beef Gyro | 540 | 501 | −7% | 495 |
| Arby's | Sausage, Egg & Cheese Croissant | 580 | 639 | 10% | 600 |
| Arby's | Double Beef 'n Cheddar | 630 | 698 | 11% | 730 |
| Arby's | Sausage, Egg & Cheese Biscuit | 630 | 649 | 3% | 620 |
| Arby's | Chicken Cheesesteak | 660 | 734 | 11% | 730 |
| Arby's | Steak 'n Mac Bowl | 680 | 841 | 24% | 710 |
| Arby's | Angus Cheesesteak Deluxe | 700 | 795 | 14% | 820 |
| Arby's | Ham & Swiss Sandwich | 730 | 564 | −23% | 570 |
| Arby's | Spicy Chicken Cheesesteak Deluxe | 770 | 896 | 16% | 1050 |
| Arby's | Turkey Ranch & Bacon Sandwich | 800 | 699 | −13% | 725 |
| Arby's | Sausage Gravy Biscuit-Double | 960 | 953 | −1% | 800 |
| Arby's | Angus Cheesesteak Half Pound — Half Pound | 1110 | 1028 | −7% | 1115 |
| Arby's | Spicy Chicken Cheesesteak Deluxe Half Pound — Half Pound | 1260 | 1135 | −10% | 1290 |
| Arby's | Jalapeno Bites® — 5 ct (110 g) | 290 | 265 | −9% | 300 |
| Arby's | Crinkle Fries — Medium (139 g) | 390 | 275 | −29% | 430 |
| Arby's | Curly Fries — Medium (128 g) | 410 | 288 | −30% | 410 |
| Arby's | Brewed Unsweet Tea — Small | 0 | 4 | Infinity% | 0 |
| Arby's | POWERADE® Mountain Berry Blast® — Small | 70 | 227 | 224% | 80 |
| Arby's | Hi-C® Flashin' Fruit Punch® — Small | 130 | 36 | −72% | 150 |
| Arby's | Mello Yello® — Small | 140 | 114 | −19% | 170 |
| Arby's | Fanta® Orange® — Large | 270 | 304 | 13% | 290 |
| Arby's | Brewed Sweet Tea — Small | 60 | 114 | 90% | 120 |
| Arby's | Jamocha Shake — Small (372 g) | 540 | 465 | −14% | 590 |
| Arby's | Potato Cakes — 5 ct (250 g) | 620 | 490 | −21% | 660 |
| Chick-fil-A | Fruit Cup — 125g | 70 | 74 | 6% | 65 |
| Chick-fil-A | Chick-fil-A® Breakfast Filet — 71g | 160 | 125 | −22% | 130 |
| Chick-fil-A | Chick-fil-A Chick-n-Strips® — 2 ct (91g) | 200 | 247 | 24% | 200 |
| Chick-fil-A | Hash Brown Scramble Bowl w/ Grilled Filet – no hash browns — 187g | 270 | 563 | 109% | 560 |
| Chick-fil-A | Mini Yeast Rolls — 4 ct (70g) | 300 | 284 | −5% | 282 |
| Chick-fil-A | Hash Brown Scramble Bowl w/ Nuggets – no hash browns — 190g | 320 | 600 | 88% | 525 |
| Chick-fil-A | Hash Brown Scramble Bowl w/ Spicy Chicken – no hash browns — 208g | 350 | 585 | 67% | 620 |
| Chick-fil-A | Bacon, Egg & Cheese Biscuit — 145g | 420 | 556 | 32% | 550 |
| Chick-fil-A | Chicken & Waffles Breakfast Sandwich w/ Grilled Filet — 129g | 440 | 447 | 2% | 430 |
| Chick-fil-A | Spicy Chicken Sandwich — 188g | 450 | 564 | 25% | 630 |
| Chick-fil-A | Hash Brown Scramble Bowl w/ Nuggets — 233g | 470 | 673 | 43% | 650 |
| Chick-fil-A | Hash Brown Scramble Bowl w/ Spicy Chicken — 251g | 500 | 712 | 42% | 745 |
| Chick-fil-A | Chilled Grilled Chicken Sub Sandwich — 230g | 500 | 586 | 17% | 560 |
| Chick-fil-A | Chick-fil-A® Deluxe Sandwich w/ Colby Jack — 254g | 510 | 610 | 20% | 635 |
| Chick-fil-A | Chicken & Waffles Breakfast Sandwich w/ Chick-fil-A® Filet — 150g | 530 | 615 | 16% | 600 |
| Chick-fil-A | Spicy Deluxe Sandwich w/ Pepper Jack — 259g | 540 | 648 | 20% | 635 |
| Chick-fil-A | Chicken, Egg & Cheese Biscuit — 211g | 550 | 715 | 30% | 705 |
| Chick-fil-A | Hash Brown Scramble Burrito w/ Sausage – no hash browns — 240g | 570 | 639 | 12% | 645 |
| Chick-fil-A | Cobb Salad w/ Grilled Filet (Warm) — 368g | 600 | 620 | 3% | 780 |
| Chick-fil-A | Cobb Salad w/ Grilled Nuggets — 378g | 630 | 776 | 23% | 755 |
| Chick-fil-A | Spicy Southwest Salad — 424g | 680 | 625 | −8% | 625 |
| Chick-fil-A | Hash Brown Scramble Burrito — 304g | 700 | 845 | 21% | 765 |
| Chick-fil-A | Chicken & Waffles Sandwich w/ Spicy Filet — 215g | 710 | 677 | −5% | 645 |
| Chick-fil-A | Spicy Southwest Salad w/ Nuggets — 448g | 800 | 617 | −23% | 560 |
| Chick-fil-A | Spicy Southwest Salad w/ Chick-fil-A Chick-n-Strips® — 475g | 880 | 563 | −36% | 630 |
| Chick-fil-A | Kale Crunch Side — 112g | 170 | 170 | 0% | 170 |
| Chick-fil-A | Original Flavor Waffle Potato Chips — 43g | 220 | 229 | 4% | 220 |
| Chick-fil-A | Chicken Tortilla Soup — 265g | 350 | 270 | −23% | 250 |
| Chick-fil-A | Chick-fil-A Waffle Potato Fries® — 125g | 420 | 248 | −41% | 420 |
| Chick-fil-A | Side Salad — 166g | 470 | 159 | −66% | 180 |
| Chick-fil-A | Catering Coffee — 2722g | 0 | 27 | Infinity% | 10 |
| Chick-fil-A | Pineapple Dragonfruit Sunjoy® (Unsweet Tea, Diet Lemonade) — 662g | 60 | 13 | −78% | 35 |
| Chick-fil-A | Iced Coffee — 661g | 200 | 178 | −11% | 260 |
| Chick-fil-A | Mocha Cream Cold Brew — 689g | 460 | 392 | −15% | 395 |
| Chick-fil-A | Chick-fil-A® Icedream® Cone — 135g | 180 | 255 | 42% | 200 |
| Chick-fil-A | Frosted Barq’s® Red Flash — 369g | 320 | 188 | −41% | 470 |
| Chick-fil-A | Caramel Frosted Coffee — 406g | 370 | 162 | −56% | 420 |
| Dairy Queen | Side Salad | 20 | 158 | 690% | 175 |
| Dairy Queen | Vanilla Cone — Kids' | 160 | 180 | 13% | 200 |
| Dairy Queen | Dipped Cone, Cherry — Kids' | 210 | 206 | −2% | 260 |
| Dairy Queen | BBQ Sandwich | 280 | 528 | 89% | 510 |
| Dairy Queen | Hamburger | 320 | 520 | 63% | 512 |
| Dairy Queen | Hot Dog | 330 | 410 | 24% | 335 |
| Dairy Queen | Cheese Dog | 390 | 417 | 7% | 415 |
| Dairy Queen | Orange Julius — Large | 400 | 364 | −9% | 430 |
| Dairy Queen | Chili Cheese Dog | 420 | 606 | 44% | 565 |
| Dairy Queen | Chicken Strips — 3 pc | 430 | 489 | 14% | 520 |
| Dairy Queen | Spicy Chicken Strip Sandwich | 530 | 662 | 25% | 770 |
| Dairy Queen | Mango Misty® Slush — Extra Large | 550 | 576 | 5% | 520 |
| Dairy Queen | Misty® Freeze — Large | 590 | 429 | −27% | 560 |
| Dairy Queen | Pork Tenderloin Sandwich | 600 | 564 | −6% | 765 |
| Dairy Queen | Strawberry Banana Julius — Large | 670 | 370 | −45% | 470 |
| Dairy Queen | FlameThrower Burger — Double | 720 | 1195 | 66% | 1170 |
| Dairy Queen | Mega Chili Cheese Dog | 760 | 859 | 13% | 790 |
| Dairy Queen | Backyard Bacon Ranch Burger — Double | 820 | 1304 | 59% | 1310 |
| Dairy Queen | Mango Misty® Freeze — Extra Large | 890 | 594 | −33% | 760 |
| Dairy Queen | Chili Cheese Fries | 990 | 552 | −44% | 805 |
| Dairy Queen | Chicken Strip Basket — 4 pc | 1020 | 1015 | −0% | 1260 |
| Dairy Queen | DQ Sandwich — 6 Pack | 1100 | 1346 | 22% | 1320 |
| Dairy Queen | Dilly Bar - Store Made — 6 Pack - Store Made | 1210 | 1688 | 40% | 1560 |
| Dairy Queen | Parmesan Garlic Sauced & Tossed Chicken Strip Basket — 6 Piece | 1630 | 1722 | 6% | 1700 |
| Dairy Queen | Buster Bar - Manufactured — 6 Pack - Manufactured | 2850 | 2383 | −16% | 2160 |
| Dairy Queen | Oven Baked Lay’s® Original Potato Crisps | 130 | 131 | 1% | 130 |
| Dairy Queen | Doritos® Nacho Cheese Tortilla Chips | 240 | 145 | −40% | 150 |
| Dairy Queen | Soft Pretzel Sticks with Zesty Queso | 340 | 656 | 93% | 500 |
| Dairy Queen | Fries — Large | 450 | 337 | −25% | 520 |
| Dairy Queen | Cheese Curds — Large | 1000 | 620 | −38% | 620 |
| Dairy Queen | Mango Pineapple Smoothie — Large | 420 | 449 | 7% | 610 |
| Dairy Queen | Strawberry Banana Smoothie — Large | 440 | 449 | 2% | 630 |
| Dairy Queen | DQ Coffee Cooler Salted Caramel — Small | 460 | 282 | −39% | 450 |
| Dairy Queen | DQ Coffee Cooler Oreo — Small | 470 | 520 | 11% | 520 |
| Dairy Queen | DQ Coffee Cooler Toasted Marshmallow Mocha — Small | 520 | 170 | −67% | 500 |
| Dairy Queen | Strawberry Sundae — Large | 490 | 693 | 41% | 410 |
| Dairy Queen | Caramel Sundae — Large | 600 | 752 | 25% | 560 |
| Dairy Queen | Peanut Butter Sundae — Large | 780 | 1096 | 41% | 780 |
| Domino's | Hot Buffalo — 1 cup | 15 | 240 | 1500% | 240 |
| Domino's | Honey BBQ — 1 cup | 70 | 413 | 490% | 480 |
| Domino's | Nacho Cheese Dipping Cup — 1 cup | 120 | 391 | 226% | 600 |
| Domino's | Stuffed Cheesy Bread — 1 piece | 150 | 617 | 311% | 520 |
| Domino's | Ranch — 1 cup | 160 | 1032 | 545% | 1200 |
| Domino's | Jalapeno Bacon Stuffed Cheesy Bread — 1 piece | 170 | 652 | 284% | 580 |
| Domino's | Classic Hot Buffalo Specialty Chicken — 4 pieces | 190 | 969 | 410% | 690 |
| Domino's | Blue Cheese — 1 cup | 200 | 1162 | 481% | 1120 |
| Domino's | Garlic Bread Twists — 2 pieces | 220 | 384 | 75% | 330 |
| Domino's | Parmesan Bread Bites — 4 pieces | 220 | 344 | 56% | 300 |
| Domino's | Garlic — 1 cup | 250 | 1639 | 556% | 1600 |
| Domino's | Mild Buffalo Wings — 4 pieces | 260 | 969 | 273% | 680 |
| Domino's | Pacific Veggie — L (1/8 pizza) | 310 | 300 | −3% | 300 |
| Domino's | Honey BBQ Wings — 4 pieces | 310 | 969 | 213% | 760 |
| Domino's | Spinach & Feta — S (1/4 pizza) | 340 | 230 | −32% | 230 |
| Domino's | Mediterranean Veggie — 1/2 Sandwich | 350 | 321 | −8% | 500 |
| Domino's | Chicken Parm — 1/2 Sandwich | 380 | 618 | 63% | 570 |
| Domino's | Garlic Parmesan Wings — 4 pieces | 390 | 969 | 148% | 780 |
| Domino's | Buffalo Chicken — 1/2 Sandwich | 420 | 640 | 52% | 560 |
| Domino's | Classic — 1/2 hoagie | 430 | 520 | 21% | 620 |
| Domino's | Chicken Bacon Ranch — 1/2 Sandwich | 440 | 624 | 42% | 652 |
| Domino's | Bacon Cheddar — 1/2 hoagie | 520 | 637 | 23% | 642 |
| Domino's | Buffalo Ranch — 1/2 hoagie | 530 | 548 | 3% | 577 |
| Domino's | Chicken Alfredo — 1/2 bread bowl | 690 | 1069 | 55% | 1000 |
| Domino's | Italian Sausage Marinara — 1/2 bread bowl | 740 | 1059 | 43% | 1050 |
| Domino's | Marbled Cookie Brownie — 1 brownie | 200 | 344 | 72% | 390 |
| Domino's | Cinnamon Bread Twists — 2 pieces | 250 | 358 | 43% | 435 |
| Domino's | Dipped Chocolate Chunk Cookie — 1 cookie | 360 | 498 | 38% | 490 |
| Dunkin' | Americano — Large | 10 | 5 | −50% | 15 |
| Dunkin' | Pumpkin Munchkin — 1 Donut Hole | 70 | 77 | 10% | 60 |
| Dunkin' | Iced Cappuccino with Almondmilk — Large | 90 | 132 | 47% | 80 |
| Dunkin' | Hot Macchiato with Oatmilk — Large | 120 | 109 | −9% | 180 |
| Dunkin' | Maple Brown Sugar Snackin' Bacon — 8 Pieces | 190 | 374 | 97% | 320 |
| Dunkin' | Stuffed Bagel Minis - Plain — 2 Bagel Minis | 240 | 343 | 43% | 260 |
| Dunkin' | Avocado Toast — 1 Piece | 240 | 337 | 40% | 260 |
| Dunkin' | Stuffed Bagel Minis - Everything — 2 Bagel Minis | 260 | 343 | 32% | 270 |
| Dunkin' | Bacon & Cheddar Omelet Bites — 2 Omelet Bites | 280 | 222 | −21% | 280 |
| Dunkin' | Plain Bagel — 1 Bagel | 300 | 277 | −8% | 290 |
| Dunkin' | Loaded Hash Browns | 320 | 335 | 5% | 370 |
| Dunkin' | Ham & Cheese Croissant Stuffer — 1 Croissant | 330 | 357 | 8% | 430 |
| Dunkin' | Everything Bagel — 1 Bagel | 340 | 277 | −19% | 300 |
| Dunkin' | Sesame Seed Bagel — 1 Bagel | 350 | 277 | −21% | 295 |
| Dunkin' | Multigrain Bagel — 1 Bagel | 380 | 263 | −31% | 290 |
| Dunkin' | White Cheddar Bagel Twist — 1 Bagel Twist | 390 | 510 | 31% | 390 |
| Dunkin' | Sausage Hash Brown Wake-Up Wrap | 430 | 463 | 8% | 490 |
| Dunkin' | Strawberry Rockstar® Energy Punch — Large | 440 | 454 | 3% | 280 |
| Dunkin' | Original Hot Chocolate — Large | 460 | 430 | −7% | 330 |
| Dunkin' | Strawberry Coolatta® — Large | 470 | 454 | −3% | 430 |
| Dunkin' | Franki Matcha — Large | 690 | 224 | −68% | 420 |
| Dunkin' | Vanilla Bean Coolatta® — Large | 790 | 800 | 1% | 800 |
| Dunkin' | Butter Pecan Swirl Frozen Chocolate — Large | 900 | 1036 | 15% | 850 |
| Dunkin' | Caramel Swirl Frozen Chocolate — Large | 900 | 1036 | 15% | 820 |
| Dunkin' | Tiramisu Marshmallow Matcha — Large | 920 | 224 | −76% | 640 |
| Dunkin' | Nitro Cold Brew with Dunkin' Cold Foam — Small | 90 | 65 | −28% | 85 |
| Dunkin' | French Vanilla Swirl Iced Coffee — Large | 220 | 290 | 32% | 290 |
| Dunkin' | Butter Pecan Swirl Hot Cappuccino with Skim Milk — Large | 310 | 112 | −64% | 260 |
| Dunkin' | Mocha Swirl Hot Cappuccino with Whole Milk — Large | 360 | 159 | −56% | 350 |
| Dunkin' | Caramel Swirl Iced Latte with Whole Milk — Large | 450 | 280 | −38% | 410 |
| Dunkin' | Vanilla Frosted with Halloween Sprinkles Donut — 1 Donut | 270 | 309 | 14% | 282 |
| Dunkin' | Apple Streused Donut — 1 Donut | 310 | 412 | 33% | 430 |
| Dunkin' | Toasted Coconut Donut — 1 Donut | 430 | 345 | −20% | 360 |
| Little Caesars | Oven Roasted | 510 | 806 | 58% | 690 |
| Little Caesars | Buffalo | 520 | 813 | 56% | 780 |
| Little Caesars | BBQ | 620 | 910 | 47% | 800 |
| Little Caesars | Garlic Parmesan | 670 | 904 | 35% | 870 |
| Little Caesars | Hula Hawaiian | 2180 | 1830 | −16% | 1610 |
| Little Caesars | Cheese | 2220 | 1773 | −20% | 1515 |
| Little Caesars | Veggie | 2240 | 1717 | −23% | 1390 |
| Little Caesars | Slices-N-Stix | 2300 | 2420 | 5% | 2205 |
| Little Caesars | Slices-N-Stix* Jalapeño | 2330 | 2429 | 4% | 2215 |
| Little Caesars | Pepperoni | 2500 | 2066 | −17% | 1825 |
| Little Caesars | Ultimate Supreme | 2500 | 2257 | −10% | 1935 |
| Little Caesars | Italian Sausage | 2660 | 1980 | −26% | 1700 |
| Little Caesars | 5 Meat Feast | 2830 | 2409 | −15% | 2190 |
| Little Caesars | Slices-N-Stix* Bacon | 2980 | 2638 | −11% | 2450 |
| Little Caesars | Stuffed Crust Pepperoni | 2980 | 2374 | −20% | 2220 |
| Little Caesars | 4 Cheese Crazy Puffs | 580 | 583 | 1% | 780 |
| Little Caesars | Crazy Bread — 8 bread sticks | 800 | 821 | 3% | 700 |
| Little Caesars | Stuffed Crazy Bread — 3 bread sticks & Crazy Sauce | 980 | 921 | −6% | 595 |
| Little Caesars | Italian Cheese Bread — 10 bread sticks | 1340 | 1062 | −21% | 1010 |
| Little Caesars | Pepperoni Cheese Bread — 10 bread sticks | 1520 | 1316 | −13% | 1250 |
| Little Caesars | Cookie Dough Brownie made with TWIX* Cookie Bar Pieces Little Caesars' Cookies — full package | 800 | 1604 | 100% | 1700 |
| Little Caesars | Cookie Dough Brownie made with M&M'S' MINIS Chocolate Candies — full package | 840 | 2140 | 155% | 1650 |
| Little Caesars | 3 Meat Treat | 2860 | 4462 | 56% | 4300 |
| McDonald's | Chicken McNuggets® — 4 Piece | 170 | 196 | 15% | 170 |
| McDonald's | Bagel (plain) | 270 | 251 | −7% | 270 |
| McDonald's | Egg McMuffin® | 310 | 291 | −6% | 300 |
| McDonald's | Sausage Burrito | 310 | 460 | 48% | 500 |
| McDonald's | Filet-O-Fish® | 380 | 466 | 23% | 570 |
| McDonald's | McChicken® | 390 | 540 | 38% | 592 |
| McDonald's | McDouble® | 390 | 561 | 44% | 550 |
| McDonald's | McCrispy® Strips — 3 piece | 400 | 285 | −29% | 300 |
| McDonald's | McCrispy® Strip Ranch Snack Wrap® | 400 | 419 | 5% | 478 |
| McDonald's | Sausage McGriddles® | 430 | 437 | 2% | 470 |
| McDonald's | Double Cheeseburger | 440 | 565 | 28% | 555 |
| McDonald's | Sausage Biscuit | 460 | 424 | −8% | 460 |
| McDonald's | McCrispy® | 470 | 531 | 13% | 610 |
| McDonald's | Daily Double | 490 | 665 | 36% | 665 |
| McDonald's | Egg and Cheese Bagel | 520 | 391 | −25% | 410 |
| McDonald's | Deluxe McCrispy® | 530 | 627 | 18% | 726 |
| McDonald's | Spicy Deluxe McCrispy® | 530 | 630 | 19% | 736 |
| McDonald's | Spicy McCrispy® | 530 | 511 | −4% | 585 |
| McDonald's | Hotcakes | 580 | 912 | 57% | 630 |
| McDonald's | Big Mac® | 580 | 742 | 28% | 778 |
| McDonald's | Quarter Pounder®* with Cheese Deluxe | 630 | 856 | 36% | 855 |
| McDonald's | Steak, Egg & Cheese Bagel | 680 | 763 | 12% | 742 |
| McDonald's | Sausage, Egg & Cheese Bagel | 710 | 823 | 16% | 807 |
| McDonald's | Hotcakes and Sausage | 770 | 1203 | 56% | 840 |
| McDonald's | Big Breakfast® with Hotcakes | 1340 | 1267 | −5% | 1020 |
| McDonald's | Apple Slices | 15 | 46 | 207% | 40 |
| McDonald's | Hash Browns | 140 | 122 | −13% | 140 |
| McDonald's | World Famous Fries® — Small | 230 | 158 | −31% | 230 |
| McDonald's | McCafé® Iced Black Coffee — Small | 5 | 4 | −20% | 5 |
| McDonald's | Lemonade — Small | 120 | 163 | 36% | 150 |
| McDonald's | Mango Pineapple Refresher — Small | 180 | 227 | 26% | 190 |
| McDonald's | Hi-C® Orange Lavaburst® — Small | 220 | 149 | −32% | 170 |
| McDonald's | McCafé® Iced Mocha Latte — Small | 270 | 178 | −34% | 300 |
| McDonald's | Chocolate Chip Cookie | 170 | 177 | 4% | 170 |
| McDonald's | Hot Caramel Sundae | 330 | 421 | 28% | 345 |
| McDonald's | Vanilla Shake — Small | 480 | 530 | 10% | 530 |
| Olive Garden | Minestrone Soup | 110 | 140 | 27% | 180 |
| Olive Garden | Pasta Fagioli Soup | 150 | 235 | 57% | 240 |
| Olive Garden | Broccoli | 150 | 114 | −24% | 110 |
| Olive Garden | Crispy Shrimp Fritta | 220 | 485 | 120% | 560 |
| Olive Garden | Fettuccine | 350 | 710 | 103% | 860 |
| Olive Garden | Spaghetti with Marinara | 370 | 590 | 59% | 590 |
| Olive Garden | Five Cheese Marinara | 400 | 835 | 109% | 875 |
| Olive Garden | Shrimp Scampi | 460 | 1214 | 164% | 860 |
| Olive Garden | Meatballs — 3 | 480 | 549 | 14% | 500 |
| Olive Garden | Lasagna Classico | 500 | 556 | 11% | 930 |
| Olive Garden | Five Cheese Ziti al Forno | 630 | 911 | 45% | 980 |
| Olive Garden | Grilled Chicken Margherita | 650 | 619 | −5% | 640 |
| Olive Garden | Calamari | 670 | 682 | 2% | 580 |
| Olive Garden | Fried Mozzarella | 800 | 827 | 3% | 690 |
| Olive Garden | Sirloin — 6 oz. | 980 | 798 | −19% | 800 |
| Olive Garden | Meatballs Parmigiana | 1040 | 607 | −42% | 611 |
| Olive Garden | Chicken Scampi | 1050 | 1361 | 30% | 1000 |
| Olive Garden | Stuffed Chicken Marsala | 1170 | 879 | −25% | 1010 |
| Olive Garden | Calabrian Steak & Shrimp Bucatini | 1220 | 1148 | −6% | 1210 |
| Olive Garden | Chicken & Shrimp Carbonara | 1370 | 1036 | −24% | 1210 |
| Olive Garden | Shrimp Alfredo | 1390 | 943 | −32% | 1065 |
| Olive Garden | Tour of Italy | 1550 | 1414 | −9% | 1890 |
| Olive Garden | Chicken Alfredo (with crispy chicken fritta) — with crispy chicken fritta | 1710 | 950 | −44% | 1215 |
| Olive Garden | Parmesan Garlic Broccoli | 150 | 287 | 91% | 240 |
| Olive Garden | Mashed Potatoes | 200 | 286 | 43% | 275 |
| Olive Garden | Tiramisu | 470 | 600 | 28% | 470 |
| Olive Garden | Pumpkin Cookie Butter Cheesecake | 620 | 760 | 23% | 760 |
| Olive Garden | Warm Italian Doughnuts | 810 | 875 | 8% | 630 |
| Panda Express | Super Greens (Entree) — Entree (3.5 oz) | 45 | 85 | 89% | 70 |
| Panda Express | Hot & Sour Soup (Cup) — Cup (12.2 oz) | 140 | 135 | −4% | 110 |
| Panda Express | Chicken Potsticker — 3.3 oz / 3 pcs | 160 | 190 | 19% | 190 |
| Panda Express | Hot & Sour Soup (Bowl) — Bowl (17.4 oz) | 170 | 192 | 13% | 160 |
| Panda Express | Super Greens — 10 oz | 180 | 244 | 36% | 200 |
| Panda Express | Mushroom Chicken — 5.7 oz | 180 | 220 | 22% | 220 |
| Panda Express | Broccoli Beef — 6.3 oz | 190 | 286 | 51% | 290 |
| Panda Express | Cream Cheese Rangoon — 2.4 oz / 3 pcs | 190 | 190 | 0% | 190 |
| Panda Express | Black Pepper Chicken — 6.3 oz | 200 | 318 | 59% | 280 |
| Panda Express | Black Pepper Sirloin Steak — 5.9 oz | 200 | 243 | 22% | 280 |
| Panda Express | Chicken Egg Roll — 2.75 oz / 1 roll | 200 | 207 | 4% | 200 |
| Panda Express | String Bean Chicken Breast — 5.6 oz | 210 | 283 | 35% | 190 |
| Panda Express | Kung Pao Chicken — 6.7 oz | 270 | 304 | 13% | 350 |
| Panda Express | Grilled Teriyaki Chicken — 6.1 oz | 280 | 282 | 1% | 300 |
| Panda Express | Eggplant Tofu — 6.1 oz | 310 | 260 | −16% | 260 |
| Panda Express | Honey Walnut Shrimp — 4.4 oz | 340 | 359 | 6% | 440 |
| Panda Express | SweetFire Chicken Breast® — 5.8 oz | 360 | 385 | 7% | 350 |
| Panda Express | Honey Sesame Chicken Breast — 6.2 oz | 420 | 515 | 23% | 340 |
| Panda Express | Beijing Beef® — 5.6 oz | 480 | 335 | −30% | 470 |
| Panda Express | Chow Mein — 12 oz | 520 | 510 | −2% | 510 |
| Panda Express | The Original Orange Chicken® — 6.2 oz | 560 | 461 | −18% | 490 |
| Panda Express | White Steamed Rice — 12 oz | 570 | 439 | −23% | 430 |
| Panda Express | Chow Fun — 12 oz | 580 | 252 | −57% | 490 |
| Panda Express | Quinoa Fried Rice — 12 oz | 600 | 592 | −1% | 520 |
| Panda Express | Fried Rice — 12 oz | 610 | 360 | −41% | 590 |
| Panda Express | Sprite Zero — 12 oz | 0 | 0 | −NaN% | 0 |
| Panda Express | POWERade Mountain Berry Blast — 12 oz | 80 | 114 | 43% | 80 |
| Panda Express | Coca-Cola — 12 oz | 140 | 263 | 88% | 140 |
| Panda Express | Cherry Coca-Cola — 12 oz | 150 | 0 | −100% | 140 |
| Panda Express | Mello Yellow — 12 oz | 160 | 114 | −29% | 170 |
| Panda Express | Sweet Tea — 12 oz | 150 | 114 | −24% | 120 |
| Panera Bread | Catering Butter Pat — 1 pat | 35 | 37 | 6% | 36 |
| Panera Bread | Breakfast Portion - Country Rustic Sourdough — 1 Slice | 130 | 110 | −15% | 110 |
| Panera Bread | Tomato Basil Miche — 2 oz (about 1/2 inch slice / 57g) | 150 | 152 | 1% | 145 |
| Panera Bread | Breakfast Portion - Tomato Basil Miche — 1 Slice | 160 | 115 | −28% | 110 |
| Panera Bread | Classic White Loaf — 2.2 oz (about 3/4 inch slice / 62g) | 190 | 166 | −13% | 165 |
| Panera Bread | Breakfast Portion - Artisan Ciabatta — 1/3 Loaf | 250 | 300 | 20% | 300 |
| Panera Bread | Breakfast Portion - French Baguette — 1/4 Baguette | 290 | 190 | −34% | 190 |
| Panera Bread | Bacon Mac & Cheese - Bread Rice — 1 1/2 Cups | 300 | 894 | 198% | 740 |
| Panera Bread | Farmhouse Crunch Salad - No Almonds — 1/2 Salad | 350 | 391 | 12% | 410 |
| Panera Bread | Tomato Basil BLT on Tomato Basil Miche — 1/2 Sandwich | 390 | 431 | 11% | 435 |
| Panera Bread | Smokehouse BBQ Chicken on Artisan Ciabatta — 1/2 Sandwich | 410 | 426 | 4% | 475 |
| Panera Bread | Broccoli Cheddar — 1 1/2 Cups | 420 | 295 | −30% | 330 |
| Panera Bread | Toasted Frontega Chicken on Black Pepper Focaccia — 1/2 Sandwich | 430 | 554 | 29% | 560 |
| Panera Bread | Market Bowl - All-In Veggie — 1/2 Bowl | 450 | 653 | 45% | 520 |
| Panera Bread | Turkey & Cheddar Wrap | 460 | 543 | 18% | 538 |
| Panera Bread | Grilled Chicken & Avo BLT on Country Rustic Sourdough — 1/2 Sandwich | 470 | 623 | 33% | 622 |
| Panera Bread | Chipotle Chicken Avo Melt on Black Pepper Focaccia Round — 1/2 Sandwich | 500 | 644 | 29% | 712 |
| Panera Bread | Bacon Double Take on Black Pepper Focaccia | 550 | 854 | 55% | 880 |
| Panera Bread | Asiago Everything Bagel Stack Sandwich - Wake-Up BLT | 570 | 624 | 9% | 659 |
| Panera Bread | Asiago Bagel Stack Sandwich - Chicken Roma | 610 | 605 | −1% | 628 |
| Panera Bread | Sourdough Soup Bowl — 1 Bread Bowl | 650 | 440 | −32% | 440 |
| Panera Bread | Cream of Chicken and Wild Rice — 1 Container | 700 | 309 | −56% | 360 |
| Panera Bread | Bread Bowl — 1 Bread bowl with soup | 850 | 607 | −29% | 790 |
| Panera Bread | Ultimate Mac Stuffer — 1 Stuffer | 930 | 1132 | 22% | 940 |
| Panera Bread | Catering French Baguette — 1 Baguette | 1160 | 1850 | 59% | 1850 |
| Panera Bread | Side - Pickle Spear — 1 Spear | 5 | 5 | 0% | 5 |
| Panera Bread | Fruit Cup — 1 container | 60 | 100 | 67% | 85 |
| Panera Bread | Side - Apple — 1 Apple | 80 | 110 | 38% | 95 |
| Panera Bread | French Baguette - Side Portion — 3 1/2 inch slice | 190 | 95 | −50% | 95 |
| Panera Bread | Greek Yogurt with Berries — 1 Parfait | 250 | 317 | 27% | 345 |
| Panera Bread | British Breakfast Tea - 16 fl oz — 16 fl oz (473 mL) | 0 | 2 | Infinity% | 2 |
| Panera Bread | Diet Dr. Pepper - 30 fl oz — 30 fl oz (887 mL) | 0 | 18 | Infinity% | 0 |
| Panera Bread | Diet Mountain Dew - 20 fl oz — 20 fl oz (591 mL) | 10 | 12 | 20% | 0 |
| Panera Bread | Agave Lemonade - 20 fl oz — 20 fl oz (591 mL) | 210 | 148 | −30% | 250 |
| Panera Bread | Caramel Latte - 16 fl oz — 16 fl oz (473 mL) | 320 | 260 | −19% | 290 |
| Panera Bread | Sweet Cream Cold Foam — 3 swirls | 80 | 154 | 93% | 120 |
| Panera Bread | Pastry - Asiago Croissant Twist — 1 Twist | 100 | 393 | 293% | 360 |
| Papa Johns | Create Your Own Crispy Parm Pizza — 1 slice (Large) | 140 | 477 | 241% | 430 |
| Papa Johns | Fresh Spinach & Tomato Alfredo — 1 slice (Pizza for One, 4 slices per pizza) | 190 | 402 | 112% | 405 |
| Papa Johns | Garden Fresh — 1 slice (Pizza for One, 4 slices per pizza) | 190 | 393 | 107% | 337 |
| Papa Johns | Cheese Pizza — 1 slice (Pizza for One, 4 slices per pizza) | 200 | 369 | 85% | 332 |
| Papa Johns | Pepperoni Pizza — 1 slice (Pizza for One, 4 slices per pizza) | 220 | 481 | 119% | 442 |
| Papa Johns | Tuscan Six Cheese — 1 slice (Pizza for One) | 220 | 432 | 96% | 392 |
| Papa Johns | Sausage Pizza — 1 slice (Pizza for One, 4 slices per pizza) | 230 | 450 | 96% | 412 |
| Papa Johns | Fiery Buffalo Chicken — 1 slice (Pizza for One, 4 slices per pizza) | 230 | 405 | 76% | 435 |
| Papa Johns | Super Hawaiian — 1 slice (Pizza for One) | 230 | 382 | 66% | 372 |
| Papa Johns | The Works — 1 slice (Pizza for One) | 230 | 509 | 121% | 452 |
| Papa Johns | Jack O' Lantern Pizza — 1 serving (93g) | 240 | 245 | 2% | 245 |
| Papa Johns | Meatball and Pepperoni — 1 slice (Pizza for One) | 240 | 485 | 102% | 472 |
| Papa Johns | Ultimate Pepperoni — 1 slice (Pizza for One) | 250 | 521 | 108% | 507 |
| Papa Johns | Zesty Italian Trio — 1 slice (Pizza for One) | 250 | 472 | 89% | 482 |
| Papa Johns | The Meats — 1 slice (Pizza for One) | 260 | 530 | 104% | 517 |
| Papa Johns | New York Style — 1 slice (Large) | 310 | 459 | 48% | 430 |
| Papa Johns | Pan Crust Pizza — 1 slice (Large) | 350 | 536 | 53% | 505 |
| Papa Johns | Spicy Garlic Epic Stuffed Crust Pizza — 1 slice (Large) | 370 | 547 | 48% | 520 |
| Papa Johns | Epic Pepperoni Stuffed Crust Pizza - Cheese Only — 1 slice (Large, 8 slices per pizza) | 380 | 592 | 56% | 565 |
| Papa Johns | Shaq-a-Roni — 1 slice (Large) | 390 | 697 | 79% | 670 |
| Papa Johns | Epic Pepperoni Stuffed Crust Pizza - Pepperoni Only — 1 slice (Large, 8 slices per pizza) | 410 | 592 | 44% | 565 |
| Papa Johns | Epic Pepperoni Stuffed Crust Pizza - Sausage Only — 1 slice (Large, 8 slices per pizza) | 430 | 561 | 30% | 545 |
| Starbucks | Rolled & Steel-Cut Oatmeal — 1 Piece 42 g | 160 | 27 | −83% | 150 |
| Starbucks | Egg White & Roasted Red Pepper Egg Bites | 170 | 120 | −29% | 170 |
| Starbucks | Iced Sugar-Free Vanilla Protein Matcha — Grande 16 fl oz | 210 | 289 | 38% | 170 |
| Starbucks | Sugar-Free Vanilla Protein Matcha — Grande 16 fl oz | 240 | 170 | −29% | 170 |
| Starbucks | Iced Protein Matcha — Grande 16 fl oz | 260 | 180 | −31% | 180 |
| Starbucks | Pumpkin Spice Chai — Grande 16 fl oz | 260 | 241 | −7% | 300 |
| Starbucks | Turkey Bacon, Cheddar & Egg White Sandwich — 1 Serving 142 g | 260 | 343 | 32% | 360 |
| Starbucks | Iced Mango Cream Matcha — Grande 16 fl oz | 270 | 455 | 69% | 400 |
| Starbucks | Bacon & Gruyère Egg Bites | 300 | 300 | 0% | 300 |
| Starbucks | Ellenos Strawberry Shortcake Greek Yogurt — 1 Serving 198 g | 310 | 220 | −29% | 270 |
| Starbucks | Iced Mango Cream Chai — Grande 16 fl oz | 310 | 380 | 23% | 400 |
| Starbucks | Iced Banana Bread Matcha — Grande 16 fl oz | 330 | 310 | −6% | 390 |
| Starbucks | Iced Pumpkin Cream Matcha — Grande 16 fl oz | 350 | 380 | 9% | 370 |
| Starbucks | Iced Banana Bread Chai — Grande 16 fl oz | 350 | 310 | −11% | 390 |
| Starbucks | Tomato & Mozzarella on Focaccia — 1 Serving 153 g | 360 | 454 | 26% | 488 |
| Starbucks | Iced Orange Cream Chai — Grande 16 fl oz | 390 | 345 | −12% | 370 |
| Starbucks | Iced Dubai Chocolate Matcha — Grande 16 fl oz | 400 | 346 | −13% | 490 |
| Starbucks | Iced Pumpkin Cream Chai — Grande 16 fl oz | 400 | 364 | −9% | 390 |
| Starbucks | Sausage, Cheddar & Egg Sandwich — 1 Serving 157 g | 480 | 461 | −4% | 510 |
| Starbucks | Ham & Swiss on Baguette — 1 Serving 176 g | 510 | 493 | −3% | 545 |
| Starbucks | Crispy Grilled Cheese on Sourdough | 520 | 518 | −0% | 510 |
| Starbucks | Bacon, Sausage & Egg Wrap | 640 | 718 | 12% | 720 |
| Starbucks | That's It® – Apple + Blueberry Bar — 1 Piece | 100 | 70 | −30% | 70 |
| Starbucks | SkinnyDipped Lemon Bliss Almonds — 1 Piece | 170 | 168 | −1% | 160 |
| Starbucks | Jalapeño Chicken Pocket — 1 Piece 84 g | 200 | 172 | −14% | 180 |
| Starbucks | Spicy Falafel Pocket — 1 Serving 94 g | 230 | 390 | 70% | 275 |
| Starbucks | Chicken Bacon Protein Pocket — 1 Serving 124 g | 310 | 281 | −9% | 325 |
| Starbucks | Cold Brew — Grande 16 fl oz | 5 | 5 | 0% | 5 |
| Starbucks | Pecan Cortado — Short 8 fl oz | 130 | 137 | 5% | 150 |
| Starbucks | London Fog Latte — Grande 16 fl oz | 180 | 260 | 44% | 252 |
| Starbucks | Pistachio Cream Cold Brew — Grande 16 fl oz | 250 | 291 | 16% | 225 |
| Starbucks | Iced Pecan Crunch Latte — Grande 16 fl oz | 380 | 305 | −20% | 315 |
| Starbucks | Petite Vanilla Bean Scone — 1 Serving 33 g | 140 | 126 | −10% | 130 |
| Starbucks | Plain Bagel — 1 Serving 100 g | 250 | 264 | 6% | 280 |
| Starbucks | Banana, Walnut & Pecan Loaf — 1 Piece | 380 | 484 | 27% | 430 |
| Subway | Veggie Delite® — 6-inch | 310 | 243 | −22% | 230 |
| Subway | Buffalo Chicken — 6-inch | 460 | 504 | 10% | 490 |
| Subway | Oven-Roasted Turkey & Ham — 6-inch | 460 | 395 | −14% | 415 |
| Subway | Oven-Roasted Turkey — 6-inch | 470 | 328 | −30% | 320 |
| Subway | Veggie Patty — 6-inch | 470 | 466 | −1% | 485 |
| Subway | Honey Mustard Chicken — 6-inch | 480 | 514 | 7% | 455 |
| Subway | Black Forest Ham — 6-inch | 480 | 324 | −32% | 350 |
| Subway | B.L.T. — 6-inch | 480 | 507 | 6% | 512 |
| Subway | Pizza Sub — 6-inch | 480 | 626 | 30% | 630 |
| Subway | Chipotle Philly — 6-inch | 490 | 567 | 16% | 660 |
| Subway | Roast Beef — 6-inch | 490 | 336 | −31% | 360 |
| Subway | Subway Club® — 6-inch | 500 | 448 | −10% | 485 |
| Subway | Grilled Chicken — 6-inch | 510 | 367 | −28% | 370 |
| Subway | Cold Cut Combo® — 6-inch | 520 | 496 | −5% | 495 |
| Subway | All American Club® — 6-inch | 540 | 534 | −1% | 570 |
| Subway | Meatball Marinara — 6-inch | 550 | 668 | 21% | 650 |
| Subway | Tuna — 6-inch | 560 | 432 | −23% | 475 |
| Subway | Chicken & Bacon Ranch — 6-inch | 580 | 688 | 19% | 710 |
| Subway | Steak & Bacon — 6-inch | 590 | 625 | 6% | 635 |
| Subway | B.M.T.® — 6-inch | 590 | 628 | 6% | 640 |
| Subway | Big Hot Pastrami — 6-inch | 620 | 422 | −32% | 450 |
| Subway | Turkey & Ham — 12-inch wrap | 620 | 802 | 29% | 824 |
| Subway | Spicy Italian — 6-inch | 660 | 635 | −4% | 700 |
| Subway | 5 Meat Italian — 6-inch | 660 | 428 | −35% | 680 |
| Subway | Meatball Pepperoni — 6-inch | 670 | 684 | 2% | 805 |
| Subway | Sweet Onion Chicken Teriyaki® — 6-inch | 430 | 524 | 22% | 595 |
| Whataburger | Garden Salad | 160 | 240 | 50% | 235 |
| Whataburger | Garden Salad with Grilled Chicken | 290 | 442 | 52% | 425 |
| Whataburger | Whatachick'n' Strips — (2) | 300 | 243 | −19% | 270 |
| Whataburger | Egg Sandwich | 310 | 339 | 9% | 338 |
| Whataburger | #21 Breakfast On A Bun* with Bacon | 360 | 517 | 44% | 535 |
| Whataburger | Buffalo Ranch Chicken Salad† with Grilled Chicken | 370 | 631 | 71% | 665 |
| Whataburger | Taquito with Sausage | 380 | 386 | 2% | 430 |
| Whataburger | Garden Salad with Whatachick'n' | 400 | 492 | 23% | 545 |
| Whataburger | Taquito with Potato | 400 | 267 | −33% | 360 |
| Whataburger | Cobb Salad with Grilled Chicken | 430 | 845 | 97% | 878 |
| Whataburger | Jalapeño Cheddar Biscuit with Egg & Cheese | 440 | 535 | 22% | 485 |
| Whataburger | Buffalo Ranch Chicken Salad† with Whatachick'n' | 480 | 708 | 48% | 785 |
| Whataburger | Apple & Cranberry Salad with Whatasackhick'n' | 490 | 587 | 20% | 620 |
| Whataburger | #26 Jalapeno Cheddar Biscuit & Gravy | 490 | 590 | 20% | 510 |
| Whataburger | Grilled Cheese | 510 | 434 | −15% | 425 |
| Whataburger | Jalapeño Cheddar Biscuit with Sausage | 510 | 602 | 18% | 550 |
| Whataburger | Cobb Salad with Spicy Chicken | 550 | 922 | 68% | 1008 |
| Whataburger | #16 Chicken Fajita Taco | 580 | 466 | −20% | 460 |
| Whataburger | #1 Whataburger | 590 | 778 | 32% | 740 |
| Whataburger | #22 Buttermilk Biscuit Sandwich with Sausage | 640 | 579 | −10% | 550 |
| Whataburger | Jr. Buffalo Ranch Chicken Strip Sandwich | 660 | 531 | −20% | 557 |
| Whataburger | Jr. Mushroom Swiss Burger | 700 | 643 | −8% | 570 |
| Whataburger | #2 Double Meat Whataburger | 830 | 861 | 4% | 882 |
| Whataburger | Whataburger. Patty Melt | 940 | 1100 | 17% | 1155 |
| Whataburger | #3 Triple Meat Whataburger | 1070 | 1160 | 8% | 1197 |
| Whataburger | Apple Slices | 30 | 52 | 73% | 45 |
| Whataburger | French Fries — Small | 270 | 168 | −38% | 260 |
| Whataburger | Onion Rings — Medium | 300 | 440 | 47% | 410 |
| Whataburger | Decaf Coffee — Small (12 fl oz) | 0 | 0 | −NaN% | 5 |
| Whataburger | Unsweet Tea — Small (20 fl oz) | 5 | 6 | 20% | 2 |
| Whataburger | Kid's Unsweet Tea — Kid's (16 fl oz) | 5 | 5 | 0% | 2 |
| Whataburger | 1% Low Fat Milk — 8 fl oz | 110 | 105 | −5% | 102 |
| Whataburger | 1% Low Fat Chocolate Milk — 8 fl oz | 160 | 156 | −2% | 155 |
| Whataburger | Kid's Sweet Tea — Kid's (16 fl oz) | 220 | 151 | −31% | 130 |
| Whataburger | Jr. Sweet & Spicy Bacon Burger | 600 | 559 | −7% | 570 |
| Whataburger | Sweet & Spicy Bacon Burger | 1080 | 794 | −26% | 840 |
| Wingstop | Cajun — 1ea (33.6g) | 80 | 92 | 15% | 90 |
| Wingstop | Original Hot — 1ea (33.15g) | 80 | 94 | 18% | 88 |
| Wingstop | Plain — 1ea (27.14g) | 80 | 88 | 10% | 73 |
| Wingstop | Atomic — 1ea (33.53g) | 90 | 94 | 4% | 90 |
| Wingstop | Hawaiian — 1ea (33.94g) | 90 | 93 | 3% | 98 |
| Wingstop | Hickory Smoked BBQ — 1ea (34.34g) | 90 | 99 | 10% | 99 |
| Wingstop | Mango Habanero — 1ea (33.94g) | 90 | 93 | 3% | 101 |
| Wingstop | Spicy Korean Q — 1ea (33.81g) | 90 | 92 | 2% | 101 |
| Wingstop | Louisiana Rub — 1ea (29.25g) | 100 | 80 | −20% | 78 |
| Wingstop | Garlic Parmesan — 1ea (31.04g) | 110 | 85 | −23% | 102 |
| Wingstop | Hot Honey Rub — 1ea (32g) | 110 | 87 | −21% | 92 |
| Wingstop | Lemon Pepper — 1ea (29.98g) | 110 | 82 | −25% | 80 |
| Wingstop | Mild — 1ea (32.94g) | 110 | 90 | −18% | 87 |
| Wingstop | Veggie Sticks Celery — 5 Sticks (56g) | 10 | 10 | 0% | 9 |
| Wingstop | Fried Corn — 5ea (154g) | 200 | 280 | 40% | 280 |
| Wingstop | Seasoned Fries — Regular 10oz (191g) | 500 | 378 | −24% | 590 |
| Wingstop | Cheese Fries — Regular 10oz (255g) | 580 | 483 | −17% | 690 |
| Wingstop | Louisiana Voodoo Fries — Regular 10oz (283g) | 680 | 533 | −22% | 745 |
| Wingstop | Brownie — 1ea (98g) | 430 | 390 | −9% | 390 |

Not read as a dish by the AI (left out): Chick-fil-A: Gallon Freshly-Brewed Iced Tea Sweetened; Little Caesars: Add Stuffed Crust to any Detroit-Style Deep Dish; Little Caesars: Add Stuffed Crust to any round pizza; Olive Garden: add alfredo; Olive Garden: add spicy ranch; Papa Johns: Papa Dippa (No Longer Available); Papa Johns: Garlic 5-Cheese Crust Pizza (No longer available); Papa Johns: Cheesy Calzone Epic Stuffed Crust Pizza (NO LONGER AVAILABLE).

**Limits.** The chains' dish names are well known, so the AI may remember some numbers; a local restaurant's menu has no
such help. Menus usually print a description too; this test had names and sizes only.
