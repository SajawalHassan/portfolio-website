import { Heading3, Heading4, HeadingSubText } from "@/components/ui/headings";
import clsx from "clsx";

export const NovelItem = (props: { className?: string; text: string; subtext: string }) => {
  return (
    <div
      className={clsx(
        "group/novel cursor-pointer z-10 pt-[15px] pb-[20px] px-[16px] sm:px-[10px] md:px-[20px] xl:px-[10px] xl:py-[22px] ml-0! border-[#8F8C7B] border-b-[2px] relative transition-[padding] duration-150 ease-out",
        props.className,
      )}
    >
      <div className="max-width-stuff">
        <span
          className="absolute left-0 top-[20px] bottom-[20px] w-[3px] bg-[#8F8C7B] scale-y-0 group-hover/novel:scale-y-100 origin-center transition-transform duration-150 ease-out"
          aria-hidden="true"
        />

        <Heading4 text={props.text} className="text-transition-translate" />
        <HeadingSubText text={props.subtext} className="text-transition-translate" />

        <button className="group cursor-pointer text-transition-translate hover:bg-black hover:text-white transition-all text-[12px] font-semibold border-2 border-black rounded-[9px] px-[13.5px] py-[7.5px] flex items-center gap-2 mt-[17px]">
          <HeadingSubText text="View on google docs" className="group-hover:text-white!" />
          <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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

      <div className="w-screen xl:w-[70vw] 2xl:max-w-[60vw] xl:mx-0 relative left-1/2 right-1/2 -mx-[50vw] mt-[22px] sm:max-width-stuff sm:mx-auto sm:left-0 sm:right-0">
        <NovelItem
          text="They who wrestle with dieties"
          subtext="Made at 1am because “Screenshot 2026-04-07 at 11:34:23 PM (2).png” broke something in me."
          className="border-t-2"
        />
      </div>
    </div>
  );
};
