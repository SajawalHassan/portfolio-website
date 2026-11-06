import Header from "@/components/header";
import FloatingCircles from "@/components/ui/bg-circles";
import { ProjectLayout } from "@/components/computers/projects-layout";
import { datascienceProjects } from "@/lib/content-data";
import Planet from "@/public/assets/planet.svg";

function Page() {
  return (
    <div className="home-page relative">
      <div className="w-full h-full  relative pb-30">
        <Header />

        <div className="max-width-stuff px-[14px] md:px-[24px]">
          <ProjectLayout
            heading="Planet Datarius"
            subtext="The sphere early in budding, galloping towards a dystopia of clankers."
            projectList={datascienceProjects}
            planetImage={Planet}
            handwrittenText="A fluttering visage of wires"
          />
        </div>
      </div>
      <FloatingCircles />
    </div>
  );
}

export default Page;
