import { Heading3, Heading4, HeadingSubText } from "@/components/ui/headings";
import clsx from "clsx";

export const NovelItem = (props: { className?: string; text: string; subtext: string }) => {
  return (
    <div className={clsx("group/novel z-10 border-[#8F8C7B] border-b-[2px] relative", props.className)}>
      <div className="max-width-stuff relative py-[16px] px-[16px] sm:px-[10px] md:px-[20px] lg:py-[20px] xl:px-[10px] xl:py-[22px]">
        <Heading4 text={props.text} />
        <HeadingSubText text={props.subtext} />

        <button className="hover:-translate-y-1 hover:shadow-xl cursor-pointer transition-all text-[12px] font-semibold border-2 border-black rounded-[9px] px-[13.5px] py-[7.5px] flex items-center gap-2 mt-[17px]">
          <HeadingSubText text="View on google docs" />
          <svg
            className="w-4.5 h-4.5 xl:w-5 xl:w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </button>
      </div>
    </div>
  );
};

type Props = {};

export const Novels = (props: Props) => {
  return (
    <div className="mt-[50px]">
      <Heading3 text="Unfinished, and never to be finished novels" className="leading-[128.7%]" />
      <HeadingSubText text="Novels I shall never complete perhaps, but filled with fluttering creativity and horrid prose." />

      <div className="mt-[30px] w-screen relative left-1/2 right-1/2 -mx-[50vw] sm:max-width-stuff px-0! sm:mx-auto sm:left-0 sm:right-0 sm:w-full">
        <NovelItem
          text="They who wrestle with dieties"
          subtext="Made at 1am because “Screenshot 2026-04-07 at 11:34:23 PM (2).png” broke something in me."
          className="border-t-2"
        />
      </div>
    </div>
  );
};
