import { Heading3, HeadingSubText } from "@/components/ui/headings";
import { PoemBox } from "@/components/ui/poem-box";
import { ViewMoreBtn } from "@/components/ui/view-more-btn";
import { useEverythingState } from "@/store/store";

type Props = {};

export const Poems = (props: Props) => {
  const poems = useEverythingState((s) => s.poems);

  return (
    <div className="mt-[50px]">
      <Heading3 text="Structureless, sentimental poems" className="leading-[128.7%]" />
      <HeadingSubText text="Bad poems, and better than bad poems." className="mt-0.5" />

      <div className="mt-[31px]">
        <div className="flex flex-wrap gap-[22px]">
          {poems.slice(0, 7).map((p) => (
            <PoemBox title={p.title} poemText={p.body} key={p.title} />
          ))}
        </div>
        <ViewMoreBtn className="mt-[22px]" href="/pretentious-gibberish/poems" />
      </div>
    </div>
  );
};
