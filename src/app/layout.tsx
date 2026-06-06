import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/portfolio";
import { personJsonLd } from "@/lib/json-ld";
import { siteUrl } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${profile.name} - ${profile.role}`,
  description: profile.intro,
  applicationName: "Kishore P Portfolio",
  keywords: [
    "Kishore P",
    "AI Engineer",
    "Full Stack Engineer",
    "Product Builder",
    "Machine Learning",
    "Portfolio",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: `${profile.name} - ${profile.role}`,
    description: profile.intro,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} - ${profile.role}`,
    description: profile.intro,
  },
};

export const viewport: Viewport = {
  themeColor: "#f7f8f6",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = personJsonLd();

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <div className="noise" aria-hidden="true" />
        <Analytics />
      </body>
    </html>
  );
}
