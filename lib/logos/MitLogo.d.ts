import type { SVGProps } from 'react';
export declare const MIT_LOGO_COLOR = "#810f29";
export declare const MIT_LOGO_DOT_COLOR = "#000";
export declare const MIT_LOGO_VIEW_BOX_WIDTH = 56.758;
export declare const MIT_LOGO_VIEW_BOX_HEIGHT = 44.929;
/**
 * The mark of the department, in its original colors unless `color` is set,
 * which colors everything except the dot of the i.
 */
export declare function MitLogo({ role, ...props }: SVGProps<SVGSVGElement>): import("react").JSX.Element;
/**
 * The English name of the department, to set right after `MitLogo` at the
 * same height.
 */
export declare function MitLabelEn(props: SVGProps<SVGSVGElement>): import("react").JSX.Element;
/**
 * The Hungarian name of the department, to set right after `MitLogo` at the
 * same height.
 */
export declare function MitLabelHu(props: SVGProps<SVGSVGElement>): import("react").JSX.Element;
