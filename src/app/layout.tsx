import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "ExpatCV - AI CV Rewriter for Expats in the Netherlands",
  description:
    "Struggling to get interviews in the Netherlands? ExpatCV rewrites your CV for the Dutch job market using AI. Cover letters and LinkedIn bio included.",
  keywords: [
    "expat CV",
    "Netherlands CV",
    "Dutch job market",
    "AI CV rewriter",
    "expat resume",
    "cover letter Netherlands",
    "LinkedIn optimization",
    "Dutch CV format",
    "expat jobs Netherlands",
    "EU job market",
  ],
  authors: [{ name: "ExpatCV" }],
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "ExpatCV",
  },
  openGraph: {
    title: "ExpatCV - AI CV Rewriter for Expats in the Netherlands",
    description:
      "Struggling to get interviews in the Netherlands? ExpatCV rewrites your CV for the Dutch job market using AI. Cover letters and LinkedIn bio included.",
    type: "website",
    locale: "en_US",
    siteName: "ExpatCV",
  },
  twitter: {
    card: "summary_large_image",
    title: "ExpatCV - AI CV Rewriter for Expats in the Netherlands",
    description:
      "Struggling to get interviews in the Netherlands? ExpatCV rewrites your CV for the Dutch job market using AI. Cover letters and LinkedIn bio included.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0f1e",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon-192.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icon-192.svg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
