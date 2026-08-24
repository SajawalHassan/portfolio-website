"use client";
import { MouseEvent, useEffect, useState } from "react";
import { Heading3 } from "./ui";
import clsx from "clsx";
import Link from "next/link";
import { PageTransition } from "../ui";
import { useEverythingState } from "@/store/store";

interface Props {
  number: number;
  text: string;
  isAlt?: boolean;
}

function TOCItem(props: Props) {
  const [isGroupHovering, setIsGroupHovering] = useState(false);
  const [linkInfo, setLinkInfo] = useState({ href: "", showTransition: false });

  const onClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) {
      return;
    }

    e.preventDefault();
    e.stopPropagation();

    setLinkInfo({ ...linkInfo, showTransition: true, href });
  };

  const everythingState = useEverythingState();

  useEffect(() => {
    if (linkInfo.showTransition == true && everythingState.doExitAnim != true) {
      everythingState.setDoExitAnim(true);
    }
  }, [linkInfo.showTransition]);

  return (
    <>
      <Link href="test" onClick={(e) => onClick(e, "test")}>
        <div
          className="relative group overflow-x-hidden cursor-pointer"
          onMouseEnter={() => setIsGroupHovering(true)}
          onMouseLeave={() => setIsGroupHovering(false)}
        >
          <div
            className={clsx(
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
            className={clsx(
              "md:w-[380px] lg:w-full 2xl:w-full md:mx-auto lg:mx-0 flex 2xl:mx-0 2xl:ml-3! items-center gap-x-[13px] py-[10px] z-50",
              props.isAlt && "ml-3",
            )}
          >
            <div
              className={clsx(
                "w-[35px] h-[35px] bg-transparent border-[3px] transition-all duration-400 rounded-full flex items-center justify-center z-50 shrink-0",
                !props.isAlt
                  ? "border-black group-hover:border-white"
                  : "text-accent group-hover:text-white",
              )}
            >
              <p
                className={clsx(
                  "text-[18px] font-francois transition-all duration-400",
                  !props.isAlt
                    ? "text-black group-hover:text-white"
                    : "text-accent group-hover:text-white",
                )}
              >
                {props.number.toString()}
              </p>
            </div>
            <Heading3
              text={props.text}
              className={
                props.isAlt ? "group-hover:text-white! text-accent!" : ""
              }
            />
          </div>
          <div
            className={clsx(
              "h-[1px] w-full transition-all duration-400",
              props.isAlt
                ? "bg-transparent group-hover:bg-black"
                : "bg-black group-hover:bg-transparent",
            )}
          />
        </div>
      </Link>
    </>
  );
}

export default TOCItem;
