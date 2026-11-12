import type { ComponentProps } from 'react';
import { styled } from '@mui/material/styles';

import '../../assets/montserrat-425-subset.css';

// The name of the faculty as it is set next to the roundel, on three lines.
const NAME_LINES = {
  en: ['FACULTY OF', 'ELECTRICAL ENGINEERING', 'AND INFORMATICS'],
  hu: ['VILLAMOSMÉRNÖKI', 'ÉS INFORMATIKAI', 'KAR'],
} as const;

// Layout of the name next to the roundel in the vector logos of the faculty,
// in pt, at the same scale as the roundel in `VikLogo`. The font size gives the
// cap height of the logos, and the name starts at `VIK_NAME_OFFSET` from the
// left edge of the roundel. The lines are vertically centered on the roundel.
export const VIK_NAME_FONT_SIZE = 16.941;
export const VIK_NAME_LINE_HEIGHT = 18.04;
export const VIK_NAME_OFFSET = 91.6;

const VikNameRoot = styled('span', {
  name: 'VikName',
  slot: 'Root',
})({
  display: 'block',
  fontFamily: "'VIK Name', Montserrat, sans-serif",
  fontStyle: 'normal',
  fontWeight: 425,
  letterSpacing: '0.083em',
  whiteSpace: 'nowrap',
});

export interface VikNameProps extends Omit<ComponentProps<'span'>, 'lang'> {
  /** Language of the name, English unless `hu`. */
  lang?: string | undefined;
}

/**
 * The name of the faculty in Montserrat (slightly heavier than Regular), as in the logos of the
 * faculty, on three lines.
 */
export function VikName({ lang, ...props }: VikNameProps) {
  const [first, second, third] = lang === 'hu' ? NAME_LINES.hu : NAME_LINES.en;
  return (
    <VikNameRoot {...props}>
      {first}
      <br />
      {second}
      <br />
      {third}
    </VikNameRoot>
  );
}
