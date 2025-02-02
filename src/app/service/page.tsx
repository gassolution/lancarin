"use client"

// Libs
import { cn } from "@/lib/utils";
import "animate.css/animate.compat.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from 'next/image';
import { useEffect } from "react";

// UI Libs

// Font
import { Outfit } from 'next/font/google';
import Head from "next/head";
import Link from "next/link";

const outfit = Outfit({ subsets: ['latin'] })

// Icons

export default function Service() {

  useEffect(() => {
    AOS.init({})
  }, [])

  return (
    <>
      <Head>
        <title>Plumbing Service, Grease Trap, dan AC Service | Layanan Ecofix</title>
        <meta name="description" content="Layanan kami mencakup plumbing service untuk pembersihan saluran air, grease trap, dan AC service." />
      </Head>
      <main>
        <div className={`${outfit.className} overflow-x-hidden flex flex-col items-center justify-center p-8 pb-20 gap-16 sm:p-20 rounded-xl xl:mx-20`}>
          <div className="flex flex-col items-center justify-center gap-4">
            <h2 className="text-2xl sm:text-3xl md:text-5xl text-indigo-600 font-semibold mt-10">
              Layanan Kami
            </h2>
            <p className="text-md sm:text-lg md:text-xl w-full sm:w-2/3 text-center">
              PT GAS menyediakan layanan engineering terbaik. Berikut ini adalah layanan-layanan yang kami tawarkan.
            </p>
          </div>
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-4 xl:gap-8 items-center">
            <Link href={"/service/saluranair"} rel="canonical" aria-label="Saluran Air">
              <div className="max-w-xs w-full group/card">
                <div
                  className={cn(
                    " cursor-pointer overflow-hidden relative card h-72 lg:h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
                    "bg-[url(/images/saluranair.jpg)] bg-cover"
                  )}
                >
                  <div className="absolute w-full h-full top-0 left-0 transition duration-300 bg-black opacity-50 group-hover/card:opacity-70"></div>
                  <div className="flex flex-row items-center space-x-4 z-10">
                    <Image
                      height={1000}
                      width={1000}
                      alt="Avatar"
                      src="/logogas.png"
                      className="h-10 w-8 rounded-full object-cover"
                    />
                  </div>
                  <div className="text content">
                    <h2 className="font-bold text-xl md:text-lg lg:text-2xl text-gray-50 relative z-10">
                      Pembersihan Saluran Mampet
                    </h2>
                    <p className="font-normal text-sm md:text-xs lg:text-sm text-gray-50 relative z-10 my-4">
                      Memastikan saluran pembuangan anda tetap bersih dan bebas sumbatan.
                    </p>
                  </div>
                </div>
              </div>
            </Link>
            <Link href={"/service/greasetrap"} rel="canonical" aria-label="Grease Trap">
              <div className="max-w-xs w-full group/card">
                <div
                  className={cn(
                    " cursor-pointer overflow-hidden relative card h-72 lg:h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
                    "bg-[url(/images/greasetrap.jpg)] bg-cover"
                  )}
                >
                  <div className="absolute w-full h-full top-0 left-0 transition duration-300 bg-black opacity-50 group-hover/card:opacity-70"></div>
                  <div className="flex flex-row items-center space-x-4 z-10">
                    <Image
                      height={1000}
                      width={1000}
                      alt="Avatar"
                      src="/logogas.png"
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  </div>
                  <div className="text content">
                    <h2 className="font-bold text-xl md:text-lg lg:text-2xl text-gray-50 relative z-10">
                      Perawatan Grease Trap
                    </h2>
                    <p className="font-normal text-sm md:text-xs lg:text-sm text-gray-50 relative z-10 my-4">
                      Ecofix menawarkan layanan perawatan grease trap profesional untuk memastikan sistem limbah dapur Anda tetap bersih dan berfungsi optimal.
                    </p>
                  </div>
                </div>
              </div>
            </Link>
            <Link href={"/service/ac"} rel="canonical" aria-label="AC Service">
              <div className="max-w-xs w-full group/card">
                <div
                  className={cn(
                    " cursor-pointer overflow-hidden relative card h-72 lg:h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
                    "bg-[url(/images/acmaintenance.jpg)] bg-cover"
                  )}
                >
                  <div className="absolute w-full h-full top-0 left-0 transition duration-300 bg-black opacity-50 group-hover/card:opacity-70"></div>
                  <div className="flex flex-row items-center space-x-4 z-10">
                    <Image
                      height={1000}
                      width={1000}
                      alt="Avatar"
                      src="/logogas.png"
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  </div>
                  <div className="text content">
                    <h2 className="font-bold text-xl md:text-lg lg:text-2xl text-gray-50 relative z-10">
                      AC Maintenance
                    </h2>
                    <p className="font-normal text-sm md:text-xs lg:text-sm text-gray-50 relative z-10 my-4">
                      Ecofix menyediakan layanan perawatan AC residential profesional untuk memastikan kenyamanan maksimal.
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </main >
    </>
  );
}