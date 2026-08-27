import clsx from "clsx";

interface Props {
  text: string;
  className?: string;
}

function AboutHeading(props: Props) {
  return (
    <h1
      className={clsx(
        "pl-[6px] sm:pl-[10px] z-20 relative font-francois text-[45px] md:text-[55px] lg:text-[65px] xl:text-[80px] leading-[112.3%] min-w-[340px] py-[7px] bg-accent border-[6px] border-black rounded-[4px]",
        props.className,
      )}
    >
      {props.text}
    </h1>
  );
}

export default AboutHeading;
