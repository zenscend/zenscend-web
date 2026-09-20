import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import { Footer, Nav } from "@/components/site-chrome";
import "./globals.css";

const archivo = Archivo({ subsets: ["latin"], variable: "--font-archivo" });

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
});

export const metadata: Metadata = {
  title: "Zenscend",
  description:
    "Zenscend is a software partner for growing businesses. We build new products from zero, take MVPs to launch and beyond, and modernise the systems you already run.",
  keywords:
    "software development, custom software, MVP development, legacy modernization, internal tools, Pretoria, South Africa",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Zenscend",
    description: "From first idea to MVP, and beyond.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${archivo.variable} ${plexMono.variable} font-sans`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
