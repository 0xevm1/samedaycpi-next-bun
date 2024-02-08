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
  description: "Expedited CPI Evaluations for CBRS & FCC Compliance",
  openGraph: {
    type: 'website',
    url: 'https://www.samedaycpi.com',
    title: 'Same Day CPI - Remote and OnSite CPI evaluations and approvals',
    description: 'Expedited CPI Evaluations for CBRS & FCC Compliance',
    siteName: 'Same Day CPI',
    images: [{
      url: "https://samedaycpi.com/assets/img/banner.png",
    }]
  },
  twitter: { 
    card: "summary_large_image",
    title: "Same Day CPI",
    description: "Expedited CPI Evaluations for CBRS & FCC Compliance",
    "images": "https://samedaycpi.com/assets/img/banner.png" }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
       
        {/** HTML Meta Tags */}
        <title>Same Day CPI</title>
        <meta name="description" content="Same Day CPI approvals! How long does CPI approval take? Reduce your wait to the Same Day! Wireless spectrum analysis done by on-site professionals, get your site submitted to SAS today!"/>
        <link rel="icon" href="./assets/img/favicon.ico" />

      </Head>
      <body className={inter.className}>
        <Navbar/>
        {children}</body>
        <Footer/>
    </html>
  );
}
