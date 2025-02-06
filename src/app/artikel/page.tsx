"use client"

// Libs
import "animate.css/animate.compat.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

// UI Libs

// Font
import Card08 from "@/components/ui/card08";
import NewsCard from "@/components/ui/newscard";
import { Newspaper, ThumbsUp } from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

// Font
import { Tilt_Neon, Tilt_Warp } from 'next/font/google';

const tiltwarp = Tilt_Warp({ subsets: ['latin'] })
const tiltneon = Tilt_Neon({ subsets: ['latin'] })

// Icons

export default function Artikel() {

  useEffect(() => {
    AOS.init({})
  }, [])

  return (
    <>
      <Head>
        <title>Artikel Lancarin</title>
        <meta name="description" content="Kumpulan artikel-artikel seputar mengatasi saluran mampet, merawat grease trap, dan perawatan ac." />
      </Head>
      <main>
        <div className={`${tiltwarp.className} overflow-x-hidden flex flex-col items-center justify-center p-8 pb-20 gap-8 sm:p-20 rounded-xl xl:mx-20`}>
          <div className="w-full flex flex-col items-start justify-center gap-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-black mt-10">
              Baca Artikel di Lancarin Yuk!
            </h2>
            <p className="flex gap-2 text-lg lg:text-xl text-left bg-green-500 rounded-xl text-white w-fit border-b-2 border-green-500 py-2 px-4">
              <ThumbsUp />
              Artikel teratas
            </p>
          </div>

          <div className={`${tiltneon.className} w-full h-full flex items-start justify-between`}>
            <div className="w-full flex flex-col lg:w-9/12 h-full pr-0 lg:pr-4">
              <div className="h-96 hidden lg:block">
                <NewsCard
                  title="Jangan Nunggu AC Rusak, Baru Panik!"
                  subtitle="Servis AC rutin itu penting, loh! Jangan sampai tunggu rusak dulu, kamu perlu merawatnya!"
                  image="/images/acmaintenance.jpg"
                  badge={{ text: "Rekomendasi", variant: "pink" }}
                  href="/artikel/jangan-nunggu-ac-rusak-baru-panik">
                </NewsCard>
              </div>
              <div className="lg:hidden overflow-x-scroll">
                <div className="w-fit flex gap-3 justify-end h-full overflow-x-scroll">
                  <Card08
                    title="Jangan Nunggu AC Rusak, Baru Panik!"
                    subtitle="Servis AC rutin itu penting, loh! Jangan sampai tunggu rusak dulu, kamu perlu merawatnya!"
                    image="/images/acmaintenance.jpg"
                    badge={{ text: "Rekomendasi", variant: "pink" }}
                    href="/artikel/jangan-nunggu-ac-rusak-baru-panik">
                  </Card08>
                  <Card08
                    title="Minyak Bekas Bikin Ribet? Ini Solusinya!"
                    subtitle="Grease trap itu kayak filter buat minyak dan lemak di dapur. Alat ini tugasnya nangkep lemak, minyak, dan sisa makanan biar nggak langsung masuk ke saluran pembuangan. Kenapa penting? Soalnya kalau dibiarkan, minyak bisa mengeras dan bikin pipa mampet, bahkan nyebabin bau nggak sedap. Dengan grease trap, limbah dapur lebih terkontrol, lingkungan lebih bersih, dan saluran air tetap lancar!"
                    image="/images/greasetrap.jpg"
                    badge={{ text: "Rekomendasi", variant: "pink" }}
                    href="/artikel/minyak-bekas-bikin-ribet-ini-solusinya">
                  </Card08>
                  <Card08
                    title="Saluran Lancar, Hidup Tenang! Tips Ampuh Atasi Pipa Mampet"
                    subtitle="Nggak perlu pakai alat canggih! Beberapa bahan di rumah bisa bantu atasi saluran tersumbat dengan cepat."
                    image="/images/saluranair.jpg"
                    badge={{ text: "Rekomendasi", variant: "pink" }}
                    href="/artikel/saluran-lancar-hidu-tenang-tips-ampuh-atasi-pipa-mampet">
                  </Card08>
                </div>
              </div>

              <h2 className="flex gap-2 text-lg lg:text-xl mt-10 mb-4 border-b-2 bg-green-500 text-white rounded-xl px-4 py-2 w-fit ">
                <Newspaper />
                Artikel lainnya
              </h2>

              <div className="flex flex-col gap-6">
                <Link href={"/artikel/minyak-bekas-bikin-ribet-ini-solusinya"} className="flex gap-2 lg:gap-6 p-2 hover:bg-green-100 rounded-xl transition-all" rel="canonical">
                  <div className="flex flex-col gap-2 w-full md:w-8/12">
                    <h3 className={`${tiltwarp.className} text-md md:text-xl lg:text-3xl`}>
                      Minyak Bekas Bikin Ribet? Ini Solusinya!
                    </h3>
                    <p className="line-clamp-3 text-sm md:text-base text-justify text-justify">
                      Grease trap itu kayak filter buat minyak dan lemak di dapur. Alat ini tugasnya nangkep lemak, minyak, dan sisa makanan biar nggak langsung masuk ke saluran pembuangan. Kenapa penting? Soalnya kalau dibiarkan, minyak bisa mengeras dan bikin pipa mampet, bahkan nyebabin bau nggak sedap. Dengan grease trap, limbah dapur lebih terkontrol, lingkungan lebih bersih, dan saluran air tetap lancar! Fungsinya sangat penting dalam menjaga kelancaran sistem pengelolaan limbah dapur, baik di restoran, hotel, maupun dapur rumah tangga.
                    </p>
                  </div>
                  <div className="md:w-4/12">
                    <Image
                      src="/images/greasetrap.jpg"
                      width={1000}
                      height={1000}
                      alt="Perawatan Grease Trap"
                      className="w-full h-auto aspect-video object-cover rounded-xl hidden md:block"
                    />

                  </div>
                </Link>

                <Link href={"/artikel/jangan-nunggu-ac-rusak-baru-panik"} className="flex gap-2 lg:gap-6 p-2 hover:bg-green-100 rounded-xl transition-all" rel="canonical">
                  <div className="flex flex-col gap-2 w-full md:w-8/12">
                    <h3 className={`${tiltwarp.className} text-md md:text-xl lg:text-3xl`}>
                      Jangan Nunggu AC Rusak, Baru Panik!
                    </h3>
                    <p className="line-clamp-3 text-sm md:text-base text-justify">
                      Servis AC rutin itu penting, loh! Jangan sampai tunggu rusak dulu, kamu perlu merawatnya!
                    </p>
                  </div>
                  <div className="md:w-4/12">
                    <Image
                      src="/images/acmaintenance.jpg"
                      width={1000}
                      height={1000}
                      alt="Perawatan AC"
                      className="w-full h-auto aspect-video object-cover rounded-xl hidden md:block"
                    />

                  </div>
                </Link>

                <Link href={"/artikel/saluran-lancar-hidu-tenang-tips-ampuh-atasi-pipa-mampet"} className="flex gap-2 lg:gap-6 p-2 hover:bg-green-100 rounded-xl transition-all" rel="canonical">
                  <div className="flex flex-col gap-2 w-full md:w-8/12">
                    <h3 className={`${tiltwarp.className} text-md md:text-xl lg:text-3xl`}>
                      Saluran Lancar, Hidup Tenang! Tips Ampuh Atasi Pipa Mampet
                    </h3>
                    <p className="line-clamp-3 text-sm md:text-base text-justify">
                      Nggak perlu pakai alat canggih! Beberapa bahan di rumah bisa bantu atasi saluran tersumbat dengan cepat.
                    </p>
                  </div>
                  <div className="md:w-4/12">
                    <Image
                      src="/images/saluranair.jpg"
                      width={1000}
                      height={1000}
                      alt="Pembersihan Saluran Air"
                      className="w-full h-auto aspect-video object-cover rounded-xl hidden md:block"
                    />

                  </div>
                </Link>

              </div>

            </div>

            <div className="hidden lg:w-3/12 border-l-2  lg:flex flex-col gap-3 justify-end h-full pl-4">
              <Card08
                title="Minyak Bekas Bikin Ribet? Ini Solusinya!"
                subtitle="Grease trap itu kayak filter buat minyak dan lemak di dapur. Alat ini tugasnya nangkep lemak, minyak, dan sisa makanan biar nggak langsung masuk ke saluran pembuangan. Kenapa penting? Soalnya kalau dibiarkan, minyak bisa mengeras dan bikin pipa mampet, bahkan nyebabin bau nggak sedap. Dengan grease trap, limbah dapur lebih terkontrol, lingkungan lebih bersih, dan saluran air tetap lancar!"
                image="/images/greasetrap.jpg"
                badge={{ text: "Rekomendasi", variant: "pink" }}
                href="/artikel/minyak-bekas-bikin-ribet-ini-solusinya">
              </Card08>
              <Card08
                title="Saluran Lancar, Hidup Tenang! Tips Ampuh Atasi Pipa Mampet"
                subtitle="Nggak perlu pakai alat canggih! Beberapa bahan di rumah bisa bantu atasi saluran tersumbat dengan cepat."
                image="/images/saluranair.jpg"
                badge={{ text: "Rekomendasi", variant: "pink" }}
                href="/artikel/saluran-lancar-hidu-tenang-tips-ampuh-atasi-pipa-mampet">
              </Card08>
            </div>

          </div>

        </div>
      </main >
    </>
  );
}