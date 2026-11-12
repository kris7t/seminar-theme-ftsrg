import type { SVGProps } from 'react';

// Outlines of the letters of the logotype of the university, from the vector
// logos of the faculty, simplified to 0.1pt precision. The coordinates are in
// pt, at the same scale as the roundel of the faculty in `VikLogo`.
const LETTERS_PATH =
  'M7.6 29.5q-.2 2.3 1.4 3.8 1.2.9 1.8 1c.6.1 2.7.3 4.6.3 3.4 0 7-.8 8.6-4 .7-1.3.7-2.7.7-3.2q0-3.6-3-5.6c-1.1-.7-2.4-.9-2.7-1a52 52 0 0 0-10.1 0l-1.3.1Zm0-13.3 4.6.2 4.6-.2c2.4-.2 4.3-.6 5.6-2.6.9-1.4 1-2.8 1-3.3 0-.7 0-2-1.2-3.3A5 5 0 0 0 19 5.3a36 36 0 0 0-7.6-.2c-3.2.6-3.6 2.2-3.7 5.2ZM0 38.5q.8-.8 1-1.2c1.5-2 1.6-4 1.7-6.3V7.4l-.3-2.5C2 3.2 1.4 2.4.1 1l5.1.2 7-.2h4l2.6.2c5 .6 7.2 2.4 8.4 4.5.4.8 1.2 2.5 1.2 4.7 0 1-.2 4.2-2.7 6.3l-2.8 1.5q1.6.4 2.8 1.1c1.7 1 4.3 3.3 4.3 8a11 11 0 0 1-3.8 8.4c-2.8 2.3-6 2.6-9.5 2.8h-3.9l-6-.3h-5ZM36.2 10c0-2.2 0-5.1-1.1-7.2L33.8 1h11c-.4.8-.4 1-.4 1.5 0 1 1 3.6 2.1 6.5l1.5 4.3 6.3 18.4 2.2-7 3-8.6 2.1-6.3 1.5-4.1q.9-2.5 1-3.3 0-.5-.6-1.4h11.3l-1.2 1.1C72 4 72 7.4 72 9.7v20.9c0 3.9.3 4.7 2.5 7.9H64.3c1-1 1.5-1.4 2-2.7q.8-2.5.8-5V13.3l.3-8Q63.5 17.7 59 30l-1.7 5.2q-.4 1.1-.4 1.7.2 1 .5 1.4h-6.7c.1-.2.6-.8.6-1.5q0-.5-.4-1.5l-.5-1.6-1.2-3.4-2.6-7.3-6-17.4.1 8.6.2 14.3.1 3c.2 3.4.6 4.2 2.6 6.8h-9.9L35 37c1.3-2.2 1.3-4.8 1.3-7.4Zm44.5-.4-.1-3.2C80.2 3.4 79 2 78.2 1h20.5c4 0 3.8.2 6.1-1v11.9c-1-2.7-2.5-6-8.7-6.9l-4-.2s-2.5 0-4 .4l-1 .6c-1.6 1.2-1.4 3.6-1.5 4V17l3.2.2h3.4c.5 0 3.4-.1 5.3-1.3q1.3-.9 2-2.1v10.5L98 22.5c-1.5-1.3-3.3-1.4-5.4-1.6h-3.8l-3 .2v8.5c0 .8-.2 3.3 2.2 4.4q1.3.5 5 .6c.8 0 4.6 0 7.5-1.2 3-1.3 4.2-3.5 5.6-6.4v12.7c-1.7-1.3-2-1.2-4-1.2H77.8l1.3-1.3c1.7-2.1 1.6-5.4 1.6-7.8Zm0 0';

// Exact bounding box of the letters.
export const BME_LOGO_VIEW_BOX_WIDTH = 106.019;
export const BME_LOGO_VIEW_BOX_HEIGHT = 39.664;
const BME_LOGO_VIEW_BOX = `0 0 ${String(BME_LOGO_VIEW_BOX_WIDTH)} ${String(BME_LOGO_VIEW_BOX_HEIGHT)}`;

export const BME_LOGO_COLOR = '#000';

/**
 * The logotype of the university, in its original color unless `color` is
 * set.
 */
export function BmeLogo({ role = 'img', ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox={BME_LOGO_VIEW_BOX}
      overflow="visible"
      role={role}
      aria-label="BME"
      color={BME_LOGO_COLOR}
      {...props}
    >
      <path d={LETTERS_PATH} fill="currentColor" />
    </svg>
  );
}
