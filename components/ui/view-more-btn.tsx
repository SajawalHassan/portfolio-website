import CustomLink from "@/components/ui/custom-link";
import { HeadingSubText } from "@/components/ui/headings";
import clsx from "clsx";

type Props = {
  className?: string;
  href?: string;
};

export const ViewMoreBtn = (props: Props) => {
  return (
    <CustomLink
      href={props.href ? props.href : "#"}
      className={clsx("flex items-center gap-4 w-full max-w-[90%] bg-bg mx-auto", props.className)}
    >
      <div className="flex-1 h-px bg-black" />
      <button className="cursor-pointer btn-translate-hover hover:shadow-md! flex items-center gap-1 px-[10px] py-[5.5px] lg:px-[12px] border border-black rounded text-[12px] text-gray-700">
        <HeadingSubText text="View more" className="group-hover:font-semibold xl:text-[16px]!" />
        <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
        </svg>
      </button>
      <div className="flex-1 h-px bg-black" />
    </CustomLink>
  );
};
