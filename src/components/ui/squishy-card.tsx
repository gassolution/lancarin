import { motion } from "framer-motion";
import { Tilt_Neon, Tilt_Warp } from "next/font/google";

const tiltwarp = Tilt_Warp({ subsets: ["latin"] });
const tiltneon = Tilt_Neon({ subsets: ["latin"] });

const cards = [
    { tag: "Drain Cleaning", price: "Rp80.000*", desc: "Jasa pembersihan dan servis AC mulai dari Rp80.000. Harga akhir akan disesuaikan dengan tambahan jika ada problem lainnya." },
    { tag: "AC Cleaning", price: "Rp65.000*", desc: "Jasa pembersihan dan servis AC mulai dari Rp65.000. Harga akhir akan disesuaikan dengan tambahan jika ada problem lainnya." },
    { tag: "Grease Trap", price: "Rp70.000", desc: "Jasa pembersihan grease trap domestik mulai dari Rp70.000." },
];

const SquishyCard = () => {
    return (
        <section className="flex justify-center items-center w-full pb-12">
            <div className="w-full h-auto items-center justify-center p-16 px-10 lg:px-20 xl:px-40 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                {cards.map((card, index) => (
                    <Card key={index} {...card} />
                ))}
            </div>
        </section>
    );
};

type CardProps = {
    tag: string;
    price: string;
    desc: string;
};

const Card = ({ tag, price, desc }: CardProps) => {
    return (
        <motion.div
            whileHover="hover"
            transition={{ duration: 1, ease: "backInOut" }}
            variants={{ hover: { scale: 1.05 } }}
            className="relative h-96 w-full shrink-0 overflow-hidden rounded-xl bg-green-500 p-8"
        >
            <div className="relative z-10 text-white">
                <span className={`${tiltneon.className} mb-3 block w-fit rounded-full bg-white/30 px-3 py-0.5 text-lg font-light text-white`}>
                    {tag}
                </span>
                <motion.span
                    initial={{ scale: 0.85 }}
                    variants={{ hover: { scale: 1 } }}
                    transition={{ duration: 1, ease: "backInOut" }}
                    className={`${tiltwarp.className} my-2 block origin-top-left text-4xl lg:text-5xl xl:text-6xl leading-[1.2]`}
                >
                    {price}
                </motion.span>
                <p className={`${tiltneon.className} sm:text-sm lg:text-base`}>{desc}</p>
            </div>
            <button className={`${tiltwarp.className} text-lg absolute bottom-4 left-4 right-4 z-20 rounded border-2 border-white bg-white py-2 text-center text-neutral-800 backdrop-blur transition-colors hover:bg-white/30 hover:text-white`}>
                Pilih yang ini
            </button>
            <Background />
        </motion.div>
    );
};

const Background = () => {
    return (
        <motion.svg
            width="320"
            height="384"
            viewBox="0 0 320 384"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 z-0"
            variants={{ hover: { scale: 1.5 } }}
            transition={{ duration: 1, ease: "backInOut" }}
        >
            <motion.circle
                variants={{ hover: { scaleY: 0.5, y: -25 } }}
                transition={{ duration: 1, ease: "backInOut", delay: 0.2 }}
                cx="160.5"
                cy="114.5"
                r="101.5"
                fill="#262626"
            />
            <motion.ellipse
                variants={{ hover: { scaleY: 2.25, y: -25 } }}
                transition={{ duration: 1, ease: "backInOut", delay: 0.2 }}
                cx="160.5"
                cy="265.5"
                rx="101.5"
                ry="43.5"
                fill="#262626"
            />
        </motion.svg>
    );
};

export default SquishyCard;
