import '@fontsource-variable/open-sans/wght.css';
import '@fontsource-variable/open-sans/wght-italic.css';

import { createSlideTheme } from '@seminar/core';
import { FtsrgContentMaster } from './master/FtsrgSlideMaster';
import { FtsrgTitleMaster } from './master/FtsrgTitleMaster';

export default createSlideTheme({
  palette: { primary: { main: '#00639b' } },
  typography: {
    fontFamily: '"Open Sans Variable", "Open Sans", sans-serif',
    fontWeightMedium: 600,
    fontWeightBold: 700,
    allVariants: {
      letterSpacing: 'inherit',
      textTransform: 'inherit',
    },
    h1: {
      fontSize: 64,
      fontWeight: 800,
      letterSpacing: '-2%',
    },
    h2: {
      fontSize: 56,
      fontWeight: 800,
      letterSpacing: '-2%',
    },
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 700,
    },
  },
  master: {
    title: FtsrgTitleMaster,
    content: FtsrgContentMaster,
  },
  slideTransition: { duration: 0 },
  stepTransition: { duration: 0 },
});
