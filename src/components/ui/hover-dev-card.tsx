import React from "react";
import { GiGreaseTrap, GiTeePipe } from "react-icons/gi";
import { TbAirConditioning } from "react-icons/tb";

import { Tilt_Neon, Tilt_Warp } from 'next/font/google';

const tiltwarp = Tilt_Warp({ subsets: ['latin'] })
const tiltneon = Tilt_Neon({ subsets: ['latin'] })

type CardProps = {
    title: string;
    subtitle: string;
    Icon: React.ElementType;
    href: string;
};

const HoverDevCards: React.FC = () => {
    return (
        <div className="flex flex-col gap-6 justify-center items-center w-full p-16 px-10 lg:px-20 xl:px-40 rounded-xl xl:mx-40">
            <p className={`${tiltwarp.className} text-xl sm:text-3xl text-slate-900 text-center`}>Layanan Lancarin</p>
            <div className="w-full grid gap-4 grid-cols-1 lg:grid-cols-3">
                <Card title="Drain Cleaning" subtitle="Membantu kamu membersihkan saluran air yang mampet" href="#" Icon={GiTeePipe} />
                <Card title="AC Service" subtitle="Pembersihan AC yang kotor serta maintenance AC" href="#" Icon={TbAirConditioning} />
                <Card title="Grease Trap Domestik" subtitle="Penanganan saluran pembuangan di rumah kamu" href="#" Icon={GiGreaseTrap} />
            </div>
        </div>
    );
};

const Card: React.FC<CardProps> = ({ title, subtitle, Icon, href }) => {
    return (
        <a
            href={href}
            className="w-full p-4 rounded-xl border-3 border-green-400 relative overflow-hidden group bg-white"
        >
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />
            <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-green-100 group-hover:text-[#00C950] group-hover:rotate-12 transition-transform duration-300" />
            <Icon className="mb-2 text-6xl text-green-600 group-hover:text-white transition-colors relative z-10 duration-300" />
            <h3 className={`${tiltwarp.className} text-lg text-green-600 group-hover:text-white relative z-10 duration-300`}>
                {title}
            </h3>
            <p className={`${tiltneon.className} text-slate-400 group-hover:text-white relative z-10 duration-300`}>
                {subtitle}
            </p>
        </a>
    );
};

export default HoverDevCards;