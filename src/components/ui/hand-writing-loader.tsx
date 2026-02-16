"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface HandWrittenLoaderProps {
    title?: string;
    subtitle?: string;
    onComplete?: () => void;
    className?: string;
}

export function HandWrittenLoader({
    title = "Brandbase Engineering",
    subtitle = "Precision Plastic Injection Moulding Solutions",
    onComplete,
    className,
}: HandWrittenLoaderProps) {
    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { duration: 2.5, ease: [0.43, 0.13, 0.23, 0.96] },
                opacity: { duration: 0.5 },
                onComplete: onComplete
            },
        },
    };

    return (
        <div className={cn("fixed inset-0 z-50 flex items-center justify-center bg-background", className)}>
            <div className="relative w-full max-w-4xl mx-auto py-24 flex flex-col items-center justify-center">
                <div className="absolute inset-0 pointer-events-none">
                    <motion.svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 1200 600"
                        initial="hidden"
                        animate="visible"
                        className="w-full h-full text-blue-900 dark:text-primary/20"
                    >
                        <title>Loader Background</title>
                        <motion.path
                            d="M 1050 100 
                               C 1250 300, 1150 550, 600 560
                               C 150 560, 50 400, 50 300
                               C 50 100, 350 40, 600 40
                               C 900 40, 1050 150, 1050 150"
                            fill="none"
                            strokeWidth="12"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            variants={draw}
                            className="opacity-100"
                        />
                    </motion.svg>
                </div>
                <div className="relative text-center z-10 flex flex-col items-center justify-center px-4">
                    <motion.h1
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tighter"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        {title}
                    </motion.h1>
                    {subtitle && (
                        <motion.p
                            className="text-lg md:text-xl text-muted-foreground mt-4 max-w-2xl"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 0.8 }}
                        >
                            {subtitle}
                        </motion.p>
                    )}
                </div>
            </div>
        </div>
    );
}
