import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import { BroSitesScripts } from "@/components/BroSitesScripts";
import { HomePageHeadSchemas } from "@/components/home/HomePageHeadSchemas";
import { Footer } from "@/components/Footer";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { Navigation } from "@/components/Navigation";
import { SchemaScript } from "@/components/SchemaScript";
import { getLocalBusinessSchema, getWebSiteSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["700", "800", "900"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.schemaUrl),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  icons: {
    icon: "/icon-512.png",
    apple: "/icon-512.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.schemaUrl,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
  },
  verification: {
    google: "prLNnUKjVXpOevhpQYzPhvPwGSaIKLRTi0i5khh3Ass",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <HomePageHeadSchemas />
      </head>
      <body className="flex min-h-screen flex-col">
        <SchemaScript schema={[getLocalBusinessSchema(), getWebSiteSchema()]} />
        <GoogleAnalytics gaId={siteConfig.gaId} />
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
        <BroSitesScripts />
      </body>
    </html>
  );
}
