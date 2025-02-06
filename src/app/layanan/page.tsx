"use client"

// Libs
import "animate.css/animate.compat.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

// UI Libs

// Font
import { HoverImageLinks } from "@/components/ui/hover-image";
import { Outfit } from 'next/font/google';
import Head from "next/head";

const outfit = Outfit({ subsets: ['latin'] })

// Font
import { Tilt_Neon, Tilt_Warp } from 'next/font/google';

const tiltwarp = Tilt_Warp({ subsets: ['latin'] })
const tiltneon = Tilt_Neon({ subsets: ['latin'] })

// Icons

export default function Service() {

  useEffect(() => {
    AOS.init({})
  }, [])

  return (
    <>
      <Head>
        <title>Jasa Drain Cleaning dan Servis AC | Layanan Lancarin</title>
        <meta name="description" content="Layanan kami mencakup drain cleaning untuk pembersihan saluran air, grease trap, dan AC service." />
      </Head>
      <main>
        <div className={`${tiltwarp.className} overflow-x-hidden flex flex-col items-start justify-center p-8 pb-20 gap-16 sm:p-20 rounded-xl xl:mx-20`}>
          <div className="flex flex-col items-start justify-start gap-4">
            <h2 className="text-2xl sm:text-3xl md:text-5xl text-green-500 mt-10">
              Layanan Kami
            </h2>
            <p className={`${tiltneon.className} text-md sm:text-lg md:text-xl w-full sm:w-2/3 text-left`}>
              Lancarin menyediakan jasa perawatan dan servis terbaik. Berikut ini adalah layanan-layanan yang kami tawarkan.
            </p>
          </div>

          <div className="w-full">
            <div className="w-full">
              <HoverImageLinks></HoverImageLinks>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-start">
            <h2 className={`${tiltwarp.className} text-2xl sm:w-1/3`}>
              Drain Cleaning
            </h2>
            <div className={`${tiltneon.className} text-md sm:text-lg sm:w-2/3`}>
              <p className="text-justify">
                Lancarin menyediakan layanan solusi saluran mampet atau drain cleaning profesional untuk memastikan saluran pembuangan kamu tetap bersih dan bebas sumbatan. Layanan selengkap kami di antaranya:
              </p>
              <div>
                <ul>
                  <li>
                    <p className="text-justify">
                      <span className="mr-2 bg-green-600 text-white px-2">
                        Pembersihan Saluran:
                      </span>
                      Menghilangkan kotoran, minyak, dan sisa material yang menyumbat pipa.
                    </p>
                  </li>
                  <li>
                    <p className="text-justify">
                      <span className="mr-2 bg-green-600 text-white px-2">
                        Inspeksi Saluran:
                      </span>
                      Memeriksa kondisi pipa dengan peralatan modern untuk mendeteksi masalah.
                    </p>
                  </li>
                  <li>
                    <p className="text-justify">
                      <span className="mr-2 bg-green-600 text-white px-2">
                        Perbaikan Saluran
                      </span>
                      Menangani kerusakan atau kebocoran pada saluran pembuangan.
                    </p>
                  </li>
                  <li>
                    <p className="text-justify">
                      <span className="mr-2 bg-green-600 text-white px-2">
                        Pemeliharaan Berkala
                      </span>
                      Perawatan rutin untuk mencegah penyumbatan di masa depan.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-start">
            <h2 className={`${tiltwarp.className} text-2xl sm:w-1/3`}>
              AC Maintenance
            </h2>
            <div className={`${tiltneon.className} text-md sm:text-lg sm:w-2/3`}>
              <p>
                Lancarin menyediakan layanan perawatan AC residential profesional untuk memastikan kenyamanan maksimal di rumah kamu. Layanan kami di antaranya:
              </p>
              <div>
                <ul>
                  <li>
                    <p className="text-justify">
                      <span className="mr-2 bg-green-600 text-white px-2">
                        Pembersihan AC:
                      </span>
                      Membersihkan unit indoor dan outdoor untuk menjaga aliran udara dan mencegah bau tidak sedap.
                    </p>
                  </li>
                  <li>
                    <p className="text-justify">
                      <span className="mr-2 bg-green-600 text-white px-2">
                        Pengecekan & Pemeliharaan:
                      </span>
                      Memeriksa tekanan freon, saluran drainase, dan komponen utama untuk mendeteksi potensi kerusakan.
                    </p>
                  </li>
                  <li>
                    <p className="text-justify">
                      <span className="mr-2 bg-green-600 text-white px-2">
                        Pengisian Freon
                      </span>
                      Mengisi atau mengganti freon sesuai standar.
                    </p>
                  </li>
                  <li>
                    <p className="text-justify">
                      <span className="mr-2 bg-green-600 text-white px-2">
                        Perbaikan AC
                      </span>
                      Menangani kerusakan seperti kebocoran freon, masalah kelistrikan, atau kompresor.
                    </p>
                  </li>
                  <li>
                    <p className="text-justify">
                      <span className="mr-2 bg-green-600 text-white px-2">
                        Instalasi & Relokasi
                      </span>
                      Pemasangan unit baru dan pemindahan AC dengan instalasi ulang yang tepat.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>


          <div className="flex flex-col sm:flex-row justify-center items-start">
            <h2 className={`${tiltwarp.className} text-2xl sm:w-1/3`}>
              Perawatan Grease Trap
            </h2>
            <div className={`${tiltneon.className} text-md sm:text-lg sm:w-2/3`}>
              <p>
                Lancarin menawarkan layanan perawatan grease trap profesional untuk memastikan sistem limbah dapur kamu tetap bersih dan berfungsi optimal. Layanan kami di antaranya:
              </p>
              <div>
                <ul>
                  <li>
                    <p className="text-justify">
                      <span className="mr-2 bg-green-600 text-white px-2">
                        Pembersihan & Pengurasan
                      </span>
                      Menghilangkan lemak, minyak, dan sisa makanan yang terakumulasi.
                    </p>
                  </li>
                  <li>
                    <p className="text-justify">
                      <span className="mr-2 bg-green-600 text-white px-2">
                        Pengecekan Saluran
                      </span>
                      Memastikan saluran masuk dan keluar grease trap bebas sumbatan.
                    </p>
                  </li>
                  <li>
                    <p className="text-justify">
                      <span className="mr-2 bg-green-600 text-white px-2">
                        Perbaikan & Penggantian
                      </span>
                      Menangani kerusakan pada komponen grease trap.
                    </p>
                  </li>
                  <li>
                    <p className="text-justify">
                      <span className="mr-2 bg-green-600 text-white px-2">
                        Pengelolaan Limbah
                      </span>
                      Limbah dikelola sesuai standar lingkungan.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main >
    </>
  );
}