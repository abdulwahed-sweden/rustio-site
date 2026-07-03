// The RustIO mark: an open-aperture "O" ring (input port) around a copper "I" capsule (engine core).
export function Mark({
  sw = 7,
  cx = 44,
  cy = 30,
  cw = 12,
  ch = 40,
  crx = 6,
}: {
  sw?: number;
  cx?: number;
  cy?: number;
  cw?: number;
  ch?: number;
  crx?: number;
}) {
  return (
    <span className="mark">
      <svg viewBox="0 0 100 100" aria-hidden="true">
        <path className="ring" d="M59.83 13.3A38 38 0 1 1 40.17 13.3" strokeWidth={sw} />
        <rect className="core" x={cx} y={cy} width={cw} height={ch} rx={crx} />
      </svg>
    </span>
  );
}

export function Wordmark() {
  return (
    <span className="wm">
      Rust<b>IO</b>
    </span>
  );
}
