import type { Metadata } from "next";
import { Inter } from "next/font/google"
import "./ui/globals.css";
import Navbar from "./ui/navbar";

const inter = Inter({
  subsets: ["latin"],
})


export const metadata: Metadata = {
  title: "Next.js E-Commerce Store",
  description:
    "A modern e-commerce web application built with Next.js and Tailwind CSS. Browse products, filter by category, and manage your cart with ease.",
  keywords: [
    "Next.js",
    "E-Commerce",
    "React",
    "Tailwind CSS",
    "Shopping Cart",
    "Frontend Project",
    "daisyUI"
  ],
  authors: [{ name: "Karim Chehab", url: "https://github.com/KarimChehab2003" }],
  openGraph: {
    title: "Next.js E-Commerce Store",
    description:
      "A modern e-commerce app built with Next.js and Tailwind CSS. Browse, filter, and shop seamlessly.",
    url: "https://e-commerce-nextjs-karim-chehab.vercel.app/",
    siteName: "Next.js E-Commerce Store",
    images: [
      {
        url: "https://e-commerce-nextjs-karim-chehab.vercel.app/og-image.png",
        alt: "Next.js E-Commerce Store",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js E-Commerce Store",
    description:
      "A sleek e-commerce app made with Next.js and Tailwind CSS. Explore products and manage your cart with ease.",
    images: ["/og-image.png"],
    creator: "@yourtwitter",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="freshnatural">
      <body
        className={` ${inter.className} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
