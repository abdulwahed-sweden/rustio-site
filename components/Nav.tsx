"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ACCENTS, AccentName, NAV_LINKS, SITE } from "@/lib/site";
import { Mark, Wordmark } from "./Mark";
import { GitHub, Moon, Sun } from "./Icons";

type Theme = "dark" | "light";

function rgba(hex: string, a: number) {
  const h = hex.replace("#", "");
  return `rgba(${parseInt(h.slice(0, 2), 16)},${parseInt(h.slice(2, 4), 16)},${parseInt(h.slice(4, 6), 16)},${a})`;
}

function applyAccent(name: AccentName) {
  const root = document.documentElement;
  const vars = ["--accent", "--accent-2", "--accent-ink", "--accent-deep", "--accent-soft", "--accent-line", "--accent-glow"];
  if (name === "Copper") {
    vars.forEach((v) => root.style.removeProperty(v)); // Copper = CSS defaults
    return;
  }
  const c = ACCENTS[name];
  root.style.setProperty("--accent", c.a);
  root.style.setProperty("--accent-2", c.a2);
  root.style.setProperty("--accent-ink", c.ink);
  root.style.setProperty("--accent-deep", c.deep);
  root.style.setProperty("--accent-soft", rgba(c.a, 0.13));
  root.style.setProperty("--accent-line", rgba(c.a, 0.34));
  root.style.setProperty("--accent-glow", rgba(c.a, 0.16));
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
