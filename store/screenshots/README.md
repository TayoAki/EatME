# App Store screenshots

`ios-6.9/` is the iPhone 6.9" set for App Store Connect: 1320 × 2868 px, portrait, PNG without an alpha channel
(App Store Connect refuses transparency). `ios-6.5/` is the same set at 1284 × 2778 px for the 6.5" slot, the one
the version page shows first. One set is enough (Apple scales it for the other iPhones): upload `ios-6.5/` into the
slot on the page, or `ios-6.9/` through View All Sizes in Media Manager. Upload them in this order; Weight Class
is iPhone-only, so there's no iPad set.

| File | Headline | Line under it |
| --- | --- | --- |
| `01-home.png` | Snap a meal. See what's left. | Calories, protein, carbs and fat, tracked against a plan made for you. |
| `02-meal.png` | An estimate you can check | Weight Class names the foods and portions. Change any number in a tap. |
| `03-glp1.png` | Built for GLP-1 medicines | Doses, pens and injection sites, with protein, fiber and water first. |
| `04-what-to-order.png` | Eating out? See what fits (**Premium** badge) | Chain menus ranked for what's left of your day, with their own numbers. |
| `05-scanned-menu.png` | Not a chain? Scan the menu (**Premium** badge) | Dishes likely to fit your day, each an estimate with a range. |
| `06-plan-tomorrow.png` | Plan tomorrow in one tap (**Premium** badge) | A draft of your day from meals you already eat. Swap, shuffle, done. |
| `07-calm.png` | Calm mode for calmer days | Swap calorie counts for simple words whenever you like. |
| `08-weight.png` | See the trend, not the noise | A smoothed weight trend with your goal and milestones. |
| `09-search.png` | Search or scan, no AI needed | Everyday foods and barcodes, weighed your way. |

The first three are what most people see in search results, so they carry what makes Weight Class different: estimates
you can check, and GLP-1 mode. 04 and 05 are What to order, new in version 1.1 (v2.5). Version 1.0 (build 4) has
neither What to order nor the Restaurants tab in Search: it keeps the seven screenshots it was submitted with (the
set before 25 October 2026 in git history).

## How they were made

Real screens of the app (the web build of this repo, at the iPhone 16 Pro Max size, 440 × 956 points at 3×)
running with **the same feature flags as production** (`/api/features`: payments on) and a
fictional demo person, "Alex", who subscribed to Premium: two weeks of logged meals, a falling weight trend, GLP-1
mode with a weekly pen, and a drafted tomorrow. Everyday screens are taken at 3:45 pm, before Home shows the
evening Plan tomorrow card, so no Premium feature appears unmarked; only the Plan tomorrow shot is at 6:40 pm. The
food photos are public-domain (CC0) pictures from Wikimedia Commons. Each screen sits in a plain rounded card under
the headline, with a status bar.

The rules they follow (App Review Guidelines 2.3, details in `.claude/skills/app-store-review/`):

- the app in use, as it really looks (2.3.3); captions only above the screen;
- the app as the store build shows it: production flags, nothing that only exists behind a switched-off flag;
- features that need Weight Class Premium carry a Premium badge, and no Premium card shows up unmarked on the other
  screens (2.3.2); no prices or terms on the images (2.3.7);
- suitable for a 4+ audience even though the app is 18+ (2.3.8): no alcohol, needles or body photos;
- no device frame (Apple only allows its own bezels, unaltered), no other platforms, no Health app screens.

The 1.1 shots (25 October 2026): `04` and `05` at 12:10 pm, before lunch is logged, so the lists are about the
meal being ordered ("Leaves about 740 kcal for dinner"); `09` again at 3:45 pm because Search gained the Restaurants
tab, searching "rotisserie chicken breast", which no chain dish matches. The demo person is a fresh "Alex" from
`npm run demo:account` on a local database, made in a time zone where it was that time (the server and the
browser both work out "now" from it), without GLP-1 mode, and AI allowed in the database for the menu scan. The
chain is Cava (a short, plain list; chain names appear as text only, as in the app). The menu is "Corner Table
Café", a made-up café whose dish lines went through the real menu pipeline and AI. Payments were off locally, so
every list opens as it does for a subscriber.

When a screen in the app changes, take the screenshots again so they still match the app (2.3.3 rejects
screenshots that don't). The tools are in `tools/`:

```bash
npx expo start --web                                      # the local server and web build
EMAIL=… PASSWORD=… TIME_ZONE=America/Phoenix CHAIN=cava SCAN_ID=… \
  node store/screenshots/tools/capture.cjs /tmp/app       # the app screens (440 × 956 points at 3×)
node store/screenshots/tools/compose.cjs --app /tmp/app 04-what-to-order 05-scanned-menu 09-search
```

`capture.cjs` takes the What to order and Search screens (add a screen there to script another); `compose.cjs` has
every screenshot's caption and colors, and writes both sets without alpha. Its layout was measured on the
September set to the pixel (the card, the status bar and the type), so a re-taken screen matches the others. Or ask
Claude to "re-take the App Store screenshots".
