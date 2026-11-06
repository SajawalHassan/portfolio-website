"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Heading1 } from "@/components/ui/headings";
import { PageTransition } from "@/components/page-transition";
import { container, containerUndelayed, item } from "@/lib/global-anim-variants";
import { EssayType, useEverythingState } from "@/store/store";
import Breadcrumb from "@/components/ui/breadcrumb";
import ReactMarkdown from "react-markdown";
import { convertUrlToText } from "@/lib/helper";

type Props = {
  title: string;
};

export function EssayItem(props: Props) {
  const [showLoading, setShowLoading] = useState(false);
  const everythingState = useEverythingState();
  const [essay, setEssay] = useState<EssayType | undefined>(undefined);

  useEffect(() => {
    if (everythingState.essays.length === 0) return;

    setEssay(everythingState.essays.find((e) => e.title.toLowerCase() === convertUrlToText(props.title)));
  }, [everythingState.essays, essay]);

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
      <div className="max-w-[1200px] mx-auto">
        <motion.div variants={item}>
          <Breadcrumb className="mb-4" />
          <Heading1 text={essay?.title as string} className="max-w-[90%]" />
        </motion.div>

        <motion.div variants={item} className="mt-5 whitespace-pre-wrap poem-container">
          <ReactMarkdown>{essay?.body as string}</ReactMarkdown>
        </motion.div>
      </div>
    </motion.div>
  );
}
