import FloatingCircles from "@/components/bg-circles";
import ComputersHero from "@/components/computers/computers-hero";
import ComputersPlanets from "@/components/computers/planets/computers-planets";
import Header from "@/components/header";

function Page() {
  return (
    <div className="home-page relative">
      <div className="w-full h-full z-999 relative pl-[14px] sm:pl-[24px] md:pl-0">
        <div className="md:pl-[24px]">
          <Header />
        </div>
        <div className="3xl:mt-20! z-20 relative max-w-[450px] sm:max-w-[600px] md:max-w-[900px] md:pl-3 lg:max-w-[1100px] md:mx-auto xl:max-w-[1300px] 2xl:max-w-[1400px] 3xl:max-w-[1700px]! sm:mx-0 mx-auto lg:pl-[30px] pr-[16px] md:pr-4 lg:pr-10">
          <ComputersHero />
        </div>
        <ComputersPlanets />
      </div>
      <FloatingCircles />
    </div>
  );
}

export default Page;
