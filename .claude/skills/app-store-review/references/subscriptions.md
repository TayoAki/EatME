# Subscriptions, paywalls, sandbox and TestFlight purchases

Checked 2026-09-28. Apple sources: <https://developer.apple.com/app-store/subscriptions/>,
<https://developer.apple.com/help/app-store-connect/manage-subscriptions/offer-auto-renewable-subscriptions>,
RevenueCat docs (<https://www.revenuecat.com/docs>).

## Contents

- [2026 changes](#2026-changes)
- [App Store Connect setup](#app-store-connect-setup)
- [Submitting the first subscription](#submitting-the-first-subscription)
- [The paywall](#the-paywall)
- [Testing purchases: sandbox and TestFlight](#testing-purchases-sandbox-and-testflight)
- [Review gotchas with RevenueCat](#review-gotchas-with-revenuecat)

## 2026 changes

- **Jul 15 2026:** a new in-app purchase submission flow. Statuses are now Prepare for Submission → (Add for Review)
  Ready for Review → Waiting for Review → In Review → Approved. "Missing Metadata" and "Ready to Submit" are gone.
- **Sep 16 2026:** multiseat purchases are **on by default** for subscriptions. Unless the backend understands
  quantities above 1, choose "No, don't allow multiseat purchases" on each subscription before approval.
- **Mar 2026:** promo codes for in-app purchases ended; offer codes cover every purchase type (since Oct 2025).
- **Apr 27 2026:** monthly plans with a 12-month commitment (outside the US). Optional.

## App Store Connect setup

- **Agreements first.** The Account Holder signs the Paid Apps Agreement and finishes banking and tax until it's
  **Active** ("Pending User Info" = not in effect). Sandbox, TestFlight purchases and App Review all need it; without
  it RevenueCat can't fetch products. Accept the latest Apple Developer Program License Agreement too, or you can't
  create apps or in-app purchases.
- **One subscription group** for all plans of the same product (monthly and yearly of "Premium"). Only one
  subscription per group can be active. Put equivalent plans at the same level. Localize the group's display name
  (shown in Manage Subscriptions; no emoji).
- **Each subscription:** reference name (up to 64), product ID (up to 100; permanent, never reusable), duration
  (fixed once submitted), price and availability, localized display name (2-30) and description (up to 45),
  a **review screenshot** of the purchase in the app (any accepted iPhone screenshot size, no alpha), review notes
  (up to 4,000). Introductory offer (free trial) under Subscription Prices → Introductory Offers.
- Metadata changes reach the sandbox within about an hour; RevenueCat caches products for up to 24 hours.

## Submitting the first subscription

"Your first auto-renewable subscription must be submitted with a new app version." In the 2026 flow:
Subscriptions → the product → **Add for Review** → create a submission, choose the app version, add the group
and every subscription → Submit for Review. "The app version, subscription group, and every subscription ... must
all be added to the same draft submission." Release the app manually: products can take up to 24 hours to become
buyable after approval.

## The paywall

Required on screen before the purchase (DPLA Schedule 2 §3.8(b), guideline 3.1.2, Apple's subscriptions page):

- what the person gets for the price;
- the subscription's title, length and price; **the billed amount is the most prominent price** (a per-week or
  per-day figure only smaller and subordinate);
- for a free trial: how long it lasts and the price once it ends; show it only when the store will give it;
- that it renews automatically until cancelled (at least 24 hours before the period ends), charged to the Apple
  Account, and how to manage or cancel;
- Restore Purchases; Terms of Use (EULA) and Privacy Policy links (also in the App Store metadata);
- a visible way to close the paywall.

Patterns rejected in 2025-2026:
- trial toggles ("enable free trial" switches) - rejected since Jan 2026;
- a plan without a trial pre-selected next to a big "free trial" badge (5.6, Mar 2026);
- the free trial or a weekly breakdown bigger than the billed amount (3.1.2(c); the Cal AI removal in Apr 2026);
- a trial offered to people who already used it (they get charged at once): on iOS check
  `Purchases.checkTrialOrIntroductoryPriceEligibility(productIds)` and show the trial only for
  `INTRO_ELIGIBILITY_STATUS_ELIGIBLE`; treat UNKNOWN as "no trial". Google Play only returns offers the person can
  get, so Android's `introPrice` can be trusted;
- a paywall that shows nothing (products still in review, agreement not active) - 2.1(b).

Button wording: "Subscribe" or "Start free trial" are fine when the price and trial terms are on screen. If a
reviewer complains that the trial is promoted more than the price, make the button neutral ("Continue") and keep
the terms next to it.

## Testing purchases: sandbox and TestFlight

- TestFlight apps "always run in the sandbox environment". **Purchases are free for testers** and "will not carry
  over" to the App Store version. Testers use their own Apple Account; sandbox test accounts are only for your own
  team (Settings → Developer → Sandbox Apple Account on a device).
- Renewal speed in TestFlight: "renewed daily, up to 6 times within a 1-week period, regardless of the
  subscription's duration", then auto-renew turns off. Sandbox accounts use accelerated periods (a month renews in
  minutes).
- So don't grant Premium to beta testers by hand: let them buy it in TestFlight and test the real flow, including
  Restore on a second device and cancelling in Settings → Apple Account → Subscriptions.
- RevenueCat: turn on **View Sandbox Data** to see test purchases; sandbox webhooks carry
  `"environment": "SANDBOX"`. Make sure the webhook integration sends **both** environments if the backend relies
  on webhooks.

## Review gotchas with RevenueCat

- App Review buys in the **sandbox against your production backend**. The server must accept sandbox events and
  receipts (Apple: verify against production first, then the sandbox on status 21007; RevenueCat does this). Never
  filter out `environment: SANDBOX` in production.
- Keep RevenueCat's **Sandbox Testing Access** at "Anybody" (the default); "Nobody" would stop reviewers and
  TestFlight testers from unlocking anything.
- Unlock from the SDK's `CustomerInfo` right after `purchasePackage`, then sync the server. People must get what
  they paid for "without performing additional tasks".
- Restore runs only when the person taps Restore; never call it automatically on launch.
- Ship the platform key (`appl_...` / `goog_...`), never a Test Store key.
- Upload the In-App Purchase Key (StoreKit 2) in RevenueCat, and put RevenueCat's App Store Server Notifications
  URL in both the Production and Sandbox fields in App Store Connect.
- Keep the default "Transfer" behaviour for restores across accounts; "Keep with original App User ID" caused a
  5.1.1 rejection in 2025 (a restore on a new account did nothing).
- If purchases need a signed-in account (because Premium is tied to it), make that clear on the paywall; don't make
  people create an account just to buy something that doesn't need one.
