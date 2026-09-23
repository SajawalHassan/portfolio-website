"use client";

import ChevronRight from "@/public/assets/icons/chevron-right-yellow.svg";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEverythingState } from "@/store/store";

// in seconds
export const mainAnimationDuration = 1.5;

export const PageTransition = ({ href }: { href: string }) => {
  const router = useRouter();
  const everythingState = useEverythingState();

  setTimeout(() => {
    if (everythingState.doExitAnim == true) {
      router.push(href);
    }
  }, mainAnimationDuration * 1000);

  return (
    <div className="bg-[#e5e0d4] h-screen w-screen flex items-center max-w-screen overflow-x-hidden fixed top-0 left-0 z-999">
      <motion.div
        initial={{
          x: "-100%",
          clipPath: "polygon(0 0, 85% 0, 100% 100%, 15% 100%)",
        }}
        animate={{
          x: ["-100%", "-35%", "-35.5%", "100%"],
          clipPath: "polygon(0 0, 85% 0, 100% 100%, 15% 100%)",
        }}
        transition={{
          x: {
            duration: mainAnimationDuration,
            ease: "easeInOut",
            times: [0, 0.4, 0.7, 1],
          },
          clipPath: { duration: mainAnimationDuration, ease: "easeIn" },
        }}
        className="bg-black h-[145px] md:h-[230px] lg:h-[250px] xl:h-[305px] xl:h- min-w-[115%] flex items-center justify-center"
      >
        <Image
          src={ChevronRight}
          height={200}
          width={200}
          alt="chevron right"
          className="md:w-[280px] md:h-[280px] xl:w-[368px] xl:h-[368px]"
        />
      </motion.div>
    </div>
  );
};
