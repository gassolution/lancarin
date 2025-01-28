// Libs
import { NextUIProvider } from "@nextui-org/react";
import type { Metadata } from "next";
import * as React from "react";
import "./globals.css";

// Analytics
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Components
import { Footerdemo } from "@/components/ui/footer-section";
import ResponsiveNavbar from "./navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gas-solution.com"),
  keywords: [
    "pt gama abyakta sejahtera",
    "gas solution",
    "gama abyakta sejahtera",
    "jasa saluran mampet",
    "saluran mampet",
    "jasa saluran mampet terdekat",
    "jasa saluran mampet bekasi",
    "alat pendorong saluran mampet",
    "cara menggunakan soda api untuk saluran mampet",
    "tukang saluran mampet",
    "cara pakai soda api untuk saluran mampet",
    "jasa saluran mampet jogja",
    "jasa saluran mampet bandung",
    "saluran mampet jogja",
    "jasa saluran mampet jakarta",
    "plumbing adalah",
    "apa itu plumbing",
    "pekerjaan plumbing",
    "instalasi plumbing air bersih",
    "sistem plumbing gedung bertingkat",
    "plumbing air bersih",
    "sistem plumbing adalah",
    "mechanical electrical plumbing adalah",
    "pekerjaan plumbing adalah",
    "plumbness adalah",
    "grease trap adalah",
    "apa itu grease trap",
    "cara membersihkan grease trap",
    "cara kerja grease trap",
    "biaya servis ac rumah",
    "cara servis ac rumah",
    "sedot wc terdekat",
    "sedot wc jakarta",
  ],
  title: {
    default: "Plumbing Service, Grease Trap, dan AC Service | GAS Solution",
    template: "%s | GAS Solution"
  },
  openGraph: {
    description:
      "Kami adalah perusahaan engineering maintenance services yang menyediakan jasa perawatan gedung atau plumbing profesional di daerah Jakarta, Bogor, Depok, Tangerang dan Bekasi(Jabodetabek) yang dipercaya oleh hotel bintang lima, mall, perkantoran, dan klien retail di daerah anda."
  }
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
          <div className=" max-w-screen-2xl mx-auto">
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
