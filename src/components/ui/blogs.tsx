"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Clock } from "lucide-react";

//font
import { Tilt_Neon, Tilt_Warp } from "next/font/google";

const tiltwarp = Tilt_Warp({ subsets: ["latin"] });
const tiltneon = Tilt_Neon({ subsets: ["latin"] });

// Custom UI Components
const CustomButton = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: {
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-md";

  const variants = {
    primary: "bg-green-500 text-white hover:bg-green-700",
    outline:
      "border border-gray-300 bg-transparent hover:bg-gray-100 text-gray-900 dark:text-gray-100 dark:hover:bg-gray-800 dark:border-gray-700",
    ghost:
      "bg-transparent hover:bg-gray-100 text-gray-900 dark:text-gray-100 dark:hover:bg-gray-800",
  };

  const sizes = {
    sm: "text-xs px-3 py-1.5",
    md: "text-sm px-4 py-2",
    lg: "text-base px-5 py-2.5",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const CustomBadge = ({
  children,
  variant = "default",
  className = "",
}: {
  children: React.ReactNode;
  variant?: "default" | "outline";
  className?: string;
}) => {
  const baseStyles =
    "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium";

  const variants = {
    default:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    outline:
      "border border-gray-300 text-gray-700 dark:text-gray-200 dark:border-gray-700",
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

const CustomCard = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 shadow-sm ${className}`}
    >
      {children}
    </div>
  );
};

// Sample blog data
const blogs = [
  {
    id: 1,
    title: "Kenapa Perawatan Rutin AC Itu Penting?",
    excerpt:
      "AC yang jarang diservis bisa menyebabkan tagihan listrik membengkak dan udara yang kurang sehat. Temukan manfaat perawatan rutin untuk AC Anda!",
    category: "Perawatan AC",
    date: "Maret 24, 2025",
    readTime: "5 min read",
    image: "/images/ac-maintenance.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "Cara Mengenali Tanda Pipa Bocor di Rumah",
    excerpt:
      "Jangan tunggu sampai bocor makin parah! Kenali tanda-tanda pipa bocor sejak dini agar tidak merusak rumah dan tagihan air Anda.",
    category: "Plumbing",
    date: "Maret 18, 2025",
    readTime: "6 min read",
    image: "/images/leaky-pipe.jpg",
  },
  {
    id: 3,
    title: "Manfaat Panggil Tukang Ledeng Setiap Tahun",
    excerpt:
      "Pengecekan rutin oleh profesional dapat mencegah masalah besar di kemudian hari. Yuk, cari tahu kenapa memanggil tukang ledeng setiap tahun itu penting!",
    category: "Plumbing",
    date: "Maret 10, 2025",
    readTime: "7 min read",
    image: "/images/annual-plumbing-check.jpg",
  },
  {
    id: 4,
    title: "Apa Saja yang Diperiksa Saat Servis AC?",
    excerpt:
      "Bingung apa saja yang dicek saat servis AC? Simak penjelasan lengkapnya agar AC Anda selalu dalam kondisi prima.",
    category: "Perawatan AC",
    date: "Februari 28, 2025",
    readTime: "5 min read",
    image: "/images/ac-service.jpg",
  },
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function BlogSection() {
  const [category] = useState<string | null>(null);

  const filteredBlogs = category
    ? blogs.filter((blog) => blog.category === category)
    : blogs;
  const regularBlogs = filteredBlogs.filter((blog) => !blog.featured);

  return (
    <section className="relative py-8 overflow-hidden bg-white dark:bg-gray-950">
      {/* Decorative elements */}

      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          variants={fadeInUp}
          className="flex flex-col md:flex-row justify-center justify-items-center items-center md:items-center mb-12"
        >
          <div>
            <h2
              className={`${tiltwarp.className} text-4xl md:text-4xl flex items-center justify-center justify-items-center font-bold tracking-wide text-green-500 dark:text-white`}
            >
              Artikel Terbaru Kami
            </h2>
            <p
              className={`${tiltneon.className} mt-2 text-gray-600 dark:text-gray-400 max-w-2xl`}
            >
              Cari tahu berita terbaru, tutorial perawatan, dan promo yang
              Lancarin.com tawarkan
            </p>
          </div>
          {/* <div className="mt-4 md:mt-0">
            <Link href="/blog">
              <CustomButton variant="outline" className="group">
                View all articles
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </CustomButton>
            </Link>
          </div> */}
        </motion.div>

        {/* Regular articles grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {regularBlogs.map((blog) => (
            <motion.div key={blog.id} variants={fadeInUp}>
              <CustomCard className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform hover:scale-105 duration-500"
                    style={{ backgroundImage: `url(${blog.image})` }}
                  />
                </div>
                <div className="p-5 flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <CustomBadge variant="outline">{blog.category}</CustomBadge>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {blog.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    {blog.excerpt}
                  </p>
                </div>
                <div className="px-5 py-4 border-t border-gray-200 dark:border-gray-800 flex justify-between items-center">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{blog.readTime}</span>
                  </div>
                  <CustomButton variant="ghost" size="sm" className="group">
                    Read more
                    <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </CustomButton>
                </div>
              </CustomCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Newsletter signup */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          variants={fadeInUp}
          className="mt-16 p-8 bg-gray-100 dark:bg-gray-900 rounded-lg relative overflow-hidden"
        >
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h3
              className={`${tiltwarp.className} text-2xl font-bold mb-4 text-green-500 tracking-wider dark:text-white`}
            >
              {"Ingin mendapatkan update terbaru dari Lancarin.com ?"}
            </h3>
            <p
              className={`${tiltneon.className} text-gray-600 dark:text-gray-400 mb-6`}
            >
              Subscribe ke newsletter Lancarin.com dan dapatkan update terbaru
              tentang blog, tutorial, dan promo promo menarik
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Ketik Email Kamu"
                className="flex h-10 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <CustomButton>Subscribe</CustomButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
