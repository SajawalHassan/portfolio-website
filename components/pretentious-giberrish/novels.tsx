import { Heading3, HeadingSubText } from "@/components/ui/headings";
import clsx from "clsx";

export const NovelItem = (props: { className?: string; text: string; subtext: string }) => {
  return (
    <div
      className={clsx(
        "group cursor-pointer z-10 pt-[15px] pb-[20px] px-[16px] sm:px-[10px] md:px-[20px] xl:px-[10px] xl:py-[22px] ml-0! border-[#8F8C7B] border-b-[2px] relative transition-[padding] duration-150 ease-out",
        props.className,
      )}
    >
      <span
        className="absolute left-0 top-[20px] bottom-[20px] w-[3px] bg-[#8F8C7B] scale-y-0 group-hover:scale-y-100 origin-center transition-transform duration-150 ease-out"
        aria-hidden="true"
      />

      <Heading3
        text={props.text}
        className="text-[20px]! md:text-[30px] 2xl:text-[30px]! 3xl:text-[32px]! leading-[119.1%] transition-transform duration-150 ease-out group-hover:translate-x-[4px]"
      />
      <HeadingSubText
        text={props.subtext}
        className="font-light text-[12px]! md:text-[16px] 2xl:text-[18px]! 3xl:text-[18px]! leading-[122%]! mt-1 xl:mt-2 max-w-[80%] transition-transform duration-150 ease-out group-hover:translate-x-[4px]"
      />

      <button className="text-[12px] font-semibold border-2 border-black rounded-[9px] px-[13.5px] py-[7.5px] flex items-center gap-1 mt-[17px]">
        View on google docs
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
        </svg>
      </button>
    </div>
  );
};

type Props = {};

export const Novels = (props: Props) => {
  return (
    <div className="mt-[50px]">
      <Heading3 text="Unfinished, and never to be finished novels" className="leading-[128.7%]" />
      <HeadingSubText
        text="Novels I shall never complete perhaps, but filled with fluttering creativity and horrid prose."
        className="text-[14px]!"
      />

      <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] mt-[22px]">
        <NovelItem
          text="They who wrestle with dieties"
          subtext="Made at 1am because “Screenshot 2026-04-07 at 11:34:23 PM (2).png” broke something in me."
          className="border-t-2"
        />
      </div>
    </div>
  );
};
