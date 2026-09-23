import Header from "@/components/header";
import FloatingCircles from "@/components/ui/bg-circles";
import { WebContainer } from "@/app/computers/web/_components/web-container";

function Page() {
  return (
    <div className="home-page relative">
      <div className="w-full h-full z-999 relative pl-[14px] pb-30 md:pl-[24px] 3xl:pr-[40px]">
        <Header />

        <WebContainer />
      </div>
      <FloatingCircles />
    </div>
  );
}

export default Page;
