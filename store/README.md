# Weight Class in the App Store and Google Play

Everything the two stores ask for, filled in for Weight Class: the listing texts, the App Privacy and Data safety
answers, the age rating, the subscriptions, TestFlight's test information, Google Play's health declarations, the
review notes and the demo account. Copy each answer into App Store Connect or Play Console. How to build and upload
is in [`release.md`](release.md); the App Store screenshots are in [`screenshots/`](screenshots/). The rules behind
these answers (with Apple's sources) are in the project skill `.claude/skills/app-store-review/`.

**The name.** Customers see **Weight Class** (the app was called EatME until 2026-09-28; renamed for search, see
PLAN.md → Rebrand). Only what people see changed: the bundle ID `com.tayoaki.eatme`, the product IDs, the
`eatme://` scheme, the repo and the servers keep the old name, and they never show up in the store.

`<server>` is the Railway server that serves the API and the legal pages:
`https://api-production-174d.up.railway.app` today (or your custom domain later: then also update
`EXPO_PUBLIC_API_URL` / `EXPO_PUBLIC_LEGAL_URL` in `eas.json` and rebuild).

The answers match the app as it is configured now (`<server>/api/features`): meal photos with extra photos
and a note, the follow-up question, payments (Weight Class Premium), no email codes and no Apple or Google sign-in,
plus the v2.2–v2.4 features (GLP-1 medicines and Pens & vials, body measurements and progress photos, steps,
workouts and sleep read from Apple Health / Health Connect, the weekly check-in, alcoholic drinks and Plan
tomorrow). **When you turn something on or off, update the rows marked "when …" below**, and the Privacy
Policy if it says so.

## Before you start

- [ ] Legal placeholders filled in and deployed (`legal/README.md`), so `/privacy`, `/terms`, `/health-data`,
      `/delete-account` and `/support` show your company name, address and contact email (Apple wants real contact
      details behind the Support URL)
- [ ] Developer accounts in the company's name (both stores ask for a D-U-N-S number). Apple 5.1.1(ix): apps
      with sensitive health data, like GLP-1 mode's medicine log, "should be submitted by a legal entity".
      Google: a new *personal* Play account must run a closed test with 12 testers for 14 days before it can
      publish; an organization account can publish right away
- [ ] Builds and TestFlight: [`release.md`](release.md) (`npm run testflight` for each iPhone build)
- [ ] The demo account, created right before you submit (see [Demo account](#demo-account))
- [ ] Screenshots: the App Store set is ready in `screenshots/ios-6.9/`; Google Play still needs 2 to 8 from an
      Android phone

## App Store Connect

### App information

| Field | Answer |
| --- | --- |
| Name (30) | `Weight Class: Calorie Counter` (29). Two words on purpose: the name counts most in App Store search, so "weight", "calorie" and "counter" all rank from here. Type it in now to reserve it |
| Subtitle (30) | `AI Food Scan & Macro Tracker` (28) |
| Primary category | Health & Fitness |
| Secondary category | Food & Drink |
| Content rights | **Yes**, the app shows third-party content, and **yes**, you have the rights: product data from Open Food Facts (Open Database License, credited on the product screen) and USDA FoodData Central (public domain) |
| Age rating | See [Age rating](#age-rating): answer the questions, then **override to 18+** |
| Privacy Policy URL | `<server>/privacy` |
| Encryption | Nothing to answer: `ios.config.usesNonExemptEncryption` is `false` in `app.json` |
| License agreement | Apple's standard EULA (the description links our Terms of Use, as 3.1.2 asks) |
| Regulated medical device | App Store Regulations & Permits → Declare Regulated Medical Device → **No** (required for Health & Fitness apps in the EEA, UK and US; Account Holder or Admin only) |
| Digital Services Act | Business → Agreements → Compliance → Digital Services Act → **trader** (a company selling apps is a trader). Apple verifies the address, phone and email and shows them on EU product pages. Required even if you don't sell in the EU |
| Availability | Leave out the EU/EEA and the UK until you appoint GDPR representatives there (Weight Class handles health data, so GDPR Article 27 and UK GDPR need a representative for a company with no office there); the Privacy Policy names none. Everywhere else: all countries |

### Version page

| Field | Answer |
| --- | --- |
| Screenshots | iPhone 6.9" display: `screenshots/ios-6.9/01-home.png` to `07-search.png`, in that order (1320 × 2868, no alpha; captions and rules in `screenshots/README.md`). Weight Class is iPhone-only (`supportsTablet: false`), so no iPad screenshots |
| Promotional text (170) | `Take a photo, describe your meal or scan a barcode. Weight Class estimates the calories, protein, carbs, fat and fiber, and keeps your day on track.` |
| Keywords (100) | `loss,lose,diet,deficit,photo,scanner,protein,meal,planner,cut,cutting,glp-1,nutrition,barcode,diary` (99). No word from the name or subtitle: Apple combines the three, so `loss` + "Weight" already makes "weight loss". Never another app's or a medicine's brand name (Apple 2.3.7) |
| Keywords, Spanish (Mexico) (100) | `semaglutide,tirzepatide,injection,dose,water,fiber,carb,drink,kcal,log,intake,portion,healthy,lean` (98). The US App Store also searches the Spanish (Mexico) listing, which doubles the keyword space: add that localization with the same English name, subtitle, description and screenshots, and these keywords. They combine with the name and subtitle, not with the English keywords |
| Support URL | `<server>/support` (contact details, Premium, cancelling and refunds, how the numbers are worked out) |
| Marketing URL | Leave empty for 1.0 (the landing page still says "beta" and "Android coming soon"); add `<server>/` once it links the App Store |
| Description | [App Store description](#app-store-description) |
| What's New | Not shown for version 1.0 (the field is hidden). From 1.1 on, list what changed |
| Copyright | `2026 UGC Mediakits` (Apple adds the ©; use the exact legal name on your Apple developer account) |
| App Review contact | your name, email and phone in international form (`+1 415 555 0100`) |
| Sign-in required | Yes: the demo account's email and password |
| Review notes | [App Review notes](#app-review-notes) |

### App Store description

Apple 1.4.1: no accuracy claims ("estimates", never "accurate" or "precise"). Apple 2.5.1: Apple Health has to be
named in the description.

```text
Weight Class is an AI calorie counter that makes food logging fast. Take a photo of your meal, describe it in a few words, photograph a nutrition label or scan a barcode, and Weight Class estimates the calories, protein, carbs, fat and fiber.

HOW IT WORKS
• Snap a meal: AI names the foods and the portions, and the numbers come from the USDA food database wherever a food matches.
• Add more photos or a short note ("cooked in butter", "half a portion") for a closer estimate.
• Describe a meal in words when there's nothing to photograph.
• Scan a barcode or search the USDA database for packaged and everyday foods.
• Quick add your own numbers, log a meal again or copy yesterday.
• Weight Class remembers the foods you correct, so your usual meals get easier to log.

A PLAN THAT FITS YOU
• Daily calorie, protein, carb and fat targets from your answers.
• Fiber and water goals, vitamins and minerals, and your supplements.
• A weight trend that smooths out the daily ups and downs.
• Calm mode hides the numbers when counting feels like too much.
• GLP-1 mode: log your own medicine, doses, injection sites and side effects, see your dose day, and keep count of your pens and vials. Weight Class never gives dosing advice.
• Body measurements and private progress photos next to your weight trend.
• A weekly check-in that can fine-tune your calorie target from your real results, and Plan tomorrow, which drafts your day from your own meals (Weight Class Premium).
• Log drinks like beer, wine and cocktails and see their calories.
• A water widget for your Home Screen and Lock Screen.

WORKS WITH APPLE HEALTH
Turn on Apple Health in Profile to save the calories, macros, fiber, water and drinks you log. If you like, Weight Class can also read your steps, workouts and sleep from Apple Health to show them next to your meals; that data stays on your iPhone.

YOUR DATA
Before a photo or description goes to AI, Weight Class asks for your permission and names the companies involved. You can delete any meal, or your whole account, at any time.

WEIGHT CLASS PREMIUM (OPTIONAL)
Weight Class is free to use, with 3 AI scans a day. Weight Class Premium adds unlimited AI scans (fair use: 50 a day), up to 3 photos of one meal, the weekly check-in and Plan tomorrow.
• Weight Class Premium Monthly: $7.99 a month
• Weight Class Premium Yearly: $39.99 a year
New subscribers can start with a one-month free trial; the app shows whether you can get it before you subscribe. Prices are in US dollars and vary by country. Payment is charged to your Apple Account when you confirm the purchase, or when the free trial ends. The subscription renews automatically unless you cancel at least 24 hours before the end of the current period, and your account is charged for the renewal within the 24 hours before the period ends. Manage or cancel it in Settings → your name → Subscriptions.

GOOD TO KNOW
Calories and nutrients are estimates. Weight Class is for adults (18+) and is not a medical device: it doesn't diagnose, treat, cure or prevent any condition. Check with a doctor before changing how you eat, especially if you are pregnant, have diabetes or have had an eating disorder. How Weight Class works out your numbers: <server>/support#sources

Privacy Policy: <server>/privacy
Terms of Use: <server>/terms
```

The description names Apple Health (2.5.1), the subscription with its length and price, and the Terms of Use
(3.1.2), and makes no accuracy claims (1.4.1). Update the Premium block if the prices, the trial or the benefits
change.

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
| Alcohol, tobacco or drug use or references | Infrequent/Mild (Scan → Drinks logs beer, wine and cocktails; no tips or promotion; the app is 18+). Keep alcohol out of the screenshots |
| Medical or treatment information | Infrequent (GLP-1 mode logs the person's own medicine, doses and supply; Weight Class gives no medical or dosing guidance and does no dose maths. "Infrequent" is the safer reading, and the 18+ override decides the rating anyway) |
| Health or wellness topics | Frequent (calorie tracking and diet targets) |
| Sexual content · Violence · Gambling · Contests · Loot boxes | None |
| **Age Categories and Override** | **Override to Higher Age Rating → 18+** |

### App Privacy

App Store Connect → App Privacy. Every type below is **linked to the user** (it belongs to an account) and **not
used for tracking**. The purpose is **App Functionality** for all of them. OpenRouter, OpenAI, Railway and Sentry
process data for Weight Class as service providers, so nothing is "shared" for tracking or advertising.

| Data type | What it is in Weight Class | Collected |
| --- | --- | --- |
| Contact Info → Name | first name at sign-up | always |
| Contact Info → Email Address | the account's email | always |
| Health & Fitness → Health | sex, date of birth, height, weight and weigh-ins, body measurements, goal, meals and drinks and their nutrients, water, supplements, GLP-1 medicines, doses, injection sites, pen and vial counts and side effects, weekly check-ins | always |
| Health & Fitness → Fitness | activity level | always |
| User Content → Photos or Videos | meal and nutrition-label photos, progress photos (and a feedback screenshot, if Sentry is on) | always |
| User Content → Other User Content | meal descriptions and notes, saved meals, your foods, day drafts, product reports | always |
| Identifiers → User ID | the Weight Class account ID | always |
| User Content → Customer Support | messages sent with Send feedback | when `EXPO_PUBLIC_SENTRY_DSN` is set |
| Diagnostics → Crash Data, Performance Data, Other Diagnostic Data | Sentry crash reports, performance samples, diagnostic logs | when `EXPO_PUBLIC_SENTRY_DSN` is set |
| Purchases → Purchase History | subscriptions, through RevenueCat | always (payments are on) |
| Contact Info, Identifiers → used for Apple / Google sign-in | Apple or Google account ID (Apple may give a relay email) | when Apple or Google sign-in is on (already covered by Email Address and User ID) |

Not collected: product interaction (Sentry session replay is off in store builds, `src/lib/sentry.ts`), location (the device time zone is stored only to know where your day starts and ends), contacts,
browsing or search history (food searches are answered and not stored), financial info, sensitive info, audio,
body scans, device IDs and advertising data. Apple Health: Weight Class writes to it on the device and, when the person
turns on "Read activity and sleep", reads steps, active energy, workouts and sleep to show them in the app. That
data never leaves the phone (it isn't sent to the Weight Class server or the AI), so it isn't "collected" in Apple's sense.

### App Review notes

Paste into App Review Information → Notes, together with the demo account's email and password.

```text
Weight Class estimates calories and macros from meal photos, written descriptions, nutrition-label photos and barcodes, and tracks them against a daily plan.

SIGNING IN
Tap "Sign in" on the welcome screen and use the demo account above. It has two weeks of sample meals, weigh-ins and water.

AI CONSENT (5.1.2(i))
Before any photo or description is sent to AI, Weight Class asks for permission and names who receives it: OpenRouter, which passes it to OpenAI's model. The demo account hasn't allowed AI yet, so the first scan shows this screen; new accounts see it in onboarding, before the plan is made. It can be switched off in Profile → Preferences → AI meal analysis. Barcodes, food search, drinks and quick add never use AI.

TESTING WITHOUT FOOD
Scan → "Describe a meal" (e.g. "two eggs on toast"), a food photo from the library, or any packaged food's barcode.

WEIGHT CLASS PREMIUM (IN-APP PURCHASE)
The demo account is on the free plan (3 AI scans a day). Profile → Weight Class Premium shows both auto-renewable subscriptions (monthly, yearly; one group) with prices, the free trial when the account can get it, Restore purchases, and Terms and Privacy links. A sandbox purchase unlocks unlimited scans, several photos per meal, the weekly check-in (Profile → Daily goals) and Plan tomorrow: on Home, tap tomorrow's date in the week strip (any time of day). Nothing changes the target or logs a meal without the user's tap.

HEALTH AND SAFETY (1.4.1)
Numbers are shown as estimates. Profile → Daily goals ends with "check with a doctor" and "How Weight Class works out your numbers" (formulas and sources: <server>/support#sources); new accounts see the same on the plan screen. Profile → "Help with eating or body image" and "Help with alcohol" open Find A Helpline. Users must be 18+. Weight-loss goals stop at a BMI of 18.5 and 1 kg (2.2 lb) a week; calories never go below 1,200 (women) or 1,500 (men).

GLP-1 MODE
Profile → GLP-1 mode logs the user's own medicine, doses, injection sites and side effects. No dosing advice and no dose, unit or reconstitution calculations; supply is a count of pens or vials the user enters.

BODY AND PROGRESS PHOTOS
Profile → Weight & body: measurements and progress photos, private to the user and never sent to AI.

DRINKS
Scan → Search foods → Drinks logs alcoholic drinks with their calories. No drinking tips; Profile → "Help with alcohol" lists helplines.

APPLE HEALTH
Optional, Profile → Apple Health: writes the calories, macros, fiber, water and drinks the user logs; a second switch reads steps, active energy, workouts and sleep to show in the app. That data stays on the phone.

RESTAURANT MENUS
The build contains a restaurant-menu search that is switched off on our server and can't be reached in this version. We will only turn it on with a later version submitted for review.

ACCOUNT DELETION
Profile → Delete account deletes everything (also <server>/delete-account) and tells subscribers it doesn't cancel the subscription.

HOW IS WEIGHT CLASS DIFFERENT? (4.3(b))
The AI only names foods and portions; the numbers come from the USDA database where a food matches, with our methods and sources published. Weight Class remembers each person's foods, takes extra photos and notes to steer the estimate, drafts tomorrow from their own meals, and has a calm mode without numbers and a GLP-1 mode.
```

When Apple or Google sign-in is on: Google sign-in must never be shown without Sign in with Apple next to it
(Apple 4.8), and add a line saying the demo account uses email and password.

### Subscriptions

App Store Connect → Monetization → Subscriptions → group **EatME Premium** (its reference name, which customers
never see). The products were created from RevenueCat (PLAN.md §10); check each field before the first review.

| Field | Monthly | Yearly |
| --- | --- | --- |
| Reference name (internal) | `EatME Premium Monthly` | `EatME Premium Yearly` |
| Product ID | `com.tayoaki.eatme.premium.monthly` | `com.tayoaki.eatme.premium.yearly` |
| Duration · price (US) | 1 month · $7.99 | 1 year · $39.99 |
| Introductory offer | Free trial, 1 month, new subscribers | Free trial, 1 month, new subscribers |
| Level | 1 (same level: it's the same Premium, billed differently) | 1 |
| Display name (2-30) | `Premium Monthly` | `Premium Yearly` |
| Description (up to 45) | `Unlimited AI scans, check-ins, Plan tomorrow` | `Unlimited AI scans, check-ins, Plan tomorrow` |
| Review screenshot | Profile → Weight Class Premium on a TestFlight build (replaces the blank placeholder) | the same |
| Review notes | `Unlocks unlimited AI scans, several photos per meal, the weekly check-in and Plan tomorrow. Buy it in Profile → Weight Class Premium; Restore purchases is on the same screen.` | the same |
| Multiseat purchases | **No** (on by default since Sep 2026; our server counts one subscription per account) | **No** |

Group localization (customers see it): display name **`Weight Class Premium`**. It was `EatME Premium`, so change it
in the group's App Store Localization; keep "app name" as the app's name. **The first subscriptions go to review
with version 1.0:** on each one tap **Add for Review** and add it to the same draft submission as the version.

RevenueCat, before the first review (Apple reviews in the sandbox against the production server):

- [ ] Project settings → **Sandbox Testing Access: Anybody** (the default), or reviewers and TestFlight testers can't
      unlock Premium
- [x] The webhook sends both environments (no environment filter; checked 2026-09-28), and the server never
      filters out sandbox events
- [ ] App Store Connect → App Information → App Store Server Notifications: RevenueCat's URL in **both** the
      Production and Sandbox fields
- [ ] One TestFlight purchase unlocks Premium, Restore works on a second device, and cancelling in Settings shows
      "Ends on ..." in Profile → Weight Class Premium

### TestFlight

TestFlight → Test Information (needed before external testers; Beta App Review reads it):

| Field | Answer |
| --- | --- |
| Beta App Description | the text below |
| Feedback Email | `support@ugcmediakits.com` |
| Marketing URL · Privacy Policy URL | `<server>/` · `<server>/privacy` |
| Beta App Review contact | your name, email and phone (`+1 ...`) |
| Sign-in required | Yes: the demo account's email and password |
| Review notes | the [App Review notes](#app-review-notes) above |

```text
Weight Class is an AI calorie counter. Snap a meal, describe it in a few words or scan a barcode, and Weight Class estimates the calories, protein, carbs, fat and fiber, and tracks them against a plan made for you.

This beta has everything: GLP-1 mode, drinks, weight and body tracking, Apple Health, calm mode, the weekly check-in and Plan tomorrow. Weight Class Premium works too: purchases in TestFlight use Apple's sandbox and cost you nothing.

The numbers are estimates, not medical advice. Weight Class is for adults (18+).
```

**What to Test** (Build → Test Details, for each build; this one is for the first):

```text
Thanks for testing Weight Class, the new name for EatME! Please try:
1. Sign up and answer the questions. Allow or skip AI, then look at your plan.
2. Log a day of meals: a photo, "Describe a meal", a barcode, Search foods and a drink. Open a meal and fix anything that looks off.
3. Premium: Profile → Weight Class Premium. Start the free trial or subscribe (free in TestFlight). Check unlimited scans, the weekly check-in (Profile → Daily goals) and Plan tomorrow (tap tomorrow in the week strip on Home). Try Restore purchases, then cancel in Settings → your name → Subscriptions.
4. Apple Health: Profile → Apple Health. Log a meal and find it in the Health app.
5. Whatever else you use: GLP-1 mode, weight and body, water and the widget, reminders, calm mode.

Found a bug? Take a screenshot and tap Share Beta Feedback, or email us. In TestFlight, subscriptions renew every day (up to 6 times), so renewals come quickly.
```

## Google Play Console

### Store listing

| Field | Answer |
| --- | --- |
| App name (30) | `Weight Class: Calorie Counter` |
| Short description (80) | `AI calorie counter: snap a meal to see its calories, protein, carbs and fat.` |
| Full description | [Google Play description](#google-play-description) |
| App icon | 512 × 512 PNG (`assets/images/icon.png` scaled down) |
| Feature graphic | 1024 × 500 PNG or JPG |
| Phone screenshots | 2 to 8, portrait (9:16), from an Android phone |
| App category | Health & Fitness |
| Contact email | `support@ugcmediakits.com` |
| Website | `<server>/` |
| Privacy policy | `<server>/privacy` |

### Google Play description

Google Play's Health Content and Services policy: an app that isn't a regulated medical device must say so in its
description, with a reminder to talk to a healthcare professional. Keep it in the **first paragraph**.

```text
Weight Class is an AI calorie counter and weight loss tracker that makes food logging fast: take a photo of your meal, describe it in a few words, photograph a nutrition label or scan a barcode, and Weight Class estimates the calories, protein, carbs, fat and fiber. Weight Class is not a medical device and does not diagnose, treat, cure or prevent any medical condition. Talk to a healthcare professional before changing your diet.

HOW IT WORKS
• Snap a meal: AI names the foods and the portions, and the numbers come from the USDA food database wherever a food matches.
• Add more photos or a short note ("cooked in butter", "half a portion") for a closer estimate.
• Describe a meal in words when there's nothing to photograph.
• Scan a barcode or search the USDA database for packaged and everyday foods.
• Quick add your own numbers, log a meal again or copy yesterday.
• Weight Class remembers the foods you correct, so your usual meals get easier to log.

A PLAN THAT FITS YOU
• Daily calorie, protein, carb and fat targets from your answers.
• Fiber and water goals, vitamins and minerals, and your supplements.
• A weight trend that smooths out the daily ups and downs.
• Calm mode hides the numbers when counting feels like too much.
• GLP-1 mode: log your own medicine, doses, injection sites and side effects, see your dose day, and keep count of your pens and vials. Weight Class never gives dosing advice.
• Body measurements and private progress photos next to your weight trend.
• A weekly check-in that can fine-tune your calorie target from your real results, and Plan tomorrow, which drafts your day from your own meals (Weight Class Premium).
• Log drinks like beer, wine and cocktails and see their calories.

WORKS WITH HEALTH CONNECT
Turn on Health Connect in Profile to save the calories, macros, fiber and water you log. If you like, Weight Class can also read your steps, workouts and sleep from Health Connect to show them next to your meals; that data stays on your phone.

YOUR DATA
Before a photo or description goes to AI, Weight Class asks for your permission and names the companies involved. You can delete any meal, or your whole account, at any time.

WEIGHT CLASS PREMIUM (OPTIONAL)
Weight Class is free to use, with 3 AI scans a day. Weight Class Premium adds unlimited AI scans (fair use: 50 a day), up to 3 photos of one meal, the weekly check-in and Plan tomorrow: $7.99 a month or $39.99 a year in the US (prices vary by country and are shown before you subscribe). It renews automatically until you cancel it in Google Play → Payments & subscriptions.

GOOD TO KNOW
Calories and nutrients are estimates. Weight Class is for adults (18+). Check with a doctor before changing how you eat, especially if you are pregnant, have diabetes or have had an eating disorder. How Weight Class works out your numbers: <server>/support#sources
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
| Photo and video permissions | Nothing to declare: Weight Class uses the system photo picker and doesn't ask for `READ_MEDIA_IMAGES` (storage permissions stop at Android 12, and the microphone is removed) |

### Health apps declaration

| Question | Answer |
| --- | --- |
| Health features | **Nutrition and weight management** (food log, calorie and macro targets, weight trend, body measurements), **Medication and treatment management** (GLP-1 mode: the person's own medicine, dose day, doses, injection sites, side effects and a count of their pens and vials) and **Activity and fitness** / **Sleep** (steps, workouts and sleep read from Health Connect and shown in the app only) |
| Medical device | No: Weight Class is not a medical device (the description says so) |
| Health Connect | Declare the six permissions Weight Class asks for, with these reasons: |
| → `WRITE_NUTRITION` | `When the user turns on Health Connect in Profile, Weight Class writes the calories, protein, carbohydrates, fat and fiber of each meal they log, so their other health apps can use their food log.` |
| → `WRITE_HYDRATION` | `When the user turns on Health Connect in Profile, Weight Class writes the water they log.` |
| → `READ_STEPS` | `When the user turns on "Read activity and sleep", Weight Class shows their steps per day next to their meals (Home and the Activity screen). The data stays on the phone and is never sent to our server.` |
| → `READ_ACTIVE_CALORIES_BURNED` | `When the user turns on "Read activity and sleep", Weight Class shows the active calories of each day and workout next to their meals. It stays on the phone and is never added to their calorie goal.` |
| → `READ_EXERCISE` | `When the user turns on "Read activity and sleep", Weight Class lists their workouts (type, time and calories) on the Activity screen. It stays on the phone.` |
| → `READ_SLEEP` | `When the user turns on "Read activity and sleep", Weight Class shows how long they slept each night on the Activity screen. It stays on the phone.` |

The privacy-policy link on Health Connect's permission screen opens `<server>/privacy` (a small activity added
by `plugins/with-health-connect-rationale.js`, for Android 13 and 14+).

### Data safety

Play Console → App content → Data safety. **Nothing is shared**: OpenRouter, OpenAI, Railway, Sentry and
RevenueCat process data for Weight Class as service providers, which Google doesn't count as sharing; barcode lookups
send only the barcode number to Open Food Facts and USDA.

| Category → type | Collected | Processed ephemerally | Required or optional | Purposes |
| --- | --- | --- | --- | --- |
| Personal info → Name | Yes | No | Required | App functionality, Account management |
| Personal info → Email address | Yes | No | Required | App functionality, Account management |
| Personal info → User IDs | Yes | No | Required | App functionality, Account management |
| Health and fitness → Health info | Yes | No | Required | App functionality (includes body measurements, GLP-1 medicines and pen and vial counts, drinks) |
| Health and fitness → Fitness info | Yes | No | Required | App functionality |
| Photos and videos → Photos | Yes | No | Optional | App functionality (meal and label photos, private progress photos) |
| App activity → Other user-generated content | Yes | No | Optional | App functionality |
| App activity → In-app search history | Yes | **Yes** (food searches are answered and not stored) | Optional | App functionality |
| App info and performance → Crash logs, Diagnostics | when `EXPO_PUBLIC_SENTRY_DSN` is set | No | Required | App functionality |
| Financial info → Purchase history | Yes (payments are on) | No | Optional | App functionality |

Not collected: location, messages, audio, files, calendar, contacts, web browsing, installed apps, device or
other IDs, payment details (Google Play handles them). Steps, workouts and sleep read from Health Connect stay on
the phone (never sent to our server), so they aren't "collected" in Google's sense.

| Security question | Answer |
| --- | --- |
| Is all user data encrypted in transit? | Yes (HTTPS only) |
| Can users ask for their data to be deleted? | Yes |
| Account creation | Username (email) and password; add OAuth when Apple or Google sign-in is on |
| Delete account URL | `<server>/delete-account` |
| Delete some data without deleting the account? | Yes: any meal, drink, weigh-in, measurement, progress photo (or all of them), remembered food or day draft can be deleted in the app, and GLP-1 mode has "Delete my GLP-1 data" |

## Demo account

Both stores need a working sign-in: Weight Class can't be used without an account. The demo account is
**`review@ugcmediakits.com`**, created on 2026-09-28 through the live server's API (`scripts/demo-account-remote.ts`):
signed up and onboarded with the formula plan, three weeks of meals at the usual meal times, weigh-ins every other
day and water every day. AI analysis is not allowed yet, so the reviewer's first scan shows the AI consent screen.
Its password was handed over once; paste the email and password into App Store Connect (App Review Information →
Sign-in required) and Play Console (App content → App access).

To create one again (the production database has no public address, so this goes through the API):

```bash
npm run demo:account:remote -- --email review@ugcmediakits.com
```

It prints a new password once. The account's history ends the day it's made, so refresh it within a week or two
of submitting: first delete the old one (sign in as it → Profile → Delete account, or `<server>/delete-account`),
then run the command again. Options: `--days 21` (7 to 60), `--name Alex`, `--time-zone America/Los_Angeles` (the
default; App Review is in California), `--server <url>` (default: the production API URL in `eas.json`).

`npm run demo:account` (`scripts/demo-account.ts`) does the same straight in the database, with `--replace`, for a
database you can reach (a local one, or production through a Railway TCP proxy).

## When restaurant menus go live

Restaurant menus (FatSecret) are built but off (`RESTAURANTS`, PLAN.md §16, Eating out). The Privacy Policy, the
Terms and the Washington policy already describe them. The 1.0 review notes tell Apple they're in the build but off,
and that they'll only be switched on with a later version submitted for review (a feature switched on from the
server after approval counts as a hidden feature, 2.3.1(a)). So turn `RESTAURANTS` on together with a new app
version: say so in its What's New and review notes, and wait for approval. Also:

- **Both store listings:** add the line FatSecret requires, `Powered by fatsecret nutrition API (www.fatsecret.com)`,
  at the end of the description, and a bullet such as `• Look up US restaurant menus and plan your meal before you
  go.` under HOW IT WORKS.
- **App Privacy:** add **Search History**, *not linked to the user*, App Functionality: restaurant searches go from
  our server to FatSecret (without the person's name, email or account).
- **Play Data safety:** nothing new (In-app search history is already declared, processed ephemerally; FatSecret is a
  service provider).
- **Landing page:** uncomment FatSecret's credit in the footer of `legal/index.html` (it must be visible without
  signing in).

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
