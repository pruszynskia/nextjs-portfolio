// src/app/providers/Providers.tsx

import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="data-theme"
      defaultTheme="system"
      storageKey="theme"
      enableSystem
      themes={["dark", "light"]}
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
