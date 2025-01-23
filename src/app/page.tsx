"use client"

// Libs
import {
  Link
} from "@nextui-org/react";
import "animate.css/animate.compat.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from 'next/image';
import { useEffect } from "react";

// UI Libs
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { HeroParallax } from "@/components/ui/hero-parallax";

// Font
import { Outfit } from 'next/font/google';

const outfit = Outfit({ subsets: ['latin'] })

// Icons
import { LineShadowText } from "@/components/ui/line-shadow-text";
import NumberTicker from "@/components/ui/number-ticker";
import { MoveRight, Phone, Waves, Wrench } from 'lucide-react';

// Constructor
const gallery = [
  {
    title: "Grease Trap",
    link: "#",
    thumbnail:
      "/images/onfield-3.jpg",
  },
  {
    title: "Kunjungan",
    link: "#",
    thumbnail:
      "/images/onfield-2.jpg",
  },
  {
    title: "Persiapan Teknisi",
    link: "#",
    thumbnail:
      "/images/onfield-1.jpg",
  },

  {
    title: "Teknisi On Field",
    link: "#",
    thumbnail:
      "/images/onfield-4.jpg",
  },
  {
    title: "Perawatan Grease Trap",
    link: "#",
    thumbnail:
      "/images/onfield-3.jpg",
  },
  {
    title: "Kunjungan SMK",
    link: "#",
    thumbnail:
      "/images/onfield-2.jpg",
  },

  {
    title: "Teknisi PT GAS",
    link: "#",
    thumbnail:
      "/images/onfield-1.jpg",
  },
  {
    title: "Teknisi PT GAS On Field",
    link: "#",
    thumbnail:
      "/images/onfield-4.jpg",
  },
  {
    title: "Grease Trap Service",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "/images/onfield-3.jpg",
  },
  {
    title: "Kunjungan Acara",
    link: "https://smartbridgetech.com",
    thumbnail:
      "/images/onfield-2.jpg",
  },
  {
    title: "Teknisi GAS Solution",
    link: "https://renderwork.studio",
    thumbnail:
      "/images/onfield-1.jpg",
  },
];

export default function Home() {

  useEffect(() => {
    AOS.init({})
  }, [])

  return (
    <main>
      <div className="overflow-x-hidden flex flex-col items-center justify-center p-8 pb-20 gap-16 sm:p-20 rounded-xl xl:mx-20">
        <div className="relative flex flex-col md:flex-row gap-8 items-center sm:py-6 lg:py-10">
          <div className="flex flex-col gap-4 md:w-4/6 mt-10 md:mt-0 sm:px-0 lg:py-10">
            <div
              className={`${outfit.className} relative font-bold text-2xl md:text-3xl xl:text-6xl title-head max-w-7xl mx-auto text-center md:text-left z-10 text-indigo-600`}
            >
              Solusi Terbaik Plumbing Service, Grease Trap, dan AC Service
            </div>
            <div className="flex flex-wrap items-start justify-start">
              <p
                className={`${outfit.className} flex items-center justify-center body-light tracking-normal cursor-pointer sm:text-md lg:text-lg text-black max-w-lg text-center md:text-left`}
              >
                Mendukung perusahaan dan perumahan dengan engineering service kami di daerah Jabodetabek dengan kualitas terjaga dan layanan tanpa batas!
              </p>
            </div>
            <div className="flex gap-4 items-center justify-center md:justify-start flex-col sm:flex-row mt-2 sm:mt-4 lg:mt-8">
              <Link href="https://wa.me/+628111026445" className={`${outfit.className} gap-2 box-border relative z-30 inline-flex items-center justify-center w-auto px-2 py-2 lg:px-8 lg:py-3 overflow-hidden font-medium text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none`}>
                <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                <span className="relative z-20 flex items-center sm:text-md lg:text-lg">
                  <Phone className="mr-2" />
                  Hubungi Kami
                </span>
              </Link>
              <Link href="/service" className={`${outfit.className} gap-2 box-border relative z-30 inline-flex items-center justify-center w-auto px-2 py-2 lg:px-8 lg:py-3 overflow-hidden font-medium text-indigo-600 transition-all duration-300 bg-white rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-500 ring-offset-indigo-400 hover:ring-offset-indigo-500 ease focus:outline-none`}>
                <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                <span className="relative z-20 flex items-center sm:text-md lg:text-lg">
                  <Wrench className="mr-2" />
                  Layanan Kami
                </span>
              </Link>
            </div>
          </div>

          <div className="md:w-2/6">
            <Image
              src="/images/heropicture.png"
              width={1000}
              height={1000}
              alt="AC Maintenance Picture"
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-2 md:gap-6">
          <CardContainer className={`${outfit.className}`}>
            <CardBody className="bg-gray-50 relative sm:flex lg:block group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border  ">
              <div className="sm:w-4/6 lg:w-full">
                <CardItem
                  translateZ="50"
                  className="text-lg lg:text-xl xl:text-2xl font-bold items-center justify-center text-indigo-600 inline-flex"
                >
                  <Waves className="mr-2" />
                  Pembersihan Saluran Air
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-black text-sm lg:text-md w-full mt-2"
                >
                  Jasa drain cleaning dari GAS Solution bertujuan untuk memberikan solusi perawatan gedung untuk saluran mampet yang efektif dan berkelanjutan dalam menjaga kebersihan dan kelancaran sistem pipa dan drainase pelanggan kami.
                </CardItem>
              </div>

              <div className="sm:w-2/6 lg:w-full">
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src="/images/saluranair.jpg"
                    height="1000"
                    width="1000"
                    className="aspect-video w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex justify-end items-center mt-6 xl:mt-10">
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="inline-flex items-center justify-center px-4 py-2 font-medium"
                  >
                    <Link href="/service" className="text-indigo-600 text-sm lg:text-lg">
                      Selengkapnya
                      <MoveRight className="ml-2" />
                    </Link>
                  </CardItem>
                </div>
              </div>
            </CardBody>
          </CardContainer>

          <CardContainer className={`${outfit.className}`}>
            <CardBody className="bg-gray-50 relative sm:flex lg:block group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border  ">
              <div className="sm:w-4/6 lg:w-full">
                <CardItem
                  translateZ="50"
                  className="text-lg lg:text-xl xl:text-2xl font-bold items-center justify-center text-amber-500 inline-flex"
                >
                  <Waves className="mr-2" />
                  Perawatan Grease Trap
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-black text-sm lg:text-md w-full mt-2"
                >
                  GAS Solution menawarkan layanan perawatan grease trap profesional untuk memastikan sistem limbah dapur Anda tetap bersih dan berfungsi optimal.
                </CardItem>
              </div>

              <div className="sm:w-2/6 lg:w-full">
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src="/images/greasetrap.jpg"
                    height="1000"
                    width="1000"
                    className="aspect-video w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex justify-end items-center mt-6 xl:mt-10">
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="inline-flex items-center justify-center px-4 py-2 font-medium"
                  >
                    <Link href="/service" className="text-amber-500 text-sm lg:text-lg">
                      Selengkapnya
                      <MoveRight className="ml-2" />
                    </Link>
                  </CardItem>
                </div>
              </div>
            </CardBody>
          </CardContainer>

          <CardContainer className={`${outfit.className}`}>
            <CardBody className="bg-gray-50 relative sm:flex lg:block group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border  ">
              <div className="sm:w-4/6 lg:w-full">
                <CardItem
                  translateZ="50"
                  className="text-lg lg:text-xl xl:text-2xl font-bold items-center justify-center text-green-600 inline-flex"
                >
                  <Waves className="mr-2" />
                  AC Maintenance
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-black text-sm lg:text-md w-full mt-2"
                >
                  Tidak hanya dalam plumbing services, GAS Solution juga menyediakan jasa&nbsp;AC Maintenance&nbsp;untuk industri yang membutuhkan pendinginan konstan, seperti; perkantoran atau fasilitas komersial lainnya.
                </CardItem>
              </div>

              <div className="sm:w-2/6 lg:w-full">
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src="/images/acmaintenance.jpg"
                    height="1000"
                    width="1000"
                    className="aspect-video w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex justify-end items-center mt-6 xl:mt-10">
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="inline-flex items-center justify-center px-4 py-2 font-medium"
                  >
                    <Link href="/service" className="text-green-600 text-sm lg:text-lg">
                      Selengkapnya
                      <MoveRight className="ml-2" />
                    </Link>
                  </CardItem>
                </div>
              </div>
            </CardBody>
          </CardContainer>
        </div>

        <div className={`${outfit.className} bg-sky-100 p-8 lg:p-20 rounded-xl`}>
          <div className="text-xl lg:text-5xl font-semibold max-w-2xl">
            Kami mengutamakan kepuasan pelanggan, demi memberikan pelayanan terbaik
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 mt-10 items-start justify-between gap-4">
            <div className="flex flex-col gap-4">
              <div className={`${outfit.className} text-7xl lg:text-8xl`}>
                <NumberTicker value={20} /><span className="text-3xl">tahun</span>
              </div>
              <div className="text-xl lg:text-3xl font-semibold">
                Pengalaman
              </div>
              <div className="text-md lg:text-lg">
                Kami sudah bergerak 20 tahun di bidang plumbing service
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className={`${outfit.className} text-7xl lg:text-8xl`}>
                <NumberTicker value={29} />+
              </div>
              <div className="text-xl lg:text-3xl font-semibold">
                Klien
              </div>
              <div className="text-lg">
                Kami telah melayani berbagai klien perusahaan dan dipercaya hotel bintang lima, mall, perkantoran, dan klien retail
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className={`${outfit.className} text-7xl lg:text-8xl`}>
                <NumberTicker value={40} />+
              </div>
              <div className="text-xl lg:text-3xl font-semibold">
                Teknisi
              </div>
              <div className="text-lg">
                Lebih dari 40 teknisi berpengalaman yang siap membantu Anda
              </div>
            </div>
            <div>

            </div>
          </div>
        </div>

        <div className="w-full">
          <HeroParallax products={gallery} />
        </div>

        <div>
          <div className={`${outfit.className} text-2xl sm:text-3xl font-semibold text-center text-black`}>
            Klien Kami
          </div>
          <div className="py-14">
            <div className="mx-auto">
              <div className="flex justify-center">
                <ul className="inline-grid gap-x-10 gap-y-6 md:gap-x-16 grid-cols-3 lg:grid-cols-6">
                  <li className="flex justify-center items-center">
                    <Image
                      src="/logos/lippomall.png"
                      width={1000}
                      height={1000}
                      alt="Lippo Mall Logo"
                      className="w-32 h-auto"
                    />
                  </li>

                  <li className="flex justify-center items-center">
                    <Image
                      src="/logos/pikavenue.png"
                      width={1000}
                      height={1000}
                      alt="PIK Avenue Logo"
                      className="w-32 h-auto"
                    />
                  </li>

                  <li className="flex justify-center items-center">
                    <Image
                      src="/logos/blokmsquare.png"
                      width={1000}
                      height={1000}
                      alt="Blok M Square Logo"
                      className="w-32 h-auto"
                    />
                  </li>

                  <li className="flex justify-center items-center">
                    <Image
                      src="/logos/hotelborobudur.jpg"
                      width={1000}
                      height={1000}
                      alt="Hotel Borobudur Logo"
                      className="w-32 h-auto"
                    />
                  </li>

                  <li className="flex justify-center items-center">
                    <Image
                      src="/logos/grandwhizhotel.png"
                      width={1000}
                      height={1000}
                      alt="Grand Whiz Hotel Logo"
                      className="w-32 h-auto"
                    />
                  </li>

                  <li className="flex justify-center items-center">
                    <Image
                      src="/logos/muliagroup.jpg"
                      width={1000}
                      height={1000}
                      alt="Mulia Group Logo"
                      className="w-32 h-auto"
                    />
                  </li>

                  <li className="flex justify-center items-center">
                    <Image
                      src="/logos/aryaduta.jpg"
                      width={1000}
                      height={1000}
                      alt="Aryaduta Logo"
                      className="w-32 h-auto"
                    />
                  </li>

                  <li className="flex justify-center items-center">
                    <Image
                      src="/logos/jsluwansa.png"
                      width={1000}
                      height={1000}
                      alt="JS Luwansa Logo"
                      className="w-32 h-auto"
                    />
                  </li>
                  <li className="flex justify-center items-center">
                    <Image
                      src="/logos/thamrinnine.png"
                      width={1000}
                      height={1000}
                      alt="Thamrin Nine Logo"
                      className="w-32 h-auto"
                    />
                  </li>
                  <li className="flex justify-center items-center">
                    <Image
                      src="/logos/westin.png"
                      width={1000}
                      height={1000}
                      alt="Westin Logo"
                      className="w-32 h-auto"
                    />
                  </li>
                  <li className="flex justify-center items-center">
                    <Image
                      src="/logos/jwmarriott.png"
                      width={1000}
                      height={1000}
                      alt="JW Marriott Logo"
                      className="w-32 h-auto"
                    />
                  </li>
                  <li className="flex justify-center items-center">
                    <Image
                      src="/logos/theritzcarlton.png"
                      width={1000}
                      height={1000}
                      alt="The Ritz Carlton Logo"
                      className="w-32 h-auto"
                    />
                  </li>
                  <li className="flex justify-center items-center">
                    <Image
                      src="/logos/pullman.png"
                      width={1000}
                      height={1000}
                      alt="Pullman Logo"
                      className="w-32 h-auto"
                    />
                  </li>
                  <li className="flex justify-center items-center">
                    <Image
                      src="/logos/jababeka.png"
                      width={1000}
                      height={1000}
                      alt="Jababeka Logo"
                      className="w-32 h-auto"
                    />
                  </li>
                  <li className="flex justify-center items-center">
                    <Image
                      src="/logos/fourseasons.jpg"
                      width={1000}
                      height={1000}
                      alt="Four Seasons Logo"
                      className="w-32 h-auto"
                    />
                  </li>
                  <li className="flex justify-center items-center">
                    <Image
                      src="/logos/mondelez.svg"
                      width={1000}
                      height={1000}
                      alt="Mondelez Logo"
                      className="w-32 h-auto"
                    />
                  </li>
                  <li className="flex justify-center items-center">
                    <Image
                      src="/logos/bcasyariah.svg"
                      width={1000}
                      height={1000}
                      alt="BCA Syariah Logo"
                      className="w-32 h-auto"
                    />
                  </li>
                  <li className="flex justify-center items-center">
                    <Image
                      src="/logos/toyoplas.png"
                      width={1000}
                      height={1000}
                      alt="Toyoplas Logo"
                      className="w-32 h-auto"
                    />
                  </li>
                  <li className="flex justify-center items-center">
                    <Image
                      src="/logos/kalbe.png"
                      width={1000}
                      height={1000}
                      alt="Kalbe Logo"
                      className="w-32 h-auto"
                    />
                  </li>
                  <li className="flex justify-center items-center">
                    <Image
                      src="/logos/sariroti.png"
                      width={1000}
                      height={1000}
                      alt="Sari Roti Logo"
                      className="w-32 h-auto"
                    />
                  </li>
                  <li className="flex justify-center items-center">
                    <Image
                      src="/logos/indofood.png"
                      width={1000}
                      height={1000}
                      alt="Indofood Logo"
                      className="w-32 h-auto"
                    />
                  </li>
                  <li className="flex justify-center items-center">
                    <Image
                      src="/logos/solaria.png"
                      width={1000}
                      height={1000}
                      alt="Solaria Logo"
                      className="w-32 h-auto"
                    />
                  </li>
                  <li className="flex justify-center items-center">
                    <Image
                      src="/logos/dominos.png"
                      width={1000}
                      height={1000}
                      alt="Domino's Pizza Logo"
                      className="w-32 h-auto"
                    />
                  </li>
                  <li className="flex justify-center items-center">
                    <Image
                      src="/logos/burgerking.png"
                      width={1000}
                      height={1000}
                      alt="Burger King Logo"
                      className="w-32 h-auto"
                    />
                  </li>
                  <li className="flex justify-center items-center">
                    <Image
                      src="/logos/starbucks.png"
                      width={1000}
                      height={1000}
                      alt="Starbucks Logo"
                      className="w-32 h-auto"
                    />
                  </li>
                  <li className="flex justify-center items-center">
                    <Image
                      src="/logos/genkisushi.png"
                      width={1000}
                      height={1000}
                      alt="Genki Sushi Logo"
                      className="w-32 h-auto"
                    />
                  </li>
                  <li className="flex justify-center items-center">
                    <Image
                      src="/logos/exedy.png"
                      width={1000}
                      height={1000}
                      alt="Exedy Logo"
                      className="w-32 h-auto"
                    />
                  </li>
                  <li className="flex justify-center items-center">
                    <Image
                      src="/logos/denso.png"
                      width={1000}
                      height={1000}
                      alt="Denso Logo"
                      className="w-32 h-auto"
                    />
                  </li>
                  <li className="flex justify-center items-center">
                    <Image
                      src="/logos/yamaha.png"
                      width={1000}
                      height={1000}
                      alt="Yamaha Logo"
                      className="w-32 h-auto"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col items-center justify-center gap-10">
          <h1 className={`${outfit.className} text-balance text-center text-3xl sm:text-5xl font-semibold leading-none tracking-tighter md:text-6xl`}>
            Saluran Mampet? <br />
            <LineShadowText className="italic" shadowColor={"black"}>
              GAS
            </LineShadowText>
            -in Aja!
          </h1>
          <div className="flex flex-col justify-center items-center border-2 border-indigo-400 shadow-md bg-sky-100 p-4 sm:p-10 rounded-xl gap-6">
            <div className={`${outfit.className} flex items-center justify-center gap-4 sm:gap-10`}>
              <div className="text-indigo-600 text-md sm:text-lg font-medium">
                Hotline: 08111026445
              </div>
              <div className="text-indigo-600 text-md sm:text-lg font-medium">
                Email: info@gas-solution.com
              </div>
            </div>
            <Link href="https://wa.me/+628111026445" className={`${outfit.className} gap-2 box-border relative z-30 inline-flex items-center justify-center w-full px-8 py-3 overflow-hidden font-medium text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none`}>
              <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
              <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
              <span className="relative z-20 flex items-center text-2xl">
                <Phone className="mr-2" />
                Hubungi Kami
              </span>
            </Link>
          </div>
        </div>
      </div>
    </main >
  );
}