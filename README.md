# RustIO — marketing site

### 🌐 Live site → **https://rustio.vercel.app**

> Deployed on Vercel (free, auto-redeploys on every push to `main`).
> Sponsoring RustIO? This is the project it funds — [become a sponsor](https://github.com/sponsors/abdulwahed-sweden).

Premium marketing site for **RustIO** (`rustio-admin`) — a Rust-first business-system engine.
Built with **Next.js (App Router) + TypeScript**, exported as a fully static site
(`output: "export"`) with no backend, database, or API routes.

The "Trust Interface": move a visitor, in ~20 seconds, from *"another open-source repo"* to
*"serious infrastructure built from a real problem."*

## Stack

- Next.js 14 App Router, TypeScript
- Static export → `./out` (deployable to any static host)
- `next/font` (self-hosted Space Grotesk / Hanken Grotesk / JetBrains Mono)
- Dark-canonical theme + a live Copper / Teal / Azure accent switcher (mirrors the `rio-theme` idea)
- No external images — the mark and all icons are inline SVG
- `sitemap.ts`, `robots.ts`, metadata / Open Graph

## Structure

```
app/
  layout.tsx        # fonts, metadata/OG, no-flash theme boot, Nav + Footer
  page.tsx          # home — the full single-page landing
  why/page.tsx      # why RustIO exists (problem + pipeline)
  engine/page.tsx   # the engine (features, doctrine, code, ecosystem)
  draft/page.tsx    # rustio-draft companion
  sponsors/page.tsx # sponsorship + commercial model
  docs/page.tsx     # developer install + links
  sitemap.ts
  robots.ts
  globals.css       # design tokens (dark + light), all component styles
components/
  Nav.tsx           # client — theme toggle, accent switcher, active link
  Cmd.tsx           # client — copy-to-clipboard command block
  Sections.tsx      # all landing sections (Hero, Problem, Pipeline, …)
  Footer.tsx  Mark.tsx  Icons.tsx
lib/site.ts         # content + config (set SITE.url to the real domain)
public/favicon.svg
```

## Run locally

```bash
npm install
npm run dev          # http://localhost:3000
```

Then open **http://localhost:3000** in a browser.

### Troubleshooting

- **Don't open the HTML file directly** (e.g. double-clicking `out/index.html` →
  `file://…`). The exported site uses absolute `/_next/…` asset paths that only
  resolve over HTTP, so a `file://` open looks unstyled/broken. Use `npm run dev`,
  or serve the build with `npx serve out`.
- **`npm install` fails with "cache folder contains root-owned files"** — a known
  macOS npm bug in the global `~/.npm` cache. This repo works around it with a
  project-local cache (`.npmrc` → `cache=.npm-cache`), so `npm install` should just
  work. To fix it globally instead: `sudo chown -R $(id -u):$(id -g) ~/.npm`.
- **`next: command not found`** means `npm install` didn't complete — rerun it
  (see the cache note above), then `npm run dev`.

## Build the static export

```bash
npm run build        # emits ./out (static HTML/CSS/JS)
npx serve out        # preview the exported site locally
```

`./out` is the deployable artifact — plain static files.

## Configuration

The canonical origin (used by canonical URLs, Open Graph, sitemap, robots) is a
single environment variable — **no code change needed** to point at the real host:

```bash
NEXT_PUBLIC_SITE_URL=https://rustio.vercel.app   # or your custom domain later
```

It defaults to the Vercel URL for local builds (see `lib/site.ts`). Everything else
is content in `lib/site.ts` and `components/Sections.tsx`.

## Deploy — Vercel (recommended, free)

1. **vercel.com** → sign in with GitHub → **Add New → Project** → import `rustio-site`.
2. Vercel auto-detects Next.js — click **Deploy**. You get `https://rustio.vercel.app`.
3. **Settings → Environment Variables** → add `NEXT_PUBLIC_SITE_URL` = your Vercel URL, then redeploy once.
4. (Later) **Settings → Domains** → add a custom domain; update `NEXT_PUBLIC_SITE_URL` and redeploy.

Vercel rebuilds from the repo on every push to `main`. (Any static host works too —
`npm run build` emits `./out`.)
