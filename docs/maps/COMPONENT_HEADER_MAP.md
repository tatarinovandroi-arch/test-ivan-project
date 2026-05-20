# Header Component Map

## purpose

Describe a site header that stays usable on desktop and mobile while keeping
navigation and conversion intent clear.

## source of truth

- Business truth: `docs/AGENT_TASK.md`, `docs/CLIENT_BRIEF.md`, `docs/CONTENT_SEED_TASK.md`, and `docs/intake/*`
- Execution truth: `docs/EXECUTION_PLAN.md`, `docs/AGENT_GUARDRAILS.md`, and `docs/AGENT_VISUAL_STANDARD.md`
- Reference truth: `docs/AGENT_LAUNCH.md`
- Validation truth: `docs/VALIDATION_RULES.md`
- Map entry: `docs/maps/MAP_INDEX.md`
- UI contract truth: `.botweaver/pipeline/spec.json` and `.botweaver/pipeline/launch-instruction.json` via `ui_contracts.drawer_position` and `ui_contracts.burger_animation`.
- Shared header source lives in `apps/site/src/components/Header.astro` and `apps/site/src/components/MobileDrawer.astro`.

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
header
  -> logo / brand name
  -> desktop navigation
  -> primary CTA
  -> mobile burger
  -> mobile drawer / panel
```

## required

- logo or brand name
- desktop navigation
- primary CTA
- mobile burger
- mobile drawer or panel
- CTA target: `send a request`
- Navigation and link labels should come from `src/data/site.ts` so the same header can be reused on all pages.
- Header owns brand, desktop nav, desktop CTA, and mobile burger. Do not put a separate floating burger/toggle in `MainLayout.astro`.
- Burger must be a real `button` with `aria-label`, `aria-expanded`, and `aria-controls`.
- `ui_contracts.drawer_position` is the source of truth for drawer placement; scaffold/validator supports `left` and `right`.
- `ui_contracts.burger_animation` is the source of truth for burger animation; scaffold/validator v1 currently supports only `cross`.

## behavior

- desktop header: brand/logo on the left, desktop navigation inline, primary CTA allowed on the right
- desktop header must stay readable against the hero and any elevated surfaces
- mobile: burger visible, desktop nav hidden
- mobile header must be only brand/logo + burger
- mobile header must not include a CTA, action button, or desktop nav link beside the burger
- primary CTA belongs in the drawer, hero, or first content section
- mobile header must not cause horizontal overflow
- drawer position must follow `ui_contracts.drawer_position`
- canonical drawer support is a scaffold-owned fixed panel that may open from the configured `left` or `right` side; `bottom` is not supported
- drawer panel must fit within viewport width and stay inside the viewport
- drawer width must be viewport-safe with `width: min(88vw, 360px)`
- drawer must keep `max-width: 100%` and `box-sizing: border-box`
- drawer must be fixed to the viewport, not constrained by the header, section, or page container
- drawer must stay full-height on every generated page, not only the home page
- drawer should use `height: 100dvh`
- drawer positioning should follow the configured side: `left` drawers use a left anchor and negative X hidden transform; `right` drawers use a right anchor and positive X hidden transform
- validate drawer behavior on home, catalog/products, and guide/supporting pages
- common failure case: drawer opens only half-height on inner pages
- drawer links and text must keep good contrast against the drawer background
- drawer CTA must stay inside the panel and stay width-safe
- drawer CTA should use `width: 100%`, `max-width: 100%`, and `box-sizing: border-box`
- sticky/elevated header is allowed and preferred if it does not harm readability
- burger animation must follow `ui_contracts.burger_animation`
- v1 canonical burger animation is `cross`; do not invent alternative burger animation systems
- drawer opens smoothly from the configured edge
- drawer closes by custom close control, scrim/outside tap, nav link click, `Escape`, and side-aware swipe
- internal drawer close button is optional, but it must not be required as the only close path
- body scroll is not broken
- active and focus states are visible
- burger lines should animate into a close state through `[aria-expanded="true"]` when `ui_contracts.burger_animation` resolves to `cross`
- burger/toggle markup lives inside the header component, not as a layout-level floating button
- drawer animation should feel direct and not block the first content block

## allowed inference

- Respect `ui_contracts.drawer_position`; in v1 that means a left-side drawer with a 200-320ms slide animation.
- Choose a 200-320ms animation when the design needs motion.
- Create a local Header component if it keeps the implementation clean.
- Agent may move the primary CTA from mobile header into drawer or hero.
- The scaffold drawer may include its own custom close control; do not rebuild the drawer only to add or remove close mechanics.

## denied inference

- No login, profile, or cart unless the brief requires it.
- No hidden backend dependency.
- No new routing beyond `SITE_STRUCTURE_MAP.md`.
- No sticky or fixed header if it harms the hero or mobile layout.
- Do not keep large CTA buttons beside the burger on mobile.
- Do not create `mobile-nav-toggle`, floating burger, or another drawer toggle outside `Header.astro`.
- Do not create a mobile header with brand + CTA + burger, even if the CTA is small or text-only.
- Do not put CTA, action buttons, or desktop nav links in the mobile header row.
- Do not place the primary CTA in the mobile header row; it belongs in drawer, hero, or content.
- Do not allow drawer CTA to exceed panel width.
- Do not implement unsupported drawer variants beyond the scaffold-owned `left` / `right` contract.
- Do not invent burger animations other than the v1 `cross` pattern.
- Do not require an internal close button as the only way to dismiss the drawer.
- Do not use white text on a white or light drawer background.
- Do not use a drawer with low-contrast text or links against its background.
- Do not use transparent/low-contrast home header unless contrast is guaranteed.

## common failure cases

- burger visible on desktop
- desktop nav visible on mobile
- desktop nav leaking into the mobile header row
- mobile header mixes brand, CTA, and burger in one row
- drawer opens from the wrong side for the configured contract
- drawer opens without animation
- menu does not close on link click
- menu closes only through an internal close button
- burger icon stays static when expanded
- body scroll breaks
- CTA is lost on mobile
- oversized CTA visible next to burger on mobile
- mobile header causes horizontal scroll
- drawer CTA overflows the panel
- drawer text has low contrast
- drawer panel wider than viewport
- drawer background and text lack contrast safety
- transparent home header loses contrast over hero

## component/page acceptance

- The header looks correct on desktop, tablet, and mobile.
- Burger animation matches the v1 `cross` contract.
- Drawer does not overflow the viewport.
- Drawer follows the configured `left` / `right` contract with the expected fixed-panel geometry.
- Drawer opens full-height on home and inner pages.
- Drawer is not clipped by header or container context.
- Drawer width, CTA width, and contrast remain safe on mobile.
- Drawer closes through custom close control, scrim/outside tap, nav link click, `Escape`, and side-aware swipe.
- No layout shift is introduced by the header state changes.
- On mobile, header is brand/logo + burger only.
- Primary CTA is available in hero/drawer/content, not in the mobile header row.
- Drawer CTA fits inside the panel.
- Header/drawer do not create horizontal overflow.
- Sticky/elevated header remains readable on home and inner pages.
- CTA is visible and meaningful for the niche.

## status

- Map status: `draft`

## agent notes

- Keep header focus handling and body scroll locking aligned if you implement both.
