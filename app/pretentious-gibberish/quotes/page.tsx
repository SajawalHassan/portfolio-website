"use client";

import Header from "@/components/header";
import FloatingCircles from "@/components/ui/bg-circles";
import { useEverythingState } from "@/store/store";
import { useState } from "react";
import { PageTransition } from "@/components/page-transition";
import QuotesContainer from "@/app/pretentious-gibberish/quotes/_components/quotes-container";

function Page() {
  const [showLoading, setShowLoading] = useState(false);
  const everythingState = useEverythingState();

  if (showLoading) return <PageTransition href={everythingState.transitionLink} />;
  return (
    <div className="home-page relative">
      <div className="w-full h-full z-999 relative pb-30">
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
