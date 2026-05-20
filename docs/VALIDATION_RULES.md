# Validation Rules

Status: `passed`
Mode: `demo_publish_validator`
Runtime status: `content_filling`
Resolved publish root: `/srv/botweaver/generated/local-services--301f4328/public-demo`
Next action: `handoff_ready_for_manager_review`

## Validation Flow
- `npm run finalize` is the Astro check/build step. It does not replace the Bot Weaver publish/UI validator.
- `npm install` может молчать 20-60 секунд. Жди до 60 секунд и не прерывай команду раньше только из-за отсутствия вывода. Если через 60 секунд нет прогресса, проверь зависание/сеть/частично созданные зависимости и запиши это в `docs/conductor/run_log.md`.
- After finalize, from the Bot Weaver repository root run:
- `cd <botweaver_repo_root> && PYTHONPATH=<botweaver_repo_root>/apps/generator-worker:<botweaver_repo_root>/packages/shared/python python3 -m generator_worker.pipeline.validator --project-dir /srv/botweaver/generated/local-services--301f4328 --request-json /srv/botweaver/generated/local-services--301f4328/docs/intake/request_301f4328-cebc-4794-af62-8a083036c60d.json --write`
- Validator source repo root is `/opt/projects/neuro-ceh` when BOTWEAVER_REPO_ROOT is configured. Generated workspace is under `/srv/botweaver/generated/<run_key>`. Do not run validator from the generated workspace under `/srv`. Run validator from the full source repo under `/opt/projects/neuro-ceh`. Keep `--project-dir` pointed at the generated workspace under `/srv`, and point `--request-json` at the exact `request_<request_id>.json` file.
- validator --write owns `.botweaver/pipeline/validation-report.json` and `docs/VALIDATION_RULES.md`. Do not update `.botweaver/pipeline/validation-report.json` or `docs/VALIDATION_RULES.md` by hand.
- If `ModuleNotFoundError: No module named 'generator_worker'`, the agent is in the wrong repo root or PYTHONPATH is wrong. This is not an Astro/site error. If the validator CLI is unavailable in the current environment, record that in docs/conductor/run_log.md.

## Summary
- Passed: 93
- Failed: 0
- Pending: 0
- Warning: 2
- Skipped: 0

## Validation Checks
## runtime-marker: Runtime marker exists
- Severity: error
- Status: `passed`
- Details: Runtime status is `content_filling`.
## status-gate: Runtime status is honest for quick-start publish
- Severity: error
- Status: `passed`
- Details: Workspace is honestly marked as content_filling before manager deploy.
## run-log: Run log records implementation notes
- Severity: warning
- Status: `passed`
- Details: run_log.md records implementation notes beyond the initial scaffold entry.
## publish-root: Publishable bundle candidate exists
- Severity: error
- Status: `passed`
- Details: Publish root resolved to `public-demo`.
## publish-entrypoint: Publish root has index.html
- Severity: error
- Status: `passed`
- Details: Publish entrypoint found at `public-demo/index.html`.
## prefix-safe-assets: Assets are safe under /demo/<public_request_id>/
- Severity: error
- Status: `passed`
- Details: No root-relative asset links detected.
## server-only-config: Bundle does not depend on server-only /config.js
- Severity: error
- Status: `passed`
- Details: No server-only /config.js dependency found.
## visible-first-version-content: First working version contains real visible content
- Severity: error
- Status: `passed`
- Details: Visible output is lightweight but already looks like a real preview page. Detected text length=6349, structural sections=33, headings=28.
## html-css-js-syntax: HTML/CSS/JS bundle looks structurally complete
- Severity: warning
- Status: `passed`
- Details: HTML/CSS/JS bundle looks structurally complete.
## site-source-astro-present: Site source is Astro
- Severity: error
- Status: `passed`
- Details: Astro config, package metadata, and source pages are present.
## shared-layout-components-present: Shared layout components are present
- Severity: error
- Status: `passed`
- Details: MainLayout, Header, MobileDrawer, Footer, Hero, SectionHeading, and Button are present.
## core-site-components-present: Core site components are present
- Severity: error
- Status: `passed`
- Details: VisualCardsSection, LeadForm, Faq, client brief, business context, site data, page data, the canonical site stylesheet, and catalog preset files required by the selected structure are present.
## handwritten-html-source-risk: No hand-written HTML source files are used
- Severity: error
- Status: `passed`
- Details: No hand-written HTML source files were found in `apps/site/src`.
## quick-start-header-burger-contract: Header owns the mobile burger
- Severity: error
- Status: `passed`
- Details: Header.astro owns the mobile burger and MainLayout has no separate floating toggle.
## site-map-docs-present: Site map docs are present
- Severity: error
- Status: `passed`
- Details: docs/maps core documents are present.
## site-map-agent-task-tree-present: Site map agent task tree is present
- Severity: error
- Status: `passed`
- Details: AGENT_TASK_TREE.md includes status, note, and blocked-item guidance.
## site-map-home-components-covered: Site map home components are covered
- Severity: error
- Status: `passed`
- Details: PAGE_HOME_MAP.md links all site home component maps.
## site-map-style-direction-present: Style direction map is present
- Severity: error
- Status: `passed`
- Details: STYLE_DIRECTION_MAP.md is present and ready.
## visual-accent-token-contract: Generated CSS exposes accent token contract
- Severity: error
- Status: `passed`
- Details: Generated CSS exposes the accent token contract.
## visual-radius-token-contract: Generated CSS keeps core radius values token-driven
- Severity: error
- Status: `passed`
- Details: Core UI radius values are driven by radius tokens.
## visual-color-preset-forwarded: Selected color preset is visible to the agent
- Severity: warning
- Status: `passed`
- Details: Color preset `lime-electric` is present in agent-facing docs, so the agent can see the selected color boundary.
## component-variant-marker-contract: Component variants resolve to whitelisted markers
- Severity: warning
- Status: `passed`
- Details: Component variant markers are whitelisted and present in the published output.
## business-copy-meta-phrase-risk: Public copy avoids scaffold/meta phrases
- Severity: warning
- Status: `passed`
- Details: Public copy does not contain the known scaffold/meta phrase list.
## site-map-header-basic: Site header has basic structure
- Severity: error
- Status: `passed`
- Details: Header exposes brand/logo, visible navigation, and a meaningful CTA.
## site-map-header-sticky: Site header is sticky or fixed
- Severity: warning
- Status: `passed`
- Details: Header has sticky/fixed/elevated evidence, or header is not present.
## site-map-mobile-navigation-pattern: Mobile navigation uses drawer or bottom bar
- Severity: error
- Status: `passed`
- Details: Mobile navigation pattern detected: drawer/burger or bottom bar.
## mobile-burger-css-visible: Mobile burger hides desktop rows and becomes visible
- Severity: error
- Status: `passed`
- Details: Mobile CSS hides desktop header rows and shows the burger when burger/drawer navigation is used.
## header-burger-owned-by-header: Header owns the mobile burger
- Severity: error
- Status: `passed`
- Details: Burger/menu toggle is owned by the header, or no burger pattern is used.
## site-map-mobile-burger-accessible: Mobile burger is a real accessible button
- Severity: error
- Status: `passed`
- Details: Burger/menu toggle is a button with accessibility attributes.
## burger-line-animation: Burger animates into a close icon
- Severity: warning
- Status: `passed`
- Details: Burger line animation contract is present, or burger/drawer pattern is not used.
## site-map-mobile-header-cta-safe: Site mobile header keeps CTA out of the burger row
- Severity: error
- Status: `passed`
- Details: Mobile header stays compact and does not place a CTA beside the burger.
## drawer-close-contract: Drawer close behavior is scaffold-owned
- Severity: warning
- Status: `passed`
- Details: Drawer close behavior is provided by the scaffold-owned Header/MobileDrawer primitive. The validator does not deep-check internal close mechanics.
## drawer-position-contract: Drawer follows the configured position contract
- Severity: error
- Status: `passed`
- Details: Drawer matches the configured side position contract, or drawer is not used.
## site-map-drawer-viewport-safe: Site drawer stays within the viewport
- Severity: error
- Status: `passed`
- Details: No drawer viewport risk detected, or drawer is not used.
## drawer-full-height-inner-pages: Site drawer stays full-height on all pages
- Severity: error
- Status: `passed`
- Details: Drawer stays fixed/full-height or drawer is not used.
## drawer-cta-width-safe: Drawer CTA fits inside the drawer panel
- Severity: error
- Status: `passed`
- Details: Drawer CTA width is safe, or drawer CTA is not used.
## site-map-header-contrast-safe: Site header keeps readable contrast over hero
- Severity: warning
- Status: `passed`
- Details: Header contrast over hero is supported by a readable surface or explicit fallback.
## site-map-hero-basic: Site hero has basic structure
- Severity: error
- Status: `passed`
- Details: Hero has a readable H1, a clear CTA, and supporting visual structure.
## hero-copy-overload-risk: Hero copy stays concise
- Severity: warning
- Status: `passed`
- Details: Hero copy stays concise, concrete, and readable.
## hero-immersive-layout-risk: Immersive hero stays a single wide banner
- Severity: error
- Status: `passed`
- Details: Immersive hero stays as one wide banner without split-card fallback.
## hero-h1-word-count: Hero H1 stays within seven words
- Severity: error
- Status: `passed`
- Details: Hero H1 has 4 words.
## hero-lead-word-count: Hero lead stays within seven words
- Severity: error
- Status: `passed`
- Details: Hero lead has 7 words.
## hero-default-no-note-trust: Hero has no default note or trust chips
- Severity: error
- Status: `passed`
- Details: Hero output has no note text or trust chip row by default.
## hero-overlap-rounded-sheet: Hero-to-content transition stays page-like
- Severity: error
- Status: `passed`
- Details: No immersive hero transition check is required for the current page.
## hero-immersive-width-safe: Immersive hero avoids 100vw overflow
- Severity: error
- Status: `passed`
- Details: Immersive hero width avoids 100vw horizontal-overflow risk.
## hero-cta-bottom-safe-offset: Hero CTA stays above page-surface overlap
- Severity: error
- Status: `passed`
- Details: Hero content reserves bottom-safe space when page-surface overlap is used.
## hero-mobile-immersive-min-height: Mobile immersive hero keeps readable height
- Severity: error
- Status: `passed`
- Details: Mobile immersive hero shell/content keep a readable min-height.
## hero-heavy-content-wrapper-risk: Immersive hero avoids a giant post-hero sheet wrapper
- Severity: warning
- Status: `passed`
- Details: No heavy global post-hero wrapper was detected.
## hero-immersive-content-container-risk: Immersive hero keeps readable content inside the page width
- Severity: warning
- Status: `passed`
- Details: Immersive hero keeps readable content inside a centered page-width container.
## hero-immersive-top-gap: Immersive hero starts directly after the header
- Severity: error
- Status: `passed`
- Details: No immersive hero top-gap risk detected.
## hero-layout-propagation: Hero layout preference is propagated
- Severity: warning
- Status: `passed`
- Details: Hero layout preference is propagated into specs/docs.
## site-button-size-risk: Buttons stay compact outside hero and final CTA
- Severity: warning
- Status: `passed`
- Details: Buttons stay compact outside hero or final CTA treatment.
## button-geometry-contract: Default button geometry follows the compact contract
- Severity: error
- Status: `passed`
- Details: Button geometry follows compact quick-start contract.
## hero-full-width-button-risk: Hero buttons do not become full-width slabs on mobile
- Severity: error
- Status: `passed`
- Details: No forbidden full-width hero button rule detected.
## button-secondary-readable-on-light-bg: Secondary and ghost buttons keep readable text on light backgrounds
- Severity: error
- Status: `passed`
- Details: Secondary/ghost buttons with light backgrounds expose explicit readable text color.
## hero-immersive-secondary-cta-contrast: Secondary hero CTA stays readable on immersive backgrounds
- Severity: error
- Status: `passed`
- Details: Immersive hero secondary/ghost CTA contrast is covered, or no secondary/ghost immersive CTA is present.
## footer-large-cta-risk: Footer keeps CTA controls compact
- Severity: warning
- Status: `passed`
- Details: Footer CTA controls stay compact.
## css-duplicate-core-rules: Core CSS selectors are not duplicated into a second design system
- Severity: warning
- Status: `passed`
- Details: No duplicate core CSS selector blocks detected.
## site-map-footer-basic: Site footer has basic structure
- Severity: error
- Status: `passed`
- Details: Footer element is present.
## footer-brand-present: Footer includes brand or logo area
- Severity: warning
- Status: `passed`
- Details: Footer includes brand/logo/project-name evidence.
## footer-navigation-present: Footer includes navigation links
- Severity: warning
- Status: `passed`
- Details: Footer includes navigation/menu links.
## footer-contact-present: Footer includes contact or social links
- Severity: warning
- Status: `passed`
- Details: Footer includes contact/social evidence.
## footer-legal-present: Footer includes legal/privacy link
- Severity: warning
- Status: `passed`
- Details: Footer includes legal/privacy evidence.
## footer-placeholder-contact-risk: Footer does not contain placeholder contacts
- Severity: error
- Status: `passed`
- Details: No obvious placeholder contact details were detected in the footer.
## footer-large-cta-risk: Footer keeps CTA controls compact
- Severity: warning
- Status: `passed`
- Details: Footer CTA controls stay compact.
## lead-form-footer-spacing-contract: Lead form to footer spacing stays controlled
- Severity: error
- Status: `passed`
- Details: Footer spacing is controlled and does not add a large post-form gap.
## form-labels: Forms expose labels or aria labels
- Severity: warning
- Status: `passed`
- Details: Form controls expose labels or aria labels.
## lead-form-block: Selected lead form is implemented
- Severity: warning
- Status: `passed`
- Details: Lead form is visible.
## lead-form-default-no-split: Quick-start lead form stays compact and centered
- Severity: error
- Status: `passed`
- Details: Default lead form has no split layout or left aside evidence.
## lead-form-width-contract: Lead form wrapper stays full width and form card stays compact
- Severity: error
- Status: `passed`
- Details: Lead form wrapper is full-width and the form card remains compact and centered.
## lead-form-mobile-one-column: Lead form collapses to one column on mobile
- Severity: error
- Status: `passed`
- Details: Lead form mobile layout collapses to one column, or scaffold lead-form layout classes are not present.
## select-chevron-spacing: Select chevrons have enough right-side space
- Severity: error
- Status: `passed`
- Details: Native select controls reserve enough right-side space for the chevron.
## mobile-card-scroll-pattern: Card sections use a mobile-safe row pattern
- Severity: error
- Status: `passed`
- Details: Card grids use the required mobile pattern: generic grids may stack, while visual/catalog rows scroll horizontally.
## desktop-card-grid-4up-balance: Four-card sections avoid a desktop 3+1 orphan row
- Severity: warning
- Status: `passed`
- Details: Four-card sections use an explicit `--count-4` balanced desktop grid when needed.
## card-cta-button-treatment: Card CTAs use button-like treatment
- Severity: error
- Status: `passed`
- Details: Product/service/catalog card links use button-like CTA classes, or no card CTA links were found.
## visual-cards-after-hero: Visual cards block follows the hero
- Severity: error
- Status: `passed`
- Details: The first content section after hero is the standard visual cards block.
## visual-cards-image-contract: Visual cards include images and short card copy
- Severity: error
- Status: `passed`
- Details: Visual cards include image, alt, title, description, and support an optional CTA.
## visual-cards-local-demo-assets: Visual cards use local demo assets
- Severity: error
- Status: `passed`
- Details: Visual card images use the local product/category/gallery asset pool under `assets/demo`.
## visual-cards-mobile-scroll-snap: Visual cards use horizontal mobile snap
- Severity: error
- Status: `passed`
- Details: Visual cards use a horizontal scroll/snap row on mobile.
## shape-preset-token-contract: Shape preset token contract drives shared UI geometry
- Severity: error
- Status: `passed`
- Details: Shared card/button/media geometry uses the shape token contract, including the fallback premium token set.
## faq-block-present: FAQ block is present when required
- Severity: error
- Status: `passed`
- Details: FAQ block is present or not required.
## faq-item-count: FAQ contains a useful number of questions
- Severity: warning
- Status: `passed`
- Details: FAQ item count is within the preferred 3-6 range, or FAQ is not required.
## faq-disclosure-pattern: FAQ uses a disclosure/accordion pattern
- Severity: warning
- Status: `passed`
- Details: FAQ uses a disclosure/accordion pattern, or FAQ is not required.
## faq-answers-present: FAQ answers are present
- Severity: warning
- Status: `passed`
- Details: FAQ answers are present, or FAQ is not required.
## faq-animation-polish: FAQ has light open/close polish
- Severity: warning
- Status: `passed`
- Details: FAQ has disclosure behavior with light CSS polish.
## faq-css-line-icon: FAQ disclosure icon uses CSS lines instead of a text plus
- Severity: warning
- Status: `warning`
- Details: FAQ disclosure icon should be drawn with CSS lines, not a raw text `+` in `summary::after`.
## faq-overload-risk: FAQ answers stay concise
- Severity: warning
- Status: `passed`
- Details: FAQ answers stay concise.
## mobile-viewport: Viewport meta is present
- Severity: warning
- Status: `passed`
- Details: Viewport meta tag is present.
## focus-states: Focusable controls have focus states
- Severity: warning
- Status: `passed`
- Details: Focus states are present.
## image-alt: Visible images have alt text
- Severity: warning
- Status: `passed`
- Details: Visible images have alt text.
## cta-links: Primary CTA links are not empty
- Severity: warning
- Status: `passed`
- Details: CTA links are not empty.
## mobile-nav: Navigation has a mobile-friendly toggle pattern
- Severity: warning
- Status: `passed`
- Details: Mobile navigation pattern is present or not required.
## heavy-blur-performance-risk: Heavy blur performance risk
- Severity: warning
- Status: `warning`
- Details: Detected 2 blur filter(s) and 8 raw heavy box-shadow rule(s) in the publish bundle.
## excessive-backdrop-filter-risk: Backdrop filter use stays limited
- Severity: warning
- Status: `passed`
- Details: Backdrop filter usage stays limited.
## page-surface-overlap-heavy-effects-risk: Page-surface overlap stays lightweight
- Severity: warning
- Status: `passed`
- Details: Page-surface overlap does not use heavy glass/card effects.
