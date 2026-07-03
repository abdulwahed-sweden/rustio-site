import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { Pipeline } from "@/components/Sections";

export const metadata: Metadata = {
  title: "rustio-draft",
  description:
    "rustio-draft turns a natural-language project brief into a safe schema.json for rustio-admin. AI drafts. RustIO validates. Diff protects. Human approves.",
};

export default function DraftPage() {
  return (
    <main>
      <section className="page-intro">
        <div className="wrap">
          <span className="eyebrow">The companion — rustio-draft</span>
          <h1>From a sentence to a safe schema.</h1>
          <p className="lead">
            <strong>rustio-draft</strong> turns a natural-language project brief into a validated{" "}
            <span style={{ fontFamily: "var(--font-mono)", color: "var(--accent-ink)" }}>schema.json</span>{" "}
            for <strong>rustio-admin</strong>. It is a setup-time tool only — it may call an AI model to
            draft the schema, but RustIO applies the result deterministically through import, plan, and a
            human-approved commit. The engine never depends on an AI model at runtime.
          </p>
          <p className="lead" style={{ fontFamily: "var(--font-mono)", color: "var(--mute)", fontSize: "15px" }}>
            AI drafts. · RustIO validates. · Diff protects. · Human approves.
          </p>
        </div>
      </section>
      <Pipeline />
      <section className="band">
        <div className="wrap final">
          <span className="eyebrow">Companion project</span>
          <h2 style={{ marginTop: 18 }}>Its own repo, keeping the engine AI-free.</h2>
          <p className="quote" style={{ maxWidth: "60ch", margin: "16px auto 0" }}>
            rustio-draft lives in its own repository, versioned independently. The core engine stays
            free of any runtime AI dependency.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href={SITE.links.draft} target="_blank" rel="noopener">
              rustio-draft on GitHub
            </a>
            <a className="btn btn-ghost" href="/engine">See the engine</a>
          </div>
        </div>
      </section>
    </main>
  );
}
