3D models of the character (`CHARACTER.md`) for Tripo (tripo3d.ai): text to 3D, auto rig, animation. Not decided
for the app: version 1.2 ships the 2D drawing in `src/components/character/figure.tsx`. A 3D version would replace
only that drawing. The saved look in `src/shared/character.ts` stays the same, so nobody re-makes their character,
and this list follows its options one to one.

## How the look becomes a character

The look is a short list of picks saved to the account, never a picture. The app draws the character from it every
time, so every mix works (close to a million) with no image files. In 3D the same picks choose parts and colors:

| Pick | Values | 2D today | 3D |
| --- | --- | --- | --- |
| body | girl, guy | two body shapes, lashes for the girl | `character-girl.glb` or `character-guy.glb` |
| build | slim, medium, full | wider shapes | bone scale (spine, hips, legs) |
| skin | 8 tones | fill color | material `skin` |
| hair | short, long, bun, ponytail, buzz, bald | one shape per style | part `hair_<style>`; bald has none |
| hairColor | 8 colors | fill color, also beard, stubble and brows | material `hair` |
| facialHair | none, stubble, beard | shapes | parts `stubble`, `beard` |
| glasses | none, round, square | shapes | parts `glasses_round`, `glasses_square` |
| top, bottom | 8 and 6 colors | fill colors; headband and wristbands take the top color, a little darker | materials `top`, `bottom`, `band` |
| gear | headband 5, wristbands 8, medal 12, gloves 16, belt 25 | shapes, shown when earned and worn | parts `gear_*` |
| strength | 0, 1, 2 from protein days (never weight) | wider shoulders and arms | bone scale (shoulders, upper arms, chest) |
| mood | happy, waiting, missing, cheer | face and arms; layers breathe, blink, wave, jump | clips `wave`, `waiting`, `doze`, `cheer` over `idle`; face pictures |

Water days (the glow), the streak flame, confetti and the z's stay drawn by the app.

## Rules

1. One model per option, never per combination: 14 models.
2. Only the two bodies are rigged. Hair, beard, glasses and gear are stiff props parented to a bone; never auto-rig
   them.
3. The app sets every color. Make each part once, in the color its prompt says.
4. Build and strength are bone scaling in the app, never more bodies.
5. The face stays 2D: the bodies have blank faces, and the app shows face pictures from the 2D drawing (eyes, brows,
   mouth, blush, the girl's lashes), so it can blink and change mood.
6. Generate on a paid plan. On the free plan Tripo keeps the rights to what it makes, so those can't go in the app.

## Settings

- Text to 3D, the newest model, Smart Low Poly if offered: bodies about 15,000 triangles, props 1,000–5,000.
- Every prompt below ends with the same style line, so the parts match.
- Negative prompt, if there's a box. Bodies:

```text
realistic, photo, skin pores, wrinkles, hair strands, text, letters, logo, watermark, pedestal, base, ground, multiple characters, extra limbs, weapon
```

Props:

```text
realistic, photo, text, letters, logo, watermark, pedestal, base, ground, head, face, body, mannequin, hands
```

## Bodies (rig these two)

Guy:

```text
Full-body 3D cartoon character, a friendly young man with cute chibi proportions like a vinyl toy: an oversized round head about one third of his height on a short visible neck, a short sturdy body, round ears. Smooth bald head. Smooth blank face with no eyes, eyebrows or mouth, only a small rounded nose. Plain white crew-neck t-shirt, plain gray jogger pants, simple dark gray sneakers. Simple rounded hands with short fingers. T-pose: arms straight out to the sides and clear of the body, legs straight and slightly apart, symmetrical, facing forward. Stylized 3D cartoon, mobile game avatar style: chunky rounded shapes, smooth clean surfaces, flat matte solid colors, no fine texture detail, no text, no logos.
```

Girl:

```text
Full-body 3D cartoon character, a friendly young woman with cute chibi proportions like a vinyl toy: an oversized round head about one third of her height on a short visible neck, a short slim body with slightly narrower shoulders, round ears. Smooth bald head. Smooth blank face with no eyes, eyebrows or mouth, only a small rounded nose. Plain white crew-neck t-shirt, plain gray jogger pants, simple dark gray sneakers. Simple rounded hands with short fingers. T-pose: arms straight out to the sides and clear of the body, legs straight and slightly apart, symmetrical, facing forward. Stylized 3D cartoon, mobile game avatar style: chunky rounded shapes, smooth clean surfaces, flat matte solid colors, no fine texture detail, no text, no logos.
```

Before rigging, check: arms clear of the body, a neck between head and shoulders, no hair. If Tripo draws a face
anyway, keep going: it is covered by the face pictures. Heads of a similar size on both bodies make the props fit
both with small changes.

## Hair (the app colors it)

Short:

```text
A single stylized 3D cartoon hairpiece on its own, made to sit on a big round cartoon head: short tidy hair with a soft fringe swept to one side. Chunky smooth sculpted clumps, medium brown, hollow underneath. No head, no face, no body. Stylized 3D cartoon, mobile game avatar style: chunky rounded shapes, smooth clean surfaces, flat matte solid colors, no fine texture detail, no text, no logos.
```

Long:

```text
A single stylized 3D cartoon hairpiece on its own, made to sit on a big round cartoon head: long straight hair falling past the shoulders at the back and sides, a soft fringe parted in the middle, open at the front where the face goes. Chunky smooth sculpted clumps, medium brown, hollow underneath. No head, no face, no body. Stylized 3D cartoon, mobile game avatar style: chunky rounded shapes, smooth clean surfaces, flat matte solid colors, no fine texture detail, no text, no logos.
```

Bun:

```text
A single stylized 3D cartoon hairpiece on its own, made to sit on a big round cartoon head: hair pulled back smoothly into a round bun on top of the head, with a short soft fringe. Chunky smooth sculpted shapes, medium brown, hollow underneath. No head, no face, no body. Stylized 3D cartoon, mobile game avatar style: chunky rounded shapes, smooth clean surfaces, flat matte solid colors, no fine texture detail, no text, no logos.
```

Ponytail:

```text
A single stylized 3D cartoon wig on its own, empty inside like a hollow shell: hair pulled back smoothly into a high ponytail at the back that swings out, with a soft fringe in front. Chunky smooth sculpted clumps, medium brown. No head, no face, no ears, no skin, no body. Stylized 3D cartoon, mobile game avatar style: chunky rounded shapes, smooth clean surfaces, flat matte solid colors, no fine texture detail, no text, no logos.
```

Buzz cut and stubble need no model: they're the scalp or jaw of the head itself, copied and pushed out a little,
in the hair color (stubble at about a third opacity, like the 2D drawing). Bald has no hair part. If Tripo adds a
head under a hairpiece, split the hair off with Segmentation and delete the head.

## Beard

```text
A single stylized 3D cartoon costume beard on its own: a short rounded horseshoe-shaped beard that runs along the jaw line from ear to ear and covers the chin, open at the top where the mouth and cheeks go, no moustache. Chunky smooth sculpted shape, medium brown. No head, no face, no skin, no body. Stylized 3D cartoon, mobile game avatar style: chunky rounded shapes, smooth clean surfaces, flat matte solid colors, no fine texture detail, no text, no logos.
```

## Glasses

Round:

```text
A pair of stylized 3D cartoon glasses on their own: big perfectly round frames, thick chunky dark frames, clear flat lenses, short straight arms, facing forward. No face, no head. Stylized 3D cartoon, mobile game avatar style: chunky rounded shapes, smooth clean surfaces, flat matte solid colors, no fine texture detail, no text, no logos.
```

Square:

```text
A pair of stylized 3D cartoon glasses on their own: big square frames with rounded corners, thick chunky dark frames, clear flat lenses, short straight arms, facing forward. No face, no head. Stylized 3D cartoon, mobile game avatar style: chunky rounded shapes, smooth clean surfaces, flat matte solid colors, no fine texture detail, no text, no logos.
```

## Gear (earned by level)

Headband (level 5; the app gives it the top color):

```text
A stylized 3D cartoon sports sweatband headband on its own: a thick soft terry-cloth ring, perfectly round, plain white. No head. Stylized 3D cartoon, mobile game avatar style: chunky rounded shapes, smooth clean surfaces, flat matte solid colors, no fine texture detail, no text, no logos.
```

Wristband (level 8; one model, mirrored for the other wrist; the top color):

```text
A single stylized 3D cartoon sports wristband on its own: a short thick soft terry-cloth tube, plain white. No arm, no hand. Stylized 3D cartoon, mobile game avatar style: chunky rounded shapes, smooth clean surfaces, flat matte solid colors, no fine texture detail, no text, no logos.
```

Medal (level 12):

```text
A stylized 3D cartoon gold medal on its own: a thick round gold medal with a raised star in the middle and a raised rim, hanging from a short blue V-shaped ribbon. No person. Stylized 3D cartoon, mobile game avatar style: chunky rounded shapes, smooth clean surfaces, flat matte solid colors, no fine texture detail, no text, no logos.
```

Boxing glove (level 16; one model, mirrored for the left hand; the hand hides under it):

```text
A single stylized 3D cartoon boxing glove on its own, for the right hand: big, round and puffy, red with a white cuff, the thumb tucked along the side. No arm. Stylized 3D cartoon, mobile game avatar style: chunky rounded shapes, smooth clean surfaces, flat matte solid colors, no fine texture detail, no text, no logos.
```

Champion belt (level 25):

```text
A stylized 3D cartoon boxing champion belt on its own, closed into a ring as if worn around a waist: a wide gold band, a big oval gold center plate with a raised star, two small gold side plates. No text, no person. Stylized 3D cartoon, mobile game avatar style: chunky rounded shapes, smooth clean surfaces, flat matte solid colors, no fine texture detail, no text, no logos.
```

## Rig and animations (the two bodies only)

1. Auto rig: biped, Mixamo skeleton on both bodies, so they share bone names and every clip fits either body.
2. Five clips, in place, each ending in the pose it starts in so it loops. Use the preset where there is one, and
   Text to Motion (1–10 seconds from a description) for the rest:

| Clip | When | Make it with |
| --- | --- | --- |
| `idle` | always, under the others | the Idle preset |
| `wave` | happy: a meal logged today | Text to Motion, below (or the `greet_02` preset) |
| `waiting` | nothing logged yet today | Text to Motion, below |
| `doze` | two or more days away | Text to Motion, below (there's no sleep preset) |
| `cheer` | a level, streak milestone or goal | Text to Motion, below (or the `clap` preset; arms overhead hit the head) |

```text
Standing in place, raises the right hand above the shoulder and waves side to side three times with a friendly little bounce, then lowers the arm and ends in the starting pose.
```

```text
Standing in place, patiently waiting: shifts weight from one foot to the other, glances left and right, taps one foot twice, then ends in the starting pose.
```

```text
Standing in place, sleepy: the head slowly droops forward and the shoulders sag, the body sways gently, then the head bobs back up a little and droops again, with slow calm breathing, ending in the starting pose.
```

```text
Jumps straight up with both fists raised above the head in celebration, lands softly, pumps one fist once, then ends in the starting pose.
```

3. Export each clip as FBX: it carries the skeleton, skin weights and animation.

In Tripo Studio (September 2026), rigging costs 20 credits per character and each animation 20 credits.

## Putting it together (Blender)

1. Import a rigged body, then each prop. Scale and move the prop onto the body, then parent it to its bone (Mixamo
   names): `Head` for hair, beard, glasses and the headband; `Spine2` for the medal; `Hips` for the belt;
   `LeftForeArm` and `RightForeArm` for the wristbands; `LeftHand` and `RightHand` for the gloves. Buzz cut and
   stubble: copy the scalp or jaw faces of the head, push them out a little, and they follow the head's weights.
2. Face: copy the front faces of the head into their own part named `face`, with a flat front-view UV, so the app
   can show the face pictures on it.
3. Replace the generated materials with plain ones named for what the app colors: `skin`, `hair`, `top`, `bottom`,
   `band` (headband, wristbands), `shoes`, `frame` (glasses), `lens`, `gold`, `ribbon`, `glove`, `cuff`.
4. Name the parts: `hair_short`, `hair_long`, `hair_bun`, `hair_ponytail`, `hair_buzz`, `stubble`, `beard`,
   `glasses_round`, `glasses_square`, `gear_headband`, `gear_wristband_left`, `gear_wristband_right`, `gear_medal`,
   `gear_glove_left`, `gear_glove_right`, `gear_belt`, `face`.
5. Put the five clips on the body as actions named `idle`, `wave`, `waiting`, `doze`, `cheer`, and export one GLB
   per body (`character-guy.glb`, `character-girl.glb`) with compression, each under about 5 MB, feet on the ground
   at the origin, facing the front view.

## In the app (when 3D is decided)

- A 3D view (a native library, so it needs a new build), one at a time: the Home card or the character screen.
- It shows the parts that match the look, colors the materials, scales the bones for build and strength, and plays
  the mood's clip over `idle`; the cheer also keeps the confetti. Reduce Motion and the editor's thumbnails get a
  still pose.

## Made on 28 October 2026

With `npm run character:3d` (`scripts/character-3d.ts`) on the owner's Tripo API key: 520 of 560 credits ($5.20).
`design/character-3d/parts.png` shows every part and `clips.mp4` the clips on both bodies; `manifest.json` has the
task id, request, seeds and credits of every try, and `previews/` Tripo's renders and concept images. The models
(22 MB) stay outside git: the owner has them as a zip, and the task ids can fetch them from Tripo again.

| File | What |
| --- | --- |
| `body_guy.glb`, `body_girl.glb` | the bodies, about 19,000 triangles each, not rigged |
| `rig-body_guy.glb`, `rig-body_girl.glb` | the same bodies on a Mixamo skeleton (23 bones, no finger bones) |
| `clip-<idle, wave, waiting, cheer>-body_<guy, girl>.glb` | each body playing one clip, in place |
| `hair_*.glb`, `beard.glb`, `glasses_*.glb`, `gear_*.glb` | the props, 1,850–7,700 triangles |
| `hair_ponytail-v1-with-head.glb` | the first ponytail: the better shape, with a head to cut out |

What changed from the plan:

- The first guy came out slim with a small head; the second matches the girl, and the body prompts now ask for "cute
  chibi proportions like a vinyl toy: an oversized round head".
- The first ponytail had a head inside and the first beard covered the whole face, so their prompts changed. The new
  ponytail reads more like swept-back hair; the first one has the better shape once its head is cut out. The beard
  has two small ear bumps to trim.
- The clips come from Tripo's preset library (rig v1.0). The big head swallows arms raised overhead: `wave_goodbye_01`
  crouched and `cheer` read as a facepalm. `greet_02` (the arm out at shoulder height, briefly near the face) is the
  wave and `clap` the cheer. There's no sleep preset: `doze` needs Studio's Text to Motion (the prompt above), or the
  app moves the head itself.
- The girl came out in an A-pose (arms lowered), which rigged fine.

Before the app can use them (a new build with a 3D view): fit the props on both bodies and parent them to bones, cut
the ponytail's head, trim the beard, add the face part and plain named materials, and put the clips in one GLB per
body (Putting it together, above).
