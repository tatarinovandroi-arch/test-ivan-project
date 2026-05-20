# FAQ Component Map

## purpose

Describe a reusable FAQ block so the agent can answer common objections without
adding a separate custom HTML pattern for every page.

## source of truth

- Business truth: `docs/AGENT_TASK.md`, `docs/CLIENT_BRIEF.md`, `docs/CONTENT_SEED_TASK.md`, and `docs/intake/*`
- Execution truth: `docs/EXECUTION_PLAN.md`, `docs/AGENT_GUARDRAILS.md`, and `docs/AGENT_VISUAL_STANDARD.md`
- Reference truth: `docs/AGENT_LAUNCH.md`
- Validation truth: `docs/VALIDATION_RULES.md`
- Map entry: `docs/maps/MAP_INDEX.md`
- UI contract truth: `.botweaver/pipeline/spec.json` and `.botweaver/pipeline/launch-instruction.json` via `ui_contracts.faq_icon`.
- FAQ source lives in `apps/site/src/components/Faq.astro`; FAQ items belong in `src/data/site.ts` or `src/data/pages.ts`.
- Landing starter FAQ lives in `apps/site/src/components/Faq.astro` with items in `src/data/landing.ts`.

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
faq
  -> question
  -> answer
  -> reusable disclosure pattern
  -> mobile-safe spacing
```

## required

- 3-6 common questions or objections
- concise answers
- reusable disclosure pattern
- native `<details>/<summary>` by default
- accessible toggle states if disclosure is interactive
- visible focus states
- line-based disclosure icon instead of raw text glyphs
- light open/close polish with CSS transitions or animation evidence
- data source: `src/data/site.ts` or `src/data/pages.ts`
- FAQ icon must follow `ui_contracts.faq_icon`; scaffold/validator v1 currently supports only `css-line`.

## behavior

- questions should be easy to scan
- answers should be short enough to keep the page moving
- the pattern should work on mobile without clipping or overflow
- open/close behavior should feel polished rather than abrupt
- disclosure icon should feel intentional and not look like a pasted text character
- future-reserved FAQ icon names such as `svg` or `chevron` are not a signal to invent new icon systems in v1
- if the block needs defaults, keep them honest and specific to the request

## allowed inference

- Use native `<details>` / `<summary>` by default or a small accessible accordion only when needed.
- Keep the answers specific to the request and business niche.
- Add a light CTA bridge after the FAQ if it helps conversion.
- Draw the disclosure icon with CSS lines, for example through `summary::after` with two `linear-gradient` strokes or an equivalent line-based icon treatment, because v1 canonical support is `css-line`.
- Add lightweight CSS polish such as `grid-template-rows`, `max-height`, `opacity`, `transform`, marker rotation, or summary/background transitions.

## denied inference

- Do not turn FAQ into a long marketing article.
- Do not invent guarantees or hidden process claims.
- Do not make the block depend on a custom backend.
- Do not use a raw text disclosure marker such as `content: "+"`.
- Do not implement `svg` or `chevron` FAQ icon variants in scaffold/validator v1.
- Do not ship a raw disclosure block with no focus states or no motion/polish at all.
- Do not add a heavy JS accordion or animation library for the default scaffold.

## common failure cases

- answers are too long
- accordion controls are not accessible
- disclosure icon is a raw `+` text glyph
- FAQ becomes a text dump
- mobile spacing feels cramped
- FAQ opens abruptly with no visual polish

## component/page acceptance

- The FAQ block is reusable.
- Questions and answers are clear.
- The block does not feel like a dumping ground for missing content.
- The FAQ uses native disclosure, the v1 `css-line` icon contract, and lightweight CSS polish.

## status

- Map status: `draft`
- Page family: `landing`
- CTA target: `send a request`

## agent notes

- Keep the FAQ short, honest, and easy to reuse on any site page.
