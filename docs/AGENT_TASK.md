# Bot Weaver Agent Task

Request ID: 301f4328-cebc-4794-af62-8a083036c60d
Run key: local-services--301f4328
Workspace: /srv/botweaver/generated/local-services--301f4328

## Request Summary
- Project type: landing
- Niche: local-services
- Niche detail: Not specified
- Ecommerce product category: Not specified
- Hero layout preference: fullscreen-visual
- Site structure: home-only
- Presentation blocks: benefits, reviews, cases, steps
- Business capabilities: lead-form, faq
- Future growth: demo-only
- Style: dark-lime-creative
- Shape preset: sharp
- Comment: Not specified
- Architecture profile: site_only
- Enabled apps: site


## Site Source Contract
- Site source lives in `apps/site/src`.
- Use Astro components and `src/data/*.ts` files as the editable site source.
- Keep the raw brief in `apps/site/src/data/client-brief.ts`.
- Build business meaning and `copySeed` first in `apps/site/src/data/business-context.ts`.
- Use `copySeed` as the language bank for Hero, catalog, benefits, FAQ, CTA variants, and supporting pages.
- Fill visible landing copy in `apps/site/src/data/landing.ts` only after `business-context.ts` is resolved.
- Fill `apps/site/src/data/catalog.ts` and `apps/site/src/data/pages.ts` from the same business/copy seed when those files exist.
- Adjust `apps/site/src/data/site.ts` only after the business context is resolved.
- Do not create hand-written HTML source pages for the site.
- HTML in `public-demo`, `dist`, `build`, or `out` is publish output only.
- The publish-ready handoff is `public-demo/index.html`; `dist/` is the intermediate Astro build output.
- If Astro build is unavailable, record it in `docs/conductor/run_log.md` and keep the source Astro.

## Business Content Seed
- Read `docs/CLIENT_BRIEF.md` and `apps/site/src/data/client-brief.ts` before writing visible copy.
- Start with `docs/CONTENT_SEED_TASK.md`.
- Build `business-context.ts` before styling sections or rewriting Hero copy.
- Do not ship owner-facing prompts like `Расскажите о проекте` or `Что можно показать на сайте`.

## Site Verification
- Required Node.js: >=22.12.0
- If `node -v` is lower than `22.12.0`, fix the environment first; do not treat it as an Astro code issue.
- Run the finalize build check in order:
  1. `cd apps/site`
  2. `npm install`
  - `npm install` может молчать 20-60 секунд. Жди до 60 секунд и не прерывай команду раньше только из-за отсутствия вывода. Если через 60 секунд нет прогресса, проверь зависание/сеть/частично созданные зависимости и запиши это в `docs/conductor/run_log.md`.
  3. `npm run finalize`
- `npm run finalize` is the Astro check/build step only. It does not replace the Bot Weaver publish/UI validator.
- After finalize, from the Bot Weaver repository root run the validator gate:
  1. `cd <botweaver_repo_root>`
  2. `PYTHONPATH=apps/generator-worker:packages/shared/python python -m generator_worker.pipeline.validator --project-dir /srv/botweaver/generated/local-services--301f4328 --request-json /srv/botweaver/generated/local-services--301f4328/docs/intake/request_*.json --write`
- `validator --write` updates `.botweaver/pipeline/validation-report.json` and `docs/VALIDATION_RULES.md`.
- Do not edit `.botweaver/pipeline/validation-report.json` or `docs/VALIDATION_RULES.md` by hand.
- If the validator CLI is unavailable in the current environment, record that in `docs/conductor/run_log.md`.
- Do not treat `make dev` or `docker compose` as the primary local path unless Dockerfiles are added later.


## Runtime Status Contract
- Check `.botweaver/status.json` before editing files.
- The workflow owns the transition to `content_filling`; the agent only verifies `.botweaver/status.json` and records mismatches in `docs/conductor/run_log.md`.
- If the workspace still says `scaffold_ready`, do not fix it silently. Record the mismatch in `docs/conductor/run_log.md`.
- Continue only if the handoff docs confirm the task has already been handed off.
- Do not write `demo_ready` manually.

## Operational Fallback
- If `apply_patch` fails with `bwrap`, `loopback`, or `RTM_NEWADDR`, use a safe script write inside the workspace.
- Do not broaden permissions.
- Do not run `sudo` or `chmod` on the whole project.
- Do not write outside the workspace.
- Record the fallback in `docs/conductor/run_log.md`.

## Start Here / Agent Route
Start from this document. Then follow the route in order and use the map layer only for site work.

1. `docs/AGENT_TASK.md`
2. `docs/CLIENT_BRIEF.md`
3. `docs/CONTENT_SEED_TASK.md`
4. `docs/EXECUTION_PLAN.md`
5. `docs/AGENT_GUARDRAILS.md`
6. `docs/AGENT_VISUAL_STANDARD.md`
7. `docs/VALIDATION_RULES.md`
8. For site work, open `docs/maps/MAP_INDEX.md`
9. Use `docs/maps/AGENT_TASK_TREE.md` as the branch checklist
10. Build business content seed before CSS or Hero polish
11. Open the needed component map before coding a component
12. Implement only inside the allowed paths from the brief and maps
13. Update `docs/maps/AGENT_TASK_TREE.md` and `docs/conductor/run_log.md`
14. Prepare the publish bundle before handoff
15. Run or re-read validation only after implementation and `bundle_prepare`

Later reference:
- `docs/AGENT_LAUNCH.md` is the detailed compiled reference for the handoff; do not start there.

## Intake / Request Docs
- Intake/request docs are the client source brief.
- Do not rewrite the client brief to fit implementation.
- Treat the intake as business truth.
- If the brief and code disagree, record the gap in `docs/conductor/run_log.md` or `docs/maps/AGENT_TASK_TREE.md`.

## Working Rules
- Maps are implementation guidance for this scaffold.
- Do not create a new project; work inside this scaffold.
- Keep implementation notes short and concrete.
