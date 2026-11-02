"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { Heading4, HeadingSubText } from "@/components/ui/headings";
import { useModal } from "@/store/modal-store";

export const PoemBox = (props: { title: string; poemText: string }) => {
  const textAreaRef = useRef<HTMLDivElement>(null);
  const [lines, setLines] = useState(1);
  const modalStore = useModal();

  useLayoutEffect(() => {
    const area = textAreaRef.current;
    const textEl = area?.firstElementChild as HTMLElement | null;
    if (!area || !textEl) return;

    const calcLines = () => {
      const lineHeight = parseFloat(getComputedStyle(textEl).lineHeight);
      if (!lineHeight) return; // "normal" returns NaN, so set an explicit leading-* class
      setLines(Math.max(1, Math.floor(area.clientHeight / lineHeight)));
    };

    calcLines();
    const observer = new ResizeObserver(calcLines);
    observer.observe(area);
    return () => observer.disconnect();
  }, [props.poemText]);

  return (
    <div
      onClick={(_) => {
        console.log("CLICKED");
        modalStore.openModal("poems", { title: props.title, text: props.poemText });
      }}
      className="w-[320px] h-[300px] mx-auto md:mx-0 rounded-[9px] border-2 border-black pt-[13px] px-[13px] pb-[5px] bg-bg cursor-pointer hover:-translate-y-2 transition-all hover:shadow-xl flex flex-col"
    >
      <Heading4 text={props.title} className="cursor-pointer shrink-0" />

      <div
        ref={textAreaRef}
        className="flex-1 mt-1 min-h-0 overflow-hidden"
        style={{ "--lines": lines } as React.CSSProperties}
      >
        <HeadingSubText
          text={props.poemText}
          className="whitespace-pre-line cursor-pointer font-lora! leading-6 line-clamp-[var(--lines)]"
        />
      </div>
    </div>
  );
};
