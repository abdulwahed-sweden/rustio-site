import type { Metadata } from "next";
import { ogMeta } from "@/lib/site";
import { Engine, CodeExample, Ecosystem } from "@/components/Sections";

export const metadata: Metadata = {
  title: "The engine",
  description:
    "Authority, sessions, recovery and audit — engineered as one system. RustIO treats the weight of production administrative work as first-class, not an afterthought.",
  alternates: { canonical: "/engine/" },
  ...ogMeta("engine", "The RustIO engine — a system engine, not another dashboard"),
};

export default function EnginePage() {
  return (
    <main>
      <section className="page-intro">
        <div className="wrap">
          <span className="eyebrow">The engine</span>
          <h1>A system engine, not another dashboard.</h1>
          <p className="lead">
            Most admin tools treat CRUD as the product and bolt on auth, recovery and audit afterward.
            RustIO inverts that: authority — who may do what, how sessions end, how access is recovered,
            what gets recorded — is designed as one system, governed by checked-in contract documents.
            The CRUD is the easy layer on top.
          </p>
        </div>
      </section>
      <Engine />
      <CodeExample />
      <Ecosystem />
    </main>
  );
}
