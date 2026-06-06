"use client";

import { LoaderCircle, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";

type FormStatus = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!accessKey) {
      setStatus("error");
      setMessage("Contact form is not configured yet. Please email directly.");
      return;
    }

    setStatus("loading");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", accessKey);
    formData.append("subject", `Portfolio message from ${formData.get("name") ?? "visitor"}`);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = (await response.json()) as { success?: boolean; message?: string };

      if (result.success) {
        setStatus("success");
        setMessage("Thanks for reaching out. I will get back to you soon.");
        form.reset();
        return;
      }

      setStatus("error");
      setMessage(result.message ?? "Something went wrong. Please try again or email directly.");
    } catch {
      setStatus("error");
      setMessage("Unable to send right now. Please email directly.");
    }
  };

  const fieldClass =
    "w-full rounded-2xl border border-white/12 bg-white/[0.06] px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-emerald-300/40 focus:bg-white/[0.09]";

  return (
    <div className="mt-10">
      {!accessKey ? (
        <p className="mb-4 text-sm text-white/48">
          Add <code className="rounded bg-white/10 px-1.5 py-0.5">NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY</code> in Vercel to enable the form.
        </p>
      ) : null}

      <form onSubmit={handleSubmit} className="dark-glass grid gap-4 rounded-[1.5rem] p-5 sm:p-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-medium text-white/72">
            Name
            <input className={fieldClass} type="text" name="name" required autoComplete="name" placeholder="Your name" />
          </label>
          <label className="grid gap-2 text-sm font-medium text-white/72">
            Email
            <input className={fieldClass} type="email" name="email" required autoComplete="email" placeholder="you@email.com" />
          </label>
        </div>
        <label className="grid gap-2 text-sm font-medium text-white/72">
          Message
          <textarea
            className={cn(fieldClass, "min-h-32 resize-y")}
            name="message"
            required
            placeholder="Tell me about the role, project, or idea..."
          />
        </label>
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-black transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "loading" ? <LoaderCircle className="size-4 animate-spin" aria-hidden="true" /> : <Send className="size-4" aria-hidden="true" />}
            Send Message
          </button>
          <a href={`mailto:${profile.email}`} className="text-sm font-medium text-white/52 transition hover:text-white">
            Or email {profile.email}
          </a>
        </div>
        {message ? (
          <p
            className={cn(
              "text-sm font-medium",
              status === "success" ? "text-emerald-300" : status === "error" ? "text-red-300" : "text-white/60"
            )}
            role="status"
          >
            {message}
          </p>
        ) : null}
      </form>
    </div>
  );
}
