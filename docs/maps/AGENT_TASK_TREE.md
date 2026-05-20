# Agent Task Tree

## purpose

Working execution tree for a site task. This file tracks branch status and
short implementation notes. It does not replace `AGENT_TASK.md`,
`CLIENT_BRIEF.md`, `CONTENT_SEED_TASK.md`, `AGENT_LAUNCH.md`,
`EXECUTION_PLAN.md`, or `VALIDATION_RULES.md`.

## source of truth

- Business truth: `docs/AGENT_TASK.md`, `docs/CLIENT_BRIEF.md`, `docs/CONTENT_SEED_TASK.md`, and `docs/intake/*`
- Execution truth: `docs/EXECUTION_PLAN.md`, `docs/AGENT_GUARDRAILS.md`, and `docs/AGENT_VISUAL_STANDARD.md`
- Reference truth: `docs/AGENT_LAUNCH.md`
- Validation truth: `docs/VALIDATION_RULES.md`
- Map entry: `docs/maps/MAP_INDEX.md`
- Status log: `docs/conductor/run_log.md`
- Style direction: `docs/maps/STYLE_DIRECTION_MAP.md`

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

## map-driven cycle

Map -> Expand -> Implement -> Mark -> Report

## status legend

- todo
- doing
- done
- blocked
- skipped

## task tree

```text
site scaffold
  -> site structure [done]
  -> style direction [done]
  -> home page [done]
     -> header [done]
        -> desktop header [done]
        -> mobile compact header [done]
        -> burger behavior [done]
        -> drawer layout [done]
        -> drawer contrast [done]
        -> drawer CTA width [done]
        -> no horizontal overflow [done]
     -> hero [done]
     -> benefits / offer [done]
     -> products or services preview [done]
     -> trust / proof [done]
     -> lead form [done]
     -> footer [done]
```

## allowed updates

- status: todo / doing / done / blocked / skipped
- implementation note
- files touched
- blocked reason

## denied updates

- changing component requirements
- weakening acceptance criteria
- rewriting maps to fit incomplete code
- changing business intent

## allowed inference

- The agent may detail the current branch.
- The agent may choose the local technical implementation inside scope.
- The agent may add accessibility, focus, and mobile details.
- The agent may create local site components if that simplifies the code.

## denied inference

- Do not expand business scope.
- Do not add backend, API, payment, auth, or cart work when the brief does not require it.
- Do not invent reviews, awards, numbers, or real case studies.
- Do not touch deploy, infra, or SEO.

## reporting rule

After finishing each branch, update the status and leave a short implementation note:

- what was implemented
- files touched
- status: done / blocked / skipped
- if blocked: why

Example:

```text
header [done]
implementation note:
- Created responsive header with desktop nav and mobile drawer.
- Files touched: src/components/Header.*
- Burger closes on overlay, Esc, and nav link click.
```

## status

- Map status: `done`
- Project type: `landing`
- Page family: `landing`
- Site structure: `home-only`

## agent notes

- If a branch is too general, expand it in place before coding.
- Header work should be tracked on the listed sub-branches, not collapsed into a single `header done` note.
- Keep branch notes short and specific.
