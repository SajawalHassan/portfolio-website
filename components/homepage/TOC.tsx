"use client";
import { motion, Variants } from "framer-motion";
import { Heading2, HeadingSubText } from "./ui";
import TOCItem from "./TOCItem";
import { TOC as TOCItemData } from "@/data/homepage";
import { container, item } from "../global-anim-variants";
import { useEverythingState } from "@/store/store";
import { useState } from "react";
import { PageTransition } from "../ui";

function TOC() {
  const [showLoading, setShowLoading] = useState(false);
  const everythingState = useEverythingState();

  if (showLoading) return <PageTransition href="test" />;

  return (
    <motion.div
      className="sm:px-10 md:px-20 lg:px-0 lg:w-full xl:max-w-[470px] 2xl:max-w-[531px] 2xl:w-full 3xl:max-w-full"
      variants={container}
      initial="hidden"
      animate={everythingState.doExitAnim ? "exit" : "show"}
      onAnimationComplete={(definition) => {
        if (definition === "exit") setShowLoading(true);
      }}
    >
      <div className="md:text-center lg:text-left">
        <motion.div variants={item}>
          <Heading2 text="Notebook peek" className="lg:text-[45px]" />
        </motion.div>
        <motion.div variants={item}>
          <HeadingSubText text={`A little table of contents :)`} />
        </motion.div>
      </div>
      <div className="mt-[28px] space-y-[28px]">
        {TOCItemData.map((tocItem, index) => (
          <motion.div key={index} variants={item}>
            <TOCItem
              text={tocItem.text}
              number={index + 1}
              isAlt={tocItem.isLast}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
export default TOC;
