import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

export interface SubService {
    title: string;
    description: string;
    icon?: LucideIcon;
}

interface ServiceDetailSectionProps {
    id: string;
    title: string;
    description: string;
    image: string;
    subServices: SubService[];
    reversed?: boolean;
}

export function ServiceDetailSection({
    id,
    title,
    description,
    image,
    subServices,
    reversed = false,
}: ServiceDetailSectionProps) {
    return (
        <section id={id} className="py-24 bg-background overflow-hidden relative">
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
            <div className="container mx-auto px-4 relative z-10">
                <div className={`flex flex-col ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 lg:gap-20 items-center`}>

                    {/* Visual Side */}
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: reversed ? 50 : -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl group"
                        >
                            <img
                                src={image}
                                alt={title}
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
                            <div className="absolute bottom-6 left-6 right-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                <h3 className="text-3xl font-bold text-white mb-2 font-poppins">{title}</h3>
                                <div className="h-1 w-20 bg-primary rounded-full" />
                            </div>
                        </motion.div>
                    </div>

                    {/* Content Side */}
                    <div className="w-full lg:w-1/2 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-poppins tracking-tight">{title}</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">{description}</p>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {subServices.map((sub, idx) => (
                                <motion.div
                                    key={sub.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.3 + (idx * 0.1) }}
                                    className="bg-card/50 backdrop-blur-sm border border-border/50 p-5 rounded-xl hover:bg-card hover:border-primary/30 transition-all duration-300 group cursor-default"
                                >
                                    <div className="flex items-start gap-4">
                                        {sub.icon && (
                                            <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                                                <sub.icon size={20} strokeWidth={1.5} />
                                            </div>
                                        )}
                                        <div>
                                            <h4 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{sub.title}</h4>
                                            <p className="text-sm text-muted-foreground leading-snug">{sub.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
