import Header from "@/components/header";
import FloatingCircles from "@/components/ui/bg-circles";
import { ProjectLayout } from "@/components/computers/projects-layout";
import { webProjects } from "@/lib/content-data";
import Planet from "@/public/assets/planet.svg";

function Page() {
  return (
    <div className="home-page relative">
      <div className="w-full h-full  relative pb-30">
        <Header />

        <div className="max-width-stuff px-[14px] md:px-[24px]">
          <ProjectLayout
            heading="Planet Cybernetica"
            subtext="In this globe are the oceans of compilers, the buds of ascii-sunflowers, and the lush caves of terminals."
            projectList={webProjects}
            planetImage={Planet}
            handwrittenText="Code laden with dreams"
          />
        </div>
      </div>
      <FloatingCircles />
    </div>
  );
}

export default Page;
