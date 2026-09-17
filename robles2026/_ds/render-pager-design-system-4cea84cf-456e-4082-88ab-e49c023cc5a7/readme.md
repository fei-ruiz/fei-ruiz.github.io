# Render-pager Design System

Render-pager is a new studio brand with no existing product or codebase — this system was built entirely from a **mood board of five reference websites** the founder singled out for specific qualities, not from Render-pager's own assets (none were supplied; there is no Render-pager logo, and none should be invented — see "No logo" below).

## Sources (reference sites, not Render-pager's own product)
Each was captured as a `tokens.json` (computed colors/fonts) + `notas.md` (annotated CSS reading) + screenshots/screen recordings, uploaded by the user:
- **Oliver Gareis — Master Typography & Layout Course** — https://www.olivergareis.com/course — praised for: huge editorial type vs. viewport scale, black/white section inversions, the "8 CHAPTERS" scroll-video interaction.
- **Otherlife** (creative agency, a MoonPay company) — https://www.otherlife.xyz/ — praised for: neon-on-white color handling, corner-to-fullscreen image transitions, the circular word-cursor over full-screen imagery.
- **PerimeterWatch** — https://www.perimeterwatch.com/ — praised for: the red/near-black/gray palette specifically ("this is the color I want as first option"), 200px brutalist headline type.
- **Operate** (CRM for founders) — https://operate.so/ (via land-book.com) — praised for: overall coherence of color + type + large-text storytelling, the sage-green/paper palette, its 3-tier type system (Denim/Cinetype/Muoto).
- **MALOOT — HiFi Bar** (Vieux-Lille) — https://www.maloothifibar.com/ (via land-book.com) — praised for: sage/near-black/off-white palette, corner-thumbnail ↔ full-screen photo transitions with a blur-on-idle/sharp-on-hover treatment, Times Now editorial serif (same voice as Oliver Gareis).

Raw captures live in this project's `uploads/` folder (tokens.json + notas.md per site) if you need to re-derive anything.

## Typography substitutions (flag to user)
None of the six brand fonts seen in the sources (Angie Sans, Tobias, Aeonik, Telegraf, Times Now, Denim, Cinetype, Muoto) are licensed or available as files, so this system uses close Google Fonts stand-ins instead — **please supply real license/font files if you own any of these, and I'll swap them in**:
- Display serif role → **Instrument Serif** (stands in for Times Now / maloot)
- Display sans role → **Space Grotesk** (stands in for Telegraf / perimeterwatch and Denim / operate)
- Body role → **Manrope** (stands in for Aeonik / otherlife and Angie Sans / oliver gareis)
- Label/mono role → **Inter Tight** — this one is an *exact* match, not a substitute (maloot's own micro-label font)

## No logo
None of the five sources is Render-pager itself — they're inspiration only. Render-pager has no logo yet, so `thumbnail.html` and every specimen render the name as plain type. **Do not** reuse any of the five sites' own logos/wordmarks as Render-pager's identity.

## Content fundamentals
Voice patterns pulled from the sources, for reuse in Render-pager's own copy:
- **Short, confident, declarative sentences**, often a sentence fragment as a full paragraph ("It's dark. And for something that feels so opaque…" — operate).
- **Second-person, founder-to-founder tone** where relevant ("You deserve tools that cut through the noise" — operate); otherwise a plain descriptive third-person for hospitality (maloot: "A place where every detail is designed to feel warm…").
- **One dry aside per page is fine** ("Tiny, ineffective scissors not included." — operate) — humor is restrained, never a pile of jokes.
- No emoji anywhere in the sources. Occasional Unicode dingbats as spacers (operate uses ` · ⊹· ·` between sentences).
- Numbers as structure, not decoration: "(05) Course Structure", "002/003 CloudWatch", "01" — always a plain 2-digit index, never a badge/icon.
- Casing: nav and labels are UPPERCASE + tracked; headlines are sentence case or Title Case, never uppercase for long headlines.

## Visual foundations
- **Color**: one saturated accent per composition, everything else neutral. Render-pager's primary accent is signal red-orange `--accent-500 #e9503b` (perimeterwatch); a secondary electric-green accent `--accent-electric #33ff66` (otherlife) is reserved for rare, distinctly "digital" moments — never combine the two accents in one composition. Grounds are warm near-blacks (`--ink-*`) and warm off-whites/grays (`--paper-*`), with a muted sage-green (`--sage-*`) as a third, quieter surface tone for variety down a long page.
- **Type**: huge, fluid-scaled display type is the system's signature move — hero headlines run `clamp(3.25rem, 9vw, 9rem)`, always tight tracking (`-0.03em` or tighter). Labels/nav/eyebrows are tiny (11–13px), uppercase, and widely tracked (`0.14em`) — the contrast between those two extremes (little to no mid-size type) is intentional and recurs in every source.
- **Backgrounds**: flat color fields dominate; when photography appears it's warm-toned interior/product imagery, desaturated/blurred at rest and sharpened on hover or focus. No gradients, no illustration, no repeating patterns — full-bleed, edge-to-edge color or photo blocks instead.
- **Animation**: no bounce or spring, ever. Everything eases with `--ease-out-expo`, blur/opacity/scale as the only properties that move (never layout-shifting motion). Fast micro-interactions (~180ms) for buttons; slower (~420-800ms) for image reveals and section transitions.
- **Hover states**: opacity dip (buttons), blur→sharp + ~4% scale-up (images), underline for text links. **Press states**: scale down to ~97%, no color change.
- **Borders**: 1px hairlines only, always `currentColor` or a subtle neutral — never a colored accent border, never a left-border card accent.
- **Corners**: two languages only — sharp (`radius:0`, oliver gareis/maloot buttons) and full pill (perimeterwatch/otherlife buttons + badges). Avoid the in-between 4–8px "soft card" radius except on media containers.
- **Shadows**: almost none. These are flat-design sources; use `--shadow-card` only for a floating card over photography, never on buttons.
- **Transparency/blur**: used specifically for the media-reveal motion (blur at rest, clear on interaction) — not for glassmorphism panels or translucent nav bars.
- **Imagery mood**: warm, low-key, slightly grainy interiors and product macro shots (maloot's bar, otherlife's product renders) — never bright/cool corporate stock photography.
- **Cards**: mostly borderless flat-color blocks (FeatureCard) or 1px-hairline dark cards (QuoteCard) — no drop shadow, no rounded corners, no colored accent border.
- **Layout**: full-bleed edge-to-edge sections, generous vertical rhythm (`--section-py`), numbered section markers as a wayfinding device on long single-page sites.

## Iconography
None of the five sources leans on an icon system — they're near-icon-free, text-and-type-led sites. Where a glyph is needed (menu, chevrons, socials), use a plain, thin-stroke set — [Lucide](https://lucide.dev) via CDN is the closest match to what little iconography appears (perimeterwatch's hamburger, otherlife's scroll-mouse icon). No emoji.

## Index
- `styles.css` — entry point; imports everything in `tokens/`.
- `tokens/colors.css`, `typography.css`, `spacing.css`, `effects.css` — all custom properties.
- `components/` — `buttons/Button`, `navigation/NavBar` + `SectionMarker`, `cards/QuoteCard` + `FeatureCard`, `media/RevealImage` + `ImageRail`, `feedback/Badge`, `cursor/CursorLabel`.
- `guidelines/` — color, type, spacing, and motion specimen cards (Design System tab).
- `ui_kits/landing/` — a full-page starting-point composition using every component.
- `uploads/` (project root) — raw tokens.json/notas.md/screenshots per reference site.

## Components
Button · NavBar · SectionMarker · QuoteCard · FeatureCard · RevealImage · ImageRail · Badge · CursorLabel
