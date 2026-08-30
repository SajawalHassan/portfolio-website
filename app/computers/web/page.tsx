import CmdBox from "@/components/computers/cmdbox";
import ProjCarousel from "@/components/computers/proj-carousel";
import HandwrittenHeading from "@/components/handwritten-heading";
import Header from "@/components/header";

function Page() {
  return (
    <div className="home-page relative">
      <div className="w-full h-full z-999 relative pl-[14px] sm:pl-[24px] md:pl-0">
        <div className="md:pl-[24px]">
          <Header />
        </div>

        <div className="mt-[18px]">
          <CmdBox
            subPath="web"
            className="w-[70%] xl:w-[80%] 2xl:w-[70%] 3xl:w-[80%]!"
          />
          <HandwrittenHeading text="Code laden with dreams" />

          <ProjCarousel />
        </div>
      </div>

      {/*  */}
    </div>
  );
}

export default Page;
