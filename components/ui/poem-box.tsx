"use client";

import { memo, useLayoutEffect, useRef, useState } from "react";
import { Heading4, HeadingSubText } from "@/components/ui/headings";
import { useModal } from "@/store/modal-store";

export const PoemBox = memo(function PoemBox(props: { title: string; poemText: string }) {
  const textAreaRef = useRef<HTMLDivElement>(null);
  const [lines, setLines] = useState(1);

  const modalStore = useModal();

  useLayoutEffect(() => {
    const area = textAreaRef.current;
    const textEl = area?.firstElementChild as HTMLElement | null;
    if (!area || !textEl) return;

    // Line height doesn't change when the box resizes, so read it once
    const lineHeight = parseFloat(getComputedStyle(textEl).lineHeight);
    if (!lineHeight) return;

    const calcLines = () => setLines(Math.max(1, Math.floor(area.clientHeight / lineHeight)));

    calcLines();
    const observer = new ResizeObserver(calcLines);
    observer.observe(area);
    return () => observer.disconnect();
  }, [props.poemText]);

  return (
    <div
      onClick={(_) => modalStore.openModal("poems", { title: props.title, text: props.poemText })}
      className="xl:w-[320px] w-[260px] h-[200px] lg:w-[310px] lg:h-[250px] 2xl:h-[270px] mx-auto md:mx-0 transition-all rounded-[9px] border-2 border-black pt-[13px] px-[13px] pb-[5px] bg-bg cursor-pointer hover:-translate-y-2 hover:shadow-xl flex flex-col"
    >
      <Heading4 text={props.title} className="cursor-pointer leading-[120%] shrink-0" />
      <div
        ref={textAreaRef}
        className="flex-1 min-h-0 mt-2 overflow-hidden"
        style={{ "--lines": lines } as React.CSSProperties}
      >
        <HeadingSubText
          text={props.poemText}
          className="whitespace-pre-line cursor-pointer leading-6 line-clamp-[var(--lines)]"
        />
      </div>
    </div>
  );
});
