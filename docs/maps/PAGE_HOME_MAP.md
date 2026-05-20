# Home Page Map

## purpose

Describe the first public page of the site so an agent can build the visible
entrypoint without drifting outside the site scope.

## source of truth

- Business truth: `docs/AGENT_TASK.md`, `docs/CLIENT_BRIEF.md`, `docs/CONTENT_SEED_TASK.md`, and `docs/intake/*`
- Execution truth: `docs/EXECUTION_PLAN.md`, `docs/AGENT_GUARDRAILS.md`, and `docs/AGENT_VISUAL_STANDARD.md`
- Reference truth: `docs/AGENT_LAUNCH.md`
- Validation truth: `docs/VALIDATION_RULES.md`
- Map entry: `docs/maps/MAP_INDEX.md`
- Status/checklist: `docs/maps/AGENT_TASK_TREE.md` and `docs/conductor/run_log.md`
- Style direction: `docs/maps/STYLE_DIRECTION_MAP.md`
- Home page source is Astro composition: keep content data in `src/data/*.ts` and page files thin.
- For landing starters, keep the home-page data in `src/data/landing.ts` and the section components in `apps/site/src/components/*.astro`.

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
home page
  -> Header → COMPONENT_HEADER_MAP.md
  -> Hero → COMPONENT_HERO_MAP.md
  -> Offer / Benefits → COMPONENT_BENEFITS_MAP.md
  -> Products or Services Preview → COMPONENT_PRODUCTS_SERVICES_PREVIEW_MAP.md
  -> Trust / Reviews / Proof → COMPONENT_TRUST_PROOF_MAP.md
  -> Lead Form → COMPONENT_LEAD_FORM_MAP.md
  -> FAQ → COMPONENT_FAQ_MAP.md
  -> Footer → COMPONENT_FOOTER_MAP.md
```

## selected home scope

- Page family: `landing`
- CTA intent: `send a request`
- Site structure hint: `home-only`
- Routing assumption: `Landing is a locked one-page preset. Keep the first version on one page and do not invent extra routes from niche or accent blocks.`

## required

- Keep the home page aligned with the site structure map.
- Read `STYLE_DIRECTION_MAP.md` before styling the hero, cards, buttons, and form blocks.
- Reference the header, hero, benefits, preview, trust, FAQ, lead form, and footer maps while building.
- Make the first screen explain the business quickly.
- Keep the first content order as hero -> standard visual cards -> benefits / preview -> trust / proof -> FAQ -> lead form -> footer / contacts.
- If the page starts with an immersive hero, place a full-width `.page-surface` after it, add `.page-surface--overlap` for the overlap state, and keep the normal content container inside `.page-surface__inner`.
- For catalog / storefront requests, keep the home page contract as header/navigation -> hero -> short business description -> catalog preview from the same catalog data -> why choose us / facts / benefits -> FAQ -> lead form -> footer.
- For catalog / storefront requests, the preview should show 3-4 cards and point to the full catalog when a separate catalog page exists.
- For catalog / storefront requests, treat that preview as the canonical post-hero product block and do not add a second visual-cards/catalog block just to satisfy validator.
- Keep the visible business copy simple, neutral, and concrete.
- Do not put long editorial or advice-first copy before the catalog cards.
- Keep the home page honest if proof, reviews, or trust cues are not available.
- Do not use hero note text or trust badges under the hero CTA as default filler; proof belongs in a separate trust/proof section unless the brief explicitly asks for proof inside the hero.
- Use the home page as the entry point even when there are more pages.
- Keep the home page thin: compose components and data, do not hand-write the whole page as a static HTML source file.

## behavior

- The page should read as one composition rather than disconnected blocks.
- CTA flow should move naturally from hero to benefits/preview to form.
- If the page starts with an immersive hero, let `.page-surface.page-surface--overlap` create the upward page-background transition while `.page-surface__inner` keeps the regular content width.
- The content order should make the business understandable before the user has to hunt for details.
- Mobile stacking should preserve the primary action and the conversion path.
- For ecommerce storefronts, mobile should keep the product/category preview high in the stack and, when there are several cards, use a swipeable row instead of a long vertical list.

## allowed inference

- Choose section order, spacing, and local copy details that fit the niche.
- Add a small trust row, badge, or proof snippet in a separate proof section when it is safe and real.
- Use simple anchor navigation or links to the secondary pages when they exist.
- Add lightweight motion or visual polish if it improves clarity rather than distracting from it.

## denied inference

- Do not invent proof, awards, reviews, or numbers.
- Do not invent prices, addresses, years of experience, guarantees, certificates, or legal/medical claims.
- Do not hide the CTA below unnecessary content on mobile.
- Do not add unrelated product features that are not part of the request.
- Do not move into SEO, bot, API, miniapp, infra, or deploy work.

## common failure cases

- first screen looks polished but does not explain the business
- CTA is buried too low
- blocks feel unrelated to each other
- there is no clean transition from hero to form
- immersive hero and the first content section meet as two disconnected rectangles
- the page falls back to `landing-content--overlap` or a first-section pseudo-element overlap
- `.page-surface--overlap` reads like a glass card/sheet instead of normal page background
- the page feels like a template without a niche
- page has horizontal overflow on mobile because header, drawer, hero, or cards are not width-safe
- mobile header is overcrowded with CTA + burger
- home header loses contrast over hero

## component/page acceptance

- The home page tree matches the selected page family.
- The page immediately communicates what the business offers.
- The hero-to-content transition uses the `.page-surface` / `.page-surface--overlap` / `.page-surface__inner` contract and stays mobile-safe when immersive hero is used.
- FAQ uses native disclosure with lightweight CSS polish instead of a raw abrupt block.
- The component maps are clearly reusable from this page map.
- The page feels like a complete first working version, not a shell.

## status

- Map status: `draft`

## agent notes

- If you use this map as a working log, keep the home scope and assumptions current.
