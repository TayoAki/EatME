# What to order: accuracy pilot

Run 2026-10-23 with `npm run menus:pilot` (WHAT-TO-ORDER.md §11). 339 dishes from 11 chains, each read the
way a menu photo shows it (name, size and section; never the chain's name) through the menu pipeline: the AI's foods and
restaurant portions, priced from the USDA database. Compared with each chain's own published calories (only numbers two
drafts or a person agreed on). Error = (our estimate − published) ÷ published.

## Pass lines

| Check | Result | Pass line | Passed |
| --- | --- | --- | --- |
| Median calorie error (after the correction) | 19% | 20% or less | yes |
| Fits well: our top five and the published top five share | median 1 of 5 | at least 3 | no |
| Big plates (published 800 kcal or more): median error after the correction | −8% (39 dishes) | no underestimate beyond 10% | yes |

## Errors

| | Dishes | Median error (bias) | Median size of the error | 80% of errors within |
| --- | --- | --- | --- | --- |
| Priced from our database, before the correction | 339 | 4% | 19% | 45% |
| Priced, after the correction (×1) | 339 | 4% | 19% | 45% |
| The AI's own quick estimate | 339 | 8% | 20% | Infinity% |
| Mains, priced and corrected | 250 | 7% | 22% | 49% |
| Sides, priced and corrected | 33 | 0% | 31% | 56% |
| Drinks, priced and corrected | 30 | 5% | 21% | 50% |
| Desserts, priced and corrected | 26 | 22% | 27% | 93% |

Database match: 100% of a dish's calories came from USDA foods (median).

## Calibration (copy into `ESTIMATE_CALIBRATION`)

Ranges hold the published number about 80% of the time (10% outside on each side); a kind with fewer than 15 dishes
uses the overall widths.

```ts
correction: 1,
estimate: {"main":{"below":0.42,"above":0.39},"side":{"below":0.39,"above":0.54},"drink":{"below":0.51,"above":0.42},"dessert":{"below":0.52,"above":0.1}},
quick: {"main":{"below":0.42,"above":0.3},"side":{"below":0.34,"above":0.29},"drink":{"below":0.6,"above":0.81},"dessert":{"below":0.52,"above":0.1}},
```

## Fits well, published against ours

| Chain | Day (aim) | Shared of the top five |
| Chick-fil-A | 500 kcal | 2 of 5 |
| Chick-fil-A | 750 kcal | 2 of 5 |
| Chick-fil-A | 1000 kcal | 4 of 5 |
| Domino's | 500 kcal | 2 of 5 |
| Domino's | 750 kcal | 1 of 5 |
| Domino's | 1000 kcal | 0 of 5 |
| Little Caesars | 500 kcal | 0 of 0 |
| Little Caesars | 750 kcal | 2 of 2 |
| Little Caesars | 1000 kcal | 3 of 3 |
| McDonald's | 500 kcal | 1 of 5 |
| McDonald's | 750 kcal | 0 of 5 |
| McDonald's | 1000 kcal | 2 of 5 |
| Olive Garden | 500 kcal | 1 of 5 |
| Olive Garden | 750 kcal | 2 of 5 |
| Olive Garden | 1000 kcal | 4 of 5 |
| Panda Express | 500 kcal | 1 of 5 |
| Panda Express | 750 kcal | 0 of 5 |
| Panda Express | 1000 kcal | 0 of 5 |
| Panera Bread | 500 kcal | 1 of 5 |
| Panera Bread | 750 kcal | 2 of 5 |
| Panera Bread | 1000 kcal | 1 of 5 |
| Starbucks | 500 kcal | 1 of 5 |
| Starbucks | 750 kcal | 4 of 5 |
| Starbucks | 1000 kcal | 4 of 5 |
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
| Chick-fil-A | Fruit Cup — 125g | 70 | 70 | 0% | 60 |
| Chick-fil-A | Chick-fil-A® Breakfast Filet — 71g | 160 | 173 | 8% | 150 |
| Chick-fil-A | Chick-fil-A Chick-n-Strips® — 2 ct (91g) | 200 | 247 | 24% | 250 |
| Chick-fil-A | Hash Brown Scramble Bowl w/ Grilled Filet – no hash browns — 187g | 270 | 306 | 13% | 330 |
| Chick-fil-A | Mini Yeast Rolls — 4 ct (70g) | 300 | 195 | −35% | 210 |
| Chick-fil-A | Hash Brown Scramble Bowl w/ Nuggets – no hash browns — 190g | 320 | 449 | 40% | 440 |
| Chick-fil-A | Hash Brown Scramble Bowl w/ Spicy Chicken – no hash browns — 208g | 350 | 430 | 23% | 460 |
| Chick-fil-A | Bacon, Egg & Cheese Biscuit — 145g | 420 | 549 | 31% | 540 |
| Chick-fil-A | Chicken & Waffles Breakfast Sandwich w/ Grilled Filet — 129g | 440 | 441 | 0% | 390 |
| Chick-fil-A | Spicy Chicken Sandwich — 188g | 450 | 557 | 24% | 570 |
| Chick-fil-A | Hash Brown Scramble Bowl w/ Nuggets — 233g | 470 | 542 | 15% | 580 |
| Chick-fil-A | Hash Brown Scramble Bowl w/ Spicy Chicken — 251g | 500 | 523 | 5% | 600 |
| Chick-fil-A | Chilled Grilled Chicken Sub Sandwich — 230g | 500 | 458 | −8% | 485 |
| Chick-fil-A | Chick-fil-A® Deluxe Sandwich w/ Colby Jack — 254g | 510 | 682 | 34% | 695 |
| Chick-fil-A | Chicken & Waffles Breakfast Sandwich w/ Chick-fil-A® Filet — 150g | 530 | 584 | 10% | 540 |
| Chick-fil-A | Spicy Deluxe Sandwich w/ Pepper Jack — 259g | 540 | 674 | 25% | 688 |
| Chick-fil-A | Chicken, Egg & Cheese Biscuit — 211g | 550 | 638 | 16% | 640 |
| Chick-fil-A | Hash Brown Scramble Burrito w/ Sausage – no hash browns — 240g | 570 | 532 | −7% | 625 |
| Chick-fil-A | Cobb Salad w/ Grilled Filet (Warm) — 368g | 600 | 640 | 7% | 715 |
| Chick-fil-A | Cobb Salad w/ Grilled Nuggets — 378g | 630 | 640 | 2% | 710 |
| Chick-fil-A | Spicy Southwest Salad — 424g | 680 | 430 | −37% | 430 |
| Chick-fil-A | Hash Brown Scramble Burrito — 304g | 700 | 781 | 12% | 700 |
| Chick-fil-A | Chicken & Waffles Sandwich w/ Spicy Filet — 215g | 710 | 705 | −1% | 580 |
| Chick-fil-A | Spicy Southwest Salad w/ Nuggets — 448g | 800 | 680 | −15% | 680 |
| Chick-fil-A | Spicy Southwest Salad w/ Chick-fil-A Chick-n-Strips® — 475g | 880 | 760 | −14% | 760 |
| Chick-fil-A | Kale Crunch Side — 112g | 170 | 50 | −71% | 170 |
| Chick-fil-A | Original Flavor Waffle Potato Chips — 43g | 220 | 229 | 4% | 220 |
| Chick-fil-A | Chicken Tortilla Soup — 265g | 350 | 270 | −23% | 270 |
| Chick-fil-A | Chick-fil-A Waffle Potato Fries® — 125g | 420 | 281 | −33% | 420 |
| Chick-fil-A | Side Salad — 166g | 470 | 151 | −68% | 160 |
| Chick-fil-A | Catering Coffee — 2722g | 0 | 27 | Infinity% | 10 |
| Chick-fil-A | Pineapple Dragonfruit Sunjoy® (Unsweet Tea, Diet Lemonade) — 662g | 60 | 13 | −78% | 80 |
| Chick-fil-A | Gallon Freshly-Brewed Iced Tea Sweetened — 340g | 130 | 109 | −16% | 120 |
| Chick-fil-A | Iced Coffee — 661g | 200 | 160 | −20% | 160 |
| Chick-fil-A | Mocha Cream Cold Brew — 689g | 460 | 558 | 21% | 280 |
| Chick-fil-A | Chick-fil-A® Icedream® Cone — 135g | 180 | 255 | 42% | 200 |
| Chick-fil-A | Frosted Barq’s® Red Flash — 369g | 320 | 640 | 100% | 640 |
| Chick-fil-A | Caramel Frosted Coffee — 406g | 370 | 690 | 86% | 690 |
| Domino's | Hot Buffalo — 1 cup | 15 | 180 | 1100% | 180 |
| Domino's | Honey BBQ — 1 cup | 70 | 103 | 47% | 120 |
| Domino's | Nacho Cheese Dipping Cup — 1 cup | 120 | 98 | −18% | 140 |
| Domino's | Stuffed Cheesy Bread — 1 piece | 150 | 583 | 289% | 520 |
| Domino's | Ranch — 1 cup | 160 | 258 | 61% | 300 |
| Domino's | Jalapeno Bacon Stuffed Cheesy Bread — 1 piece | 170 | 652 | 284% | 620 |
| Domino's | Classic Hot Buffalo Specialty Chicken — 4 pieces | 190 | 694 | 265% | 620 |
| Domino's | Blue Cheese — 1 cup | 200 | 290 | 45% | 290 |
| Domino's | Garlic Bread Twists — 2 pieces | 220 | 349 | 59% | 300 |
| Domino's | Parmesan Bread Bites — 4 pieces | 220 | 344 | 56% | 330 |
| Domino's | Garlic — 1 cup | 250 | 410 | 64% | 250 |
| Domino's | Mild Buffalo Wings — 4 pieces | 260 | 694 | 167% | 610 |
| Domino's | Pacific Veggie — L (1/8 pizza) | 310 | 322 | 4% | 370 |
| Domino's | Honey BBQ Wings — 4 pieces | 310 | 650 | 110% | 650 |
| Domino's | Spinach & Feta — S (1/4 pizza) | 340 | 590 | 74% | 590 |
| Domino's | Mediterranean Veggie — 1/2 Sandwich | 350 | 252 | −28% | 510 |
| Domino's | Chicken Parm — 1/2 Sandwich | 380 | 646 | 70% | 590 |
| Domino's | Garlic Parmesan Wings — 4 pieces | 390 | 705 | 81% | 700 |
| Domino's | Buffalo Chicken — 1/2 Sandwich | 420 | 618 | 47% | 540 |
| Domino's | Classic — 1/2 hoagie | 430 | 837 | 95% | 720 |
| Domino's | Chicken Bacon Ranch — 1/2 Sandwich | 440 | 604 | 37% | 648 |
| Domino's | Bacon Cheddar — 1/2 hoagie | 520 | 515 | −1% | 521 |
| Domino's | Buffalo Ranch — 1/2 hoagie | 530 | 499 | −6% | 530 |
| Domino's | Chicken Alfredo — 1/2 bread bowl | 690 | 675 | −2% | 890 |
| Domino's | Italian Sausage Marinara — 1/2 bread bowl | 740 | 696 | −6% | 940 |
| Domino's | Marbled Cookie Brownie — 1 brownie | 200 | 344 | 72% | 380 |
| Domino's | Cinnamon Bread Twists — 2 pieces | 250 | 253 | 1% | 360 |
| Domino's | Dipped Chocolate Chunk Cookie — 1 cookie | 360 | 482 | 34% | 460 |
| Little Caesars | Oven Roasted | 510 | 927 | 82% | 800 |
| Little Caesars | Buffalo | 520 | 914 | 76% | 825 |
| Little Caesars | BBQ | 620 | 1036 | 67% | 910 |
| Little Caesars | Garlic Parmesan | 670 | 1385 | 107% | 960 |
| Little Caesars | Hula Hawaiian | 2180 | 1613 | −26% | 1650 |
| Little Caesars | Cheese | 2220 | 1663 | −25% | 1675 |
| Little Caesars | Veggie | 2240 | 1567 | −30% | 1415 |
| Little Caesars | Slices-N-Stix | 2300 | 2492 | 8% | 2265 |
| Little Caesars | Slices-N-Stix* Jalapeño | 2330 | 2386 | 2% | 2285 |
| Little Caesars | Pepperoni | 2500 | 2050 | −18% | 1985 |
| Little Caesars | Ultimate Supreme | 2500 | 1956 | −22% | 1920 |
| Little Caesars | Italian Sausage | 2660 | 1972 | −26% | 1885 |
| Little Caesars | 5 Meat Feast | 2830 | 2227 | −21% | 2250 |
| Little Caesars | Slices-N-Stix* Bacon | 2980 | 2576 | −14% | 2475 |
| Little Caesars | Stuffed Crust Pepperoni | 2980 | 2867 | −4% | 2755 |
| Little Caesars | 4 Cheese Crazy Puffs | 580 | 841 | 45% | 900 |
| Little Caesars | Crazy Bread — 8 bread sticks | 800 | 958 | 20% | 840 |
| Little Caesars | Stuffed Crazy Bread — 3 bread sticks & Crazy Sauce | 980 | 634 | −35% | 595 |
| Little Caesars | Italian Cheese Bread — 10 bread sticks | 1340 | 1508 | 13% | 1290 |
| Little Caesars | Pepperoni Cheese Bread — 10 bread sticks | 1520 | 1810 | 19% | 1590 |
| Little Caesars | Cookie Dough Brownie made with TWIX* Cookie Bar Pieces Little Caesars' Cookies — full package | 800 | 1823 | 128% | 1900 |
| Little Caesars | Cookie Dough Brownie made with M&M'S' MINIS Chocolate Candies — full package | 840 | 1823 | 117% | 1850 |
| Little Caesars | 3 Meat Treat | 2860 | 3380 | 18% | 3220 |
| McDonald's | Chicken McNuggets® — 4 Piece | 170 | 196 | 15% | 170 |
| McDonald's | Bagel (plain) | 270 | 251 | −7% | 270 |
| McDonald's | Egg McMuffin® | 310 | 309 | −0% | 310 |
| McDonald's | Sausage Burrito | 310 | 507 | 64% | 560 |
| McDonald's | Filet-O-Fish® | 380 | 463 | 22% | 580 |
| McDonald's | McChicken® | 390 | 527 | 35% | 572 |
| McDonald's | McDouble® | 390 | 547 | 40% | 540 |
| McDonald's | McCrispy® Strips — 3 piece | 400 | 275 | −31% | 280 |
| McDonald's | McCrispy® Strip Ranch Snack Wrap® | 400 | 426 | 7% | 490 |
| McDonald's | Sausage McGriddles® | 430 | 386 | −10% | 430 |
| McDonald's | Double Cheeseburger | 440 | 547 | 24% | 540 |
| McDonald's | Sausage Biscuit | 460 | 409 | −11% | 450 |
| McDonald's | McCrispy® | 470 | 577 | 23% | 673 |
| McDonald's | Daily Double | 490 | 525 | 7% | 577 |
| McDonald's | Egg and Cheese Bagel | 520 | 391 | −25% | 410 |
| McDonald's | Deluxe McCrispy® | 530 | 581 | 10% | 677 |
| McDonald's | Spicy Deluxe McCrispy® | 530 | 584 | 10% | 687 |
| McDonald's | Spicy McCrispy® | 530 | 569 | 7% | 653 |
| McDonald's | Hotcakes | 580 | 725 | 25% | 625 |
| McDonald's | Big Mac® | 580 | 748 | 29% | 748 |
| McDonald's | Quarter Pounder®* with Cheese Deluxe | 630 | 709 | 13% | 1060 |
| McDonald's | Steak, Egg & Cheese Bagel | 680 | 756 | 11% | 757 |
| McDonald's | Sausage, Egg & Cheese Bagel | 710 | 789 | 11% | 847 |
| McDonald's | Hotcakes and Sausage | 770 | 737 | −4% | 800 |
| McDonald's | Big Breakfast® with Hotcakes | 1340 | 1177 | −12% | 1220 |
| McDonald's | Apple Slices | 15 | 49 | 227% | 40 |
| McDonald's | Hash Browns | 140 | 122 | −13% | 140 |
| McDonald's | World Famous Fries® — Small | 230 | 158 | −31% | 230 |
| McDonald's | McCafé® Iced Black Coffee — Small | 5 | 4 | −20% | 5 |
| McDonald's | Lemonade — Small | 120 | 163 | 36% | 150 |
| McDonald's | Mango Pineapple Refresher — Small | 180 | 227 | 26% | 180 |
| McDonald's | Hi-C® Orange Lavaburst® — Small | 220 | 227 | 3% | 170 |
| McDonald's | McCafé® Iced Mocha Latte — Small | 270 | 178 | −34% | 300 |
| McDonald's | Chocolate Chip Cookie | 170 | 344 | 102% | 330 |
| McDonald's | Hot Caramel Sundae | 330 | 403 | 22% | 370 |
| McDonald's | Vanilla Shake — Small | 480 | 550 | 15% | 550 |
| Olive Garden | Minestrone Soup | 110 | 120 | 9% | 180 |
| Olive Garden | Pasta Fagioli Soup | 150 | 201 | 34% | 250 |
| Olive Garden | Broccoli | 150 | 94 | −37% | 90 |
| Olive Garden | add alfredo | 220 | 180 | −18% | 310 |
| Olive Garden | Crispy Shrimp Fritta | 220 | 461 | 110% | 560 |
| Olive Garden | add spicy ranch | 240 | 258 | 8% | 280 |
| Olive Garden | Fettuccine | 350 | 696 | 99% | 675 |
| Olive Garden | Spaghetti with Marinara | 370 | 632 | 71% | 635 |
| Olive Garden | Five Cheese Marinara | 400 | 858 | 115% | 875 |
| Olive Garden | Shrimp Scampi | 460 | 1235 | 168% | 805 |
| Olive Garden | Meatballs — 3 | 480 | 515 | 7% | 515 |
| Olive Garden | Lasagna Classico | 500 | 727 | 45% | 870 |
| Olive Garden | Five Cheese Ziti al Forno | 630 | 683 | 8% | 930 |
| Olive Garden | Grilled Chicken Margherita | 650 | 915 | 41% | 750 |
| Olive Garden | Calamari | 670 | 580 | −13% | 585 |
| Olive Garden | Fried Mozzarella | 800 | 780 | −2% | 715 |
| Olive Garden | Sirloin — 6 oz. | 980 | 741 | −24% | 710 |
| Olive Garden | Meatballs Parmigiana | 1040 | 648 | −38% | 650 |
| Olive Garden | Chicken Scampi | 1050 | 1333 | 27% | 930 |
| Olive Garden | Stuffed Chicken Marsala | 1170 | 841 | −28% | 920 |
| Olive Garden | Calabrian Steak & Shrimp Bucatini | 1220 | 1350 | 11% | 1356 |
| Olive Garden | Chicken & Shrimp Carbonara | 1370 | 1381 | 1% | 1426 |
| Olive Garden | Shrimp Alfredo | 1390 | 1090 | −22% | 1236 |
| Olive Garden | Tour of Italy | 1550 | 1797 | 16% | 1940 |
| Olive Garden | Chicken Alfredo (with crispy chicken fritta) — with crispy chicken fritta | 1710 | 1424 | −17% | 1516 |
| Olive Garden | Parmesan Garlic Broccoli | 150 | 164 | 9% | 230 |
| Olive Garden | Mashed Potatoes | 200 | 263 | 32% | 295 |
| Olive Garden | Tiramisu | 470 | 565 | 20% | 470 |
| Olive Garden | Pumpkin Cookie Butter Cheesecake | 620 | 839 | 35% | 860 |
| Olive Garden | Warm Italian Doughnuts | 810 | 1061 | 31% | 790 |
| Panda Express | Super Greens (Entree) — Entree (3.5 oz) | 45 | 85 | 89% | 70 |
| Panda Express | Hot & Sour Soup (Cup) — Cup (12.2 oz) | 140 | 135 | −4% | 100 |
| Panda Express | Chicken Potsticker — 3.3 oz / 3 pcs | 160 | 180 | 13% | 220 |
| Panda Express | Hot & Sour Soup (Bowl) — Bowl (17.4 oz) | 170 | 192 | 13% | 145 |
| Panda Express | Super Greens — 10 oz | 180 | 1477 | 721% | 510 |
| Panda Express | Mushroom Chicken — 5.7 oz | 180 | 308 | 71% | 205 |
| Panda Express | Broccoli Beef — 6.3 oz | 190 | 248 | 31% | 295 |
| Panda Express | Cream Cheese Rangoon — 2.4 oz / 3 pcs | 190 | 214 | 13% | 190 |
| Panda Express | Black Pepper Chicken — 6.3 oz | 200 | 318 | 59% | 280 |
| Panda Express | Black Pepper Sirloin Steak — 5.9 oz | 200 | 345 | 73% | 330 |
| Panda Express | Chicken Egg Roll — 2.75 oz / 1 roll | 200 | 207 | 4% | 200 |
| Panda Express | String Bean Chicken Breast — 5.6 oz | 210 | 298 | 42% | 225 |
| Panda Express | Kung Pao Chicken — 6.7 oz | 270 | 245 | −9% | 320 |
| Panda Express | Grilled Teriyaki Chicken — 6.1 oz | 280 | 308 | 10% | 275 |
| Panda Express | Eggplant Tofu — 6.1 oz | 310 | 270 | −13% | 270 |
| Panda Express | Honey Walnut Shrimp — 4.4 oz | 340 | 273 | −20% | 360 |
| Panda Express | SweetFire Chicken Breast® — 5.8 oz | 360 | 331 | −8% | 380 |
| Panda Express | Honey Sesame Chicken Breast — 6.2 oz | 420 | 516 | 23% | 410 |
| Panda Express | Beijing Beef® — 5.6 oz | 480 | 335 | −30% | 470 |
| Panda Express | Chow Mein — 12 oz | 520 | 1771 | 241% | 620 |
| Panda Express | The Original Orange Chicken® — 6.2 oz | 560 | 461 | −18% | 490 |
| Panda Express | White Steamed Rice — 12 oz | 570 | 439 | −23% | 450 |
| Panda Express | Chow Fun — 12 oz | 580 | 252 | −57% | 520 |
| Panda Express | Quinoa Fried Rice — 12 oz | 600 | 592 | −1% | 530 |
| Panda Express | Fried Rice — 12 oz | 610 | 592 | −3% | 520 |
| Panda Express | Sprite Zero — 12 oz | 0 | 0 | −NaN% | 0 |
| Panda Express | POWERade Mountain Berry Blast — 12 oz | 80 | 114 | 43% | 80 |
| Panda Express | Coca-Cola — 12 oz | 140 | 149 | 6% | 150 |
| Panda Express | Cherry Coca-Cola — 12 oz | 150 | 149 | −1% | 150 |
| Panda Express | Mello Yellow — 12 oz | 160 | 114 | −29% | 170 |
| Panda Express | Sweet Tea — 12 oz | 150 | 114 | −24% | 120 |
| Panera Bread | Catering Butter Pat — 1 pat | 35 | 52 | 49% | 50 |
| Panera Bread | Breakfast Portion - Country Rustic Sourdough — 1 Slice | 130 | 110 | −15% | 110 |
| Panera Bread | Tomato Basil Miche — 2 oz (about 1/2 inch slice / 57g) | 150 | 156 | 4% | 145 |
| Panera Bread | Breakfast Portion - Tomato Basil Miche — 1 Slice | 160 | 118 | −26% | 110 |
| Panera Bread | Classic White Loaf — 2.2 oz (about 3/4 inch slice / 62g) | 190 | 166 | −13% | 165 |
| Panera Bread | Breakfast Portion - Artisan Ciabatta — 1/3 Loaf | 250 | 270 | 8% | 270 |
| Panera Bread | Breakfast Portion - French Baguette — 1/4 Baguette | 290 | 190 | −34% | 190 |
| Panera Bread | Bacon Mac & Cheese - Bread Rice — 1 1/2 Cups | 300 | 925 | 208% | 955 |
| Panera Bread | Farmhouse Crunch Salad - No Almonds — 1/2 Salad | 350 | 483 | 38% | 470 |
| Panera Bread | Tomato Basil BLT on Tomato Basil Miche — 1/2 Sandwich | 390 | 479 | 23% | 473 |
| Panera Bread | Smokehouse BBQ Chicken on Artisan Ciabatta — 1/2 Sandwich | 410 | 494 | 20% | 515 |
| Panera Bread | Broccoli Cheddar — 1 1/2 Cups | 420 | 295 | −30% | 430 |
| Panera Bread | Toasted Frontega Chicken on Black Pepper Focaccia — 1/2 Sandwich | 430 | 680 | 58% | 575 |
| Panera Bread | Market Bowl - All-In Veggie — 1/2 Bowl | 450 | 698 | 55% | 660 |
| Panera Bread | Turkey & Cheddar Wrap | 460 | 560 | 22% | 560 |
| Panera Bread | Grilled Chicken & Avo BLT on Country Rustic Sourdough — 1/2 Sandwich | 470 | 708 | 51% | 712 |
| Panera Bread | Chipotle Chicken Avo Melt on Black Pepper Focaccia Round — 1/2 Sandwich | 500 | 647 | 29% | 727 |
| Panera Bread | Bacon Double Take on Black Pepper Focaccia | 550 | 830 | 51% | 855 |
| Panera Bread | Asiago Everything Bagel Stack Sandwich - Wake-Up BLT | 570 | 615 | 8% | 644 |
| Panera Bread | Asiago Bagel Stack Sandwich - Chicken Roma | 610 | 628 | 3% | 628 |
| Panera Bread | Sourdough Soup Bowl — 1 Bread Bowl | 650 | 390 | −40% | 390 |
| Panera Bread | Cream of Chicken and Wild Rice — 1 Container | 700 | 319 | −54% | 390 |
| Panera Bread | Bread Bowl — 1 Bread bowl with soup | 850 | 537 | −37% | 690 |
| Panera Bread | Ultimate Mac Stuffer — 1 Stuffer | 930 | 1007 | 8% | 860 |
| Panera Bread | Catering French Baguette — 1 Baguette | 1160 | 925 | −20% | 920 |
| Panera Bread | Side - Pickle Spear — 1 Spear | 5 | 5 | 0% | 5 |
| Panera Bread | Fruit Cup — 1 container | 60 | 84 | 40% | 75 |
| Panera Bread | Side - Apple — 1 Apple | 80 | 110 | 38% | 95 |
| Panera Bread | French Baguette - Side Portion — 3 1/2 inch slice | 190 | 95 | −50% | 95 |
| Panera Bread | Greek Yogurt with Berries — 1 Parfait | 250 | 317 | 27% | 345 |
| Panera Bread | British Breakfast Tea - 16 fl oz — 16 fl oz (473 mL) | 0 | 5 | Infinity% | 2 |
| Panera Bread | Diet Dr. Pepper - 30 fl oz — 30 fl oz (887 mL) | 0 | 18 | Infinity% | 4 |
| Panera Bread | Diet Mountain Dew - 20 fl oz — 20 fl oz (591 mL) | 10 | 12 | 20% | 3 |
| Panera Bread | Agave Lemonade - 20 fl oz — 20 fl oz (591 mL) | 210 | 148 | −30% | 250 |
| Panera Bread | Caramel Latte - 16 fl oz — 16 fl oz (473 mL) | 320 | 283 | −12% | 310 |
| Panera Bread | Sweet Cream Cold Foam — 3 swirls | 80 | 154 | 93% | 100 |
| Panera Bread | Pastry - Asiago Croissant Twist — 1 Twist | 100 | 393 | 293% | 390 |
| Starbucks | Rolled & Steel-Cut Oatmeal — 1 Piece 42 g | 160 | 27 | −83% | 160 |
| Starbucks | Egg White & Roasted Red Pepper Egg Bites | 170 | 157 | −8% | 170 |
| Starbucks | Iced Sugar-Free Vanilla Protein Matcha — Grande 16 fl oz | 210 | 114 | −46% | 170 |
| Starbucks | Sugar-Free Vanilla Protein Matcha — Grande 16 fl oz | 240 | 241 | 0% | 190 |
| Starbucks | Iced Protein Matcha — Grande 16 fl oz | 260 | 114 | −56% | 180 |
| Starbucks | Pumpkin Spice Chai — Grande 16 fl oz | 260 | 241 | −7% | 310 |
| Starbucks | Turkey Bacon, Cheddar & Egg White Sandwich — 1 Serving 142 g | 260 | 369 | 42% | 350 |
| Starbucks | Iced Mango Cream Matcha — Grande 16 fl oz | 270 | 114 | −58% | 300 |
| Starbucks | Bacon & Gruyère Egg Bites | 300 | 410 | 37% | 300 |
| Starbucks | Ellenos Strawberry Shortcake Greek Yogurt — 1 Serving 198 g | 310 | 226 | −27% | 300 |
| Starbucks | Iced Mango Cream Chai — Grande 16 fl oz | 310 | 241 | −22% | 350 |
| Starbucks | Iced Banana Bread Matcha — Grande 16 fl oz | 330 | 241 | −27% | 330 |
| Starbucks | Iced Pumpkin Cream Matcha — Grande 16 fl oz | 350 | 300 | −14% | 300 |
| Starbucks | Iced Banana Bread Chai — Grande 16 fl oz | 350 | 241 | −31% | 360 |
| Starbucks | Tomato & Mozzarella on Focaccia — 1 Serving 153 g | 360 | 424 | 18% | 440 |
| Starbucks | Iced Orange Cream Chai — Grande 16 fl oz | 390 | 241 | −38% | 340 |
| Starbucks | Iced Dubai Chocolate Matcha — Grande 16 fl oz | 400 | 390 | −2% | 390 |
| Starbucks | Iced Pumpkin Cream Chai — Grande 16 fl oz | 400 | 128 | −68% | 370 |
| Starbucks | Sausage, Cheddar & Egg Sandwich — 1 Serving 157 g | 480 | 478 | −0% | 495 |
| Starbucks | Ham & Swiss on Baguette — 1 Serving 176 g | 510 | 511 | 0% | 527 |
| Starbucks | Crispy Grilled Cheese on Sourdough | 520 | 514 | −1% | 527 |
| Starbucks | Bacon, Sausage & Egg Wrap | 640 | 722 | 13% | 716 |
| Starbucks | That's It® – Apple + Blueberry Bar — 1 Piece | 100 | 176 | 76% | 110 |
| Starbucks | SkinnyDipped Lemon Bliss Almonds — 1 Piece | 170 | 168 | −1% | 150 |
| Starbucks | Jalapeño Chicken Pocket — 1 Piece 84 g | 200 | 150 | −25% | 180 |
| Starbucks | Spicy Falafel Pocket — 1 Serving 94 g | 230 | 483 | 110% | 250 |
| Starbucks | Chicken Bacon Protein Pocket — 1 Serving 124 g | 310 | 215 | −31% | 290 |
| Starbucks | Cold Brew — Grande 16 fl oz | 5 | 5 | 0% | 5 |
| Starbucks | Pecan Cortado — Short 8 fl oz | 130 | 154 | 18% | 154 |
| Starbucks | London Fog Latte — Grande 16 fl oz | 180 | 250 | 39% | 242 |
| Starbucks | Pistachio Cream Cold Brew — Grande 16 fl oz | 250 | 299 | 20% | 275 |
| Starbucks | Iced Pecan Crunch Latte — Grande 16 fl oz | 380 | 265 | −30% | 295 |
| Starbucks | Petite Vanilla Bean Scone — 1 Serving 33 g | 140 | 126 | −10% | 130 |
| Starbucks | Plain Bagel — 1 Serving 100 g | 250 | 264 | 6% | 275 |
| Starbucks | Banana, Walnut & Pecan Loaf — 1 Piece | 380 | 463 | 22% | 430 |
| Subway | Veggie Delite® — 6-inch | 310 | 281 | −9% | 295 |
| Subway | Buffalo Chicken — 6-inch | 460 | 442 | −4% | 520 |
| Subway | Oven-Roasted Turkey & Ham — 6-inch | 460 | 375 | −18% | 410 |
| Subway | Oven-Roasted Turkey — 6-inch | 470 | 299 | −36% | 320 |
| Subway | Veggie Patty — 6-inch | 470 | 454 | −3% | 470 |
| Subway | Honey Mustard Chicken — 6-inch | 480 | 462 | −4% | 455 |
| Subway | Black Forest Ham — 6-inch | 480 | 295 | −39% | 345 |
| Subway | B.L.T. — 6-inch | 480 | 490 | 2% | 525 |
| Subway | Pizza Sub — 6-inch | 480 | 647 | 35% | 560 |
| Subway | Chipotle Philly — 6-inch | 490 | 637 | 30% | 645 |
| Subway | Roast Beef — 6-inch | 490 | 384 | −22% | 370 |
| Subway | Subway Club® — 6-inch | 500 | 437 | −13% | 445 |
| Subway | Grilled Chicken — 6-inch | 510 | 359 | −30% | 365 |
| Subway | Cold Cut Combo® — 6-inch | 520 | 440 | −15% | 460 |
| Subway | All American Club® — 6-inch | 540 | 455 | −16% | 500 |
| Subway | Meatball Marinara — 6-inch | 550 | 613 | 11% | 597 |
| Subway | Tuna — 6-inch | 560 | 403 | −28% | 475 |
| Subway | Chicken & Bacon Ranch — 6-inch | 580 | 628 | 8% | 680 |
| Subway | Steak & Bacon — 6-inch | 590 | 586 | −1% | 590 |
| Subway | B.M.T.® — 6-inch | 590 | 591 | 0% | 625 |
| Subway | Big Hot Pastrami — 6-inch | 620 | 605 | −2% | 525 |
| Subway | Turkey & Ham — 12-inch wrap | 620 | 693 | 12% | 740 |
| Subway | Spicy Italian — 6-inch | 660 | 789 | 20% | 780 |
| Subway | 5 Meat Italian — 6-inch | 660 | 829 | 26% | 820 |
| Subway | Meatball Pepperoni — 6-inch | 670 | 788 | 18% | 800 |
| Subway | Sweet Onion Chicken Teriyaki® — 6-inch | 430 | 522 | 21% | 575 |
| Whataburger | Garden Salad | 160 | 296 | 85% | 335 |
| Whataburger | Garden Salad with Grilled Chicken | 290 | 481 | 66% | 525 |
| Whataburger | Whatachick'n' Strips — (2) | 300 | 497 | 66% | 655 |
| Whataburger | Egg Sandwich | 310 | 385 | 24% | 381 |
| Whataburger | #21 Breakfast On A Bun* with Bacon | 360 | 530 | 47% | 550 |
| Whataburger | Buffalo Ranch Chicken Salad† with Grilled Chicken | 370 | 665 | 80% | 710 |
| Whataburger | Taquito with Sausage | 380 | 373 | −2% | 390 |
| Whataburger | Garden Salad with Whatachick'n' | 400 | 548 | 37% | 635 |
| Whataburger | Taquito with Potato | 400 | 330 | −17% | 330 |
| Whataburger | Cobb Salad with Grilled Chicken | 430 | 788 | 83% | 853 |
| Whataburger | Jalapeño Cheddar Biscuit with Egg & Cheese | 440 | 535 | 22% | 465 |
| Whataburger | Buffalo Ranch Chicken Salad† with Whatachick'n' | 480 | 760 | 58% | 820 |
| Whataburger | Apple & Cranberry Salad with Whatasackhick'n' | 490 | 887 | 81% | 690 |
| Whataburger | #26 Jalapeno Cheddar Biscuit & Gravy | 490 | 590 | 20% | 490 |
| Whataburger | Grilled Cheese | 510 | 415 | −19% | 392 |
| Whataburger | Jalapeño Cheddar Biscuit with Sausage | 510 | 618 | 21% | 540 |
| Whataburger | Cobb Salad with Spicy Chicken | 550 | 882 | 60% | 963 |
| Whataburger | #16 Chicken Fajita Taco | 580 | 450 | −22% | 447 |
| Whataburger | #1 Whataburger | 590 | 999 | 69% | 1112 |
| Whataburger | #22 Buttermilk Biscuit Sandwich with Sausage | 640 | 737 | 15% | 685 |
| Whataburger | Jr. Buffalo Ranch Chicken Strip Sandwich | 660 | 460 | −30% | 540 |
| Whataburger | Jr. Mushroom Swiss Burger | 700 | 543 | −22% | 525 |
| Whataburger | #2 Double Meat Whataburger | 830 | 990 | 19% | 940 |
| Whataburger | Whataburger. Patty Melt | 940 | 868 | −8% | 955 |
| Whataburger | #3 Triple Meat Whataburger | 1070 | 1360 | 27% | 1290 |
| Whataburger | Apple Slices | 30 | 49 | 63% | 42 |
| Whataburger | French Fries — Small | 270 | 178 | −34% | 280 |
| Whataburger | Onion Rings — Medium | 300 | 422 | 41% | 380 |
| Whataburger | Decaf Coffee — Small (12 fl oz) | 0 | 0 | −NaN% | 5 |
| Whataburger | Unsweet Tea — Small (20 fl oz) | 5 | 6 | 20% | 2 |
| Whataburger | Kid's Unsweet Tea — Kid's (16 fl oz) | 5 | 5 | 0% | 2 |
| Whataburger | 1% Low Fat Milk — 8 fl oz | 110 | 105 | −5% | 102 |
| Whataburger | 1% Low Fat Chocolate Milk — 8 fl oz | 160 | 156 | −2% | 155 |
| Whataburger | Kid's Sweet Tea — Kid's (16 fl oz) | 220 | 151 | −31% | 150 |
| Whataburger | Jr. Sweet & Spicy Bacon Burger | 600 | 648 | 8% | 640 |
| Whataburger | Sweet & Spicy Bacon Burger | 1080 | 998 | −8% | 990 |
| Wingstop | Cajun — 1ea (33.6g) | 80 | 92 | 15% | 91 |
| Wingstop | Original Hot — 1ea (33.15g) | 80 | 94 | 18% | 88 |
| Wingstop | Plain — 1ea (27.14g) | 80 | 88 | 10% | 72 |
| Wingstop | Atomic — 1ea (33.53g) | 90 | 94 | 4% | 90 |
| Wingstop | Hawaiian — 1ea (33.94g) | 90 | 93 | 3% | 96 |
| Wingstop | Hickory Smoked BBQ — 1ea (34.34g) | 90 | 83 | −8% | 98 |
| Wingstop | Mango Habanero — 1ea (33.94g) | 90 | 93 | 3% | 101 |
| Wingstop | Spicy Korean Q — 1ea (33.81g) | 90 | 92 | 2% | 100 |
| Wingstop | Louisiana Rub — 1ea (29.25g) | 100 | 80 | −20% | 77 |
| Wingstop | Garlic Parmesan — 1ea (31.04g) | 110 | 85 | −23% | 104 |
| Wingstop | Hot Honey Rub — 1ea (32g) | 110 | 87 | −21% | 94 |
| Wingstop | Lemon Pepper — 1ea (29.98g) | 110 | 82 | −25% | 79 |
| Wingstop | Mild — 1ea (32.94g) | 110 | 90 | −18% | 87 |
| Wingstop | Veggie Sticks Celery — 5 Sticks (56g) | 10 | 10 | 0% | 8 |
| Wingstop | Fried Corn — 5ea (154g) | 200 | 320 | 60% | 320 |
| Wingstop | Seasoned Fries — Regular 10oz (191g) | 500 | 378 | −24% | 590 |
| Wingstop | Cheese Fries — Regular 10oz (255g) | 580 | 483 | −17% | 695 |
| Wingstop | Louisiana Voodoo Fries — Regular 10oz (283g) | 680 | 653 | −4% | 770 |
| Wingstop | Brownie — 1ea (98g) | 430 | 397 | −8% | 420 |

Not read as a dish by the AI (left out): Little Caesars: Add Stuffed Crust to any Detroit-Style Deep Dish; Little Caesars: Add Stuffed Crust to any round pizza.

**Limits.** The chains' dish names are well known, so the AI may remember some numbers; a local restaurant's menu has no
such help. Menus usually print a description too; this test had names and sizes only.
