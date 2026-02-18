import { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { industries } from "@/data/industries";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import InteractiveBentoGallery from "@/components/blocks/interactive-bento-gallery";
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials";
import IndustryHero from "@/components/ui/industry-hero";
import { Badge } from "@/components/ui/badge";

const IndustryDetail = () => {
    const { id } = useParams<{ id: string }>();
    const industry = industries.find((i) => i.id === id);

    useEffect(() => {
        if (industry) {
            document.title = industry.seo.title;
        }
    }, [industry]);

    if (!industry) {
        return <Navigate to="/industries" replace />;
    }

    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-secondary/30">
            <Navbar />
            <main>
                <IndustryHero
                    backgroundImage={industry.image}
                    title={industry.title}
                    description={industry.shortDescription}
                />

                <div className="container mx-auto px-4 md:px-6 lg:px-8 py-20 max-w-7xl">
                    <Link
                        to="/industries"
                        className="inline-flex items-center text-muted-foreground hover:text-secondary mb-12 transition-colors group"
                    >
                        <div className="p-2 rounded-full bg-secondary/10 group-hover:bg-secondary/20 mr-3 transition-colors">
                            <ArrowLeft className="h-4 w-4" />
                        </div>
                        <span className="font-medium">Back to Industries</span>
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                        {/* Main Content */}
                        <div className="lg:col-span-8 space-y-20">
                            {/* Overview Section */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="space-y-8"
                            >
                                <div>
                                    <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 mb-6">
                                        Overview
                                    </h2>
                                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                                        {industry.longDescription}
                                    </p>
                                </div>

                                {industry.contentSections.map((section, index) => (
                                    <div key={index} className="space-y-4 pt-8 border-t border-border/40">
                                        <h3 className="text-2xl font-semibold text-foreground tracking-tight">{section.heading}</h3>
                                        <p className="text-muted-foreground leading-loose text-lg">
                                            {section.text}
                                        </p>
                                    </div>
                                ))}
                            </motion.div>

                            {/* Technical Specifications Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm shadow-xl"
                            >
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-secondary/20" />
                                <div className="p-8 md:p-10">
                                    <div className="flex items-center gap-3 mb-8">
                                        <div className="p-2.5 rounded-lg bg-secondary/10 text-secondary">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-settings-2"><path d="M20 7h-9" /><path d="M14 17H5" /><circle cx="17" cy="17" r="3" /><circle cx="7" cy="7" r="3" /></svg>
                                        </div>
                                        <h3 className="text-2xl font-bold">Technical Specifications</h3>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                                        {industry.tableData.map((row, index) => (
                                            <div key={index} className="flex flex-col border-b border-border/40 pb-4 last:border-0 last:pb-0">
                                                <span className="text-sm font-medium text-muted-foreground mb-1 uppercase tracking-wider">{row.feature}</span>
                                                <span className="text-lg font-semibold text-foreground">{row.specification}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-4 space-y-10">
                            {/* CTA Card */}
                            <div className="bg-gradient-to-br from-secondary/90 to-secondary text-primary-foreground p-8 rounded-2xl shadow-lg relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-8 opacity-10 transform group-hover:scale-110 transition-transform duration-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
                                </div>
                                <h3 className="text-2xl font-bold mb-4 relative z-10">Need a Custom Solution?</h3>
                                <p className="text-primary-foreground/90 mb-8 leading-relaxed relative z-10 font-medium">
                                    Our engineering team is ready to analyze your specific requirements and provide a detailed quote.
                                </p>
                                <Button asChild className="w-full bg-white text-secondary hover:bg-white/90 font-bold border-0 shadow-sm relative z-10 h-12 text-base">
                                    <Link to="/contact">Get a Quote</Link>
                                </Button>
                            </div>

                            {/* FAQ Accordion */}
                            <div className="bg-card/30 rounded-2xl border border-border/50 p-6 md:p-8">
                                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                    <span className="text-secondary">#</span> Common Inquiries
                                </h3>
                                <div className="space-y-4">
                                    {industry.aeoUserQuestions.map((qa, index) => (
                                        <details key={index} className="group [&_summary::-webkit-details-marker]:hidden">
                                            <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-muted/50 p-4 font-medium text-foreground transition duration-300 hover:bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary/50">
                                                <span className="text-sm font-semibold">{qa.question}</span>
                                                <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                                    </svg>
                                                </span>
                                            </summary>
                                            <div className="mt-4 px-4 pb-2 leading-relaxed text-muted-foreground text-sm">
                                                {qa.answer}
                                            </div>
                                        </details>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Gallery Section */}
                <section className="py-24 bg-muted/20 border-t border-border/40 relative">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none" />
                    <InteractiveBentoGallery
                        mediaItems={industry.galleryItems}
                        title={`${industry.title} Showcase`}
                        description={`Explore our precision-engineered solutions and manufacturing excellence in the ${industry.title} sector.`}
                    />
                </section>

                {/* Testimonials Section */}
                <section className="py-32 bg-background overflow-hidden relative">
                    <div className="container mx-auto px-4 text-center mb-16 relative z-10">
                        <Badge variant="outline" className="mb-4 px-4 py-1 border-secondary/30 text-secondary bg-secondary/5 backdrop-blur-sm">Testimonials</Badge>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Engineering Confidence</h2>
                        <div className="h-1.5 w-24 bg-gradient-to-r from-secondary to-secondary/50 mx-auto rounded-full" />
                        <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
                            Global industry leaders trust Brandbase for high-precision moulding and uncompromising reliability. Hear from our partners.
                        </p>
                    </div>
                    <div className="relative">
                        <StaggerTestimonials testimonials={industry.testimonials} />
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default IndustryDetail;
