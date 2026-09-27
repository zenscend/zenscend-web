import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import { IntroScript } from "@/components/intro";
import { Footer, Nav } from "@/components/site-chrome";
import "./globals.css";

const archivo = Archivo({ subsets: ["latin"], variable: "--font-archivo" });

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Zenscend — software partner for growing businesses",
    template: "%s — Zenscend",
  },
  description:
    "Zenscend is a software partner for growing businesses. We build new products from zero, take MVPs to launch and beyond, and modernise the systems you already run.",
  keywords:
    "software development, custom software, MVP development, legacy modernisation, internal tools, Pretoria, South Africa",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Zenscend — software partner for growing businesses",
    description:
      "Zenscend is a software partner for growing businesses. We build new products from zero, take MVPs to launch and beyond, and modernise the systems you already run.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // The intro script stamps data-zs-intro on the root before React hydrates.
    <html lang="en" suppressHydrationWarning>
      <body className={`${archivo.variable} ${plexMono.variable} font-sans`}>
        <IntroScript />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
