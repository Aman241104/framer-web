import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Instrument_Sans } from "next/font/google";
import "./globals.css";
import "@/framer/styles.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-instrument-sans',
});

export const metadata: Metadata = {
  title: "VeeBran | Personal Branding, Sales & AI Tools for Founders",
  description: "VeeBran helps founders, coaches, and consultants grow with AI-powered personal branding, sales systems, and custom automation. Get in touch today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${instrumentSans.variable} font-sans bg-black text-white antialiased overflow-x-hidden w-full max-w-[100vw]`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}

