# EatME: where each review rule is met

EatME is an AI calorie tracker for adults (18+) with GLP-1 mode, drinks, Apple Health and a Premium subscription
(RevenueCat). That combination touches most of the closely reviewed areas: AI consent, health claims, medicine,
alcohol, HealthKit, subscriptions and a saturated category. This file maps each rule to the code, so an audit can
check the real thing instead of guessing. The filled-in App Store Connect answers live in `store/README.md`;
screenshots in `store/screenshots/`. Update this file when the app changes.

## Rule → code

| Rule | Where | How it's met |
| --- | --- | --- |
| 2.1 demo account | `scripts/demo-account-remote.ts` (`npm run demo:account:remote -- --email ...`, through the live API: the production database is private), or `scripts/demo-account.ts` for a reachable database | Two weeks of sample meals, weigh-ins and water; AI not yet allowed, so the reviewer sees the consent screen; `--replace` recreates it before a resubmission |
| 2.1 / 2.3.1(a) flags in their final state | `src/app/api/features+api.ts` (`GET <server>/api/features`) | Check the live values before submitting. Restaurant menus (`RESTAURANTS`) are in the binary but off: the review notes disclose it, and they go live only with a new reviewed version (`store/README.md` → When restaurant menus go live) |
| 2.1 time- and data-dependent features | Home's week strip (`src/components/home/date-strip.tsx`), `scripts/demo-account.ts` | Plan tomorrow: the evening card only shows after 5 pm, so the notes send reviewers to tomorrow in the week strip (any time); the demo account's two weeks of meals give Plan tomorrow, the check-in and the weight trend enough history |
| 1.4.1 estimates, doctor, sources | Profile → Daily goals (`src/app/(app)/daily-goals.tsx`: doctor note + "How EatME works out your numbers") for the demo account; the onboarding plan screen (`src/app/onboarding/plan.tsx`) for new accounts; `legal/support.html#sources` | "Estimate" wording everywhere; formulas and databases cited on the support page, also reachable from Profile → Help and support |
| 1.4.2 no dose maths | `src/app/(app)/glp1.tsx` ("EatME doesn't give medical or dosing advice") | GLP-1 mode logs the person's own medicine, doses, sites, side effects and a pen/vial count they enter |
| 1.4.3 alcohol | `src/components/scan/drink-form.tsx`, `src/lib/links.ts` (`alcoholHelpline`), Profile → Help with alcohol | Neutral logging, no streaks or tips; 18+ app; alcohol kept out of screenshots |
| 2.5.1 Apple Health | `app.json` (`@kingstinct/react-native-healthkit` purpose strings, `background: false`), Profile → Apple Health, `src/lib/health.ts` | Named "Apple Health" in the UI and description; reading steps/workouts/sleep is a separate switch and stays on the phone |
| 2.5.14 recording user activity | `src/lib/sentry.ts` | Session replay only in development builds; store builds send crash reports, logs and traces, no replays |
| 3.1.1 / 3.1.2 paywall | `src/app/(app)/premium.tsx`, `src/lib/billing.ts` | Benefits list, price per period as the main price, trial only when the store says the person is eligible (`premiumOptions`), auto-renew and cancel text, Restore, Manage subscription, Terms and Privacy links, back button |
| 3.1.2 sandbox on production | `src/lib/server/billing.ts` (`syncFromRevenueCat`, `applyWebhookEvent`) | No environment filter; RevenueCat webhook `environment: null` (both) - checked 2026-09-28 |
| 4.3(b) different | review notes in `store/README.md` | USDA numbers, food memory, notes/extra photos to steer the AI, calm mode, GLP-1 mode, Plan tomorrow |
| 4.8 sign-in | `src/app/(public)/` sign-in screens, `/api/features` | Email and password today; if Google sign-in is turned on, Sign in with Apple must be on next to it |
| 5.1.1(i) privacy policy | `legal/privacy.html` (served at `<server>/privacy`), Profile and paywall links | Covers AI providers, Sentry, RevenueCat, Railway, retention, deletion |
| 5.1.1(v) deletion | Profile → Delete account; `src/lib/server/account.ts` (`revokeAppleTokens`); `legal/delete-account.html` | Deletes everything, revokes Sign in with Apple tokens |
| 5.1.1(ix) legal entity | App Store Connect account | Submit from an organization account (GLP-1 mode = sensitive health data) |
| 5.1.2(i) AI consent | `src/components/ai-consent-view.tsx`, recipients from `aiProviders()` in `src/lib/server/ai.ts` | Asked before the plan and the first scan; names OpenRouter and OpenAI and the data sent; off switch in Profile → Preferences → AI meal analysis |
| 5.1.3 health data | `src/lib/health-plan.ts`, `src/lib/health.ts` | Writes only what the person logged; nothing in iCloud; health data never in logs, Sentry, URLs, notifications or AI prompts |
| Purpose strings | `app.json` plugins (camera, photos, HealthKit); `expo-secure-store` with `faceIDPermission: false` | Each names what EatME does with it; the HealthKit read string lists steps, active energy, workouts and sleep (what `src/lib/health-read.ts` asks for). The photo-library string is never shown (the system picker needs no permission) but stays accurate |
| Age rating | Terms (`legal/terms.html`) and onboarding (`MIN_AGE = 18` in `src/shared/onboarding*.ts`) | Override to 18+ in App Store Connect |
| Privacy manifests | `app.json` `ios.privacyManifests`, `plugins/with-widget-privacy-manifest.js` | App and widget extension both declare required-reason APIs |

## Before every submission

1. Legal placeholders filled and deployed: `[Company Legal Name]`, `[Contact Email]`, `[Registered Address]`,
   `[Governing Law Jurisdiction]`, `[Effective Date]`. Both of these must print nothing:
   `grep -rn 'class="placeholder"\|\[[A-Z]' legal/*.html` and
   `grep -n '\[Company Legal Name\]\|\[Contact Email\]' store/README.md` (store copy you paste). The Support URL
   must show real contact details (an email and a postal address; a phone only where local law asks for one).
2. `curl -s <server>/api/features` shows the intended flags; `/privacy`, `/terms`, `/support`,
   `/delete-account` return 200.
3. Railway: `ALLOW_EXPO_GO` removed once testers are on TestFlight; daily Postgres backups only.
4. RevenueCat: products attached to the offering **and** to the `premium` entitlement (otherwise a purchase
   unlocks nothing), Sandbox Testing Access = Anybody, webhook sends both environments, In-App Purchase Key
   uploaded. Railway: `REVENUECAT_SECRET_KEY` set (the sync after a purchase needs it) and the AI provider has
   credit.
5. App Store Connect: subscriptions (multiseat off) added to the same submission as the version; Paid Apps
   Agreement active; age rating override 18+; medical device = No; DSA trader status; App Privacy published.
6. A fresh demo account (`npm run demo:account:remote -- --email review@<domain>` after deleting the old one), its credentials in App
   Review Information, and the notes from `store/README.md`.
7. Screenshots from `store/screenshots/ios-6.9/` still match the app as the store build shows it: taken with the
   production flag values (compare `/api/features`), Premium marked wherever a Premium card appears. Re-take them
   when a screen changes.
8. A TestFlight build tested on a real iPhone and an iPad: sign-in, AI consent, a scan, barcode, Apple Health
   switch, a sandbox purchase, Restore, Delete account.
