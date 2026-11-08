import { useId } from 'react';
import SvgIcon, { type SvgIconProps } from '@mui/material/SvgIcon';

// Outline of the Language icon from @mui/icons-material, which we knock out
// of the backing.
const LANGUAGE_PATH =
  'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2m6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56M12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96M4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56m2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8M12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96M14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2m.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56M16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2z';

// The backing is the same rounded square as in the LinkedIn icon of
// @mui/icons-material. The globe fills LANGUAGE_SCALE of its width.
const BACKING = { x: 3, y: 3, width: 18, height: 18, rx: 2 };
const LANGUAGE_SCALE = 0.65;

/**
 * The Language icon knocked out of a rounded square, to match the Facebook
 * and LinkedIn icons.
 */
export function WebIcon(props: SvgIconProps) {
  // Every slide renders its own copy, so the ids must be unique.
  const maskId = useId();
  return (
    <SvgIcon {...props}>
      <defs>
        <mask id={maskId}>
          <rect {...BACKING} fill="#fff" />
          <path
            d={LANGUAGE_PATH}
            fill="#000"
            transform={`translate(12 12) scale(${String(LANGUAGE_SCALE)}) translate(-12 -12)`}
          />
        </mask>
      </defs>
      <rect {...BACKING} mask={`url(#${maskId})`} />
    </SvgIcon>
  );
}
