import { NextUIProvider } from "@nextui-org/react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import * as React from "react";
import "./globals.css";
import ResponsiveNavbar from "./navbar";

// Font
import { Footerdemo } from "@/components/ui/footer-section";
import { GeistSans } from 'geist/font/sans';


export const metadata: Metadata = {
  title: "Plumbing Service, Grease Trap, dan AC Service | GAS Solution",
  description: "Kami adalah perusahaan engineering maintenance services yang menyediakan jasa perawatan gedung atau plumbing profesional di daerah Jakarta, Bogor, Depok, Tangerang dan Bekasi(Jabodetabek) yang dipercaya oleh hotel bintang lima, mall, perkantoran, dan klien retail di daerah anda.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NextUIProvider>
          <div className={`${GeistSans.className} max-w-screen-2xl mx-auto`}>
            <ResponsiveNavbar />
            {children}
            <Analytics />
            <SpeedInsights />
            <Footerdemo />
          </div>
        </NextUIProvider>
      </body>
    </html>
  );
}
