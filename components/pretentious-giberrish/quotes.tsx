"use client";

import { Heading3, HeadingSubText } from "@/components/ui/headings";
import { QuoteBox } from "@/components/ui/quote-box";
import { ViewMoreBtn } from "@/components/ui/view-more-btn";
import { useEverythingState } from "@/store/store";

type Props = {};

export const Quotes = (props: Props) => {
  const quotes = useEverythingState((s) => s.quotes);

  return (
    <div className="mt-[50px]">
      <Heading3 text="Random lines and dialogues" className="leading-[128.7%]" />
      <HeadingSubText
        className="mt-0.5"
        text="Sometimes entire ideas clamped into a single line, othertimes a random burst of creativity."
      />

      <div className="flex flex-wrap gap-3 mt-[20px]">
        {quotes.slice(0, 5).map((q) => (
          <QuoteBox text={q} key={q} />
        ))}
      </div>
      <ViewMoreBtn className="mt-4" href="/pretentious-gibberish/quotes" />
    </div>
  );
};
