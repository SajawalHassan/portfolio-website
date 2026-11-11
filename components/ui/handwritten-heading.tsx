import { cn } from "@/lib/helper";

interface Props {
  text: string;
  className?: string;
}

const HandwrittenHeading = (props: Props) => {
  return (
    <div
      className={cn(
        "font-caveat text-[30px] sm:text-[35px] md:text-[42px] lg:text-[30px] xl:text-[40px] 3xl:text-[50px]! w-max relative",
        props.className,
      )}
    >
      <h2>{props.text}</h2>
      <span
        aria-hidden="true"
        role="presentation"
        className="h-[2px] xl:h-[4px] w-full absolute bottom-[9px] lg:bottom-[9px] xl:bottom-[10px] transition-all duration-400 bg-black group-hover:bg-transparent"
      />
    </div>
  );
};

export default HandwrittenHeading;
