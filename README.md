# LinkedIn Campaign Manager

[![CI](https://github.com/cw4444/linkedin-campaign-manager/actions/workflows/ci.yml/badge.svg)](https://github.com/cw4444/linkedin-campaign-manager/actions/workflows/ci.yml)
[![GitHub Pages](https://github.com/cw4444/linkedin-campaign-manager/actions/workflows/pages.yml/badge.svg)](https://github.com/cw4444/linkedin-campaign-manager/actions/workflows/pages.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)

A polished, read-only demo app that turns the LinkedIn Campaign Manager role into a single-operator workflow.

> Built entirely by [Codex by OpenAI](https://openai.com/codex) with human oversight.

## Preview

![Campaign Ops Studio preview](./preview.png)

## What it shows

- campaign queue management
- pacing and optimization monitoring
- a local Metadata.io MCP stub
- a human + AI operating model with approval gates
- mock API routes for demo interactions
- exportable approval memo and change log

## Launch Paths

- Local dev: `npm install` then `npm run dev`
- GitHub Pages: enabled by the workflow in [.github/workflows/pages.yml](./.github/workflows/pages.yml)
- Vercel: this repo stays compatible because the app is just static build output plus local dev middleware

## Stack

- Vite
- Vanilla JavaScript modules
- Local development-only mock API middleware

## Files

- `index.html` - app shell
- `styles.css` - visual system
- `src/main.js` - UI wiring and state
- `src/data.js` - demo data
- `src/mcpStub.js` - local MCP stub contract
- `vite.config.js` - mock API middleware and deploy base path

## Safety

This is intentionally non-destructive.
The stub never calls live ad platforms.
Human approval is required before any action that would affect a live environment.

## Run

```bash
npm install
npm run dev
```

## Why this exists

It is a demo of how one operator plus AI can cover a workflow that would normally be split across several people.

## License

MIT, see [LICENSE](./LICENSE).
