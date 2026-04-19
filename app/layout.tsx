import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  weight: ['300', '400', '500', '600'],
  variable: '--font-display',
  display: 'swap',
  subsets: ['latin'],
});

const inter = Inter({
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Atavo Agency — Websites, SaaS and Automation for businesses that want to grow",
  description: "UK digital agency crafting bespoke websites, SaaS platforms and automation systems. Your competitors are online. Are you?",
  openGraph: {
    title: "Atavo Agency — Websites, SaaS and Automation for businesses that want to grow",
    description: "UK digital agency crafting bespoke websites, SaaS platforms and automation systems. Your competitors are online. Are you?",
    url: "https://atavo.co.uk",
    siteName: "Atavo Agency",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${inter.variable} font-body bg-canvas text-ink antialiased`}>
        {children}
      </body>
    </html>
  );
}
