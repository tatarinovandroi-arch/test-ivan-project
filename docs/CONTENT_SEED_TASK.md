# Content Seed Task

Build the business content seed before CSS polish, section choreography, or Hero refinements.

The goal is not to describe the scaffold. The goal is to make the first demo feel like a real niche business.

## Required Order

1. Read `docs/CLIENT_BRIEF.md`.
2. Read `apps/site/src/data/client-brief.ts`.
3. Decide what typical business this request represents from `niche`, `nicheDetail`, `projectType`, `ecommerceProductCategory`, and contacts.
4. Fill `apps/site/src/data/business-context.ts` first.
5. In `business-context.ts`, write the business model and `copySeed`:
   - what the business sells or offers;
   - who it serves;
   - typical product/service directions for the niche;
   - hero message;
   - CTA variants;
   - benefit ideas;
   - FAQ topics.
6. Only after that, fill `apps/site/src/data/landing.ts`.
7. If the request includes a catalog surface, fill `apps/site/src/data/catalog.ts`.
8. Refine `apps/site/src/data/pages.ts` and `apps/site/src/data/site.ts` only after the business context is resolved.

## Main Copy Rule

Сначала придумай нормальный типовой бизнес-текст под нишу, потом расставь его по блокам.

Do not start from the website structure. Start from the business.

Bad direction:
- `Категории на виду`
- `Короткие карточки`
- `Быстрый контакт`
- `Каталог и заявка в один шаг`
- `Понятный путь обращения`

Good direction:
- Beauty: `Маникюр, брови, ресницы, макияж и укладки по предварительной записи.`
- Bakery: `Свежий хлеб, выпечка и десерты каждый день. Можно выбрать позиции и оставить заявку.`
- Real estate: `Квартиры, дома и коммерческие объекты. Поможем подобрать вариант и уточнить условия.`
- Ski ecommerce: `Горнолыжная одежда, маски, шлемы и аксессуары. Подскажем наличие, размер и цену.`
- Auto service: `Диагностика, обслуживание и ремонт автомобиля по заявке. Можно описать задачу и уточнить формат работ.`
- Fitness: `Персональные и групповые тренировки для взрослых и подростков по записи.`
- Tourism: `Локальные маршруты, поездки и экскурсии. Можно выбрать направление и оставить заявку на консультацию.`

## Output Rules

- Use the raw brief as the factual boundary.
- Make the visible copy client-facing, not owner-facing.
- Write as if this is already the first website for the client, not a placeholder.
- Use typical niche-level products, services, categories, or directions when the brief is incomplete.
- Do not invent exact facts. Use believable general niche text instead.
- `business-context.ts` must explain what the business is, who it serves, and what it sells.
- `copySeed` must be filled before `landing.ts`, `catalog.ts`, or `pages.ts`.
- After filling the data files, switch `businessContentStatus` to `filled`.
- After filling the landing content, switch `landingContentStatus` to `filled`.

## Do Not Invent

Do not invent:
- prices;
- guarantees;
- exact deadlines;
- years of experience;
- certificates;
- addresses;
- equipment;
- ratings;
- reviews;
- awards;
- medical claims;
- legal claims;
- delivery terms unless the brief says so.

## Tone Adapters

- Landing: one main offer; Hero answers who this is, what it offers, and how to contact.
- Catalog / store: write through product categories, selections, availability, price by request, and help choosing.
- Services / booking: write through services, appointment, consultation, and choosing format.
- Corporate site: write through company directions, who it helps, and how to contact.
- Ecommerce with missing exact products: use real-looking categories, not fake SKUs.
- Real estate: use object categories and request/consultation wording, not fake addresses or prices.
- Food / bakery: use product groups and order/request wording, not invented menu prices.

## Forbidden Owner-Facing Phrases

Do not use these as visible client-facing copy:
- `Расскажите о проекте`
- `Что можно показать на сайте`
- `Стартовую версию можно расширять`
- `Проверить тексты, заменить изображения`
- `Сайт можно доработать`
- `Здесь можно добавить`
- `Этот блок можно заменить`

## Forbidden Scaffold / Meta Copy

Do not use these as the main visible business text:
- `Категории на виду`
- `Короткие карточки`
- `Быстрый контакт`
- `Каталог и заявка в один шаг`
- `Каталог и контакт собраны`
- `Понятный путь`
- `Сценарий обращения`
- `Точечное обновление`
- `Собранный результат`
- `Удобная заявка на связь`

## Validator Note

The validator warning `business-copy-meta-phrase-risk` checks public HTML for scaffold/meta phrases such as `короткие карточки`, `категории на виду`, `быстрый контакт`, `понятный путь`, and `сценарий обращения`.

If the warning appears, rewrite the public text as a business sentence. Internal docs may mention these phrases only as examples of what not to write.

## Practical Rule

If you are about to write a phrase about cards, blocks, website structure, or future editing, stop and rewrite it as a business sentence about the client’s offer.
