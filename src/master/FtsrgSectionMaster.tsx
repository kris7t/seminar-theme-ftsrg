import {
  Paragraph,
  SLIDE_HEIGHT,
  SLIDE_WIDTH,
  type SlideMasterProps,
} from '@seminar/core';
import { styled, useTheme } from '@mui/material/styles';
import { useThemeProps } from '@mui/material';
import {
  Children,
  isValidElement,
  useEffect,
  useId,
  useRef,
  type ReactNode,
} from 'react';

import { SLANT_GAP, SLANT_TAN } from '../design';
import { FtsrgSlideMaster } from './FtsrgSlideMaster';
import {
  TITLE_BACKGROUND_HEIGHT,
  TITLE_BACKGROUND_IMAGE,
  TITLE_BACKGROUND_TOP,
  TITLE_GRADIENT,
} from './FtsrgTitleMaster';
import {
  type Point,
  useGradientFollowsPointer,
} from './useGradientFollowsPointer';

// The block on the left is vertically centered on the slide. At its mid-height,
// the gap between the block and the outline on the right is centered on the
// slide, and as wide (horizontally) as the gap between other slanted elements.
// Section slides fill the block with the background of the title slide, while
// subsection slides draw an outline around it, like the one on the right.
const BLOCK_HEIGHT = 312;
const BLOCK_TOP = (SLIDE_HEIGHT - BLOCK_HEIGHT) / 2;
const BLOCK_BOTTOM = BLOCK_TOP + BLOCK_HEIGHT;
const BLOCK_MID_X = SLIDE_WIDTH / 2 - SLANT_GAP / 2;
// Outlines are aligned with the outside of their stroke to the top and bottom
// of the block, and to the side of the gap.
const OUTLINE_WIDTH = 4;
const OUTLINE_TOP = BLOCK_TOP + OUTLINE_WIDTH / 2;
const OUTLINE_BOTTOM = BLOCK_BOTTOM - OUTLINE_WIDTH / 2;
// Horizontal width of the stroke along a slanted edge.
const OUTLINE_SLANTED_WIDTH = OUTLINE_WIDTH * Math.hypot(1, SLANT_TAN);
// The stroke is centered on its path, so we move the slanted side of the path
// away from the gap by half of the stroke's horizontal width.
const OUTLINE_MID_X =
  SLIDE_WIDTH / 2 + SLANT_GAP / 2 + OUTLINE_SLANTED_WIDTH / 2;
const BLOCK_OUTLINE_MID_X = BLOCK_MID_X - OUTLINE_SLANTED_WIDTH / 2;

/** The x coordinate at height y of a slanted edge that is at midX in the middle. */
function slantX(midX: number, y: number) {
  return midX + (SLIDE_HEIGHT / 2 - y) * SLANT_TAN;
}

const BLOCK_POINTS = [
  [0, BLOCK_TOP],
  [slantX(BLOCK_MID_X, BLOCK_TOP), BLOCK_TOP],
  [slantX(BLOCK_MID_X, BLOCK_BOTTOM), BLOCK_BOTTOM],
  [0, BLOCK_BOTTOM],
].join(' ');

// The outlines continue past the edges of the slide, so that their outer sides
// are not visible.
const BLOCK_OUTLINE_POINTS = [
  [-OUTLINE_WIDTH, OUTLINE_TOP],
  [slantX(BLOCK_OUTLINE_MID_X, OUTLINE_TOP), OUTLINE_TOP],
  [slantX(BLOCK_OUTLINE_MID_X, OUTLINE_BOTTOM), OUTLINE_BOTTOM],
  [-OUTLINE_WIDTH, OUTLINE_BOTTOM],
].join(' ');

const OUTLINE_POINTS = [
  [slantX(OUTLINE_MID_X, OUTLINE_TOP), OUTLINE_TOP],
  [SLIDE_WIDTH + OUTLINE_WIDTH, OUTLINE_TOP],
  [SLIDE_WIDTH + OUTLINE_WIDTH, OUTLINE_BOTTOM],
  [slantX(OUTLINE_MID_X, OUTLINE_BOTTOM), OUTLINE_BOTTOM],
].join(' ');

const FtsrgSectionMasterBackground = styled('svg', {
  name: 'FtsrgSectionMaster',
  slot: 'Background',
})({
  position: 'absolute',
  top: 0,
  left: 0,
  width: SLIDE_WIDTH,
  height: SLIDE_HEIGHT,
  overflow: 'visible',
  pointerEvents: 'none',
});

interface VariantProps {
  /** Whether the block is filled with the background of the title slide. */
  filled: boolean;
}

// Text inside the block, which ends where the slanted edge leaves the least
// space (at the bottom).
const FtsrgSectionMasterBlock = styled('div', {
  name: 'FtsrgSectionMaster',
  slot: 'Block',
  shouldForwardProp: (prop) => prop !== 'filled',
})<VariantProps>(({ theme, filled }) => ({
  position: 'absolute',
  top: BLOCK_TOP,
  left: 0,
  width: filled
    ? slantX(BLOCK_MID_X, BLOCK_BOTTOM)
    : slantX(BLOCK_MID_X - OUTLINE_SLANTED_WIDTH, BLOCK_BOTTOM - OUTLINE_WIDTH),
  height: BLOCK_HEIGHT,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: theme.spacing(3),
  // Align with the content of the other slides.
  padding: theme.spacing(0, 8),
  color: filled ? theme.palette.primary.contrastText : undefined,
}));

// Further content inside the outline, starting after the slanted edge where it
// leaves the least space (at the top), and aligned to the right with the
// content of the other slides.
const OUTLINE_INNER_LEFT = slantX(
  OUTLINE_MID_X + OUTLINE_SLANTED_WIDTH / 2,
  BLOCK_TOP + OUTLINE_WIDTH,
);

const FtsrgSectionMasterAside = styled('div', {
  name: 'FtsrgSectionMaster',
  slot: 'Aside',
})(({ theme }) => ({
  position: 'absolute',
  top: BLOCK_TOP + OUTLINE_WIDTH,
  left: OUTLINE_INNER_LEFT,
  right: 0,
  height: BLOCK_HEIGHT - 2 * OUTLINE_WIDTH,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: theme.spacing(3),
  padding: theme.spacing(0, 8, 0, 4),
  '& > *': {
    margin: 0,
  },
}));

const FtsrgSectionMasterTitle = styled('h1', {
  name: 'FtsrgSectionMaster',
  slot: 'Title',
})(({ theme }) => ({
  ...theme.typography.h2,
  margin: 0,
}));

const FtsrgSectionMasterSubtitle = styled('div', {
  name: 'FtsrgSectionMaster',
  slot: 'Subtitle',
})(({ theme }) => ({
  ...theme.typography.subtitle1,
  '& > *': {
    margin: 0,
  },
}));

/**
 * Background of section and subsection slides: a block with a slanted edge,
 * either filled with the title slide's background or outlined, and an outline
 * after it, like the footer.
 */
function SectionBackground({ filled }: VariantProps) {
  const { palette } = useTheme();
  return (
    <FtsrgSectionMasterBackground
      viewBox={`0 0 ${String(SLIDE_WIDTH)} ${String(SLIDE_HEIGHT)}`}
    >
      {filled ? (
        <FilledBlock />
      ) : (
        <polygon
          fill="none"
          stroke={palette.neutral.main}
          strokeWidth={OUTLINE_WIDTH}
          points={BLOCK_OUTLINE_POINTS}
        />
      )}
      <polygon
        fill="none"
        stroke={palette.neutral.main}
        strokeWidth={OUTLINE_WIDTH}
        points={OUTLINE_POINTS}
      />
    </FtsrgSectionMasterBackground>
  );
}

/** Whether the point (in slide coordinates) is inside the block. */
function isInBlock({ x, y }: Point) {
  return (
    y >= BLOCK_TOP && y <= BLOCK_BOTTOM && x >= 0 && x <= slantX(BLOCK_MID_X, y)
  );
}

// The resting center of the gradient of the title slide, in slide coordinates.
const GRADIENT_REST: Point = {
  x: SLIDE_WIDTH * TITLE_GRADIENT.x,
  y: TITLE_BACKGROUND_TOP + TITLE_BACKGROUND_HEIGHT * TITLE_GRADIENT.y,
};

/**
 * The radius of the gradient of the title slide centered at `center`, which
 * reaches the farthest corner of the background block of the title slide.
 */
function gradientRadius({ x, y }: Point) {
  return Math.hypot(
    Math.max(x, SLIDE_WIDTH - x),
    Math.max(
      y - TITLE_BACKGROUND_TOP,
      TITLE_BACKGROUND_TOP + TITLE_BACKGROUND_HEIGHT - y,
    ),
  );
}

/** The block filled with the background of the title slide. */
function FilledBlock() {
  // Every slide renders its own copy, so the ids must be unique.
  const clipId = useId();
  const gradientId = useId();
  const groupRef = useRef<SVGGElement>(null);
  const gradientRef = useRef<SVGRadialGradientElement>(null);
  // Like on the title slide, the center of the gradient follows the pointer
  // while it is over the block. We update the gradient directly (instead of
  // re-rendering) to keep pointer moves cheap.
  const follower = useGradientFollowsPointer(GRADIENT_REST, (center) => {
    const gradient = gradientRef.current;
    gradient?.setAttribute('cx', String(center.x));
    gradient?.setAttribute('cy', String(center.y));
    gradient?.setAttribute('r', String(gradientRadius(center)));
  });

  useEffect(() => {
    const svg = groupRef.current?.ownerSVGElement;
    // The background ignores the pointer, and the content of the slide covers
    // the block anyway, so we track the pointer over the whole content area.
    const area = svg?.parentElement;
    if (!svg || !area) {
      return undefined;
    }
    let inside = false;
    const handlePointerMove = (event: PointerEvent) => {
      // Maps the pointer to slide coordinates, accounting for the scaling of
      // the slide.
      const matrix = svg.getScreenCTM()?.inverse();
      if (!matrix) {
        return;
      }
      const { x, y } = new DOMPoint(
        event.clientX,
        event.clientY,
      ).matrixTransform(matrix);
      const point = { x, y };
      if (!isInBlock(point)) {
        if (inside) {
          inside = false;
          follower.leave();
        }
      } else if (inside) {
        follower.move(point);
      } else {
        inside = true;
        follower.enter(point);
      }
    };
    const handlePointerLeave = () => {
      if (inside) {
        inside = false;
        follower.leave();
      }
    };
    area.addEventListener('pointermove', handlePointerMove);
    area.addEventListener('pointerleave', handlePointerLeave);
    return () => {
      area.removeEventListener('pointermove', handlePointerMove);
      area.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, [follower]);

  // We draw the background of the title slide in exactly the same place (a
  // `contain`ed image over a radial gradient reaching the farthest corner), and
  // clip it to the block. Unlike a <pattern>, this draws the image at the
  // resolution of the screen, like the CSS background of the title slide.
  return (
    <>
      <defs>
        <radialGradient
          ref={gradientRef}
          id={gradientId}
          gradientUnits="userSpaceOnUse"
          cx={GRADIENT_REST.x}
          cy={GRADIENT_REST.y}
          r={gradientRadius(GRADIENT_REST)}
        >
          <stop offset="0" stopColor={TITLE_GRADIENT.inner} />
          <stop offset="1" stopColor={TITLE_GRADIENT.outer} />
        </radialGradient>
        <clipPath id={clipId}>
          <polygon points={BLOCK_POINTS} />
        </clipPath>
      </defs>
      <g ref={groupRef} clipPath={`url(#${clipId})`}>
        <rect
          y={TITLE_BACKGROUND_TOP}
          width={SLIDE_WIDTH}
          height={TITLE_BACKGROUND_HEIGHT}
          fill={`url(#${gradientId})`}
        />
        <image
          href={TITLE_BACKGROUND_IMAGE}
          y={TITLE_BACKGROUND_TOP}
          width={SLIDE_WIDTH}
          height={TITLE_BACKGROUND_HEIGHT}
          preserveAspectRatio="xMidYMid meet"
        />
      </g>
    </>
  );
}

/** Whether `node` is a paragraph (as rendered from Markdown or JSX). */
function isParagraph(node: ReactNode): boolean {
  return isValidElement(node) && (node.type === Paragraph || node.type === 'p');
}

/**
 * Splits the content of the slide into the subtitle, if the first element is
 * a paragraph, and the rest. Ignores the whitespace between elements.
 */
function splitSubtitle(children: ReactNode): [ReactNode, ReactNode[]] {
  // eslint-disable-next-line @eslint-react/no-children-to-array -- The master splits the content of the slide.
  const nodes = Children.toArray(children).filter(
    (child) => typeof child !== 'string' || child.trim() !== '',
  );
  if (nodes.length > 0 && isParagraph(nodes[0])) {
    const [subtitle, ...rest] = nodes;
    return [subtitle, rest];
  }
  return [undefined, nodes];
}

function SectionLayout({
  title,
  children,
  filled,
  ...props
}: SlideMasterProps & VariantProps) {
  const [subtitle, rest] = splitSubtitle(children);
  return (
    <FtsrgSlideMaster {...props}>
      <SectionBackground filled={filled} />
      <FtsrgSectionMasterBlock filled={filled}>
        {title !== undefined && (
          <FtsrgSectionMasterTitle>{title}</FtsrgSectionMasterTitle>
        )}
        {subtitle !== undefined && (
          <FtsrgSectionMasterSubtitle>{subtitle}</FtsrgSectionMasterSubtitle>
        )}
      </FtsrgSectionMasterBlock>
      {rest.length > 0 && (
        <FtsrgSectionMasterAside>{rest}</FtsrgSectionMasterAside>
      )}
    </FtsrgSlideMaster>
  );
}

export function FtsrgSectionMaster(inProps: SlideMasterProps) {
  const props = useThemeProps({ props: inProps, name: 'FtsrgSectionMaster' });
  return <SectionLayout {...props} filled />;
}

export function FtsrgSubsectionMaster(inProps: SlideMasterProps) {
  const props = useThemeProps({
    props: inProps,
    name: 'FtsrgSubsectionMaster',
  });
  return <SectionLayout {...props} filled={false} />;
}
