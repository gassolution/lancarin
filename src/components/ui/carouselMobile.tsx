"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useMobile } from "@/components/ui/hooks//useMobile";
import { cn } from "@/lib/utils";

//image
import Image from "next/image";
import AuliaPutri from "@/assets/auliaPutri.jpg";
import RizkyPratama from "@/assets/rizkyPratama.jpg";
import DewiAnanda from "@/assets/dewiAnanda.jpg";
import FahriRamadhan from "@/assets/fahriRamadhan.jpg";
import SintaWulandari from "@/assets/sintaWulandari.jpg";

const reviews = [
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
    role: "Karyawan Swasta",
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

export default function MobileCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const isMobile = useMobile();

  // Auto-advance the carousel every 5 seconds
  useEffect(() => {
    if (!isMobile) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isMobile]);

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  // Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      handleNext();
    }

    if (touchStart - touchEnd < -50) {
      // Swipe right
      handlePrevious();
    }
  };

  // Mobile carousel view
  return (
    <div className="relative w-full overflow-hidden px-4 py-6">
      <div
        className="w-full"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="w-full"
          >
            <ReviewCard review={reviews[currentIndex]} />
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-between mt-6">
          <button
            onClick={handlePrevious}
            className="p-2 rounded-full bg-green-100 text-green-600"
            aria-label="Previous review"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex space-x-1 items-center">
            {reviews.map((_, index) => (
              <span
                key={index}
                className={cn(
                  "block h-2 w-2 rounded-full transition-colors duration-300",
                  index === currentIndex ? "bg-green-500" : "bg-gray-300"
                )}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-2 rounded-full bg-green-100 text-green-600"
            aria-label="Next review"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

interface ReviewCardProps {
  review: {
    id: number;
    name: string;
    role: string;
    rating: number;
    content: string;
    avatar: string;
  };
}

function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="bg-white rounded-lg p-4 border-2 border-green-400 shadow-sm">
      <div className="flex items-start gap-3 mb-3">
        <div className="flex-shrink-0">
          <Image
            src={review.avatar}
            alt={`${review.name}'s profile`}
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
        <div>
          <h3 className="font-bold text-base">{review.name}</h3>
          <p className="text-sm text-gray-600">{review.role}</p>
          <div className="flex mt-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "h-4 w-4",
                  i < review.rating
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-300"
                )}
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-sm text-gray-800">{review.content}</p>
    </div>
  );
}
