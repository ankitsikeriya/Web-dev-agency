import { Syne, Inter } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "DesignedByDudes | Modern Web Agency",
  description: "Crafting Modern Web Experiences",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${inter.variable} antialiased bg-[#0A0F1E] text-white font-sans`}>
        {children}
      </body>
    </html>
  );
}
