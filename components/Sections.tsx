import { DOCTRINE, DOMAINS, ONE_TIME, PIPELINE, REPOS, SITE, TIERS } from "@/lib/site";
import { Mark } from "./Mark";
import { Cmd } from "./Cmd";
import {
  ArrowRight, Bag, BookOpen, CrateBox, FileText, GitHub, Heart, Send,
} from "./Icons";

const mono = { fontFamily: "var(--font-mono)", color: "var(--accent-ink)" } as const;

/* ---------------- HERO ---------------- */
export function Hero() {
  return (
    <header id="top">
      <div className="wrap">
        <div className="hero-badge rise d1">
          <span className="tag">v{SITE.version}</span> Rust-first · Postgres-only · single binary
        </div>
        <div className="hero-mark rise d1">
          <Mark sw={6.5} />
        </div>
        <p className="eyebrow rise d2" style={{ display: "block", marginBottom: 20 }}>
          Built in Rust — the systems programming language
        </p>
        <h1 className="hero-h rise d2">
          A Rust-first foundation for <span className="cop">serious business software.</span>
        </h1>
        <p className="hero-sub rise d3">
          Written in Rust — the language built for speed and memory safety — RustIO is a
          business-system engine that stays fast, safe, and auditable as a business grows,
          exactly where admin screens and conventional web stacks give out.
        </p>
        <div className="hero-cta rise d4">
          <a className="btn btn-primary" href="/docs">
            Get started <ArrowRight />
          </a>
          <a className="btn btn-ghost" href="/why">
            Why RustIO exists
          </a>
        </div>
        <div className="hero-install rise d5">
          <Cmd cmd="cargo install rustio-admin-cli" icon />
        </div>
        <div className="hero-badges rise d6">
          <span className="crate-chip"><b>rustio-admin</b> {SITE.version}</span>
          <span className="crate-chip"><b>rustio-admin-cli</b> binary</span>
          <span className="crate-chip">MIT licensed</span>
          <span className="crate-chip">No build step</span>
        </div>
      </div>
    </header>
  );
}

/* ---------------- PROBLEM ---------------- */
export function Problem() {
  return (
    <section id="problem" className="band">
      <div className="wrap">
        <div className="problem-grid">
          <div>
            <span className="eyebrow">The problem</span>
            <p className="problem-quote" style={{ marginTop: 16 }}>
              The problem is not always bad developers. It&apos;s often a{" "}
              <span className="em">weak system foundation.</span>
            </p>
            <div className="stat-row">
              <div className="stat">
                <div className="sn">Pre-launch, <span className="cop">on purpose.</span></div>
                <div className="l">We&apos;re getting the foundation right before serving the first customer — not rebuilding it after a collapse.</div>
              </div>
              <div className="stat">
                <div className="sn">Built to scale.</div>
                <div className="l">One memory-safe, auditable engine, designed to serve as large an operation as possible and evolve for years.</div>
              </div>
            </div>
          </div>
          <div className="problem-story">
            <p>
              RustIO was born from a real market problem, not a wish to build another admin panel.{" "}
              <strong>A fast-growing housing platform in the Swedish market</strong> — serving a very
              large customer base — began to crack under its own success.
            </p>
            <p>
              Not because of its engineers, but because the foundation was never designed to be a
              heavy-duty operational engine. As data grows and pressure rises, conventional stacks
              show their limits: slower performance, climbing cost, fragile changes, constant firefighting.
            </p>
            <p>
              That story isn&apos;t unique — it&apos;s the industry default. Teams rebuild the same
              foundation, hit the same wall, firefight the same failures.{" "}
              <strong>RustIO exists for exactly that moment</strong> — when a business outgrows its
              first system and needs a foundation that won&apos;t collapse under its own growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- PIPELINE ---------------- */
export function Pipeline() {
  return (
    <section id="pipeline">
      <div className="wrap">
        <div className="sec-head center">
          <span className="eyebrow">From idea to a safe foundation</span>
          <h2>You describe the system. RustIO makes it safe to run.</h2>
          <p>A deliberately simple path — with a human review gate before anything becomes real.</p>
        </div>
        <div className="pipeline">
          {PIPELINE.map((n, i) => (
            <div key={n.k} style={{ display: "contents" }}>
              <div className={"pnode" + (("engine" in n && n.engine) ? " eng" : "")}>
                {"engine" in n && n.engine && (
                  <div className="mk"><Mark sw={8} cx={43} cy={29} cw={14} ch={42} crx={7} /></div>
                )}
                <div className="k">{n.k}</div>
                <h4>{n.h}</h4>
                <p>
                  {"mono" in n && n.mono ? (
                    <>The companion drafts a <span style={mono}>schema.json</span> from your intent.</>
                  ) : (
                    n.p
                  )}
                </p>
              </div>
              {i < PIPELINE.length - 1 && <div className="parrow">→</div>}
            </div>
          ))}
        </div>
        <p className="pipeline-cap">
          <b>AI drafts.</b> &nbsp;RustIO validates. &nbsp;Diff protects. &nbsp;<b>Human approves.</b>
        </p>
      </div>
    </section>
  );
}

/* ---------------- NOT A DASHBOARD ---------------- */
export function NotDashboard() {
  return (
    <section className="band">
      <div className="wrap nad">
        <div className="lines">
          <span className="neg">Not another dashboard.</span>
          <span className="neg">Not another CRUD demo.</span>
        </div>
        <p className="pos">
          A <span className="cop">system engine</span> for operational software.
        </p>
        <p className="domains-note">
          Most admin tools treat CRUD as the product and bolt on auth, recovery and audit afterward.
          RustIO inverts that —{" "}
          <strong style={{ color: "var(--hi)", fontWeight: 600 }}>authority is designed as one system</strong>,
          governed by checked-in contract documents. The CRUD is the easy layer on top.
        </p>
      </div>
    </section>
  );
}

/* ---------------- ENGINE ---------------- */
const FEATURES = [
  {
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></svg>),
    h: "Admin surface",
    body: (<><code>#[derive(RustioAdmin)]</code> generates list, create, edit and delete pages. <code>impl ModelAdmin</code> overrides the defaults. Per-model RBAC over a five-tier role hierarchy.</>),
  },
  {
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-5-5z" /></svg>),
    h: "Identity & sessions",
    body: (<>DB-backed sessions with Argon2id passwords, hashed-at-rest tokens, and centralised invalidation. Doctrine 22: session invalidation has a single writer.</>),
  },
  {
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7L3 8" /><path d="M3 3v5h5" /></svg>),
    h: "Recovery",
    body: (<>Self-service forgot &amp; reset, admin-driven reset/lock/unlock/revoke, auto-throttle on failed logins, and a re-auth wall for destructive actions.</>),
  },
  {
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6M9 15l2 2 4-4" /></svg>),
    h: "Audit by default",
    body: (<>Every authority mutation emits a typed <code>AuditEvent</code> with stable identifiers, per-request correlation IDs, and redaction helpers for tokens and passwords.</>),
  },
  {
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4" /><circle cx="12" cy="12" r="3" /></svg>),
    h: "AI assistant permissions",
    body: (<><code>rustio ai</code> governs what an external AI coding assistant may do — an approval &amp; audit layer, not an embedded model. Every capability sorted Allowed / Needs approval / Blocked.</>),
  },
  {
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>),
    h: "Project memory",
    body: (<><code>rustio memory</code> records the <em>why</em> behind a project — decisions, rejected ideas, assumptions — so an AI or a new teammate reads years of reasoning in minutes. Code always wins.</>),
  },
];

export function Engine() {
  return (
    <section id="engine">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">What&apos;s in the engine</span>
          <h2>Authority, sessions, recovery and audit — engineered as one system.</h2>
          <p>The weight of production administrative work sits underneath the CRUD surface. RustIO treats it as first-class, not an afterthought.</p>
        </div>
        <div className="features">
          {FEATURES.map((f) => (
            <div className="feat" key={f.h}>
              <div className="ic">{f.icon}</div>
              <h4>{f.h}</h4>
              <p>{f.body}</p>
            </div>
          ))}
        </div>
        <div className="doctrine">
          {DOCTRINE.map((d) => (
            <div className="doc-card" key={d.t}>
              <div className="t">{d.t}</div>
              <p>
                {d.t === "Audit-by-default" ? (
                  <>Every authority mutation emits a typed <code style={mono}>AuditEvent</code>.</>
                ) : (
                  d.p
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CODE ---------------- */
export function CodeExample() {
  return (
    <section className="band">
      <div className="wrap">
        <div className="sec-head center">
          <span className="eyebrow">30-second example</span>
          <h2>An admin surface is one derive, one impl, one register call.</h2>
        </div>
        <div className="narrow">
          <div className="code-wrap">
            <div className="code-top">
              <span className="cdot" style={{ background: "#E07E4E" }} />
              <span className="cdot" style={{ background: "#D8A76B" }} />
              <span className="cdot" style={{ background: "#5FB98E" }} />
              <span className="fn">src/main.rs</span>
            </div>
            <pre className="code">
<span className="at">#[derive(RustioAdmin)]</span>{"\n"}
<span className="kw">pub struct</span> <span className="ty">Post</span>{" { "}<span className="kw">pub</span> id: <span className="ty">i64</span>, <span className="kw">pub</span> title: <span className="ty">String</span>, <span className="cm">/* … */</span>{" }"}{"\n\n"}
<span className="kw">impl</span> <span className="ty">Model</span>{"      "}<span className="kw">for</span> <span className="ty">Post</span>{" { "}<span className="cm">/* TABLE, COLUMNS, from_row, insert_values */</span>{" }"}{"\n"}
<span className="kw">impl</span> <span className="ty">ModelAdmin</span> <span className="kw">for</span> <span className="ty">Post</span>{" {}"}{"                  "}<span className="cm">// accept every default</span>{"\n\n"}
<span className="kw">let</span> admin{"  "}= <span className="ty">Admin</span>::<span className="fn2">new</span>().<span className="fn2">model</span>::{"<"}<span className="ty">Post</span>{">"}();{"\n"}
<span className="kw">let</span> router = <span className="fn2">register_admin_routes</span>(<span className="ty">Router</span>::<span className="fn2">new</span>(), admin, db, templates);{"\n"}
<span className="ty">Server</span>::<span className="fn2">new</span>(router, addr).<span className="fn2">run</span>().<span className="kw">await</span>?;
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- DOMAINS ---------------- */
export function Domains() {
  return (
    <section id="domains">
      <div className="wrap">
        <div className="sec-head center">
          <span className="eyebrow">Where it fits</span>
          <h2>Different sectors, one operational foundation.</h2>
        </div>
        <div className="domains">
          {DOMAINS.map((d) => (
            <span className="domain" key={d}>
              <span className="d">›</span>
              {d}
            </span>
          ))}
        </div>
        <p className="domains-note">
          These sectors differ, but they share one foundation: data, permissions, workflows, review,
          reporting, and daily operation. RustIO is the layer they all stand on.
        </p>
      </div>
    </section>
  );
}

/* ---------------- ECOSYSTEM ---------------- */
export function Ecosystem() {
  return (
    <section id="ecosystem" className="band">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">The ecosystem</span>
          <h2>No longer a single repo — a small, disciplined ecosystem.</h2>
          <p>Four crates ship together; companions and a commercial line surround the open core. Core repos only — no clutter.</p>
        </div>
        <div className="eco">
          <div className="eco-head">
            <Mark />
            <span className="org">{SITE.links.org}</span>
            <span className="h">open core · MIT</span>
          </div>
          {REPOS.map((r) => (
            <div className="repo" key={r.n}>
              <span className="rn">{r.n}</span>
              <span className="rd">
                {r.n === "rustio-admin-cli" ? (
                  <>The <span style={{ fontFamily: "var(--font-mono)" }}>rustio-admin</span> binary — new, migrate, user, ai, memory, doctor.</>
                ) : (
                  r.d
                )}
              </span>
              <span className={"rt" + (("core" in r && r.core) ? " core" : "")}>{r.t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- DEVELOPERS ---------------- */
export function Developers() {
  return (
    <section id="developers">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">For developers</span>
          <h2>Install, generate, ship. Postgres only. No build step.</h2>
        </div>
        <div className="dev-grid">
          <div className="dev-card">
            <h4>Get running</h4>
            <Cmd cmd="cargo install rustio-admin-cli" />
            <Cmd cmd="rustio-admin new my_system" />
            <Cmd cmd="rustio-admin migrate" />
            <p style={{ fontSize: 13.5, color: "var(--mute)", marginTop: 14, fontFamily: "var(--font-mono)" }}>
              Add to Cargo.toml: <span style={{ color: "var(--accent-ink)" }}>rustio-admin = &quot;{SITE.version}&quot;</span>
            </p>
          </div>
          <div className="dev-card">
            <h4>Read &amp; explore</h4>
            <div className="dev-links">
              <a href={SITE.links.github} target="_blank" rel="noopener"><GitHub />GitHub repo</a>
              <a href={SITE.links.crates} target="_blank" rel="noopener"><CrateBox />crates.io</a>
              <a href={SITE.links.docs} target="_blank" rel="noopener"><BookOpen />docs.rs</a>
              <a href={SITE.links.draft} target="_blank" rel="noopener"><FileText />rustio-draft</a>
              <a href={SITE.links.releases} target="_blank" rel="noopener"><Send />Releases</a>
              <a href={SITE.links.shop} target="_blank" rel="noopener"><Bag />Example: shop</a>
            </div>
            <p style={{ fontSize: 13.5, color: "var(--mute)", marginTop: 18, lineHeight: 1.55 }}>
              Reference projects: <span style={mono}>examples/clinic</span> (multi-crate) and{" "}
              <span style={mono}>examples/shop</span> (single-crate e-commerce admin).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SPONSORS ---------------- */
const FUND = [
  "Documentation, guides, and onboarding for the open core.",
  "Realistic examples and reference verticals across critical sectors.",
  "Long-term maintenance of the authority, session, and audit surfaces.",
  "Schema-driven admin generation and developer experience.",
];

export function Sponsors() {
  return (
    <section id="sponsors" className="band">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Sponsor RustIO</span>
          <h2>Fund open Rust infrastructure for serious business systems.</h2>
        </div>
        <div className="spon-intro">
          <p className="lead">
            RustIO is developed independently — no company, investors, or outside funding. Sponsorship
            is <span className="cop">early backing for open infrastructure</span>, not a personal donation.
            It keeps the core free and inspectable.
          </p>
          <ul className="fund-list">
            {FUND.map((f) => (
              <li key={f}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="tiers">
          {TIERS.map((t) => (
            <div className={"tier" + (("featured" in t && t.featured) ? " feat-tier" : "")} key={t.nm}>
              <div className="amt">{t.amt}<span className="per">{t.per}</span></div>
              <div className="nm">{t.nm}</div>
              <div className="gv">{t.gv}</div>
            </div>
          ))}
        </div>

        <div className="onetime">
          {ONE_TIME.map((o) => (
            <div className="ot" key={o.n}>
              <div className="a">{o.a}</div>
              <div className="n">{o.n}</div>
              <div className="d">{o.d}</div>
            </div>
          ))}
        </div>

        <div className="spon-cta">
          <div>
            <div className="t">Back the foundation serious systems can depend on.</div>
            <div className="s">RustIO stays free and MIT-licensed regardless of sponsorship.</div>
          </div>
          <a className="btn btn-primary" href={SITE.links.sponsors} target="_blank" rel="noopener">
            <Heart />
            Sponsor on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- COMMERCIAL ---------------- */
export function Commercial() {
  return (
    <section id="commercial">
      <div className="wrap">
        <div className="sec-head center">
          <span className="eyebrow">Open core, sustainable future</span>
          <h2>Open core today. Pro and vertical packs later.</h2>
          <p>A separate commercial layer funds sustained work without gating the core.</p>
        </div>
        <div className="commercial">
          <div className="track now">
            <span className="badge">Today · free &amp; MIT</span>
            <h4>The open core</h4>
            <p className="st">Everything the engine needs, forever inspectable.</p>
            <ul>
              <li>The full <span style={mono}>rustio-admin</span> engine &amp; CLI</li>
              <li>Authority, sessions, recovery, audit</li>
              <li>Schema-driven admin generation</li>
              <li>Reference examples and docs</li>
            </ul>
          </div>
          <div className="track later">
            <span className="badge">Later · rustio-pro</span>
            <h4>The commercial layer</h4>
            <p className="st">Optional, open-core — never a gate on the core.</p>
            <ul>
              <li>Hosted / managed option</li>
              <li>Vertical packs for specific sectors</li>
              <li>Support &amp; enterprise integrations</li>
              <li>Priority for teams building on RustIO</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FINAL CTA ---------------- */
export function FinalCta() {
  return (
    <section className="band">
      <div className="wrap final">
        <span className="eyebrow">Get started</span>
        <h2 style={{ marginTop: 18 }}>RustIO is not an admin panel. It&apos;s a foundation.</h2>
        <p className="quote">
          <b>Build systems quickly.</b> &nbsp;<b>Evolve them safely.</b> &nbsp;<b>Stay in control.</b>
        </p>
        <div className="hero-cta">
          <a className="btn btn-primary" href={SITE.links.github} target="_blank" rel="noopener">
            <GitHub />
            Star on GitHub
          </a>
          <a className="btn btn-ghost" href="/docs">Install the CLI</a>
        </div>
      </div>
    </section>
  );
}
