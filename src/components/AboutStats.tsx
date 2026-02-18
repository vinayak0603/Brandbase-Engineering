import React from "react";
import { motion } from "framer-motion";

const AboutStats = () => {
    return (
        <section className="py-24 px-4 bg-background">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
                    {/* Card 1: Founding Year (Tall Left) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="rounded-[2.5rem] p-10 flex flex-col justify-between min-h-[500px] relative overflow-hidden group shadow-2xl"
                    >
                        {/* Background Image & Overlay */}
                        <div className="absolute inset-0 z-0">
                            <img
                                src="https://ik.imagekit.io/vinayak06/tall-skyscraper-reflects-futuristic-city-skyline-dusk-generated-by-ai.jpg"
                                alt="Founding Year Background"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-secondary/80 mix-blend-multiply"></div>
                        </div>

                        {/* Decorative blob */}
                        <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700 z-10"></div>

                        <div className="relative z-10">
                            <h3 className="text-8xl md:text-9xl font-bold text-white tracking-tighter">
                                2021
                            </h3>
                        </div>

                        <div className="relative z-10 mt-auto">
                            <p className="text-white/90 font-medium text-lg max-w-xs">
                                Founded with a vision to redefine precision engineering.
                            </p>
                        </div>
                    </motion.div>

                    <div className="flex flex-col gap-6">
                        {/* Card 2: Team/Capacity (Top Right) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="rounded-[2.5rem] p-10 flex flex-col justify-center min-h-[240px] relative overflow-hidden group shadow-xl"
                        >
                            {/* Background Image & Overlay */}
                            <div className="absolute inset-0 z-0">
                                <img
                                    src="https://ik.imagekit.io/vinayak06/startup-innovating-circular-economy-using-3d-printing-recycle-materials-create-new-ecofriendly-products.jpg"
                                    alt="Capacity Background"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
                            </div>

                            <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-700 z-10"></div>

                            <div className="relative z-10 text-right">
                                <h3 className="text-6xl md:text-7xl font-bold text-white mb-2">
                                    50M+
                                </h3>
                                <p className="text-white/80 font-medium text-lg">
                                    Components Delivered Globally
                                </p>
                            </div>
                        </motion.div>

                        {/* Card 3: Quality (Bottom Right) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="rounded-[2.5rem] p-10 flex flex-col justify-end min-h-[240px] relative overflow-hidden group shadow-xl"
                        >
                            {/* Background Image & Overlay */}
                            <div className="absolute inset-0 z-0">
                                <img
                                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop"
                                    alt="Quality Background"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-[#E5F760]/80 mix-blend-multiply"></div>
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-6xl md:text-7xl font-bold text-white mb-2">
                                    100%
                                </h3>
                                <p className="text-white/80 font-medium text-lg">
                                    Quality Assurance & On-Time Delivery
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutStats;
