'use client';
import React, { useRef, useEffect, useCallback } from 'react';
import { cn } from '@/lib/utils';

interface WavePathProps extends React.ComponentProps<'div'> {
    orientation?: 'horizontal' | 'vertical';
}

export function WavePath({ className, orientation = 'horizontal', ...props }: WavePathProps) {
    const path = useRef<SVGPathElement>(null);
    const progress = useRef(0);
    const x = useRef(0.5);
    const time = useRef(Math.PI / 2);
    const reqId = useRef<number | null>(null);

    const setPath = useCallback((prog: number) => {
        const parentRect = path.current?.parentElement?.getBoundingClientRect();

        if (path.current && parentRect) {
            if (orientation === 'horizontal') {
                const width = parentRect.width;
                path.current.setAttributeNS(
                    null,
                    'd',
                    `M0 50 Q${width * x.current} ${50 + prog}, ${width} 50`,
                );
            } else {
                const height = parentRect.height;
                path.current.setAttributeNS(
                    null,
                    'd',
                    `M50 0 Q${50 + prog} ${height * x.current}, 50 ${height}`,
                );
            }
        }
    }, [orientation]);

    useEffect(() => {
        setPath(progress.current);
        return () => {
            if (reqId.current) cancelAnimationFrame(reqId.current);
        };
    }, [setPath]);

    const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a;

    const manageMouseEnter = () => {
        if (reqId.current) {
            cancelAnimationFrame(reqId.current);
            resetAnimation();
        }
    };

    const manageMouseMove = (e: React.MouseEvent) => {
        const { movementY, movementX, clientX, clientY } = e;
        if (path.current) {
            const pathBound = path.current.getBoundingClientRect();

            if (orientation === 'horizontal') {
                x.current = (clientX - pathBound.left) / pathBound.width;
                progress.current += movementY;
            } else {
                x.current = (clientY - pathBound.top) / pathBound.height;
                progress.current += movementX;
            }
            setPath(progress.current);
        }
    };

    const manageMouseLeave = () => {
        animateOut();
    };

    const animateOut = () => {
        const newProgress = progress.current * Math.sin(time.current);
        progress.current = lerp(progress.current, 0, 0.025);
        time.current += 0.2;
        setPath(newProgress);
        if (Math.abs(progress.current) > 0.75) {
            reqId.current = requestAnimationFrame(animateOut);
        } else {
            resetAnimation();
        }
    };

    const resetAnimation = () => {
        time.current = Math.PI / 2;
        progress.current = 0;
    };

    const isHorizontal = orientation === 'horizontal';

    return (
        <div className={cn('relative', isHorizontal ? 'h-12 w-full' : 'w-12 h-full', className)} {...props}>
            <div
                onMouseEnter={manageMouseEnter}
                onMouseMove={manageMouseMove}
                onMouseLeave={manageMouseLeave}
                className={cn(
                    "absolute z-10 cursor-pointer",
                    isHorizontal ? "-top-8 h-24 w-full" : "-left-8 w-24 h-full"
                )}
            />
            <svg className={cn(
                "absolute pointer-events-none",
                isHorizontal ? "-top-[25px] h-[100px] w-full" : "-left-[25px] w-[100px] h-full"
            )}>
                <path ref={path} className="fill-none stroke-current" strokeWidth={2} />
            </svg>
        </div>
    );
}
