import React from "react";
import { motion } from "framer-motion";
import { Users, Star, Shapes } from "lucide-react";

const values = [
    {
        icon: Users,
        title: "Customer Obsession",
        description:
            "We obsess over the challenges our customers face and create inspired solutions that empower them to differentiate and win.",
    },
    {
        icon: Star,
        title: "Executional Excellence",
        description:
            "We believe results matter and that a disciplined and thoughtful approach leads to phenomenal outcomes.",
    },
    {
        icon: Shapes, // Using 'Shapes' as a proxy for the geometry icon in reference
        title: "Intentional Inclusion",
        description:
            "We cultivate a trusting, transparent environment where everyone has a voice, believing that diversity of thought leads to phenomenal work.",
    },
];

const OurValues = () => {
    return (
        <section className="py-24 px-4 bg-[#F9F9F7]">
            <div className="container mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-6xl font-serif text-primary mb-16 tracking-tight"
                >
                    Our Values
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {values.map((value, index) => (
                        <motion.div
                            key={value.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-start gap-6 h-full"
                        >
                            <div className="p-4 rounded-full bg-secondary/10 text-secondary mb-2">
                                <value.icon className="w-8 h-8" strokeWidth={1.5} />
                            </div>

                            <h3 className="text-2xl font-bold text-primary">{value.title}</h3>

                            <p className="text-muted-foreground leading-relaxed text-lg">
                                {value.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurValues;
