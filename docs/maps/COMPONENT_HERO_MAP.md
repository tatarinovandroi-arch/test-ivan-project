# Hero Component Map

## purpose

Describe the first screen of the site so the agent can build a strong opening
that explains the business and supports conversion.

## source of truth

- Business truth: `docs/AGENT_TASK.md`, `docs/CLIENT_BRIEF.md`, `docs/CONTENT_SEED_TASK.md`, and `docs/intake/*`
- Execution truth: `docs/EXECUTION_PLAN.md`, `docs/AGENT_GUARDRAILS.md`, and `docs/AGENT_VISUAL_STANDARD.md`
- Reference truth: `docs/AGENT_LAUNCH.md`
- Validation truth: `docs/VALIDATION_RULES.md`
- Map entry: `docs/maps/MAP_INDEX.md`
- UI contract truth: `.botweaver/pipeline/spec.json` and `.botweaver/pipeline/launch-instruction.json` via `ui_contracts.hero_layout`; fall back to resolved visual context / `heroLayoutPreference` only when the contract is absent.
- Shared hero source lives in `apps/site/src/components/Hero.astro`; content data belongs in `src/data/site.ts` or `src/data/pages.ts`.
- Landing starter hero lives in `apps/site/src/components/Hero.astro` with data in `src/data/landing.ts`.

## map edit policy

This component map is read-only guidance for implementation.
Do not rewrite this map to match incomplete code.
If the implementation cannot satisfy this map, mark the related branch as blocked in `docs/maps/AGENT_TASK_TREE.md` and explain why in `docs/conductor/run_log.md`.

## request context

- Project type: `landing`
- Niche: `local-services`
- siteStructure: `home-only`
- futureGrowth: `demo-only`
- style: `dark-lime-creative`
- Enabled apps: `site`
- Presentation blocks:
  - benefits
  - reviews
  - cases
  - steps
- Business capabilities:
  - lead-form
  - faq

## tree

```text
hero
  -> eyebrow
  -> H1
  -> short supporting lead
  -> primary CTA
  -> secondary CTA / supporting action
  -> visual block
```

## required

- clear H1 based on the niche and offer
- short supporting lead
- primary CTA
- secondary CTA or supporting action if useful
- visual block, image, card, or product preview
- trust cue only if the brief explicitly needs proof in the hero
- Hero layout must follow `ui_contracts.hero_layout`; do not let the agent choose a different hero family on its own.
- If `ui_contracts.hero_layout` resolves to immersive, the hero must be a full-bleed visual banner.
- Immersive hero background may span the available width, but readable content must stay inside the shared page-width container.
- Immersive hero must not use side panels, side cards, hero visual cards, or split content columns.
- Overlay in immersive mode is only a gradient or tint layer over the image, not a separate card.
- If `ui_contracts.hero_layout` resolves to immersive, the hero must start directly after the header with no visible blank strip from a padded main wrapper.
- If the main wrapper has top padding, implementation must add an explicit immersive modifier such as `.site-main--immersive { padding-top: 0; }`.
- Immersive hero must not use `width: 100vw` together with `margin-left: calc(50% - 50vw)` or similar viewport-breakout hacks.
- In immersive mode, hero CTA buttons must stay compact on mobile and must not default to `width: 100%`.
- Hero content must keep bottom-safe padding so CTA buttons do not fall under the overlapping page surface.
- CTA target: `send a request`
- Keep the hero copy short and feed the component from data rather than burying the copy inside a long page file.

## behavior

- strong first impression
- good mobile stacking
- hero text must be concise
- H1 should usually fit into 1-2 desktop lines and stay readable on mobile
- use the configured hero layout instead of choosing a new one at implementation time
- for ecommerce storefronts, if the configured hero layout resolves to immersive, keep the hero as one wide visual banner instead of splitting it into a separate side-card layout
- for ecommerce storefronts, keep the H1, lead, and CTAs inside the hero and move product/category cards immediately after the hero
- if `ui_contracts.hero_layout` resolves to immersive, keep the readable content aligned to the site content container rather than the viewport edge
- if `ui_contracts.hero_layout` resolves to immersive, do not add side panels, side cards, hero visual cards, or split content columns
- keep the H1 short, usually 3-7 words
- keep the hero lead to 7 words or fewer
- keep the lead to 1-2 short sentences
- hero copy should explain the business in plain terms instead of abstract marketing language
- use at most 2 CTAs in the hero
- do not fill `hero.note` by default for landing pages
- do not add trust chips, badges, or a trust row under the CTA by default; move proof into a separate trust/proof section unless the brief explicitly requires hero proof
- do not overload the hero with badges or chips
- if overlay is used, it should remain part of the large banner, not become a separate card
- immersive hero must not inherit top spacing from `.site-main`, page wrappers, or section gaps
- if the source can add a main modifier, prefer `site-main site-main--immersive` for pages that start with an immersive hero
- if a general `.hero` rule adds top padding, add an explicit mobile override such as `.hero.hero--immersive { padding-top: 0; }`
- for immersive landing pages, place one full-width `.page-surface` immediately after the hero and add `.page-surface--overlap` when the page background should rise over the hero edge
- keep the normal content container inside `.page-surface__inner`
- that transition should read as normal page background, not a clipped/cut decorative edge or a separate sheet
- do not bring back `landing-content landing-content--overlap`
- do not build the overlap through `.hero--immersive + .section::before` or a similar first-section pseudo-element
- do not use polygon, zigzag, or `clip-path` cuts for the hero-to-content overlap
- do not turn `.page-surface.page-surface--overlap` into a card/sheet with `border`, `box-shadow`, glass/rgba/hsla background, `backdrop-filter`, or `filter: blur()`
- mobile hero CTAs should remain compact with `width: auto`, `fit-content`, or a controlled `max-width`
- tap target height should be handled through height/padding, not by turning hero CTAs into full-width slabs
- avoid long, overloaded Russian H1 copy
- lead paragraph should be one compact sentence or two very short sentences
- trust strip or badges should stay short and should not turn into a full explanatory paragraph
- hero copy column must not be squeezed too narrow by a side card or visual block
- if a hero side card is used, the H1 must still keep enough width and visual priority
- if hero has a side card, desktop layout should keep hero copy and side card in the same row
- desktop hero should not leave an empty right side while the H1/lead becomes a tall text column
- side card should not drop below the copy on desktop unless the viewport is genuinely too narrow
- long Russian H1 copy must use mobile-safe clamp and wrapping
- hero text must not create horizontal overflow at 360/390/430px
- mobile H1 should stay readable without feeling oversized
- hero layout should not rely on desktop typography on mobile
- no text overflow
- CTA visible above the fold on mobile when possible
- image or visual does not crush the text
- hero layout should keep the offer readable before the user scrolls
- visual block should support, not compete with, the H1

## allowed inference

- Use the configured hero layout. Keep existing scaffold-supported hero modes only, and do not invent editorial/product-showcase variants or switch immersive to split on your own.
- Prefer `hero-desktop.webp` for desktop/tablet hero composition and `hero-mobile.webp` for mobile hero composition first. Use `fs-hero-default.webp` and `fs-hero-mobile-default.webp` for `fullscreen-visual` hero defaults. Keep `hero-1.webp` and `hero-mobile-1.webp` only as legacy fallback assets.
- Use `product-1.webp` through `product-8.webp`, `category-1.webp` through `category-4.webp`, or `gallery-1.webp` through `gallery-4.webp` for supporting visual blocks only when they help the hero stay readable. Keep `image-1.webp`, `image-2.webp`, and `image-3.webp` only as legacy fallback assets.
- Choose the visual treatment from the assets that exist in the scaffold.
- Add a small hero trust row or badge only when the brief explicitly needs proof in the hero; otherwise place proof in a separate trust/proof section.
- Adapt the copy to the niche instead of using generic marketing filler.
- Do not search external image sources when the local asset pool already covers the hero or supporting visual need.

## denied inference

- No fake awards, fake reviews, or fake numbers.
- No medical or legal claims.
- No huge hero that hides all useful content.
- No unrelated tech or cyber style unless the project style asks for it.
- No CSS-only pseudo-image if a suitable local hero or support asset already exists.
- Do not override `ui_contracts.hero_layout` with an agent-selected layout.
- Do not implement new hero families such as editorial or product-showcase until scaffold/validator support them explicitly.
- Do not add hero side panel, hero__panel, hero visual card, or split hero content when the selected hero layout is immersive.
- Do not align immersive hero text directly to the viewport edge; align it to the site content container.
- Do not place an immersive hero inside a padded `.site-main` in a way that leaves a visible strip between header and hero.
- Do not use `width: 100vw` plus `margin-left: calc(50% - 50vw)` to force immersive full-bleed.
- Do not use `hero.note`, trust chips, or badges as default filler under the hero CTA.
- Do not bring back `landing-content--overlap` or a first-section pseudo-element overlap hack.
- Do not use `.hero__actions .button { width: 100%; }` by default in immersive hero mobile styles.
- Do not solve touch usability by making every hero CTA a full-width slab.
- Do not append a second hero/button design system at the bottom of `site.css` to override the first one.

## common failure cases

- H1 too generic
- CTA unclear
- image not tied to niche
- mobile hero occupies the whole screen and hides useful content
- text overflows the container
- long Russian H1 too large on mobile
- hero text is overloaded with too much copy
- hero copy column becomes too narrow next to a side card
- hero copy stretches into a long vertical text column on desktop
- right side of the desktop hero is empty even though a side card exists
- side card steals too much width from the main offer
- H1 causes horizontal scroll
- mobile H1 uses desktop-first clamp that remains too large
- hero media/text combination pushes useful content too low
- visible blank strip appears between header and immersive hero
- immersive hero inherits `padding-top` from `.site-main` without an override
- immersive hero inherits mobile top padding from a general `.hero` rule
- content below hero starts as a disconnected flat block with no intentional transition
- the first post-hero surface is not a full-width `.page-surface` with an inner container
- hero transition falls back to `landing-content--overlap` or a first-section pseudo-element hack
- `.page-surface--overlap` reads like a glass card/sheet instead of page background
- hero CTA becomes a huge full-width slab on mobile
- CSS fixes are appended as a second design system instead of consolidating existing hero/button rules

## component/page acceptance

- The H1 immediately explains what the business offers.
- The CTA is clear.
- The mobile hero is readable.
- The hero copy stays concise and balanced on desktop.
- If a side card exists, desktop hero copy and side card stay in one row.
- The lead stays short, and hero note/trust rows are absent unless explicitly needed.
- Long H1 wraps cleanly at 360px, 390px, and 430px.
- Mobile H1 uses safe font-size clamp, line-height, max-width, and overflow-wrap.
- Hero does not cause horizontal overflow.
- The visual and text feel connected to the niche.
- If immersive mode is selected, the hero starts immediately after the header with no visible top gap.
- If immersive mode is selected, the implementation has a clear main/hero geometry override instead of relying on a padded wrapper.
- If immersive mode is selected, the hero is followed by the `.page-surface` / `.page-surface--overlap` / `.page-surface__inner` contract rather than a legacy card/glass wrapper.
- Hero CTA buttons stay visually compact on mobile and do not default to full-width slabs.
- Hero/button CSS is consolidated into the existing design system rather than duplicated below it.

## status

- Map status: `draft`

## agent notes

- Keep the first fold aligned with the header and the next section so the page reads as one composition.
- For immersive hero pages, check the parent `main` wrapper before styling the hero. A correct hero can still look wrong if `.site-main` adds top padding above it.
- Prefer a page-level modifier such as `.site-main--immersive` instead of patching the hero with negative margins.
- Keep mobile CTA usability through compact height, padding, and clear spacing, not through full-width hero buttons by default.
