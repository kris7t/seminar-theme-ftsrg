import type { SVGProps } from 'react';

// Outline of the roundel of the faculty, from the vector logos of the faculty,
// simplified to 0.1pt precision. The coordinates are in pt.
const ROUNDEL_PATH =
  'm22.5 58.8.1-.4 1.5-4.5q.2-.4-.3-.7a21 21 0 0 1-7.5-13.1 21 21 0 0 1 20.2-24q.5 0 .8-.5l2.5-3.7.1-.3c-10-1.4-22.7 4-27.4 17a26 26 0 0 0 10 30.2m-1.2 12.5a37.4 37.4 0 1 1 41-61.7H62l-8.7-1.2-7.1-1q-.7 0-1.1.5A106 106 0 0 0 33 24.6q-3 5.2-5.6 10.6l-.6 1.3 5.4 2.7a67 67 0 0 0-5.7 11.2 95 95 0 0 0-3.9 12q-1.7-1.5-3.5-2.8zm9.1-9c9 2.7 22.4-.2 29.2-12.4a26 26 0 0 0-3.9-30.4l-3.3 3.1v.2l.5.5a21 21 0 0 1 2.8 23 21 21 0 0 1-21.8 11.3q-.4 0-.7.3l-2 3zm32.8-52a37.3 37.3 0 0 1-41.6 61.1l10.9-6.7v-.2l-4.4-.8a139 139 0 0 1 20.7-28l-7.5-2.9.3-.4q1.7-3 4-5.4 5.1-5.7 10.7-10.7l6.7-6z';

// Exact bounding box of the roundel.
export const VIK_LOGO_VIEW_BOX_WIDTH = 74.951;
export const VIK_LOGO_VIEW_BOX_HEIGHT = 74.983;
const VIK_LOGO_VIEW_BOX = `0 0 ${String(VIK_LOGO_VIEW_BOX_WIDTH)} ${String(VIK_LOGO_VIEW_BOX_HEIGHT)}`;

export const VIK_LOGO_COLOR = '#211261';

/**
 * The roundel of the faculty, in its original color unless `color` is set.
 */
export function VikLogo({ role = 'img', ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox={VIK_LOGO_VIEW_BOX}
      overflow="visible"
      role={role}
      aria-label="VIK"
      color={VIK_LOGO_COLOR}
      {...props}
    >
      <path d={ROUNDEL_PATH} fill="currentColor" />
    </svg>
  );
}
