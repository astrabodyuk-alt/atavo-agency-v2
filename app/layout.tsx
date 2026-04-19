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
  metadataBase: new URL("https://atavo.co.uk"),
  title: {
    default: "Atavo — Bespoke Websites & Automation for Hampshire Businesses",
    template: "%s · Atavo",
  },
  description:
    "We design and build bespoke websites, booking systems and automation for Hampshire restaurants, beauty studios, trades and wellness businesses. Live in 72h.",
  keywords: ["web design Hampshire", "bespoke website", "booking system", "automation", "Atavo"],
  authors: [{ name: "Atavo Agency" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://atavo.co.uk",
    siteName: "Atavo",
    title: "Atavo — Bespoke Websites & Automation",
    description:
      "Bespoke websites, booking systems and automation for Hampshire businesses. Build yours in 72h.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Atavo — A Digital Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Atavo — Bespoke Websites & Automation",
    description:
      "Bespoke websites, booking systems and automation for Hampshire businesses.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
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
