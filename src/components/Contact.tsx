"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { profile } from "@/data/profile";

type Fields = { name: string; email: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [f, setF] = useState<Fields>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [opened, setOpened] = useState(false);
  const [copied, setCopied] = useState<"yes" | "failed" | null>(null);

  function validate(): Errors {
    const e: Errors = {};
    if (f.name.trim().length < 2) e.name = "Enter your name.";
    if (!emailRe.test(f.email.trim())) e.email = "Enter a valid email address, like name@example.com.";
    if (f.message.trim().length < 10) e.message = "Write at least 10 characters.";
    return e;
  }

  function submit(ev: React.FormEvent) {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    setOpened(false);
    if (Object.keys(e).length) return;
    const subject = encodeURIComponent(`Portfolio message from ${f.name.trim()}`);
    const body = encodeURIComponent(`${f.message.trim()}\n\n${f.name.trim()}\n${f.email.trim()}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setOpened(true);
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied("yes");
    } catch {
      setCopied("failed");
    }
    setTimeout(() => setCopied(null), 2500);
  }

  const field = "mt-1 w-full border border-line bg-surface px-3 py-2.5 text-fg surface-transition";

  return (
    <section id="contact" className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 md:grid-cols-12 md:py-28">
        <div className="md:col-span-5">
          <h2 className="t-section">Contact</h2>
          <p className="measure mt-4 text-muted">
            I&apos;m happy to talk about internships, projects or collaboration. Email is the quickest way to reach me.
          </p>
          <p className="mt-6 break-all font-medium">{profile.email}</p>
          <button
            type="button"
            onClick={copy}
            className="mt-3 inline-flex items-center gap-2 border border-line px-3 py-2 text-sm transition-colors hover:bg-sunken"
          >
            {copied === "yes" ? <Check size={15} aria-hidden /> : <Copy size={15} aria-hidden />}
            {copied === "yes" ? "Copied" : copied === "failed" ? "Copy failed, select the text above" : "Copy email"}
          </button>
          <p className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a className="underline underline-offset-4 hover:text-accent" href={profile.links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className="underline underline-offset-4 hover:text-accent" href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="underline underline-offset-4 hover:text-accent" href={profile.links.hackerrank} target="_blank" rel="noopener noreferrer">HackerRank</a>
          </p>
        </div>

        <form onSubmit={submit} noValidate className="md:col-span-6 md:col-start-7">
          <div>
            <label htmlFor="c-name">Name</label>
            <input id="c-name" className={field} value={f.name} autoComplete="name"
              aria-invalid={!!errors.name} aria-describedby={errors.name ? "e-name" : undefined}
              onChange={(e) => setF({ ...f, name: e.target.value })} />
            {errors.name && <p id="e-name" className="mt-1 text-sm text-[#b3261e] dark:text-[#f2a39d]">{errors.name}</p>}
          </div>
          <div className="mt-5">
            <label htmlFor="c-email">Your email</label>
            <input id="c-email" type="email" className={field} value={f.email} autoComplete="email"
              aria-invalid={!!errors.email} aria-describedby={errors.email ? "e-email" : undefined}
              onChange={(e) => setF({ ...f, email: e.target.value })} />
            {errors.email && <p id="e-email" className="mt-1 text-sm text-[#b3261e] dark:text-[#f2a39d]">{errors.email}</p>}
          </div>
          <div className="mt-5">
            <label htmlFor="c-msg">Message</label>
            <textarea id="c-msg" rows={6} className={field} value={f.message}
              aria-invalid={!!errors.message} aria-describedby={errors.message ? "e-msg" : undefined}
              onChange={(e) => setF({ ...f, message: e.target.value })} />
            {errors.message && <p id="e-msg" className="mt-1 text-sm text-[#b3261e] dark:text-[#f2a39d]">{errors.message}</p>}
          </div>
          <button type="submit" className="mt-6 bg-fg px-5 py-3 text-sm font-medium text-bg transition-opacity hover:opacity-90">
            Open email draft
          </button>
          <p role="status" className="mt-4 text-sm text-muted">
            {opened
              ? "Your email app should now show a draft. Nothing has been sent until you press send there."
              : "This opens a draft in your email app. There is no server, so nothing is sent from this page."}
          </p>
        </form>
      </div>
    </section>
  );
}
