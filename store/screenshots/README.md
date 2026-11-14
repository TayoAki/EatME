# App Store screenshots

`ios-6.9/` is the iPhone 6.9" set for App Store Connect: 1320 × 2868 px, portrait, PNG without an alpha channel
(App Store Connect refuses transparency). `ios-6.5/` is the same set at 1284 × 2778 px for the 6.5" slot, the one
the version page shows first. One set is enough (Apple scales it for the other iPhones): upload `ios-6.5/` into the
slot on the page, or `ios-6.9/` through View All Sizes in Media Manager. Upload them in this order; Weight Class
is iPhone-only, so there's no iPad set.

This is version 1.2's set (14 November 2026): ten screenshots, the most App Store Connect takes.

| File | Headline | Line under it |
| --- | --- | --- |
| `01-snap.png` | Snap a meal. Get the numbers. | Weight Class names the foods and estimates calories, protein, carbs and fat. |
| `02-estimate.png` | An estimate you can check | Every food with its grams and calories. Change any number in a tap. |
| `03-glp1.png` | Built for GLP-1 medicines | Doses, pens and injection sites, with protein, fiber and water first. |
| `04-flamie.png` | Meet Flamie, your streak flame | It grows with every day you log, never with your weight. |
| `05-home.png` | See what's left today | Calories, protein, carbs and fat, against a plan made for you. |
| `06-what-to-order.png` | Eating out? See what fits (**Premium** pill) | Chain menus ranked for what's left of your day, with their own numbers. |
| `07-plan-tomorrow.png` | Plan tomorrow in one tap (**Premium** pill) | A draft of your day from meals you already eat. Swap a meal or shuffle. |
| `08-weight.png` | See the trend, not the noise | A smoothed weight trend with your goal and milestones. |
| `09-calm.png` | Calm mode for calmer days | Swap calorie counts for simple words whenever you like. |
| `10-search.png` | Search or scan, no AI needed | Everyday foods and barcodes, weighed your way. |

The first three are what most people see in search results, so they carry what makes Weight Class different: a
scan with real food, an estimate you can check food by food, and GLP-1 mode. 04 is Flamie, new in 1.2 (`FLAMIE.md`
§9). Version 1.0 (build 4) keeps the seven screenshots it was submitted with (the set before 25 October 2026 in git
history); 1.1 never shipped on its own.

## How they look

Built after a look at the sets of Cal AI, MyFitnessPal, Lose It!, MacroFactor, Foodvisor and SnapCalorie (14
November 2026): the ones that stand out show real, appetizing food, a big short headline, the app in a phone, and
one part of the screen shown bigger. So each screenshot has:

- a near-black background (the app icon's ink) with a soft glow in the screenshot's own color, taken from the app's
  palette (protein coral, carbs amber, water teal, the flame's orange…);
- a two-line headline in Inter Display ExtraBold with one word in that color, and one or two lines under it;
- the real app screen in a phone, with an iOS status bar and home indicator drawn over it;
- callouts: cards cut from real screens and shown 1.1 to 1.2 times bigger, placed over the card they come from or
  over the bottom of the phone. 01's is the AI's result for the same poke bowl;
- on 02, food labels with lines to the foods in the photo. Their names, grams and calories are the meal's own
  Foods list in the app (Sushi rice 150 g · 194 kcal, Salmon 90 g · 169 kcal, Edamame 60 g · 84 kcal, Avocado
  50 g · 80 kcal).

**Frame.** The phone is our own plain frame (a dark rim, no Dynamic Island or buttons), not Apple's artwork.
Apple's iPhone bezels (Apple Design Resources) look more real, and `compose.cjs --frame apple --bezel <png>` can use
the iPhone 18 Pro Max one, but their license only covers "mock-ups of user interfaces designed for use in software
products that run only on Apple's … operating system software", and Weight Class is on Google Play too. If the
owner decides to use it anyway, download it from developer.apple.com; it is never committed here.

## How they were made

Real screens of the app: the web build of this repo at the iPhone 16/17/18 Pro Max size, 440 × 956 points at 3×,
with the iPhone's safe areas emulated (Chromium's `Emulation.setSafeAreaInsetsOverride`, 62 pt at the top and 34 pt
at the bottom, and `viewport-fit=cover`), so every screen sits under the status bar as it does on the phone. The
web build's tab bar is hidden (iOS shows its own native one).

- **Flags as in production** (`/api/features` on 14 November: food-quality tag, multi-photo, follow-up question and
  What to order on): the local server ran with `FOOD_QUALITY_TAG=true FOLLOW_UP_QUESTION=true`. Payments were off
  locally, so Premium screens open as they do for a subscriber, and 06 and 07 carry the Premium pill.
- **A fictional demo person, "Alex"**, from `npm run demo:account -- --days 45` on a local database, then:
  - the sample's one-day gap filled, so the streak is an unbroken 45 days (Flamie is a Bonfire);
  - the sample meals dated to their own days: the demo script inserts them all at once, and the 50-a-day AI limit
    counts by when a meal was created;
  - 13 weeks of weigh-ins, 87 kg down to 82 kg, with day-to-day noise;
  - GLP-1 mode through the app's own API: a weekly semaglutide pen since 17 August, seven doses on Mondays, the pen
    counts;
  - in the evening, tomorrow drafted from Home's card.
- **Today's meals were scanned for real**: CC0 photos (below) chosen in the app's gallery picker and analyzed by the
  app's AI (OpenRouter), so the numbers on the screenshots are the AI's own. The yogurt bowl came back at 661 kcal
  and was set to ½ with the app's portion buttons (330 kcal at 8:10 am); the poke bowl is 696 kcal at 12:40 pm. A
  local S3 stand-in held the photos (the `S3_*` variables pointed at it). The camera on 01 is Chromium's fake
  camera playing the poke bowl photo.
- **Time of day comes from the time zone** (the server and the browser both work out "now" from it): Asia/Dhaka
  where it was about 3:45 pm, and Asia/Tokyo where it was 7:05 pm for 07 (Plan tomorrow shows from 5 pm). Meal,
  water and dose times moved with the zone at the same clock time. 09 was taken with calm mode on, 05 and 09 with
  GLP-1 mode switched off for a moment (it's on in 03), and 10 searches "rotisserie chicken breast", which no chain
  dish matches.

Photos (CC0, no attribution required; recorded so they can be checked):

| In | Photo | Source |
| --- | --- | --- |
| 01, 02, 05 | "Poke Bowl Losos Zlaty Klas 2025" by Mojmir Churavy | [Wikimedia Commons](https://commons.wikimedia.org/w/index.php?curid=170488180), CC0 1.0 |
| 05 | Greek yogurt with granola, banana and blueberries | [rawpixel](https://www.rawpixel.com/image/5943337/free-public-domain-cc0-photo), CC0 |

The rules they follow (App Review Guidelines 2.3, details in `.claude/skills/app-store-review/`):

- the app in use, as it really looks (2.3.3): callouts and food labels only repeat what the app shows on those
  screens; captions sit above the phone;
- the app as the store build shows it: production flags, nothing that only exists behind a switched-off flag;
- features that need Weight Class Premium carry the Premium pill, and no Premium card shows up unmarked on the
  other screens (2.3.2);
- no prices, costs or savings (2.3.7, `BUDGET-PLANS.md` §7): on 07 the callout covers Plan tomorrow's grocery line,
  and the Swap sheet isn't used because it shows a meal's cost;
- suitable for a 4+ audience even though the app is 18+ (2.3.8): no alcohol, needle photos or body photos (03
  shows Home's GLP-1 card and the pen counts, not the injection-site figure);
- no device frame from Apple, no other platforms, no Health app screens, no competitor names, no "#1" or press
  claims.

When a screen in the app changes, take the screenshots again so they still match the app (2.3.3 rejects
screenshots that don't). The tools are in `tools/`:

```bash
S3_ENDPOINT=http://127.0.0.1:9000 S3_BUCKET=demo S3_PATH_STYLE=true S3_ACCESS_KEY_ID=local S3_SECRET_ACCESS_KEY=local \
  FOOD_QUALITY_TAG=true FOLLOW_UP_QUESTION=true npx expo start --web     # the local server, with a photo store
EMAIL=… PASSWORD=… TIME_ZONE=Asia/Dhaka FEED=camera.y4m PHOTO=lunch.jpg \
  node store/screenshots/tools/capture.cjs /tmp/app scan-result         # logs a meal with the AI, prints its id
EMAIL=… PASSWORD=… TIME_ZONE=Asia/Dhaka FEED=camera.y4m MEAL=<id> \
  node store/screenshots/tools/capture.cjs /tmp/app camera meal home home-meals flamie what-to-order weight search
EMAIL=… PASSWORD=… TIME_ZONE=Asia/Dhaka node store/screenshots/tools/capture.cjs /tmp/app home-glp1 glp1  # GLP-1 on
EMAIL=… PASSWORD=… TIME_ZONE=Asia/Dhaka node store/screenshots/tools/capture.cjs /tmp/app calm   # calm mode on
EMAIL=… PASSWORD=… TIME_ZONE=Asia/Tokyo node store/screenshots/tools/capture.cjs /tmp/app plan   # in the evening
node store/screenshots/tools/compose.cjs --app /tmp/app                  # all ten, both sizes
```

`capture.cjs` takes the app screens: `home`, `home-meals`, `flamie` and `calm` with GLP-1 mode off, `home-glp1`
and `glp1` with it on, and `calm` with calm mode on (Profile → Preferences). `compose.cjs` has every screenshot's
caption, colors, callouts and food labels, and
writes both sets without alpha. A callout's crop is in points of its screen: `capture.cjs` writes
`<screen>.boxes.json` with the cards around some texts to measure new ones. Or ask Claude to "re-take the App Store
screenshots".
