"use client"

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { TestimonialData } from "@/data/industries";

const SQRT_5000 = Math.sqrt(5000);

interface TestimonialCardProps {
    position: number;
    testimonial: TestimonialData & { tempId: number };
    handleMove: (steps: number) => void;
    cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
    position,
    testimonial,
    handleMove,
    cardSize
}) => {
    const isCenter = position === 0;

    return (
        <div
            onClick={() => handleMove(position)}
            className={cn(
                "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out",
                isCenter
                    ? "z-10 bg-secondary text-secondary-foreground border-secondary"
                    : "z-0 bg-card text-card-foreground border-border hover:border-secondary/50"
            )}
            style={{
                width: cardSize,
                height: cardSize,
                clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
                transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
                boxShadow: isCenter ? "0px 8px 0px 4px hsl(var(--border))" : "0px 0px 0px 0px transparent"
            }}
        >
            <span
                className="absolute block origin-top-right rotate-45 bg-border"
                style={{
                    right: -2,
                    top: 48,
                    width: SQRT_5000,
                    height: 2
                }}
            />
            <img
                src={testimonial.avatar}
                alt={testimonial.author}
                className="mb-4 h-14 w-12 bg-muted object-cover object-top"
                style={{
                    boxShadow: "3px 3px 0px hsl(var(--background))"
                }}
            />
            <h3 className={cn(
                "text-base sm:text-lg font-medium leading-tight",
                isCenter ? "text-secondary-foreground" : "text-foreground"
            )}>
                "{testimonial.quote}"
            </h3>
            <div className={cn(
                "absolute bottom-8 left-8 right-8 mt-2",
                isCenter ? "text-secondary-foreground/80" : "text-muted-foreground"
            )}>
                <p className="text-sm font-bold">- {testimonial.author}</p>
                <p className="text-xs italic opacity-80">{testimonial.role} @ {testimonial.company}</p>
            </div>
        </div>
    );
};

interface StaggerTestimonialsProps {
    testimonials: TestimonialData[];
}

export const StaggerTestimonials: React.FC<StaggerTestimonialsProps> = ({ testimonials }) => {
    const [cardSize, setCardSize] = useState(365);
    // Add tempId for keys as items move
    const [testimonialsList, setTestimonialsList] = useState(
        testimonials.map((t, i) => ({ ...t, tempId: i }))
    );

    // Synchronize when the testimonials prop changes (e.g., industry change)
    useEffect(() => {
        setTestimonialsList(testimonials.map((t, i) => ({ ...t, tempId: i })));
    }, [testimonials]);

    const handleMove = (steps: number) => {
        const newList = [...testimonialsList];
        if (steps > 0) {
            for (let i = steps; i > 0; i--) {
                const item = newList.shift();
                if (!item) return;
                newList.push({ ...item, tempId: Math.random() });
            }
        } else {
            for (let i = steps; i < 0; i++) {
                const item = newList.pop();
                if (!item) return;
                newList.unshift({ ...item, tempId: Math.random() });
            }
        }
        setTestimonialsList(newList);
    };

    useEffect(() => {
        const updateSize = () => {
            const { matches } = window.matchMedia("(min-width: 640px)");
            setCardSize(matches ? 365 : 290);
        };

        updateSize();
        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    if (!testimonials || testimonials.length === 0) return null;

    return (
        <div
            className="relative w-full overflow-hidden bg-muted/5 py-12"
            style={{ height: 600 }}
        >
            <div className="relative h-full w-full max-w-7xl mx-auto">
                {testimonialsList.map((testimonial, index) => {
                    const position = testimonialsList.length % 2
                        ? index - (testimonialsList.length - 1) / 2
                        : index - testimonialsList.length / 2;
                    return (
                        <TestimonialCard
                            key={testimonial.tempId}
                            testimonial={testimonial as any}
                            handleMove={handleMove}
                            position={position}
                            cardSize={cardSize}
                        />
                    );
                })}
            </div>

            <div className="absolute bottom-12 left-1/2 flex -translate-x-1/2 gap-4 z-20">
                <button
                    onClick={(e) => { e.stopPropagation(); handleMove(-1); }}
                    className={cn(
                        "flex h-12 w-12 items-center justify-center text-xl transition-all shadow-md",
                        "bg-background border-2 border-border hover:bg-secondary hover:text-secondary-foreground hover:scale-110",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary active:scale-95"
                    )}
                    aria-label="Previous testimonial"
                >
                    <ChevronLeft />
                </button>
                <button
                    onClick={(e) => { e.stopPropagation(); handleMove(1); }}
                    className={cn(
                        "flex h-12 w-12 items-center justify-center text-xl transition-all shadow-md",
                        "bg-background border-2 border-border hover:bg-secondary hover:text-secondary-foreground hover:scale-110",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary active:scale-95"
                    )}
                    aria-label="Next testimonial"
                >
                    <ChevronRight />
                </button>
            </div>
        </div>
    );
};
