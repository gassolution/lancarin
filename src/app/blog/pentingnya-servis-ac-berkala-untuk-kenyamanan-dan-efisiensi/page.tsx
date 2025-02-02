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

export default function Article1() {

  useEffect(() => {
    AOS.init({})
  }, [])

  return (
    <>
      <Head>
        <title>Pentingnya Servis AC Berkala untuk Kenyamanan dan Efisiensi | Ecofix</title>
        <meta name="description" content="Melakukan servis AC secara rutin adalah langkah penting untuk menjaga performa perangkat pendingin sekaligus menghemat biaya dalam jangka panjang." />
      </Head>
      <main>
        <div className={`${outfit.className} overflow-x-hidden flex flex-col items-center justify-center p-8 pb-20 gap-8 sm:p-20 rounded-xl xl:mx-20`}>
          <div className="w-full flex flex-col items-start justify-center border rounded-full gap-4 p-3 mt-10">
            <div className="flex items-center justify-center gap-4 lg:gap-8">
              <Link href={"/blog"} className="bg-indigo-600 hover:bg-indigo-700 transition-all text-white rounded-full text-4xl lg:text-8xl p-2 lg:p-3 border-4 border-indigo-200" rel="canonical">
                <ArrowLeft />
              </Link>
              <h1 className="text-xl lg:text-3xl text-indigo-600 font-semibold">
                Kembali ke artikel lain
              </h1>
            </div>
          </div>

          <div className="w-full h-full flex items-start justify-between">
            <div className="flex flex-col w-full md:w-9/12 h-full pr-0 md:pr-4">
              <div className="h-56 md:h-96">
                <NewsCard2
                  title="Pentingnya Servis AC Berkala untuk Kenyamanan dan Efisiensi"
                  subtitle="Melakukan servis AC secara rutin adalah langkah penting untuk menjaga performa perangkat pendingin sekaligus menghemat biaya dalam jangka panjang."
                  image="/images/acmaintenance.jpg"
                  badge={{ text: "Rekomendasi", variant: "pink" }}>
                </NewsCard2>
              </div>

              <div className="flex flex-col gap-10">
                <p className="py-2 text-md md:text-lg text-justify">
                  Melakukan servis AC secara rutin adalah langkah penting untuk menjaga performa perangkat pendingin sekaligus menghemat biaya dalam jangka panjang. Berikut manfaat utama servis AC berkala:
                </p>
                <div className="text-md md:text-lg text-justify">
                  <ul className="list-disc">
                    <li>
                      <span className="font-semibold mr-2">
                        Efisiensi Energi Lebih Baik.
                      </span>
                      AC yang kotor memerlukan lebih banyak energi untuk mencapai suhu yang diinginkan, sehingga meningkatkan tagihan listrik. Pembersihan rutin memastikan kinerja optimal dengan penggunaan energi lebih hemat.
                    </li>
                    <li>
                      <span className="font-semibold mr-2">
                        Memperpanjang Umur Pemakaian AC
                      </span>
                      Kerusakan kecil yang tidak terdeteksi dapat memperpendek usia pakai AC. Melalui servis berkala, teknisi dapat mengidentifikasi dan memperbaiki masalah sejak dini.
                    </li>
                    <li>
                      <span className="font-semibold mr-2">
                        Kualitas Udara Lebih Bersih
                      </span>
                      Debu dan bakteri yang menumpuk pada filter dan komponen AC dapat mencemari udara di dalam ruangan. Perawatan rutin membersihkan filter sehingga udara yang dihasilkan lebih sehat.
                    </li>
                    <li>
                      <span className="font-semibold mr-2">
                        Mencegah Gangguan Mendadak
                      </span>
                      Pemeliharaan rutin mengurangi risiko AC rusak di tengah penggunaan, seperti saat cuaca panas. Teknisi juga dapat memastikan komponen dalam kondisi baik sebelum terjadi kerusakan besar.
                    </li>
                    <li>
                      <span className="font-semibold mr-2">
                        Kenyamanan Maksimal
                      </span>
                      AC yang dirawat dengan baik akan menghasilkan udara lebih dingin, stabil, dan bekerja dengan lebih tenang, meningkatkan kenyamanan penghuni.
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col gap-2">
                  <h2 className="font-semibold text-xl md:text-2xl">
                    Kesimpulan
                  </h2>
                  <p className="text-md md:text-lg text-justify">
                    Jadwal servis AC disarankan setiap 3–6 bulan sekali, tergantung tingkat pemakaian. Langkah ini tidak hanya menghemat biaya listrik tetapi juga memastikan udara yang lebih sehat di rumah atau tempat kerja.
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <h2 className="font-semibold text-xl md:text-2xl text-justify">
                    Referensi
                  </h2>
                  <div className="text-md md:text-lg text-indigo-600">
                    <ul className="list-disc text-justify">
                      <li>
                        <Link href={"https://micool.id/blog/detail/mengapa-service-ac-secara-berkala-penting-untuk-kesehatan-ac-anda"} className="underline" rel="canonical">
                          Mengapa Service AC Secara Berkala Penting untuk Kesehatan AC Anda?

                        </Link>
                      </li>
                      <li>
                        <Link href={"https://www.abangbenerin.com/blog/mengapa-service-ac-rutin-itu-penting-simak-manfaatnya/"} className="underline" rel="canonical">
                          5 Alasan Mengapa Anda Harus Melakukan Service AC Rutin
                        </Link>
                      </li>
                      <li>
                        <Link href={"https://www.abangbenerin.com/blog/4-alasan-pentingnya-melakukan-service-ac/"} className="underline" rel="canonical">
                          Tips Penting Merawat AC Anda Agar Tetap Awet
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