import Folder from "@/public/assets/icons/folder-icon.svg";
import Image from "next/image";

interface Props {
  text: string;
}

function ComputersBtn(props: Props) {
  return (
    <div className="2xl:max-w-[325px] border-[5px] border-black py-[4px] pl-[5px] xl:py-[6px] 2xl:px-[21px] flex items-center gap-x-[6px] md:gap-x-[2px] 2xl:gap-x-[10px] pr-2 h-max bg-bg">
      <Image
        src={Folder}
        width={30}
        height={30}
        alt="folder icon"
        className="sm:w-[32px] sm:h-[32px] md:w-[22px] md:h-[22px] xl:w-[30px] xl:h-[30px] 2xl:w-[40px] 2xl:h-[40px]"
      />
      <p className="font-francois text-[21px] sm:text-[23px] md:text-[17px] xl:text-[21px] 2xl:text-[32px]">
        {props.text}
      </p>
    </div>
  );
}

export default ComputersBtn;
