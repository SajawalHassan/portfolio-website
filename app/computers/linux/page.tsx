import Header from "@/components/header";
import FloatingCircles from "@/components/ui/bg-circles";
import { ProjectLayout } from "@/components/computers/projects-layout";
import { linuxProjects } from "@/lib/content-data";
import Planet from "@/public/assets/planet.svg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Planet Pinguinia",
};

function Page() {
  return (
    <div className="home-page relative">
      <div className="w-full h-full  relative pb-30">
        <Header />

        <div className="max-width-stuff px-[14px] md:px-[24px]">
          <ProjectLayout
            heading="Planet Pinguinia"
            subtext="The ice-world: An antartica of penguins, verdant in caves with dotfiles — a boundless plain of distros."
            projectList={linuxProjects}
            planetImage={Planet}
            handwrittenText="Dot files of tedious creativity"
          />
        </div>
      </div>
      <FloatingCircles />
    </div>
  );
}

export default Page;
