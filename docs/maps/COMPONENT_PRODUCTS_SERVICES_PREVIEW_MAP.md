# Products or Services Preview Map

## purpose

Describe the catalog / services preview block so the agent can show what the
business actually sells without turning the page into a full product system.

## source of truth

- Business truth: `docs/AGENT_TASK.md`, `docs/CLIENT_BRIEF.md`, `docs/CONTENT_SEED_TASK.md`, and `docs/intake/*`
- Execution truth: `docs/EXECUTION_PLAN.md`, `docs/AGENT_GUARDRAILS.md`, and `docs/AGENT_VISUAL_STANDARD.md`
- Reference truth: `docs/AGENT_LAUNCH.md`
- Validation truth: `docs/VALIDATION_RULES.md`
- Map entry: `docs/maps/MAP_INDEX.md`
- Product preview source lives in `apps/site/src/components/ProductCard.astro` and `apps/site/src/components/CatalogSection.astro`; catalog content belongs in `src/data/catalog.ts`.

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
preview
  -> 3-6 cards
  -> short copy
  -> CTA or next action
  -> niche-fit visual structure
```

## required

- 3-6 cards for products, services, objects, rooms, tours, courses, menu items, or packages
- a clear block heading
- a short description for each card
- a CTA or next action
- price / price range / `по запросу` when useful
- cards must fit the niche
- this block is for products or services preview, not a full commerce system
- keep the copy concrete: what it is, who it fits, and how to choose or leave a request
- if the site has a separate catalog page, keep the home preview aligned with the same catalog data instead of inventing a second card set

## business copy rule

Cards must describe the actual product, service, object, package, room, tour, course, menu item, or category.

Do not describe the site structure. Do not use phrases such as `короткие карточки`, `категории на виду`, `быстрый контакт`, `понятный путь`, `сценарий обращения`, or `каталог и заявка в один шаг` as public card copy.

Use this card copy shape:

```text
Title: what the product/service/category is
Description: what it includes or helps with
Second sentence when useful: who it fits or what to clarify
CTA: order / clarify / book / sign up / leave request
```

## catalog inference

- infer what the cards represent from niche, niche detail, business description, Mini App business card, free-text comment, and ecommerce context
- examples:
  - `цветы` -> bouquets, flowers, compositions, delivery sets
  - `автомойка` -> wash packages, detailing, interior cleaning, polishing
  - `автосервис` -> diagnostics, oil change, tire service, suspension repair
  - `недвижимость` -> apartments, houses, commercial properties
  - `отель` -> rooms, packages, special offers
  - `туризм` -> tours, routes, packages
  - `ресторан` -> menu categories, dishes, sets
  - `курсы` -> courses, programs, lessons
  - `салон красоты` -> procedures, service packages
  - `интернет-магазин` -> products/categories
- each card should include title, short description, price / range / `по запросу` when useful, CTA, and optional badge/category/details
- CTA should fit the business: order, leave request, clarify, reserve, or sign up

## ecommerce block

- If the niche is ecommerce, the cards must read as product/category cards, not abstract care directions or service promises.
- Put the product/category cards immediately after the hero on the home page instead of pushing them below a long generic intro.
- Each ecommerce card must include an image or visual slot, a title, a short description, a price or price range, and a CTA.
- If no real product photos are provided, use the local demo asset pool placeholders first: `product-1.webp` through `product-8.webp`, `category-1.webp` through `category-4.webp`, and `gallery-1.webp` through `gallery-4.webp`. Keep `image-1.webp`, `image-2.webp`, and `image-3.webp` as legacy fallback assets.
- If the home page already has a catalog page, include a clear link or CTA to the full catalog from the preview block.
- Full catalog cards must point to a request, form, contact, or order path.
- For 3-column desktop layouts, prefer 3 or 6 cards, or adjust the column count to the actual card count.
- Do not invent stock, discounts, ratings, reviews, or brands.
- If the structure is multi-page, build the full catalog as `catalog.astro` and keep the product data in `catalog.ts` instead of hand-written HTML.
- On mobile, render ecommerce cards as a horizontal swipe row or carousel with `scroll-snap`, card widths around `80vw` to `88vw`, and `overflow-x: auto` or `overflow-x: scroll`; keep desktop as a grid.
- If a card uses a branded placeholder with text or logo, keep it uncropped with `object-fit: contain`.

## behavior

- the block should make the offer concrete
- each card should be scannable
- the visual pattern should stay usable on mobile
- the block should help the user continue to the request or contact step
- if the block needs thumbnail or card imagery, prefer the local demo asset pool instead of external sources
- for ecommerce, avoid imageless cards when the local asset pool already covers the task

## allowed inference

- For a product niche, use catalog or selection groupings.
- For a services niche, use service cards.
- For restaurant or hospitality, use menu, rooms, tours, or offers.
- For a local business, use the main services or directions.
- Choose grid, cards, or list.
- Use `product-1.webp` through `product-8.webp`, `category-1.webp` through `category-4.webp`, and `gallery-1.webp` through `gallery-4.webp` for product cards, section cards, benefits, trust/proof, or catalog previews when the brief benefits from a visible local asset. Keep `image-1.webp`, `image-2.webp`, and `image-3.webp` as legacy fallback assets.
- Prefer local assets over external image searches when the pool already covers the block.
- For ecommerce, prefer local demo placeholders over empty cards whenever the brief does not provide product photography.
- Keep optional category badges or short detail lines when they help scanning the cards.

## denied inference

- Do not create a full cart without the brief.
- Do not invent prices if they are not available.
- Do not add fake stock or fake discounts.
- Do not promise delivery if it is not in the brief.
- Do not present abstract care directions or service groupings as ecommerce product cards.
- Do not use fake SKUs or fake product names when the brief only gives categories or service directions.
- Do not create a required detail page or `/catalog/[slug]` from this preview contract.

## common failure cases

- cards use scaffold/meta phrases instead of business copy
- cards are too abstract
- all cards have the same copy
- price or CTA is unclear
- the mobile grid breaks
- a card looks clickable but has no clear next step

## component/page acceptance

- the user understands what is being sold
- the cards feel complete
- the block helps the user move to the request, catalog, or contact path

## status

- Map status: `draft`
- Page family: `landing`
- Niche: `local-services`
- CTA target: `send a request`

## agent notes

- Keep the block narrow and specific to the request instead of building a full commerce flow.
