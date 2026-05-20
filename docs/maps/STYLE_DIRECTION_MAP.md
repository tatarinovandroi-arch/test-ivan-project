# Style Direction Map

## purpose

Force the agent to decide the visual language before it starts polishing the page. This map is for styling direction, section rhythm, and visual guardrails, not for changing the business brief.

## source of truth

- Business truth: `docs/AGENT_TASK.md`, `docs/CLIENT_BRIEF.md`, `docs/CONTENT_SEED_TASK.md`, and `docs/intake/*`
- Execution truth: `docs/EXECUTION_PLAN.md`, `docs/AGENT_GUARDRAILS.md`, and `docs/AGENT_VISUAL_STANDARD.md`
- Reference truth: `docs/AGENT_LAUNCH.md`
- Validation truth: `docs/VALIDATION_RULES.md`
- Map entry: `docs/maps/MAP_INDEX.md`
- The chosen style in the request data and launch docs should resolve into a concrete visual metaphor, section rhythm, and component treatment before implementation.

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
style direction
  -> visual metaphor
  -> layout rhythm
  -> section variety
  -> card treatment
  -> button treatment
  -> typography mood
  -> media / asset usage
  -> motion / polish
  -> avoid list
```

## required

- visual metaphor: pick a concrete image or pattern for the page instead of defaulting to generic blocks
- layout rhythm: decide whether sections should feel airy, dense, editorial, stacked, or mixed
- section variety: vary hero, strips, cards, proof, and form blocks so the page does not become one repeated card pattern
- card treatment: define how cards should feel, how much surface they use, and how strong the borders or shadows should be
- button treatment: define whether buttons are compact, calm, or slightly prominent, but keep the default scaffold restrained
- typography mood: define whether the page should feel premium, playful, technical, or editorial
- media / asset usage: decide whether the page relies on a single strong banner, product cards, proof images, or a lighter text-first pattern
- motion / polish: define the minimum motion and interaction polish that supports the style without adding jank
- avoid list: explicitly note what should not appear in this style

## style hints

- dark-cyber: do not reduce the page to a dark background plus green buttons; use a neon route, techno sign, terminal, or club-like atmosphere, and vary the rhythm across hero-banner, strip, cards, proof-row, and form-block sections
- clean-premium: keep the page airy, use thin lines and calm surfaces, and keep CTA styling quiet but polished
- playful-product: use rounded geometry, friendly blocks, and a lively but controlled rhythm without drifting into childish chaos
- editorial-tech: use larger type, magazine-like spacing, text-led sections, and restrained buttons

## behavior

- the style direction should be resolved before the page map starts fine-tuning local section copy
- the chosen style should influence hero, cards, buttons, trust, and form rhythm consistently
- the direction should stay honest to the brief and not invent a different business story
- the direction should still work on mobile without collapsing into a generic stacked template

## allowed inference

- Choose one clear visual metaphor and carry it through the page.
- Add modest motion, borders, gradients, or layout shifts if they reinforce the chosen style.
- Use the local asset pool or simple generated visuals when the style benefits from a visible image.

## denied inference

- Do not invent a new brand system that ignores the request.
- Do not mix several contradictory styles on the same page.
- Do not widen the business scope just to justify a stronger visual treatment.
- Do not add heavy effects that damage readability or mobile performance.

## common failure cases

- the page looks like a generic template with a new color palette
- all sections share the same card treatment
- buttons become too heavy or too pill-shaped
- the hero is dramatic but the rest of the page is visually flat
- the style direction is implied instead of stated

## component/page acceptance

- the page has a clear visual metaphor and rhythm
- the hero, cards, buttons, and form feel like one system
- the chosen direction is strong enough to be recognizable but still usable
- the avoid list is explicit enough to keep future iterations on track

## resolved direction

- visual metaphor: nocturnal training club with a sharp lime pulse, dark hero banner, and image-led studio proof
- layout rhythm: dramatic immersive hero, then alternating compact content blocks with enough breathing room for mobile
- section variety: fullscreen hero, swipeable visual cards, card-grid service formats, proof band, process steps, FAQ, lead form, calm footer
- card treatment: sharp bordered cards, soft lime glow, modest shadow, no pill-heavy surfaces
- button treatment: compact neon action buttons with clear secondary buttons; keep CTAs short and useful
- typography mood: geometric and athletic, with strong headings and readable body copy
- media / asset usage: use the fullscreen hero image plus the local gallery pool for visual cards and proof accents
- motion / polish: lightweight hover lift, smooth drawer slide, subtle FAQ reveal, no heavy animation library
- avoid list: generic light-template look, hero trust chips by default, fake reviews, fake numbers, oversized pills, or CSS-only placeholder imagery when local assets exist

## status

- Map status: `done`
- Style: `dark-lime-creative`
- Page family: `landing`
- Niche: `local-services`

## agent notes

- The chosen direction keeps the page dark at the opening, but uses lighter content surfaces for readability and conversion.
