"use client";

import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import React from "react";

export default function ThemeProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
    >
      {children}
      <Toaster
        position="top-right"
        richColors
        closeButton
        toastOptions={{
          style: {
            background: "oklch(0.17 0.008 260)",
            border: "1px solid oklch(0.25 0.008 260)",
            color: "oklch(0.95 0.01 260)",
          },
        }}
      />
    </ThemeProvider>
  );
}
