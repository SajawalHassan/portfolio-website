"use client";
import { useRef, useState } from "react";
import { aboutDescriptionParas } from "@/lib/content-data";
import Image from "next/image";
import ChevronDouble from "@/public/assets/icons/chevron-double.svg";
import clsx from "clsx";
import { AnimatePresence, motion, Variants } from "framer-motion";

const MoveButton = (props: {
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}) => {
  return (
    <div
      className={clsx(
        "relative overflow-hidden rounded-[7px] group cursor-pointer",
        props.disabled && "cursor-not-allowed",
      )}
      onClick={props.onClick}
    >
      {!props.disabled && (
        <div className="h-[48px] w-[48px] 2xl:h-[66px] 2xl:w-[66px] bg-[#000000] cursor-pointer rounded-[7px] z-0 absolute top-0 left-0 -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform will-change-transform" />
      )}
      <button
        type="button"
        disabled={props.disabled}
        className={clsx(
          "h-[48px] w-[48px] 2xl:h-[66px] 2xl:w-[66px] bg-[#565551] rounded-[7px] flex items-center justify-center transition-opacity",
          props.disabled && "opacity-40 cursor-not-allowed",
        )}
      >
        <Image
          src={ChevronDouble}
          width={24}
          height={20}
          alt="chevron"
          className={clsx(
            "2xl:w-[33px] 2xl:h-[27.5px] cursor-pointer relative z-10",
            props.className,
            props.disabled && "cursor-not-allowed!",
          )}
        />
      </button>
    </div>
  );
};

const PARAS_PER_PAGE = 3;

const groupVariants: Variants = {
  enter: {
    y: "100%",
    opacity: 0,
  },
  center: {
    y: "0%",
    opacity: 1,
    transition: {
      y: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
      opacity: { duration: 0.35, ease: "easeOut" },
    },
  },
  exit: {
    y: "-100%",
    opacity: 0,
    transition: {
      y: { duration: 0.45, ease: [0.4, 0, 1, 1] },
      opacity: { duration: 0.3, ease: "easeIn" },
    },
  },
};

function AboutDescription() {
  const [startIndex, setStartIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const canGoBack = startIndex > 0;
  const canGoForward =
    startIndex + PARAS_PER_PAGE < aboutDescriptionParas.length;

  const goBack = () => {
    setStartIndex((prev) => Math.max(0, prev - PARAS_PER_PAGE));
  };

  const goForward = () => {
    setStartIndex((prev) => prev + PARAS_PER_PAGE);
  };

  const visibleParas = aboutDescriptionParas.slice(
    startIndex,
    startIndex + PARAS_PER_PAGE,
  );

  return (
    <div className="flex flex-col lg:max-w-[650px] xl:max-w-[800px] 2xl:max-w-[950px] 3xl:max-w-[1100px]!">
      <div
        ref={scrollRef}
        className="h-[400px] 2xl:h-[484.5px]! overflow-y-auto p-[17px] md:p-[40px] lg:p-[30px] xl:p-[35px] 2xl:p-[45px] rounded-[4px] border-2 bg-[#e5e0d4]"
      >
        <div className="overflow-hidden">
          <AnimatePresence
            mode="wait"
            onExitComplete={() => {
              scrollRef.current?.scrollTo({ top: 0 });
            }}
          >
            <motion.div
              key={startIndex}
              variants={groupVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="space-y-5 md:space-y-10 lg:space-y-5"
            >
              {visibleParas.map((para, i) => (
                <p
                  key={startIndex + i}
                  className="font-light text-[14px] sm:text-[18px] md:text-[22px] lg:text-[14px] xl:text-[17.5px] 2xl:text-[20px] 3xl:text-[21px]! leading-[114%] text-[#33312B]"
                >
                  {para}
                </p>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <div className="flex items-center gap-x-[7px] w-max ml-auto mt-[10px] xl:mt-[20px] xl:gap-x-[12px]">
        <MoveButton onClick={goBack} disabled={!canGoBack} />
        <MoveButton
          className="rotate-180"
          onClick={goForward}
          disabled={!canGoForward}
        />
      </div>
    </div>
  );
}

export default AboutDescription;
