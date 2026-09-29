"use client";
import Squiggle from "@/public/assets/icons/squiggle.svg";
import Image from "next/image";
import { Heading1, HeadingSubText } from "../ui/headings";
import { motion } from "framer-motion";
import { useEverythingState } from "@/store/store";
import { container, containerUndelayed, item } from "../../lib/global-anim-variants";

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
            text={`Sometimes I think I'm Shakespeare; sometimes I think I can write my own kernel; sometimes I feel like Hamilton; sometimes I'm a singer; and all of the time I have adhd, probably, not sure actually, never got it checked >.< . Welcome to my mess of a personality under the guise of a catppuccin-themed (mostly) website!`}
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

          <motion.div
            variants={item}
            className="animate-float [animation-delay:3s] w-[198px] h-[198px] rounded-full border-[6px] border-black bg-[#D9D9D9] sm:w-[240px] sm:h-[240px] xl:h-[220px] xl:w-[220px] 2xl:h-[280px] 2xl:w-[280px]"
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
