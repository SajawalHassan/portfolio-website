import Header from "@/components/header";
import { PretentiousGiberrishContainer } from "@/components/pretentious-giberrish/pretentious-giberrish-container";
import FloatingCircles from "@/components/ui/bg-circles";

function Page() {
  return (
    <div className="home-page relative">
      <div className="w-full h-full z-999 relative pb-30">
        <Header />

        <div className="px-[14px] md:px-[24px] mt-[30px] max-width-stuff lg:max-w-[900px] xl:max-w-full min-[1700px]:max-w-[1800px]">
          <PretentiousGiberrishContainer />
        </div>
      </div>
      <FloatingCircles />
    </div>
  );
}

export default Page;
