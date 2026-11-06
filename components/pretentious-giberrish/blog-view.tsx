"use client";
import { Heading3, HeadingSubText } from "@/components/ui/headings";
import { RowItem } from "@/components/ui/row-item";
import { ViewMoreBtn } from "@/components/ui/view-more-btn";
import { convertTextToUrl, getSubtext } from "@/lib/helper";
import { useEverythingState } from "@/store/store";
import { cn } from "@/lib/helper";
import CustomLink from "@/components/ui/custom-link";
import Loader from "@/components/ui/loader";

type Props = {};

export const BlogView = (props: Props) => {
  const essays = useEverythingState((s) => s.essays);
  const isFetching = useEverythingState((s) => s.isFetching);

  return (
    <div className="mt-[40px] xl:flex-1 xl:min-w-0 xl:max-w-[622px] min-[1700px]:max-w-[700px]!">
      <Heading3 text="Futile thoughts on not-so-futile things" className="leading-[128.7%]" />
      <HeadingSubText text="Thoughts and ideas, presented with pretentious English, nonsense structure, all under the semblence of blogs and essays" />

      <div className="mt-[30px] w-screen relative left-1/2 right-1/2 -mx-[50vw] sm:max-width-stuff px-0! sm:mx-auto sm:left-0 sm:right-0 sm:w-full">
        {isFetching ? (
          <Loader />
        ) : (
          essays.map((e, i) => (
            <CustomLink href={"/pretentious-gibberish/essays/" + convertTextToUrl(e.title)} key={e.title}>
              <RowItem
                doWidthStuff={true}
                text={e.title}
                subtext={getSubtext(e.body, 100)}
                badgeColor="green"
                badgeText={e.badgeText}
                className={cn(i === 0 && "border-t-2")}
              />
            </CustomLink>
          ))
        )}
        <ViewMoreBtn className="mt-4" href="/pretentious-gibberish/essays" />
      </div>
    </div>
  );
};
