import { cn } from "@/lib/helper";

interface Props extends React.ComponentPropsWithoutRef<"h1"> {
  text: string;
}

export const Heading1 = ({ text, className, ...props }: Props) => {
  return (
    <h1
      {...props}
      className={cn(
        `font-francois text-[38px] sm:text-[44px] md:text-[52px] text-black leading-[112.3%] xl:text-[56px] 2xl:text-[65px] 3xl:text-[70px]`,
        className,
      )}
    >
      {text}
    </h1>
  );
};

interface Heading2Props extends React.ComponentPropsWithoutRef<"h2"> {
  text: string;
}

export const Heading2 = ({ text, className, ...props }: Heading2Props) => {
  return (
    <h2
      {...props}
      className={cn(
        `font-francois text-[36px] sm:text-[42px] md:text-[50px] text-black leading-[112.3%] xl:text-[54px] 2xl:text-[62px] 3xl:text-[68px]`,
        className,
      )}
    >
      {text}
    </h2>
  );
};

interface Heading3Props extends React.ComponentPropsWithoutRef<"h3"> {
  text: string;
}

export const Heading3 = ({ text, className, ...props }: Heading3Props) => {
  return (
    <h3
      {...props}
      className={cn(
        `text-[25px] md:text-[35px] font-francois text-black transition-all z-50 duration-400 lg:text-[30px] 2xl:text-[40px] 3xl:text-[45px]`,
        className,
      )}
    >
      {text}
    </h3>
  );
};

interface Heading4Props extends React.ComponentPropsWithoutRef<"h4"> {
  text: string;
}

export const Heading4 = ({ text, className, ...props }: Heading4Props) => {
  return (
    <h4
      {...props}
      className={cn(
        `text-[20px] lg:text-[22px] 2xl:text-[26px] font-francois text-black transition-all duration-400 `,
        className,
      )}
    >
      {text}
    </h4>
  );
};

interface HeadingSubTextProps extends React.ComponentPropsWithoutRef<"p"> {
  text: string;
}

export const HeadingSubText = ({ text, className, ...props }: HeadingSubTextProps) => {
  return (
    <p
      {...props}
      className={cn(
        "text-[14px] md:text-[16px] lg:text-[18px] 2xl:text-[18px] 3xl:text-[20px] leading-[134%] text-subtext",
        className,
      )}
    >
      {text}
    </p>
  );
};
