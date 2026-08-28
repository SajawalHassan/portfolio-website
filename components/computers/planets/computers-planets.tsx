"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Planet1 from "@/public/assets/icons/planet-1.svg";
import Planet2 from "@/public/assets/icons/planet-2.svg";
import { PLANET1_SIZE, PLANET2_SIZE } from "./helper";
import Stars from "./stars";
import { usePlanetsAnim } from "@/hooks/usePlanetsAnim";

function ComputersPlanets() {
  const { containerRef, planet1Controls, planet2Controls } = usePlanetsAnim();

  return (
    <div
      ref={containerRef}
      className="relative min-h-[550px] mt-15 overflow-hidden"
    >
      <Stars />
      <motion.div
        className="absolute top-0 left-0"
        initial={false}
        animate={planet1Controls}
      >
        <Image
          src={Planet1}
          width={PLANET1_SIZE}
          height={PLANET1_SIZE}
          alt="planet 1"
        />
      </motion.div>

      <motion.div
        className="absolute top-0 left-0"
        initial={false}
        animate={planet2Controls}
      >
        <Image
          src={Planet2}
          width={PLANET2_SIZE}
          height={PLANET2_SIZE}
          alt="planet 2"
        />
      </motion.div>
    </div>
  );
}

export default ComputersPlanets;
