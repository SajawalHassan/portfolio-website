import clsx from "clsx";
import { Heading3, HeadingSubText } from "@/components/ui/headings";

export const RowItem = (props: {
  className?: string;
  text: string;
  subtext: string;
  badgeText: string;
  badgeColor: string;
}) => {
  return (
    <div className="relative group">
      <div
        className={clsx(
          "group cursor-pointer z-10 py-[20px] px-[16px] sm:px-[10px] md:px-[20px] xl:px-[10px] xl:py-[22px] ml-0! border-[#8F8C7B] border-b-[2px] relative transition-[padding] duration-150 ease-out",
          props.className,
        )}
      >
        {/* Left accent tick */}
        <span
          className="absolute left-0 top-[20px] bottom-[20px] w-[3px] bg-[#8F8C7B] scale-y-0 group-hover:scale-y-100 origin-center transition-transform duration-150 ease-out"
          aria-hidden="true"
        />

        <Heading3
          text={props.text}
          className="max-w-[80%] md:text-[30px] 2xl:text-[30px]! 3xl:text-[32px]! leading-[119.1%] transition-transform duration-150 ease-out group-hover:translate-x-[4px]"
        />
        <HeadingSubText
          text={props.subtext}
          className="font-light text-[12px]! md:text-[16px] 2xl:text-[18px]! 3xl:text-[18px]! leading-[122%]! mt-1 xl:mt-2 max-w-[80%] transition-transform duration-150 ease-out group-hover:translate-x-[4px]"
        />

        {/* Badge */}
        <div
          className={clsx(
            "rounded-full px-3 py-1 md:px-4 md:py-1.5 text-center flex items-center justify-center w-max absolute right-[18px] top-[26px] md:right-[24px] md:top-[32px] lg:top-[23px] transition-colors duration-150 ease-out",
            props.badgeColor == "green"
              ? "bg-[#CDCEBE] text-[#858673] group-hover:bg-[#858673] group-hover:text-[#F5F1E8]"
              : "bg-[#DFD4B6] text-[#B39C64] group-hover:bg-[#B39C64] group-hover:text-[#F5F1E8]",
          )}
        >
          <p className="text-[10px] md:text-[12px] lg:text-[14px] font-bold">{props.badgeText}</p>
        </div>
      </div>
      <div className="z-0 h-[101%] bg-linear-to-r from-bg via-bg to-bg/0 w-full absolute top-0 left-0 opacity-0 group-hover:opacity-100 duration-200" />
    </div>
  );
};
