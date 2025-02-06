"use client"

// UI Libs
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Facebook, Instagram, Linkedin, Twitter, Wind } from "lucide-react";

// Libs

// Font
import { Tilt_Neon, Tilt_Warp } from 'next/font/google';
import Link from "next/link";
const tiltwarp = Tilt_Warp({ subsets: ['latin'] });
const tiltneon = Tilt_Neon({ subsets: ['latin'] });

function Footerdemo() {

  return (
    <footer className={`${tiltneon.className} px-10 sm:px-20 relative border-t bg-background text-foreground transition-colors duration-300`}>
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
            <h2 className="mb-4 text-3xl tracking-tight flex items-center justify-start gap-2 text-green-500">
              <Wind size={50} />
              <div className={`${tiltwarp.className} logo text-2xl`}>
                Lancarin.com
              </div>
            </h2>
            <p className="mb-6 text-muted-foreground">
              PT Gama Abyakta Sejahtera <br />
              Hexa Green, Jl. Raya Kalimalang Unit C3, Jatimulya, Kec. Tambun Sel., Kabupaten Bekasi, Jawa Barat 17510
            </p>
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
            <nav className="space-y-2 text-sm">
              <Link href="/" className="block transition-colors hover:text-primary">
                Home
              </Link>
              <Link href="/service" className="block transition-colors hover:text-primary">
                Service
              </Link>
              <Link href="/about" className="block transition-colors hover:text-primary">
                About Us
              </Link>
              <Link href="/artikel" className="block transition-colors hover:text-primary">
                Blog
              </Link>
              <Link href="/information" className="block transition-colors hover:text-primary">
                Information
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold">Contact Us</h3>
            <address className="space-y-2 text-sm not-italic">
              <p>Phone: +62 81-1102-6445</p>
              <p>Email: info@gas-solution.com</p>
            </address>
          </div>
          <div className="relative">
            <h3 className="mb-4 text-lg font-bold">Follow Us</h3>
            <div className="mb-6 flex space-x-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Facebook className="h-4 w-4" />
                      <span className="sr-only">Facebook</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Facebook</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Twitter</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Instagram className="h-4 w-4" />
                      <span className="sr-only">Instagram</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Connect with us on LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2025 PT Gama Abyakta Sejahtera. All rights reserved.
          </p>
          <nav className="flex gap-4 text-sm">
            <a href="#" className="transition-colors hover:text-primary">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Terms of Service
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export { Footerdemo };

