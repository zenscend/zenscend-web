"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/logo";

const links = [
  { href: "/#process", label: "How we work" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <header className="flex h-[76px] items-center justify-between border-b border-rule-nav bg-ink px-5 md:px-20">
      <Link
        href="/"
        aria-label="Zenscend home"
        className="flex items-center transition-opacity hover:opacity-75"
      >
        <Logo className="h-[18px] w-28 text-bright sm:h-[21.5px] sm:w-32 md:w-40" />
      </Link>
      <nav className="flex items-center gap-10 text-[15px] text-mute">
        {links.map((l) => {
          const current = pathname === l.href;
          return (
            <Link
              key={l.href}
              href={l.href}
              aria-current={current ? "page" : undefined}
              className={`hidden transition-colors duration-200 hover:text-accent md:block ${
                current ? "text-bright" : ""
              }`}
            >
              {l.label}
            </Link>
          );
        })}
        <Link
          href="/contact"
          className="flex h-11 shrink-0 items-center rounded-sm border border-rule-button px-3 text-[12px] whitespace-nowrap text-bright transition-colors duration-200 hover:border-accent hover:bg-accent hover:text-ink sm:px-3.5 sm:text-[13px] md:px-5 md:text-[15px]"
        >
          Book a discovery meeting
        </Link>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="flex flex-col justify-between gap-12 bg-ink px-5 pt-16 pb-12 text-dim md:px-20">
      <div className="flex flex-col items-start justify-between gap-8 md:flex-row">
        <div className="flex flex-col gap-5">
          <Logo className="h-[21.5px] w-40 text-bright" />
          <span className="eyebrow">Innovate · Elevate · Streamline</span>
        </div>
        <nav className="flex flex-wrap gap-6 text-[15px] text-mute md:gap-10">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="transition-colors duration-200 hover:text-accent"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/privacy"
            className="transition-colors duration-200 hover:text-accent"
          >
            Privacy
          </Link>
        </nav>
      </div>
      <div className="flex flex-col justify-between gap-2 border-t border-rule-dark pt-6 text-[13px] md:flex-row">
        {/* Prerendered pages bake in the build year, so the client can correct
            it on hydration without a mismatch warning. */}
        <span suppressHydrationWarning>
          {`© ${new Date().getFullYear()} Zenscend Tech Solutions · Reg. 2025/576556/07`}
        </span>
        {/* <span>Calm systems. Rising business.</span> */}
      </div>
    </footer>
  );
}
