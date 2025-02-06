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
import { baseUrl } from "./sitemap";

export const metadata: Metadata = {
  metadataBase: baseUrl ? new URL(baseUrl) : undefined,
  applicationName: "Lancarin",
  title: {
    default: "Plumbing Service, Grease Trap, dan AC Service | Lancarin",
    template: "%s | Lancarin"
  },
  keywords: [
    "pt gama abyakta sejahtera",
    "gas solution",
    "Lancarin",
    "lancarin",
    "Lancarin id",
    "lancarin com",
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
  verification: {
    google: "ZuDkQGzkMvFi-AEuyYNFKgpZmi57sIkuzBL0Hbdxywc",
  },
  icons: {
    icon: `/favicon.ico`,
  },
  description:
    "Solusi terbaik Anda dalam engineering services. Kami melayani plumbing service, grease trap, dan AC service.",
  openGraph: {
    title: "Plumbing Service, Grease Trap, dan AC Service | Lancarin",
    url: baseUrl,
    siteName: "Lancarin",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${baseUrl}/og`,
        alt: "Lancarin",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Plumbing Service, Grease Trap, dan AC Service | Lancarin",
    images: [`${baseUrl}/og`],
  },
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
