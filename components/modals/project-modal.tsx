"use client";
import { useEffect } from "react";
import Image from "next/image";
import { Heading4 } from "@/components/ui/headings";
import { useModal } from "@/store/modal-store";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { projectType } from "@/lib/content-data";

const fade =
  "duration-150 transition-[opacity,visibility] data-[is-open=false]:invisible data-[is-open=false]:opacity-0 data-[is-open=true]:visible data-[is-open=true]:opacity-100";

const linkBase =
  "px-3 py-1.5 text-sm font-medium text-center border-2 border-black rounded-[6px] transition-colors duration-150 hover:bg-black/10";

export const ProjectModal = () => {
  const { isOpen, type, closeModal } = useModal();
  const data = useModal((s) => s.data) as projectType | undefined;

  const modalIsOpen = isOpen && type === "projects";

  useLockBodyScroll(modalIsOpen);

  useEffect(() => {
    if (!modalIsOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [modalIsOpen, closeModal]);

  const hasImage = !!data?.image;
  const hasLinks = !!(data?.liveLink || data?.githubLink);
  const hasTech = !!data?.technologies && data.technologies.length > 0;

  // Same buttons, rendered in either the left column (image) or the footer (no image)
  const links = hasLinks && (
    <div className={hasImage ? "order-3 flex flex-col gap-2.5" : "flex gap-2.5 sm:shrink-0"}>
      {data?.liveLink && (
        <a
          href={data.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`${linkBase} ${hasImage ? "" : "flex-1 sm:flex-none sm:px-5"}`}
        >
          Live site
        </a>
      )}
      {data?.githubLink && (
        <a
          href={data.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`${linkBase} ${hasImage ? "" : "flex-1 sm:flex-none sm:px-5"}`}
        >
          GitHub
        </a>
      )}
    </div>
  );

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
        className={`fixed inset-0 m-auto w-max h-max max-w-[80vw] max-h-120 lg:w-220 sm:max-h-100 md:max-h-120 lg:max-h-180 px-5 py-4 lg:px-10 lg:py-7 overflow-y-auto bg-bg border-2 border-black rounded-[9px] drop-shadow-2xl z-100 ${fade}`}
      >
        {data && (
          <>
            <div className="flex flex-col gap-4 lg:flex-row lg:gap-8">
              {/* LEFT COLUMN: only exists when there's an image */}
              {hasImage && (
                <div className="contents lg:flex lg:w-64 lg:shrink-0 lg:flex-col lg:gap-4">
                  <Image
                    src={data.image!}
                    alt={`${data.title} preview`}
                    className="order-2 w-full aspect-video object-cover border-2 border-black rounded-[6px]"
                  />
                  {links}
                </div>
              )}

              {/* RIGHT COLUMN */}
              <div className="contents lg:flex lg:min-w-0 lg:flex-1 lg:flex-col lg:gap-3">
                <Heading4 text={data.title} className="order-1 3xl:text-[28px]!" />

                {data.description?.map((paragraph, i) => (
                  <p key={i} className="order-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* FOOTER: tech on the left, buttons on the right when there's no image */}
            {(hasTech || (!hasImage && hasLinks)) && (
              <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                {hasTech && (
                  <div>
                    <h5 className="text-sm font-semibold uppercase tracking-wide opacity-70">Built with</h5>
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {data.technologies!.map((tech) => (
                        <li key={tech} className="px-2.5 py-1 text-sm border-2 border-black rounded-[6px]">
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {!hasImage && links}
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};
