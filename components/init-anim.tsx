"use client";

import Coffee from "@/public/assets/icons/coffee-svgrepo-com.svg";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEverythingState } from "@/store/store";

// In seconds
export const INIT_ANIM_DURATION = 2;

export const InitAnim = () => {
  const everythingState = useEverythingState();

  setTimeout(() => {
    everythingState.setShowInitAnim(false);
  }, INIT_ANIM_DURATION * 1000);

  return (
    <motion.div
      className="fixed inset-0 bg-[#c7c1b1] flex items-center justify-center z-999"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0, display: "none" }}
      transition={{ duration: 0.4, ease: "easeInOut", delay: 1.5 }}
    >
      <motion.div
        initial={{ y: "200%", opacity: 0 }}
        animate={{
          y: ["200%", "0%"],
          scale: [1, 1.2, 2],
          opacity: [1, 0],
        }}
        transition={{
          y: { duration: 0.6, ease: "easeInOut", times: [0, 1] },
          scale: { duration: 1.5, ease: "easeInOut", times: [0, 0.5, 1] },
          opacity: { duration: 0.4, ease: "easeInOut", delay: 1.5 },
        }}
      >
        <Image
          src={Coffee}
          width={200}
          height={200}
          alt="coffee"
          className="animate-bounce"
          loading="eager"
        />
      </motion.div>
    </motion.div>
  );
};
