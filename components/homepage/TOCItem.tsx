"use client";
import { useState } from "react";
import { Heading3 } from "@/components/ui/headings";
import { cn } from "@/lib/helper";
import CustomLink from "@/components/ui/custom-link";

interface Props {
  number: number;
  text: string;
  link: string;
  isAlt?: boolean;
}

function TOCItem(props: Props) {
  const [isGroupHovering, setIsGroupHovering] = useState(false);

  return (
    <CustomLink href={props.link}>
      <div
        className="relative group overflow-x-hidden cursor-pointer"
        onMouseEnter={() => setIsGroupHovering(true)}
        onMouseLeave={() => setIsGroupHovering(false)}
      >
        <div
          className={cn(
            "w-full h-full bg-black absolute transition-all duration-400 z-0 rounded-[4px]",
            !props.isAlt && "-translate-x-[101%] group-hover:translate-x-0",
          )}
          style={{
            clipPath: isGroupHovering
              ? props.isAlt
                ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
                : "polygon(0 0, 92% 0, 100% 100%, 0 100%)"
              : "polygon(0 0, 92% 0, 100% 100%, 0 100%)",
          }}
        />
        <div
          className={cn(
            "md:w-[380px] lg:w-full 2xl:w-full md:mx-auto lg:mx-0 flex 2xl:mx-0 lg:ml-1.5! xl:ml-3! items-center gap-x-[13px] py-[10px] z-50",
            props.isAlt && "ml-3",
          )}
        >
          <div
            className={cn(
              "w-[35px] h-[35px] bg-transparent border-[3px] transition-all duration-400 rounded-full flex items-center justify-center z-50 shrink-0",
              !props.isAlt
                ? "border-black group-hover:border-white"
                : "text-accent group-hover:text-white border-accent group-hover:border-white",
            )}
          >
            <p
              className={cn(
                "text-[18px] font-francois transition-all duration-400",
                !props.isAlt ? "text-black group-hover:text-white" : "text-accent group-hover:text-white",
              )}
            >
              {props.number.toString()}
            </p>
          </div>
          <Heading3 text={props.text} className={cn("group-hover:text-white!", props.isAlt && "text-accent!")} />
        </div>
        <div
          className={cn(
            "h-[1px] w-full transition-all duration-400",
            props.isAlt ? "bg-transparent group-hover:bg-black" : "bg-black group-hover:bg-transparent",
          )}
        />
      </div>
    </CustomLink>
  );
}

export default TOCItem;
