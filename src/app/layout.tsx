// src/app/layout.tsx

import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { Providers } from "@/components/providers/Providers";
import {
  AmbientBackground,
  ParticlesBackground,
} from "@/components/animations/AmbientBackground";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
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
      className={cn("font-sans", geist.variable)}
      suppressHydrationWarning
    >
      <head>
        <meta
          name="format-detection"
          content="telephone=no, date=no, address=no, email=no"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-background text-foreground min-h-screen overflow-x-hidden">
        <div className="relative isolate min-h-screen overflow-hidden">
          <AmbientBackground />
          <ParticlesBackground />
          <div className="relative z-10">
            <Providers>{children}</Providers>
          </div>
        </div>
      </body>
    </html>
  );
}
