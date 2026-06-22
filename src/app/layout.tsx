import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/shared/SmoothScroll";



import { headingFont, bodyFont } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Ayush Patidar",
  description: "Visual Designer, Brand Systems Thinker & Automation Builder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${headingFont.variable} ${bodyFont.variable} bg-black text-white antialiased`}
      >
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}