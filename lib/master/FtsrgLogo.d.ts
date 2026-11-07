import { type SVGProps } from 'react';
/**
 * The bare ftsrg wordmark, filled with `currentColor`.
 */
export declare function FtsrgLogo({ role, ...props }: SVGProps<SVGSVGElement>): import("react").JSX.Element;
export interface FtsrgCornerLogoProps {
    className?: string;
    /** Color of the footer that ends in a slant in front of the badge. */
    footerColor: string;
}
/**
 * The ftsrg logo on a slanted gradient badge, sized to fill the height of its
 * container (e.g., the slide footer). Place it right after a rectangle of
 * `footerColor`, which it continues with a slanted end and a gap.
 *
 * Drawing the slanted end here (rather than clipping the footer with CSS)
 * keeps it pixel-aligned with the badge at every scale.
 */
export declare function FtsrgCornerLogo({ className, footerColor }: FtsrgCornerLogoProps): import("react").JSX.Element;
