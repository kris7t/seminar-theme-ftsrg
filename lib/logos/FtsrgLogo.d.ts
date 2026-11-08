import type { SVGProps } from 'react';
export declare const LOGO_VIEW_BOX_WIDTH = 84.051;
export declare const LOGO_VIEW_BOX_HEIGHT = 44.95;
export declare const LOGO_VIEW_BOX: string;
export declare const LOGO_COLOR = "#100f0d";
export declare const LOGO_ACCENT_COLOR = "#8e162b";
export declare function LogoGlyphs({ accentColor, }: {
    accentColor?: string;
}): import("react").JSX.Element;
/**
 * The bare ftsrg wordmark, filled with `currentColor`.
 */
export declare function FtsrgLogo({ role, ...props }: SVGProps<SVGSVGElement>): import("react").JSX.Element;
/**
 * The ftsrg wordmark in its original colors, with the first dot in the accent
 * color.
 */
export declare function FtsrgColorLogo({ role, ...props }: SVGProps<SVGSVGElement>): import("react").JSX.Element;
