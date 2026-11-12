import '@fontsource-variable/open-sans/wght.css';
import '@fontsource-variable/open-sans/wght-italic.css';

import { createSlideTheme } from '@seminar/core';

import { SLANT_ANGLE_DEG, SLANT_GAP } from './design';

import { FtsrgContentMaster } from './master/FtsrgSlideMaster';
import {
  FtsrgSectionMaster,
  FtsrgSubsectionMaster,
} from './master/FtsrgSectionMaster';
import { FtsrgStatementMaster } from './master/FtsrgStatementMaster';
import { FtsrgTitleMaster } from './master/FtsrgTitleMaster';

declare module '@seminar/core' {
  interface SlideMasterOverrides {
    statement: true;
  }
}

declare module '@seminar/elements' {
  interface ColumnVariantOverrides {
    slanted: true;
  }
}

declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary'];
  }

  interface PaletteOptions {
    neutral?: PaletteOptions['primary'];
  }
}

/** Returns a CSS length, with numbers, also in strings, in pixels. */
function cssLength(value: number | string | undefined): string | undefined {
  if (value === undefined) return undefined;
  const text = String(value).trim();
  return text !== '' && Number.isFinite(Number(text)) ? `${text}px` : text;
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
      dark: '#2f2d2e',
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
    statement: FtsrgStatementMaster,
  },
  slideTransition: { duration: 0 },
  stepTransition: { duration: 0 },
  components: {
    SeminarCallout: {
      defaultProps: {
        radius: 0,
      },
      styleOverrides: {
        root: ({ ownerState, theme }) =>
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
        content: ({ ownerState }) =>
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
    SeminarColumns: {
      defaultProps: {
        radius: 0,
        variant: 'slanted',
      },
      styleOverrides: {
        // For the title bands of slanted columns to reach across the gap
        // between columns, and up to the edges of the slide at the top level.
        root: ({ theme, ownerState }) => ({
          '--FtsrgColumns-gap': cssLength(ownerState.gap) ?? theme.spacing(4),
          '--FtsrgColumns-edge': '0px',
        }),
      },
    },
    SeminarColumn: {
      defaultProps: {
        headingVariant: 'h3',
      },
      styleOverrides: {
        root: ({ theme, ownerState }) => {
          const neutral = ownerState.color === 'neutral';
          const common = {
            // Neutral columns stand out in the dark gray of the footer.
            '--FtsrgColumn-accent': neutral
              ? theme.palette.neutral.dark
              : 'var(--SeminarColumn-palette-main)',
            '& > :not(.SeminarColumn-heading) strong': {
              color: neutral
                ? theme.palette.text.primary
                : 'var(--FtsrgColumn-accent)',
            },
          };
          const band = {
            '--SeminarColumn-heading-color': neutral
              ? '#fff'
              : 'var(--SeminarColumn-palette-contrastText)',
            '--SeminarColumn-heading-background': 'var(--FtsrgColumn-accent)',
          };
          switch (ownerState.variant) {
            case undefined:
            case 'plain':
              return {
                ...common,
                '--SeminarColumn-heading-color': 'var(--FtsrgColumn-accent)',
              };
            case 'card':
              return {
                ...common,
                ...band,
                '--SeminarColumn-backgroundColor': theme.palette.neutral.light,
              };
            case 'slanted':
              return {
                ...common,
                ...band,
                // How far the title band reaches past the column at its
                // mid-height: to the slanted gap in the middle of the gap
                // between columns, or to the edge of the row.
                '--FtsrgColumn-start': `calc(var(--FtsrgColumns-gap) / 2 - ${String(SLANT_GAP / 2)}px)`,
                '--FtsrgColumn-end': `calc(var(--FtsrgColumns-gap) / 2 - ${String(SLANT_GAP / 2)}px)`,
                // How far the heading is clipped past the column: not at all
                // between columns, where the band is slanted, and straight at
                // the edges of the row.
                '--FtsrgColumn-start-clip': '-100%',
                '--FtsrgColumn-end-clip': '-100%',
                '&:not(:not(style) ~ *)': {
                  '--FtsrgColumn-start': 'var(--FtsrgColumns-edge)',
                  '--FtsrgColumn-start-clip': '0px',
                  '& > .SeminarColumn-heading::before': { left: '-100%' },
                },
                '&:last-child': {
                  '--FtsrgColumn-end': 'var(--FtsrgColumns-edge)',
                  '--FtsrgColumn-end-clip': '0px',
                  '& > .SeminarColumn-heading::before': { right: '-100%' },
                },
              };
          }
        },
        // Plain and slanted headings are as high as the bands of cards and as
        // far from the content as their padding, so that the headings and the
        // content of columns of different variants line up.
        heading: ({ theme, ownerState }) => {
          const common = {
            fontWeight: theme.typography.fontWeightRegular,
            '&& strong': { color: 'inherit' },
          };
          switch (ownerState.variant) {
            case undefined:
            case 'plain':
              return {
                ...common,
                margin: `0 0 ${theme.spacing(3)}`,
                padding: `${theme.spacing(3)} 0`,
              };
            case 'card':
              return {
                ...common,
                margin:
                  'calc(-1 * var(--SeminarColumn-padding)) calc(-1 * var(--SeminarColumn-padding)) var(--SeminarColumn-padding)',
                padding: `${theme.spacing(3)} var(--SeminarColumn-padding)`,
              };
            case 'slanted':
              return {
                ...common,
                position: 'relative',
                zIndex: 0,
                margin: `0 calc(-1 * var(--FtsrgColumn-end)) ${theme.spacing(3)} calc(-1 * var(--FtsrgColumn-start))`,
                padding: theme.spacing(3),
                backgroundColor: 'transparent',
                // The band is slanted around its mid-height, where it's as
                // wide as the heading. At the edges of the row, it continues
                // past the heading, which clips it straight. The clip leaves
                // the top and the bottom alone, so that their antialiased
                // edges aren't faded further.
                clipPath:
                  'inset(-1px var(--FtsrgColumn-end-clip) -1px var(--FtsrgColumn-start-clip))',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  zIndex: -1,
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0,
                  backgroundColor: 'var(--SeminarColumn-heading-background)',
                  transform: `skewX(${String(-SLANT_ANGLE_DEG)}deg)`,
                },
              };
          }
        },
      },
    },
  },
});
