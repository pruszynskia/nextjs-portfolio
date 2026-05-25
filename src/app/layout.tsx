import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { PageTransition } from "@/components/providers/page-transition";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Andrzej Pruszyński | Frontend Developer",
  description: "Senior Frontend Developer Portfolio",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className="bg-background text-foreground min-h-screen">
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
