// Design constants shared by the slanted elements of the theme (the footer,
// the section slides, and so on), as in the FTSRG PowerPoint template.

/** Slant of slanted edges, measured from the vertical. */
export const SLANT_ANGLE_DEG = 21.4;

/** Horizontal offset of a slanted edge per unit of height. */
export const SLANT_TAN = Math.tan((SLANT_ANGLE_DEG * Math.PI) / 180);

/**
 * Horizontal width of the gap between adjacent slanted elements, in CSS
 * pixels of the slide.
 */
export const SLANT_GAP = 12;
