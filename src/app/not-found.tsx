
// Font
import { Tilt_Warp } from 'next/font/google';

const tiltwarp = Tilt_Warp({ subsets: ['latin'] })

export default function NotFound() {
    return (
        <main className="flex items-center justify-center py-72">
            <div className="flex flex-col items-center justify-center gap-2 relative">
                <div className={`${tiltwarp.className} text-6xl`}>
                    <span>Error</span> <span className="text-green-500 font-bold">404</span>
                </div>
                <span className="text-4xl">Page not found</span>
            </div>
        </main>
    )
}