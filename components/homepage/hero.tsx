"use client";
import Squiggle from "@/public/assets/icons/squiggle.svg";
import Pencil from "@/public/assets/icons/pencil.svg";
import Image from "next/image";
import { Heading1, HeadingSubText } from "./ui";
import { motion, Variants } from "framer-motion";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 2.2,
      staggerChildren: 0.2,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function Hero() {
  return (
    <motion.div
      className="space-y-[60px] lg:max-w-[670px] xl:max-w-[740px] 2xl:max-w-full"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <div className="space-y-[14px] max-w-[550px] sm:max-w-full md:px-20 lg:px-0 sm:px-10 md:text-center lg:text-left">
        <motion.div variants={item}>
          <Heading1
            text={`Hey, I do things that I can't categorize into anything.`}
          />
        </motion.div>
        <motion.div variants={item}>
          <HeadingSubText
            className="max-w-[740px] 3xl:max-w-[900px]"
            text={`Sometimes I think I'm Shakespeare; sometimes I think I can write my own kernel; sometimes I feel like Hamilton; sometimes I'm a singer; and all of the time I have adhd, probably, not sure actually, never got it checked >.< . Welcome to my mess of a personality under the guise of a catppuccin-themed (mostly) website!`}
          />
        </motion.div>
      </div>

      <div className="flex items-center gap-x-[27px] w-max mx-auto lg:gap-x-18 2xl:gap-x-0 2xl:justify-around 2xl:max-w-[740px] 2xl:w-full border border-transparent 2xl:mx-0">
        <motion.div variants={item}>
          <Image
            src={Squiggle}
            height={101}
            width={25}
            alt="squiggle"
            className="rotate-180 sm:h-[150px] sm:w-[75px] lg:hidden"
          />
        </motion.div>

        <motion.div
          variants={item}
          className="animate-float [animation-delay:3s] w-[198px] h-[198px] rounded-full border border-black bg-[#D9D9D9] sm:w-[240px] sm:h-[240px] xl:h-[220px] xl:w-[220px] 2xl:h-[261px] 2xl:w-[261px]"
        />

        <motion.div variants={item}>
          <Image
            src={Squiggle}
            height={101}
            width={25}
            alt="squiggle"
            className="sm:h-[150px] sm:w-[75px] lg:hidden"
          />
        </motion.div>

        <motion.div variants={item} className="relative">
          <Image
            src={Pencil}
            width={180}
            height={180}
            alt="pencil"
            className="relative z-50 hidden lg:block 2xl:w-[196px] 2xl:h-[196px] animate-float [animation-delay:2s]"
          />
          <div className="items-center gap-x-0 absolute top-0 z-0 hidden lg:flex 2xl:-left-15 2xl:top-3 animate-float">
            <Image
              src={Squiggle}
              width={25}
              height={101}
              alt="squiggle"
              className="2xl:w-[35px] 2xl:h-[130px]"
            />
            <Image
              src={Squiggle}
              width={25}
              height={101}
              alt="squiggle"
              className="2xl:w-[35px] 2xl:h-[130px]"
            />
            <Image
              src={Squiggle}
              width={25}
              height={101}
              alt="squiggle"
              className="2xl:w-[35px] 2xl:h-[130px]"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
export default Hero;
