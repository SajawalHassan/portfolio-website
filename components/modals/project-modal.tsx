"use client";
import { useEffect } from "react";
import Image from "next/image";
import { Heading4, HeadingSubText } from "@/components/ui/headings";
import { useModal } from "@/store/modal-store";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { projectType } from "@/lib/content-data";

const fade =
  "duration-150 transition-[opacity,visibility] data-[is-open=false]:invisible data-[is-open=false]:opacity-0 data-[is-open=true]:visible data-[is-open=true]:opacity-100";

const linkBase =
  "px-3 py-1.5 text-sm font-medium text-center border-2 border-black rounded-[6px] transition-colors duration-150 hover:bg-black/10 flex-1 sm:flex-none sm:px-5";

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

  const tech = hasTech && (
    <div>
      <h5 className="text-sm font-semibold tracking-wide opacity-70">Technologies used</h5>
      <ul className="mt-2 flex flex-wrap gap-2">
        {data!.technologies!.map((t) => (
          <li key={t} className="px-2.5 py-1 text-sm border-2 border-black rounded-[6px]">
            {t}
          </li>
        ))}
      </ul>
    </div>
  );

  // With an image: sits at the bottom of the right column.
  // Without an image: sits at the right of the footer.
  const linksPosition = hasImage ? "order-5 lg:mt-auto lg:self-end" : "sm:ml-auto sm:shrink-0";

  const links = hasLinks && (
    <div className={`flex gap-2.5 ${linksPosition}`}>
      {data?.liveLink && (
        <a href={data.liveLink} target="_blank" rel="noopener noreferrer" className={linkBase}>
          Live site
        </a>
      )}
      {data?.githubLink && (
        <a href={data.githubLink} target="_blank" rel="noopener noreferrer" className={linkBase}>
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
        className={`fixed inset-0 m-auto w-max h-max max-w-[97vw] max-h-130 lg:w-220 sm:max-h-100 md:max-h-120 lg:max-h-180 px-5 py-4 lg:px-10 lg:py-7 overflow-y-auto bg-bg border-2 border-black rounded-[9px] drop-shadow-2xl z-100 ${fade}`}
      >
        {data && (
          <>
            <div className="flex flex-col gap-4 lg:flex-row lg:gap-8">
              {hasImage && (
                <div className="contents lg:flex lg:w-64 lg:shrink-0 lg:flex-col lg:gap-4">
                  <Image
                    src={data.image!}
                    alt={`${data.title} preview`}
                    className="order-2 w-full aspect-video object-cover border-2 border-black rounded-[6px]"
                  />
                  {hasTech && <div className="order-3">{tech}</div>}
                </div>
              )}

              <div className="contents lg:flex lg:min-w-0 lg:flex-1 lg:flex-col lg:gap-3">
                <Heading4 text={data.title} className="order-1 3xl:text-[28px]!" />

                {data.description?.map((paragraph, i) => (
                  <HeadingSubText key={i} className="order-4 text-[#161615]" text={paragraph} />
                ))}

                {hasImage && links}
              </div>
            </div>

            {!hasImage && (hasTech || hasLinks) && (
              <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                {tech}
                {links}
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};
