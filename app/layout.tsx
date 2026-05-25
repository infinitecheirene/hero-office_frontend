import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { LanguageProvider } from "../components/LanguageProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HERO Serviced Office | Premium Office Space in Manila",
  description: "HERO Serviced Office, Inc. offers premium serviced offices in Manila, Philippines. Perfect for Japanese companies expanding into the Philippines. Located on Ayala Avenue, Makati with full support system.",
  keywords: "serviced office, office space Manila, Makati office, virtual office Philippines, Japanese business support, Ayala Avenue, Tower 6789, office rental Philippines",
  authors: [{ name: "HERO Serviced Office, Inc." }],
  creator: "HERO Serviced Office, Inc.",
  publisher: "HERO Serviced Office, Inc.",
  robots: "index, follow",
  openGraph: {
    title: "HERO Serviced Office | Premium Office Space in Manila",
    description: "Professional workspace solutions for businesses expanding into the Philippines. Located in the heart of Makati City.",
    type: "website",
    locale: "en_US",
    url: "https://heroph.net",
    siteName: "HERO Serviced Office",
    images: [{
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "HERO Serviced Office - Premium Office Space in Manila",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "HERO Serviced Office | Premium Office Space in Manila",
    description: "Professional workspace solutions for businesses expanding into the Philippines.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://heroph.net",
    languages: {
      "en": "https://heroph.net/en",
      "ja": "https://heroph.net/ja",
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <LanguageProvider>
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}