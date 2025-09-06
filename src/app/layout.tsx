import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tran Thinh - Master of Ceremonies",
  description: "Professional MC services for weddings, corporate events, and cultural celebrations in Vietnam. Bilingual expertise in Vietnamese and English.",
  keywords: ["MC", "Master of Ceremonies", "Wedding MC", "Corporate Events", "Vietnam", "Bilingual", "Hue"],
  openGraph: {
    title: "Tran Thinh - Master of Ceremonies",
    description: "Professional MC services for weddings, corporate events, and cultural celebrations in Vietnam.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
