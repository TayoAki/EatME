# Weight Class (the EatME repo): where each review rule is met

Weight Class (called EatME in the code) is an AI calorie tracker for adults (18+) with GLP-1 mode, drinks, Apple Health and a Premium subscription
(RevenueCat). That combination touches most of the closely reviewed areas: AI consent, health claims, medicine,
alcohol, HealthKit, subscriptions and a saturated category. This file maps each rule to the code, so an audit can
check the real thing instead of guessing. The filled-in App Store Connect answers live in `store/README.md`;
screenshots in `store/screenshots/`. Update this file when the app changes.

## Rule → code

| Rule | Where | How it's met |
| --- | --- | --- |
| 2.1 demo account | `scripts/demo-account-remote.ts` (`npm run demo:account:remote -- --email ...`, through the live API: the production database is private), or `scripts/demo-account.ts` for a reachable database | Two weeks of sample meals, weigh-ins and water; AI not yet allowed, so the reviewer sees the consent screen; `--replace` recreates it before a resubmission |
| 2.1 / 2.3.1(a) / 2.5.19 flags in their final state | `src/app/api/features+api.ts` (`GET <server>/api/features`) | Check the live values before submitting. No feature sits switched off in the binary: the FatSecret restaurant menus that did were removed on 21 Oct 2026; a new feature ships in the version that turns it on. What to order's screens came after commit `f05e76a`: build 4 (1.0) is built from that commit, and What to order ships in its own version with `whatToOrder` on (`WHAT_TO_ORDER` is for outages only) |
| Flamie, the streak flame (v2.6, version 1.2) | `src/components/flamie/`, `src/lib/flamie.ts`, the Home header and streak sheet, the rules in `FLAMIE.md` (the character it replaced is shelved: `CHARACTER.md`) | 1.4.1 and kindness: it grows with the streak and sparks for protein, water and fiber goals, never with weight or calories; embers are sleepy, never sad about food; calm mode removes it; no shame copy (`nudgePlan` tests ban calories, weight and guilt words). 4.5.4: the check-in nudges are local reminders the person turns on, quiet after five days. 2.3.8: suitable for 4+ screenshots. No new data, permission or AI use: the Privacy Policy and App Privacy don't change |
| What to order (v2.5) | `src/app/(app)/restaurant/[slug].tsx`, `src/app/(app)/menu/[id].tsx`, `src/components/menu/`, Scan → Menu (`src/app/(app)/(tabs)/scan.tsx`), ranking in `src/shared/menu-fit.ts` | 1.4.1: every chain number names its source and checked date with a link to the chain's own guide (dish sheet, list footer, logged meal); estimates show ranges; Sources → Restaurant menus. 5.1.2(i): menus need the consent wording that names them (`MENU_CONSENT_VERSION`; earlier consents asked once). 5.1.1(i): the camera and photo alerts name restaurant menus (`app.json`). 3.1.2: the Premium screen lists What to order (`src/app/(app)/premium.tsx`). Version 1.1.0. 5.2.1: chain names as text, our own food pictures. Allergy line on every list; no "healthy", "safe" or scores. Test menu for reviewers: `<server>/test-menu` (`legal/test-menu.html`). Premium with one free try; notes and listing in `store/README.md` → What to order. Chain meals typed, photographed or searched take the chain's numbers with the same citation on the meal (`src/shared/chain-match.ts`; only when the app sends `X-Weight-Class-Features: chain-match`, which build 4 never does), and logging them is free |
| 2.1 time- and data-dependent features | Home's week strip (`src/components/home/date-strip.tsx`), `scripts/demo-account.ts` | Plan tomorrow: the evening card only shows after 5 pm, so the notes send reviewers to tomorrow in the week strip (any time); the demo account's two weeks of meals give Plan tomorrow, the check-in and the weight trend enough history |
| 1.4.1 estimates, doctor, sources | Profile → Sources and citations (`src/app/sources.tsx`, list in `src/lib/sources.ts`); `SourcesLink` (`src/components/sources.tsx`) next to each calculation; doctor notes on the plan, Daily goals and Sources | Citations **in the app** with links, easy to find (a web page alone was rejected on 21 Oct 2026). Every new calculation, report or health reference gets a section in `src/lib/sources.ts` (method + PubMed/guideline links, opened before shipping) and a "Sources" link where it's shown; keep `legal/support.html#sources` in step |
| 5.1.1(iv) permission requests | `src/lib/camera-access.ts` (`useCameraAccess`), `src/components/scan/camera-capture.tsx`, `src/components/body/progress-camera.tsx`; switches in Reminders and Apple Health | No screen of ours before a system alert (rejected 21 Oct 2026 for "Allow camera" + "Choose from gallery" in front of it). If a priming screen is ever needed: one button, "Continue", that opens the alert. After a no: say it's off, Open Settings, and other ways to do the task |
| 1.4.2 no dose maths | `src/app/(app)/glp1.tsx` ("Weight Class doesn't give medical or dosing advice") | GLP-1 mode logs the person's own medicine, doses, sites, side effects and a pen/vial count they enter |
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
| 5.1.2(i) AI consent | `src/components/ai-consent-view.tsx`, recipients from `aiProviders()` in `src/lib/server/ai.ts`, `src/lib/server/ai-consent.ts` | Asked before the plan and the first scan; names OpenRouter and OpenAI and the data sent; off switch in Profile → Preferences → AI meal analysis. The wording's version is stored (`users.ai_consent_version`): menu scans need version 2, which names menus, so a person who agreed earlier is asked once more |
| 5.2.1 third-party material | `assets/foods/` (`LICENSE`, `README.md`), credit at the end of `src/app/sources.tsx`; `data/chains/README.md` | Food pictures for meals without a photo are Microsoft's Fluent Emoji under the MIT licence, credited in Profile → Sources. Restaurant chains appear by name only: numbers from their own guides, never their photos or logos |
| 5.1.3 health data | `src/lib/health-plan.ts`, `src/lib/health.ts` | Writes only what the person logged; nothing in iCloud; health data never in logs, Sentry, URLs, notifications or AI prompts |
| Purpose strings | `app.json` plugins (camera, photos, HealthKit); `expo-secure-store` with `faceIDPermission: false` | Each names what Weight Class does with it; the HealthKit read string lists steps, active energy, workouts and sleep (what `src/lib/health-read.ts` asks for). The photo-library string is never shown (the system picker needs no permission) but stays accurate |
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
