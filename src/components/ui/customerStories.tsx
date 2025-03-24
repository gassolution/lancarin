"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
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
  age: number;
  title: string;
  quote: string;
  avatar: string;
}

export default function CustomerSuccessStories() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Siti Rohmah",
      age: 38,
      title: "Ibu Rumah Tangga",
      quote:
        "Dulu tiap cuci piring pasti drama, wastafel mampet terus airnya lama surutnya. Udah coba bersihin sendiri tapi nggak ngaruh. Akhirnya coba panggil jasa dari Lancarin dan beneran puas. Teknisi datang tepat waktu, kerjanya rapi, dan nggak butuh waktu lama. Sekarang nggak ada lagi drama wastafel mampet. Buat ibu-ibu yang sering ngalamin kayak saya, ini wajib coba!!",
      avatar: `${AuliaPutri.src}`,
    },
    {
      id: 2,
      name: "Budi Santoso",
      age: 42,
      title: "Karyawan Swasta",
      quote:
        "Pulang kerja udah capek, pengennya langsung istirahat, eh AC malah mati total. Pikirannya udah ribet duluan cari tukang service yang cepat. Iseng cari di internet, nemu Lancarin, langsung booking, dan ternyata servicenya super profesional. Teknisi datang tepat waktu, kerja cepat, dan AC langsung dingin lagi. Istri senang, anak-anak nyaman, saya pun lega",
      avatar: `${RizkyPratama.src}`,
    },
    {
      id: 3,
      name: "Rina Kusuma",
      age: 27,
      title: "Freelancer",
      quote:
        "Kerjaan numpuk, deadline mepet, eh kamar mandi mampet. Panik sih, apalagi ini pertama kalinya gue ngalamin begini. Untung temen kasih rekomendasi Lancarin, langsung coba pesen, dan nggak nyangka servicenya secepet itu! Teknisi ramah, kasih solusi jelas, dan langsung beres. Sekarang bisa kerja tanpa kepikiran masalah kamar mandi lagi. Fix gue sih bakal langganan!!",
      avatar: `${DewiAnanda.src}`,
    },
    {
      id: 4,
      name: "Fahri Ramadhan",
      age: 21,
      title: "Mahasiswa",
      quote:
        "Anak kost mana sempet ngurus beginian? WC mampet, udah panik harus cari tukang sendiri, takut harganya mahal juga. Untung temen kasih tau Lancarin, tinggal pesen via HP, nggak pake ribet nego harga atau cari-cari tukang sendiri. Teknisi datang, cek masalah, benerin, beres deh! Udah kayak penyelamat buat anak kost yang nggak mau ribet!!",
      avatar: `${FahriRamadhan.src}`,
    },
    {
      id: 5,
      name: "Sinta Wulandari",
      age: 26,
      title: "Pemilik restoran",
      quote:
        "Punya usaha kecil di rumah, jadi kalau AC rusak tuh langsung berasa dampaknya. Pelanggan jadi nggak nyaman, kerjaan juga nggak fokus. Akhirnya coba pakai Lancarin dan jujur ini solusi terbaik! Bookingnya gampang, teknisi datang tepat waktu, dan kerjaannya rapi. AC langsung normal lagi, pelanggan happy, bisnis tetap jalan. Pasti bakal pakai lagi kalau butuh!",
      avatar: `${SintaWulandari.src}`,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2
          className={`${tiltwarp.className} text-4xl text-green-500 font-bold mb-4 tracking-wide`}
        >
          Cerita Dari Pelanggan Kami
        </h2>
        <p className={`${tiltneon.className} text-gray-600 max-w-3xl mx-auto`}>
          Lihat bagaimana layanan kami telah membantu banyak pelanggan mengatasi
          masalah plumbing dengan cepat dan tanpa ribet!
        </p>
      </motion.div>

      <motion.div
        className={`grid gap-6 ${
          isMobile ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        }`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            testimonial={testimonial}
            variants={itemVariants}
          />
        ))}
        <SeeMoreCard variants={itemVariants} />
      </motion.div>
    </section>
  );
}

function TestimonialCard({
  testimonial,
  variants,
}: {
  testimonial: Testimonial;
  variants: Variants;
}) {
  return (
    <motion.div
      className="border border-gray-200 rounded-lg p-6 h-full"
      variants={variants}
      whileHover={{
        scale: 1.02,
        boxShadow:
          "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        transition: { duration: 0.2 },
      }}
    >
      <div className="flex items-center mb-4">
        <div className="w-12 rounded-full overflow-hidden bg-gray-100 mr-4">
          <Image
            src={testimonial.avatar || "/placeholder.svg"}
            alt={testimonial.name}
            width={48}
            height={48}
            className="object-cover"
          />
        </div>
        <div>
          <h3 className="font-semibold text-lg">{testimonial.name}</h3>
          <p className="text-gray-600 text-sm">
            {testimonial.title}, {testimonial.age} Tahun
          </p>
        </div>
      </div>

      <div className="mb-4">
        <StarRating rating={5} />
      </div>

      <p className="text-gray-800">{testimonial.quote}</p>
    </motion.div>
  );
}

function SeeMoreCard({ variants }: { variants: Variants }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="border border-gray-200 rounded-lg p-6 flex flex-col items-center justify-center h-full cursor-pointer bg-gradient-to-br from-white to-gray-50"
      variants={variants}
      whileHover={{
        scale: 1.03,
        boxShadow:
          "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        transition: { duration: 0.2 },
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4"
        animate={{
          scale: isHovered ? 1.1 : 1,
          backgroundColor: isHovered ? "#f3f4f6" : "#f9fafb",
        }}
      >
        <CustomPlusIcon isHovered={isHovered} />
      </motion.div>

      <motion.h3
        className={`${tiltwarp.className} font-semibold text-lg text-center tracking-wider`}
        animate={{
          scale: isHovered ? 1.05 : 1,
          color: isHovered ? "#00C950" : "#374151",
        }}
      >
        Success Stories Customer Kami
      </motion.h3>

      <motion.p
        className="text-gray-600 text-center mt-2"
        animate={{ opacity: isHovered ? 1 : 0.8 }}
      >
        Mari Cari Tahu Review Pelanggan Kami
      </motion.p>
    </motion.div>
  );
}

function CustomPlusIcon({ isHovered }: { isHovered: boolean }) {
  return (
    <motion.svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      animate={{
        rotate: isHovered ? 90 : 0,
        scale: isHovered ? 1.2 : 1,
      }}
      transition={{ duration: 0.3 }}
    >
      <motion.path
        d="M12 5V19M5 12H19"
        stroke="#4B5563"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={{
          stroke: isHovered ? "#00C950" : "#4B5563",
          strokeWidth: isHovered ? 2.5 : 2,
        }}
      />
    </motion.svg>
  );
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star key={i} filled={i < rating} />
      ))}
    </div>
  );
}

function Star({ filled }: { filled: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill={filled ? "currentColor" : "none"}
      xmlns="http://www.w3.org/2000/svg"
      className={filled ? "text-yellow-400" : "text-gray-300"}
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}
