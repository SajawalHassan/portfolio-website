import { Heading3, HeadingSubText } from "@/components/ui/headings";
import { RowItem } from "@/components/ui/row-item";
import { ViewMoreBtn } from "@/components/ui/view-more-btn";

type Props = {};

export const BlogView = (props: Props) => {
  return (
    <div className="mt-[40px] xl:flex-1 xl:min-w-0 xl:max-w-[622px] min-[1700px]:max-w-[700px]!">
      <Heading3 text="Futile thoughts on not-so-futile things" className="leading-[128.7%]" />
      <HeadingSubText text="Thoughts and ideas, presented with pretentious English, nonsense structure, all under the semblence of blogs and essays" />

      <div className="mt-[30px] w-screen relative left-1/2 right-1/2 -mx-[50vw] sm:max-width-stuff px-0! sm:mx-auto sm:left-0 sm:right-0 sm:w-full">
        <RowItem
          doWidthStuff={true}
          text="The education of morals"
          subtext="Made at 1am because “Screenshot 2026-04-07 at 11:34:23 PM (2).png” broke something in me."
          badgeColor="green"
          badgeText="Philosophy"
          className="border-t-[2px]"
        />
        <RowItem
          doWidthStuff={true}
          text="The education of morals"
          subtext="Made at 1am because “Screenshot 2026-04-07 at 11:34:23 PM (2).png” broke something in me."
          badgeColor="green"
          badgeText="Philosophy"
        />
        <RowItem
          doWidthStuff={true}
          text="The education of morals"
          subtext="Made at 1am because “Screenshot 2026-04-07 at 11:34:23 PM (2).png” broke something in me."
          badgeColor="green"
          badgeText="Philosophy"
        />
        <ViewMoreBtn className="mt-4" />
      </div>
    </div>
  );
};
