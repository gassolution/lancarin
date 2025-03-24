import React from "react";
import Image from "next/image";
// import plumber from "@/assets/plumberOne.png";
import plumber from "@/assets/plumberDarkBlueFive-removebg.png";

// Font
import { Tilt_Neon, Tilt_Warp } from "next/font/google";

const tiltwarp = Tilt_Warp({ subsets: ["latin"] });
const tiltneon = Tilt_Neon({ subsets: ["latin"] });

const About: React.FC = () => {
  return (
    <section className="container relative mx-auto py-16 md:py-24 px-4 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
        {/* Left column - Text content */}
        <div className="space-y-5 md:pr-6">
          <div className="space-y-2">
            <h2
              className={`${tiltwarp.className} text-3xl font-bold tracking-wide sm:text-4xl md:text-5xl text-green-500`}
            >
              About Us
            </h2>
            <p
              className={`${tiltwarp.className} text-muted-foreground text-lg`}
            >
              Kami mengutamakan kepuasan pelanggan, demi memberikan pelayanan
              terbaik.
            </p>
          </div>

          <div
            className={`${tiltneon.className} space-y-4 text-base md:text-lg`}
          >
            <p>
              Lancarin hadir untuk memudahkan perawatan dan perbaikan rumahmu.
              Kami menyediakan layanan plumbing service, AC service, dan grease
              trap cleaning untuk residensial, dengan sistem pemesanan yang
              cepat, teknisi profesional, dan harga yang transparan.
            </p>
            <p>
              Kami tahu betapa ribetnya mencari teknisi yang tepat untuk masalah
              di rumah. Dengan Lancarin, kamu gak perlu lagi repot cari tukang
              servis secara manual atau khawatir dengan hasil pekerjaan.
            </p>
            <p>
              Cukup hubungi kami, dan tim kami siap datang untuk memberikan
              solusi terbaik!
            </p>
          </div>
        </div>

        {/* Right column - Image that extends beyond container */}
        <div className="relative h-[300px] md:h-[400px] lg:h-[450px] flex justify-center md:justify-end">
          <div className="absolute right-[-5%] md:right-[-10%] lg:right-[-15%] h-full w-[105%] md:w-[120%]">
            <Image
              src={plumber || "/placeholder.svg"}
              alt="Plumber"
              fill
              style={{ objectFit: "contain", objectPosition: "center right" }}
              className="transform scale-105 md:scale-110"
              priority
            />
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
    </section>
  );
};

export default About;
