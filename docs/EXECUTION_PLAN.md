# Execution Plan

Request ID: 301f4328-cebc-4794-af62-8a083036c60d
Run key: local-services--301f4328
Status: `ready`
Mode: `demo_fill_execution_contract`
Active module: `demo_delivery`

This is the canonical execution order for the current Bot Weaver quick-start build stage.
The agent should follow this order and avoid ad hoc tactic changes unless the
preflight report exposes a real blocker.

## Preflight Snapshot
- Runtime status: `content_filling`
- Workspace: `/srv/botweaver/generated/local-services--301f4328`
- Preflight status: `ready_for_manual_execution`

### Writable Paths
- `.`: writable
- `docs`: writable
- `.botweaver`: writable
- `apps/site`: writable

### Publish Target Candidates
- `public-demo`: exists=True, index_html=False
- `dist`: exists=False, index_html=False
- `build`: exists=False, index_html=False
- `out`: exists=False, index_html=False
- `public_demo`: exists=False, index_html=False
- `demo`: exists=False, index_html=False
- `apps/site/dist`: exists=False, index_html=False
- `apps/site/build`: exists=False, index_html=False
- `apps/site/out`: exists=False, index_html=False
- `apps/miniapp/dist`: exists=False, index_html=False
- `apps/miniapp/build`: exists=False, index_html=False
- `.`: exists=True, index_html=False

## Visual Context
- Hero layout preference: Дерзкий креатив
- Hero instruction: Use a bold fullscreen visual hero: dark background, large visual focus, and a strong first impression that relies on imagery and contrast.


## Landing UX Defaults
- Default landing hero content is eyebrow, short title, short lead, primary CTA, and optional secondary CTA.
- Keep hero H1 and hero lead at 7 words or fewer.
- Put the standard visual cards block immediately after hero.
- Do not fill `hero.note` or add hero trust chips/badges under the CTA by default; move proof into a separate trust/proof section.
- For immersive hero pages, use the `.page-surface` / `.page-surface--overlap` / `.page-surface__inner` contract for the hero-to-content transition and keep it as rounded page background, not a clipped/cut edge.
- Keep lead forms compact and centered on desktop; topic/service/product selects should span the full form grid row.
- Do not create split form, left aside, checklist-aside, or `leadForm.layout` in the default quick-start landing.


## Site Verification
- Required Node.js: >=22.12.0
- Environment note: If node -v is lower than 22.12.0, fix the environment first; do not treat it as an Astro code issue.
- Finalize build check:
- `cd apps/site`
- `npm install`
- `npm install` может молчать 20-60 секунд. Жди до 60 секунд и не прерывай команду раньше только из-за отсутствия вывода. Если через 60 секунд нет прогресса, проверь зависание/сеть/частично созданные зависимости и запиши это в `docs/conductor/run_log.md`.
- `npm run finalize`
- Finalize note: npm run finalize is the Astro check/build step only. It does not replace the Bot Weaver publish/UI validator.
- Publish/UI validator gate:
- `cd /opt/projects/neuro-ceh && PYTHONPATH=/opt/projects/neuro-ceh/apps/generator-worker:/opt/projects/neuro-ceh/packages/shared/python python3 -m generator_worker.pipeline.validator --project-dir /srv/botweaver/generated/local-services--301f4328 --request-json /srv/botweaver/generated/local-services--301f4328/docs/intake/request_301f4328-cebc-4794-af62-8a083036c60d.json --write`
- Validator note: Validator source repo root is `/opt/projects/neuro-ceh` when BOTWEAVER_REPO_ROOT is configured. Generated workspace is under `/srv/botweaver/generated/<run_key>`. Do not run validator from the generated workspace under `/srv`. Run validator from the full source repo under `/opt/projects/neuro-ceh`. Keep `--project-dir` pointed at the generated workspace under `/srv`, and point `--request-json` at the exact `request_<request_id>.json` file.
- Artifact ownership: validator --write owns `.botweaver/pipeline/validation-report.json` and `docs/VALIDATION_RULES.md`. Do not update `.botweaver/pipeline/validation-report.json` or `docs/VALIDATION_RULES.md` by hand.
- CLI availability note: If `ModuleNotFoundError: No module named 'generator_worker'`, the agent is in the wrong repo root or PYTHONPATH is wrong. This is not an Astro/site error. If the validator CLI is unavailable in the current environment, record that in docs/conductor/run_log.md.




## preflight: Confirm scaffold shape and write access
- Objective: Read the scaffold as it exists, confirm writable paths, and decide the implementation mode from the real workspace rather than inventing a new stack.
- Allowed paths: .botweaver, docs, apps, packages/shared, infra
- Expected outputs: .botweaver/pipeline/preflight-report.json
- Stop conditions:
- Workspace write access is blocked in all relevant implementation paths.
- The scaffold shape conflicts with the resolved architecture profile and needs manager review.
## scaffold_inspection: Inspect scaffold boundaries before coding
- Objective: Inspect existing service folders, shared packages, docs, and runtime markers before touching implementation files.
- Allowed paths: apps, packages/shared, docs, .botweaver
- Expected outputs: docs/conductor/run_log.md
- Stop conditions:
- Implementation would require repurposing paths that belong to a different module without an explicit contract.
- The agent cannot identify a credible publish target for the current quick-start path.
## business_content_seed: Build business content seed
- Objective: Read docs/CLIENT_BRIEF.md and apps/site/src/data/client-brief.ts first, then resolve the business model in apps/site/src/data/business-context.ts before filling landing.ts or polishing the UI.
- Allowed paths: docs, apps/site/src/data, apps/site/src/pages, .botweaver
- Expected outputs: docs/CLIENT_BRIEF.md, docs/CONTENT_SEED_TASK.md, apps/site/src/data/client-brief.ts, apps/site/src/data/business-context.ts, apps/site/src/data/landing.ts, apps/site/src/data/site.ts
- Stop conditions:
- The seed step tries to invent facts that are not supported by the raw brief.
- The agent starts styling sections or rewriting Hero before business-context.ts is resolved.
## implementation: Build the first working version from the scaffold
- Objective: Write the quick-start build only inside the scaffold contract, using the compiled launch tasks as guidance.
- Allowed paths: docs, .botweaver, apps/site
- Expected outputs: .botweaver/status.json, apps/*, packages/shared/*, docs/conductor/run_log.md
- Stop conditions:
- The implementation requires a stack family switch that is not justified by the scaffold contract.
- The agent cannot keep the result aligned with the request while staying inside the allowed write scope.
## bundle_prepare: Prepare a publish-safe quick-start bundle
- Objective: Produce a visible bundle with `public-demo/index.html`, `public-demo/assets/demo/`, relative asset paths, and a structure that can survive /demo/<public_request_id>/.
- Allowed paths: public-demo, dist, build, out, public_demo, demo, apps/site, .botweaver
- Expected outputs: public-demo/index.html, public-demo/assets/demo/, .botweaver/status.json with status content_filling
- Stop conditions:
- The workspace still depends on root-relative assets or server-only /config.js paths.
- No publishable entrypoint exists after implementation.
## validation: Run quick-start publish-readiness validation
- Objective: After finalize, run the Bot Weaver validator as a separate publish/UI gate to confirm that the current workspace is publish-safe for the manager quick-start flow and does not advance to demo_ready early.
- Allowed paths: .botweaver, docs, apps
- Expected outputs: .botweaver/pipeline/validation-report.json, docs/VALIDATION_RULES.md
- Stop conditions:
- Validation reports blocking errors for publishable output, runtime gating, or broken asset paths.
## handoff_ready: Return a manager-ready handoff
- Objective: Leave the workspace in content_filling with implementation notes, publish target, and known limitations recorded for the manager.
- Allowed paths: docs/conductor, .botweaver, docs
- Expected outputs: docs/conductor/run_log.md, .botweaver/pipeline/execution-report.json
- Stop conditions:
- The workspace still has blocking validation errors.
- The publish target is unclear or undocumented for the manager.
