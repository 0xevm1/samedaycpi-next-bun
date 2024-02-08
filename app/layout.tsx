import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";
import Banner from "./banner";
import Footer from "./footer";
import Head from "next/head";

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
      <Head>
        <meta property="og:image" content="https://samedaycpi.com/assets/img/banner.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Same Day CPI" />
        <meta property="og:description" content="Same Day CPI provides expert CPI evaluations and FCC compliance consultations to optimize your wireless networks. Specializing in remote and on-site evaluations especially in the CBRS band. Contact us for reliable, swift service and tech excellence. DePIN" />
        <meta property="og:url" content="https://samedaycpi.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="./assets/img/favicon.ico" />
      </Head>
      <body className={inter.className}>
        <Navbar/>
        {children}</body>
        <Footer/>
    </html>
  );
}
