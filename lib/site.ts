// Central site content + config. Update SITE.url to the production domain.
export const SITE = {
  url: "https://rustio.dev", // TODO: set to the real domain (DO gives a default *.ondigitalocean.app URL first)
  name: "RustIO",
  title: "RustIO — A Rust-first foundation for serious business software",
  tagline: "A Rust-first business-system engine — the operational foundation for serious software.",
  description:
    "RustIO is a Rust-first business-system engine — the operational foundation for serious software. Describe the business domain, generate a safe schema, review the diff, and build a memory-safe, auditable operational system in Rust.",
  version: "0.31.0",
  links: {
    github: "https://github.com/abdulwahed-sweden/rustio-admin",
    crates: "https://crates.io/crates/rustio-admin",
    docs: "https://docs.rs/rustio-admin",
    releases: "https://github.com/abdulwahed-sweden/rustio-admin/releases",
    sponsors: "https://github.com/sponsors/abdulwahed-sweden",
    draft: "https://github.com/abdulwahed-sweden/rustio-draft",
    shop: "https://github.com/abdulwahed-sweden/shop",
    org: "github.com/abdulwahed-sweden",
  },
} as const;

// Top nav → the initial pages.
export const NAV_LINKS = [
  { label: "Why", href: "/why" },
  { label: "Engine", href: "/engine" },
  { label: "Draft", href: "/draft" },
  { label: "Sponsors", href: "/sponsors" },
  { label: "Docs", href: "/docs" },
] as const;

export const ACCENTS = {
  Copper: { a: "#D2683B", a2: "#E07E4E", ink: "#EC8A56", deep: "#A6431F" },
  Teal: { a: "#2FB6A0", a2: "#43C7B2", ink: "#4FD3BD", deep: "#1C8A78" },
  Azure: { a: "#3E8FD4", a2: "#5AA3E2", ink: "#72B4EC", deep: "#245C97" },
} as const;
export type AccentName = keyof typeof ACCENTS;

export const PIPELINE = [
  { k: "01 · Intent", h: "Business idea", p: "You describe the system you need in plain business terms." },
  { k: "02 · Draft", h: "rustio-draft", p: "The companion drafts a schema.json from your intent.", mono: "schema.json" },
  { k: "03 · Validate", h: "Safe schema", p: "Validated against strict, checked-in rules before it lands." },
  { k: "04 · Engine", h: "rustio-admin", p: "Import, plan, review, commit — a human approves the change.", engine: true },
  { k: "05 · Foundation", h: "Operational system", p: "A foundation you keep evolving safely for years." },
] as const;

export const DOCTRINE = [
  { t: "Doctrine 22", p: "Session invalidation has a single writer." },
  { t: "Uniform outward responses", p: "Recovery and login surfaces collapse every failure mode into one response shape." },
  { t: "Audit-by-default", p: "Every authority mutation emits a typed AuditEvent." },
  { t: "No plaintext at rest", p: "Argon2id for passwords. SHA-256 for session and reset tokens." },
] as const;

export const REPOS = [
  { n: "rustio-admin", d: "The library — the business-system engine. Re-exports the macros.", t: "Core", core: true },
  { n: "rustio-admin-cli", d: "The rustio-admin binary — new, migrate, user, ai, memory, doctor.", t: "CLI", core: true },
  { n: "rustio-admin-macros", d: "Proc-macros powering the derive, kept off the project hot path.", t: "Macros" },
  { n: "rio-theme", d: "Build-time theme engine — raw brand colors into a WCAG-safe tokens.css.", t: "Theme" },
  { n: "rustio-draft", d: "The companion that turns an idea into a validated schema.json.", t: "Companion" },
  { n: "rustio-pro-*", d: "Reserved commercial line — hosted option, vertical packs, support.", t: "Future" },
] as const;

export const DOMAINS = [
  "Housing platforms", "Healthcare", "Education", "Logistics", "Interpretation dispatch",
  "Booking systems", "Clinics", "Shops / POS", "Field service", "Waste logistics", "Internal tools",
] as const;

export const TIERS = [
  { amt: "€5", per: "/mo", nm: "Supporter", gv: "Name in the thank-you section." },
  { amt: "€25", per: "/mo", nm: "Builder", gv: "Monthly project update." },
  { amt: "€100", per: "/mo", nm: "Backer", gv: "Name or logo in the README." },
  { amt: "€500", per: "/mo", nm: "Company Sponsor", gv: "Logo in README and roadmap updates.", featured: true },
  { amt: "€1.5k", per: "/mo+", nm: "Founding Sponsor", gv: "Prominent mention & priority roadmap feedback." },
] as const;

export const ONE_TIME = [
  { a: "€250", n: "Docs Sprint", d: "A focused documentation pass." },
  { a: "€1,000", n: "Feature Sprint", d: "A scoped roadmap feature." },
  { a: "€5,000", n: "Vertical Pack", d: "An example / reference vertical." },
  { a: "€10,000", n: "Founding Infra", d: "Sustained core work." },
] as const;
