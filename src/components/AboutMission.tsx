import React from "react";
import { motion } from "framer-motion";

const AboutMission = () => {
    return (
        <section className="py-24 px-4 bg-primary text-white overflow-hidden">
            <div className="container mx-auto">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Flowing text layout mimicking the "Business Intelligence..." reference */}
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.1] tracking-tight">
                            <span>Precision Engineering</span>
                            <span className="inline-block mx-4 align-middle">
                                {/* Placeholder for an integrated image - using a manufacturing related abstract image */}
                                <img
                                    src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?q=80&w=300&auto=format&fit=crop"
                                    alt="Precision"
                                    className="w-32 h-20 md:w-48 md:h-28 object-cover rounded-full border-2 border-white/20 inline-block grayscale hover:grayscale-0 transition-all duration-500"
                                />
                            </span>
                            <br className="hidden md:block" />
                            <span>built around</span>
                            <br className="hidden md:block" />
                            <span className="text-secondary italic"> your needs.</span>
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 items-start">
                            <div className="relative">
                                {/* Additional visual element - maybe a graph or tech drawing lookalike */}
                                <div className="bg-white/5 rounded-3xl p-6 border border-white/10 backdrop-blur-sm">
                                    <div className="flex justify-between items-end h-40 gap-2">
                                        <div className="w-full bg-secondary/20 h-1/3 rounded-t-md"></div>
                                        <div className="w-full bg-secondary/40 h-2/3 rounded-t-md"></div>
                                        <div className="w-full bg-secondary/60 h-1/2 rounded-t-md"></div>
                                        <div className="w-full bg-secondary h-full rounded-t-md relative group">
                                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-primary text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                                Growth
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-white/40 text-xs mt-4 font-mono">EFFICIENCY METRICS</p>
                                </div>
                            </div>

                            <div>
                                <p className="text-xl md:text-2xl font-light leading-relaxed text-white/80">
                                    Brandbase Engineering is the central hub for your manufacturing needs, uniting traditional craftsmanship and modern technology to drive <span className="text-white font-semibold decoration-secondary underline decoration-2 underline-offset-4">business outcomes.</span>
                                </p>

                                <div className="mt-8 flex gap-4">
                                    <div className="px-4 py-2 rounded-full border border-white/20 text-sm hover:bg-white hover:text-primary transition-colors cursor-default">
                                        Zero Defects
                                    </div>
                                    <div className="px-4 py-2 rounded-full border border-white/20 text-sm hover:bg-white hover:text-primary transition-colors cursor-default">
                                        JIT Delivery
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutMission;
