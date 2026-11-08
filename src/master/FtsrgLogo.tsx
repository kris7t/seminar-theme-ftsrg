import { useId, type SVGProps } from 'react';
import { styled } from '@mui/material/styles';

import { SLANT_GAP, SLANT_TAN } from '../design';

// Glyph outlines from ftsrg.svg, inlined so that the logo ends up in the
// single-file bundle without any asset handling.
const LOGO_PATHS = [
  // f
  'm 22.389707,33.948443 q -1.197623,0 -1.996038,0.68954 -0.798416,0.689541 -0.90729,2.03233 l -0.03629,0.580665 h 4.391284 l -0.362916,4.863075 H 19.050879 L 17.962132,55.687111 H 11.35706 L 12.445808,42.114053 H 8.9981065 l 0.3992076,-4.863075 h 3.4477019 l 0.03629,-0.653248 q 0.290332,-3.738035 2.395245,-5.842948 2.141205,-2.104913 5.879239,-2.104913 2.141205,0 3.375119,0.508083 l -0.362916,5.044532 Q 23.15183,33.948443 22.389707,33.948443 Z',
  // t
  'm 32.043255,48.029583 q -0.07258,1.306498 0.616957,1.996038 0.725832,0.653249 1.887163,0.653249 0.689541,0 1.81458,-0.254041 l -0.435499,5.008241 q -1.342789,0.544374 -3.483994,0.544374 -3.447701,0 -5.22599,-1.81458 -1.778288,-1.850872 -1.778288,-5.153407 0,-0.653249 0.03629,-0.979874 l 0.471791,-5.91553 h -3.447702 l 0.399208,-4.863075 h 3.447702 l 0.326624,-4.173533 6.750238,-2.104913 -0.508083,6.278446 h 4.427575 l -0.362916,4.863075 h -4.463866 z',
  // s
  'm 46.124378,55.977444 q -2.50412,0 -4.645325,-0.508083 -2.141204,-0.544374 -4.246117,-1.705705 l 2.068622,-4.463867 q 1.524247,1.016165 3.375118,1.596831 1.850872,0.544374 3.592869,0.544374 1.197622,0 1.741996,-0.290333 0.580666,-0.326624 0.580666,-0.798415 0,-0.616957 -0.798415,-0.979873 -0.762124,-0.362916 -2.431537,-0.798416 -2.03233,-0.544374 -3.375119,-1.088748 -1.306498,-0.580665 -2.286371,-1.669413 -0.979873,-1.088748 -0.979873,-2.867036 0,-1.81458 1.052456,-3.229953 1.052457,-1.415372 2.93962,-2.177496 1.923455,-0.798415 4.391283,-0.798415 2.104913,0 4.173534,0.616957 2.104913,0.580666 3.556577,1.596831 l -1.996038,4.354992 q -1.415372,-0.943582 -2.939619,-1.451664 -1.524248,-0.508083 -2.93962,-0.508083 -1.197623,0 -1.81458,0.326625 -0.616957,0.290332 -0.616957,0.762123 0,0.653249 0.798415,1.052457 0.798415,0.362916 2.50412,0.834706 1.959747,0.544374 3.266244,1.12504 1.342789,0.544374 2.286371,1.669413 0.979873,1.088748 0.979873,2.830745 0,2.867037 -2.213787,4.463867 -2.177496,1.560539 -6.024406,1.560539 z',
  // r
  'm 69.859062,36.815479 q 1.37908,0 2.104912,0.399208 l -0.435499,5.988114 q -1.451664,-0.725832 -3.048494,-0.725832 -1.996038,0 -3.121078,0.90729 -1.125039,0.90729 -1.306497,3.048494 l -0.725832,9.254358 h -6.56878 l 1.052457,-13.137559 q 0.145166,-2.540412 0.145166,-3.810618 0,-1.016165 -0.03629,-1.487956 h 6.205863 l 0.108875,2.612996 q 0.762123,-1.415373 2.286371,-2.213788 1.560538,-0.834707 3.338826,-0.834707 z',
  // g
  'm 93.049369,37.250978 -1.379081,17.020761 q -0.362916,4.971949 -3.157369,7.258319 -2.758162,2.286371 -7.838985,2.286371 -4.645325,0 -8.056736,-1.560539 l 1.379081,-4.863074 q 3.193661,1.59683 6.931696,1.59683 1.923454,0 2.975911,-0.943581 1.052456,-0.90729 1.233914,-2.975911 l 0.145167,-1.996038 q -1.923455,2.104913 -5.44374,2.104913 -2.322663,0 -4.137243,-1.052457 -1.778288,-1.052456 -2.794453,-2.975911 -0.979873,-1.923455 -0.979873,-4.463867 0,-2.794453 1.12504,-5.044532 1.125039,-2.286371 3.157369,-3.592868 2.032329,-1.306498 4.645325,-1.306498 3.592868,0 5.552614,2.540412 l 0.145167,-2.03233 z M 82.125597,50.279663 q 1.741997,0 2.758162,-1.233915 1.052456,-1.233914 1.052456,-3.266244 0,-2.068621 -0.979873,-3.084786 -0.943581,-1.016164 -2.72187,-1.016164 -1.741996,0 -2.794453,1.233914 -1.016165,1.233914 -1.016165,3.41141 0,1.850872 0.979874,2.903328 0.979873,1.052457 2.721869,1.052457 z',
  // dots
  'm 22.645,66.879 c 0,3.598 -2.918,6.519 -6.52,6.519 -3.602,0 -6.52,-2.921 -6.52,-6.519 0,-3.602 2.918,-6.524 6.52,-6.524 3.602,0 6.52,2.922 6.52,6.524 z',
  'm 44.859,66.879 c 0,3.598 -2.921,6.519 -6.519,6.519 -3.602,0 -6.524,-2.921 -6.524,-6.519 0,-3.602 2.922,-6.524 6.524,-6.524 3.598,0 6.519,2.922 6.519,6.524 z',
  // The last dot is a ring in the official logo (but not in ftsrg.svg), so we
  // cut a hole into it, measured from ftsrg.png. The hole winds in the
  // opposite direction, so that the nonzero fill rule leaves it empty.
  'm 67.074,66.879 c 0,3.598 -2.922,6.519 -6.523,6.519 -3.598,0 -6.52,-2.921 -6.52,-6.519 0,-3.602 2.922,-6.524 6.52,-6.524 3.601,0 6.523,2.922 6.523,6.524 z M 63.951,66.879 a 3.4,3.4 0 0 0 -6.8,0 a 3.4,3.4 0 0 0 6.8,0 z',
];

// Exact bounding box of the glyphs (as reported by getBBox()).
const LOGO_VIEW_BOX_WIDTH = 84.051;
const LOGO_VIEW_BOX_HEIGHT = 44.748;
const LOGO_VIEW_BOX = `8.998 28.65 ${String(LOGO_VIEW_BOX_WIDTH)} ${String(LOGO_VIEW_BOX_HEIGHT)}`;

function LogoGlyphs() {
  return (
    <g fill="currentColor">
      {LOGO_PATHS.map((d) => (
        <path key={d} d={d} />
      ))}
    </g>
  );
}

/**
 * The bare ftsrg wordmark, filled with `currentColor`.
 */
export function FtsrgLogo({ role = 'img', ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox={LOGO_VIEW_BOX} role={role} aria-label="ftsrg" {...props}>
      <LogoGlyphs />
    </svg>
  );
}

// Corner badge geometry, in CSS pixels (the badge is always BADGE_HEIGHT tall,
// which matches the height of the footer). All proportions are measured from
// the FTSRG PowerPoint template.
const BADGE_HEIGHT = 48;
// Width of the badge along its bottom edge.
const BADGE_WIDTH = 107.6;
const BADGE_SLANT = BADGE_HEIGHT * SLANT_TAN;
// The logo is centered vertically with LOGO_PADDING_Y above and below it,
// and its center is LOGO_CENTER_X away from the right edge of the badge.
const LOGO_PADDING_Y = 5.96;
const LOGO_CENTER_X = 46;
const LOGO_HEIGHT = BADGE_HEIGHT - 2 * LOGO_PADDING_Y;
const LOGO_WIDTH = LOGO_HEIGHT * (LOGO_VIEW_BOX_WIDTH / LOGO_VIEW_BOX_HEIGHT);
const LOGO_X = BADGE_WIDTH - LOGO_CENTER_X - LOGO_WIDTH / 2;
// The badge sits in the bottom-right corner of the slide. We let it overflow
// the right and bottom edges (the slide clips it) so that the slide
// background doesn't shine through the antialiased edges.
const BADGE_BLEED = 2;
// The SVG also draws the slanted end of the footer, and starts where the
// footer's rectangular part ends. We overlap them a bit to avoid a seam.
const FOOTER_OVERLAP = 2;
const VIEW_BOX_X = -SLANT_GAP;
const VIEW_BOX_WIDTH = BADGE_WIDTH - VIEW_BOX_X;
// The gradient starts flat at GRADIENT_START in the top-left of the badge,
// then ramps linearly to GRADIENT_END at the bottom-right corner over
// GRADIENT_LENGTH, in the direction GRADIENT_ANGLE_DEG (clockwise from the
// horizontal).
const GRADIENT_START = '#283c88';
const GRADIENT_END = '#5f2c60';
const GRADIENT_ANGLE_DEG = 64.2;
const GRADIENT_LENGTH = 61.15;
const GRADIENT_DX =
  GRADIENT_LENGTH * Math.cos((GRADIENT_ANGLE_DEG * Math.PI) / 180);
const GRADIENT_DY =
  GRADIENT_LENGTH * Math.sin((GRADIENT_ANGLE_DEG * Math.PI) / 180);
// Beyond the bottom-right corner, the gradient continues to HOVER_END over
// HOVER_SHIFT. This part lies outside the badge until the gradient slides back
// horizontally on hover, far enough to advance it by HOVER_SHIFT.
const HOVER_END = '#9f172d';
const HOVER_SHIFT = GRADIENT_LENGTH;
const HOVER_END_DX =
  HOVER_SHIFT * Math.cos((GRADIENT_ANGLE_DEG * Math.PI) / 180);
const HOVER_END_DY =
  HOVER_SHIFT * Math.sin((GRADIENT_ANGLE_DEG * Math.PI) / 180);
const HOVER_SHIFT_X =
  HOVER_SHIFT / Math.cos((GRADIENT_ANGLE_DEG * Math.PI) / 180);
const BADGE_POINTS = [
  [BADGE_SLANT, 0],
  [BADGE_WIDTH + BADGE_BLEED, 0],
  [BADGE_WIDTH + BADGE_BLEED, BADGE_HEIGHT + BADGE_BLEED],
  [-BADGE_BLEED * SLANT_TAN, BADGE_HEIGHT + BADGE_BLEED],
].join(' ');
// The focus ring is inset from the edges of the badge, so that it stands out
// from the white surroundings of the badge.
const FOCUS_RING_INSET = 2;
const FOCUS_RING_WIDTH = 1;
// Horizontal offset that moves the slanted edge FOCUS_RING_INSET inwards.
const FOCUS_RING_SLANT_INSET = FOCUS_RING_INSET * Math.hypot(1, SLANT_TAN);
const FOCUS_RING_POINTS = [
  [
    BADGE_SLANT * (1 - FOCUS_RING_INSET / BADGE_HEIGHT) +
      FOCUS_RING_SLANT_INSET,
    FOCUS_RING_INSET,
  ],
  [BADGE_WIDTH - FOCUS_RING_INSET, FOCUS_RING_INSET],
  [BADGE_WIDTH - FOCUS_RING_INSET, BADGE_HEIGHT - FOCUS_RING_INSET],
  [
    BADGE_SLANT * (FOCUS_RING_INSET / BADGE_HEIGHT) + FOCUS_RING_SLANT_INSET,
    BADGE_HEIGHT - FOCUS_RING_INSET,
  ],
].join(' ');

const FtsrgCornerLogoRoot = styled('svg', {
  name: 'FtsrgCornerLogo',
  slot: 'Root',
})({
  display: 'block',
  height: BADGE_HEIGHT,
  overflow: 'visible',
  aspectRatio: `${String(VIEW_BOX_WIDTH)} / ${String(BADGE_HEIGHT)}`,
});

const FTSRG_URL = 'https://ftsrg.mit.bme.hu';

const FtsrgCornerLogoBadge = styled('a', {
  name: 'FtsrgCornerLogo',
  slot: 'Badge',
})({
  outline: 'none',
  '&:hover linearGradient, &:focus-visible linearGradient': {
    transform: `translateX(${String(-HOVER_SHIFT_X)}px)`,
  },
  // The default outline would follow the bounding box of the shifting
  // gradient, so we draw a ring along the badge outline instead.
  '&:focus-visible > polygon': {
    visibility: 'visible',
  },
});

const FtsrgCornerLogoFocusRing = styled('polygon', {
  name: 'FtsrgCornerLogo',
  slot: 'FocusRing',
})({
  visibility: 'hidden',
  fill: 'none',
  stroke: '#fff',
});

// We move the gradient itself (rather than a clipped shape filled with it), so
// that the badge's edges are antialiased like the rest of the footer.
const FtsrgCornerLogoGradient = styled('linearGradient', {
  name: 'FtsrgCornerLogo',
  slot: 'Gradient',
})(({ theme }) => ({
  '@media (prefers-reduced-motion: no-preference)': {
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.standard,
      easing: theme.transitions.easing.easeInOut,
    }),
  },
}));

export interface FtsrgCornerLogoProps {
  className?: string;
  /** Color of the footer that ends in a slant in front of the badge. */
  footerColor: string;
}

/**
 * The ftsrg logo on a slanted gradient badge, sized to fill the height of its
 * container (e.g., the slide footer). Place it right after a rectangle of
 * `footerColor`, which it continues with a slanted end and a gap.
 *
 * Drawing the slanted end here (rather than clipping the footer with CSS)
 * keeps it pixel-aligned with the badge at every scale.
 */
export function FtsrgCornerLogo({
  className,
  footerColor,
}: FtsrgCornerLogoProps) {
  // Every slide renders its own copy, so the ids must be unique.
  const gradientId = useId();
  return (
    <FtsrgCornerLogoRoot
      className={className}
      viewBox={`${String(VIEW_BOX_X)} 0 ${String(VIEW_BOX_WIDTH)} ${String(BADGE_HEIGHT)}`}
    >
      <polygon
        fill={footerColor}
        points={[
          [VIEW_BOX_X - FOOTER_OVERLAP, 0],
          [BADGE_SLANT - SLANT_GAP, 0],
          [-SLANT_GAP, BADGE_HEIGHT],
          [VIEW_BOX_X - FOOTER_OVERLAP, BADGE_HEIGHT],
        ].join(' ')}
      />
      <FtsrgCornerLogoBadge
        href={FTSRG_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="ftsrg"
      >
        <defs>
          <FtsrgCornerLogoGradient
            id={gradientId}
            gradientUnits="userSpaceOnUse"
            x1={BADGE_WIDTH - GRADIENT_DX}
            y1={BADGE_HEIGHT - GRADIENT_DY}
            x2={BADGE_WIDTH + HOVER_END_DX}
            y2={BADGE_HEIGHT + HOVER_END_DY}
          >
            <stop offset="0" stopColor={GRADIENT_START} />
            <stop
              offset={GRADIENT_LENGTH / (GRADIENT_LENGTH + HOVER_SHIFT)}
              stopColor={GRADIENT_END}
            />
            <stop offset="1" stopColor={HOVER_END} />
          </FtsrgCornerLogoGradient>
        </defs>
        <polygon fill={`url(#${gradientId})`} points={BADGE_POINTS} />
        <svg
          x={LOGO_X}
          y={LOGO_PADDING_Y}
          width={LOGO_WIDTH}
          height={LOGO_HEIGHT}
          viewBox={LOGO_VIEW_BOX}
          color="#fff"
        >
          <LogoGlyphs />
        </svg>
        <FtsrgCornerLogoFocusRing
          strokeWidth={FOCUS_RING_WIDTH}
          points={FOCUS_RING_POINTS}
        />
      </FtsrgCornerLogoBadge>
    </FtsrgCornerLogoRoot>
  );
}
