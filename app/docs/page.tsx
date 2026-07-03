import type { Metadata } from "next";
import { ogMeta } from "@/lib/site";
import { Developers } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Docs & links",
  description:
    "Install rustio-admin-cli, generate a project, and ship. Postgres only, no build step. Links to the GitHub repo, crates.io, docs.rs, releases, and examples.",
  alternates: { canonical: "/docs/" },
  ...ogMeta("docs", "RustIO docs — install, generate, ship"),
};

export default function DocsPage() {
  return (
    <main>
      <section className="page-intro">
        <div className="wrap">
          <span className="eyebrow">For developers</span>
          <h1>Install, generate, ship.</h1>
          <p className="lead">
            The full reference lives on GitHub, crates.io, and docs.rs. Below are the commands to get
            running and the key links. Postgres only. No build step. Single binary.
          </p>
        </div>
      </section>
      <Developers />
    </main>
  );
}
