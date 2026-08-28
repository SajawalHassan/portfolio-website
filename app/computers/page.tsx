import FloatingCircles from "@/components/bg-circles";
import ComputersHero from "@/components/computers/computers-hero";
import Header from "@/components/header";

function Page() {
  return (
    <div className="home-page relative">
      <div className="w-full h-full z-999 relative pl-[14px] sm:pl-[24px]">
        <Header />
        <div className="max-w-[450px] sm:max-[600px] sm:mx-0 mx-auto 2xl:pl-[30px] pr-[16px]">
          <ComputersHero />
          {/* <ComputersPlanets /> */}
        </div>
      </div>
      <FloatingCircles />
    </div>
  );
}

export default Page;
