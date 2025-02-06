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

export default function Article1() {

  useEffect(() => {
    AOS.init({})
  }, [])

  return (
    <>
      <Head>
        <title>Jangan Nunggu AC Rusak, Baru Panik! | Lancarin</title>
        <meta name="description" content="Servis AC rutin itu penting, loh! Jangan sampai tunggu rusak dulu, kamu perlu merawatnya!" />
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
                  title="Jangan Nunggu AC Rusak, Baru Panik!"
                  subtitle="Servis AC rutin itu penting, loh! Jangan sampai tunggu rusak dulu, kamu perlu merawatnya!"
                  image="/images/acmaintenance.jpg"
                  badge={{ text: "Rekomendasi", variant: "pink" }}>
                </NewsCard2>
              </div>

              <div className="flex flex-col gap-10">
                <p className="py-2 text-md md:text-lg text-justify">
                  Jangan tunggu AC tiba-tiba ngadat terus panik cari teknisi! Servis rutin itu kunci biar AC tetap adem, nggak boros listrik, dan nggak bikin kantong jebol. Yuk, cek alasan kenapa servis AC itu wajib!
                </p>
                <div className="text-md md:text-lg text-justify">
                  <ul className="text-justify">
                    <li>
                      <span className="bg-green-600 px-2 rounded-md text-white mr-2">
                        Tagihan Listrik Tetap Waras
                      </span>
                      AC yang kotor butuh tenaga ekstra buat nyampe suhu yang kamu mau. Hasilnya? Listrik makin boros! Servis rutin bikin AC lebih efisien dan dompet tetap aman.
                    </li>
                    <li>
                      <span className="bg-green-600 px-2 rounded-md text-white mr-2">
                        AC Awet, Gak Cepat KO
                      </span>
                      Kalau nggak pernah dicek, komponen dalam AC bisa rusak pelan-pelan tanpa disadari. Dengan servis rutin, masalah kecil bisa ketahuan duluan sebelum jadi bencana!
                    </li>
                    <li>
                      <span className="bg-green-600 px-2 rounded-md text-white mr-2">
                        Udara Lebih Sehat
                      </span>
                      AC yang jarang diservis bisa jadi sarang debu, kuman, bahkan jamur. Duh, bisa bikin alergi kambuh! Rajin bersihin filter bikin udara di rumah tetap segar dan sehat.
                    </li>
                    <li>
                      <span className="bg-green-600 px-2 rounded-md text-white mr-2">
                        Bye-bye AC Rewel
                      </span>
                      AC bisa tiba-tiba mati pas lagi panas-panasnya? Nggak asik banget! Servis rutin bantu cegah kejadian nyebelin kayak gini.
                    </li>
                    <li>
                      <span className="bg-green-600 px-2 rounded-md text-white mr-2">
                        Tetap Nyaman dan Adem Maksimal
                      </span>
                      AC yang terawat bikin ruangan tetap sejuk, suara nggak berisik, dan nggak tiba-tiba bau aneh. Siapa yang nggak mau?
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col gap-2">
                  <h2 className="font-semibold text-xl md:text-2xl">
                    Kesimpulan
                  </h2>
                  <p className="text-md md:text-lg text-justify">
                    Nggak mau AC rusak di saat genting? Servis minimal tiap 3–6 bulan sekali, ya! Dijamin AC lebih awet, listrik nggak boros, dan udara di rumah tetap fresh. Yuk, rawat AC sebelum nyesel!
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