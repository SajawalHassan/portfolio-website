import { Heading3, Heading4, HeadingSubText } from "@/components/ui/headings";
import { ViewMoreBtn } from "@/components/ui/view-more-btn";

type Props = {};

const PoemBox = (props: { title: string; poemText: string }) => {
  return (
    <div className="rounded-[9px] border-2 border-black p-[13px] bg-bg">
      <Heading4 text={props.title} />
      <p className="font-light text-[16px] whitespace-pre-line">{props.poemText}</p>
    </div>
  );
};

const examplePoem = `When will the lifeless winter come
Wake my corpse from its dream
Rid me of all the sun's heat
Give me the food of life to eat?

When will this sickle of death come...`;

export const Poems = (props: Props) => {
  return (
    <div className="mt-[50px]">
      <Heading3 text="Structureless, sentimental poems" className="leading-[128.7%]" />
      <HeadingSubText text="Bad poems, and better than bad poems." className="text-[14px]!" />

      <div className="space-y-[22px] max-w-[304px] mx-auto mt-[31px]">
        <PoemBox title="A longing" poemText={examplePoem} />
        <PoemBox title="A longing" poemText={examplePoem} />
        <PoemBox title="A longing" poemText={examplePoem} />
        <ViewMoreBtn className="max-w-full!" />
      </div>
    </div>
  );
};
