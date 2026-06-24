// src/app/providers/Providers.tsx

import { ThemeProvider } from "next-themes";
import { PageTransition } from "@/components/providers/PageTransition";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
    >
      <PageTransition>{children}</PageTransition>
    </ThemeProvider>
  );
}
