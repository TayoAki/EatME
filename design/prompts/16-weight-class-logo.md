Logo mark for the rebrand to Weight Class (2026-09-28). Same flat black style as the EatME bowl
(`01-logo.md`), so the icon, the in-app logo and the website keep one look. The mark carries no text: the app
writes "Weight Class" next to it in its own font, and words don't read at icon size.

```text
A minimalist logo mark for a calorie counter and weight-loss app called "Weight Class". The mark is one circle split into two ideas: the lower half is a simple rounded bowl seen from the side (a flat rim line with a deep curved body), and the upper half is the face of a weighing scale: five short, evenly spaced tick marks along an arc above the rim, and a single bold pointer with rounded ends that rises from a small solid circle at the center of the rim and leans to the upper left, as if the weight is going down. Flat vector style, solid near-black (#111111) shapes only, one bold consistent stroke weight, rounded ends, geometric and friendly, well balanced. No text, no letters, no numbers, no background shapes, no shadows, no gradients, no 3D, no outline box. Plain pure white (#FFFFFF) background, square 1:1 (1024 × 1024), the mark centered and about 60% of the canvas width, with generous empty space around it. It must stay clear and recognizable when shrunk to 30 pixels, for an iPhone app icon and a small navigation-bar logo.
```

Other directions (swap them in for the sentence that starts "The mark is"):

- Fork pointer: "The mark is the top half of a round scale dial with five short tick marks along its arc and a flat base
  line; its pointer is a simple fork with three short tines, pivoting from a small solid circle at the bottom
  center and leaning to the upper left."
- Monogram: "The mark is a bold, rounded capital W whose middle point dips lower than its outer points, like a
  weight trend line going down."

Keep "pointer", never "needle": the app has a GLP-1 mode, and a needle in the icon would read as an injection
(App Store images should suit a 4+ audience).

From the chosen image (black on white, 1024 × 1024): the iOS icon (white mark on #111111, no transparency;
iOS makes the dark and tinted versions itself), `assets/images/logo-dark.png` (the mark in the app), the splash, Android's adaptive
icon and notification icon, the website's `legal/images/logo.png` and `app-icon.png`, then the App Store
screenshots, the landing-page phones and `og.png` again.

## The chosen logo (2026-09-28)

The first direction won: `design/logo/weight-class-source.png` is the generated image. It was redrawn as clean
vector in `design/logo/weight-class-mark.svg` (same bowl, rim, pivot, pointer at 130° and five ticks, without
the generator's glitches such as the notch at the pointer's base), and every icon was rendered from that file:

| File | What |
| --- | --- |
| `assets/images/icon.png`, `legal/images/app-icon.png` | 1024 px, white mark (56% wide) on #111111, no transparency |
| `assets/images/android-icon-foreground.png`, `android-icon-monochrome.png` | white mark (42% wide) on transparent, inside the adaptive-icon safe zone |
| `assets/images/splash-icon.png` | black mark (90% wide) on transparent (the splash is white) |
| `assets/images/logo-dark.png`, `legal/images/logo.png` · `logo-light.png` | 512 px, black · white mark (92% wide) on transparent: the logo in the app and on the website |
| `assets/images/logo.png`, `favicon.png` | the icon as a rounded square (512 px and 48 px) |
| `assets/images/notification-icon.png` | 96 px, white mark on transparent (Android notifications) |
