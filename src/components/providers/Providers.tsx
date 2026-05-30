// src/app/providers/Providers.tsx

import { ThemeProvider } from "next-themes";
import { PageTransition } from "@/components/providers/PageTransition";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <PageTransition>{children}</PageTransition>
    </ThemeProvider>
  );
}
