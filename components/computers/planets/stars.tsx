import { useEffect, useState } from "react";
import Image from "next/image";
import Star from "@/public/assets/icons/star.svg";
import { StarData, generateStars } from "./helper";

function Stars() {
  const [stars, setStars] = useState<StarData[]>([]);

  useEffect(() => {
    setStars(generateStars(10));
  }, []);

  return stars.map((star) => (
    <Image
      key={star.id}
      src={Star}
      width={star.size}
      height={star.size}
      alt=""
      aria-hidden="true"
      className="absolute pointer-events-none animate-float"
      style={{
        top: star.top,
        left: star.left,
        animationDelay: `${star.delay}s`,
      }}
    />
  ));
}

export default Stars;
