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

export default function Article3() {

  useEffect(() => {
    AOS.init({})
  }, [])

  return (
    <>
      <Head>
        <title>Saluran Lancar, Hidup Tenang! Tips Ampuh Atasi Pipa Mampet | Lancarin</title>
        <meta name="description" content="Tips mengatasi saluran mampet dengan mudah." />
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
                  title="Saluran Lancar, Hidup Tenang! Tips Ampuh Atasi Pipa Mampet"
                  subtitle="Tips mengatasi saluran mampet dengan mudah."
                  image="/images/saluranair.jpg"
                  badge={{ text: "Rekomendasi", variant: "pink" }}>
                </NewsCard2>
              </div>

              <div className="flex flex-col gap-10">
                <p className="py-2 text-md md:text-lg text-justify">
                  Nggak perlu pakai alat canggih! Beberapa bahan di rumah bisa bantu atasi saluran tersumbat dengan cepat. Selain dapat menimbulkan bau tidak sedap, saluran mampet juga dapat menyebabkan kerusakan lebih lanjut jika tidak segera ditangani. Dalam artikel ini, kita akan membahas penyebab saluran mampet dan bagaimana cara mengatasinya secara efektif.
                </p>

                <div className="flex flex-col gap-2">
                  <h2 className="font-semibold text-xl md:text-2xl text-justify">
                    Penyebab Saluran Mampet
                  </h2>
                  <p className="text-md md:text-lg text-justify">
                    Pernah ngalamin air di wastafel nggak mau ngalir atau malah bikin genangan horor di kamar mandi? Bisa jadi, ada &quot;tamu tak diundang&quot; yang bikin saluran mampet! Nih, beberapa penyebabnya:
                  </p>
                  <div className="text-md md:text-lg text-justify">
                    <ul className="text-justify">
                      <li>
                        <span className="bg-green-600 px-2 rounded-md text-white mr-2">
                          Penumpukan Lemak dan Minyak.
                        </span>
                        Pernah kepikiran ke mana perginya minyak sisa gorengan yang kamu buang ke wastafel? Yup, dia nggak menguap begitu aja! Minyak yang dingin bakal mengeras dan nempel di dinding pipa, makin lama makin tebal, lalu… BOOM! Saluran mampet total!
                      </li>
                      <li>
                        <span className="bg-green-600 px-2 rounded-md text-white mr-2">
                          Sisa Makanan Nakal
                        </span>
                        Niatnya sih nyiram piring biar bersih, tapi kalau remah-remah makanan ikut masuk ke saluran, lama-lama mereka bikin koloni di dalam sana! Makin lama makin numpuk, akhirnya pipa pun tersumbat.
                      </li>
                      <li>
                        <span className="bg-green-600 px-2 rounded-md text-white mr-2">
                          Akar Pohon
                        </span>
                        Siapa sangka kalau akar pohon bisa nyari jalan sampai ke pipa saluran? Mereka ini kayak detektif pencari air, dan kalau ada retakan di pipa, akar bakal masuk dan bertumbuh di dalamnya. Hasilnya? Pipa mampet total!
                      </li>
                      <li>
                        <span className="bg-green-600 px-2 rounded-md text-white mr-2">
                          Rambut & Serat Nakal
                        </span>
                        Habis keramas, terus lihat ada segumpal rambut nyangkut di saluran? Jangan biarin, deh! Rambut yang nyangkut bisa kayak jaring laba-laba, nangkep kotoran lain sampai akhirnya bikin aliran air jadi stuck.
                      </li>
                      <li>
                        <span className="bg-green-600 px-2 rounded-md text-white mr-2">
                          Pipa Sudah Tua & Rapuh
                        </span>
                        Pipa yang udah berumur bisa ngalamin retak, pecah, atau lapuk. Kalau dibiarkan, serpihan dari pipa itu sendiri bisa jadi penghalang aliran air.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <h2 className="font-semibold text-xl md:text-2xl text-justify">
                    Cara Mengatasi Saluran Mampet
                  </h2>
                  <div className="text-md md:text-lg">
                    <ul className="text-justify">
                      <li>
                        <span className="bg-green-600 px-2 rounded-md text-white mr-2">
                          Gunakan Alat Sederhana (Plunger).
                        </span>
                        Salah satu cara termudah untuk mengatasi saluran mampet adalah dengan menggunakan plunger. Alat ini bekerja dengan cara menciptakan tekanan udara untuk mendorong sumbatan keluar dari saluran. Plunger sangat efektif untuk saluran yang tidak terlalu dalam atau terhalang oleh benda-benda besar.
                      </li>
                      <li>
                        <span className="bg-green-600 px-2 rounded-md text-white mr-2">
                          Cairan Pembersih Saluran
                        </span>
                        Menggunakan cairan pembersih saluran yang dijual di pasaran bisa membantu membersihkan saluran yang tersumbat akibat minyak, lemak, atau sisa makanan. Namun, hati-hati dalam menggunakan cairan kimia ini, karena jika digunakan secara berlebihan bisa merusak pipa atau berbahaya bagi lingkungan.
                      </li>
                      <li>
                        <span className="bg-green-600 px-2 rounded-md text-white mr-2">
                          Akar Pohon
                        </span>
                        Akar pohon yang tumbuh terlalu dekat dengan saluran pembuangan dapat menembus pipa dan menyebabkan penyumbatan. Ini sering terjadi pada saluran pembuangan yang lebih tua atau yang memiliki sambungan pipa yang rapuh.
                      </li>
                      <li>
                        <span className="bg-green-600 px-2 rounded-md text-white mr-2">
                          Menggunakan Alat Pembersih Saluran (Drain Snake)
                        </span>
                        Drain snake atau alat pembersih saluran berbentuk seperti kabel panjang yang dapat dimasukkan ke dalam pipa untuk menarik sumbatan keluar. Alat ini sangat berguna untuk saluran pembuangan yang lebih dalam atau yang tersumbat oleh akar pohon atau benda keras lainnya.
                      </li>
                      <li>
                        <span className="bg-green-600 px-2 rounded-md text-white mr-2">
                          Bersihkan secara Rutin
                        </span>
                        Untuk mencegah saluran pembuangan mampet di kemudian hari, sebaiknya lakukan pembersihan saluran secara rutin. Hindari membuang minyak atau lemak langsung ke saluran dan pastikan tidak ada sisa makanan yang ikut masuk.
                      </li>
                      <li>
                        <span className="bg-green-600 px-2 rounded-md text-white mr-2">
                          Panggil Jasa Profesional
                        </span>
                        Jika saluran pembuangan sudah terlanjur mampet parah atau jika Anda tidak berhasil mengatasinya sendiri, panggilan kepada jasa profesional adalah langkah terbaik. Teknisi plumbing berpengalaman dapat dengan cepat mengidentifikasi penyebab mampet dan memberikan solusi yang lebih permanen, seperti mengganti pipa yang rusak atau melakukan pembersihan mendalam.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <h2 className="font-semibold text-xl md:text-2xl text-justify">
                    Pencegahan Saluran Mampet
                  </h2>
                  <p className="text-md md:text-lg text-justify">
                    Untuk mencegah masalah saluran mampet di masa depan, beberapa langkah pencegahan yang dapat dilakukan antara lain:
                  </p>
                  <div className="text-md md:text-lg">
                    <ul className="list-disc text-justify">
                      <li>
                        Hindari membuang minyak, lemak, atau sisa makanan ke dalam saluran.
                      </li>
                      <li>
                        Gunakan saringan untuk menangkap rambut atau benda-benda kecil lainnya di saluran kamar mandi.
                      </li>
                      <li>
                        Periksa dan bersihkan saluran secara berkala.
                      </li>
                      <li>
                        Pastikan tidak ada benda keras atau sampah yang masuk ke dalam saluran pembuangan.
                      </li>
                    </ul>
                  </div>
                </div>


                <div className="flex flex-col gap-2">
                  <h2 className="font-semibold text-xl md:text-2xl">
                    Kesimpulan
                  </h2>
                  <p className="text-md md:text-lg text-justify">
                    Saluran mampet adalah masalah yang sering dihadapi, namun dapat diatasi dengan cara yang mudah dan efektif. Dengan menjaga kebersihan saluran pembuangan dan menangani masalah saluran dengan cepat, Anda dapat mencegah kerusakan lebih lanjut. Jika masalah terus berlanjut atau tidak dapat diselesaikan sendiri, jangan ragu untuk menghubungi profesional untuk perbaikan lebih lanjut.
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
                href="/artikel/saluran-lancar-hidup-tenang-tips-ampuh-atasi-pipa-mampet">
              </Card08>
            </div>

          </div>

        </div>
      </main >
    </>
  );
}