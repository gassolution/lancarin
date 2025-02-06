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
import Head from "next/head";
import Link from "next/link";

// Font
import { Tilt_Neon } from 'next/font/google';
const tiltneon = Tilt_Neon({ subsets: ['latin'] })

export default function Article2() {

  useEffect(() => {
    AOS.init({})
  }, [])

  return (
    <>
      <Head>
        <title>Minyak Bekas Bikin Ribet? Ini Solusinya! | Lancarin</title>
        <meta name="description" content="Grease trap itu kayak filter buat minyak dan lemak di dapur. Alat ini tugasnya nangkep lemak, minyak, dan sisa makanan biar nggak langsung masuk ke saluran pembuangan. Kenapa penting? Soalnya kalau dibiarkan, minyak bisa mengeras dan bikin pipa mampet, bahkan nyebabin bau nggak sedap. Dengan grease trap, limbah dapur lebih terkontrol, lingkungan lebih bersih, dan saluran air tetap lancar! Fungsinya sangat penting dalam menjaga kelancaran sistem pengelolaan limbah dapur, baik di restoran, hotel, maupun dapur rumah tangga." />
      </Head>
      <main>
        <div className={`${tiltneon.className} overflow-x-hidden flex flex-col items-center justify-center p-8 pb-20 gap-8 sm:p-20 rounded-xl xl:mx-20`}>
          <div className="w-full flex flex-col items-start justify-center gap-4 p-3 mt-10">
            <Link href={"/artikel"} className="flex items-center gap-2 bg-white-500 bg-green-500 hover:bg-green-600 px-4 py-2 rounded-xl transition-all text-white text-4xl lg:text-8xl" rel="canonical">
              <ArrowLeft />
              <h1 className="text-xl text-white">
                Kembali ke artikel lain
              </h1>
            </Link>
          </div>

          <div className="w-full h-full flex items-start justify-between">
            <div className="flex flex-col w-full md:w-9/12 h-full pr-0 md:pr-4">
              <div className="h-56 md:h-96">
                <NewsCard2
                  title="Minyak Bekas Bikin Ribet? Ini Solusinya!"
                  subtitle="Grease trap itu kayak filter buat minyak dan lemak di dapur. Alat ini tugasnya nangkep lemak, minyak, dan sisa makanan biar nggak langsung masuk ke saluran pembuangan. Kenapa penting? Soalnya kalau dibiarkan, minyak bisa mengeras dan bikin pipa mampet, bahkan nyebabin bau nggak sedap. Dengan grease trap, limbah dapur lebih terkontrol, lingkungan lebih bersih, dan saluran air tetap lancar! Fungsinya sangat penting dalam menjaga kelancaran sistem pengelolaan limbah dapur, baik di restoran, hotel, maupun dapur rumah tangga."
                  image="/images/greasetrap.jpg"
                  badge={{ text: "Rekomendasi", variant: "pink" }}>
                </NewsCard2>
              </div>

              <div className="flex flex-col gap-10">
                <p className="py-2 text-md md:text-lg text-justify">
                  Grease trap itu kayak filter buat minyak dan lemak di dapur. Alat ini tugasnya nangkep lemak, minyak, dan sisa makanan biar nggak langsung masuk ke saluran pembuangan. Kenapa penting? Soalnya kalau dibiarkan, minyak bisa mengeras dan bikin pipa mampet, bahkan nyebabin bau nggak sedap. Dengan grease trap, limbah dapur lebih terkontrol, lingkungan lebih bersih, dan saluran air tetap lancar! Fungsinya sangat penting dalam menjaga kelancaran sistem pengelolaan limbah dapur, baik di restoran, hotel, maupun dapur rumah tangga.
                </p>

                <div className="flex flex-col gap-2">
                  <h2 className="font-semibold text-xl md:text-2xl text-justify">
                    Grease Trap? Apaan, Tuh?
                  </h2>
                  <p className="text-md md:text-lg text-justify">
                    Jadi gini, grease trap itu kayak penjaga gerbang di dapur kamu. Begitu air limbah ngalir masuk, alat ini bakal melambatkan alirannya biar minyak dan lemak bisa naik ke permukaan, sementara sisa makanan dan partikel padat bakal tenggelam ke dasar. Air yang udah &quot;disaring&quot; ini akhirnya bisa keluar ke saluran pembuangan tanpa drama pipa mampet. Gampang, kan? 🚰💨
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <h2 className="font-semibold text-xl md:text-2xl text-justify">
                    Kenapa Sih Harus Pakai Grease Trap?
                  </h2>
                  <div className="text-md md:text-lg">
                    <ul className="text-justify">
                      <li>
                        <span className="bg-green-600 px-2 rounded-md text-white mr-2">
                          Biar Pipa Gak Nangis!
                        </span>
                        Minyak yang numpuk itu bisa bikin mampet dan nyusahin di kemudian hari. Dengan grease trap, pipa kamu aman dari drama penyumbatan!
                      </li>
                      <li>
                        <span className="bg-green-600 px-2 rounded-md text-white mr-2">
                          Sayang Lingkungan, Yuk!
                        </span>
                        Lemak yang nyelonong ke saluran air bisa merusak ekosistem. Grease trap bantu ngefilter biar lingkungan tetap sehat dan air tetap bersih.
                      </li>
                      <li>
                        <span className="bg-green-600 px-2 rounded-md text-white mr-2">
                          Biar Nggak Kena Denda!
                        </span>
                        Di beberapa tempat, ada aturan ketat soal pengelolaan limbah minyak. Pakai grease trap itu kayak punya &quot;kartu bebas masalah,&quot; jadi kamu nggak perlu takut kena sanksi.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <h2 className="font-semibold text-xl md:text-2xl">
                    Jangan Lupa Dirawat!
                  </h2>
                  <p className="text-md md:text-lg text-justify">
                    Grease trap juga butuh perhatian. Kalau dibiarkan terlalu lama tanpa dibersihin, dia malah bisa jadi sumber bau nggak enak atau malah bikin mampet sendiri. Coba deh, luangkan waktu buat cek, bersihin, atau ganti komponen kalau perlu. Pipa aman, dapur adem, hidup tenang! 😌✨
                  </p>
                </div>

              </div>


            </div>

            <div className="hidden md:flex md:w-3/12 border-l-2 flex-col gap-3 justify-end h-full pl-4">
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