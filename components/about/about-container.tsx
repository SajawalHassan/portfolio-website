"use client";
import { motion } from "framer-motion";
import AboutDescription from "@/components/about/about-description";
import AboutHeading from "@/components/about/about-heading";
import Squiggle from "@/public/assets/icons/squiggle.svg";
import AboutSubHeading from "@/components/about/about-subheading";
import Image from "next/image";
import {
  container,
  containerUndelayed,
  item,
} from "@/lib/global-anim-variants";
import { useEverythingState } from "@/store/store";

function AboutContainer() {
  const everythingState = useEverythingState();

  return (
    <motion.div
      className="mt-[50px] max-w-[380px] sm:max-w-[600px] md:max-w-[850px] lg:max-w-[1100px] xl:max-w-[1350px] 2xl:max-w-[1500px] 3xl:max-w-[1700px]! mx-auto!"
      variants={everythingState.showInitAnim ? container : containerUndelayed}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={item}>
        <AboutHeading
          text="More about me!"
          className="max-w-[70%] sm:max-w-[20%] md:max-w-[430px] lg:max-w-[500px] xl:max-w-[600px]"
        />
      </motion.div>

      <div className="space-y-[8px] md:space-y-[12px] mt-[38px] sm:mt-[42px] lg:-mt-12 flex flex-col">
        <motion.div variants={item}>
          <AboutSubHeading
            text="Restlessly Procastinating"
            className="relative ml-auto mr-[15px] animate-float-sm-long"
          />
        </motion.div>
        <div className="lg:flex lg:gap-x-12 lg:mt-3 xl:gap-x-20 xl:justify-between xl:mt-5 3xl:ml-4!">
          <motion.div
            variants={item}
            className="hidden lg:block min-w-[350px] max-h-[450px] animate-float [animation-delay:-0.5s] 2xl:min-w-[400px] 2xl:max-h-[550px] 3xl:min-w-[500px]! 3xl:max-h-[600px]! rounded-[7px] border shadow-[18px_18px_4px_0px_rgba(0,0,0,0.25)] bg-[#D9D9D9] mx-auto sm:mx-0!"
          />
          <motion.div variants={item}>
            <AboutDescription />
          </motion.div>
        </div>
      </div>

      <motion.div
        variants={item}
        className="sm:flex items-center justify-between md:justify-around mt-[38px] sm:mt-[70px] lg:hidden"
      >
        <Image
          src={Squiggle}
          height={200}
          width={50}
          alt="squiggle"
          className="rotate-180 hidden sm:block animate-float"
        />
        <div className="w-[296px] h-[351px] rounded-[7px] border shadow-[18px_18px_4px_0px_rgba(0,0,0,0.25)] bg-[#D9D9D9] mx-auto sm:mx-0! animate-float" />
        <Image
          src={Squiggle}
          height={200}
          width={50}
          alt="squiggle"
          className="hidden sm:block animate-float"
        />
      </motion.div>
    </motion.div>
  );
}

export default AboutContainer;
