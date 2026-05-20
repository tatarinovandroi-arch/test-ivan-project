# Agent Visual Standard

Request ID: 301f4328-cebc-4794-af62-8a083036c60d
Run key: local-services--301f4328
Workspace: /srv/botweaver/generated/local-services--301f4328
Project type: landing
Niche: local-services
Style: dark-lime-creative

## Visual Context
- Hero layout preference: Дерзкий креатив
- Hero instruction: Use a bold fullscreen visual hero: dark background, large visual focus, and a strong first impression that relies on imagery and contrast.

# The frontend quick-start build should look finished, client-facing, and publish-safe

## Page Shell

- Include a real header, hero, content sections, a clear CTA, and a finished footer.
- Keep the first screen understandable without scrolling.
- Make the page feel like a complete first working version, not a draft layout.

## Astro Source Contract

- Site source lives in `apps/site/src`.
- Build output HTML belongs only in publish folders such as `public-demo`, `dist`, `build`, or `out`.
- Compose pages from Astro components and `data/*.ts` files instead of hand-written HTML source pages.
- `LeadForm.astro` and `Faq.astro` are always present in site scaffolds.
- If Astro build is unavailable, record the issue in `docs/conductor/run_log.md`, but keep the source model Astro-first.

## Layout

- Use stable grids, consistent spacing, and readable card hierarchy.
- Keep text blocks aligned and avoid drifting compositions.
- Let cards, forms, and media blocks feel deliberate and balanced.
- When hero includes a side card, quick-start card, or visual info card, keep the hero copy and side card in the same desktop row.
- Do not leave the right side of a desktop hero empty if a side card is meant to support the offer.
- Do not let the hero copy become a long vertical column on desktop while the side card drops below.
- Keep the hero copy and side card balanced so the main offer stays visually dominant.
- Section headings should default to `eyebrow -> h2 -> optional description/CTA`.
- Do not place the eyebrow and the `h2` in a single horizontal `space-between` row.
- If a CTA sits beside the heading, keep the text in a dedicated copy wrapper such as `.section-heading__copy` and move CTA controls into `.section-heading__actions`.

## Mobile

- Design for 360-430px first and verify no horizontal overflow.
- Keep tap targets large enough for touch.
- Use a nav toggle or equivalent compact navigation pattern when the header has several links.
- Header owns the mobile burger; do not add a floating toggle outside the header shell.
- Keep the mobile header to brand/logo + burger only; do not place a CTA beside the burger.
- Make the mobile nav toggle visually icon-only; do not show a visible `Меню` / `Menu` label inside the button.
- Keep the burger as a real `button` with `aria-label`, `aria-controls`, and `aria-expanded`.
- Default drawer pattern is a left-side fixed panel; it should close through scrim/outside tap, nav link click, `Escape`, and a left-swipe gesture.
- An internal drawer close button is optional, but it must not be the only close path.
- Drawer CTA must stay width-safe with `width: 100%`, `max-width: 100%`, and `box-sizing: border-box`.
- Animate the burger lines through `[aria-expanded="true"]` instead of leaving the icon static.

## Visual Assets

- Prefer local assets already available in the scaffold.
- Use the standard demo asset pool before searching external image sources.
- `hero-desktop.webp` is the primary desktop/tablet hero asset.
- `hero-mobile.webp` is the primary mobile hero asset.
- `fs-hero-default.webp` is the primary fullscreen-visual desktop hero asset.
- `fs-hero-mobile-default.webp` is the primary fullscreen-visual mobile hero asset.
- `product-1.webp` through `product-8.webp` are reusable assets for product cards.
- `category-1.webp` through `category-4.webp` are reusable assets for category cards.
- `gallery-1.webp` through `gallery-4.webp` are reusable assets for gallery/proof cards.
- Legacy fallback names `hero-1.webp`, `hero-mobile-1.webp`, and `image-1.webp` through `image-3.webp` remain valid only for older scaffolds.
- Use a real hero image or other strong visual asset when the request expects a frontend surface.
- Keep image sizing safe with `object-fit`, predictable ratios, and meaningful `alt` text.
- Do not replace a usable local asset with a CSS-only placeholder.
- Ecommerce and catalog cards should look like product cards, not generic benefit cards.
- Product/category cards need an image area, a price or price range, and an action.
- Prefer the local placeholder assets over imageless cards when the brief does not provide product photography.
- Real photography can use `object-fit: cover`, but branded placeholder tiles with text or logo should use `object-fit: contain` so the mark is not cropped.

## Media Slot Rules

- hero desktop: 16:9
- hero mobile: 4:5 or 9:16
- product cards: 1:1 or 4:5
- gallery or proof cards: 4:3
- branded placeholders with logo/text should use `object-fit: contain`

## Hero Pattern Preference

- Client chooses one of two hero patterns in Mini App:
- immersive: near-fullscreen visual-first hero with one large image/banner, gradient overlay, headline, lead, and CTA inside the shared content container. The image can be full-bleed in normal block flow, but the readable copy must stay in a centered page-width container. For ecommerce storefronts, this is the default and should stay a single wide banner rather than a split hero or small side-card layout.
- split: structured hero with text on one side and image/composition on the other. Use it when the brief explicitly asks for it or when it improves readability.
- Client preference is the source of truth unless it breaks readability or mobile usability.
- If changed, document why in `docs/conductor/run_log.md`.
- Do not use `hero__panel`, `hero__content--split`, a hero side panel, or a hero visual card in immersive mode.
- Keep the hero H1 short, usually 3-7 words and at most 1-2 lines.
- Keep the hero lead to 7 words or fewer.
- Use at most 2 CTAs in the hero.
- Do not add hero note text, trust chips, badges, or a trust row by default. Put explanations and proof into lower sections.
- If overlay is used, it should remain part of the banner, not a separate card.

## Immersive Hero Geometry Contract

These rules are not optional style advice. They are visual geometry contracts for quick-start builds.

- Immersive hero must start immediately after the header.
- Do not leave a visible blank strip between header and hero because of `.site-main` padding, margin, or wrapper background.
- If the main wrapper has top padding, use a page-level modifier such as `.site-main--immersive { padding-top: 0; }`.
- The hero image or visual layer may span the available width, but H1, lead, and CTA must stay inside a centered page-width container.
- Immersive mode must stay one wide banner, not a split layout, side-card layout, or hero panel layout.
- Do not add `hero__panel`, `hero__visual`, `hero__content--split`, side cards, side panels, or separate visual cards in immersive mode.
- Do not implement immersive full-bleed with `width: 100vw` and `margin-left: calc(50% - 50vw)`.
- Hero content needs bottom-safe padding so CTA buttons do not disappear under the overlapping page surface.
- On mobile, keep hero CTA buttons compact; do not convert them to full-width slabs by default.

Recommended CSS pattern:

```css
.site-main--immersive {
  width: 100%;
  padding-top: 0;
}

.hero--immersive {
  width: 100%;
  margin: 0;
}

.page-surface {
  width: 100%;
}

.page-surface--overlap {
  margin-top: clamp(-56px, -8vw, -28px);
}

.page-surface__inner {
  width: min(var(--page-max, 1120px), calc(100% - 32px));
  margin-inline: auto;
}
```

## Immersive Hero Transition

- After an immersive hero, use one full-width `.page-surface` as the canonical post-hero wrapper and add `.page-surface--overlap` when the page background should rise over the hero.
- Keep the regular content container inside `.page-surface__inner`.
- The top edge of the page background may be rounded and may move slightly upward over the hero.
- The effect should feel like the page background continuing upward, not like a glass panel or separate card placed on top of the site.
- Do not bring back `landing-content--overlap`.
- Do not create the overlap with `.hero--immersive + .section::before` or a similar first-section pseudo-element trick.
- Do not use wrapper-level `border`, `box-shadow`, glass/rgba/hsla card background, `backdrop-filter`, or `filter: blur()` on `.page-surface.page-surface--overlap`.
- Do not use `clip-path` or polygon cuts for the default transition.

## FAQ Polish

- Keep FAQ accessible with native `<details>/<summary>` or an equally accessible disclosure pattern.
- Add visible focus states on interactive FAQ controls.
- Do not use a raw text disclosure marker such as `content: "+"`.
- Draw the disclosure icon with CSS lines, for example through `summary::after` with two `linear-gradient` strokes or an equivalent line-based icon treatment.
- Add lightweight open/close polish through CSS transitions such as `grid-template-rows`, `max-height`, `opacity`, `transform`, marker rotation, or summary/background transitions.
- Keep the animation subtle and lightweight; do not add a JS accordion or animation library by default.
- Keep answers concise enough to preserve scanability and page rhythm.

## Style Direction Map

- Before styling the page, fill `STYLE_DIRECTION_MAP.md` so the agent resolves the visual metaphor, layout rhythm, section variety, card treatment, button treatment, typography mood, media usage, motion, and what to avoid.
- `dark-cyber`: do not settle for a dark surface plus green buttons; use a neon route, techno sign, terminal, or club-like atmosphere, and vary the rhythm across hero-banner, strip, cards, proof-row, and form-block sections.
- `clean-premium`: keep the page airy, use thin lines and calm surfaces, and keep CTA styling quiet but polished.
- `playful-product`: use rounded geometry, friendly blocks, and a lively but controlled rhythm.
- `editorial-tech`: use larger type, magazine-like spacing, text-led sections, and restrained buttons.
- If the style is unclear, choose a neutral direction and document the assumption in the map notes.

## Ecommerce Cards On Mobile

- Product, category, case, showcase, and service cards on mobile should become a horizontal swipe row or carousel instead of a tall vertical stack.
- Use `scroll-snap-type` together with `overflow-x: auto` or `overflow-x: scroll`.
- Keep card widths around `78vw` to `84vw` on mobile.
- Desktop can stay as a grid.

## Post-Hero Visual Cards

- Ordinary quick-start landing pages must render a standard visual cards block immediately after the hero.
- Cards must be image-led, not text-only: image, alt text, title, short description, and optional CTA.
- Use only local `assets/demo/product-*`, `assets/demo/category-*`, or `assets/demo/gallery-*` images for this block.
- On mobile, the visual cards block must use a horizontal scroll/snap row, not a long vertical wall.
- Put explanatory copy below the hero in this block or later sections instead of expanding the hero text.

## Buttons

These rules are not optional style advice. They are visual geometry contracts for quick-start builds.

- Keep the default button size compact: min-height around `38px` to `40px`.
- Default buttons must never require more than `44px` min-height unless the request explicitly asks for a large CTA treatment.
- Keep default button padding around `0.55rem 0.85rem`.
- Keep default button corners around `14px` to `16px` rather than a pill shape.
- Do not use more than `18px` border-radius for normal buttons.
- Use large CTA styling only in the hero or final CTA block.
- Do not make footer buttons hero-sized.
- On light backgrounds, `.button--secondary` and `.button--ghost` should set an explicit readable dark text color such as `color: var(--text)`; do not leave white text on white or pale button fills.
- Tap target height is not the same as full-width button.
- On mobile, do not make hero buttons `width: 100%` by default.
- Hero buttons may wrap, but they should stay visually compact: use `width: auto`, `width: fit-content`, or a reasonable `max-width`.
- Full-width buttons are allowed only inside mobile drawers, checkout/payment flows, or explicit form submit contexts.
- Never use this pattern by default:

```css
.hero__actions .button {
  width: 100%;
}
```

## Typography And Copy

- Use concrete headings, not vague placeholder language.
- Keep the primary visible copy in Russian unless the request explicitly needs another language.
- Keep business copy simpler, more neutral, and more concrete by default.
- If the brief is incomplete, stay honest and general instead of inventing specifics.
- Make CTA labels specific and action-oriented.
- Keep hero copy concise.
- Prefer H1 headlines that fit into 1-2 desktop lines when possible.
- Keep the lead to one compact sentence or two very short sentences.
- Keep trust strips and badges short instead of turning them into explanatory paragraphs.
- Avoid overloaded Russian H1 copy and avoid squeezing the hero title into a too-narrow column.
- If hero text is getting too long, shorten the copy before letting layout become overly tall.
- Avoid vague default phrases such as `понятный путь`, `сценарий обращения`, `точечное обновление`, `собранный результат`, `удобная заявка на связь`, `премиальный опыт`, `идеальный результат`, or `экспертный подход` unless the brief explicitly supports them.
- Client-facing HTML, footer copy, and visible project text must not mention demo, demo-ready, demo version, scaffold, runtime, or public-demo.
- Use project, first version, fast start, link to the project, or project published instead.
- Demo and scaffold terms are allowed only in internal docs, paths, manifests, and code comments that do not ship to the client.

## Components

- Buttons, forms, cards, and reviews should look like part of one system.
- Keep input states, hover states, and card treatments consistent.
- Avoid overcomplicated micro-interactions that do not help the request.
- Catalog pages should show visible product or category cards in the HTML or a static fallback, or use safe dynamic render with reveal re-registration; JS-only rendering is allowed only as enhancement.
- Do not leave the main catalog as an empty mount point that becomes visible only after app.js or JSON data hydration.

## Reveal And Dynamic Content

- If elements are hidden with `[data-demo-reveal]` or a similar pre-visible state, every dynamically inserted element must be re-registered after `innerHTML` or an equivalent render pass.
- Make `initReveal` idempotent or accept a root/container so it can be safely called again after render functions.
- Do not let the main catalog depend on a one-time observer that only knows about the initial DOM.
- If the reveal observer cannot be re-run safely, do not hide the core catalog cards behind it; keep the catalog visibly readable in the HTML fallback path.

## Forms And Interactive Controls

- Forms should be usable, not just visually acceptable.
- Prefer a full-width lead form by default.
- If a form is split, the left side must carry meaningful content such as a checklist, process summary, or preparation notes, and the split layout must be explicitly requested.
- Do not use a short teaser on the left and a large form on the right without real supporting content.
- Keep input, select, and textarea states consistent across default, hover, focus, disabled, and invalid states.
- Native select controls should stay system-default unless the brief explicitly asks for a custom select treatment.
- If a custom select treatment is used, it must be an explicit design choice; do not make the default scaffold depend on a custom chevron background-image.
- Reserve enough right-side space for a custom select chevron only when that custom treatment is intentionally enabled.

## CSS And Performance

- Avoid heavy `backdrop-filter`, large blur effects, and overly broad glassmorphism.
- Do not turn `.page-surface` or `.page-surface--overlap` into a glass/card/sheet layer with `border`, heavy shadow, `backdrop-filter`, blur, or translucent `rgba(...)` / `hsla(...)` backgrounds.
- Prefer simple gradients, borders, opacity layers, and lightweight transitions.
- Keep asset paths relative and avoid server-only runtime dependencies in the frontend bundle.
- Nested routes such as `/catalog/`, `/product/`, `/results/`, and `/contacts/` must still resolve assets correctly after build.
- Do not append a second design system at the bottom of `site.css`.
- If visual direction changes, consolidate existing rules instead of stacking new conflicting rules below old ones.
- Avoid duplicate core selector blocks for `:root`, `.button`, `.site-main`, `.site-header`, `.hero`, and `.hero--immersive`.
- Keep one canonical source for button geometry, hero geometry, layout width, and header spacing.

## Footer

- Footer is a calm end zone for navigation, contacts, social links, and short legal notes.
- Do not place large hero-style CTA buttons in the footer.
- If the page needs a final CTA, place it before the footer as a separate section.

## Accessibility Basics

- Use semantic HTML where practical.
- Keep labels, aria-labels, and focus states visible and meaningful.
- Use visually-hidden text for icon-only nav toggles when needed instead of visible button text.
- Do not rely on color alone for critical information.

## Final Self-Check

- The page shell is complete.
- The mobile layout does not overflow.
- The hero and CTA are clear.
- If the hero is immersive, it starts directly after the header without a blank top strip.
- If the hero is immersive, it is not secretly implemented as split, side-card, or hero-panel layout.
- Hero buttons stay compact on mobile and do not become full-width slabs by default.
- Images have alt text.
- Forms are labelled.
- Focus states exist.
- Core CSS selectors are not duplicated into a second design system.
- The bundle stays lightweight and publish-safe.
