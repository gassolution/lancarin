import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

// Font
import { Tilt_Warp } from 'next/font/google';

const tiltwarp = Tilt_Warp({ subsets: ['latin'] });
interface Card08Props {
    title?: string
    subtitle?: string
    image?: string
    badge?: {
        text: string
        variant: "pink" | "indigo" | "orange"
    }
    href?: string
}

export default function NewsCard({
    title = "Modern Design Systems",
    subtitle = "Explore the fundamentals of contemporary UI design",
    image = "/images/onfield-1.jpg",
    badge = { text: "New", variant: "orange" },
    href = "#",
}: Card08Props) {
    return (
        <a href={href} className="block w-full h-full group">
            <div
                className={cn(
                    "relative overflow-hidden rounded-2xl w-full h-full",
                    "bg-white/80 dark:bg-zinc-900/80",
                    "backdrop-blur-xl",
                    "border border-zinc-200/50 dark:border-zinc-800/50",
                    "shadow-sm",
                    "transition-all duration-300",
                    "hover:-translate-y-1 hover:shadow-md",
                    "hover:border-zinc-300/50 dark:hover:border-zinc-700/50",
                )}
            >
                {/* Image Section - increased height */}
                <div className="relative h-full overflow-hidden">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </div>

                {/* Content Overlay - adjusted gradient for taller image */}
                <div className={cn("absolute inset-0", "bg-gradient-to-t from-black/90 via-black/40 to-transparent")} />

                {/* Badge */}
                <div className="absolute top-3 right-3">
                    <span
                        className={cn(
                            "px-2.5 py-1 rounded-full text-xs font-medium",
                            "bg-white/90 text-zinc-800",
                            "dark:bg-zinc-900/90 dark:text-zinc-200",
                            "backdrop-blur-md",
                            "shadow-sm",
                            "border border-white/20 dark:border-zinc-800/50",
                        )}
                    >
                        {badge.text}
                    </span>
                </div>

                {/* Content Section - adjusted padding for better proportions */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="flex items-center justify-between gap-3">
                        <div className="space-y-1.5">
                            <h3 className={`${tiltwarp.className} text-4xl text-white dark:text-zinc-100 leading-snug`}>{title}</h3>
                            <p className="text-lg text-zinc-200 dark:text-zinc-300 line-clamp-2">{subtitle}</p>
                        </div>
                        <div
                            className={cn(
                                "p-2 rounded-full",
                                "bg-white/10 dark:bg-zinc-800/50",
                                "backdrop-blur-md",
                                "group-hover:bg-white/20 dark:group-hover:bg-zinc-700/50",
                                "transition-colors duration-300",
                            )}
                        >
                            <ArrowUpRight className="w-4 h-4 text-white" />
                        </div>
                    </div>
                </div>
            </div>
        </a>
    )
}

