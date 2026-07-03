import type { Metadata } from "next";
import { Sponsors, Commercial } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Sponsors",
  description:
    "Fund open Rust infrastructure for serious business systems. Sponsorship keeps the RustIO core free and inspectable — open core today, a commercial layer later.",
};

export default function SponsorsPage() {
  return (
    <main>
      <section className="page-intro">
        <div className="wrap">
          <span className="eyebrow">Sponsor RustIO</span>
          <h1>Back open Rust infrastructure for serious business systems.</h1>
          <p className="lead">
            RustIO is developed independently — no company, investors, or outside funding. Sponsorship
            is early backing for open infrastructure, not a personal donation. It funds documentation,
            examples, and long-term maintenance of the security-sensitive core — and keeps RustIO free
            and MIT-licensed.
          </p>
        </div>
      </section>
      <Sponsors />
      <Commercial />
    </main>
  );
}
