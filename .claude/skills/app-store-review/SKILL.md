---
name: app-store-review
description: Get an iOS app through Apple's App Review and TestFlight on the first try. Use this whenever the work touches shipping to Apple, even if the user doesn't say "review" - preparing or auditing a submission, "is this ready for the App Store", building and uploading with EAS ("new build", "push to TestFlight", "eas submit"), TestFlight testers and Beta App Review, App Store Connect fields (description, keywords, screenshots, age rating, App Privacy, review notes, demo account), paywalls and subscriptions (RevenueCat, free trials, restore, sandbox purchases), HealthKit / AI-consent / health-claim rules, and answering or appealing a rejection. Also use it before adding a feature that Apple reviews closely (payments, sign-in, AI, health data, medicine, alcohol, user tracking).
---

# Passing App Store review

Apple rejects apps for a short list of reasons that repeat: the reviewer couldn't use the app (2.1), the
metadata doesn't match the app (2.3), a paywall hides what it costs (3.1.2), data goes somewhere without consent
(5.1.1, 5.1.2), a health claim can't be backed up (1.4.1), or the app looks like a copy of many others (4.3).
Almost every one of them is visible before you submit if you look at the app the way a reviewer does: a fresh
install, a demo account, a sandbox purchase, and the listing open next to the app. This skill is that look.

Facts here were checked on 2026-09-28 against Apple's guidelines ("Last Updated: June 8, 2026"). Apple changes
rules several times a year, so before relying on a date, a size or a limit, re-check it at the source linked in the
reference files (developer.apple.com/news and developer.apple.com/app-store/review/guidelines) and update the
reference if it moved.

## Pick the job

| The user wants to... | Do this | Read |
| --- | --- | --- |
| Know if the app is ready / audit before submitting | Run the [pre-submission audit](#pre-submission-audit) and report a table | all of `references/` (checks 2-3 need `subscriptions.md`, 6 and 8 `metadata.md`, 9 `testflight-eas.md`), starting with `eatme.md` |
| Build and upload, get it on TestFlight | Follow [Build and ship](#build-and-ship) | `references/testflight-eas.md` |
| Fill in App Store Connect, make screenshots | Follow [Listing and metadata](#listing-and-metadata) | `references/metadata.md` |
| Add or check a paywall / subscription | Follow [Paywalls](#paywalls-and-subscriptions) | `references/subscriptions.md` |
| Answer a rejection | Follow [When Apple rejects](#when-apple-rejects) | `references/rejections.md` |

For this repository (EatME, sold as Weight Class), `references/eatme.md` maps every rule to the file that satisfies it, and
`store/README.md` holds the filled-in answers to paste into App Store Connect. Keep both in step when the app
changes.

## Pre-submission audit

Go through the app as a reviewer would, then report one table sorted by severity: **check - severity (blocker /
risk / nice to have) - status (pass / fix / owner action / can't verify) - evidence (file:line, URL or screen) -
what to do**. Cite the guideline number in the check column; put links in a short sources list under the table.
"Owner action" is anything only the account holder can do in Apple's or a vendor's dashboard; say exactly where
to click. "Can't verify" is for things you can't see from here (a dashboard, a device): say how to check. Fix
what's in the code; never guess a value that lives in a dashboard you can't see.

Look at the app through **the demo account's eyes**: a reviewer signs in to an account that already finished
onboarding, at whatever time of day it is in California, on an iPhone or an iPad. A rule met only on an onboarding
screen, only in the evening or only after a week of data isn't met for the reviewer. Map each rule to a screen the
demo account reaches, and give time- or data-dependent features a path that works any time (and say it in the
notes).

Check, in this order (most rejections come from the top of the list):

1. **The reviewer can use everything (2.1).** A demo account that never expires, with realistic data, whose
   credentials go in App Review Information. Backend and AI live during review. Every server feature flag in its
   final state: a feature that's in the binary but switched off on the server must be disclosed in the review
   notes and switched on only together with a new reviewed version (turning it on after approval makes it a hidden
   feature, 2.3.1(a)). No placeholder text
   (`[Company Name]`, lorem ipsum, "coming soon") anywhere a reviewer can reach, including the privacy policy and
   support page. Free-plan limits must not stop the reviewer from testing: say in the notes how to reach the
   limited feature (a sandbox purchase is fine).
2. **Purchases work in the sandbox (2.1(b), 3.1.1).** The first subscription is attached to the same submission as
   the app version. Paid Apps Agreement active. Products load in a TestFlight build. Restore purchases exists.
3. **The paywall is honest (3.1.2, 5.6).** The billed amount is the most prominent price; trial length and the
   price after it are stated; a trial is only shown to people who can get it; auto-renewal and how to cancel are
   stated; Terms of Use and Privacy Policy links are on the paywall and in the listing; there is a way to close it.
4. **Data goes nowhere without consent (5.1.1, 5.1.2).** Personal data sent to a third-party AI needs an explicit
   "allow" first, naming what is sent and to whom, with a way to turn it off (5.1.2(i)). No recording of user
   activity (session replay, screen recording) without explicit consent and a visible indicator (2.5.14).
   Purpose strings say specifically why each permission is needed; unused permission strings removed. Account
   deletion in the app (5.1.1(v)), and with Sign in with Apple, tokens revoked on deletion.
5. **Health claims are careful (1.4.1, 1.4.2, 5.1.3).** "Estimate", never "accurate" or "precise"; methods or
   sources for the numbers are available; a "check with a doctor" reminder; no dose calculators; HealthKit data
   never used for ads or stored in iCloud; the Apple Health integration named in the UI and the description (2.5.1).
6. **The listing matches the app (2.3).** Screenshots show the real app in use **with the production feature
   flags** (a tab or card that only exists behind a flag the store build doesn't have is a mismatch), suit a 4+
   audience (no alcohol, needles or body photos), mark every paid feature visible anywhere in them (a Premium card
   on the home screen counts), contain no prices, no other platforms, no Health app imagery.
   Description names Apple Health, the subscription, and links the Terms of Use. No competitor or drug brand names
   in the name, subtitle or keywords (2.3.7, 4.1(c)).
7. **It isn't "one more of the same" (4.2, 4.3).** Say in the review notes what makes the app different, and make
   sure the first screenshots show it.
8. **Dashboards are complete.** Age rating answered (override if the terms set a higher minimum age), App
   Privacy published and consistent with the privacy policy, medical-device status declared (Health & Fitness
   apps), DSA trader status set, export compliance answered, support URL with real contact details, copyright.
9. **The build is accepted.** Built with the required Xcode/SDK, privacy manifests for required-reason APIs in
   every bundle (app and extensions), no ITMS errors from the last upload, build number above the last one.

Run the repo's lint and typecheck after any fix, and re-read the diff as a reviewer would before committing.

## Build and ship

Use EAS; never edit `ios/` or `android/` by hand in a CNG project. The commands, the first-time setup and the
fixes for common upload errors are in `references/testflight-eas.md`. The short version:

```bash
npx eas-cli@latest build -p ios --profile production --auto-submit   # build in the cloud, upload to App Store Connect
npx eas-cli@latest submit -p ios --latest                            # upload a finished build later
```

The first run must be interactive (Apple ID sign-in creates the certificates, profiles, capabilities and an App
Store Connect API key). Never ask the user to paste passwords, API keys or one-time codes into the chat: they run
the interactive step in their own terminal, and CI uses secrets stored on EAS.

TestFlight facts people forget: internal testers (up to 100 App Store Connect users) get builds right after
processing with no review; external testers (up to 10,000) need Beta App Review for the first build of a version;
builds expire after 90 days; **in-app purchases in TestFlight use the sandbox and cost testers nothing**, with
subscriptions renewing quickly (daily, up to 6 renewals a week) - so testers can and should test Premium there
instead of being granted it.

## Listing and metadata

`references/metadata.md` has every App Store Connect field with its limit, the screenshot sizes, the age-rating
questions and how App Privacy answers map to data. Rules of thumb:

- Write the description for people first, then check it against 1.4.1 (no accuracy claims), 2.5.1 (name Apple
  Health), 3.1.2 (subscription name, length, price and Terms link) and 2.3.7 (no other apps' names).
- Screenshots: 1320 x 2868 px (6.9") portrait, PNG or JPEG **without alpha**, 1 to 10. Captions may overlay the
  image. Use no device frame unless it's Apple's own bezel, unaltered. Mark Premium features on the screenshot.
- Age rating: answer honestly, then override upward if the Terms require an older minimum age.
- App Privacy must match the privacy policy and the SDKs in the build (crash reporting, analytics, purchases).

## Paywalls and subscriptions

`references/subscriptions.md` covers App Store Connect setup (one group, levels, localizations, review
screenshot), the 2026 submission flow, RevenueCat specifics and sandbox testing. The rules that cause rejections:

- The amount that will be billed is the most prominent price. A per-week or per-day breakdown is smaller.
- Free trial: say how long, and the price after it. Only show it when the store will give it (on iOS ask
  RevenueCat's `checkTrialOrIntroductoryPriceEligibility`; "unknown" means show the normal price).
- No trial toggles, no pre-selected plan that hides the trial terms, no "continue" that buys without the price
  on screen.
- Restore purchases button; Terms of Use and Privacy Policy links; a close button; a way to manage or cancel.
- Unlock right after the purchase from the SDK's customer info; don't wait for a webhook.
- The production server must accept **sandbox** receipts and webhooks: App Review and TestFlight both buy in the
  sandbox against the production backend.

## When Apple rejects

Read the whole message and the guideline it cites, reproduce the problem on a fresh install with the demo
account, then choose: fix and resubmit, reply with an explanation (screenshots or a screen recording help most),
or appeal. `references/rejections.md` has the top rejection patterns with the fix that worked, and a reply
template. Answer in App Store Connect (the submission's App Review messages), stay factual, quote the guideline,
and say exactly where in the app the reviewer can see the fix. Never argue that other apps do the same thing.

## Working style

- Lead with what blocks submission, then risks, then nice-to-haves.
- Give the guideline number for every finding and quote a short phrase from it where it helps: people trust a
  rule they can read. Links go in a sources list under the table.
- Keep the user's secrets out of the conversation, commits and logs. Dashboard steps are for the user to do;
  write them as exact click paths.
- When a rule and the app disagree, prefer changing the app over arguing with the reviewer.
