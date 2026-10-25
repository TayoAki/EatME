# Releasing Weight Class: EAS builds, TestFlight and App Review

The step-by-step for getting a build onto testers' phones and then into the App Store. The answers to paste into
App Store Connect are in [`README.md`](README.md); the screenshots in [`screenshots/`](screenshots/). The rules
behind every step are in the project skill `.claude/skills/app-store-review/` (ask Claude to "check the app is
ready for App Review" to run its audit).

Everything below runs on your computer. Apple and Google passwords, two-factor codes and API keys are typed into
your own terminal or dashboard only: never paste them into a chat or commit them.

## Every iPhone build, in one line

```bash
npm run testflight
```

It builds whatever is checked out. **Build 4** (the App Review fixes for version 1.0) must come from commit
`f05e76a`: `git checkout -B build-4 f05e76a` first. Everything after it, What to order's screens included, is v2.5:
App Store version **1.1.0** (`expo.version` in `app.json`), built from the `claude/gallant-archimedes-o2u9dy`
branch. A 1.1.0 build gets its own version in TestFlight, so it can go there while 1.0 is in review: App Store
Connect lets a version use only builds with its own number, so a 1.1.0 build can't be picked for 1.0 by mistake.

That runs lint and the typecheck (after refreshing the route types Expo Router generates into `.expo/types`, which
go stale on a machine that hasn't run the dev server since screens were added), builds the production app on EAS (the build number goes up by itself), and
uploads it to App Store Connect. About 20-30 minutes on EAS, then 5-15 minutes of processing at Apple; Apple emails
you when the build is ready in TestFlight (or refused, with an ITMS code: see the skill's
`references/testflight-eas.md`). Without the script:

```bash
npx expo lint && npx expo customize tsconfig.json && npx tsc --noEmit
npx eas-cli@latest build -p ios --profile production --auto-submit
```

To upload a build that's already finished: `npx eas-cli@latest submit -p ios --latest`.

## The first time

1. **Expo:** `npx eas-cli@latest login` with the account that owns the project (`owner` in `app.json`), then
   `npx eas-cli@latest whoami`.
2. **Apple Developer account:** preferably the company's (organization) account: Apple 5.1.1(ix) wants apps with
   sensitive health data, like GLP-1 mode, submitted by a legal entity. The Paid Apps Agreement must be **Active**
   (App Store Connect → Business), or TestFlight purchases and App Review can't load the subscriptions.
3. **First build, interactive:** `npx eas-cli@latest build -p ios --profile production`. EAS asks you to sign in to
   the Apple Developer account in the terminal and then creates everything it needs: the distribution certificate,
   provisioning profiles for the app (`com.tayoaki.eatme`) and the water widget
   (`com.tayoaki.eatme.ExpoWidgetsTarget`), and the HealthKit, Sign in with Apple and App Groups capabilities.
   Answer yes to each. If the widget's profile is missing the App Group later, enable App Groups for the widget's
   identifier in the developer portal, delete its profile in `npx eas-cli@latest credentials -p ios`, and build
   again.
4. **First upload, interactive:** `npx eas-cli@latest submit -p ios --latest`. Sign in when asked, let EAS create an
   **App Store Connect API key** (it's stored on EAS, so later uploads need no Apple sign-in), and pick the app
   in App Store Connect (listed as EatME until you rename it to Weight Class) (it already exists: the subscriptions were created in it). From then on
   `npm run testflight` works without questions.

## TestFlight

App Store Connect → the app → TestFlight.

- **Your team (internal testing):** up to 100 people who are users of your App Store Connect team. Internal
  Testing → **+** → a group (e.g. "Weight Class team") → add the testers and the build. No review: they get each new build
  as soon as it's processed, in the TestFlight app.
- **Everyone else (external testing):** up to 10,000 people by email or a public link. External Testing → **+** →
  a group (e.g. "Beta testers") → add the build → fill in **Test Information** (texts in
  [`README.md` → TestFlight](README.md#testflight)) → Submit for Beta App Review. The first build of a version is
  reviewed (usually within a day); later builds often go straight out. Turn on **Public Link** in the group to get
  a `https://testflight.apple.com/join/...` link for the website.
- **What to Test:** each build has its own notes (Build → Test Details). Suggested text in
  [`README.md` → TestFlight](README.md#testflight).
- **Premium in TestFlight:** purchases run in Apple's sandbox and **cost testers nothing**, with their own Apple
  Account. Subscriptions renew daily, up to 6 times in a week, then stop. So testers try the real paywall, Restore
  and cancelling; nobody needs Premium granted by hand. RevenueCat shows these purchases with **View Sandbox Data**
  on.
- Builds expire after 90 days; upload a new one before that.

Before the first external testers:

- [ ] Legal placeholders filled in and deployed (`legal/README.md`): Beta App Review opens the privacy policy.
- [x] A demo account for Beta App Review: `review@ugcmediakits.com`, made on 2026-09-28 (see
      [`README.md` → Demo account](README.md#demo-account); refresh it with `npm run demo:account:remote` before
      App Review). Weight Class can't be used without signing in, so Apple needs
      working login details; the account's two weeks of sample data is what lets a reviewer see the weight trend,
      the weekly check-in and Plan tomorrow.
- [ ] RevenueCat: the four products are attached to the `premium` entitlement and the offering, and Sandbox Testing
      Access is "Anybody"; Railway has `REVENUECAT_SECRET_KEY` and `PAYMENTS_ENABLED=true`.
- [ ] When every tester is on TestFlight instead of Expo Go: delete `ALLOW_EXPO_GO` on Railway.
- [ ] OpenRouter has credit: every AI scan stops when the balance reaches zero (the onboarding plan falls back to
      a formula). About $50 covers the beta; turn on auto top-up, and put a credit limit on every key on the
      account, so another project's key can't spend the app's balance.
- [ ] Before the first sale: enroll in Apple's
      [Small Business Program](https://developer.apple.com/app-store/small-business-program/) (Enroll now, as the
      Account Holder, once the Paid Apps Agreement is active). Without it Apple keeps 30% of a subscription's first
      year instead of 15%. The lower rate starts 15 days after the end of the fiscal month Apple approves it in.
- [ ] When the app is live: Apple's App Store badge on the landing page (`legal/index.html`, the comment in the
      download section) and the Marketing URL in App Store Connect.

## App Review (the App Store release)

App Store Connect → the app → the iOS version (1.0) → fill it from [`README.md`](README.md):

0. **Name (do this first; it reserves the name):** App Information → Name `Weight Class: Calorie Counter`, and on
   the version the subtitle `AI Food Scan & Macro Tracker`. The app record still says EatME until you change it.

1. **Screenshots:** already uploaded for 1.0 (seven of them); leave them. The set now in `screenshots/` is 1.1's:
   it shows What to order, which build 4 doesn't have.
2. **Texts:** promotional text, description, keywords (plus a Spanish (Mexico) localization for the second keyword
   list), support URL (`<server>/support`), copyright (leave the
   marketing URL empty until the landing page links the App Store).
3. **Build:** pick the TestFlight build you tested.
4. **App Review Information:** your name, email and phone (`+1 ...` format), "Sign-in required" with the demo
   account's email and password, and the review notes.
5. **App Information / Age Rating / App Privacy / Pricing:** as in [`README.md`](README.md), including the age
   rating override to 18+, **Regulated Medical Device: No** and the Digital Services Act trader status.
6. **Subscriptions (they go to review with this version):** Monetization → Subscriptions → EatME Premium (the group's internal
   name; set its display name to `Weight Class Premium`) → each subscription: replace the placeholder **review
   screenshot** with a screenshot of Profile → Weight Class Premium taken on
   a TestFlight build (1320 × 2868 or 1290 × 2796), set **multiseat purchases to No**, then **Add for Review** into
   the same draft submission as version 1.0.
7. **Version Release:** "Manually release this version" (products can take a few hours to be buyable after
   approval).
8. **Submit for Review.** Most reviews finish within 24 hours. If Apple rejects: ask Claude to "answer this App
   Store rejection" with the message; the skill has the playbook.

After a version is live, raise `expo.version` in `app.json` before building the next one: 1.1.0 is v2.5 (What to
order); after it, 1.1.1 for fixes or 1.2.0 for new features.

## App Review for 1.1 (v2.5: What to order)

Only one version can be in review at a time, so 1.1 waits for 1.0:

1. **Release 1.0** when Apple approves it (Pending Developer Release → Release This Version).
2. **The checklist** in [`README.md` → What to order](README.md#what-to-order-version-25-its-own-build): the
   person's spot check of the chains, the phone tests below on the TestFlight build, the screenshots.
3. **New version:** the app → iOS App → **+** next to the version list → `1.1.0`. Paste What's New, the new
   description line, the Premium block and the review notes from that section. Screenshots: delete the seven in the
   6.5" slot and drag in `screenshots/ios-6.5/01-home.png` to `09-search.png`, in order.
4. **Build:** the 1.1.0 build you tested. Nothing else changes: same subscriptions (they were approved with 1.0),
   App Privacy, age rating and demo account (check its free menu is unused: Search foods → Restaurants shows no
   crown).
5. **Support page:** ask Claude to "deploy the What to order support lines" the day you submit, not before.
6. **Submit for Review**, with "Manually release this version" again.

## What to order on a phone (the v2.5 build)

What to order is the first version with a native module of our own (`modules/menu-text`, Apple Vision), so test it
in a real build, never in Expo Go, before it goes to App Review. The 1.1.0 build goes to TestFlight like any other
(`npm run testflight` on the branch), and internal testers get it once Apple has processed it:

- [ ] **Chain meals**: Scan → Describe a meal → "Big Mac and a medium Coke from McDonald's" says "Matched to the
      McDonald's menu: the restaurant's own numbers" with the source and links; a photo of a chain's cup, box or
      wrapper does the same for its dish; Search foods → "big mac" lists Restaurant dishes, and Log it works on a
      free account with no Premium screen
- [ ] The camera alert's text mentions restaurant menus; the Premium screen lists What to order

- [ ] **Menu reading** (WHAT-TO-ORDER.md §11): Scan → Menu on 10 real menus: printed, a chalkboard, a dim room, a
      long menu as 2-3 pages, a menu with prices in a column. Each time the confirm step lists the dishes; fix what's
      wrong and count it as usable if it took less than a minute. Pass: 9 of 10. Then
      `<server>/test-menu` on a laptop screen, and the same page saved as an image and picked with Choose a photo
- [ ] The camera alert appears on the first scan with nothing of ours in front of it; after a no, Menu mode says the
      camera is off and offers Choose a photo
- [ ] The consent screen names menus on the first menu scan (the account allowed AI before), and not again after
- [ ] Search → Restaurants → a chain: Fits well, View the guide (opens in the in-app browser), Log it (Home shows the
      meal and its source), Save for later (Saved meals), Report a wrong item
- [ ] A scanned menu: the question and a tweak change the calories, Half halves them, the logged meal shows the
      estimate's range; Your menus reopens it
- [ ] Free account: the first menu is the free try, the second opens the Premium screen; a sandbox purchase opens
      every menu
- [ ] Calm mode: no numbers on the lists or the dish sheet; Foods to skip hides dishes and says how many
- [ ] VoiceOver reads each row's dish, source, numbers and reason

## Android (Google Play internal testing)

```bash
npx eas-cli@latest build -p android --profile production
npx eas-cli@latest submit -p android --latest     # to the internal testing track
```

First: create the app in Play Console, give EAS a Google service account key with release rights
(`npx eas-cli@latest credentials -p android`), and add testers under Testing → Internal testing. If the first
submit says the app is "missing the required metadata", submit once with `"releaseStatus": "draft"` in the Android
submit profile of `eas.json`. A new *personal* Play account needs a 14-day closed test with 12 testers before
production; an organization account doesn't. Test-card purchases are free for license testers (Play Console →
Settings → License testing).

## Handy commands

```bash
npx eas-cli@latest build:list -p ios --limit 5     # recent builds and their status
npx eas-cli@latest build:version:get -p ios        # the current build number
npx eas-cli@latest credentials -p ios              # certificates, profiles, the App Store Connect API key
npx eas-cli@latest submit -p ios --id <build id>   # upload a specific build
```

There are no over-the-air updates yet (`expo-updates` isn't installed): every change, JavaScript included, ships
as a new build.
