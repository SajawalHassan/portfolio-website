import { Heading4 } from "@/components/ui/headings";
import clsx from "clsx";
import { TextareaHTMLAttributes } from "react";

type TextAreaFieldProps = {
  label: string;
  name: string;
  error?: string;
} & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "name">;

export function TextArea({ label, name, error, className = "", ...props }: TextAreaFieldProps) {
  return (
    <div className="flex w-full flex-col">
      <Heading4 text={label} className="leading-tight text-black" />
      <textarea
        id={name}
        name={name}
        rows={8}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`transition-all mt-[7px] min-h-56 w-full resize-y border-2 border-[#8F8C7B] rounded-sm bg-bg p-4 text-lg font-light text-neutral-800 placeholder:text-neutral-600 focus:border-black focus:outline-none ${className}`}
        {...props}
      />
      <p role="alert" className={clsx("mt-1 text-sm text-red-700", !error && "opacity-0")}>
        {error ? error : "DUMMY TEXT"}
      </p>
    </div>
  );
}
