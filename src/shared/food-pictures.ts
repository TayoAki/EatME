/**
 * Small food pictures for meals and menu items that have no photo of their own. They are Microsoft's
 * Fluent Emoji (3D style), free to use under the MIT licence (`assets/foods/LICENSE`, credited on the
 * Sources screen), one 160 px picture per key in `assets/foods/<key>.webp`. Never a chain's own photo or
 * logo: those stay the chains' (Apple 5.2.1).
 */

export const FOOD_PICTURES = [
  'apple', 'avocado', 'bacon', 'bagel', 'banana', 'beans', 'beer', 'bento', 'berries', 'boba', 'bread', 'burger',
  'burrito', 'cake', 'candy', 'cereal', 'cheese', 'chicken', 'chocolate', 'cocktail', 'coffee', 'cookie', 'corn',
  'crab', 'croissant', 'cupcake', 'curry', 'custard', 'doughnut', 'dumpling', 'egg', 'falafel', 'fish', 'fondue',
  'fries', 'grapes', 'honey', 'hot-dog', 'ice-cream', 'juice', 'lobster', 'melon', 'milk', 'noodles', 'nuts',
  'packaged', 'pancakes', 'pasta', 'pie', 'pizza', 'plate', 'popcorn', 'potato', 'pretzel', 'ribs', 'rice', 'salad',
  'sandwich', 'sauce', 'shaved-ice', 'shrimp', 'smoothie', 'soda', 'soft-serve', 'soup', 'spirits', 'steak', 'sushi',
  'taco', 'takeout', 'tamale', 'tea', 'vegetables', 'waffle', 'water', 'wine', 'wrap',
] as const;
export type FoodPicture = (typeof FOOD_PICTURES)[number];

/**
 * First match wins, so the order matters: drinks before what's in them ("strawberry lemonade"), sweets
 * and breakfast before plain chocolate or eggs ("chocolate croissant", "egg McMuffin"), dishes before
 * what they're made of ("chicken noodle soup", "turkey sandwich"), sides last.
 */
const RULES: readonly (readonly [FoodPicture, RegExp])[] = [
  // Drinks
  ['soda', /\b(shakes?|milkshakes?|malts?|sodas?|colas?|coke|pepsi|sprite|dr\.? ?pepper|root beer|fanta|mountain dew|fountain drinks?|soft drinks?|iced tea|sweet tea|energy drinks?|red bull|punch|hi-c|fruit drinks?)\b/],
  ['beer', /\b(beers?|ales?|lagers?|ipas?|stouts?|pilsners?|hefeweizen)\b/],
  ['wine', /\b(wines?|merlot|cabernet|chardonnay|pinot|sauvignon|riesling|rose|prosecco|champagne|sangria)\b/],
  ['cocktail', /\b(cocktails?|margaritas?|martinis?|mojitos?|daiquiris?|cosmopolitans?|mimosas?|old fashioned|negronis?|spritz|mules?|hard seltzers?)\b/],
  ['spirits', /\b(whiske?y|bourbon|vodka|gin|rum|tequila|scotch|brandy|cognac|shots?)\b/],
  ['boba', /\b(boba|bubble tea|milk tea|tapioca)\b/],
  ['coffee', /\b(coffees?|espressos?|lattes?|cappuccinos?|macchiatos?|americanos?|mochas?|cold brew|frappuccinos?|frappes?|cortados?|flat whites?|hot chocolate|cocoa)\b/],
  ['tea', /\b(teas?|matcha|chai|kombucha)\b/],
  ['smoothie', /\b(smoothies?|lemonades?|refreshers?|agua fresca|slush(ies|es)?|frozen drinks?|icees?)\b/],
  ['juice', /\b(juices?)\b/],
  ['milk', /\b(chocolate milk|milk)\b(?!\s*chocolate)/],
  ['water', /\b(water|seltzer|dasani)\b/],
  // Sweets, bakery and breakfast
  ['sandwich', /\b(mcmuffins?|english muffins?|mcgriddles?|croissan'?wich|breakfast sandwich(es)?)\b/],
  ['ice-cream', /\b(ice creams?|gelato|sorbet|sundaes?|blizzards?|mcflurry|concretes?|banana split|scoops?)\b/],
  ['soft-serve', /\b(cones?|soft serve|frozen yogurt|froyo|frozen custard|custards?)\b/],
  ['shaved-ice', /\b(shaved ice|italian ice|water ice|gelati|snow cones?|ices?)\b/],
  ['doughnut', /\b(donuts?|doughnuts?|munchkins?|crullers?|fritters?|timbits)\b/],
  ['cookie', /\b(cookies?|biscotti|macarons?|snickerdoodles?)\b/],
  ['cupcake', /\b(cupcakes?|muffins?)\b/],
  ['cake', /\b(cakes?|cheesecakes?|bundt|tiramisu|tres leches|brownies?)\b/],
  ['pie', /\b(pies?|cobblers?|tarts?|turnovers?)\b/],
  ['custard', /\b(puddings?|flan|creme brulee)\b/],
  ['pancakes', /\b(pancakes?|hotcakes?|crepes?|flapjacks?)\b/],
  ['waffle', /\b(waffles?)\b/],
  ['bagel', /\b(bagels?)\b/],
  ['croissant', /\b(croissants?|pastry|pastries|danish(es)?|scones?|cinnamon rolls?|kolaches?|strudels?|churros?)\b/],
  ['chocolate', /\b(chocolates?|fudge|truffles?(?! (fries|oil|mac|pasta|risotto|burgers?))|(protein|granola|energy|candy|cereal|snack|nut) bars?)\b/],
  ['candy', /\b(candy|candies|gumm(y|ies)|lollipops?|licorice|jelly beans?|marshmallows?)\b/],
  ['popcorn', /\b(popcorn|kettle corn)\b/],
  ['pretzel', /\b(pretzels?)\b/],
  ['egg', /\b(eggs?|omelets?|omelettes?|scrambled|scrambles?|frittatas?|quiches?|benedict|big breakfast)\b(?!\s*rolls?)/],
  // Dishes
  ['burrito', /\b(burritos?|chimichangas?)\b/],
  ['taco', /\b(tacos?|quesadillas?|nachos?|tostadas?|chalupas?|gorditas?|crunchwraps?|fajitas?|enchiladas?)\b/],
  ['tamale', /\b(tamales?)\b/],
  ['pizza', /\b(pizzas?|calzones?|strombolis?|pepperoni|margherita)\b/],
  ['hot-dog', /\b(hot ?dogs?|corn ?dogs?|frankfurters?|brats?|bratwursts?|coneys?)\b/],
  ['burger', /\b(burgers?|cheeseburgers?|hamburgers?|whoppers?|big mac|quarter pounder|mcdouble|baconator|butterburgers?|steakburgers?|sliders?|patty melts?|double double)\b/],
  ['wrap', /\b(wraps?|pitas?|gyros?|shawarmas?|kebabs?|kabobs?|souvlaki)\b/],
  ['sandwich', /\b(sandwich(es)?|subs?|hoagies?|heroes|grinders?|paninis?|melts?|clubs?|blts?|po'? ?boys?|cheesesteaks?|phill(y|ies)|reubens?|cubanos?|mcchicken|mccrispy|toasties?)\b/],
  ['salad', /\b(salads?|caesar|coleslaw|slaw|cobb)\b/],
  ['fries', /\b(fries|french fry|tots|tater tots|hash ?browns?|onion rings?|potato wedges)\b/],
  ['soup', /\b(soups?|chili|stews?|chowders?|bisques?|gumbo|pozole|menudo)\b/],
  ['noodles', /\b(noodles?|ramen|pho|udon|soba|lo mein|chow mein|pad thai|yakisoba)\b/],
  ['pasta', /\b(pastas?|spaghetti|fettuccine|alfredo|penne|lasagn[ae]s?|ravioli|tortellini|linguine|mac (and|&|n) cheese|macaroni|carbonara|rigatoni|ziti|gnocchi|bolognese)\b/],
  ['sushi', /\b(sushi|sashimi|nigiri|maki|california rolls?|hand rolls?|poke)\b/],
  ['dumpling', /\b(dumplings?|potstickers?|gyozas?|bao|egg rolls?|spring rolls?|wontons?|rangoons?|dim sum|shumai|empanadas?)\b/],
  ['curry', /\b(curry|curries|tikka|masala|korma|vindaloo|biryani)\b/],
  ['cereal', /\b(cereals?|oatmeal|oats|porridge|granola|yogh?urts?|parfaits?|acai|muesli|grits)\b/],
  ['rice', /\b(rice|risotto|bowls?|teriyaki)\b/],
  ['falafel', /\b(falafels?|hummus)\b/],
  ['bento', /\b(bento|plate lunch)\b/],
  ['fondue', /\b(fondue)\b/],
  // Meat and fish
  ['fish', /\b(fish|salmon|tuna|cod|tilapia|halibut|mahi|catfish|trout|swordfish|pollock|haddock)\b/],
  ['chicken', /\b(chicken|nuggets?|mcnuggets|tenders?|wings?|drumsticks?|thighs?|crispers|strips|turkey)\b/],
  ['ribs', /\b(ribs?|bbq|barbecue|brisket|pulled pork|burnt ends|pork|ham|lamb)\b/],
  ['steak', /\b(steaks?|sirloin|ribeye|filets?|fillets?|tenderloin|t-bone|porterhouse|prime rib|beef|roast|meatloaf|meatballs?|veal)\b/],
  ['bacon', /\b(bacon|sausages?|chorizo)\b/],
  ['shrimp', /\b(shrimp|prawns?|scallops?|calamari|clams?|oysters?|seafood)\b/],
  ['crab', /\b(crabs?|crawfish|crayfish|boil)\b/],
  ['lobster', /\b(lobsters?)\b/],
  // Sides, produce and the rest
  ['potato', /\b(potato(es)?|mashed|chips|crisps)\b/],
  ['corn', /\b(corn|elote|cornbread)\b/],
  ['vegetables', /\b(vegetables?|veggies?|broccoli|green beans|carrots?|spinach|kale|asparagus|brussels|zucchini|edamame|peas|cauliflower|cucumbers?|celery)\b/],
  ['beans', /\b(beans|refried|lentils?|chickpeas?)\b/],
  ['avocado', /\b(avocados?|guacamole|guac)\b/],
  ['apple', /\b(apples?|pears?|fruits?)\b/],
  ['banana', /\b(bananas?|plantains?)\b/],
  ['grapes', /\b(grapes?|raisins?)\b/],
  ['berries', /\b(berries|strawberr(y|ies)|blueberr(y|ies)|raspberr(y|ies)|blackberr(y|ies)|cherr(y|ies))\b/],
  ['melon', /\b(melons?|watermelon|cantaloupe|honeydew|pineapples?|mangos?|mangoes|peach(es)?|oranges?)\b/],
  ['nuts', /\b(nuts?|peanuts?|almonds?|cashews?|walnuts?|pecans?|pistachios?|trail mix|peanut butter|almond butter)\b/],
  ['cheese', /\b(cheeses?|mozzarella sticks|cheese curds|queso|cheddar)\b/],
  ['bread', /\b(breads?|toast|rolls?|buns?|biscuits?|breadsticks?|garlic knots?|baguettes?|tortillas?|naan|crackers?)\b/],
  ['honey', /\b(honey|agave|maple syrup)\b(?!\s*mustard)/],
  ['sauce', /\b(sauces?|dressings?|dips?|ketchup|mustard|mayo(nnaise)?|ranch|salsa|gravy|syrups?|aioli|vinaigrette|condiments?|spreads?|jam|jelly|butter|cream cheese|sour cream)\b/],
];

/**
 * The picture for a meal or food, from its name. When the name says nothing, `source` (how it was
 * logged, `MealSource`) picks a stand-in: a can for packaged food, a takeout box for a restaurant's.
 */
export function foodPictureFor(name: string | null | undefined, source?: string): FoodPicture {
  const text = (name ?? '')
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[’‘`]/g, "'")
    .toLowerCase();
  for (const [picture, pattern] of RULES) if (pattern.test(text)) return picture;
  if (source === 'barcode' || source === 'label') return 'packaged';
  if (source === 'restaurant' || source === 'menu') return 'takeout';
  if (source === 'drink') return 'cocktail';
  return 'plate';
}
