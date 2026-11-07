import type { ContentMasterProps } from '@seminar/core';
import { useDeck, useSlideView } from '@seminar/core';
import { alpha, styled, useTheme } from '@mui/material/styles';
import { useThemeProps } from '@mui/material';
import { FtsrgCornerLogo } from './FtsrgLogo';

const FtsrgSlideMasterRoot = styled('section', {
  name: 'FtsrgSlideMaster',
  slot: 'Root',
})({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
});

const FtsrgSlideMasterContent = styled('main', {
  name: 'FtsrgSlideMaster',
  slot: 'Content',
})(({ theme }) => ({
  position: 'relative',
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  padding: theme.spacing(4, 8),
}));

const FtsrgSlideMasterFooter = styled('footer', {
  name: 'FtsrgSlideMaster',
  slot: 'Footer',
})(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  height: theme.spacing(6),
}));

const FtsrgSlideMasterFooterBackground = styled('div', {
  name: 'FtsrgSlideMaster',
  slot: 'FooterBackground',
})(({ theme }) => ({
  flexGrow: 1,
  background: theme.palette.neutral.main,
}));

const FtsrgSlideMasterRunningTitle = styled('div', {
  name: 'FtsrgSlideMaster',
  slot: 'RunningTitle',
})(({ theme }) => ({
  position: 'absolute',
  left: theme.spacing(4),
  top: '50%',
  transform: 'translate(0, -50%)',
  fontSize: 18,
}));

const FtsrgSlideMasterSlideNumber = styled('div', {
  name: 'FtsrgSlideMaster',
  slot: 'SlideNumber',
})({
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  fontSize: 18,
});

const FtsrgSlideMasterLogo = styled(FtsrgCornerLogo, {
  name: 'FtsrgSlideMaster',
  slot: 'Logo',
})({
  flexShrink: 0,
});

const FtsrgContentMasterTitle = styled('h1', {
  name: 'FtsrgContentMaster',
  slot: 'Title',
})(({ theme }) => ({
  ...theme.typography.h2,
  margin: 0,
  '& strong': {
    color: theme.palette.primary.main,
    fontWeight: 'inherit',
  },
}));

const FtsrgContentMasterBody = styled('div', {
  name: 'FtsrgContentMaster',
  slot: 'Body',
})(({ theme }) => ({
  flex: 1,
  minHeight: 0,
  '& :is(p, ul, ol, dl, blockquote, pre, figure, table)': {
    marginBlock: theme.spacing(1.5),
  },
  '& li > :is(p, ul, ol, dl, blockquote, pre, figure, table)': {
    marginBlock: 0,
  },
  '& > :not(style):not(:not(style) ~ *)': { marginTop: 0 },
  '& > :last-child': { marginBottom: 0 },
  '& li li': {
    fontSize: 24,
    listStyleType: 'none',
    '&::before': {
      position: 'absolute',
      content: '"\u2013"',
      marginLeft: '-1.1em',
    },
  },
  '& li li li': {
    fontSize: 20,
    listStyleType: 'circle',
    '&::before': {
      content: '""',
      display: 'none',
    },
  },
  '& li li li li': {
    listStyleType: 'square',
  },
  '& strong': { color: theme.palette.primary.main },
  '& a': {
    color: theme.palette.primary.dark,
    fontWeight: theme.typography.fontWeightMedium,
    textDecorationLine: 'underline',
    textDecorationColor: theme.palette.primary.main,
    textDecorationThickness: '0.08em',
    textUnderlineOffset: '0.14em',
    '&:hover': {
      color: theme.palette.primary.main,
      backgroundColor: alpha(theme.palette.primary.main, 0.08),
    },
    '&:focus-visible': {
      outline: `2px solid ${theme.palette.primary.main}`,
      outlineOffset: '0.15em',
      borderRadius: theme.shape.borderRadius,
    },
  },
}));

export function FtsrgSlideMaster({
  className,
  children,
  showSlideNumber = true,
}: Omit<ContentMasterProps, 'title'>) {
  const { metadata: { event }, lang } = useDeck();
  const { index, lang: slideLang } = useSlideView();
  const { palette } = useTheme();
  return (
    <FtsrgSlideMasterRoot className={className}>
      <FtsrgSlideMasterContent>{children}</FtsrgSlideMasterContent>
      <FtsrgSlideMasterFooter>
        <FtsrgSlideMasterFooterBackground />
        {event && (
          <FtsrgSlideMasterRunningTitle {...(lang === slideLang ? {} : { lang })}>
            {event}
          </FtsrgSlideMasterRunningTitle>
        )}
        {showSlideNumber && (
          <FtsrgSlideMasterSlideNumber>{index + 1}</FtsrgSlideMasterSlideNumber>
        )}
        <FtsrgSlideMasterLogo footerColor={palette.neutral.main} />
      </FtsrgSlideMasterFooter>
    </FtsrgSlideMasterRoot>
  );
}

export function FtsrgContentMaster(inProps: ContentMasterProps) {
  const { title, children, ...props } = useThemeProps({
    props: inProps,
    name: 'FtsrgContentMaster',
  });
  return (
    <FtsrgSlideMaster {...props}>
      {title !== undefined && (
        <FtsrgContentMasterTitle>{title}</FtsrgContentMasterTitle>
      )}
      <FtsrgContentMasterBody>{children}</FtsrgContentMasterBody>
    </FtsrgSlideMaster>
  );
}
