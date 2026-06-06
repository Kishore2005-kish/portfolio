import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/portfolio";

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
  metadataBase: new URL("https://kishore-p-portfolio.vercel.app"),
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
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        {children}
        <div className="noise" aria-hidden="true" />
      </body>
    </html>
  );
}
