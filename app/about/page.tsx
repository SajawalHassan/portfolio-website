import AboutContainer from "@/components/about/about-container";
import FloatingCircles from "@/components/ui/bg-circles";
import Header from "@/components/header";

const Page = () => {
  return (
    <div className="home-page relative">
      <div className="w-full h-full relative pb-30">
        <Header />

        <div className="max-width-stuff px-[14px] md:px-[24px]">
          <AboutContainer />
        </div>
      </div>
      <FloatingCircles />
    </div>
  );
};

export default Page;
