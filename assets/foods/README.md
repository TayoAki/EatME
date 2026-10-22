# Food pictures

Small pictures for meals and menu items without a photo of their own (Home's meal cards, saved meals, and
What to order's lists). `src/shared/food-pictures.ts` picks one from the food's name; `FoodPicture`
(`src/components/ui/food-picture.tsx`) shows it.

- **Source**: Microsoft's [Fluent Emoji](https://github.com/microsoft/fluentui-emoji), 3D style, taken from
  commit `1ffb34c` (22 October 2026). Free to use, change and ship in a paid app under the MIT licence
  (`LICENSE` here); the app credits it at the end of Profile → Sources, as the licence asks.
- **Files**: `<name>.webp`, 160 × 160 px (the 3D PNGs scaled down), one per name in `FOOD_PICTURES`.
- **Never** a restaurant chain's own photo or logo: those belong to the chains (Apple 5.2.1).

To add one: pick the emoji in the Fluent repository, save its `3D/*_3d.png` here as a 160 px WebP named after
the new picture, add the name to `FOOD_PICTURES` and a rule to `RULES` in `src/shared/food-pictures.ts`, and add
its line to `src/components/ui/food-picture.tsx`.
