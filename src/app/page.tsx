"use client";

// Libs
import { Link } from "@nextui-org/react";

// UI Libs
import Hero from "@/components/ui/hero";
import HoverDevCards from "@/components/ui/hover-dev-card";
import AboutSection from "@/components/ui/about";
import WhyChooseUs from "@/components/ui/whyChooseUs";
import WorkingProcess from "@/components/ui/workingProcess";
import CustomerSuccessStories from "@/components/ui/customerStories";
import ProjectMatrix from "@/components/ui/projectMatrix";
import PartnersCarousel from "@/components/ui/partners";
import CustomerForm from "@/components/ui/formMain";
import BlogSection from "@/components/ui/blogs";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";

// Font
import { Tilt_Neon, Tilt_Warp } from "next/font/google";

const tiltwarp = Tilt_Warp({ subsets: ["latin"] });
const tiltneon = Tilt_Neon({ subsets: ["latin"] });

// Icons
import { Mail, Phone } from "lucide-react";

export default function Home() {
  return (
    <>
      <main>
        <div className="overflow-x-hidden flex flex-col items-center justify-center gap-12">
          <Hero />

          <VelocityScroll className={`${tiltwarp.className} text-[#00A63E]`}>
            Lancarin.
          </VelocityScroll>

          <AboutSection />

          <HoverDevCards />

          <WhyChooseUs />

          <WorkingProcess />

          <CustomerSuccessStories />

          <ProjectMatrix />

          <PartnersCarousel />

          <CustomerForm />

          <div className="w-full flex flex-col items-center justify-center gap-10 px-10 lg:px-20 xl:px-40">
            <h1
              className={`${tiltwarp.className} flex gap-4 text-balance text-center justify-center items-center text-green-500 text-2xl sm:text-4xl leading-none tracking-tighter xl:text-6xl`}
            >
              Saluran Mampet? <br />
              <span className="text-white bg-green-500 rounded-lg w-fit p-4">
                Lancarin.
              </span>
              Aja!
            </h1>
            <div className="flex flex-col justify-center items-center border-2 border-green-400 shadow-green-100 shadow-md bg-green-100 p-4 sm:py-6 sm:px-10 rounded-full gap-6">
              <div
                className={`${tiltneon.className} flex items-center justify-center gap-4 sm:gap-10`}
              >
                <Link
                  href="https://wa.me/+628111026445"
                  target="_blank"
                  rel="canonical"
                  className="text-green-600 text-xs sm:text-lg flex justify-center items-center gap-2"
                >
                  <Phone /> Hotline: 08111026445
                </Link>
                <Link
                  href=""
                  target="_blank"
                  rel="canonical"
                  className="text-green-600 text-xs sm:text-lg flex justify-center items-center gap-2"
                >
                  <Mail />
                  Email: info@gas-solution.com
                </Link>
              </div>
            </div>
          </div>

          <BlogSection />
        </div>
      </main>
    </>
  );
}

// hello next developer
// this is the main page of the website
// i have left this message as footnote on some features still missing and need to know stuff for the development of the website
// 1. still missing / not working mobile version for the website main page
// 2. still missing / not working site analytics for internal use
// 3. google search engine optimization
// 4. calendly api still using a free version and missing implementation in main page (max 15 days of use)
// 5. website design and flow still need to be improved
// any additional revision can directly asked by the head director or any project manager and supervisor
// if you (the next developer taking over the project) have any question or need to discuss about the project
// please screenshot this message and send it to my personal email (athiflanang@gmail.com)
// i will be happy to help you the best i can
// i hope this project can be finished and launched as soon as possible, good luck and godspeed
