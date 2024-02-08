import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";
import Banner from "./banner";
import Footer from "./footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Same Day CPI",
  description: "Same Day CPI approvals! How long does CPI approval take? Reduce your wait to the Same Day! Wireless spectrum analysis done by on-site professionals, get your site submitted to SAS today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}</body>
        <Footer/>
    </html>
  );
}
