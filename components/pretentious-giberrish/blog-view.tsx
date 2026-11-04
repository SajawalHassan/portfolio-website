"use client";
import { Heading3, HeadingSubText } from "@/components/ui/headings";
import { RowItem } from "@/components/ui/row-item";
import { ViewMoreBtn } from "@/components/ui/view-more-btn";
import { getSubtext } from "@/lib/helper";
import { useEverythingState } from "@/store/store";
import clsx from "clsx";

type Props = {};

export const BlogView = (props: Props) => {
  const essays = useEverythingState((s) => s.essays);

  return (
    <div className="mt-[40px] xl:flex-1 xl:min-w-0 xl:max-w-[622px] min-[1700px]:max-w-[700px]!">
      <Heading3 text="Futile thoughts on not-so-futile things" className="leading-[128.7%]" />
      <HeadingSubText text="Thoughts and ideas, presented with pretentious English, nonsense structure, all under the semblence of blogs and essays" />

      <div className="mt-[30px] w-screen relative left-1/2 right-1/2 -mx-[50vw] sm:max-width-stuff px-0! sm:mx-auto sm:left-0 sm:right-0 sm:w-full">
        {essays.map((e, i) => (
          <RowItem
            key={e.title}
            doWidthStuff={true}
            text={e.title}
            subtext={getSubtext(e.body, 100)}
            badgeColor="green"
            badgeText={e.badgeText}
            className={clsx(i === 0 && "border-t-2")}
          />
        ))}
        <ViewMoreBtn className="mt-4" href="/pretentious-gibberish/essays" />
      </div>
    </div>
  );
};
