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
          heading="Planet Pinguinia"
          subtext="This is the ice-world: An antartica of penguins, verdant in caves with dotfiles, a boundless plain of distros."
          projectList={webProjects}
          planetImage={Planet}
          handwrittenText="Dot files of tedious creativity"
        />
      </div>
      <FloatingCircles />
    </div>
  );
}

export default Page;
