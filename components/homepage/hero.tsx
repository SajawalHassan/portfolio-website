"use client";
import Squiggle from "@/public/assets/icons/squiggle.svg";
import Image from "next/image";
import Me from "@/public/assets/profile.webp";
import { Heading1, HeadingSubText } from "../ui/headings";
import { motion } from "framer-motion";
import { useEverythingState } from "@/store/store";
import { container, containerUndelayed, item } from "../../lib/global-anim-variants";

const MotionImage = motion.create(Image);

function Hero() {
  const everythingState = useEverythingState();

  return (
    <motion.div
      className="lg:mx-auto lg:max-w-[700px] xl:max-w-[780px] 2xl:max-w-[850px]"
      variants={everythingState.showInitAnim ? container : containerUndelayed}
      initial="hidden"
      animate={everythingState.doExitAnim ? "exit" : "show"}
    >
      <div className="space-y-[14px] max-w-[550px] sm:max-w-full sm:w-fit md:px-20 lg:px-0 sm:px-10 md:text-center xl:text-left">
        <motion.div variants={item} className="w-0 min-w-full">
          <Heading1 text={`Hey, I do things that I can't categorize into anything.`} />
        </motion.div>
        <motion.div variants={item}>
          <HeadingSubText
            className="lg:mx-auto xl:mx-0 max-w-[800px]!"
            text={`I make peculiar websites and leave them unfinished; write unpolished prose and leave it stranded; create small, niche scripts that benefit no one — perhaps not even myself. I code, study philosophy, read literature, and write embarrassing poems, not for some career path, but for my purpose of experiencing, fully, what it means to be a human — to see what ecstasy evolution has allowed me to feel.`}
          />
        </motion.div>

        <div className="mx-auto mt-[60px] lg:mt-[80px] flex items-center gap-x-[27px] w-max md:gap-x-18 2xl:gap-x-0 2xl:justify-between 2xl:max-w-[700px] 2xl:w-full">
          <motion.div variants={item}>
            <Image
              src={Squiggle}
              height={101}
              width={25}
              alt="squiggle"
              className="rotate-180 sm:h-[150px] sm:w-[75px] md:h-[215px] md:w-[55px] 2xl:h-[260px] 2xl:w-[75px] animate-float-sm"
            />
          </motion.div>

          <MotionImage
            variants={item}
            loading="eager"
            fetchPriority="high"
            drag={false}
            preload
            placeholder="blur"
            unoptimized
            src={Me}
            alt="Sajawal Hassan"
            width={280}
            height={280}
            className="animate-float [animation-delay:3s] object-cover! w-[198px] h-[198px] rounded-full border-[6px] border-black bg-[#D9D9D9] object-[50%_60%] sm:w-[240px] sm:h-[240px] xl:h-[220px] xl:w-[220px] 2xl:h-[280px] 2xl:w-[280px]"
          />

          <motion.div variants={item}>
            <Image
              src={Squiggle}
              height={101}
              width={25}
              alt="squiggle"
              className="sm:h-[150px] sm:w-[75px] md:h-[215px] md:w-[55px] 2xl:h-[260px] 2xl:w-[75px] animate-float-sm"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
export default Hero;
