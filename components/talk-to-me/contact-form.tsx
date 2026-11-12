"use client";

import { FormEvent, useState } from "react";
import { contactSchema, ContactFormValues } from "@/lib/schemas";
import TextField from "@/components/ui/text-field";
import { TextArea } from "@/components/ui/text-area";
import { HeadingSubText } from "@/components/ui/headings";
import { cn } from "@/lib/helper";

type Errors = Partial<Record<keyof ContactFormValues | "serverErr", string>>;

export default function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sending) return;
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
    setSending(true);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });

      const body = await res.json();

      if (!res.ok || body.error) {
        throw new Error(body.error?.message ?? "Something went wrong. Please try again.");
      }

      form.reset();
      setSent(true);
      setTimeout(() => setSent(false), 2000);
    } catch (error) {
      console.error(error);
      setErrors({
        serverErr: error instanceof Error ? error.message : "Something went wrong. Please try again.",
      });
    } finally {
      setSending(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="mx-auto lg:mx-0 flex w-full shrink-0 flex-col gap-2 bg-bg border-2 border-black rounded-[4px] p-6 sm:p-10"
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
            disabled={sending}
            className={cn(
              "text-[12px] disabled:cursor-not-allowed font-semibold border-2 border-black rounded-[9px] px-[13.5px] py-[7.5px] flex items-center gap-2 mt-[17px]",
              sent && "bg-black text-white",
              !sending && "btn-translate-hover",
            )}
          >
            <HeadingSubText
              text={sending ? "Sending..." : sent ? "Message sent" : "Send message"}
              className={cn(sent && "text-white")}
            />
          </button>
        </div>
      </div>
    </form>
  );
}
