"use client"

// Libs
import "animate.css/animate.compat.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

// UI Libs

// Font
import { Outfit } from 'next/font/google';

const outfit = Outfit({ subsets: ['latin'] })

// Icons

export default function About() {

  useEffect(() => {
    AOS.init({})
  }, [])

  return (
    <main>
      <div className={`${outfit.className} overflow-x-hidden flex flex-col items-center justify-center p-8 pb-20 gap-16 sm:p-20 rounded-xl xl:mx-20`}>
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-2xl sm:text-3xl md:text-5xl text-indigo-600 font-semibold mt-10">
            Tentang Kami
          </h1>
          <p className="text-md sm:text-xl w-full sm:w-2/3 text-justify">
            PT Gama Abyakta Sejahtera adalah perusahaan plumbing services yang melayani hotel bintang 5, mall, perkantoran, dan klien retail di Jabodetabek. Layanan kami mencakup drain cleaning, plumbing, AC maintenance, grease trap serta perbaikan pipa atau saluran mampet. Dengan pengalaman lebih dari 20 tahun, kami memiliki teknisi terampil dan berdedikasi untuk memberikan solusi terbaik bagi kebutuhan saluran pipa dan pembuangan Anda. Pelajari lebih lanjut mengenai jasa yang kami tawarkan.
          </p>

          <h1 className="text-2xl sm:text-3xl md:text-5xl text-indigo-600 font-semibold mt-10">
            Visi PT GAS
          </h1>
          <p className="text-md sm:text-xl w-full sm:w-2/3 text-justify">
            Menjadi perusahaan yang terbaik dibidang engineering dan berintegritas.
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-5xl text-indigo-600 font-semibold mt-10">
            Misi PT GAS
          </h1>
          <div className="text-md sm:text-xl w-full sm:w-2/3 text-justify">
            <ol className="list-decimal">
              <li>
                Menjadi mitra yang kompeten, profesional, disiplin, dan bertanggung jawab dalam setiap pekerjaan.
              </li>
              <li>
                Mengutamakan kepuasaan pelanggan.
              </li>
              <li>
                Selalu berinovasi terhadap kemajuan sistem pelayanan.
              </li>
            </ol>
          </div>
        </div>

      </div>
    </main >
  );
}