import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const personaNonGrata = localFont({
  src: "../fonts/Persona-Non-Grata.ttf",
  variable: "--font-persona-non-grata",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Curator Blog",
  description: "Notes on art, briefs, and a compact portfolio.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${personaNonGrata.variable} antialiased min-h-dvh`}>
        {children}
      </body>
    </html>
  );
}
