import type { ComponentProps } from 'react';
import { styled } from '@mui/material/styles';

import '../../assets/mulish-800-italic-subset.css';

// The name of the research group as it is set next to the logo, on two lines.
const NAME_LINES = {
  en: ['Critical Systems', 'Research Group'],
  hu: ['Kritikus Rendszerek', 'Kutatócsoport'],
} as const;

// Vertical metrics of Mulish ExtraBold Italic, in ems, for aligning the name
// with the logo.
export const NAME_FONT_ASCENT = 1.005;
export const NAME_FONT_DESCENT = 0.25;
export const NAME_FONT_CAP_HEIGHT = 0.705;

const FtsrgNameRoot = styled('span', {
  name: 'FtsrgName',
  slot: 'Root',
})({
  display: 'block',
  fontFamily: "'FTSRG Name', Mulish, sans-serif",
  fontStyle: 'italic',
  fontWeight: 800,
  letterSpacing: 0,
  whiteSpace: 'nowrap',
});

export interface FtsrgNameProps extends Omit<ComponentProps<'span'>, 'lang'> {
  /** Language of the name, English unless `hu`. */
  lang?: string | undefined;
}

/**
 * The name of the research group in Mulish ExtraBold Italic, as in the label
 * of the logo, on two lines.
 */
export function FtsrgName({ lang, ...props }: FtsrgNameProps) {
  const [first, second] = lang === 'hu' ? NAME_LINES.hu : NAME_LINES.en;
  return (
    <FtsrgNameRoot {...props}>
      {first}
      <br />
      {second}
    </FtsrgNameRoot>
  );
}
