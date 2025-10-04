import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import SchemaMarkup from "@/components/schema-markup";
import PerformanceOptimizer from "@/components/performance-optimizer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  preload: true,
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "Vommuli - AI Hardware Specialists",
    template: "%s | Vommuli"
  },
  description: "Speed-first AI hardware procurement with commission-based pricing. We get you AI hardware faster than anyone else - with zero upfront risk.",
  keywords: ["AI hardware procurement", "GPU sourcing", "commission-based procurement", "enterprise AI hardware"],
  authors: [{ name: "Vommuli - AI Hardware Specialists" }],
  creator: "Vommuli",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Vommuli - AI Hardware Specialists",
    description: "Speed-first AI hardware procurement with commission-based pricing",
    siteName: "Vommuli",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vommuli - AI Hardware Specialists",
    description: "Speed-first AI hardware procurement with commission-based pricing",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <SchemaMarkup type="all" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <PerformanceOptimizer />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
// Force deployment refresh Fri Oct  3 21:34:20 EDT 2025
