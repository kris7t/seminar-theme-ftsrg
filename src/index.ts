import '@fontsource-variable/open-sans/wght.css';
import '@fontsource-variable/open-sans/wght-italic.css';

import type { Theme } from '@mui/material/styles';
import { createSlideTheme } from '@seminar/core';
import type { CalloutProps } from '@seminar/elements';

import { FtsrgContentMaster } from './master/FtsrgSlideMaster';
import {
  FtsrgSectionMaster,
  FtsrgSubsectionMaster,
} from './master/FtsrgSectionMaster';
import { FtsrgTitleMaster } from './master/FtsrgTitleMaster';

declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary'];
  }

  interface PaletteOptions {
    neutral?: PaletteOptions['primary'];
  }
}

export default createSlideTheme({
  palette: {
    primary: {
      main: '#1446a0',
      dark: '#0a2350',
      light: '#8aaef0',
    },
    secondary: {
      main: '#522b47',
      dark: '#291623',
      light: '#ca9abc',
    },
    error: {
      main: '#960018',
      dark: '#4b000c',
      light: '#ffb7c3',
    },
    warning: {
      main: '#fb8b24',
      dark: '#8d4503',
      light: '#fdd1a7',
    },
    info: {
      main: '#4472c4',
      dark: '#203864',
      light: '#b4c7e7',
    },
    success: {
      main: '#70ad47',
      dark: '#384723',
      light: '#c5e0b4',
    },
    neutral: {
      main: '#a7a8a7',
      dark: '#535453',
      light: '#dcdcdc',
      contrastText: '#000',
    },
  },
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
    section: FtsrgSectionMaster,
    subsection: FtsrgSubsectionMaster,
  },
  slideTransition: { duration: 0 },
  stepTransition: { duration: 0 },
  components: {
    SeminarCallout: {
      defaultProps: {
        radius: 0,
      },
      styleOverrides: {
        root: ({
          ownerState,
          theme,
        }: {
          ownerState: CalloutProps;
          theme: Theme;
        }) =>
          ownerState.variant === 'filled'
            ? {
                '--SeminarCallout-outline':
                  'var(--SeminarCallout-palette-dark)',
                '--SeminarCallout-outline-width': 2,
              }
            : {
                '--SeminarCallout-color': theme.palette.text.primary,
                ...(ownerState.color === 'neutral'
                  ? {
                      '--SeminarCallout-outline': theme.palette.neutral.dark,
                    }
                  : {
                      '& .SeminarCalloutTitle-root': {
                        color: 'var(--SeminarCallout-palette-main)',
                      },
                    }),
              },
        content: ({ ownerState }: { ownerState: CalloutProps }) =>
          ownerState.variant === 'filled'
            ? { '& strong': { color: 'inherit' } }
            : {},
      },
    },
    SeminarCalloutTitle: {
      styleOverrides: {
        root: ({ theme }) => ({
          marginBottom: theme.spacing(1.5),
        }),
      },
    },
    SeminarColumn: {
      styleOverrides: {
        heading: ({ theme }) => ({
          fontSize: 32,
          color: theme.palette.primary.main,
          marginBottom: theme.spacing(1.5),
        }),
      },
    },
  },
});
