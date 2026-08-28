import Folder from "@/public/assets/icons/folder-icon.svg";
import Image from "next/image";

interface Props {
  text: string;
}

function ComputersBtn(props: Props) {
  return (
    <div className="border-[5px] border-black py-[4px] pl-[5px] flex items-center gap-x-[6px] h-max bg-bg">
      <Image
        src={Folder}
        width={30}
        height={30}
        alt="folder icon"
        className="sm:w-[32px] sm:h-[32px]"
      />
      <p className="font-francois text-[21px] sm:text-[23px]">{props.text}</p>
    </div>
  );
}

export default ComputersBtn;
