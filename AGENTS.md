# AGENTS.md

## Project Context

- Name: local-services
- Active services: site

## Repository Boundaries

- `apps/` contains only the enabled services
- `packages/shared` contains shared contracts and reusable helpers
- `infra` contains docker, proxy, and deploy assets
- `scripts` contains explicit helper scripts
- runtime data does not belong in the repository root

## Core Rules

1. Do not create services outside the declared active list: site.
2. Do not place new business code in the repository root.
3. Keep configuration environment-driven.
4. Do not duplicate business logic across API, bot, site, or Mini App.
5. Put shared schemas and contracts into `packages/shared`.
6. Update `.env.example`, `README.md`, and the local verification commands when runtime requirements change.

## Conductor Rules

- Default autonomy level is `L2`.
- Read `docs/conductor/workflow.md` before implementation work.
- Use `docs/conductor/task_template.md` for L2+ tasks.
- Do not edit files until the implementation plan and boundaries are approved by a human.

## Delivery Rule

Treat the first delivery as a bounded demo or initial implementation slice.

Do not silently fake:

- production integrations
- hidden admin systems
- complex role systems
- paid follow-up work that is not actually implemented

## Definition Of Done

- imports and paths are valid
- config is externalized
- docs are updated when behavior changes
- conductor task artifacts are updated for L2+ work
- no secrets are committed
