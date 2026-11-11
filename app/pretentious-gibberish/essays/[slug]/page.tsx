import Header from "@/components/header";
import FloatingCircles from "@/components/ui/bg-circles";
import { EssayItem } from "@/app/pretentious-gibberish/essays/_components/essay-item";
import { Metadata } from "next";
import { convertUrlToText } from "@/lib/helper";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  let title = convertUrlToText(slug);
  title = title
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: title,
    description: title,
  };
}

async function Page({ params }: PageProps) {
  const { slug } = await params;

  return (
    <div className="home-page relative">
      <div className="w-full h-full relative pb-30">
        <Header />

        <div className="px-[14px] md:px-[24px] lg:px-[60px] mt-[30px] max-width-stuff">
          <EssayItem title={slug} />
        </div>
      </div>
      <FloatingCircles />
    </div>
  );
}

export default Page;
