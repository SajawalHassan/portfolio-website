"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { BlogView } from "@/components/pretentious-giberrish/blog-view";
import { Novels } from "@/components/pretentious-giberrish/novels";
import { Poems } from "@/components/pretentious-giberrish/poems";
import { Quotes } from "@/components/pretentious-giberrish/quotes";
import { Heading2, HeadingSubText } from "@/components/ui/headings";
import { PageTransition } from "@/components/page-transition";
import { container, containerUndelayed, item } from "@/lib/global-anim-variants";
import { useEverythingState } from "@/store/store";
import Breadcrumb from "@/components/ui/breadcrumb";

type Props = {};

export const PretentiousGiberrishContainer = (props: Props) => {
  const [showLoading, setShowLoading] = useState(false);
  const everythingState = useEverythingState();

  if (showLoading) return <PageTransition href={everythingState.transitionLink} />;

  return (
    <motion.div
      variants={everythingState.showInitAnim ? container : containerUndelayed}
      initial="hidden"
      animate={everythingState.doExitAnim ? "exit" : "show"}
      onAnimationComplete={(definition) => {
        if (definition === "exit") setShowLoading(true);
      }}
    >
      <div className="xl:flex xl:justify-around xl:gap-x-10">
        <div className="mt-[20px] xl:w-[600px] 2xl:w-[700px] xl:shrink-0">
          <motion.div variants={item}>
            <Breadcrumb className="mb-2" />
            <Heading2 text="A Young Man's Diary" />
            <HeadingSubText
              className="mt-1"
              text="A proud cypress tree, green as any, whose leaves are scattered — some on the floor, and others still hanging; each housing some idea, some thought, some fantasy, built out of a tragedy or some joyous happening of personal life."
            />
          </motion.div>

          <motion.div variants={item} className="hidden xl:block w-full">
            <Quotes />
          </motion.div>
        </div>

        <motion.div variants={item}>
          <BlogView />
        </motion.div>
      </div>

      <div className="max-w-[1600px] mx-auto">
        <motion.div variants={item} className="xl:hidden">
          <Quotes />
        </motion.div>
        <motion.div variants={item}>
          <Poems />
        </motion.div>
        <motion.div variants={item}>
          <Novels />
        </motion.div>
      </div>
    </motion.div>
  );
};
