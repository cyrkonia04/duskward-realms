/**
 * ORNAMENTAL DIVIDER — line ✦ ornament ✦ line
 * Drop-in replacement for the plain "line + ✦ + line" rule used under
 * SectionHeading / PageHeader. Pick a variant once, the whole site follows.
 *
 * Variant gallery (live demos on /style-lab):
 *   baseline    — the current divider, for honest side-by-side comparison
 *   vesper      — crescent moon cradling a spark (the dusk itself; site motif)
 *   reliquary   — outlined diamond with a solid gem heart, flanked by shards
 *   shrine      — a tiny lancet arch (gothic window) enshrining a gem
 *
 * All ornaments are inline SVGs painted with currentColor, so the wrapper's
 * text color controls the whole divider. Lines use the same border-t style
 * as the existing SectionHeading rule, so spacing stays identical.
 */

const Ornaments = {
  baseline: () => (
    <span className="text-xs leading-none" aria-hidden="true">
      ✦
    </span>
  ),

  vesper: () => (
    <svg viewBox="0 0 34 32" className="h-5 w-auto" fill="currentColor" aria-hidden="true">
      {/* crescent: outer arc sweeps the far left, inner arc returns shallow */}
      <path d="M14 4 A12 12 0 0 0 14 28 A17 17 0 0 1 14 4 Z" />
      {/* spark in the crescent's opening */}
      <path
        opacity="0.85"
        d="M24.5 9.5
           C24.95 13.24 27.26 15.05 30.5 15.5
           C27.26 15.95 24.95 17.76 24.5 21.5
           C24.05 17.76 21.74 15.95 18.5 15.5
           C21.74 15.05 24.05 13.24 24.5 9.5 Z"
      />
    </svg>
  ),

  reliquary: () => (
    <svg viewBox="0 0 34 32" className="h-5 w-auto" aria-hidden="true">
      <path d="M17 6 L27 16 L17 26 L7 16 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M17 11.5 L21.5 16 L17 20.5 L12.5 16 Z" fill="currentColor" />
      <path d="M4 14 L6 16 L4 18 L2 16 Z" fill="currentColor" opacity="0.7" />
      <path d="M30 14 L32 16 L30 18 L28 16 Z" fill="currentColor" opacity="0.7" />
    </svg>
  ),

  shrine: () => (
    <svg
      viewBox="0 0 34 32"
      className="h-5 w-auto"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden="true"
    >
      {/* lancet arch */}
      <path d="M11 27 L11 13 C11 7 13 4.5 17 3.5 C21 4.5 23 7 23 13 L23 27" />
      {/* enshrined gem */}
      <path d="M17 12.5 L19.5 16 L17 19.5 L14.5 16 Z" fill="currentColor" stroke="none" />
    </svg>
  ),
};

export default function OrnamentalDivider({
  variant = 'vesper',
  lineClass = 'w-16',
  className = '',
}) {
  const Ornament = Ornaments[variant] ?? Ornaments.vesper;

  return (
    <div
      className={`flex items-center justify-center gap-2 text-gothic-gold/60 ${className}`}
      role="presentation"
    >
      <span className={`h-px border-t border-gothic-gold/40 ${lineClass}`} />
      <Ornament />
      <span className={`h-px border-t border-gothic-gold/40 ${lineClass}`} />
    </div>
  );
}
