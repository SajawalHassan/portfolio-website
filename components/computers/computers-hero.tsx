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
import { Heading1, Heading2, Heading3 } from "@/components/ui/headings";

function ComputersHero() {
  const [showLoading, setShowLoading] = useState(false);
  const everythingState = useEverythingState();

  if (showLoading) return <PageTransition href={everythingState.transitionLink} />;

  return (
    <motion.div
      className="mt-[43px] lg:flex lg:gap-x-4 lg:justify-around lg:items-start"
      variants={everythingState.showInitAnim ? container : containerUndelayed}
      initial="hidden"
      animate={everythingState.doExitAnim ? "exit" : "show"}
      onAnimationComplete={(definition) => {
        if (definition === "exit") setShowLoading(true);
      }}
    >
      <div className="w-full lg:w-max">
        <Breadcrumb className="mb-4" />

        <motion.div variants={item}>
          <Heading3
            text={`It is the orchestra of this universe\nthat sings the symphony of knowledge`}
            className="font-caveat! whitespace-pre-wrap leading-[107%]"
          />
          <Heading1
            text={`Come greet the planets of code\nWhich ring the pleasure of music.`}
            className="font-caveat! whitespace-pre-wrap"
          />
        </motion.div>
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
      <div className="mt-14 sm:mt-10 lg:mt-0 w-full max-w-[430px] 2xl:max-w-[600px] 3xl:max-w-[700px]!">
        <motion.div variants={item}>
          <CmdBox className="w-[70%] xl:w-[80%] 2xl:w-[70%] 3xl:w-[80%]!" />
        </motion.div>
        <div className="grid grid-cols-2 grid-rows-2 gap-y-[11px] gap-x-[11px] mt-4 2xl:max-w-[680px]">
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
