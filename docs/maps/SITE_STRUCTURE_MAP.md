# Site Structure Map

## purpose

Help the agent choose the right page set for a site project before writing
code. This map is for navigation and implementation boundaries, not for
replacing the execution contract.

## source of truth

- Business truth: `docs/AGENT_TASK.md`, `docs/CLIENT_BRIEF.md`, `docs/CONTENT_SEED_TASK.md`, and `docs/intake/*`
- Execution truth: `docs/EXECUTION_PLAN.md`, `docs/AGENT_GUARDRAILS.md`, and `docs/AGENT_VISUAL_STANDARD.md`
- Reference truth: `docs/AGENT_LAUNCH.md`
- Validation truth: `docs/VALIDATION_RULES.md`
- Map entry: `docs/maps/MAP_INDEX.md`
- Status/checklist: `docs/maps/AGENT_TASK_TREE.md` and `docs/conductor/run_log.md`
- Site source is Astro: keep page files thin and move content into `src/data/*.ts` plus Astro components under `apps/site/src`.

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
site
  -> home page (Astro composition file)
  -> optional secondary pages (Astro composition files)
  -> shared navigation + data layer
  -> footer / contact path
```

## Recommended structure for this request

- Structure key: `home-only`
- Page family: `landing`
- Site structure hint: `home-only`
- Niche: `local-services`
- Requested structure rule:
  - Landing is a locked one-page preset.
  - Keep hero, offer, proof, FAQ, lead form, contacts, header, and footer on one page.
  - Do not invent extra pages from niche or accent blocks.
- Recommended pages:
  - Главная
- Scope guard: keep branch notes local to this map and do not expand business scope without the brief or docs/AGENT_TASK.md.

- Page family: `landing`
- Page count: `1`
- Project type: `landing`
- Site structure hint: `home-only`
- Routing assumption: `Landing is a locked one-page preset. Keep the first version on one page and do not invent extra routes from niche or accent blocks.`
- Enabled apps: `site`
- Future growth: `demo-only`
- Style: `dark-lime-creative`
- Selected pages:
  - Главная

## required

- For canonical quick request:
  - use the selected pages from `product_composition` / the site map resolver first
  - let `projectType` choose the preset and `siteStructure` choose the page count when it exists
  - let niche adapt labels, copy, and catalog card semantics, but do not invent a new page set from niche alone
  - accent blocks do not create pages automatically
- landing / landing-bot:
  - one page only
  - keep hero, offer, proof, FAQ, lead form, contacts, header, and footer on the same page
- catalog-services-booking / catalog-services-booking-bot:
  - use the fixed catalog starter or expanded preset from the request
  - page structure is fixed by `siteStructure`; niche adapts card content, labels, and CTA wording only
  - keep price or price range inside the item card
  - starter preset:
    - Главная
    - Каталог
    - Контакты
  - expanded preset:
    - Главная
    - Каталог
    - О компании / О проекте
    - Блог / Полезное
    - Контакты
  - do not create a product / service / object detail page
  - do not create `/catalog/[slug]`
  - do not treat cases / reviews / results as a required route
  - keep services inside catalog cards, not in a separate required page
- corporate-site / corporate-site-bot:
  - use the compact mini-site or standard preset from the request
  - mini preset:
    - Главная
    - Услуги / направления
    - Контакты
  - standard preset:
    - Главная
    - Услуги / направления
    - Кейсы / работы
    - О компании / о проекте
    - Контакты
- ecosystem-full:
  - treat the brief as a role map for site + bot + Mini App, not as a normal site
  - keep the route set compact unless the brief explicitly adds a siteStructure
- Contacts:
  - landing: keep contacts as a section on the home page
  - catalog / corporate multi-page: use a separate Contacts page
- Keep page files thin: compose Astro components and data files instead of writing long HTML source pages.
- Keep runtime copy and card content in `src/data/*.ts`; pages should orchestrate, not own all content.

## allowed inference

- Pick the concrete preset that best fits `projectType` and `siteStructure`.
- Trim the route set when the brief is narrow and expand only when the request explicitly needs the fuller preset.
- Keep the home page as the primary entry point even in multi-page structures.
- Adapt local route labels, section names, and copy to the niche without changing the preset page set.
- Add local route labels or page aliases only when they stay inside the chosen structure.

## denied inference

- Do not choose pages by business niche as the primary rule for canonical quick request.
- Do not create pages from accent blocks such as reviews, cases, guarantees, team, or gallery.
- Do not create detail pages, `/catalog/[slug]`, or filler routes outside the selected preset.
- Do not create routes outside the selected projectType / structure preset.
- Do not silently turn a simple site into a larger product or a second product branch.
- Do not add SEO, bot, API, miniapp, infra, or deploy work here.

## component/page acceptance

- The selected route set matches the requested canonical preset and reads cleanly as a site or ecosystem role map.
- The home page still has a coherent conversion path.
- Extra pages only appear when they are part of the chosen preset.
- The map tells the agent where the first edit should happen.

## agent notes

- The brief may be ambiguous; record the chosen page family and count if you use this map as a working log.
- Map status: `draft`
- Keep the structure simple unless the intake clearly asks for a broader site.
