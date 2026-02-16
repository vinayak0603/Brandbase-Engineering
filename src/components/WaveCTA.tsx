'use client';
import React from 'react';
import { WavePath } from "@/components/ui/wave-path";
import { cn } from '@/lib/utils';
import { Link } from "react-router-dom";

export default function WaveCTA() {
    return (
        <div className="relative w-full flex min-h-[60vh] flex-col items-center justify-center bg-background overflow-hidden py-20">
            <div
                aria-hidden="true"
                className={cn(
                    'pointer-events-none absolute -top-10 left-1/2 size-full -translate-x-1/2 rounded-full',
                    'bg-[radial-gradient(ellipse_at_center,theme(colors.primary.DEFAULT/0.1),transparent_50%)]',
                    'blur-[30px]',
                )}
            />

            {/* Top Wave */}
            <div className="absolute top-0 left-0 right-0 w-full">
                <WavePath orientation="horizontal" className="text-primary w-full" />
            </div>

            {/* Bottom Wave */}
            <div className="absolute bottom-0 left-0 right-0 w-full">
                <WavePath orientation="horizontal" className="text-primary w-full" />
            </div>

            {/* Left Wave */}
            <div className="absolute top-0 bottom-0 left-0 h-full">
                <WavePath orientation="vertical" className="text-primary h-full" />
            </div>

            {/* Right Wave */}
            <div className="absolute top-0 bottom-0 right-0 h-full">
                <WavePath orientation="vertical" className="text-primary h-full" />
            </div>

            <div className="flex w-[85vw] md:w-[70vw] flex-col items-center z-10">

                <div className="flex w-full flex-col items-center text-center">
                    <div className="flex flex-col items-center">
                        <p className="text-muted-foreground mt-2 text-sm font-medium tracking-wide uppercase">Precision & Innovation</p>
                        <h2 className="text-foreground mt-4 max-w-3xl text-3xl md:text-5xl font-bold leading-tight">
                            Crafting the future with precision. <span className="text-primary">Let our expertise</span> mould your vision into reality.
                        </h2>

                        <div className="mt-8">
                            <Link to="/contact" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 py-2">
                                Get In Touch
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
