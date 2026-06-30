import type { Metadata } from "next";
import { Satisfy, Libre_Franklin } from "next/font/google";
import "./globals.css";

const satisfy = Satisfy({
  subsets: ["latin"],
  variable: "--font-display",
  weight: "400",
});

const libre = Libre_Franklin({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title:
    "Collier Creek Cabins & Wedding Barn | Creekside Cabins Near Caddo Gap, AR",
  description:
    "Collier, Liberty and Caddo cabins, wedding barn, clear Collier Creek, and private 5 acres near Norman and Caddo Gap, Arkansas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${satisfy.variable} ${libre.variable}`}>
        {children}
      </body>
    </html>
  );
}
