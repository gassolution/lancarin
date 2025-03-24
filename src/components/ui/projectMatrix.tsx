"use client";

import { useInView } from "@/components/ui/hooks/useInView";
import AnimatedCounter from "@/components/ui/animatedCounters";
import { Award, Users, Building, Globe } from "lucide-react";

//font
import { Tilt_Neon, Tilt_Warp } from "next/font/google";

const tiltwarp = Tilt_Warp({ subsets: ["latin"] });
const tiltneon = Tilt_Neon({ subsets: ["latin"] });

const stats = [
  {
    id: 1,
    title: "Happy Clients",
    value: 2500,
    icon: Users,
    suffix: "+",
  },
  {
    id: 2,
    title: "Projects Completed",
    value: 1250,
    icon: Building,
    suffix: "+",
  },
  {
    id: 3,
    title: "Awards Won",
    value: 150,
    icon: Award,
    suffix: "+",
  },
  {
    id: 4,
    title: "Countries Reached",
    value: 85,
    icon: Globe,
    suffix: "",
  },
];

export default function StatsSection() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section ref={ref} className="py-16 px-4">
      <div className="container mx-auto">
        <h2
          className={`${tiltwarp.className} text-4xl font-bold mb-12 text-center text-green-500`}
        >
          Total Pekerjaan Yang Telah Kami Kerjakan
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-28">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-white border dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg"
            >
              <div className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-green-500 text-primary">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="flex justify-center items-baseline">
                  <AnimatedCounter
                    value={stat.value}
                    isAnimating={inView}
                    className={`${tiltwarp.className} text-3xl font-bold text-green-500 tracking-wide`}
                  />
                  <span className="text-3xl font-bold text-green-500">
                    {stat.suffix}
                  </span>
                </div>
                <p
                  className={`${tiltneon.className} text-gray-500 dark:text-gray-400 mt-2`}
                >
                  {stat.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
