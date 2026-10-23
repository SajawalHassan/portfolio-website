import { Heading4 } from "@/components/ui/headings";

export const QuoteBox = (props: { text: string }) => {
  return (
    <div className="cursor-pointer bg-bg hover:-translate-y-2 hover:shadow-xl transition-all py-[10px] px-[11px] text-center flex items-center justify-center border-[2px] border-black rounded-[9px] w-max">
      <Heading4 text={props.text} className="font-caveat!" />
    </div>
  );
};
