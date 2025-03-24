"use client";

import {
  TriangleAlert,
  PhoneCall,
  HardHat,
  HeartHandshake,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";
import React, { useState } from "react";

//font
import { Tilt_Neon, Tilt_Warp } from "next/font/google";

const tiltwarp = Tilt_Warp({ subsets: ["latin"] });
const tiltneon = Tilt_Neon({ subsets: ["latin"] });

export default function ServiceProcessFlow() {
  // Track hover state for each step
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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

  const pulseVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse" as const,
      },
    },
  };

  const chevronVariants = {
    hidden: { opacity: 0, x: -5 },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5 + index * 0.1,
        duration: 0.3,
      },
    }),
  };

  // Component for the chevron connector
  const ChevronConnector = () => {
    return (
      <div className="flex items-center justify-center mx-2 md:mx-4">
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            custom={index}
            variants={chevronVariants}
            initial="hidden"
            animate="visible"
            className="mx-1"
          >
            <ChevronRight className="w-5 h-5 text-[#00A651]" />
          </motion.div>
        ))}
      </div>
    );
  };

  // Define step data to avoid repetition
  const steps = [
    {
      id: 1,
      icon: TriangleAlert,
      title: "Butuh Bantuan?",
      description: "Chat atau telepon kami kalau ada masalah—kita siap bantu!",
    },
    {
      id: 2,
      icon: PhoneCall,
      title: "Atur Janji Temu",
      description:
        "Buat jadwal kunjungan teknisi sesuai waktu yang pas buat kamu.",
    },
    {
      id: 3,
      icon: HardHat,
      title: "Teknisi Datang",
      description:
        "Teknisi akan tiba sesuai jadwal dan siap menangani masalahmu!",
    },
    {
      id: 4,
      icon: HeartHandshake,
      title: "Masalah Beres!",
      description:
        "Selesai! Teknisi kami sudah memastikan semuanya kembali normal.",
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto py-12 px-4 bg-white">
      <div className="flex items-center justify-center mb-5">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center md:justify-between w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <motion.div
                className="flex flex-col items-center text-center max-w-xs"
                variants={itemVariants}
              >
                <div className="relative mb-6">
                  <motion.div
                    className="w-36 h-36 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ease-in-out"
                    style={{
                      backgroundColor:
                        hoveredStep === step.id ? "white" : "#00A651",
                      border:
                        hoveredStep === step.id ? "4px solid #00A651" : "none",
                      boxShadow:
                        hoveredStep === step.id
                          ? "0 0 20px rgba(0, 166, 81, 0.6)"
                          : "none",
                    }}
                    variants={pulseVariants}
                    animate="pulse"
                    onHoverStart={() => setHoveredStep(step.id)}
                    onHoverEnd={() => setHoveredStep(null)}
                  >
                    <step.icon
                      className={`w-16 h-16 stroke-[1.5] transition-colors duration-300 ease-in-out ${
                        hoveredStep === step.id
                          ? "text-[#00A651]"
                          : "text-white"
                      }`}
                    />
                  </motion.div>
                  <div className="absolute top-0 right-0 w-10 h-10 rounded-full bg-white border-2 border-[#00A651] flex items-center justify-center text-[#00A651] font-bold">
                    {step.id.toString().padStart(2, "0")}
                  </div>
                </div>
                <h3
                  className={`${tiltwarp.className} tracking-wide text-xl font-bold text-[#00A651] mb-3`}
                >
                  {step.title}
                </h3>
                <p className={`${tiltneon.className} text-gray-600`}>
                  {step.description}
                </p>
              </motion.div>

              {/* Add chevron connectors between steps, not after each step */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex items-center ">
                  <ChevronConnector />
                </div>
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
