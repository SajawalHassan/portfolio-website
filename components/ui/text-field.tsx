import { Heading3, Heading4 } from "@/components/ui/headings";
import { InputHTMLAttributes } from "react";

type TextFieldProps = {
  label: string;
  name: string;
  error?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "name">;

export default function TextField({ label, name, error, className = "", ...props }: TextFieldProps) {
  return (
    <div className="flex w-full flex-col">
      <Heading4 text={label} className="leading-tight text-black" />
      <input
        id={name}
        name={name}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`transition-all mt-1 w-full border-b-2 border-[#8F8C7B] bg-transparent py-1 text-[16px] font-light text-neutral-800 placeholder:text-neutral-600 focus:border-black focus:outline-none ${className}`}
        {...props}
      />
      {error && (
        <p id={`${name}-error`} role="alert" className="mt-1 text-sm text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}
