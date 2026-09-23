import Header from "@/components/header";
import FloatingCircles from "@/components/ui/bg-circles";
import { ProjectLayout } from "@/components/computers/projects-layout";
import { webProjects } from "@/lib/content-data";
import Planet from "@/public/assets/planet.svg";

function Page() {
  return (
    <div className="home-page relative">
      <div className="w-full h-full z-999 relative pl-[14px] pb-30 md:pl-[24px] 3xl:pr-[40px]">
        <Header />

        <ProjectLayout
          heading="Planet Cybernetica"
          subtext="In this globe are the oceans of compilers, the buds of ascii-sunflowers, and the lush caves of terminals."
          projectList={webProjects}
          planetImage={Planet}
          handwrittenText="Code laden with dreams"
        />
      </div>
      <FloatingCircles />
    </div>
  );
}

export default Page;
