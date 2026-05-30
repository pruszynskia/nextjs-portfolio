// src/app/layout.tsx

import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

import { Providers } from "@/components/providers/Providers";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

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
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Next.js App Router</title>
      <body className="bg-background text-foreground min-h-screen">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
