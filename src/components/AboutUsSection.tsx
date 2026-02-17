import { ShieldCheck } from "lucide-react";
import gallery6 from "@/assets/gallery-6.jpg";

export default function AboutUsSection() {
    return (
        <section className="w-full py-24 px-6 bg-white overflow-hidden flex items-center justify-center">
            <div className="container max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">

                {/* Left Column: Content */}
                <div className="flex-1 max-w-xl space-y-8">
                    {/* Teal Accent Line */}
                    <div className="w-20 h-2 bg-[#2E6877] rounded-sm"></div>

                    {/* Title */}
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] leading-tight">
                        Our Legacy of <br /> Precision
                    </h2>

                    {/* Paragraph */}
                    <p className="text-[#555] text-lg leading-relaxed font-normal">
                        At Brandbase Engineering, we don't just manufacture components; we materialise innovation.
                        With a legacy built on microscopic precision and macroscopic reliability,
                        we bridge the gap between complex design and flawless industrial execution.
                    </p>

                    {/* Sub-Feature Section (Image on Left, Text on Right) */}
                    <div className="flex items-center gap-6 mt-12">
                        {/* Sub-Image (Rounded Square) */}
                        <div className="shrink-0">
                            <img
                                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=200&auto=format&fit=crop"
                                alt="Quality Assurance"
                                className="w-28 h-28 rounded-3xl object-cover shadow-sm"
                            />
                        </div>

                        {/* Sub-Text */}
                        <div>
                            <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">
                                Uncompromising Quality <br /> Assurance
                            </h3>
                            <p className="text-[#555] text-sm leading-snug pr-4">
                                Rigorous multi-stage inspection protocols and state-of-the-art measuring instruments ensure zero-defect output.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Column: Large Image */}
                <div className="flex-1 relative w-full flex justify-end">
                    <div className="relative w-full max-w-[600px] h-[500px]">
                        {/* We use a specific rounded shape here to match the reference 'superellipse' look */}
                        <img
                            src={gallery6}
                            alt="Precision Manufacturing"
                            className="w-full h-full object-cover rounded-[3rem] shadow-none"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}
