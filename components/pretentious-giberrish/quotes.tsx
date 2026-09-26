import { Heading3, HeadingSubText } from "@/components/ui/headings";
import { ViewMoreBtn } from "@/components/ui/view-more-btn";

type Props = {};

export const QuoteBox = (props: { text: string }) => {
  return (
    <div className="py-[10px] px-[11px] text-center flex items-center justify-center border-[2px] border-black rounded-[9px] w-max">
      <p className="font-caveat text-[18px]">{props.text}</p>
    </div>
  );
};

export const Quotes = (props: Props) => {
  return (
    <div className="mt-[50px]">
      <Heading3 text="Random lines and dialogues" className="leading-[128.7%]" />
      <HeadingSubText
        text="Sometimes entire ideas clamped into a single line, othertimes a random burst of creativity."
        className="text-[14px]!"
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
