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
import { Outfit } from 'next/font/google';
import Image from "next/image";

const outfit = Outfit({ subsets: ['latin'] });

export default function ResponsiveNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const currentPath = usePathname();

    // Define menu items and their corresponding paths
    const menuItems = [
        { label: "Home", path: "/" },
        { label: "Service", path: "/service" },
        { label: "About", path: "/about" },
        { label: "Blog", path: "/blog" },
        { label: "Information", path: "/information" },
    ];

    return (
        <div
            className="fixed top-0 z-50 px-8 md:px-20 w-full bg-white max-w-screen-2xl"
        >
            {/* Navbar for large screens */}
            <nav className="items-center justify-between py-4 hidden lg:flex xl:px-20">
                <div className="left-nav flex items-center space-x-4">
                    <Link
                        href="/"
                        className="flex items-center space-x-3 rtl:space-x-reverse p-0 sm:py-2 sm:px-3 md:bg-transparent md:p-0"
                        rel="canonical"
                        aria-label="Brand Logo"
                    >
                        <Image
                            src="/logogas.png"
                            className="h-16 w-auto navbar-logo"
                            alt="Logo Ecofix"
                            width={1000}
                            height={1000}
                        />
                        <div className="text-blue-800 logo text-4xl">
                            ecofix
                        </div>
                    </Link>
                </div>
                <div className={`w-full hidden md:block md:w-auto`} id="navbar-default">
                    <div className="items-center flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                        <div className={`${outfit.className} font-medium flex flex-col md:flex-row md:gap-x-4 gap-y-3 items-center`}>
                            <Link href="/" rel="canonical" aria-label="Home">
                                <p
                                    className="cursor-pointer transition-all text-indigo-700 text-lg rounded-xl hover:text-white hover:bg-indigo-700 hover:border-indigo-200 border-transparent border-4 px-4 py-3"
                                >
                                    Home
                                </p>
                            </Link>
                            <Link href="/service" rel="canonical" aria-label="Service">
                                <p
                                    className="cursor-pointer transition-all text-indigo-700 text-lg rounded-xl hover:text-white hover:bg-indigo-700 hover:border-indigo-200 border-transparent border-4 px-4 py-3"
                                >
                                    Service
                                </p>
                            </Link>
                            <Link href="/about" rel="canonical" aria-label="About">
                                <p
                                    className="cursor-pointer transition-all text-indigo-700 text-lg rounded-xl hover:text-white hover:bg-indigo-700 hover:border-indigo-200 border-transparent border-4 px-4 py-3"
                                >
                                    About
                                </p>
                            </Link>
                            <Link href="/blog" rel="canonical" aria-label="Blog">
                                <p
                                    className="cursor-pointer transition-all text-indigo-700 text-lg rounded-xl hover:text-white hover:bg-indigo-700 hover:border-indigo-200 border-transparent border-4 px-4 py-3"
                                >
                                    Blog
                                </p>
                            </Link>
                            <Link href="/information" rel="canonical" aria-label="Information">
                                <p
                                    className="cursor-pointer transition-all text-indigo-700 text-lg rounded-xl hover:text-white hover:bg-indigo-700 hover:border-indigo-200 border-transparent border-4 px-4 py-3"
                                >
                                    Information
                                </p>
                            </Link>
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
                        <Link href="/" className="flex items-center space-x-4" rel="canonical" aria-label="Brand Logo">
                            <Image
                                src="/logogas.png"
                                className="h-8 w-auto navbar-logo"
                                alt="Logo PT GAS"
                                width={1000}
                                height={1000}
                            />
                        </Link>
                    </NavbarBrand>
                </NavbarContent>

                <NavbarMenu className="flex justify-center items-center text-center gap-10">
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item.label}-${index}`}>
                            <Link
                                className={`${outfit.className} w-full ${currentPath === item.path
                                    ? "font-semibold" // Apply active class if the link is active
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
