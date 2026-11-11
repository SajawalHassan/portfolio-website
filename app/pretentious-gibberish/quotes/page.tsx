import Header from "@/components/header";
import FloatingCircles from "@/components/ui/bg-circles";
import QuotesContainer from "@/app/pretentious-gibberish/quotes/_components/quotes-container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quotes",
};

function Page() {
  return (
    <div className="home-page relative">
      <div className="w-full h-full  relative pb-30">
        <Header />

        <div className="px-[14px] md:px-[24px] lg:px-[60px] mt-[30px] max-width-stuff">
          <QuotesContainer />
        </div>
      </div>
      <FloatingCircles />
    </div>
  );
}

export default Page;
