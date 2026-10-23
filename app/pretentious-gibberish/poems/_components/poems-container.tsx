"use client";
import { AnimatePresence, motion } from "framer-motion";
import { forwardRef, memo, useDeferredValue, useMemo, useState } from "react";
import Breadcrumb from "@/components/ui/breadcrumb";
import HandwrittenHeading from "@/components/ui/handwritten-heading";
import { Heading1 } from "@/components/ui/headings";
import TextField from "@/components/ui/text-field";
import { PageTransition } from "@/components/page-transition";
import SearchIcon from "@/public/assets/icons/search.svg";
import { container, containerUndelayed, item } from "@/lib/global-anim-variants";
import { useEverythingState } from "@/store/store";
import { PoemBox } from "@/components/ui/poem-box";
import Image from "next/image";
import PlanetImage from "@/public/assets/icons/planet-1.svg";

type Poem = { id: string; text: string };

const listContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
  exit: { transition: { staggerChildren: 0.02 } },
};

const removeExit = { opacity: 0, scale: 0.9, transition: { duration: 0.15 } };

const layoutTransition = { layout: { duration: 0.25, ease: "easeOut" } } as const;

const examplePoem = `When will the lifeless winter come
Wake my corpse from its dream
Rid me of all the sun's heat
Give me the food of life to eat?

When will this sickle of death come...`;

const PoemItem = memo(
  forwardRef<HTMLDivElement, { text: string; index: number }>(function PoemItem({ text, index }, ref) {
    return (
      <motion.div
        ref={ref}
        variants={item}
        exit={removeExit}
        layout="position"
        layoutDependency={index}
        transition={layoutTransition}
      >
        <PoemBox title="A longing" poemText={examplePoem} />
      </motion.div>
    );
  }),
);

const PoemList = memo(function PoemList({ Poems }: { Poems: Poem[] }) {
  return (
    <motion.div
      variants={listContainer}
      className="relative flex flex-wrap gap-4 lg:gap-6 justify-center xl:justify-start"
    >
      <AnimatePresence mode="popLayout">
        {Poems.map((_, index) => (
          <PoemItem key={index} text={""} index={index} />
        ))}
      </AnimatePresence>
    </motion.div>
  );
});

export function PoemsContainer() {
  const [showLoading, setShowLoading] = useState(false);
  const [query, setQuery] = useState("");
  const everythingState = useEverythingState();

  if (showLoading) return <PageTransition href={everythingState.transitionLink} />;

  return (
    <motion.div
      variants={everythingState.showInitAnim ? container : containerUndelayed}
      initial="hidden"
      animate={everythingState.doExitAnim ? "exit" : "show"}
      onAnimationComplete={(definition) => {
        if (definition === "exit") setShowLoading(true);
      }}
    >
      <div className="lg:flex justify-between">
        <motion.div variants={item}>
          <Breadcrumb className="mb-4" />
          <Heading1 text="Bad and Better Poems" />
        </motion.div>

        <motion.div variants={item} className="mt-2 md:mt-4">
          <HandwrittenHeading text="Meadows of love and hate." className="relative ml-auto w-[calc(100%+15px)]" />
        </motion.div>
      </div>

      <div className="mt-6 2xl:mt-12 md:mt-8 max-w-[100%] mx-auto sm:mt-6 md:mt-8">
        <div className="relative z-10 flex flex-col items-center xl:items-start">
          <motion.div variants={item} className="w-[80%] max-w-[656px]">
            <TextField
              icon={SearchIcon}
              label="Search"
              name=""
              placeholder="Search"
              showLabel={false}
              value={query}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
            />
          </motion.div>

          <PoemList Poems={Array.from({ length: 30 })} />
        </div>
        <motion.div variants={item} className="absolute -right-30 top-100 z-0 max-[1500px]:pr-20">
          <Image
            src={PlanetImage}
            alt=""
            height={270}
            width={270}
            loading="eager"
            className="animate-float lg:w-[400px] lg:h-[400px] 3xl:w-[600px]! 3xl:h-[600px]!"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
