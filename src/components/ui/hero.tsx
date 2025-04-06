"use client";

import React, { useEffect, useState } from "react";
import { Link } from "@nextui-org/react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { useMobile } from "@/components/ui/hooks/useMobile";

import CarouselMobile from "@/components/ui/carouselMobile";

//image
import Image from "next/image";
import PlumberGreen from "@/assets/plumberGreen-transparent.png";
import AuliaPutri from "@/assets/auliaPutri.jpg";
import RizkyPratama from "@/assets/rizkyPratama.jpg";
import DewiAnanda from "@/assets/dewiAnanda.jpg";
import FahriRamadhan from "@/assets/fahriRamadhan.jpg";
import SintaWulandari from "@/assets/sintaWulandari.jpg";

//font
import { Tilt_Neon, Tilt_Warp } from "next/font/google";

const tiltwarp = Tilt_Warp({ subsets: ["latin"] });
const tiltneon = Tilt_Neon({ subsets: ["latin"] });

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}

// Add after imports
const animationStyles = `
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
  
  .animate-scroll {
    animation: scroll 60s linear infinite;
  }
  
  .animate-pause {
    animation-play-state: paused;
  }
`;

export default function HeroWithTestimonials() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Siti Rohmah",
      role: "Ibu Rumah Tangga",
      content:
        "Dulu tiap cuci piring pasti drama, wastafel mampet terus airnya lama surutnya. Udah coba bersihin sendiri tapi nggak ngaruh. Akhirnya coba panggil jasa dari Lancarin dan beneran puas. Teknisi datang tepat waktu, kerjanya rapi, dan nggak butuh waktu lama. Sekarang nggak ada lagi drama wastafel mampet. Buat ibu-ibu yang sering ngalamin kayak saya, ini wajib coba!!",
      avatar: `${AuliaPutri.src}?height=80&width=80`,
      rating: 5,
    },
    {
      id: 2,
      name: "Budi Santoso",
      role: "Kepala Keluarga & Karyawan Swasta",
      content:
        "Pulang kerja udah capek, pengennya langsung istirahat, eh AC malah mati total. Pikirannya udah ribet duluan cari tukang service yang cepat. Iseng cari di internet, nemu Lancarin, langsung booking, dan ternyata servicenya super profesional. Teknisi datang tepat waktu, kerja cepat, dan AC langsung dingin lagi. Istri senang, anak-anak nyaman, saya pun lega",
      avatar: `${RizkyPratama.src}?height=80&width=80`,
      rating: 5,
    },
    {
      id: 3,
      name: "Rina Kusuma",
      role: "Freelancer",
      content:
        "Kerjaan numpuk, deadline mepet, eh kamar mandi mampet. Panik sih, apalagi ini pertama kalinya gue ngalamin begini. Untung temen kasih rekomendasi Lancarin, langsung coba pesen, dan nggak nyangka servicenya secepet itu! Teknisi ramah, kasih solusi jelas, dan langsung beres. Sekarang bisa kerja tanpa kepikiran masalah kamar mandi lagi. Fix gue sih bakal langganan!!",
      avatar: `${DewiAnanda.src}?height=80&width=80`,
      rating: 5,
    },
    {
      id: 4,
      name: "Fahri Ramadhan",
      role: "Mahasiswa",
      content:
        "Anak kost mana sempet ngurus beginian? WC mampet, udah panik harus cari tukang sendiri, takut harganya mahal juga. Untung temen kasih tau Lancarin, tinggal pesen via HP, nggak pake ribet nego harga atau cari-cari tukang sendiri. Teknisi datang, cek masalah, benerin, beres deh! Udah kayak penyelamat buat anak kost yang nggak mau ribet!!",
      avatar: `${FahriRamadhan.src}?height=80&width=80`,
      rating: 5,
    },
    {
      id: 5,
      name: "Sinta Wulandari",
      role: "Pemilik restoran",
      content:
        "Punya usaha kecil di rumah, jadi kalau AC rusak tuh langsung berasa dampaknya. Pelanggan jadi nggak nyaman, kerjaan juga nggak fokus. Akhirnya coba pakai Lancarin dan jujur ini solusi terbaik! Bookingnya gampang, teknisi datang tepat waktu, dan kerjaannya rapi. AC langsung normal lagi, pelanggan happy, bisnis tetap jalan. Pasti bakal pakai lagi kalau butuh!",
      avatar: `${SintaWulandari.src}?height=80&width=80`,
      rating: 5,
    },
  ];

  // Keep only these state variables
  const [isPaused, setIsPaused] = useState(false);

  const [, setCurrentIndex] = useState(0);
  const isMobile = useMobile();

  useEffect(() => {
    if (!isMobile) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isMobile, testimonials.length]);

  return (
    <>
      <style jsx global>
        {animationStyles}
      </style>
      <section className="relative overflow-hidden bg-gradient-to-r from-[#00C950] to-[#007D1F] py-24 sm:py-12 md:py-20">
        <div className="container px-4 sm:px-6 md:px-4 relative z-10 mt-0 sm:mt-2 md:mt-5">
          {/* Top section with logo and content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
            {/* Left side - Text content */}
            <div className="flex flex-col justify-center items-center text-center space-y-4 sm:space-y-6 md:space-y-8 pl-0 sm:pl-4 md:pl-8 lg:pl-12">
              <div className="space-y-4 sm:space-y-6 max-w-xl w-full px-20 sm:px-0">
                <h1
                  className={`${tiltwarp.className} relative text-xl sm:text-2xl md:text-4xl xl:text-6xl title-head text-center md:text-left z-10 text-white leading-tight sm:leading-snug md:leading-relaxed`}
                  style={{ lineHeight: "1.2" }}
                >
                  Service AC & Pipa Mampet
                  <br className="block" /> {/* Force line break on mobile */}
                  <span className="block sm:inline">
                    {" "}
                    {/* Make inline on desktop */}
                    Rumah{" "}
                    <TypeAnimation
                      sequence={[
                        "Nyaman",
                        2000,
                        "Bersih",
                        2000,
                        "Terawat!",
                        2000,
                        "",
                        500,
                      ]}
                      wrapper="span"
                      speed={50}
                      style={{ color: "#FFD700" }} // Bright gold color
                      repeat={Infinity}
                      cursor={true}
                    />
                  </span>
                </h1>
                <p
                  className={`${tiltneon.className} text-white text-muted-foreground text-sm sm:text-base md:text-xl text-center sm:text-left`}
                  style={{ marginBottom: "1rem" }}
                >
                  Dari bikin udara sejuk sampai membersihkan pipa mampet, kami
                  pastikan rumah kamu tetap adem dan bebas genangan!
                </p>
              </div>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 sm:gap-4">
                <Link
                  href="/layanan"
                  rel="canonical"
                  className="w-full sm:w-auto"
                >
                  <Button
                    size="lg"
                    className={`${tiltwarp.className} w-full sm:w-auto px-2 sm:px-6 md:px-8 py-1 sm:py-3 md:py-4 text-xs sm:text-base bg-white text-green-500 hover:bg-green-600 hover:text-white transition-colors`}
                  >
                    Layanan Kami
                    <ArrowRight className="ml-1 sm:ml-2 h-3 sm:h-4 w-3 sm:w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right side - Logo and featured testimonial */}
            <div className="hidden lg:flex flex-col items-center justify-start">
              {/* Logo placeholder */}
              <div className="w-full flex justify-center">
                <div className="flex items-center justify-center">
                  <Image
                    src={PlumberGreen}
                    alt="Company Logo"
                    width={300}
                    height={300}
                    className="object-contain md:max-w-md"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom section - Carousel */}
          {!isMobile && (
            <div
              className="w-full mt-8 sm:mt-10 md:mt-12 overflow-hidden rounded-lg bg-blue-50/50 p-2 sm:p-3"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="overflow-hidden">
                <div
                  className={`flex animate-scroll transition-all ${
                    isPaused ? "animate-pause" : ""
                  }`}
                  style={{
                    width: `${testimonials.length * 100 * 2}%`,
                  }}
                >
                  {/* First set of testimonials */}
                  {testimonials.map((testimonial) => (
                    <div
                      key={`first-${testimonial.id}`}
                      className="w-full flex-shrink-0 px-2 sm:px-4"
                      style={{ width: `${100 / (testimonials.length * 4)}%` }}
                    >
                      <div className="flex flex-col bg-white rounded-lg shadow-sm p-1.5 sm:p-2 h-full">
                        <div className="flex items-center space-x-2 mb-1">
                          <Image
                            src={testimonial.avatar || "/placeholder.svg"}
                            alt={testimonial.name}
                            width={30}
                            height={30}
                            className="rounded-full w-8 h-8 sm:w-[30px] sm:h-[30px]"
                          />
                          <div>
                            <h3 className="font-semibold text-xs sm:text-sm">
                              {testimonial.name}
                            </h3>
                            <p className="text-[9px] sm:text-[10px] text-muted-foreground">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                        <div className="flex mb-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-1.5 w-1.5 sm:h-2 sm:w-2 ${
                                i < testimonial.rating
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <blockquote className="text-black text-[10px] sm:text-xs line-clamp-3">
                          {testimonial.content}
                        </blockquote>
                      </div>
                    </div>
                  ))}

                  {/* Duplicate set for infinite scrolling */}
                  {testimonials.map((testimonial) => (
                    <div
                      key={`second-${testimonial.id}`}
                      className="w-full flex-shrink-0 px-2 sm:px-4"
                      style={{ width: `${100 / (testimonials.length * 4)}%` }}
                    >
                      <div className="flex flex-col bg-white rounded-lg shadow-sm p-1.5 sm:p-2 h-full">
                        <div className="flex items-center space-x-2 mb-1">
                          <Image
                            src={testimonial.avatar || "/placeholder.svg"}
                            alt={testimonial.name}
                            width={30}
                            height={30}
                            className="rounded-full w-8 h-8 sm:w-[30px] sm:h-[30px]"
                          />
                          <div>
                            <h3 className="font-semibold text-xs sm:text-sm">
                              {testimonial.name}
                            </h3>
                            <p className="text-[9px] sm:text-[10px] text-muted-foreground">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                        <div className="flex mb-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-1.5 w-1.5 sm:h-2 sm:w-2 ${
                                i < testimonial.rating
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <blockquote className="text-black text-[10px] sm:text-xs line-clamp-3">
                          {testimonial.content}
                        </blockquote>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {isMobile && <CarouselMobile />}
        </div>
      </section>
    </>
  );
}
