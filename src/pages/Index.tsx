import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Cog, Factory, Wrench, Settings, Package, Cpu, Home, Building, Puzzle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import SectionTitle from "@/components/SectionTitle";
import heroHome from "@/assets/hero-home.jpg";
import heroVideo from "@/assets/videos/HeroVideo.mp4";
import AboutUsSection from "@/components/AboutUsSection";
//import tooling1 from "@/assets/tooling-1.jpg";
//import FeedbackSection from "@/components/FeedbackSection";


//industries images
const packaging = "https://images.pexels.com/photos/5025483/pexels-photo-5025483.jpeg";
const consumerElectronics = "https://images.pexels.com/photos/821652/pexels-photo-821652.jpeg";
const householdProducts = "https://images.pexels.com/photos/4202482/pexels-photo-4202482.jpeg";
//import architecturalFurnitureFittings from "@/assets/industries/architectural-furniture-fittings.jpg";
//import toys from "@/assets/industries/toys.jpg";

//import ScrollingServices from "@/components/ScrollingServices";
import DynamicFrameSection from "@/components/DynamicFrameSection";
//import { FeaturesSection } from "@/components/FeaturesSection";

const services = [
  { icon: Cog, title: "Injection Moulding", description: "State-of-the-art injection moulding with machines ranging from 50 to 1000 tonnes, delivering precision parts in high volumes." },
  { icon: Factory, title: "Contract Manufacturing", description: "End-to-end contract manufacturing services from concept to delivery, ensuring quality at every stage." },
  { icon: Wrench, title: "Precision Tooling", description: "In-house tool room with CNC machines and EDM for designing and manufacturing precision moulds." },
  { icon: Settings, title: "Secondary Operations", description: "Value-added services including assembly, painting, printing, ultrasonic welding, and packaging." },
];

const industries = [
  { icon: Package, title: "Packaging", description: "Cosmetic, pharma, food & beverage, and homecare packaging solutions.", image: packaging },
  { icon: Cpu, title: "Consumer Electronics", description: "Precision components for electronic devices and appliances.", image: consumerElectronics },
  { icon: Home, title: "Household Products", description: "Durable and aesthetic products for everyday home use.", image: householdProducts },
  { icon: Building, title: "Architectural & Furniture Fittings", description: "High-quality fittings for architectural and furniture applications.", image: "https://images.unsplash.com/photo-1502005097973-6a7082348e28?q=80&w=1887&auto=format&fit=crop" },
  { icon: Puzzle, title: "Toys", description: "Safe, colorful, and innovative toy components and assemblies.", image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=2070&auto=format&fit=crop" },
];

const partners = [
  { name: "Kalyani", description: "Strategic partner in precision engineering and manufacturing excellence." },
  { name: "I-Kay", description: "Collaboration in innovative plastic solutions and product development." },
  { name: "PPD", description: "Partnership for advanced tooling and design services." },
  { name: "Inaylak", description: "Joint ventures in high-volume contract manufacturing." },
];

import TestimonialSection from "@/components/TestimonialSection";
import { LogoCarouselDemo } from "@/components/Partners/demo";
import WaveCTA from "@/components/WaveCTA";
import DynamicTextSlider from "@/components/ui/dynamic-text-slider";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        {/* Hero */}
        <HeroBanner
          image={heroHome}
          video={heroVideo}
          tagline="Complete Plastic Injection Moulding Solutions"
          title="Crafting Precision, Shaping Innovation"
          subtitle="From concept to completion, we deliver world-class plastic injection moulding solutions with cutting-edge technology and unmatched expertise."
          ctaText="Explore Our Services"
          ctaLink="/services"
          secondaryCtaText="Watch Our Process"
        />





        {/* About Us Section */}
        <AboutUsSection />

        {/* Dynamic Frame Layout Service Showcase 
        <SectionTitle label="Our Process" title="Visualizing Excellence" description="A glimpse into our state-of-the-art manufacturing capabilities." />
        */}
        <div className="my-10">
          <DynamicFrameSection />
        </div>

        {/* Features Section 
         <FeaturesSection />
        */}


        {/* Feedback Section - Replacing old one or keeping as requested? User asked to "use this testimonial section", implying replacement or addition. Will add the NEW one below Industries for better flow, or replace FeedbackSection if that was the intent. Given "use this... on the home page", adding it is safest. */}
        {/* Keeping existing FeedbackSection as it might be different. Adding new TestimonialSection below. */}

        {/* Industries We Serve - Optimized */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <SectionTitle label="Who We Serve" title="Industries We Cater" description="Delivering precision solutions across diverse industry verticals." />

            {/* Row 1: 3 cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center mb-8">
              {industries.slice(0, 3).map((ind, i) => (
                <motion.div
                  key={ind.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group relative overflow-hidden rounded-3xl w-full max-w-[360px] aspect-[17/21] cursor-pointer bg-neutral-900"
                >
                  <img
                    className="h-full w-full absolute inset-0 object-cover transition-transform duration-500 will-change-transform group-hover:scale-110"
                    src={ind.image}
                    alt={ind.title}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                    <div className="h-12 w-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                      <ind.icon className="h-6 w-6 text-white" />
                    </div>
                    <p className="font-bold text-white text-xl mb-2">{ind.title}</p>
                    <p className="font-normal text-sm text-neutral-200 opacity-90">
                      {ind.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Row 2: 2 cards centered */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center max-w-4xl mx-auto">
              {industries.slice(3).map((ind, i) => (
                <motion.div
                  key={ind.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group relative overflow-hidden rounded-3xl w-full max-w-[360px] aspect-[17/21] cursor-pointer bg-neutral-900"
                >
                  <img
                    className="h-full w-full absolute inset-0 object-cover transition-transform duration-500 will-change-transform group-hover:scale-110"
                    src={ind.image}
                    alt={ind.title}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                    <div className="h-12 w-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                      <ind.icon className="h-6 w-6 text-white" />
                    </div>
                    <p className="font-bold text-white text-xl mb-2">{ind.title}</p>
                    <p className="font-normal text-sm text-neutral-200 opacity-90">
                      {ind.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* Dynamic Text Slider */}
        <DynamicTextSlider />

        {/* New Testimonial Section */}
        <TestimonialSection />

        {/* Associate Partners */}
        <LogoCarouselDemo />



        {/* CTA Banner - Replaced with WaveCTA */}
        <WaveCTA />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
