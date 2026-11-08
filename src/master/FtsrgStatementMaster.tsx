import { type SlideMasterProps, useSlideView } from '@seminar/core';
import { styled } from '@mui/material/styles';
import { useThemeProps } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Children, type ReactNode } from 'react';

import {
  FtsrgColorLogo,
  FtsrgLogo,
  LOGO_COLOR,
  LOGO_ACCENT_COLOR,
} from '../logos/FtsrgLogo';
import {
  FtsrgName,
  NAME_FONT_ASCENT,
  NAME_FONT_CAP_HEIGHT,
  NAME_FONT_DESCENT,
} from '../logos/FtsrgName';
import { WebIcon } from './WebIcon';

// The name of the group is set in two lines next to the logo, which spans from
// the cap height of the first line to the baseline of the second.
const NAME_FONT_SIZE = 80;
const NAME_LINE_HEIGHT = 96;
const LOGO_HEIGHT = NAME_LINE_HEIGHT + NAME_FONT_CAP_HEIGHT * NAME_FONT_SIZE;
// Distance from the top of the first line box to the cap height.
const NAME_CAP_TOP =
  (NAME_LINE_HEIGHT - (NAME_FONT_ASCENT + NAME_FONT_DESCENT) * NAME_FONT_SIZE) /
    2 +
  (NAME_FONT_ASCENT - NAME_FONT_CAP_HEIGHT) * NAME_FONT_SIZE;

const LINKS = [
  {
    href: 'https://ftsrg.mit.bme.hu',
    label: 'ftsrg.mit.bme.hu',
    Icon: WebIcon,
    title: 'Web',
  },
  {
    href: 'https://www.facebook.com/ftsrg',
    label: 'ftsrg',
    Icon: FacebookIcon,
    title: 'Facebook',
  },
  {
    href: 'https://www.linkedin.com/company/ftsrg',
    label: 'ftsrg',
    Icon: LinkedInIcon,
    title: 'LinkedIn',
  },
];

// Slide class that hides the links at the bottom, e.g., `{statement .nolinks}`.
const NO_LINKS_CLASS = 'nolinks';
// Slide class for a white background instead of a black one.
const LIGHT_CLASS = 'light';

interface VariantProps {
  /** Whether the slide has a white background. */
  light: boolean;
}

const shouldForwardVariantProp = (prop: PropertyKey) => prop !== 'light';

const FtsrgStatementMasterRoot = styled('section', {
  name: 'FtsrgStatementMaster',
  slot: 'Root',
  shouldForwardProp: shouldForwardVariantProp,
})<VariantProps>(({ theme, light }) => ({
  position: 'relative',
  width: '100%',
  height: '100%',
  backgroundColor: light ? '#fff' : '#000',
  color: light ? theme.palette.text.primary : '#fff',
}));

// The body is centered on the whole slide, and leaves room for the links at
// the bottom with equal padding at the top.
const FtsrgStatementMasterBody = styled('main', {
  name: 'FtsrgStatementMaster',
  slot: 'Body',
})(({ theme }) => ({
  position: 'absolute',
  inset: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(3),
  padding: theme.spacing(12, 8),
  textAlign: 'center',
}));

// On a white background, the name has the same color as the full-color logo.
const FtsrgStatementMasterBrand = styled('div', {
  name: 'FtsrgStatementMaster',
  slot: 'Brand',
  shouldForwardProp: shouldForwardVariantProp,
})<VariantProps>(({ light }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  gap: 64,
  color: light ? LOGO_COLOR : undefined,
}));

const logoStyle = {
  display: 'block',
  height: LOGO_HEIGHT,
  marginTop: NAME_CAP_TOP,
};

const FtsrgStatementMasterLogo = styled(FtsrgLogo, {
  name: 'FtsrgStatementMaster',
  slot: 'Logo',
})(logoStyle);

const FtsrgStatementMasterColorLogo = styled(FtsrgColorLogo, {
  name: 'FtsrgStatementMaster',
  slot: 'Logo',
})(logoStyle);

const FtsrgStatementMasterName = styled(FtsrgName, {
  name: 'FtsrgStatementMaster',
  slot: 'Name',
})({
  fontSize: NAME_FONT_SIZE,
  lineHeight: `${String(NAME_LINE_HEIGHT)}px`,
  textAlign: 'start',
});

const FtsrgStatementMasterTitle = styled('h1', {
  name: 'FtsrgStatementMaster',
  slot: 'Title',
})(({ theme }) => ({
  ...theme.typography.h1,
  margin: 0,
}));

const FtsrgStatementMasterContent = styled('div', {
  name: 'FtsrgStatementMaster',
  slot: 'Content',
})(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  ...theme.typography.subtitle1,
  '& > *': {
    margin: 0,
  },
}));

const FtsrgStatementMasterLinks = styled('nav', {
  name: 'FtsrgStatementMaster',
  slot: 'Links',
  shouldForwardProp: shouldForwardVariantProp,
})<VariantProps>(({ theme, light }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  bottom: theme.spacing(4),
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  ...(light && {
    color: LOGO_COLOR,
  }),
}));

const FtsrgStatementMasterLink = styled('a', {
  name: 'FtsrgStatementMaster',
  slot: 'Link',
  shouldForwardProp: shouldForwardVariantProp,
})<VariantProps>(({ theme, light }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: theme.spacing(1),
  fontSize: 28,
  fontWeight: theme.typography.fontWeightBold,
  color: 'inherit',
  textDecoration: 'none',
  '& .MuiSvgIcon-root': {
    fontSize: 60,
  },
  '&:hover': {
    textDecoration: 'underline',
    textDecorationThickness: '0.08em',
    textUnderlineOffset: '0.14em',
    ...(light && {
      textDecorationColor: LOGO_ACCENT_COLOR,
    }),
  },
  '&:focus-visible': {
    outline: `2px solid ${light ? LOGO_ACCENT_COLOR : 'currentColor'}`,
    outlineOffset: '0.15em',
    borderRadius: theme.shape.borderRadius,
  },
}));

/** Whether `children` has any content other than whitespace. */
function hasContent(children: ReactNode): boolean {
  // eslint-disable-next-line @eslint-react/no-children-to-array -- The master checks for empty content.
  return Children.toArray(children).some(
    (child) => typeof child !== 'string' || child.trim() !== '',
  );
}

/**
 * Slide master for statements on a black background, e.g., at the end of a
 * presentation, with links to the research group at the bottom. Without a
 * title or content, it shows the logo and the name of the research group.
 * The `nolinks` class of the slide hides the links, and the `light` class
 * sets a white background with the full-color logo.
 */
export function FtsrgStatementMaster(inProps: SlideMasterProps) {
  const { title, children, className } = useThemeProps({
    props: inProps,
    name: 'FtsrgStatementMaster',
  });
  const { lang } = useSlideView();
  const showContent = hasContent(children);
  const classes = className?.split(/\s+/) ?? [];
  const showLinks = !classes.includes(NO_LINKS_CLASS);
  const light = classes.includes(LIGHT_CLASS);
  return (
    <FtsrgStatementMasterRoot className={className} light={light}>
      <FtsrgStatementMasterBody>
        {title === undefined && !showContent ? (
          <FtsrgStatementMasterBrand light={light}>
            {light ? (
              <FtsrgStatementMasterColorLogo />
            ) : (
              <FtsrgStatementMasterLogo />
            )}
            <FtsrgStatementMasterName lang={lang} />
          </FtsrgStatementMasterBrand>
        ) : (
          <>
            {title !== undefined && (
              <FtsrgStatementMasterTitle>{title}</FtsrgStatementMasterTitle>
            )}
            {showContent && (
              <FtsrgStatementMasterContent>
                {children}
              </FtsrgStatementMasterContent>
            )}
          </>
        )}
      </FtsrgStatementMasterBody>
      {showLinks && (
        <FtsrgStatementMasterLinks light={light}>
          {LINKS.map(({ href, label, Icon, title: iconTitle }) => (
            <FtsrgStatementMasterLink
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              light={light}
            >
              <Icon titleAccess={iconTitle} />
              {label}
            </FtsrgStatementMasterLink>
          ))}
        </FtsrgStatementMasterLinks>
      )}
    </FtsrgStatementMasterRoot>
  );
}
