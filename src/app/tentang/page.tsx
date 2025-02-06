"use client"

// Libs

// UI Libs

// Font
import { Outfit } from 'next/font/google';
import Image from 'next/image';

const outfit = Outfit({ subsets: ['latin'] })

// Font
import SwipeCards from '@/components/ui/hover-dev-slider';
import { Mail, Phone } from 'lucide-react';
import { Tilt_Neon, Tilt_Warp } from 'next/font/google';
import Link from 'next/link';

const tiltwarp = Tilt_Warp({ subsets: ['latin'] })
const tiltneon = Tilt_Neon({ subsets: ['latin'] })

// Icons

export default function Tentang() {

  return (
    <>
      <main>
        <div className="overflow-x-hidden flex flex-col items-start justify-center p-8 pb-20 sm:p-20 rounded-xl xl:mx-20 gap-10 mt-6">
          <div className='bg-green-500 rounded-xl flex flex-col sm:flex-row justify-center items-center p-10 gap-10'>
            <div className='flex flex-col justify-between'>
              <div className='flex flex-col gap-6'>
                <h2 className={`${tiltwarp.className} text-3xl text-white`}>
                  Yuk, Cari Tahu Tentang Lancarin!
                </h2>
                <p className={`${tiltneon.className} text-white text-lg text-justify`}>
                  Lancarin hadir untuk memudahkan perawatan dan perbaikan rumahmu. Kami menyediakan layanan plumbing service, AC service, dan grease trap cleaning untuk residensial, dengan sistem pemesanan yang cepat, teknisi profesional, dan harga yang transparan.

                  Kami tahu betapa ribetnya mencari teknisi yang tepat untuk masalah di rumah. Dengan Lancarin, kamu gak perlu lagi repot cari tukang servis secara manual atau khawatir dengan hasil pekerjaan. Cukup hubungi kami, dan tim kami siap datang untuk memberikan solusi terbaik!
                </p>
                <div className="flex flex-col justify-center items-center border-2 border-green-400 bg-white p-4 sm:py-6 sm:px-10 rounded-xl gap-6">
                  <div className={`${tiltneon.className} flex items-center justify-center gap-4 sm:gap-10`}>
                    <Link href="https://wa.me/+628111026445" target="_blank" rel="canonical" className="text-green-600 text-md sm:text-lg flex justify-center items-center gap-2">
                      <Phone /> Hotline: 08111026445
                    </Link>
                    <Link href="" target="_blank" rel="canonical" className="text-green-600 text-md sm:text-lg flex justify-center items-center gap-2">
                      <Mail />
                      Email: info@gas-solution.com
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Image
              src={"/images/tentang-lancarin.png"}
              width={1000}
              height={1000}
              alt='Foto Lancarin'
              className='w-96 h-auto aspect-square object-cover rounded-xl'
            />
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 justify-center items-center'>
            <SwipeCards></SwipeCards>
            <div className='flex flex-col gap-4'>
              <div className='flex flex-col gap-4'>
                <h2 className={`${tiltwarp.className} text-3xl text-green-500`}>
                  Misi Kami
                </h2>
                <p className={`${tiltneon.className} text-black text-lg text-justify`}>
                  Kami ingin menjadi solusi utama bagi setiap rumah yang membutuhkan perawatan dan perbaikan plumbing, AC, dan grease trap, dengan layanan yang terjangkau, mudah, dan berkualitas tinggi. Kepuasan pelanggan adalah prioritas utama kami!
                </p>
              </div>
              <div className='flex flex-col gap-4'>
                <h2 className={`${tiltwarp.className} text-3xl text-green-500`}>
                  Mengapa Kamu Harus Pilih Lancarin?
                </h2>
                <div className={`${tiltneon.className} text-black text-lg text-justify`}>
                  <ul>
                    <li>
                      <p className=''>
                        <span className='text-white bg-green-500 px-2'>
                          Mudah & Praktis –
                        </span>
                        Pemesanan bisa dilakukan secara online atau via WhatsApp tanpa ribet.
                      </p>
                    </li>
                    <li>
                      <p className=''>
                        <span className='text-white bg-green-500 px-2'>
                          Teknisi Berpengalaman –
                        </span>
                        Tim kami adalah profesional yang ahli di bidangnya dengan pengalaman bertahun-tahun.
                      </p>
                    </li>
                    <li>
                      <p className=''>
                        <span className='text-white bg-green-500 px-2'>
                          Harga Transparan –
                        </span>
                        Tidak ada biaya tersembunyi. Kamu akan mendapat estimasi harga sebelum layanan dimulai.
                      </p>
                    </li>
                    <li>
                      <p className=''>
                        <span className='text-white bg-green-500 px-2'>
                          Jaminan Kepuasan –
                        </span>
                        Kami memberikan garansi untuk setiap layanan, jadi kamu bisa tenang setelah servis selesai.
                      </p>
                    </li>
                    <li>
                      <p className=''>
                        <span className='text-white bg-green-500 px-2'>
                          Pelayanan Cepat –
                        </span>
                        Teknisi kami siap datang sesuai jadwal yang kamu pilih, tanpa harus menunggu lama.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main >
    </>
  );
}