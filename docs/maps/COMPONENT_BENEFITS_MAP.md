# Benefits Component Map

## purpose

Describe the offer / benefits block so the agent can turn the main value
proposition into a readable section with a clear conversion path.

## source of truth

- Business truth: `docs/AGENT_TASK.md`, `docs/CLIENT_BRIEF.md`, `docs/CONTENT_SEED_TASK.md`, and `docs/intake/*`
- Execution truth: `docs/EXECUTION_PLAN.md`, `docs/AGENT_GUARDRAILS.md`, and `docs/AGENT_VISUAL_STANDARD.md`
- Reference truth: `docs/AGENT_LAUNCH.md`
- Validation truth: `docs/VALIDATION_RULES.md`
- Map entry: `docs/maps/MAP_INDEX.md`

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
benefits
  -> 3-6 benefits
  -> short headlines
  -> short explanations
  -> visual rhythm
  -> CTA connection
```

## required

- 3-6 benefits
- each benefit is tied to a client pain or gain
- short headlines
- clear descriptions
- visual rhythm: cards, list, icons, or grid
- block should support the CTA rather than distract from it

## behavior

- benefits should scan in 5-7 seconds
- copy should be compact and useful
- cards or list items should hold their shape on mobile
- the block should feel like part of the same story as hero and form
- if a benefit card needs a visual anchor, use the local demo asset pool before reaching for external imagery

## allowed inference

- Choose cards, list, or grid.
- Adapt the benefits to the niche.
- Add micro-icons if they do not break the style.
- Connect the block to the primary CTA.
- Prefer `product-1.webp` through `product-8.webp`, `category-1.webp` through `category-4.webp`, or `gallery-1.webp` through `gallery-4.webp` for compact card visuals. Use `image-1.webp`, `image-2.webp`, or `image-3.webp` only when the scaffold still exposes the legacy pool.

## denied inference

- Do not write “best on the market” without evidence.
- Do not invent guarantees.
- Do not add medical or legal promises.
- Do not make the cards too long.

## common failure cases

- benefits are too generic
- all cards feel the same and say nothing new
- text length breaks the grid
- mobile cards become too narrow
- there is no clear link to hero or form

## component/page acceptance

- the benefits are understandable in 5-7 seconds
- the grid does not break on mobile
- the block strengthens the offer instead of decorating the page

## status

- Map status: `draft`
- Page family: `landing`
- Niche: `local-services`
- CTA target: `send a request`

## agent notes

- If the brief is sparse, lead with pain-first benefits that stay honest.
