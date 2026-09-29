import clsx from "clsx";

interface Props {
  text: string;
  className?: string;
}

function AboutHeading(props: Props) {
  return (
    <h1
      className={clsx(
        "pl-0.5 pr-6 w-max z-20 relative font-francois text-[45px] md:text-[55px] lg:text-[40px] xl:text-[50px] 3xl:text-[65px]! leading-[112.3%] min-w-[340px] border-b-[6px] border-black rounded-[4px]",
        props.className,
      )}
    >
      {props.text}
    </h1>
  );
}

export default AboutHeading;
