"use client";
import { useEffect } from "react";
import { Heading4 } from "@/components/ui/headings";
import { useModal } from "@/store/modal-store";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import ReactMarkdown from "react-markdown";

const fade =
  "duration-150 transition-[opacity,visibility] data-[is-open=false]:invisible data-[is-open=false]:opacity-0 data-[is-open=true]:visible data-[is-open=true]:opacity-100";

export const PoemsModal = () => {
  const { isOpen, type, closeModal, data } = useModal();
  const modalIsOpen = isOpen && type === "poems";

  useLockBodyScroll(isOpen);

  useEffect(() => {
    if (!modalIsOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [modalIsOpen, closeModal]);

  return (
    <>
      <div
        aria-hidden="true"
        data-is-open={modalIsOpen}
        onClick={closeModal}
        className={`fixed inset-0 z-90 bg-black/40 ${fade}`}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-hidden={!modalIsOpen}
        data-is-open={modalIsOpen}
        className={`fixed inset-0 m-auto w-max h-max max-w-[80vw] max-h-80 lg:w-140 sm:max-h-100 md:max-h-120 lg:max-h-180 px-5 py-4 lg:px-10 lg:py-7 overflow-y-auto bg-bg border-2 border-black rounded-[9px] drop-shadow-2xl z-100 ${fade}`}
      >
        <Heading4 text={data.title as string} className="shrink-0" />

        <div className="poem-container">
          <ReactMarkdown>{data.text as string}</ReactMarkdown>
        </div>
      </div>
    </>
  );
};
