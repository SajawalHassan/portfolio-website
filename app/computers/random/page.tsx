import Header from "@/components/header";
import FloatingCircles from "@/components/ui/bg-circles";
import { ProjectLayout } from "@/components/computers/projects-layout";
import { webProjects } from "@/lib/content-data";
import Planet from "@/public/assets/planet.svg";

function Page() {
  return (
    <div className="home-page relative">
      <div className="w-full h-full z-999 relative pb-30">
        <Header />

        <div className="max-width-stuff px-[14px] md:px-[24px]">
          <ProjectLayout
            heading="Planet Varia"
            subtext="Stand on its north pole and wander anywhere, and you shall find diversity so diverse a nomenclator may go insane."
            projectList={webProjects}
            planetImage={Planet}
            handwrittenText="Scattered pebbles of consciousness"
          />
        </div>
      </div>
      <FloatingCircles />
    </div>
  );
}

export default Page;
