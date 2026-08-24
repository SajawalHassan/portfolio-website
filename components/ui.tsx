import clsx from "clsx";

interface Props {
  className?: string;
  text: string;
}

export const Heading1 = (props: Props) => {
  return (
    <h1
      className={clsx(
        `font-francois text-[38px] sm:text-[44px] md:text-[52px] text-black leading-[112.3%] xl:text-[56px] 2xl:text-[65px] 3xl:text-[70px]!`,
        props.className,
      )}
    >
      {props.text}
    </h1>
  );
};

export const Heading2 = (props: Props) => {
  return (
    <h1
      className={clsx(
        `font-francois text-[36px] sm:text-[42px] md:text-[50px] lg:text-[40px]! text-black leading-[112.3%] xl:text-[54px]! 2xl:text-[62px]! 3xl:text-[68px]!`,
        props.className,
      )}
    >
      {props.text}
    </h1>
  );
};

export const Heading3 = (props: Props) => {
  return (
    <h1
      className={clsx(
        `text-[25px] md:text-[35px] font-francois text-black group-hover:text-white transition-all z-50 duration-400 lg:text-[30px] 2xl:text-[40px] 3xl:text-[45px]!`,
        props.className,
      )}
    >
      {props.text}
    </h1>
  );
};

export const HeadingSubText = (props: Props) => {
  return (
    <p
      className={clsx(
        props.className,
        "text-[16px] leading-[134%] text-subtext md:text-[18px] 2xl:text-[20px] 3xl:text-[22px]!",
      )}
    >
      {props.text}
    </p>
  );
};
