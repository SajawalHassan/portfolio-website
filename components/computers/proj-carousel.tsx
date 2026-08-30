"use client";
import ComputerProject from "@/components/computers/computer-project";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { webProjectsSpotlight } from "@/lib/content-data";

const style = "gap-x-10 w-full mx-auto max-w-[288px]";

function ProjCarousel() {
  return (
    <Carousel className="-ml-[14px] sm:-ml-[24px]">
      <CarouselContent className={style}>
        {webProjectsSpotlight.map((proj) => (
          <CarouselItem key={proj.title} className="p-0">
            <ComputerProject text={proj.title} description={proj.description} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default ProjCarousel;
