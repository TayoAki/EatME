# App Store Connect: fields, screenshots, age rating, App Privacy

Checked 2026-09-28 on Apple's help pages (links below). Limits are characters unless marked bytes.

## Contents

- [App Information](#app-information)
- [Version page](#version-page)
- [Screenshots and previews](#screenshots-and-previews)
- [App icon](#app-icon)
- [Age rating](#age-rating)
- [App Privacy](#app-privacy)
- [Build requirements](#build-requirements)
- [App Review information and the demo account](#app-review-information-and-the-demo-account)

## App Information

<https://developer.apple.com/help/app-store-connect/reference/app-information>

| Field | Rules |
| --- | --- |
| Name | 2-30, required. Unique per locale across the store. Locked after submission until the next version |
| Subtitle | up to 30, optional. No unverifiable claims (2.3.7) |
| Bundle ID, SKU | required, can't change |
| Primary / secondary category | primary required |
| Content Rights | required: does the app show third-party content, and do you have the rights |
| Privacy Policy URL | required; must load, match the app, and have no placeholders |
| Privacy Choices URL | optional |
| License Agreement | Apple's standard EULA by default. With the standard EULA its link isn't shown on the product page, so put a Terms of Use link in the description (3.1.2) or upload a custom EULA |
| Age Rating | questionnaire, see below |
| Regulated Medical Device (EEA, UK, US) | required for Health & Fitness / Medical apps since Mar 26 2026: App Store Regulations & Permits → Declare Regulated Medical Device → No (Account Holder or Admin) |
| Digital Services Act trader status | required even if you don't sell in the EU: Business → Agreements → Compliance → Digital Services Act. Traders give an address, phone and email (each verified by a code) and a document proving the business name and address. Without it the app is removed from EU storefronts |
| Accessibility Nutrition Labels | voluntary for now |
| Pricing and Availability | compatible iPhone apps are published automatically on Apple silicon Macs and Vision Pro unless you opt out |

## Version page

<https://developer.apple.com/help/app-store-connect/reference/platform-version-information>

| Field | Rules |
| --- | --- |
| Promotional text | up to 170; editable any time without review; not used for search |
| Description | up to 4,000, plain text. Name Apple Health (2.5.1); no accuracy claims (1.4.1); state the subscription and link the Terms of Use (3.1.2) |
| Keywords | up to **100 bytes**, comma-separated, no spaces needed; no other apps' or companies' names (2.3.7) |
| Support URL | required; must "lead to actual contact information (legal address, email address, telephone number), as may be required by local law". Include `https://` |
| Marketing URL | optional |
| Copyright | required, e.g. `2026 Example Inc.` (Apple adds the ©) |
| What's New | up to 4,000; not shown for the first version |
| Release | Manual, automatic, or automatic after a date. Phased release (7 days) and rating reset apply to updates only. Prefer manual for the first release: products can take hours to be buyable |
| Export compliance | `ITSAppUsesNonExemptEncryption = NO` (Expo: `ios.config.usesNonExemptEncryption: false`) skips the question on every upload; HTTPS through the OS is exempt |
| App Review Information | contact name, email, phone in `+country code` format; sign-in required + username and password; notes up to 4,000 bytes; optional attachment (demo video) |

## Screenshots and previews

<https://developer.apple.com/help/app-store-connect/reference/screenshot-specifications>

- 1 to 10 per localization and device size. `.png`, `.jpg` or `.jpeg`. **No alpha channel or transparency**
  (explicit since Jul 8 2026): flatten to RGB before uploading (e.g. Pillow `Image.open(p).convert('RGB')`).
- iPhone 6.9" (Air, 14-18 Pro Max, 15/16 Plus): portrait **1320 x 2868**, 1290 x 2796 or 1260 x 2736. This set is
  enough: smaller iPhones are scaled from it. 6.5" (1284 x 2778 or 1242 x 2688) is only required when there is no
  6.9" set.
- iPad 13" (2064 x 2752 or 2048 x 2732) only if the app runs on iPad natively. `supportsTablet: false` in Expo =
  iPhone-only = no iPad screenshots.
- Screenshots can be changed only while the version is editable (Prepare for Submission, Rejected, Metadata
  Rejected, Developer Rejected, Invalid Binary).
- Content (2.3.3, 2.3.7, 2.3.8, 2.3.10, 2.3.2): the real app in use; overlays and captions are fine; no prices; 4+
  suitable; no other platforms; mark features that need a purchase ("Premium" badge); fictional data only; don't
  show the Health app's own screens.
- Device frames: Apple's marketing guidelines allow only Apple's product bezels, used as-is, with copy beside the
  product image rather than on it. The simplest compliant choice is no frame: the screen as a rounded card.
- App previews (optional): up to 3 per size, 15-30 s, 30 fps max, H.264 or ProRes 422 HQ; 886 x 1920 portrait for
  6.9"-6.1"; screen captures of the app only (narration and text overlays allowed).

## App icon

<https://developer.apple.com/design/human-interface-guidelines/app-icons>

- 1024 x 1024, square, **unmasked** (the system rounds the corners), no transparency (ITMS-90717 otherwise).
- iOS 26 icons are layered "Liquid Glass" designs (Icon Composer `.icon`); dark, clear and tinted appearances are
  generated if you don't supply them. Expo: `ios.icon` takes a PNG, `{ light, dark, tinted }` or a `.icon` folder.
- The icon ships inside the build: changing it needs a new version. Screenshots and icon must suit 4+ (2.3.8).

## Age rating

<https://developer.apple.com/help/app-store-connect/manage-app-information/set-an-app-age-rating>

1. Answer every question honestly (in-app controls, capabilities incl. social media, medical/wellness, violence,
   alcohol, gambling...). Answering "infrequent" where a topic exists costs nothing if you override upward anyway.
2. If your Terms set a minimum age above the calculated rating: Age Categories and Override → Override to Higher
   Age Rating → pick it. Content descriptions still show your answers.
3. Unrated apps can't be published.

Health & Fitness apps usually land at: Health or Wellness Topics (frequent), Medical or Treatment Information
(infrequent if the app logs medicines without giving guidance), Alcohol references (infrequent if drinks can be
logged).

## App Privacy

<https://developer.apple.com/app-store/app-privacy-details/>

- Declare everything **you and your third-party partners** collect: "collect" = sent off the device and kept
  longer than needed to answer the request. Partners = SDKs in your app (crash reporting, analytics, purchases).
  Server-side processors (an AI API your server calls) aren't "partners", but data reaching your server is yours
  to declare.
- For each type: purposes (App Functionality, Analytics, Product Personalization, Developer's Advertising,
  Third-Party Advertising, Other), linked to the user or not, used for tracking or not. Tracking needs the App
  Tracking Transparency prompt.
- Health covers HealthKit data and "any other user provided health or medical data". Data that never leaves the
  device isn't collected.
- Answers can be edited any time; press Publish. Keep them identical to the privacy policy and the Play Data
  safety form.
- Privacy manifests: every bundle (app and each extension) that uses a required-reason API needs
  `PrivacyInfo.xcprivacy` with reasons (ITMS-91053 otherwise). Listed third-party SDKs need their own manifest and
  signature (ITMS-91061 / ITMS-91065): update the SDK.

## Build requirements

<https://developer.apple.com/news/upcoming-requirements/>

- Since Apr 28 2026: built with Xcode 26 or later and the iOS 26 SDK. Since Sep 9 2026: target iOS 13 or later.
  Xcode 27 uploads accepted since Sep 14 2026; the iOS 27 SDK becomes the minimum in April 2027 (check the page).
- Expo SDK 57 builds on EAS's `macos-tahoe-26.5-xcode-26.6` image (alias `sdk-57`), which meets the 2026 rule.
- HealthKit: the `com.apple.developer.healthkit` entitlement; `NSHealthShareUsageDescription` (read) and
  `NSHealthUpdateUsageDescription` (write) with specific reasons. Don't tick Clinical Health Records unless used.
  If Health is optional, make sure `healthkit` isn't in `UIRequiredDeviceCapabilities`.
- Camera: `NSCameraUsageDescription`; photo library: prefer the system picker (no full-library permission).
- Remove purpose strings for permissions the app never asks for (for example expo-secure-store's generic Face ID
  string: `["expo-secure-store", { "faceIDPermission": false }]`).

## App Review information and the demo account

- "The demo account is used during the App Review process and must not expire." Give extra accounts in Notes.
- Seed it with realistic, fictional data so every screen has something to show (2.3.9: fictional account data in
  screenshots too).
- Explain "non-obvious features and in-app purchases" in Notes: where each feature lives, how to reach anything
  behind a limit, how consent works, what makes the app different (4.3).
- Keep the backend and AI on during review; don't rotate the demo password until the review is over.
- Be ready to send a screen recording for anything hard to reproduce (hardware, location, a specific food).
