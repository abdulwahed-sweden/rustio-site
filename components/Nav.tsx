"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ACCENTS, AccentName, NAV_LINKS, SITE } from "@/lib/site";
import { Mark, Wordmark } from "./Mark";
import { GitHub, Moon, Sun } from "./Icons";

type Theme = "dark" | "light";

// Accent is a [data-accent] attribute; globals.css resolves the correct
// light/dark shade per theme, so this stays a single attribute toggle.
function applyAccent(name: AccentName) {
  document.documentElement.setAttribute("data-accent", name);
}

export function Nav() {
  const pathname = usePathname();
  const [theme, setTheme] = useState<Theme>("dark");
  const [accent, setAccent] = useState<AccentName>("Copper");

  // Sync from whatever the no-FOUC boot script already applied.
  useEffect(() => {
    const t = (localStorage.getItem("rio-site-theme") as Theme) || "dark";
    const a = (localStorage.getItem("rio-site-accent") as AccentName) || "Copper";
    setTheme(t);
    setAccent(a);
  }, []);

  function toggleTheme() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("rio-site-theme", next);
    } catch {}
  }

  function pickAccent(name: AccentName) {
    setAccent(name);
    applyAccent(name);
    try {
      localStorage.setItem("rio-site-accent", name);
    } catch {}
  }

  return (
    <nav>
      <div className="wrap nav-inner">
        <Link className="lockup" href="/" aria-label="RustIO home">
          <Mark />
          <Wordmark />
        </Link>

        <div className="nav-links">
          {NAV_LINKS.map((l) => {
            const active = pathname === l.href || pathname === l.href + "/";
            return (
              <Link key={l.href} href={l.href} className={active ? "on" : undefined}>
                {l.label}
              </Link>
            );
          })}
        </div>

        <div className="nav-right">
          <a className="ghlink" href={SITE.links.github} target="_blank" rel="noopener">
            <GitHub />
            <span>GitHub</span>
          </a>

          <button className="theme-btn" id="themeBtn" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === "dark" ? <Moon /> : <Sun />}
          </button>

          <div className="accent-swatches" role="group" aria-label="Accent color">
            {(Object.keys(ACCENTS) as AccentName[]).map((name) => (
              <button
                key={name}
                className={"sw-btn" + (accent === name ? " on" : "")}
                onClick={() => pickAccent(name)}
                style={{ ["--c" as string]: ACCENTS[name].a } as React.CSSProperties}
                aria-label={`${name} accent`}
                aria-pressed={accent === name}
              />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
