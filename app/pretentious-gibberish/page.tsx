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
      <div className="w-full h-full z-999 relative pb-30">
        <Header />

        <div className="px-[14px] md:px-[24px] mt-[30px] max-width-stuff">
          <div className="xl:flex xl:justify-around xl:gap-x-10">
            <div className="mt-[20px] xl:w-[600px] 2xl:w-[700px] xl:shrink-0">
              <div>
                <Heading2 text="A Young Man's Diary" />
                <HeadingSubText
                  className="mt-1"
                  text="A proud cypress tree, green as any, whose leaves are scattered — some on the floor, and others still hanging; each housing some idea, some thought, some fantasy, built out of a tragedy or some joyous happening of personal life."
                />
              </div>

              <div className="hidden xl:block w-full">
                <Quotes />
              </div>
            </div>

            <BlogView />
          </div>
          <div className="max-w-[1600px] mx-auto">
            <div className="xl:hidden">
              <Quotes />
            </div>
            <Poems />
            <Novels />
          </div>
        </div>
      </div>
      <FloatingCircles />
    </div>
  );
}

export default Page;
