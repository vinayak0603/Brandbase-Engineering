import React from "react";
import { motion } from "framer-motion";

const FeedbackSection = () => {
    const cards = [
        {
            id: 1,
            content: (
                <>
                    Take authentic feedbacks from customers of your app.{" "}
                    <span className="bg-[#b3d4fc] px-1">Build a quick list.</span>
                </>
            ),
            image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2670&auto=format&fit=crop", // Diverse group discussing
            alt: "Team discussion",
        },
        {
            id: 2,
            content: (
                <>
                    <span className="bg-[#b3d4fc] px-1">Make quick fixes</span> based on the feedbacks you've received. With a happy smile.
                </>
            ),
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop", // Woman smiling at laptop
            alt: "Smiling developer",
        },
        {
            id: 3,
            content: (
                <>
                    Enjoy more than 10x revenue with <span className="bg-[#b3d4fc] px-1">real-time conversions.</span> Grow your business.
                </>
            ),
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop", // Team collaborating
            alt: "Team collaboration",
        },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4 tracking-tight"
                    >
                        Quality feedbacks for your SaaS products
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-muted-foreground text-lg"
                    >
                        The blocks & components you need
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cards.map((card, index) => (
                        <motion.div
                            key={card.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-[#F8FAFC] rounded-3xl p-8 flex flex-col h-full hover:shadow-lg transition-shadow duration-300"
                        >
                            <p className="text-xl font-medium text-[#0F172A] mb-8 leading-snug">
                                {card.content}
                            </p>
                            <div className="mt-auto rounded-xl overflow-hidden h-64 w-full">
                                <img
                                    src={card.image}
                                    alt={card.alt}
                                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeedbackSection;
