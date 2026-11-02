"use client";
import { HeadingSubText } from "@/components/ui/headings";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useModal } from "@/store/modal-store";
import { Fragment, useMemo } from "react";

export const QuoteBox = (props: { text: string }) => {
  const openModal = useModal((s) => s.openModal);

  const isLg = useMediaQuery("(min-width: 1024px)", true);
  const is2Xl = useMediaQuery("min-width: 1536px", true);

  const width = useMemo(() => {
    const baseNum = is2Xl ? 28 : isLg ? 20 : 14;
    const bias = is2Xl ? 20 : isLg ? 10 : 4;

    return Math.floor(baseNum + Math.random() * bias);
  }, []);

  return (
    <Fragment>
      <div
        onClick={(_) => openModal("quotes", { text: props.text })}
        title={props.text}
        style={{ maxWidth: width.toString() + "rem" }}
        className="cursor-pointer truncate bg-bg hover:-translate-y-2 hover:shadow-xl transition-all py-[10px] px-[11px] flex items-center justify-center border-[2px] border-black rounded-[9px]"
      >
        <HeadingSubText text={props.text} className="font-lora! truncate" />
      </div>
    </Fragment>
  );
};
