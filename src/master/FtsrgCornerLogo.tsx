import { useId } from 'react';
import { useSlideView } from '@seminar/core';
import { styled } from '@mui/material/styles';

import { SLANT_GAP, SLANT_TAN } from '../design';
import {
  LOGO_VIEW_BOX,
  LOGO_VIEW_BOX_HEIGHT,
  LOGO_VIEW_BOX_WIDTH,
  LogoGlyphs,
} from '../logos/FtsrgLogo';

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
  shouldForwardProp: (prop) => prop !== 'interactive',
})<{ interactive: boolean }>(({ interactive }) => ({
  outline: 'none',
  // Only the view the presenter interacts with reacts to the pointer, and not,
  // e.g., the thumbnails of the overview.
  ...(interactive && {
    '&:hover linearGradient, &:focus-visible linearGradient': {
      transform: `translateX(${String(-HOVER_SHIFT_X)}px)`,
    },
  }),
  // The default outline would follow the bounding box of the shifting
  // gradient, so we draw a ring along the badge outline instead.
  '&:focus-visible > polygon': {
    visibility: 'visible',
  },
}));

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
  const { interactive } = useSlideView();
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
        interactive={interactive}
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
