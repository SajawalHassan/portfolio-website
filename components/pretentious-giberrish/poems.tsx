import { Heading3, Heading4, HeadingSubText } from "@/components/ui/headings";
import { ViewMoreBtn } from "@/components/ui/view-more-btn";

type Props = {};

const PoemBox = (props: { title: string; poemText: string }) => {
  return (
    <div className="max-w-[320px] mx-auto md:mx-0 rounded-[9px] border-2 border-black p-[13px] bg-bg cursor-pointer hover:-translate-y-2 transition-all hover:shadow-xl">
      <Heading4 text={props.title} className="cursor-pointer" />
      <HeadingSubText text={props.poemText} className="whitespace-pre-line cursor-pointer" />
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
      <HeadingSubText text="Bad poems, and better than bad poems." className="mt-0.5" />

      <div className="mt-[31px]">
        <div className="flex flex-wrap gap-[22px]">
          <PoemBox title="A longing" poemText={examplePoem} />
          <PoemBox title="A longing" poemText={examplePoem} />
          <PoemBox title="A longing" poemText={examplePoem} />
          <PoemBox title="A longing" poemText={examplePoem} />
          <PoemBox title="A longing" poemText={examplePoem} />
          <PoemBox title="A longing" poemText={examplePoem} />
          <PoemBox title="A longing" poemText={examplePoem} />
        </div>
        <ViewMoreBtn className="mt-[22px]" />
      </div>
    </div>
  );
};
