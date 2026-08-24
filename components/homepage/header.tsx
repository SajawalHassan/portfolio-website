"use client";
import CoffeeIcon from "@/public/assets/icons/coffee-mug.svg";
import Image from "next/image";
import { Heading3 } from "./ui";
import { motion } from "framer-motion";
import { container, item } from "../global-anim-variants";
import { useEverythingState } from "@/store/store";

function Header() {
  const everythingState = useEverythingState();

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate={everythingState.doExitAnim ? "exit" : "show"}
      className="ml-[14px] 2xl:ml-[30px]"
    >
      <motion.div className="flex items-center justify-between pt-[22px] 2xl:pl-3 pr-[14px] pb-[4px] 2xl:pb-0 2xl:pt-[10px]">
        <motion.div variants={item}>
          <Image
            src={CoffeeIcon}
            height={67}
            width={67}
            alt="Coffee"
            loading="eager"
            className="2xl:h-[90px] 2xl:w-[90px]"
          />
        </motion.div>

        <motion.div variants={item}>
          <Heading3
            className="text-[#3B403C]!"
            text="| Sajawal Hassan | 16 |"
          />
        </motion.div>
      </motion.div>
      <motion.div variants={item}>
        <div className="h-[1px] w-full transition-all duration-400 bg-black group-hover:bg-transparent" />
      </motion.div>
    </motion.div>
  );
}

export default Header;
