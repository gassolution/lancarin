"use client";
import {
    Link,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle
} from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { useState } from "react";

// Font
import { Phone, Wind } from "lucide-react";
import { Tilt_Neon, Tilt_Warp } from 'next/font/google';

const tiltwarp = Tilt_Warp({ subsets: ['latin'] });
const tiltneon = Tilt_Neon({ subsets: ['latin'] });

export default function ResponsiveNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const currentPath = usePathname();

    // Define menu items and their corresponding paths
    const menuItems = [
        { label: "Beranda", path: "/" },
        { label: "Layanan", path: "/layanan" },
        { label: "Tentang", path: "/tentang" },
        { label: "Artikel", path: "/artikel" },
    ];

    return (
        <div
            className="fixed top-0 z-50 px-8 md:px-20 w-full bg-white backdrop-blur-sm max-w-screen-2xl"
        >
            {/* Navbar for large screens */}
            <nav className="items-center justify-between py-4 hidden lg:flex xl:px-20">
                <div className="left-nav flex items-center space-x-4">
                    <Link
                        href="/"
                        className="flex items-center space-x-3 rtl:space-x-reverse p-0 sm:py-2 sm:px-3 md:bg-transparent md:p-0 text-[#00C950]"
                        rel="canonical"
                        aria-label="Brand Logo"
                    >
                        {/* <Image
                            src="/logogas.png"
                            className="h-16 w-auto navbar-logo"
                            alt="Logo Lancarin"
                            width={1000}
                            height={1000}
                        /> */}
                        <Wind size={50} />
                        <div className={`${tiltwarp.className} logo text-2xl`}>
                            Lancarin.com
                        </div>
                    </Link>
                </div>
                <div className={`w-full hidden md:block md:w-auto`} id="navbar-default">
                    <div className="items-center justify-center flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                        <div className={`${tiltneon.className} font-medium flex flex-col md:flex-row md:gap-x-12 gap-y-3 items-center justify-center`}>
                            <Link href="/layanan" rel="canonical" aria-label="Layanan">
                                <p className="text-lg group relative w-max cursor-pointer transition-all text-[#00C950] rounded-xl  border-transparent border-4 py-2">
                                    <span>Layanan</span>
                                    <span className="absolute -bottom-1 left-0 w-0 transition-all h-1 bg-[#00C950] group-hover:w-full"></span>
                                </p>
                            </Link>
                            <Link href="/tentang" rel="canonical" aria-label="Tentang">
                                <p className="text-lg group relative w-max cursor-pointer transition-all text-[#00C950] rounded-xl  border-transparent border-4 py-2">
                                    <span>Tentang</span>
                                    <span className="absolute -bottom-1 left-0 w-0 transition-all h-1 bg-[#00C950] group-hover:w-full"></span>
                                </p>
                            </Link>
                            <Link href="/artikel" rel="canonical" aria-label="Artikel">
                                <p className="text-lg group relative w-max cursor-pointer transition-all text-[#00C950] rounded-xl  border-transparent border-4 py-2">
                                    <span>Artikel</span>
                                    <span className="absolute -bottom-1 left-0 w-0 transition-all h-1 bg-[#00C950] group-hover:w-full"></span>
                                </p>
                            </Link>
                            <div className="group flex gap-4 items-center justify-center md:justify-start flex-col sm:flex-row">
                                <Link href="https://wa.me/+628111026445" className={`${tiltneon.className} text-md gap-2 box-border relative z-30 inline-flex items-center justify-center w-auto px-1 py-2 lg:px-8 lg:py-3 overflow-hidden font-medium text-white transition-all duration-300 bg-gradient-to-b from-[#00C950] to-[#0CB514] rounded-full cursor-pointer group ring-offset-2 ring-2 ring-[#00CF0A]/50 ring-offset-[#FFFFFF]/50 hover:ring-offset-[#00CF0A]/50 ease focus:outline-none`} rel="canonical">
                                    Hubungi Kami
                                    <Phone className="group-hover:translate-x-3 transition-all" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Navbar for small screens */}
            <Navbar
                className="lg:hidden"
                isMenuOpen={isMenuOpen}
                onMenuOpenChange={setIsMenuOpen}
            >
                <NavbarContent justify="start">
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    />
                </NavbarContent>

                <NavbarContent justify="center">
                    <NavbarBrand>
                        <Link href="/" className="flex items-center space-x-4 text-green-500" rel="canonical" aria-label="Brand Logo">
                            {/* <Image
                                src="/.png"
                                className="h-8 w-auto navbar-logo"
                                alt="Logo PT GAS"
                                width={1000}
                                height={1000}
                            /> */}
                            <Wind size={50} />
                        </Link>
                    </NavbarBrand>
                </NavbarContent>

                <NavbarMenu className="flex justify-center items-center text-center gap-10">
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item.label}-${index}`}>
                            <Link
                                className={`${tiltneon.className} w-full ${currentPath === item.path
                                    ? "font-semibold bg-white border-2 border-green-500 text-green-500 px-4 py-3 rounded-full" // Apply active class if the link is active
                                    : ""}`}
                                href={item.path === "#" ? "#" : item.path} // Fix for Mode Toggle
                                size="lg"
                                rel="canonical"

                            >
                                {item.label}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar>
        </div>
    );
}
