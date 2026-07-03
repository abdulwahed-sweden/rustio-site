# RustIO — marketing site

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

## Build the static export

```bash
npm run build        # emits ./out (static HTML/CSS/JS)
npx serve out        # preview the exported site locally
```

`./out` is the deployable artifact — plain static files.

## Configuration

Set the production domain in `lib/site.ts` → `SITE.url` (used by canonical URLs,
Open Graph, sitemap, robots). Everything else is content in `lib/site.ts` and `components/Sections.tsx`.

## Deploy — DigitalOcean App Platform (Static Site)

1. Push this repo to GitHub (`abdulwahed-sweden/rustio-site`).
2. DigitalOcean → **Create → App Platform → GitHub** → pick the repo/branch (`main`).
3. It detects Next.js. Set the component **Resource Type = Static Site** with:
   - **Build command:** `npm run build`
   - **Output directory:** `out`
4. Deploy. You get a `*.ondigitalocean.app` URL immediately.
5. (Optional) **Settings → Domains** → add your custom domain; update `SITE.url` and redeploy.

Static sites on App Platform build from the repo on every push to `main`.
