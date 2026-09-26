import clsx from "clsx";

type Props = {
  className?: string;
};

export const ViewMoreBtn = (props: Props) => {
  return (
    <div className={clsx("flex items-center gap-4 w-full max-w-[90%] bg-bg mx-auto", props.className)}>
      <div className="flex-1 h-px bg-black" />
      <button className="flex items-center gap-1 px-[6px] py-[2px] border border-black rounded text-[12px] text-gray-700 hover:bg-gray-50 transition-colors whitespace-nowrap">
        View more
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
        </svg>
      </button>
      <div className="flex-1 h-px bg-black" />
    </div>
  );
};
