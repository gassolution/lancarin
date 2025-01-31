"use client"

// Libs
import "animate.css/animate.compat.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

// UI Libs

// Font
import { Outfit } from 'next/font/google';
import Head from "next/head";

const outfit = Outfit({ subsets: ['latin'] })

// Icons

export default function About() {

  useEffect(() => {
    AOS.init({})
  }, [])

  return (
    <>
      <Head>
        <title>Tentang Ecofix | PT Gama Abyakta Sejahtera</title>
        <meta name="description" content="Profil, visi, dan misi dari PT Gama Abyakta Sejahtera." />
        <meta name="keywords" content="PT Gama Abyakta Sejahtera, Ecofix, Gas solution, sedot wc, jasa sedot wc, jasa saluran mampet, saluran mampet, jasa saluran mampet terdekat, jasa saluran mampet bekasi, alat pendorong saluran mampet, cara menggunakan soda api untuk saluran mampet, tukang saluran mampet, cara pakai soda api untuk saluran mampet, jasa saluran mampet jogja, jasa saluran mampet bandung, saluran mampet jogja, jasa saluran mampet jakarta, plumbing adalah, apa itu plumbing, pekerjaan plumbing, instalasi plumbing air bersih, sistem plumbing gedung bertingkat, plumbing air bersih, sistem plumbing adalah, mechanical electrical plumbing adalah, pekerjaan plumbing adalah, plumbness adalah, grease trap adalah, apa itu grease trap, cara membersihkan grease trap, cara kerja grease trap, biaya servis ac rumah, cara servis ac rumah, sedot wc terdekat, sedot wc jakarta" />
        <meta name="author" content="PT Gama Abyakta Sejahtera" />
        <meta property="og:title" content="Tentang Ecofix | PT Gama Abyakta Sejahtera" />
        <meta property="og:description" content="Profil, visi, dan misi dari PT Gama Abyakta Sejahtera." />
        <meta property="og:image" content="/images/saluranair.jpg" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
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
    </>
  );
}