import { computersGateways as computerGateways } from "@/lib/content-data";
import ComputersCmdBox from "./computers-cmdbox";
import ComputersBtn from "./computers-btn";
import WaveLikeIcon from "@/public/assets/icons/wave-like.svg";
import Image from "next/image";

function ComputersHero() {
  return (
    <div className="mt-[43px] md:flex md:gap-x-4 md:justify-around">
      <div className="w-full">
        <h1 className="font-caveat text-[25px] md:text-[20px] lg:text-[27px] xl:text-[30px] 2xl:text-[33px] leading-[107%]">
          Within a drop of humankind's knowledge,
          <br />
          Exists the universe of computers.
        </h1>
        <h1 className="font-caveat text-[38px] md:text-[32px] lg:text-[40px] xl:text-[44px] 2xl:text-[65px] 2xl:leading-[97%] font-bold leading-[104.4%]">
          Welcome to this planet,
          <br />
          inside that cosmos.
        </h1>

        <Image
          src={WaveLikeIcon}
          width={250}
          height={50}
          alt=""
          className="mt-5 lg:mt-5 lg:w-[350px] lg:h-[40px] lg:-ml-4 2xl:w-[500px] 2xl:h-[60px] 2xl:-ml-0 2xl:mt-6"
        />
      </div>

      <div className="mt-14 sm:mt-10 md:mt-0 w-full max-w-[450px] 2xl:max-w-[600px]">
        <ComputersCmdBox />
        <div className="grid grid-cols-2 grid-rows-2 gap-y-[11px] gap-x-[11px] mt-4 2xl:max-w-[680px] 2xl:gap-x-[23px] 2xl:gap-y-[18px]">
          {computerGateways.map((gateway) => (
            <ComputersBtn text={gateway.text} key={gateway.link} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ComputersHero;
