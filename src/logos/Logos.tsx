import { generateUtilityClasses } from '@mui/material';
import { styled } from '@mui/material/styles';

import { FtsrgColorLogo, LOGO_COLOR } from './FtsrgLogo';
import { FtsrgName } from './FtsrgName';

import bmeLogo from '../../assets/bme-logo.avif';
import vikLogo from '../../assets/vik-logo.avif';
import vikLabelEn from '../../assets/vik-label-en.avif';
import vikLabelHu from '../../assets/vik-label-hu.avif';
import mitLogo from '../../assets/mit-logo.avif';
import mitLabelEn from '../../assets/mit-label-en.avif';
import mitLabelHu from '../../assets/mit-label-hu.avif';

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
// The vector ftsrg logo has no padding around the glyphs, so we add the same
// amount of padding as in the raster logos (2.5px for a 170px tall image).
const FTSRG_LOGO_INSET = LOGO_HEIGHT * (2.5 / 170);

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
  const labelImages =
    lang === 'hu'
      ? {
          vik: vikLabelHu,
          mit: mitLabelHu,
        }
      : {
          vik: vikLabelEn,
          mit: mitLabelEn,
        };

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
            src={labelImages.vik}
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
        <img
          src={mitLogo}
          height={LOGO_HEIGHT}
          alt=""
          className={logosClasses.image}
        />
        {!compact && (
          <img
            src={labelImages.mit}
            height={LOGO_HEIGHT}
            className={logosClasses.image}
          />
        )}
      </LogosLink>
      <LogosSeparator color="#810f29" className={logosClasses.separator} />
      <LogosLink
        href="https://ftsrg.mit.bme.hu"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={labels.ftsrg}
        className={logosClasses.link}
      >
        <FtsrgColorLogo
          height={LOGO_HEIGHT - 2 * FTSRG_LOGO_INSET}
          role="presentation"
          aria-label={undefined}
          style={{ margin: FTSRG_LOGO_INSET }}
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
