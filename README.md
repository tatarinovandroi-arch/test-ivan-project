# local-services

## Services
- site

## Architecture Overview
- `site`: Astro public website frontend; source lives in `apps/site/src` and is exposed locally through `SITE_PORT`.

## Local Verification
1. Check Node.js version: `node -v` must be `22.12.0` or newer. If it is lower, fix the environment first; it is an environment issue, not an Astro code issue.
2. `cd apps/site`
3. `npm install`
   - `npm install` may be quiet for 20-60 seconds. Wait up to 60 seconds and do not stop it just because there is no output. If there is still no progress after 60 seconds, check for a hang, network issue, or partial dependencies and record it in `docs/conductor/run_log.md`.
4. `npm run finalize`


## Manual Conductor Workflow
This project uses `docs/conductor` as the human-controlled agent workflow.
Default autonomy level is `L2`: agents may edit files only after a human
approves the implementation plan, allowed paths, denied paths, allowed commands,
and required checks.

## Environment Variables
- `APP_ENV`: runtime environment, defaults to `development`.
- `PROJECT_NAME`: human-readable project name.
- `PROJECT_SLUG`: filesystem/container-safe project identifier.
- `DOMAIN`: public domain for production routing; use `localhost` for local development.
- `SITE_PORT`: local host port for the public site.

## Production Deployment
Production deployment is a later repo-backed stage. The initial quick-start scaffold does not create an active GitHub Actions deploy workflow; verify this scaffold with the site commands above and keep temp demo publish manual.


## Useful commands
## Useful commands
- `cd apps/site`
- `npm install`
- `npm run finalize`


## Publish handoff
- `public-demo/index.html` is the publish-ready bundle.
- `dist/` is the intermediate Astro build output.

