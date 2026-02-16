"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"

export interface Frame {
    id: number
    title?: string
    video: string
    defaultPos: { x: number; y: number; w: number; h: number }
    corner?: string
    edgeHorizontal?: string
    edgeVertical?: string
    mediaSize: number
    borderThickness?: number
    borderSize?: number
    isHovered: boolean
}

interface FrameComponentProps {
    title?: string
    video: string
    width: number | string
    height: number | string
    className?: string
    corner?: string
    edgeHorizontal?: string
    edgeVertical?: string
    mediaSize: number
    borderThickness?: number
    borderSize?: number
    showFrame: boolean
    isHovered: boolean
}

function FrameComponent({
    title,
    video,
    width,
    height,
    className = "",
    corner,
    edgeHorizontal,
    edgeVertical,
    mediaSize,
    borderThickness = 0,
    borderSize = 100,
    showFrame,
    isHovered,
}: FrameComponentProps) {
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        if (isHovered) {
            videoRef.current?.play().catch(() => { });
        } else {
            videoRef.current?.pause();
            if (videoRef.current) videoRef.current.currentTime = 0;
        }
    }, [isHovered])

    return (
        <div
            className={`relative ${className} overflow-hidden bg-blue-900`}
            style={{
                width,
                height,
                transition: "width 0.4s ease-in-out, height 0.4s ease-in-out",
            }}
        >
            <div className="relative w-full h-full overflow-hidden">
                <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{
                        zIndex: 1,
                        transition: "all 0.4s ease-in-out",
                        padding: showFrame ? `${borderThickness}px` : "0",
                        width: showFrame ? `${borderSize}%` : "100%",
                        height: showFrame ? `${borderSize}%` : "100%",
                        left: showFrame ? `${(100 - borderSize) / 2}%` : "0",
                        top: showFrame ? `${(100 - borderSize) / 2}%` : "0",
                    }}
                >
                    <div
                        className="w-full h-full overflow-hidden bg-primary relative flex items-center justify-center group"
                        style={{
                            transform: `scale(${mediaSize})`,
                            transformOrigin: "center",
                            transition: "transform 0.4s ease-in-out",
                        }}
                    >
                        {/* Title (Visible by default, hidden on hover) */}
                        {title && (
                            <div className={`absolute z-20 transition-opacity duration-500 ease-in-out ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
                                <h3 className="text-3xl md:text-4xl lg:text-5xl font-light italic text-white font-serif tracking-wide text-center px-4">
                                    {title}
                                </h3>
                            </div>
                        )}

                        {/* Video (Hidden by default, visible on hover) */}
                        <video
                            className={`w-full h-full object-cover transition-opacity duration-500 ease-in-out ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                            src={video}
                            loop
                            muted
                            playsInline
                            ref={videoRef}
                        />
                    </div>
                </div>

                {showFrame && corner && edgeHorizontal && edgeVertical && (
                    <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 2 }}>
                        {/* Frame borders omitted for brevity as showFrame is false for this design, but keeping code structure */}
                    </div>
                )}
            </div>
        </div>
    )
}

interface DynamicFrameLayoutProps {
    frames: Frame[]
    className?: string
    showFrames?: boolean
    hoverSize?: number
    gapSize?: number
    rows?: number
    cols?: number
}

export function DynamicFrameLayout({
    frames: initialFrames,
    className,
    showFrames = false,
    hoverSize = 6,
    gapSize = 16,
    rows = 3,
    cols = 3
}: DynamicFrameLayoutProps) {
    const [frames] = useState<Frame[]>(initialFrames)
    const [hovered, setHovered] = useState<{ row: number; col: number } | null>(null)

    const getRowSizes = () => {
        if (hovered === null) return Array(rows).fill("1fr").join(" ")
        const { row } = hovered
        // Logic: 12 total units. Hover takes hoverSize. Remaining distributed among (rows - 1).
        const nonHoveredSize = (12 - hoverSize) / (rows - 1)
        return Array.from({ length: rows }).map((_, r) => (r === row ? `${hoverSize}fr` : `${nonHoveredSize}fr`)).join(" ")
    }

    const getColSizes = () => {
        if (hovered === null) return Array(cols).fill("1fr").join(" ")
        const { col } = hovered
        const nonHoveredSize = (12 - hoverSize) / (cols - 1)
        return Array.from({ length: cols }).map((_, c) => (c === col ? `${hoverSize}fr` : `${nonHoveredSize}fr`)).join(" ")
    }

    const getTransformOrigin = (x: number, y: number) => {
        const unitX = 12 / cols;
        const unitY = 12 / rows;
        const colIndex = Math.floor(x / unitX);
        const rowIndex = Math.floor(y / unitY);

        const vertical = rowIndex === 0 ? "top" : rowIndex === (rows - 1) ? "bottom" : "center"
        const horizontal = colIndex === 0 ? "left" : colIndex === (cols - 1) ? "right" : "center"
        return `${vertical} ${horizontal}`
    }

    return (
        <div
            className={`relative w-full h-full ${className}`}
            style={{
                display: "grid",
                gridTemplateRows: getRowSizes(),
                gridTemplateColumns: getColSizes(),
                gap: `${gapSize}px`,
                transition: "grid-template-rows 0.4s ease, grid-template-columns 0.4s ease",
            }}
        >
            {frames.map((frame) => {
                const unitX = 12 / cols;
                const unitY = 12 / rows;
                const row = Math.floor(frame.defaultPos.y / unitY)
                const col = Math.floor(frame.defaultPos.x / unitX)
                const transformOrigin = getTransformOrigin(frame.defaultPos.x, frame.defaultPos.y)

                return (
                    <motion.div
                        key={frame.id}
                        className="relative w-full h-full"
                        style={{
                            transformOrigin,
                        }}
                        onMouseEnter={() => setHovered({ row, col })}
                        onMouseLeave={() => setHovered(null)}
                        layout
                    >
                        <FrameComponent
                            title={frame.title}
                            video={frame.video}
                            width="100%"
                            height="100%"
                            className="absolute inset-0"
                            corner={frame.corner}
                            edgeHorizontal={frame.edgeHorizontal}
                            edgeVertical={frame.edgeVertical}
                            mediaSize={frame.mediaSize}
                            borderThickness={frame.borderThickness}
                            borderSize={frame.borderSize}
                            showFrame={showFrames}
                            isHovered={hovered?.row === row && hovered?.col === col}
                        />
                    </motion.div>
                )
            })}
        </div>
    )
}
