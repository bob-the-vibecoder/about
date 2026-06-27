# GAEA AI — Design System

> **Real-world observational AI.** Design system for GAEA AI — the British AI company behind the **LGM** (Large Geotemporal Model / Observational World Model) and the **KAIRUS** platform.

---

## Company context

GAEA AI is a London-headquartered AI company building vision-based products powered by KAIRUS, a real-world observational AI platform. The company's core orientation is **observational, not generative** — "Evidence, not inference." Context, space and time are treated as first-class primitives.

**Leadership**

- **Graeme Scott** — Founder & CEO. Host of **GAEA Talks**, an enterprise-AI long-form YouTube channel (@GAEAAI).
- **Kash Chandarana** — Founder & CEO. Host of **GAEA Talks**, an enterprise-AI long-form YouTube channel (@GAEAAI).
- **Mark Heley MC** — COO (ex-Royal Engineers / Parachute Regiment, MC for gallantry in Iraq).
- **CJ Wimley** — CRO (ex-Kaseya, TeamDynamix).
- **Anthony Jimenez** — CLO.

**Products** (each deploys locally; each a pathway into the KAIRUS platform)

- **01 · GAEA Verify** — sensor-driven authentication + geotemporal provenance for high-value physical goods. Anchor ref: Watchfinder & Co (Richemont).
- **02 · GAEA Scene** — natural-language queryable scene intelligence across existing camera estates. Refs: Richemont group, JP Morgan.
- **03 · GAEA Sentinel** — behavioural detection & real-time alerts with geotemporal evidence. Active with JP Morgan.
- **KAIRUS** — the platform. Powered by the **LGM**, the Observational World Model underpinning every product.

**Customers / anchor brands**: Cartier, Richemont, Watchfinder & Co, JP Morgan.

---

## Sources

This system was built by reading the GAEA AI Nuxt/Vue marketing codebase attached at session start.

| Source | Where it went |
| --- | --- |
| `assets/css/main.css` (codebase) | `reference/main.css` — canonical token values |
| `components/*.vue` (codebase) | `reference/components/` |
| `pages/*.vue` & `pages/products/*.vue` (codebase) | `reference/pages/` |
| `public/gaea-ai-logo-white.svg` | `assets/logos/gaea-ai-logo-white.svg` |
| `public/favicon.svg` | `assets/logos/favicon.svg` |
| `uploads/GAEA-AI-White.eps` & `GAEA-AI-Black.eps` | Binary vector sources; SVG versions in `assets/logos/` derived from the public SVG path data |

Public channels: www.gaeaai.com · YouTube @GAEAAI · graeme.scott@gaeaai.com

---

## Content fundamentals

The GAEA voice is **declarative, technical, and operator-facing**. It is written for senior buyers in regulated industries (luxury, financial services, insurance, critical infrastructure), not consumers.

**Tone**

- **Short, definite sentences.** Period-stacked headlines: *"Know what you're holding. Know where it's been."* · *"Ask your site anything."* · *"See the behaviour before the incident."*
- **British English.** "behaviour", "organisation", "recognises".
- **Sentence case** for most UI and section titles. UPPERCASE with wide letter-spacing (`.14em`+) only for **eyebrows**, **button labels**, **nav links**, and **meta rows** — these are always set in mono.
- **No exclamation marks.** No marketing hype. No emoji.
- **Active voice.** "KAIRUS observes…", "Sentinel detects…", "Operators ask…".
- **Operator-centric pronouns.** Predominantly **"we"** (GAEA) and **"operators"** / **"customers"**. Rarely "you" — and never in a casual tone. Never "I".

**Signature phrasings**

- "Context, space and time — as first-class primitives."
- "Observational, not generative."
- "Evidence, not inference."
- "Local deployment. Operator control."
- "Real-world observational AI."
- Product taglines are always **two short clauses**, each ending in a period.

**Casing & punctuation details**

- Eyebrows: UPPERCASE, mono, prefixed by a short `—` or the product index (`01 /`). Examples: `KAIRUS PRODUCTS + PLATFORM`, `PRODUCT 01 — GAEA VERIFY`, `PLATFORM ATTRIBUTES`.
- Em-dashes (`—`) are used generously as connectors in marketing copy; en-dashes (`–`) for number/price ranges (e.g. `£20–80k`).
- Body paragraphs run long and paragraph-style — no bullet-list fragmentation of every thought. Lists are reserved for true enumerations (features, benefits, certifications).
- Numbers: indices written `01`, `02`, `03` (not `1`). Pricing shown as `£20–80k per site / year`.

**Vibe** Calm, confident, documentary. Think Anduril / Palantir restraint, softened by British understatement and the documentary-filmmaker eye of the founder. Never playful. Never ironic. The product speaks; the copy labels.

---

## Visual foundations

### Colors

Dark-first. The canonical palette is **two families + one accent**:

- **Greys** `#070d0f → #0b161a → #0f242b → #133440` — page bg → panels → raised.
- **Blues** `#d5edf5 → #a5dbee → #79d2f1 → #1cb4ea → #1798c6` — where `--blue-500 #1cb4ea` is the brand signature (accent, links, eyebrows, active nav underline, CTA fills).
- **Foreground**: `#f5f7f8` (primary), `#9fb1b8` (muted), `#6b8089` (subtle/subdued labels).
- **Rules (hairlines)**: `rgba(255,255,255,0.08)` standard, `rgba(255,255,255,0.16)` strong. Transparency/blur is used almost exclusively for the **sticky scrolled header** (`rgba(7,13,15,0.82)` + `blur(12px)`). The palette otherwise avoids washes and gradient skies.

### Typography

- **Open Sans** (the brand sans, self-hosted — matches the production codebase) for everything except mono. **Light (300)** is the hero weight — `h1` uses it at up to 92px with `-0.02em` tracking. H2/H3 shift to Regular (400). Body is Light (300) for that thin-technical feel.
- **JetBrains Mono** for eyebrows, nav links, button labels, meta rows, roadmap dates, "labels before values" patterns, stat labels, footer meta.
- Tracking is the voice: **body text sits at 0**; **mono text always gets `+0.12–0.22em`**. Headlines get **negative tracking** (`-0.01em` / `-0.02em`).
- Line-height: `1.1` for display, `1.55` for body.
- **Fonts are self-hosted** in [`fonts/`](./fonts/) — Open Sans (Light 300, Regular 400, SemiBold 600, Bold 700, ExtraBold 800 — each with italic). Weight tokens: `--w-light: 300`, `--w-regular: 400`, `--w-semibold: 600`, `--w-bold: 700`, `--w-xbold: 800`. (Open Sans ships no 100/500/900 — use the nearest token.) JetBrains Mono is CDN-delivered.

### Spacing & layout

- 8pt-adjacent scale with fluid clamps (`--gutter: clamp(20px, 4vw, 48px)`, `--section-y: clamp(64px, 10vw, 144px)`).
- `--container: 1440px` max, centered, with fluid gutter.
- Sections alternate between `--grey-900` and `--grey-800` to create banding without hard dividers — a single `1px var(--rule)` top border on each section does the rest.
- Two-up / three-up grids with `clamp(24px, 3vw, 48px)` gaps are the default layout primitive.

### Borders, corners & radii

- **Corners are nearly absent.** Inputs, chips, mobile toggles: `2px` radius only.
- The **one signature radius is `15px`** — used on **buttons** and **product cards**. This is the only place GAEA breaks from hard edges, and it's deliberate.
- Borders are **1px hairlines** in `--rule` — the entire system is built on them. Hover on a card or news tile: the border shifts to `--accent`.

### Shadows / elevation

- Dark theme does **not use drop-shadows**. Elevation is communicated by **background step-up** (grey-900 → grey-800 → grey-700) and by **blue radial glows** positioned inside media placeholders.
- The one glow in use: `0 0 0 4px rgba(28,180,234,0.2)` around the small accent dot in hero placeholders (a focus-ring-style halo).
- Buttons & cards do not lift with shadow — they lift with a `translateY(-4px)` and border-color swap on hover.

### Hover / press states

- **Links** (`a`): color transitions from inherit → `--accent-hover` (blue-300) over 200ms.
- **Nav links**: a 1px accent underline scales in from the left (`transform: scaleX(0) → scaleX(1)` over 250ms, `transform-origin: left`). This is the most characteristic micro-interaction.
- **Buttons**: primary uses `--accent` fill → `--accent-hover` on hover. Ghost buttons flip border & text color to `--accent`. The trailing `→` arrow nudges right 4px.
- **Cards** (product, news): `translateY(-4px)` + border flips to `--accent`. No scale.
- **Inputs**: border goes from `--rule-strong` → `--accent` on focus. No glow.
- **Press**: no shrink/scale-down. GAEA uses color-darken (`--blue-600`) where needed.

### Backgrounds & imagery

- **Video is the hero.** Hero sections assume full-bleed autoplay muted looped video. Every hero includes a fallback placeholder: a dark grey field with a **64px grid mask** (radial-masked so it fades at the edges) + a diagonal **radial-gradient glow** in `rgba(28,180,234,0.12)`.
- Over every hero: a **two-layer scrim** — vertical `linear-gradient(180deg, rgba(7,13,15,0.35) → 0.1 → 0.85)` + horizontal `linear-gradient(90deg, rgba(7,13,15,0.55) → 0)`. This guarantees copy readability over any footage.
- Faded underlays are preferred to bright imagery. Cinematic, high production value, cool-leaning, often low-light — not lifestyle, not "AI abstract."
- Media placeholders (when video isn't loaded) use radial blue-glows at low opacity over `--grey-800` plus a dashed-border `1px` caption — documenting that an asset belongs there.

### Animation

- **Easing is always** `cubic-bezier(0.2, 0.6, 0.2, 1)` — assigned to `--ease`.
- Durations: fast 150ms (color/opacity), base 200ms (most interactive), slow 300ms (backdrop-filter on header), xslow 400ms (card lift).
- No bounces. No overshoot. No elastic. No bezier curves that call attention to themselves.
- Entrances (when used): opacity + short translate, not scale.

### Iconography

- **Arrow only, text-native.** The entire codebase uses the Unicode character `→` (U+2192) as the sole icon — inside buttons, "more" links, "next steps" chips, opening rows. There is no icon font, no SVG icon library, no Lucide/Heroicons in use.
- The mobile hamburger is three `<span>` 1.5px bars — not an icon.
- **No emoji anywhere.** Not in copy, not in UI.
- See **ICONOGRAPHY** section below for substitution guidance when an icon set is truly required.

### Fixed elements / layout rules

- **Header**: `position: fixed`, full width, 72px tall. Starts transparent, transitions to `rgba(7,13,15,0.82)` + `blur(12px)` + bottom rule when scrolled > 8px.
- **Brand logo**: 26px tall in header, 30px in footer. Always the white monochrome variant on dark.
- **Meta row** sits pinned to `bottom: 20px` of every hero, mono, `0.7rem`, `0.2em` tracking — split left/right.

### Corner radii in-use summary

| Element | Radius |
| --- | --- |
| Primary/ghost buttons, product cards | **15px** |
| Inputs, select, textarea, mobile toggle, chips, tags | 2px |
| Everything else | 0 — hard edges |

---

## Iconography

GAEA AI's UI is **functionally iconless** — a deliberate choice that reinforces the technical, document-forward aesthetic. The patterns that icons usually serve are expressed another way:

| Pattern | GAEA solution |
| --- | --- |
| "Go / next / open" | Unicode arrow `→` (U+2192) with a transform-translate on hover |
| Section marker / eyebrow glyph | 28×1px accent rule before the eyebrow label |
| List bullet | 16×1px accent rule on `::before`, left-aligned with 28–32px padding |
| Nav hamburger | Three 18×1.5px bars — three `<span>`s, no icon |
| "Live" / status | Small filled dot with a 4px rgba halo — used in hero slot labels |
| Brand mark | Wordmark SVG only — there is no separate icon/symbol version of the logo |

**When an icon is genuinely required** (e.g. form field affordances, product dashboard UI not present in the marketing codebase): substitute **Lucide** at `strokeWidth={1.5}` in `currentColor`. Lucide's thin, geometric stroke matches the brand's technical register better than Heroicons or Feather. Load from CDN:

```html
<script src="https://unpkg.com/lucide@0.300.0/dist/umd/lucide.min.js"></script>
```

Flag any icon substitution to the user — the codebase itself contains none, so every icon introduced is an inference.

**Emoji**: never. **Unicode as icon**: only `→` (U+2192). Do not substitute `▶`, `✓`, `●`, `◆`, etc. **PNG icons**: none found; do not introduce.

---

## Index

**Foundations**

- [`README.md`](./README.md) — this file
- [`colors_and_type.css`](./colors_and_type.css) — all CSS variables (colors, type, spacing, motion, radii)
- [`SKILL.md`](./SKILL.md) — skill manifest (download-compatible)

**Assets**

- [`assets/logos/`](./assets/logos/) — white, black, and blue wordmark SVGs + favicon
- [`uploads/`](./uploads/) — original EPS files supplied by brand

**Preview cards** (render in the Design System tab)

- [`preview/`](./preview/) — palettes, type specimens, component cards

**UI kits**

- [`ui_kits/marketing/`](./ui_kits/marketing/) — the GAEA AI marketing website kit (Header, Hero, ProductCard, FeatureRow, StatBlock, Footer, etc.)

**Reference (source-of-truth snapshots from the codebase)**

- [`reference/main.css`](./reference/main.css) — original design tokens
- [`reference/components/`](./reference/components/) — original Vue components
- [`reference/pages/`](./reference/pages/) — original page templates

---

*Built against the GAEA AI Nuxt/Vue marketing codebase. Tokens are reproduced verbatim; type is self-hosted **Open Sans** (the brand sans, matching the codebase), mono is JetBrains Mono via CDN.*
