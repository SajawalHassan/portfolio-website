"use client";
import { AnimatePresence, motion } from "framer-motion";
import { forwardRef, Fragment, memo, useDeferredValue, useMemo, useState } from "react";
import Breadcrumb from "@/components/ui/breadcrumb";
import HandwrittenHeading from "@/components/ui/handwritten-heading";
import { Heading1, HeadingSubText } from "@/components/ui/headings";
import TextField from "@/components/ui/text-field";
import { PageTransition } from "@/components/page-transition";
import SearchIcon from "@/public/assets/icons/search.svg";
import { container, containerUndelayed, item } from "@/lib/global-anim-variants";
import { poemType, useEverythingState } from "@/store/store";
import { PoemBox } from "@/components/ui/poem-box";
import Image from "next/image";
import PlanetImage from "@/public/assets/icons/planet-1.svg";

const listContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
  exit: { transition: { staggerChildren: 0.02 } },
};

const removeExit = { opacity: 0, scale: 0.9, transition: { duration: 0.15 } };

const layoutTransition = { layout: { duration: 0.25, ease: "easeOut" } } as const;

const PoemItem = memo(
  forwardRef<HTMLDivElement, { text: string; title: string; index: number }>(function PoemItem(
    { text, index, title },
    ref,
  ) {
    return (
      <motion.div
        ref={ref}
        variants={item}
        exit={removeExit}
        layout="position"
        layoutDependency={index}
        transition={layoutTransition}
      >
        <PoemBox title={title} poemText={text} />
      </motion.div>
    );
  }),
);

const PoemList = memo(function PoemList({ items }: { items: { poem: poemType; id: number }[] }) {
  return (
    <motion.div
      variants={listContainer}
      className="relative flex flex-wrap gap-4 lg:gap-6 justify-center xl:justify-start"
    >
      <AnimatePresence mode="popLayout">
        {items.map(({ poem, id }, index) => (
          <PoemItem key={id} text={poem.body} title={poem.title} index={index} />
        ))}
      </AnimatePresence>
    </motion.div>
  );
});

export function PoemsContainer() {
  const [showLoading, setShowLoading] = useState(false);
  const [query, setQuery] = useState("");
  const everythingState = useEverythingState();

  const deferredQuery = useDeferredValue(query);

  const filteredPoems = useMemo(() => {
    const q = deferredQuery.trim().toLowerCase();
    const all = everythingState.poems.map((poem, id) => ({ poem, id }));
    if (!q) return all;
    return all.filter(({ poem }) => poem.title.toLowerCase().includes(q));
  }, [everythingState.poems, deferredQuery]);

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
          <Heading1 text="Bad and Better-Than-Bad Poems" />
          <HeadingSubText
            className="xl:max-w-[70%] mt-1.5"
            text="The days of love; the days of hate; the days of ineffable virtue; the days of transcendent vice. Failed attempts at describing the ecstacy of being human."
          />
        </motion.div>

        <motion.div variants={item} className="mt-6">
          <HandwrittenHeading text="Meadows of love and hate." className="relative ml-auto w-max pl-2" />
        </motion.div>
      </div>

      <div className="mt-2 lg:mt-13 mdmax-w-[100%] mx-auto">
        <div className="relative z-10 flex flex-col items-center xl:items-start">
          <motion.div variants={item} className="w-[80%] mb-2 max-w-[656px]">
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

          {everythingState.poems.length > 0 && (
            <Fragment>
              <PoemList items={filteredPoems} />
              {filteredPoems.length === 0 && (
                <motion.p variants={item} className="mt-8 text-center xl:text-left">
                  No poems found for “{deferredQuery}”.
                </motion.p>
              )}
            </Fragment>
          )}
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
