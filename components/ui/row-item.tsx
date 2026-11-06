import { cn } from "@/lib/helper";
import { Heading3, Heading4, HeadingSubText } from "@/components/ui/headings";

export const RowItem = (props: {
  className?: string;
  doWidthStuff?: boolean;
  text: string;
  subtext: string;
  badgeText: string;
  badgeColor: string;
}) => {
  return (
    <div className="relative group">
      <div
        className={cn(
          "group cursor-pointer z-10 ml-0! border-[#8F8C7B] border-b-[2px] relative transition-[padding] duration-150 ease-out",
          props.className,
        )}
      >
        <div
          className={cn(
            "py-[16px] px-[16px] sm:px-[10px] md:px-[20px] lg:py-[20px] xl:px-[10px] xl:py-[22px]",
            props.doWidthStuff && "max-width-stuff relative",
          )}
        >
          {/* Left accent tick */}
          <span
            className="absolute left-0 top-[20px] bottom-[20px] w-[3px] bg-[#8F8C7B] scale-y-0 group-hover:scale-y-100 origin-center transition-transform duration-150 ease-out"
            aria-hidden="true"
          />

          <Heading4 text={props.text} className="text-transition-translate max-w-[80%] leading-[127%]" />
          <HeadingSubText text={props.subtext} className="text-transition-translate mt-1 max-w-[85%] lg:max-w-[83%]" />

          {/* Badge */}
          <div
            className={cn(
              "rounded-full px-3 py-1 md:px-4 md:py-1.5 text-center flex items-center justify-center w-max absolute right-[10px] top-[15px] lg:top-[10px] lg:right-[10px] transition-colors duration-150 ease-out",
              props.badgeColor == "green"
                ? "bg-[#CDCEBE] text-[#858673] group-hover:bg-[#858673] group-hover:text-[#F5F1E8]"
                : "bg-[#DFD4B6] text-[#B39C64] group-hover:bg-[#B39C64] group-hover:text-[#F5F1E8]",
            )}
          >
            <p className="text-[10px] md:text-[12px] xl:text-[14px] font-bold">{props.badgeText}</p>
          </div>
        </div>
      </div>
      <div className="z-0 h-[101%] bg-linear-to-r from-bg via-bg to-bg/0 w-full absolute top-0 left-0 opacity-0 group-hover:opacity-100 duration-200" />
    </div>
  );
};
