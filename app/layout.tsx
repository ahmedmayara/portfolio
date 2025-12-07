import type { Metadata } from "next";
import { Geist, Doto, Geist_Mono } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/providers/theme-provider";
import { config } from "@/constants";
import { cn } from "@/lib/utils";
import { BottomNavigation } from "@/components/bottom-navigation";

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const fontDoto = Doto({
  subsets: ["latin"],
  variable: "--font-doto",
});

export const metadata: Metadata = {
  title: "Ahmed Mayara",
  description: config.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "font-sans antialiased",
          fontSans.variable,
          fontMono.variable,
          fontDoto.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <BottomNavigation />
        </ThemeProvider>
      </body>
    </html>
  );
}
