import Header from "@/components/header";
import FloatingCircles from "@/components/ui/bg-circles";
import { TalkToMeContainer } from "@/components/talk-to-me/talk-to-me-container";

type Props = {};

const Page = (props: Props) => {
  return (
    <div className="home-page relative">
      <div className="w-full h-full  relative pb-30">
        <Header />

        <div className="max-width-stuff px-[14px] md:px-[24px] xl:px-[44px] mt-[50px] relative">
          <TalkToMeContainer />
        </div>
      </div>
      <FloatingCircles />
    </div>
  );
};

export default Page;
