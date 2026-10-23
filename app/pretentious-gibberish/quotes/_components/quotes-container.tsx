"use client";
import { AnimatePresence, motion } from "framer-motion";
import { forwardRef, memo, useDeferredValue, useMemo, useState } from "react";
import Breadcrumb from "@/components/ui/breadcrumb";
import HandwrittenHeading from "@/components/ui/handwritten-heading";
import { Heading1 } from "@/components/ui/headings";
import { QuoteBox } from "@/components/ui/quote-box";
import TextField from "@/components/ui/text-field";
import { PageTransition } from "@/components/page-transition";
import SearchIcon from "@/public/assets/icons/search.svg";
import { container, containerUndelayed, item } from "@/lib/global-anim-variants";
import { useEverythingState } from "@/store/store";

type Quote = { id: string; text: string };

const rawQuotes = [
  "Truth illuminated paths dogma concealed",
  "Wisdom illuminated paths dogma concealed",
  "Reason prevailed",
  "Curiosity illuminated paths certainty concealed",
  "Knowledge outlasted fear",
  "Logic uncovered truths tradition obscured",
  "Thought outgrew inherited beliefs",
  "Understanding grew",
  "Science revealed wonders superstition concealed",
  "Doubt liberated me",
  "Inquiry illuminated paths ignorance concealed",
  "Freedom outgrew fear",
  "Critical thought dismantled inherited illusions",
  "Evidence challenged ancient convictions",
  "Certainty faded",
  "Questions mattered",
  "Experience revealed truths authority concealed",
  "Skepticism prevailed",
  "Reflection illuminated paths prejudice concealed",
  "Independent thought challenged convention",
  "Hope endured",
  "Reason uncovered truths blind faith concealed",
  "Curiosity awakened",
  "Knowledge illuminated paths fear concealed",
  "Truth outlasted dogma",
  "Discovery illuminated paths ignorance concealed",
  "Understanding challenged inherited assumptions",
  "Wonder remained",
];

const quotes: Quote[] = rawQuotes.map((text, i) => ({ id: `quote-${i}`, text }));

const listContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
  exit: { transition: { staggerChildren: 0.02 } },
};

const removeExit = { opacity: 0, scale: 0.9, transition: { duration: 0.15 } };

const layoutTransition = { layout: { duration: 0.25, ease: "easeOut" } } as const;

const QuoteItem = memo(
  forwardRef<HTMLDivElement, { text: string; index: number }>(function QuoteItem({ text, index }, ref) {
    return (
      <motion.div
        ref={ref}
        variants={item}
        exit={removeExit}
        layout="position"
        layoutDependency={index}
        transition={layoutTransition}
      >
        <QuoteBox text={text} />
      </motion.div>
    );
  }),
);

const QuoteList = memo(function QuoteList({ quotes }: { quotes: Quote[] }) {
  return (
    <motion.div variants={listContainer} className="relative flex flex-wrap gap-4">
      <AnimatePresence initial={false} mode="popLayout">
        {quotes.map(({ id, text }, index) => (
          <QuoteItem key={id} text={text} index={index} />
        ))}
      </AnimatePresence>
    </motion.div>
  );
});

function QuotesContainer() {
  const [showLoading, setShowLoading] = useState(false);
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  const everythingState = useEverythingState();

  const filteredQuotes = useMemo(() => {
    const q = deferredQuery.trim().toLowerCase();
    if (!q) return quotes;
    return quotes.filter(({ text }) => text.toLowerCase().includes(q));
  }, [deferredQuery]);

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
          <Heading1 text="Random Lines and Dialogues" />
        </motion.div>

        <motion.div variants={item} className="mt-2 md:mt-4">
          <HandwrittenHeading text="Interludes of philosophy" className="relative ml-auto w-[calc(100%+15px)]" />
        </motion.div>
      </div>

      <div className="mt-6 2xl:mt-12 md:mt-8 max-w-[100%] mx-auto border-2 border-transparent sm:mt-6 md:mt-8 sm:space-y-2">
        <motion.div variants={item} className="w-[80%] md:w-full max-w-[400px] ml-1">
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

        <QuoteList quotes={filteredQuotes} />

        {filteredQuotes.length === 0 && (
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="ml-1 mt-4">
            No quotes match &ldquo;{deferredQuery.trim()}&rdquo; ):
          </motion.p>
        )}
      </div>
    </motion.div>
  );
}

export default QuotesContainer;
