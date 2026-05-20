# Site Map Index

## purpose

Provide the technical navigation layer for site work. These maps help an agent
find the right docs and make bounded implementation choices, but they do not
replace the brief, execution docs, or validation docs.

## source of truth

- Business truth: `docs/AGENT_TASK.md`, `docs/CLIENT_BRIEF.md`, `docs/CONTENT_SEED_TASK.md`, and `docs/intake/*`
- Execution truth: `docs/EXECUTION_PLAN.md`, `docs/AGENT_GUARDRAILS.md`, and `docs/AGENT_VISUAL_STANDARD.md`
- Reference truth: `docs/AGENT_LAUNCH.md`
- Validation truth: `docs/VALIDATION_RULES.md`
- Map status layer: `docs/maps/AGENT_TASK_TREE.md`
- Style direction: `docs/maps/STYLE_DIRECTION_MAP.md`
- Site source is Astro: `apps/site/src` is the editable surface and `public-demo` / `dist` are output only.
- Landing starter source lives in `apps/site/src/components/*.astro` and `src/data/landing.ts`.
- Map entry: `docs/maps/MAP_INDEX.md`
- Style direction map: `docs/maps/STYLE_DIRECTION_MAP.md`
- Site structure: `docs/maps/SITE_STRUCTURE_MAP.md`
- Home page: `docs/maps/PAGE_HOME_MAP.md`
- Component maps: `docs/maps/COMPONENT_HEADER_MAP.md`, `docs/maps/COMPONENT_HERO_MAP.md`, `docs/maps/COMPONENT_BENEFITS_MAP.md`, `docs/maps/COMPONENT_PRODUCTS_SERVICES_PREVIEW_MAP.md`, `docs/maps/COMPONENT_TRUST_PROOF_MAP.md`, `docs/maps/COMPONENT_LEAD_FORM_MAP.md`, `docs/maps/COMPONENT_FAQ_MAP.md`, and `docs/maps/COMPONENT_FOOTER_MAP.md`

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
site work
  -> AGENT_TASK.md
  -> CLIENT_BRIEF.md
  -> CONTENT_SEED_TASK.md
  -> EXECUTION_PLAN.md
  -> AGENT_GUARDRAILS.md
  -> AGENT_VISUAL_STANDARD.md
  -> VALIDATION_RULES.md
  -> MAP_INDEX.md
  -> AGENT_TASK_TREE.md
  -> SITE_STRUCTURE_MAP.md
  -> PAGE_HOME_MAP.md
  -> COMPONENT_HEADER_MAP.md
  -> COMPONENT_HERO_MAP.md
  -> COMPONENT_BENEFITS_MAP.md
  -> COMPONENT_PRODUCTS_SERVICES_PREVIEW_MAP.md
  -> COMPONENT_TRUST_PROOF_MAP.md
  -> COMPONENT_LEAD_FORM_MAP.md
  -> COMPONENT_FAQ_MAP.md
  -> COMPONENT_FOOTER_MAP.md
```

## map-driven cycle

Map -> Expand -> Implement -> Mark -> Report

## required

- Read `AGENT_TASK.md`, `CLIENT_BRIEF.md`, and `CONTENT_SEED_TASK.md` first.
- Read `EXECUTION_PLAN.md`, `AGENT_GUARDRAILS.md`, and `AGENT_VISUAL_STANDARD.md` before implementation details.
- Read `AGENT_TASK_TREE.md` for status notes before you start site work.
- Read this index before editing site code.
- Read `STYLE_DIRECTION_MAP.md` before choosing hero, card, button, or form styling.
- Use `SITE_STRUCTURE_MAP.md` to choose the page count and route set.
- Use `PAGE_HOME_MAP.md` to assemble the home page.
- Use the component maps for header, hero, benefits, preview, trust, lead form, and footer detail.
- For `catalog-services-booking*`, keep the route set fixed by `siteStructure`: starter = Home/Catalog/Contacts, expanded = Home/Catalog/About/Blog/Contacts.
- Keep status updates in `docs/maps/AGENT_TASK_TREE.md` or `docs/conductor/run_log.md`.
- Component maps are read-only implementation requirements. Do not edit component maps to match the code. If implementation cannot satisfy a component map, mark the related task as blocked in `docs/maps/AGENT_TASK_TREE.md` or write a note in `docs/conductor/run_log.md`.
- Do not create a new project; work inside this scaffold.

## allowed inference

- Fill local technical details that are not specified by the brief.
- Decide reasonable header, burger, hero, benefits / offer, products or services preview, trust / proof, footer, form, mobile, and polish details inside the map bounds.
- Choose grid, list, or cards for benefits / offer, products or services preview, trust / proof, and footer when that improves readability.
- Add focus, hover, mobile layout, and visual rhythm details inside those blocks.
- Keep branch notes local to this map and do not widen business scope.
- Update map notes if the map is used as a working log.
- Update branch status when you finish the work.

## denied inference

- Do not invent business features, integrations, or product branches not supported by the brief.
- Do not widen business scope without the brief or `docs/AGENT_LAUNCH.md`.
- Do not use the map as permission to add new business functions.
- Do not add a cart if the brief does not ask for one.
- Do not add a personal account.
- Do not add payment.
- Do not invent catalog detail pages, required cases/reviews routes, or fake blog articles for the expanded catalog preset.
- Do not add real reviews, numbers, or awards without a source.
- Do not expand into SEO, bot, API, miniapp, infra, or deploy work.
- Do not replace `AGENT_LAUNCH.md`, `EXECUTION_PLAN.md`, or `VALIDATION_RULES.md`.

## component/page acceptance

- The map makes the site route and component surface easy to locate.
- The map explains what to read next, not how to bypass the runtime contract.
- The site layer remains a navigation aid, not a new source of truth.

## agent notes

- Map status: `draft`
- If you use this map as a working log, keep the status and assumptions current in `AGENT_TASK_TREE.md` or `docs/conductor/run_log.md`.
- When the site scope is unclear, prefer the simplest defensible route set and record the assumption in the map notes.
- Do not use the map as permission to widen business functionality.
