import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import Splash from "@/components/splash";
import CookieConsent from "@/components/cookie-consent";
import Script from "next/script";

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  preload: true,
});

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  preload: true,
});

export const metadata: Metadata = {
  title: "InboxQualify | Your AI Email Co-pilot",
  description:
    "Optimize your cold emails for tone, sender health, and deliverability. Get more replies, guaranteed, with AI-powered insights before you hit send.",
  icons: {
    icon: "/logo-192.png",
    shortcut: "/logo-192.png",
    apple: "/logo-192.png",
  },
  keywords: [
    "cold email optimization",
    "AI email co-pilot",
    "deliverability",
    "spam checker",
    "sender health score",
    "email personalization",
    "cold outreach",
    "email tone analysis",
    "email marketing analytics",
    "sales outreach tool",
  ],
  robots: {
    index: true,
    follow: true,
  },
  appleWebApp: {
    capable: true,
    startupImage: "https://InboxQualify.app/logo-512.png",
    statusBarStyle: "black-translucent",
    title: "InboxQualify | Your AI Email Co-pilot",
  },
  openGraph: {
    title: "InboxQualify. | Your AI Email Co-pilot",
    description:
      "Optimize your cold emails for tone, sender health, and deliverability. Get more replies, guaranteed, with AI-powered insights before you hit send.",
    type: "website",
    url: "https://InboxQualify.app",
    images: [
      {
        url: "https://InboxQualify.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bookkeeping Dashboard Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "InboxQualify | Your AI Email Co-pilot.",
    description:
      "Optimize your cold emails for tone, sender health, and deliverability. Get more replies, guaranteed, with AI-powered insights before you hit send.",
    images: ["https://InboxQualify.app/og-image.jpng"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <Script
        src="https://cdn.peasy.so/peasy.js"
        data-website-id="01jpf4qvbw89v1aa172pr8dfrm"
        async
      ></Script>
      <body className={`${sans.className} ${display.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Splash />
          {children}
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  );
}
