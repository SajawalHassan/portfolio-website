"use client";
import CoffeeIcon from "@/public/assets/icons/coffee-mug.svg";
import Image from "next/image";
import { Heading3 } from "./ui";
import { motion } from "framer-motion";

function Header() {
  return (
    <motion.div
      initial={{ translateY: "5%", opacity: 0 }}
      animate={{ translateY: 0, opacity: "100%" }}
      transition={{ delay: 2, ease: "easeOut" }}
      className="flex items-center justify-between pt-[22px] ml-[14px] 2xl:ml-[30px] 2xl:pl-3 pr-[14px] border-b border-black pb-[4px] 2xl:pb-0 2xl:pt-[10px]"
    >
      <Image
        src={CoffeeIcon}
        height={67}
        width={67}
        alt="Coffee"
        loading="eager"
        className="2xl:h-[90px] 2xl:w-[90px]"
      />

      <Heading3 className="text-[#3B403C]!" text="| Sajawal Hassan | 16 |" />
    </motion.div>
  );
}

export default Header;
