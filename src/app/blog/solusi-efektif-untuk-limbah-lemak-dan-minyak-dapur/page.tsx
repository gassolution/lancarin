"use client"

// Libs
import "animate.css/animate.compat.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

// UI Libs

// Font
import Card08 from "@/components/ui/card08";
import NewsCard2 from "@/components/ui/newscard2";
import { ArrowLeft } from "lucide-react";
import { Outfit } from 'next/font/google';
import Head from "next/head";
import Link from "next/link";

const outfit = Outfit({ subsets: ['latin'] })

// Icons

export default function Article2() {

  useEffect(() => {
    AOS.init({})
  }, [])

  return (
    <>
      <Head>
        <title>Solusi Efektif untuk Limbah Lemak dan Minyak Dapur</title>
        <meta name="description" content="Grease trap, atau alat penangkap lemak, adalah perangkat yang dirancang untuk mencegah minyak, lemak, dan partikel padat masuk ke saluran pembuangan utama. Fungsinya sangat penting dalam menjaga kelancaran sistem pengelolaan limbah dapur, baik di restoran, hotel, maupun dapur rumah tangga." />
        <meta name="keywords" content="PT Gama Abyakta Sejahtera, Ecofix, Gas solution, sedot wc, jasa sedot wc, jasa saluran mampet, saluran mampet, jasa saluran mampet terdekat, jasa saluran mampet bekasi, alat pendorong saluran mampet, cara menggunakan soda api untuk saluran mampet, tukang saluran mampet, cara pakai soda api untuk saluran mampet, jasa saluran mampet jogja, jasa saluran mampet bandung, saluran mampet jogja, jasa saluran mampet jakarta, plumbing adalah, apa itu plumbing, pekerjaan plumbing, instalasi plumbing air bersih, sistem plumbing gedung bertingkat, plumbing air bersih, sistem plumbing adalah, mechanical electrical plumbing adalah, pekerjaan plumbing adalah, plumbness adalah, grease trap adalah, apa itu grease trap, cara membersihkan grease trap, cara kerja grease trap, biaya servis ac rumah, cara servis ac rumah, sedot wc terdekat, sedot wc jakarta" />
        <meta name="author" content="PT Gama Abyakta Sejahtera" />
        <meta property="og:title" content="Solusi Efektif untuk Limbah Lemak dan Minyak Dapur" />
        <meta property="og:description" content="Grease trap, atau alat penangkap lemak, adalah perangkat yang dirancang untuk mencegah minyak, lemak, dan partikel padat masuk ke saluran pembuangan utama. Fungsinya sangat penting dalam menjaga kelancaran sistem pengelolaan limbah dapur, baik di restoran, hotel, maupun dapur rumah tangga." />
        <meta property="og:image" content="/images/greasetrap.jpg" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main>
        <div className={`${outfit.className} overflow-x-hidden flex flex-col items-center justify-center p-8 pb-20 gap-8 sm:p-20 rounded-xl xl:mx-20`}>
          <div className="w-full flex flex-col items-start justify-center border rounded-full gap-4 p-3 mt-10">
            <div className="flex items-center justify-center gap-4 lg:gap-8">
              <Link href={"/blog"} className="bg-indigo-600 hover:bg-indigo-700 transition-all text-white rounded-full text-4xl lg:text-8xl p-2 lg:p-3 border-4 border-indigo-200" rel="canonical">
                <ArrowLeft />
              </Link>
              <h2 className="text-xl lg:text-3xl text-indigo-600 font-semibold">
                Kembali ke artikel lain
              </h2>
            </div>
          </div>

          <div className="w-full h-full flex items-start justify-between">
            <div className="flex flex-col w-full md:w-9/12 h-full pr-0 md:pr-4">
              <div className="h-56 md:h-96">
                <NewsCard2
                  title="Solusi Efektif untuk Limbah Lemak dan Minyak Dapur"
                  subtitle="Grease trap, atau alat penangkap lemak, adalah perangkat yang dirancang untuk mencegah minyak, lemak, dan partikel padat masuk ke saluran pembuangan utama. Fungsinya sangat penting dalam menjaga kelancaran sistem pengelolaan limbah dapur, baik di restoran, hotel, maupun dapur rumah tangga."
                  image="/images/greasetrap.jpg"
                  badge={{ text: "Rekomendasi", variant: "pink" }}>
                </NewsCard2>
              </div>

              <div className="flex flex-col gap-10">
                <p className="py-2 text-md md:text-lg text-justify">
                  Grease trap, atau alat penangkap lemak, adalah perangkat yang dirancang untuk mencegah minyak, lemak, dan partikel padat masuk ke saluran pembuangan utama. Fungsinya sangat penting dalam menjaga kelancaran sistem pengelolaan limbah dapur, baik di restoran, hotel, maupun dapur rumah tangga.
                </p>

                <div className="flex flex-col gap-2">
                  <h2 className="font-semibold text-xl md:text-2xl text-justify">
                    Cara Kerja Grease Trap
                  </h2>
                  <p className="text-md md:text-lg text-justify">
                    Grease trap memisahkan lemak dan minyak dari air limbah dapur. Proses ini dilakukan dengan memperlambat aliran air sehingga lemak mengapung ke permukaan, sementara partikel padat mengendap di dasar. Air yang telah tersaring lebih bersih dan dapat dibuang ke saluran pembuangan tanpa risiko penyumbatan.
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <h2 className="font-semibold text-xl md:text-2xl text-justify">
                    Manfaat Grease Trap
                  </h2>
                  <div className="text-md md:text-lg">
                    <ul className="list-disc text-justify">
                      <li>
                        <span className="font-semibold mr-2">
                          Mencegah Penyumbatan:
                        </span>
                        Minyak dan lemak yang terakumulasi dapat menyumbat pipa dan merusak sistem saluran.
                      </li>
                      <li>
                        <span className="font-semibold mr-2">
                          Perlindungan Lingkungan:
                        </span>
                        Dengan menyaring lemak sebelum mencapai sistem limbah umum, grease trap membantu mengurangi pencemaran air dan menjaga ekosistem.
                      </li>
                      <li>
                        <span className="font-semibold mr-2">
                          Kepatuhan Regulasi:
                        </span>
                        Banyak daerah mensyaratkan pengelolaan limbah lemak dengan alat seperti grease trap untuk menghindari denda atau sanksi hukum.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <h2 className="font-semibold text-xl md:text-2xl">
                    Pentingnya Pemeliharaan
                  </h2>
                  <p className="text-md md:text-lg text-justify">
                    Pemeliharaan berkala seperti pembersihan dan penggantian komponen penting dilakukan untuk menjaga efektivitas grease trap. Tanpa perawatan, grease trap dapat kehilangan fungsinya dan justru menyebabkan masalah baru, seperti bau tidak sedap atau penyumbatan.
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <h2 className="font-semibold text-xl md:text-2xl text-justify">
                    Referensi
                  </h2>
                  <div className="text-md md:text-lg text-indigo-600">
                    <ul className="list-disc text-justify">
                      <li>
                        <Link href={"https://dapurstainless.id/fungsi-alat-grease-trap/"} className="underline" rel="canonical">
                          Dapur Stainless
                        </Link>
                      </li>
                      <li>
                        <Link href={"https://www.sodarastainless.com/instalasi/grease-trap-industri-restoran/"} className="underline" rel="canonical">
                          Sodara Stainless
                        </Link>
                      </li>
                      <li>
                        <Link href={"https://wikielektronika.com/grease-trap/"} className="underline" rel="canonical">
                          WikiElektronika.com
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

              </div>


            </div>

            <div className="hidden md:flex md:w-3/12 border-l-2 flex-col gap-3 justify-end h-full pl-4">
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