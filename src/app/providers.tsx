"use client";

import { TranslationsProvider } from "@/components/providers";

export function Providers({ children }: { children: React.ReactNode }) {
  return <TranslationsProvider>{children}</TranslationsProvider>;
}
