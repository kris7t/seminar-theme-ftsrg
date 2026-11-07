import "@fontsource-variable/open-sans/wght.css";
import "@fontsource-variable/open-sans/wght-italic.css";
import type { Theme } from "@mui/material/styles";
declare module "@mui/material/styles" {
    interface Palette {
        neutral: Palette["primary"];
    }
    interface PaletteOptions {
        neutral?: PaletteOptions["primary"];
    }
}
declare const _default: Theme;
export default _default;
