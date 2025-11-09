import type { Metadata } from "next";
import "@/app/globals.css";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { SanityLive } from "@/sanity/lib/live";
import WhatsAppButton from "../../../components/WhatsappButton";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.estateadvisor.com.pk"),
  title: {
    default: "Estate Advisor - Find Your Ideal Property",
    template: "%s | Estate Advisor",
  },
  description:
    "Estate Advisor helps you find and invest in the best residential and commercial properties in Karachi. Explore verified listings and trusted real estate advice.",
  keywords: [
    "real estate Karachi",
    "property listings",
    "buy houses",
    "investment properties",
    "Estate Advisor",
  ],
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: "https://www.estateadvisor.com.pk",
    siteName: "Estate Advisor",
    title: "Estate Advisor - Real Estate You Can Trust",
    description:
      "Discover premium properties across Karachi. Buy, sell, or invest with confidence at Estate Advisor.",
    images: [
      {
        url: "/estate-advisor-logo.png",
        width: 1200,
        height: 630,
        alt: "Estate Advisor Real Estate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Estate Advisor - Trusted Real Estate in Pakistan",
    description:
      "Browse premium real estate listings and investment opportunities across Karachi.",
    images: ["/estate-advisor-logo.png"], // same here
  },
  alternates: {
    canonical: "https://www.estateadvisor.com.pk",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        {/* <!-- Google tag (gtag.js) --> */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-G7B5QZ152P"
        ></Script>
        <Script>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-G7B5QZ152P');
          `}
        </Script>
        <main>
          <Header />
          {children}
          <Footer />
          <WhatsAppButton />
        </main>
        <SanityLive />
      </body>
    </html>
  );
}
