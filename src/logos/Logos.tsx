import { generateUtilityClasses } from '@mui/material';
import { styled } from '@mui/material/styles';

import { FtsrgColorLogo, LOGO_COLOR } from './FtsrgLogo';
import { FtsrgName } from './FtsrgName';
import { MIT_LOGO_COLOR, MitLabelEn, MitLabelHu, MitLogo } from './MitLogo';

import bmeLogo from '../../assets/bme-logo.avif';
import vikLogo from '../../assets/vik-logo.avif';
import vikLabelEn from '../../assets/vik-label-en.avif';
import vikLabelHu from '../../assets/vik-label-hu.avif';

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
  const vikLabel = lang === 'hu' ? vikLabelHu : vikLabelEn;
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
        <img
          src={bmeLogo}
          height={LOGO_HEIGHT}
          alt=""
          className={logosClasses.image}
        />
      </LogosLink>
      <LogosSeparator color="#000" className={logosClasses.separator} />
      <LogosLink
        href="https://vik.bme.hu"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={labels.vik}
        className={logosClasses.link}
      >
        <img
          src={vikLogo}
          height={LOGO_HEIGHT}
          alt=""
          className={logosClasses.image}
        />
        {!compact && (
          <img
            src={vikLabel}
            height={LOGO_HEIGHT}
            alt=""
            className={logosClasses.image}
          />
        )}
      </LogosLink>
      <LogosSeparator color="#211661" className={logosClasses.separator} />
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
