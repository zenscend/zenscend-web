"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/services", label: "Services" },
  { href: "/#about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function Logo() {
  return (
    <Image
      src="/zenscend-logo.svg"
      alt="Zenscend"
      width={148}
      height={20}
      priority
      className="h-5 w-[148px]"
    />
  );
}

export function Nav() {
  const pathname = usePathname();

  return (
    <header className="flex h-[76px] items-center justify-between border-b border-rule-nav bg-ink px-5 md:px-20">
      <Link
        href="/"
        aria-label="Zenscend home"
        className="flex items-center transition-opacity hover:opacity-75"
      >
        <Logo />
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
          className="flex h-11 items-center rounded-sm border border-rule-button px-5 text-bright transition-colors duration-200 hover:border-accent hover:bg-accent hover:text-ink"
        >
          Book a consult
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
          <Logo />
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
        </nav>
      </div>
      <div className="flex flex-col justify-between gap-2 border-t border-rule-dark pt-6 text-[13px] md:flex-row">
        <span>© 2026 Zenscend Tech Solutions</span>
        <span>Calm systems. Rising business.</span>
      </div>
    </footer>
  );
}
