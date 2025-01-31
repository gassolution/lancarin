"use client"

// Libs
import "animate.css/animate.compat.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from 'next/image';
import { useEffect } from "react";

// UI Libs

// Font
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BadgeDollarSign, BetweenHorizontalStart, Store, Wrench } from "lucide-react";
import { Outfit } from 'next/font/google';
import Head from "next/head";
import Link from "next/link";

const outfit = Outfit({ subsets: ['latin'] })

// Icons

export default function Information() {

  useEffect(() => {
    AOS.init({})
  }, [])

  return (
    <>
      <Head>
        <title>Informasi Ecofix</title>
        <meta name="description" content="Simak informasi karir dan kompetisi dari Ecofix!" />
        <meta name="keywords" content="PT Gama Abyakta Sejahtera, Ecofix, Gas solution, sedot wc, jasa sedot wc, jasa saluran mampet, saluran mampet, jasa saluran mampet terdekat, jasa saluran mampet bekasi, alat pendorong saluran mampet, cara menggunakan soda api untuk saluran mampet, tukang saluran mampet, cara pakai soda api untuk saluran mampet, jasa saluran mampet jogja, jasa saluran mampet bandung, saluran mampet jogja, jasa saluran mampet jakarta, plumbing adalah, apa itu plumbing, pekerjaan plumbing, instalasi plumbing air bersih, sistem plumbing gedung bertingkat, plumbing air bersih, sistem plumbing adalah, mechanical electrical plumbing adalah, pekerjaan plumbing adalah, plumbness adalah, grease trap adalah, apa itu grease trap, cara membersihkan grease trap, cara kerja grease trap, biaya servis ac rumah, cara servis ac rumah, sedot wc terdekat, sedot wc jakarta" />
        <meta name="author" content="PT Gama Abyakta Sejahtera" />
        <meta property="og:title" content="Informasi Ecofix" />
        <meta property="og:description" content="Simak informasi karir dan kompetisi dari Ecofix!" />
        <meta property="og:image" content="/images/saluranair.jpg" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main>
        <div className={`${outfit.className} overflow-x-hidden flex flex-col items-center justify-center p-8 pb-20 gap-8 sm:p-20 rounded-xl xl:mx-20`}>
          <div className="w-full flex flex-col items-center justify-center gap-4">
            <Tabs defaultValue="career" className="w-full py-10">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="career">Career</TabsTrigger>
                <TabsTrigger value="competition">Competition</TabsTrigger>
              </TabsList>
              <TabsContent value="career">
                <div className="py-10 flex flex-col gap-4">
                  <h1 className="text-center text-xl sm:text-2xl lg:text-3xl font-bold">
                    Career - Full Time
                  </h1>

                  <p className="text-md lg:text-lg text-justify">
                    Seiring dengan perkembangan bisnis dan perusahaan kami, tentunya kami membutuhkan para individu yang siap untuk memberikan yang terbaik sesuai dengan visi perusahaan untuk bergabung bersama tim Kami!

                    Saat ini Kami sedang mencari pelamar untuk posisi dan kriteria sebagai berikut:
                  </p>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6">
                    <div className="flex flex-col justify-start items-center text-lg p-4 xl:p-8 bg-red-100 rounded-xl border-2 border-red-600 gap-4">
                      <h2 className="text-center text-lg sm:text-xl lg:text-2xl flex font-semibold bg-red-600 text-white rounded-full px-4 py-2 gap-2 items-center justify-center">
                        <Wrench />
                        Teknisi
                      </h2>

                      <div className="flex flex-col items-start justify-center w-full px-6">
                        <h3 className="font-semibold text-base sm:text-lg">
                          Deskripsi Pekerjaan:
                        </h3>
                        <ul className="list-disc text-base lg:text-lg">
                          <li>
                            Melakukan survey & Perawatan
                          </li>
                          <li>
                            Membuat laporan kerja harian
                          </li>
                          <li>
                            Membangun hubungan baik dengan customer
                          </li>
                          <li>
                            Melakukan perawatan berkala peralatan
                          </li>
                          <li>
                            Menjalankan SOP service
                          </li>
                        </ul>
                      </div>

                      <div className="flex flex-col items-start justify-center w-full px-6">
                        <h3 className="font-semibold text-base sm:text-lg">
                          Kualifikasi:
                        </h3>
                        <ul className="list-disc text-base lg:text-lg">
                          <li>
                            Pendidikan Min. SMK
                          </li>
                          <li>
                            Pengalaman Min. 1 tahun di bidang engineering
                          </li>
                          <li>
                            Memiliki kemampuan berkomunikasi
                          </li>
                          <li>
                            Mampu bekerja dalam tim
                          </li>
                          <li>
                            Bersedia bekerja shift
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-col justify-start items-center text-lg p-4 xl:p-8 bg-emerald-100 rounded-xl border-2 border-emerald-600 gap-4">
                      <h2 className="text-center text-lg sm:text-xl lg:text-2xl flex font-semibold bg-emerald-600 text-white rounded-full px-4 py-2 gap-2 items-center justify-center">
                        <BadgeDollarSign />
                        Sales
                      </h2>

                      <div className="flex flex-col items-start justify-center w-full px-6">
                        <h3 className="font-semibold text-base sm:text-lg">
                          Deskripsi Pekerjaan:
                        </h3>
                        <ul className="list-disc text-base lg:text-lg">
                          <li>
                            Mencapai target penjualan
                          </li>
                          <li>
                            Mempunyai kemampuan project consultant
                          </li>
                          <li>
                            Membangun hubungan dengan customer
                          </li>
                          <li>
                            Membuat market segmentation
                          </li>
                          <li>
                            Membuat action plan penjualan
                          </li>
                        </ul>
                      </div>

                      <div className="flex flex-col items-start justify-center w-full px-6">
                        <h3 className="font-semibold">
                          Kualifikasi:
                        </h3>
                        <ul className="list-disc text-base lg:text-lg">
                          <li>
                            Pendidikan Min. S1
                          </li>
                          <li>
                            Pengalaman Min. 2 tahun di Industri MEP
                          </li>
                          <li>
                            Great Networking
                          </li>
                          <li>
                            Target Oriented
                          </li>
                          <li>
                            Kemampuan komunikasi, negosiasi & closing
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-col justify-start items-center text-lg p-4 xl:p-8 bg-violet-100 rounded-xl border-2 border-violet-600 gap-4">
                      <h2 className="text-center text-lg sm:text-xl lg:text-2xl flex font-semibold bg-violet-600 text-white rounded-full px-4 py-2 gap-2 items-center justify-center">
                        <BetweenHorizontalStart />
                        Accounting Staff
                      </h2>

                      <div className="flex flex-col items-start justify-center w-full px-6">
                        <h3 className="font-semibold text-base sm:text-lg">
                          Deskripsi Pekerjaan:
                        </h3>
                        <ul className="list-disc  text-base lg:text-lg">
                          <li>
                            Melakukan posting jurnal
                          </li>
                          <li>
                            Membuat pembukuan kantor
                          </li>
                          <li>
                            Membuat laporan keuangan
                          </li>
                          <li>
                            Mengoperasikan sistem Accurate
                          </li>
                          <li>
                            Melakukan SOP Accounting
                          </li>
                        </ul>
                      </div>

                      <div className="flex flex-col items-start justify-center w-full px-6">
                        <h3 className="font-semibold">
                          Kualifikasi:
                        </h3>
                        <ul className="list-disc text-base lg:text-lg">
                          <li>
                            Pendidikan Min. D3
                          </li>
                          <li>
                            Pengalaman Min. 2 tahun di bidang Accounting
                          </li>
                          <li>
                            Memahami pajak
                          </li>
                          <li>
                            Memahami dasar-dasar accounting
                          </li>
                          <li>
                            Mampu mengoperasikan sistem Accurate
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                </div>

                <div className="py-10 flex flex-col gap-4">
                  <h1 className="text-center text-xl sm:text-2xl lg:text-3xl font-bold">
                    Career - Internship (Magang)
                  </h1>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="flex flex-col justify-start items-center text-lg p-4 xl:p-8 bg-sky-100 rounded-xl border-2 border-sky-600 gap-4">
                      <h2 className="text-center text-lg sm:text-xl lg:text-2xl flex font-semibold bg-sky-600 text-white rounded-full px-4 py-2 gap-2 items-center justify-center">
                        <Store />
                        Digital Marketing Intern
                      </h2>

                      <div className="flex flex-col items-start justify-center w-full px-6">
                        <h3 className="font-semibold text-base sm:text-lg">
                          Deskripsi Pekerjaan:
                        </h3>
                        <ul className="list-disc text-base lg:text-lg">
                          <li>
                            Membantu dalam perencanaan dan pelaksanaan strategi digital marketing perusahaan.
                          </li>
                          <li>
                            Mengelola konten media sosial perusahaan (Instagram, LinkedIn, dll).
                          </li>
                          <li>
                            Menganalisis data kampanye digital dan membuat laporan performa.
                          </li>
                        </ul>
                      </div>

                      <div className="flex flex-col items-start justify-center w-full px-6">
                        <h3 className="font-semibold">
                          Kualifikasi:
                        </h3>
                        <ul className="list-disc text-base lg:text-lg">
                          <li>
                            Pendidikan Min. S1
                          </li>
                          <li>
                            Mempunyai Pengalaman Digital Marketing
                          </li>
                          <li>
                            Great Networking
                          </li>
                          <li>
                            Target Oriented
                          </li>
                          <li>
                            Kemampuan komunikasi, negosiasi & closing
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-col justify-start items-center text-lg p-4 xl:p-8 bg-amber-50 rounded-xl border-2 border-amber-500 gap-4">
                      <h2 className="text-center text-lg sm:text-xl lg:text-2xl flex font-semibold bg-amber-500 text-white rounded-full px-4 py-2 gap-2 items-center justify-center">
                        <BadgeDollarSign />
                        HR Intern
                      </h2>

                      <div className="flex flex-col items-start justify-center w-full px-6">
                        <h3 className="font-semibold text-base sm:text-lg">
                          Deskripsi Pekerjaan:
                        </h3>
                        <ul className="list-disc text-base lg:text-lg">
                          <li>
                            Menjadwalkan wawancara dan mengonfirmasi ketersediaan pelamar
                          </li>
                          <li>
                            Mengumpulkan dan mengorganisir lamaran pekerjaan
                          </li>
                          <li>
                            Menulis komunikasi internal karyawan dan korespondensi terkait pembaruan kebijakan HR
                          </li>
                          <li>
                            Membantu memeriksa kepatuhan keseluruhan terhadap kode tenaga kerja serta hukum lokal dan negara bagian yang berlaku
                          </li>
                          <li>
                            Berpartisipasi dan membantu dalam acara karier serta acara sosial dan jaringan perusahaan
                          </li>
                          <li>
                            Melakukan tugas-tugas ad hoc sesuai kebutuhan
                          </li>
                        </ul>
                      </div>

                      <div className="flex flex-col items-start justify-center w-full px-6">
                        <h3 className="font-semibold">
                          Kualifikasi:
                        </h3>
                        <ul className="list-disc text-base lg:text-lg">
                          <li>
                            Terdaftar dalam program universitas atau perguruan tinggi di tingkat junior atau senior, program studi yang diutamakan meliputi Psikologi, Sumber Daya Manusia, Komunikasi, atau bidang terkait
                          </li>
                          <li>
                            Mampu menggunakan Tes Pra-Pekerjaan (kepribadian, teknis, soft skill, culture fit, dll.)
                          </li>
                          <li>
                            IPK minimum 3.0
                          </li>
                          <li>
                            Mahir dalam MS Office
                          </li>
                          <li>
                            Mampu menunjukkan etika kerja profesional
                          </li>
                          <li>
                            Mampu menjaga jadwal kerja yang fleksibel
                          </li>
                          <li>
                            Keterampilan komunikasi tertulis dan lisan yang luar biasa
                          </li>
                        </ul>
                      </div>
                    </div>

                  </div>

                </div>
              </TabsContent>
              <TabsContent value="competition">
                <div className="py-10 flex flex-col gap-4">
                  <Link href={"#"} aria-label="Content Competition" className="flex flex-col sm:flex-row gap-6 p-6 border hover:bg-slate-100 rounded-xl transition-all">
                    <div className="flex flex-col gap-2 sm:w-8/12 justify-between items-center sm:items-start">
                      <div className="flex flex-col gap-2 lg:gap-4">
                        <h3 className="text-xl lg:text-3xl font-semibold">
                          Content Competition - Understanding Gen Z Behavior
                        </h3>
                        <p className="line-clamp-3 text-base sm:text-md lg:text-lg">
                          Yuk buat konten kreatif tentang keseharian kamu! Menangkan uang jutaan rupiah. Simak ketentuan di sini.
                        </p>
                      </div>
                      <p className="bg-red-100 text-red-600 w-fit px-4 py-2 rounded-full">
                        Lomba telah berakhir
                      </p>
                    </div>
                    <div className="w-full sm:w-4/12">
                      <Image
                        src="/images/postercompetition1.png"
                        width={1000}
                        height={1000}
                        alt="Poster Lomba"
                        className="w-full h-auto aspect-video object-cover rounded-xl"
                      />
                    </div>
                  </Link>

                </div>
              </TabsContent>
            </Tabs>
          </div>

        </div>
      </main >
    </>
  );
}