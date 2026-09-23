"use client";
import CoffeeIcon from "@/public/assets/icons/coffee-mug.svg";
import Image from "next/image";
import { Heading3 } from "./ui/headings";
import { motion } from "framer-motion";
import { container, containerUndelayed, item } from "../lib/global-anim-variants";
import { useEverythingState } from "@/store/store";
import CustomLink from "./ui/custom-link";

function Header() {
  const everythingState = useEverythingState();

  return (
    <motion.div
      variants={everythingState.showInitAnim ? container : containerUndelayed}
      initial="hidden"
      animate={everythingState.doExitAnim ? "exit" : "show"}
    >
      <motion.div className="flex items-center justify-between pt-[22px] 2xl:pl-3 pr-[14px] pb-[4px] 2xl:pb-0 2xl:pt-[10px]">
        <motion.div variants={item}>
          <CustomLink href={"/"}>
            <Image
              src={CoffeeIcon}
              height={67}
              width={67}
              alt="Coffee"
              loading="eager"
              className="2xl:h-[90px] 2xl:w-[90px]"
            />
          </CustomLink>
        </motion.div>

        <motion.div variants={item}>
          <Heading3 className="text-[#3B403C]!" text="| Sajawal Hassan | 16 |" />
        </motion.div>
      </motion.div>
      <motion.div variants={item}>
        <div className="h-[1px] w-full transition-all duration-400 bg-black group-hover:bg-transparent" />
      </motion.div>
    </motion.div>
  );
}

export default Header;
