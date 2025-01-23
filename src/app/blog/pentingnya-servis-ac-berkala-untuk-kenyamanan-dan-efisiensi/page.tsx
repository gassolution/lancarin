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
import Link from "next/link";

const outfit = Outfit({ subsets: ['latin'] })

// Icons

export default function Article1() {

  useEffect(() => {
    AOS.init({})
  }, [])

  return (
    <main>
      <div className={`${outfit.className} overflow-x-hidden flex flex-col items-center justify-center p-8 pb-20 gap-4 sm:p-20 rounded-xl mx-20`}>
        <div className="w-full flex flex-col items-start justify-center border rounded-full gap-4 p-3 mt-10">
          <div className="flex items-center justify-center gap-8">
            <Link href={"/service"} className="bg-indigo-600 hover:bg-indigo-700 transition-all text-white rounded-full text-8xl p-3 border-4 border-indigo-200">
              <ArrowLeft />
            </Link>
            <h1 className="text-3xl text-indigo-600 font-semibold">
              Kembali ke artikel lain
            </h1>
          </div>
        </div>

        <div className="w-full h-full flex items-start justify-between">
          <div className="flex flex-col w-9/12 h-full pr-4">
            <div className="h-96">
              <NewsCard2
                title="Pentingnya Servis AC Berkala untuk Kenyamanan dan Efisiensi"
                subtitle="Melakukan servis AC secara rutin adalah langkah penting untuk menjaga performa perangkat pendingin sekaligus menghemat biaya dalam jangka panjang."
                image="/images/acmaintenance.jpg"
                badge={{ text: "Rekomendasi", variant: "pink" }}>
              </NewsCard2>
            </div>

            <div className="flex flex-col gap-10">
              <p className="py-2 text-lg">
                Saluran pembuangan yang mampet atau tersumbat adalah masalah umum yang sering terjadi di rumah, kantor, atau fasilitas umum lainnya. Selain dapat menimbulkan bau tidak sedap, saluran mampet juga dapat menyebabkan kerusakan lebih lanjut jika tidak segera ditangani. Dalam artikel ini, kita akan membahas penyebab saluran mampet dan bagaimana cara mengatasinya secara efektif.
              </p>

              <div className="flex flex-col gap-2">
                <h2 className="font-semibold text-2xl">
                  Penyebab Saluran Mampet
                </h2>
                <p className="text-lg">
                  Saluran pembuangan yang mampet biasanya disebabkan oleh beberapa faktor berikut:
                </p>
                <div className="text-lg">
                  <ul className="list-disc">
                    <li>
                      <span className="font-semibold mr-2">
                        Penumpukan Lemak dan Minyak.
                      </span>
                      Salah satu penyebab utama saluran dapur mampet adalah penumpukan minyak dan lemak. Ketika minyak atau lemak masuk ke saluran pembuangan, mereka mengeras seiring waktu dan membentuk lapisan yang menyumbat saluran.
                    </li>
                    <li>
                      <span className="font-semibold mr-2">
                        Sisa Makanan
                      </span>
                      Sisa makanan yang tidak terbuang dengan benar dan masuk ke saluran pembuangan juga dapat menyebabkan penyumbatan. Makanan yang terperangkap dalam pipa bisa menumpuk, menciptakan blokade yang semakin besar.
                    </li>
                    <li>
                      <span className="font-semibold mr-2">
                        Akar Pohon
                      </span>
                      Akar pohon yang tumbuh terlalu dekat dengan saluran pembuangan dapat menembus pipa dan menyebabkan penyumbatan. Ini sering terjadi pada saluran pembuangan yang lebih tua atau yang memiliki sambungan pipa yang rapuh.
                    </li>
                    <li>
                      <span className="font-semibold mr-2">
                        Serat atau Bahan Organik Lainnya
                      </span>
                      Penggunaan tisu atau serat bahan organik lainnya yang tidak mudah terurai sering kali menjadi penyebab saluran mampet. Selain itu, rambut yang terperangkap dalam saluran pembuangan kamar mandi juga bisa memperburuk penyumbatan.
                    </li>
                    <li>
                      <span className="font-semibold mr-2">
                        Pipa yang Sudah Tua atau Rusak
                      </span>
                      Pipa yang sudah tua atau rusak juga rentan mengalami penyumbatan. Pipa yang terkelupas atau patah bisa menghambat aliran air dan menyebabkan masalah pada saluran pembuangan.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <h2 className="font-semibold text-2xl">
                  Cara Mengatasi Saluran Mampet
                </h2>
                <div className="text-lg">
                  <ul className="list-disc">
                    <li>
                      <span className="font-semibold mr-2">
                        Gunakan Alat Sederhana (Plunger).
                      </span>
                      Salah satu cara termudah untuk mengatasi saluran mampet adalah dengan menggunakan plunger. Alat ini bekerja dengan cara menciptakan tekanan udara untuk mendorong sumbatan keluar dari saluran. Plunger sangat efektif untuk saluran yang tidak terlalu dalam atau terhalang oleh benda-benda besar.
                    </li>
                    <li>
                      <span className="font-semibold mr-2">
                        Cairan Pembersih Saluran
                      </span>
                      Menggunakan cairan pembersih saluran yang dijual di pasaran bisa membantu membersihkan saluran yang tersumbat akibat minyak, lemak, atau sisa makanan. Namun, hati-hati dalam menggunakan cairan kimia ini, karena jika digunakan secara berlebihan bisa merusak pipa atau berbahaya bagi lingkungan.
                    </li>
                    <li>
                      <span className="font-semibold mr-2">
                        Akar Pohon
                      </span>
                      Akar pohon yang tumbuh terlalu dekat dengan saluran pembuangan dapat menembus pipa dan menyebabkan penyumbatan. Ini sering terjadi pada saluran pembuangan yang lebih tua atau yang memiliki sambungan pipa yang rapuh.
                    </li>
                    <li>
                      <span className="font-semibold mr-2">
                        Menggunakan Alat Pembersih Saluran (Drain Snake)
                      </span>
                      Drain snake atau alat pembersih saluran berbentuk seperti kabel panjang yang dapat dimasukkan ke dalam pipa untuk menarik sumbatan keluar. Alat ini sangat berguna untuk saluran pembuangan yang lebih dalam atau yang tersumbat oleh akar pohon atau benda keras lainnya.
                    </li>
                    <li>
                      <span className="font-semibold mr-2">
                        Bersihkan secara Rutin
                      </span>
                      Untuk mencegah saluran pembuangan mampet di kemudian hari, sebaiknya lakukan pembersihan saluran secara rutin. Hindari membuang minyak atau lemak langsung ke saluran dan pastikan tidak ada sisa makanan yang ikut masuk.
                    </li>
                    <li>
                      <span className="font-semibold mr-2">
                        Panggil Jasa Profesional
                      </span>
                      Jika saluran pembuangan sudah terlanjur mampet parah atau jika Anda tidak berhasil mengatasinya sendiri, panggilan kepada jasa profesional adalah langkah terbaik. Teknisi plumbing berpengalaman dapat dengan cepat mengidentifikasi penyebab mampet dan memberikan solusi yang lebih permanen, seperti mengganti pipa yang rusak atau melakukan pembersihan mendalam.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <h2 className="font-semibold text-2xl">
                  Pencegahan Saluran Mampet
                </h2>
                <p className="text-lg">
                  Untuk mencegah masalah saluran mampet di masa depan, beberapa langkah pencegahan yang dapat dilakukan antara lain:
                </p>
                <div className="text-lg">
                  <ul className="list-disc">
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
                <h2 className="font-semibold text-2xl">
                  Kesimpulan
                </h2>
                <p className="text-lg">
                  Saluran mampet adalah masalah yang sering dihadapi, namun dapat diatasi dengan cara yang mudah dan efektif. Dengan menjaga kebersihan saluran pembuangan dan menangani masalah saluran dengan cepat, Anda dapat mencegah kerusakan lebih lanjut. Jika masalah terus berlanjut atau tidak dapat diselesaikan sendiri, jangan ragu untuk menghubungi profesional untuk perbaikan lebih lanjut.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <h2 className="font-semibold text-2xl">
                  Referensi
                </h2>
                <div className="text-lg text-indigo-600">
                  <ul className="list-disc">
                    <li>
                      <Link href={"https://www.homedepot.com/c/Plumbing"} className="underline">
                        The Home Depot - Plumbing
                      </Link>
                    </li>
                    <li>
                      <Link href={"https://www.angieslist.com/plumbing/"} className="underline">
                        Angie's List - Plumbing & Drain Cleaning
                      </Link>
                    </li>
                    <li>
                      <Link href={"https://www.diyplumbing.co.uk/"} className="underline">
                        DIY Plumbing Solutions
                      </Link>
                    </li>
                    <li>
                      <Link href={"https://www.familyhandyman.com/project/how-to-unclog-a-drain/"} className="underline">
                        Family Handyman - How to Unclog a Drain
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

            </div>


          </div>

          <div className="w-3/12 border-l-2  flex flex-col gap-3 justify-end h-full pl-4">
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
  );
}