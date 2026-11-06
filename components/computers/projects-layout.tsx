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
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { cn } from "@/lib/helper";

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
  const isDesktop = useMediaQuery("(min-width: 1024px)", true);

  if (showLoading) return <PageTransition href={everythingState.transitionLink} />;

  return (
    <motion.div
      className="mt-[34px] mx-auto"
      variants={everythingState.showInitAnim ? container : containerUndelayed}
      initial="hidden"
      animate={everythingState.doExitAnim ? "exit" : "show"}
      onAnimationComplete={(definition) => {
        if (definition === "exit") setShowLoading(true);
      }}
    >
      {isDesktop ? (
        <div className="static z-10 hidden lg:flex items-stretch justify-around min-[1800px]:justify-between gap-x-[80px]">
          <div>
            <div className="">
              <Breadcrumb className="mb-3" />
              <motion.div variants={item}>
                <Heading2 text={heading} className="2xl:text-[54px]!" />
              </motion.div>
              <motion.div variants={item}>
                <HeadingSubText text={subtext} className="italic max-w-[90%] mt-1" />
              </motion.div>
            </div>

            <div className="hidden lg:block mt-[24px]">
              {projectList.map((project: projectType, index: number) => (
                <motion.div variants={item} key={index}>
                  <RowItem
                    text={project.title}
                    subtext={project.description}
                    badgeText={project.badgeText}
                    badgeColor={project.badgeColor}
                    className={cn(index === 0 && "border-t-2")}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative self-stretch flex flex-col items-end min-[1800px]:w-[50%]">
            <motion.div variants={item} className="w-max">
              <HandwrittenHeading text={handwrittenText} className="lg:text-[40px] z-10" />
            </motion.div>

            <motion.div variants={item} className="flex-1 relative w-full">
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
        </div>
      ) : (
        <div className="lg:hidden">
          <div>
            <Breadcrumb className="mb-3" />
            <motion.div variants={item}>
              <Heading2 text={heading} className="2xl:text-[54px]!" />
            </motion.div>
            <motion.div variants={item}>
              <HeadingSubText text={subtext} className="italic text-[14px] 2xl:text-[18px]! mt-1" />
            </motion.div>
          </div>

          <div className="w-full mt-[34px]">
            <motion.div variants={item}>
              <HandwrittenHeading text={handwrittenText} className="ml-auto mt-[31px] pr-[20px]" />
            </motion.div>

            <div className="mt-[30px] w-screen relative left-1/2 right-1/2 -mx-[50vw]">
              {projectList.map((project: projectType, index: number) => (
                <motion.div variants={item} key={index}>
                  <RowItem
                    doWidthStuff
                    text={project.title}
                    subtext={project.description}
                    badgeText={project.badgeText}
                    badgeColor={project.badgeColor}
                    className={cn(index === 0 && "border-t-2")}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};
