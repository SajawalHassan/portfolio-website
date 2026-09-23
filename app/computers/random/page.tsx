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
          heading="Planet Varia"
          subtext="Stand upon its north pole, and wander anywhere: You shall find diversity so diverse a nomenclator might go insane."
          projectList={webProjects}
          planetImage={Planet}
          handwrittenText="Scattered pebbles of consciousness"
        />
      </div>
      <FloatingCircles />
    </div>
  );
}

export default Page;
