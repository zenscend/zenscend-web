import Link from "next/link";

const starts = [
  ["A · From zero", "You have a problem and an idea to solve it, but nothing built yet."],
  ["B · From MVP", "Your MVP proved the idea. Now it has to handle real customers."],
  ["C · From what you have", "Your tools and spreadsheets can no longer keep up with the business."],
];

// The three icons are the same staircase with a different tread filled in.
function Staircase({ step }: { step: 0 | 1 | 2 }) {
  const treads = [
    { x: 1, y: 27 },
    { x: 13, y: 15 },
    { x: 25, y: 3 },
  ];
  const line = ["1,39 1,27 13,27 13,15 25,15 25,3 39,3"];
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true">
      <polyline points={line[0]} fill="none" stroke="#0C0C0C" strokeWidth="1.5" />
      <rect {...treads[step]} width="12" height="12" fill="#FF4632" />
    </svg>
  );
}

const services = [
  {
    kicker: "Innovate",
    title: "Build",
    lede: "Turn an idea into working software.",
    body: "Custom platforms, portals, apps and internal tools, designed from zero around the problem you need solved. Whatever it runs on, we build it.",
    points: ["Custom software from scratch", "Web and mobile platforms", "Internal tools and dashboards"],
  },
  {
    kicker: "Elevate",
    title: "Launch & scale",
    lede: "Bring your MVP to life, and beyond.",
    body: "We build lean MVPs that test the idea quickly, then harden, extend and scale them as real customers arrive.",
    points: ["MVP design and build", "Product iteration", "Scaling and reliability"],
  },
  {
    kicker: "Streamline",
    title: "Modernise",
    lede: "Make what you already run work better.",
    body: "We review, improve or replace existing systems and processes, moving your data safely and keeping what works.",
    points: ["Systems and process review", "Modernisation and migration", "Integrations and automation"],
  },
] as const;

// Heights climb 240→480 so the four cards read as the staircase in the hero.
const steps = [
  {
    n: "01",
    title: "Listen",
    body: "A discovery meeting where we learn how your business runs and identify the real issue.",
    h: "md:h-60",
    skin: "bg-paper border border-r-0 border-b-0 border-rule-light",
    num: "text-label",
    text: "text-body",
  },
  {
    n: "02",
    title: "Map",
    body: "A proposed solution in plain language, with clear milestones and a quote.",
    h: "md:h-80",
    skin: "bg-paper-2 border border-r-0 border-b-0 border-rule-light",
    num: "text-label",
    text: "text-body",
  },
  {
    n: "03",
    title: "Build",
    body: "We deliver milestone by milestone, so you see progress and pay as it lands.",
    h: "md:h-100",
    skin: "bg-ink text-bright",
    num: "text-dim",
    text: "text-mute",
  },
  {
    n: "04",
    title: "Rise",
    body: "Launch, train your team, and stay on hand as the business grows.",
    h: "md:h-120",
    skin: "bg-accent text-on-accent",
    num: "",
    text: "",
  },
] as const;

export default function Home() {
  return (
    <main className="bg-paper">
      {/* HERO */}
      <section
        id="top"
        className="grid grid-cols-1 gap-x-6 bg-ink px-5 pt-20 pb-16 text-bright md:px-20 lg:h-[860px] lg:grid-cols-12 lg:pt-28 lg:pb-24"
      >
        <div className="flex flex-col justify-between gap-12 lg:col-span-7">
          <div className="flex flex-col gap-8">
            <div className="eyebrow text-dim">
              Software development · Remote-first · Pretoria
            </div>
            <h1 className="display">
              You bring the problem.
              <br />
              We build what solves it.
              <br />
              <span className="text-ghost">From first idea to MVP, and beyond.</span>
            </h1>
            <p className="max-w-[560px] text-[19px]/[1.6] text-mute">
              Zenscend is a software partner for growing businesses. We build new
              products from zero, take MVPs to launch and beyond, and modernise the
              systems you already run. Whatever it runs on, we make it work.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="flex h-14 items-center rounded-sm bg-accent px-7 font-semibold text-on-accent transition-colors duration-200 hover:text-ink"
            >
              Book a free consultation
            </Link>
            <Link
              href="#process"
              className="flex h-14 items-center px-3 text-bright transition-colors duration-200 hover:text-accent"
            >
              See how we work &nbsp;→
            </Link>
          </div>
        </div>
        <div className="hidden items-end justify-end lg:col-span-5 lg:flex">
          <svg
            width="520"
            height="440"
            viewBox="0 0 520 440"
            role="img"
            aria-label="A staircase rising from problem to idea, MVP, product and growth"
            className="h-auto w-full max-w-[520px]"
          >
            <g stroke="#232323" strokeWidth="1">
              {[0, 104, 208, 312, 416, 520].map((x) => (
                <line key={x} x1={x} y1="0" x2={x} y2="440" />
              ))}
              <line x1="0" y1="439.5" x2="520" y2="439.5" />
            </g>
            <polyline
              points="0,440 0,352 104,352 104,264 208,264 208,176 312,176 312,88 416,88 416,0 520,0"
              fill="none"
              stroke="#5A5A5A"
              strokeWidth="1.5"
            />
            <rect x="416" y="0" width="104" height="88" fill="#FF4632" />
            <g fontFamily="IBM Plex Mono, monospace" fontSize="11" fill="#8C8C8C" letterSpacing="0.06em">
              <text x="10" y="374">PROBLEM</text>
              <text x="114" y="286">IDEA</text>
              <text x="218" y="198">MVP</text>
              <text x="322" y="110">PRODUCT</text>
            </g>
            <text x="426" y="76" fontFamily="IBM Plex Mono, monospace" fontSize="11" fill="#FFFFFF" letterSpacing="0.06em">
              GROWTH
            </text>
          </svg>
        </div>
      </section>

      {/* PROBLEM */}
      <section
        id="about"
        className="grid grid-cols-1 gap-x-6 gap-y-12 px-5 pt-24 pb-20 md:px-20 lg:grid-cols-12 lg:gap-y-[72px] lg:pt-36 lg:pb-32"
      >
        <div className="eyebrow text-label lg:col-span-5">01 — Where you start</div>
        <div className="flex flex-col gap-6 lg:col-span-7">
          <h2 className="display-sm">Every problem starts somewhere.</h2>
          <p className="max-w-[620px] text-[19px]/[1.6] text-body">
            Some start with a blank page. Some with a prototype that has proved
            itself. Some with systems the business has outgrown. We meet you where you
            are.
          </p>
        </div>
        <div className="grid border-t border-rule-light lg:col-span-12 lg:grid-cols-3">
          {starts.map(([label, copy], i) => (
            <div
              key={label}
              className={`flex flex-col gap-3.5 pt-8 ${
                i < 2 ? "border-b border-rule-light pb-8 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-8" : ""
              } ${i > 0 ? "lg:pl-8" : ""}`}
            >
              <div className="font-mono text-[13px] text-label">{label}</div>
              <div className="text-[22px]/[1.35] font-medium tracking-[-0.01em]">
                {copy}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="flex flex-col gap-12 border-y border-rule-white bg-white px-5 py-20 md:px-20 lg:gap-[72px] lg:py-32"
      >
        <div className="grid grid-cols-1 gap-x-6 gap-y-6 lg:grid-cols-12">
          <div className="eyebrow text-label lg:col-span-5">02 — What we do</div>
          <h2 className="display-sm lg:col-span-7">Whatever it runs on, we build it.</h2>
        </div>
        <div className="grid border border-rule-white lg:grid-cols-3">
          {services.map((s, i) => (
            <article
              key={s.title}
              className={`flex min-h-[460px] flex-col gap-7 p-10 ${
                i < 2 ? "border-b border-rule-white lg:border-b-0 lg:border-r" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <Staircase step={i as 0 | 1 | 2} />
                <span className="eyebrow text-label">{s.kicker}</span>
              </div>
              <div className="flex flex-col gap-3.5">
                <h3 className="text-3xl font-medium tracking-[-0.02em]">{s.title}</h3>
                <div className="text-xl/[1.35] font-medium">{s.lede}</div>
                <p className="text-base/[1.6] text-body">{s.body}</p>
              </div>
              <div className="mt-auto flex flex-col gap-2.5 border-t border-rule-white pt-5 text-sm text-body">
                {s.points.map((p) => (
                  <span key={p}>{p}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="flex flex-col gap-12 px-5 pt-20 md:px-20 lg:gap-20 lg:pt-36">
        <div className="grid grid-cols-1 gap-x-6 gap-y-6 lg:grid-cols-12">
          <div className="eyebrow text-label lg:col-span-5">03 — How we work</div>
          <div className="flex flex-col gap-6 lg:col-span-7">
            <h2 className="display-sm">One calm step at a time.</h2>
            <p className="max-w-[600px] text-[19px]/[1.6] text-body">
              Whether we start from zero or from what you have: no big-bang launches
              and no jargon. You always know what we&apos;re doing, why, and what
              comes next.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:h-120 md:flex-row md:items-end">
          {steps.map((s) => (
            <div
              key={s.n}
              className={`flex flex-1 flex-col gap-3 p-8 ${s.h} ${s.skin}`}
            >
              <span className={`font-mono text-[13px] ${s.num}`}>{s.n}</span>
              <span className="text-[26px] font-medium tracking-[-0.02em]">
                {s.title}
              </span>
              <span className={`text-[15px]/[1.55] ${s.text}`}>{s.body}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="grid grid-cols-1 gap-x-6 gap-y-8 px-5 py-20 md:px-20 lg:grid-cols-12 lg:gap-y-14 lg:py-36"
      >
        <div className="eyebrow text-label lg:col-span-5">04 — Start here</div>
        <div className="flex flex-col gap-8 lg:col-span-7">
          <h2 className="display">Tell us the problem you need solved.</h2>
          <p className="max-w-[580px] text-[19px]/[1.6] text-body">
            Bring an idea, an MVP or a system that&apos;s holding you back.
            We&apos;ll tell you plainly how we&apos;d approach it. No obligation, no
            jargon.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="flex h-14 items-center rounded-sm bg-ink px-7 font-semibold text-bright transition-colors duration-200 hover:bg-accent hover:text-ink"
            >
              Book a free consultation
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
          <div className="flex flex-col gap-3 border-t border-rule-light pt-8 text-[15px] text-body md:flex-row md:gap-12">
            <span>info@zenscend.co</span>
            <span>Brooklyn, Pretoria</span>
            <span>Working with teams in SA and abroad</span>
          </div>
        </div>
      </section>
    </main>
  );
}
