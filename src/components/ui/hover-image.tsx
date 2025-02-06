import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Tilt_Neon } from 'next/font/google';
import React, { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";

const tiltneon = Tilt_Neon({ subsets: ['latin'] });

interface LinkProps {
    heading: string;
    subheading: string;
    imgSrc: string;
    href: string;
}

export const HoverImageLinks: React.FC = () => {
    return (
        <section className="w-full bg-green-500 rounded-xl p-4 md:p-8">
            <div className="mx-auto max-w-5xl">
                <Link heading="Drain Cleaning" subheading="Memastikan saluran pembuangan kamu tetap lancar dan bersih!" imgSrc="/images/saluranair.jpg" href="#" />
                <Link heading="AC Service" subheading="Perawatan, pembersihan, dan servis AC supaya rumah jadi makin nyaman." imgSrc="/images/acmaintenance.jpg" href="#" />
                <Link heading="Grease Trap" subheading="Tangani limbah dapur kamu dengan layanan kami supaya fungsinya jadi lebih optimal!" imgSrc="/images/greasetrap.jpg" href="#" />
            </div>
        </section>
    );
};

const Link: React.FC<LinkProps> = ({ heading, imgSrc, subheading, href }) => {
    const ref = useRef<HTMLAnchorElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
    const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    return (
        <motion.a
            href={href}
            ref={ref}
            onMouseMove={handleMouseMove}
            initial="initial"
            whileHover="whileHover"
            className="group relative flex items-center justify-between border-b-2 border-white py-4 transition-colors duration-500 hover:border-neutral-50 md:py-8"
        >
            <div>
                <motion.span
                    variants={{
                        initial: { x: 0 },
                        whileHover: { x: -16 },
                    }}
                    transition={{
                        type: "spring",
                        staggerChildren: 0.075,
                        delayChildren: 0.25,
                    }}
                    className="relative z-10 block text-4xl text-white transition-colors duration-500 group-hover:text-neutral-50 md:text-6xl"
                >
                    {heading.split("").map((l, i) => (
                        <motion.span
                            variants={{
                                initial: { x: 0 },
                                whileHover: { x: 16 },
                            }}
                            transition={{ type: "spring" }}
                            className="inline-block"
                            key={i}
                        >
                            {l}
                        </motion.span>
                    ))}
                </motion.span>
                <span className={`${tiltneon.className} relative z-10 mt-2 block text-base text-white transition-colors duration-500 group-hover:text-neutral-50`}>
                    {subheading}
                </span>
            </div>

            <motion.img
                style={{
                    top,
                    left,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                variants={{
                    initial: { scale: 0, rotate: "-12.5deg" },
                    whileHover: { scale: 1, rotate: "12.5deg" },
                }}
                transition={{ type: "spring" }}
                src={imgSrc}
                className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
                alt={`Image representing a link for ${heading}`}
            />

            <motion.div
                variants={{
                    initial: { x: "25%", opacity: 0 },
                    whileHover: { x: "0%", opacity: 1 },
                }}
                transition={{ type: "spring" }}
                className="relative z-10 p-4"
            >
                <FiArrowRight className="text-5xl text-neutral-50" />
            </motion.div>
        </motion.a>
    );
};
