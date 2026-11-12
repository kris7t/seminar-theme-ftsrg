import type { ComponentProps } from 'react';
import '../../assets/montserrat-425-subset.css';
export declare const VIK_NAME_FONT_SIZE = 16.941;
export declare const VIK_NAME_LINE_HEIGHT = 18.04;
export declare const VIK_NAME_OFFSET = 91.6;
export interface VikNameProps extends Omit<ComponentProps<'span'>, 'lang'> {
    /** Language of the name, English unless `hu`. */
    lang?: string | undefined;
}
/**
 * The name of the faculty in Montserrat (slightly heavier than Regular), as in the logos of the
 * faculty, on three lines.
 */
export declare function VikName({ lang, ...props }: VikNameProps): import("react").JSX.Element;
