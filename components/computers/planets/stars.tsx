import { useEffect, useState } from "react";
import Image from "next/image";
import Star from "@/public/assets/icons/star.svg";
import { StarData, generateStars } from "./helper";

function Stars(props: { starsNo: number }) {
  const [stars, setStars] = useState<StarData[]>([]);

  useEffect(() => {
    setStars(generateStars(props.starsNo));
  }, []);

  return stars.map((star) => (
    <Image
      key={star.id}
      src={Star}
      width={50}
      height={50}
      alt=""
      aria-hidden="true"
      className="absolute pointer-events-none animate-float xl:w-[60px] xl:h-[60px] 3xl:w-[70px]! 3xl:h-[70px]!"
      style={{
        top: star.top,
        left: star.left,
        animationDelay: `${star.delay}s`,
      }}
    />
  ));
}

export default Stars;
