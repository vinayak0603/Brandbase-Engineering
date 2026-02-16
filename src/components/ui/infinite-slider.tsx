"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimationFrame, useMotionValue, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface InfiniteSliderProps {
    children: React.ReactNode;
    gap?: number;
    reverse?: boolean;
    speed?: number;
    speedOnHover?: number;
    className?: string;
}

export function InfiniteSlider({
    children,
    gap = 40,
    reverse = false,
    speed = 50,
    speedOnHover,
    className,
}: InfiniteSliderProps) {
    const [contentWidth, setContentWidth] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);

    useEffect(() => {
        if (contentRef.current) {
            setContentWidth(contentRef.current.offsetWidth);
        }
    }, [children]);

    useAnimationFrame((t, delta) => {
        if (contentWidth === 0) return;

        let moveSpeed = speed;
        // Logic for speedOnHover could be added if needed, but keeping it simple for now

        const moveBy = (moveSpeed * delta) / 1000;
        let newX = x.get() + (reverse ? moveBy : -moveBy);

        // Reset loop
        if (reverse) {
            if (newX >= 0) newX = -contentWidth - gap;
        } else {
            if (newX <= -(contentWidth + gap)) newX = 0;
        }

        x.set(newX);
    });

    return (
        <div
            ref={containerRef}
            className={cn("overflow-hidden whitespace-nowrap", className)}
        >
            <motion.div
                className="flex"
                style={{ x, gap: `${gap}px` }}
            >
                <div ref={contentRef} className="flex shrink-0">
                    {children}
                </div>
                {/* Duplicate for infinite effect */}
                <div className="flex shrink-0">
                    {children}
                </div>
                <div className="flex shrink-0">
                    {children}
                </div>
            </motion.div>
        </div>
    );
}
