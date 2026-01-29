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
  metadataBase: new URL("https://thinkspace-omega.vercel.app"),

  title: {
    default: "ThinkSpace — Modern Tech Blog",
    template: "%s | ThinkSpace",
  },

  description:
    "ThinkSpace is a modern tech blog featuring web development, JavaScript, React, and software engineering insights.",

  openGraph: {
    title: "ThinkSpace — Modern Tech Blog",
    description:
      "Read high-quality articles on web development, React, JavaScript, and modern software engineering.",
    url: "https://thinkspace-omega.vercel.app",
    siteName: "ThinkSpace",
    images: [
      {
        url: "https://thinkspace-omega.vercel.app/ThinkSpace.png",
        width: 1200,
        height: 630,
        alt: "ThinkSpace Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "ThinkSpace — Modern Tech Blog",
    description:
      "Modern tech blog covering React, JavaScript, and software engineering.",
    images: [
      "https://thinkspace-omega.vercel.app/ThinkSpace.png",
    ],
    creator: "@matin_shamsi",
  },

  icons: {
    icon: "/favicon.ico",
  },
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
      <meta property="twitter:image" content="Twitter link preview image URL"></meta>

      <body className="font-sans antialiased bg-background text-foreground flex flex-col min-h-screen">
        <SearchProvider>
          {children}
          <Footer />
        </SearchProvider>
      </body>
    </html>
  );
}
