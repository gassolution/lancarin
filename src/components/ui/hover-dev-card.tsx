import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import drainWhite from "@/assets/drainWhite.jpg";
import acWhite from "@/assets/acWhite.png";
import wastafekWhite from "@/assets/wastefelWhite.png";
import toiletWhite from "@/assets/toiletWhite.jpg";
import pipeFitting from "@/assets/pipeFitting.jpg";

//font
import { Tilt_Neon, Tilt_Warp } from "next/font/google";

const tiltwarp = Tilt_Warp({ subsets: ["latin"] });
const tiltneon = Tilt_Neon({ subsets: ["latin"] });

type CardProps = {
  title: string;
  subtitle: string;
  imageUrl: StaticImageData;
  href: string;
};

// Added this utility function to replace the missing cn utility
const cn = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

const HoverDevCards: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <div className="flex flex-col gap-6 justify-center items-center w-full p-16 px-10 lg:px-20 xl:px-40 rounded-xl xl:mx-40">
      <p
        className={`${tiltwarp.className} text-5xl font-bold sm:text-4xl text-green-500 text-center tracking-wide mb-10`}
      >
        Layanan Yang Kami Tawarkan
      </p>
      <motion.div
        className="w-full grid gap-6 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Card
          title="Pipa Mampet"
          subtitle="Membantu kamu membersihkan saluran air yang mampet"
          href="#"
          imageUrl={wastafekWhite}
        />
        <Card
          title="AC Service"
          subtitle="Pembersihan AC yang kotor serta maintenance AC"
          href="#"
          imageUrl={acWhite}
        />
        <Card
          title="Grease Trap Domestik"
          subtitle="Penanganan saluran pembuangan di rumah kamu"
          href="#"
          imageUrl={drainWhite}
        />
        <Card
          title="Toilet Maintainance"
          subtitle="Perawatan saluran pipa toilet rumah anda"
          href="#"
          imageUrl={toiletWhite}
        />
        <Card
          title="Pipe Fitting"
          subtitle="Membantu kamu memasang saluran pipa baru"
          href="#"
          imageUrl={pipeFitting}
        />
        <SeeMoreCard
          isHovered={hoveredCard === 999}
          onHover={() => setHoveredCard(999)}
          onHoverEnd={() => setHoveredCard(null)}
          variants={cardVariants}
        />
      </motion.div>
    </div>
  );
};

const Card: React.FC<CardProps> = ({ title, subtitle, imageUrl, href }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative w-full items-center justify-items-center overflow-hidden rounded-lg shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{
        y: isHovered ? -10 : 0,
        scale: isHovered ? 1.05 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
    >
      {/* Card Image with Next.js Image */}
      <Image
        src={imageUrl}
        alt={title}
        className="w-full h-64 object-cover rounded-lg transition-transform duration-300"
      />

      {/* Hover Overlay */}
      <motion.div
        className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center px-4 opacity-0"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className={`${tiltwarp.className} text-lg font-bold`}>{title}</h3>
        <p className={`${tiltneon.className} text-sm`}>{subtitle}</p>
        <a
          href={href}
          className={`${tiltneon.className} mt-2 text-green-300 ease-in-out duration-300 hover:text-green-500`}
        >
          Learn More →
        </a>
      </motion.div>
    </motion.div>
  );
};

function SeeMoreCard({
  isHovered,
  onHover,
  onHoverEnd,
  variants,
}: {
  isHovered: boolean;
  onHover: () => void;
  onHoverEnd: () => void;
  variants: Variants;
}) {
  return (
    <motion.div
      variants={variants}
      onMouseEnter={onHover}
      onMouseLeave={onHoverEnd}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.2 }}
    >
      <Link href="/services" className="block h-full">
        <div
          className={cn(
            "h-64 overflow-hidden border-2 border-dashed rounded-lg transition-colors duration-300 bg-white shadow-lg",
            isHovered ? "border-green-500 bg-green-50" : "border-gray-300"
          )}
        >
          <div className="flex flex-col items-center justify-center h-64 p-8 text-center">
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: isHovered ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowRight
                className={cn(
                  "h-12 w-12 mb-4 transition-colors duration-300",
                  isHovered ? "text-green-500" : "text-gray-400"
                )}
              />
            </motion.div>

            <h3
              className={cn(
                `${tiltwarp.className} text-xl font-semibold mb-2`,
                isHovered ? "text-green-500" : "text-black"
              )}
            >
              Lihat Layanan Lainnya
            </h3>
            <p className={`${tiltneon.className} text-gray-500`}>
              Temukan lebih banyak layanan yang kami sediakan
            </p>

            <motion.div
              className="mt-6"
              animate={{
                y: isHovered ? [0, -5, 0] : 0,
              }}
              transition={{
                repeat: isHovered ? Number.POSITIVE_INFINITY : 0,
                duration: 1,
              }}
            >
              <button
                className={cn(
                  "px-4 py-2 rounded-md transition-colors duration-300",
                  isHovered
                    ? "bg-green-500 text-white"
                    : "bg-white text-green-500 border border-green-500"
                )}
              >
                Lihat Semua Layanan
              </button>
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default HoverDevCards;
