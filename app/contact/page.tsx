"use client";

import Link from "next/link";
import { useState } from "react";

type State = "idle" | "sending" | "sent" | "error";

const starts = [
  { id: "idea", label: "An idea" },
  { id: "mvp", label: "An MVP" },
  { id: "system", label: "An existing system" },
];

const next = [
  [
    "We reply within one business day",
    "A short note to confirm we understand the problem and set a time to talk.",
  ],
  [
    "Discovery meeting",
    "We listen, ask questions and identify the real issue. No obligation.",
  ],
  ["Proposal", "Our recommended solution, with milestones and a quote."],
];

const label = "text-sm font-medium";
const field =
  "box-border rounded-sm border border-rule-edge bg-white px-4 text-base text-ink";

export default function Contact() {
  const [state, setState] = useState<State>("idle");
  const [error, setError] = useState("");
  const [picked, setPicked] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    setError("");

    const form = new FormData(e.currentTarget);
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...Object.fromEntries(form),
        startingPoint: starts.find((s) => s.id === picked)?.label ?? "",
      }),
    }).catch(() => null);

    if (res?.ok) {
      setState("sent");
      return;
    }
    const body = await res?.json().catch(() => null);
    setError(body?.error ?? "Could not send. Email info@zenscend.co instead.");
    setState("error");
  }

  return (
    <main className="grid grid-cols-1 items-start gap-x-6 gap-y-12 bg-paper px-5 py-20 md:px-20 lg:grid-cols-12 lg:pt-28 lg:pb-32">
      <div className="flex flex-col gap-12 lg:col-span-5">
        <div className="flex flex-col gap-6">
          <div className="eyebrow text-label">Contact</div>
          <h1 className="display-md">Tell us the problem you need solved.</h1>
          <p className="text-[19px]/[1.6] text-body">
            An idea, an MVP or a system that&apos;s holding you back. A few lines is
            enough to start.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="eyebrow text-label">What happens next</div>
          <div className="flex flex-col border-b border-rule-light">
            {next.map(([title, body], i) => (
              <div
                key={title}
                className="flex gap-[18px] border-t border-rule-light py-[22px]"
              >
                <span className="pt-1 font-mono text-[12px] text-label">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-col gap-1.5">
                  <span className="text-[18px] font-medium">{title}</span>
                  <span className="text-[15px]/[1.55] text-body">{body}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3.5">
          <div className="eyebrow text-[12px] text-label">Or reach us directly</div>
          <a
            href="mailto:info@zenscend.co"
            className="w-fit text-[18px] font-medium transition-colors duration-200 hover:text-accent"
          >
            info@zenscend.co
          </a>
          <a
            href="https://wa.me/27645327596"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit text-[18px] font-medium transition-colors duration-200 hover:text-accent"
          >
            WhatsApp &nbsp;→
          </a>
          <span className="text-[15px]/[1.6] text-body">
            Brooklyn, Pretoria. Remote-first, working with teams in South Africa and
            abroad.
          </span>
        </div>
      </div>

      <div className="lg:col-span-6 lg:col-start-7">
        <div className="flex flex-col gap-7 border border-rule-light bg-white p-6 md:p-12">
          {state === "sent" ? (
            <div role="status" className="flex flex-col gap-5 py-6">
              {/* The block sits on the bottom tread, not the top one: sending the
                  message is step one, with the climb still ahead. */}
              <svg width="56" height="56" viewBox="0 0 56 56" aria-hidden="true">
                <polyline
                  points="1,55 1,41 15,41 15,27 29,27 29,13 43,13 43,1 55,1"
                  fill="none"
                  stroke="#0C0C0C"
                  strokeWidth="1.5"
                />
                <rect x="1" y="41" width="14" height="14" fill="#FF4632" />
              </svg>
              <div className="text-[32px] font-medium tracking-[-0.03em]">
                Thank you. That&apos;s step one.
              </div>
              <p className="text-[17px]/[1.6] text-body">
                We&apos;ll reply within one business day to set up your discovery
                meeting.
              </p>
              <button
                type="button"
                onClick={() => {
                  setState("idle");
                  setPicked("");
                }}
                className="h-11 w-fit rounded-sm border border-rule-edge bg-white px-[18px] text-[15px] transition-colors duration-200 hover:border-accent hover:bg-accent hover:text-ink"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="flex flex-col gap-7">
              <fieldset className="flex flex-col gap-3">
                <legend className={`${label} mb-3`}>Where are you starting?</legend>
                <div className="flex flex-wrap gap-2">
                  {starts.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      aria-pressed={picked === s.id}
                      onClick={() => setPicked(s.id)}
                      className={`h-12 rounded-sm border px-[18px] text-[15px] transition-colors duration-200 ${
                        picked === s.id
                          ? "border-ink bg-ink text-bright"
                          : "border-rule-edge bg-white text-ink hover:border-accent hover:bg-accent hover:text-ink"
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </fieldset>

              <div className="flex flex-col gap-2">
                <label htmlFor="problem" className={label}>
                  What problem are you trying to solve?
                </label>
                <textarea
                  id="problem"
                  name="message"
                  rows={5}
                  required
                  placeholder="A few lines is plenty. No technical detail needed."
                  className={`${field} resize-y py-3.5 leading-[1.5]`}
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className={label}>
                    Your name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className={`${field} h-13`}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className={label}>
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className={`${field} h-13`}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="company" className={label}>
                  Company <span className="font-normal text-label">(optional)</span>
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  className={`${field} h-13`}
                />
              </div>

              {state === "error" && (
                <p role="alert" className="text-[15px] text-accent">
                  {error}
                </p>
              )}

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                <button
                  type="submit"
                  disabled={state === "sending"}
                  className="h-14 shrink-0 rounded-sm bg-accent px-8 font-semibold text-on-accent transition-colors duration-200 hover:text-ink disabled:opacity-60"
                >
                  {state === "sending" ? "Sending…" : "Book a discovery meeting"}
                </button>
                <span className="text-sm/[1.5] text-label">
                  Free, no obligation. We keep what you share confidential.{" "}
                  <Link
                    href="/privacy"
                    className="whitespace-nowrap underline transition-colors duration-200 hover:text-ink"
                  >
                    Privacy policy
                  </Link>
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
