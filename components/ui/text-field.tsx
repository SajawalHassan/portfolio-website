import { Heading4 } from "@/components/ui/headings";
import clsx from "clsx";
import Image, { StaticImageData } from "next/image";
import { InputHTMLAttributes } from "react";

type TextFieldProps = {
  label: string;
  name: string;
  showLabel?: boolean;
  error?: string;
  icon?: string | StaticImageData;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "name">;

export default function TextField({
  label,
  name,
  error,
  showLabel = true,
  icon,
  className = "",
  ...props
}: TextFieldProps) {
  return (
    <div className="flex w-full flex-col">
      {showLabel && <Heading4 text={label} className="leading-tight text-black" />}
      <div className="relative mt-1 w-full">
        {icon && (
          <Image
            src={icon}
            alt=""
            aria-hidden="true"
            width={16}
            height={16}
            className="pointer-events-none absolute left-0 top-1/2 h-6 w-6 2xl:h-6.5 2xl:w-6.5 -translate-y-1/2 opacity-60"
          />
        )}
        <input
          id={name}
          name={name}
          aria-invalid={!!error}
          aria-describedby={error ? `${name}-error` : undefined}
          className={clsx(
            "transition-all w-full border-b-2 border-[#8F8C7B] bg-transparent py-1 text-[16px] 2xl:text-[18px] font-light text-neutral-800 placeholder:text-neutral-600 focus:border-black focus:outline-none",
            icon && "pl-7.5 2xl:pl-8",
            className,
          )}
          {...props}
        />
      </div>
      <p id={`${name}-error`} role="alert" className={clsx("mt-1 text-sm text-red-700", !error && "opacity-0")}>
        {error ? error : "DUMMY TEXT"}
      </p>
    </div>
  );
}
