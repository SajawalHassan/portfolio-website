import { useEffect, useRef, useState, useCallback } from "react";
import { useAnimationControls } from "framer-motion";
import {
  Point,
  getCorners,
  pickCorner,
} from "@/components/computers/planets/helper";

export const usePlanetsAnim = () => {
  const [planet1Size, setPlanet1Size] = useState(204.5);
  const [planet2Size, setPlanet2Size] = useState(153);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  const planet1Controls = useAnimationControls();
  const planet2Controls = useAnimationControls();
  const corner1Ref = useRef(0);
  const corner2Ref = useRef(3);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

  useEffect(() => {
    const getSizes = (width: number) => {
      if (width >= 1536) return { planet1: 350, planet2: 300 }; // 2xl
      if (width >= 1280) return { planet1: 300, planet2: 200 }; // xl
      if (width >= 1024) return { planet1: 270, planet2: 180 }; // lg
      if (width >= 768) return { planet1: 240, planet2: 140 }; // md
      return { planet1: 204.5, planet2: 153 };
    };

    const updateSizes = () => {
      const { planet1, planet2 } = getSizes(window.innerWidth);
      setPlanet1Size(planet1);
      setPlanet2Size(planet2);
    };

    updateSizes(); // set on mount
    window.addEventListener("resize", updateSizes);
    return () => window.removeEventListener("resize", updateSizes);
  }, []);

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
          duration: 2 + Math.random() * 2,
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

    const corners1 = getCorners(width, height, planet1Size);
    const corners2 = getCorners(width, height, planet2Size);
    const center = { x: width / 2, y: height / 2 };

    idleFloat(planet1Controls, corners1[corner1Ref.current]);
    idleFloat(planet2Controls, corners2[corner2Ref.current]);

    const runCycle = async () => {
      planet1Controls.stop();
      planet2Controls.stop();

      const p1Corner = corners1[corner1Ref.current];
      const p2Corner = corners2[corner2Ref.current];
      const target1 = {
        x: center.x - planet1Size / 2 - 20,
        y: center.y - planet2Size / 2,
      };
      const target2 = {
        x: center.x - planet1Size / 2 + 20,
        y: center.y - planet2Size / 2,
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
          transition: { duration: 0.2, ease: [0.55, 0, 0.85, 0.35] },
        }),
        planet2Controls.start({
          x: target2.x,
          y: target2.y,
          scale: 1,
          transition: { duration: 0.2, ease: [0.55, 0, 0.85, 0.35] },
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
          transition: { duration: 0.5, ease: [0.55, 0, 0.55, 0.35] },
        }),
        planet2Controls.start({
          x: corners2[newCorner2].x,
          y: corners2[newCorner2].y,
          transition: { duration: 0.5, ease: [0.55, 0, 0.55, 0.35] },
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

  return {
    containerRef,
    planet1Controls,
    planet2Controls,
    planet1Size,
    planet2Size,
  };
};
