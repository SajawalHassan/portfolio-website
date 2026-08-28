"use client";
interface Props {
  text: string;
}
interface IconProps {
  className?: string;
  width: number;
  height: number;
}
const FolderIcon = (props: IconProps) => {
  return (
    <svg
      className={props.className}
      width={props.height}
      height={props.width}
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.375 11.9583C4.375 10.3248 4.375 9.50809 4.6929 8.88419C4.97252 8.33537 5.41871 7.88918 5.96753 7.60956C6.59143 7.29166 7.40819 7.29166 9.04167 7.29166H14.1087C14.8221 7.29166 15.1788 7.29166 15.5145 7.37224C15.812 7.44369 16.0965 7.56154 16.3575 7.72146C16.6518 7.90182 16.9041 8.15404 17.4086 8.65849L17.5914 8.84149C18.0959 9.34594 18.3482 9.59816 18.6425 9.77852C18.9035 9.93844 19.188 10.0563 19.4855 10.1277C19.8212 10.2083 20.1779 10.2083 20.8914 10.2083H25.9583C27.5918 10.2083 28.4086 10.2083 29.0325 10.5262C29.5813 10.8058 30.0275 11.252 30.3071 11.8009C30.625 12.4248 30.625 13.2415 30.625 14.875V23.0417C30.625 24.6751 30.625 25.492 30.3071 26.1158C30.0275 26.6646 29.5813 27.1108 29.0325 27.3904C28.4086 27.7083 27.5918 27.7083 25.9583 27.7083H9.04167C7.40817 27.7083 6.59143 27.7083 5.96753 27.3904C5.41871 27.1108 4.97252 26.6646 4.6929 26.1158C4.375 25.492 4.375 24.6751 4.375 23.0417V11.9583Z"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-[stroke] duration-200"
      />
    </svg>
  );
};

function ComputersBtn(props: Props) {
  return (
    <div className="overflow-x-hidden relative cursor-pointer group 2xl:max-w-[325px] border-[5px] border-black py-[4px] pl-[5px] xl:py-[6px] 2xl:px-[21px] flex items-center gap-x-[6px] md:gap-x-[2px] 2xl:gap-x-[10px] pr-2 h-max bg-bg text-black transition-colors duration-200 hover:text-white duration-200">
      <FolderIcon
        width={30}
        height={30}
        className="relative z-10 sm:w-[32px] sm:h-[32px] md:w-[22px] md:h-[22px] xl:w-[30px] xl:h-[30px] 2xl:w-[40px] 2xl:h-[40px] 3xl:w-[46px]! 3xl:h-[46px]!"
      />
      <p className="relative z-10 font-francois text-[21px] sm:text-[23px] md:text-[17px] xl:text-[21px] 2xl:text-[32px] 3xl:text-[36px]!">
        {props.text}
      </p>
      <div className="z-0 h-[101%] bg-black w-full absolute left-0 top-0 -translate-x-full -translate-y-full group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200" />
    </div>
  );
}
export default ComputersBtn;
