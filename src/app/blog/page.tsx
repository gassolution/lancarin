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
import { Outfit } from 'next/font/google';
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const outfit = Outfit({ subsets: ['latin'] })

// Icons

export default function Blog() {

  useEffect(() => {
    AOS.init({})
  }, [])

  return (
    <>
      <Head>
        <title>Artikel Ecofix</title>
        <meta name="description" content="Kumpulan artikel-artikel seputar mengatasi saluran mampet, merawat grease trap, dan perawatan ac." />
        <meta name="keywords" content="PT Gama Abyakta Sejahtera, Ecofix, Gas solution, sedot wc, jasa sedot wc, jasa saluran mampet, saluran mampet, jasa saluran mampet terdekat, jasa saluran mampet bekasi, alat pendorong saluran mampet, cara menggunakan soda api untuk saluran mampet, tukang saluran mampet, cara pakai soda api untuk saluran mampet, jasa saluran mampet jogja, jasa saluran mampet bandung, saluran mampet jogja, jasa saluran mampet jakarta, plumbing adalah, apa itu plumbing, pekerjaan plumbing, instalasi plumbing air bersih, sistem plumbing gedung bertingkat, plumbing air bersih, sistem plumbing adalah, mechanical electrical plumbing adalah, pekerjaan plumbing adalah, plumbness adalah, grease trap adalah, apa itu grease trap, cara membersihkan grease trap, cara kerja grease trap, biaya servis ac rumah, cara servis ac rumah, sedot wc terdekat, sedot wc jakarta" />
        <meta name="author" content="PT Gama Abyakta Sejahtera" />
        <meta property="og:title" content="Artikel Ecofix" />
        <meta property="og:description" content="Kumpulan artikel-artikel seputar mengatasi saluran mampet, merawat grease trap, dan perawatan ac." />
        <meta property="og:image" content="/images/saluranair.jpg" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main>
        <div className={`${outfit.className} overflow-x-hidden flex flex-col items-center justify-center p-8 pb-20 gap-8 sm:p-20 rounded-xl xl:mx-20`}>
          <div className="w-full flex flex-col items-center justify-center gap-4">
            <h1 className="text-2xl sm:text-3xl md:text-5xl text-indigo-600 font-semibold mt-10">
              Artikel
            </h1>
            <p className="flex gap-2 w-full text-lg lg:text-xl text-left font-semibold text-amber-500 border-b-2 border-amber-500 p-2">
              <ThumbsUp />
              Artikel teratas
            </p>
          </div>

          <div className="w-full h-full flex items-start justify-between">
            <div className="w-full flex flex-col lg:w-9/12 h-full pr-0 lg:pr-4">
              <div className="h-96 hidden lg:block">
                <NewsCard
                  title="Pentingnya Servis AC Berkala untuk Kenyamanan dan Efisiensi"
                  subtitle="Melakukan servis AC secara rutin adalah langkah penting untuk menjaga performa perangkat pendingin sekaligus menghemat biaya dalam jangka panjang."
                  image="/images/acmaintenance.jpg"
                  badge={{ text: "Rekomendasi", variant: "pink" }}
                  href="/blog/pentingnya-servis-ac-berkala-untuk-kenyamanan-dan-efisiensi">
                </NewsCard>
              </div>
              <div className="lg:hidden overflow-x-scroll">
                <div className="w-fit flex gap-3 justify-end h-full overflow-x-scroll">
                  <Card08
                    title="Pentingnya Servis AC Berkala untuk Kenyamanan dan Efisiensi"
                    subtitle="Melakukan servis AC secara rutin adalah langkah penting untuk menjaga performa perangkat pendingin sekaligus menghemat biaya dalam jangka panjang."
                    image="/images/acmaintenance.jpg"
                    badge={{ text: "Rekomendasi", variant: "pink" }}
                    href="/blog/pentingnya-servis-ac-berkala-untuk-kenyamanan-dan-efisiensi">
                  </Card08>
                  <Card08
                    title="Solusi Efektif untuk Limbah Lemak dan Minyak Dapur"
                    subtitle="Grease trap, atau alat penangkap lemak, adalah perangkat yang dirancang untuk mencegah minyak, lemak, dan partikel padat masuk ke saluran pembuangan utama."
                    image="/images/greasetrap.jpg"
                    badge={{ text: "Rekomendasi", variant: "pink" }}
                    href="/blog/solusi-efektif-untuk-limbah-lemak-dan-minyak-dapur">
                  </Card08>
                  <Card08
                    title="Mengatasi Saluran Mampet dengan Mudah!"
                    subtitle="Saluran pembuangan yang mampet atau tersumbat adalah masalah umum yang sering terjadi di rumah, kantor, atau fasilitas umum lainnya."
                    image="/images/saluranair.jpg"
                    badge={{ text: "Rekomendasi", variant: "pink" }}
                    href="/blog/mengatasi-saluran-mampet-dengan-mudah">
                  </Card08>
                </div>
              </div>

              <h2 className="flex gap-2 font-semibold text-lg lg:text-xl mt-10 mb-4 border-b-2 border-indigo-600 p-2 text-indigo-600">
                <Newspaper />
                Artikel lainnya
              </h2>

              <div className="flex flex-col gap-6">
                <Link href={"/blog/solusi-efektif-untuk-limbah-lemak-dan-minyak-dapur"} className="flex gap-2 lg:gap-6 p-2 hover:bg-slate-100 rounded-xl transition-all">
                  <div className="flex flex-col gap-2 w-full md:w-8/12">
                    <h3 className="text-md md:text-xl lg:text-3xl font-semibold">
                      Solusi Efektif Untuk Limbah Lemak dan Minyak Dapur
                    </h3>
                    <p className="line-clamp-3 text-xs md:text-sm">
                      Grease trap, atau alat penangkap lemak, adalah perangkat yang dirancang untuk mencegah minyak, lemak, dan partikel padat masuk ke saluran pembuangan utama. Fungsinya sangat penting dalam menjaga kelancaran sistem pengelolaan limbah dapur, baik di restoran, hotel, maupun dapur rumah tangga.
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

                <Link href={"/blog/pentingnya-servis-ac-berkala-untuk-kenyamanan-dan-efisiensi"} className="flex gap-2 lg:gap-6 p-2 hover:bg-slate-100 rounded-xl transition-all">
                  <div className="flex flex-col gap-2 w-full md:w-8/12">
                    <h3 className="text-md md:text-xl lg:text-3xl font-semibold">
                      Pentingnya Servis AC Berkala untuk Kenyamanan dan Efisiensi
                    </h3>
                    <p className="line-clamp-3 text-xs md:text-sm">
                      Melakukan servis AC secara rutin adalah langkah penting untuk menjaga performa perangkat pendingin sekaligus menghemat biaya dalam jangka panjang.
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

                <Link href={"/blog/mengatasi-saluran-mampet-dengan-mudah"} className="flex gap-2 lg:gap-6 p-2 hover:bg-slate-100 rounded-xl transition-all">
                  <div className="flex flex-col gap-2 w-full md:w-8/12">
                    <h3 className="text-md md:text-xl lg:text-3xl font-semibold">
                      Mengatasi Saluran Mampet dengan Mudah!
                    </h3>
                    <p className="line-clamp-3 text-xs md:text-sm">
                      Saluran pembuangan yang mampet atau tersumbat adalah masalah umum yang sering terjadi di rumah, kantor, atau fasilitas umum lainnya.
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
                title="Solusi Efektif untuk Limbah Lemak dan Minyak Dapur"
                subtitle="Grease trap, atau alat penangkap lemak, adalah perangkat yang dirancang untuk mencegah minyak, lemak, dan partikel padat masuk ke saluran pembuangan utama."
                image="/images/greasetrap.jpg"
                badge={{ text: "Rekomendasi", variant: "pink" }}
                href="/blog/solusi-efektif-untuk-limbah-lemak-dan-minyak-dapur">
              </Card08>
              <Card08
                title="Mengatasi Saluran Mampet dengan Mudah!"
                subtitle="Saluran pembuangan yang mampet atau tersumbat adalah masalah umum yang sering terjadi di rumah, kantor, atau fasilitas umum lainnya."
                image="/images/saluranair.jpg"
                badge={{ text: "Rekomendasi", variant: "pink" }}
                href="/blog/mengatasi-saluran-mampet-dengan-mudah">
              </Card08>
            </div>

          </div>

        </div>
      </main >
    </>
  );
}