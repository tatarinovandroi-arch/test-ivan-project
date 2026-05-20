# Trust / Proof Component Map

## purpose

Describe the trust block so the agent can build a safe, honest proof surface
without inventing testimonials or business facts.

## source of truth

- Business truth: `docs/AGENT_TASK.md`, `docs/CLIENT_BRIEF.md`, `docs/CONTENT_SEED_TASK.md`, and `docs/intake/*`
- Execution truth: `docs/EXECUTION_PLAN.md`, `docs/AGENT_GUARDRAILS.md`, and `docs/AGENT_VISUAL_STANDARD.md`
- Reference truth: `docs/AGENT_LAUNCH.md`
- Validation truth: `docs/VALIDATION_RULES.md`
- Map entry: `docs/maps/MAP_INDEX.md`
- Trust/proof source lives in `apps/site/src/components/TrustProof.astro`; the backing data belongs in `src/data/site.ts` or a dedicated data file.
- Landing starter trust/proof lives in `apps/site/src/components/TrustProof.astro` with data in `src/data/landing.ts`.

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
trust / proof
  -> trust cues
  -> process
  -> gallery / photo / certificates
  -> objections
  -> CTA bridge
```

## required

- trust cues when the brief provides them
- safe wording
- real or neutral evidence
- an option to use process, photos, gallery, certificates, principles, or FAQ-style objections
- the block should connect back to the CTA
- Keep the trust section reusable and prefer neutral proof over fake testimonials when no real reviews are available.

## behavior

- the block should raise confidence without sounding inflated
- if there are no reviews, the section should still feel purposeful
- the block should use honest proof or a safe alternative
- any visual proof should remain readable on mobile
- if visual proof is needed, use the local demo asset pool before searching external sources

## allowed inference

- Replace reviews with “why people trust us” when reviews do not exist.
- Use a process explanation instead of fake proof.
- Add small badges without numbers when that is safer.
- Connect the trust block to the CTA or contact path.
- Prefer neutral proof language over inflated lines such as `премиальный опыт`, `идеальный результат`, or `экспертный подход` when the brief does not confirm them.
- Prefer `gallery-1.webp` through `gallery-4.webp`, `category-1.webp` through `category-4.webp`, or `product-1.webp` through `product-8.webp` as neutral local visuals when the proof block needs a readable image or gallery-like accent. Use `image-1.webp`, `image-2.webp`, or `image-3.webp` only as legacy fallback assets.

## denied inference

- Do not invent reviews.
- Do not invent ratings.
- Do not invent clients or brands.
- Do not write “1000+ clients” without evidence.
- Do not use fake awards.

## common failure cases

- fake reviews
- fake numbers
- the block looks like a placeholder
- there is too much trust language without evidence
- the proof is not tied to the niche

## component/page acceptance

- the block increases trust honestly
- no invented data appears
- if proof is missing, the block uses a safe alternative

## status

- Map status: `draft`
- Page family: `landing`
- Niche: `local-services`
- CTA target: `send a request`

## agent notes

- When the brief does not supply proof, prefer process and clarity over fake social proof.
