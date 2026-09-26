"use client";

import { motion } from "framer-motion";
import HandwrittenHeading from "@/components/ui/handwritten-heading";
import { Heading2, HeadingSubText } from "@/components/ui/headings";
import Image, { StaticImageData } from "next/image";
import { RowItem } from "@/components/ui/row-item";
import Stars from "@/components/computers/planets/stars";
import { projectType } from "@/lib/content-data";
import { container, containerUndelayed, item } from "@/lib/global-anim-variants";
import { useEverythingState } from "@/store/store";
import { useState } from "react";
import { PageTransition } from "@/components/page-transition";
import Breadcrumb from "@/components/ui/breadcrumb";

type ProjectLayoutProps = {
  heading: string;
  subtext: string;
  projectList: projectType[];
  planetImage: StaticImageData | string;
  handwrittenText: string;
};

export const ProjectLayout = ({ heading, subtext, projectList, planetImage, handwrittenText }: ProjectLayoutProps) => {
  const [showLoading, setShowLoading] = useState(false);
  const everythingState = useEverythingState();

  if (showLoading) return <PageTransition href={everythingState.transitionLink} />;

  return (
    <motion.div
      className="pr-[14px] md:pr-[24px] 3xl:pr-[40px] mt-[34px] max-w-[600px] md:max-w-[800px] mx-auto lg:max-w-[1150px] xl:max-w-[1400px] 2xl:max-w-[1500px] 3xl:max-w-[1750px]!"
      variants={everythingState.showInitAnim ? container : containerUndelayed}
      initial="hidden"
      animate={everythingState.doExitAnim ? "exit" : "show"}
      onAnimationComplete={(definition) => {
        if (definition === "exit") setShowLoading(true);
      }}
    >
      <div className="lg:flex lg:items-start lg:justify-between lg:gap-x-[80px]">
        <div className="lg:max-w-[650px] 3xl:max-w-[750px]">
          <Breadcrumb className="mb-3" />
          <motion.div variants={item}>
            <Heading2 text={heading} className="2xl:text-[54px]!" />
          </motion.div>
          <motion.div variants={item}>
            <HeadingSubText text={subtext} className="italic text-[14px] 2xl:text-[18px]! mt-1" />
          </motion.div>
        </div>

        <div className="hidden relative h-full lg:flex lg:flex-col lg:items-end lg:flex-1 lg:min-w-0">
          <motion.div variants={item}>
            <HandwrittenHeading text={handwrittenText} className="lg:text-[40px]" />
          </motion.div>
        </div>
      </div>

      <div className="flex relative justify-between">
        <div className="w-full mt-[34px] sm:mx-[16px] md:mx-[24px] lg:mx-0 lg:max-w-[650px] xl:max-w-[800px] 2xl:max-w-[900px]">
          <motion.div variants={item}>
            <HandwrittenHeading text={handwrittenText} className="ml-auto mt-[31px] pr-[20px] lg:hidden" />
          </motion.div>

          <div className="mt-[12px] ml-[-14px] sm:ml-[-16px] md:ml-[-24px] lg:ml-0 lg:mt-[24px]">
            {projectList.map((project: projectType, index: number) => (
              <motion.div variants={item} key={index}>
                <RowItem
                  text={project.title}
                  subtext={project.description}
                  badgeText={project.badgeText}
                  badgeColor={project.badgeColor}
                  className={project.className}
                />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div variants={item} className="hidden lg:block relative min-h-full w-[40%]">
          <Stars starsNo={7} />
          <Image
            src={planetImage}
            alt=""
            height={270}
            width={270}
            className="max-[1500px]:pr-20 animate-float xl:w-[400px] xl:h-[400px] 3xl:w-[500px]! 3xl:h-[500px]! absolute pt-10 xl:pt-20 3xl:pt-30! -right-6 min-[1700px]:right-10 inset-y-0 my-auto"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};
