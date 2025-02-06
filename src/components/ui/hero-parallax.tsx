"use client";
import {
  motion,
  MotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// Font
import { Outfit } from 'next/font/google';
const outfit = Outfit({ subsets: ['latin'] })

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 100]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-full w-full items-center justify-center p-2 sm:p-10 lg:p-20 py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className={`${tiltwarp.className} max-w-7xl relative p-8 sm:py-20 md:py-40 px-4 w-full left-0 top-0`}>
      <h2 className="text-2xl sm:text-4xl lg:text-7xl font-bold dark:text-white">
        Tentang kami, solusi terbaik Anda <br /> dalam engineering service
      </h2>
      <p className="max-w-3xl text-md sm:text-xl lg:text-2xl mt-8 dark:text-neutral-200">
        Kami adalah perusahaan engineering maintenance services yang menyediakan jasa perawatan gedung atau plumbing profesional di daerah Jakarta, Bogor, Depok, Tangerang dan Bekasi(Jabodetabek) yang dipercaya oleh hotel bintang lima, mall, perkantoran, dan klien retail di daerah anda.
      </p>

      <p className="max-w-3xl text-md sm:text-xl lg:text-2xl mt-8 dark:text-neutral-200">
        Kami menawarkan perbaikan saluran mampet, perawatan lemak minyak dapur dan perawatan AC. Teknisi profesional kami terampil dan berpengalaman dalam menangani masalah pipa. Selama lebih dari 20 tahun bergerak di bidang plumbing service, kami berterima kasih atas kepercayaan klien dan terus berkomitmen meningkatkan keterampilan teknisi berpengalaman kami.
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-48 lg:h-96 w-[30rem] relative flex-shrink-0"
    >
      <Link
        href={product.link}
        className="block group-hover/product:shadow-2xl"
        rel="canonical"
      >
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className={`${tiltwarp.className} absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white`}>
        {product.title}
      </h2>
    </motion.div>
  );
};
