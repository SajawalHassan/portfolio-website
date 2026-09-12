"use client";

import { FolderIcon } from "@/components/ui/folder-icon";
import CustomLink from "@/components/custom-link";

interface Props {
  text: string;
  href: string;
}

function ComputersBtn(props: Props) {
  return (
    <CustomLink
      href={props.href}
      className="overflow-x-hidden relative overflow-y-hidden cursor-pointer group 2xl:max-w-[325px] border-[5px] border-black py-[4px] pl-[5px] xl:py-[6px] 2xl:px-[21px] flex items-center gap-x-[6px] md:gap-x-[2px] 2xl:gap-x-[10px] pr-2 h-max bg-bg text-black transition-colors duration-200 hover:text-white duration-200"
    >
      <FolderIcon
        width={30}
        height={30}
        className="relative z-10 sm:w-[32px] sm:h-[32px] md:w-[22px] md:h-[22px] xl:w-[30px] xl:h-[30px] 2xl:w-[40px] 2xl:h-[40px] 3xl:w-[46px]! 3xl:h-[46px]!"
      />
      <p className="relative z-10 font-francois text-[21px] sm:text-[23px] md:text-[17px] xl:text-[21px] 2xl:text-[32px] 3xl:text-[36px]!">
        {props.text}
      </p>
      <div className="z-0 h-[101%] bg-black w-full absolute left-0 top-0 -translate-x-full -translate-y-full group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200" />
    </CustomLink>
  );
}
export default ComputersBtn;
