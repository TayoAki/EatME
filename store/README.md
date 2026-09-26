# EatME in the App Store and Google Play

Everything the two stores ask for, filled in for EatME: the listing texts, the App Privacy and Data safety
answers, the age rating, Google Play's health declarations, the review notes and the demo account. Copy each
answer into App Store Connect or Play Console.

`<server>` is the Railway server that serves the API and the legal pages:
`https://api-production-174d.up.railway.app` today (or your custom domain later: then also update
`EXPO_PUBLIC_API_URL` / `EXPO_PUBLIC_LEGAL_URL` in `eas.json` and rebuild).

The answers match the app as it is configured now (`<server>/api/features`): meal photos with extra photos
and a note, no follow-up question, no payments, no email codes and no Apple or Google sign-in. **When you
turn one of those on, update the rows marked "when …" below**, and the Privacy Policy if it says so.

## Before you start

- [ ] Legal placeholders filled in and deployed (`legal/README.md`), so `/privacy`, `/terms`, `/health-data`
      and `/delete-account` show your company name and contact email
- [ ] Developer accounts in the company's name (both stores ask for a D-U-N-S number). Apple 5.1.1(ix): apps
      with sensitive health data, like GLP-1 mode's medicine log, "should be submitted by a legal entity".
      Google: a new *personal* Play account must run a closed test with 12 testers for 14 days before it can
      publish; an organization account can publish right away
- [ ] Production builds: `npx eas-cli@latest build --profile production --platform all`, then
      `npx eas-cli@latest submit`
- [ ] The demo account, created right before you submit (see [Demo account](#demo-account))
- [ ] Screenshots from a real phone (see each store below)

## App Store Connect

### App information

| Field | Answer |
| --- | --- |
| Name | `EatME` (if the name is taken: `EatME: Calorie Tracker`) |
| Subtitle (30) | `Snap a meal, see its calories` |
| Primary category | Health & Fitness |
| Secondary category | Food & Drink |
| Content rights | **Yes**, the app shows third-party content, and **yes**, you have the rights: product data from Open Food Facts (Open Database License, credited on the product screen) and USDA FoodData Central (public domain) |
| Age rating | See [Age rating](#age-rating): answer the questions, then **override to 18+** |
| Privacy Policy URL | `<server>/privacy` |
| Encryption | Nothing to answer: `ios.config.usesNonExemptEncryption` is `false` in `app.json` |

### Version page

| Field | Answer |
| --- | --- |
| Screenshots | iPhone 6.9" (1320 × 2868 px, portrait), 3 to 10. EatME is iPhone-only (`supportsTablet: false`), so no iPad screenshots. Suggested: home screen with a day of meals, a meal photo with its estimate, the plan, the weight trend, Apple Health / the water widget |
| Promotional text (170) | `Take a photo, describe your meal or scan a barcode. EatME estimates the calories, protein, carbs, fat and fiber, and keeps your day on track.` |
| Keywords (100) | `calorie counter,macro tracker,food diary,nutrition,protein,fiber,diet,weight loss,glp-1,meal photo` (never another app's name: Apple 2.3.7) |
| Support URL | `<server>/` (the landing page with the contact email) |
| Marketing URL | `<server>/` |
| Description | [App Store description](#app-store-description) |
| What's New | `First release.` |
| Sign-in required | Yes: the demo account's email and password |
| Review notes | [App Review notes](#app-review-notes) |

### App Store description

Apple 1.4.1: no accuracy claims ("estimates", never "accurate" or "precise"). Apple 2.5.1: Apple Health has to be
named in the description.

```text
EatME makes food logging fast. Take a photo of your meal, describe it in a few words, photograph a nutrition label or scan a barcode, and EatME estimates the calories, protein, carbs, fat and fiber.

HOW IT WORKS
• Snap a meal: AI names the foods and the portions, and the numbers come from the USDA food database wherever a food matches.
• Add more photos or a short note ("cooked in butter", "half a portion") for a closer estimate.
• Describe a meal in words when there's nothing to photograph.
• Scan a barcode or search the USDA database for packaged and everyday foods.
• Quick add your own numbers, log a meal again or copy yesterday.
• EatME remembers the foods you correct, so your usual meals get easier to log.

A PLAN THAT FITS YOU
• Daily calorie, protein, carb and fat targets from your answers.
• Fiber and water goals, vitamins and minerals, and your supplements.
• A weight trend that smooths out the daily ups and downs.
• Calm mode hides the numbers when counting feels like too much.
• GLP-1 mode: log your own doses and side effects and see your dose day. EatME never gives dosing advice.
• A water widget for your Home Screen and Lock Screen.

WORKS WITH APPLE HEALTH
Turn on Apple Health in Profile to save the calories, macros, fiber and water you log. EatME only writes to Apple Health; it doesn't read your health data.

YOUR DATA
Before a photo or description goes to AI, EatME asks for your permission and names the companies involved. You can delete any meal, or your whole account, at any time.

GOOD TO KNOW
Calories and nutrients are estimates. EatME is for adults (18+) and is not a medical device: it doesn't diagnose, treat, cure or prevent any condition. Check with a doctor before changing how you eat, especially if you are pregnant, have diabetes or have had an eating disorder.

Privacy Policy: <server>/privacy
Terms of Use: <server>/terms
```

When payments are on, also add the subscription names, lengths and prices above the two links (Apple 3.1.2
asks for a link to the Terms of Use in the description or the EULA field; it is already there).

### Age rating

App Store Connect → App Information → Age Ratings. The Terms require users to be 18, and Apple's rule is that an
app whose terms set a higher minimum age than the calculated rating **must override to that age**.

| Question | Answer |
| --- | --- |
| Parental controls · Age assurance | No · No |
| Unrestricted web access | No (links open specific pages: the legal pages, Find A Helpline, Open Food Facts) |
| User-generated content · Social media · Messaging and chat | No · No · No (nothing a user adds is shown to anyone else) |
| Advertising | No |
| Profanity · Horror · Mature themes | None |
| Alcohol, tobacco or drug use or references | Infrequent (the describe-a-meal example mentions a glass of wine, and people log drinks) |
| Medical or treatment information | None (GLP-1 mode is the person's own log; EatME gives no medical or dosing guidance) |
| Health or wellness topics | Frequent (calorie tracking and diet targets) |
| Sexual content · Violence · Gambling · Contests · Loot boxes | None |
| **Age Categories and Override** | **Override to Higher Age Rating → 18+** |

### App Privacy

App Store Connect → App Privacy. Every type below is **linked to the user** (it belongs to an account) and **not
used for tracking**. The purpose is **App Functionality** for all of them. OpenRouter, OpenAI, Railway and Sentry
process data for EatME as service providers, so nothing is "shared" for tracking or advertising.

| Data type | What it is in EatME | Collected |
| --- | --- | --- |
| Contact Info → Name | first name at sign-up | always |
| Contact Info → Email Address | the account's email | always |
| Health & Fitness → Health | sex, date of birth, height, weight and weigh-ins, goal, meals and their nutrients, water, supplements, GLP-1 doses and side effects | always |
| Health & Fitness → Fitness | activity level | always |
| User Content → Photos or Videos | meal and nutrition-label photos (and a feedback screenshot, if Sentry is on) | always |
| User Content → Other User Content | meal descriptions and notes, saved meals, your foods, product reports | always |
| Identifiers → User ID | the EatME account ID | always |
| User Content → Customer Support | messages sent with Send feedback | when `EXPO_PUBLIC_SENTRY_DSN` is set |
| Diagnostics → Crash Data, Performance Data, Other Diagnostic Data | Sentry crash reports, performance samples, diagnostic logs | when `EXPO_PUBLIC_SENTRY_DSN` is set |
| Usage Data → Product Interaction | Sentry session replays (screens and taps; text and images masked) | when `EXPO_PUBLIC_SENTRY_DSN` is set |
| Purchases → Purchase History | subscriptions, through RevenueCat | when payments are on |
| Contact Info, Identifiers → used for Apple / Google sign-in | Apple or Google account ID (Apple may give a relay email) | when Apple or Google sign-in is on (already covered by Email Address and User ID) |

Not collected: location (the device time zone is stored only to know where your day starts and ends), contacts,
browsing or search history (food searches are answered and not stored), financial info, sensitive info, audio,
body scans, device IDs and advertising data. Apple Health: EatME writes to it on the device and never reads it,
so nothing from Apple Health reaches EatME.

### App Review notes

Paste into App Review Information → Notes, together with the demo account's email and password.

```text
EatME estimates calories and macros from meal photos, written descriptions, nutrition-label photos and barcodes.

SIGNING IN
Tap "Sign in" on the welcome screen and use the demo account above. It has two weeks of sample meals, weigh-ins and water.

AI CONSENT (5.1.2(i))
Before any photo or description is sent to AI, EatME asks for permission and names who receives it: OpenRouter, which passes it to OpenAI's model. The demo account hasn't allowed AI yet, so the first scan shows this screen. New accounts see it during onboarding, before the plan is made ("Continue without AI" makes a plan with a standard formula). It can be switched off any time in Profile → Preferences → AI meal analysis. Barcodes, food search and quick add never use AI.

TESTING WITHOUT FOOD
Scan tab → "Describe a meal" (for example "two eggs on toast"), choose a food photo from the photo library, or scan the barcode of any packaged food.

HEALTH AND SAFETY (1.4.1)
All numbers are shown as estimates. The plan screen tells people to check with a doctor, and Profile → Support → "Help with eating or body image" opens Find A Helpline. Users must be 18 or older. Weight-loss goals stop at a BMI of 18.5 and at 1 kg (2.2 lb) a week, and daily calories never go below 1,200 (women) or 1,500 (men).

GLP-1 MODE
Profile → GLP-1 mode is an optional log of the user's own medicine, doses and side effects. It gives no dosing advice.

APPLE HEALTH
Optional, in Profile → Apple Health. EatME only writes the calories, macros, fiber and water the user logs; it reads nothing.

ACCOUNT DELETION
Profile → Delete account (also on the web: <server>/delete-account).

HOW IS EATME DIFFERENT FROM OTHER AI CALORIE APPS? (4.3(b))
The AI only names the foods and portions; the numbers come from the USDA food database wherever a food matches. EatME remembers each person's own foods and portions, lets them add photos and a note to steer the estimate, has a calm mode that hides the numbers and a GLP-1 mode for people on those medicines.
```

When Apple or Google sign-in is on: Google sign-in must never be shown without Sign in with Apple next to it
(Apple 4.8), and add a line saying the demo account uses email and password.

## Google Play Console

### Store listing

| Field | Answer |
| --- | --- |
| App name (30) | `EatME: Calorie & Macro Tracker` (or just `EatME`) |
| Short description (80) | `Snap a meal to estimate its calories, protein, carbs, fat and fiber.` |
| Full description | [Google Play description](#google-play-description) |
| App icon | 512 × 512 PNG (`assets/images/icon.png` scaled down) |
| Feature graphic | 1024 × 500 PNG or JPG |
| Phone screenshots | 2 to 8, portrait (9:16), from an Android phone |
| App category | Health & Fitness |
| Contact email | the `[Contact Email]` from the legal pages |
| Website | `<server>/` |
| Privacy policy | `<server>/privacy` |

### Google Play description

Google Play's Health Content and Services policy: an app that isn't a regulated medical device must say so in its
description, with a reminder to talk to a healthcare professional. Keep it in the **first paragraph**.

```text
EatME makes food logging fast: take a photo of your meal, describe it in a few words, photograph a nutrition label or scan a barcode, and EatME estimates the calories, protein, carbs, fat and fiber. EatME is not a medical device and does not diagnose, treat, cure or prevent any medical condition. Talk to a healthcare professional before changing your diet.

HOW IT WORKS
• Snap a meal: AI names the foods and the portions, and the numbers come from the USDA food database wherever a food matches.
• Add more photos or a short note ("cooked in butter", "half a portion") for a closer estimate.
• Describe a meal in words when there's nothing to photograph.
• Scan a barcode or search the USDA database for packaged and everyday foods.
• Quick add your own numbers, log a meal again or copy yesterday.
• EatME remembers the foods you correct, so your usual meals get easier to log.

A PLAN THAT FITS YOU
• Daily calorie, protein, carb and fat targets from your answers.
• Fiber and water goals, vitamins and minerals, and your supplements.
• A weight trend that smooths out the daily ups and downs.
• Calm mode hides the numbers when counting feels like too much.
• GLP-1 mode: log your own doses and side effects and see your dose day. EatME never gives dosing advice.

WORKS WITH HEALTH CONNECT
Turn on Health Connect in Profile to save the calories, macros, fiber and water you log. EatME only writes to Health Connect; it doesn't read your health data.

YOUR DATA
Before a photo or description goes to AI, EatME asks for your permission and names the companies involved. You can delete any meal, or your whole account, at any time.

GOOD TO KNOW
Calories and nutrients are estimates. EatME is for adults (18+). Check with a doctor before changing how you eat, especially if you are pregnant, have diabetes or have had an eating disorder.
```

### App content

Play Console → Policy → App content.

| Form | Answer |
| --- | --- |
| Privacy policy | `<server>/privacy` |
| Ads | No, the app has no ads |
| App access | All or some functionality is restricted → add the demo account's email and password, and these instructions: `Tap "Sign in" on the welcome screen. The first meal scan asks for permission to use AI (OpenRouter and OpenAI): tap Allow. To test without food: Scan → Describe a meal.` |
| Content rating (IARC) | Category: all other app types. Violence, sexuality, language, gambling: No. Alcohol or drug references: yes, mild (people log drinks; an example mentions wine). Users interact or share content with each other: No. Shares location: No. Digital purchases: No (Yes when payments are on). Unrestricted internet: No |
| Target audience and content | 18 and over only; the app doesn't appeal to children |
| News app · Government app | No · No |
| Financial features | My app doesn't provide any financial features |
| Health apps | See [Health apps declaration](#health-apps-declaration) |
| Data safety | See [Data safety](#data-safety) |
| Advertising ID | No. If Play Console says the build declares `com.google.android.gms.permission.AD_ID`, add it to `android.blockedPermissions` in `app.json` and rebuild |
| Photo and video permissions | Nothing to declare: EatME uses the system photo picker and doesn't ask for `READ_MEDIA_IMAGES` (storage permissions stop at Android 12, and the microphone is removed) |

### Health apps declaration

| Question | Answer |
| --- | --- |
| Health features | **Nutrition and weight management** (food log, calorie and macro targets, weight trend) and **Medication and treatment management** (GLP-1 mode: the person's own medicine, dose day, doses and side effects) |
| Medical device | No: EatME is not a medical device (the description says so) |
| Health Connect | Declare the two permissions EatME asks for, with these reasons: |
| → `WRITE_NUTRITION` | `When the user turns on Health Connect in Profile, EatME writes the calories, protein, carbohydrates, fat and fiber of each meal they log, so their other health apps can use their food log. EatME doesn't read any Health Connect data.` |
| → `WRITE_HYDRATION` | `When the user turns on Health Connect in Profile, EatME writes the water they log. EatME doesn't read any Health Connect data.` |

Known gap: when someone taps the privacy-policy link on Health Connect's permission screen, Android opens
EatME's home screen instead of the Privacy Policy. If Google's Health Connect review asks for it, EatME needs a
small native screen for that link (it needs a development build to test).

### Data safety

Play Console → App content → Data safety. **Nothing is shared**: OpenRouter, OpenAI, Railway, Sentry and
RevenueCat process data for EatME as service providers, which Google doesn't count as sharing; barcode lookups
send only the barcode number to Open Food Facts and USDA.

| Category → type | Collected | Processed ephemerally | Required or optional | Purposes |
| --- | --- | --- | --- | --- |
| Personal info → Name | Yes | No | Required | App functionality, Account management |
| Personal info → Email address | Yes | No | Required | App functionality, Account management |
| Personal info → User IDs | Yes | No | Required | App functionality, Account management |
| Health and fitness → Health info | Yes | No | Required | App functionality |
| Health and fitness → Fitness info | Yes | No | Required | App functionality |
| Photos and videos → Photos | Yes | No | Optional | App functionality |
| App activity → Other user-generated content | Yes | No | Optional | App functionality |
| App activity → In-app search history | Yes | **Yes** (food searches are answered and not stored) | Optional | App functionality |
| App info and performance → Crash logs, Diagnostics | when `EXPO_PUBLIC_SENTRY_DSN` is set | No | Required | App functionality |
| App activity → App interactions | when `EXPO_PUBLIC_SENTRY_DSN` is set (session replays) | No | Required | App functionality |
| Financial info → Purchase history | when payments are on | No | Optional | App functionality |

Not collected: location, messages, audio, files, calendar, contacts, web browsing, installed apps, device or
other IDs, payment details (Google Play handles them).

| Security question | Answer |
| --- | --- |
| Is all user data encrypted in transit? | Yes (HTTPS only) |
| Can users ask for their data to be deleted? | Yes |
| Account creation | Username (email) and password; add OAuth when Apple or Google sign-in is on |
| Delete account URL | `<server>/delete-account` |
| Delete some data without deleting the account? | Yes: any meal, weigh-in, drink or remembered food can be deleted in the app, and GLP-1 mode has "Delete my GLP-1 data" |

## Demo account

Both stores need a working sign-in. `scripts/demo-account.ts` creates one on the production database: signed
up, onboarded (a formula plan), with two weeks of sample meals, weigh-ins and water. AI analysis is not allowed
yet, so the reviewer's first scan shows the AI consent screen.

1. Use an address you own that no real account uses, for example `review@yourdomain.com`.
2. Right before you submit, run from your computer (`.env` needs the Railway Postgres public `DATABASE_URL`):

   ```bash
   npm run demo:account -- --email review@yourdomain.com
   ```

3. It prints the email and a new password **once**. Paste them into App Store Connect (App Review Information →
   Sign-in required) and Play Console (App content → App access). Only the password's hash is stored.
4. Before a resubmission (or if a reviewer deleted the account), run it again with `--replace`: it deletes that
   account like Profile → Delete account and creates it again with fresh sample data and a new password.

Options: `--time-zone America/Los_Angeles` (the default; App Review is in California), `--days 14`,
`--name Alex`. Meals are placed at the usual meal times, so "today" only fills up as the day goes on.

## Railway before release

- **Postgres backups:** Railway → Postgres service → Backups → turn on the **Daily** schedule only (kept 6 days).
  Leave Weekly (kept a month) and Monthly (kept 3 months) off: the Privacy Policy promises that deleted data leaves
  the backups within 30 days.
- **`ALLOW_EXPO_GO`:** delete this variable when the testers move from Expo Go to TestFlight / Play test builds.
  Store builds don't need it, and without it the server only accepts the real app.
- **Sentry (optional):** to get crash reports and the Send feedback button, set `EXPO_PUBLIC_SENTRY_DSN` for the
  production build (EAS environment variables) and keep the Sentry rows in both privacy forms.

## iOS privacy manifests

App Store Connect refuses builds whose app or extensions use "required reason" APIs without saying why
(ITMS-91053). Prebuild writes them from the config:

- the app: `ios.privacyManifests` in `app.json`, plus the reasons CocoaPods collects from the libraries during
  `pod install`
- the water widget extension: `plugins/with-widget-privacy-manifest.js` (keep it listed **before**
  `expo-widgets` in `app.json`)

If an upload is rejected with ITMS-91053 anyway, the email names the file and the API category: add the reason
to one of the two lists above and build again.
