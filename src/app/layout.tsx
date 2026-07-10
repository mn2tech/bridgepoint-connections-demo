import type { Metadata, Viewport } from "next";
import { Libre_Baskerville, Manrope } from "next/font/google";
import { company } from "@/lib/company";
import { SplashMarkup } from "@/components/SplashMarkup";
import { SplashController } from "@/components/SplashController";
import "./globals.css";

const display = Libre_Baskerville({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const title = `${company.name} | Faith, Work & Community`;
const description =
  "Bridgepoint Connections helps professionals integrate faith and spiritual values with their work and life through networking events, study groups, and mission trips in Northern Virginia.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL("https://bridgepoint-connections-demo.vercel.app"),
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_US",
    siteName: company.name,
    images: [
      {
        url: "/images/hero-bridge.jpg",
        width: 1200,
        height: 630,
        alt: "Bridge at golden hour representing Bridgepoint Connections",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/hero-bridge.jpg"],
  },
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: company.officialSite,
  },
};

export const viewport: Viewport = {
  themeColor: "#1a2f38",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full`}>
      <body className="min-h-full bg-paper font-sans text-ink antialiased">
        <SplashMarkup />
        <SplashController />
        {children}
      </body>
    </html>
  );
}
