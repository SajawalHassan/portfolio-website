import { Heading4, HeadingSubText } from "@/components/ui/headings";

export const PoemBox = (props: { title: string; poemText: string }) => {
  return (
    <div className="max-w-[320px] mx-auto md:mx-0 rounded-[9px] border-2 border-black p-[13px] bg-bg cursor-pointer hover:-translate-y-2 transition-all hover:shadow-xl">
      <Heading4 text={props.title} className="cursor-pointer" />
      <HeadingSubText text={props.poemText} className="whitespace-pre-line cursor-pointer" />
    </div>
  );
};
