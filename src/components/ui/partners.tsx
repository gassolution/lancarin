"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { StaticImageData } from "next/image";
import type { Swiper as SwiperType } from "swiper";

import aryaduta from "@/assets/aryaduta.png";
import blokmsquare from "@/assets/blokmsquare.png";
import burgerking from "@/assets/burgerking.png";
import denso from "@/assets/denso.png";
import dominos from "@/assets/dominos.png";
import exedy from "@/assets/exedy.png";
import fourseason from "@/assets/fourseasons.png";
import genkisushi from "@/assets/genkisushi.png";
import grandwhizhotel from "@/assets/grandwhizhotel.png";
import hotelborobudur from "@/assets/hotelborobudur.png";
import indofood from "@/assets/indofood.png";
import jababeka from "@/assets/jababeka.png";
import jsluwansa from "@/assets/jsluwansa.png";
import jwmarriot from "@/assets/jwmarriot.png";
import kalbe from "@/assets/kalbe.png";
import lippomall from "@/assets/lippomall.png";
import muliagroup from "@/assets/muliagroup.png";
import PIKAvenue from "@/assets/PIKAvenue.png";
import sariroti from "@/assets/sariroti.png";
import starbuck from "@/assets/starbuck.png";
import thamrinenine from "@/assets/thamrinnine.png";
import theritzcarlton from "@/assets/theritzcarlton.png";
import toyoplas from "@/assets/toyoplas.png";
import westin from "@/assets/westin.png";
import yamaha from "@/assets/yamaha.png";

//font
import { Tilt_Neon, Tilt_Warp } from "next/font/google";

const tiltwarp = Tilt_Warp({ subsets: ["latin"] });
const tiltneon = Tilt_Neon({ subsets: ["latin"] });

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

// Define partner interface
interface Partner {
  id: number;
  name: string;
  logo: StaticImageData;
}

// Partner logos array - in a real implementation, you would fetch these from your CMS or API
const partners: Partner[] = [
  {
    id: 1,
    name: "Aryaduta",
    logo: aryaduta,
  },
  {
    id: 2,
    name: "Blok M Square",
    logo: blokmsquare,
  },
  {
    id: 3,
    name: "Burger King",
    logo: burgerking,
  },
  {
    id: 4,
    name: "Denso",
    logo: denso,
  },
  {
    id: 5,
    name: "Dominos",
    logo: dominos,
  },
  {
    id: 6,
    name: "Exedy",
    logo: exedy,
  },
  {
    id: 7,
    name: "Four Seasons",
    logo: fourseason,
  },
  {
    id: 8,
    name: "Genki Sushi",
    logo: genkisushi,
  },
  {
    id: 9,
    name: "Grand Whiz Hotel",
    logo: grandwhizhotel,
  },
  {
    id: 10,
    name: "Hotel Borobudur",
    logo: hotelborobudur,
  },
  {
    id: 11,
    name: "Indofood",
    logo: indofood,
  },
  {
    id: 12,
    name: "Jababeka",
    logo: jababeka,
  },
  {
    id: 13,
    name: "JS Luwansa",
    logo: jsluwansa,
  },
  {
    id: 14,
    name: "JW Marriot",
    logo: jwmarriot,
  },
  {
    id: 15,
    name: "Kalbe",
    logo: kalbe,
  },
  {
    id: 16,
    name: "Lippo Mall",
    logo: lippomall,
  },
  {
    id: 17,
    name: "Mulia Group",
    logo: muliagroup,
  },
  {
    id: 18,
    name: "PIK Avenue",
    logo: PIKAvenue,
  },
  {
    id: 19,
    name: "Sari Roti",
    logo: sariroti,
  },
  {
    id: 20,
    name: "Starbucks",
    logo: starbuck,
  },
  {
    id: 21,
    name: "Thamrin Nine",
    logo: thamrinenine,
  },
  {
    id: 22,
    name: "The Ritz Carlton",
    logo: theritzcarlton,
  },
  {
    id: 23,
    name: "Toyoplas",
    logo: toyoplas,
  },
  {
    id: 24,
    name: "Westin",
    logo: westin,
  },
  {
    id: 25,
    name: "Yamaha",
    logo: yamaha,
  },
];

// Custom styles interfaces
interface StylesType {
  section: React.CSSProperties;
  container: React.CSSProperties;
  headerContainer: React.CSSProperties;
  heading: React.CSSProperties;
  subheading: React.CSSProperties;
  logoContainer: React.CSSProperties;
  logoImage: React.CSSProperties;
  swiperContainer: React.CSSProperties;
}

// Custom styles as objects to avoid external CSS dependencies
const styles: StylesType = {
  section: {
    width: "100%",
    padding: "3rem 0",
    backgroundColor: "#ffffff",
    overflow: "hidden",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 1rem",
  },
  headerContainer: {
    textAlign: "center",
    marginBottom: "2.5rem",
  },
  heading: {
    fontSize: "2.25rem",
    fontWeight: "700",
    lineHeight: "2.5",
    color: "#00C950",
    marginBottom: "1rem",
    fontFamily: tiltwarp.style.fontFamily,
  },
  subheading: {
    fontSize: "1rem",
    color: "#6b7280",
    maxWidth: "36rem",
    margin: "0 auto",
    lineHeight: "1.5",
    fontFamily: tiltneon.style.fontFamily,
  },
  logoContainer: {
    padding: "1.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "8rem",
    backgroundColor: "#ffffff",
    borderRadius: "0.5rem",
    border: "1px solid #e5e7eb",
    boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  },
  logoImage: {
    maxHeight: "4rem",
    width: "auto",
    objectFit: "contain",
    transition: "all 0.5s ease",
  },
  swiperContainer: {
    width: "100%",
  },
};

// Custom style for Swiper to ensure linear transition
const swiperCustomStyles = `
  .partners-swiper .swiper-wrapper {
    transition-timing-function: linear !important;
  }
  
  .partners-swiper .swiper-slide {
    transition: transform 0.5s ease;
  }
`;

export default function PartnersCarousel() {
  const swiperRef = useRef<SwiperType | null>(null);

  // Ensure the carousel never stops, even on hover
  useEffect(() => {
    const swiperInstance = swiperRef.current;

    if (swiperInstance) {
      // Add event listeners manually
      swiperInstance.el.addEventListener("mouseenter", () => {
        swiperInstance.autoplay.stop();
      });

      swiperInstance.el.addEventListener("mouseleave", () => {
        swiperInstance.autoplay.start();
      });
    }

    return () => {
      if (swiperInstance) {
        swiperInstance.el.removeEventListener("mouseenter", () => {
          swiperInstance.autoplay.stop();
        });

        swiperInstance.el.removeEventListener("mouseleave", () => {
          swiperInstance.autoplay.start();
        });
      }
    };
  }, []);

  return (
    <>
      <style jsx global>
        {swiperCustomStyles}
      </style>

      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.headerContainer}>
            <motion.h2
              style={styles.heading}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Partners Yang Telah Kerjasama Dengan Kami
            </motion.h2>
            <motion.p
              style={styles.subheading}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Kami telah berkolaborasi dengan ternama industri untuk memberikan
              solusi yang terbaik
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={styles.swiperContainer}
          >
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              modules={[Autoplay]}
              spaceBetween={30}
              slidesPerView={2}
              loop={true}
              speed={3000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 4,
                },
                1024: {
                  slidesPerView: 5,
                },
              }}
              className="partners-swiper"
            >
              {partners.map((partner) => (
                <SwiperSlide key={partner.id}>
                  <div style={styles.logoContainer}>
                    <Image
                      src={partner.logo || "/placeholder.svg"}
                      alt={`${partner.name} logo`}
                      width={180}
                      height={80}
                      style={styles.logoImage as React.CSSProperties}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </section>
    </>
  );
}
