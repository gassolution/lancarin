"use client"

// Libs
import "animate.css/animate.compat.css";
import "aos/dist/aos.css";
import Image from 'next/image';

// UI Libs

// Font
import { ArrowLeft, CircleCheck } from "lucide-react";
import { Outfit } from 'next/font/google';
import Link from "next/link";
import { SimpleCard_V5 } from '../../../components/ui/cardv5';

const outfit = Outfit({ subsets: ['latin'] })

// Icons

export default function SaluranAir() {

  return (
    <main>
      <div className={`${outfit.className} overflow-x-hidden flex flex-col items-center justify-center p-8 pb-20 gap-10 sm:p-20 rounded-xl mx-20`}>
        <div className="w-full flex flex-col items-start justify-center border rounded-full gap-4 p-3 mt-10">
          <div className="flex items-center justify-center gap-8">
            <Link href={"/service"} className="bg-indigo-600 hover:bg-indigo-700 transition-all text-white rounded-full text-8xl p-3 border-4 border-indigo-200">
              <ArrowLeft />
            </Link>
            <h1 className="text-3xl text-indigo-600 font-semibold">
              Pembersihan Saluran Air
            </h1>
          </div>
        </div>
        <p className="text-lg text-center w-2/3">
          GAS Solution menyediakan layanan solusi saluran mampet atau drain cleaning profesional untuk memastikan saluran pembuangan anda tetap bersih dan bebas sumbatan. Layanan kami meliputi:
        </p>
        <div>
          <SimpleCard_V5>
            <Image
              src="/images/saluranair.jpg"
              height="1000"
              width="1000"
              className="h-64 w-96 object-cover rounded-sm group-hover/card:shadow-xl"
              alt="Pembersihan Saluran Air"
            />
          </SimpleCard_V5>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <SimpleCard_V5>
            <p className="flex flex-col justify-center items-start text-lg p-5">
              <span className="flex font-semibold text-green-600 gap-2 items-center justify-center">
                <CircleCheck />
                Pembersihan Saluran
              </span>
              Menghilangkan kotoran, minyak, dan sisa material yang menyumbat pipa.
            </p>
          </SimpleCard_V5>

          <SimpleCard_V5>
            <p className="flex flex-col justify-center items-start text-lg p-5">
              <span className="flex font-semibold text-green-600 gap-2 items-center justify-center">
                <CircleCheck />
                Inspeksi Saluran
              </span>
              Memeriksa kondisi pipa dengan peralatan modern untuk mendeteksi masalah.
            </p>
          </SimpleCard_V5>

          <SimpleCard_V5>
            <p className="flex flex-col justify-center items-start text-lg p-5">
              <span className="flex font-semibold text-green-600 gap-2 items-center justify-center">
                <CircleCheck />
                Perbaikan Saluran
              </span>
              Menangani kerusakan atau kebocoran pada saluran pembuangan.
            </p>
          </SimpleCard_V5>

          <SimpleCard_V5>
            <p className="flex flex-col justify-center items-start text-lg p-5">
              <span className="flex font-semibold text-green-600 gap-2 items-center justify-center">
                <CircleCheck />
                Pemeliharaan Berkala
              </span>
              Perawatan rutin untuk mencegah penyumbatan di masa depan.
            </p>
          </SimpleCard_V5>
        </div>

        <p className="flex justify-center items-center text-lg text-center w-2/3">
          Dengan tim berpengalaman dan peralatan canggih, kami melayani klien residensial, komersial, dan industri di Jabodetabek. Hubungi kami untuk layanan cepat dan andal!
        </p>
      </div>
    </main >
  );
}