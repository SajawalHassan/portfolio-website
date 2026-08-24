"use client";

import Coffee from "@/public/assets/icons/coffee-svgrepo-com.svg";
import ChevronRight from "@/public/assets/icons/chevron-right-yellow.svg";
import Image from "next/image";
import { easeIn, motion } from "framer-motion";
import { useRouter } from "next/navigation";

export const LoadingScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 bg-bg flex items-center justify-center z-999"
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

export const PageTransition = ({ href }: { href: string }) => {
  const router = useRouter();

  setTimeout(() => {
    router.push(href);
  }, 2200);

  return (
    <motion.div
      className="bg-bg h-screen w-screen flex items-center max-w-screen overflow-x-hidden fixed top-0 left-0 z-999"
      initial={{ x: "-100%", opacity: "100%" }}
      animate={{ x: ["-100%", "0%", "0%"], opacity: ["100%", "100%", "0%"] }}
      transition={{
        x: { duration: 0.52, ease: "easeInOut", times: [0, 0.8, 1] },
        opacity: {
          duration: 0.5,
          ease: "easeInOut",
          times: [0, 0.8, 1],
          delay: 1.8,
        },
      }}
    >
      <motion.div
        initial={{
          x: "-100%",
          clipPath: "polygon(0 0, 85% 0, 100% 100%, 15% 100%)",
        }}
        animate={{
          x: ["-100%", "-35%", "-35%", "100%"],
          clipPath: "polygon(0 0, 85% 0, 100% 100%, 15% 100%)",
        }}
        transition={{
          x: { duration: 2, ease: "easeInOut", times: [0, 0.4, 0.6, 1] },
          clipPath: { duration: 2, ease: "easeIn" },
        }}
        className="bg-black h-[145px] md:h-[230px] lg:h-[250px] xl:h-[305px] xl:h- min-w-[115%] flex items-center justify-center"
      >
        <motion.div>
          <Image
            src={ChevronRight}
            height={200}
            width={200}
            alt="chevron right"
            className="md:w-[280px] md:h-[280px] xl:w-[368px] xl:h-[368px]"
          />
        </motion.div>
      </motion.div>
      {/* <motion.div
        initial={{
          x: "-100%",
          clipPath: "polygon(0 0, 75% 0, 100% 100%, 0 100%)",
        }}
        animate={{
          x: ["0%", "0%", "50%"],
          clipPath: [
            "polygon(0 0, 75% 0, 100% 100%, 0 100%)",
            "polygon(0 0, 75% 0, 100% 100%, 0 100%)",
            "polygon(0 0, 75% 0, 100% 100%, 0 100%)",
            "polygon(0 0, 100% 0, 100% 100%, 20% 100%)",
          ],
        }}
        transition={{
          x: { duration: 1.8, ease: "easeInOut", times: [0, 0.5, 1] },
          clipPath: {
            duration: 1.8,
            ease: "easeInOut",
            times: [0, 0.5, 0.8, 1],
          },
        }}
        className="bg-black h-[345px] w-[79%] flex items-center justify-center"
      >
        <Image
          src={ChevronRight}
          height={380}
          width={380}
          alt="chevron right"
          className="mr-50"
        />
      </motion.div> */}
    </motion.div>
  );
};
