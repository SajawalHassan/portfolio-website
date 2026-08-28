import FloatingCircles from "@/components/bg-circles";
import ComputersHero from "@/components/computers/computers-hero";
import ComputersPlanets from "@/components/computers/planets/computers-planets";
import Header from "@/components/header";

function Page() {
  return (
    <div className="home-page relative">
      <div className="w-full h-full z-999 relative pl-[14px] 2xl:pl-[30px] pr-[16px]">
        <Header />
        <div>
          <ComputersHero />
          <ComputersPlanets />
        </div>
      </div>
      <FloatingCircles />
    </div>
  );
}

export default Page;
