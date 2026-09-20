import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services — Zenscend",
  description:
    "Audits, optimisation and new builds. One team, whatever it runs on. New application builds, MVPs and scaling, system audits and optimisation.",
};

const ways = [
  {
    n: "01 · INNOVATE",
    title: "New application builds",
    lede: "Software built from zero, around your problem.",
    body: "Web platforms, client portals, internal tools and apps. We design around how your business actually works, then build it to last.",
    gets: ["Working, tested software", "Documentation and handover", "Training for your team"],
  },
  {
    n: "02 · ELEVATE",
    title: "MVPs and scaling",
    lede: "Prove the idea, then grow it.",
    body: "A lean first version that puts the idea in front of real users quickly. When it works, we harden, extend and scale it without starting over.",
    gets: ["A launch-ready MVP", "A roadmap for what comes next", "A foundation built to scale"],
  },
  {
    n: "03 · STREAMLINE",
    title: "System audits",
    lede: "A clear picture of what you run.",
    body: "We review your systems, data and processes, find where time and money leak, and tell you plainly what to keep, fix or replace.",
    gets: ["A plain-language audit report", "Prioritised recommendations", "A milestone plan, if you want one"],
  },
  {
    n: "04 · STREAMLINE",
    title: "Optimisation",
    lede: "Make what works, work better.",
    body: "Speed, reliability, automation and integrations for the systems you already rely on, improved without disrupting the business.",
    gets: ["Faster, more reliable systems", "Less manual, repeated work", "Tools that talk to each other"],
  },
] as const;

const routes = [
  ["Nothing built yet?", "→ New application build"],
  ["Built, but not yet proven?", "→ MVP and scaling"],
  ["Running, but not keeping up?", "→ Audit, then optimise"],
];

// Five steps climbing 180→500, the same staircase motif as the home page.
const stages = [
  {
    n: "01",
    title: "You reach out",
    body: "Tell us the problem in a few lines. We reply within 24 hours.",
    h: "md:h-45",
    skin: "border border-r-0 border-b-0 border-rule-light bg-paper",
    num: "text-label",
    text: "text-body",
  },
  {
    n: "02",
    title: "Discovery",
    body: "A meeting where we listen, ask questions and identify the real issue.",
    h: "md:h-65",
    skin: "border border-r-0 border-b-0 border-rule-light bg-paper-2",
    num: "text-label",
    text: "text-body",
  },
  {
    n: "03",
    title: "Proposal",
    body: "The solution we recommend, broken into milestones, with a quote.",
    h: "md:h-85",
    skin: "border border-r-0 border-b-0 border-rule-light bg-paper-3",
    num: "text-body",
    text: "text-[#333333]",
  },
  {
    n: "04",
    title: "Milestones",
    body: "We build milestone by milestone. You review each one as it lands.",
    h: "md:h-105",
    skin: "bg-ink text-bright",
    num: "text-dim",
    text: "text-mute",
  },
  {
    n: "05",
    title: "Launch & support",
    body: "We launch, hand over and stay on hand as you grow.",
    h: "md:h-125",
    skin: "bg-accent text-on-accent",
    num: "",
    text: "",
  },
] as const;

const milestones = ["Milestone 1", "Milestone 2", "Milestone 3", "Launch"];

const included = [
  "Discovery before any quote",
  "A proposal in plain language",
  "Clear milestones and deliverables",
  "Progress you can review at every milestone",
  "Documentation and handover",
  "Support after launch",
];

export default function Services() {
  return (
    <main className="bg-paper">
      {/* HERO */}
      <section className="grid grid-cols-1 gap-x-6 gap-y-10 bg-ink px-5 pt-20 pb-16 text-bright md:px-20 lg:grid-cols-12 lg:pt-28 lg:pb-24">
        <div className="eyebrow text-dim lg:col-span-12">Services</div>
        <h1 className="display lg:col-span-9">
          Audits, optimisation and new builds.
          <br />
          <span className="text-ghost">One team, whatever it runs on.</span>
        </h1>
        <p className="text-[19px]/[1.6] text-mute lg:col-span-7 lg:col-start-1">
          Whether you&apos;re starting from zero, growing an MVP or getting more from
          what you already run, every project starts the same way: we listen first.
        </p>
      </section>

      {/* FOUR WAYS IN */}
      <section className="flex flex-col gap-12 px-5 py-20 md:px-20 lg:gap-16 lg:pt-32 lg:pb-28">
        <div className="grid grid-cols-1 gap-x-6 gap-y-6 lg:grid-cols-12">
          <div className="eyebrow text-label lg:col-span-5">01 — What we do</div>
          <h2 className="display-sm lg:col-span-7">Four ways in.</h2>
        </div>

        <div className="flex flex-col border-b border-rule-light">
          {ways.map((w) => (
            <article
              key={w.title}
              className="grid grid-cols-1 gap-x-6 gap-y-6 border-t border-rule-light py-11 lg:grid-cols-12"
            >
              <div className="flex flex-col gap-3 lg:col-span-4">
                <span className="font-mono text-[13px] text-label">{w.n}</span>
                <h3 className="text-[32px]/[1.1] font-medium tracking-[-0.02em]">
                  {w.title}
                </h3>
              </div>
              <div className="flex flex-col gap-3 lg:col-span-5">
                <div className="text-[21px]/[1.35] font-medium">{w.lede}</div>
                <p className="text-base/[1.6] text-body">{w.body}</p>
              </div>
              <div className="flex flex-col gap-2.5 text-[15px] lg:col-span-3">
                <span className="eyebrow text-[12px] text-label">You get</span>
                {w.gets.map((g) => (
                  <span key={g}>{g}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="grid gap-8 border border-rule-light bg-white p-10 lg:grid-cols-4">
          <div className="flex flex-col gap-2.5">
            <span className="text-2xl font-medium tracking-[-0.02em]">
              Not sure which you need?
            </span>
            <span className="text-[15px]/[1.55] text-body">
              Start with where you are.
            </span>
          </div>
          {routes.map(([q, a]) => (
            <div
              key={q}
              className="flex flex-col gap-2 border-rule-white lg:border-l lg:pl-6"
            >
              <span className="text-base/[1.45]">{q}</span>
              <span className="eyebrow text-[12px] tracking-[0.06em] text-label">
                {a}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* HOW A PROJECT RUNS */}
      <section className="flex flex-col gap-12 border-t border-rule-white bg-white px-5 pt-20 md:px-20 lg:gap-[72px] lg:pt-32">
        <div className="grid grid-cols-1 gap-x-6 gap-y-6 lg:grid-cols-12">
          <div className="eyebrow text-label lg:col-span-5">02 — How a project runs</div>
          <div className="flex flex-col gap-6 lg:col-span-7">
            <h2 className="display-sm">From first message to launch.</h2>
            <p className="max-w-[600px] text-[19px]/[1.6] text-body">
              No quote before we understand the problem. No surprises once work
              begins.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:h-125 md:flex-row md:items-end">
          {stages.map((s) => (
            <div key={s.n} className={`flex flex-1 flex-col gap-2.5 p-7 ${s.h} ${s.skin}`}>
              <span className={`font-mono text-[13px] ${s.num}`}>{s.n}</span>
              <span className="text-[23px] font-medium tracking-[-0.02em]">
                {s.title}
              </span>
              <span className={`text-[15px]/[1.5] ${s.text}`}>{s.body}</span>
            </div>
          ))}
        </div>
      </section>

      {/* PAYING FOR THE WORK */}
      <section className="grid grid-cols-1 gap-x-6 gap-y-10 bg-ink px-5 py-20 text-bright md:px-20 lg:grid-cols-12 lg:gap-y-16 lg:py-32">
        <div className="eyebrow text-dim lg:col-span-5">03 — Paying for the work</div>
        <div className="flex flex-col gap-6 lg:col-span-7">
          <h2 className="display-sm">You pay as the work progresses.</h2>
          <p className="max-w-[600px] text-[19px]/[1.6] text-mute">
            Our quotes are split into milestones. Each has a clear deliverable, and
            you generally pay milestone by milestone rather than for the whole
            project at once. You always know what you&apos;re paying for, and what
            comes next.
          </p>
        </div>

        <div className="flex gap-2 bg-paper p-2 lg:col-span-7 lg:col-start-6">
          {milestones.map((m, i) => (
            <div
              key={m}
              className={`flex h-[72px] flex-1 flex-col justify-between border border-rule-nav p-3.5 ${
                i === milestones.length - 1
                  ? "bg-accent text-on-accent"
                  : "bg-white text-ink"
              }`}
            >
              <span className="eyebrow text-[12px] tracking-[0.06em]">{m}</span>
              <span className="text-[13px]">Deliver · review · pay</span>
            </div>
          ))}
        </div>

        <div className="eyebrow text-dim lg:col-span-5 lg:pt-2">
          Every project includes
        </div>
        <div className="flex flex-col border-b border-rule-dark lg:col-span-7">
          {included.map((item, i) => (
            <div
              key={item}
              className="flex gap-4 border-t border-rule-dark py-[18px] text-[17px]"
            >
              <span className="pt-[3px] font-mono text-[12px] text-dim">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="grid grid-cols-1 gap-x-6 gap-y-8 px-5 py-20 md:px-20 lg:grid-cols-12 lg:py-32">
        <div className="eyebrow text-label lg:col-span-5">04 — Start here</div>
        <div className="flex flex-col gap-8 lg:col-span-7">
          <h2 className="display-md">Every project starts with a conversation.</h2>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="flex h-14 items-center rounded-sm bg-accent px-7 font-semibold text-on-accent transition-colors duration-200 hover:text-ink"
            >
              Book a discovery meeting
            </Link>
            <a
              href="https://wa.me/27645327596"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-14 items-center rounded-sm border border-rule-edge px-6 transition-colors duration-200 hover:border-whatsapp hover:bg-whatsapp hover:text-ink"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
