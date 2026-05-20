# Agent Guardrails

Request ID: 301f4328-cebc-4794-af62-8a083036c60d
Run key: local-services--301f4328

## Derived Context
- Project type: landing
- Site structure: home-only
- Future growth: quick-start-only
- Style: dark-lime-creative
- Style preset: dark-lime-creative
- Company name: BYWORKOUT
- Business description: Фитнес студия.
- City: Москва
- Phone: +79242494933
- Telegram: @byworkout
- Email: dronmsk990@gmail.com
- Color preset: lime-electric
- Shape preset: sharp
- Font preset: geometric-display
- Visual tokens: Available
- Content language: ru
- Enabled apps: site

## Visual System Guardrails
- Style preset: dark-lime-creative
- Legacy style: dark-lime-creative
- Color preset: lime-electric
- Shape preset: sharp
- Font preset: geometric-display
- Resolved visual system: Available

### Component variants
- Component variants: not specified

Use the resolved visual system from the project context.
Do not invent a visual style from scratch.
Use existing CSS variables and approved component variants.
Do not introduce random raw colors.
Do not create new component classes unless explicitly requested.
Do not rewrite scaffold templates in this task.

## Common Rules
- Inspect the real scaffold structure, package files, and runtime markers before choosing a stack or rewrite direction.
- Confirm write permissions on the generated workspace before preparing a large patch set.
- Treat the generated workspace as a runtime artifact, not as a git repository. Do not rely on git status or git diff inside /srv/botweaver/generated/<run_key> as a source of truth.
- Optimize for a publishable static bundle from the start; the result must be safe to serve under /demo/<public_request_id>/.
- For current client-facing quick-start builds, default visible site copy, headings, buttons, and form labels to Russian unless the request explicitly demands another language.
- Before filling visible site data, create a niche-level business copy seed in apps/site/src/data/business-context.ts. The first demo should read like a real business in the requested niche, not like a scaffold description.
- Use typical niche-level services, products, or categories when the brief is incomplete, but do not invent exact prices, guarantees, addresses, reviews, awards, certificates, or deadlines.
- Do not use scaffold/meta copy as the main commercial message. Avoid phrases about cards, blocks, website structure, future editing, or convenient request scenarios when a direct business sentence would work.
- Prefer relative asset paths and avoid frontend dependencies on server-only runtime config such as /config.js.
- Use the local asset pool already included in frontend scaffolds before leaving the page without visuals.
- Use hero-desktop.webp for standard desktop/tablet hero composition and hero-mobile.webp for standard mobile hero composition first. For fullscreen-visual hero defaults, use fs-hero-default.webp on desktop and fs-hero-mobile-default.webp on mobile. If the scaffold still exposes the legacy pool, fall back to hero-1.webp and hero-mobile-1.webp. Use product-1.webp through product-8.webp, category-1.webp through category-4.webp, and gallery-1.webp through gallery-4.webp before falling back to image-1.webp, image-2.webp, and image-3.webp.
- Do not replace a usable local asset with a CSS-only pseudo-image when the pool already covers the need.
- Prefer the seeded public-demo baseline before manually copying asset folders around; public-demo/assets/demo and public-demo/data should already exist.
- Treat header, hero, key sections, CTA, and footer as the default quick-start shell for frontend surfaces.
- Respect the resolved hero layout from ui_contracts.hero_layout / visual context unless it breaks readability or mobile usability.
- Prefer light CSS polish such as smooth scrolling, opacity layers, transitions, and gentle reveal motion over heavy animation libraries.
- Avoid parallel file writes when assembling the final quick-start bundle; build the publishable output sequentially.
- Update docs/conductor/run_log.md with the main implementation choices before handing the project back to publish flow.
- The workflow owns the transition to `content_filling`; the agent only verifies `.botweaver/status.json` and records mismatches in docs/conductor/run_log.md.
- If `apply_patch` fails with bwrap / loopback / RTM_NEWADDR, use a safe script write inside the workspace, never broaden permissions, never run sudo or chmod on the whole project, never write outside the workspace, and log the fallback in docs/conductor/run_log.md.

## Contextual Rules
- Frontend-facing quick-start builds should include at least one visible image, a finished footer, and a mobile navigation toggle when the top nav has several links.
- For frontend visual/code quality, follow docs/AGENT_VISUAL_STANDARD.md.
- If the page uses in-page anchor navigation, enable smooth scrolling and keep section transitions polished but lightweight.
- Primary visible copy must be Russian: headings, hero text, CTA labels, section names, form labels, helper text, and footer copy should not default to English.
- For site work, verify the generated Astro scaffold with Node.js 22.12.0 or newer, then run cd apps/site, npm install, and npm run finalize in that order.
- `npm install` может молчать 20-60 секунд. Жди до 60 секунд и не прерывай команду раньше только из-за отсутствия вывода. Если через 60 секунд нет прогресса, проверь зависание/сеть/частично созданные зависимости и запиши это в `docs/conductor/run_log.md`.
- Treat npm run finalize as the Astro check/build step only. After finalize, from the Bot Weaver repository root run PYTHONPATH=apps/generator-worker:packages/shared/python python -m generator_worker.pipeline.validator --project-dir <generated_project_dir> --request-json <generated_project_dir>/docs/intake/request_*.json --write. If the validator CLI is unavailable, record that in docs/conductor/run_log.md.
- Treat shapePreset as the single source of truth for site geometry. Keep cards, buttons, forms, and media wrappers aligned to that preset, and do not scatter different radius systems across sections.
- Preserve the requested visual direction 'dark-lime-creative' while still keeping the quick-start build publish-safe and lightweight.
- Use stylePreset 'dark-lime-creative' as the primary visual system id. Legacy style is context only, not a separate source of truth.
- Use the selected color preset as the visual color boundary. Do not invent random colors. Keep buttons, forms, FAQ, cards, and focus states inside one token-driven color system.
- Preserve the requested typography preset 'geometric-display' through the site font token contract. Use a Russian-friendly font stack, keep body text readable, and do not introduce remote font dependencies unless the scaffold already supports them.
- Use derived_context.visual_tokens.css_variables as the primary source of truth for site CSS tokens. Apply those values before polishing individual sections, and do not invent parallel accent/font/radius systems.
