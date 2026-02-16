"use client"

import { DynamicFrameLayout, Frame } from "@/components/ui/dynamic-frame-layout"

const demoFrames: Frame[] = [
    {
        id: 1,
        title: "Injection Moulding",
        video: "https://www.pexels.com/download/video/4177966/",
        defaultPos: { x: 0, y: 0, w: 6, h: 6 },
        mediaSize: 1,
        isHovered: false
    },
    {
        id: 2,
        title: "Contract Manufacturing",
        video: "https://www.pexels.com/download/video/30283093/",
        defaultPos: { x: 6, y: 0, w: 6, h: 6 },
        mediaSize: 1,
        isHovered: false,
    },
    {
        id: 3,
        title: "Secondary Operations",
        video: "https://www.pexels.com/download/video/4468789/",
        defaultPos: { x: 0, y: 6, w: 6, h: 6 },
        mediaSize: 1,
        isHovered: false,
    },
    {
        id: 4,
        title: "Precision Tooling",
        video: "https://www.pexels.com/download/video/9244501/",
        defaultPos: { x: 6, y: 6, w: 6, h: 6 },
        mediaSize: 1,
        isHovered: false,
    },
]

export default function DynamicFrameSection() {
    return (
        <div className="w-full h-screen bg-background flex flex-col">
            <div className="w-full bg-primary py-6 text-center border-b border-white">
                <h2 className="text-3xl md:text-4xl font-light text-white font-serif tracking-wide">
                    Services We Offer
                </h2>
            </div>
            <div className="flex-1 w-full min-h-0 relative">
                <DynamicFrameLayout
                    frames={demoFrames}
                    className="w-full h-full bg-neutral-800/50"
                    hoverSize={8}
                    gapSize={1}
                    rows={2}
                    cols={2}
                    showFrames={false}
                />
            </div>
        </div>
    )
}
