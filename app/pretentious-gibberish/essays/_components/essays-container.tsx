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
import { EssayType, useEverythingState } from "@/store/store";
import Image from "next/image";
import PlanetImage from "@/public/assets/icons/planet-1.svg";
import { RowItem } from "@/components/ui/row-item";
import { cn, convertTextToUrl } from "@/lib/helper";
import { getSubtext } from "@/lib/helper";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import CustomLink from "@/components/ui/custom-link";

const listContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
  exit: { transition: { staggerChildren: 0.02 } },
};

const removeExit = { opacity: 0, scale: 0.9, transition: { duration: 0.15 } };

const layoutTransition = { layout: { duration: 0.25, ease: "easeOut" } } as const;

const EssayItem = memo(
  forwardRef<HTMLDivElement, EssayType & { index: number }>(function EssayItem(props, ref) {
    const isLgScreen = useMediaQuery("(min-width: 1280px)");

    return (
      <motion.div
        ref={ref}
        variants={item}
        exit={removeExit}
        layout="position"
        layoutDependency={props.index}
        transition={layoutTransition}
      >
        <CustomLink href={"/pretentious-gibberish/essays/" + convertTextToUrl(props.title)}>
          <RowItem
            className={cn(isLgScreen && props.index % 2 !== 0 && "border-t-2", props.index === 0 && "border-t-2", "")}
            text={props.title}
            subtext={getSubtext(props.body)}
            badgeColor="green"
            badgeText={props.badgeText}
          />
        </CustomLink>
      </motion.div>
    );
  }),
);

const EssayList = memo(function EssayList({ items }: { items: { essay: EssayType; id: number }[] }) {
  return (
    <motion.div variants={listContainer} className="relative grid grid-cols-1 xl:grid-cols-2 gap-x-10 gap-y-2">
      <AnimatePresence mode="popLayout">
        {items.map(({ essay, id }, index) => (
          <EssayItem
            key={id}
            title={essay.title}
            badgeText={essay.badgeText}
            body={essay.body}
            date={essay.body}
            index={index}
          />
        ))}
      </AnimatePresence>
    </motion.div>
  );
});

export function EssaysContainer() {
  const [showLoading, setShowLoading] = useState(false);
  const [query, setQuery] = useState("");
  const everythingState = useEverythingState();

  const deferredQuery = useDeferredValue(query);

  const filteredEssays = useMemo(() => {
    const q = deferredQuery.trim().toLowerCase();
    const all = everythingState.essays.map((essay, id) => ({ essay, id }));
    if (!q) return all;
    return all.filter(({ essay }) => essay.title.toLowerCase().includes(q));
  }, [everythingState.essays, deferredQuery]);

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
          <Heading1 text="Thoughts, thoughts, thoughts. All pointless." className="max-w-[90%]" />
          <HeadingSubText
            className="xl:max-w-[70%] mt-1.5"
            text="A chosen few of my mind's ideas, which were fleshed out, for reasons I cannot tell you, for I do not know."
          />
        </motion.div>

        <motion.div variants={item} className="mt-6">
          <HandwrittenHeading text="Scrutinized Humbug" className="relative ml-auto w-max pr-2.5" />
        </motion.div>
      </div>

      <div className="mt-2 lg:mt-13 mdmax-w-[100%] mx-auto">
        <div className="relative z-10 flex flex-col items-center sm:items-start">
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

          {everythingState.essays.length > 0 && (
            <Fragment>
              <EssayList items={filteredEssays} />
              {filteredEssays.length === 0 && (
                <motion.p variants={item} className="mt-8 text-center xl:text-left">
                  No essays found for “{deferredQuery}”.
                </motion.p>
              )}
            </Fragment>
          )}
        </div>
        <motion.div variants={item} className="hidden md:block absolute -right-30 top-100 z-0 max-[1500px]:pr-20">
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
