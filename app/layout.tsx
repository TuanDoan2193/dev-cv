"use client";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import NoScrollRestoration from "@/components/no-scroll-restoration";
import "./globals.css";
import { useEffect } from "react";
import React from "react";
import { motion } from "framer-motion";

// export const metadata: Metadata = {
//   title: "Tuan Doan's portfolio",
//   description: "Tuan Doan's portfolio",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [defaultTheme, setDefaultTheme] = React.useState("light");
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    setDefaultTheme(localStorage.getItem("theme") ?? defaultTheme);
    setIsLoading(false);
  }, [defaultTheme]);

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen font-poppins bg-background">
        <ThemeProvider
          attribute="class"
          disableTransitionOnChange
          defaultTheme={defaultTheme}
          enableSystem
        >
          {!isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              {children}
            </motion.div>
          )}

          <NoScrollRestoration />
        </ThemeProvider>
      </body>
    </html>
  );
}
