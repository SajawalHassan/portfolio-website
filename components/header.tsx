"use client";
import CoffeeIcon from "@/public/assets/icons/coffee-mug.svg";
import Image from "next/image";
import { Heading3 } from "./ui/headings";
import { motion } from "framer-motion";
import { container, containerUndelayed, item } from "../lib/global-anim-variants";
import { useEverythingState } from "@/store/store";
import CustomLink from "./ui/custom-link";
import { getAge } from "@/lib/helper";

function Header() {
  const everythingState = useEverythingState();

  return (
    <motion.header
      role="banner"
      itemScope
      itemType="https://schema.org/WPHeader"
      variants={everythingState.showInitAnim ? container : containerUndelayed}
      initial="hidden"
      animate={everythingState.doExitAnim ? "exit" : "show"}
      className="pl-[14px] md:pl-[24px]"
    >
      <motion.div className="flex items-center justify-between pt-[22px] 2xl:pl-3 pr-[14px] pb-[4px] 2xl:pb-0 2xl:pt-[10px]">
        <motion.div variants={item} itemScope itemType="https://schema.org/Organization">
          <CustomLink
            href={"/"}
            title="Sajawal Hassan - Home"
            aria-label="Sajawal Hassan - Home"
            rel="home"
            itemProp="url"
          >
            <Image
              src={CoffeeIcon}
              height={67}
              width={67}
              alt="Sajawal Hassan logo - coffee mug"
              title="Sajawal Hassan"
              loading="eager"
              priority
              decoding="async"
              draggable={false}
              itemProp="logo"
              className="2xl:h-[90px] 2xl:w-[90px]"
            />
          </CustomLink>
        </motion.div>

        <motion.div variants={item}>
          <Heading3 className="text-[#3B403C]!" text={`| Sajawal Hassan |`} />
        </motion.div>
      </motion.div>
      <motion.div variants={item} aria-hidden="true" role="presentation">
        <div
          aria-hidden="true"
          role="presentation"
          className="h-[1px] w-full transition-all duration-400 bg-black group-hover:bg-transparent"
        />
      </motion.div>
    </motion.header>
  );
}

export default Header;
