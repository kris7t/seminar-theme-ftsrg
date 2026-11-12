import '@fontsource-variable/open-sans/wght.css';
import '@fontsource-variable/open-sans/wght-italic.css';
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
declare const _default: import("@mui/material").Theme;
export default _default;
