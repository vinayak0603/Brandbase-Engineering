import { motion } from "framer-motion";
import { Play, Maximize2 } from "lucide-react";
import { cn } from "@/lib/utils";

export type GalleryItemType = "image" | "video";

export interface GalleryItemData {
    id: string | number;
    type: GalleryItemType;
    src: string;
    poster?: string; // For videos
    alt?: string;
    title?: string;
    width?: number; // Optional aspect ratio hint
    height?: number;
}

interface GalleryItemProps {
    item: GalleryItemData;
    onClick: (item: GalleryItemData) => void;
    className?: string;
}

export const GalleryItem = ({ item, onClick, className }: GalleryItemProps) => {
    return (
        <div
            className={cn("break-inside-avoid mb-4 relative group rounded-2xl overflow-hidden cursor-zoom-in bg-secondary/10", className)}
            onClick={() => onClick(item)}
        >
            {/* Media Content */}
            <div className="w-full relative">
                {item.type === "video" ? (
                    <div className="relative w-full">
                        <video
                            src={item.src}
                            poster={item.poster}
                            className="w-full h-auto object-cover block"
                            muted
                            loop
                            playsInline
                            onMouseEnter={(e) => e.currentTarget.play()}
                            onMouseLeave={(e) => {
                                e.currentTarget.pause();
                                e.currentTarget.currentTime = 0;
                            }}
                        />
                        <div className="absolute top-2 right-2 bg-black/50 p-2 rounded-full pointer-events-none group-hover:opacity-0 transition-opacity">
                            <Play className="w-4 h-4 text-white fill-current" />
                        </div>
                    </div>
                ) : (
                    <img
                        src={item.src}
                        alt={item.alt || "Gallery item"}
                        className="w-full h-auto object-cover block transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                    />
                )}
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 pointer-events-none">
                <div className="flex justify-end">
                    <button className="bg-white/20 backdrop-blur-md p-2 rounded-full text-white hover:bg-white/40 transition-colors">
                        <Maximize2 className="w-5 h-5" />
                    </button>
                </div>
                {item.title && (
                    <div>
                        <p className="text-white font-semibold text-lg drop-shadow-md">{item.title}</p>
                    </div>
                )}
            </div>
        </div>
    );
};
