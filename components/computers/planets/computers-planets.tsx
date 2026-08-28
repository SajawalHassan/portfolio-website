"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Planet1 from "@/public/assets/icons/planet-1.svg";
import Planet2 from "@/public/assets/icons/planet-2.svg";
import Stars from "./stars";
import { usePlanetsAnim } from "@/hooks/usePlanetsAnim";
import { useEverythingState } from "@/store/store";
import { INIT_ANIM_DURATION } from "@/components/init-anim";

function ComputersPlanets() {
  const {
    containerRef,
    planet1Controls,
    planet2Controls,
    planet1Size,
    planet2Size,
  } = usePlanetsAnim();
  const everythingState = useEverythingState();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: everythingState.doExitAnim ? 0 : 1 }}
      transition={
        everythingState.doExitAnim
          ? { duration: 0.5, delay: 0.5 }
          : everythingState.showInitAnim
            ? { duration: 0.5, delay: 1 + INIT_ANIM_DURATION }
            : { duration: 0.5, delay: 1 }
      }
      ref={containerRef}
      className="relative min-h-[550px] z-10 overflow-hidden"
    >
      <Stars />
      <motion.div
        className="absolute top-0 left-0"
        initial={false}
        animate={planet1Controls}
      >
        <Image
          src={Planet1}
          width={planet1Size}
          height={planet1Size}
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
          width={planet2Size}
          height={planet2Size}
          alt="planet 2"
        />
      </motion.div>
    </motion.div>
  );
}
export default ComputersPlanets;
