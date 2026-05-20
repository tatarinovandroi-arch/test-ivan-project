# Manual Execution Brief

Request ID: 301f4328-cebc-4794-af62-8a083036c60d
Run key: local-services--301f4328
Workspace: /srv/botweaver/generated/local-services--301f4328
Pipeline status: `awaiting_manual_execution`

This is a manager/handoff summary, not the main agent entrypoint. Start with
`docs/AGENT_TASK.md`, then follow `docs/EXECUTION_PLAN.md`. Use
`docs/AGENT_LAUNCH.md` only as the detailed compiled reference when you need the
bundled task breakdown.

## Primary Documents For Agent
1. `docs/AGENT_TASK.md`
2. `docs/CLIENT_BRIEF.md`
3. `docs/CONTENT_SEED_TASK.md`
4. `docs/EXECUTION_PLAN.md`
5. `docs/AGENT_GUARDRAILS.md`
6. `docs/AGENT_VISUAL_STANDARD.md`
7. `docs/VALIDATION_RULES.md`

## Reference Documents
- `.botweaver/pipeline/execution-plan.json`
- `.botweaver/pipeline/launch-instruction.json`
- `.botweaver/pipeline/preflight-report.json`
- `.botweaver/pipeline/validation-report.json`
- `docs/intake/request_*.json`
- `docs/intake/request_*.md`
- `docs/AGENT_LAUNCH.md`
- `apps/site/src/data/client-brief.ts`
- `apps/site/src/data/business-context.ts`
- `apps/site/src/data/landing.ts`
- `apps/site/src/data/site.ts`

## Preflight Before Work
- Open the generated workspace and inspect the actual files before choosing an implementation strategy.
- Read .botweaver/pipeline/preflight-report.json and confirm writable implementation paths before preparing a patch set.
- Do not spend time on git status inside the generated workspace; treat docs/* and .botweaver/pipeline/* as the local source of truth.
- Read the canonical intake JSON/MD and compare it with the manager Telegram card.
- Read docs/AGENT_TASK.md, docs/CLIENT_BRIEF.md, docs/CONTENT_SEED_TASK.md, docs/EXECUTION_PLAN.md, docs/AGENT_GUARDRAILS.md, docs/AGENT_VISUAL_STANDARD.md, and docs/VALIDATION_RULES.md before changing implementation scope.
- For site work, build the business content seed first: use apps/site/src/data/client-brief.ts as the raw source, fill apps/site/src/data/business-context.ts including copySeed, then fill apps/site/src/data/landing.ts, catalog.ts, pages.ts, and adjust apps/site/src/data/site.ts if needed. Do not start by writing scaffold/meta copy into landing.ts.
- Confirm the project will produce public-demo/index.html as the publish-ready entrypoint; dist/ is only intermediate Astro build output.
- Treat npm run finalize as the Astro check/build step only. After finalize, from the Bot Weaver repository root run PYTHONPATH=apps/generator-worker:packages/shared/python python -m generator_worker.pipeline.validator --project-dir <generated_project_dir> --request-json <generated_project_dir>/docs/intake/request_*.json --write.
- If the validator CLI is unavailable in the current environment, record that limitation in docs/conductor/run_log.md.
- The workflow owns the transition to content_filling; the agent only verifies .botweaver/status.json and records mismatches in docs/conductor/run_log.md.
- If apply_patch fails with bwrap / loopback / RTM_NEWADDR, use a safe script write inside the workspace, never broaden permissions, never run sudo or chmod on the whole project, never write outside the workspace, and record the fallback in docs/conductor/run_log.md.

## Execution Order
- Follow `docs/EXECUTION_PLAN.md` step by step.
- Use `.botweaver/pipeline/preflight-report.json` as the first source of truth for write access and publish target candidates.

## Definition Of Done For Manual Fill
- The quick-start build has real visible content, not only scaffold files or docs.
- Business meaning and copySeed are resolved in apps/site/src/data/business-context.ts before visual polish or page data filling starts.
- The final publish-ready bundle is available at public-demo/index.html.
- Primary user path from the request can be reviewed in a browser.
- Frontend-facing quick-start builds include at least one visible visual asset and a complete page shell with footer.
- If a header nav links to in-page sections, smooth scrolling is enabled and mobile navigation is not left raw on small screens.
- Relative asset paths work under the /demo/<public_request_id>/ prefix.
- Broken buttons, empty critical sections, and obvious placeholder-only blocks are removed or documented.
- .botweaver/pipeline/validation-report.json has no blocking errors for publish readiness and is refreshed by validator --write, not by hand edits.
- docs/conductor/run_log.md records the implementation decisions and known limitations.
- .botweaver/status.json remains content_filling; demo_ready is written only by successful manager deploy.

## Handoff Back To Manager
- Tell the manager what was filled and where the publishable entrypoint is located.
- List known limitations that must stay paid follow-up work.
- Do not mark the request done directly; the manager must press Publish Quick-Start Build.

## Publish Gate
- Manager action DONE runs temp quick-start deploy.
- Only successful deploy can move DB lifecycle to done and client public status to demo_ready.
- Failed deploy keeps the request out of done/demo_ready.
