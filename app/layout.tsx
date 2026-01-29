import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";
import Footer from "../components/layout/Footer";
import { SearchProvider } from "@/contexts/SearchContext";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"], // ← THIS is the important part
});

export const metadata: Metadata = {
  title: "ThinkSpace - A Modern Tech Blog",
  description:
    "A modern editorial SaaS blog design built with Next.js, TypeScript, and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={openSans.variable}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased bg-background text-foreground flex flex-col min-h-screen">
        <SearchProvider>
          {children}
          <Footer />
        </SearchProvider>
      </body>
    </html>
  );
}
