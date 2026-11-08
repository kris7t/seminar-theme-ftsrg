import { type TitleMasterProps, useDeck, useSlideView } from '@seminar/core';
import { styled } from '@mui/material/styles';
import { useThemeProps } from '@mui/material';
import { type PointerEvent, useRef } from 'react';

import titleBackground from '../../assets/title-background.avif';
import titleBackgroundTop from '../../assets/title-background-top.avif';
import {
  type Point,
  useGradientFollowsPointer,
} from './useGradientFollowsPointer';
import { Logos } from '@/logos/Logos';

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

// While the pointer is over the body, the center of its gradient follows the
// pointer. We set these custom properties directly on the element (instead of
// re-rendering) to keep pointer moves cheap.
const GRADIENT_X_VAR = '--FtsrgTitleMaster-gradientX';
const GRADIENT_Y_VAR = '--FtsrgTitleMaster-gradientY';

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
  backgroundImage: `url(${titleBackground}), radial-gradient(circle at var(${GRADIENT_X_VAR}, ${String(TITLE_GRADIENT.x * 100)}%) var(${GRADIENT_Y_VAR}, ${String(TITLE_GRADIENT.y * 100)}%), ${TITLE_GRADIENT.inner} 0%, ${TITLE_GRADIENT.outer} 100%)`,
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

const FtsrgTitleMasterFooter = styled('aside', {
  name: 'FtsrgTitleMaster',
  slot: 'Footer',
})({
  display: 'flex',
  flexGrow: 1,
  flexDirection: 'row',
  justifyContent: 'center',
});

function getPointerPosition(event: PointerEvent<HTMLElement>): Point {
  // The bounding rectangle accounts for the scaling of the slide.
  const rect = event.currentTarget.getBoundingClientRect();
  return {
    x: (event.clientX - rect.left) / rect.width,
    y: (event.clientY - rect.top) / rect.height,
  };
}

export function FtsrgTitleMaster(inProps: TitleMasterProps) {
  const { title, children } = useThemeProps({
    props: inProps,
    name: 'FtsrgTitleMaster',
  });
  const {
    metadata: { event },
    lang,
  } = useDeck();
  const { lang: slideLang } = useSlideView();
  const bodyRef = useRef<HTMLElement>(null);
  // Coordinates are relative to the body, like in TITLE_GRADIENT.
  const follower = useGradientFollowsPointer(TITLE_GRADIENT, ({ x, y }) => {
    bodyRef.current?.style.setProperty(GRADIENT_X_VAR, `${String(x * 100)}%`);
    bodyRef.current?.style.setProperty(GRADIENT_Y_VAR, `${String(y * 100)}%`);
  });
  return (
    <FtsrgTitleMasterRoot>
      <FtsrgTitleMasterBody
        ref={bodyRef}
        onPointerEnter={(event) => {
          follower.enter(getPointerPosition(event));
        }}
        onPointerMove={(event) => {
          follower.move(getPointerPosition(event));
        }}
        onPointerLeave={() => {
          follower.leave();
        }}
      >
        {title !== undefined && (
          <FtsrgTitleMasterTitle>{title}</FtsrgTitleMasterTitle>
        )}
        {children !== undefined && (
          <FtsrgTitleMasterSubtitle>{children}</FtsrgTitleMasterSubtitle>
        )}
      </FtsrgTitleMasterBody>
      <FtsrgTitleMasterFooter>
        {event && (
          <FtsrgTitleMasterRunningTitle
            {...(lang === slideLang ? {} : { lang })}
          >
            {event}
          </FtsrgTitleMasterRunningTitle>
        )}
        <Logos lang={slideLang} />
      </FtsrgTitleMasterFooter>
    </FtsrgTitleMasterRoot>
  );
}
