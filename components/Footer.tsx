import Link from "next/link";
import { SITE } from "@/lib/site";
import { Mark, Wordmark } from "./Mark";

export function Footer() {
  return (
    <footer>
      <div className="wrap foot">
        <div className="brand">
          <div className="lockup">
            <Mark />
            <Wordmark />
          </div>
          <p>A Rust-first business-system engine — the operational foundation for serious software.</p>
          <div className="lic">MIT licensed · Postgres only · single binary</div>
        </div>

        <div className="fcol">
          <h6>Project</h6>
          <Link href="/why">Why RustIO</Link>
          <Link href="/engine">The engine</Link>
          <Link href="/draft">rustio-draft</Link>
          <Link href="/#ecosystem">Ecosystem</Link>
        </div>

        <div className="fcol">
          <h6>Developers</h6>
          <a href={SITE.links.github} target="_blank" rel="noopener">GitHub</a>
          <a href={SITE.links.crates} target="_blank" rel="noopener">crates.io</a>
          <a href={SITE.links.docs} target="_blank" rel="noopener">docs.rs</a>
          <a href={SITE.links.releases} target="_blank" rel="noopener">Releases</a>
        </div>

        <div className="fcol">
          <h6>Support</h6>
          <a href={SITE.links.sponsors} target="_blank" rel="noopener">Sponsor</a>
          <Link href="/sponsors">Tiers</Link>
          <Link href="/sponsors">Commercial model</Link>
        </div>
      </div>
    </footer>
  );
}
