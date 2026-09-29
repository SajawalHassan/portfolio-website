"use client";
import { motion } from "framer-motion";
import { Heading2, HeadingSubText } from "../ui/headings";
import TOCItem from "./TOCItem";
import { TOC as TOCItemData } from "@/lib/content-data";
import { container, containerUndelayed, item } from "../../lib/global-anim-variants";
import { useEverythingState } from "@/store/store";
import { useState } from "react";
import { PageTransition } from "@/components/page-transition";
import { ItemType } from "@/lib/content-data";

function TOC() {
  const [showLoading, setShowLoading] = useState(false);
  const everythingState = useEverythingState();

  if (showLoading) return <PageTransition href={everythingState.transitionLink} />;

  return (
    <motion.div
      className="sm:px-10 md:px-20 lg:px-0 lg:max-w-[670px] lg:mx-auto lg:w-full lg:min-w-[420px] xl:min-w-0 xl:max-w-[460px] 2xl:max-w-[531px] 2xl:w-full 3xl:max-w-full"
      variants={everythingState.showInitAnim ? container : containerUndelayed}
      initial="hidden"
      animate={everythingState.doExitAnim ? "exit" : "show"}
      onAnimationComplete={(definition) => {
        if (definition === "exit") setShowLoading(true);
      }}
    >
      <div className="md:text-center lg:text-left">
        <motion.div variants={item}>
          <Heading2 text="Notebook peek" />
        </motion.div>
        <motion.div variants={item}>
          <HeadingSubText text={`A little table of contents`} />
        </motion.div>
      </div>
      <div className="mt-[28px] space-y-[28px] lg:space-y-[20px]">
        {TOCItemData.map((tocItem: ItemType, index: number) => (
          <motion.div key={index} variants={item}>
            <TOCItem text={tocItem.text} number={index + 1} isAlt={tocItem.isLast} link={tocItem.link} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
export default TOC;
