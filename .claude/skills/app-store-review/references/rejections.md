# Rejections: the common ones, the fixes that worked, and how to reply

Checked 2026-09-28. Community evidence comes from Apple Developer Forums threads
(<https://developer.apple.com/forums/thread/NNNNNN>), public GitHub PRs quoting rejection text, RevenueCat's blog
and news reports; treat single reports as signals, not rules.

## The top patterns

| # | Guideline | What the reviewer wrote / saw | The fix that worked |
| --- | --- | --- | --- |
| 1 | 5.1.2(i) AI consent | "does not clearly explain what data is sent, identify who the data is sent to, and ask the user's permission" (816140, 815109, Feb 2026) | A consent screen before the first AI call (plan generation counts) listing the data and naming the recipients (e.g. OpenRouter and OpenAI), with Allow / Not now, an off switch in settings, and the same wording in the privacy policy (815842) |
| 2 | 3.1.2(c), 5.6 paywall | billed amount less prominent than a weekly figure or the trial; trial toggles; renewal terms hidden (Cal AI, Apr 2026; 818023) | Billed price biggest; trial length + price after; no toggle; auto-renew text; Terms + Privacy links in the app and the listing (813493) |
| 3 | 2.1 completeness | sign-in loop on a fresh install; Sign in with Apple failing on iPad; empty paywall while products were still in review (Sep 2026 PR) | Test a fresh install on iPhone **and** iPad; attach the subscriptions to the same submission; Paid Apps Agreement active (808726) |
| 4 | 1.4.1 health | no citations for nutrition or calorie numbers (696430, 767340); a doctor disclaimer wanted in the description (779857) | "Estimate" wording; a sources page linked from the app; "check with a doctor" in the app and the description |
| 5 | 4.3(b) spam | "indistinguishable from what's already widely available" | Distinct name, icon and screenshots; review notes that say what's different; lead the screenshots with it |
| 6 | 4.2 minimum functionality | "not sufficiently different from a mobile browsing experience" (AI wrappers) | Native features the web can't do (camera, barcodes, Apple Health, widgets); real offline value |
| 7 | 2.5.1 HealthKit | "does not clearly identify the HealthKit ... functionality in the app's user interface" (802626) | A visible Apple Health screen/switch; the description names Apple Health; specific purpose strings |
| 8 | 4.8 / 5.1.1(v) accounts | asking for the name after Sign in with Apple (Sep 2026); tokens not revoked on deletion; sign-up forced before a purchase that doesn't need an account | Use the name Apple gives; revoke tokens (TN3194); explain on the paywall why an account is needed |
| 9 | 2.3 metadata | screenshots showing features that aren't there, prices, other platforms; paid features not marked | Real screens, "Premium" badges, no prices; update screenshots with the app |
| 10 | 2.5.14 recording | session-replay SDK recording user activity without consent | Turn replay off in store builds, or ask and show an indicator |

Also frequent: 5.1.1(ix) health apps from an individual account ("submitted by incorrect entity"), broken
privacy or support links, placeholder text in legal pages, a demo account that expired or was deleted, a backend
feature flag that was off during review, and 2.1(b) purchases that couldn't be completed because of a sandbox
outage (reply and ask for a re-review).

## How to answer

1. **Read everything** in App Store Connect → the app → the submission's App Review message (the Resolution
   Center). Note the guideline, the device and iOS version the reviewer used, and any attached screenshot.
2. **Reproduce** on the same kind of device, fresh install, with the demo account. Most "bugs" are account state
   (quota used up, AI consent declined, account deleted by the reviewer).
3. **Decide:**
   - *It's real* → fix, bump the build, reply briefly with what changed and where to see it, resubmit.
   - *Misunderstanding* → reply without a new build: what the reviewer should tap, a screenshot or a short screen
     recording, the guideline's own words showing compliance. This is often faster than a new build.
   - *Metadata only* (screenshots, description) → edit the listing, reply, resubmit; no build needed.
   - *You believe the rule was applied wrongly* → appeal to the App Review Board
     (<https://developer.apple.com/contact/app-store/?topic=appeal>) after one polite reply.
4. **Bug-fix exception:** for an app already on the store, Apple doesn't hold bug-fix updates over guideline
   violations (except legal issues) if you ask in the reply and commit to fixing the issue in the next version.
5. **Urgent:** request an expedited review (<https://developer.apple.com/contact/app-store/?topic=expedite>) only
   for real emergencies (a crash fix, a time-bound event); overuse makes it stop working.

## Reply template

```text
Hello, and thank you for the review.

Guideline <number> - <short title>:
<One sentence: what we changed, or why the app already complies.>

Where to see it: <exact path, e.g. Profile → EatME Premium>. <Screenshot / screen recording attached.>
Demo account: the one in App Review Information (unchanged).

<Only if a new build:> Build <number> includes this change.

Kind regards,
<Name>, <Company>
```

Keep it short, factual and specific. Don't argue that other apps do the same thing, don't blame the reviewer, and
don't paste credentials into the message (they belong in App Review Information).
