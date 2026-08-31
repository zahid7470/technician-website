import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import WhatsAppModal from "@/components/WhatsAppModal";
import { WhatsAppBookingProvider } from "@/components/WhatsAppBookingContext";
import JsonLd from "@/components/JsonLd";
import { BUSINESS_INFO, SITE_URL } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0F172A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${BUSINESS_INFO.name} | Doorstep Appliance Repair Mumbai, Navi Mumbai & Thane (₹299 Visit)`,
    template: `%s | ${BUSINESS_INFO.name}`,
  },
  description: `Doorstep refrigerator repair, washing machine repair, microwave oven repair & AC repair in Mumbai, Navi Mumbai & Thane. ₹299 visiting charge, 1-year warranty with bill. Call ${BUSINESS_INFO.phone}.`,
  keywords: [
    "refrigerator repair in Mumbai",
    "refrigerator repair Mumbai",
    "washing machine repair in Mumbai",
    "washing machine repair Mumbai",
    "oven repair in Mumbai",
    "AC repair in Mumbai",
    "appliance repair Mumbai",
    "refrigerator repair South Mumbai",
    "appliance repair South Mumbai",
    "appliance repair Western Mumbai",
    "refrigerator repair Navi Mumbai",
    "washing machine repair Navi Mumbai",
    "appliance repair Navi Mumbai",
    "appliance repair Thane",
    "AC repair Thane",
    "refrigerator repair Thane",
    "Zaheer Ahmed Ansari",
    "COOL FIX REPAIR",
  ],
  authors: [{ name: BUSINESS_INFO.owner }],
  creator: BUSINESS_INFO.name,
  publisher: BUSINESS_INFO.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: BUSINESS_INFO.name,
    title: `${BUSINESS_INFO.name} — Appliance Repair Mumbai, Navi Mumbai & Thane`,
    description: `Doorstep all-brand refrigerator, washing machine, oven, and AC repair. ₹299 visiting charge, 1-year warranty with bill. Call ${BUSINESS_INFO.phone}.`,
    images: [
      {
        url: `${SITE_URL}/logo.svg`,
        width: 1200,
        height: 630,
        alt: `${BUSINESS_INFO.name} Logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BUSINESS_INFO.name} — Appliance Repair Mumbai`,
    description: `Fast doorstep appliance repair in Mumbai, Navi Mumbai & Thane. ₹299 visit charge, 1-year warranty. Call ${BUSINESS_INFO.phone}.`,
    images: [`${SITE_URL}/logo.svg`],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        <JsonLd />
      </head>
      <body className="min-h-screen flex flex-col overflow-x-clip bg-slate-50 text-slate-900 antialiased selection:bg-brand-500 selection:text-white">
        <WhatsAppBookingProvider>
          <Navbar />
          <main className="flex-grow overflow-x-clip">{children}</main>
          <Footer />
          <StickyMobileCTA />
          <WhatsAppModal />
        </WhatsAppBookingProvider>
      </body>
    </html>
  );
}
