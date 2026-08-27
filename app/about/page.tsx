import AboutContainer from "@/components/about/about-container";
import FloatingCircles from "@/components/bg-circles";
import Header from "@/components/header";

const Page = () => {
  return (
    <div className="min-h-screen pb-10 lg:pb-20 w-screen home-page pl-[14px]">
      <Header />
      <div className="z-20 relative pr-[26px] lg:px-10 3xl:-pl-[14px]!">
        <AboutContainer />
      </div>
      <FloatingCircles />
    </div>
  );
};

export default Page;
