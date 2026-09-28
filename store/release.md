# Releasing EatME: EAS builds, TestFlight and App Review

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

That runs lint and the typecheck, builds the production app on EAS (the build number goes up by itself), and
uploads it to App Store Connect. About 20-30 minutes on EAS, then 5-15 minutes of processing at Apple; Apple emails
you when the build is ready in TestFlight (or refused, with an ITMS code: see the skill's
`references/testflight-eas.md`). Without the script:

```bash
npx expo lint && npx tsc --noEmit
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
   **App Store Connect API key** (it's stored on EAS, so later uploads need no Apple sign-in), and pick the EatME app
   in App Store Connect (it already exists: the subscriptions were created in it). From then on
   `npm run testflight` works without questions.

## TestFlight

App Store Connect → EatME → TestFlight.

- **Your team (internal testing):** up to 100 people who are users of your App Store Connect team. Internal
  Testing → **+** → a group (e.g. "EatME team") → add the testers and the build. No review: they get each new build
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
- [ ] A demo account for Beta App Review: `npm run demo:account -- --email review@<your domain>` (see
      [`README.md` → Demo account](README.md#demo-account)). EatME can't be used without signing in, so Apple needs
      working login details; the account's two weeks of sample data is what lets a reviewer see the weight trend,
      the weekly check-in and Plan tomorrow.
- [ ] RevenueCat: the four products are attached to the `premium` entitlement and the offering, and Sandbox Testing
      Access is "Anybody"; Railway has `REVENUECAT_SECRET_KEY` and `PAYMENTS_ENABLED=true`.
- [ ] When every tester is on TestFlight instead of Expo Go: delete `ALLOW_EXPO_GO` on Railway.
- [ ] Put the public TestFlight link on the landing page (`legal/index.html`, the comment in the download section).

## App Review (the App Store release)

App Store Connect → EatME → the iOS version (1.0) → fill it from [`README.md`](README.md):

1. **Screenshots:** iPhone 6.9" display → drag in `screenshots/ios-6.9/01-home.png` to `07-search.png` in order.
2. **Texts:** promotional text, description, keywords, support URL (`<server>/support`), copyright (leave the
   marketing URL empty until the landing page links the App Store).
3. **Build:** pick the TestFlight build you tested.
4. **App Review Information:** your name, email and phone (`+1 ...` format), "Sign-in required" with the demo
   account's email and password, and the review notes.
5. **App Information / Age Rating / App Privacy / Pricing:** as in [`README.md`](README.md), including the age
   rating override to 18+, **Regulated Medical Device: No** and the Digital Services Act trader status.
6. **Subscriptions (they go to review with this version):** Monetization → Subscriptions → EatME Premium → each
   subscription: replace the placeholder **review screenshot** with a screenshot of Profile → EatME Premium taken on
   a TestFlight build (1320 × 2868 or 1290 × 2796), set **multiseat purchases to No**, then **Add for Review** into
   the same draft submission as version 1.0.
7. **Version Release:** "Manually release this version" (products can take a few hours to be buyable after
   approval).
8. **Submit for Review.** Most reviews finish within 24 hours. If Apple rejects: ask Claude to "answer this App
   Store rejection" with the message; the skill has the playbook.

After 1.0 is live, raise `expo.version` in `app.json` (1.0.1, 1.1.0...) before building the next App Store version.

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
