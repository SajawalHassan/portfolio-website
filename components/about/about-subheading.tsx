import clsx from "clsx";

interface Props {
  text: string;
  className?: string;
}

const AboutSubHeading = (props: Props) => {
  return (
    <div
      className={clsx(
        "font-caveat text-[30px] sm:text-[35px] md:text-[42px] lg:text-[47px] xl:text-[50px] w-max relative",
        props.className,
      )}
    >
      <h2>{props.text}</h2>
      <div className="h-[2px] lg:h-[4px] w-[calc(100%+15px)] absolute bottom-[9px] lg:bottom-[13.5px] xl:bottom-[18px] transition-all duration-400 bg-black group-hover:bg-transparent" />
    </div>
  );
};

export default AboutSubHeading;
