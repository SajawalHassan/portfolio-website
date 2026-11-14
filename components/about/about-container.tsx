"use client";
import { motion } from "framer-motion";
import AboutDescription from "@/components/about/about-description";
import Squiggle from "@/public/assets/icons/squiggle.svg";
import HandwrittenHeading from "@/components/ui/handwritten-heading";
import Image from "next/image";
import { container, containerUndelayed, item } from "@/lib/global-anim-variants";
import { useEverythingState } from "@/store/store";
import { useState } from "react";
import { PageTransition } from "@/components/page-transition";
import Breadcrumb from "@/components/ui/breadcrumb";
import { Heading1 } from "@/components/ui/headings";
import Me from "@/public/assets/me_with_friend.jpg";

const MotionImage = motion.create(Image);
function AboutContainer() {
  const [showLoading, setShowLoading] = useState(false);
  const everythingState = useEverythingState();

  if (showLoading) return <PageTransition href={everythingState.transitionLink} />;

  return (
    <motion.main
      id="main-content"
      itemScope
      itemType="https://schema.org/AboutPage"
      className="mt-[50px] max-w-[380px] sm:max-w-[600px] md:max-w-[850px] lg:max-w-[1100px] xl:max-w-[1350px] 2xl:max-w-[1500px] 3xl:max-w-[1700px]! mx-auto!"
      variants={everythingState.showInitAnim ? container : containerUndelayed}
      initial="hidden"
      animate={everythingState.doExitAnim ? "exit" : "show"}
      onAnimationComplete={(definition) => {
        if (definition === "exit") setShowLoading(true);
      }}
    >
      <motion.header variants={item}>
        <Breadcrumb className="mb-4" />
        <Heading1 text="More about me" itemProp="name" className="border-b-[6px] border-black pl-0.5 pr-6 w-max" />
      </motion.header>

      <section
        aria-label="About me"
        itemProp="mainContentOfPage"
        className="space-y-[8px] md:space-y-[12px] mt-[38px] sm:mt-[42px] lg:-mt-12 flex flex-col"
      >
        <motion.div variants={item}>
          <HandwrittenHeading
            text="Restlessly Procrastinating"
            className="relative ml-auto mr-[15px] animate-float-sm-long w-max pr-2.5"
          />
        </motion.div>
        <div className="lg:flex lg:gap-x-12 lg:mt-8 xl:gap-x-40 lg:justify-between xl:mt-3 2xl:mt-10 3xl:ml-4!">
          <MotionImage
            variants={item}
            src={Me}
            alt="Sajawal Hassan - portrait"
            title="Sajawal Hassan"
            itemProp="image"
            decoding="async"
            loading="eager"
            draggable={false}
            width={400}
            height={500}
            className="hidden object-top lg:block min-w-[350px] max-h-[450px] lg:min-w-[300px] lg:max-h-[400px] border-black animate-float [animation-delay:-0.5s] xl:max-h-[400px] 2xl:min-w-[350px] 2xl:max-h-[430px] 3xl:min-w-[400px]! 3xl:max-h-[500px]! rounded-[7px] border shadow-[18px_18px_4px_0px_rgba(0,0,0,0.25)] bg-[#D9D9D9] mx-auto sm:mx-0! object-cover"
          />
          <motion.div variants={item}>
            <AboutDescription />
          </motion.div>
        </div>
      </section>

      <motion.div
        variants={item}
        className="sm:flex items-center justify-between md:justify-around mt-[38px] sm:mt-[70px] lg:hidden"
      >
        <Image
          src={Squiggle}
          height={200}
          width={50}
          alt=""
          aria-hidden="true"
          role="presentation"
          draggable={false}
          decoding="async"
          className="rotate-180 hidden sm:block animate-float"
        />
        <Image
          src={Me}
          alt="Sajawal Hassan - portrait"
          title="Sajawal Hassan"
          loading="lazy"
          decoding="async"
          draggable={false}
          width={296}
          height={351}
          className="w-[296px] h-[351px] rounded-[7px] border border-black shadow-[18px_18px_4px_0px_rgba(0,0,0,0.25)] bg-[#D9D9D9] mx-auto sm:mx-0! animate-float object-cover"
        />
        <Image
          src={Squiggle}
          height={200}
          width={50}
          alt=""
          aria-hidden="true"
          role="presentation"
          draggable={false}
          decoding="async"
          className="hidden sm:block animate-float"
        />
      </motion.div>
    </motion.main>
  );
}

export default AboutContainer;
