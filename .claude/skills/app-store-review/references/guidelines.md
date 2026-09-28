# App Review Guidelines digest

Source: <https://developer.apple.com/app-store/review/guidelines/> ("Last Updated: June 8, 2026"), checked
2026-09-28. `G#x` = the anchor on that page (for example `#5.1.2`). `N:id` = <https://developer.apple.com/news/?id=id>.
Re-check anything date-sensitive before relying on it.

## Contents

- [What changed in 2025-2026](#what-changed-in-2025-2026)
- [1 Safety: health, medicine, alcohol](#1-safety-health-medicine-alcohol)
- [2 Performance: completeness, metadata, HealthKit, recording](#2-performance-completeness-metadata-healthkit-recording)
- [3 Business: in-app purchase and subscriptions](#3-business-in-app-purchase-and-subscriptions)
- [4 Design: copies, spam, sign-in](#4-design-copies-spam-sign-in)
- [5 Legal: privacy, AI, health data](#5-legal-privacy-ai-health-data)
- [Age rating, age assurance, medical devices](#age-rating-age-assurance-medical-devices)
- [Apple's own list of common rejections](#apples-own-list-of-common-rejections)

## What changed in 2025-2026

| Date | Change | Source |
| --- | --- | --- |
| May 1 2025 | US storefront may link to other payment methods | N:9txfddzf |
| Jun 9 2025 | 3.2.2(x): no forcing people to rate or review | N:r9dcmrvs |
| Jul 24 2025 | New age-rating system (4+, 9+, 13+, 16+, 18+) and questions; answers required by Jan 31 2026 | N:ks775ehf |
| Nov 13 2025 | 5.1.2(i) names "third-party AI"; 4.1(c) bars other developers' brands; age limits in 1.2.1(a), 4.7.5 | N:ey6d8onl |
| Feb 6 2026 | 1.2 covers anonymous chat | N:d75yllv4 |
| Mar 26 2026 | New Health & Fitness / Medical apps must declare regulated medical-device status (EEA, UK, US) | N:nyqbfz1y |
| Apr 28 2026 | Uploads must be built with Xcode 26 and the iOS 26 SDK | N:ueeok6yw |
| Jun 8 2026 | Kid and teen safety guidance; 4.3(a) and 4.3(b) reworded; 4.5.3 covers Live Activities | N:a233fmpw |
| Jul 2026 | Social-media age-rating questions (required from Sep 2026) | N:tlur8uvi |
| Aug 24 2026 | Sign in with Apple relay addresses also on `private.icloud.com` | N:1ptvdtcm |
| Sep 16 2026 | Multiseat purchases on by default for subscriptions; decide per product | N:likeohx4 |

## 1 Safety: health, medicine, alcohol

**1.4.1 (G#1.4.1).** "Medical apps that could provide inaccurate data or information, or that could be used for
diagnosing or treating patients may be reviewed with greater scrutiny." Apps "must clearly disclose data and
methodology to support accuracy claims", "if the level of accuracy or methodology cannot be validated, we will
reject your app", and apps should "remind users to check with a doctor in addition to using the app and before
making medical decisions".
- Say "estimate" everywhere; never "accurate", "precise", "clinically proven" unless you can show the study.
- Publish the methods and sources behind computed numbers (formulas, databases) and link them from the app.
- Keep a "check with a doctor" reminder where plans or targets are shown. Some reviewers also want it in the
  description (forum thread 779857, Apr 2025).

**1.4.2 (G#1.4.2).** "Drug dosage calculators must come from the drug manufacturer, a hospital, university,
health insurance company, pharmacy or other approved entity, or receive approval by the FDA or one of its
international counterparts." A medicine log is fine; dose, titration, unit or reconstitution maths is not.

**1.4.3 / 1.4.4 (G#1.4.3).** Apps that "encourage consumption of tobacco and vape products, illegal drugs, or
excessive amounts of alcohol are not permitted"; encouraging minors to use them "will be rejected"; never
encourage drunk driving. Logging drinks neutrally (no streaks, rewards or drinking tips) is fine; offer help links.

## 2 Performance: completeness, metadata, HealthKit, recording

**2.1 App Completeness (G#2.1).** Submissions "should be final versions with all necessary metadata and fully
functional URLs included; placeholder text, empty websites, and other temporary content should be scrubbed".
"Make sure your app has been tested on-device for bugs and stability", "include demo account info (and turn on
your back-end service!)". A demo mode needs Apple's prior approval.
- 2.1(b): in-app purchases must be "complete, up-to-date, visible to the reviewer and functional".
- Over 40% of unresolved review issues are 2.1 (<https://developer.apple.com/distribute/app-review/>).
- Reviewers run iPhone-only apps on iPad too; sign-in and purchases must work there.

**2.3 Accurate Metadata (G#2.3).** Metadata, "including privacy information", must reflect the app.
- 2.3.1(a): "Don't include any hidden, dormant, or undocumented features". A server flag that switches a feature on
  after approval counts; have flags in their final state during review.
- 2.3.2: say clearly in the description, screenshots and previews which features "require additional purchases".
- 2.3.3: screenshots "should show the app in use, and not merely the title art, login page, or splash screen. They
  may also include text and image overlays".
- 2.3.7: names, subtitles, screenshots and previews must not include prices, terms or descriptions that aren't
  specific to that metadata type; no "trademarked terms, popular app names" or other irrelevant phrases in
  keywords; subtitles may not "make unverifiable product claims".
- 2.3.8: metadata (icons, screenshots, previews) must "adhere to a 4+ age rating even if your app is rated higher".
  Keep alcohol, needles, blood, bodies and dieting extremes out of screenshots.
- 2.3.10: no "imagery of other mobile platforms" (no Android phones, no "also on Google Play").

**2.5.1 (G#2.5.1).** Apps that use frameworks like HealthKit "should clearly indicate that integration in their
app description" and "HealthKit should be used for health and fitness purposes and integrate with the Health
app". The HealthKit docs add that the use must be clear "in both your marketing text and your user interface".
Apple's design guidance: "Don't use the term HealthKit" - say "Apple Health", and don't show the Health app's own
images or screenshots.

**2.5.4.** Background modes only "for their intended purposes". **2.5.16.** Widgets and notifications must relate
to the app's content.

**2.5.14.** "Apps must request explicit user consent and provide a clear visual indication when recording,
logging, or otherwise making a record of user activity." This is what session-replay SDKs (Sentry replay, UXCam,
and similar) run into: turn them off in store builds or add explicit consent and an indicator.

## 3 Business: in-app purchase and subscriptions

**3.1.1 (G#3.1.1).** Unlocking features or functionality inside the app: "you must use in-app purchase". Apps
"must have a restore mechanism" for restorable purchases. US storefront apps may also link out (May 2025).

**3.1.2 (G#3.1.2).** Auto-renewing subscriptions "must provide ongoing value", last at least seven days and be
available across the user's devices. 3.1.2(a): no "bait-and-switch". 3.1.2(c): "Before asking a customer to
subscribe, you should clearly describe what the user will get for the price."
- The Developer Program License Agreement (Schedule 2, 3.8(b)) requires the title, length and price, and "Links
  to Your Privacy Policy and Terms of Use must be accessible within Your Licensed Application".
- <https://developer.apple.com/app-store/subscriptions/>: "the amount that will be billed must be the most
  prominent pricing element"; free trials must "clearly indicate how long the free trial lasts and the price billed
  once the free trial is over"; provide "a way for current subscribers to sign in or restore purchases"; app and
  metadata must link the Terms of Use and Privacy Policy.
- Press reports (TechCrunch, Apr 21 2026, unverified by Apple): Cal AI was pulled citing 3.1.1, 3.1.2(c) and 5.6
  (a weekly price more prominent than the billed amount, renewal terms obscured, an outside payment flow).

**3.2.2(x).** Don't force people to rate, review, download other apps or do other tasks to use the app.

**5.6 / 5.6.1 (G#5.6).** No tricks "into making unwanted purchases"; "Use the provided API to prompt users to
review your app" - custom review prompts are disallowed.

## 4 Design: copies, spam, sign-in

**4.1 (G#4.1).** "Don't simply copy the latest popular app on the App Store, or make some minor changes to another
app's name or UI". 4.1(c) (Nov 2025): don't use another developer's icon, brand or product name in your app's
icon or name without approval.

**4.2 (G#4.2).** The app must be "particularly useful, unique, or 'app-like'"; a thin wrapper around a website or a
chat box is rejected ("not sufficiently different from a mobile browsing experience").

**4.3 (G#4.3), reworded Jun 2026.** 4.3(a): don't submit several bundle IDs of the same app. 4.3(b): "Don't submit
apps that are indistinguishable from what's already widely available. Opportunistically creating variants of
existing app categories or popular apps degrades App Store discovery"; for saturated categories Apple wants "a
meaningfully different or improved experience". Calorie counters, AI photo scanners and GLP-1 trackers are
saturated: lead the screenshots and the review notes with what's different.

**4.8 (G#4.8).** An app that offers a third-party or social login (Google, Facebook...) must also offer an
equivalent privacy-focused option (Sign in with Apple qualifies). Not needed if the app "exclusively uses your
company's own account setup and sign-in systems". After Sign in with Apple, don't ask again for the name or email
Apple already provided (a Sep 2026 rejection).

**4.10 (G#4.10).** Don't monetize built-in capabilities (camera, Apple Health, push) - keep Apple Health sync free.

## 5 Legal: privacy, AI, health data

**5.1.1 Data Collection and Storage (G#5.1.1).**
- (i) A privacy policy link "in the App Store Connect metadata field and within the app", covering what is
  collected, how, all uses, third parties (who must protect it equally), retention and deletion, and how to revoke
  consent.
- (ii) "Apps that collect user or usage data must secure user consent for the collection"; "Paid functionality
  must not be dependent on or require a user to grant access to this data"; purpose strings must "clearly and
  completely describe your use of the data". Don't require personal information that the core function doesn't
  need.
- (iii) Prefer the out-of-process photo picker to full photo-library access.
- (v) "If your app supports account creation, you must also offer account deletion within the app." Deactivating
  is not enough; with Sign in with Apple, revoke the tokens through Apple's REST API
  (<https://developer.apple.com/documentation/technotes/tn3194-handling-account-deletions-and-revoking-tokens-for-sign-in-with-apple>);
  tell subscribers that billing continues through Apple until they cancel.
- (ix) Apps in highly regulated fields, or that require sensitive user information (health), "should be submitted
  by a legal entity that provides the services, and not by an individual developer". Use an organization account.

**5.1.2 Data Use and Sharing (G#5.1.2).**
- (i) "You must clearly disclose where personal data will be shared with third parties, including with
  third-party AI, and obtain explicit permission before doing so." The standard rejection text: the app "does not
  clearly explain what data is sent, identify who the data is sent to, and ask the user's permission" (forum
  816140, Feb 2026). Ask before the first AI call (including plan generation), name the recipients, say what data,
  require a tap, allow turning it off, and make the privacy policy and App Privacy say the same.
- (vi) Data from the Camera, Photos, HealthKit and similar APIs "may not be used for marketing, advertising or
  use-based data mining, including by third parties". Use AI providers that don't train on the data.

**5.1.3 Health and Health Research (G#5.1.3).** "You must disclose the specific health data that you are
collecting from the device." Apps "must not write false or inaccurate data into HealthKit" and "may not store
personal health information in iCloud". Health data may not be used for advertising or data mining.

**5.1.4 Kids (G#5.1.4).** Nothing may imply the main audience is children; fine for adult-only apps.

## Age rating, age assurance, medical devices

- Ratings on OS 26+: 4+, 9+, 13+, 16+, 18+. The questionnaire includes in-app controls, capabilities (web access,
  user-generated content, messaging, advertising, social media), medical/wellness and violence topics
  (<https://developer.apple.com/help/app-store-connect/reference/age-ratings-values-and-definitions>).
- "Health or Wellness Topics" covers calorie tracking and dieting advice. "Medical or Treatment Information"
  covers medication guidance: infrequent gives 13+, frequent 16+. Alcohol references: infrequent 13+, frequent 18+.
- If the Terms (EULA) set a higher minimum age than the calculated rating, "you must override" to that age
  (App Store Connect → App Information → Age Ratings → Age Categories and Override).
- Age-assurance laws (Texas from Jun 2026, then Utah and Louisiana; Brazil) require the Declared Age Range API in
  those regions; Apple says App Review doesn't change, so this is a legal duty, not a review check
  (<https://developer.apple.com/support/age-assurance/>).
- Regulated medical device: required for new Health & Fitness or Medical apps in the EEA, UK and US
  (App Information → App Store Regulations & Permits → Declare Regulated Medical Device). "If your app is not a
  regulated medical device, you can select No." Only the Account Holder or an Admin can set it.

## Apple's own list of common rejections

From <https://developer.apple.com/distribute/app-review/>: crashes and bugs; broken links (a support link and a
privacy policy link are "required for all apps"); placeholder content; incomplete information (demo account,
contact details); privacy policy gaps; unclear purpose strings; inaccurate screenshots; substandard UI; web
clippings; repeated similar apps (4.3); copycats (4.1); misleading users (2.3); not enough lasting value (4.2);
"submitted by incorrect entity" (regulated fields). 90% of submissions are reviewed in under 24 hours.
