import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, Phone } from "lucide-react";
import { Button } from "./ui/button";

const AboutCTA = () => {
    return (
        <section className="py-24 px-4 bg-background relative overflow-hidden">
            <div className="container mx-auto">
                <div className="relative rounded-[2.5rem] bg-primary dark:bg-[#b8d630] overflow-hidden min-h-[500px] flex items-center shadow-2xl">
                    {/* Large Background 'B' */}
                    <div
                        className="absolute left-[-5%] bottom-[-10%] text-[40rem] font-black leading-none select-none text-[#1A2E35] opacity-[0.15] mix-blend-multiply pointer-events-none"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                        B
                    </div>

                    {/* Decorative shape on right - mimicking the notch in the reference image (M -> B doesn't have a notch naturally, so we simulate the style) */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-16 h-32 bg-background rounded-l-2xl hidden lg:block"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full p-8 md:p-16 relative z-10 items-center">
                        {/* Left side spacer to push content right if needed, or just let 'B' be the visual interest */}
                        <div className="hidden lg:block">
                            {/* The 'B' visual occupies this space visually */}
                        </div>

                        <div className="flex flex-col gap-8 max-w-2xl">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white tracking-tight leading-[0.9] mb-6">
                                    Get more from <br />
                                    <span className="italic">your engineering partner</span>
                                </h2>

                                <p className="text-white/80 text-lg md:text-xl font-medium max-w-md leading-relaxed">
                                    We get it. You need precision, speed, and reliability. Your team can be up and running with our components in no time.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="flex flex-wrap gap-4"
                            >
                                <Button
                                    size="lg"
                                    className="bg-[#1A2E35] text-white hover:bg-[#1A2E35]/90 border-none rounded-lg font-semibold px-8 h-14 text-base shadow-lg hover:shadow-xl transition-all"
                                >
                                    Start a Project <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>

                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="bg-transparent border-[#1A2E35] text-[#1A2E35] hover:bg-[#1A2E35]/10 rounded-lg font-semibold px-8 h-14 text-base"
                                >
                                    Contact Support
                                </Button>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutCTA;
