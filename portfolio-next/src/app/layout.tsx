import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ParticleBackground } from "@/components/ParticleBackground";
import { ReadabilityScrim } from "@/components/ReadabilityScrim";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Akanksha Shah | Portfolio",
  description:
    "Software engineer — MCS @ Texas A&M · backend, systems, and ML interests.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        className="relative flex min-h-full min-w-0 flex-col overflow-x-clip bg-[var(--background)]"
        suppressHydrationWarning
      >
        <ParticleBackground />
        <ReadabilityScrim />
        <div className="relative z-10 flex min-h-full min-w-0 flex-1 flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
