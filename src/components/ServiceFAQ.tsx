import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import SectionTitle from "@/components/SectionTitle";

const faqs = [
    {
        question: "What industries do you serve with your injection moulding services?",
        answer: "We serve a wide range of industries including Medical, Automotive, Consumer Electronics, Packaging, and Household Products. Our facility is equipped to handle the specific quality and regulatory requirements of each sector."
    },
    {
        question: "What is your typical lead time for mould manufacturing?",
        answer: "Lead times vary based on complexity. Simple single-cavity moulds can be ready in 2-4 weeks, while complex multi-cavity or high-precision moulds typically take 6-10 weeks. We provide a detailed timeline during the DFM phase."
    },
    {
        question: "Do you offer rapid prototyping services?",
        answer: "Yes, we offer rapid prototyping using 3D printing and soft tooling to validate designs before committing to hard tooling. This ensures form, fit, and function are verified early in the process."
    },
    {
        question: "Can you handle high-volume production runs?",
        answer: "Absolutely. Our facility houses machines ranging from 50 to 1000 tonnes, operating 24/7 to meet high-volume demands. We have scalable processes for millions of parts annually."
    },
    {
        question: "What secondary operations do you provide?",
        answer: "We offer complete end-to-end solutions including Ultrasonic Welding, Pad Printing, Silk Screening, Painting, Chrome Plating, Assembly, and custom Packaging."
    },
    {
        question: "Do you provide design assistance for manufacturability (DFM)?",
        answer: "Yes, every project begins with a comprehensive DFM analysis by our engineering team to optimize part geometry, reduce cost, and ensure consistent quality during production."
    }
];

export function ServiceFAQ() {
    return (
        <section id="faq" className="py-24 bg-muted/30">
            <div className="container mx-auto px-4 max-w-4xl">
                <SectionTitle
                    label="Common Questions"
                    title="Frequently Asked Questions"
                    description="Answers to common queries about our manufacturing processes and capabilities."
                />

                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-left text-lg font-medium text-foreground hover:text-primary transition-colors">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
