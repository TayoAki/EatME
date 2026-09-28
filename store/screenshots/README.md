# App Store screenshots

`ios-6.9/` is the iPhone 6.9" set for App Store Connect: 1320 × 2868 px, portrait, PNG without an alpha channel
(App Store Connect refuses transparency). Upload them in this order; smaller iPhones are scaled from this set, and
EatME is iPhone-only, so there's no iPad set.

| File | Headline | Line under it |
| --- | --- | --- |
| `01-home.png` | Snap a meal. See what's left. | Calories, protein, carbs and fat, tracked against a plan made for you. |
| `02-meal.png` | An estimate you can check | EatME names the foods and portions. Change any number in a tap. |
| `03-search.png` | Search or scan, no AI needed | Everyday foods and barcodes, weighed your way. |
| `04-plan-tomorrow.png` | Plan tomorrow in one tap (**Premium** badge) | A draft of your day from meals you already eat. Swap, shuffle, done. |
| `05-glp1.png` | Built for GLP-1 medicines | Doses, pens and injection sites, with protein, fiber and water first. |
| `06-weight.png` | See the trend, not the noise | A smoothed weight trend with your goal and milestones. |
| `07-calm.png` | Calm mode for calmer days | Swap calorie counts for simple words whenever you like. |

## How they were made

Real screens of the app (the web build of this repo, at the iPhone 16 Pro Max size, 440 × 956 points at 3×) with a
fictional demo person, "Alex": two weeks of logged meals, a falling weight trend, GLP-1 mode with a weekly pen,
and a drafted tomorrow. The food photos are public-domain (CC0) pictures from Wikimedia Commons. Each screen sits
in a plain rounded card under the headline, with a status bar at 6:40 pm.

The rules they follow (App Review Guidelines 2.3, details in `.claude/skills/app-store-review/`):

- the app in use, as it really looks (2.3.3); captions only above the screen;
- features that need EatME Premium carry a Premium badge (2.3.2); no prices or terms on the images (2.3.7);
- suitable for a 4+ audience even though the app is 18+ (2.3.8): no alcohol, needles or body photos;
- no device frame (Apple only allows its own bezels, unaltered), no other platforms, no Health app screens.

When a screen in the app changes, take the screenshots again so they still match the app (2.3.3 rejects
screenshots that don't). Ask Claude to "re-take the App Store screenshots": it can rebuild the demo data, capture
the screens and caption them the same way.
