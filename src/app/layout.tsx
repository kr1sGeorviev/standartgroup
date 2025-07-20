import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Standard Group - Professional Construction Services",
  description: "Standard Group delivers quality construction solutions for residential and commercial projects. Over 20 years of experience in building excellence.",
  keywords: "construction, building, renovation, remodeling, commercial construction, residential construction, project management",
  authors: [{ name: "Standard Group" }],
  openGraph: {
    title: "Standard Group - Professional Construction Services",
    description: "Building Excellence, Delivering Quality Construction Solutions for Over 20 Years",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
