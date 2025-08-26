import type { Metadata } from "next";
import "@/app/globals.css";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { SanityLive } from "@/sanity/lib/live";
import WhatsAppButton from "../../../components/WhatsappButton";

export const metadata: Metadata = {
  title: "Estate Advisor",
  description: "Your trusted partner in real estate",

  openGraph: {
    title: "Estate Advisor",
    description: "Your trusted partner in real estate",
    url: "https://estateadvisor-option4.vercel.app",
    siteName: "Estate Advisor",
    images: [
      {
        url: "/estate-advisor-logo.png",
        width: 1200,
        height: 630,
        alt: "Estate Advisor Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Estate Advisor",
    description: "Your trusted partner in real estate",
    images: ["/estate-advisor-logo.png"],
  },

  icons: {
    icon: "/favicon.ico",
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
