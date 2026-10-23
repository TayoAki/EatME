# menu-text (local Expo module, iOS)

What to order (v2.5, `WHAT-TO-ORDER.md` §8): reads the text of a menu photo on the iPhone with Apple's Vision framework
(`VNRecognizeTextRequest`, accurate, with language correction), so the photo stays on the phone and only the text is
sent. Each line comes back with its box (0–1000, origin at the top left); `src/shared/menu-lines.ts` turns the boxes
into dish lines (rows, prices in a right-hand column, sections, descriptions), and the person confirms them before
anything goes to the AI. Adapted from ChartME's `chart-text-recognition`.

The JavaScript side is `src/lib/menu-text.ts`: it returns null on the web, on Android, in Expo Go and when the module
is missing; the app then sends the photos and the server's AI reads them (`MENU_READING_PROMPT`). Autolinked from
`./modules` into development and store builds.

**Status:** written and wired into Scan → Menu (`src/app/(app)/(tabs)/scan.tsx`, the confirm step in
`src/components/menu/dish-confirm.tsx`); not yet run on a phone. Prove it with the phone check in `WHAT-TO-ORDER.md` §11 (10 real menus: printed,
chalkboard, dim light; pass: 9 of 10 give usable dish lines after the confirm step). iOS 26's `RecognizeDocumentsRequest`
reads tables and price columns natively and could replace the layout rules once the deployment target allows it.
