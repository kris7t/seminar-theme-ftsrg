import { generateUtilityClasses } from '@mui/material';
import { styled } from '@mui/material/styles';

import { BME_LOGO_COLOR, BME_LOGO_VIEW_BOX_HEIGHT, BmeLogo } from './BmeLogo';
import { FtsrgColorLogo, LOGO_COLOR } from './FtsrgLogo';
import { FtsrgName } from './FtsrgName';
import { MIT_LOGO_COLOR, MitLabelEn, MitLabelHu, MitLogo } from './MitLogo';
import {
  VIK_LOGO_COLOR,
  VIK_LOGO_VIEW_BOX_HEIGHT,
  VIK_LOGO_VIEW_BOX_WIDTH,
  VikLogo,
} from './VikLogo';
import {
  VIK_NAME_FONT_SIZE,
  VIK_NAME_LINE_HEIGHT,
  VIK_NAME_OFFSET,
  VikName,
} from './VikName';

const logosClasses = generateUtilityClasses('FtsrgLogos', [
  'root',
  'separator',
  'link',
  'image',
  'label',
]);

const LogosRoot = styled('div', {
  name: 'FtsrgLogos',
  slot: 'Root',
})(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  '&:has(.FtsrgLogos-link:is(:hover, :focus-within)) > *:not(.FtsrgLogos-link:is(:hover, :focus-within))':
    {
      filter: 'brightness(0%) opacity(0.34)',
    },
  '& > *': {
    '@media (prefers-reduced-motion: no-preference)': {
      transition: theme.transitions.create('filter', {
        duration: theme.transitions.duration.standard,
        easing: theme.transitions.easing.easeInOut,
      }),
    },
  },
}));

const LogosSeparator = styled('div', {
  name: 'FtsrgLogos',
  slot: 'Separator',
  shouldForwardProp: (prop) => prop !== 'color',
})<{ color: string }>(({ color }) => ({
  height: '46px',
  width: '1px',
  backgroundColor: color,
  marginInline: '12px',
}));

const LogosLink = styled('a', {
  name: 'FtsrgLogos',
  slot: 'Link',
})({
  display: 'flex',
  textDecoration: 'none',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
});

// Text label next to the ftsrg logo, matching the size and position of the
// text in the raster labels.
const LogosLabel = styled(FtsrgName, {
  name: 'FtsrgLogos',
  slot: 'Label',
})({
  marginInlineStart: 16,
  fontSize: 22.75,
  lineHeight: '28px',
  color: LOGO_COLOR,
});

const LOGO_HEIGHT = 64;
// The vector logos have no padding around them, so we add the same amount of
// padding as in the raster logos (2.5px for a 170px tall image).
const LOGO_INSET = LOGO_HEIGHT * (2.5 / 170);
const VECTOR_LOGO_HEIGHT = LOGO_HEIGHT - 2 * LOGO_INSET;
// The logotype of the university and the name of the faculty are set at the
// same scale (px per pt) as the roundel of the faculty, as in its logos.
const VIK_SCALE = VECTOR_LOGO_HEIGHT / VIK_LOGO_VIEW_BOX_HEIGHT;

// Text label next to the roundel of the faculty.
const VikLabel = styled(VikName, {
  name: 'FtsrgLogos',
  slot: 'Label',
})({
  marginInlineStart: (VIK_NAME_OFFSET - VIK_LOGO_VIEW_BOX_WIDTH) * VIK_SCALE,
  marginInlineEnd: LOGO_INSET,
  fontSize: VIK_NAME_FONT_SIZE * VIK_SCALE,
  lineHeight: `${String(VIK_NAME_LINE_HEIGHT * VIK_SCALE)}px`,
  color: VIK_LOGO_COLOR,
});

export function Logos({
  lang = 'en',
  compact = false,
}: {
  lang?: string | undefined;
  compact?: boolean | undefined;
}) {
  const labels =
    lang === 'hu'
      ? {
          lang: 'hu',
          bme: 'Budapesti Műszaki és Gazdaságtudományi Egyetem',
          vik: 'Villamosmérnöki és Informatikai Kar',
          mit: 'Mesterséges Intelligencia és Rendszertervezés Tanszék',
          ftsrg: 'Kritikus Rendszerek Kutatócsoport',
        }
      : {
          lang: 'en',
          bme: 'Budapest University of Technology and Economics',
          vik: 'Faculty of Electrical Engineering and Informatics',
          mit: 'Department of Artificial Intelligence and Systems Engineering',
          ftsrg: 'Critical Systems Research Group',
        };
  const MitLabel = lang === 'hu' ? MitLabelHu : MitLabelEn;

  return (
    <LogosRoot
      className={logosClasses.root}
      {...(lang === labels.lang ? {} : { lang: labels.lang })}
    >
      <LogosLink
        href="https://www.bme.hu"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={labels.bme}
        className={logosClasses.link}
      >
        <BmeLogo
          height={BME_LOGO_VIEW_BOX_HEIGHT * VIK_SCALE}
          role="presentation"
          aria-label={undefined}
          style={{ margin: LOGO_INSET }}
          className={logosClasses.image}
        />
      </LogosLink>
      <LogosSeparator
        color={BME_LOGO_COLOR}
        className={logosClasses.separator}
      />
      <LogosLink
        href="https://vik.bme.hu"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={labels.vik}
        className={logosClasses.link}
      >
        <VikLogo
          height={VECTOR_LOGO_HEIGHT}
          role="presentation"
          aria-label={undefined}
          // The label has its own spacing after the logo.
          style={{
            margin: LOGO_INSET,
            marginInlineEnd: compact ? LOGO_INSET : 0,
          }}
          className={logosClasses.image}
        />
        {!compact && (
          <VikLabel
            lang={labels.lang}
            aria-hidden="true"
            className={logosClasses.label}
          />
        )}
      </LogosLink>
      <LogosSeparator
        color={VIK_LOGO_COLOR}
        className={logosClasses.separator}
      />
      <LogosLink
        href="https://mit.bme.hu"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={labels.mit}
        className={logosClasses.link}
      >
        <MitLogo
          height={VECTOR_LOGO_HEIGHT}
          role="presentation"
          aria-label={undefined}
          // The label already has the spacing after the logo.
          style={{
            margin: LOGO_INSET,
            marginInlineEnd: compact ? LOGO_INSET : 0,
          }}
          className={logosClasses.image}
        />
        {!compact && (
          <MitLabel
            height={VECTOR_LOGO_HEIGHT}
            style={{ marginBlock: LOGO_INSET, marginInlineEnd: LOGO_INSET }}
            className={logosClasses.label}
          />
        )}
      </LogosLink>
      <LogosSeparator
        color={MIT_LOGO_COLOR}
        className={logosClasses.separator}
      />
      <LogosLink
        href="https://ftsrg.mit.bme.hu"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={labels.ftsrg}
        className={logosClasses.link}
      >
        <FtsrgColorLogo
          height={VECTOR_LOGO_HEIGHT}
          role="presentation"
          aria-label={undefined}
          style={{ margin: LOGO_INSET }}
          className={logosClasses.image}
        />
        {!compact && (
          <LogosLabel
            lang={labels.lang}
            aria-hidden="true"
            className={logosClasses.label}
          />
        )}
      </LogosLink>
    </LogosRoot>
  );
}
