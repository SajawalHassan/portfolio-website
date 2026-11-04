import Header from "@/components/header";
import FloatingCircles from "@/components/ui/bg-circles";
import { EssaysContainer } from "@/app/pretentious-gibberish/essays/_components/essays-container";

function Page() {
  return (
    <div className="home-page relative">
      <div className="w-full h-full relative pb-30">
        <Header />

        <div className="px-[14px] md:px-[24px] lg:px-[60px] mt-[30px] max-width-stuff">
          <EssaysContainer />
        </div>
      </div>
      <FloatingCircles />
    </div>
  );
}

export default Page;
