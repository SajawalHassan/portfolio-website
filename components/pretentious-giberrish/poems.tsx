import { Heading3, HeadingSubText } from "@/components/ui/headings";
import { PoemBox } from "@/components/ui/poem-box";
import { ViewMoreBtn } from "@/components/ui/view-more-btn";

type Props = {};

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
        <ViewMoreBtn className="mt-[22px]" href="/pretentious-gibberish/poems" />
      </div>
    </div>
  );
};
