"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ContactForm from "@/components/talk-to-me/contact-form";
import Breadcrumb from "@/components/ui/breadcrumb";
import CustomLink from "@/components/ui/custom-link";
import { Heading1 } from "@/components/ui/headings";
import { PageTransition } from "@/components/page-transition";
import { ContactIcons as contactIcons } from "@/lib/content-data";
import { container, containerUndelayed, item } from "@/lib/global-anim-variants";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useEverythingState } from "@/store/store";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Pencil from "@/public/assets/pencil.svg";

type Props = {};

const IconBtn = (props: { icon: StaticImport; href: string }) => {
  return (
    <CustomLink
      href={props.href}
      className="w-[40] h-[40] md:w-[45px] md:h-[45px] lg:w-[50px] lg:h-[50px] xl:w-[55px] xl:h-[55px] 2xl:w-[65px] 2xl:h-[65px] rounded-[6px] bg-bg border-[3px] border-black flex items-center justify-center"
    >
      <Image
        src={props.icon}
        alt=""
        width={20}
        height={20}
        className="md:w-[25px] md:h-[25px] lg:w-[30px] lg:h-[30px] 2xl:w-[35px] 2xl:h-[35px]"
      />
    </CustomLink>
  );
};

export const TalkToMeContainer = (props: Props) => {
  const [showLoading, setShowLoading] = useState(false);
  const everythingState = useEverythingState();
  const isXl = useMediaQuery("(min-width: 1280px)");

  if (showLoading) return <PageTransition href={everythingState.transitionLink} />;

  const titleBlock = (
    <motion.div variants={item} className="w-max">
      <Breadcrumb className="mb-4" />
      <Heading1 text="Talk to me" className="border-b-[6px] border-black pl-0.5 pr-6 w-max" />
    </motion.div>
  );

  const iconsBlock = (extraClassName: string) => (
    <motion.div variants={item} className={`flex items-center gap-x-[10px] xl:gap-x-[15px] w-max ${extraClassName}`}>
      {contactIcons.map((cI) => (
        <IconBtn icon={cI.icon} href={cI.href} key={cI.href} />
      ))}
    </motion.div>
  );

  return (
    <motion.div
      className="h-full"
      variants={everythingState.showInitAnim ? container : containerUndelayed}
      initial="hidden"
      animate={everythingState.doExitAnim ? "exit" : "show"}
      onAnimationComplete={(definition) => {
        if (definition === "exit") setShowLoading(true);
      }}
    >
      {isXl ? (
        <div className="flex items-stretch justify-around shrink-0 gap-x-10 h-full">
          <div className="space-y-10 max-w-4xl w-full">
            {titleBlock}
            <motion.div variants={item}>
              <ContactForm />
            </motion.div>
          </div>

          <div className="flex flex-col items-end gap-y-10 w-full max-w-[300px] 2xl:max-w-[350px]">
            {iconsBlock("")}

            <motion.div variants={item} className="flex flex-1 items-center justify-center w-full">
              <Image
                src={Pencil}
                alt=""
                width={300}
                height={300}
                className="h-auto w-full object-contain animate-float"
              />
            </motion.div>
          </div>
        </div>
      ) : (
        <div className="space-y-4 lg:space-y-10">
          <div className="flex items-start justify-around">
            {titleBlock}
            {iconsBlock("mt-[80px] lg:mt-0 ml-auto")}
          </div>

          <div className="flex flex-col items-center justify-start gap-x-20 gap-y-10 lg:flex-row">
            <motion.div variants={item}>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      )}
    </motion.div>
  );
};
