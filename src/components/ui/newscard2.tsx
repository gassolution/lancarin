import { cn } from "@/lib/utils"
import Image from "next/image"

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

export default function NewsCard2({
    title = "Modern Design Systems",
    image = "/images/onfield-1.jpg",
}: Card08Props) {
    return (
        <div className="block w-full h-full group">
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
                        className="aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </div>

                {/* Content Overlay - adjusted gradient for taller image */}
                <div className={cn("absolute inset-0", "bg-gradient-to-t from-black/90 via-black/40 to-transparent")} />

                {/* Content Section - adjusted padding for better proportions */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="flex items-center justify-between gap-3">
                        <div className="space-y-1.5">
                            <h3 className="text-2xl md:text-4xl font-semibold text-white dark:text-zinc-100 leading-snug">{title}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

