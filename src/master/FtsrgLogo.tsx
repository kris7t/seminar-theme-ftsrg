import { useId, type SVGProps } from 'react';
import { styled } from '@mui/material/styles';

import { SLANT_GAP, SLANT_TAN } from '../design';

// Glyph outlines from FTSRG_logo_white.eps, inlined so that the logo ends up
// in the single-file bundle without any asset handling. The coordinates are
// scaled uniformly and translated so that the bounding box starts at the
// origin.
const LOGO_PATHS = [
  // f
  'm 11.396,5.988 c -0.532,0.46 -0.834,1.137 -0.907,2.032 l -0.037,0.581 h 4.391 l -0.363,4.863 H 10.053 L 8.965,27.038 H 2.36 l 1.088,-13.573 H 0 l 0.4,-4.863 h 3.448 l 0.036,-0.654 c 0.194,-2.491 0.998,-4.439 2.414,-5.843 1.415,-1.403 3.369,-2.105 5.861,-2.105 1.427,0 2.553,0.169 3.375,0.508 l -0.363,5.045 c -0.677,-0.169 -1.27,-0.254 -1.778,-0.254 -0.799,0 -1.464,0.23 -1.996,0.69',
  // t
  'm 23.772,19.38 c -0.048,0.871 0.163,1.53 0.635,1.978 0.472,0.448 1.094,0.671 1.869,0.671 0.46,0 1.064,-0.084 1.815,-0.254 l -0.436,5.008 c -0.895,0.363 -2.057,0.544 -3.484,0.544 -2.299,0 -4.041,-0.611 -5.226,-1.832 -1.186,-1.221 -1.778,-2.934 -1.778,-5.135 0,-0.436 0.012,-0.763 0.036,-0.98 l 0.472,-5.916 h -3.448 l 0.399,-4.863 h 3.448 l 0.326,-4.174 6.75,-2.104 -0.508,6.278 H 29.07 l -0.363,4.863 h -4.464 l -0.472,5.916',
  // s
  'm 33.207,26.802 c -1.428,-0.351 -2.843,-0.913 -4.246,-1.688 l 2.069,-4.464 c 1.016,0.677 2.141,1.204 3.375,1.579 1.234,0.376 2.432,0.563 3.593,0.563 0.798,0 1.385,-0.102 1.76,-0.308 0.375,-0.205 0.563,-0.466 0.563,-0.781 0,-0.411 -0.26,-0.738 -0.78,-0.98 -0.52,-0.241 -1.337,-0.508 -2.449,-0.798 -1.355,-0.362 -2.475,-0.731 -3.358,-1.107 -0.883,-0.374 -1.65,-0.925 -2.304,-1.651 -0.653,-0.726 -0.98,-1.682 -0.98,-2.867 0,-1.209 0.351,-2.286 1.053,-3.23 0.701,-0.944 1.687,-1.675 2.957,-2.196 1.27,-0.52 2.728,-0.781 4.373,-0.781 1.403,0 2.801,0.2 4.192,0.599 1.391,0.4 2.57,0.938 3.538,1.615 l -1.996,4.355 c -0.943,-0.629 -1.924,-1.112 -2.94,-1.452 -1.016,-0.338 -1.996,-0.507 -2.94,-0.507 -0.798,0 -1.403,0.103 -1.815,0.308 -0.412,0.206 -0.617,0.466 -0.617,0.78 0,0.436 0.266,0.781 0.798,1.034 0.532,0.254 1.367,0.539 2.505,0.853 1.307,0.363 2.4,0.732 3.284,1.107 0.883,0.376 1.645,0.931 2.287,1.669 0.64,0.738 0.961,1.687 0.961,2.849 0,1.911 -0.732,3.393 -2.196,4.445 -1.464,1.053 -3.478,1.579 -6.042,1.579 -1.669,0 -3.218,-0.176 -4.645,-0.526',
  // r
  'm 62.24,8.565 -0.436,5.988 c -0.968,-0.484 -1.984,-0.726 -3.049,-0.726 -1.331,0 -2.372,0.303 -3.121,0.908 -0.751,0.605 -1.186,1.621 -1.307,3.049 l -0.726,9.254 h -6.568 l 1.052,-13.138 c 0.097,-1.693 0.145,-2.964 0.145,-3.811 0,-0.677 -0.013,-1.174 -0.036,-1.488 h 6.205 l 0.109,2.613 c 0.508,-0.944 1.276,-1.688 2.305,-2.232 1.028,-0.545 2.135,-0.817 3.321,-0.817 0.919,0 1.621,0.134 2.105,0.399',
  // g
  'm 75.903,20.396 c 0.69,-0.822 1.034,-1.911 1.034,-3.267 0,-1.379 -0.321,-2.407 -0.962,-3.084 -0.641,-0.677 -1.555,-1.017 -2.74,-1.017 -1.161,0 -2.087,0.412 -2.776,1.234 -0.689,0.823 -1.034,1.96 -1.034,3.412 0,1.234 0.327,2.202 0.98,2.904 0.653,0.702 1.56,1.052 2.722,1.052 1.161,0 2.087,-0.411 2.776,-1.234 z m 8.148,-11.795 -1.379,17.021 c -0.242,3.314 -1.288,5.734 -3.139,7.258 -1.851,1.524 -4.47,2.286 -7.858,2.286 -3.098,0 -5.783,-0.521 -8.057,-1.56 l 1.379,-4.863 c 2.128,1.064 4.439,1.597 6.932,1.597 1.282,0 2.274,-0.309 2.975,-0.925 0.702,-0.617 1.113,-1.615 1.234,-2.994 l 0.145,-1.996 c -1.283,1.403 -3.097,2.104 -5.444,2.104 -1.549,0 -2.921,-0.35 -4.119,-1.052 -1.197,-0.702 -2.13,-1.694 -2.794,-2.976 -0.666,-1.282 -0.998,-2.77 -0.998,-4.464 0,-1.862 0.376,-3.55 1.126,-5.063 0.749,-1.512 1.802,-2.704 3.157,-3.575 1.355,-0.871 2.903,-1.307 4.646,-1.307 2.395,0 4.246,0.847 5.552,2.541 l 0.145,-2.032 h 6.496',
  // dots
  'm 14.502,38.217 c 0,3.605 -2.922,6.527 -6.526,6.527 -3.604,0 -6.526,-2.922 -6.526,-6.527 0,-3.604 2.922,-6.525 6.526,-6.525 3.604,0 6.526,2.921 6.526,6.525',
  'm 36.346,38.217 c 0,3.605 -2.922,6.527 -6.526,6.527 -3.604,0 -6.526,-2.922 -6.526,-6.527 0,-3.604 2.922,-6.525 6.526,-6.525 3.604,0 6.526,2.921 6.526,6.525',
  'm 51.663,41.687 c -1.914,0 -3.47,-1.557 -3.47,-3.47 0,-1.913 1.556,-3.469 3.47,-3.469 1.913,0 3.469,1.556 3.469,3.469 0,1.914 -1.556,3.47 -3.469,3.47 z m 0,-10.203 c -3.713,0 -6.734,3.02 -6.734,6.732 0,3.713 3.021,6.733 6.734,6.733 3.713,0 6.733,-3.021 6.733,-6.733 0,-3.712 -3.02,-6.732 -6.733,-6.732',
];

// Exact bounding box of the glyphs.
const LOGO_VIEW_BOX_WIDTH = 84.051;
const LOGO_VIEW_BOX_HEIGHT = 44.95;
const LOGO_VIEW_BOX = `0 0 ${String(LOGO_VIEW_BOX_WIDTH)} ${String(LOGO_VIEW_BOX_HEIGHT)}`;

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
const BADGE_HEIGHT = 46;
// Width of the badge along its bottom edge.
const BADGE_WIDTH = 103.12;
const BADGE_SLANT = BADGE_HEIGHT * SLANT_TAN;
// The logo has LOGO_PADDING_TOP above and LOGO_PADDING_BOTTOM below it, and
// its center is LOGO_CENTER_X away from the right edge of the badge.
const LOGO_PADDING_TOP = 5.99;
const LOGO_PADDING_BOTTOM = 5.6;
const LOGO_CENTER_X = 44;
const LOGO_HEIGHT = BADGE_HEIGHT - LOGO_PADDING_TOP - LOGO_PADDING_BOTTOM;
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
const GRADIENT_LENGTH = 58.6;
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
          y={LOGO_PADDING_TOP}
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
