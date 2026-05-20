# Lead Form Component Map

## purpose

Describe a site lead form so the agent can create a polished conversion block
without inventing backend behavior.

## source of truth

- Business truth: `docs/AGENT_TASK.md`, `docs/CLIENT_BRIEF.md`, `docs/CONTENT_SEED_TASK.md`, and `docs/intake/*`
- Execution truth: `docs/EXECUTION_PLAN.md`, `docs/AGENT_GUARDRAILS.md`, and `docs/AGENT_VISUAL_STANDARD.md`
- Reference truth: `docs/AGENT_LAUNCH.md`
- Validation truth: `docs/VALIDATION_RULES.md`
- Map entry: `docs/maps/MAP_INDEX.md`
- Shared lead form source lives in `apps/site/src/components/LeadForm.astro`; form copy and labels should come from `src/data/site.ts`.
- Landing starter lead form lives in `apps/site/src/components/LeadForm.astro` with copy from `src/data/landing.ts`.

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
form
  -> compact centered form by default
  -> fields
  -> full-row topic/select field when present
  -> submit
  -> privacy / consent microcopy
  -> success / error / disabled states
```

## required

- Prefer a compact centered form by default.
- Generated site and landing builds should keep the form card around 760-860px wide on desktop unless the brief clearly needs a wider operational form.
- The form section may use a wide background/wrapper, but the title/lead rhythm and form card should stay aligned to the compact form width.
- Default quick-start landing does not expose a split form layout.
- Do not add `lead-form__split`, `lead-form__aside`, checklist-aside markup, or `leadForm.layout` in generated landing data.
- Split form requires a future explicit metadata field and a separate contract update before agents may enable it.
- name or contact field
- service, product, or topic select field if useful
- message or comment field if useful
- submit button
- privacy or consent microcopy if relevant
- success, error, and disabled state, even if local-only
- form goal: `send a request`
- The component should remain reusable and mobile-safe across all site pages.

## behavior

- labels or clear placeholders
- fields aligned
- avoid the weak pattern of short copy on the left and a large form on the right
- keep the form compact and centered on desktop
- topic/select fields should span the full form grid row with a class such as `.lead-form__field--topic`
- native select should stay system-default unless a custom select treatment is explicitly requested
- do not add custom chevron background-image to default selects
- inputs have consistent height, radius, and padding
- focus state is visible
- mobile width is 100%
- tap targets are comfortably sized
- no horizontal overflow
- success and error states should feel local and immediate when no backend exists

## allowed inference

- Use a select, radio cards, or a simple input depending on the context.
- If a select is used for topic, service, or product interest, make only that field full-row on desktop.
- Add local state if needed for the demo.
- Create a local form component if it keeps the page cleaner.
- Add basic client-side required fields.
- Show a non-network demo success message if the scaffold has no backend.

## denied inference

- Do not add real payment.
- Do not invent a backend endpoint.
- Do not send data externally.
- Do not collect sensitive data unnecessarily.
- Do not promise production delivery if this is only a demo scaffold.

## common failure cases

- select chevron shifts to the right
- select text overlaps the chevron
- topic/select field is squeezed into one desktop column
- different heights input/select/button
- no focus state
- mobile overflow
- submit button looks inactive or has no state

## component/page acceptance

- The form is visually polished.
- The desktop form width is compact and centered unless a wider form is explicitly justified.
- Topic/select field spans the full row while ordinary short fields may remain two-column on desktop.
- Select chevron and field alignment are correct.
- Submit state works visually.
- No broken mobile layout.
- The form matches the business goal.

## status

- Map status: `draft`

## agent notes

- Keep validation, success feedback, compact desktop width, and mobile spacing aligned with the rest of the page.
