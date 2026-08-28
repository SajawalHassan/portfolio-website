import { computersGateways as computerGateways } from "@/lib/content-data";
import ComputersCmdBox from "./computers-cmdbox";
import ComputersBtn from "./computers-btn";

function ComputersHero() {
  return (
    <div className="mt-[43px]">
      <div className="">
        <h1 className="font-caveat text-[25px] leading-[107%]">
          Within a drop of humankind's knowledge,
          <br />
          Exists the universe of computers.
        </h1>
        <h1 className="font-caveat text-[38px] font-bold leading-[104.4%]">
          Welcome to this planet,
          <br />
          inside that cosmos.
        </h1>
      </div>

      <div className="mt-14">
        <ComputersCmdBox />
        <div className="grid grid-cols-2 grid-rows-2 gap-y-[11px] gap-x-[11px] mt-4 ml-2">
          {computerGateways.map((gateway) => (
            <ComputersBtn text={gateway.text} key={gateway.link} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ComputersHero;
