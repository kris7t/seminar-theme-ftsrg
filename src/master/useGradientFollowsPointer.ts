import { useTheme } from '@mui/material/styles';
import { useEffect, useRef, useState } from 'react';

export interface Point {
  x: number;
  y: number;
}

// Evaluates the cubic Bézier easing curve through (0, 0), (x1, y1), (x2, y2),
// and (1, 1) at time t, like the CSS cubic-bezier() function.
function cubicBezier(x1: number, y1: number, x2: number, y2: number) {
  const bezier = (a: number, b: number, u: number) =>
    3 * a * u * (1 - u) ** 2 + 3 * b * u ** 2 * (1 - u) + u ** 3;
  return (t: number) => {
    // Find the parameter u where the curve reaches t by bisection (x is
    // monotonic in u for 0 <= x1, x2 <= 1).
    let low = 0;
    let high = 1;
    for (let i = 0; i < 20; i += 1) {
      const u = (low + high) / 2;
      if (bezier(x1, x2, u) < t) {
        low = u;
      } else {
        high = u;
      }
    }
    return bezier(y1, y2, (low + high) / 2);
  };
}

// The same curve as theme.transitions.easing.easeInOut.
const easeInOut = cubicBezier(0.4, 0, 0.2, 1);

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
 */
export function useGradientFollowsPointer(
  rest: Point,
  apply: (center: Point) => void,
): GradientFollower {
  const theme = useTheme();
  // The callbacks below are stable, so they read the latest arguments here.
  const optionsRef = useRef({
    rest,
    apply,
    duration: theme.transitions.duration.complex,
  });
  useEffect(() => {
    optionsRef.current = {
      rest,
      apply,
      duration: theme.transitions.duration.complex,
    };
  });
  const centerRef = useRef<Point>(rest);
  // The position of the pointer, or undefined if it is outside the area.
  const pointerRef = useRef<Point | undefined>(undefined);
  const frameRef = useRef<number | undefined>(undefined);

  const [follower] = useState<GradientFollower>(() => {
    const setCenter = (center: Point) => {
      centerRef.current = center;
      optionsRef.current.apply(center);
    };

    const cancel = () => {
      if (frameRef.current !== undefined) {
        cancelAnimationFrame(frameRef.current);
        frameRef.current = undefined;
      }
    };

    // Glides from the current center to the pointer, or to the resting place
    // if the pointer is outside the area.
    const glide = () => {
      cancel();
      const { duration } = optionsRef.current;
      const reduceMotion = matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches;
      const from = centerRef.current;
      const start = performance.now();
      const step = (now: number) => {
        const t = reduceMotion ? 1 : Math.min((now - start) / duration, 1);
        const k = easeInOut(t);
        const to = pointerRef.current ?? optionsRef.current.rest;
        setCenter({
          x: from.x + (to.x - from.x) * k,
          y: from.y + (to.y - from.y) * k,
        });
        frameRef.current = t < 1 ? requestAnimationFrame(step) : undefined;
      };
      step(start);
    };

    return {
      enter(point) {
        pointerRef.current = point;
        glide();
      },
      move(point) {
        pointerRef.current = point;
        if (frameRef.current === undefined) {
          setCenter(point);
        }
      },
      leave() {
        pointerRef.current = undefined;
        glide();
      },
    };
  });

  useEffect(
    () => () => {
      if (frameRef.current !== undefined) {
        cancelAnimationFrame(frameRef.current);
      }
    },
    [],
  );

  return follower;
}
