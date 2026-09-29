"use client";
import { motion } from "framer-motion";
import { computersGateways as computerGateways } from "@/lib/content-data";
import CmdBox from "./cmdbox";
import ComputersBtn from "./computers-btn";
import WaveLikeIcon from "@/public/assets/icons/wave-like.svg";
import Image from "next/image";
import { container, containerUndelayed, item } from "@/lib/global-anim-variants";
import { useEverythingState } from "@/store/store";
import { useState } from "react";
import { PageTransition } from "../page-transition";
import Breadcrumb from "@/components/ui/breadcrumb";

function ComputersHero() {
  const [showLoading, setShowLoading] = useState(false);
  const everythingState = useEverythingState();

  if (showLoading) return <PageTransition href={everythingState.transitionLink} />;

  return (
    <motion.div
      className="mt-[43px] md:flex md:gap-x-4 md:justify-around"
      variants={everythingState.showInitAnim ? container : containerUndelayed}
      initial="hidden"
      animate={everythingState.doExitAnim ? "exit" : "show"}
      onAnimationComplete={(definition) => {
        if (definition === "exit") setShowLoading(true);
      }}
    >
      <div className="w-full lg:w-max">
        <Breadcrumb className="mb-4" />

        <motion.h1
          variants={item}
          className="font-caveat text-[25px] md:text-[20px] lg:text-[27px] xl:text-[30px] 2xl:text-[33px] 3xl:text-[38px]! leading-[107%]"
        >
          Within a drop of humankind's knowledge,
          <br />
          Exists the universe of computers.
        </motion.h1>
        <motion.h1
          variants={item}
          className="font-caveat text-[38px] md:text-[32px] lg:text-[40px] xl:text-[44px] 2xl:text-[65px] 3xl:text-[75px]! 2xl:leading-[97%] font-bold leading-[104.4%]"
        >
          Welcome to these planets,
          <br />
          inside that cosmos.
        </motion.h1>
        <motion.div variants={item}>
          <Image
            src={WaveLikeIcon}
            width={250}
            height={50}
            alt=""
            className="mt-5 lg:mt-5 lg:w-[350px] lg:h-[40px] lg:-ml-4 2xl:w-[500px] 2xl:h-[60px] 3xl:w-[600px]! 3xl:h-[70px]! 2xl:-ml-0 2xl:mt-6"
          />
        </motion.div>
      </div>
      <div className="mt-14 sm:mt-10 md:mt-0 w-full max-w-[450px] 2xl:max-w-[600px] 3xl:max-w-[700px]!">
        <motion.div variants={item}>
          <CmdBox className="w-[70%] xl:w-[80%] 2xl:w-[70%] 3xl:w-[80%]!" />
        </motion.div>
        <div className="grid grid-cols-2 grid-rows-2 gap-y-[11px] gap-x-[11px] mt-4 3xl:mt-6! 2xl:max-w-[680px] 2xl:gap-x-[23px] 2xl:gap-y-[18px]">
          {computerGateways.map((gateway) => (
            <motion.div variants={item} key={gateway.link}>
              <ComputersBtn text={gateway.text} href={gateway.link} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
export default ComputersHero;
