import { item } from "@/lib/global-anim-variants";
import { motion } from "framer-motion";
import Image from "next/image";
import CoffeeIcon from "@/public/assets/icons/coffee-mug.svg";

type Props = {};

const Loader = (props: Props) => {
  return (
    <motion.div
      variants={item}
      role="status"
      aria-live="polite"
      aria-busy="true"
      className="w-full flex items-center justify-center py-4"
    >
      <Image
        src={CoffeeIcon}
        height={67}
        width={67}
        alt="Loading"
        loading="eager"
        decoding="async"
        draggable={false}
        className="2xl:h-[90px] 2xl:w-[90px] loading-anim"
      />
    </motion.div>
  );
};

export default Loader;
