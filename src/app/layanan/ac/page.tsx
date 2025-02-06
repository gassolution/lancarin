"use client"

// Libs
import "animate.css/animate.compat.css";
import "aos/dist/aos.css";
import Image from 'next/image';

// UI Libs

// Font
import { ArrowLeft, CircleCheck } from "lucide-react";
import { Outfit } from 'next/font/google';
import Head from "next/head";
import Link from "next/link";
import { SimpleCard_V5 } from '../../../components/ui/cardv5';

const outfit = Outfit({ subsets: ['latin'] })

// Icons

export default function AC() {

  return (
    <>
      <Head>
        <title>Jasa Servis AC | Lancarin</title>
        <meta name="description" content="GAS Solution menyediakan layanan perawatan AC residential profesional untuk memastikan kenyamanan maksimal." />
      </Head>
      <main>
        <div className={`${tiltwarp.className} overflow-x-hidden flex flex-col items-center justify-center p-8 pb-20 gap-8 sm:p-20 rounded-xl xl:mx-20`}>
          <div className="w-full flex flex-col items-start justify-center border rounded-full gap-4 p-3 mt-10">
            <div className="flex items-center justify-center gap-8">
              <Link href={"/service"} className="bg-indigo-600 hover:bg-indigo-700 transition-all text-white rounded-full text-4xl lg:text-8xl p-2 lg:p-3 border-4 border-indigo-200" rel="canonical" aria-label="Service">
                <ArrowLeft />
              </Link>
              <h2 className="text-xl lg:text-3xl text-indigo-600">
                AC Maintenance
              </h2>
            </div>
          </div>
          <p className="text-md md:text-lg text-center w-full md:w-2/3">
            Lancarin menyediakan layanan perawatan AC residential profesional untuk memastikan kenyamanan maksimal. Layanan kami meliputi:
          </p>
          <div>
            <SimpleCard_V5>
              <Image
                src="/images/acmaintenance.jpg"
                height={1000}
                width={1000}
                className="h-64 w-96 object-cover rounded-sm group-hover/card:shadow-xl"
                alt="AC Maintenance"
              />
            </SimpleCard_V5>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <SimpleCard_V5>
              <p className="flex flex-col justify-center items-start text-lg p-5">
                <span className="flex text-green-600 gap-2 items-center justify-center">
                  <CircleCheck />
                  Pembersihan AC
                </span>
                Membersihkan unit indoor dan outdoor untuk menjaga aliran udara dan mencegah bau tidak sedap.
              </p>
            </SimpleCard_V5>

            <SimpleCard_V5>
              <p className="flex flex-col justify-center items-start text-lg p-5">
                <span className="flex text-green-600 gap-2 items-center justify-center">
                  <CircleCheck />
                  Pengecekan & Pemeliharaan
                </span>
                Memeriksa tekanan freon, saluran drainase, dan komponen utama untuk mendeteksi potensi kerusakan.
              </p>
            </SimpleCard_V5>

            <SimpleCard_V5>
              <p className="flex flex-col justify-center items-start text-lg p-5">
                <span className="flex text-green-600 gap-2 items-center justify-center">
                  <CircleCheck />
                  Pengisian Freon
                </span>
                Mengisi atau mengganti freon sesuai standar.
              </p>
            </SimpleCard_V5>

            <SimpleCard_V5>
              <p className="flex flex-col justify-center items-start text-lg p-5">
                <span className="flex text-green-600 gap-2 items-center justify-center">
                  <CircleCheck />
                  Perbaikan AC
                </span>
                Menangani kerusakan seperti kebocoran freon, masalah kelistrikan, atau kompresor.
              </p>
            </SimpleCard_V5>

            <SimpleCard_V5>
              <p className="flex flex-col justify-center items-start text-lg p-5">
                <span className="flex text-green-600 gap-2 items-center justify-center">
                  <CircleCheck />
                  Instalasi & Relokasi
                </span>
                Pemasangan unit baru dan pemindahan AC dengan instalasi ulang yang tepat.
              </p>
            </SimpleCard_V5>
          </div>

          <p className="flex justify-center items-center text-lg text-center w-full md:w-2/3">
            Dengan tim teknisi berpengalaman dan layanan cepat, kami siap melayani properti perumahan hingga komersial di Jabodetabek. Hubungi kami untuk jadwal atau konsultasi!
          </p>
        </div>
      </main >
    </>
  );
}