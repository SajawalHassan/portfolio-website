import FloatingCircles from "@/components/bg-circles";
import Header from "@/components/header";
import Hero from "@/components/homepage/hero";
import TOC from "@/components/homepage/TOC";

export default function Home() {
  return (
    <div className="home-page relative">
      <div className="w-full h-full z-999 relative pl-[14px] 2xl:pl-[30px]">
        <Header />
        <div className="pr-[34px] mt-[42px] space-y-[88px] mb-10 max-w-[800px] md:mx-auto lg:max-w-full lg:mx-0 lg:flex lg:w-full lg:gap-x-15 lg:px-10 xl:gap-x-20 xl:justify-between xl:max-w-[1350px] xl:mx-auto 2xl:max-w-[1600px] 3xl:max-w-[1700px]!">
          <Hero />
          <TOC />
        </div>
      </div>
      <FloatingCircles />
    </div>
  );
}
