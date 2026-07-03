"use client";

import { useState } from "react";
import { CopyGlyph } from "./Icons";

export function Cmd({ cmd, icon = false }: { cmd: string; icon?: boolean }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(cmd);
    } catch {
      const a = document.createElement("textarea");
      a.value = cmd;
      document.body.appendChild(a);
      a.select();
      try {
        document.execCommand("copy");
      } catch {}
      a.remove();
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  }

  return (
    <div className="cmd" onClick={copy} role="button" tabIndex={0} aria-label={`Copy: ${cmd}`}>
      <span className="l">
        <span className="pr">$</span>
        <span>{cmd}</span>
      </span>
      <span className="cp">
        {icon && <CopyGlyph />}
        {copied ? "Copied ✓" : "copy"}
      </span>
    </div>
  );
}
