import FloatingCircles from "@/components/ui/bg-circles";
import Header from "@/components/header";
import Hero from "@/components/homepage/hero";
import TOC from "@/components/homepage/TOC";

export default function Home() {
  return (
    <div className="home-page relative">
      <div className="w-full h-full z-999 relative pb-30">
        <Header />
        <div className="flex gap-y-15 sm:gap-y-20 lg:gap-y-30 flex-col max-width-stuff mt-[42px] md:mx-auto xl:flex-row xl:gap-x-0 xl:justify-between lg:mx-auto">
          <Hero />
          <TOC />
        </div>
      </div>
      <FloatingCircles />
    </div>
  );
}
