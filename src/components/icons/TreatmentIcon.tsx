/* ================================================================
   TreatmentIcon — shared inline-SVG icon set for treatment cards,
   the nav mega-menu, treatment detail pages and case-study labels.
   ----------------------------------------------------------------
   Replaces the earlier Unicode glyphs (◈ ✦ ◉ ⬡ …) with a small,
   consistent set of hand-drawn line icons — same 24×24 viewBox,
   same stroke weight, sized in `em` so every existing container
   (which previously sized a text glyph via font-size) scales the
   icon automatically with zero CSS changes required at call sites.
   No icon library dependency — just inline SVG.
   ================================================================ */

export type TreatmentIconName =
  | 'aligner-tray'
  | 'implant-post'
  | 'sparkle-smile'
  | 'tooth-pulse'
  | 'tooth'
  | 'surgical-target'
  | 'droplet-glow'
  | 'vial-drop'
  | 'texture-dots'
  | 'medical-heart';

interface TreatmentIconProps {
  name: TreatmentIconName;
  className?: string;
}

const STROKE = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

const PATHS: Record<TreatmentIconName, React.ReactNode> = {
  'aligner-tray': (
    <>
      <rect x="4.5" y="8" width="15" height="8" rx="4" {...STROKE} />
      <path d="M4.5 12h15" {...STROKE} />
    </>
  ),
  'implant-post': (
    <>
      <path d="M12 3l4 2.2v3.2L12 10.6l-4-2.2V5.2L12 3z" {...STROKE} />
      <path d="M12 10.6V16" {...STROKE} />
      <path d="M9 20h6" {...STROKE} />
      <path d="M12 16v4" {...STROKE} />
    </>
  ),
  'sparkle-smile': (
    <>
      <path d="M6.5 10.5a5.5 5.5 0 0 0 11 0" {...STROKE} />
      <path d="M13 3.2l.85 2.15L16 6.2l-2.15.85L13 9.2l-.85-2.15L10 6.2l2.15-.85L13 3.2z" {...STROKE} />
    </>
  ),
  'tooth-pulse': (
    <>
      <path
        d="M12 4.2c-2.3 0-4.2 1.4-4.2 3.6 0 2.8.8 4 1.2 7.2.2 1.8.6 3.8 1.5 3.8.9 0 1-2.4 1.5-3.6.2-.5.9-.5 1.1 0 .5 1.2.6 3.6 1.5 3.6.9 0 1.3-2 1.5-3.8.4-3.2 1.2-4.4 1.2-7.2 0-2.2-1.9-3.6-4.2-3.6z"
        {...STROKE}
      />
      <path d="M9 11.2h1.6l1-2 1.1 3.6 1-2H16" {...STROKE} />
    </>
  ),
  tooth: (
    <path
      d="M12 4.2c-2.3 0-4.2 1.4-4.2 3.6 0 2.8.8 4 1.2 7.2.2 1.8.6 3.8 1.5 3.8.9 0 1-2.4 1.5-3.6.2-.5.9-.5 1.1 0 .5 1.2.6 3.6 1.5 3.6.9 0 1.3-2 1.5-3.8.4-3.2 1.2-4.4 1.2-7.2 0-2.2-1.9-3.6-4.2-3.6z"
      {...STROKE}
    />
  ),
  'surgical-target': (
    <>
      <circle cx="12" cy="12" r="7.5" {...STROKE} />
      <path d="M12 7.5V11M12 13v3.5M7.5 12H11M13 12h3.5" {...STROKE} />
    </>
  ),
  'droplet-glow': (
    <>
      <path d="M12 3.5c2.8 3.7 4.6 6.6 4.6 9.2a4.6 4.6 0 0 1-9.2 0c0-2.6 1.8-5.5 4.6-9.2z" {...STROKE} />
      <path d="M17.3 5.6l.5 1.3 1.3.5-1.3.5-.5 1.3-.5-1.3-1.3-.5 1.3-.5.5-1.3z" {...STROKE} />
    </>
  ),
  'vial-drop': (
    <>
      <rect x="9.2" y="3.2" width="5.6" height="5.2" rx="1" {...STROKE} />
      <path d="M10.2 8.4l-1.7 7.4a3.6 3.6 0 0 0 7.1 0l-1.7-7.4" {...STROKE} />
    </>
  ),
  'texture-dots': (
    <>
      <circle cx="12" cy="12" r="7.5" {...STROKE} />
      <circle cx="9.2" cy="9.8" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="14.3" cy="9" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="15.1" cy="13.8" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="9" cy="14.6" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="12" cy="12" r="0.9" fill="currentColor" stroke="none" />
    </>
  ),
  'medical-heart': (
    <>
      <path
        d="M12 19.5s-6.4-4-8.2-8.1a4.4 4.4 0 0 1 8.2-2.7 4.4 4.4 0 0 1 8.2 2.7c-1.8 4.1-8.2 8.1-8.2 8.1z"
        {...STROKE}
      />
      <path d="M12 9.6v3.4M10.3 11.3h3.4" {...STROKE} />
    </>
  ),
};

export default function TreatmentIcon({ name, className }: TreatmentIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="1.15em"
      height="1.15em"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {PATHS[name]}
    </svg>
  );
}
