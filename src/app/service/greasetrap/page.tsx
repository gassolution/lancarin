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

export default function GreaseTrap() {

  return (
    <>
      <Head>
        <title>Jasa Perawatan Grease Trap</title>
        <meta name="description" content="GAS Solution menawarkan layanan perawatan grease trap profesional untuk memastikan sistem limbah dapur Anda tetap bersih dan berfungsi optimal." />
        <meta name="keywords" content="PT Gama Abyakta Sejahtera, sedot wc, jasa sedot wc, jasa saluran mampet, saluran mampet, jasa saluran mampet terdekat, jasa saluran mampet bekasi, alat pendorong saluran mampet, cara menggunakan soda api untuk saluran mampet, tukang saluran mampet, cara pakai soda api untuk saluran mampet, jasa saluran mampet jogja, jasa saluran mampet bandung, saluran mampet jogja, jasa saluran mampet jakarta, plumbing adalah, apa itu plumbing, pekerjaan plumbing, instalasi plumbing air bersih, sistem plumbing gedung bertingkat, plumbing air bersih, sistem plumbing adalah, mechanical electrical plumbing adalah, pekerjaan plumbing adalah, plumbness adalah, grease trap adalah, apa itu grease trap, cara membersihkan grease trap, cara kerja grease trap, biaya servis ac rumah, cara servis ac rumah, sedot wc terdekat, sedot wc jakarta" />
        <meta name="author" content="PT Gama Abyakta Sejahtera" />
        <meta property="og:title" content="Jasa Perawatan Grease Trap" />
        <meta property="og:description" content="GAS Solution menawarkan layanan perawatan grease trap profesional untuk memastikan sistem limbah dapur Anda tetap bersih dan berfungsi optimal." />
        <meta property="og:image" content="/images/greasetrap.jpg" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main>
        <div className={`${outfit.className} overflow-x-hidden flex flex-col items-center justify-center p-8 pb-20 gap-8 sm:p-20 rounded-xl xl:mx-20`}>
          <div className="w-full flex flex-col items-start justify-center border rounded-full gap-4 p-3 mt-10">
            <div className="flex items-center justify-center gap-8">
              <Link href={"/service"} className="bg-indigo-600 hover:bg-indigo-700 transition-all text-white rounded-full text-4xl lg:text-8xl p-2 lg:p-3 border-4 border-indigo-200">
                <ArrowLeft />
              </Link>
              <h1 className="text-xl lg:text-3xl text-indigo-600 font-semibold">
                Perawatan Grease Trap
              </h1>
            </div>
          </div>
          <p className="text-md md:text-lg text-center w-full md:w-2/3">
            GAS Solution menawarkan layanan perawatan grease trap profesional untuk memastikan sistem limbah dapur Anda tetap bersih dan berfungsi optimal. Layanan kami meliputi:
          </p>
          <div>
            <SimpleCard_V5>
              <Image
                src="/images/greasetrap.jpg"
                height="100"
                width="100"
                className="h-64 w-96 object-cover rounded-sm group-hover/card:shadow-xl"
                alt="Perawatan Grease Trap"
              />
            </SimpleCard_V5>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <SimpleCard_V5>
              <p className="flex flex-col justify-center items-start text-lg p-5">
                <span className="flex font-semibold text-green-600 gap-2 items-center justify-center">
                  <CircleCheck />
                  Pembersihan & Pengurasan
                </span>
                Menghilangkan lemak, minyak, dan sisa makanan yang terakumulasi.
              </p>
            </SimpleCard_V5>

            <SimpleCard_V5>
              <p className="flex flex-col justify-center items-start text-lg p-5">
                <span className="flex font-semibold text-green-600 gap-2 items-center justify-center">
                  <CircleCheck />
                  Pengecekan Saluran
                </span>
                Memastikan saluran masuk dan keluar grease trap bebas sumbatan.
              </p>
            </SimpleCard_V5>

            <SimpleCard_V5>
              <p className="flex flex-col justify-center items-start text-lg p-5">
                <span className="flex font-semibold text-green-600 gap-2 items-center justify-center">
                  <CircleCheck />
                  Perbaikan & Penggantian
                </span>
                Menangani kerusakan pada komponen grease trap.
              </p>
            </SimpleCard_V5>

            <SimpleCard_V5>
              <p className="flex flex-col justify-center items-start text-lg p-5">
                <span className="flex font-semibold text-green-600 gap-2 items-center justify-center">
                  <CircleCheck />
                  Pengelolaan Limbah
                </span>
                Limbah dikelola sesuai standar lingkungan.
              </p>
            </SimpleCard_V5>
          </div>

          <p className="flex justify-center items-center text-lg text-center w-full md:w-2/3">
            Kami melayani properti komersial dan residensial di Jabodetabek dengan tim ahli dan layanan cepat. Hubungi kami untuk jadwal perawatan!
          </p>
        </div>
      </main >
    </>
  );
}