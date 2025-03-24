"use client";

import type React from "react";

import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { ThumbsUp, BadgeCheck, Clock } from "lucide-react";

//font
import { Tilt_Neon, Tilt_Warp } from "next/font/google";

const tiltwarp = Tilt_Warp({ subsets: ["latin"] });
const tiltneon = Tilt_Neon({ subsets: ["latin"] });

interface Reason {
  id: number;
  title: string;
  icon: React.ReactNode;
  quote: string;
}

const reasons: Reason[] = [
  {
    id: 1,
    title: "Terpercaya",
    icon: <BadgeCheck />,
    quote:
      "Kami telah bekerja di bidang jasa plumbing dan service lebih dari 10 tahun",
  },
  {
    id: 2,
    title: "Profesional",
    icon: <ThumbsUp />,
    quote:
      "Kami memiliki teknisi terbaik di industry ini dengan jumlah pekerjaan selesai lebih dari 100",
  },
  {
    id: 3,
    title: "On-Time Service",
    icon: <Clock />,
    quote:
      "Kami bisa menjaminkan bahwa teknisi kami bisa datang tepat waktu dan selalu on time",
  },
];

export default function WhyChooseUs() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        <h2
          className={`${tiltwarp.className} text-4xl font-bold text-center mb-16 tracking-wide text-green-500`}
        >
          Kenapa Memilih Kami
        </h2>

        <LayoutGroup>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto w-full h-full">
            {reasons.map((reason) => {
              const isHovered = hoveredId === reason.id;

              return (
                <motion.div
                  key={reason.id}
                  layout
                  className="bg-white rounded-lg shadow-lg w-full h-full cursor-pointer flex flex-col"
                  style={{
                    width: 400,
                  }}
                  animate={{
                    height: isHovered ? 350 : 250,
                    boxShadow: isHovered
                      ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                      : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                  }}
                  transition={{
                    height: {
                      type: "spring",
                    },
                    boxShadow: {
                      duration: isHovered ? 0.3 : 0.5,
                    },
                    layout: {
                      type: "spring",
                    },
                  }}
                  initial={{
                    opacity: 1,
                    height: 250,
                  }}
                  onHoverStart={() => setHoveredId(reason.id)}
                  onHoverEnd={() => setHoveredId(null)}
                >
                  {/* Background circle */}
                  <motion.div
                    layout
                    className="absolute rounded-full bg-green-50"
                    style={{
                      top: "30%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: isHovered ? 300 : 200,
                      height: isHovered ? 300 : 0,
                      opacity: isHovered ? 1 : 0,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: isHovered ? 150 : 100,
                      damping: isHovered ? 22 : 16,
                      mass: isHovered ? 1 : 1.5,
                      opacity: {
                        duration: isHovered ? 0.4 : 0.7,
                      },
                      width: {
                        duration: isHovered ? 0.4 : 0.7,
                      },
                      height: {
                        duration: isHovered ? 0.4 : 0.7,
                      },
                    }}
                  />

                  <motion.div
                    layout
                    className="flex flex-col h-full w-full p-8"
                    style={{
                      justifyContent: "flex-start",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                    transition={{
                      type: "spring",
                      stiffness: isHovered ? 170 : 120,
                      damping: isHovered ? 22 : 18,
                      mass: isHovered ? 1 : 1.2,
                    }}
                  >
                    <motion.div
                      layout
                      className="flex items-center flex-col"
                      style={{
                        gap: "0",
                        marginBottom: "1rem",
                      }}
                      transition={{
                        type: "spring",
                        stiffness: isHovered ? 170 : 120,
                        damping: isHovered ? 22 : 18,
                        mass: isHovered ? 1 : 1.2,
                      }}
                    >
                      {/* Icon container */}
                      <motion.div
                        layout
                        className="rounded-full bg-green-100 flex items-center justify-center relative z-10"
                        style={{
                          width: 100,
                          height: 100,
                          marginBottom: 24,
                          backgroundColor: isHovered ? "#dcfce7" : "#f0fdf4",
                        }}
                        transition={{
                          type: "spring",
                          stiffness: isHovered ? 170 : 120,
                          damping: isHovered ? 22 : 18,
                          backgroundColor: {
                            duration: isHovered ? 0.4 : 0.7,
                          },
                        }}
                      >
                        <motion.div
                          className="text-green-600"
                          animate={{
                            scale: isHovered ? 2 : 1.8,
                            rotate: isHovered ? [0, -10, 10, -10, 0] : 0,
                          }}
                          transition={{
                            rotate: {
                              repeat: isHovered ? Number.POSITIVE_INFINITY : 0,
                              repeatType: "mirror",
                              duration: 2,
                              ease: "easeInOut",
                            },
                            scale: {
                              type: "spring",
                              stiffness: isHovered ? 300 : 150,
                              damping: isHovered ? 20 : 15,
                              duration: isHovered ? 0.4 : 0.6,
                            },
                          }}
                        >
                          <div
                            style={{
                              width: 32,
                              height: 32,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            {reason.icon}
                          </div>
                        </motion.div>
                      </motion.div>

                      {/* Title with underline */}
                      <motion.div layout className="relative z-10">
                        <motion.h3
                          layout
                          className={`${tiltneon.className} text-2xl font-semibold tracking-wide`}
                          style={{
                            color: isHovered ? "#16a34a" : "#1f2937",
                          }}
                          transition={{
                            type: "spring",
                            stiffness: isHovered ? 170 : 120,
                            damping: isHovered ? 22 : 18,
                            color: {
                              duration: isHovered ? 0.4 : 0.7,
                            },
                          }}
                        >
                          {reason.title}
                        </motion.h3>

                        {/* Title underline - only visible on hover */}
                        <motion.div
                          layout
                          className="h-1 bg-green-500 rounded-full"
                          initial={{ width: 0 }}
                          animate={{
                            width: isHovered ? "100%" : 0,
                          }}
                          transition={{
                            width: {
                              type: "spring",
                              stiffness: isHovered ? 170 : 120,
                              damping: isHovered ? 22 : 18,
                              duration: isHovered ? 0.4 : 0.7,
                            },
                          }}
                          style={{
                            marginTop: "4px",
                            transformOrigin: "center",
                          }}
                        />
                      </motion.div>
                    </motion.div>

                    {/* Quote text - Only visible on hover using AnimatePresence */}
                    <AnimatePresence mode="wait">
                      {isHovered && (
                        <motion.div
                          className="relative z-10 mt-4"
                          initial={{ opacity: 0, y: 15, height: 0 }}
                          animate={{
                            opacity: 1,
                            y: 0,
                            height: "auto",
                            transition: {
                              opacity: { duration: 0.5, ease: "easeOut" },
                              y: {
                                type: "spring",
                                stiffness: 170,
                                damping: 22,
                              },
                              height: { duration: 0.5, ease: "easeOut" },
                            },
                          }}
                          exit={{
                            opacity: 0,
                            y: 10,
                            height: 0,
                            transition: {
                              opacity: {
                                duration: 0.7,
                                ease: [0.4, 0.0, 0.2, 1],
                              },
                              y: {
                                duration: 0.7,
                                ease: [0.4, 0.0, 0.2, 1],
                              },
                              height: {
                                duration: 0.7,
                                ease: [0.4, 0.0, 0.2, 1],
                              },
                            },
                          }}
                        >
                          <motion.p
                            className={`${tiltneon.className} text-gray-600`}
                            initial={{ opacity: 0 }}
                            animate={{
                              opacity: 1,
                              transition: { duration: 0.5, delay: 0.1 },
                            }}
                            exit={{
                              opacity: 0,
                              transition: { duration: 0.7 },
                            }}
                          >
                            {reason.quote}
                          </motion.p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </LayoutGroup>
      </div>
    </section>
  );
}
