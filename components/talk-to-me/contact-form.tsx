"use client";

import { FormEvent, useState } from "react";
import { contactSchema, ContactFormValues } from "@/lib/schemas";
import TextField from "@/components/ui/text-field";
import { TextArea } from "@/components/ui/text-area";
import { HeadingSubText } from "@/components/ui/headings";
import clsx from "clsx";

type Errors = Partial<Record<keyof ContactFormValues, string>>;

export default function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(false);

    const form = e.currentTarget;
    const result = contactSchema.safeParse(Object.fromEntries(new FormData(form)));

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors({
        name: fieldErrors.name?.[0],
        email: fieldErrors.email?.[0],
        message: fieldErrors.message?.[0],
      });
      return;
    }

    setErrors({});
    // TODO: send result.data to your API route / server action
    console.log(result.data);
    form.reset();
    setSent(true);

    setTimeout(() => {
      setSent(false);
    }, 2000);
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="mx-auto lg:mx-0 flex w-full shrink-0 flex-col gap-10 bg-bg border-2 border-black rounded-[4px] p-6 sm:p-10"
    >
      <div className="flex flex-col gap-8 lg:flex-row lg:gap-16">
        <TextField label="Name" name="name" placeholder="What’s your name?" autoComplete="name" error={errors.name} />
        <TextField
          label="Email"
          name="email"
          type="email"
          placeholder="What’s your email?"
          autoComplete="email"
          error={errors.email}
        />
      </div>

      <div>
        <TextArea label="Message" name="message" placeholder="What do you wanna say?" error={errors.message} />

        <div>
          <button
            className={clsx(
              "btn-translate-hover text-[12px] font-semibold border-2 border-black rounded-[9px] px-[13.5px] py-[7.5px] flex items-center gap-2 mt-[17px]",
              sent && "bg-black text-white",
            )}
          >
            <HeadingSubText text={sent ? "Message sent" : "Send message"} className={clsx(sent && "text-white")} />
          </button>
        </div>
      </div>
    </form>
  );
}
