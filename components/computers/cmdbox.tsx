import { Heading3, Heading4 } from "@/components/ui/headings";
import { cn } from "@/lib/helper";

interface Props {
  subPath?: string;
  className?: string;
  textClassName?: string;
}

function CmdBox(props: Props) {
  return (
    <div
      className={cn(
        "rounded-[10px] border-[2px] sm:border-[4px] border-[#282C29] bg-[#353738] py-[5px] pl-[13px] md:py-[2px] lg:py-[5px] 3xl:py-[7px]! flex items-center",
        props.className,
      )}
    >
      <div
        className={cn(
          "text-[22px] md:text-[20px] xl:text-[26px] 2xl:text-[34px] 3xl:text-[38px]! flex items-center space-x-2 text-white",
          props.textClassName,
        )}
      >
        <div className="flex items-center">
          <Heading4 text="~/Computers/" className="text-accent!" />
          {props.subPath && <Heading4 text={props.subPath} className="text-[#FFFFD7]" />}
        </div>
        <Heading4 text="$" className="text-white" />
        <Heading4 text="ls..." className="text-white" />
      </div>
    </div>
  );
}

export default CmdBox;
