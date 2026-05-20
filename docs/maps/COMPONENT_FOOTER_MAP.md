# Footer Component Map

## purpose

Describe the footer so the agent can finish the page cleanly with navigation,
contact, and closing action cues.

## source of truth

- Business truth: `docs/AGENT_TASK.md`, `docs/CLIENT_BRIEF.md`, `docs/CONTENT_SEED_TASK.md`, and `docs/intake/*`
- Execution truth: `docs/EXECUTION_PLAN.md`, `docs/AGENT_GUARDRAILS.md`, and `docs/AGENT_VISUAL_STANDARD.md`
- Reference truth: `docs/AGENT_LAUNCH.md`
- Validation truth: `docs/VALIDATION_RULES.md`
- Map entry: `docs/maps/MAP_INDEX.md`
- Shared footer source lives in `apps/site/src/components/Footer.astro`; footer links and contacts should come from `src/data/site.ts`.

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
footer
  -> brand name
  -> short navigation
  -> contacts / communication path
  -> compact text link or contact action
  -> legal / privacy placeholder
```

## required

- brand name
- short navigation
- contacts or a way to contact
- compact text link or contact action
- legal/privacy placeholder if needed
- links must not point nowhere without a clear note
- Keep the footer calm, textual, and reusable across pages without adding a hero-style CTA.

## behavior

- the footer should close the page cleanly
- contact and navigation cues should be easy to scan
- on mobile the layout should stay tidy and not break into unreadable columns
- footer should stay calm and should not look like a second hero block
- footer should not contain large hero-style CTA buttons
- footer is for navigation, contacts, social links/icons, and short brand/legal notes
- if CTA is needed, place it before the footer as a separate final CTA section, not inside the footer
- allowed footer actions: compact text link, Telegram, Instagram, Email, phone/contact placeholder if provided

## allowed inference

- Add a simple column structure.
- Add social or contact placeholders only when they are relevant.
- Use anchors for one-page sites.
- Keep the footer CTA-free unless it is a compact text link.

## denied inference

- Do not invent real addresses or phone numbers.
- Do not add legal promises.
- Do not add unnecessary extra pages.
- Do not create junk links.
- Do not repeat a large `Запросить подбор` or `Оставить заявку` button in the footer.
- Do not turn the footer into a hero or lead block.

## common failure cases

- footer is empty
- footer is overloaded
- contact info is invented
- links are broken
- mobile columns collapse badly
- footer repeats a large primary CTA button
- footer looks like another hero/lead block
- footer lacks social/contact links

## component/page acceptance

- the footer completes the page
- navigation and contact action are clear
- no fake contact information appears
- the mobile layout stays clean
- footer does not contain a large CTA button
- footer feels like a finish, not a second promotion block

## status

- Map status: `draft`
- Page family: `landing`
- CTA target: `send a request`

## agent notes

- Keep the footer short enough that it feels like a finish, not a second page.
