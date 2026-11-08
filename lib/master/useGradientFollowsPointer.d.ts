export interface Point {
    x: number;
    y: number;
}
export interface GradientFollower {
    /** The pointer entered the area at `point`. */
    enter(point: Point): void;
    /** The pointer moved to `point` inside the area. */
    move(point: Point): void;
    /** The pointer left the area. */
    leave(): void;
}
/**
 * Makes the center of a gradient follow the pointer over an area. When the
 * pointer enters, the center glides from where it is to the pointer (even if
 * the pointer moves in the meantime), then tracks the pointer exactly. When the
 * pointer leaves, the center glides back to `rest`.
 *
 * The caller reports the pointer with the returned (stable) callbacks, and
 * `apply` draws the gradient with its center at the given point. Points may be
 * in any coordinate system, as long as it is the same everywhere.
 *
 * Only the view the presenter interacts with follows the pointer, and not,
 * e.g., the thumbnails of the overview.
 */
export declare function useGradientFollowsPointer(rest: Point, apply: (center: Point) => void): GradientFollower;
