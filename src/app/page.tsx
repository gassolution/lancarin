"use client"

// Libs
import {
  Link
} from "@nextui-org/react";
import Image from 'next/image';

// UI Libs
import HoverDevCards from "@/components/ui/hover-dev-card";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";

// Font
import { Tilt_Neon, Tilt_Warp } from 'next/font/google';

const tiltwarp = Tilt_Warp({ subsets: ['latin'] });
const tiltneon = Tilt_Neon({ subsets: ['latin'] });

// Icons
import SquishyCard from "@/components/ui/squishy-card";
import { ArrowUpRight, Mail, Phone } from 'lucide-react';
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";

export default function Home() {
  return (
    <>
      <main>
        <div className="overflow-x-hidden flex flex-col items-center justify-center pb-20 gap-12">
          <div className="relative flex flex-col md:flex-row gap-8 items-center sm:py-6 lg:py-10 mt-10 bg-gradient-to-r from-[#00C950] to-[#007D1F]">
            <div className="flex flex-col sm:flex-row gap-y-6 justify-center items-center lg:px-20 lg:py-20 p-16 px-10 sm:px-20 lg:p-40 rounded-xl xl:mx-40">
              <div className="flex flex-col gap-4 md:w-8/12 mt-10 md:mt-0">
                <div
                  className={`${tiltwarp.className} relative text-2xl md:text-3xl xl:text-6xl title-head max-w-7xl mx-auto text-center md:text-left z-10 text-white`}
                >
                  Service AC & Drain Cleaning – Rumah Nyaman, Bebas Masalah!
                </div>
                <div className="flex flex-wrap items-start justify-start">
                  <p
                    className={`${tiltneon.className} flex items-center justify-center body-light tracking-normal cursor-pointer sm:text-md lg:text-lg text-white max-w-lg text-center md:text-left`}
                  >
                    Dari bikin udara sejuk sampai membersihkan pipa mampet, kami pastikan rumah kamu tetap adem dan bebas genangan!
                  </p>
                </div>
                <div className="group flex gap-4 items-center justify-center md:justify-start flex-col sm:flex-row mt-2 sm:mt-4 lg:mt-8">
                  <Link href="/layanan" className={`${tiltneon.className} text-xl gap-2 box-border relative z-30 inline-flex items-center justify-center w-auto px-4 py-2 lg:px-8 lg:py-3 overflow-hidden font-medium text-[#00A63E] transition-all duration-300 bg-gradient-to-b from-white to-gray-200 rounded-full cursor-pointer group ring-offset-2 ring-2 ring-[#00CF0A]/50 ring-offset-[#FFFFFF]/50 hover:ring-offset-[#00CF0A]/50 ease focus:outline-none`} rel="canonical">
                    Layanan Kami
                    <ArrowUpRight className="group-hover:-translate-y-1 transition-all" />
                  </Link>
                </div>
              </div>
              <div className="md:w-4/12">
                <Image
                  src="/images/hero-lancarin.png"
                  width={1000}
                  height={1000}
                  alt="AC Maintenance Picture"
                  className="w-auto h-full"
                />
              </div>
            </div>

          </div>
          <VelocityScroll className={`${tiltwarp.className} text-[#00A63E]`}>Lancarin.</VelocityScroll>

          <HoverDevCards />

          <div className="py-10 flex flex-col justify-center items-center gap-10 p-16 px-10 lg:px-20 xl:px-40 rounded-xl">
            <h2 className={`${tiltwarp.className} text-2xl sm:text-4xl text-center w-full text-[#00A63E]`}>
              Lancarin membantu kamu mengatasi permasalahan home service dengan baik supaya rumah kamu jadi lebih nyaman.
            </h2>

            <div className={`${tiltneon.className} text-md sm:text-xl text-center w-full`}>
              Bingung saluran mampet atasinnya gimana? Cari servis AC di mana? Atau saluran pembuangan? Lancarin Aja!
            </div>
            <div className={`${tiltneon.className} grid grid-cols-1 sm:grid-cols-2 w-full gap-6`}>
              <div className="flex gap-3 text-md sm:text-lg text-justify justify-center items-start text-green-600">
                <div>
                  <IoCheckmarkDoneCircleOutline size={50} />
                </div>
                <p>
                  Layanan mudah dan terjangkau – Kamu gak perlu ribet cari tukang servis atau jasa bersih secara manual, langsung hubungi kami aja!
                </p>
              </div>

              <div className="flex gap-3 text-md sm:text-lg text-justify justify-center items-start text-green-600">
                <div>
                  <IoCheckmarkDoneCircleOutline size={50} />
                </div>
                <p>
                  Saran dan catatan – Teknisi akan beri saran untuk maintenance ataupun permasalahan setelah teknisi datang ke rumah kamu
                </p>
              </div>

              <div className="flex gap-3 text-md sm:text-lg text-justify justify-center items-start text-green-600">
                <div>
                  <IoCheckmarkDoneCircleOutline size={50} />
                </div>
                <p>
                  Layanan cepat dan responsif – Kami paham bahwa masalah di rumah gak bisa nunggu lama. Tim kami siap datang dengan cepat setelah pemesanan.
                </p>
              </div>

              <div className="flex gap-3 text-md sm:text-lg text-justify justify-center items-start text-green-600">
                <div>
                  <IoCheckmarkDoneCircleOutline size={50} />
                </div>
                <p>
                  Garansi Layanan – Kami memberikan garansi untuk setiap layanan yang dikerjakan, jadi kalau ada kendala setelah servis, kami siap bantu tanpa biaya tambahan.
                </p>
              </div>
            </div>
          </div>

          <div className={`${tiltwarp.className} w-full text-green-500 py-10`}>
            <h2 className="text-xl sm:text-3xl text-center">
              Untuk kamu, layanan terjangkau dan komplit!
            </h2>
            <SquishyCard />
          </div>

          <div className={`${tiltwarp.className} flex flex-col gap-10 bg-green-100 lg:py-20 rounded-xl p-16 px-10 lg:px-20 xl:px-40`}>
            <div className="text-xl lg:text-5xl">
              Kami mengutamakan kepuasan pelanggan, demi memberikan pelayanan terbaik
            </div>
            <div className="flex flex-col sm:flex-row gap-10 text-justify justify-center items-center">
              <p className={`${tiltneon.className} text-lg sm:w-2/3`}>
                Lancarin hadir untuk memudahkan perawatan dan perbaikan rumahmu. Kami menyediakan layanan plumbing service, AC service, dan grease trap cleaning untuk residensial, dengan sistem pemesanan yang cepat, teknisi profesional, dan harga yang transparan.

                Kami tahu betapa ribetnya mencari teknisi yang tepat untuk masalah di rumah. Dengan Lancarin, kamu gak perlu lagi repot cari tukang servis secara manual atau khawatir dengan hasil pekerjaan. Cukup hubungi kami, dan tim kami siap datang untuk memberikan solusi terbaik!
              </p>
              <Image
                src={"/images/saluranair.jpg"}
                height={1000}
                width={1000}
                className="h-auto rounded-xl sm:w-1/3"
                alt="Saluran Air"
              />

            </div>
            <div>

            </div>
          </div>

          <div className="w-full flex flex-col items-center justify-center gap-10 px-10 lg:px-20 xl:px-40">
            <h1 className={`${tiltwarp.className} flex gap-4 text-balance text-center justify-center items-center text-green-500 text-2xl sm:text-4xl leading-none tracking-tighter xl:text-6xl`}>
              Saluran Mampet? <br />
              <span className="text-white bg-green-500 rounded-lg w-fit p-4">Lancarin.</span>
              Aja!
            </h1>
            <div className="flex flex-col justify-center items-center border-2 border-green-400 shadow-green-100 shadow-md bg-green-100 p-4 sm:py-6 sm:px-10 rounded-full gap-6">
              <div className={`${tiltneon.className} flex items-center justify-center gap-4 sm:gap-10`}>
                <Link href="https://wa.me/+628111026445" target="_blank" rel="canonical" className="text-green-600 text-xs sm:text-lg flex justify-center items-center gap-2">
                  <Phone /> Hotline: 08111026445
                </Link>
                <Link href="" target="_blank" rel="canonical" className="text-green-600 text-xs sm:text-lg flex justify-center items-center gap-2">
                  <Mail />
                  Email: info@gas-solution.com
                </Link>
              </div>
            </div>

          </div>
        </div>
      </main >
    </>
  );
}