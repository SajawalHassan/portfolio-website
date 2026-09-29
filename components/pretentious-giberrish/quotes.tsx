import { Heading3, Heading4, HeadingSubText } from "@/components/ui/headings";
import { ViewMoreBtn } from "@/components/ui/view-more-btn";

type Props = {};

export const QuoteBox = (props: { text: string }) => {
  return (
    <div className="cursor-pointer hover:-translate-y-2 hover:shadow-xl transition-all py-[10px] px-[11px] text-center flex items-center justify-center border-[2px] border-black rounded-[9px] w-max">
      <Heading4 text={props.text} className="font-caveat!" />
    </div>
  );
};

export const Quotes = (props: Props) => {
  return (
    <div className="mt-[50px]">
      <Heading3 text="Random lines and dialogues" className="leading-[128.7%]" />
      <HeadingSubText
        className="mt-0.5"
        text="Sometimes entire ideas clamped into a single line, othertimes a random burst of creativity."
      />

      <div className="flex flex-wrap gap-3 mt-[20px]">
        <QuoteBox text="Philosophy gave me the light religion failed to" />
        <QuoteBox text="Philosophy gave me the" />
        <QuoteBox text="Philosophy gave me the" />
        <QuoteBox text="Philosophy gave me the light" />
        <QuoteBox text="religion failed to" />
      </div>
      <ViewMoreBtn className="mt-4" />
    </div>
  );
};
