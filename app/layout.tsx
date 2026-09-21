import type { Metadata } from "next";
import { Doto, Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import { config } from "@/constants";
import { ThemeProvider } from "@/providers/theme-provider";

import { cn } from "@/lib/utils";

import { TooltipProvider } from "@/components/ui/tooltip";
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

const siteUrl = new URL(
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://ahmedmayara.netlify.app",
);

const ogImage = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: `${config.name} — ${config.title}`,
  type: "image/png",
};

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: "Ahmed Mayara",
  description: config.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ahmed Mayara",
    description: config.description,
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Ahmed Mayara",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmed Mayara",
    description: config.description,
    images: [ogImage],
  },
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
          <TooltipProvider>
            {children}
            <BottomNavigation />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
