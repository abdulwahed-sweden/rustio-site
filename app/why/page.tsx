import type { Metadata } from "next";
import { ogMeta } from "@/lib/site";
import { Problem, Pipeline, NotDashboard } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Why RustIO",
  description:
    "Most business systems rebuild the same foundation again and again. RustIO exists to stop that waste — a controlled, Rust-first engine for serious operational software.",
  alternates: { canonical: "/why/" },
  ...ogMeta("why", "Why RustIO exists — a new foundation for business software in Rust"),
};

export default function WhyPage() {
  return (
    <main>
      <section className="page-intro">
        <div className="wrap">
          <span className="eyebrow">Why RustIO exists</span>
          <h1>A new foundation for business software in Rust.</h1>
          <p className="lead">
            Most business systems start the same way: data models, admin screens, permissions,
            workflows, forms, lists, filters, reports, imports, reviews, and safe changes. Developers
            rebuild this foundation again and again. <strong>RustIO exists to stop that waste.</strong>
          </p>
          <p className="lead">
            It gives developers a controlled system engine: describe the business domain, generate a
            safe schema, review the diff, plan the change, and build the operational foundation with
            Rust. This is not another admin UI — it is infrastructure for creating serious business
            systems faster, while keeping correctness, safety, and human control at the center.
          </p>
        </div>
      </section>
      <Problem />
      <Pipeline />
      <NotDashboard />
    </main>
  );
}
