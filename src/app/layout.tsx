import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Instrument_Sans, Manrope } from "next/font/google";
import "./globals.css";
import "@/framer/styles.css";
import Navbar from "@/components/Navbar";

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: 'variable',
});

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-instrument-sans',
  weight: 'variable',
});

export const metadata: Metadata = {
  title: "VeeBran | Personal Branding, Sales & AI Tools for Founders",
  description: "VeeBran helps founders, coaches, and consultants grow with AI-powered personal branding, sales systems, and custom automation. Get in touch today.",
  keywords: ["personal branding and AI consulting for founders", "pre-sales post-sales consulting India", "custom AI tool development", "business automation for startups"],
  openGraph: {
    title: "VeeBran - Grow Your Brand, Pipeline & Business with AI",
    description: "The growth consulting partner for founders and entrepreneurs. Personal branding, sales systems, and custom AI tools.",
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon.png', type: 'image/png', sizes: '192x192' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,400&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${manrope.variable} ${inter.variable} ${instrumentSans.variable} font-sans antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
