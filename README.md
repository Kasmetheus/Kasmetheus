# Operations Platform — Placeholder

Minimal Node.js + Express scaffolding to satisfy DigitalOcean App Platform's "code in repo" requirement during initial setup. Will be replaced with the actual product code once we've nailed down which product to build first.

## What this is

A single-file Express app that responds with a "Coming Soon" page on `/` and a JSON healthcheck on `/healthz`. Listens on `process.env.PORT` so DigitalOcean can route traffic to it.

## Files

- `package.json` — Node project manifest, declares Express dependency
- `index.js` — the entire app (server + landing page)
- `.gitignore` — keeps `node_modules` and secrets out of the repo
- `DEPLOY_STEPS.md` — exact steps to push this to GitHub and deploy on DigitalOcean

## What this is NOT

- Not the real product. Just enough code to unblock DO setup.
- Not a database, scraper, or paid service yet.
- Not committed to a specific business idea.

Once DO setup is done and we've decided what to actually build, this gets replaced.
