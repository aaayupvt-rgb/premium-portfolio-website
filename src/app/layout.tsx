import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/shared/SmoothScroll";
import PageLoader from "@/components/shared/PageLoader";
import { headingFont, bodyFont } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Ayush Patidar — Visual Designer & Brand Systems",
  description: "Ayush Patidar is a visual designer specializing in brand identity, campaign systems, communication frameworks and AI automation workflows.",
  keywords: ["visual designer", "brand identity", "campaign design", "automation", "Ayush Patidar"],
  openGraph: {
    title: "Ayush Patidar — Visual Designer & Brand Systems",
    description: "Design that gets attention. Systems that create results.",
    url: "https://ayushpatidar.com",
    siteName: "Ayush Patidar",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayush Patidar — Visual Designer & Brand Systems",
    description: "Design that gets attention. Systems that create results.",
  },
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
        <PageLoader />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}