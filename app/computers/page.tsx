import FloatingCircles from "@/components/ui/bg-circles";
import ComputersHero from "@/components/computers/computers-hero";
import ComputersPlanets from "@/components/computers/planets/computers-planets";
import Header from "@/components/header";

function Page() {
  return (
    <div className="home-page relative">
      <div className="w-full h-full z-999 relative pb-30">
        <Header />
        <div className="max-width-stuff px-[14px] md:px-[24px]">
          <ComputersHero />
        </div>
        <ComputersPlanets />
      </div>
      <FloatingCircles />
    </div>
  );
}

export default Page;
