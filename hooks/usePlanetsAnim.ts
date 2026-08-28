import { useEffect, useRef, useState, useCallback } from "react";
import { useAnimationControls } from "framer-motion";
import {
  PLANET1_SIZE,
  PLANET2_SIZE,
  Point,
  getCorners,
  pickCorner,
} from "@/components/computers/planets/helper";

export const usePlanetsAnim = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  const planet1Controls = useAnimationControls();
  const planet2Controls = useAnimationControls();
  const corner1Ref = useRef(0);
  const corner2Ref = useRef(3);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

  // Measure container so corner/center math is correct at any screen size
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setContainerSize({ width, height });
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Wobbling animation, repeats forever
  const idleFloat = useCallback(
    (controls: ReturnType<typeof useAnimationControls>, point: Point) => {
      controls.start({
        x: [point.x, point.x + 12, point.x - 8, point.x],
        y: [point.y, point.y - 10, point.y + 8, point.y],
        transition: {
          duration: 4 + Math.random() * 2,
          delay: Math.random() * 2, // desync phase from the other planet
          repeat: Infinity,
          ease: "easeInOut",
        },
      });
    },
    [],
  );

  useEffect(() => {
    const { width, height } = containerSize;
    if (width === 0 || height === 0) return;

    const corners1 = getCorners(width, height, PLANET1_SIZE);
    const corners2 = getCorners(width, height, PLANET2_SIZE);
    const center = { x: width / 2, y: height / 2 };

    idleFloat(planet1Controls, corners1[corner1Ref.current]);
    idleFloat(planet2Controls, corners2[corner2Ref.current]);

    const runCycle = async () => {
      planet1Controls.stop();
      planet2Controls.stop();

      const p1Corner = corners1[corner1Ref.current];
      const p2Corner = corners2[corner2Ref.current];
      const target1 = {
        x: center.x - PLANET1_SIZE / 2 - 20,
        y: center.y - PLANET1_SIZE / 2,
      };
      const target2 = {
        x: center.x - PLANET2_SIZE / 2 + 20,
        y: center.y - PLANET2_SIZE / 2,
      };

      // Anticipation step definitons. Pulls the planets back a little
      const pullback1 = {
        x: p1Corner.x - (target1.x - p1Corner.x) * 0.12,
        y: p1Corner.y - (target1.y - p1Corner.y) * 0.12,
      };
      const pullback2 = {
        x: p2Corner.x - (target2.x - p2Corner.x) * 0.12,
        y: p2Corner.y - (target2.y - p2Corner.y) * 0.12,
      };

      // Applies anticipation anims and changes scale too
      await Promise.all([
        planet1Controls.start({
          x: pullback1.x,
          y: pullback1.y,
          scale: 1.08,
          transition: { duration: 0.45, ease: "easeInOut" },
        }),
        planet2Controls.start({
          x: pullback2.x,
          y: pullback2.y,
          scale: 1.08,
          transition: { duration: 0.45, ease: "easeInOut" },
        }),
      ]);

      // Rush to center
      await Promise.all([
        planet1Controls.start({
          x: target1.x,
          y: target1.y,
          scale: 1,
          transition: { duration: 0.3, ease: [0.55, 0, 0.85, 0.35] }, // fast start, eases into impact
        }),
        planet2Controls.start({
          x: target2.x,
          y: target2.y,
          scale: 1,
          transition: { duration: 0.3, ease: [0.55, 0, 0.85, 0.35] },
        }),
      ]);

      // Animation at the middle
      await Promise.all([
        planet1Controls.start({
          scale: [1, 0.92, 1.05, 1],
          transition: { duration: 0.2, ease: "easeOut" },
        }),
        planet2Controls.start({
          scale: [1, 0.92, 1.05, 1],
          transition: { duration: 0.2, ease: "easeOut" },
        }),
      ]);

      // Bounce to new corners
      const newCorner1 = pickCorner(corner2Ref.current);
      const newCorner2 = pickCorner(newCorner1);
      corner1Ref.current = newCorner1;
      corner2Ref.current = newCorner2;

      await Promise.all([
        planet1Controls.start({
          x: corners1[newCorner1].x,
          y: corners1[newCorner1].y,
          transition: { duration: 0.7, ease: "easeOut" },
        }),
        planet2Controls.start({
          x: corners2[newCorner2].x,
          y: corners2[newCorner2].y,
          transition: { duration: 0.7, ease: "easeOut" },
        }),
      ]);

      idleFloat(planet1Controls, corners1[newCorner1]);
      idleFloat(planet2Controls, corners2[newCorner2]);

      timeoutRef.current = setTimeout(runCycle, 5000);
    };

    timeoutRef.current = setTimeout(runCycle, 5000);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [containerSize, idleFloat, planet1Controls, planet2Controls]);

  return { containerRef, planet1Controls, planet2Controls };
};
