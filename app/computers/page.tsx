import FloatingCircles from "@/components/ui/bg-circles";
import ComputersHero from "@/components/computers/computers-hero";
import ComputersPlanets from "@/components/computers/planets/computers-planets";
import Header from "@/components/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Everything Computers",
};

function Page() {
  return (
    <div className="home-page relative">
      <div className="w-full h-full  relative pb-30">
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
