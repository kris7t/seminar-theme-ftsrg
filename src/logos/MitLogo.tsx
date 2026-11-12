import type { SVGProps } from 'react';

import '../../assets/mit-label.css';

// The names of the department as they are set in the labels, on three lines.
const NAME_LINES = {
  en: ['Department of', 'Artificial Intelligence and', 'Systems Engineering'],
  hu: ['Mesterséges Intelligencia és', 'Rendszertervezés', 'Tanszék'],
} as const;

// Layout of the labels in the vector logos of the department, in mm, in the
// same coordinate system as the mark. Each line starts at the left edge of its
// first letter (the origin of the letters in the font of the labels) on its
// baseline. See scripts/build-mit-label-font.py.
const NAME_FONT_SIZE = 10.5336;
const NAME_LINE_ORIGINS = {
  en: [
    [66.619, 15.976],
    [65.625, 29.196],
    [66.208, 42.417],
  ],
  hu: [
    [66.619, 15.976],
    [66.619, 29.196],
    [65.661, 42.417],
  ],
} as const;

// Outlines of the logo of the department, from its vector logos simplified to
// 0.1mm precision. The coordinates are in mm.
const MARK_BODY_PATH =
  'M17.4 40.7V14.2a1.5 1.5 0 0 1 1.5-1.5h1.3a1.5 1.5 0 0 1 1.5 1.5v18.4a1.5 1.5 0 0 0 1.5 1.5h1.5a1.5 1.5 0 0 0 1.5-1.5v-10a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.6 1.5v14a1.5 1.5 0 0 0 1.5 1.5h18.5a1.5 1.5 0 0 0 1.5-1.5v-14a1.5 1.5 0 0 1 1.5-1.4h1a1.5 1.5 0 0 0 1.6-1.5v-1.4a1.5 1.5 0 0 0-1.5-1.5h-1.1a1.5 1.5 0 0 1-1.5-1.5V5.5A1.5 1.5 0 0 0 50.3 4h-1.5a1.5 1.5 0 0 0-1.5 1.5v26.8a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.6-1.5v-10a1.5 1.5 0 0 0-1.5-1.4h-1.4a1.5 1.5 0 0 0-1.5 1.5v10a1.5 1.5 0 0 1-1.5 1.4h-1a1.5 1.5 0 0 1-1.5-1.5V18.2a1.5 1.5 0 0 0-1.5-1.5h-5.6a1.5 1.5 0 0 1-1.5-1.5V9.4a1.5 1.5 0 0 0-1.5-1.5H14.4a1.5 1.5 0 0 0-1.5 1.5v31.3a1.5 1.5 0 0 0 1.5 1.5h1.5a1.5 1.5 0 0 0 1.5-1.5';
const MARK_FILLED_BARS_PATH =
  'M39.1 40.7h4v8h-4zm-33.7.2h2.2q1 .1 1.1 1v5.7q-.1 1-1.1 1H5.4q-1.1 0-1.2-1V42q0-1 1.2-1.1zM47.5 40.7h2.8a1.3 1.3 0 0 1 1.2 1.2v5.7a1 1 0 0 1-1 1h-3z';
const MARK_OUTLINED_BARS_PATH =
  'M23.2 36.8h1.5q1.2.1 1.3 1.3v9.3q-.1 1.2-1.3 1.3h-1.5q-1.1-.1-1.2-1.3v-9.3q0-1.2 1.2-1.3zm-8.7 7.9h1.3q1.3.1 1.4 1.4v1.2q-.1 1.3-1.4 1.4h-1.3q-1.3-.1-1.4-1.4V46q.1-1.3 1.4-1.4zm17.3-4h2.8v8h-3a1 1 0 0 1-1-1.1l-.1-5.5a1.3 1.3 0 0 1 1.3-1.4zM57.5 40.7h1.9q1 .1 1.1 1.1v5.7q-.1 1.1-1.1 1.2h-1.9q-1 0-1.2-1.2v-5.7q0-1 1.2-1.1z';

// The thinner bars of the mark are outlined with a stroke.
const MARK_STROKE_WIDTH = 0.458;

// The dot of the i is a black rounded square.
const MARK_DOT = {
  x: 38.82,
  y: 12.789,
  width: 4.407,
  height: 4.074,
  rx: 1.214,
};

export const MIT_LOGO_COLOR = '#810f29';
export const MIT_LOGO_DOT_COLOR = '#000';

// Exact bounding box of the mark, including the strokes.
const MARK_X = 3.971;
const MARK_Y = 4;
export const MIT_LOGO_VIEW_BOX_WIDTH = 56.758;
export const MIT_LOGO_VIEW_BOX_HEIGHT = 44.929;

// The labels span from the right edge of the mark to the end of the text, and
// have the same vertical extent as the mark. Thus, the labels sit at the right
// place if set right after the mark at the same height.
const LABEL_X = MARK_X + MIT_LOGO_VIEW_BOX_WIDTH;
const LABEL_EN_WIDTH = 183.753 - LABEL_X;
const LABEL_HU_WIDTH = 202.558 - LABEL_X;

// The view boxes are tight around the ink, so we let the anti-aliasing of the
// edges overflow them. Otherwise, the edges look cut off if the box is not
// aligned to device pixels.
function viewBox(x: number, width: number) {
  return [x, MARK_Y, width, MIT_LOGO_VIEW_BOX_HEIGHT].map(String).join(' ');
}

/**
 * The mark of the department, in its original colors unless `color` is set,
 * which colors everything except the dot of the i.
 */
export function MitLogo({ role = 'img', ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox={viewBox(MARK_X, MIT_LOGO_VIEW_BOX_WIDTH)}
      overflow="visible"
      role={role}
      aria-label="MIT"
      color={MIT_LOGO_COLOR}
      {...props}
    >
      <path d={MARK_BODY_PATH} fill="currentColor" />
      <g stroke="currentColor" strokeWidth={MARK_STROKE_WIDTH}>
        <path d={MARK_FILLED_BARS_PATH} fill="currentColor" />
        <path d={MARK_OUTLINED_BARS_PATH} fill="none" />
      </g>
      <rect {...MARK_DOT} fill={MIT_LOGO_DOT_COLOR} />
    </svg>
  );
}

function MitLabel({
  language,
  viewBoxWidth,
  ...props
}: SVGProps<SVGSVGElement> & {
  language: keyof typeof NAME_LINES;
  viewBoxWidth: number;
}) {
  const origins = NAME_LINE_ORIGINS[language];
  return (
    <svg
      viewBox={viewBox(LABEL_X, viewBoxWidth)}
      overflow="visible"
      color={MIT_LOGO_COLOR}
      aria-hidden="true"
      {...props}
    >
      <text
        fontFamily="'MIT Label'"
        fontSize={NAME_FONT_SIZE}
        fill="currentColor"
        style={{ fontKerning: 'normal' }}
      >
        {NAME_LINES[language].map((line, i) => (
          <tspan key={line} x={origins[i]?.[0]} y={origins[i]?.[1]}>
            {line}
          </tspan>
        ))}
      </text>
    </svg>
  );
}

/**
 * The English name of the department, to set right after `MitLogo` at the
 * same height.
 */
export function MitLabelEn(props: SVGProps<SVGSVGElement>) {
  return <MitLabel language="en" viewBoxWidth={LABEL_EN_WIDTH} {...props} />;
}

/**
 * The Hungarian name of the department, to set right after `MitLogo` at the
 * same height.
 */
export function MitLabelHu(props: SVGProps<SVGSVGElement>) {
  return <MitLabel language="hu" viewBoxWidth={LABEL_HU_WIDTH} {...props} />;
}
