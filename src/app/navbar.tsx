"use client";
import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

// Font
import { Phone, Wind } from "lucide-react";
import { Tilt_Neon, Tilt_Warp } from "next/font/google";
import { getLancarinAnalytics } from "@/lib/analytics"; // import analytics

const tiltwarp = Tilt_Warp({ subsets: ["latin"] });
const tiltneon = Tilt_Neon({ subsets: ["latin"] });

export default function ResponsiveNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const currentPath = usePathname();

  // Define menu items and their corresponding paths
  const menuItems = [
    { label: "Beranda", path: "/" },
    { label: "Layanan", path: "/layanan" },
    { label: "Tentang", path: "/tentang" },
    { label: "Artikel", path: "/artikel" },
  ];

  // Create an analytics instance (this will initialize if it hasn't been already)
  const analytics = getLancarinAnalytics("lancarin-site");

  // Handler to track "Hubungi Kami" click
  const handleHubungiKamiClick = () => {
    analytics.recordServiceInteraction("Hubungi Kami", "click");
  };

  // Handler for menu item clicks (only for Layanan, Tentang, and Artikel)
  const handleMenuItemClick = (label: string) => {
    if (["Layanan", "Tentang", "Artikel"].includes(label)) {
      analytics.recordServiceInteraction(label, "click");
    }
  };

  const navbarTransitionStyles = `
  .navbar-background {
    position: relative;
    overflow: hidden;
  }
  
  .navbar-background::before,
  .navbar-background::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: opacity 300ms ease-in-out;
    z-index: -1;
  }
  
  .navbar-background::before {
    background-color: white;
  }
  
  .navbar-background::after {
    background: linear-gradient(to right, #00C950, #007D1F);
  }
  
  .navbar-scrolled::before {
    opacity: 1;
  }
  
  .navbar-scrolled::after {
    opacity: 0;
  }
  
  .navbar-not-scrolled::before {
    opacity: 0;
  }
  
  .navbar-not-scrolled::after {
    opacity: 1;
  }
`;

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <>
      <style>{navbarTransitionStyles}</style>
      <div
        className={cn(
          "fixed top-0 z-50 px-8 md:px-20 w-full backdrop-blur-sm max-w-screen-2xl transition-all duration-500 ease-in-out",
          scrolled
            ? "bg-white text-[#00C950] shadow-md"
            : "bg-gradient-to-r from-[#00C950] to-[#007D1F] text-white"
        )}
      >
        {/* Navbar for large screens */}
        <nav className="items-center justify-between py-4 hidden lg:flex xl:px-20">
          <div className="left-nav flex items-center space-x-4">
            <Link
              href="/"
              className={cn(
                "flex items-center space-x-3 rtl:space-x-reverse p-0 sm:py-2 sm:px-3 md:bg-transparent md:p-0 transition-all duration-500 ease-in-out",
                scrolled ? "text-[#00C950]" : "text-white"
              )}
              rel="canonical"
              aria-label="Brand Logo"
            >
              <Wind size={50} />
              <div className={`${tiltwarp.className} logo text-2xl`}>
                Lancarin.com
              </div>
            </Link>
          </div>
          <div
            className={`w-full hidden md:block md:w-auto`}
            id="navbar-default"
          >
            <div className="items-center justify-center flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
              <div
                className={`${tiltneon.className} font-medium flex flex-col md:flex-row md:gap-x-12 gap-y-3 items-center justify-center`}
              >
                <Link
                  href="/layanan"
                  rel="canonical"
                  aria-label="Layanan"
                  onClick={() => handleMenuItemClick("Layanan")}
                >
                  <p
                    className={cn(
                      "text-lg group relative w-max cursor-pointer transition-all duration-500 ease-in-out rounded-xl border-transparent border-4 py-2",
                      scrolled ? "text-[#00C950]" : "text-white"
                    )}
                  >
                    <span>Layanan</span>
                    <span
                      className={cn(
                        "absolute -bottom-1 left-0 w-0 transition-all h-1 group-hover:w-full duration-500 ease-in-out",
                        scrolled ? "bg-[#00C950]" : "bg-white"
                      )}
                    ></span>
                  </p>
                </Link>
                <Link
                  href="/tentang"
                  rel="canonical"
                  aria-label="Tentang"
                  onClick={() => handleMenuItemClick("Tentang")}
                >
                  <p
                    className={cn(
                      "text-lg group relative w-max cursor-pointer transition-colors duration-500 ease-in-out rounded-xl border-transparent border-4 py-2",
                      scrolled ? "text-[#00C950]" : "text-white"
                    )}
                  >
                    <span>Tentang</span>
                    <span
                      className={cn(
                        "absolute -bottom-1 left-0 w-0 transition-all h-1 group-hover:w-full duration-500 ease-in-out",
                        scrolled ? "bg-[#00C950]" : "bg-white"
                      )}
                    ></span>
                  </p>
                </Link>
                <Link
                  href="/artikel"
                  rel="canonical"
                  aria-label="Artikel"
                  onClick={() => handleMenuItemClick("Artikel")}
                >
                  <p
                    className={cn(
                      "text-lg group relative w-max cursor-pointer transition-colors duration-500 ease-in-out rounded-xl border-transparent border-4 py-2",
                      scrolled ? "text-[#00C950]" : "text-white"
                    )}
                  >
                    <span>Artikel</span>
                    <span
                      className={cn(
                        "absolute -bottom-1 left-0 w-0 transition-all h-1 group-hover:w-full duration-500 ease-in-out",
                        scrolled ? "bg-[#00C950]" : "bg-white"
                      )}
                    ></span>
                  </p>
                </Link>
                <div className="group flex gap-4 items-center justify-center md:justify-start flex-col sm:flex-row">
                  <Link
                    href="https://wa.me/+628111026445"
                    onClick={handleHubungiKamiClick}
                    className={cn(
                      `${tiltneon.className} text-md gap-2 box-border relative z-30 inline-flex items-center justify-center w-auto px-1 py-2 lg:px-8 lg:py-3 overflow-hidden font-medium rounded-full cursor-pointer group ring-offset-2 ring-2 ease focus:outline-none transition-all duration-500 ease-in-out`,
                      scrolled
                        ? "text-white bg-gradient-to-b from-[#00C950] to-[#0CB514] ring-[#00CF0A]/50 ring-offset-[#FFFFFF]/50 hover:ring-offset-[#00CF0A]/50"
                        : "text-[#00C950] bg-white ring-white/50 ring-offset-[#00C950]/50 hover:ring-offset-white/50"
                    )}
                    rel="canonical"
                  >
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
              <Link
                href="/"
                className="flex items-center space-x-4 text-green-500"
                rel="canonical"
                aria-label="Brand Logo"
              >
                <Wind size={50} />
              </Link>
            </NavbarBrand>
          </NavbarContent>

          <NavbarMenu className="flex justify-center items-center text-center gap-10">
            {menuItems.map((item, index) => (
              <NavbarMenuItem key={`${item.label}-${index}`}>
                <Link
                  className={`${tiltneon.className} w-full ${
                    currentPath === item.path
                      ? "font-semibold bg-white border-2 border-green-500 text-green-500 px-4 py-3 rounded-full" // Apply active class if the link is active
                      : ""
                  }`}
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
    </>
  );
}
