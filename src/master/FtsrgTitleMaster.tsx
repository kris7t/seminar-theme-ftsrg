import { type TitleMasterProps, useDeck, useSlideView } from '@seminar/core';
import { styled } from '@mui/material/styles';
import { useThemeProps } from '@mui/material';

import titleBackground from '../../assets/title-background.avif';
import titleBackgroundTop from '../../assets/title-background-top.avif';

// Position of the dark background block of the title slide. Other masters
// reuse it to show parts of the same background in exactly the same place.
export const TITLE_BACKGROUND_TOP = 80;
export const TITLE_BACKGROUND_HEIGHT = 480;
export const TITLE_BACKGROUND_IMAGE = titleBackground;
// Radial gradient under the image, centered at (x, y) relative to the block,
// fading from INNER to OUTER at the farthest corner.
export const TITLE_GRADIENT = {
  x: 0.5,
  y: 0.75,
  inner: '#1a191a',
  outer: '#2d2f2e',
};

const FtsrgTitleMasterRoot = styled('section', {
  name: 'FtsrgTitleMaster',
  slot: 'Root',
})({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  backgroundImage: `url(${titleBackgroundTop})`,
  backgroundSize: 'contain',
  backgroundPosition: 'top',
  backgroundRepeat: 'no-repeat',
});

const FtsrgTitleMasterRunningTitle = styled('div', {
  name: 'FtsrgTitleMaster',
  slot: 'RunningTitle',
})(({ theme }) => ({
  position: 'absolute',
  right: theme.spacing(5),
  top: '40px',
  transform: 'translate(0, -50%)',
  fontSize: 24,
}));

const FtsrgTitleMasterBody = styled('main', {
  name: 'FtsrgTitleMaster',
  slot: 'Body',
})(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  marginTop: TITLE_BACKGROUND_TOP,
  width: '100%',
  height: TITLE_BACKGROUND_HEIGHT,
  color: theme.palette.primary.contrastText,
  backgroundImage: `url(${titleBackground}), radial-gradient(circle at ${String(TITLE_GRADIENT.x * 100)}% ${String(TITLE_GRADIENT.y * 100)}%, ${TITLE_GRADIENT.inner} 0%, ${TITLE_GRADIENT.outer} 100%)`,
  backgroundSize: 'contain',
  gap: theme.spacing(3),
  padding: theme.spacing(0, 16),
}));

const FtsrgTitleMasterTitle = styled('h1', {
  name: 'FtsrgTitleMaster',
  slot: 'Title',
})(({ theme }) => ({
  ...theme.typography.h1,
  margin: 0,
}));

const FtsrgTitleMasterSubtitle = styled('div', {
  name: 'FtsrgTitleMaster',
  slot: 'Subtitle',
})(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  ...theme.typography.subtitle1,
  '& > *': {
    margin: 0,
  },
}));

export function FtsrgTitleMaster(inProps: TitleMasterProps) {
  const { title, children } = useThemeProps({
    props: inProps,
    name: 'FtsrgTitleMaster',
  });
  const { metadata: { event }, lang } = useDeck();
  const { lang: slideLang } = useSlideView();
  return (
    <FtsrgTitleMasterRoot>
      <FtsrgTitleMasterBody>
        {title !== undefined && (
          <FtsrgTitleMasterTitle>{title}</FtsrgTitleMasterTitle>
        )}
        {children !== undefined && (
          <FtsrgTitleMasterSubtitle>{children}</FtsrgTitleMasterSubtitle>
        )}
      </FtsrgTitleMasterBody>
      {event && (
        <FtsrgTitleMasterRunningTitle {...(lang === slideLang ? {} : { lang })}>
          {event}
        </FtsrgTitleMasterRunningTitle>
      )}
    </FtsrgTitleMasterRoot>
  );
}
