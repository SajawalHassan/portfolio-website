import Header from "@/components/header";
import { BlogView } from "@/components/pretentious-giberrish/blog-view";
import { Novels } from "@/components/pretentious-giberrish/novels";
import { Poems } from "@/components/pretentious-giberrish/poems";
import { Quotes } from "@/components/pretentious-giberrish/quotes";
import FloatingCircles from "@/components/ui/bg-circles";
import { Heading2, HeadingSubText } from "@/components/ui/headings";

function Page() {
  return (
    <div className="home-page relative">
      <div className="w-full h-full z-999 relative pl-[14px] pb-30 md:pl-[24px]">
        <Header />

        <div className="pr-[20px]">
          <div className="mt-[20px]">
            <Heading2 text="A Young Man's Diary" />
            <HeadingSubText
              className="text-[14px]! mt-1"
              text="A proud cypress tree, green as any, whose leaves are scattered — some on the floor, and others still hanging; each housing some idea, some thought, some fantasy, built out of a tragedy or some joyous happening of personal life."
            />
          </div>

          <BlogView />
          <Quotes />
          <Poems />
          <Novels />
        </div>
      </div>
      <FloatingCircles />
    </div>
  );
}

export default Page;
