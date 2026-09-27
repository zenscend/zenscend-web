import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "What Zenscend collects through the contact form, why, how long we keep it, and how to ask for it back or deleted.",
};

const sections = [
  {
    n: "01",
    title: "Who we are",
    body: "Zenscend Tech Solutions, registration number 2025/576556/07, based in Pretoria, South Africa. We are the responsible party for the personal information described here. Reach us at info@zenscend.co.",
  },
  {
    n: "02",
    title: "What we collect",
    body: "Only what you type into the contact form: your name, your email address, your company name if you choose to give it, which starting point you picked, and the description of the problem you want solved. We do not use analytics, advertising or tracking cookies, and we do not collect anything about you when you simply read the site.",
  },
  {
    n: "03",
    title: "Why we collect it",
    body: "To reply to your enquiry, to arrange a discovery meeting and to prepare a proposal. Nothing else. We do not add you to a mailing list and we do not send marketing.",
  },
  {
    n: "04",
    title: "Where it goes",
    body: "The form sends your message as an email to info@zenscend.co. It is not stored in a database on this website.",
  },
  {
    n: "05",
    title: "How long we keep it",
    body: "Enquiry emails stay in our inbox for as long as they are useful, so we can pick up where we left off if you come back, and we delete them when they are not.",
  },
  {
    n: "06",
    title: "Who else sees it",
    body: "Nobody outside Zenscend and the email provider above. We do not sell your information, share it with advertisers, or pass it to anyone else, unless the law requires it.",
  },
  {
    n: "07",
    title: "Confidentiality",
    body: "We treat what you tell us about your business as confidential and only discuss it inside Zenscend, with the people working on your enquiry.",
  },
  {
    n: "08",
    title: "Your rights",
    body: "Under POPIA you may ask what personal information we hold about you, ask us to correct it, or ask us to delete it. Email info@zenscend.co and we will act on it.",
  },
] as const;

export default function Privacy() {
  return (
    <main className="bg-paper">
      {/* HERO */}
      <section className="grid grid-cols-1 gap-x-6 gap-y-8 bg-ink px-5 pt-20 pb-16 text-bright md:px-20 lg:grid-cols-12 lg:pt-28 lg:pb-24">
        <div className="eyebrow text-dim lg:col-span-12">Privacy policy</div>
        <h1 className="display-md lg:col-span-8">
          What you send us, and what we do with it.
        </h1>
        <p className="text-[19px]/[1.6] text-mute lg:col-span-7 lg:col-start-1">
          The contact form is the only place this site collects anything about
          you. This page says what it collects, why, and how to get it removed.
        </p>
      </section>

      {/* THE NOTICE */}
      <section className="grid grid-cols-1 gap-x-6 gap-y-10 px-5 py-20 md:px-20 lg:grid-cols-12 lg:py-28">
        <div className="eyebrow text-label lg:col-span-5 lg:pt-2">
          In plain language
        </div>
        <div className="flex flex-col border-b border-rule-light lg:col-span-7">
          {sections.map((s) => (
            <div
              key={s.n}
              className="flex gap-[18px] border-t border-rule-light py-7"
            >
              <span className="pt-1.5 font-mono text-[12px] text-label">
                {s.n}
              </span>
              <div className="flex flex-col gap-2">
                <h2 className="text-[20px] font-medium tracking-[-0.01em]">
                  {s.title}
                </h2>
                <p className="text-[16px]/[1.6] text-body">{s.body}</p>
              </div>
            </div>
          ))}
          <div className="pt-6 text-[13px] text-label">
            Last updated 27 September 2026
          </div>
        </div>
      </section>
    </main>
  );
}
