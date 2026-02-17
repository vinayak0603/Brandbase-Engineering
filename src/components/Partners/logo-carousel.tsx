"use client"

import React, {
    useMemo,
    type SVGProps,
} from "react"
import { motion } from "framer-motion"

interface Logo {
    name: string
    id: number
    img: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

interface LogoCarouselProps {
    columnCount?: number // Kept for API compatibility but unused in Marquee
    logos: Logo[]
}

export function LogoCarousel({ logos }: LogoCarouselProps) {
    // Duplicate logos to ensure seamless loop
    const doubledLogos = useMemo(() => [...logos, ...logos, ...logos], [logos]);

    return (
        <div className="relative w-full overflow-hidden mask-linear-gradient">
            {/* Gradient Masks for smooth fade in/out */}
            <div className="absolute inset-y-0 left-0 w-20 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-20 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            <div className="flex overflow-hidden select-none gap-8 py-8">
                <motion.div
                    className="flex flex-shrink-0 gap-8 md:gap-16 items-center min-w-full"
                    animate={{
                        x: ["0%", "-33.33%"],
                    }}
                    transition={{
                        duration: 30,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >
                    {doubledLogos.map((logo, idx) => {
                        const LogoComponent = logo.img;
                        return (
                            <div
                                key={`${logo.id}-${idx}`}
                                className="relative h-12 w-24 md:h-16 md:w-32 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 scale-95 hover:scale-105"
                            >
                                <LogoComponent className="h-full w-full object-contain" />
                            </div>
                        );
                    })}
                </motion.div>

                {/* Second duplicate for the infinite effect if needed, but the single motion div with 3x content usually suffices for 33% shift. 
                     However, the standard marquee often uses two identical strips moving. 
                     Let's use the simpler 'transform' approach on a single large container or two containers.
                     Actually, standard simple marquee is two divs translating.
                  */}
            </div>
        </div>
    )
}

// Export for backward compatibility if imported elsewhere
export const LogoColumn = () => null;

