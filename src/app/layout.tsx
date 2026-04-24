import type { Metadata } from "next";
import { Urbanist, Inter, DM_Sans } from "next/font/google";
import "./globals.css";


const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  fallback: ["Trebuchet MS", "sans-serif"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  fallback: ["Arial", "sans-serif"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  fallback: ["Arial", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Cargolink Logistics",
  description: "Cargolink Logistics",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${urbanist.variable} ${inter.variable} ${dmSans.variable}`}>
        {children}
      </body>
    </html>
  );
}