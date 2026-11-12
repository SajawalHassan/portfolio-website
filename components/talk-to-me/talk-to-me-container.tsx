"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ContactForm from "@/components/talk-to-me/contact-form";
import Breadcrumb from "@/components/ui/breadcrumb";
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

const IconBtn = (props: { icon: StaticImport; href: string; title: string }) => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer me"
      href={props.href}
      aria-label={`Contact link: ${props.href}`}
      itemProp="sameAs"
      title={props.title}
      className="btn-translate-hover w-[40px] h-[40px] md:w-[45px] md:h-[45px] lg:w-[50px] lg:h-[50px] xl:w-[55px] xl:h-[55px] 2xl:w-[65px] 2xl:h-[65px] rounded-[6px] bg-bg border-[3px] border-black flex items-center justify-center"
    >
      <Image
        src={props.icon}
        alt=""
        aria-hidden="true"
        role="presentation"
        draggable={false}
        decoding="async"
        width={20}
        height={20}
        className="md:w-[25px] md:h-[25px] lg:w-[30px] lg:h-[30px] 2xl:w-[35px] 2xl:h-[35px]"
      />
    </a>
  );
};

export const TalkToMeContainer = (props: Props) => {
  const [showLoading, setShowLoading] = useState(false);
  const everythingState = useEverythingState();
  const isXl = useMediaQuery("(min-width: 1280px)");

  if (showLoading) return <PageTransition href={everythingState.transitionLink} />;

  const titleBlock = (
    <motion.header variants={item} className="w-max">
      <Breadcrumb className="mb-4" />
      <Heading1 text="Talk to me" itemProp="name" className="border-b-[6px] border-black pl-0.5 pr-6 w-max" />
    </motion.header>
  );

  const iconsBlock = (extraClassName: string) => (
    <motion.nav
      variants={item}
      aria-label="Contact and social links"
      itemScope
      itemType="https://schema.org/Person"
      className={`flex items-center gap-x-[10px] xl:gap-x-[15px] w-max ${extraClassName}`}
    >
      {contactIcons.map((cI) => (
        <IconBtn icon={cI.icon} href={cI.href} key={cI.href} title={cI.title} />
      ))}
    </motion.nav>
  );

  return (
    <motion.main
      id="main-content"
      itemScope
      itemType="https://schema.org/ContactPage"
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
            <motion.section variants={item} aria-label="Contact form">
              <ContactForm />
            </motion.section>
          </div>

          <aside
            aria-label="Contact links"
            className="flex flex-col items-end gap-y-10 w-full max-w-[300px] 2xl:max-w-[350px]"
          >
            {iconsBlock("")}

            <motion.div
              variants={item}
              aria-hidden="true"
              role="presentation"
              className="flex flex-1 items-center justify-center w-full"
            >
              <Image
                src={Pencil}
                alt=""
                aria-hidden="true"
                role="presentation"
                draggable={false}
                decoding="async"
                width={300}
                height={300}
                className="h-auto w-full object-contain animate-float"
                loading="eager"
              />
            </motion.div>
          </aside>
        </div>
      ) : (
        <div className="space-y-4 lg:space-y-10">
          <div className="flex items-start justify-around">
            {titleBlock}
            {iconsBlock("mt-[80px] lg:mt-0 ml-auto")}
          </div>

          <motion.section variants={item} aria-label="Contact form">
            <ContactForm />
          </motion.section>
        </div>
      )}
    </motion.main>
  );
};
