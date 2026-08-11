// src/app/layout.tsx

import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Archivo, Instrument_Sans, Geist_Mono } from "next/font/google";
import { cn } from "@/lib/utils";
import { Providers } from "@/components/providers/Providers";

// Display — grotesque, width axis used expanded at hero sizes only
const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  axes: ["wdth"],
  display: "swap",
  preload: true,
});

// Text — body, UI labels, nav
const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
  preload: true,
});

// Meta — numbers, dates, labels, tags
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Andrzej Pruszyński | Frontend Developer",
  description:
    "Senior Frontend Developer specializing in React, Next.js and scalable frontend architectures.",
  keywords: [
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "UI Engineer",
  ],
  openGraph: {
    title: "Andrzej Pruszyński Portfolio",
    description: "Senior Frontend Developer Portfolio",
    url: "https://your-domain.com",
    siteName: "Portfolio",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={cn(
        archivo.variable,
        instrumentSans.variable,
        geistMono.variable,
      )}
      suppressHydrationWarning
    >
      <head>
        <meta
          name="format-detection"
          content="telephone=no, date=no, address=no, email=no"
        />
      </head>
      <body className="min-h-screen overflow-x-hidden">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
