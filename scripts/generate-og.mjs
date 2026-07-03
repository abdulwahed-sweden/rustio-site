// Generates per-page 1200×630 Open Graph share images into public/og/.
//
// Renders a branded HTML card for each route with headless Chrome, in both
// themes so the cards match the site's look:
//   public/og/<slug>.png         — dark (canonical; what the metadata ships)
//   public/og/<slug>-light.png   — light variant (companion asset)
//
// Note: og:image can't adapt to the viewer's theme — a link preview is one
// fixed image. Dark stays the default; the light set is here to swap in if
// wanted (see ogMeta() in lib/site.ts).
//
// Usage:
//   node scripts/generate-og.mjs
//   CHROME="/path/to/chrome" node scripts/generate-og.mjs   # custom browser
//
// Re-run whenever a page's title/eyebrow changes so its card stays in sync.

import { execFileSync } from "node:child_process";
import { mkdirSync, writeFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUT_DIR = join(ROOT, "public", "og");
const TMP = join(tmpdir(), "rustio-og");

const CHROME =
  process.env.CHROME ||
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

// One card per route. `title` renders in the heading color, `accent` in copper.
const CARDS = [
  {
    slug: "home",
    eyebrow: "A Rust-first business-system engine",
    title: "A Rust-first foundation for",
    accent: "serious business software.",
    lead: "Describe the domain, generate a safe schema, review the diff, and build a memory-safe, auditable operational system in Rust.",
    pills: ["Memory-safe", "Audit-by-default", "Open source"],
  },
  {
    slug: "why",
    eyebrow: "Why RustIO exists",
    title: "A new foundation for",
    accent: "business software in Rust.",
    lead: "Most business systems rebuild the same foundation again and again. RustIO exists to stop that waste.",
    pills: ["No rebuild waste", "Controlled", "Rust-first"],
  },
  {
    slug: "engine",
    eyebrow: "The engine",
    title: "A system engine,",
    accent: "not another dashboard.",
    lead: "Authority, sessions, recovery and audit — engineered as one system, not an afterthought.",
    pills: ["Authority", "Sessions", "Audit-by-default"],
  },
  {
    slug: "draft",
    eyebrow: "The companion — rustio-draft",
    title: "From a sentence",
    accent: "to a safe schema.",
    lead: "AI drafts. RustIO validates. Diff protects. Human approves.",
    pills: ["AI drafts", "Validated", "Human-approved"],
  },
  {
    slug: "sponsors",
    eyebrow: "Sponsor RustIO",
    title: "Back open Rust infrastructure",
    accent: "for serious business systems.",
    lead: "Sponsorship keeps the RustIO core free and inspectable — open core today, a commercial layer later.",
    pills: ["Open core", "Free & inspectable", "€5 – €1.5k/mo"],
  },
  {
    slug: "docs",
    eyebrow: "For developers",
    title: "Install,",
    accent: "generate, ship.",
    lead: "Install rustio-admin-cli, generate a project, and ship. Postgres only, no build step.",
    pills: ["Postgres only", "No build step", "CLI"],
  },
];

// Palettes mirror the site's theme tokens (app/globals.css). Copper accent in
// each theme uses the same shade the site uses (bright on dark, darkened on light).
const THEMES = {
  dark: {
    suffix: "",
    bg: "#1B1E23",
    glow1: "rgba(210,104,59,0.22)",
    glow2: "rgba(210,104,59,0.10)",
    grid: "rgba(243,245,248,0.045)",
    frame: "rgba(243,245,248,0.10)",
    markBg: "#22262c",
    ring: "#F3F5F8",
    core: "#D2683B",
    brand: "#F3F5F8",
    eyebrowFg: "#EC8A56",
    eyebrowBd: "rgba(210,104,59,0.40)",
    eyebrowBg: "rgba(210,104,59,0.12)",
    title: "#F3F5F8",
    accent: "#EC8A56",
    lead: "#B7BFC9",
    pillFg: "#D6DCE4",
    pillBd: "rgba(243,245,248,0.14)",
    pillBg: "rgba(243,245,248,0.04)",
    url: "#EC8A56",
  },
  light: {
    suffix: "-light",
    bg: "#F5F3EF",
    glow1: "rgba(183,65,14,0.14)",
    glow2: "rgba(183,65,14,0.07)",
    grid: "rgba(40,33,24,0.05)",
    frame: "rgba(40,33,24,0.12)",
    markBg: "#ECE7DE",
    ring: "#191B1F",
    core: "#B7410E",
    brand: "#191B1F",
    eyebrowFg: "#8F3208",
    eyebrowBd: "rgba(183,65,14,0.38)",
    eyebrowBg: "rgba(183,65,14,0.10)",
    title: "#191B1F",
    accent: "#B7410E",
    lead: "#454A52",
    pillFg: "#33373E",
    pillBd: "rgba(40,33,24,0.16)",
    pillBg: "rgba(40,33,24,0.03)",
    url: "#B7410E",
  },
};

const esc = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const html = (c, p) => `<!doctype html><html><head><meta charset="utf-8"/><style>
  * { margin:0; padding:0; box-sizing:border-box; }
  html, body { width:1200px; height:630px; }
  body {
    font-family:-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
    background:
      radial-gradient(900px 500px at 82% 12%, ${p.glow1}, transparent 60%),
      radial-gradient(700px 500px at 10% 100%, ${p.glow2}, transparent 55%),
      ${p.bg};
    color:${p.title}; position:relative; overflow:hidden;
  }
  .grid { position:absolute; inset:0;
    background-image:
      linear-gradient(${p.grid} 1px, transparent 1px),
      linear-gradient(90deg, ${p.grid} 1px, transparent 1px);
    background-size:56px 56px;
    mask-image:radial-gradient(1000px 700px at 70% 30%, #000 40%, transparent 85%); }
  .frame { position:absolute; inset:44px; border:1px solid ${p.frame}; border-radius:26px; }
  .pad { position:relative; padding:88px 96px; height:100%; display:flex; flex-direction:column; justify-content:space-between; }
  .top { display:flex; align-items:center; gap:20px; }
  .mark { width:70px; height:70px; }
  .brand { font-size:36px; font-weight:700; letter-spacing:-0.5px; color:${p.brand}; }
  .eyebrow { margin-left:auto; font-size:21px; color:${p.eyebrowFg}; font-weight:600; padding:8px 18px;
    border:1px solid ${p.eyebrowBd}; border-radius:999px; background:${p.eyebrowBg}; }
  h1 { font-size:64px; line-height:1.05; font-weight:700; letter-spacing:-1.5px; max-width:1000px; color:${p.title}; }
  h1 .accent { color:${p.accent}; }
  .lead { margin-top:24px; font-size:28px; line-height:1.35; color:${p.lead}; max-width:920px; font-weight:400; }
  .bottom { display:flex; align-items:center; justify-content:space-between; }
  .pills { display:flex; gap:14px; }
  .pill { font-size:20px; color:${p.pillFg}; padding:9px 18px; border:1px solid ${p.pillBd};
    border-radius:999px; background:${p.pillBg}; font-weight:500; }
  .url { font-size:23px; color:${p.url}; font-weight:600;
    font-family:"JetBrains Mono",ui-monospace,SFMono-Regular,Menlo,monospace; }
</style></head><body>
  <div class="grid"></div><div class="frame"></div>
  <div class="pad">
    <div class="top">
      <svg class="mark" viewBox="0 0 100 100">
        <rect width="100" height="100" rx="22" fill="${p.markBg}"/>
        <path d="M59.83 13.3A38 38 0 1 1 40.17 13.3" fill="none" stroke="${p.ring}" stroke-linecap="round" stroke-width="7"/>
        <rect x="44" y="30" width="12" height="40" rx="6" fill="${p.core}"/>
      </svg>
      <div class="brand">RustIO</div>
      <div class="eyebrow">${esc(c.eyebrow)}</div>
    </div>
    <div>
      <h1>${esc(c.title)} <span class="accent">${esc(c.accent)}</span></h1>
      <p class="lead">${esc(c.lead)}</p>
    </div>
    <div class="bottom">
      <div class="pills">${c.pills.map((pill) => `<div class="pill">${esc(pill)}</div>`).join("")}</div>
      <div class="url">rustio.dev</div>
    </div>
  </div>
</body></html>`;

mkdirSync(OUT_DIR, { recursive: true });
mkdirSync(TMP, { recursive: true });

let count = 0;
for (const card of CARDS) {
  for (const p of Object.values(THEMES)) {
    const name = `${card.slug}${p.suffix}`;
    const htmlPath = join(TMP, `${name}.html`);
    const pngPath = join(OUT_DIR, `${name}.png`);
    writeFileSync(htmlPath, html(card, p));
    execFileSync(
      CHROME,
      [
        "--headless=new",
        "--disable-gpu",
        "--hide-scrollbars",
        "--force-device-scale-factor=1",
        "--window-size=1200,630",
        `--screenshot=${pngPath}`,
        `file://${htmlPath}`,
      ],
      { stdio: "ignore" },
    );
    console.log(`✓ public/og/${name}.png`);
    count++;
  }
}

rmSync(TMP, { recursive: true, force: true });
console.log(`\nGenerated ${count} OG images (${CARDS.length} routes × 2 themes) into public/og/`);
