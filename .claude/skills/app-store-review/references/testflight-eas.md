# Building with EAS and shipping to TestFlight

Checked 2026-09-28 against the Expo docs (<https://docs.expo.dev/submit/ios/>,
<https://docs.expo.dev/build/introduction/>), the eas-cli changelog and App Store Connect help. Run eas-cli as
`npx eas-cli@latest` (or `bunx eas-cli` in Bun projects); it needs Node 20.18.3+ or 22+.

## Contents

- [First time only](#first-time-only)
- [Every release](#every-release)
- [TestFlight](#testflight)
- [Android internal testing](#android-internal-testing)
- [Upload errors and fixes](#upload-errors-and-fixes)
- [Over-the-air updates](#over-the-air-updates)

## First time only

Things only the Apple Account Holder (or an Admin) can do - write them as steps for the user, never ask for
their passwords or codes:

1. Apple Developer Program membership, preferably as an organization (5.1.1(ix) for health apps).
2. App Store Connect → Business: Paid Apps Agreement **Active** (banking, tax), DSA trader status.
3. App Store Connect → Apps → + → New App: platform iOS, name, primary language, the bundle ID from `app.json`
   (`ios.bundleIdentifier`), a SKU. Note the numeric **Apple ID** of the app (App Information) = `ascAppId`.
4. Sign in to EAS in the user's own terminal: `npx eas-cli@latest login`.
5. The first build **interactively**, so EAS can sign in to the Apple Developer account and create the
   distribution certificate, provisioning profiles (one per target, e.g. the app and a widget extension), and turn
   on the capabilities the config asks for (HealthKit, Sign in with Apple, App Groups, push):

   ```bash
   npx eas-cli@latest build -p ios --profile production
   ```

6. The first submit interactively too: it offers to create an **App Store Connect API key** and store it on EAS,
   so later submits (and CI) need no Apple ID. Optionally put the IDs in `eas.json` so non-interactive runs work:

   ```json
   "submit": {
     "production": {
       "ios": { "ascAppId": "1234567890", "appleTeamId": "ABCDE12345" },
       "android": { "track": "internal", "releaseStatus": "draft" }
     }
   }
   ```

   `appleTeamId` is under Membership details on developer.apple.com. For CI: `EXPO_TOKEN` (an Expo access token)
   plus the stored API key, or `EXPO_ASC_API_KEY_PATH`, `EXPO_ASC_KEY_ID`, `EXPO_ASC_ISSUER_ID`,
   `EXPO_APPLE_TEAM_ID` as secrets.

If a widget or other extension's profile lacks an App Group after the first build: enable App Groups for that
extension's identifier in the developer portal, delete its profile with `npx eas-cli@latest credentials -p ios`,
and build again (expo/expo#43676).

## Every release

```bash
npx expo lint && npx tsc --noEmit                                     # the repo's own checks first
npx eas-cli@latest build -p ios --profile production --auto-submit    # build + upload in one go
# or, separately:
npx eas-cli@latest build -p ios --profile production
npx eas-cli@latest submit -p ios --latest                             # newest store build (waits if still building)
```

- With `"appVersionSource": "remote"` and `"autoIncrement": true` (production profile), EAS raises the build
  number on every build. `npx eas-cli@latest build:version:get -p ios` shows it; `build:version:set` fixes it.
- The marketing version (`expo.version`, e.g. 1.0.0) must go up after a version is released; a closed version
  refuses new builds (ITMS-90186 / 90062).
- Build both stores at once with `-p all` (then `submit -p all --latest`).
- `EXPO_PUBLIC_*` values are baked in at build time from the build profile's `env` (or EAS environment variables):
  check the production profile points at the production API before building.
- Processing in App Store Connect takes about 5-15 minutes after upload; Apple emails when the build is ready or
  when it's refused (read that email: it names the ITMS error).

## TestFlight

- **Internal testing** (App Store Connect users with a role, up to 100): no review. Add them in TestFlight →
  Internal Testing → a group; they get each build as soon as it's processed. The first interactive submit can create
  a "Team (Expo)" group for you.
- **External testing** (anyone with an email or a public link, up to 10,000): TestFlight → External Testing → a
  group → add the build. The first build of each version goes to **Beta App Review** (usually a day or less; later
  builds of the same version often skip a full review). Up to 6 builds can be sent for beta review per 24 hours.
- **Test Information** (required before external testing): Beta App Description, Feedback Email, Marketing URL
  and Privacy Policy URL (optional), review contact (phone in `+country code` form), "Sign-in required" with a
  demo account, notes (up to 4,000; no credentials in the notes).
- **What to Test** is per build: in App Store Connect, or from the CLI with
  `npx eas-cli@latest submit -p ios --latest --groups "Beta" --what-to-test "..."` (eas-cli 16.12+; internal
  groups) or `build ... --auto-submit --what-to-test "..."` (16.13+).
- Builds expire after **90 days**. Each tester can install on up to 30 devices. Builds are never released to the
  App Store automatically - you pick a build on the version page when you submit for review.
- **Purchases in TestFlight run in the sandbox and are free** for testers; subscriptions renew daily up to 6 times
  a week. Testers test the real paywall; don't grant Premium by hand.
- Beta App Review follows the same guidelines as App Review, more lightly: the demo account, AI consent and
  placeholders still matter.

## Android internal testing

```bash
npx eas-cli@latest build -p android --profile production
npx eas-cli@latest submit -p android --latest      # default track: internal
```

- The Play Console app must exist first (the manual first upload is optional since Jul 2026). A Google service
  account key with release permissions goes to EAS via `npx eas-cli@latest credentials -p android` (or
  `serviceAccountKeyPath` in eas.json).
- If a brand-new app fails with "missing the required metadata", submit with `"releaseStatus": "draft"` once.
- Personal Play accounts created after Nov 13 2023 need a closed test with 12 testers for 14 days before
  production; organization accounts don't.

## Upload errors and fixes

| Error | Fix |
| --- | --- |
| ITMS-90683 missing purpose string | Add the string through the plugin's options in `app.json` (camera, photos, Face ID...), or remove the unused permission |
| ITMS-91053 missing API declaration | Add the reason to `ios.privacyManifests` (app) or the extension's manifest plugin |
| ITMS-91061 / 91065 SDK without manifest or signature | Update the SDK |
| ITMS-90717 icon with alpha | Flatten the 1024 px icon; no transparency |
| ITMS-90189 duplicate build number | Remote auto-increment, or `build:version:set` |
| ITMS-90186 / 90062 version closed | Raise `expo.version` |
| Missing Compliance | `ios.config.usesNonExemptEncryption: false` |
| "App Store Connect app not found" | Create the app for the bundle ID; check the API key's role and app access |
| Provisioning / capability errors (HealthKit, Sign in with Apple, App Groups) | Re-run the build interactively so EAS syncs capabilities; delete a stale profile in `eas credentials` |
| SDK too old | Use an EAS image with the required Xcode (`"image": "latest"` or the SDK's alias in the build profile) |

## Over-the-air updates

Without `expo-updates` in the project, every change needs a new store build. To add OTA later:
`npx expo install expo-updates`, `npx eas-cli@latest update:configure`, rebuild, then
`npx eas-cli@latest update --channel production --environment production --message "..."`. Updates read
`EXPO_PUBLIC_*` from EAS environment variables (not `.env`, not the build profile), so set those first with
`npx eas-cli@latest env:create` / `env:set`. An update must never change the app's primary purpose (DPLA 3.3.1(B)).
