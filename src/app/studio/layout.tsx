import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Estate Advisor Studio",
  description: "Estate Advisor Studio is a modern and user-friendly platform for real estate professionals to manage and sell their properties online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
          {children}
      </body>
    </html>
  );
}
