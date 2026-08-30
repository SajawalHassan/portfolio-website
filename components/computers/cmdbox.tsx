import clsx from "clsx";

interface Props {
  subPath?: string;
  className?: string;
}

function CmdBox(props: Props) {
  return (
    <div
      className={clsx(
        "rounded-[10px] border-[2px] sm:border-[4px] border-[#282C29] bg-[#353738] py-[5px] pl-[13px] md:py-[2px] lg:py-[5px] 3xl:py-[7px]! flex items-center",
        props.className,
      )}
    >
      <div className="text-[22px] md:text-[20px] xl:text-[26px] 2xl:text-[34px] 3xl:text-[38px]! flex items-center space-x-2 text-white">
        <div className="flex items-center">
          <span className="font-francois text-accent">~/Computers/</span>
          {props.subPath && (
            <span className="font-francois text-[#FFFFD7]">
              {props.subPath}
            </span>
          )}
        </div>
        <span>$</span>
        <span className="font-francois">ls...</span>
      </div>
    </div>
  );
}

export default CmdBox;
