"use client"

import type React from "react"
import { useState, useCallback, useRef, useEffect } from "react"
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

export interface TestimonialData {
    quote: string;
    author: string;
    role: string;
    company: string;
    avatar: string;
}

function usePreloadImages(images: string[]) {
    useEffect(() => {
        images.forEach((src) => {
            const img = new Image()
            img.src = src
        })
    }, [images])
}

function SplitText({ text }: { text: string }) {
    const words = text.split(" ")

    return (
        <span className="inline">
            {words.map((word, i) => (
                <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{
                        duration: 0.4,
                        delay: i * 0.03,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="inline-block mr-[0.25em]"
                >
                    {word}
                </motion.span>
            ))}
        </span>
    )
}

interface CleanTestimonialProps {
    testimonials: TestimonialData[];
}

export function CleanTestimonial({ testimonials }: CleanTestimonialProps) {
    const [activeIndex, setActiveIndex] = useState(0)
    const [isHovered, setIsHovered] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    usePreloadImages(testimonials.map((t) => t.avatar))

    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const springConfig = { damping: 25, stiffness: 150 }
    const cursorX = useSpring(mouseX, springConfig)
    const cursorY = useSpring(mouseY, springConfig)

    const handleMouseMove = useCallback(
        (e: React.MouseEvent) => {
            if (!containerRef.current) return
            const rect = containerRef.current.getBoundingClientRect()
            mouseX.set(e.clientX - rect.left)
            mouseY.set(e.clientY - rect.top)
        },
        [mouseX, mouseY],
    )

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }

    const currentTestimonial = testimonials[activeIndex]

    if (!testimonials || testimonials.length === 0) return null;

    return (
        <div
            ref={containerRef}
            className="relative w-full max-w-2xl mx-auto py-24 px-12 bg-card/30 backdrop-blur-sm rounded-3xl border border-border/50 shadow-2xl overflow-hidden cursor-none"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleNext}
        >
            {/* Custom magnetic cursor */}
            <motion.div
                className="pointer-events-none absolute z-50 mix-blend-difference"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            >
                <motion.div
                    className="rounded-full bg-white flex items-center justify-center shadow-lg"
                    animate={{
                        width: isHovered ? 100 : 0,
                        height: isHovered ? 100 : 0,
                        opacity: isHovered ? 1 : 0,
                    }}
                    transition={{ type: "spring", damping: 20, stiffness: 200 }}
                >
                    <motion.span
                        className="text-black text-xs font-bold tracking-widest uppercase"
                        animate={{ opacity: isHovered ? 1 : 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        Next
                    </motion.span>
                </motion.div>
            </motion.div>

            {/* Floating index indicator */}
            <motion.div
                className="absolute top-10 right-10 flex items-baseline gap-2 font-mono text-xs"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                <motion.span
                    className="text-3xl font-light text-foreground"
                    key={activeIndex}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    {String(activeIndex + 1).padStart(2, "0")}
                </motion.span>
                <span className="text-muted-foreground/40 text-lg">/</span>
                <span className="text-muted-foreground/60 text-sm">{String(testimonials.length).padStart(2, "0")}</span>
            </motion.div>

            {/* Stacked avatar previews */}
            <motion.div
                className="absolute top-10 left-10 flex -space-x-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ delay: 0.6 }}
            >
                {testimonials.map((t, i) => (
                    <motion.div
                        key={i}
                        className={`w-8 h-8 rounded-full border-2 border-background overflow-hidden transition-all duration-500 shadow-sm ${i === activeIndex ? "ring-2 ring-secondary ring-offset-2 ring-offset-background scale-110" : "grayscale opacity-40 hover:opacity-100 hover:grayscale-0"
                            }`}
                    >
                        <img src={t.avatar || "/placeholder.svg"} alt={t.author} className="w-full h-full object-cover" />
                    </motion.div>
                ))}
            </motion.div>

            {/* Main content */}
            <div className="relative pt-8">
                <AnimatePresence mode="wait">
                    <motion.blockquote
                        key={activeIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 0.2 } }}
                        className="text-2xl md:text-3xl font-medium leading-tight tracking-tight text-foreground/90 italic"
                    >
                        &ldquo;<SplitText text={currentTestimonial.quote} />&rdquo;
                    </motion.blockquote>
                </AnimatePresence>

                {/* Author info */}
                <motion.div className="mt-16 relative" layout>
                    <div className="flex items-center gap-6">
                        <div className="relative w-16 h-16">
                            <motion.div
                                className="absolute -inset-2 rounded-full border border-secondary/30"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            />
                            {testimonials.map((t, i) => (
                                <motion.img
                                    key={t.avatar}
                                    src={t.avatar}
                                    alt={t.author}
                                    className="absolute inset-0 w-16 h-16 rounded-full object-cover shadow-inner"
                                    animate={{
                                        opacity: i === activeIndex ? 1 : 0,
                                        zIndex: i === activeIndex ? 1 : 0,
                                        scale: i === activeIndex ? 1 : 0.8,
                                    }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                />
                            ))}
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                className="relative pl-6"
                                initial={{ opacity: 0, x: -15 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 15 }}
                                transition={{ duration: 0.3 }}
                            >
                                <motion.div
                                    className="absolute left-0 top-0 bottom-0 w-1 bg-secondary rounded-full"
                                    initial={{ scaleY: 0 }}
                                    animate={{ scaleY: 1 }}
                                    transition={{ duration: 0.4, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                                    style={{ originY: 0 }}
                                />
                                <span className="block text-lg font-bold text-foreground tracking-tight">
                                    {currentTestimonial.author}
                                </span>
                                <span className="block text-xs text-secondary/80 mt-1 font-mono uppercase tracking-[0.2em] font-semibold">
                                    {currentTestimonial.role} — {currentTestimonial.company}
                                </span>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </motion.div>

                {/* Progress bar */}
                <div className="mt-20 h-1 bg-border/20 relative overflow-hidden rounded-full">
                    <motion.div
                        className="absolute inset-y-0 left-0 bg-secondary"
                        initial={{ width: "0%" }}
                        animate={{ width: `${((activeIndex + 1) / testimonials.length) * 100}%` }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    />
                </div>
            </div>

            {/* Keyboard hint */}
            <motion.div
                className="absolute bottom-10 right-12 flex items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 0.6 : 0.3 }}
                transition={{ duration: 0.3 }}
            >
                <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-mono font-bold">Click to interact</span>
            </motion.div>
        </div>
    )
}
