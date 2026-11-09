import type { ComponentProps } from 'react';
import '../../assets/mulish-800-italic-subset.css';
export declare const NAME_FONT_ASCENT = 1.005;
export declare const NAME_FONT_DESCENT = 0.25;
export declare const NAME_FONT_CAP_HEIGHT = 0.705;
export interface FtsrgNameProps extends Omit<ComponentProps<'span'>, 'lang'> {
    /** Language of the name, English unless `hu`. */
    lang?: string | undefined;
}
/**
 * The name of the research group in Mulish ExtraBold Italic, as in the label
 * of the logo, on two lines.
 */
export declare function FtsrgName({ lang, ...props }: FtsrgNameProps): import("react").JSX.Element;
