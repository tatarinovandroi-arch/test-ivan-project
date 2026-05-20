# Quick-Start Launch

This is a detailed compiled reference for the handoff. Start with `docs/AGENT_TASK.md`
and use this document after the main route is clear.

Request ID: 301f4328-cebc-4794-af62-8a083036c60d
Run key: local-services--301f4328
Status: `compiled`
Mode: `md_source_compilation`
Project type: `landing`
Profile: `site_only`
Enabled apps: site

## Frontend Asset Pool

- Site: `apps/site/public/assets/demo`
- Mini App: `Not applicable`
- Copy language: `ru`

## Request Summary
- Project type: landing
- Niche: local-services
- Niche detail: Not specified
- Ecommerce product category: Not specified
- Hero layout preference: Дерзкий креатив
- Site structure: home-only
- Presentation blocks: Преимущества (benefits), Отзывы (reviews), Кейсы / работы (cases), Этапы работы (steps)
- Business capabilities: Форма заявки (lead-form), FAQ / Ответы (faq)
- Future growth: demo-only
- Style: dark-lime-creative
- Style preset: dark-lime-creative
- Color preset: lime-electric
- Shape preset: sharp
- Font preset: geometric-display
- Comment: Not specified

## Product Composition
- Project type: landing
- Preset: landing_locked
- Pages:
  - Главная
- Accent blocks:
  - Преимущества (benefits)
  - Отзывы (reviews)
  - Кейсы / работы (cases)
  - Этапы работы (steps)
- Base blocks:
  - Header
  - Footer
  - FAQ
  - Lead form
  - Contacts
- Catalog card contract: Not applicable

## Visual Context
- Hero layout preference: Дерзкий креатив
- Hero instruction: Use a bold fullscreen visual hero: dark background, large visual focus, and a strong first impression that relies on imagery and contrast.


## UI Contracts v1
- `ui_contracts` in `.botweaver/pipeline/spec.json` and `.botweaver/pipeline/launch-instruction.json` is the machine-readable UI contract layer between metadata / visual context, scaffold, validator, and agent handoff.
- Resolved contract: `drawer_position = left`, `burger_animation = cross`, `faq_icon = css-line`, `card_grid_balance = count-4-compact`, `hero_layout = fullscreen-visual`.
- Current scaffold/validator v1 canonical support is `drawer_position = left`, `burger_animation = cross`, `faq_icon = css-line`, `card_grid_balance = count-4-compact`, while `hero_layout` follows the resolved contract / visual context.
- Legacy `count-4-2x2` input is normalized to `count-4-compact` and should not be treated as the canonical output wording.
- Future-reserved values must not be implemented ad hoc until scaffold and validator explicitly support them. Keep the output v1-safe and record the limitation in `docs/conductor/run_log.md` if needed.




## Site Map Guidance
- For site work, use `docs/maps/MAP_INDEX.md` after the primary route is clear.


## Site Source Contract
- Site source lives in `apps/site/src`.
- Use Astro components and `src/data/*.ts` files as the editable site source.
- Treat `apps/site/src/data/client-brief.ts` as the raw request layer.
- Resolve business meaning first in `apps/site/src/data/business-context.ts`.
- Fill visible landing copy in `apps/site/src/data/landing.ts` only after the business context is built.
- Refine `apps/site/src/data/site.ts` after the business seed is resolved; do not let site.ts become a server-authored business copy generator.
- Do not create hand-written HTML source pages for the site.
- HTML in `public-demo`, `dist`, `build`, or `out` is publish output only.
- If Astro build is unavailable, record it in `docs/conductor/run_log.md` and keep the source Astro.

## Business Content Seed
- Start with `docs/CLIENT_BRIEF.md` and `docs/CONTENT_SEED_TASK.md`.
- Build business context before styling sections or polishing Hero copy.
- Keep business copy simpler, more neutral, and more concrete across all quick-start frontend sites.
- If the brief is incomplete, stay honest and general instead of inventing specifics.
- Do not ship owner-facing prompts such as `Расскажите о проекте` or `Что можно показать на сайте`.

## Landing UX Defaults
- Default landing hero content is eyebrow, short title, short lead, primary CTA, and optional secondary CTA.
- Keep hero H1 and hero lead at 7 words or fewer.
- For landing pages, put the standard visual cards block immediately after hero.
- For catalog/ecommerce home pages, a catalog preview immediately after hero is valid and you must not add a second visual-cards/catalog block just to satisfy validator.
- Do not fill `hero.note` or add hero trust chips/badges under the CTA by default; move proof into a separate trust/proof section.
- For immersive hero pages, keep the hero full-bleed and use the `.page-surface` / `.page-surface--overlap` / `.page-surface__inner` contract for the hero-to-content transition. Keep it as normal page background, not a glass/card/sheet wrapper.
- On mobile, immersive hero must not inherit top padding from general `.hero` spacing.
- Keep lead forms compact and centered on desktop unless the brief clearly needs a full-width operational form.
- If the lead form has a topic/service/product select, make that select field span the full form grid row.
- Do not create split form, left aside, checklist-aside, or `leadForm.layout` in the default quick-start landing.

## Site Verification
- Run `cd apps/site`, `npm install`, and `npm run finalize` first.
- `npm install` может молчать 20-60 секунд. Жди до 60 секунд и не прерывай команду раньше только из-за отсутствия вывода. Если через 60 секунд нет прогресса, проверь зависание/сеть/частично созданные зависимости и запиши это в `docs/conductor/run_log.md`.
- `npm run finalize` is the Astro check/build step only. It does not replace the Bot Weaver publish/UI validator.
- After finalize, from the Bot Weaver repository root run:
- `cd /opt/projects/neuro-ceh && PYTHONPATH=/opt/projects/neuro-ceh/apps/generator-worker:/opt/projects/neuro-ceh/packages/shared/python python3 -m generator_worker.pipeline.validator --project-dir <generated_project_dir> --request-json <generated_project_dir>/docs/intake/request_301f4328-cebc-4794-af62-8a083036c60d.json --write`
- Validator source repo root is `/opt/projects/neuro-ceh` when BOTWEAVER_REPO_ROOT is configured. Generated workspace is under `/srv/botweaver/generated/<run_key>`. Do not run validator from the generated workspace under `/srv`. Run validator from the full source repo under `/opt/projects/neuro-ceh`. Keep `--project-dir` pointed at the generated workspace under `/srv`, and point `--request-json` at the exact `request_<request_id>.json` file.
- validator --write owns `.botweaver/pipeline/validation-report.json` and `docs/VALIDATION_RULES.md`. Do not update `.botweaver/pipeline/validation-report.json` or `docs/VALIDATION_RULES.md` by hand.
- If `ModuleNotFoundError: No module named 'generator_worker'`, the agent is in the wrong repo root or PYTHONPATH is wrong. This is not an Astro/site error. If the validator CLI is unavailable in the current environment, record that in docs/conductor/run_log.md.


## Agent Focus

Create a focused landing page demo with strong conversion blocks and room for future growth without overbuilding the first version.

## Source Documents
- `/workspace/tools/standards-kit/demo_fill_launch_base.md` (launch_base)
- `/workspace/tools/standards-kit/profiles/site_only.md` (profile)
- `/workspace/tools/standards-kit/request_types/landing.md` (request_type)
- `/workspace/tools/standards-kit/docs/conductor/workflow.md` (workflow)
- `/workspace/tools/standards-kit/docs/conductor/security_policy.md` (security)

## Tasks

### project-structure: Inspect the scaffold and confirm module boundaries
- Role: conductor
- Objective: Confirm that the generated workspace, architecture profile, and service boundaries match the request before deep implementation starts.
- Depends on: none
- Target paths: apps, packages/shared, infra, docs

### business-content-seed: Build business content seed
- Role: content-strategy
- Objective: Read the raw client brief first, resolve the business model in business-context.ts, then fill landing.ts and adjust site.ts before UI polish.
- Depends on: project-structure
- Target paths: docs/CLIENT_BRIEF.md, docs/CONTENT_SEED_TASK.md, apps/site/src/data/client-brief.ts, apps/site/src/data/business-context.ts, apps/site/src/data/landing.ts, apps/site/src/data/site.ts

### site-implementation: Build the first working version of the public site surface
- Role: frontend
- Objective: Turn the scaffold into a visible quick-start build with real sections, finished navigation, at least one strong visual asset, and a publishable entrypoint.
- Depends on: project-structure, business-content-seed
- Target paths: apps/site, packages/shared/typescript, infra

### quick-start-content: Fill the visible quick-start path with real product content
- Role: content-and-integration
- Objective: Turn the scaffold into a coherent first working version that reflects the niche, style, structure, and business capabilities from the intake.
- Depends on: business-content-seed, site-implementation
- Target paths: apps, docs, packages/shared

### publish-readiness: Prepare the quick-start build for publish flow
- Role: runtime-readiness
- Objective: Leave the workspace in a state where the manager can run temp quick-start deploy after manual review.
- Depends on: quick-start-content
- Target paths: dist, apps, docs/conductor, .botweaver

## Machine-Readable Contract

- `.botweaver/pipeline/launch-instruction.json` is the compiled machine/reference artifact for this handoff; the primary route starts at `docs/AGENT_TASK.md`.
